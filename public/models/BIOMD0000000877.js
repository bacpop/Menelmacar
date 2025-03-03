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
    var state = Array(4).fill(0);
    state[0] = internal.initial_U;
    state[1] = internal.initial_I;
    state[2] = internal.initial_V;
    state[3] = internal.initial_C;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "b", "beta", "C_init", "delta", "delta_i", "delta_u", "gamma", "I_init", "K", "K_c", "mu", "psi", "r", "U_init", "V_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_init", internal, 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_i", internal, 60, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_u", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K", internal, 2139, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_c", internal, 10000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu", internal, 150, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "psi", internal, 4.1699999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "U_init", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_init", internal, 10, -Infinity, Infinity, false);
    internal.initial_C = internal.C_init;
    internal.initial_I = internal.I_init;
    internal.initial_U = internal.U_init;
    internal.initial_V = internal.V_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const U = state[0];
    const I = state[1];
    const V = state[2];
    const C = state[3];
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.mu) - 1 * internal.compartment * internal.psi * C;
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.beta * U * V / (U + I + internal.alpha)) - 1 * internal.compartment * (internal.delta_i * I * C / (internal.K_c + C)) - 1 * internal.compartment * internal.delta * I;
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.r * U * (1 - (U + I) / internal.K)) - 1 * internal.compartment * (internal.beta * U * V / (U + I + internal.alpha)) - 1 * internal.compartment * (internal.delta_u * U * C / (internal.K_c + C));
    dstatedt[2] = 0 - 1 * internal.compartment * (internal.beta * U * V / (U + I + internal.alpha)) + 1 * internal.compartment * (internal.b * internal.delta * I) - 1 * internal.compartment * internal.gamma * V;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "U", "I", "V", "C"];
    this.metadata.internalOrder = {alpha: null, b: null, beta: null, C_init: null, compartment: null, delta: null, delta_i: null, delta_u: null, gamma: null, I_init: null, initial_C: null, initial_I: null, initial_U: null, initial_V: null, K: null, K_c: null, mu: null, psi: null, r: null, U_init: null, V_init: null};
    this.metadata.variableOrder = {U: null, I: null, V: null, C: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
