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
    state[0] = internal.initial_M_Tumor_Cells;
    state[1] = internal.initial_N_CTL;
    state[2] = internal.initial_Z_THL;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha_1", "alpha_2", "d_1", "k_1", "k_2", "M_Tumor_Cells_init", "mu_1", "mu_2", "N_CTL_init", "r_1", "r_2", "Z_THL_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha_1", internal, 1.101e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_2", internal, 3.4220000000000002e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_1", internal, 0.041200000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_1", internal, 5000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_2", internal, 10000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_Tumor_Cells_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_1", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_2", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N_CTL_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_1", internal, 0.17999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_2", internal, 0.024500000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Z_THL_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_M_Tumor_Cells = internal.M_Tumor_Cells_init;
    internal.initial_N_CTL = internal.N_CTL_init;
    internal.initial_Z_THL = internal.Z_THL_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const M_Tumor_Cells = state[0];
    const N_CTL = state[1];
    const Z_THL = state[2];
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.r_1 * M_Tumor_Cells * (1 - M_Tumor_Cells / internal.k_1)) - 1 * internal.compartment * (internal.alpha_1 * M_Tumor_Cells * N_CTL) - 1 * internal.compartment * internal.mu_1 * M_Tumor_Cells;
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.mu_2 * N_CTL * Z_THL) - 1 * internal.compartment * internal.d_1 * N_CTL - 1 * internal.compartment * (internal.alpha_2 * M_Tumor_Cells * N_CTL);
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.r_2 * Z_THL * (1 - Z_THL / internal.k_2)) - 1 * internal.compartment * (internal.mu_2 * N_CTL * Z_THL);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "M_Tumor_Cells", "N_CTL", "Z_THL"];
    this.metadata.internalOrder = {alpha_1: null, alpha_2: null, compartment: null, d_1: null, initial_M_Tumor_Cells: null, initial_N_CTL: null, initial_Z_THL: null, k_1: null, k_2: null, M_Tumor_Cells_init: null, mu_1: null, mu_2: null, N_CTL_init: null, r_1: null, r_2: null, Z_THL_init: null};
    this.metadata.variableOrder = {M_Tumor_Cells: null, N_CTL: null, Z_THL: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
