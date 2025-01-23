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
    var state = Array(7).fill(0);
    state[0] = internal.initial_T;
    state[1] = internal.initial_N;
    state[2] = internal.initial_L;
    state[3] = internal.initial_R;
    state[4] = internal.initial_C;
    state[5] = internal.initial_I;
    state[6] = internal.initial_S;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "alpha_beta", "b", "beta", "c", "C_0", "C_init", "d", "delta_R", "delta_T", "e_f", "f", "g_I", "g_N", "g_R", "H_R", "I_init", "jxj", "kappa", "kxk", "L_init", "lxl", "m", "Metabolite_0", "Metabolite_2", "ModelValue_1", "ModelValue_2", "ModelValue_3", "mu_I", "n", "N_init", "p", "p_I", "p_N", "p_R", "phi", "q", "r_1", "r_2", "R_init", "s", "S_init", "T_init", "u", "vs", "w", "w_u", "z", "zeta"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.20649999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_beta", internal, 2140000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 2.1450000000000001e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 0.0063, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c", internal, 8.68e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_0", internal, 2140000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d", internal, 1.7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_R", internal, 50.020000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_T", internal, 1.5900000000000001e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e_f", internal, 0.1168, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f", internal, 0.012500000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_I", internal, 2503.5999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_N", internal, 250360, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_R", internal, 11.026999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H_R", internal, 0.22700000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "jxj", internal, 0.1245, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kappa", internal, 2503.5999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 20190000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lxl", internal, 1.7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m", internal, 0.0089999999999999993, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Metabolite_0", internal, 4662000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Metabolite_2", internal, 526800, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_1", internal, 1.7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_2", internal, 1.7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_3", internal, 0.035000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_I", internal, 11.742699999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 0.27700000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p", internal, 6.682e-14, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_I", internal, 1.111, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_N", internal, 0.066799999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_R", internal, 0.035979999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "phi", internal, 3.594e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q", internal, 3.4220000000000002e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_1", internal, 6.682e-12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_2", internal, 1.0000000000000001e-15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s", internal, 0.035000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u", internal, 0.038510000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vs", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "w", internal, 0.05314, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "w_u", internal, 0.012200000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "z", internal, 2.3085000000000002e-13, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "zeta", internal, 2503.5999999999999, -Infinity, Infinity, false);
    internal.D = internal.ModelValue_1 * (Math.pow((internal.Metabolite_2 / internal.Metabolite_0), (internal.ModelValue_2)) / (internal.ModelValue_3 + Math.pow((internal.Metabolite_2 / internal.Metabolite_0), (internal.ModelValue_2))));
    internal.initial_C = internal.C_init;
    internal.initial_I = internal.I_init;
    internal.initial_L = internal.L_init;
    internal.initial_N = internal.N_init;
    internal.initial_R = internal.R_init;
    internal.initial_S = internal.S_init;
    internal.initial_T = internal.T_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const T = state[0];
    const N = state[1];
    const L = state[2];
    const R = state[3];
    const C = state[4];
    const I = state[5];
    const S = state[6];
    dstatedt[4] = 0 + 1 * internal.compartment * (internal.beta * (internal.alpha_beta - C));
    dstatedt[5] = 0 + 1 * internal.compartment * (internal.phi * C + internal.w * L * I / (internal.zeta + I)) - 1 * internal.compartment * (internal.mu_I * I);
    dstatedt[2] = 0 + 1 * internal.compartment * ((internal.r_1 * N + internal.r_2 * C) * T + internal.p_I * L * I / (internal.g_I + I) + internal.jxj * (T / (internal.kxk + T)) * L) - 1 * internal.compartment * (internal.m * L + internal.q * L * T + internal.z * L * L * R * I / (internal.kappa + I));
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.f * (internal.e_f * C - N) + internal.p_N * N * I / (internal.g_N + I)) - 1 * internal.compartment * (internal.p * N * T);
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.u * (internal.w_u * C - R) + internal.p_R * R * I / (internal.g_R + I)) - 1 * internal.compartment * (internal.H_R * (1 - Math.exp(- internal.delta_R * S)) * R);
    dstatedt[6] = 0 + 1 * internal.compartment * (internal.vs) - 1 * internal.compartment * (- internal.n * S);
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.a * T * (1 - internal.b * T)) - 1 * internal.compartment * (internal.c * Math.exp(- internal.delta_T * R) * N * T + internal.D * T);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "T", "N", "L", "R", "C", "I", "S"];
    this.metadata.internalOrder = {a: null, alpha_beta: null, b: null, beta: null, c: null, C_0: null, C_init: null, compartment: null, d: null, D: null, delta_R: null, delta_T: null, e_f: null, f: null, g_I: null, g_N: null, g_R: null, H_R: null, I_init: null, initial_C: null, initial_I: null, initial_L: null, initial_N: null, initial_R: null, initial_S: null, initial_T: null, jxj: null, kappa: null, kxk: null, L_init: null, lxl: null, m: null, Metabolite_0: null, Metabolite_2: null, ModelValue_1: null, ModelValue_2: null, ModelValue_3: null, mu_I: null, n: null, N_init: null, p: null, p_I: null, p_N: null, p_R: null, phi: null, q: null, r_1: null, r_2: null, R_init: null, s: null, S_init: null, T_init: null, u: null, vs: null, w: null, w_u: null, z: null, zeta: null};
    this.metadata.variableOrder = {T: null, N: null, L: null, R: null, C: null, I: null, S: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
