export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.Human_Population = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(8).fill(0);
    state[0] = internal.initial_S_d;
    state[1] = internal.initial_E_d;
    state[2] = internal.initial_I_d;
    state[3] = internal.initial_R_d;
    state[4] = internal.initial_S_h;
    state[5] = internal.initial_E_h;
    state[6] = internal.initial_I_h;
    state[7] = internal.initial_R_h;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A", "B", "beta", "beta_dh", "E_d_init", "E_h_init", "gamma", "gamma_h", "I_d_init", "I_h_init", "k_h", "kxk", "lambda", "lambda_h", "m", "m_h", "mu", "mu_h", "R_d_init", "R_h_init", "S_d_init", "S_h_init", "sigma", "sigma_h"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A", internal, 3000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B", internal, 15400000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 1.5800000000000001e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_dh", internal, 2.2900000000000001e-12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_d_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_h_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_h", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_d_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_h_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_h", internal, 0.54000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 0.089999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_h", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m", internal, 0.080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_h", internal, 0.0030000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_h", internal, 1.3400000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_d_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_h_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_d_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_h_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigma", internal, 6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigma_h", internal, 6, -Infinity, Infinity, false);
    internal.initial_E_d = internal.E_d_init;
    internal.initial_E_h = internal.E_h_init;
    internal.initial_I_d = internal.I_d_init;
    internal.initial_I_h = internal.I_h_init;
    internal.initial_R_d = internal.R_d_init;
    internal.initial_R_h = internal.R_h_init;
    internal.initial_S_d = internal.S_d_init;
    internal.initial_S_h = internal.S_h_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const S_d = state[0];
    const E_d = state[1];
    const I_d = state[2];
    const R_d = state[3];
    const S_h = state[4];
    const E_h = state[5];
    const I_h = state[6];
    const R_h = state[7];
    dstatedt[1] = 0 - 1 * internal.compartment * (internal.sigma * (1 - internal.gamma) * E_d) + 1 * internal.compartment * (internal.beta * S_d * I_d) - 1 * internal.compartment * (internal.sigma * internal.gamma * E_d) - 1 * internal.compartment * internal.m * E_d - 1 * internal.compartment * internal.kxk * E_d;
    dstatedt[5] = 0 - 1 * internal.Human_Population * (internal.sigma_h * (1 - internal.gamma_h) * E_h) + 1 * (internal.beta_dh * S_h * I_d) - 1 * internal.Human_Population * (internal.sigma_h * internal.gamma_h * E_h) - 1 * internal.Human_Population * internal.m_h * E_h - 1 * internal.Human_Population * internal.k_h * E_h;
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.sigma * internal.gamma * E_d) - 1 * internal.compartment * internal.m * I_d - 1 * internal.compartment * internal.mu * I_d;
    dstatedt[6] = 0 + 1 * internal.Human_Population * (internal.sigma_h * internal.gamma_h * E_h) - 1 * internal.Human_Population * internal.m_h * I_h - 1 * internal.Human_Population * internal.mu_h * I_h;
    dstatedt[3] = 0 - 1 * internal.compartment * internal.lambda * R_d + 1 * internal.compartment * internal.kxk * S_d + 1 * internal.compartment * internal.kxk * E_d - 1 * internal.compartment * internal.m * R_d;
    dstatedt[7] = 0 - 1 * internal.Human_Population * internal.lambda_h * R_h + 1 * internal.Human_Population * internal.k_h * E_h - 1 * internal.Human_Population * internal.m_h * R_h;
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.A) + 1 * internal.compartment * internal.lambda * R_d + 1 * internal.compartment * (internal.sigma * (1 - internal.gamma) * E_d) - 1 * internal.compartment * (internal.beta * S_d * I_d) - 1 * internal.compartment * internal.m * S_d - 1 * internal.compartment * internal.kxk * S_d;
    dstatedt[4] = 0 + 1 * internal.Human_Population * (internal.B) + 1 * internal.Human_Population * internal.lambda_h * R_h + 1 * internal.Human_Population * (internal.sigma_h * (1 - internal.gamma_h) * E_h) - 1 * internal.Human_Population * internal.m_h * S_h - 1 * (internal.beta_dh * S_h * I_d);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "S_d", "E_d", "I_d", "R_d", "S_h", "E_h", "I_h", "R_h"];
    this.metadata.internalOrder = {A: null, B: null, beta: null, beta_dh: null, compartment: null, E_d_init: null, E_h_init: null, gamma: null, gamma_h: null, Human_Population: null, I_d_init: null, I_h_init: null, initial_E_d: null, initial_E_h: null, initial_I_d: null, initial_I_h: null, initial_R_d: null, initial_R_h: null, initial_S_d: null, initial_S_h: null, k_h: null, kxk: null, lambda: null, lambda_h: null, m: null, m_h: null, mu: null, mu_h: null, R_d_init: null, R_h_init: null, S_d_init: null, S_h_init: null, sigma: null, sigma_h: null};
    this.metadata.variableOrder = {S_d: null, E_d: null, I_d: null, R_d: null, S_h: null, E_h: null, I_h: null, R_h: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
