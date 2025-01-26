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
    state[0] = internal.initial_C;
    state[1] = internal.initial_P;
    state[2] = internal.initial_I;
    state[3] = internal.initial_B;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a_b", "A_b", "a_c", "A_c", "a_i", "A_i", "a_p", "A_p", "alpha", "B_init", "C_init", "delta", "gamma_p", "gamma_y", "h_L", "H_L", "H_p", "I_init", "k_b", "K_b", "k_i", "K_i", "K_i_nu", "K_p", "k_T", "K_T", "kappa", "L", "lambda", "m_b", "M_b", "M_c", "m_i", "M_p", "mu_b", "mu_c", "mu_i", "mu_p", "n_b", "n_c", "n_i", "n_p", "n_T", "P_init", "q_i", "Q_i", "r_b", "r_c", "r_p", "s_i", "sigma_i", "sigma_p", "T", "theta"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a_b", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "A_b", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_c", internal, 0.75, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "A_c", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_i", internal, 75, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "A_i", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_p", internal, 0.75, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "A_p", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta", internal, 5000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_p", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_y", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h_L", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H_L", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H_p", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_b", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_b", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_i", internal, 7.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_i", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_i_nu", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_p", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_T", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_T", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kappa", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda", internal, 10000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_b", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_b", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_c", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_i", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_p", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_b", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_c", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_i", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_p", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n_b", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n_c", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n_i", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n_p", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n_T", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q_i", internal, 7.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Q_i", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_b", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_c", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_p", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s_i", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigma_i", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigma_p", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "theta", internal, 50000, -Infinity, Infinity, false);
    internal.c_T_a_k = 0.5 * (1 + internal.alpha + internal.kappa - Math.pow((Math.pow((1 + internal.alpha + internal.kappa), (2)) - 4 * internal.alpha), (0.5)));
    internal.initial_B = internal.B_init;
    internal.initial_C = internal.C_init;
    internal.initial_I = internal.I_init;
    internal.initial_P = internal.P_init;
    internal.nu_k = internal.K_p / (internal.kappa + internal.K_i_nu) * (internal.kappa / (internal.kappa + internal.K_p));
    internal.sigma_p_tilde = internal.sigma_p + internal.k_T * Math.pow((internal.T), (internal.n_T)) / (Math.pow((internal.K_T), (internal.n_T)) + Math.pow((internal.T), (internal.n_T)));
    internal.y_a_k = (1 + internal.lambda * internal.nu_k * internal.c_T_a_k) / (1 + internal.gamma_y + internal.lambda * internal.nu_k * internal.c_T_a_k);
    internal.mu_a_k = (1 + internal.delta * internal.y_a_k) / (1 + internal.gamma_p + internal.theta * internal.nu_k * internal.c_T_a_k + internal.delta * internal.y_a_k);
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const C = state[0];
    const P = state[1];
    const I = state[2];
    const B = state[3];
    var phi_L_P = internal.H_p / (internal.H_p + internal.L * P);
    var Phi_L_P = Math.pow((internal.H_L), (internal.h_L)) / (Math.pow((internal.H_L), (internal.h_L)) + Math.pow((internal.L * P), (internal.h_L)));
    var U_a_k_P = internal.mu_a_k * phi_L_P;
    dstatedt[3] = 0 - 1 * internal.compartment * internal.mu_b * B + 1 * internal.compartment * ((internal.a_b * Math.pow((U_a_k_P), (internal.n_b)) / (Math.pow((internal.A_b), (internal.n_b)) + Math.pow((U_a_k_P), (internal.n_b))) + internal.k_b * Math.pow((I), (internal.m_b)) / (Math.pow((internal.K_b), (internal.m_b)) + Math.pow((I), (internal.m_b)))) * (Math.pow((internal.M_b), (internal.r_b)) / (Math.pow((internal.M_b), (internal.r_b)) + Math.pow((C), (internal.r_b)))));
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.a_c * Math.pow((U_a_k_P), (internal.n_c)) / (Math.pow((internal.A_c), (internal.n_c)) + Math.pow((U_a_k_P), (internal.n_c))) * (Math.pow((internal.M_c), (internal.r_c)) / (Math.pow((internal.M_c), (internal.r_c)) + Math.pow((B), (internal.r_c)) + Math.pow((I), (internal.r_c)) + Math.pow((C), (internal.r_c))))) - 1 * internal.compartment * internal.mu_c * C;
    dstatedt[2] = 0 + 1 * internal.compartment * (Phi_L_P * (internal.sigma_i + internal.a_i * Math.pow((U_a_k_P), (internal.n_i)) / (Math.pow((internal.A_i), (internal.n_i)) + Math.pow((U_a_k_P), (internal.n_i))) + internal.k_i * Math.pow((B), (internal.m_i)) / (Math.pow((internal.K_i), (internal.m_i)) + Math.pow((B), (internal.m_i))) + internal.q_i * Math.pow((I), (internal.s_i)) / (Math.pow((internal.Q_i), (internal.s_i)) + Math.pow((I), (internal.s_i))))) - 1 * internal.compartment * internal.mu_i * I;
    dstatedt[1] = 0 + 1 * internal.compartment * ((internal.sigma_p_tilde + internal.a_p * Math.pow((U_a_k_P), (internal.n_p)) / (Math.pow((internal.A_p), (internal.n_p)) + Math.pow((U_a_k_P), (internal.n_p)))) * (Math.pow((internal.M_p), (internal.r_p)) / (Math.pow((internal.M_p), (internal.r_p)) + Math.pow((B), (internal.r_p))))) - 1 * internal.compartment * internal.mu_p * P;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "C", "P", "I", "B"];
    this.metadata.internalOrder = {a_b: null, A_b: null, a_c: null, A_c: null, a_i: null, A_i: null, a_p: null, A_p: null, alpha: null, B_init: null, C_init: null, c_T_a_k: null, compartment: null, delta: null, gamma_p: null, gamma_y: null, h_L: null, H_L: null, H_p: null, I_init: null, initial_B: null, initial_C: null, initial_I: null, initial_P: null, k_b: null, K_b: null, k_i: null, K_i: null, K_i_nu: null, K_p: null, k_T: null, K_T: null, kappa: null, L: null, lambda: null, m_b: null, M_b: null, M_c: null, m_i: null, M_p: null, mu_a_k: null, mu_b: null, mu_c: null, mu_i: null, mu_p: null, n_b: null, n_c: null, n_i: null, n_p: null, n_T: null, nu_k: null, P_init: null, q_i: null, Q_i: null, r_b: null, r_c: null, r_p: null, s_i: null, sigma_i: null, sigma_p: null, sigma_p_tilde: null, T: null, theta: null, y_a_k: null};
    this.metadata.variableOrder = {C: null, P: null, I: null, B: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
