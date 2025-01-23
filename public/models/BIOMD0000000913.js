export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.V_I = 0;
    internal.V_L = 0;
    internal.V_M = 0;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(6).fill(0);
    state[0] = internal.initial_T;
    state[1] = internal.initial_L;
    state[2] = internal.initial_N;
    state[3] = internal.initial_C;
    state[4] = internal.initial_I;
    state[5] = internal.initial_M;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "alpha_1", "alpha_2", "b", "beta", "C_init", "c1", "d", "eta", "f", "g", "g_I", "g_T", "gamma", "h", "I_init", "K_C", "K_L", "K_N", "K_T", "L_init", "lxl", "m", "M_init", "ModelValue_0", "ModelValue_1", "ModelValue_2", "mu_I", "N_init", "p", "p_I", "p_T", "q", "r2", "s", "s_1", "T_init", "u", "w"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_1", internal, 13000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_2", internal, 500000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 1.02e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 0.012, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c1", internal, 3.2300000000000002e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "eta", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f", internal, 0.041200000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g", internal, 0.025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_I", internal, 20000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_T", internal, 100000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h", internal, 600, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_C", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_L", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_N", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_T", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lxl", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_0", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_1", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_2", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_I", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p", internal, 9.9999999999999995e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_I", internal, 0.125, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_T", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q", internal, 3.4200000000000001e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r2", internal, 3e-11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s_1", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "w", internal, 0.00020000000000000001, -Infinity, Infinity, false);
    internal.initial_C = internal.C_init;
    internal.initial_I = internal.I_init;
    internal.initial_L = internal.L_init;
    internal.initial_M = internal.M_init;
    internal.initial_N = internal.N_init;
    internal.initial_T = internal.T_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const T = state[0];
    const L = state[1];
    const N = state[2];
    const C = state[3];
    const I = state[4];
    const M = state[5];
    var D = internal.ModelValue_0 * (Math.pow((L / T), (internal.ModelValue_2)) / (internal.ModelValue_1 + Math.pow((L / T), (internal.ModelValue_2))));
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.alpha_2) - 1 * internal.compartment * (internal.beta * C + internal.K_C * M * C);
    dstatedt[4] = 0 + 1 * internal.compartment * (internal.p_T * T / (internal.g_T + T) * L + internal.w * L * I + internal.V_I) - 1 * internal.compartment * (internal.mu_I * I);
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.r2 * C * T + internal.p_I * L * I / (internal.g_I + I) + internal.V_L) - 1 * internal.compartment * (internal.m * L + internal.q * L * T + internal.u * L * L + internal.K_L * M * L);
    dstatedt[5] = 0 + 1 * internal.compartment * (internal.V_M) - 1 * internal.compartment * (internal.gamma * M);
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.alpha_1 + internal.g * (Math.pow((T), (internal.eta)) / (internal.h + Math.pow((T), (internal.eta)))) * N) - 1 * internal.compartment * (internal.f * N + internal.p * N * T + internal.K_N * M * N);
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.a * T * (1 - internal.b * T)) - 1 * internal.compartment * (internal.c1 * N * T + D * T + internal.K_T * M * T);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "T", "L", "N", "C", "I", "M"];
    this.metadata.internalOrder = {a: null, alpha_1: null, alpha_2: null, b: null, beta: null, C_init: null, c1: null, compartment: null, d: null, eta: null, f: null, g: null, g_I: null, g_T: null, gamma: null, h: null, I_init: null, initial_C: null, initial_I: null, initial_L: null, initial_M: null, initial_N: null, initial_T: null, K_C: null, K_L: null, K_N: null, K_T: null, L_init: null, lxl: null, m: null, M_init: null, ModelValue_0: null, ModelValue_1: null, ModelValue_2: null, mu_I: null, N_init: null, p: null, p_I: null, p_T: null, q: null, r2: null, s: null, s_1: null, T_init: null, u: null, V_I: null, V_L: null, V_M: null, w: null};
    this.metadata.variableOrder = {T: null, L: null, N: null, C: null, I: null, M: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
