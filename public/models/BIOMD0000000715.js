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
    var N_init = internal.initial_S + internal.initial_E + internal.initial_I;
    internal.initial_N = N_init;
    var state = Array(5).fill(0);
    state[0] = internal.initial_S;
    state[1] = internal.initial_E;
    state[2] = internal.initial_I;
    state[3] = internal.initial_M;
    state[4] = internal.initial_N;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A", "alpha", "alpha1", "alpha2", "beta", "E_init", "gamma", "I_init", "M_init", "mu1", "mu2", "mu3", "rho", "S_init", "tau"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha", internal, 0.080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha1", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha2", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu1", internal, 0.98999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu2", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu3", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho", internal, 0.089999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau", internal, 0.59999999999999998, -Infinity, Infinity, false);
    internal.initial_E = internal.E_init;
    internal.initial_I = internal.I_init;
    internal.initial_M = internal.M_init;
    internal.initial_S = internal.S_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const S = state[0];
    const E = state[1];
    const I = state[2];
    const M = state[3];
    dstatedt[4] = 0 + 0;
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.beta * S * I * Math.exp(- internal.alpha * M)) - 1 * internal.compartment * internal.rho * E - 1 * internal.compartment * internal.alpha1 * E;
    dstatedt[2] = 0 - 1 * internal.compartment * internal.gamma * I + 1 * internal.compartment * internal.rho * E - 1 * internal.compartment * ((internal.alpha1 + internal.alpha2) * I);
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.mu1 * S) + 1 * internal.compartment * (internal.mu2 * E) + 1 * internal.compartment * (internal.mu3 * I) - 1 * internal.compartment * internal.tau * M;
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.A) + 1 * internal.compartment * internal.gamma * I - 1 * internal.compartment * (internal.beta * S * I * Math.exp(- internal.alpha * M)) - 1 * internal.compartment * internal.alpha1 * S;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "S", "E", "I", "M", "N"];
    this.metadata.internalOrder = {A: null, alpha: null, alpha1: null, alpha2: null, beta: null, compartment: null, E_init: null, gamma: null, I_init: null, initial_E: null, initial_I: null, initial_M: null, initial_N: null, initial_S: null, M_init: null, mu1: null, mu2: null, mu3: null, rho: null, S_init: null, tau: null};
    this.metadata.variableOrder = {S: null, E: null, I: null, M: null, N: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
