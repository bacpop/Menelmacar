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
    var Total_lymphocyte_count_init = internal.initial_Normal_T_cells + internal.initial_CAR_T_cells;
    internal.initial_Total_lymphocyte_count = Total_lymphocyte_count_init;
    var state = Array(4).fill(0);
    state[0] = internal.initial_Normal_T_cells;
    state[1] = internal.initial_CAR_T_cells;
    state[2] = internal.initial_Antigen_presenting_tumour_cells;
    state[3] = internal.initial_Total_lymphocyte_count;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "Antigen_presenting_tumour_cells_init", "b", "CAR_T_cells_init", "gamma_B", "k_B", "K_C", "K_N", "Normal_T_cells_init", "r_B", "r_N", "rho_C"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.42299999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Antigen_presenting_tumour_cells_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 0.52500000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CAR_T_cells_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_B", internal, 1.1499999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_B", internal, 4.0499999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_C", internal, 139, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_N", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Normal_T_cells_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_B", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_N", internal, 0.17000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho_C", internal, 0.025100000000000001, -Infinity, Infinity, false);
    internal.initial_Antigen_presenting_tumour_cells = internal.Antigen_presenting_tumour_cells_init;
    internal.initial_CAR_T_cells = internal.CAR_T_cells_init;
    internal.initial_Normal_T_cells = internal.Normal_T_cells_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Normal_T_cells = state[0];
    const CAR_T_cells = state[1];
    const Antigen_presenting_tumour_cells = state[2];
    const Total_lymphocyte_count = state[3];
    dstatedt[3] = 0 + 0;
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.r_B * Antigen_presenting_tumour_cells) - 1 * internal.compartment * (internal.gamma_B * Antigen_presenting_tumour_cells * (CAR_T_cells / (internal.k_B + CAR_T_cells)));
    dstatedt[0] = 0 + 1 * internal.compartment * (- internal.r_N * Normal_T_cells * Math.log((Normal_T_cells + CAR_T_cells) / internal.K_N));
    var r_C = internal.rho_C + internal.b * Math.pow((Total_lymphocyte_count - internal.K_N), (2)) / (internal.a * Math.pow((Total_lymphocyte_count), (2)) + Math.pow((Total_lymphocyte_count - internal.K_N), (2)));
    dstatedt[1] = 0 + 1 * internal.compartment * (- r_C * CAR_T_cells * Math.log((Normal_T_cells + CAR_T_cells) / internal.K_C));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Normal_T_cells", "CAR_T_cells", "Antigen_presenting_tumour_cells", "Total_lymphocyte_count"];
    this.metadata.internalOrder = {a: null, Antigen_presenting_tumour_cells_init: null, b: null, CAR_T_cells_init: null, compartment: null, gamma_B: null, initial_Antigen_presenting_tumour_cells: null, initial_CAR_T_cells: null, initial_Normal_T_cells: null, initial_Total_lymphocyte_count: null, k_B: null, K_C: null, K_N: null, Normal_T_cells_init: null, r_B: null, r_N: null, rho_C: null};
    this.metadata.variableOrder = {Normal_T_cells: null, CAR_T_cells: null, Antigen_presenting_tumour_cells: null, Total_lymphocyte_count: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
