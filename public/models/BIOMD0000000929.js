export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.lxl = 0.66666666666666696;
    internal.Pancreas = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(5).fill(0);
    state[0] = internal.initial_Pancreatic_cancer_cells__C;
    state[1] = internal.initial_Pancreatic_stellate_cells__P;
    state[2] = internal.initial_CD8__T_cells__T;
    state[3] = internal.initial_NK_cells__N;
    state[4] = internal.initial_helper_T_cells__H;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a_c", "a_h", "a_n", "a_t", "alpha2_tau2", "b_c", "b_h", "b_n", "b_p", "b_t", "beta2_tau2", "c_c", "c_h", "c_n", "c_t", "CD8__T_cells__T_init", "d_c", "d_t", "e_t", "f_h", "f_n", "f_p", "f_t", "g_h", "g_n", "g_t", "gamma2_tau2", "h_h", "h_n", "h_t", "helper_T_cells__H_init", "lambda_p", "mu_p", "NK_cells__N_init", "p_h", "p_n", "p_t", "Pancreatic_cancer_cells__C_init", "Pancreatic_stellate_cells__P_init", "s", "tau1_alpha1"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a_c", internal, 0.0195, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_h", internal, 9600, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_n", internal, 130000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_t", internal, 3500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha2_tau2", internal, 4.4691000000000001e-13, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_c", internal, 1.0199999999999999e-11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_h", internal, 0.0011999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_n", internal, 0.014999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_p", internal, 1.7856999999999999e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_t", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta2_tau2", internal, 4.4691000000000001e-13, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c_c", internal, 1.5e-11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c_h", internal, 5.0000000000000002e-11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c_n", internal, 1e-13, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c_t", internal, 3.42e-12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CD8__T_cells__T_init", internal, 700000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_c", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_t", internal, 3e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e_t", internal, 4.9999999999999997e-12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f_h", internal, 0.125, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f_n", internal, 0.125, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f_p", internal, 0.125, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f_t", internal, 0.125, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_h", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_n", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_t", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma2_tau2", internal, 4.4691000000000001e-13, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h_h", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h_n", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h_t", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "helper_T_cells__H_init", internal, 1881600000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_p", internal, 0.014999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_p", internal, 56000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NK_cells__N_init", internal, 352800000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_h", internal, 0.125, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_n", internal, 0.125, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_t", internal, 0.125, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pancreatic_cancer_cells__C_init", internal, 1000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pancreatic_stellate_cells__P_init", internal, 5600000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau1_alpha1", internal, 224830000000, -Infinity, Infinity, false);
    internal.a_p = 0.10000000000000001 * internal.a_c;
    internal.initial_CD8__T_cells__T = internal.CD8__T_cells__T_init;
    internal.initial_helper_T_cells__H = internal.helper_T_cells__H_init;
    internal.initial_NK_cells__N = internal.NK_cells__N_init;
    internal.initial_Pancreatic_cancer_cells__C = internal.Pancreatic_cancer_cells__C_init;
    internal.initial_Pancreatic_stellate_cells__P = internal.Pancreatic_stellate_cells__P_init;
    internal.mu_c = 0.10000000000000001 * internal.a_c * internal.b_p;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Pancreatic_cancer_cells__C = state[0];
    const Pancreatic_stellate_cells__P = state[1];
    const CD8__T_cells__T = state[2];
    const NK_cells__N = state[3];
    const helper_T_cells__H = state[4];
    dstatedt[2] = 0 + 1 * internal.Pancreas * (internal.a_t) - 1 * internal.Pancreas * internal.b_t * CD8__T_cells__T - 1 * internal.Pancreas * (internal.c_t * CD8__T_cells__T * Pancreatic_cancer_cells__C) - 1 * internal.Pancreas * (internal.d_t * Math.pow((CD8__T_cells__T), (2))) + 1 * internal.Pancreas * (internal.e_t * NK_cells__N * Pancreatic_cancer_cells__C) + 1 * internal.Pancreas * (internal.p_t * helper_T_cells__H * CD8__T_cells__T / (internal.g_t * internal.tau1_alpha1 + helper_T_cells__H)) + 1 * internal.Pancreas * (internal.f_t * (internal.alpha2_tau2 * CD8__T_cells__T + internal.beta2_tau2 * NK_cells__N + internal.gamma2_tau2 * helper_T_cells__H) * CD8__T_cells__T / (internal.h_t + internal.alpha2_tau2 * CD8__T_cells__T + internal.beta2_tau2 * NK_cells__N + internal.gamma2_tau2 * helper_T_cells__H));
    dstatedt[4] = 0 + 1 * internal.Pancreas * (internal.a_h) - 1 * internal.Pancreas * internal.b_h * helper_T_cells__H - 1 * internal.Pancreas * (internal.c_h * Math.pow((helper_T_cells__H), (2))) + 1 * internal.Pancreas * (internal.p_h * helper_T_cells__H * helper_T_cells__H / (internal.g_h * internal.tau1_alpha1 + helper_T_cells__H)) + 1 * internal.Pancreas * (internal.f_h * (internal.alpha2_tau2 * CD8__T_cells__T + internal.beta2_tau2 * NK_cells__N + internal.gamma2_tau2 * helper_T_cells__H) * helper_T_cells__H / (internal.h_h + internal.alpha2_tau2 * CD8__T_cells__T + internal.beta2_tau2 * NK_cells__N + internal.gamma2_tau2 * helper_T_cells__H));
    dstatedt[3] = 0 + 1 * internal.Pancreas * (internal.a_n) - 1 * internal.Pancreas * internal.b_n * NK_cells__N - 1 * internal.Pancreas * (internal.c_n * Pancreatic_cancer_cells__C * NK_cells__N) + 1 * internal.Pancreas * (internal.p_n * helper_T_cells__H * NK_cells__N / (internal.g_n * internal.tau1_alpha1 + helper_T_cells__H)) + 1 * internal.Pancreas * (internal.f_n * (internal.alpha2_tau2 * CD8__T_cells__T + internal.beta2_tau2 * NK_cells__N + internal.gamma2_tau2 * helper_T_cells__H) * NK_cells__N / (internal.h_n + internal.alpha2_tau2 * CD8__T_cells__T + internal.beta2_tau2 * NK_cells__N + internal.gamma2_tau2 * helper_T_cells__H));
    dstatedt[0] = 0 + 1 * internal.Pancreas * (internal.a_c * Pancreatic_cancer_cells__C * (1 - internal.b_c * Pancreatic_cancer_cells__C)) - 1 * internal.Pancreas * (internal.c_c * NK_cells__N * Pancreatic_cancer_cells__C) - 1 * internal.Pancreas * (internal.d_c * (Math.pow((CD8__T_cells__T / Pancreatic_cancer_cells__C), (internal.lxl)) / (internal.s + Math.pow((CD8__T_cells__T / Pancreatic_cancer_cells__C), (internal.lxl)))) * Pancreatic_cancer_cells__C) + 1 * internal.Pancreas * (internal.mu_c * Pancreatic_stellate_cells__P * Pancreatic_cancer_cells__C * (1 - internal.b_c * Pancreatic_cancer_cells__C));
    dstatedt[1] = 0 + 1 * internal.Pancreas * (internal.a_p * Pancreatic_stellate_cells__P * (1 - internal.b_p * Pancreatic_stellate_cells__P)) - 1 * internal.Pancreas * internal.lambda_p * Pancreatic_stellate_cells__P + 1 * internal.Pancreas * (internal.f_p * Pancreatic_cancer_cells__C / (internal.mu_p + Pancreatic_cancer_cells__C) * Pancreatic_stellate_cells__P * (1 - internal.b_p * Pancreatic_stellate_cells__P));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Pancreatic_cancer_cells__C", "Pancreatic_stellate_cells__P", "CD8__T_cells__T", "NK_cells__N", "helper_T_cells__H"];
    this.metadata.internalOrder = {a_c: null, a_h: null, a_n: null, a_p: null, a_t: null, alpha2_tau2: null, b_c: null, b_h: null, b_n: null, b_p: null, b_t: null, beta2_tau2: null, c_c: null, c_h: null, c_n: null, c_t: null, CD8__T_cells__T_init: null, d_c: null, d_t: null, e_t: null, f_h: null, f_n: null, f_p: null, f_t: null, g_h: null, g_n: null, g_t: null, gamma2_tau2: null, h_h: null, h_n: null, h_t: null, helper_T_cells__H_init: null, initial_CD8__T_cells__T: null, initial_helper_T_cells__H: null, initial_NK_cells__N: null, initial_Pancreatic_cancer_cells__C: null, initial_Pancreatic_stellate_cells__P: null, lambda_p: null, lxl: null, mu_c: null, mu_p: null, NK_cells__N_init: null, p_h: null, p_n: null, p_t: null, Pancreas: null, Pancreatic_cancer_cells__C_init: null, Pancreatic_stellate_cells__P_init: null, s: null, tau1_alpha1: null};
    this.metadata.variableOrder = {Pancreatic_cancer_cells__C: null, Pancreatic_stellate_cells__P: null, CD8__T_cells__T: null, NK_cells__N: null, helper_T_cells__H: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
