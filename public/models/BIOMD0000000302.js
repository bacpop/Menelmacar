export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.initial_V_post = - 64;
    internal.initial_V_pre = - 64;
    internal.post_synaptic_cell = 1;
    internal.pre_synaptic_cell = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(2).fill(0);
    state[0] = internal.initial_V_post;
    state[1] = internal.initial_V_pre;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "beta", "Cm", "E_K", "E_L", "E_Na", "E_syn", "g_syn", "gK", "gL", "gNa", "I_app_post", "phi", "theta_syn"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cm", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_K", internal, - 90, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_L", internal, - 65, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_Na", internal, 55, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_syn", internal, - 75, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_syn", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gK", internal, 9, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gL", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gNa", internal, 35, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_app_post", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "phi", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "theta_syn", internal, 0, -Infinity, Infinity, false);
    internal.tau_0 = internal.Cm / internal.gL;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const V_post = state[0];
    const V_pre = state[1];
    var alpha_h_post = 0.070000000000000007 * Math.exp(- (V_post + 58) / 20);
    var alpha_h_pre = 0.070000000000000007 * Math.exp(- (V_pre + 58) / 20);
    var alpha_m_post = - 0.10000000000000001 * (V_post + 35) / (Math.exp(- 0.10000000000000001 * (V_post + 35)) - 1);
    var alpha_m_pre = - 0.10000000000000001 * (V_pre + 35) / (Math.exp(- 0.10000000000000001 * (V_pre + 35)) - 1);
    var alpha_n_post = - 0.01 * (V_post + 34) / (Math.exp(- 0.10000000000000001 * (V_post + 34)) - 1);
    var alpha_n_pre = - 0.01 * (V_pre + 34) / (Math.exp(- 0.10000000000000001 * (V_pre + 34)) - 1);
    var beta_h_post = 1 / (Math.exp(- 0.10000000000000001 * (V_post + 28)) + 1);
    var beta_h_pre = 1 / (Math.exp(- 0.10000000000000001 * (V_pre + 28)) + 1);
    var beta_m_post = 4 * Math.exp(- (V_post + 60) / 18);
    var beta_m_pre = 4 * Math.exp(- (V_pre + 60) / 18);
    var beta_n_post = 0.125 * Math.exp(- (V_post + 44) / 80);
    var beta_n_pre = 0.125 * Math.exp(- (V_pre + 44) / 80);
    var F = 1 / (1 + Math.exp(- (V_pre - internal.theta_syn) / 2));
    var I_app_pre = (((t >= 10 && t <= 20) ? 2 : 0));
    var I_L_post = internal.gL * (V_post - internal.E_L);
    var I_L_pre = internal.gL * (V_pre - internal.E_L);
    var h_post = alpha_h_post / (beta_h_post + alpha_h_post);
    var h_pre = alpha_h_pre / (beta_h_pre + alpha_h_pre);
    var m_inf_post = alpha_m_post / (alpha_m_post + beta_m_post);
    var m_inf_pre = alpha_m_pre / (alpha_m_pre + beta_m_pre);
    var n_post = alpha_n_post / (beta_n_post + alpha_n_post);
    var n_pre = alpha_n_pre / (beta_n_pre + alpha_n_pre);
    var s = internal.alpha * F / (internal.beta + internal.alpha * F);
    var I_K_post = internal.gK * Math.pow((n_post), (4)) * (V_post - internal.E_K);
    var I_K_pre = internal.gK * Math.pow((n_pre), (4)) * (V_pre - internal.E_K);
    var I_Na_post = internal.gNa * Math.pow((m_inf_post), (3)) * h_post * (V_post - internal.E_Na);
    var I_Na_pre = internal.gNa * Math.pow((m_inf_pre), (3)) * h_pre * (V_pre - internal.E_Na);
    var I_syn = internal.g_syn * s * (V_post - internal.E_syn);
    dstatedt[0] = (internal.I_app_post - (I_Na_post + I_K_post + I_L_post + I_syn)) / internal.Cm;
    dstatedt[1] = (I_app_pre - (I_Na_pre + I_K_pre + I_L_pre)) / internal.Cm;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "V_post", "V_pre"];
    this.metadata.internalOrder = {alpha: null, beta: null, Cm: null, E_K: null, E_L: null, E_Na: null, E_syn: null, g_syn: null, gK: null, gL: null, gNa: null, I_app_post: null, initial_V_post: null, initial_V_pre: null, phi: null, post_synaptic_cell: null, pre_synaptic_cell: null, tau_0: null, theta_syn: null};
    this.metadata.variableOrder = {V_post: null, V_pre: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
