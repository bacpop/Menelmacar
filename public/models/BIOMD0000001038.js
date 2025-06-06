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
    state[2] = internal.initial_Vitamins;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha1", "alpha2", "beta1", "beta2", "c1", "c2", "gamma", "k1", "k2", "Normal_cells_init", "r", "Tumor_cells_init", "Vitamins_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha1", internal, 0.44259999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha2", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta1", internal, 2.9900000000000002e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta2", internal, 0.2291, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c1", internal, 0.2215, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c2", internal, 0.4975, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 0.98170000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.89759999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.96109999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Normal_cells_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 0.43120000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tumor_cells_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vitamins_init", internal, 5, -Infinity, Infinity, false);
    internal.initial_Normal_cells = internal.Normal_cells_init;
    internal.initial_Tumor_cells = internal.Tumor_cells_init;
    internal.initial_Vitamins = internal.Vitamins_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Normal_cells = state[0];
    const Tumor_cells = state[1];
    const Vitamins = state[2];
    dstatedt[0] = 0 + 1 * internal.Whole_organism * (internal.r * Normal_cells * (1 - internal.beta1 * Normal_cells) + internal.c1 * Normal_cells * Vitamins) - 1 * internal.Whole_organism * (internal.gamma * Normal_cells * Tumor_cells);
    dstatedt[1] = 0 + 1 * internal.Whole_organism * (internal.alpha1 * Tumor_cells * (1 - internal.alpha2 * Tumor_cells) + internal.beta2 * Normal_cells * Tumor_cells) - 1 * internal.Whole_organism * (internal.c2 * Tumor_cells * Vitamins);
    dstatedt[2] = 0 + 1 * internal.Whole_organism * (internal.k1) - 1 * internal.Whole_organism * internal.k2 * Vitamins;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Normal_cells", "Tumor_cells", "Vitamins"];
    this.metadata.internalOrder = {alpha1: null, alpha2: null, beta1: null, beta2: null, c1: null, c2: null, gamma: null, initial_Normal_cells: null, initial_Tumor_cells: null, initial_Vitamins: null, k1: null, k2: null, Normal_cells_init: null, r: null, Tumor_cells_init: null, Vitamins_init: null, Whole_organism: null};
    this.metadata.variableOrder = {Normal_cells: null, Tumor_cells: null, Vitamins: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
