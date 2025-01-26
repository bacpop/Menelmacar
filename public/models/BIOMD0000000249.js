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
    var state = Array(9).fill(0);
    state[0] = internal.initial_N;
    state[1] = internal.initial_S;
    state[2] = internal.initial_I_1;
    state[3] = internal.initial_I_2;
    state[4] = internal.initial_R_1;
    state[5] = internal.initial_R_2;
    state[6] = internal.initial_I_1p;
    state[7] = internal.initial_I_2p;
    state[8] = internal.initial_R_p;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["I_1_init", "I_1p_init", "I_2_init", "I_2p_init", "l_e", "N_init", "psi", "R_1_init", "R_2_init", "R_p_init", "R0_1", "R0_2", "S_init", "tImm", "tInf_1", "tInf_2"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "I_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_1p_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_2p_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "l_e", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "psi", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_p_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R0_1", internal, 17, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R0_2", internal, 17, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tImm", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tInf_1", internal, 21, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tInf_2", internal, 21, -Infinity, Infinity, false);
    internal.gamma_1 = 365 / internal.tInf_1;
    internal.gamma_2 = 365 / internal.tInf_2;
    internal.initial_I_1 = internal.I_1_init;
    internal.initial_I_1p = internal.I_1p_init;
    internal.initial_I_2 = internal.I_2_init;
    internal.initial_I_2p = internal.I_2p_init;
    internal.initial_N = internal.N_init;
    internal.initial_R_1 = internal.R_1_init;
    internal.initial_R_2 = internal.R_2_init;
    internal.initial_R_p = internal.R_p_init;
    internal.initial_S = internal.S_init;
    internal.mu = 1 / internal.l_e;
    internal.sigma = 1 / internal.tImm;
    internal.beta_1 = internal.R0_1 * internal.gamma_1;
    internal.beta_2 = internal.R0_2 * internal.gamma_2;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const N = state[0];
    const S = state[1];
    const I_1 = state[2];
    const I_2 = state[3];
    const R_1 = state[4];
    const R_2 = state[5];
    const I_1p = state[6];
    const I_2p = state[7];
    const R_p = state[8];
    dstatedt[0] = 0;
    dstatedt[8] = 0 - 1 * internal.mu * R_p + 1 * internal.gamma_1 * I_1p + 1 * internal.gamma_2 * I_2p - 1 * internal.sigma * R_p;
    dstatedt[2] = 0 - 1 * internal.mu * I_1 + 1 * internal.beta_1 * ((I_1 + I_1p) / N) * S - 1 * internal.gamma_1 * I_1;
    dstatedt[6] = 0 - 1 * internal.mu * I_1p + 1 * (1 - internal.psi) * internal.beta_1 * (I_1 + I_1p) / N * R_2 - 1 * internal.gamma_1 * I_1p;
    dstatedt[3] = 0 - 1 * internal.mu * I_2 + 1 * internal.beta_2 * ((I_2 + I_2p) / N) * S - 1 * internal.gamma_2 * I_2;
    dstatedt[7] = 0 - 1 * internal.mu * I_2p + 1 * (1 - internal.psi) * internal.beta_2 * (I_2 + I_2p) / N * R_1 - 1 * internal.gamma_2 * I_2p;
    dstatedt[4] = 0 - 1 * internal.mu * R_1 - 1 * (1 - internal.psi) * internal.beta_2 * (I_2 + I_2p) / N * R_1 + 1 * internal.gamma_1 * I_1 - 1 * internal.sigma * R_1;
    dstatedt[5] = 0 - 1 * internal.mu * R_2 - 1 * (1 - internal.psi) * internal.beta_1 * (I_1 + I_1p) / N * R_2 + 1 * internal.gamma_2 * I_2 - 1 * internal.sigma * R_2;
    dstatedt[1] = 0 + 1 * internal.mu * N - 1 * internal.mu * S - 1 * internal.beta_1 * ((I_1 + I_1p) / N) * S - 1 * internal.beta_2 * ((I_2 + I_2p) / N) * S + 1 * internal.sigma * R_1 + 1 * internal.sigma * R_2 + 1 * internal.sigma * R_p;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "N", "S", "I_1", "I_2", "R_1", "R_2", "I_1p", "I_2p", "R_p"];
    this.metadata.internalOrder = {beta_1: null, beta_2: null, env: null, gamma_1: null, gamma_2: null, I_1_init: null, I_1p_init: null, I_2_init: null, I_2p_init: null, initial_I_1: null, initial_I_1p: null, initial_I_2: null, initial_I_2p: null, initial_N: null, initial_R_1: null, initial_R_2: null, initial_R_p: null, initial_S: null, l_e: null, mu: null, N_init: null, psi: null, R_1_init: null, R_2_init: null, R_p_init: null, R0_1: null, R0_2: null, S_init: null, sigma: null, tImm: null, tInf_1: null, tInf_2: null};
    this.metadata.variableOrder = {N: null, S: null, I_1: null, I_2: null, R_1: null, R_2: null, I_1p: null, I_2p: null, R_p: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
