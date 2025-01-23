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
    var state = Array(3).fill(0);
    state[0] = internal.initial_P;
    state[1] = internal.initial_I;
    state[2] = internal.initial_M;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "alpha", "alpha0", "b", "beta", "beta0", "gamma", "I_init", "M_init", "mu", "n", "P_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha", internal, 2.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha0", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta0", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu", internal, 0.040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_I = internal.I_init;
    internal.initial_M = internal.M_init;
    internal.initial_P = internal.P_init;
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
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.mu + internal.b * I * P) - 1 * internal.compartment * (internal.a * I + internal.n * internal.gamma * I * P);
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.alpha * P) - 1 * internal.compartment * (internal.alpha0 * M);
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.beta * P) - 1 * internal.compartment * (internal.gamma * I * P + internal.beta0 * P * P);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "P", "I", "M"];
    this.metadata.internalOrder = {a: null, alpha: null, alpha0: null, b: null, beta: null, beta0: null, compartment: null, gamma: null, I_init: null, initial_I: null, initial_M: null, initial_P: null, M_init: null, mu: null, n: null, P_init: null};
    this.metadata.variableOrder = {P: null, I: null, M: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
