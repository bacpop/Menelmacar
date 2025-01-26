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
    var state = Array(8).fill(0);
    state[0] = internal.initial_Tumor_Cell_u_1;
    state[1] = internal.initial_TE_immune_Cell_y_1;
    state[2] = internal.initial_CT_immune_Cell_x_1;
    state[3] = internal.initial_Tumor_Cell_u_2;
    state[4] = internal.initial_CT_immune_Cell_x_2;
    state[5] = internal.initial_TE_immune_Cell_y_2;
    state[6] = internal.initial_Necrotic_Cell_v_1;
    state[7] = internal.initial_Necrotic_Cell_v_2;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a_11", "a_12", "a_21", "a_22", "a_31", "a_32", "alpha_1", "alpha_2", "b_11", "b_12", "b_21", "b_22", "b_31", "b_32", "chi_1", "chi_2", "K_1", "K_2", "low_1", "low_2", "low_v", "lowC_1", "lowC_2", "lowD_1", "lowD_2", "lowEst_CT", "lowEst_TE", "max_1", "max_2", "max_CT", "max_v", "maxC_1", "maxC_2", "maxEst_TE", "min_v", "minC_1", "minC_2", "minEst_TE", "myu_1", "myu_2", "Necrotic_Cell_v_1_init", "Necrotic_Cell_v_2_init", "omega_1", "omega_2", "p", "r_1", "r_2", "rho_1", "rho_2", "s_1", "tau_1", "tau_2", "TE_immune_Cell_y_1_init", "TE_immune_Cell_y_2_init", "theta_1", "theta_2", "tilde_s_1", "Tumor_Cell_u_1_init", "Tumor_Cell_u_2_init", "up_1", "up_2", "up_v", "upC_1", "upC_2", "upD_1", "upD_2", "upEst_CT", "upEst_TE"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a_11", internal, 0.52400000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_12", internal, 0.52400000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_21", internal, 0.78600000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_22", internal, 0.78600000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_31", internal, 0.040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_32", internal, 0.040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_1", internal, 1000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_2", internal, 1000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_11", internal, 161000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_12", internal, 161000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_21", internal, 161000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_22", internal, 161000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_31", internal, 160000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_32", internal, 160000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "chi_1", internal, 5.0000000000000002e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "chi_2", internal, 5.0000000000000002e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_1", internal, 531960000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_2", internal, 531960000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "low_1", internal, 25424, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "low_2", internal, 25424, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "low_v", internal, 26600000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lowC_1", internal, 254237, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lowC_2", internal, 254237, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lowD_1", internal, 25424, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lowD_2", internal, 25424, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lowEst_CT", internal, 254237, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lowEst_TE", internal, 25424, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "max_1", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "max_2", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "max_CT", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "max_v", internal, 0.999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "maxC_1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "maxC_2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "maxEst_TE", internal, 0.002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "min_v", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "minC_1", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "minC_2", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "minEst_TE", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "myu_1", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "myu_2", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Necrotic_Cell_v_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Necrotic_Cell_v_2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "omega_1", internal, 0.58999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "omega_2", internal, 0.58999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_1", internal, 0.38, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_2", internal, 0.38, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho_1", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho_2", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s_1", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau_1", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau_2", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TE_immune_Cell_y_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TE_immune_Cell_y_2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "theta_1", internal, 65.670000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "theta_2", internal, 65.670000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tilde_s_1", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tumor_Cell_u_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tumor_Cell_u_2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "up_1", internal, 110169, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "up_2", internal, 110169, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "up_v", internal, 293000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "upC_1", internal, 1101695, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "upC_2", internal, 1101695, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "upD_1", internal, 110169, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "upD_2", internal, 110169, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "upEst_CT", internal, 1101695, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "upEst_TE", internal, 110169, -Infinity, Infinity, false);
    internal.CT_immune_Cell_x_1_init = internal.alpha_1 / internal.omega_1;
    internal.CT_immune_Cell_x_2_init = internal.alpha_2 / internal.omega_2;
    internal.initial_Necrotic_Cell_v_1 = internal.Necrotic_Cell_v_1_init;
    internal.initial_Necrotic_Cell_v_2 = internal.Necrotic_Cell_v_2_init;
    internal.initial_TE_immune_Cell_y_1 = internal.TE_immune_Cell_y_1_init;
    internal.initial_TE_immune_Cell_y_2 = internal.TE_immune_Cell_y_2_init;
    internal.initial_Tumor_Cell_u_1 = internal.Tumor_Cell_u_1_init;
    internal.initial_Tumor_Cell_u_2 = internal.Tumor_Cell_u_2_init;
    internal.initial_CT_immune_Cell_x_1 = internal.CT_immune_Cell_x_1_init;
    internal.initial_CT_immune_Cell_x_2 = internal.CT_immune_Cell_x_2_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Tumor_Cell_u_1 = state[0];
    const TE_immune_Cell_y_1 = state[1];
    const CT_immune_Cell_x_1 = state[2];
    const Tumor_Cell_u_2 = state[3];
    const CT_immune_Cell_x_2 = state[4];
    const TE_immune_Cell_y_2 = state[5];
    const Necrotic_Cell_v_1 = state[6];
    const Necrotic_Cell_v_2 = state[7];
    var e_x2_0_maxct_lowesstct_upestct = internal.max_CT * (1 - Math.tanh(6 * (CT_immune_Cell_x_2 - (internal.upEst_CT + internal.lowEst_CT) / 2) / (internal.upEst_CT - internal.lowEst_CT))) / (1 - Math.tanh(- 3 * (internal.upEst_CT + internal.lowEst_CT) / (internal.upEst_CT - internal.lowEst_CT)));
    var ed_1 = internal.chi_1 * Tumor_Cell_u_1;
    var ed_2 = internal.chi_2 * Tumor_Cell_u_2;
    var f_1 = internal.a_31 * Tumor_Cell_u_1 / (internal.b_31 + Tumor_Cell_u_1);
    var f_2 = internal.a_32 * Tumor_Cell_u_2 / (internal.b_32 + Tumor_Cell_u_2);
    var g_1 = internal.r_1 * (1 - Tumor_Cell_u_1 / internal.K_1);
    var g_2 = internal.r_2 * (1 - Tumor_Cell_u_2 / internal.K_2);
    var gamma_1 = (Math.tanh((TE_immune_Cell_y_1 - (internal.low_1 + internal.up_1) / 2) * 6 / (internal.up_1 - internal.low_1)) - Math.tanh((internal.low_1 + internal.up_1) * - 3 / (internal.up_1 - internal.low_1))) * internal.max_1 / 2 + 1;
    var gamma_2 = (Math.tanh((TE_immune_Cell_y_2 - (internal.low_2 + internal.up_2) / 2) * 6 / (internal.up_2 - internal.low_2)) - Math.tanh(- 3 * (internal.up_2 + internal.low_2) / (internal.up_2 - internal.low_2))) * internal.max_2 / 2 + 1;
    var lambda_1 = internal.a_11 * Tumor_Cell_u_1 / (internal.b_11 + Tumor_Cell_u_1) + internal.a_21 * Necrotic_Cell_v_1 / (internal.b_21 + Necrotic_Cell_v_1);
    var lambda_2 = internal.a_12 * Tumor_Cell_u_2 / (internal.b_12 + Tumor_Cell_u_2) + internal.a_22 * Necrotic_Cell_v_2 / (internal.b_22 + Necrotic_Cell_v_2);
    var sigma_1 = ((Math.tanh(6 * (CT_immune_Cell_x_1 - (internal.upC_1 + internal.lowC_1) / 2) / (internal.upC_1 - internal.lowC_1)) - Math.tanh(- 3 * (internal.upC_1 + internal.lowC_1) / (internal.upC_1 - internal.lowC_1))) * internal.maxC_1 / 2 + internal.minC_1) * (1 - Math.tanh(6 * (TE_immune_Cell_y_1 - (internal.upD_1 + internal.lowD_1) / 2) / (internal.upD_1 - internal.lowD_1))) / (1 - Math.tanh(- 3 * (internal.upD_1 + internal.lowD_1) / (internal.upD_1 - internal.lowD_1)));
    var sigma_2 = ((Math.tanh(6 * (CT_immune_Cell_x_2 - (internal.upC_2 + internal.lowC_2) / 2) / (internal.upC_2 - internal.lowC_2)) - Math.tanh(- 3 * (internal.upC_2 + internal.lowC_2) / (internal.upC_2 - internal.lowC_2))) * internal.maxC_2 / 2 + internal.minC_2) * (1 - Math.tanh(6 * (TE_immune_Cell_y_2 - (internal.upD_2 + internal.lowD_2) / 2) / (internal.upD_2 - internal.lowD_2))) / (1 - Math.tanh(- 3 * (internal.upD_2 + internal.lowD_2) / (internal.upD_2 - internal.lowD_2)));
    var v_v2_minv_maxv_lowv_upv = (Math.tanh(6 * (Necrotic_Cell_v_2 - (internal.up_v + internal.low_v) / 2) / (internal.up_v - internal.low_v)) - Math.tanh(- 3 * (internal.up_v + internal.low_v) / (internal.up_v - internal.low_v))) * internal.max_v / 2 + internal.min_v;
    var v_y2_minestte_maxestte_lowestte_upestte = (Math.tanh(6 * (TE_immune_Cell_y_2 - (internal.upEst_TE + internal.lowEst_TE) / 2) / (internal.upEst_TE - internal.lowEst_TE)) - Math.tanh(- 3 * (internal.upEst_TE + internal.lowEst_TE) / (internal.upEst_TE - internal.lowEst_TE))) * internal.maxEst_TE / 2 + internal.minEst_TE;
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.alpha_1) + 1 * internal.compartment * (lambda_1 * CT_immune_Cell_x_1) - 1 * internal.compartment * (internal.omega_1 * CT_immune_Cell_x_1) - 1 * internal.compartment * (internal.rho_1 * Tumor_Cell_u_1 * CT_immune_Cell_x_1) - 1 * internal.compartment * (ed_1 * CT_immune_Cell_x_1);
    dstatedt[4] = 0 + 1 * internal.compartment * (internal.alpha_2) + 1 * internal.compartment * (lambda_2 * CT_immune_Cell_x_2) - 1 * internal.compartment * (internal.omega_2 * CT_immune_Cell_x_2) - 1 * internal.compartment * (internal.rho_2 * Tumor_Cell_u_2 * CT_immune_Cell_x_2) - 1 * internal.compartment * (ed_2 * CT_immune_Cell_x_2);
    dstatedt[6] = 0 + 1 * internal.compartment * (internal.theta_1 * sigma_1 * Tumor_Cell_u_1) - 1 * internal.compartment * (internal.myu_1 * Necrotic_Cell_v_1);
    dstatedt[7] = 0 + 1 * internal.compartment * (internal.theta_2 * sigma_2 * Tumor_Cell_u_2) - 1 * internal.compartment * (internal.myu_2 * Necrotic_Cell_v_2);
    dstatedt[1] = 0 + 1 * internal.compartment * (ed_1 * CT_immune_Cell_x_1) - 1 * internal.compartment * (internal.tau_1 * TE_immune_Cell_y_1) - 1 * internal.compartment * (internal.tilde_s_1 * TE_immune_Cell_y_1) + 1 * internal.compartment * (f_1 * TE_immune_Cell_y_1);
    dstatedt[5] = 0 + 1 * internal.compartment * (ed_2 * CT_immune_Cell_x_2) - 1 * internal.compartment * (internal.tau_2 * TE_immune_Cell_y_2) + 1 * internal.compartment * (internal.p * internal.tilde_s_1 * TE_immune_Cell_y_1) + 1 * internal.compartment * (f_2 * TE_immune_Cell_y_2);
    dstatedt[0] = 0 + 1 * internal.compartment * (gamma_1 * g_1 * Tumor_Cell_u_1) - 1 * internal.compartment * (sigma_1 * Tumor_Cell_u_1) - 1 * internal.compartment * (internal.s_1 * Tumor_Cell_u_1);
    var est = e_x2_0_maxct_lowesstct_upestct * v_v2_minv_maxv_lowv_upv * v_y2_minestte_maxestte_lowestte_upestte;
    dstatedt[3] = 0 + 1 * internal.compartment * (gamma_2 * g_2 * Tumor_Cell_u_2) - 1 * internal.compartment * (sigma_2 * Tumor_Cell_u_2) + 1 * internal.compartment * (internal.s_1 * Tumor_Cell_u_1 * est);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Tumor_Cell_u_1", "TE_immune_Cell_y_1", "CT_immune_Cell_x_1", "Tumor_Cell_u_2", "CT_immune_Cell_x_2", "TE_immune_Cell_y_2", "Necrotic_Cell_v_1", "Necrotic_Cell_v_2"];
    this.metadata.internalOrder = {a_11: null, a_12: null, a_21: null, a_22: null, a_31: null, a_32: null, alpha_1: null, alpha_2: null, b_11: null, b_12: null, b_21: null, b_22: null, b_31: null, b_32: null, chi_1: null, chi_2: null, compartment: null, CT_immune_Cell_x_1_init: null, CT_immune_Cell_x_2_init: null, initial_CT_immune_Cell_x_1: null, initial_CT_immune_Cell_x_2: null, initial_Necrotic_Cell_v_1: null, initial_Necrotic_Cell_v_2: null, initial_TE_immune_Cell_y_1: null, initial_TE_immune_Cell_y_2: null, initial_Tumor_Cell_u_1: null, initial_Tumor_Cell_u_2: null, K_1: null, K_2: null, low_1: null, low_2: null, low_v: null, lowC_1: null, lowC_2: null, lowD_1: null, lowD_2: null, lowEst_CT: null, lowEst_TE: null, max_1: null, max_2: null, max_CT: null, max_v: null, maxC_1: null, maxC_2: null, maxEst_TE: null, min_v: null, minC_1: null, minC_2: null, minEst_TE: null, myu_1: null, myu_2: null, Necrotic_Cell_v_1_init: null, Necrotic_Cell_v_2_init: null, omega_1: null, omega_2: null, p: null, r_1: null, r_2: null, rho_1: null, rho_2: null, s_1: null, tau_1: null, tau_2: null, TE_immune_Cell_y_1_init: null, TE_immune_Cell_y_2_init: null, theta_1: null, theta_2: null, tilde_s_1: null, Tumor_Cell_u_1_init: null, Tumor_Cell_u_2_init: null, up_1: null, up_2: null, up_v: null, upC_1: null, upC_2: null, upD_1: null, upD_2: null, upEst_CT: null, upEst_TE: null};
    this.metadata.variableOrder = {Tumor_Cell_u_1: null, TE_immune_Cell_y_1: null, CT_immune_Cell_x_1: null, Tumor_Cell_u_2: null, CT_immune_Cell_x_2: null, TE_immune_Cell_y_2: null, Necrotic_Cell_v_1: null, Necrotic_Cell_v_2: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
