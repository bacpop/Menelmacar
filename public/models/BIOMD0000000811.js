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
    state[0] = internal.initial_C_PCC;
    state[1] = internal.initial_P_PSC;
    state[2] = internal.initial_E_CD8;
    state[3] = internal.initial_N_Killer;
    state[4] = internal.initial_H_T_Helper;
    state[5] = internal.initial_R_T_Regulatory;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "a_c", "a_e", "a_h", "a_n", "a_p", "a_r", "b_c", "b_e", "b_h", "b_n", "b_r", "beta_1_tau_2", "beta_2_tau_2", "beta_3_tau_2", "c_e", "c_n", "C_PCC_init", "d_c", "delta_e", "delta_h", "delta_n", "delta_r", "E_CD8_init", "f_e", "f_h", "f_n", "f_p", "g_e", "g_h", "g_n", "g_r", "gamma_2_tau_3", "h_e", "h_h", "h_n", "H_T_Helper_init", "k_c", "k_R", "lambda_p", "ModelValue_0", "ModelValue_2", "ModelValue_8", "mu_p", "N_Killer_init", "p_e", "p_h", "p_n", "P_PSC_init", "p_r", "r", "r_1", "r_2", "r_e", "R_T_Regulatory_init", "tau_1_alpha_1"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 560000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_c", internal, 1.0199999999999999e-11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_e", internal, 13000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_h", internal, 360000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_n", internal, 130000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_p", internal, 1.7856999999999999e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_r", internal, 0.00020000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_c", internal, 1.5e-11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_e", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_h", internal, 0.0011999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_n", internal, 0.014999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_r", internal, 0.00040000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_1_tau_2", internal, 4.4691000000000001e-13, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_2_tau_2", internal, 4.4691000000000001e-13, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_3_tau_2", internal, 4.4691000000000001e-13, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c_e", internal, 3.42e-12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c_n", internal, 1e-13, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_PCC_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_c", internal, 7.8700000000000002e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_e", internal, 1e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_h", internal, 1e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_n", internal, 1e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_r", internal, 0.023, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_CD8_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f_e", internal, 0.125, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f_h", internal, 0.125, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f_n", internal, 0.125, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f_p", internal, 0.125, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_e", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_h", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_n", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_r", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_2_tau_3", internal, 4.4691000000000001e-13, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h_e", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h_h", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h_n", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H_T_Helper_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_c", internal, 0.0195, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_R", internal, 1.5e-11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_p", internal, 0.014999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_0", internal, 0.0195, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_2", internal, 1.0199999999999999e-11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_8", internal, 1.7856999999999999e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_p", internal, 56000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N_Killer_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_e", internal, 0.125, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_h", internal, 0.125, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_n", internal, 0.125, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_PSC_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_r", internal, 0.125, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 9.9999999999999994e-12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_1", internal, 0.34499999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_2", internal, 0.28599999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_e", internal, 4.9999999999999997e-12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_T_Regulatory_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau_1_alpha_1", internal, 224830000000, -Infinity, Infinity, false);
    internal.initial_C_PCC = internal.C_PCC_init;
    internal.initial_E_CD8 = internal.E_CD8_init;
    internal.initial_H_T_Helper = internal.H_T_Helper_init;
    internal.initial_N_Killer = internal.N_Killer_init;
    internal.initial_P_PSC = internal.P_PSC_init;
    internal.initial_R_T_Regulatory = internal.R_T_Regulatory_init;
    internal.k_p = 0.10000000000000001 * internal.ModelValue_0;
    internal.mu_c = 0.10000000000000001 * internal.ModelValue_2 * internal.ModelValue_8;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const C_PCC = state[0];
    const P_PSC = state[1];
    const E_CD8 = state[2];
    const N_Killer = state[3];
    const H_T_Helper = state[4];
    const R_T_Regulatory = state[5];
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.a_e) - 1 * internal.compartment * internal.b_e * E_CD8 - 1 * internal.compartment * (internal.c_e * E_CD8 * C_PCC) + 1 * internal.compartment * (internal.r_e * N_Killer * C_PCC) + 1 * internal.compartment * (internal.p_e * H_T_Helper * E_CD8 / (internal.g_e * internal.tau_1_alpha_1 + H_T_Helper)) + 1 * internal.compartment * (internal.f_e * E_CD8 * (internal.beta_1_tau_2 * E_CD8 + internal.beta_2_tau_2 * N_Killer + internal.beta_3_tau_2 * H_T_Helper) / (internal.h_e + internal.beta_1_tau_2 * E_CD8 + internal.beta_2_tau_2 * N_Killer + internal.beta_3_tau_2 * H_T_Helper)) - 1 * internal.compartment * (internal.delta_e * R_T_Regulatory * E_CD8);
    dstatedt[4] = 0 + 1 * internal.compartment * (internal.a_h) - 1 * internal.compartment * internal.b_h * H_T_Helper + 1 * internal.compartment * (internal.p_h * H_T_Helper * H_T_Helper / (internal.g_h * internal.tau_1_alpha_1 + H_T_Helper)) + 1 * internal.compartment * (internal.f_h * H_T_Helper * (internal.beta_1_tau_2 * E_CD8 + internal.beta_2_tau_2 * N_Killer + internal.beta_3_tau_2 * H_T_Helper) / (internal.h_h + internal.beta_1_tau_2 * E_CD8 + internal.beta_2_tau_2 * N_Killer + internal.beta_3_tau_2 * H_T_Helper)) - 1 * internal.compartment * (internal.delta_h * R_T_Regulatory * H_T_Helper);
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.a_n) - 1 * internal.compartment * internal.b_n * N_Killer - 1 * internal.compartment * (internal.c_n * N_Killer * C_PCC) + 1 * internal.compartment * (internal.p_n * H_T_Helper * N_Killer / (internal.g_n * internal.tau_1_alpha_1 + H_T_Helper)) + 1 * internal.compartment * (internal.f_n * N_Killer * (internal.beta_1_tau_2 * E_CD8 + internal.beta_2_tau_2 * N_Killer + internal.beta_3_tau_2 * H_T_Helper) / (internal.h_n + internal.beta_1_tau_2 * E_CD8 + internal.beta_2_tau_2 * N_Killer + internal.beta_3_tau_2 * H_T_Helper)) - 1 * internal.compartment * internal.delta_n * N_Killer;
    dstatedt[5] = 0 + 1 * internal.compartment * (internal.a) - 1 * internal.compartment * internal.delta_r * R_T_Regulatory + 1 * internal.compartment * (internal.b_r * H_T_Helper) + 1 * internal.compartment * (internal.a_r * E_CD8) + 1 * internal.compartment * (internal.p_r * H_T_Helper * R_T_Regulatory / (internal.g_r * internal.tau_1_alpha_1 + H_T_Helper)) - 1 * internal.compartment * (internal.r * N_Killer * R_T_Regulatory);
    dstatedt[0] = 0 + 1 * internal.compartment * ((internal.k_c + internal.mu_c * P_PSC) * C_PCC * (1 - internal.a_c * C_PCC)) - 1 * internal.compartment * (internal.b_c * N_Killer * C_PCC) - 1 * internal.compartment * (internal.d_c * E_CD8 * C_PCC / ((1 + internal.r_1 * R_T_Regulatory) * (1 + internal.r_2 * internal.gamma_2_tau_3 * C_PCC)));
    dstatedt[1] = 0 + 1 * internal.compartment * ((internal.k_p + internal.f_p * C_PCC / (internal.mu_p + C_PCC)) * P_PSC * (1 - internal.a_p * P_PSC)) - 1 * internal.compartment * internal.lambda_p * P_PSC;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "C_PCC", "P_PSC", "E_CD8", "N_Killer", "H_T_Helper", "R_T_Regulatory"];
    this.metadata.internalOrder = {a: null, a_c: null, a_e: null, a_h: null, a_n: null, a_p: null, a_r: null, b_c: null, b_e: null, b_h: null, b_n: null, b_r: null, beta_1_tau_2: null, beta_2_tau_2: null, beta_3_tau_2: null, c_e: null, c_n: null, C_PCC_init: null, compartment: null, d_c: null, delta_e: null, delta_h: null, delta_n: null, delta_r: null, E_CD8_init: null, f_e: null, f_h: null, f_n: null, f_p: null, g_e: null, g_h: null, g_n: null, g_r: null, gamma_2_tau_3: null, h_e: null, h_h: null, h_n: null, H_T_Helper_init: null, initial_C_PCC: null, initial_E_CD8: null, initial_H_T_Helper: null, initial_N_Killer: null, initial_P_PSC: null, initial_R_T_Regulatory: null, k_c: null, k_p: null, k_R: null, lambda_p: null, ModelValue_0: null, ModelValue_2: null, ModelValue_8: null, mu_c: null, mu_p: null, N_Killer_init: null, p_e: null, p_h: null, p_n: null, P_PSC_init: null, p_r: null, r: null, r_1: null, r_2: null, r_e: null, R_T_Regulatory_init: null, tau_1_alpha_1: null};
    this.metadata.variableOrder = {C_PCC: null, P_PSC: null, E_CD8: null, N_Killer: null, H_T_Helper: null, R_T_Regulatory: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
