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
    var state = Array(6).fill(0);
    state[0] = internal.initial_x_PCC;
    state[1] = internal.initial_y_PSC;
    state[2] = internal.initial_z_Effector_Cells;
    state[3] = internal.initial_w_TPC;
    state[4] = internal.initial_v_TSC;
    state[5] = internal.initial_R_siRNA;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["b_1", "b_2", "beta_1", "beta_2", "beta_3", "beta_4", "beta_5", "D_0", "delta_1", "k_2", "k_3", "k_4", "k_5", "kxk", "m_1", "m_3", "m_4", "mu_2", "mu_3", "mu_4", "mu_5", "mu_6", "p", "r_1", "r_2", "r_3", "r_4", "R_siRNA_init", "v", "v_TSC_init", "w_TPC_init", "x_PCC_init", "y_PSC_init", "z_Effector_Cells_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "b_1", internal, 1.0199999999999999e-11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_2", internal, 1.7856999999999999e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_1", internal, 1.7857e-12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_2", internal, 0.125, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_3", internal, 124.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_4", internal, 5.8499999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_5", internal, 7.2999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "D_0", internal, 50000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_1", internal, 0.95999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_2", internal, 56000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_3", internal, 20000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_4", internal, 1000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_5", internal, 1000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_1", internal, 1000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_3", internal, 1000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_4", internal, 89000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_2", internal, 0.014999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_3", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_4", internal, 0.034000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_5", internal, 0.034000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_6", internal, 0.66000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_1", internal, 0.0195, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_2", internal, 0.0019499999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_3", internal, 3500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_4", internal, 12500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_siRNA_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v_TSC_init", internal, 9.4000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "w_TPC_init", internal, 50000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_PCC_init", internal, 1000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y_PSC_init", internal, 5600000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "z_Effector_Cells_init", internal, 190000000, -Infinity, Infinity, false);
    internal.initial_R_siRNA = internal.R_siRNA_init;
    internal.initial_v_TSC = internal.v_TSC_init;
    internal.initial_w_TPC = internal.w_TPC_init;
    internal.initial_x_PCC = internal.x_PCC_init;
    internal.initial_y_PSC = internal.y_PSC_init;
    internal.initial_z_Effector_Cells = internal.z_Effector_Cells_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const x_PCC = state[0];
    const y_PSC = state[1];
    const z_Effector_Cells = state[2];
    const w_TPC = state[3];
    const v_TSC = state[4];
    const R_siRNA = state[5];
    dstatedt[5] = 0 - 1 * internal.compartment * internal.mu_6 * R_siRNA + 1 * internal.compartment * (internal.D_0);
    dstatedt[4] = 0 + 1 * internal.compartment * (internal.beta_5 * x_PCC * z_Effector_Cells / (internal.k_5 + x_PCC)) - 1 * internal.compartment * internal.mu_5 * v_TSC;
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.v) - 1 * internal.compartment * internal.mu_4 * w_TPC + 1 * internal.compartment * (internal.r_4 * x_PCC * y_PSC / (internal.m_4 + v_TSC));
    dstatedt[0] = 0 + 1 * internal.compartment * ((internal.r_1 + internal.beta_1 * y_PSC) * x_PCC * (1 - internal.b_1 * x_PCC)) - 1 * internal.compartment * (internal.delta_1 * x_PCC * z_Effector_Cells / (internal.m_1 + w_TPC));
    dstatedt[1] = 0 + 1 * internal.compartment * ((internal.r_2 + internal.beta_2 * w_TPC / (internal.k_2 + w_TPC)) * y_PSC * (1 - internal.b_2 * y_PSC)) - 1 * internal.compartment * internal.mu_2 * y_PSC;
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.beta_3 * z_Effector_Cells * v_TSC / ((internal.k_3 + v_TSC) * (internal.m_3 + w_TPC))) - 1 * internal.compartment * internal.mu_3 * z_Effector_Cells + 1 * internal.compartment * (internal.r_3);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "x_PCC", "y_PSC", "z_Effector_Cells", "w_TPC", "v_TSC", "R_siRNA"];
    this.metadata.internalOrder = {b_1: null, b_2: null, beta_1: null, beta_2: null, beta_3: null, beta_4: null, beta_5: null, compartment: null, D_0: null, delta_1: null, initial_R_siRNA: null, initial_v_TSC: null, initial_w_TPC: null, initial_x_PCC: null, initial_y_PSC: null, initial_z_Effector_Cells: null, k_2: null, k_3: null, k_4: null, k_5: null, kxk: null, m_1: null, m_3: null, m_4: null, mu_2: null, mu_3: null, mu_4: null, mu_5: null, mu_6: null, p: null, r_1: null, r_2: null, r_3: null, r_4: null, R_siRNA_init: null, v: null, v_TSC_init: null, w_TPC_init: null, x_PCC_init: null, y_PSC_init: null, z_Effector_Cells_init: null};
    this.metadata.variableOrder = {x_PCC: null, y_PSC: null, z_Effector_Cells: null, w_TPC: null, v_TSC: null, R_siRNA: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
