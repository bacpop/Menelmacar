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
    state[0] = internal.initial_L;
    state[1] = internal.initial_U;
    state[2] = internal.initial_V;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "b", "delta", "g", "gamma", "L_init", "p", "r", "U_init", "V_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 9.9999999999999995e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 150, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L_init", internal, 10000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 0.98999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "U_init", internal, 990000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_L = internal.L_init;
    internal.initial_U = internal.U_init;
    internal.initial_V = internal.V_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const L = state[0];
    const U = state[1];
    const V = state[2];
    dstatedt[2] = 0 + 1 * internal.compartment * ((1 - internal.p) * internal.b * internal.alpha * U * V + internal.b * internal.delta * L) - 1 * internal.compartment * (internal.gamma * V + internal.alpha * V * L);
    var K = L + U;
    var phi = ((internal.r - internal.delta) * L + internal.g * U - internal.alpha * U * V * (1 - internal.p)) / K;
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.r * L + internal.p * internal.alpha * U * V) - 1 * internal.compartment * (internal.delta * L + phi * L);
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.g * U) - 1 * internal.compartment * (internal.alpha * U * V + phi * U);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "L", "U", "V"];
    this.metadata.internalOrder = {alpha: null, b: null, compartment: null, delta: null, g: null, gamma: null, initial_L: null, initial_U: null, initial_V: null, L_init: null, p: null, r: null, U_init: null, V_init: null};
    this.metadata.variableOrder = {L: null, U: null, V: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
