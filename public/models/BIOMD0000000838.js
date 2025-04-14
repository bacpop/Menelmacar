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
    var A_init = internal.alpha_A / internal.mu_a / (internal.initial_M / (internal.initial_M + internal.b));
    var T_init = internal.alpha_e / internal.mu_e * internal.initial_A;
    internal.initial_A = A_init;
    internal.initial_T = T_init;
    var state = Array(3).fill(0);
    state[0] = internal.initial_A;
    state[1] = internal.initial_T;
    state[2] = internal.initial_M;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha_A", "alpha_e", "b", "g", "gamma_mel", "M_init", "mu_a", "mu_e", "nu_mel"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha_A", internal, 2986, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_e", internal, 831.79999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 92330, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g", internal, 60100000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_mel", internal, 0.04496, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_init", internal, 1000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_a", internal, 0.23100000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_e", internal, 0.1777, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nu_mel", internal, 0.1245, -Infinity, Infinity, false);
    internal.initial_M = internal.M_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const A = state[0];
    const T = state[1];
    const M = state[2];
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.alpha_A * M / (M + internal.b)) - 1 * internal.compartment * internal.mu_a * A;
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.gamma_mel * M) - 1 * internal.compartment * (internal.nu_mel * T * M / (M + internal.g));
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.alpha_e * A) - 1 * internal.compartment * internal.mu_e * T;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "A", "T", "M"];
    this.metadata.internalOrder = {alpha_A: null, alpha_e: null, b: null, compartment: null, g: null, gamma_mel: null, initial_A: null, initial_M: null, initial_T: null, M_init: null, mu_a: null, mu_e: null, nu_mel: null};
    this.metadata.variableOrder = {A: null, T: null, M: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
