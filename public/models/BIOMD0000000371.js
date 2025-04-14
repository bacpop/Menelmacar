export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Compartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_V_membrane;
    state[1] = internal.initial_n;
    state[2] = internal.initial_s;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["g_Ca", "g_K", "g_K_ATP", "g_s", "lamda", "n_init", "p", "s_init", "tau_membrane", "tau_potassium_current_n_gate", "tau_s", "theta_m", "theta_n", "theta_s", "V_Ca", "V_K", "V_m", "V_membrane_init", "V_n", "V_s"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "g_Ca", internal, 3.6000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_K", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_K_ATP", internal, 1.2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_s", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lamda", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n_init", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s_init", internal, 0.025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau_membrane", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau_potassium_current_n_gate", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau_s", internal, 20000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "theta_m", internal, 12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "theta_n", internal, 5.5999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "theta_s", internal, 8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_Ca", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_K", internal, - 75, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_m", internal, - 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_membrane_init", internal, - 65, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_n", internal, - 17, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_s", internal, - 22, -Infinity, Infinity, false);
    internal.initial_n = internal.n_init;
    internal.initial_s = internal.s_init;
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
    const s = state[2];
    var i_K = internal.g_K * n * (V_membrane - internal.V_K);
    var i_K_ATP = internal.g_K_ATP * internal.p * (V_membrane - internal.V_K);
    var i_s = internal.g_s * s * (V_membrane - internal.V_K);
    var m_infinity = 1 / (1 + Math.exp((internal.V_m - V_membrane) / internal.theta_m));
    var n_infinity = 1 / (1 + Math.exp((internal.V_n - V_membrane) / internal.theta_n));
    var s_infinity = 1 / (1 + Math.exp((internal.V_s - V_membrane) / internal.theta_s));
    dstatedt[1] = 0 + internal.lamda * (n_infinity - n) / internal.tau_potassium_current_n_gate;
    dstatedt[2] = 0 + (s_infinity - s) / internal.tau_s;
    var i_Ca = internal.g_Ca * m_infinity * (V_membrane - internal.V_Ca);
    dstatedt[0] = 0 + - (i_Ca + i_K + i_K_ATP + i_s) / internal.tau_membrane;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "V_membrane", "n", "s"];
    this.metadata.internalOrder = {Compartment: null, g_Ca: null, g_K: null, g_K_ATP: null, g_s: null, initial_n: null, initial_s: null, initial_V_membrane: null, lamda: null, n_init: null, p: null, s_init: null, tau_membrane: null, tau_potassium_current_n_gate: null, tau_s: null, theta_m: null, theta_n: null, theta_s: null, V_Ca: null, V_K: null, V_m: null, V_membrane_init: null, V_n: null, V_s: null};
    this.metadata.variableOrder = {V_membrane: null, n: null, s: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
