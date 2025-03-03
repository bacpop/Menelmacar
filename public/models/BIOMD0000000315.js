export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.empty = 0;
    internal.sample = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(19).fill(0);
    state[0] = internal.initial_T1;
    state[1] = internal.initial_alpha;
    state[2] = internal.initial_alpha_T1;
    state[3] = internal.initial_alpha_T1_alpha;
    state[4] = internal.initial_T1_alpha;
    state[5] = internal.initial_alpha_alpha_T1;
    state[6] = internal.initial_T2;
    state[7] = internal.initial_alpha_T2;
    state[8] = internal.initial_alpha_T2_beta;
    state[9] = internal.initial_beta;
    state[10] = internal.initial_T2_beta;
    state[11] = internal.initial_alpha_beta_T2;
    state[12] = internal.initial_T3;
    state[13] = internal.initial_beta_T3;
    state[14] = internal.initial_beta_T3_Inh;
    state[15] = internal.initial_Inh;
    state[16] = internal.initial_T3_Inh;
    state[17] = internal.initial_beta_Inh_T3;
    state[18] = internal.initial_Inh_T1;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha_alpha_T1_init", "alpha_beta_T2_init", "alpha_init", "alpha_T1_alpha_init", "alpha_T1_init", "alpha_T2_beta_init", "alpha_T2_init", "beta_Inh_T3_init", "beta_init", "beta_T3_Inh_init", "beta_T3_init", "Inh_init", "Inh_T1_init", "k0d", "k0r", "k10d", "k10r", "k11d", "k12d", "k13d", "k14d", "k14r", "k15d", "k15r", "k16d", "k16r", "k17d", "k17r", "k18d", "k19d", "k1d", "k1r", "k20d", "k21d", "k21r", "k22d", "k22r", "k23d", "k23r", "k24d", "k25d", "k26d", "k2d", "k2r", "k3d", "k3r", "k4d", "k5d", "k6d", "k7d", "k7r", "k8d", "k8r", "k9d", "k9r", "T1_alpha_init", "T1_init", "T2_beta_init", "T2_init", "T3_Inh_init", "T3_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha_alpha_T1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_beta_T2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_T1_alpha_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_T1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_T2_beta_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_T2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_Inh_T3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_T3_Inh_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_T3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Inh_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Inh_T1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k0d", internal, 0.029399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k0r", internal, 3.4345794392500002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10d", internal, 3.4345794392500002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10r", internal, 0.029399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11d", internal, 11.8408, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k12d", internal, 9.2239831999999993, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k13d", internal, 2.6018599999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k14d", internal, 0.017100000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k14r", internal, 0.61071428571399999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k15d", internal, 0.0018629683295400001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k15r", internal, 0.027, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k16d", internal, 0.027, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k16r", internal, 0.0018629683295400001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k17d", internal, 0.017100000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k17r", internal, 0.61071428571399999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k18d", internal, 17.024000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k19d", internal, 5.5668480000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1d", internal, 3.4345794392500002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1r", internal, 0.029399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k20d", internal, 3.2063999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k21d", internal, 0.027, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k21r", internal, 0.0060810810810799998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k22d", internal, 0.021545999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k22r", internal, 4.1539135135099999e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k23d", internal, 4.1539135135099999e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k23r", internal, 0.021545999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k24d", internal, 0.41099999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k25d", internal, 0.48580200000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k26d", internal, 1.7262, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2d", internal, 3.4345794392500002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2r", internal, 0.029399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3d", internal, 3.4345794392500002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3r", internal, 0.029399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4d", internal, 15.199999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5d", internal, 11.8408, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6d", internal, 3.3399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7d", internal, 0.029399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7r", internal, 3.4345794392500002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8d", internal, 0.61071428571399999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8r", internal, 0.017100000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9d", internal, 0.61071428571399999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9r", internal, 0.017100000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T1_alpha_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T1_init", internal, 38.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T2_beta_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T2_init", internal, 3.8900000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T3_Inh_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T3_init", internal, 38.5, -Infinity, Infinity, false);
    internal.initial_alpha = internal.alpha_init;
    internal.initial_alpha_alpha_T1 = internal.alpha_alpha_T1_init;
    internal.initial_alpha_beta_T2 = internal.alpha_beta_T2_init;
    internal.initial_alpha_T1 = internal.alpha_T1_init;
    internal.initial_alpha_T1_alpha = internal.alpha_T1_alpha_init;
    internal.initial_alpha_T2 = internal.alpha_T2_init;
    internal.initial_alpha_T2_beta = internal.alpha_T2_beta_init;
    internal.initial_beta = internal.beta_init;
    internal.initial_beta_Inh_T3 = internal.beta_Inh_T3_init;
    internal.initial_beta_T3 = internal.beta_T3_init;
    internal.initial_beta_T3_Inh = internal.beta_T3_Inh_init;
    internal.initial_Inh = internal.Inh_init;
    internal.initial_Inh_T1 = internal.Inh_T1_init;
    internal.initial_T1 = internal.T1_init;
    internal.initial_T1_alpha = internal.T1_alpha_init;
    internal.initial_T2 = internal.T2_init;
    internal.initial_T2_beta = internal.T2_beta_init;
    internal.initial_T3 = internal.T3_init;
    internal.initial_T3_Inh = internal.T3_Inh_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const T1 = state[0];
    const alpha = state[1];
    const alpha_T1 = state[2];
    const alpha_T1_alpha = state[3];
    const T1_alpha = state[4];
    const alpha_alpha_T1 = state[5];
    const T2 = state[6];
    const alpha_T2 = state[7];
    const alpha_T2_beta = state[8];
    const beta = state[9];
    const T2_beta = state[10];
    const alpha_beta_T2 = state[11];
    const T3 = state[12];
    const beta_T3 = state[13];
    const beta_T3_Inh = state[14];
    const Inh = state[15];
    const T3_Inh = state[16];
    const beta_Inh_T3 = state[17];
    const Inh_T1 = state[18];
    dstatedt[1] = 0 - 1 * internal.sample * (internal.k0d * T1 * alpha - internal.k0r * alpha_T1) + 1 * internal.sample * (internal.k1d * alpha_T1_alpha - internal.k1r * alpha * alpha_T1) + 1 * internal.sample * (internal.k2d * T1_alpha - internal.k2r * T1 * alpha) + 1 * internal.sample * (internal.k3d * alpha_T1_alpha - internal.k3r * alpha * T1_alpha) + 1 * internal.sample * internal.k5d * alpha_T1_alpha - 1 * internal.sample * (internal.k7d * alpha * T2 - internal.k7r * alpha_T2) + 1 * internal.sample * (internal.k10d * alpha_T2_beta - internal.k10r * alpha * T2_beta) + 1 * internal.sample * (internal.k22d * T1_alpha * Inh - internal.k22r * alpha * Inh_T1) - 1 * internal.sample * (internal.k23d * alpha * Inh_T1 - internal.k23r * alpha_T1 * Inh) - 1 * internal.sample * internal.k24d * alpha;
    dstatedt[5] = 0 + 1 * internal.sample * internal.k4d * alpha_T1 + 1 * internal.sample * internal.k5d * alpha_T1_alpha - 1 * internal.sample * internal.k6d * alpha_alpha_T1;
    dstatedt[11] = 0 + 1 * internal.sample * internal.k11d * alpha_T2 + 1 * internal.sample * internal.k12d * alpha_T2_beta - 1 * internal.sample * internal.k13d * alpha_beta_T2;
    dstatedt[2] = 0 + 1 * internal.sample * (internal.k0d * T1 * alpha - internal.k0r * alpha_T1) + 1 * internal.sample * (internal.k1d * alpha_T1_alpha - internal.k1r * alpha * alpha_T1) - 1 * internal.sample * internal.k4d * alpha_T1 + 1 * internal.sample * (internal.k23d * alpha * Inh_T1 - internal.k23r * alpha_T1 * Inh);
    dstatedt[3] = 0 - 1 * internal.sample * (internal.k1d * alpha_T1_alpha - internal.k1r * alpha * alpha_T1) - 1 * internal.sample * (internal.k3d * alpha_T1_alpha - internal.k3r * alpha * T1_alpha) - 1 * internal.sample * internal.k5d * alpha_T1_alpha + 1 * internal.sample * internal.k6d * alpha_alpha_T1;
    dstatedt[7] = 0 + 1 * internal.sample * (internal.k7d * alpha * T2 - internal.k7r * alpha_T2) + 1 * internal.sample * (internal.k8d * alpha_T2_beta - internal.k8r * alpha_T2 * beta) - 1 * internal.sample * internal.k11d * alpha_T2;
    dstatedt[8] = 0 - 1 * internal.sample * (internal.k8d * alpha_T2_beta - internal.k8r * alpha_T2 * beta) - 1 * internal.sample * (internal.k10d * alpha_T2_beta - internal.k10r * alpha * T2_beta) - 1 * internal.sample * internal.k12d * alpha_T2_beta + 1 * internal.sample * internal.k13d * alpha_beta_T2;
    dstatedt[9] = 0 + 1 * internal.sample * (internal.k8d * alpha_T2_beta - internal.k8r * alpha_T2 * beta) + 1 * internal.sample * (internal.k9d * T2_beta - internal.k9r * T2 * beta) + 1 * internal.sample * internal.k12d * alpha_T2_beta - 1 * internal.sample * (internal.k14d * beta * T3 - internal.k14r * beta_T3) - 1 * internal.sample * (internal.k17d * beta * T3_Inh - internal.k17r * beta_T3_Inh) - 1 * internal.sample * internal.k25d * beta;
    dstatedt[17] = 0 + 1 * internal.sample * internal.k18d * beta_T3 + 1 * internal.sample * internal.k19d * beta_T3_Inh - 1 * internal.sample * internal.k20d * beta_Inh_T3;
    dstatedt[13] = 0 + 1 * internal.sample * (internal.k14d * beta * T3 - internal.k14r * beta_T3) + 1 * internal.sample * (internal.k15d * beta_T3_Inh - internal.k15r * beta_T3 * Inh) - 1 * internal.sample * internal.k18d * beta_T3;
    dstatedt[14] = 0 - 1 * internal.sample * (internal.k15d * beta_T3_Inh - internal.k15r * beta_T3 * Inh) + 1 * internal.sample * (internal.k17d * beta * T3_Inh - internal.k17r * beta_T3_Inh) - 1 * internal.sample * internal.k19d * beta_T3_Inh + 1 * internal.sample * internal.k20d * beta_Inh_T3;
    dstatedt[15] = 0 + 1 * internal.sample * (internal.k15d * beta_T3_Inh - internal.k15r * beta_T3 * Inh) - 1 * internal.sample * (internal.k16d * T3 * Inh - internal.k16r * T3_Inh) + 1 * internal.sample * internal.k19d * beta_T3_Inh - 1 * internal.sample * (internal.k21d * T1 * Inh - internal.k21r * Inh_T1) - 1 * internal.sample * (internal.k22d * T1_alpha * Inh - internal.k22r * alpha * Inh_T1) + 1 * internal.sample * (internal.k23d * alpha * Inh_T1 - internal.k23r * alpha_T1 * Inh) - 1 * internal.sample * internal.k26d * Inh;
    dstatedt[18] = 0 + 1 * internal.sample * (internal.k21d * T1 * Inh - internal.k21r * Inh_T1) + 1 * internal.sample * (internal.k22d * T1_alpha * Inh - internal.k22r * alpha * Inh_T1) - 1 * internal.sample * (internal.k23d * alpha * Inh_T1 - internal.k23r * alpha_T1 * Inh);
    dstatedt[0] = 0 - 1 * internal.sample * (internal.k0d * T1 * alpha - internal.k0r * alpha_T1) + 1 * internal.sample * (internal.k2d * T1_alpha - internal.k2r * T1 * alpha) - 1 * internal.sample * (internal.k21d * T1 * Inh - internal.k21r * Inh_T1);
    dstatedt[4] = 0 - 1 * internal.sample * (internal.k2d * T1_alpha - internal.k2r * T1 * alpha) + 1 * internal.sample * (internal.k3d * alpha_T1_alpha - internal.k3r * alpha * T1_alpha) - 1 * internal.sample * (internal.k22d * T1_alpha * Inh - internal.k22r * alpha * Inh_T1);
    dstatedt[6] = 0 - 1 * internal.sample * (internal.k7d * alpha * T2 - internal.k7r * alpha_T2) + 1 * internal.sample * (internal.k9d * T2_beta - internal.k9r * T2 * beta);
    dstatedt[10] = 0 - 1 * internal.sample * (internal.k9d * T2_beta - internal.k9r * T2 * beta) + 1 * internal.sample * (internal.k10d * alpha_T2_beta - internal.k10r * alpha * T2_beta);
    dstatedt[12] = 0 - 1 * internal.sample * (internal.k14d * beta * T3 - internal.k14r * beta_T3) - 1 * internal.sample * (internal.k16d * T3 * Inh - internal.k16r * T3_Inh);
    dstatedt[16] = 0 + 1 * internal.sample * (internal.k16d * T3 * Inh - internal.k16r * T3_Inh) - 1 * internal.sample * (internal.k17d * beta * T3_Inh - internal.k17r * beta_T3_Inh);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "T1", "alpha", "alpha_T1", "alpha_T1_alpha", "T1_alpha", "alpha_alpha_T1", "T2", "alpha_T2", "alpha_T2_beta", "beta", "T2_beta", "alpha_beta_T2", "T3", "beta_T3", "beta_T3_Inh", "Inh", "T3_Inh", "beta_Inh_T3", "Inh_T1"];
    this.metadata.internalOrder = {alpha_alpha_T1_init: null, alpha_beta_T2_init: null, alpha_init: null, alpha_T1_alpha_init: null, alpha_T1_init: null, alpha_T2_beta_init: null, alpha_T2_init: null, beta_Inh_T3_init: null, beta_init: null, beta_T3_Inh_init: null, beta_T3_init: null, empty: null, Inh_init: null, Inh_T1_init: null, initial_alpha: null, initial_alpha_alpha_T1: null, initial_alpha_beta_T2: null, initial_alpha_T1: null, initial_alpha_T1_alpha: null, initial_alpha_T2: null, initial_alpha_T2_beta: null, initial_beta: null, initial_beta_Inh_T3: null, initial_beta_T3: null, initial_beta_T3_Inh: null, initial_Inh: null, initial_Inh_T1: null, initial_T1: null, initial_T1_alpha: null, initial_T2: null, initial_T2_beta: null, initial_T3: null, initial_T3_Inh: null, k0d: null, k0r: null, k10d: null, k10r: null, k11d: null, k12d: null, k13d: null, k14d: null, k14r: null, k15d: null, k15r: null, k16d: null, k16r: null, k17d: null, k17r: null, k18d: null, k19d: null, k1d: null, k1r: null, k20d: null, k21d: null, k21r: null, k22d: null, k22r: null, k23d: null, k23r: null, k24d: null, k25d: null, k26d: null, k2d: null, k2r: null, k3d: null, k3r: null, k4d: null, k5d: null, k6d: null, k7d: null, k7r: null, k8d: null, k8r: null, k9d: null, k9r: null, sample: null, T1_alpha_init: null, T1_init: null, T2_beta_init: null, T2_init: null, T3_Inh_init: null, T3_init: null};
    this.metadata.variableOrder = {T1: null, alpha: null, alpha_T1: null, alpha_T1_alpha: null, T1_alpha: null, alpha_alpha_T1: null, T2: null, alpha_T2: null, alpha_T2_beta: null, beta: null, T2_beta: null, alpha_beta_T2: null, T3: null, beta_T3: null, beta_T3_Inh: null, Inh: null, T3_Inh: null, beta_Inh_T3: null, Inh_T1: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
