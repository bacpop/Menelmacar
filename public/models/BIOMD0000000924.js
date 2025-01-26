export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.pi = 3.1415929999999999;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(6).fill(0);
    state[0] = internal.initial_Pneumococci___P;
    state[1] = internal.initial_Susceptible_epithelial_cells__EU;
    state[2] = internal.initial_Epithelial_cells_with_bacteria_attached__Ea;
    state[3] = internal.initial_proinflammatory_cytokine__C;
    state[4] = internal.initial_Neutrophils__N;
    state[5] = internal.initial_Debris__D;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "d", "d_C", "d_D", "d_E", "d_N", "d_NP", "Debris__D_init", "Epithelial_cells_with_bacteria_attached__Ea_init", "eta", "gamma_M_A", "gamma_N", "k_d", "k_n", "K_P", "kappa", "M_Astar", "n", "N_max", "Neutrophils__N_init", "omega", "Pneumococci___P_init", "proinflammatory_cytokine__C_init", "r", "rho1", "rho2", "rho3", "s", "Susceptible_epithelial_cells__EU_init", "theta_M", "v", "x"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 0.021000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_C", internal, 0.82999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_D", internal, 1.4000000000000001e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_E", internal, 0.16700000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_N", internal, 0.063, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_NP", internal, 1.7599999999999999e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Debris__D_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Epithelial_cells_with_bacteria_attached__Ea_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "eta", internal, 1.3300000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_M_A", internal, 5.5999999999999997e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_N", internal, 1.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_d", internal, 5.0000000000000001e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_n", internal, 1.4e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_P", internal, 341765197.72601199, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kappa", internal, 0.042000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_Astar", internal, 1000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N_max", internal, 180000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Neutrophils__N_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "omega", internal, 2.0999999999999999e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pneumococci___P_init", internal, 100000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "proinflammatory_cytokine__C_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 1.1299999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho1", internal, 0.14999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho2", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho3", internal, 1.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Susceptible_epithelial_cells__EU_init", internal, 100000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "theta_M", internal, 4.1999999999999999e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v", internal, 0.029000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x", internal, 2, -Infinity, Infinity, false);
    internal.initial_Debris__D = internal.Debris__D_init;
    internal.initial_Epithelial_cells_with_bacteria_attached__Ea = internal.Epithelial_cells_with_bacteria_attached__Ea_init;
    internal.initial_Neutrophils__N = internal.Neutrophils__N_init;
    internal.initial_Pneumococci___P = internal.Pneumococci___P_init;
    internal.initial_proinflammatory_cytokine__C = internal.proinflammatory_cytokine__C_init;
    internal.initial_Susceptible_epithelial_cells__EU = internal.Susceptible_epithelial_cells__EU_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Pneumococci___P = state[0];
    const Susceptible_epithelial_cells__EU = state[1];
    const Epithelial_cells_with_bacteria_attached__Ea = state[2];
    const proinflammatory_cytokine__C = state[3];
    const Neutrophils__N = state[4];
    const Debris__D = state[5];
    dstatedt[5] = 0 + 1 * internal.compartment * (internal.rho1 * internal.d_NP * Neutrophils__N * Pneumococci___P + internal.rho2 * internal.d_N * Neutrophils__N + internal.rho3 * internal.d_E * Epithelial_cells_with_bacteria_attached__Ea) - 1 * internal.compartment * (internal.d_D * Debris__D * internal.M_Astar);
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.omega * Pneumococci___P * Susceptible_epithelial_cells__EU) - 1 * internal.compartment * (internal.d_E * Epithelial_cells_with_bacteria_attached__Ea);
    dstatedt[4] = 0 + 1 * internal.compartment * (internal.eta * proinflammatory_cytokine__C * (1 - Neutrophils__N / internal.N_max)) - 1 * internal.compartment * (internal.d_NP * Neutrophils__N * Pneumococci___P + internal.d_N * Neutrophils__N);
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.alpha * (Epithelial_cells_with_bacteria_attached__Ea / (1 + internal.k_n * Neutrophils__N)) + internal.v * (internal.theta_M * Pneumococci___P * internal.M_Astar / (internal.d + internal.kappa + internal.theta_M * Pneumococci___P * (1 + internal.k_n * Neutrophils__N)))) - 1 * internal.compartment * (internal.d_C * proinflammatory_cytokine__C);
    dstatedt[1] = 0 - 1 * internal.compartment * (internal.omega * Pneumococci___P * Susceptible_epithelial_cells__EU);
    var f_P_M_A = Math.pow((internal.n), (internal.x)) * internal.M_Astar / (Math.pow((Pneumococci___P), (internal.x)) + Math.pow((internal.n), (internal.x)) * internal.M_Astar);
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.r * Pneumococci___P * (1 - Pneumococci___P / internal.K_P)) - 1 * internal.compartment * (internal.gamma_M_A * f_P_M_A / (1 + internal.k_d * Debris__D * internal.M_Astar) * internal.M_Astar * Pneumococci___P + internal.gamma_N * Neutrophils__N * Pneumococci___P);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Pneumococci___P", "Susceptible_epithelial_cells__EU", "Epithelial_cells_with_bacteria_attached__Ea", "proinflammatory_cytokine__C", "Neutrophils__N", "Debris__D"];
    this.metadata.internalOrder = {alpha: null, compartment: null, d: null, d_C: null, d_D: null, d_E: null, d_N: null, d_NP: null, Debris__D_init: null, Epithelial_cells_with_bacteria_attached__Ea_init: null, eta: null, gamma_M_A: null, gamma_N: null, initial_Debris__D: null, initial_Epithelial_cells_with_bacteria_attached__Ea: null, initial_Neutrophils__N: null, initial_Pneumococci___P: null, initial_proinflammatory_cytokine__C: null, initial_Susceptible_epithelial_cells__EU: null, k_d: null, k_n: null, K_P: null, kappa: null, M_Astar: null, n: null, N_max: null, Neutrophils__N_init: null, omega: null, pi: null, Pneumococci___P_init: null, proinflammatory_cytokine__C_init: null, r: null, rho1: null, rho2: null, rho3: null, s: null, Susceptible_epithelial_cells__EU_init: null, theta_M: null, v: null, x: null};
    this.metadata.variableOrder = {Pneumococci___P: null, Susceptible_epithelial_cells__EU: null, Epithelial_cells_with_bacteria_attached__Ea: null, proinflammatory_cytokine__C: null, Neutrophils__N: null, Debris__D: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
