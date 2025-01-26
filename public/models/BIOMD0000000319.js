export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell = 1;
    internal.d = 0;
    internal.ks = 1.99;
    internal.L1 = 500000000;
    internal.L2 = 100;
    internal.sigma1 = 10;
    internal.sigma2 = 10;
    internal.v_Km1 = 0.45000000000000001;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_alpha;
    state[1] = internal.initial_beta;
    state[2] = internal.initial_gamma;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha_init", "beta_init", "gamma_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_alpha = internal.alpha_init;
    internal.initial_beta = internal.beta_init;
    internal.initial_gamma = internal.gamma_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const alpha = state[0];
    const beta = state[1];
    const gamma = state[2];
    dstatedt[0] = 0 + 1 * internal.v_Km1 - 1 * internal.sigma1 * alpha * (1 + alpha) * Math.pow((1 + beta), (2)) / (internal.L1 + Math.pow((1 + alpha), (2)) * Math.pow((1 + beta), (2)));
    dstatedt[1] = 0 + 50 * internal.sigma1 * alpha * (1 + alpha) * Math.pow((1 + beta), (2)) / (internal.L1 + Math.pow((1 + alpha), (2)) * Math.pow((1 + beta), (2))) - 1 * internal.sigma2 * beta * (1 + internal.d * beta) * Math.pow((1 + gamma), (2)) / (internal.L2 + Math.pow((1 + internal.d * beta), (2)) * Math.pow((1 + gamma), (2)));
    dstatedt[2] = 0 + 0.02 * internal.sigma2 * beta * (1 + internal.d * beta) * Math.pow((1 + gamma), (2)) / (internal.L2 + Math.pow((1 + internal.d * beta), (2)) * Math.pow((1 + gamma), (2))) - 1 * internal.ks * gamma;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "alpha", "beta", "gamma"];
    this.metadata.internalOrder = {alpha_init: null, beta_init: null, cell: null, d: null, gamma_init: null, initial_alpha: null, initial_beta: null, initial_gamma: null, ks: null, L1: null, L2: null, sigma1: null, sigma2: null, v_Km1: null};
    this.metadata.variableOrder = {alpha: null, beta: null, gamma: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
