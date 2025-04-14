export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(6).fill(0);
    state[0] = internal.initial_ATP;
    state[1] = internal.initial_AMP;
    state[2] = internal.initial_ADP;
    state[3] = internal.initial_Pyr;
    state[4] = internal.initial_NADH;
    state[5] = internal.initial_Lac;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["ADP_init", "AMP_init", "ATP_init", "K", "k4", "Km2AMP", "Km2ATP", "Kmapp1", "Kmapp3", "Lac_init", "NADH_init", "Pyr_init", "Vm2", "Vmapp1", "Vmapp3"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "ADP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AMP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ATP_init", internal, 16.300000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K", internal, 71000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km2AMP", internal, 110, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km2ATP", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kmapp1", internal, 700, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kmapp3", internal, 260, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Lac_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NADH_init", internal, 256, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pyr_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vm2", internal, 170, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vmapp1", internal, 2.2999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vmapp3", internal, 65, -Infinity, Infinity, false);
    internal.initial_ADP = internal.ADP_init;
    internal.initial_AMP = internal.AMP_init;
    internal.initial_ATP = internal.ATP_init;
    internal.initial_Lac = internal.Lac_init;
    internal.initial_NADH = internal.NADH_init;
    internal.initial_Pyr = internal.Pyr_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const ATP = state[0];
    const AMP = state[1];
    const ADP = state[2];
    const Pyr = state[3];
    dstatedt[5] = 0;
    dstatedt[2] = 0 + 2 * internal.Vm2 * ATP * AMP / (internal.K + internal.Km2ATP * AMP + internal.Km2AMP * ATP + ATP * AMP) - 1 * internal.Vmapp3 * ADP / (internal.Kmapp3 + ADP);
    dstatedt[1] = 0 + 1 * internal.Vmapp1 * ATP / (internal.Kmapp1 + ATP) - 1 * internal.Vm2 * ATP * AMP / (internal.K + internal.Km2ATP * AMP + internal.Km2AMP * ATP + ATP * AMP);
    dstatedt[0] = 0 - 1 * internal.Vmapp1 * ATP / (internal.Kmapp1 + ATP) - 1 * internal.Vm2 * ATP * AMP / (internal.K + internal.Km2ATP * AMP + internal.Km2AMP * ATP + ATP * AMP) + 1 * internal.Vmapp3 * ADP / (internal.Kmapp3 + ADP);
    dstatedt[4] = 0 - 1 * internal.k4 * Pyr;
    dstatedt[3] = 0 + 1 * internal.Vmapp3 * ADP / (internal.Kmapp3 + ADP) - 1 * internal.k4 * Pyr;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "ATP", "AMP", "ADP", "Pyr", "NADH", "Lac"];
    this.metadata.internalOrder = {ADP_init: null, AMP_init: null, ATP_init: null, compartment: null, initial_ADP: null, initial_AMP: null, initial_ATP: null, initial_Lac: null, initial_NADH: null, initial_Pyr: null, K: null, k4: null, Km2AMP: null, Km2ATP: null, Kmapp1: null, Kmapp3: null, Lac_init: null, NADH_init: null, Pyr_init: null, Vm2: null, Vmapp1: null, Vmapp3: null};
    this.metadata.variableOrder = {ATP: null, AMP: null, ADP: null, Pyr: null, NADH: null, Lac: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
