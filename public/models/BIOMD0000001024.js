export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Whole_organism_blood = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(2).fill(0);
    state[0] = internal.initial_Expanding_CAR_T_cells;
    state[1] = internal.initial_Tumor_cells;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["d", "Expanding_CAR_T_cells_init", "g", "k_E", "rho", "Tumor_cells_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "d", internal, 0.00014999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Expanding_CAR_T_cells_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g", internal, 0.14999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_E", internal, 0.16, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho", internal, 0.0018, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tumor_cells_init", internal, 900, -Infinity, Infinity, false);
    internal.initial_Expanding_CAR_T_cells = internal.Expanding_CAR_T_cells_init;
    internal.initial_Tumor_cells = internal.Tumor_cells_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Expanding_CAR_T_cells = state[0];
    const Tumor_cells = state[1];
    dstatedt[0] = 0 + 1 * internal.Whole_organism_blood * (internal.rho * Expanding_CAR_T_cells * Tumor_cells) - 1 * internal.Whole_organism_blood * internal.k_E * Expanding_CAR_T_cells;
    dstatedt[1] = 0 + 1 * internal.Whole_organism_blood * (internal.g * Tumor_cells) - 1 * internal.Whole_organism_blood * (internal.d * Expanding_CAR_T_cells * Tumor_cells);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Expanding_CAR_T_cells", "Tumor_cells"];
    this.metadata.internalOrder = {d: null, Expanding_CAR_T_cells_init: null, g: null, initial_Expanding_CAR_T_cells: null, initial_Tumor_cells: null, k_E: null, rho: null, Tumor_cells_init: null, Whole_organism_blood: null};
    this.metadata.variableOrder = {Expanding_CAR_T_cells: null, Tumor_cells: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
