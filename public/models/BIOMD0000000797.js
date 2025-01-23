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
    state[0] = internal.initial_x_Tumor_Cells;
    state[1] = internal.initial_y_CD4_T_Cells;
    state[2] = internal.initial_z_Cytokine;
    state[3] = internal.initial_w_Healthy_Tissue;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a_1", "alpha_1", "alpha_2", "b_1", "b_2", "beta_1", "beta_2", "c_1", "delta_1", "delta_2", "delta_3", "I_1", "I_2", "mu_1", "mu_2", "r_1", "r_2", "w_Healthy_Tissue_init", "x_Tumor_Cells_init", "y_CD4_T_Cells_init", "z_Cytokine_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a_1", internal, 100000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_1", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_2", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_1", internal, 1.02e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_2", internal, 1.0000000000000001e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_1", internal, 0.83499999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_2", internal, 5.4000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c_1", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_1", internal, 1.0999999999999999e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_2", internal, 9.9999999999999995e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_3", internal, 5.8e-11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_1", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_2", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_2", internal, 34, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_1", internal, 0.51400000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_2", internal, 0.28220000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "w_Healthy_Tissue_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_Tumor_Cells_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y_CD4_T_Cells_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "z_Cytokine_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_w_Healthy_Tissue = internal.w_Healthy_Tissue_init;
    internal.initial_x_Tumor_Cells = internal.x_Tumor_Cells_init;
    internal.initial_y_CD4_T_Cells = internal.y_CD4_T_Cells_init;
    internal.initial_z_Cytokine = internal.z_Cytokine_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const x_Tumor_Cells = state[0];
    const y_CD4_T_Cells = state[1];
    const z_Cytokine = state[2];
    const w_Healthy_Tissue = state[3];
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.r_2 * w_Healthy_Tissue * (1 - internal.b_2 * w_Healthy_Tissue)) - 1 * internal.compartment * (internal.delta_3 * x_Tumor_Cells * w_Healthy_Tissue);
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.r_1 * x_Tumor_Cells * (1 - internal.b_1 * x_Tumor_Cells)) - 1 * internal.compartment * (internal.c_1 * x_Tumor_Cells * z_Cytokine / (internal.a_1 + x_Tumor_Cells)) - 1 * internal.compartment * (internal.delta_1 * x_Tumor_Cells * w_Healthy_Tissue);
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.beta_1 * x_Tumor_Cells * z_Cytokine / (internal.alpha_1 + x_Tumor_Cells)) - 1 * internal.compartment * internal.mu_1 * y_CD4_T_Cells - 1 * internal.compartment * (internal.delta_2 * x_Tumor_Cells * y_CD4_T_Cells) + 1 * internal.compartment * (internal.I_1);
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.beta_2 * x_Tumor_Cells * y_CD4_T_Cells / (internal.alpha_2 + x_Tumor_Cells)) - 1 * internal.compartment * internal.mu_2 * z_Cytokine + 1 * internal.compartment * (internal.I_2);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "x_Tumor_Cells", "y_CD4_T_Cells", "z_Cytokine", "w_Healthy_Tissue"];
    this.metadata.internalOrder = {a_1: null, alpha_1: null, alpha_2: null, b_1: null, b_2: null, beta_1: null, beta_2: null, c_1: null, compartment: null, delta_1: null, delta_2: null, delta_3: null, I_1: null, I_2: null, initial_w_Healthy_Tissue: null, initial_x_Tumor_Cells: null, initial_y_CD4_T_Cells: null, initial_z_Cytokine: null, mu_1: null, mu_2: null, r_1: null, r_2: null, w_Healthy_Tissue_init: null, x_Tumor_Cells_init: null, y_CD4_T_Cells_init: null, z_Cytokine_init: null};
    this.metadata.variableOrder = {x_Tumor_Cells: null, y_CD4_T_Cells: null, z_Cytokine: null, w_Healthy_Tissue: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
