export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.c1 = 1;
    internal.c2 = 1;
    internal.default1 = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(14).fill(0);
    state[0] = internal.initial_s1;
    state[1] = internal.initial_s2;
    state[2] = internal.initial_s3;
    state[3] = internal.initial_s4;
    state[4] = internal.initial_s5;
    state[5] = internal.initial_s6;
    state[6] = internal.initial_s7;
    state[7] = internal.initial_s8;
    state[8] = internal.initial_s9;
    state[9] = internal.initial_s10;
    state[10] = internal.initial_s11;
    state[11] = internal.initial_s12;
    state[12] = internal.initial_s13;
    state[13] = internal.initial_s119;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["B_T", "Cao", "dot_q_inpass", "dot_Vex", "dot_Vhi", "dot_Vp", "fracK", "half", "k_CCE", "k_CICR", "K_CICR", "K_hi", "k1", "K1", "k2", "K2", "k3", "K3", "k4", "K4", "k5", "K5", "k6", "k7", "R_T", "s1_init", "s10_init", "s11_init", "s119_init", "s12_init", "s13_init", "s2_init", "s3_init", "s4_init", "s5_init", "s6_init", "s7_init", "s8_init", "s9_init", "tau_I", "tau_II", "unisec"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "B_T", internal, 120000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cao", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dot_q_inpass", internal, 3000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dot_Vex", internal, 9165, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dot_Vhi", internal, 2380, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dot_Vp", internal, 815, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "fracK", internal, 7071067.8099999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "half", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_CCE", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_CICR", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_CICR", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_hi", internal, 380, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.00059999999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2", internal, 200, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 3.3199999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K3", internal, 150, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 2500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K4", internal, 80, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 5.0000000000000002e-11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K5", internal, 321, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 150, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_T", internal, 44000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s1_init", internal, 1500000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s10_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s11_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s119_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s12_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s13_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s2_init", internal, 2830000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s3_init", internal, 117.2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s4_init", internal, 3870, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s5_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s6_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s7_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s8_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s9_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau_I", internal, 66, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau_II", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "unisec", internal, 1, -Infinity, Infinity, false);
    internal.initial_s1 = internal.s1_init;
    internal.initial_s10 = internal.s10_init;
    internal.initial_s11 = internal.s11_init;
    internal.initial_s119 = internal.s119_init;
    internal.initial_s12 = internal.s12_init;
    internal.initial_s13 = internal.s13_init;
    internal.initial_s2 = internal.s2_init;
    internal.initial_s3 = internal.s3_init;
    internal.initial_s4 = internal.s4_init;
    internal.initial_s5 = internal.s5_init;
    internal.initial_s6 = internal.s6_init;
    internal.initial_s7 = internal.s7_init;
    internal.initial_s8 = internal.s8_init;
    internal.initial_s9 = internal.s9_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const s1 = state[0];
    const s2 = state[1];
    const s3 = state[2];
    const s4 = state[3];
    const s6 = state[5];
    const s12 = state[11];
    dstatedt[0] = 0;
    dstatedt[13] = 0;
    dstatedt[9] = 0 + 1 * internal.dot_Vex * s3 / (internal.K5 + s3);
    dstatedt[10] = 0 - 1 * internal.dot_q_inpass;
    dstatedt[11] = 0 + 1 * internal.unisec;
    dstatedt[12] = 0 - 1 * internal.unisec;
    dstatedt[1] = 0 + 1 * internal.k_CCE * (internal.fracK * internal.Cao / (internal.K3 + internal.Cao) - s2) * (s1 - s2) - 1 * internal.k3 * (internal.k_CICR * s3 / (internal.K_CICR + s3)) * Math.pow((s6 / (internal.K2 + s6)), (3)) * s2 - internal.k4 * Math.pow((s3 / (internal.K3 + s3)), (2)) + internal.k5 * s2 * s2;
    dstatedt[2] = 0 + 1 * - internal.k6 * s3 * (internal.B_T - s4) + internal.k7 * s4 + 1 * internal.k3 * (internal.k_CICR * s3 / (internal.K_CICR + s3)) * Math.pow((s6 / (internal.K2 + s6)), (3)) * s2 - internal.k4 * Math.pow((s3 / (internal.K3 + s3)), (2)) + internal.k5 * s2 * s2 - 1 * internal.dot_Vhi * Math.pow((s3), (4)) / (Math.pow((internal.K_hi), (4)) + Math.pow((s3), (4))) - 1 * internal.dot_Vex * s3 / (internal.K5 + s3) + 1 * internal.dot_q_inpass - 1 * internal.dot_Vp * Math.pow((s3), (2)) / (Math.pow((internal.K4), (2)) + Math.pow((s3), (2)));
    dstatedt[3] = 0 - 1 * - internal.k6 * s3 * (internal.B_T - s4) + internal.k7 * s4;
    dstatedt[4] = 0 - 1 * internal.k_CCE * (internal.fracK * internal.Cao / (internal.K3 + internal.Cao) - s2) * (s1 - s2);
    dstatedt[5] = 0 + 1 * internal.k1 * (internal.R_T - internal.half * internal.R_T * (Math.exp(- s12 / internal.tau_I) + Math.exp(- s12 / internal.tau_II) + (Math.exp(- s12 / internal.tau_I) - Math.exp(- s12 / internal.tau_II)) * (internal.tau_I + internal.tau_II) / (internal.tau_I - internal.tau_II))) * s3 / (internal.K1 + s3) - 1 * internal.k2 * s6;
    dstatedt[6] = 0 - 1 * internal.k1 * (internal.R_T - internal.half * internal.R_T * (Math.exp(- s12 / internal.tau_I) + Math.exp(- s12 / internal.tau_II) + (Math.exp(- s12 / internal.tau_I) - Math.exp(- s12 / internal.tau_II)) * (internal.tau_I + internal.tau_II) / (internal.tau_I - internal.tau_II))) * s3 / (internal.K1 + s3);
    dstatedt[7] = 0 + 1 * internal.k2 * s6;
    dstatedt[8] = 0 + 1 * internal.dot_Vhi * Math.pow((s3), (4)) / (Math.pow((internal.K_hi), (4)) + Math.pow((s3), (4))) + 1 * internal.dot_Vp * Math.pow((s3), (2)) / (Math.pow((internal.K4), (2)) + Math.pow((s3), (2)));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11", "s12", "s13", "s119"];
    this.metadata.internalOrder = {B_T: null, c1: null, c2: null, Cao: null, default1: null, dot_q_inpass: null, dot_Vex: null, dot_Vhi: null, dot_Vp: null, fracK: null, half: null, initial_s1: null, initial_s10: null, initial_s11: null, initial_s119: null, initial_s12: null, initial_s13: null, initial_s2: null, initial_s3: null, initial_s4: null, initial_s5: null, initial_s6: null, initial_s7: null, initial_s8: null, initial_s9: null, k_CCE: null, k_CICR: null, K_CICR: null, K_hi: null, k1: null, K1: null, k2: null, K2: null, k3: null, K3: null, k4: null, K4: null, k5: null, K5: null, k6: null, k7: null, R_T: null, s1_init: null, s10_init: null, s11_init: null, s119_init: null, s12_init: null, s13_init: null, s2_init: null, s3_init: null, s4_init: null, s5_init: null, s6_init: null, s7_init: null, s8_init: null, s9_init: null, tau_I: null, tau_II: null, unisec: null};
    this.metadata.variableOrder = {s1: null, s2: null, s3: null, s4: null, s5: null, s6: null, s7: null, s8: null, s9: null, s10: null, s11: null, s12: null, s13: null, s119: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
