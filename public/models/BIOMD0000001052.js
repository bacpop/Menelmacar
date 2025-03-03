export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Tissue = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_I;
    state[1] = internal.initial_N;
    state[2] = internal.initial_T;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha1", "alpha2", "alpha3", "beta1", "beta2", "delta", "gamma", "I_init", "m", "m1", "mu", "mu1", "n", "N_init", "r", "rho", "rho1", "sigma", "T_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha1", internal, 0.44259999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha2", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha3", internal, 0.1469, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta1", internal, 2.9900000000000002e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta2", internal, 1.1890000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta", internal, 0.56999999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 0.93140000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_init", internal, 0.999999999999994, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m", internal, 0.81299999999999994, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m1", internal, 0.86199999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu", internal, 0.81299999999999994, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu1", internal, 0.3634, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 0.13789999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N_init", internal, 0.99999999999999301, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 0.43120000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho", internal, 0.27100000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho1", internal, 0.78290000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigma", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_init", internal, 1.22, -Infinity, Infinity, false);
    internal.initial_I = internal.I_init;
    internal.initial_N = internal.N_init;
    internal.initial_T = internal.T_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const I = state[0];
    const N = state[1];
    const T = state[2];
    dstatedt[0] = 0 + 1 * internal.Tissue * (internal.sigma) - 1 * internal.Tissue * (internal.delta * I) + 1 * internal.Tissue * (internal.rho * N * I / (N + internal.m)) + 1 * internal.Tissue * (internal.rho1 * T * I / (internal.m1 + T)) - 1 * internal.Tissue * (internal.mu * N * I) - 1 * internal.Tissue * (internal.mu1 * T * I);
    dstatedt[1] = 0 + 1 * internal.Tissue * (internal.r * N) - 1 * internal.Tissue * (internal.r * Math.pow((N), (2)) * internal.beta1) - 1 * internal.Tissue * (internal.r * N * I) - 1 * internal.Tissue * (internal.gamma * N * T);
    dstatedt[2] = 0 + 1 * internal.Tissue * (internal.alpha1 * T) - 1 * internal.Tissue * (internal.alpha1 * internal.alpha2 * Math.pow((T), (2))) + 1 * internal.Tissue * (internal.beta2 * N * T) - 1 * internal.Tissue * (internal.alpha3 * T * I);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "I", "N", "T"];
    this.metadata.internalOrder = {alpha1: null, alpha2: null, alpha3: null, beta1: null, beta2: null, delta: null, gamma: null, I_init: null, initial_I: null, initial_N: null, initial_T: null, m: null, m1: null, mu: null, mu1: null, n: null, N_init: null, r: null, rho: null, rho1: null, sigma: null, T_init: null, Tissue: null};
    this.metadata.variableOrder = {I: null, N: null, T: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
