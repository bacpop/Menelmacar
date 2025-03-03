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
    var state = Array(5).fill(0);
    state[0] = internal.initial_G;
    state[1] = internal.initial_M;
    state[2] = internal.initial_C_T;
    state[3] = internal.initial_T_beta;
    state[4] = internal.initial_I_gamma;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a1", "a2", "alpha1", "alpha2", "alpha3", "alpha4", "b1", "b2", "C_T_init", "e1", "e2", "G_init", "G_max", "I_gamma_init", "k1", "k2", "k3", "k4", "k5", "M_init", "M_max", "m1", "mu1", "mu2", "mu3", "r1", "r2", "s1", "T_beta_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a1", internal, 0.1163, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a2", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha1", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha2", internal, 0.12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha3", internal, 0.019400000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha4", internal, 0.1694, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b1", internal, 5.75e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b2", internal, 0.000102, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_T_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e1", internal, 10000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e2", internal, 10000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G_init", internal, 100000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G_max", internal, 882650, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_gamma_init", internal, 9000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 27000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 27000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 334450, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 10500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 2000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_init", internal, 100000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_max", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m1", internal, 1000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu1", internal, 0.0070000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu2", internal, 6.9299999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu3", internal, 0.10199999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r1", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r2", internal, 0.33069999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s1", internal, 63305, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_beta_init", internal, 5000, -Infinity, Infinity, false);
    internal.initial_C_T = internal.C_T_init;
    internal.initial_G = internal.G_init;
    internal.initial_I_gamma = internal.I_gamma_init;
    internal.initial_M = internal.M_init;
    internal.initial_T_beta = internal.T_beta_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const G = state[0];
    const M = state[1];
    const C_T = state[2];
    const T_beta = state[3];
    const I_gamma = state[4];
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.a2 * G / (internal.k5 + T_beta)) - 1 * internal.compartment * (internal.mu1 * C_T) - 1 * internal.compartment * (internal.alpha4 * (G / (G + internal.k3)) * C_T);
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.r1 * G * (1 - G / internal.G_max)) - 1 * internal.compartment * (1 / (T_beta + internal.e1) * (internal.alpha1 * M + internal.alpha2 * C_T) * (G / (G + internal.k1)));
    dstatedt[4] = 0 + 1 * internal.compartment * (internal.b2 * C_T) - 1 * internal.compartment * (internal.mu3 * I_gamma);
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.r2 * M * (1 - M / internal.M_max)) + 1 * internal.compartment * (internal.a1 * (I_gamma / (internal.k4 + I_gamma)) * (1 / (T_beta + internal.e2))) - 1 * internal.compartment * (internal.alpha3 * (G / (G + internal.k2)) * M);
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.s1) + 1 * internal.compartment * (internal.b1 * G) - 1 * internal.compartment * (internal.mu2 * T_beta);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "G", "M", "C_T", "T_beta", "I_gamma"];
    this.metadata.internalOrder = {a1: null, a2: null, alpha1: null, alpha2: null, alpha3: null, alpha4: null, b1: null, b2: null, C_T_init: null, compartment: null, e1: null, e2: null, G_init: null, G_max: null, I_gamma_init: null, initial_C_T: null, initial_G: null, initial_I_gamma: null, initial_M: null, initial_T_beta: null, k1: null, k2: null, k3: null, k4: null, k5: null, M_init: null, M_max: null, m1: null, mu1: null, mu2: null, mu3: null, r1: null, r2: null, s1: null, T_beta_init: null};
    this.metadata.variableOrder = {G: null, M: null, C_T: null, T_beta: null, I_gamma: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
