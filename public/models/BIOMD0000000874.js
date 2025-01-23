export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.COMpartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_T;
    state[1] = internal.initial_T_1;
    state[2] = internal.initial_T_2;
    state[3] = internal.initial_V;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["k_1", "k_2", "mu_b", "mu_T", "mu_V", "N", "r", "s", "T_1_init", "T_2_init", "T_init", "T_max", "V_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "k_1", internal, 2.4000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_2", internal, 0.0030000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_b", internal, 0.23999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_T", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_V", internal, 2.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_max", internal, 1500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_T = internal.T_init;
    internal.initial_T_1 = internal.T_1_init;
    internal.initial_T_2 = internal.T_2_init;
    internal.initial_V = internal.V_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const T = state[0];
    const T_1 = state[1];
    const T_2 = state[2];
    const V = state[3];
    dstatedt[0] = 0 + 1 * internal.COMpartment * (internal.s + internal.r * T) - 1 * internal.COMpartment * (internal.mu_T * T + internal.k_1 * V * T + internal.r * T * ((T + T_1 + T_2) / internal.T_max));
    dstatedt[1] = 0 + 1 * internal.COMpartment * (internal.k_1 * V * T) - 1 * internal.COMpartment * (internal.mu_T * T_1 + internal.k_2 * T_1);
    dstatedt[2] = 0 + 1 * internal.COMpartment * (internal.k_2 * T_1) - 1 * internal.COMpartment * (internal.mu_b * T_2);
    dstatedt[3] = 0 + 1 * internal.COMpartment * (internal.N * internal.mu_b * T_2) - 1 * internal.COMpartment * (internal.k_1 * V * T + internal.mu_V * V);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "T", "T_1", "T_2", "V"];
    this.metadata.internalOrder = {COMpartment: null, initial_T: null, initial_T_1: null, initial_T_2: null, initial_V: null, k_1: null, k_2: null, mu_b: null, mu_T: null, mu_V: null, N: null, r: null, s: null, T_1_init: null, T_2_init: null, T_init: null, T_max: null, V_init: null};
    this.metadata.variableOrder = {T: null, T_1: null, T_2: null, V: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
