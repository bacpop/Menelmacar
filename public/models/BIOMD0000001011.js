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
    state[0] = internal.initial_CAR_T_cells;
    state[1] = internal.initial_Leukaemic_B_cells;
    state[2] = internal.initial_B_cells_healthy;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "B_cells_healthy_init", "CAR_T_cells_init", "Leukaemic_B_cells_init", "rho_L", "tao_B", "tao_C"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 4.5e-11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B_cells_healthy_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CAR_T_cells_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Leukaemic_B_cells_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho_L", internal, 0.033333333329999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tao_B", internal, 60, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tao_C", internal, 14, -Infinity, Infinity, false);
    internal.initial_B_cells_healthy = internal.B_cells_healthy_init;
    internal.initial_CAR_T_cells = internal.CAR_T_cells_init;
    internal.initial_Leukaemic_B_cells = internal.Leukaemic_B_cells_init;
    internal.rho_C = 0.25 * internal.alpha;
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
    dstatedt[2] = 0 - 1 * internal.compartment * (internal.alpha * B_cells_healthy * CAR_T_cells + 1 / internal.tao_B * B_cells_healthy);
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.rho_L * Leukaemic_B_cells) - 1 * internal.compartment * (internal.alpha * Leukaemic_B_cells * CAR_T_cells);
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.rho_C * (Leukaemic_B_cells + B_cells_healthy) * CAR_T_cells) - 1 * internal.compartment * (1 / internal.tao_C * CAR_T_cells);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "CAR_T_cells", "Leukaemic_B_cells", "B_cells_healthy"];
    this.metadata.internalOrder = {alpha: null, B_cells_healthy_init: null, CAR_T_cells_init: null, compartment: null, initial_B_cells_healthy: null, initial_CAR_T_cells: null, initial_Leukaemic_B_cells: null, Leukaemic_B_cells_init: null, rho_C: null, rho_L: null, tao_B: null, tao_C: null};
    this.metadata.variableOrder = {CAR_T_cells: null, Leukaemic_B_cells: null, B_cells_healthy: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
