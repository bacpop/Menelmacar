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
    var state = Array(8).fill(0);
    state[0] = internal.initial_Susceptible;
    state[1] = internal.initial_Exposed;
    state[2] = internal.initial_Infected;
    state[3] = internal.initial_Asymptomatic;
    state[4] = internal.initial_Susceptible_quarantined;
    state[5] = internal.initial_Exposed_quarantined;
    state[6] = internal.initial_Hospitalised;
    state[7] = internal.initial_Recovered;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "Asymptomatic_init", "beta", "c_lockdown", "delta_I", "delta_q", "Exposed_init", "Exposed_quarantined_init", "gamma_A", "gamma_H", "gamma_I", "Hospitalised_init", "Infected_init", "lambda", "q_lockdown", "Recovered_init", "rho", "sigma", "Susceptible_init", "Susceptible_quarantined_init", "theta"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 1.7825999999999998e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Asymptomatic_init", internal, 53.539000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 2.1010999999999999e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c_lockdown", internal, 14.781000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_I", internal, 0.13266, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_q", internal, 0.12590000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Exposed_init", internal, 105.09999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Exposed_quarantined_init", internal, 1.1641999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_A", internal, 0.13977999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_H", internal, 0.11624, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_I", internal, 0.33028999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Hospitalised_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Infected_init", internal, 27.678999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda", internal, 0.071428500000000006, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q_lockdown", internal, 1.8887e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Recovered_init", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho", internal, 0.86834, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigma", internal, 0.14285700000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Susceptible_init", internal, 11081000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Susceptible_quarantined_init", internal, 739, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "theta", internal, 1, -Infinity, Infinity, false);
    internal.initial_Asymptomatic = internal.Asymptomatic_init;
    internal.initial_Exposed = internal.Exposed_init;
    internal.initial_Exposed_quarantined = internal.Exposed_quarantined_init;
    internal.initial_Hospitalised = internal.Hospitalised_init;
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
    const Exposed = state[1];
    const Infected = state[2];
    const Asymptomatic = state[3];
    const Susceptible_quarantined = state[4];
    const Exposed_quarantined = state[5];
    const Hospitalised = state[6];
    var c = (t > 9 ? internal.c_lockdown : 14.781000000000001);
    dstatedt[3] = 0 + 1 * internal.Wuhan * (internal.sigma * (1 - internal.rho) * Exposed) - 1 * internal.Wuhan * internal.gamma_A * Asymptomatic;
    dstatedt[6] = 0 + 1 * internal.Wuhan * internal.delta_I * Infected - 1 * internal.Wuhan * internal.gamma_H * Hospitalised - 1 * internal.Wuhan * internal.alpha * Hospitalised + 1 * internal.Wuhan * internal.delta_q * Exposed_quarantined;
    dstatedt[2] = 0 + 1 * internal.Wuhan * (internal.sigma * internal.rho * Exposed) - 1 * internal.Wuhan * internal.delta_I * Infected - 1 * internal.Wuhan * internal.gamma_I * Infected - 1 * internal.Wuhan * internal.alpha * Infected;
    dstatedt[7] = 0 + 1 * internal.Wuhan * internal.gamma_I * Infected + 1 * internal.Wuhan * internal.gamma_A * Asymptomatic + 1 * internal.Wuhan * internal.gamma_H * Hospitalised;
    var q = (t > 9 ? internal.q_lockdown : 1.8887e-07);
    dstatedt[1] = 0 + 1 * internal.Wuhan * (internal.beta * c * (1 - q) * Susceptible * (Infected + internal.theta * Asymptomatic)) - 1 * internal.Wuhan * (internal.sigma * internal.rho * Exposed) - 1 * internal.Wuhan * (internal.sigma * (1 - internal.rho) * Exposed);
    dstatedt[5] = 0 + 1 * internal.Wuhan * (internal.beta * c * q * Susceptible * (Infected + internal.theta * Asymptomatic)) - 1 * internal.Wuhan * internal.delta_q * Exposed_quarantined;
    dstatedt[0] = 0 - 1 * internal.Wuhan * (internal.beta * c * (1 - q) * Susceptible * (Infected + internal.theta * Asymptomatic)) - 1 * internal.Wuhan * (c * q * (1 - internal.beta) * Susceptible * (Infected + internal.theta * Asymptomatic)) + 1 * internal.Wuhan * internal.lambda * Susceptible_quarantined - 1 * internal.Wuhan * (internal.beta * c * q * Susceptible * (Infected + internal.theta * Asymptomatic));
    dstatedt[4] = 0 + 1 * internal.Wuhan * (c * q * (1 - internal.beta) * Susceptible * (Infected + internal.theta * Asymptomatic)) - 1 * internal.Wuhan * internal.lambda * Susceptible_quarantined;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Susceptible", "Exposed", "Infected", "Asymptomatic", "Susceptible_quarantined", "Exposed_quarantined", "Hospitalised", "Recovered"];
    this.metadata.internalOrder = {alpha: null, Asymptomatic_init: null, beta: null, c_lockdown: null, delta_I: null, delta_q: null, Exposed_init: null, Exposed_quarantined_init: null, gamma_A: null, gamma_H: null, gamma_I: null, Hospitalised_init: null, Infected_init: null, initial_Asymptomatic: null, initial_Exposed: null, initial_Exposed_quarantined: null, initial_Hospitalised: null, initial_Infected: null, initial_Recovered: null, initial_Susceptible: null, initial_Susceptible_quarantined: null, lambda: null, pi: null, q_lockdown: null, Recovered_init: null, rho: null, sigma: null, Susceptible_init: null, Susceptible_quarantined_init: null, theta: null, Wuhan: null};
    this.metadata.variableOrder = {Susceptible: null, Exposed: null, Infected: null, Asymptomatic: null, Susceptible_quarantined: null, Exposed_quarantined: null, Hospitalised: null, Recovered: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
