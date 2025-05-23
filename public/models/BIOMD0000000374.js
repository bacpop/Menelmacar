export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.COMpartment = 1;
    internal.jxj = 0.88;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(5).fill(0);
    state[0] = internal.initial_V_membrane;
    state[1] = internal.initial_n;
    state[2] = internal.initial_jm;
    state[3] = internal.initial_Ca_er_Ca_equations;
    state[4] = internal.initial_Ca_i;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Ca_er_bar", "Ca_er_Ca_equations_init", "Ca_i_init", "Cm", "dact", "dinh", "dip3", "f", "g_Ca_f", "g_Ca_s", "g_CRAC", "g_K", "g_K_ATP", "g_K_Ca", "g_leak", "gamma", "IP3", "jm_init", "k_Ca", "kdkca", "kerp", "lambda_er", "lambda_n", "n_init", "perl", "sigma_er", "V_Ca", "V_CRAC", "V_membrane_init", "verp"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Ca_er_bar", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ca_er_Ca_equations_init", internal, 9, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ca_i_init", internal, 0.11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cm", internal, 6158, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dact", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dinh", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dip3", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_Ca_f", internal, 810, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_Ca_s", internal, 510, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_CRAC", internal, 75, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_K", internal, 3900, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_K_ATP", internal, 150, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_K_Ca", internal, 1200, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_leak", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 3.6069999999999999e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IP3", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "jm_init", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_Ca", internal, 0.070000000000000007, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdkca", internal, 0.55000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kerp", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_er", internal, 250, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_n", internal, 1.8500000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n_init", internal, 0.00050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "perl", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigma_er", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_Ca", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_CRAC", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_membrane_init", internal, - 61, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "verp", internal, 0.23999999999999999, -Infinity, Infinity, false);
    internal.b_infinity = internal.IP3 / (internal.IP3 + internal.dip3);
    internal.initial_Ca_er_Ca_equations = internal.Ca_er_Ca_equations_init;
    internal.initial_Ca_i = internal.Ca_i_init;
    internal.initial_jm = internal.jm_init;
    internal.initial_n = internal.n_init;
    internal.initial_V_membrane = internal.V_membrane_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const V_membrane = state[0];
    const n = state[1];
    const jm = state[2];
    const Ca_er_Ca_equations = state[3];
    const Ca_i = state[4];
    var a_infinity = 1 / (1 + internal.dact / Ca_i);
    var h_infinity = 1 / (1 + Ca_i / internal.dinh);
    var i_K = internal.g_K * n * (V_membrane + 70);
    var i_K_ATP = internal.g_K_ATP * (V_membrane + 70);
    var i_K_Ca = internal.g_K_Ca * Math.pow((Ca_i), (5)) / (Math.pow((Ca_i), (5)) + Math.pow((internal.kdkca), (5))) * (V_membrane + 70);
    var i_leak = internal.g_leak * (V_membrane - internal.V_CRAC);
    var J_er_leak = internal.perl * (Ca_er_Ca_equations - Ca_i);
    var J_er_p = internal.verp * Math.pow((Ca_i), (2)) / (Math.pow((Ca_i), (2)) + Math.pow((internal.kerp), (2)));
    var jm_infinity = 1 - 1 / (1 + Math.exp((53 + V_membrane) / 2));
    var m_f_infinity = 1 / (1 + Math.exp((- 20 - V_membrane) / 7.5));
    var m_s_infinity = 1 / (1 + Math.exp((- 16 - V_membrane) / 10));
    var n_infinity = 1 / (1 + Math.exp((- 15 - V_membrane) / 6));
    var r_infinity = 1 / (1 + Math.exp(1 * (Ca_er_Ca_equations - internal.Ca_er_bar)));
    var tau_j = 50000 / (Math.exp((53 + V_membrane) / 4) + Math.exp((- 53 - V_membrane) / 4)) + 1500;
    var tau_n = 9.0899999999999999 / (1 + Math.exp((15 + V_membrane) / 6));
    dstatedt[2] = 0 + (jm_infinity - jm) / tau_j;
    dstatedt[1] = 0 + internal.lambda_n * (n_infinity - n) / tau_n;
    var i_Ca_f = internal.g_Ca_f * m_f_infinity * (V_membrane - internal.V_Ca);
    var i_Ca_s = internal.g_Ca_s * m_s_infinity * (1 - jm) * (V_membrane - internal.V_Ca);
    var i_CRAC = internal.g_CRAC * r_infinity * (V_membrane - internal.V_CRAC);
    var O = Math.pow((a_infinity), (3)) * Math.pow((internal.b_infinity), (3)) * Math.pow((h_infinity), (3)) * 1;
    var i_Ca = i_Ca_f + i_Ca_s;
    var J_er_IP3 = O * (Ca_er_Ca_equations - Ca_i);
    dstatedt[0] = 0 + - (i_Ca + i_K + i_K_ATP + i_K_Ca + i_CRAC + i_leak) / internal.Cm;
    var J_er_tot = J_er_leak + J_er_IP3 - J_er_p;
    var J_mem_tot = - internal.f * (internal.gamma * i_Ca + internal.k_Ca * Ca_i);
    dstatedt[3] = 0 + - J_er_tot / (internal.lambda_er * internal.sigma_er);
    dstatedt[4] = 0 + J_er_tot / internal.lambda_er + J_mem_tot;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "V_membrane", "n", "jm", "Ca_er_Ca_equations", "Ca_i"];
    this.metadata.internalOrder = {b_infinity: null, Ca_er_bar: null, Ca_er_Ca_equations_init: null, Ca_i_init: null, Cm: null, COMpartment: null, dact: null, dinh: null, dip3: null, f: null, g_Ca_f: null, g_Ca_s: null, g_CRAC: null, g_K: null, g_K_ATP: null, g_K_Ca: null, g_leak: null, gamma: null, initial_Ca_er_Ca_equations: null, initial_Ca_i: null, initial_jm: null, initial_n: null, initial_V_membrane: null, IP3: null, jm_init: null, jxj: null, k_Ca: null, kdkca: null, kerp: null, lambda_er: null, lambda_n: null, n_init: null, perl: null, sigma_er: null, V_Ca: null, V_CRAC: null, V_membrane_init: null, verp: null};
    this.metadata.variableOrder = {V_membrane: null, n: null, jm: null, Ca_er_Ca_equations: null, Ca_i: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
