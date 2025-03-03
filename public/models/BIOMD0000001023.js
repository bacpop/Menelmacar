export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Whole_organism = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_Normal_cells;
    state[1] = internal.initial_Tumor_cells;
    state[2] = internal.initial_Immune_cells;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha_1", "alpha_2", "alpha_3", "beta_1", "beta_2", "delta", "eta", "gamma", "Immune_cells_init", "m", "m_1", "mu", "mu_1", "Normal_cells_init", "r", "rho", "rho_1", "sigma", "Tumor_cells_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha_1", internal, 0.44259999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_2", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_3", internal, 0.1469, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_1", internal, 2.9900000000000002e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_2", internal, 1.1890000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta", internal, 0.56999999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "eta", internal, 0.13789999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 0.93140000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Immune_cells_init", internal, 1.22, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m", internal, 0.81299999999999994, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_1", internal, 0.86199999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu", internal, 0.81299999999999994, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_1", internal, 0.3634, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Normal_cells_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 0.43120000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho", internal, 0.27100000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho_1", internal, 0.78290000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigma", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tumor_cells_init", internal, 1, -Infinity, Infinity, false);
    internal.initial_Immune_cells = internal.Immune_cells_init;
    internal.initial_Normal_cells = internal.Normal_cells_init;
    internal.initial_Tumor_cells = internal.Tumor_cells_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Normal_cells = state[0];
    const Tumor_cells = state[1];
    const Immune_cells = state[2];
    dstatedt[2] = 0 + 1 * internal.Whole_organism * (internal.sigma + internal.rho * Normal_cells * Immune_cells / (internal.m + Normal_cells) + internal.rho_1 * Tumor_cells * Immune_cells / (internal.m_1 + Tumor_cells)) - 1 * internal.Whole_organism * (internal.delta * Immune_cells + internal.mu * Normal_cells * Immune_cells + internal.mu_1 * Tumor_cells * Immune_cells);
    dstatedt[0] = 0 + 1 * internal.Whole_organism * (internal.r * Normal_cells * (1 - internal.beta_1 * Normal_cells)) - 1 * internal.Whole_organism * (internal.eta * Normal_cells * Immune_cells + internal.gamma * Normal_cells * Tumor_cells);
    dstatedt[1] = 0 + 1 * internal.Whole_organism * (internal.alpha_1 * Tumor_cells * (1 - internal.alpha_2 * Tumor_cells) + internal.beta_2 * Normal_cells * Tumor_cells) - 1 * internal.Whole_organism * (internal.alpha_3 * Tumor_cells * Immune_cells);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Normal_cells", "Tumor_cells", "Immune_cells"];
    this.metadata.internalOrder = {alpha_1: null, alpha_2: null, alpha_3: null, beta_1: null, beta_2: null, delta: null, eta: null, gamma: null, Immune_cells_init: null, initial_Immune_cells: null, initial_Normal_cells: null, initial_Tumor_cells: null, m: null, m_1: null, mu: null, mu_1: null, Normal_cells_init: null, r: null, rho: null, rho_1: null, sigma: null, Tumor_cells_init: null, Whole_organism: null};
    this.metadata.variableOrder = {Normal_cells: null, Tumor_cells: null, Immune_cells: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
