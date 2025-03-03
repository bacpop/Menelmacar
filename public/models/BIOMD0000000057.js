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
    var state = Array(6).fill(0);
    state[0] = internal.initial_R;
    state[1] = internal.initial_O;
    state[2] = internal.initial_I1;
    state[3] = internal.initial_S;
    state[4] = internal.initial_A;
    state[5] = internal.initial_I2;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A_init", "c", "I1_init", "I2_init", "IP3", "k1", "k2", "k3", "k4", "kminus1", "kminus2", "kminus3", "kminus4", "L1", "l2", "L3", "l4", "L5", "l6", "lminus2", "lminus4", "lminus6", "O_init", "R_init", "S_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IP3", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.64000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 37.399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kminus1", internal, 0.040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kminus2", internal, 1.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kminus3", internal, 29.800000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kminus4", internal, 0.54000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L1", internal, 0.12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "l2", internal, 1.7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L3", internal, 0.025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "l4", internal, 1.7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L5", internal, 54.700000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "l6", internal, 4707, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lminus2", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lminus4", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lminus6", internal, 11.4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "O_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_A = internal.A_init;
    internal.initial_I1 = internal.I1_init;
    internal.initial_I2 = internal.I2_init;
    internal.initial_O = internal.O_init;
    internal.initial_R = internal.R_init;
    internal.initial_S = internal.S_init;
    internal.Phi_minus2 = (internal.kminus2 + internal.lminus4 * internal.c) / (1 + internal.c / internal.L5);
    internal.Phi_minus4 = internal.L1 * (internal.kminus4 + internal.lminus6) / (internal.L1 + internal.c);
    internal.Phi1 = (internal.k1 * internal.L1 + internal.l2) * internal.c / (internal.L1 + internal.c * (1 + internal.L1 / internal.L3));
    internal.Phi2 = (internal.k2 * internal.L3 + internal.l4 * internal.c) / (internal.L3 + internal.c * (1 + internal.L3 / internal.L1));
    internal.Phi3 = internal.k3 * internal.L5 / (internal.L5 + internal.c);
    internal.Phi4 = (internal.k4 * internal.L5 + internal.l6) * internal.c / (internal.L5 + internal.c);
    internal.Phi5 = (internal.k1 * internal.L1 + internal.l2) * internal.c / (internal.L1 + internal.c);
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const R = state[0];
    const O = state[1];
    const I1 = state[2];
    const S = state[3];
    const A = state[4];
    const I2 = state[5];
    dstatedt[4] = 0 + 1 * internal.compartment * (internal.Phi4 * O - internal.Phi_minus4 * A) - 1 * internal.compartment * (internal.Phi5 * A - (internal.kminus1 + internal.lminus2) * I2);
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.Phi1 * R - (internal.kminus1 + internal.lminus2) * I1);
    dstatedt[5] = 0 + 1 * internal.compartment * (internal.Phi5 * A - (internal.kminus1 + internal.lminus2) * I2);
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.Phi2 * internal.IP3 * R - internal.Phi_minus2 * O) - 1 * internal.compartment * (internal.Phi3 * O - internal.kminus3 * S) - 1 * internal.compartment * (internal.Phi4 * O - internal.Phi_minus4 * A);
    dstatedt[0] = 0 - 1 * internal.compartment * (internal.Phi2 * internal.IP3 * R - internal.Phi_minus2 * O) - 1 * internal.compartment * (internal.Phi1 * R - (internal.kminus1 + internal.lminus2) * I1);
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.Phi3 * O - internal.kminus3 * S);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "R", "O", "I1", "S", "A", "I2"];
    this.metadata.internalOrder = {A_init: null, c: null, compartment: null, I1_init: null, I2_init: null, initial_A: null, initial_I1: null, initial_I2: null, initial_O: null, initial_R: null, initial_S: null, IP3: null, k1: null, k2: null, k3: null, k4: null, kminus1: null, kminus2: null, kminus3: null, kminus4: null, L1: null, l2: null, L3: null, l4: null, L5: null, l6: null, lminus2: null, lminus4: null, lminus6: null, O_init: null, Phi_minus2: null, Phi_minus4: null, Phi1: null, Phi2: null, Phi3: null, Phi4: null, Phi5: null, R_init: null, S_init: null};
    this.metadata.variableOrder = {R: null, O: null, I1: null, S: null, A: null, I2: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
