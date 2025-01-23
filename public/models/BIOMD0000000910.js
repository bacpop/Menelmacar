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
    state[1] = internal.initial_T;
    state[2] = internal.initial_I2;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha_bar_L", "alpha_I2", "alpha_L", "alpha_T", "beta_L", "beta_T", "gama_prime_L", "gama_T", "I2_init", "K_T", "L_init", "T_init", "VL"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha_bar_L", internal, 6.5999999999999995e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_I2", internal, 12500000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_L", internal, 9.8999999999999993e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_T", internal, 0.22, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_L", internal, 0.33000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_T", internal, 8.3999999999999998e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gama_prime_L", internal, 3.9999999999999998e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gama_T", internal, 6.6000000000000003e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_T", internal, 52000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VL", internal, 79000, -Infinity, Infinity, false);
    internal.initial_I2 = internal.I2_init;
    internal.initial_L = internal.L_init;
    internal.initial_T = internal.T_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const L = state[0];
    const T = state[1];
    const I2 = state[2];
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.alpha_I2 * T / (T + internal.K_T)) - 1 * internal.compartment * (internal.alpha_bar_L * L * I2 + internal.gama_T * T * I2);
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.VL + internal.alpha_L * L * I2) - 1 * internal.compartment * (internal.beta_L * L);
    dstatedt[1] = 0 - 1 * internal.compartment * (internal.alpha_T * T * Math.log(internal.beta_T * T / internal.alpha_T) + internal.gama_prime_L * L * T);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "L", "T", "I2"];
    this.metadata.internalOrder = {alpha_bar_L: null, alpha_I2: null, alpha_L: null, alpha_T: null, beta_L: null, beta_T: null, compartment: null, gama_prime_L: null, gama_T: null, I2_init: null, initial_I2: null, initial_L: null, initial_T: null, K_T: null, L_init: null, T_init: null, VL: null};
    this.metadata.variableOrder = {L: null, T: null, I2: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
