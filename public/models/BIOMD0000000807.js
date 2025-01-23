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
    state[0] = internal.initial_normalized_normal_cell_n;
    state[1] = internal.initial_normalized_pre_cancer_cell_g;
    state[2] = internal.initial_normalized_cancer_cell_a;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A0", "beta_1", "beta_2", "beta_3", "beta_4", "beta_5", "beta_6", "delta", "G0", "K", "K_A", "mu_A", "mu_G", "mu_N", "r_A", "r_G", "r_N", "xi", "xi_A", "xi_G"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A0", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_1", internal, 3.4999999999999998e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_2", internal, 3.4999999999999998e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_3", internal, 3.4999999999999998e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_4", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_5", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_6", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta", internal, 1.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G0", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K", internal, 100000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_A", internal, 10000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_A", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_G", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_N", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_A", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_G", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_N", internal, 1000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "xi", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "xi_A", internal, 0.0060000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "xi_G", internal, 0.01, -Infinity, Infinity, false);
    internal.a0 = internal.A0 / internal.K;
    internal.g0 = internal.G0 / internal.K;
    internal.N0 = internal.r_N / internal.mu_N - 1;
    internal.n0 = internal.N0 / internal.K;
    internal.normalized_cancer_cell_a_init = internal.a0;
    internal.normalized_pre_cancer_cell_g_init = internal.g0;
    internal.initial_normalized_cancer_cell_a = internal.normalized_cancer_cell_a_init;
    internal.initial_normalized_pre_cancer_cell_g = internal.normalized_pre_cancer_cell_g_init;
    internal.normalized_normal_cell_n_init = internal.n0;
    internal.initial_normalized_normal_cell_n = internal.normalized_normal_cell_n_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const normalized_normal_cell_n = state[0];
    const normalized_pre_cancer_cell_g = state[1];
    const normalized_cancer_cell_a = state[2];
    dstatedt[2] = 0 - 1 * internal.compartment * (internal.beta_6 * normalized_cancer_cell_a * normalized_pre_cancer_cell_g) - 1 * internal.compartment * internal.mu_A * normalized_cancer_cell_a + 1 * internal.compartment * (internal.r_A * normalized_cancer_cell_a * (1 - normalized_cancer_cell_a / (internal.K_A / internal.K))) - 1 * internal.compartment * (internal.beta_3 * internal.K * normalized_normal_cell_n * normalized_cancer_cell_a) - 1 * internal.compartment * internal.xi_A * normalized_cancer_cell_a + 1 * internal.compartment * (internal.delta * Math.pow((normalized_pre_cancer_cell_g), (2)) / (internal.xi / internal.K + normalized_pre_cancer_cell_g));
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.r_N / internal.K) - 1 * internal.compartment * internal.mu_N * normalized_normal_cell_n - 1 * internal.compartment * (internal.beta_1 * internal.K * normalized_normal_cell_n * normalized_cancer_cell_a) - 1 * internal.compartment * (internal.beta_4 * normalized_normal_cell_n * normalized_pre_cancer_cell_g);
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.r_G * normalized_pre_cancer_cell_g) - 1 * internal.compartment * internal.mu_G * normalized_pre_cancer_cell_g - 1 * internal.compartment * (internal.beta_2 * internal.K * normalized_normal_cell_n * normalized_pre_cancer_cell_g) - 1 * internal.compartment * internal.xi_G * normalized_pre_cancer_cell_g - 1 * internal.compartment * (internal.beta_5 * normalized_cancer_cell_a * normalized_pre_cancer_cell_g) - 1 * internal.compartment * (internal.delta * Math.pow((normalized_pre_cancer_cell_g), (2)) / (internal.xi / internal.K + normalized_pre_cancer_cell_g));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "normalized_normal_cell_n", "normalized_pre_cancer_cell_g", "normalized_cancer_cell_a"];
    this.metadata.internalOrder = {a0: null, A0: null, beta_1: null, beta_2: null, beta_3: null, beta_4: null, beta_5: null, beta_6: null, compartment: null, delta: null, g0: null, G0: null, initial_normalized_cancer_cell_a: null, initial_normalized_normal_cell_n: null, initial_normalized_pre_cancer_cell_g: null, K: null, K_A: null, mu_A: null, mu_G: null, mu_N: null, n0: null, N0: null, normalized_cancer_cell_a_init: null, normalized_normal_cell_n_init: null, normalized_pre_cancer_cell_g_init: null, r_A: null, r_G: null, r_N: null, xi: null, xi_A: null, xi_G: null};
    this.metadata.variableOrder = {normalized_normal_cell_n: null, normalized_pre_cancer_cell_g: null, normalized_cancer_cell_a: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
