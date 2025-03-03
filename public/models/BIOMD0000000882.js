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
    var state = Array(3).fill(0);
    state[0] = internal.initial_Susceptible;
    state[1] = internal.initial_Zombie;
    state[2] = internal.initial_Removal;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "beta", "delta", "p", "Removal_init", "Susceptible_init", "zeta", "Zombie_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 0.0094999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Removal_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Susceptible_init", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "zeta", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Zombie_init", internal, 1, -Infinity, Infinity, false);
    internal.initial_Removal = internal.Removal_init;
    internal.initial_Susceptible = internal.Susceptible_init;
    internal.initial_Zombie = internal.Zombie_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Susceptible = state[0];
    const Zombie = state[1];
    const Removal = state[2];
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.alpha * Susceptible * Zombie + internal.delta * Susceptible) - 1 * internal.compartment * (internal.zeta * Removal);
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.p) - 1 * internal.compartment * (internal.beta * Susceptible * Zombie + internal.delta * Susceptible);
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.beta * Susceptible * Zombie + internal.zeta * Removal) - 1 * internal.compartment * (internal.alpha * Susceptible * Zombie);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Susceptible", "Zombie", "Removal"];
    this.metadata.internalOrder = {alpha: null, beta: null, compartment: null, delta: null, initial_Removal: null, initial_Susceptible: null, initial_Zombie: null, p: null, Removal_init: null, Susceptible_init: null, zeta: null, Zombie_init: null};
    this.metadata.variableOrder = {Susceptible: null, Zombie: null, Removal: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
