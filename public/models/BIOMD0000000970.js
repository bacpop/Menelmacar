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
    var Susceptible_init = internal.initial_Total_Population - internal.initial_Exposed - internal.initial_Infected - internal.initial_Recovered;
    internal.initial_Susceptible = Susceptible_init;
    var state = Array(5).fill(0);
    state[0] = internal.initial_Susceptible;
    state[1] = internal.initial_Exposed;
    state[2] = internal.initial_Infected;
    state[3] = internal.initial_Recovered;
    state[4] = internal.initial_Total_Population;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "beta_1", "beta_2", "Exposed_init", "gamma", "Infected_init", "r_1", "r_2", "Recovered_init", "Total_Population_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 0.14000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_1", internal, 0.040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_2", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Exposed_init", internal, 193, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 0.048000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Infected_init", internal, 27, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_1", internal, 6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_2", internal, 18, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Recovered_init", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Total_Population_init", internal, 11081000, -Infinity, Infinity, false);
    internal.initial_Exposed = internal.Exposed_init;
    internal.initial_Infected = internal.Infected_init;
    internal.initial_Recovered = internal.Recovered_init;
    internal.initial_Total_Population = internal.Total_Population_init;
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
    const Total_Population = state[4];
    dstatedt[4] = 0;
    dstatedt[1] = 0 + 1 * internal.Wuhan * ((internal.r_1 * internal.beta_1 * Infected * Susceptible + internal.r_2 * internal.beta_2 * Exposed * Susceptible) / Total_Population) - 1 * internal.Wuhan * internal.alpha * Exposed;
    dstatedt[2] = 0 + 1 * internal.Wuhan * internal.alpha * Exposed - 1 * internal.Wuhan * internal.gamma * Infected;
    dstatedt[3] = 0 + 1 * internal.Wuhan * internal.gamma * Infected;
    dstatedt[0] = 0 - 1 * internal.Wuhan * ((internal.r_1 * internal.beta_1 * Infected * Susceptible + internal.r_2 * internal.beta_2 * Exposed * Susceptible) / Total_Population);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Susceptible", "Exposed", "Infected", "Recovered", "Total_Population"];
    this.metadata.internalOrder = {alpha: null, beta_1: null, beta_2: null, Exposed_init: null, gamma: null, Infected_init: null, initial_Exposed: null, initial_Infected: null, initial_Recovered: null, initial_Susceptible: null, initial_Total_Population: null, r_1: null, r_2: null, Recovered_init: null, Total_Population_init: null, Wuhan: null};
    this.metadata.variableOrder = {Susceptible: null, Exposed: null, Infected: null, Recovered: null, Total_Population: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
