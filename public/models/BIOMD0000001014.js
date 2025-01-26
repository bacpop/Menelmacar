export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Off_tumour = 1;
    internal.On_tumour = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var CAR_T_cells_total_init = internal.initial_CAR_T_cells_on_tumour + internal.initial_CAR_T_cells_off_tumour;
    internal.initial_CAR_T_cells_total = CAR_T_cells_total_init;
    var state = Array(5).fill(0);
    state[0] = internal.initial_CAR_T_cells_on_tumour;
    state[1] = internal.initial_Tumour_cells;
    state[2] = internal.initial_CAR_T_cells_off_tumour;
    state[3] = internal.initial_B_cells;
    state[4] = internal.initial_CAR_T_cells_total;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha_1", "alpha_2", "alpha_B", "B_cells_init", "CAR_T_cells_off_tumour_init", "CAR_T_cells_on_tumour_init", "g_B", "g_C", "g_T", "kxk", "rho_C", "rho_C_bar", "rho_T", "tao_B", "tao_C", "Tumour_cells_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha_1", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_2", internal, 2.5000000000000002e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_B", internal, 4.5e-11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B_cells_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CAR_T_cells_off_tumour_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CAR_T_cells_on_tumour_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_B", internal, 10000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_C", internal, 2000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_T", internal, 10000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho_C", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho_C_bar", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho_T", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tao_B", internal, 60, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tao_C", internal, 7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tumour_cells_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_B_cells = internal.B_cells_init;
    internal.initial_CAR_T_cells_off_tumour = internal.CAR_T_cells_off_tumour_init;
    internal.initial_CAR_T_cells_on_tumour = internal.CAR_T_cells_on_tumour_init;
    internal.initial_Tumour_cells = internal.Tumour_cells_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const CAR_T_cells_on_tumour = state[0];
    const Tumour_cells = state[1];
    const CAR_T_cells_off_tumour = state[2];
    const B_cells = state[3];
    dstatedt[4] = 0 + 0;
    dstatedt[3] = 0 - 1 * internal.Off_tumour * (internal.alpha_B * B_cells * CAR_T_cells_off_tumour + 1 / internal.tao_B * B_cells);
    dstatedt[2] = 0 + 1 * internal.Off_tumour * (internal.rho_C_bar * CAR_T_cells_off_tumour * B_cells / (internal.g_B + B_cells)) - 1 * internal.Off_tumour * (1 / internal.tao_C * CAR_T_cells_off_tumour + internal.kxk * CAR_T_cells_off_tumour);
    dstatedt[0] = 0 + 1 * (internal.kxk * CAR_T_cells_off_tumour + internal.rho_C * CAR_T_cells_on_tumour * Tumour_cells / (internal.g_T + Tumour_cells)) - 1 * internal.On_tumour * (internal.alpha_1 * CAR_T_cells_on_tumour * Tumour_cells / (internal.g_C + CAR_T_cells_on_tumour) + 1 / internal.tao_C * CAR_T_cells_on_tumour);
    dstatedt[1] = 0 + 1 * internal.On_tumour * (internal.rho_T * Tumour_cells) - 1 * internal.On_tumour * (internal.alpha_2 * CAR_T_cells_on_tumour * Tumour_cells);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "CAR_T_cells_on_tumour", "Tumour_cells", "CAR_T_cells_off_tumour", "B_cells", "CAR_T_cells_total"];
    this.metadata.internalOrder = {alpha_1: null, alpha_2: null, alpha_B: null, B_cells_init: null, CAR_T_cells_off_tumour_init: null, CAR_T_cells_on_tumour_init: null, g_B: null, g_C: null, g_T: null, initial_B_cells: null, initial_CAR_T_cells_off_tumour: null, initial_CAR_T_cells_on_tumour: null, initial_CAR_T_cells_total: null, initial_Tumour_cells: null, kxk: null, Off_tumour: null, On_tumour: null, rho_C: null, rho_C_bar: null, rho_T: null, tao_B: null, tao_C: null, Tumour_cells_init: null};
    this.metadata.variableOrder = {CAR_T_cells_on_tumour: null, Tumour_cells: null, CAR_T_cells_off_tumour: null, B_cells: null, CAR_T_cells_total: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
