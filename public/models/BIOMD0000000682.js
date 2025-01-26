export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.COMpartment = 1;
    internal.initial_ADP = 0.085817000000000004;
    internal.initial_ATP = 2.1046999999999998;
    internal.initial_c = 0.15665999999999999;
    internal.initial_n = 0.00011;
    internal.initial_V_membrane = - 67.018000000000001;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(5).fill(0);
    state[0] = internal.initial_ADP;
    state[1] = internal.initial_ATP;
    state[2] = internal.initial_V_membrane;
    state[3] = internal.initial_n;
    state[4] = internal.initial_c;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "C_m", "eta", "f", "g_Ca_", "g_K_", "g_KATP_", "g_KCa_", "k_c", "k_D", "kxk", "s_m", "s_n", "tau_c", "tau_n", "v", "V_Ca", "V_K", "v_m", "v_n"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 2.2500000000000001e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_m", internal, 5300, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "eta", internal, 185, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_Ca_", internal, 1200, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_K_", internal, 3000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_KATP_", internal, 350, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_KCa_", internal, 300, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_c", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_D", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s_m", internal, 12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s_n", internal, 5.5999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau_c", internal, 1200, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau_n", internal, 16, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_Ca", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_K", internal, - 75, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v_m", internal, - 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v_n", internal, - 16, -Infinity, Infinity, false);
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const ADP = state[0];
    const ATP = state[1];
    const V_membrane = state[2];
    const n = state[3];
    const c = state[4];
    var I_K = internal.g_K_ * n * (V_membrane - internal.V_K);
    var I_KATP = (V_membrane - internal.V_K) * internal.g_KATP_ / ATP;
    var m_infinity = 1 / (1 + Math.exp((internal.v_m - V_membrane) / internal.s_m));
    var n_infinity = 1 / (1 + Math.exp((internal.v_n - V_membrane) / internal.s_n));
    var omega = 1 / (1 + internal.k_D / c);
    var phi = ATP * Math.pow((1 + internal.kxk * ADP), (2));
    dstatedt[0] = (phi - internal.eta * ADP) / (1000 * internal.tau_c);
    dstatedt[1] = (internal.v - phi) / (1000 * internal.tau_c);
    dstatedt[3] = (n_infinity - n) / internal.tau_n;
    var I_Ca = internal.g_Ca_ * m_infinity * (V_membrane - internal.V_Ca);
    var I_KCa = internal.g_KCa_ * omega * (V_membrane - internal.V_K);
    dstatedt[2] = - (I_Ca + I_K + I_KCa + I_KATP) / internal.C_m;
    var J_mem = - internal.f * (internal.alpha * I_Ca + internal.k_c * c);
    dstatedt[4] = J_mem;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "ADP", "ATP", "V_membrane", "n", "c"];
    this.metadata.internalOrder = {alpha: null, C_m: null, COMpartment: null, eta: null, f: null, g_Ca_: null, g_K_: null, g_KATP_: null, g_KCa_: null, initial_ADP: null, initial_ATP: null, initial_c: null, initial_n: null, initial_V_membrane: null, k_c: null, k_D: null, kxk: null, s_m: null, s_n: null, tau_c: null, tau_n: null, v: null, V_Ca: null, V_K: null, v_m: null, v_n: null};
    this.metadata.variableOrder = {ADP: null, ATP: null, V_membrane: null, n: null, c: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
