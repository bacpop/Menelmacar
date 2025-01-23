export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Cattle = 1;
    internal.Vector = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(7).fill(0);
    state[0] = internal.initial_S_h;
    state[1] = internal.initial_A_h;
    state[2] = internal.initial_I_h;
    state[3] = internal.initial_R_h;
    state[4] = internal.initial_S_v;
    state[5] = internal.initial_E_v;
    state[6] = internal.initial_I_v;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A_h_init", "E_v_init", "I_h_init", "I_v_init", "R_h_init", "Season_Dummy_Variable"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A_h_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_v_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_h_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_v_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_h_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Season_Dummy_Variable", internal, 0, -Infinity, Infinity, false);
    internal.beta_hv = ((internal.Season_Dummy_Variable == 0 ? 0.20999999999999999 : 0.20999999999999999));
    internal.beta_tilde_vh = ((internal.Season_Dummy_Variable == 0 ? 0.29999999999999999 : 0.29999999999999999));
    internal.beta_vh = ((internal.Season_Dummy_Variable == 0 ? 0.69999999999999996 : 0.69999999999999996));
    internal.C0 = ((internal.Season_Dummy_Variable == 0 ? 1000 : 1000));
    internal.delta_h = ((internal.Season_Dummy_Variable == 0 ? 0.10000000000000001 : 0.10000000000000001));
    internal.gamma_e = ((internal.Season_Dummy_Variable == 0 ? 0.20000000000000001 : 0.10000000000000001));
    internal.gamma_h = ((internal.Season_Dummy_Variable == 0 ? 1 / 4 : 1 / 4));
    internal.gamma_tilde_h = ((internal.Season_Dummy_Variable == 0 ? 1 / 4 : 1 / 4));
    internal.initial_A_h = internal.A_h_init;
    internal.initial_E_v = internal.E_v_init;
    internal.initial_I_h = internal.I_h_init;
    internal.initial_I_v = internal.I_v_init;
    internal.initial_R_h = internal.R_h_init;
    internal.M0 = ((internal.Season_Dummy_Variable == 0 ? 20000 : 4000));
    internal.psi_v = ((internal.Season_Dummy_Variable == 0 ? 0.10000000000000001 : 0.10000000000000001));
    internal.S_h_init = ((internal.Season_Dummy_Variable == 0 ? 1000 : 1000));
    internal.S_v_init = ((internal.Season_Dummy_Variable == 0 ? 19999 : 3999));
    internal.sigma_h = ((internal.Season_Dummy_Variable == 0 ? 19 : 19));
    internal.sigma_v = ((internal.Season_Dummy_Variable == 0 ? 0.33000000000000002 : 0.25));
    internal.theta_h = ((internal.Season_Dummy_Variable == 0 ? 0.40000000000000002 : 0.40000000000000002));
    internal.u_h = ((internal.Season_Dummy_Variable == 0 ? 1 / 2190 : 1 / 2190));
    internal.u_v = ((internal.Season_Dummy_Variable == 0 ? 1 / 20 : 1 / 14));
    internal.v_v = ((internal.Season_Dummy_Variable == 0 ? 1 / 14 : 1 / 14));
    internal.initial_S_h = internal.S_h_init;
    internal.initial_S_v = internal.S_v_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const S_h = state[0];
    const A_h = state[1];
    const I_h = state[2];
    const R_h = state[3];
    const S_v = state[4];
    const E_v = state[5];
    const I_v = state[6];
    var N_h = S_h + I_h + A_h + R_h;
    var N_v = S_v + E_v + I_v;
    dstatedt[6] = 0 + internal.psi_v * I_v / N_v * internal.u_v * internal.M0 + internal.v_v * E_v - internal.u_v * I_v;
    dstatedt[3] = 0 + internal.gamma_h * I_h + internal.gamma_tilde_h * A_h - internal.u_h * R_h;
    var lambda_h = internal.sigma_v * N_v * internal.sigma_h / (internal.sigma_v * N_v + internal.sigma_h * N_h) * internal.beta_hv * (I_v / N_v);
    var lambda_v = internal.sigma_v * internal.sigma_h * N_h / (internal.sigma_v * N_v + internal.sigma_h * N_h) * (internal.beta_vh * (I_h / N_h) + internal.beta_tilde_vh * (A_h / N_h));
    dstatedt[1] = 0 + internal.theta_h * lambda_h * S_h - (internal.u_h + internal.gamma_tilde_h) * A_h;
    dstatedt[5] = 0 + lambda_v * S_v - (internal.u_v + internal.v_v) * E_v;
    dstatedt[2] = 0 + (1 - internal.theta_h) * lambda_h * S_h - (internal.u_h + internal.gamma_h + internal.delta_h) * I_h;
    dstatedt[0] = 0 + internal.u_h * internal.C0 - lambda_h * S_h - internal.u_h * S_h;
    dstatedt[4] = 0 + (N_v - internal.psi_v * I_v) / N_v * internal.u_v * internal.M0 - lambda_v * S_v - internal.u_v * S_v;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "S_h", "A_h", "I_h", "R_h", "S_v", "E_v", "I_v"];
    this.metadata.internalOrder = {A_h_init: null, beta_hv: null, beta_tilde_vh: null, beta_vh: null, C0: null, Cattle: null, delta_h: null, E_v_init: null, gamma_e: null, gamma_h: null, gamma_tilde_h: null, I_h_init: null, I_v_init: null, initial_A_h: null, initial_E_v: null, initial_I_h: null, initial_I_v: null, initial_R_h: null, initial_S_h: null, initial_S_v: null, M0: null, psi_v: null, R_h_init: null, S_h_init: null, S_v_init: null, Season_Dummy_Variable: null, sigma_h: null, sigma_v: null, theta_h: null, u_h: null, u_v: null, v_v: null, Vector: null};
    this.metadata.variableOrder = {S_h: null, A_h: null, I_h: null, R_h: null, S_v: null, E_v: null, I_v: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
