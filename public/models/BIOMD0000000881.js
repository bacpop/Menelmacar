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
    state[0] = internal.initial_T_1;
    state[1] = internal.initial_T_2;
    state[2] = internal.initial_G;
    state[3] = internal.initial_I;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a_1", "a_2", "a_G", "a_I", "b_1", "b_2", "b_G", "b_I", "c_1", "c_2", "c_G", "d_1", "d_2", "d_G", "e_G", "f_G", "G_init", "I_init", "L", "mu_G", "mu_I", "mu_T", "p_G", "p_I", "q_G", "q_I", "r_T", "T_1_init", "T_2_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a_1", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_2", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_G", internal, 0.58999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_I", internal, 0.12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_1", internal, 0.34999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_2", internal, 0.17999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_G", internal, 0.13, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_I", internal, 0.025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c_1", internal, 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c_2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c_G", internal, 12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_1", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_2", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_G", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e_G", internal, 5.4000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f_G", internal, 0.22, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_G", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_I", internal, 0.35999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_T", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_G", internal, 0.016, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_I", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q_G", internal, 9.9999999999999995e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q_I", internal, 9.9999999999999995e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_T", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_1_init", internal, 500000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_2_init", internal, 1000000, -Infinity, Infinity, false);
    internal.initial_G = internal.G_init;
    internal.initial_I = internal.I_init;
    internal.initial_T_1 = internal.T_1_init;
    internal.initial_T_2 = internal.T_2_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const T_1 = state[0];
    const T_2 = state[1];
    const G = state[2];
    const I = state[3];
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.p_G * (1 + internal.c_G * internal.L / (internal.L + internal.d_G))) + 1 * internal.compartment * (internal.q_G * T_1 * (internal.a_G + (1 - internal.a_G) * internal.b_G / (I + internal.b_G)) * (1 + internal.e_G * internal.L / (internal.L + internal.f_G))) - 1 * internal.compartment * internal.mu_G * G;
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.p_I * (internal.a_I + (1 - internal.a_I) * internal.b_I / (G + internal.b_I))) + 1 * internal.compartment * (internal.q_I * T_2) - 1 * internal.compartment * internal.mu_I * I;
    dstatedt[0] = 0 + 1 * internal.compartment * ((1 + internal.c_1 * internal.L / (internal.L + internal.d_1)) * internal.r_T * internal.b_1 / (internal.b_1 + I)) - 1 * internal.compartment * internal.mu_T * T_1;
    dstatedt[1] = 0 + 1 * internal.compartment * ((internal.c_2 + (1 - internal.c_2) * internal.d_1 / (internal.L + internal.d_1)) * internal.r_T * internal.b_2 / (internal.b_2 + G)) - 1 * internal.compartment * internal.mu_T * T_2;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "T_1", "T_2", "G", "I"];
    this.metadata.internalOrder = {a_1: null, a_2: null, a_G: null, a_I: null, b_1: null, b_2: null, b_G: null, b_I: null, c_1: null, c_2: null, c_G: null, compartment: null, d_1: null, d_2: null, d_G: null, e_G: null, f_G: null, G_init: null, I_init: null, initial_G: null, initial_I: null, initial_T_1: null, initial_T_2: null, L: null, mu_G: null, mu_I: null, mu_T: null, p_G: null, p_I: null, q_G: null, q_I: null, r_T: null, T_1_init: null, T_2_init: null};
    this.metadata.variableOrder = {T_1: null, T_2: null, G: null, I: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
