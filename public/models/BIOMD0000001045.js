export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.New_York_1968_69 = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_Infected;
    state[1] = internal.initial_Recovered;
    state[2] = internal.initial_Susceptible;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["beta", "Infected_init", "kxk", "Recovered_init", "Susceptible_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "beta", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Infected_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 0.33000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Recovered_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Susceptible_init", internal, 0, -Infinity, Infinity, false);
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
    const Infected = state[0];
    const Susceptible = state[2];
    dstatedt[0] = 0 + 1 * internal.New_York_1968_69 * (internal.beta * Infected * Susceptible) - 1 * internal.New_York_1968_69 * internal.kxk * Infected;
    dstatedt[1] = 0 + 1 * internal.New_York_1968_69 * internal.kxk * Infected;
    dstatedt[2] = 0 - 1 * internal.New_York_1968_69 * (internal.beta * Infected * Susceptible);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Infected", "Recovered", "Susceptible"];
    this.metadata.internalOrder = {beta: null, Infected_init: null, initial_Infected: null, initial_Recovered: null, initial_Susceptible: null, kxk: null, New_York_1968_69: null, Recovered_init: null, Susceptible_init: null};
    this.metadata.variableOrder = {Infected: null, Recovered: null, Susceptible: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
