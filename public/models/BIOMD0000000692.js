export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.geometry = 5.2360000000000001e-13;
    internal.kb = 1.1519200000000001e-13;
    internal.kf = 1.02102e-11;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(8).fill(0);
    state[0] = internal.initial_Pi;
    state[1] = internal.initial_RasGTP;
    state[2] = internal.initial_RasGTP_minus_NF1;
    state[3] = internal.initial_RasGTP_minus_NF1_star_;
    state[4] = internal.initial_RasGDP_minus_NF1_Pi;
    state[5] = internal.initial_RasGDP_NF1;
    state[6] = internal.initial_RasGDP;
    state[7] = internal.initial_NF1;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["NF1_init", "Pi_init", "RasGDP_init", "RasGDP_minus_NF1_Pi_init", "RasGDP_NF1_init", "RasGTP_init", "RasGTP_minus_NF1_init", "RasGTP_minus_NF1_star__init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "NF1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pi_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RasGDP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RasGDP_minus_NF1_Pi_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RasGDP_NF1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RasGTP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RasGTP_minus_NF1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RasGTP_minus_NF1_star__init", internal, 0, -Infinity, Infinity, false);
    internal.initial_NF1 = internal.NF1_init;
    internal.initial_Pi = internal.Pi_init;
    internal.initial_RasGDP = internal.RasGDP_init;
    internal.initial_RasGDP_minus_NF1_Pi = internal.RasGDP_minus_NF1_Pi_init;
    internal.initial_RasGDP_NF1 = internal.RasGDP_NF1_init;
    internal.initial_RasGTP = internal.RasGTP_init;
    internal.initial_RasGTP_minus_NF1 = internal.RasGTP_minus_NF1_init;
    internal.initial_RasGTP_minus_NF1_star_ = internal.RasGTP_minus_NF1_star__init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Pi = state[0];
    const RasGTP = state[1];
    const RasGTP_minus_NF1 = state[2];
    const RasGTP_minus_NF1_star_ = state[3];
    const RasGDP_minus_NF1_Pi = state[4];
    const RasGDP_NF1 = state[5];
    const RasGDP = state[6];
    const NF1 = state[7];
    dstatedt[7] = 0 + 1 * internal.geometry * ((internal.kf * RasGDP_NF1 - internal.kb * RasGDP * NF1) / internal.geometry) - 1 * internal.geometry * ((internal.kf * RasGTP * NF1 - internal.kb * RasGTP_minus_NF1) / internal.geometry);
    dstatedt[0] = 0 + 1 * internal.geometry * ((internal.kf * RasGDP_minus_NF1_Pi - internal.kb * Pi * RasGDP_NF1) / internal.geometry);
    dstatedt[6] = 0 + 1 * internal.geometry * ((internal.kf * RasGDP_NF1 - internal.kb * RasGDP * NF1) / internal.geometry);
    dstatedt[4] = 0 + 1 * internal.geometry * ((internal.kf * RasGTP_minus_NF1_star_ - internal.kb * RasGDP_minus_NF1_Pi) / internal.geometry) - 1 * internal.geometry * ((internal.kf * RasGDP_minus_NF1_Pi - internal.kb * Pi * RasGDP_NF1) / internal.geometry);
    dstatedt[5] = 0 + 1 * internal.geometry * ((internal.kf * RasGDP_minus_NF1_Pi - internal.kb * Pi * RasGDP_NF1) / internal.geometry) - 1 * internal.geometry * ((internal.kf * RasGDP_NF1 - internal.kb * RasGDP * NF1) / internal.geometry);
    dstatedt[1] = 0 - 1 * internal.geometry * ((internal.kf * RasGTP * NF1 - internal.kb * RasGTP_minus_NF1) / internal.geometry);
    dstatedt[2] = 0 - 1 * internal.geometry * ((internal.kf * RasGTP_minus_NF1 - internal.kb * RasGTP_minus_NF1_star_) / internal.geometry) + 1 * internal.geometry * ((internal.kf * RasGTP * NF1 - internal.kb * RasGTP_minus_NF1) / internal.geometry);
    dstatedt[3] = 0 - 1 * internal.geometry * ((internal.kf * RasGTP_minus_NF1_star_ - internal.kb * RasGDP_minus_NF1_Pi) / internal.geometry) + 1 * internal.geometry * ((internal.kf * RasGTP_minus_NF1 - internal.kb * RasGTP_minus_NF1_star_) / internal.geometry);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Pi", "RasGTP", "RasGTP_minus_NF1", "RasGTP_minus_NF1_star_", "RasGDP_minus_NF1_Pi", "RasGDP_NF1", "RasGDP", "NF1"];
    this.metadata.internalOrder = {geometry: null, initial_NF1: null, initial_Pi: null, initial_RasGDP: null, initial_RasGDP_minus_NF1_Pi: null, initial_RasGDP_NF1: null, initial_RasGTP: null, initial_RasGTP_minus_NF1: null, initial_RasGTP_minus_NF1_star_: null, kb: null, kf: null, NF1_init: null, Pi_init: null, RasGDP_init: null, RasGDP_minus_NF1_Pi_init: null, RasGDP_NF1_init: null, RasGTP_init: null, RasGTP_minus_NF1_init: null, RasGTP_minus_NF1_star__init: null};
    this.metadata.variableOrder = {Pi: null, RasGTP: null, RasGTP_minus_NF1: null, RasGTP_minus_NF1_star_: null, RasGDP_minus_NF1_Pi: null, RasGDP_NF1: null, RasGDP: null, NF1: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
