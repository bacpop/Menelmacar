export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Wuhan = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(6).fill(0);
    state[0] = internal.initial_Susceptible;
    state[1] = internal.initial_Infected;
    state[2] = internal.initial_Asymptomatic;
    state[3] = internal.initial_Susceptible_quarantined;
    state[4] = internal.initial_Exposed_quarantined;
    state[5] = internal.initial_Recovered;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Asymptomatic_init", "beta_s", "delta", "epsilon_s", "Exposed_quarantined_init", "gamma_a", "gamma_i", "Infected_init", "lambda_s", "m_s", "Recovered_init", "rho_s", "Susceptible_init", "Susceptible_quarantined_init", "xi_a", "xi_i", "xi_q"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Asymptomatic_init", internal, 114, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_s", internal, 0.87990000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "epsilon_s", internal, 14.83, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Exposed_quarantined_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_a", internal, 0.016799999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_i", internal, 0.071510000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Infected_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_s", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_s", internal, 0.041669999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Recovered_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho_s", internal, 0.31990000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Susceptible_init", internal, 902654, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Susceptible_quarantined_init", internal, 10785, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "xi_a", internal, 0.70999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "xi_i", internal, 0.0286, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "xi_q", internal, 0.13369, -Infinity, Infinity, false);
    internal.initial_Asymptomatic = internal.Asymptomatic_init;
    internal.initial_Exposed_quarantined = internal.Exposed_quarantined_init;
    internal.initial_Infected = internal.Infected_init;
    internal.initial_Recovered = internal.Recovered_init;
    internal.initial_Susceptible = internal.Susceptible_init;
    internal.initial_Susceptible_quarantined = internal.Susceptible_quarantined_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Susceptible = state[0];
    const Infected = state[1];
    const Asymptomatic = state[2];
    const Susceptible_quarantined = state[3];
    const Exposed_quarantined = state[4];
    const Recovered = state[5];
    dstatedt[1] = 0 - 1 * internal.Wuhan * internal.xi_i * Infected + 1 * internal.Wuhan * internal.gamma_a * Asymptomatic - 1 * internal.Wuhan * internal.delta * Infected - 1 * internal.Wuhan * internal.gamma_i * Infected;
    dstatedt[5] = 0 + 1 * internal.Wuhan * internal.xi_i * Infected + 1 * internal.Wuhan * internal.xi_a * Asymptomatic + 1 * internal.Wuhan * internal.xi_q * Exposed_quarantined - 1 * internal.Wuhan * internal.delta * Recovered;
    var Total_population = Asymptomatic + Infected + Exposed_quarantined + Recovered + Susceptible + Susceptible_quarantined;
    dstatedt[2] = 0 + 1 * internal.Wuhan * (internal.beta_s * (1 - internal.rho_s) * internal.epsilon_s * Susceptible * Infected / Total_population) - 1 * internal.Wuhan * internal.gamma_a * Asymptomatic - 1 * internal.Wuhan * internal.xi_a * Asymptomatic - 1 * internal.Wuhan * internal.delta * Asymptomatic;
    dstatedt[4] = 0 + 1 * internal.Wuhan * (internal.beta_s * internal.epsilon_s * internal.rho_s * Susceptible * Infected / Total_population) + 1 * internal.Wuhan * internal.gamma_i * Infected - 1 * internal.Wuhan * internal.xi_q * Exposed_quarantined - 1 * internal.Wuhan * internal.delta * Exposed_quarantined;
    dstatedt[0] = 0 - 1 * internal.Wuhan * (internal.rho_s * (1 - internal.beta_s) * internal.epsilon_s * Susceptible * Infected / Total_population) + 1 * internal.Wuhan * internal.m_s * Susceptible_quarantined - 1 * internal.Wuhan * internal.delta * Susceptible - 1 * internal.Wuhan * (internal.beta_s * (1 - internal.rho_s) * internal.epsilon_s * Susceptible * Infected / Total_population) - 1 * internal.Wuhan * (internal.beta_s * internal.epsilon_s * internal.rho_s * Susceptible * Infected / Total_population);
    dstatedt[3] = 0 + 1 * internal.Wuhan * (internal.rho_s * (1 - internal.beta_s) * internal.epsilon_s * Susceptible * Infected / Total_population) - 1 * internal.Wuhan * internal.m_s * Susceptible_quarantined - 1 * internal.Wuhan * internal.delta * Susceptible_quarantined;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Susceptible", "Infected", "Asymptomatic", "Susceptible_quarantined", "Exposed_quarantined", "Recovered"];
    this.metadata.internalOrder = {Asymptomatic_init: null, beta_s: null, delta: null, epsilon_s: null, Exposed_quarantined_init: null, gamma_a: null, gamma_i: null, Infected_init: null, initial_Asymptomatic: null, initial_Exposed_quarantined: null, initial_Infected: null, initial_Recovered: null, initial_Susceptible: null, initial_Susceptible_quarantined: null, lambda_s: null, m_s: null, Recovered_init: null, rho_s: null, Susceptible_init: null, Susceptible_quarantined_init: null, Wuhan: null, xi_a: null, xi_i: null, xi_q: null};
    this.metadata.variableOrder = {Susceptible: null, Infected: null, Asymptomatic: null, Susceptible_quarantined: null, Exposed_quarantined: null, Recovered: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
