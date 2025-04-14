export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.kxk = 0.25;
    internal.Whole_organism_blood = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_CAR_T_cells;
    state[1] = internal.initial_Leukaemic_B_cells;
    state[2] = internal.initial_B_cells_healthy;
    state[3] = internal.initial_B_cell_progenitors;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "B_cells_healthy_init", "beta", "C_50", "CAR_T_cells_init", "I_0", "Leukaemic_B_cells_init", "rho_L", "tao_B", "tao_C", "tao_I"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 4.5e-11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B_cells_healthy_init", internal, 25000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_50", internal, 1000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CAR_T_cells_init", internal, 10000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_0", internal, 10000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Leukaemic_B_cells_init", internal, 50000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho_L", internal, 0.033333333329999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tao_B", internal, 60, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tao_C", internal, 14, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tao_I", internal, 6, -Infinity, Infinity, false);
    internal.B_cell_progenitors_init = internal.I_0;
    internal.initial_B_cells_healthy = internal.B_cells_healthy_init;
    internal.initial_CAR_T_cells = internal.CAR_T_cells_init;
    internal.initial_Leukaemic_B_cells = internal.Leukaemic_B_cells_init;
    internal.rho_C = 0.25 * internal.alpha;
    internal.initial_B_cell_progenitors = internal.B_cell_progenitors_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const CAR_T_cells = state[0];
    const Leukaemic_B_cells = state[1];
    const B_cells_healthy = state[2];
    dstatedt[3] = 0 - 1 * internal.Whole_organism_blood * (internal.I_0 / internal.tao_I / (1 + CAR_T_cells / internal.C_50)) + 1 * internal.Whole_organism_blood * (internal.I_0);
    dstatedt[2] = 0 - 1 * internal.Whole_organism_blood * (internal.alpha * B_cells_healthy * CAR_T_cells + 1 / internal.tao_B * B_cells_healthy) + 1 * internal.Whole_organism_blood * (internal.I_0 / internal.tao_I / (1 + CAR_T_cells / internal.C_50));
    dstatedt[1] = 0 + 1 * internal.Whole_organism_blood * (internal.rho_L * Leukaemic_B_cells) - 1 * internal.Whole_organism_blood * (internal.alpha * Leukaemic_B_cells * CAR_T_cells);
    dstatedt[0] = 0 + 1 * internal.Whole_organism_blood * (internal.rho_C * (Leukaemic_B_cells + B_cells_healthy) * CAR_T_cells + internal.rho_C * internal.beta * internal.I_0 / (1 + CAR_T_cells / internal.C_50)) - 1 * internal.Whole_organism_blood * (1 / internal.tao_C * CAR_T_cells);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "CAR_T_cells", "Leukaemic_B_cells", "B_cells_healthy", "B_cell_progenitors"];
    this.metadata.internalOrder = {alpha: null, B_cell_progenitors_init: null, B_cells_healthy_init: null, beta: null, C_50: null, CAR_T_cells_init: null, I_0: null, initial_B_cell_progenitors: null, initial_B_cells_healthy: null, initial_CAR_T_cells: null, initial_Leukaemic_B_cells: null, kxk: null, Leukaemic_B_cells_init: null, rho_C: null, rho_L: null, tao_B: null, tao_C: null, tao_I: null, Whole_organism_blood: null};
    this.metadata.variableOrder = {CAR_T_cells: null, Leukaemic_B_cells: null, B_cells_healthy: null, B_cell_progenitors: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
