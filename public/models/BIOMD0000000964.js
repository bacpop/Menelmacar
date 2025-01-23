export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Human = 1;
    internal.Pathogen = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(6).fill(0);
    state[0] = internal.initial_Susceptible;
    state[1] = internal.initial_Exposed;
    state[2] = internal.initial_Infected_Symptomatic;
    state[3] = internal.initial_Infected_Asymptomatic;
    state[4] = internal.initial_Recovered;
    state[5] = internal.initial_Pathogen_0;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha_1", "alpha_2", "b", "beta_1", "beta_2", "delta", "eta_A", "eta_S", "Exposed_init", "gamma_A", "gamma_S", "Infected_Asymptomatic_init", "Infected_Symptomatic_init", "mu", "mu_p", "omega", "Pathogen_0_init", "psi", "Recovered_init", "sigma", "Susceptible_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha_1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 0.00018000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_1", internal, 0.0041399999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_2", internal, 0.0115, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "eta_A", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "eta_S", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Exposed_init", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_A", internal, 0.071400000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_S", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Infected_Asymptomatic_init", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Infected_Symptomatic_init", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu", internal, 4.5630000000000002e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_p", internal, 0.1724, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "omega", internal, 0.089999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pathogen_0_init", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "psi", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Recovered_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigma", internal, 0.0018, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Susceptible_init", internal, 93000, -Infinity, Infinity, false);
    internal.initial_Exposed = internal.Exposed_init;
    internal.initial_Infected_Asymptomatic = internal.Infected_Asymptomatic_init;
    internal.initial_Infected_Symptomatic = internal.Infected_Symptomatic_init;
    internal.initial_Pathogen_0 = internal.Pathogen_0_init;
    internal.initial_Recovered = internal.Recovered_init;
    internal.initial_Susceptible = internal.Susceptible_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Susceptible = state[0];
    const Exposed = state[1];
    const Infected_Symptomatic = state[2];
    const Infected_Asymptomatic = state[3];
    const Recovered = state[4];
    const Pathogen_0 = state[5];
    dstatedt[1] = 0 - 1 * internal.Human * internal.psi * Exposed + 1 * (internal.beta_1 * Susceptible * Pathogen_0 / (1 + internal.alpha_1 * Pathogen_0) + internal.beta_2 * Susceptible * (Infected_Asymptomatic + Infected_Symptomatic) / (1 + internal.alpha_2 * (Infected_Asymptomatic + Infected_Symptomatic))) - 1 * internal.Human * internal.mu * Exposed - 1 * internal.Human * (internal.delta * internal.omega * Exposed) - 1 * internal.Human * ((1 - internal.delta) * internal.omega * Exposed);
    dstatedt[3] = 0 + 1 * internal.Human * ((1 - internal.delta) * internal.omega * Exposed) - 1 * internal.Human * ((internal.mu + internal.sigma) * Infected_Asymptomatic) - 1 * internal.Human * internal.gamma_A * Infected_Asymptomatic;
    dstatedt[2] = 0 + 1 * internal.Human * (internal.delta * internal.omega * Exposed) - 1 * internal.Human * ((internal.mu + internal.sigma) * Infected_Symptomatic) - 1 * internal.Human * internal.gamma_S * Infected_Symptomatic;
    dstatedt[5] = 0 + 1 * (internal.eta_A * Infected_Asymptomatic + internal.eta_S * Infected_Symptomatic) - 1 * internal.Pathogen * internal.mu_p * Pathogen_0;
    dstatedt[4] = 0 + 1 * internal.Human * internal.gamma_S * Infected_Symptomatic + 1 * internal.Human * internal.gamma_A * Infected_Asymptomatic - 1 * internal.Human * internal.mu * Recovered;
    dstatedt[0] = 0 + 1 * internal.Human * (internal.b) + 1 * internal.Human * internal.psi * Exposed - 1 * (internal.beta_1 * Susceptible * Pathogen_0 / (1 + internal.alpha_1 * Pathogen_0) + internal.beta_2 * Susceptible * (Infected_Asymptomatic + Infected_Symptomatic) / (1 + internal.alpha_2 * (Infected_Asymptomatic + Infected_Symptomatic))) - 1 * internal.Human * internal.mu * Susceptible;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Susceptible", "Exposed", "Infected_Symptomatic", "Infected_Asymptomatic", "Recovered", "Pathogen_0"];
    this.metadata.internalOrder = {alpha_1: null, alpha_2: null, b: null, beta_1: null, beta_2: null, delta: null, eta_A: null, eta_S: null, Exposed_init: null, gamma_A: null, gamma_S: null, Human: null, Infected_Asymptomatic_init: null, Infected_Symptomatic_init: null, initial_Exposed: null, initial_Infected_Asymptomatic: null, initial_Infected_Symptomatic: null, initial_Pathogen_0: null, initial_Recovered: null, initial_Susceptible: null, mu: null, mu_p: null, omega: null, Pathogen: null, Pathogen_0_init: null, psi: null, Recovered_init: null, sigma: null, Susceptible_init: null};
    this.metadata.variableOrder = {Susceptible: null, Exposed: null, Infected_Symptomatic: null, Infected_Asymptomatic: null, Recovered: null, Pathogen_0: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
