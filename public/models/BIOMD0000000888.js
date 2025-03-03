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
    var state = Array(4).fill(0);
    state[0] = internal.initial_T;
    state[1] = internal.initial_N;
    state[2] = internal.initial_D;
    state[3] = internal.initial_L;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "b", "c_1", "c_2", "d_1", "d_2", "d_3", "D_init", "e", "f_1", "f_2", "g", "g_1", "h", "h_1", "ixi", "jxj", "kxk", "L_init", "N_init", "r_1", "s_1", "s_2", "T_init", "u"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.43099999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 2.1699999999999999e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c_1", internal, 3.4999999999999999e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c_2", internal, 9.9999999999999995e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_1", internal, 9.9999999999999995e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_2", internal, 3.9999999999999998e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_3", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "D_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e", internal, 0.041200000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f_1", internal, 1e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f_2", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g", internal, 0.024, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_1", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h", internal, 3.4200000000000001e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h_1", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ixi", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "jxj", internal, 9.9999999999999995e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 9.9999999999999995e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_1", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s_1", internal, 13000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s_2", internal, 480, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_init", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u", internal, 1.7999999999999999e-08, -Infinity, Infinity, false);
    internal.initial_D = internal.D_init;
    internal.initial_L = internal.L_init;
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
    const N = state[1];
    const D = state[2];
    const L = state[3];
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.s_2) - 1 * internal.compartment * ((internal.f_1 * L + internal.d_2 * N - internal.d_3 * T) * D - internal.g * D);
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.f_2 * D * T + internal.r_1 * N * T) - 1 * internal.compartment * (internal.h * L * T + internal.u * N * L * L + internal.ixi * L);
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.s_1 + internal.g_1 * N * T * T / (internal.h_1 + T * T)) - 1 * internal.compartment * ((internal.c_2 * T + internal.d_1 * D) * N + internal.e * N);
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.a * T * (1 - internal.b * T)) - 1 * internal.compartment * ((internal.c_1 * N + internal.jxj * D + internal.kxk * L) * T);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "T", "N", "D", "L"];
    this.metadata.internalOrder = {a: null, b: null, c_1: null, c_2: null, compartment: null, d_1: null, d_2: null, d_3: null, D_init: null, e: null, f_1: null, f_2: null, g: null, g_1: null, h: null, h_1: null, initial_D: null, initial_L: null, initial_N: null, initial_T: null, ixi: null, jxj: null, kxk: null, L_init: null, N_init: null, r_1: null, s_1: null, s_2: null, T_init: null, u: null};
    this.metadata.variableOrder = {T: null, N: null, D: null, L: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
