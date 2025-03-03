export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.d = 1 / 24;
    internal.phi = 0.55000000000000004 * Math.pow((10), (- 9.5));
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_S;
    state[1] = internal.initial_I;
    state[2] = internal.initial_V_L;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "beta", "d_tilde", "eta", "I_init", "K", "mu", "phi_tilde", "r", "r_tilde", "S_init", "V_L_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_tilde", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "eta", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K", internal, 894700000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu", internal, 0.086599999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "phi_tilde", internal, 1.9999999999999999e-11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 0.33900000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_tilde", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_init", internal, 830000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_L_init", internal, 33200000, -Infinity, Infinity, false);
    internal.initial_I = internal.I_init;
    internal.initial_S = internal.S_init;
    internal.initial_V_L = internal.V_L_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const S = state[0];
    const I = state[1];
    const V_L = state[2];
    dstatedt[1] = 0 + 1 * internal.compartment * internal.phi * S * V_L - 1 * internal.compartment * internal.d * I - 1 * internal.compartment * internal.eta * I;
    dstatedt[2] = 0 - 1 * internal.compartment * internal.phi * S * V_L + 1 * internal.compartment * (internal.beta * internal.eta * I) - 1 * internal.compartment * internal.mu * V_L;
    var N = S + I;
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.r * S * (1 - N / internal.K)) - 1 * internal.compartment * internal.phi * S * V_L - 1 * internal.compartment * internal.d * S;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "S", "I", "V_L"];
    this.metadata.internalOrder = {alpha: null, beta: null, compartment: null, d: null, d_tilde: null, eta: null, I_init: null, initial_I: null, initial_S: null, initial_V_L: null, K: null, mu: null, phi: null, phi_tilde: null, r: null, r_tilde: null, S_init: null, V_L_init: null};
    this.metadata.variableOrder = {S: null, I: null, V_L: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
