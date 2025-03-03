export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.delta_1 = Math.log(2) / 7;
    internal.delta_2 = Math.log(2) / 4;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_C;
    state[1] = internal.initial_B;
    state[2] = internal.initial_T;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha_1", "alpha_2", "alpha_3", "B_init", "beta_1", "beta_2", "beta_3", "C_init", "gamma_1", "gamma_2", "T_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha_1", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_2", internal, 0.31, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_3", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_1", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_2", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_3", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_1", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_2", internal, 0.65000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_init", internal, 1, -Infinity, Infinity, false);
    internal.initial_B = internal.B_init;
    internal.initial_C = internal.C_init;
    internal.initial_T = internal.T_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const C = state[0];
    const B = state[1];
    const T = state[2];
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.alpha_2 * C * B * (1 - B / internal.beta_2) * (internal.gamma_1 / (1 + internal.gamma_1 * C))) - 1 * internal.compartment * (internal.delta_1 * B);
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.alpha_1 * C * (1 - C / internal.beta_1)) - 1 * internal.compartment * (internal.gamma_1 / (1 + internal.gamma_1 * C) * C * B + internal.gamma_2 / (1 + internal.gamma_2 * C) * C * T);
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.alpha_3 * C * T * (1 - T / internal.beta_3) * (internal.gamma_2 / (1 + internal.gamma_2 * C))) - 1 * internal.compartment * (internal.delta_2 * T);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "C", "B", "T"];
    this.metadata.internalOrder = {alpha_1: null, alpha_2: null, alpha_3: null, B_init: null, beta_1: null, beta_2: null, beta_3: null, C_init: null, compartment: null, delta_1: null, delta_2: null, gamma_1: null, gamma_2: null, initial_B: null, initial_C: null, initial_T: null, T_init: null};
    this.metadata.variableOrder = {C: null, B: null, T: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
