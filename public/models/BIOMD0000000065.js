export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(9).fill(0);
    state[0] = internal.initial_M;
    state[1] = internal.initial_B;
    state[2] = internal.initial_A;
    state[3] = internal.initial_L;
    state[4] = internal.initial_P;
    state[5] = internal.initial_I1;
    state[6] = internal.initial_I2;
    state[7] = internal.initial_I3;
    state[8] = internal.initial_L_e;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A_init", "alpha_A", "alpha_B", "alpha_L", "alpha_M", "alpha_P", "B_init", "beta_A", "beta_L1", "gamma_0", "gamma_A", "gamma_B", "gamma_L", "gamma_M", "gamma_P", "I1_init", "I2_init", "I3_init", "K", "K_1", "K_A", "K_L", "K_L1", "K_Le", "L_e_init", "L_init", "M_init", "mu", "P_init", "tau_B", "tau_M", "tau_P"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A_init", internal, 0.037999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_A", internal, 17600, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_B", internal, 0.0166, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_L", internal, 2880, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_M", internal, 0.00099700000000000006, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_P", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_A", internal, 21500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_L1", internal, 2650, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_0", internal, 7.2500000000000005e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_A", internal, 0.52000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_B", internal, 0.00083299999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_L", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_M", internal, 0.41099999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_P", internal, 0.65000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K", internal, 7200, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_1", internal, 25200, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_A", internal, 1.95, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_L", internal, 0.96999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_L1", internal, 1.8100000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_Le", internal, 0.26000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L_e_init", internal, 0.080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L_init", internal, 0.372, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_init", internal, 0.00062600000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu", internal, 0.022599999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_init", internal, 0.0149, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau_B", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau_M", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau_P", internal, 0.82999999999999996, -Infinity, Infinity, false);
    internal.initial_A = internal.A_init;
    internal.initial_B = internal.B_init;
    internal.initial_I1 = internal.I1_init;
    internal.initial_I2 = internal.I2_init;
    internal.initial_I3 = internal.I3_init;
    internal.initial_L = internal.L_init;
    internal.initial_L_e = internal.L_e_init;
    internal.initial_M = internal.M_init;
    internal.initial_P = internal.P_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const M = state[0];
    const B = state[1];
    const A = state[2];
    const L = state[3];
    const P = state[4];
    const I1 = state[5];
    const I2 = state[6];
    const I3 = state[7];
    const L_e = state[8];
    dstatedt[8] = 0;
    dstatedt[2] = 0 - 1 * internal.cell * A * (internal.gamma_A + internal.mu) - 1 * internal.cell * internal.beta_A * B * (A / (internal.K_A + A)) + 1 * internal.cell * internal.alpha_A * B * (L / (internal.K_L + L));
    dstatedt[1] = 0 - 1 * internal.cell * B * (internal.gamma_B + internal.mu) + 1 * internal.cell * I2 / internal.tau_B;
    dstatedt[5] = 0 - 1 * internal.cell * I1 / internal.tau_M + 1 * internal.cell * internal.alpha_M * ((internal.K_1 * Math.exp(internal.mu * internal.tau_M * - 2) * Math.pow((A), (2)) + 1) / (internal.K + internal.K_1 * Math.exp(- 2 * internal.mu * internal.tau_M) * Math.pow((A), (2))));
    dstatedt[6] = 0 - 1 * internal.cell * I2 / internal.tau_B + 1 * internal.cell * internal.alpha_B * M * Math.exp(- (internal.mu * internal.tau_B));
    dstatedt[7] = 0 - 1 * internal.cell * I3 / (internal.tau_B + internal.tau_P) + 1 * internal.cell * internal.alpha_P * M * Math.exp(- 1 * internal.mu * (internal.tau_B + internal.tau_P));
    dstatedt[3] = 0 - 1 * internal.cell * internal.alpha_A * B * (L / (internal.K_L + L)) - 1 * internal.cell * L * (internal.gamma_L + internal.mu) - 1 * internal.cell * internal.beta_L1 * P * (L / (internal.K_L1 + L)) + 1 * internal.cell * internal.alpha_L * P * (L_e / (internal.K_Le + L_e));
    dstatedt[0] = 0 + 1 * internal.cell * internal.gamma_0 - 1 * internal.cell * M * (internal.gamma_M + internal.mu) + 1 * internal.cell * I1 / internal.tau_M;
    dstatedt[4] = 0 - 1 * internal.cell * P * (internal.gamma_P + internal.mu) + 1 * internal.cell * I3 / (internal.tau_B + internal.tau_P);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "M", "B", "A", "L", "P", "I1", "I2", "I3", "L_e"];
    this.metadata.internalOrder = {A_init: null, alpha_A: null, alpha_B: null, alpha_L: null, alpha_M: null, alpha_P: null, B_init: null, beta_A: null, beta_L1: null, cell: null, gamma_0: null, gamma_A: null, gamma_B: null, gamma_L: null, gamma_M: null, gamma_P: null, I1_init: null, I2_init: null, I3_init: null, initial_A: null, initial_B: null, initial_I1: null, initial_I2: null, initial_I3: null, initial_L: null, initial_L_e: null, initial_M: null, initial_P: null, K: null, K_1: null, K_A: null, K_L: null, K_L1: null, K_Le: null, L_e_init: null, L_init: null, M_init: null, mu: null, P_init: null, tau_B: null, tau_M: null, tau_P: null};
    this.metadata.variableOrder = {M: null, B: null, A: null, L: null, P: null, I1: null, I2: null, I3: null, L_e: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
