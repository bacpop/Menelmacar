export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.Inh = 0;
    internal.k3 = 1;
    internal.k5 = 1;
    internal.k7 = 1;
    internal.Ki8 = 1;
    internal.Km1 = 0.10000000000000001;
    internal.Km2 = 0.10000000000000001;
    internal.Km3 = 0.10000000000000001;
    internal.Km4 = 1;
    internal.Km5 = 0.10000000000000001;
    internal.Km6 = 1;
    internal.Km7 = 0.10000000000000001;
    internal.Km8 = 1;
    internal.Vm1 = 1;
    internal.Vm2 = 0.01;
    internal.Vm4 = 0.29999999999999999;
    internal.Vm6 = 0.29999999999999999;
    internal.Vm8 = 0.29999999999999999;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(8).fill(0);
    state[0] = internal.initial_R;
    state[1] = internal.initial_Rin;
    state[2] = internal.initial_x1;
    state[3] = internal.initial_x1p;
    state[4] = internal.initial_x2;
    state[5] = internal.initial_x2p;
    state[6] = internal.initial_x3;
    state[7] = internal.initial_x3p;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["R_init", "Rin_init", "x1_init", "x1p_init", "x2_init", "x2p_init", "x3_init", "x3p_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "R_init", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rin_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x1_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x1p_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x2_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x2p_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x3_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x3p_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_R = internal.R_init;
    internal.initial_Rin = internal.Rin_init;
    internal.initial_x1 = internal.x1_init;
    internal.initial_x1p = internal.x1p_init;
    internal.initial_x2 = internal.x2_init;
    internal.initial_x2p = internal.x2p_init;
    internal.initial_x3 = internal.x3_init;
    internal.initial_x3p = internal.x3p_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const R = state[0];
    const Rin = state[1];
    const x1 = state[2];
    const x1p = state[3];
    const x2 = state[4];
    const x2p = state[5];
    const x3 = state[6];
    const x3p = state[7];
    dstatedt[0] = 0 - 1 * internal.Vm1 * R / (internal.Km1 + R) + 1 * internal.Vm2 * Rin / (internal.Km2 + Rin);
    dstatedt[1] = 0 + 1 * internal.Vm1 * R / (internal.Km1 + R) - 1 * internal.Vm2 * Rin / (internal.Km2 + Rin);
    dstatedt[2] = 0 - 1 * internal.k3 * R * x1 / (internal.Km3 + x1) + 1 * internal.Vm4 * x1p / (internal.Km4 + x1p);
    dstatedt[3] = 0 + 1 * internal.k3 * R * x1 / (internal.Km3 + x1) - 1 * internal.Vm4 * x1p / (internal.Km4 + x1p);
    dstatedt[4] = 0 - 1 * internal.k5 * x1p * x2 / (internal.Km5 + x2) + 1 * internal.Vm6 * x2p / (internal.Km6 + x2p);
    dstatedt[5] = 0 + 1 * internal.k5 * x1p * x2 / (internal.Km5 + x2) - 1 * internal.Vm6 * x2p / (internal.Km6 + x2p);
    dstatedt[6] = 0 - 1 * internal.k7 * x2p * x3 / (internal.Km7 + x3) + 1 * internal.Vm8 * x3p / internal.Km8 / (1 + x3p / internal.Km8 + internal.Inh / internal.Ki8);
    dstatedt[7] = 0 + 1 * internal.k7 * x2p * x3 / (internal.Km7 + x3) - 1 * internal.Vm8 * x3p / internal.Km8 / (1 + x3p / internal.Km8 + internal.Inh / internal.Ki8);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "R", "Rin", "x1", "x1p", "x2", "x2p", "x3", "x3p"];
    this.metadata.internalOrder = {compartment: null, Inh: null, initial_R: null, initial_Rin: null, initial_x1: null, initial_x1p: null, initial_x2: null, initial_x2p: null, initial_x3: null, initial_x3p: null, k3: null, k5: null, k7: null, Ki8: null, Km1: null, Km2: null, Km3: null, Km4: null, Km5: null, Km6: null, Km7: null, Km8: null, R_init: null, Rin_init: null, Vm1: null, Vm2: null, Vm4: null, Vm6: null, Vm8: null, x1_init: null, x1p_init: null, x2_init: null, x2p_init: null, x3_init: null, x3p_init: null};
    this.metadata.variableOrder = {R: null, Rin: null, x1: null, x1p: null, x2: null, x2p: null, x3: null, x3p: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
