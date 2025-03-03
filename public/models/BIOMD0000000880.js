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
    var state = Array(4).fill(0);
    state[0] = internal.initial_T_Tumor_Cells;
    state[1] = internal.initial_L_CD8_T_Cells;
    state[2] = internal.initial_D_Dendritic_Cells;
    state[3] = internal.initial_H_CD4_T_Cells;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a_1", "a_2", "a_3", "alpha_1", "alpha_2", "b_1__1", "b_2__1", "b_3__1", "beta_1", "beta_2", "beta_3", "D_Dendritic_Cells_init", "e", "H_CD4_T_Cells_init", "L_CD8_T_Cells_init", "T_Tumor_Cells_init", "u_1", "u_2"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a_1", internal, 0.43099999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_2", internal, 0.23400000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_3", internal, 0.017000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_1", internal, 4.1999999999999999e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_2", internal, 8.0000000000000003e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_1__1", internal, 1.02e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_2__1", internal, 1.2500000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_3__1", internal, 0.00050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_1", internal, 2.0000000000000002e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_2", internal, 2.0000000000000002e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_3", internal, 2.0000000000000002e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "D_Dendritic_Cells_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e", internal, 1.04e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H_CD4_T_Cells_init", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L_CD8_T_Cells_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_Tumor_Cells_init", internal, 1000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u_1", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u_2", internal, 0, -Infinity, Infinity, false);
    internal.initial_D_Dendritic_Cells = internal.D_Dendritic_Cells_init;
    internal.initial_H_CD4_T_Cells = internal.H_CD4_T_Cells_init;
    internal.initial_L_CD8_T_Cells = internal.L_CD8_T_Cells_init;
    internal.initial_T_Tumor_Cells = internal.T_Tumor_Cells_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const T_Tumor_Cells = state[0];
    const L_CD8_T_Cells = state[1];
    const D_Dendritic_Cells = state[2];
    const H_CD4_T_Cells = state[3];
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.a_2 * D_Dendritic_Cells * (1 - internal.b_2__1 * D_Dendritic_Cells)) - 1 * internal.compartment * (internal.beta_2 * D_Dendritic_Cells * L_CD8_T_Cells) + 1 * internal.compartment * (internal.u_2);
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.a_3 * H_CD4_T_Cells * (1 - internal.b_3__1 * H_CD4_T_Cells)) - 1 * internal.compartment * (internal.beta_3 * H_CD4_T_Cells * L_CD8_T_Cells);
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.beta_1 * (D_Dendritic_Cells + H_CD4_T_Cells) * L_CD8_T_Cells) - 1 * internal.compartment * (internal.alpha_2 * T_Tumor_Cells * L_CD8_T_Cells) - 1 * internal.compartment * internal.e * L_CD8_T_Cells;
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.a_1 * T_Tumor_Cells * (1 - internal.b_1__1 * T_Tumor_Cells)) - 1 * internal.compartment * (internal.alpha_1 * T_Tumor_Cells * L_CD8_T_Cells) - 1 * internal.compartment * internal.u_1 * T_Tumor_Cells;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "T_Tumor_Cells", "L_CD8_T_Cells", "D_Dendritic_Cells", "H_CD4_T_Cells"];
    this.metadata.internalOrder = {a_1: null, a_2: null, a_3: null, alpha_1: null, alpha_2: null, b_1__1: null, b_2__1: null, b_3__1: null, beta_1: null, beta_2: null, beta_3: null, compartment: null, D_Dendritic_Cells_init: null, e: null, H_CD4_T_Cells_init: null, initial_D_Dendritic_Cells: null, initial_H_CD4_T_Cells: null, initial_L_CD8_T_Cells: null, initial_T_Tumor_Cells: null, L_CD8_T_Cells_init: null, T_Tumor_Cells_init: null, u_1: null, u_2: null};
    this.metadata.variableOrder = {T_Tumor_Cells: null, L_CD8_T_Cells: null, D_Dendritic_Cells: null, H_CD4_T_Cells: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
