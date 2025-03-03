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
    state[0] = internal.initial_B;
    state[1] = internal.initial_P;
    state[2] = internal.initial_A;
    state[3] = internal.initial_T;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "A_init", "b", "B_init", "beta_1", "k_1", "k_2", "mu_1", "mu_2", "P_init", "r", "r_1", "r_2", "T_init", "u"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "A_init", internal, 150000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B_init", internal, 90000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_1", internal, 30218000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_1", internal, 1000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_2", internal, 980000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_1", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_2", internal, 6.8840000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_init", internal, 1000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 0.43099999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_1", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_2", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_init", internal, 100000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u", internal, 0.10000000000000001, -Infinity, Infinity, false);
    internal.initial_A = internal.A_init;
    internal.initial_B = internal.B_init;
    internal.initial_P = internal.P_init;
    internal.initial_T = internal.T_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const B = state[0];
    const P = state[1];
    const A = state[2];
    const T = state[3];
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.r_1 * B + internal.r_2 * P) - 1 * internal.compartment * (internal.mu_2 * A);
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.a * internal.u * B * (1 - B / internal.k_1)) - 1 * internal.compartment * (internal.b * (1 - internal.u) * B);
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.b * (1 - internal.u) * B) - 1 * internal.compartment * (internal.mu_1 * P);
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.r * T * (1 - T / internal.k_2)) - 1 * internal.compartment * (internal.beta_1 * A * T);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "B", "P", "A", "T"];
    this.metadata.internalOrder = {a: null, A_init: null, b: null, B_init: null, beta_1: null, compartment: null, initial_A: null, initial_B: null, initial_P: null, initial_T: null, k_1: null, k_2: null, mu_1: null, mu_2: null, P_init: null, r: null, r_1: null, r_2: null, T_init: null, u: null};
    this.metadata.variableOrder = {B: null, P: null, A: null, T: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
