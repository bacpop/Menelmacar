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
    state[0] = internal.initial_c1;
    state[1] = internal.initial_h1;
    state[2] = internal.initial_c2;
    state[3] = internal.initial_h2;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["c1_init", "c2_init", "D", "h1_init", "h2_init", "Jleak", "k1", "k2", "k3", "kf", "Kp", "p", "R1", "r2", "R3", "r4", "R5", "Vp"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "c1_init", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c2_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "D", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h1_init", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h2_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Jleak", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 44, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 26.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 1.6000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf", internal, 28, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kp", internal, 0.17999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p", internal, 0.27779999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R1", internal, 6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r2", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R3", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r4", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R5", internal, 1.6000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vp", internal, 1.2, -Infinity, Infinity, false);
    internal.initial_c1 = internal.c1_init;
    internal.initial_c2 = internal.c2_init;
    internal.initial_h1 = internal.h1_init;
    internal.initial_h2 = internal.h2_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const c1 = state[0];
    const h1 = state[1];
    const c2 = state[2];
    const h2 = state[3];
    var Phi_minus1_c1 = internal.k1 / (internal.R3 + c1);
    var Phi_minus1_c2 = internal.k1 / (internal.R3 + c2);
    var Phi1_c1 = internal.r2 * c1 / (internal.R1 + c1);
    var Phi1_c2 = internal.r2 * c2 / (internal.R1 + c2);
    var Phi2_c1 = (internal.k2 + internal.r4 * c1) / (internal.R3 + c1);
    var Phi2_c2 = (internal.k2 + internal.r4 * c2) / (internal.R3 + c2);
    var Phi3_c1 = internal.k3 / (internal.R5 + c1);
    var Phi3_c2 = internal.k3 / (internal.R5 + c2);
    dstatedt[0] = 0 + 1 * internal.compartment * internal.kf * Math.pow((internal.p * h1 * Phi1_c1 / (Phi1_c1 * internal.p + Phi_minus1_c1)), (4)) - 1 * internal.compartment * (internal.Vp * Math.pow((c1), (2)) / (Math.pow((internal.Kp), (2)) + Math.pow((c1), (2)))) + 1 * internal.compartment * internal.Jleak + 1 * internal.compartment * internal.D * (c2 - c1);
    dstatedt[2] = 0 + 1 * internal.compartment * internal.kf * Math.pow((internal.p * h2 * Phi1_c2 / (Phi1_c2 * internal.p + Phi_minus1_c2)), (4)) - 1 * internal.compartment * internal.Vp * Math.pow((c2), (2)) / (Math.pow((internal.Kp), (2)) + Math.pow((c2), (2))) + 1 * internal.compartment * internal.Jleak - 1 * internal.compartment * internal.D * (c2 - c1);
    dstatedt[1] = 0 + 1 * internal.compartment * Phi3_c1 * (1 - h1) - 1 * internal.compartment * Phi1_c1 * Phi2_c1 * h1 * internal.p / (Phi1_c1 * internal.p + Phi_minus1_c1);
    dstatedt[3] = 0 + 1 * internal.compartment * Phi3_c2 * (1 - h2) - 1 * internal.compartment * Phi1_c2 * Phi2_c2 * h2 * internal.p / (Phi1_c2 * internal.p + Phi_minus1_c2);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "c1", "h1", "c2", "h2"];
    this.metadata.internalOrder = {c1_init: null, c2_init: null, compartment: null, D: null, h1_init: null, h2_init: null, initial_c1: null, initial_c2: null, initial_h1: null, initial_h2: null, Jleak: null, k1: null, k2: null, k3: null, kf: null, Kp: null, p: null, R1: null, r2: null, R3: null, r4: null, R5: null, Vp: null};
    this.metadata.variableOrder = {c1: null, h1: null, c2: null, h2: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
