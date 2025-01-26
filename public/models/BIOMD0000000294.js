export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.env = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(11).fill(0);
    state[0] = internal.initial_N;
    state[1] = internal.initial_S;
    state[2] = internal.initial_I1;
    state[3] = internal.initial_I2;
    state[4] = internal.initial_R1;
    state[5] = internal.initial_R2;
    state[6] = internal.initial_V;
    state[7] = internal.initial_Iv2;
    state[8] = internal.initial_J2;
    state[9] = internal.initial_J1;
    state[10] = internal.initial_R;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["eta", "I1_init", "I2_init", "Iv2_init", "J1_init", "J2_init", "l_e", "N_init", "nu", "p", "R_init", "R0", "R1_init", "R2_init", "S_init", "tau", "theta", "tImm", "tImm_V", "tInf", "V_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "eta", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I1_init", internal, 0.0017696700000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I2_init", internal, 9.9999999999999995e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Iv2_init", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "J1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "J2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "l_e", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nu", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R0", internal, 17, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R1_init", internal, 0.43940699999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_init", internal, 0.058823500000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "theta", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tImm", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tImm_V", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tInf", internal, 21, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_init", internal, 0.90000000000000002, -Infinity, Infinity, false);
    internal.gamma = 365 / internal.tInf;
    internal.initial_I1 = internal.I1_init;
    internal.initial_I2 = internal.I2_init;
    internal.initial_Iv2 = internal.Iv2_init;
    internal.initial_J1 = internal.J1_init;
    internal.initial_J2 = internal.J2_init;
    internal.initial_N = internal.N_init;
    internal.initial_R = internal.R_init;
    internal.initial_R1 = internal.R1_init;
    internal.initial_R2 = internal.R2_init;
    internal.initial_S = internal.S_init;
    internal.initial_V = internal.V_init;
    internal.mu = 1 / internal.l_e;
    internal.sigma = 1 / internal.tImm;
    internal.sigmaV = 1 / internal.tImm_V;
    internal.beta = internal.R0 * (internal.gamma + internal.mu);
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const N = state[0];
    const S = state[1];
    const I1 = state[2];
    const I2 = state[3];
    const R1 = state[4];
    const R2 = state[5];
    const V = state[6];
    const Iv2 = state[7];
    const J2 = state[8];
    const J1 = state[9];
    const R = state[10];
    dstatedt[0] = 0;
    dstatedt[10] = 0 - 1 * internal.mu * R + 1 * internal.gamma / (1 - internal.nu) * J1 + 1 * internal.gamma / (1 - internal.nu) * J2 + 1 * internal.gamma / (1 - internal.eta) * Iv2 - 1 * internal.sigma * R;
    dstatedt[2] = 0 - 1 * internal.mu * I1 + 1 * internal.beta * S * ((I1 + J1) / N) - 1 * internal.gamma * I1;
    dstatedt[3] = 0 - 1 * internal.mu * I2 + 1 * internal.beta * S * ((I2 + J2 + Iv2) / N) - 1 * internal.gamma * I2;
    dstatedt[7] = 0 - 1 * internal.mu * Iv2 + 1 * internal.beta * (1 - internal.tau) * V * ((I2 + J2 + Iv2) / N) - 1 * internal.gamma / (1 - internal.eta) * Iv2;
    dstatedt[9] = 0 - 1 * internal.mu * J1 + 1 * internal.beta * (1 - internal.theta) * R2 * (I1 + J1) / N - 1 * internal.gamma / (1 - internal.nu) * J1;
    dstatedt[8] = 0 - 1 * internal.mu * J2 + 1 * internal.beta * (1 - internal.theta) * R1 * (I2 + J2 + Iv2) / N - 1 * internal.gamma / (1 - internal.nu) * J2;
    dstatedt[4] = 0 - 1 * internal.mu * R1 + 1 * internal.gamma * I1 - 1 * internal.beta * (1 - internal.theta) * R1 * (I2 + J2 + Iv2) / N - 1 * internal.sigma * R1;
    dstatedt[5] = 0 - 1 * internal.mu * R2 + 1 * internal.gamma * I2 - 1 * internal.beta * (1 - internal.theta) * R2 * (I1 + J1) / N - 1 * internal.sigma * R2;
    dstatedt[1] = 0 + 1 * internal.mu * (1 - internal.p) * N - 1 * internal.mu * S - 1 * internal.beta * S * ((I1 + J1) / N) - 1 * internal.beta * S * ((I2 + J2 + Iv2) / N) + 1 * internal.sigma * R1 + 1 * internal.sigma * R2 + 1 * internal.sigma * R + 1 * internal.sigmaV * V;
    dstatedt[6] = 0 + 1 * internal.mu * internal.p * N - 1 * internal.mu * V - 1 * internal.beta * (1 - internal.tau) * V * ((I2 + J2 + Iv2) / N) - 1 * internal.sigmaV * V;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "N", "S", "I1", "I2", "R1", "R2", "V", "Iv2", "J2", "J1", "R"];
    this.metadata.internalOrder = {beta: null, env: null, eta: null, gamma: null, I1_init: null, I2_init: null, initial_I1: null, initial_I2: null, initial_Iv2: null, initial_J1: null, initial_J2: null, initial_N: null, initial_R: null, initial_R1: null, initial_R2: null, initial_S: null, initial_V: null, Iv2_init: null, J1_init: null, J2_init: null, l_e: null, mu: null, N_init: null, nu: null, p: null, R_init: null, R0: null, R1_init: null, R2_init: null, S_init: null, sigma: null, sigmaV: null, tau: null, theta: null, tImm: null, tImm_V: null, tInf: null, V_init: null};
    this.metadata.variableOrder = {N: null, S: null, I1: null, I2: null, R1: null, R2: null, V: null, Iv2: null, J2: null, J1: null, R: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
