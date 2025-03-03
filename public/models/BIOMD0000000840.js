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
    state[0] = internal.initial_M;
    state[1] = internal.initial_C1;
    state[2] = internal.initial_C2;
    state[3] = internal.initial_A;
    state[4] = internal.initial_T;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A_init", "alpha_1", "alpha_2", "beta", "C1_init", "C2_init", "delta", "epsilon", "gamma_1", "gamma_2", "gamma_3", "lambda", "M_init", "rho", "T_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A_init", internal, 2000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_1", internal, 0.22, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_2", internal, 0.45000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 0.14000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C1_init", internal, 5640000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C2_init", internal, 3760000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "epsilon", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_1", internal, 0.23999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_2", internal, 0.29299999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_3", internal, 8.0000000000000003e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda", internal, 3000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_init", internal, 37600000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho", internal, 9.9999999999999995e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_init", internal, 700000, -Infinity, Infinity, false);
    internal.initial_A = internal.A_init;
    internal.initial_C1 = internal.C1_init;
    internal.initial_C2 = internal.C2_init;
    internal.initial_M = internal.M_init;
    internal.initial_T = internal.T_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const M = state[0];
    const C1 = state[1];
    const C2 = state[2];
    const A = state[3];
    const T = state[4];
    dstatedt[3] = 0 + 1 * internal.compartment * internal.delta * C2 - 1 * internal.compartment * internal.epsilon * A + 1 * internal.compartment * internal.gamma_1 * T + 1 * internal.compartment * (internal.gamma_3 * A * T);
    dstatedt[1] = 0 + 1 * internal.compartment * internal.alpha_1 * M - 1 * internal.compartment * internal.beta * C1 - 1 * internal.compartment * internal.delta * C1;
    dstatedt[2] = 0 - 1 * internal.compartment * internal.delta * C2 + 1 * internal.compartment * internal.delta * C1 - 1 * internal.compartment * internal.beta * C2;
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.lambda / (1 + internal.rho * A)) - 1 * internal.compartment * internal.alpha_1 * M - 1 * internal.compartment * internal.alpha_2 * M;
    dstatedt[4] = 0 + 1 * internal.compartment * internal.epsilon * A - 1 * internal.compartment * internal.gamma_1 * T - 1 * internal.compartment * (internal.gamma_3 * A * T) - 1 * internal.compartment * internal.gamma_2 * T;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "M", "C1", "C2", "A", "T"];
    this.metadata.internalOrder = {A_init: null, alpha_1: null, alpha_2: null, beta: null, C1_init: null, C2_init: null, compartment: null, delta: null, epsilon: null, gamma_1: null, gamma_2: null, gamma_3: null, initial_A: null, initial_C1: null, initial_C2: null, initial_M: null, initial_T: null, lambda: null, M_init: null, rho: null, T_init: null};
    this.metadata.variableOrder = {M: null, C1: null, C2: null, A: null, T: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
