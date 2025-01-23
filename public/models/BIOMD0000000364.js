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
    var state = Array(14).fill(0);
    state[0] = internal.initial_E;
    state[1] = internal.initial_E_P_1;
    state[2] = internal.initial_P;
    state[3] = internal.initial_M;
    state[4] = internal.initial_M1;
    state[5] = internal.initial_E_M1;
    state[6] = internal.initial_E_M;
    state[7] = internal.initial_T;
    state[8] = internal.initial_E_P_2;
    state[9] = internal.initial_P2;
    state[10] = internal.initial_P21;
    state[11] = internal.initial_E_P21;
    state[12] = internal.initial_E_P2;
    state[13] = internal.initial_E_P1;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["E_init", "E_M_init", "E_M1_init", "E_P_1_init", "E_P_2_init", "E_P1_init", "E_P2_init", "E_P21_init", "j1", "j3", "j3a", "j5", "j7", "j7a", "k1", "k10", "k2", "k3", "k3a", "k4", "k4a", "k5", "k6", "k7", "k7a", "k8", "k8a", "k9", "kC1", "kC2", "M_init", "M1_init", "P_init", "P2_init", "P21_init", "T_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "E_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_M_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_M1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_P_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_P_2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_P1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_P2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_P21_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "j1", internal, 33.399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "j3", internal, 1.5799999999999999e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "j3a", internal, 0.185, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "j5", internal, 21.800000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "j7", internal, 4.4599999999999999e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "j7a", internal, 2.6599999999999999e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 91.799999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 7.2299999999999998e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 82.400000000000006, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 38.100000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3a", internal, 151.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 38.100000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4a", internal, 209.90000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 5.1600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 32.299999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 6.7599999999999997e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7a", internal, 4.7000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 0.0059899999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8a", internal, 42.600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 3.1200000000000001e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kC1", internal, 2.39e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kC2", internal, 0.031, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P21_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_E = internal.E_init;
    internal.initial_E_M = internal.E_M_init;
    internal.initial_E_M1 = internal.E_M1_init;
    internal.initial_E_P_1 = internal.E_P_1_init;
    internal.initial_E_P_2 = internal.E_P_2_init;
    internal.initial_E_P1 = internal.E_P1_init;
    internal.initial_E_P2 = internal.E_P2_init;
    internal.initial_E_P21 = internal.E_P21_init;
    internal.initial_M = internal.M_init;
    internal.initial_M1 = internal.M1_init;
    internal.initial_P = internal.P_init;
    internal.initial_P2 = internal.P2_init;
    internal.initial_P21 = internal.P21_init;
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
    const M1 = state[4];
    const E_M1 = state[5];
    const E_M = state[6];
    const E_P_2 = state[8];
    const P2 = state[9];
    const P21 = state[10];
    const E_P21 = state[11];
    const E_P2 = state[12];
    dstatedt[13] = 0;
    dstatedt[0] = 0 - 1 * internal.compartment * (internal.k1 * E * P - internal.j1 * E_P_1) + 1 * internal.compartment * internal.k2 * E_P_1 - 1 * internal.compartment * (internal.k3 * E * M1 - internal.j3 * E_M1) - 1 * internal.compartment * (internal.k3a * E * M - internal.j3a * E_M) + 1 * internal.compartment * internal.k4 * E_M1 + 1 * internal.compartment * internal.k4a * E_M - 1 * internal.compartment * (internal.k5 * E * P - internal.j5 * E_P_2) + 1 * internal.compartment * internal.k6 * E_P_2 - 1 * internal.compartment * (internal.k7 * E * P21 - internal.j7 * E_P21) - 1 * internal.compartment * (internal.k7a * E * P2 - internal.j7a * E_P2) + 1 * internal.compartment * internal.k8 * E_P21 + 1 * internal.compartment * internal.k8a * E_P2;
    dstatedt[6] = 0 + 1 * internal.compartment * (internal.k3a * E * M - internal.j3a * E_M) - 1 * internal.compartment * internal.k4a * E_M;
    dstatedt[5] = 0 + 1 * internal.compartment * (internal.k3 * E * M1 - internal.j3 * E_M1) - 1 * internal.compartment * internal.k4 * E_M1;
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.k1 * E * P - internal.j1 * E_P_1) - 1 * internal.compartment * internal.k2 * E_P_1 - 1 * internal.compartment * internal.kC1 * E_P_1;
    dstatedt[8] = 0 + 1 * internal.compartment * (internal.k5 * E * P - internal.j5 * E_P_2) - 1 * internal.compartment * internal.k6 * E_P_2 - 1 * internal.compartment * internal.kC2 * E_P_2;
    dstatedt[12] = 0 + 1 * internal.compartment * (internal.k7a * E * P2 - internal.j7a * E_P2) - 1 * internal.compartment * internal.k8a * E_P2;
    dstatedt[11] = 0 + 1 * internal.compartment * (internal.k7 * E * P21 - internal.j7 * E_P21) - 1 * internal.compartment * internal.k8 * E_P21;
    dstatedt[3] = 0 + 1 * internal.compartment * internal.k2 * E_P_1 - 1 * internal.compartment * internal.k9 * M - 1 * internal.compartment * (internal.k3a * E * M - internal.j3a * E_M);
    dstatedt[4] = 0 + 1 * internal.compartment * internal.k9 * M - 1 * internal.compartment * (internal.k3 * E * M1 - internal.j3 * E_M1);
    dstatedt[2] = 0 - 1 * internal.compartment * (internal.k1 * E * P - internal.j1 * E_P_1) - 1 * internal.compartment * (internal.k5 * E * P - internal.j5 * E_P_2);
    dstatedt[9] = 0 + 1 * internal.compartment * internal.k6 * E_P_2 - 1 * internal.compartment * internal.k10 * P2 - 1 * internal.compartment * (internal.k7a * E * P2 - internal.j7a * E_P2);
    dstatedt[10] = 0 + 1 * internal.compartment * internal.k10 * P2 - 1 * internal.compartment * (internal.k7 * E * P21 - internal.j7 * E_P21);
    dstatedt[7] = 0 + 1 * internal.compartment * internal.k4 * E_M1 + 1 * internal.compartment * internal.k4a * E_M + 1 * internal.compartment * internal.k8 * E_P21 + 1 * internal.compartment * internal.k8a * E_P2 + 1 * internal.compartment * internal.kC1 * E_P_1 + 1 * internal.compartment * internal.kC2 * E_P_2;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "E", "E_P_1", "P", "M", "M1", "E_M1", "E_M", "T", "E_P_2", "P2", "P21", "E_P21", "E_P2", "E_P1"];
    this.metadata.internalOrder = {compartment: null, E_init: null, E_M_init: null, E_M1_init: null, E_P_1_init: null, E_P_2_init: null, E_P1_init: null, E_P2_init: null, E_P21_init: null, initial_E: null, initial_E_M: null, initial_E_M1: null, initial_E_P_1: null, initial_E_P_2: null, initial_E_P1: null, initial_E_P2: null, initial_E_P21: null, initial_M: null, initial_M1: null, initial_P: null, initial_P2: null, initial_P21: null, initial_T: null, j1: null, j3: null, j3a: null, j5: null, j7: null, j7a: null, k1: null, k10: null, k2: null, k3: null, k3a: null, k4: null, k4a: null, k5: null, k6: null, k7: null, k7a: null, k8: null, k8a: null, k9: null, kC1: null, kC2: null, M_init: null, M1_init: null, P_init: null, P2_init: null, P21_init: null, T_init: null};
    this.metadata.variableOrder = {E: null, E_P_1: null, P: null, M: null, M1: null, E_M1: null, E_M: null, T: null, E_P_2: null, P2: null, P21: null, E_P21: null, E_P2: null, E_P1: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
