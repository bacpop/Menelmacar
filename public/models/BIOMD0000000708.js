export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Avian_population = 1;
    internal.compartment = 1;
    internal.pi = 3.1415929999999999;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(5).fill(0);
    state[0] = internal.initial_S_a;
    state[1] = internal.initial_I_a;
    state[2] = internal.initial_S_h;
    state[3] = internal.initial_I_h;
    state[4] = internal.initial_R_h;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["beta_a", "beta_h", "delta_a", "delta_h", "gamma", "I_a_init", "I_h_init", "K_a", "m_a", "M_a", "mu_a", "mu_h", "pi_h", "r_a", "R_h_init", "S_a_init", "S_h_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "beta_a", internal, 2e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_h", internal, 6e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_a", internal, 0.00040000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_h", internal, 0.34449999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_a_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_h_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_a", internal, 50000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_a", internal, 800, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_a", internal, 50000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_a", internal, 0.00034246, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_h", internal, 3.9100000000000002e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pi_h", internal, 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_a", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_h_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_a_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_h_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_I_a = internal.I_a_init;
    internal.initial_I_h = internal.I_h_init;
    internal.initial_R_h = internal.R_h_init;
    internal.initial_S_a = internal.S_a_init;
    internal.initial_S_h = internal.S_h_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const S_a = state[0];
    const I_a = state[1];
    const S_h = state[2];
    const I_h = state[3];
    const R_h = state[4];
    dstatedt[1] = 0 + 1 * internal.Avian_population * (internal.beta_a * S_a * I_a) - 1 * internal.Avian_population * internal.mu_a * I_a - 1 * internal.Avian_population * internal.delta_a * I_a;
    dstatedt[3] = 0 + 1 * (internal.beta_h * I_a * S_h) - 1 * internal.compartment * internal.mu_h * I_h - 1 * internal.compartment * internal.delta_h * I_h - 1 * internal.compartment * internal.gamma * I_h;
    dstatedt[4] = 0 + 1 * internal.compartment * internal.gamma * I_h - 1 * internal.compartment * internal.mu_h * R_h;
    dstatedt[0] = 0 + 1 * internal.Avian_population * (internal.r_a * S_a * (1 - S_a / internal.K_a)) - 1 * internal.Avian_population * (internal.beta_a * S_a * I_a);
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.pi_h) - 1 * (internal.beta_h * I_a * S_h) - 1 * internal.compartment * internal.mu_h * S_h;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "S_a", "I_a", "S_h", "I_h", "R_h"];
    this.metadata.internalOrder = {Avian_population: null, beta_a: null, beta_h: null, compartment: null, delta_a: null, delta_h: null, gamma: null, I_a_init: null, I_h_init: null, initial_I_a: null, initial_I_h: null, initial_R_h: null, initial_S_a: null, initial_S_h: null, K_a: null, m_a: null, M_a: null, mu_a: null, mu_h: null, pi: null, pi_h: null, r_a: null, R_h_init: null, S_a_init: null, S_h_init: null};
    this.metadata.variableOrder = {S_a: null, I_a: null, S_h: null, I_h: null, R_h: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
