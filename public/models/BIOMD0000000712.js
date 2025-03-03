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
    state[1] = internal.initial_D;
    state[2] = internal.initial_I;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "beta", "D_init", "delta", "epsilon", "gamma", "I_init", "k_p", "omega", "P_init", "rho", "theta"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 3.6299999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "D_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta", internal, 4.2699999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "epsilon", internal, 6.8099999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 0.51000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_p", internal, 3.23, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "omega", internal, 0.13, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_init", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho", internal, 1.8200000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "theta", internal, 0.01, -Infinity, Infinity, false);
    internal.initial_D = internal.D_init;
    internal.initial_I = internal.I_init;
    internal.initial_P = internal.P_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const P = state[0];
    const D = state[1];
    const I = state[2];
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.gamma * P) - 1 * internal.compartment * internal.theta * D;
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.alpha * P * (1 - P / internal.k_p)) - 1 * internal.compartment * (internal.beta * D * (P / (P + 0.01)));
    var f_D = 1 + Math.tanh((D - internal.delta) / internal.omega);
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.epsilon * f_D) - 1 * internal.compartment * internal.rho * I;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "P", "D", "I"];
    this.metadata.internalOrder = {alpha: null, beta: null, compartment: null, D_init: null, delta: null, epsilon: null, gamma: null, I_init: null, initial_D: null, initial_I: null, initial_P: null, k_p: null, omega: null, P_init: null, rho: null, theta: null};
    this.metadata.variableOrder = {P: null, D: null, I: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
