export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.plasma = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_T;
    state[1] = internal.initial_T_i;
    state[2] = internal.initial_V_I;
    state[3] = internal.initial_V_NI;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["c", "delta", "delta1", "kxk", "lambda", "N", "np", "T_i_init", "T_init", "V_I_init", "V_NI_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "c", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta1", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 3.4300000000000003e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N", internal, 480, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "np", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_i_init", internal, 1675, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_init", internal, 180000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_I_init", internal, 134000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_NI_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_T = internal.T_init;
    internal.initial_T_i = internal.T_i_init;
    internal.initial_V_I = internal.V_I_init;
    internal.initial_V_NI = internal.V_NI_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const T = state[0];
    const T_i = state[1];
    const V_I = state[2];
    const V_NI = state[3];
    dstatedt[0] = 0 + 1 * internal.plasma * (internal.lambda) - 1 * internal.plasma * internal.delta1 * T - 1 * internal.plasma * (internal.kxk * V_I * T);
    dstatedt[1] = 0 + 1 * internal.plasma * (internal.kxk * V_I * T) - 1 * internal.plasma * internal.delta * T_i;
    dstatedt[2] = 0 + 1 * internal.plasma * ((1 - internal.np) * internal.N * internal.delta * T_i) - 1 * internal.plasma * (internal.c * V_I);
    dstatedt[3] = 0 + 1 * internal.plasma * (internal.np * internal.N * internal.delta * T_i) - 1 * internal.plasma * internal.c * V_NI;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "T", "T_i", "V_I", "V_NI"];
    this.metadata.internalOrder = {c: null, delta: null, delta1: null, initial_T: null, initial_T_i: null, initial_V_I: null, initial_V_NI: null, kxk: null, lambda: null, N: null, np: null, plasma: null, T_i_init: null, T_init: null, V_I_init: null, V_NI_init: null};
    this.metadata.variableOrder = {T: null, T_i: null, V_I: null, V_NI: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
