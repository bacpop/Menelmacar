export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.pi = 3.1415929999999999;
    internal.Wuhan = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var Susceptible_init = internal.N - internal.initial_Infectious - internal.initial_Super_spreaders;
    internal.initial_Susceptible = Susceptible_init;
    var state = Array(8).fill(0);
    state[0] = internal.initial_Susceptible;
    state[1] = internal.initial_Exposed;
    state[2] = internal.initial_Infectious;
    state[3] = internal.initial_Super_spreaders;
    state[4] = internal.initial_Asymptomatic;
    state[5] = internal.initial_Hospitalised;
    state[6] = internal.initial_Recovered;
    state[7] = internal.initial_Fatalities;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Asymptomatic_init", "beta", "beta_prime", "delta_h", "delta_i", "delta_p", "Exposed_init", "Fatalities_init", "gamma_a", "gamma_i", "gamma_r", "Hospitalised_init", "Infectious_init", "kappa", "lxl", "N", "Recovered_init", "rho1", "rho2", "Super_spreaders_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Asymptomatic_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 2.7999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_prime", internal, 7.6500000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_h", internal, 0.085000000000000006, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_i", internal, 0.035000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_p", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Exposed_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Fatalities_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_a", internal, 0.93999999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_i", internal, 0.27000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_r", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Hospitalised_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Infectious_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kappa", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lxl", internal, 1.5600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N", internal, 44000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Recovered_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho1", internal, 0.57999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho2", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Super_spreaders_init", internal, 5, -Infinity, Infinity, false);
    internal.initial_Asymptomatic = internal.Asymptomatic_init;
    internal.initial_Exposed = internal.Exposed_init;
    internal.initial_Fatalities = internal.Fatalities_init;
    internal.initial_Hospitalised = internal.Hospitalised_init;
    internal.initial_Infectious = internal.Infectious_init;
    internal.initial_Recovered = internal.Recovered_init;
    internal.initial_Super_spreaders = internal.Super_spreaders_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Susceptible = state[0];
    const Exposed = state[1];
    const Infectious = state[2];
    const Super_spreaders = state[3];
    const Hospitalised = state[5];
    dstatedt[4] = 0 + 1 * internal.Wuhan * (internal.kappa * (1 - internal.rho1 - internal.rho2) * Exposed);
    dstatedt[1] = 0 + 1 * internal.Wuhan * (internal.beta * Infectious * Susceptible / internal.N + internal.lxl * internal.beta * Hospitalised * Susceptible / internal.N + internal.beta_prime * Super_spreaders * Susceptible / internal.N) - 1 * internal.Wuhan * (internal.kappa * (1 - internal.rho1 - internal.rho2) * Exposed) - 1 * internal.Wuhan * (internal.kappa * internal.rho2 * Exposed) - 1 * internal.Wuhan * (internal.kappa * internal.rho1 * Exposed);
    dstatedt[7] = 0 + 1 * internal.Wuhan * internal.delta_p * Super_spreaders + 1 * internal.Wuhan * internal.delta_i * Infectious + 1 * internal.Wuhan * internal.delta_h * Hospitalised;
    dstatedt[5] = 0 + 1 * internal.Wuhan * internal.gamma_a * Super_spreaders + 1 * internal.Wuhan * internal.gamma_a * Infectious - 1 * internal.Wuhan * internal.gamma_r * Hospitalised - 1 * internal.Wuhan * internal.delta_h * Hospitalised;
    dstatedt[2] = 0 + 1 * internal.Wuhan * (internal.kappa * internal.rho1 * Exposed) - 1 * internal.Wuhan * internal.delta_i * Infectious - 1 * internal.Wuhan * internal.gamma_a * Infectious - 1 * internal.Wuhan * internal.gamma_i * Infectious;
    dstatedt[6] = 0 + 1 * internal.Wuhan * internal.gamma_i * Super_spreaders + 1 * internal.Wuhan * internal.gamma_i * Infectious + 1 * internal.Wuhan * internal.gamma_r * Hospitalised;
    dstatedt[3] = 0 + 1 * internal.Wuhan * (internal.kappa * internal.rho2 * Exposed) - 1 * internal.Wuhan * internal.delta_p * Super_spreaders - 1 * internal.Wuhan * internal.gamma_a * Super_spreaders - 1 * internal.Wuhan * internal.gamma_i * Super_spreaders;
    dstatedt[0] = 0 - 1 * internal.Wuhan * (internal.beta * Infectious * Susceptible / internal.N + internal.lxl * internal.beta * Hospitalised * Susceptible / internal.N + internal.beta_prime * Super_spreaders * Susceptible / internal.N);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Susceptible", "Exposed", "Infectious", "Super_spreaders", "Asymptomatic", "Hospitalised", "Recovered", "Fatalities"];
    this.metadata.internalOrder = {Asymptomatic_init: null, beta: null, beta_prime: null, delta_h: null, delta_i: null, delta_p: null, Exposed_init: null, Fatalities_init: null, gamma_a: null, gamma_i: null, gamma_r: null, Hospitalised_init: null, Infectious_init: null, initial_Asymptomatic: null, initial_Exposed: null, initial_Fatalities: null, initial_Hospitalised: null, initial_Infectious: null, initial_Recovered: null, initial_Super_spreaders: null, initial_Susceptible: null, kappa: null, lxl: null, N: null, pi: null, Recovered_init: null, rho1: null, rho2: null, Super_spreaders_init: null, Wuhan: null};
    this.metadata.variableOrder = {Susceptible: null, Exposed: null, Infectious: null, Super_spreaders: null, Asymptomatic: null, Hospitalised: null, Recovered: null, Fatalities: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
