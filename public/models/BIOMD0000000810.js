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
    var p_100000_SR_init = 100000 * internal.initial_Resistant_Stem_Cells_S_R;
    internal.initial_p_100000_SR = p_100000_SR_init;
    var state = Array(14).fill(0);
    state[0] = internal.initial_Cancer_Stem_Cells_S;
    state[1] = internal.initial_Cancer_Cells_C;
    state[2] = internal.initial_Resistant_Stem_Cells_S_R;
    state[3] = internal.initial_Resistant_Cancer_Cells_C_R;
    state[4] = internal.initial_M1_Tumor_Associated_Macrophages;
    state[5] = internal.initial_M2_Tumor_Associated_Macrophages;
    state[6] = internal.initial_Type_I_T_helper_Cell_T_H1;
    state[7] = internal.initial_Type_II_T_helper_cells_T_H2;
    state[8] = internal.initial_Cytotoxic_T_Cells_T_C;
    state[9] = internal.initial_Regulatory_T_Cells_T_reg;
    state[10] = internal.initial_Interferon_gamma;
    state[11] = internal.initial_Cytokine_IL10;
    state[12] = internal.initial_Cytokine_IL2;
    state[13] = internal.initial_p_100000_SR;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["beta_M2", "beta_Tc", "beta_Th1CK2", "beta_Th1CK3", "beta_Th2", "beta_Treg", "Cancer_Cells_C_init", "Cancer_Stem_Cells_S_init", "Cytokine_IL10_init", "Cytokine_IL2_init", "Cytotoxic_T_Cells_T_C_init", "delta_C", "delta_Ck1", "delta_Ck2", "delta_Ck3", "delta_CR", "delta_M1", "delta_M2", "delta_S", "delta_Tc", "delta_Th1", "delta_Th2", "delta_Treg", "gamma_C", "gamma_CR", "gamma_M1", "gamma_M2", "gamma_S", "gamma_Tc", "gamma_Th1", "gamma_Th2", "gamma_Treg", "Interferon_gamma_init", "K_tumor", "k1", "k10", "k11", "k2", "k3", "k4", "k5", "k6", "k7", "k8", "k9", "ktc1", "ktc2", "ktc3", "ktc4", "lambda_M1", "lambda_M2", "lambda_Tc1", "lambda_Tc2", "lambda_Tc3", "lambda_Tc4", "lambda_Th1", "lambda_Th2", "lambda_Treg2", "m_C", "m_S", "M1_Tumor_Associated_Macrophages_init", "M2_Tumor_Associated_Macrophages_init", "myu_C1", "myu_C2", "myu_M1Ck2", "myu_M2Ck1", "myu_S", "myu_SR", "myu_TcS", "myu_TcTreg", "myu_Th1Ck1", "myu_Th1Ck3", "myu_TregCk1", "p_1", "p_2", "r_1", "r_2", "Regulatory_T_Cells_T_reg_init", "Resistant_Cancer_Cells_C_R_init", "Resistant_Stem_Cells_S_R_init", "tck", "Type_I_T_helper_Cell_T_H1_init", "Type_II_T_helper_cells_T_H2_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "beta_M2", internal, 1.0000000000000001e-15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_Tc", internal, 1e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_Th1CK2", internal, 9.9999999999999995e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_Th1CK3", internal, 1e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_Th2", internal, 1.0000000000000001e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_Treg", internal, 1e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cancer_Cells_C_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cancer_Stem_Cells_S_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cytokine_IL10_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cytokine_IL2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cytotoxic_T_Cells_T_C_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_C", internal, 0.80549999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_Ck1", internal, 19.757000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_Ck2", internal, 6.1212, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_Ck3", internal, 8.664339, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_CR", internal, 5.3699999999999997e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_M1", internal, 1.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_M2", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_S", internal, 1.9999999999999999e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_Tc", internal, 5.2938999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_Th1", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_Th2", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_Treg", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_C", internal, 0.12820000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_CR", internal, 0.12820000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_M1", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_M2", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_S", internal, 0.14999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_Tc", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_Th1", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_Th2", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_Treg", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Interferon_gamma_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_tumor", internal, 20000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 2.0531000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 3.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 6.7979000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 6.9936999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ktc1", internal, 1000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ktc2", internal, 100000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ktc3", internal, 1000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ktc4", internal, 1000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_M1", internal, 100000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_M2", internal, 1000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_Tc1", internal, 100000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_Tc2", internal, 500000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_Tc3", internal, 50000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_Tc4", internal, 100000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_Th1", internal, 100000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_Th2", internal, 100000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_Treg2", internal, 10000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_C", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_S", internal, 3.9999999999999998e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M1_Tumor_Associated_Macrophages_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M2_Tumor_Associated_Macrophages_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "myu_C1", internal, 0.75, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "myu_C2", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "myu_M1Ck2", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "myu_M2Ck1", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "myu_S", internal, 0.17000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "myu_SR", internal, 0.17999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "myu_TcS", internal, 1e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "myu_TcTreg", internal, 1.5e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "myu_Th1Ck1", internal, 1.0000000000000001e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "myu_Th1Ck3", internal, 0.1245, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "myu_TregCk1", internal, 9.9999999999999995e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_1", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_2", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_1", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_2", internal, 1.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Regulatory_T_Cells_T_reg_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Resistant_Cancer_Cells_C_R_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Resistant_Stem_Cells_S_R_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tck", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Type_I_T_helper_Cell_T_H1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Type_II_T_helper_cells_T_H2_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_Cancer_Cells_C = internal.Cancer_Cells_C_init;
    internal.initial_Cancer_Stem_Cells_S = internal.Cancer_Stem_Cells_S_init;
    internal.initial_Cytokine_IL10 = internal.Cytokine_IL10_init;
    internal.initial_Cytokine_IL2 = internal.Cytokine_IL2_init;
    internal.initial_Cytotoxic_T_Cells_T_C = internal.Cytotoxic_T_Cells_T_C_init;
    internal.initial_Interferon_gamma = internal.Interferon_gamma_init;
    internal.initial_M1_Tumor_Associated_Macrophages = internal.M1_Tumor_Associated_Macrophages_init;
    internal.initial_M2_Tumor_Associated_Macrophages = internal.M2_Tumor_Associated_Macrophages_init;
    internal.initial_Regulatory_T_Cells_T_reg = internal.Regulatory_T_Cells_T_reg_init;
    internal.initial_Resistant_Cancer_Cells_C_R = internal.Resistant_Cancer_Cells_C_R_init;
    internal.initial_Resistant_Stem_Cells_S_R = internal.Resistant_Stem_Cells_S_R_init;
    internal.initial_Type_I_T_helper_Cell_T_H1 = internal.Type_I_T_helper_Cell_T_H1_init;
    internal.initial_Type_II_T_helper_cells_T_H2 = internal.Type_II_T_helper_cells_T_H2_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Cancer_Stem_Cells_S = state[0];
    const Cancer_Cells_C = state[1];
    const Resistant_Stem_Cells_S_R = state[2];
    const Resistant_Cancer_Cells_C_R = state[3];
    const M1_Tumor_Associated_Macrophages = state[4];
    const M2_Tumor_Associated_Macrophages = state[5];
    const Type_I_T_helper_Cell_T_H1 = state[6];
    const Type_II_T_helper_cells_T_H2 = state[7];
    const Cytotoxic_T_Cells_T_C = state[8];
    const Regulatory_T_Cells_T_reg = state[9];
    const Interferon_gamma = state[10];
    const Cytokine_IL10 = state[11];
    const Cytokine_IL2 = state[12];
    dstatedt[13] = 0 + 0;
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.gamma_S * internal.p_1 * Cancer_Stem_Cells_S) + 1 * internal.compartment * (internal.p_2 * internal.gamma_S * Cancer_Stem_Cells_S) + 1 * internal.compartment * (internal.gamma_C * (1 - internal.m_C) * Math.log(0.5 * internal.K_tumor / (Cancer_Cells_C + internal.r_1))) - 1 * internal.compartment * (internal.delta_C * Cancer_Cells_C) - 1 * internal.compartment * (internal.m_C * internal.gamma_C * Cancer_Cells_C) - 1 * internal.compartment * (internal.myu_C2 * Cancer_Cells_C * Interferon_gamma / (Interferon_gamma + internal.k4)) + 1 * internal.compartment * (internal.myu_C1 * Cancer_Cells_C * Cytokine_IL10 / (Cytokine_IL10 + internal.k3)) - 1 * internal.compartment * (internal.tck * Cancer_Cells_C * Cytotoxic_T_Cells_T_C / (internal.ktc3 + Cytotoxic_T_Cells_T_C));
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.gamma_S * (1 - internal.p_1 - internal.p_2) * Cancer_Stem_Cells_S) - 1 * internal.compartment * (internal.delta_S * Cancer_Stem_Cells_S) - 1 * internal.compartment * (internal.gamma_S * internal.m_S * (1 - internal.p_1 / 2 - internal.p_2) * Cancer_Stem_Cells_S) + 1 * internal.compartment * (internal.gamma_S * internal.p_1 * Cancer_Stem_Cells_S) - 1 * internal.compartment * (internal.gamma_S * internal.p_1 * Cancer_Stem_Cells_S) - 1 * internal.compartment * (internal.p_2 * internal.gamma_S * Cancer_Stem_Cells_S) - 1 * internal.compartment * (internal.myu_S * Cancer_Stem_Cells_S * Interferon_gamma / (Interferon_gamma + internal.k1)) - 1 * internal.compartment * (internal.tck * Cancer_Stem_Cells_S * Cytotoxic_T_Cells_T_C / (internal.ktc1 + Cytotoxic_T_Cells_T_C));
    dstatedt[11] = 0 + 1 * internal.compartment * (internal.beta_M2 * M2_Tumor_Associated_Macrophages) + 1 * internal.compartment * (internal.beta_Treg * Regulatory_T_Cells_T_reg) + 1 * internal.compartment * (internal.beta_Th2 * Type_II_T_helper_cells_T_H2) - 1 * internal.compartment * (internal.delta_Ck1 * Cytokine_IL10);
    dstatedt[12] = 0 + 1 * internal.compartment * (internal.beta_Th1CK3 * Type_I_T_helper_Cell_T_H1) - 1 * internal.compartment * (internal.delta_Ck3 * Cytokine_IL2);
    dstatedt[8] = 0 + 1 * internal.compartment * (internal.gamma_Tc * Cytotoxic_T_Cells_T_C * (Cancer_Cells_C + Resistant_Cancer_Cells_C_R) / (Cytotoxic_T_Cells_T_C + internal.lambda_Tc1)) + 1 * internal.compartment * (internal.gamma_Tc * Cytotoxic_T_Cells_T_C * Type_I_T_helper_Cell_T_H1 / (Cytotoxic_T_Cells_T_C + internal.lambda_Tc4)) - 1 * internal.compartment * (internal.myu_TcS * Cytotoxic_T_Cells_T_C * (Cancer_Stem_Cells_S + Resistant_Stem_Cells_S_R) / (Cytotoxic_T_Cells_T_C + internal.lambda_Tc2)) - 1 * internal.compartment * (internal.delta_Tc * Cytotoxic_T_Cells_T_C) - 1 * internal.compartment * (internal.myu_TcTreg * Cytotoxic_T_Cells_T_C * Regulatory_T_Cells_T_reg / (internal.lambda_Tc3 + Regulatory_T_Cells_T_reg));
    dstatedt[10] = 0 + 1 * internal.compartment * (internal.beta_Th1CK2 * Type_I_T_helper_Cell_T_H1) + 1 * internal.compartment * (internal.beta_Tc * Cytotoxic_T_Cells_T_C) - 1 * internal.compartment * (internal.delta_Ck2 * Interferon_gamma);
    dstatedt[4] = 0 + 1 * internal.compartment * (internal.gamma_M1 * M1_Tumor_Associated_Macrophages * (Cancer_Cells_C + Resistant_Cancer_Cells_C_R) / (M1_Tumor_Associated_Macrophages + internal.lambda_M1)) - 1 * internal.compartment * (internal.delta_M1 * M1_Tumor_Associated_Macrophages) + 1 * internal.compartment * (internal.myu_M1Ck2 * M1_Tumor_Associated_Macrophages * Interferon_gamma / (Interferon_gamma + internal.k7));
    dstatedt[5] = 0 + 1 * internal.compartment * (internal.gamma_M2 * M2_Tumor_Associated_Macrophages * (Cancer_Cells_C + Resistant_Cancer_Cells_C_R) / (M2_Tumor_Associated_Macrophages + internal.lambda_M2)) - 1 * internal.compartment * (internal.delta_M2 * M2_Tumor_Associated_Macrophages) + 1 * internal.compartment * (internal.myu_M2Ck1 * M2_Tumor_Associated_Macrophages * Cytokine_IL10 / (Cytokine_IL10 + internal.k10));
    dstatedt[9] = 0 + 1 * internal.compartment * (internal.gamma_Treg * Regulatory_T_Cells_T_reg * M2_Tumor_Associated_Macrophages / (Regulatory_T_Cells_T_reg + internal.lambda_Treg2)) - 1 * internal.compartment * (internal.delta_Treg * Regulatory_T_Cells_T_reg) + 1 * internal.compartment * (internal.myu_TregCk1 * Cytokine_IL10 * Regulatory_T_Cells_T_reg / (Regulatory_T_Cells_T_reg + internal.k11));
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.p_1 * internal.gamma_S * Resistant_Stem_Cells_S_R) + 1 * internal.compartment * (internal.p_2 * internal.gamma_S * Resistant_Stem_Cells_S_R) + 1 * internal.compartment * (internal.m_C * internal.gamma_C * Cancer_Cells_C) + 1 * internal.compartment * (internal.gamma_C * Resistant_Cancer_Cells_C_R * Math.log(0.5 * internal.K_tumor / (Resistant_Cancer_Cells_C_R + internal.r_2))) - 1 * internal.compartment * (internal.delta_CR * Resistant_Cancer_Cells_C_R) - 1 * internal.compartment * (internal.myu_C2 * Resistant_Cancer_Cells_C_R * Interferon_gamma / (Interferon_gamma + internal.k6)) + 1 * internal.compartment * (internal.myu_C1 * Resistant_Cancer_Cells_C_R * Cytokine_IL10 / (Cytokine_IL10 + internal.k5)) - 1 * internal.compartment * (internal.tck * Resistant_Cancer_Cells_C_R * Cytotoxic_T_Cells_T_C / (internal.ktc4 + Cytotoxic_T_Cells_T_C));
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.gamma_S * internal.m_S * (1 - internal.p_1 / 2 - internal.p_2) * Cancer_Stem_Cells_S) + 1 * internal.compartment * (internal.gamma_S * (1 - internal.p_1 - internal.p_2) * Resistant_Stem_Cells_S_R) - 1 * internal.compartment * (internal.delta_S * Resistant_Stem_Cells_S_R) + 1 * internal.compartment * (internal.p_1 * internal.gamma_S * Resistant_Stem_Cells_S_R) - 1 * internal.compartment * (internal.p_1 * internal.gamma_S * Resistant_Stem_Cells_S_R) - 1 * internal.compartment * (internal.p_2 * internal.gamma_S * Resistant_Stem_Cells_S_R) - 1 * internal.compartment * (internal.myu_SR * Resistant_Stem_Cells_S_R * Interferon_gamma / (Interferon_gamma + internal.k2)) - 1 * internal.compartment * (internal.tck * Resistant_Stem_Cells_S_R * Cytotoxic_T_Cells_T_C / (internal.ktc2 + Cytotoxic_T_Cells_T_C));
    dstatedt[6] = 0 + 1 * internal.compartment * (internal.gamma_Th1 * Type_I_T_helper_Cell_T_H1 * M1_Tumor_Associated_Macrophages / (internal.lambda_Th1 + Type_I_T_helper_Cell_T_H1)) - 1 * internal.compartment * (internal.delta_Th1 * Type_I_T_helper_Cell_T_H1) + 1 * internal.compartment * (internal.myu_Th1Ck3 * Cytokine_IL2 * Type_I_T_helper_Cell_T_H1 / (Cytokine_IL2 + internal.k9)) - 1 * internal.compartment * (internal.myu_Th1Ck1 * Cytokine_IL10 * Type_I_T_helper_Cell_T_H1 / (Cytokine_IL10 + internal.k8));
    dstatedt[7] = 0 + 1 * internal.compartment * (internal.gamma_Th2 * Type_II_T_helper_cells_T_H2 * M2_Tumor_Associated_Macrophages / (internal.lambda_Th2 + Type_II_T_helper_cells_T_H2)) - 1 * internal.compartment * (internal.delta_Th2 * Type_II_T_helper_cells_T_H2);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Cancer_Stem_Cells_S", "Cancer_Cells_C", "Resistant_Stem_Cells_S_R", "Resistant_Cancer_Cells_C_R", "M1_Tumor_Associated_Macrophages", "M2_Tumor_Associated_Macrophages", "Type_I_T_helper_Cell_T_H1", "Type_II_T_helper_cells_T_H2", "Cytotoxic_T_Cells_T_C", "Regulatory_T_Cells_T_reg", "Interferon_gamma", "Cytokine_IL10", "Cytokine_IL2", "p_100000_SR"];
    this.metadata.internalOrder = {beta_M2: null, beta_Tc: null, beta_Th1CK2: null, beta_Th1CK3: null, beta_Th2: null, beta_Treg: null, Cancer_Cells_C_init: null, Cancer_Stem_Cells_S_init: null, compartment: null, Cytokine_IL10_init: null, Cytokine_IL2_init: null, Cytotoxic_T_Cells_T_C_init: null, delta_C: null, delta_Ck1: null, delta_Ck2: null, delta_Ck3: null, delta_CR: null, delta_M1: null, delta_M2: null, delta_S: null, delta_Tc: null, delta_Th1: null, delta_Th2: null, delta_Treg: null, gamma_C: null, gamma_CR: null, gamma_M1: null, gamma_M2: null, gamma_S: null, gamma_Tc: null, gamma_Th1: null, gamma_Th2: null, gamma_Treg: null, initial_Cancer_Cells_C: null, initial_Cancer_Stem_Cells_S: null, initial_Cytokine_IL10: null, initial_Cytokine_IL2: null, initial_Cytotoxic_T_Cells_T_C: null, initial_Interferon_gamma: null, initial_M1_Tumor_Associated_Macrophages: null, initial_M2_Tumor_Associated_Macrophages: null, initial_p_100000_SR: null, initial_Regulatory_T_Cells_T_reg: null, initial_Resistant_Cancer_Cells_C_R: null, initial_Resistant_Stem_Cells_S_R: null, initial_Type_I_T_helper_Cell_T_H1: null, initial_Type_II_T_helper_cells_T_H2: null, Interferon_gamma_init: null, K_tumor: null, k1: null, k10: null, k11: null, k2: null, k3: null, k4: null, k5: null, k6: null, k7: null, k8: null, k9: null, ktc1: null, ktc2: null, ktc3: null, ktc4: null, lambda_M1: null, lambda_M2: null, lambda_Tc1: null, lambda_Tc2: null, lambda_Tc3: null, lambda_Tc4: null, lambda_Th1: null, lambda_Th2: null, lambda_Treg2: null, m_C: null, m_S: null, M1_Tumor_Associated_Macrophages_init: null, M2_Tumor_Associated_Macrophages_init: null, myu_C1: null, myu_C2: null, myu_M1Ck2: null, myu_M2Ck1: null, myu_S: null, myu_SR: null, myu_TcS: null, myu_TcTreg: null, myu_Th1Ck1: null, myu_Th1Ck3: null, myu_TregCk1: null, p_1: null, p_2: null, r_1: null, r_2: null, Regulatory_T_Cells_T_reg_init: null, Resistant_Cancer_Cells_C_R_init: null, Resistant_Stem_Cells_S_R_init: null, tck: null, Type_I_T_helper_Cell_T_H1_init: null, Type_II_T_helper_cells_T_H2_init: null};
    this.metadata.variableOrder = {Cancer_Stem_Cells_S: null, Cancer_Cells_C: null, Resistant_Stem_Cells_S_R: null, Resistant_Cancer_Cells_C_R: null, M1_Tumor_Associated_Macrophages: null, M2_Tumor_Associated_Macrophages: null, Type_I_T_helper_Cell_T_H1: null, Type_II_T_helper_cells_T_H2: null, Cytotoxic_T_Cells_T_C: null, Regulatory_T_Cells_T_reg: null, Interferon_gamma: null, Cytokine_IL10: null, Cytokine_IL2: null, p_100000_SR: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
