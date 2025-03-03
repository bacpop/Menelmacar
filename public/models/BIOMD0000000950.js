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
    this.base.user.checkUser(user, ["A_h_init", "beta_hv", "beta_tilde_vh", "beta_vh", "C0", "delta_h", "E_v_init", "gamma_e", "gamma_h", "gamma_tilde_h", "I_h_init", "I_v_init", "lambda_h", "lambda_v", "M0", "N_h", "N_v", "psi_v", "R_h_init", "S_h_init", "S_v_init", "Season_Dummy_Variable", "sigma_h", "sigma_v", "theta_h", "Total_Infected_Cattle", "u_h", "u_v", "v_v"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A_h_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_hv", internal, 0.20999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_tilde_vh", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_vh", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C0", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_h", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_v_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_e", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_h", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_tilde_h", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_h_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_v_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_h", internal, 5.143359375e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_v", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M0", internal, 20000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N_h", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N_v", internal, 20000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "psi_v", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_h_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_h_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_v_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Season_Dummy_Variable", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigma_h", internal, 19, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigma_v", internal, 0.33000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "theta_h", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Total_Infected_Cattle", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u_h", internal, 0.00045662100456620998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u_v", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v_v", internal, 0.071428571428571397, -Infinity, Infinity, false);
    internal.initial_A_h = internal.A_h_init;
    internal.initial_E_v = internal.E_v_init;
    internal.initial_I_h = internal.I_h_init;
    internal.initial_I_v = internal.I_v_init;
    internal.initial_R_h = internal.R_h_init;
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
    dstatedt[1] = internal.theta_h * internal.lambda_h * S_h - (internal.u_h + internal.gamma_tilde_h) * A_h;
    dstatedt[5] = internal.lambda_v * S_v - (internal.u_v + internal.v_v) * E_v;
    dstatedt[2] = (1 - internal.theta_h) * internal.lambda_h * S_h - (internal.u_h + internal.gamma_h + internal.delta_h) * I_h;
    dstatedt[6] = internal.psi_v * I_v / internal.N_v * internal.u_v * internal.M0 + internal.v_v * E_v - internal.u_v * I_v;
    dstatedt[3] = internal.gamma_h * I_h + internal.gamma_tilde_h * A_h - internal.u_h * R_h;
    dstatedt[0] = internal.u_h * internal.C0 - internal.lambda_h * S_h - internal.u_h * S_h;
    dstatedt[4] = (internal.N_v - internal.psi_v * I_v) / internal.N_v * internal.u_v * internal.M0 - internal.lambda_v * S_v - internal.u_v * S_v;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "S_h", "A_h", "I_h", "R_h", "S_v", "E_v", "I_v"];
    this.metadata.internalOrder = {A_h_init: null, beta_hv: null, beta_tilde_vh: null, beta_vh: null, C0: null, Cattle: null, delta_h: null, E_v_init: null, gamma_e: null, gamma_h: null, gamma_tilde_h: null, I_h_init: null, I_v_init: null, initial_A_h: null, initial_E_v: null, initial_I_h: null, initial_I_v: null, initial_R_h: null, initial_S_h: null, initial_S_v: null, lambda_h: null, lambda_v: null, M0: null, N_h: null, N_v: null, psi_v: null, R_h_init: null, S_h_init: null, S_v_init: null, Season_Dummy_Variable: null, sigma_h: null, sigma_v: null, theta_h: null, Total_Infected_Cattle: null, u_h: null, u_v: null, v_v: null, Vector: null};
    this.metadata.variableOrder = {S_h: null, A_h: null, I_h: null, R_h: null, S_v: null, E_v: null, I_v: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
