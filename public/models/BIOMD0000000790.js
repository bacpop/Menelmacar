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
    state[2] = internal.initial_E_1_Innate;
    state[3] = internal.initial_E_2_Adaptive;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "b", "beta", "c_1", "c_2", "c_3", "c_4", "c_5", "d_1", "d_2", "d_3", "E_1_Innate_init", "E_2_Adaptive_init", "mu", "nu", "p", "q", "r", "s", "T_1_init", "T_2_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.51400000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 2.0000000000000001e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 1.101e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c_1", internal, 13000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c_2", internal, 0.041200000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c_3", internal, 3.4220000000000002e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c_4", internal, 0.1245, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c_5", internal, 20193000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_1", internal, 1.1000000000000001e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_2", internal, 3.4200000000000001e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_3", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_1_Innate_init", internal, 10500000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_2_Adaptive_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu", internal, 1.101e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nu", internal, 1.101e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p", internal, 0.34999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_1_init", internal, 80000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_2_init", internal, 20000000, -Infinity, Infinity, false);
    internal.initial_E_1_Innate = internal.E_1_Innate_init;
    internal.initial_E_2_Adaptive = internal.E_2_Adaptive_init;
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
    const E_1_Innate = state[2];
    const E_2_Adaptive = state[3];
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.c_1) - 1 * internal.compartment * internal.c_2 * E_1_Innate - 1 * internal.compartment * (internal.c_3 * (T_1 + T_2) * E_1_Innate) + 1 * internal.compartment * (internal.c_4 * (T_1 + internal.s * T_2) * E_1_Innate / (internal.c_5 + T_1 + T_2));
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.d_1 * T_1 * E_1_Innate) - 1 * internal.compartment * (internal.d_2 * T_1 * E_2_Adaptive) - 1 * internal.compartment * internal.d_3 * E_2_Adaptive;
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.a * T_1 * (1 - internal.b * T_1)) - 1 * internal.compartment * (internal.mu * E_1_Innate * T_1) - 1 * internal.compartment * (internal.beta * E_2_Adaptive * T_1) - 1 * internal.compartment * (internal.nu * T_1 * T_2);
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.a * internal.p * T_2 * (1 - internal.b * T_2)) - 1 * internal.compartment * (internal.r * internal.nu * T_1 * T_2) - 1 * internal.compartment * (internal.mu * internal.q * E_1_Innate * T_2);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "T_1", "T_2", "E_1_Innate", "E_2_Adaptive"];
    this.metadata.internalOrder = {a: null, b: null, beta: null, c_1: null, c_2: null, c_3: null, c_4: null, c_5: null, compartment: null, d_1: null, d_2: null, d_3: null, E_1_Innate_init: null, E_2_Adaptive_init: null, initial_E_1_Innate: null, initial_E_2_Adaptive: null, initial_T_1: null, initial_T_2: null, mu: null, nu: null, p: null, q: null, r: null, s: null, T_1_init: null, T_2_init: null};
    this.metadata.variableOrder = {T_1: null, T_2: null, E_1_Innate: null, E_2_Adaptive: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
