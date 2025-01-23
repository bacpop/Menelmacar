export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Lagos = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var total_pop_init = internal.initial_asymptomatic + internal.initial_detected + internal.initial_exposed + internal.initial_recovered + internal.initial_susceptible + internal.initial_symptomatic;
    internal.initial_total_pop = total_pop_init;
    var state = Array(9).fill(0);
    state[0] = internal.initial_susceptible;
    state[1] = internal.initial_exposed;
    state[2] = internal.initial_asymptomatic;
    state[3] = internal.initial_symptomatic;
    state[4] = internal.initial_detected;
    state[5] = internal.initial_recovered;
    state[6] = internal.initial_deceased;
    state[7] = internal.initial_total_pop;
    state[8] = internal.initial_detected_cumulative;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "asymptomatic_start", "d_0", "d_D", "deceased_init", "delta", "detected_cumulative_init", "detected_init", "eps", "exposed_start", "gamma_0", "gamma_a", "gamma_i", "nu", "psi", "recovered_init", "sigma", "susceptible_init", "symptomatic_start", "theta", "transmission_rate_effective"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "asymptomatic_start", internal, 188, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_0", internal, 0.014999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_D", internal, 0.014999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "deceased_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "detected_cumulative_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "detected_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "eps", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "exposed_start", internal, 441, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_0", internal, 0.13977999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_a", internal, 0.13977999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_i", internal, 0.066666666666666693, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nu", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "psi", internal, 0.0135, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "recovered_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigma", internal, 0.19230769230769201, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "susceptible_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "symptomatic_start", internal, 212, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "theta", internal, 1.8999e-12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "transmission_rate_effective", internal, 0.42359999999999998, -Infinity, Infinity, false);
    internal.asymptomatic_init = internal.asymptomatic_start;
    internal.exposed_init = internal.exposed_start;
    internal.initial_deceased = internal.deceased_init;
    internal.initial_detected = internal.detected_init;
    internal.initial_detected_cumulative = internal.detected_cumulative_init;
    internal.initial_recovered = internal.recovered_init;
    internal.initial_susceptible = internal.susceptible_init;
    internal.symptomatic_init = internal.symptomatic_start;
    internal.initial_asymptomatic = internal.asymptomatic_init;
    internal.initial_exposed = internal.exposed_init;
    internal.initial_symptomatic = internal.symptomatic_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const susceptible = state[0];
    const exposed = state[1];
    const asymptomatic = state[2];
    const symptomatic = state[3];
    const detected = state[4];
    const total_pop = state[7];
    dstatedt[7] = 0 + 0;
    dstatedt[2] = 0 + 1 * internal.Lagos * (internal.sigma * internal.nu * exposed) - 1 * internal.Lagos * internal.theta * asymptomatic - 1 * internal.Lagos * internal.gamma_a * asymptomatic;
    dstatedt[6] = 0 + 1 * internal.Lagos * internal.d_0 * symptomatic + 1 * internal.Lagos * internal.d_D * detected;
    dstatedt[4] = 0 + 1 * internal.Lagos * internal.psi * symptomatic + 1 * internal.Lagos * internal.theta * asymptomatic - 1 * internal.Lagos * internal.gamma_i * detected - 1 * internal.Lagos * internal.d_D * detected;
    dstatedt[8] = 0 + 1 * internal.Lagos * internal.psi * symptomatic + 1 * internal.Lagos * internal.theta * asymptomatic;
    dstatedt[5] = 0 + 1 * internal.Lagos * internal.gamma_0 * symptomatic + 1 * internal.Lagos * internal.gamma_a * asymptomatic + 1 * internal.Lagos * internal.gamma_i * detected;
    dstatedt[3] = 0 + 1 * internal.Lagos * (internal.sigma * (1 - internal.nu) * exposed) - 1 * internal.Lagos * internal.psi * symptomatic - 1 * internal.Lagos * internal.gamma_0 * symptomatic - 1 * internal.Lagos * internal.d_0 * symptomatic;
    var lam = internal.transmission_rate_effective * (1 - internal.eps) * (1 - internal.delta) * (internal.alpha * asymptomatic + symptomatic) / (total_pop - detected);
    dstatedt[1] = 0 + 1 * internal.Lagos * lam * susceptible - 1 * internal.Lagos * (internal.sigma * (1 - internal.nu) * exposed) - 1 * internal.Lagos * (internal.sigma * internal.nu * exposed);
    dstatedt[0] = 0 - 1 * internal.Lagos * lam * susceptible;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "susceptible", "exposed", "asymptomatic", "symptomatic", "detected", "recovered", "deceased", "total_pop", "detected_cumulative"];
    this.metadata.internalOrder = {alpha: null, asymptomatic_init: null, asymptomatic_start: null, d_0: null, d_D: null, deceased_init: null, delta: null, detected_cumulative_init: null, detected_init: null, eps: null, exposed_init: null, exposed_start: null, gamma_0: null, gamma_a: null, gamma_i: null, initial_asymptomatic: null, initial_deceased: null, initial_detected: null, initial_detected_cumulative: null, initial_exposed: null, initial_recovered: null, initial_susceptible: null, initial_symptomatic: null, initial_total_pop: null, Lagos: null, nu: null, psi: null, recovered_init: null, sigma: null, susceptible_init: null, symptomatic_init: null, symptomatic_start: null, theta: null, transmission_rate_effective: null};
    this.metadata.variableOrder = {susceptible: null, exposed: null, asymptomatic: null, symptomatic: null, detected: null, recovered: null, deceased: null, total_pop: null, detected_cumulative: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
