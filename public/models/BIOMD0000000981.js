export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.China = 1;
    internal.pi = 3.1415929999999999;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(11).fill(0);
    state[0] = internal.initial_Susceptible;
    state[1] = internal.initial_Exposed;
    state[2] = internal.initial_Infected;
    state[3] = internal.initial_Asymptomatic;
    state[4] = internal.initial_Susceptible_isolated;
    state[5] = internal.initial_Quarantined;
    state[6] = internal.initial_Hospitalised;
    state[7] = internal.initial_Recovered;
    state[8] = internal.initial_Deceased;
    state[9] = internal.initial_Recovered_from_hospitals;
    state[10] = internal.initial_Total_reported_cases;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Asymptomatic_init", "beta", "c_0", "d", "Deceased_init", "delta", "eta", "Exposed_init", "gamma_A", "gamma_H", "gamma_I", "Hospitalised_init", "Infected_init", "mu", "phi", "q1", "q2", "q3", "Quarantined_init", "Recovered_from_hospitals_init", "Recovered_init", "Susceptible_init", "Susceptible_isolated_init", "theta", "Total_reported_cases_init", "xi"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Asymptomatic_init", internal, 991.28999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 0.054043000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c_0", internal, 40.319000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d", internal, 0.00055887999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Deceased_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta", internal, 0.00028286000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "eta", internal, 17.379000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Exposed_init", internal, 501.23000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_A", internal, 0.55671000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_H", internal, 0.035352000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_I", internal, 0.15795999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Hospitalised_init", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Infected_init", internal, 0.22839000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu", internal, 0.071428569999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "phi", internal, 0.19231000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q2", internal, 0.47217999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q3", internal, 2.6953999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Quarantined_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Recovered_from_hospitals_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Recovered_init", internal, 240.75999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Susceptible_init", internal, 1336210000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Susceptible_isolated_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "theta", internal, 0.66279999999999994, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Total_reported_cases_init", internal, 21, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "xi", internal, 0.80986999999999998, -Infinity, Infinity, false);
    internal.initial_Asymptomatic = internal.Asymptomatic_init;
    internal.initial_Deceased = internal.Deceased_init;
    internal.initial_Exposed = internal.Exposed_init;
    internal.initial_Hospitalised = internal.Hospitalised_init;
    internal.initial_Infected = internal.Infected_init;
    internal.initial_Quarantined = internal.Quarantined_init;
    internal.initial_Recovered = internal.Recovered_init;
    internal.initial_Recovered_from_hospitals = internal.Recovered_from_hospitals_init;
    internal.initial_Susceptible = internal.Susceptible_init;
    internal.initial_Susceptible_isolated = internal.Susceptible_isolated_init;
    internal.initial_Total_reported_cases = internal.Total_reported_cases_init;
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
    const Susceptible_isolated = state[4];
    const Quarantined = state[5];
    const Hospitalised = state[6];
    const Recovered = state[7];
    const Total_reported_cases = state[10];
    dstatedt[8] = 0 + 1 * internal.China * internal.d * Hospitalised;
    dstatedt[6] = 0 + 1 * internal.China * internal.q2 * Infected + 1 * internal.China * internal.eta * Quarantined - 1 * internal.China * internal.d * Hospitalised - 1 * internal.China * internal.gamma_H * Hospitalised;
    dstatedt[7] = 0 + 1 * internal.China * internal.gamma_I * Infected + 1 * internal.China * internal.gamma_A * Asymptomatic + 1 * internal.China * internal.gamma_H * Hospitalised;
    dstatedt[9] = internal.gamma_H * Hospitalised;
    dstatedt[10] = internal.q2 * Infected + internal.eta * Quarantined;
    var q_1_t = internal.q1 * Math.exp(- internal.delta * Total_reported_cases);
    var Total_population = Asymptomatic + Exposed + Infected + Recovered + Susceptible;
    var c_t = internal.c_0 * q_1_t;
    dstatedt[3] = 0 + 1 * internal.China * ((1 - internal.theta) * internal.phi * Exposed) - 1 * internal.China * internal.gamma_A * Asymptomatic - 1 * internal.China * (internal.q3 * (internal.q2 * Infected + internal.eta * Quarantined) * Asymptomatic / Total_population);
    dstatedt[2] = 0 + 1 * internal.China * (internal.theta * internal.phi * Exposed) - 1 * internal.China * internal.q2 * Infected - 1 * internal.China * internal.d * Infected - 1 * internal.China * internal.gamma_I * Infected - 1 * internal.China * (internal.q3 * (internal.q2 * Infected + internal.eta * Quarantined) * Infected / Total_population);
    dstatedt[5] = 0 + 1 * internal.China * (internal.q3 * (internal.q2 * Infected + internal.eta * Quarantined) * Exposed / Total_population) + 1 * internal.China * (internal.q3 * (internal.q2 * Infected + internal.eta * Quarantined) * Infected / Total_population) + 1 * internal.China * (internal.q3 * (internal.q2 * Infected + internal.eta * Quarantined) * Asymptomatic / Total_population) - 1 * internal.China * internal.eta * Quarantined;
    dstatedt[4] = 0 + 1 * internal.China * (internal.q3 * (internal.q2 * Infected + internal.eta * Quarantined) * Susceptible / Total_population) - 1 * internal.China * internal.mu * Susceptible_isolated;
    dstatedt[1] = 0 + 1 * internal.China * (internal.beta * c_t * (Infected + internal.xi * Asymptomatic) * Susceptible / Total_population) - 1 * internal.China * (internal.theta * internal.phi * Exposed) - 1 * internal.China * ((1 - internal.theta) * internal.phi * Exposed) - 1 * internal.China * (internal.q3 * (internal.q2 * Infected + internal.eta * Quarantined) * Exposed / Total_population);
    dstatedt[0] = 0 - 1 * internal.China * (internal.beta * c_t * (Infected + internal.xi * Asymptomatic) * Susceptible / Total_population) - 1 * internal.China * (internal.q3 * (internal.q2 * Infected + internal.eta * Quarantined) * Susceptible / Total_population) + 1 * internal.China * internal.mu * Susceptible_isolated;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Susceptible", "Exposed", "Infected", "Asymptomatic", "Susceptible_isolated", "Quarantined", "Hospitalised", "Recovered", "Deceased", "Recovered_from_hospitals", "Total_reported_cases"];
    this.metadata.internalOrder = {Asymptomatic_init: null, beta: null, c_0: null, China: null, d: null, Deceased_init: null, delta: null, eta: null, Exposed_init: null, gamma_A: null, gamma_H: null, gamma_I: null, Hospitalised_init: null, Infected_init: null, initial_Asymptomatic: null, initial_Deceased: null, initial_Exposed: null, initial_Hospitalised: null, initial_Infected: null, initial_Quarantined: null, initial_Recovered: null, initial_Recovered_from_hospitals: null, initial_Susceptible: null, initial_Susceptible_isolated: null, initial_Total_reported_cases: null, mu: null, phi: null, pi: null, q1: null, q2: null, q3: null, Quarantined_init: null, Recovered_from_hospitals_init: null, Recovered_init: null, Susceptible_init: null, Susceptible_isolated_init: null, theta: null, Total_reported_cases_init: null, xi: null};
    this.metadata.variableOrder = {Susceptible: null, Exposed: null, Infected: null, Asymptomatic: null, Susceptible_isolated: null, Quarantined: null, Hospitalised: null, Recovered: null, Deceased: null, Recovered_from_hospitals: null, Total_reported_cases: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
