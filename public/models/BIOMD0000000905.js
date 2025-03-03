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
    var state = Array(5).fill(0);
    state[0] = internal.initial_P;
    state[1] = internal.initial_I;
    state[2] = internal.initial_M;
    state[3] = internal.initial_T;
    state[4] = internal.initial_U;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "alpha", "alpha0", "b", "beta", "beta0", "delta_0", "delta_1", "gamma", "I_init", "k1", "M_init", "mu", "n", "n1", "P_init", "Q0", "T_init", "theta_0", "U_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha", internal, 2.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha0", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta0", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_0", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_1", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu", internal, 0.040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n1", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Q0", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "theta_0", internal, 1.2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "U_init", internal, 1, -Infinity, Infinity, false);
    internal.initial_I = internal.I_init;
    internal.initial_M = internal.M_init;
    internal.initial_P = internal.P_init;
    internal.initial_T = internal.T_init;
    internal.initial_U = internal.U_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const P = state[0];
    const I = state[1];
    const M = state[2];
    const T = state[3];
    const U = state[4];
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.mu + internal.b * I * P) - 1 * internal.compartment * (internal.a * I + internal.n * internal.gamma * I * P + internal.n1 * internal.k1 * U * I);
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.alpha * P) - 1 * internal.compartment * (internal.alpha0 * M);
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.beta * P) - 1 * internal.compartment * (internal.gamma * I * P + internal.beta0 * P * P);
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.Q0) - 1 * internal.compartment * (internal.delta_0 * T);
    dstatedt[4] = 0 + 1 * internal.compartment * (internal.theta_0 * T) - 1 * internal.compartment * (internal.delta_1 * U + internal.k1 * U * I);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "P", "I", "M", "T", "U"];
    this.metadata.internalOrder = {a: null, alpha: null, alpha0: null, b: null, beta: null, beta0: null, compartment: null, delta_0: null, delta_1: null, gamma: null, I_init: null, initial_I: null, initial_M: null, initial_P: null, initial_T: null, initial_U: null, k1: null, M_init: null, mu: null, n: null, n1: null, P_init: null, Q0: null, T_init: null, theta_0: null, U_init: null};
    this.metadata.variableOrder = {P: null, I: null, M: null, T: null, U: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
