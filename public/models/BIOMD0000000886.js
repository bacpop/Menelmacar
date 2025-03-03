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
    state[0] = internal.initial_T;
    state[1] = internal.initial_Th;
    state[2] = internal.initial_Tc;
    state[3] = internal.initial_B;
    state[4] = internal.initial_A;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A_init", "alpha", "alpha_0", "alpha_1", "B_init", "beta_1", "beta_2", "delta_1", "delta_2", "gamma_1", "gamma_2", "mu_1", "mu_10", "mu_11", "mu_2", "mu_20", "mu_3", "mu_30", "mu_4", "mu_40", "T_init", "Tc_init", "Th_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha", internal, 0.17999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_0", internal, 4.5999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_1", internal, 0.10100000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_1", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_2", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_1", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_2", internal, 0.0080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_1", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_2", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_1", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_10", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_11", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_2", internal, 1.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_20", internal, 0.041200000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_3", internal, 0.45000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_30", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_4", internal, 0.34999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_40", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_init", internal, 9, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tc_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Th_init", internal, 7, -Infinity, Infinity, false);
    internal.initial_A = internal.A_init;
    internal.initial_B = internal.B_init;
    internal.initial_T = internal.T_init;
    internal.initial_Tc = internal.Tc_init;
    internal.initial_Th = internal.Th_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const T = state[0];
    const Th = state[1];
    const Tc = state[2];
    const B = state[3];
    const A = state[4];
    dstatedt[4] = 0 + 1 * internal.compartment * (internal.mu_4 * B) - 1 * internal.compartment * (internal.mu_40 * A + internal.delta_1 * T * A);
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.mu_3 * T + internal.gamma_1 * T * B + internal.gamma_2 * Th * B) - 1 * internal.compartment * (internal.mu_30 * B);
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.alpha * T) - 1 * internal.compartment * (internal.alpha_0 * T * T + internal.alpha_1 * T * Tc + internal.delta_2 * T * A);
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.mu_2 * T + internal.beta_1 * T * Tc + internal.beta_2 * Th * Tc) - 1 * internal.compartment * (internal.mu_20 * Tc);
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.mu_1 * T + internal.mu_11 * T * Th) - 1 * internal.compartment * (internal.mu_10 * Th);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "T", "Th", "Tc", "B", "A"];
    this.metadata.internalOrder = {A_init: null, alpha: null, alpha_0: null, alpha_1: null, B_init: null, beta_1: null, beta_2: null, compartment: null, delta_1: null, delta_2: null, gamma_1: null, gamma_2: null, initial_A: null, initial_B: null, initial_T: null, initial_Tc: null, initial_Th: null, mu_1: null, mu_10: null, mu_11: null, mu_2: null, mu_20: null, mu_3: null, mu_30: null, mu_4: null, mu_40: null, T_init: null, Tc_init: null, Th_init: null};
    this.metadata.variableOrder = {T: null, Th: null, Tc: null, B: null, A: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
