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
    var state = Array(9).fill(0);
    state[0] = internal.initial_E;
    state[1] = internal.initial_E_P_1;
    state[2] = internal.initial_P;
    state[3] = internal.initial_M;
    state[4] = internal.initial_E_M;
    state[5] = internal.initial_T;
    state[6] = internal.initial_E_P_2;
    state[7] = internal.initial_P2;
    state[8] = internal.initial_E_P2;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["E_init", "E_M_init", "E_P_1_init", "E_P_2_init", "E_P2_init", "j1", "j3a", "j5", "j7a", "k1", "k2", "k3a", "k4a", "k5", "k6", "k7a", "k8a", "M_init", "P_init", "P2_init", "T_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "E_init", internal, 0.00014999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_M_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_P_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_P_2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_P2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "j1", internal, 33.399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "j3a", internal, 0.185, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "j5", internal, 21.800000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "j7a", internal, 2.6599999999999999e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 91.799999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 82.400000000000006, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3a", internal, 151.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4a", internal, 209.90000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 5.1600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 32.299999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7a", internal, 4.7000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8a", internal, 42.600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_E = internal.E_init;
    internal.initial_E_M = internal.E_M_init;
    internal.initial_E_P_1 = internal.E_P_1_init;
    internal.initial_E_P_2 = internal.E_P_2_init;
    internal.initial_E_P2 = internal.E_P2_init;
    internal.initial_M = internal.M_init;
    internal.initial_P = internal.P_init;
    internal.initial_P2 = internal.P2_init;
    internal.initial_T = internal.T_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const E = state[0];
    const E_P_1 = state[1];
    const P = state[2];
    const M = state[3];
    const E_M = state[4];
    const E_P_2 = state[6];
    const P2 = state[7];
    const E_P2 = state[8];
    dstatedt[0] = 0 - 1 * internal.compartment * (internal.k1 * E * P - internal.j1 * E_P_1) + 1 * internal.compartment * internal.k2 * E_P_1 - 1 * internal.compartment * (internal.k3a * E * M - internal.j3a * E_M) + 1 * internal.compartment * internal.k4a * E_M - 1 * internal.compartment * (internal.k5 * E * P - internal.j5 * E_P_2) + 1 * internal.compartment * internal.k6 * E_P_2 - 1 * internal.compartment * (internal.k7a * E * P2 - internal.j7a * E_P2) + 1 * internal.compartment * internal.k8a * E_P2;
    dstatedt[4] = 0 + 1 * internal.compartment * (internal.k3a * E * M - internal.j3a * E_M) - 1 * internal.compartment * internal.k4a * E_M;
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.k1 * E * P - internal.j1 * E_P_1) - 1 * internal.compartment * internal.k2 * E_P_1;
    dstatedt[6] = 0 + 1 * internal.compartment * (internal.k5 * E * P - internal.j5 * E_P_2) - 1 * internal.compartment * internal.k6 * E_P_2;
    dstatedt[8] = 0 + 1 * internal.compartment * (internal.k7a * E * P2 - internal.j7a * E_P2) - 1 * internal.compartment * internal.k8a * E_P2;
    dstatedt[3] = 0 + 1 * internal.compartment * internal.k2 * E_P_1 - 1 * internal.compartment * (internal.k3a * E * M - internal.j3a * E_M);
    dstatedt[2] = 0 - 1 * internal.compartment * (internal.k1 * E * P - internal.j1 * E_P_1) - 1 * internal.compartment * (internal.k5 * E * P - internal.j5 * E_P_2);
    dstatedt[7] = 0 + 1 * internal.compartment * internal.k6 * E_P_2 - 1 * internal.compartment * (internal.k7a * E * P2 - internal.j7a * E_P2);
    dstatedt[5] = 0 + 1 * internal.compartment * internal.k4a * E_M + 1 * internal.compartment * internal.k8a * E_P2;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "E", "E_P_1", "P", "M", "E_M", "T", "E_P_2", "P2", "E_P2"];
    this.metadata.internalOrder = {compartment: null, E_init: null, E_M_init: null, E_P_1_init: null, E_P_2_init: null, E_P2_init: null, initial_E: null, initial_E_M: null, initial_E_P_1: null, initial_E_P_2: null, initial_E_P2: null, initial_M: null, initial_P: null, initial_P2: null, initial_T: null, j1: null, j3a: null, j5: null, j7a: null, k1: null, k2: null, k3a: null, k4a: null, k5: null, k6: null, k7a: null, k8a: null, M_init: null, P_init: null, P2_init: null, T_init: null};
    this.metadata.variableOrder = {E: null, E_P_1: null, P: null, M: null, E_M: null, T: null, E_P_2: null, P2: null, E_P2: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
