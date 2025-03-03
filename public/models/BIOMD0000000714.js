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
    state[0] = internal.initial_P;
    state[1] = internal.initial_Nstar;
    state[2] = internal.initial_D;
    state[3] = internal.initial_C_A;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["C_A_init", "c_inf", "D_init", "k_cn", "k_cnd", "k_dn", "k_mp", "k_nd", "k_nn", "k_np", "k_pg", "k_pm", "k_pn", "mu_c", "mu_d", "mu_m", "mu_n", "mu_nr", "Nstar_init", "p_inf", "P_init", "s_c", "s_m", "s_nr", "x_dn"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "C_A_init", internal, 0.125, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c_inf", internal, 0.28000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "D_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_cn", internal, 0.040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_cnd", internal, 48, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_dn", internal, 0.34999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_mp", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_nd", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_nn", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_np", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_pg", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_pm", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_pn", internal, 1.8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_c", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_d", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_m", internal, 0.002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_n", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_nr", internal, 0.12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Nstar_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_inf", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s_c", internal, 0.012500000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s_m", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s_nr", internal, 0.080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_dn", internal, 0.059999999999999998, -Infinity, Infinity, false);
    internal.initial_C_A = internal.C_A_init;
    internal.initial_D = internal.D_init;
    internal.initial_Nstar = internal.Nstar_init;
    internal.initial_P = internal.P_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const P = state[0];
    const Nstar = state[1];
    const D = state[2];
    const C_A = state[3];
    var f_Nstar = Nstar / (1 + Math.pow((C_A / internal.c_inf), (2)));
    var f_Nstar__k_cnd_D = (Nstar + internal.k_cnd * D) / (1 + Math.pow((C_A / internal.c_inf), (2)));
    var R = (internal.k_nn * Nstar + internal.k_np * P + internal.k_nd * D) / (1 + Math.pow((C_A / internal.c_inf), (2)));
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.s_c) + 1 * internal.compartment * (internal.k_cn * f_Nstar__k_cnd_D / (1 + f_Nstar__k_cnd_D)) - 1 * internal.compartment * internal.mu_c * C_A;
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.s_nr * R / (internal.mu_nr + R)) - 1 * internal.compartment * internal.mu_n * Nstar;
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.k_pg * P * (1 - P / internal.p_inf)) - 1 * internal.compartment * (internal.k_pm * internal.s_m * P / (internal.mu_m + internal.k_mp * P)) - 1 * internal.compartment * (internal.k_pn * f_Nstar * P);
    var f_s_f_Nstar = Math.pow((f_Nstar), (6)) / (Math.pow((internal.x_dn), (6)) + Math.pow((f_Nstar), (6)));
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.k_dn * f_s_f_Nstar) - 1 * internal.compartment * internal.mu_d * D;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "P", "Nstar", "D", "C_A"];
    this.metadata.internalOrder = {C_A_init: null, c_inf: null, compartment: null, D_init: null, initial_C_A: null, initial_D: null, initial_Nstar: null, initial_P: null, k_cn: null, k_cnd: null, k_dn: null, k_mp: null, k_nd: null, k_nn: null, k_np: null, k_pg: null, k_pm: null, k_pn: null, mu_c: null, mu_d: null, mu_m: null, mu_n: null, mu_nr: null, Nstar_init: null, p_inf: null, P_init: null, s_c: null, s_m: null, s_nr: null, x_dn: null};
    this.metadata.variableOrder = {P: null, Nstar: null, D: null, C_A: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
