export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Solid_tumour = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(2).fill(0);
    state[0] = internal.initial_CAR_T_cells;
    state[1] = internal.initial_Tumour_cells;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha_1", "alpha_2", "CAR_T_cells_init", "g_C", "g_T", "rho_C", "rho_T", "tao_C", "Tumour_cells_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha_1", internal, 0.040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_2", internal, 2.5000000000000002e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CAR_T_cells_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_C", internal, 2000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_T", internal, 10000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho_C", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho_T", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tao_C", internal, 7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tumour_cells_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_CAR_T_cells = internal.CAR_T_cells_init;
    internal.initial_Tumour_cells = internal.Tumour_cells_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const CAR_T_cells = state[0];
    const Tumour_cells = state[1];
    dstatedt[0] = 0 + 1 * internal.Solid_tumour * (internal.rho_C * CAR_T_cells * Tumour_cells / (internal.g_T + Tumour_cells)) - 1 * internal.Solid_tumour * (internal.alpha_1 * CAR_T_cells * Tumour_cells / (internal.g_C + CAR_T_cells) + 1 / internal.tao_C * CAR_T_cells);
    dstatedt[1] = 0 + 1 * internal.Solid_tumour * (internal.rho_T * Tumour_cells) - 1 * internal.Solid_tumour * (internal.alpha_2 * CAR_T_cells * Tumour_cells);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "CAR_T_cells", "Tumour_cells"];
    this.metadata.internalOrder = {alpha_1: null, alpha_2: null, CAR_T_cells_init: null, g_C: null, g_T: null, initial_CAR_T_cells: null, initial_Tumour_cells: null, rho_C: null, rho_T: null, Solid_tumour: null, tao_C: null, Tumour_cells_init: null};
    this.metadata.variableOrder = {CAR_T_cells: null, Tumour_cells: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
