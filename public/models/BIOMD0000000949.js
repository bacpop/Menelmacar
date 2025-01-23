export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Human = 1;
    internal.Mosquito = 1;
    internal.pi = 3.1415929999999999;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(7).fill(0);
    state[0] = internal.initial_Susceptible_Human;
    state[1] = internal.initial_Exposed_Human;
    state[2] = internal.initial_Infected_Human;
    state[3] = internal.initial_Recovered;
    state[4] = internal.initial_Susceptible_Mosquito;
    state[5] = internal.initial_Exposed_Mosquito;
    state[6] = internal.initial_Infected_Mosquito;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Baseline_dummy_variable", "Recovered_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Baseline_dummy_variable", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Recovered_init", internal, 0, -Infinity, Infinity, false);
    internal.Beta_hv = ((internal.Baseline_dummy_variable == 0 ? 0.021999999999999999 : 0.021999999999999999));
    internal.Beta_tilde_vh = ((internal.Baseline_dummy_variable == 0 ? 0.024 : 0.048000000000000001));
    internal.Beta_vh = ((internal.Baseline_dummy_variable == 0 ? 0.23999999999999999 : 0.47999999999999998));
    internal.Capital_lambda_h = ((internal.Baseline_dummy_variable == 0 ? 0.041000000000000002 : 0.033000000000000002));
    internal.delta_h = ((internal.Baseline_dummy_variable == 0 ? 1.8e-05 : 9.0000000000000006e-05));
    internal.Exposed_Human_init = ((internal.Baseline_dummy_variable == 0 ? 20 : 10));
    internal.Exposed_Mosquito_init = ((internal.Baseline_dummy_variable == 0 ? 30 : 100));
    internal.gamma_h = ((internal.Baseline_dummy_variable == 0 ? 0.0035000000000000001 : 0.0035000000000000001));
    internal.Infected_Human_init = ((internal.Baseline_dummy_variable == 0 ? 3 : 30));
    internal.Infected_Mosquito_init = ((internal.Baseline_dummy_variable == 0 ? 5 : 50));
    internal.initial_Recovered = internal.Recovered_init;
    internal.Psi_h = ((internal.Baseline_dummy_variable == 0 ? 5.5000000000000002e-05 : 0.00011));
    internal.Psi_v = ((internal.Baseline_dummy_variable == 0 ? 0.13 : 0.13));
    internal.rho_h = ((internal.Baseline_dummy_variable == 0 ? 0.0027000000000000001 : 0.00055000000000000003));
    internal.sigma_h = ((internal.Baseline_dummy_variable == 0 ? 4.2999999999999998 : 19));
    internal.sigma_v = ((internal.Baseline_dummy_variable == 0 ? 0.33000000000000002 : 0.5));
    internal.Susceptible_Human_init = ((internal.Baseline_dummy_variable == 0 ? 600 : 500));
    internal.Susceptible_Mosquito_init = ((internal.Baseline_dummy_variable == 0 ? 2400 : 4000));
    internal.u_1h = ((internal.Baseline_dummy_variable == 0 ? 8.8000000000000004e-06 : 1.5999999999999999e-05));
    internal.u_1v = ((internal.Baseline_dummy_variable == 0 ? 0.033000000000000002 : 0.033000000000000002));
    internal.u_2h = ((internal.Baseline_dummy_variable == 0 ? 1.9999999999999999e-07 : 2.9999999999999999e-07));
    internal.u_2v = ((internal.Baseline_dummy_variable == 0 ? 4.0000000000000003e-05 : 2.0000000000000002e-05));
    internal.v_h = ((internal.Baseline_dummy_variable == 0 ? 0.10000000000000001 : 0.10000000000000001));
    internal.v_v = ((internal.Baseline_dummy_variable == 0 ? 0.083000000000000004 : 0.090999999999999998));
    internal.initial_Exposed_Human = internal.Exposed_Human_init;
    internal.initial_Exposed_Mosquito = internal.Exposed_Mosquito_init;
    internal.initial_Infected_Human = internal.Infected_Human_init;
    internal.initial_Infected_Mosquito = internal.Infected_Mosquito_init;
    internal.initial_Susceptible_Human = internal.Susceptible_Human_init;
    internal.initial_Susceptible_Mosquito = internal.Susceptible_Mosquito_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Susceptible_Human = state[0];
    const Exposed_Human = state[1];
    const Infected_Human = state[2];
    const Recovered = state[3];
    const Susceptible_Mosquito = state[4];
    const Exposed_Mosquito = state[5];
    const Infected_Mosquito = state[6];
    var N_h = Susceptible_Human + Exposed_Human + Infected_Human + Recovered;
    var N_v = Susceptible_Mosquito + Exposed_Mosquito + Infected_Mosquito;
    var f_h = internal.u_1h + internal.u_2h * N_h;
    var f_v = internal.u_1v + internal.u_2v * N_v;
    var lambda_h = internal.sigma_v * N_v * internal.sigma_h / (internal.sigma_v * N_v + internal.sigma_h * N_h) * internal.Beta_hv * (Infected_Mosquito / N_v);
    var lambda_v = internal.sigma_v * internal.sigma_h * N_h / (internal.sigma_v * N_v + internal.sigma_h * N_h) * (internal.Beta_vh * (Infected_Human / N_h) + internal.Beta_tilde_vh * (Recovered / N_h));
    dstatedt[1] = 0 + 1 * internal.Human * lambda_h * Susceptible_Human - 1 * internal.Human * internal.v_h * Exposed_Human - 1 * internal.Human * f_h * Exposed_Human;
    dstatedt[5] = 0 + 1 * internal.Mosquito * lambda_v * Susceptible_Mosquito - 1 * internal.Mosquito * internal.v_v * Exposed_Mosquito - 1 * internal.Mosquito * f_v * Exposed_Mosquito;
    dstatedt[2] = 0 + 1 * internal.Human * internal.v_h * Exposed_Human - 1 * internal.Human * internal.gamma_h * Infected_Human - 1 * internal.Human * internal.delta_h * Infected_Human - 1 * internal.Human * f_h * Infected_Human;
    dstatedt[6] = 0 + 1 * internal.Mosquito * internal.v_v * Exposed_Mosquito - 1 * internal.Mosquito * f_v * Infected_Mosquito;
    dstatedt[3] = 0 - 1 * internal.Human * internal.rho_h * Recovered + 1 * internal.Human * internal.gamma_h * Infected_Human - 1 * internal.Human * f_h * Recovered;
    dstatedt[0] = 0 + 1 * internal.Human * (internal.Capital_lambda_h) + 1 * internal.Human * (internal.Psi_h * N_h) + 1 * internal.Human * internal.rho_h * Recovered - 1 * internal.Human * lambda_h * Susceptible_Human - 1 * internal.Human * f_h * Susceptible_Human;
    dstatedt[4] = 0 + 1 * internal.Mosquito * (internal.Psi_v * N_v) - 1 * internal.Mosquito * lambda_v * Susceptible_Mosquito - 1 * internal.Mosquito * f_v * Susceptible_Mosquito;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Susceptible_Human", "Exposed_Human", "Infected_Human", "Recovered", "Susceptible_Mosquito", "Exposed_Mosquito", "Infected_Mosquito"];
    this.metadata.internalOrder = {Baseline_dummy_variable: null, Beta_hv: null, Beta_tilde_vh: null, Beta_vh: null, Capital_lambda_h: null, delta_h: null, Exposed_Human_init: null, Exposed_Mosquito_init: null, gamma_h: null, Human: null, Infected_Human_init: null, Infected_Mosquito_init: null, initial_Exposed_Human: null, initial_Exposed_Mosquito: null, initial_Infected_Human: null, initial_Infected_Mosquito: null, initial_Recovered: null, initial_Susceptible_Human: null, initial_Susceptible_Mosquito: null, Mosquito: null, pi: null, Psi_h: null, Psi_v: null, Recovered_init: null, rho_h: null, sigma_h: null, sigma_v: null, Susceptible_Human_init: null, Susceptible_Mosquito_init: null, u_1h: null, u_1v: null, u_2h: null, u_2v: null, v_h: null, v_v: null};
    this.metadata.variableOrder = {Susceptible_Human: null, Exposed_Human: null, Infected_Human: null, Recovered: null, Susceptible_Mosquito: null, Exposed_Mosquito: null, Infected_Mosquito: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
