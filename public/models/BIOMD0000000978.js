export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.South_Africa = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_Susceptible;
    state[1] = internal.initial_Exposed;
    state[2] = internal.initial_Infected;
    state[3] = internal.initial_Recovered;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["beta", "Event_trigger", "Exposed_init", "gamma", "Infected_init", "N", "Recovered_init", "sigma"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "beta", internal, 1.3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Event_trigger", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Exposed_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 0.33898305080000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Infected_init", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N", internal, 36196938, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Recovered_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigma", internal, 0.311, -Infinity, Infinity, false);
    internal.initial_Exposed = internal.Exposed_init;
    internal.initial_Infected = internal.Infected_init;
    internal.initial_Recovered = internal.Recovered_init;
    internal.Susceptible_init = internal.N;
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
    const Infected = state[2];
    dstatedt[2] = 0 + 1 * internal.South_Africa * internal.sigma * Exposed - 1 * internal.South_Africa * internal.gamma * Infected;
    dstatedt[3] = 0 + 1 * internal.South_Africa * internal.gamma * Infected;
    var epsilon = (t > 23 ? internal.Event_trigger * 0.80310000000000004 : 0);
    dstatedt[1] = 0 + 1 * internal.South_Africa * ((1 - epsilon) * internal.beta * Susceptible * Infected / internal.N) - 1 * internal.South_Africa * internal.sigma * Exposed;
    dstatedt[0] = 0 - 1 * internal.South_Africa * ((1 - epsilon) * internal.beta * Susceptible * Infected / internal.N);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Susceptible", "Exposed", "Infected", "Recovered"];
    this.metadata.internalOrder = {beta: null, Event_trigger: null, Exposed_init: null, gamma: null, Infected_init: null, initial_Exposed: null, initial_Infected: null, initial_Recovered: null, initial_Susceptible: null, N: null, Recovered_init: null, sigma: null, South_Africa: null, Susceptible_init: null};
    this.metadata.variableOrder = {Susceptible: null, Exposed: null, Infected: null, Recovered: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
