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
    var state = Array(9).fill(0);
    state[0] = internal.initial_T;
    state[1] = internal.initial_I;
    state[2] = internal.initial_F_1;
    state[3] = internal.initial_F_2;
    state[4] = internal.initial_N;
    state[5] = internal.initial_E;
    state[6] = internal.initial_R;
    state[7] = internal.initial_V;
    state[8] = internal.initial_A;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A_init", "alpha", "beta", "c", "d", "d_a", "delta", "delta_1", "delta_2", "E_init", "F_1_init", "F_2_init", "I_init", "kxk", "mu_1", "mu_2", "N_init", "p", "p_1", "p_2", "p_3", "psi_1", "psi_2", "q", "q_1", "q_2", "r_e", "R_init", "rho", "s_1", "s_1_prime", "s_2", "s_2_prime", "s_3", "s_4", "T_init", "V_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c", internal, 0.67000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d", internal, 0.0030000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_a", internal, 0.33200000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta", internal, 0.56000000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_1", internal, 4.9000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_2", internal, 5.1600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "F_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "F_2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_1", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_2", internal, 0.14000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_2", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_3", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "psi_1", internal, 14, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "psi_2", internal, 21, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q_1", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q_2", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_e", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s_1", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s_1_prime", internal, 1.8999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s_2", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s_2_prime", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s_3", internal, 1.7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s_4", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_A = internal.A_init;
    internal.initial_E = internal.E_init;
    internal.initial_F_1 = internal.F_1_init;
    internal.initial_F_2 = internal.F_2_init;
    internal.initial_I = internal.I_init;
    internal.initial_N = internal.N_init;
    internal.initial_R = internal.R_init;
    internal.initial_T = internal.T_init;
    internal.initial_V = internal.V_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const T = state[0];
    const I = state[1];
    const F_1 = state[2];
    const F_2 = state[3];
    const N = state[4];
    const E = state[5];
    const R = state[6];
    const V = state[7];
    const A = state[8];
    dstatedt[8] = 0 - 1 * internal.compartment * internal.kxk * V * A + 1 * internal.compartment * (internal.d_a * (1 - A)) + 1 * internal.compartment * (internal.q * V);
    dstatedt[5] = 0 + 1 * internal.compartment * (internal.r_e * E * (1 - E)) + 1 * internal.compartment * (internal.alpha * I * E);
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.p_1 * I) - 1 * internal.compartment * internal.delta_1 * F_1;
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.p_2 * E) + 1 * internal.compartment * (internal.p_3 * N) - 1 * internal.compartment * internal.delta_2 * F_2;
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.beta * V * T) - 1 * internal.compartment * internal.delta * I - 1 * internal.compartment * ((internal.mu_1 * (1 + internal.s_1 * F_1 + internal.s_2 * F_2) * N + internal.mu_2 * (1 + internal.s_1_prime * F_1 + internal.s_2_prime * F_2) * E) * I) - 1 * internal.compartment * (internal.psi_2 * I * F_2);
    dstatedt[4] = 0 + 1 * internal.compartment * (N * (1 - N)) + 1 * internal.compartment * ((internal.q_1 * F_1 + internal.q_2 * F_2) * N);
    dstatedt[6] = 0 - 1 * internal.compartment * internal.rho * R + 1 * internal.compartment * (internal.psi_1 * T * (F_1 + F_2)) + 1 * internal.compartment * (internal.psi_2 * I * F_2);
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.d * (1 - T)) - 1 * internal.compartment * (internal.beta * V * T) + 1 * internal.compartment * internal.rho * R - 1 * internal.compartment * (internal.psi_1 * T * (F_1 + F_2));
    dstatedt[7] = 0 + 1 * internal.compartment * (I * internal.p / (1 + internal.s_3 * F_1 + internal.s_4 * F_2)) - 1 * internal.compartment * internal.c * V - 1 * internal.compartment * internal.kxk * V * A;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "T", "I", "F_1", "F_2", "N", "E", "R", "V", "A"];
    this.metadata.internalOrder = {A_init: null, alpha: null, beta: null, c: null, compartment: null, d: null, d_a: null, delta: null, delta_1: null, delta_2: null, E_init: null, F_1_init: null, F_2_init: null, I_init: null, initial_A: null, initial_E: null, initial_F_1: null, initial_F_2: null, initial_I: null, initial_N: null, initial_R: null, initial_T: null, initial_V: null, kxk: null, mu_1: null, mu_2: null, N_init: null, p: null, p_1: null, p_2: null, p_3: null, psi_1: null, psi_2: null, q: null, q_1: null, q_2: null, r_e: null, R_init: null, rho: null, s_1: null, s_1_prime: null, s_2: null, s_2_prime: null, s_3: null, s_4: null, T_init: null, V_init: null};
    this.metadata.variableOrder = {T: null, I: null, F_1: null, F_2: null, N: null, E: null, R: null, V: null, A: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
