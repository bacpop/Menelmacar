export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.City = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var Susceptible_init = internal.initial_Total_population - internal.initial_Exposed - internal.initial_Infected;
    internal.initial_Susceptible = Susceptible_init;
    var state = Array(6).fill(0);
    state[0] = internal.initial_Susceptible;
    state[1] = internal.initial_Exposed;
    state[2] = internal.initial_Infected;
    state[3] = internal.initial_Recovered;
    state[4] = internal.initial_Deceased;
    state[5] = internal.initial_Total_population;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "beta", "Deceased_init", "epsilon", "Exposed_init", "gamma", "Infected_init", "mu", "Recovered_init", "Total_population_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 0.0060000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 0.83299999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Deceased_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "epsilon", internal, 0.33333000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Exposed_init", internal, 20000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 0.125, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Infected_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu", internal, 0.012048, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Recovered_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Total_population_init", internal, 10000000, -Infinity, Infinity, false);
    internal.initial_Deceased = internal.Deceased_init;
    internal.initial_Exposed = internal.Exposed_init;
    internal.initial_Infected = internal.Infected_init;
    internal.initial_Recovered = internal.Recovered_init;
    internal.initial_Total_population = internal.Total_population_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Susceptible = state[0];
    const Exposed = state[1];
    const Infected = state[2];
    const Total_population = state[5];
    dstatedt[5] = 0;
    dstatedt[4] = 0 + 1 * internal.City * internal.alpha * Infected;
    dstatedt[1] = 0 + 1 * internal.City * (internal.beta * Susceptible * Infected / Total_population) - 1 * internal.City * internal.epsilon * Exposed;
    dstatedt[2] = 0 + 1 * internal.City * internal.epsilon * Exposed - 1 * internal.City * internal.gamma * Infected - 1 * internal.City * internal.alpha * Infected;
    dstatedt[3] = 0 + 1 * internal.City * internal.gamma * Infected;
    dstatedt[0] = 0 - 1 * internal.City * (internal.beta * Susceptible * Infected / Total_population);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Susceptible", "Exposed", "Infected", "Recovered", "Deceased", "Total_population"];
    this.metadata.internalOrder = {alpha: null, beta: null, City: null, Deceased_init: null, epsilon: null, Exposed_init: null, gamma: null, Infected_init: null, initial_Deceased: null, initial_Exposed: null, initial_Infected: null, initial_Recovered: null, initial_Susceptible: null, initial_Total_population: null, mu: null, Recovered_init: null, Total_population_init: null};
    this.metadata.variableOrder = {Susceptible: null, Exposed: null, Infected: null, Recovered: null, Deceased: null, Total_population: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
