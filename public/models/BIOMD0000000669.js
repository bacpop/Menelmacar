export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Pancreas = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(7).fill(0);
    state[0] = internal.initial_G1;
    state[1] = internal.initial_S;
    state[2] = internal.initial_G2;
    state[3] = internal.initial_R_apo;
    state[4] = internal.initial_R_other;
    state[5] = internal.initial_R_total;
    state[6] = internal.initial_R_live;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["C_b", "C_g", "CURVE_FIGURE_7a_d_g", "CURVE_FIGURE_7b_r_h", "CURVE_FIGURE_7c_f_i", "CURVE_G1", "CURVE_G2", "CURVE_S", "f_apo__0", "f_G1__0", "f_G2__0", "f_other__0", "f_S__0", "f1", "G1_init", "G2_init", "Hi_b", "Hi_g", "Hother_b", "Hother_g", "Hs_b", "Hs_g", "IC50_b", "IC50_g", "Imax_3", "Imax_b", "Imax_g", "Inh_1", "Inh_3", "Inh_b", "Inh_g", "IR50", "k_apo", "k_comb1", "k_comb2", "k_delay", "k_other", "k_repair", "k_tau", "k1", "k2", "k3", "Kother_b", "Kother_g", "Psi_i", "Psi_s", "R_0", "R_apo_init", "R_live_init", "R_other_init", "R_total_init", "S_init", "SC50_b", "SC50_g", "Smax_b", "Smax_g", "Sti_apo_b", "Sti_apo_g", "Sti_b", "Sti_g", "Sti_other_b", "Sti_other_g", "Tlag_r", "Tlag_re", "Tlag_sg"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "C_b", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_g", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CURVE_FIGURE_7a_d_g", internal, 0.93500000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CURVE_FIGURE_7b_r_h", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CURVE_FIGURE_7c_f_i", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CURVE_G1", internal, 0.48099999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CURVE_G2", internal, 0.34599999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CURVE_S", internal, 0.108, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f_apo__0", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f_G1__0", internal, 48.100000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f_G2__0", internal, 34.600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f_other__0", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f_S__0", internal, 10.800000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f1", internal, 0.46700000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Hi_b", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Hi_g", internal, 4.3399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Hother_b", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Hother_g", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Hs_b", internal, 1.24, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Hs_g", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IC50_b", internal, 154, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IC50_g", internal, 6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Imax_3", internal, 0.753, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Imax_b", internal, 0.17699999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Imax_g", internal, 0.878, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Inh_1", internal, 0.64208811034161695, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Inh_3", internal, 0.48349234708723698, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Inh_b", internal, 0.13532110091743099, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Inh_g", internal, 0.87425304256292902, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IR50", internal, 123000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_apo", internal, 0.0039399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_comb1", internal, 0.000919, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_comb2", internal, 0.00077499999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_delay", internal, 18.600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_other", internal, 0.00029700000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_repair", internal, 0.049500000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_tau", internal, 0.376, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.35699999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.114, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.222, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kother_b", internal, 0.0054999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kother_g", internal, 1.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Psi_i", internal, 0.94899999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Psi_s", internal, 1.26, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_0", internal, 236000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_apo_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_live_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_other_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_total_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SC50_b", internal, 50.100000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SC50_g", internal, 23.600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Smax_b", internal, 3.7200000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Smax_g", internal, 2.7400000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Sti_apo_b", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Sti_apo_g", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Sti_b", internal, 3.4545816684754298, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Sti_g", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Sti_other_b", internal, 2.75, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Sti_other_g", internal, 1.34928284767356e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tlag_r", internal, 55.7206202881042, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tlag_re", internal, 81.324245310488095, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tlag_sg", internal, 38.700000000000003, -Infinity, Infinity, false);
    internal.initial_G1 = internal.G1_init;
    internal.initial_G2 = internal.G2_init;
    internal.initial_R_apo = internal.R_apo_init;
    internal.initial_R_live = internal.R_live_init;
    internal.initial_R_other = internal.R_other_init;
    internal.initial_R_total = internal.R_total_init;
    internal.initial_S = internal.S_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const G1 = state[0];
    const S = state[1];
    const G2 = state[2];
    const R_apo = state[3];
    const R_other = state[4];
    dstatedt[6] = 0;
    dstatedt[5] = 0;
    dstatedt[0] = 2 * (1 - internal.Inh_3) * (1 - internal.Inh_b) * internal.k3 * G2 - (1 - internal.Inh_1) * (1 - internal.Inh_b) * internal.k1 * G1 - (1 + internal.Sti_apo_g) * (1 + internal.Sti_apo_b) * internal.k_apo * G1 - (1 + internal.Sti_other_g) * (1 + internal.Sti_other_b) * internal.k_other * G1;
    dstatedt[2] = (1 - internal.Inh_g) * internal.k2 * S - (1 - internal.Inh_3) * (1 - internal.Inh_b) * internal.k3 * G2 - (1 + internal.Sti_apo_g) * (1 + internal.Sti_apo_b) * internal.k_apo * G2 - (1 + internal.Sti_other_g) * (1 + internal.Sti_other_b) * internal.k_other * G2;
    dstatedt[3] = (1 + internal.Sti_apo_g) * (1 + internal.Sti_apo_b) * internal.k_apo * (G1 + S + G2) - (1 + internal.Sti_apo_g) * (1 + internal.Sti_apo_b) * internal.f1 * internal.k_apo * R_apo;
    dstatedt[4] = (1 + internal.Sti_other_g) * (1 + internal.Sti_other_b) * internal.k_other * (G1 + S + G2) - internal.k_other * R_other;
    dstatedt[1] = (1 - internal.Inh_1) * (1 - internal.Inh_b) * internal.k1 * G1 - (1 - internal.Inh_g) * internal.k2 * S - (1 + internal.Sti_apo_g) * (1 + internal.Sti_apo_b) * internal.k_apo * S - (1 + internal.Sti_other_g) * (1 + internal.Sti_other_b) * internal.k_other * S;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "G1", "S", "G2", "R_apo", "R_other", "R_total", "R_live"];
    this.metadata.internalOrder = {C_b: null, C_g: null, CURVE_FIGURE_7a_d_g: null, CURVE_FIGURE_7b_r_h: null, CURVE_FIGURE_7c_f_i: null, CURVE_G1: null, CURVE_G2: null, CURVE_S: null, f_apo__0: null, f_G1__0: null, f_G2__0: null, f_other__0: null, f_S__0: null, f1: null, G1_init: null, G2_init: null, Hi_b: null, Hi_g: null, Hother_b: null, Hother_g: null, Hs_b: null, Hs_g: null, IC50_b: null, IC50_g: null, Imax_3: null, Imax_b: null, Imax_g: null, Inh_1: null, Inh_3: null, Inh_b: null, Inh_g: null, initial_G1: null, initial_G2: null, initial_R_apo: null, initial_R_live: null, initial_R_other: null, initial_R_total: null, initial_S: null, IR50: null, k_apo: null, k_comb1: null, k_comb2: null, k_delay: null, k_other: null, k_repair: null, k_tau: null, k1: null, k2: null, k3: null, Kother_b: null, Kother_g: null, Pancreas: null, Psi_i: null, Psi_s: null, R_0: null, R_apo_init: null, R_live_init: null, R_other_init: null, R_total_init: null, S_init: null, SC50_b: null, SC50_g: null, Smax_b: null, Smax_g: null, Sti_apo_b: null, Sti_apo_g: null, Sti_b: null, Sti_g: null, Sti_other_b: null, Sti_other_g: null, Tlag_r: null, Tlag_re: null, Tlag_sg: null};
    this.metadata.variableOrder = {G1: null, S: null, G2: null, R_apo: null, R_other: null, R_total: null, R_live: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
