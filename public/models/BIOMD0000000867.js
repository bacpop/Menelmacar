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
    var state = Array(10).fill(0);
    state[0] = internal.initial_y1_IL_15;
    state[1] = internal.initial_y2_Akt;
    state[2] = internal.initial_y3_mTOR;
    state[3] = internal.initial_y4_HIF_1a;
    state[4] = internal.initial_y5_HIF_1b;
    state[5] = internal.initial_y6_HIF_1_Complex;
    state[6] = internal.initial_y7_NF_KB;
    state[7] = internal.initial_y8_STAT3;
    state[8] = internal.initial_y9_HIF_1a_mRNA;
    state[9] = internal.initial_y10_HIF_1a_aOH;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a1", "a11", "a2", "a3", "a5", "a7", "a8", "a9", "alpha1", "alpha2", "D", "d1", "d10", "d2", "d3", "d4", "d5", "d6", "d7", "d9", "delta", "K_O2", "k1", "k10", "k11", "k12", "k13", "k14", "k15", "k2", "k3", "k4", "k5", "k6", "k7", "k8", "k9", "kalpha", "kS", "Metabolite_0", "Metabolite_3", "Metabolite_5", "Metabolite_9", "n2", "phi", "R", "rho3", "rho4", "rho6", "S3", "xi10", "xi28", "xi4", "xi44", "y1_IL_15_init", "y10_HIF_1a_aOH_init", "y2_Akt_init", "y3_mTOR_init", "y4_HIF_1a_init", "y5_HIF_1b_init", "y6_HIF_1_Complex_init", "y7_NF_KB_init", "y8_STAT3_init", "y9_HIF_1a_mRNA_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a1", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a11", internal, 4.1699999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a2", internal, 0.84799999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a3", internal, 0.036999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a5", internal, 0.21099999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a7", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a8", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a9", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha1", internal, 1.163, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha2", internal, 0.38600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "D", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d1", internal, 0.062, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d10", internal, 0.93500000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d2", internal, 0.84799999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d3", internal, 0.91900000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d4", internal, 0.623, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d5", internal, 0.19600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d6", internal, 0.30099999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d7", internal, 0.91400000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d9", internal, 0.93400000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta", internal, 200, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_O2", internal, 0.95999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 2.0000000000000002e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 421.35300000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11", internal, 0.21099999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k12", internal, 0.060999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k13", internal, 12.151999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k14", internal, 16.527999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k15", internal, 0.087999999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.307, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.18099999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 76.195999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 75.894999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 25.001000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 2.903, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 0.57699999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 0.753, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kalpha", internal, 1.034, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kS", internal, 0.00089999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Metabolite_0", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Metabolite_3", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Metabolite_5", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Metabolite_9", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n2", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "phi", internal, 0.82899999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho4", internal, 0.86299999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho6", internal, 0.98999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S3", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "xi10", internal, 8.1270000000000007, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "xi28", internal, 38.439999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "xi4", internal, 15.018000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "xi44", internal, 128.02199999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y1_IL_15_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y10_HIF_1a_aOH_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y2_Akt_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y3_mTOR_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y4_HIF_1a_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y5_HIF_1b_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y6_HIF_1_Complex_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y7_NF_KB_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y8_STAT3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y9_HIF_1a_mRNA_init", internal, 0, -Infinity, Infinity, false);
    internal.d8 = internal.k8;
    internal.initial_y1_IL_15 = internal.y1_IL_15_init;
    internal.initial_y10_HIF_1a_aOH = internal.y10_HIF_1a_aOH_init;
    internal.initial_y2_Akt = internal.y2_Akt_init;
    internal.initial_y3_mTOR = internal.y3_mTOR_init;
    internal.initial_y4_HIF_1a = internal.y4_HIF_1a_init;
    internal.initial_y5_HIF_1b = internal.y5_HIF_1b_init;
    internal.initial_y6_HIF_1_Complex = internal.y6_HIF_1_Complex_init;
    internal.initial_y7_NF_KB = internal.y7_NF_KB_init;
    internal.initial_y8_STAT3 = internal.y8_STAT3_init;
    internal.initial_y9_HIF_1a_mRNA = internal.y9_HIF_1a_mRNA_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const y1_IL_15 = state[0];
    const y2_Akt = state[1];
    const y3_mTOR = state[2];
    const y4_HIF_1a = state[3];
    const y5_HIF_1b = state[4];
    const y6_HIF_1_Complex = state[5];
    const y7_NF_KB = state[6];
    const y8_STAT3 = state[7];
    const y9_HIF_1a_mRNA = state[8];
    const y10_HIF_1a_aOH = state[9];
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.a1) - 1 * internal.compartment * internal.d1 * y1_IL_15;
    dstatedt[9] = 0 + 1 * internal.compartment * (internal.k10 * internal.K_O2 * internal.phi * y4_HIF_1a * (1 - internal.rho6 * internal.D) / (internal.xi4 + y4_HIF_1a)) - 1 * internal.compartment * internal.k11 * y10_HIF_1a_aOH - 1 * internal.compartment * (internal.k12 * internal.K_O2 * y10_HIF_1a_aOH * (internal.delta * y6_HIF_1_Complex + internal.a11) / (internal.xi10 + y10_HIF_1a_aOH)) - 1 * internal.compartment * internal.d10 * y10_HIF_1a_aOH;
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.a2) + 1 * internal.compartment * (internal.k1 * y1_IL_15) + 1 * internal.compartment * (internal.kS * Math.pow((y8_STAT3), (internal.n2)) / (Math.pow((internal.xi28), (internal.n2)) + Math.pow((y8_STAT3), (internal.n2)))) - 1 * internal.compartment * internal.d2 * y2_Akt;
    dstatedt[2] = 0 + 1 * internal.compartment * ((internal.a3 + internal.k2 * y2_Akt) * internal.alpha1 * (1 - internal.R) / (internal.alpha2 * y6_HIF_1_Complex)) - 1 * internal.compartment * internal.d3 * y3_mTOR;
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.kalpha * y9_HIF_1a_mRNA) - 1 * internal.compartment * internal.d4 * y4_HIF_1a - 1 * internal.compartment * internal.k4 * y4_HIF_1a * y5_HIF_1b + 1 * internal.compartment * internal.k5 * y6_HIF_1_Complex - 1 * internal.compartment * (internal.k13 * internal.K_O2 * y4_HIF_1a * (internal.delta * y6_HIF_1_Complex + internal.a11) * (1 - internal.rho6 * internal.D) / (internal.xi44 + y4_HIF_1a)) - 1 * internal.compartment * (internal.k10 * internal.K_O2 * internal.phi * y4_HIF_1a * (1 - internal.rho6 * internal.D) / (internal.xi4 + y4_HIF_1a)) + 1 * internal.compartment * internal.k11 * y10_HIF_1a_aOH;
    dstatedt[4] = 0 - 1 * internal.compartment * internal.k4 * y4_HIF_1a * y5_HIF_1b + 1 * internal.compartment * internal.k5 * y6_HIF_1_Complex + 1 * internal.compartment * (internal.a5) - 1 * internal.compartment * internal.d5 * y5_HIF_1b;
    dstatedt[5] = 0 + 1 * internal.compartment * internal.k4 * y4_HIF_1a * y5_HIF_1b - 1 * internal.compartment * internal.k5 * y6_HIF_1_Complex - 1 * internal.compartment * internal.d6 * y6_HIF_1_Complex;
    dstatedt[6] = 0 + 1 * internal.compartment * (internal.a7) - 1 * internal.compartment * internal.d7 * y7_NF_KB + 1 * internal.compartment * (internal.k7 * y1_IL_15) + 1 * internal.compartment * (internal.k15 * y3_mTOR) + 1 * internal.compartment * (internal.k14 * y6_HIF_1_Complex);
    dstatedt[8] = 0 + 1 * internal.compartment * (internal.a9) - 1 * internal.compartment * internal.d9 * y9_HIF_1a_mRNA + 1 * internal.compartment * (internal.k9 * y7_NF_KB) + 1 * internal.compartment * (internal.k3 * y8_STAT3);
    dstatedt[7] = 0 - 1 * internal.compartment * internal.d8 * y8_STAT3 + 1 * internal.compartment * ((internal.a8 + internal.k8 * y3_mTOR + internal.k6 * (1 - internal.rho4 * internal.D) * y1_IL_15) * (1 - internal.rho3 * internal.S3));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "y1_IL_15", "y2_Akt", "y3_mTOR", "y4_HIF_1a", "y5_HIF_1b", "y6_HIF_1_Complex", "y7_NF_KB", "y8_STAT3", "y9_HIF_1a_mRNA", "y10_HIF_1a_aOH"];
    this.metadata.internalOrder = {a1: null, a11: null, a2: null, a3: null, a5: null, a7: null, a8: null, a9: null, alpha1: null, alpha2: null, compartment: null, D: null, d1: null, d10: null, d2: null, d3: null, d4: null, d5: null, d6: null, d7: null, d8: null, d9: null, delta: null, initial_y1_IL_15: null, initial_y10_HIF_1a_aOH: null, initial_y2_Akt: null, initial_y3_mTOR: null, initial_y4_HIF_1a: null, initial_y5_HIF_1b: null, initial_y6_HIF_1_Complex: null, initial_y7_NF_KB: null, initial_y8_STAT3: null, initial_y9_HIF_1a_mRNA: null, K_O2: null, k1: null, k10: null, k11: null, k12: null, k13: null, k14: null, k15: null, k2: null, k3: null, k4: null, k5: null, k6: null, k7: null, k8: null, k9: null, kalpha: null, kS: null, Metabolite_0: null, Metabolite_3: null, Metabolite_5: null, Metabolite_9: null, n2: null, phi: null, R: null, rho3: null, rho4: null, rho6: null, S3: null, xi10: null, xi28: null, xi4: null, xi44: null, y1_IL_15_init: null, y10_HIF_1a_aOH_init: null, y2_Akt_init: null, y3_mTOR_init: null, y4_HIF_1a_init: null, y5_HIF_1b_init: null, y6_HIF_1_Complex_init: null, y7_NF_KB_init: null, y8_STAT3_init: null, y9_HIF_1a_mRNA_init: null};
    this.metadata.variableOrder = {y1_IL_15: null, y2_Akt: null, y3_mTOR: null, y4_HIF_1a: null, y5_HIF_1b: null, y6_HIF_1_Complex: null, y7_NF_KB: null, y8_STAT3: null, y9_HIF_1a_mRNA: null, y10_HIF_1a_aOH: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
