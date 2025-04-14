export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.d = 1 / 24;
    internal.d_tilde = 1 / 20;
    internal.phi = 0.55000000000000004 * Math.pow((10), (- 9.5));
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var V_C_init = 0.040000000000000001 * internal.initial_S;
    internal.initial_V_C = V_C_init;
    var state = Array(3).fill(0);
    state[0] = internal.initial_S;
    state[1] = internal.initial_C;
    state[2] = internal.initial_V_C;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "beta", "C_init", "eta", "K", "mu", "phi_tilde", "r", "r_tilde", "S_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "eta", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K", internal, 894700000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu", internal, 0.086599999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "phi_tilde", internal, 4.9999999999999997e-12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 0.33900000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_tilde", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_init", internal, 830000000, -Infinity, Infinity, false);
    internal.initial_C = internal.C_init;
    internal.initial_S = internal.S_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const S = state[0];
    const C = state[1];
    const V_C = state[2];
    dstatedt[2] = 0 - 1 * internal.compartment * internal.phi_tilde * S * V_C + 1 * internal.compartment * (internal.alpha * C) - 1 * internal.compartment * internal.mu * V_C;
    var N = S + C;
    dstatedt[1] = 0 + 1 * internal.compartment * internal.phi_tilde * S * V_C - 1 * internal.compartment * internal.d_tilde * C + 1 * internal.compartment * (internal.r_tilde * C * (1 - N / internal.K));
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.r * S * (1 - N / internal.K)) - 1 * internal.compartment * internal.phi_tilde * S * V_C - 1 * internal.compartment * internal.d * S;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "S", "C", "V_C"];
    this.metadata.internalOrder = {alpha: null, beta: null, C_init: null, compartment: null, d: null, d_tilde: null, eta: null, initial_C: null, initial_S: null, initial_V_C: null, K: null, mu: null, phi: null, phi_tilde: null, r: null, r_tilde: null, S_init: null};
    this.metadata.variableOrder = {S: null, C: null, V_C: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
