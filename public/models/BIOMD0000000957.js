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
    var state = Array(4).fill(0);
    state[0] = internal.initial_Susceptible;
    state[1] = internal.initial_Infected;
    state[2] = internal.initial_Recovered;
    state[3] = internal.initial_Confirmed;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["beta", "Confirmed_init", "Infected_init", "mu", "Recovered_init", "rho", "Susceptible_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "beta", internal, 2.0900000000000001e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Confirmed_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Infected_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Recovered_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho", internal, 0.90900000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Susceptible_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_Confirmed = internal.Confirmed_init;
    internal.initial_Infected = internal.Infected_init;
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
    const Infected = state[1];
    dstatedt[3] = 0 + 1 * internal.Wuhan * internal.rho * Infected;
    dstatedt[1] = 0 + 1 * internal.Wuhan * (internal.beta * Infected * Susceptible) - 1 * internal.Wuhan * internal.mu * Infected - 1 * internal.Wuhan * internal.rho * Infected;
    dstatedt[2] = 0 + 1 * internal.Wuhan * internal.mu * Infected;
    dstatedt[0] = 0 - 1 * internal.Wuhan * (internal.beta * Infected * Susceptible);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Susceptible", "Infected", "Recovered", "Confirmed"];
    this.metadata.internalOrder = {beta: null, Confirmed_init: null, Infected_init: null, initial_Confirmed: null, initial_Infected: null, initial_Recovered: null, initial_Susceptible: null, mu: null, Recovered_init: null, rho: null, Susceptible_init: null, Wuhan: null};
    this.metadata.variableOrder = {Susceptible: null, Infected: null, Recovered: null, Confirmed: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
