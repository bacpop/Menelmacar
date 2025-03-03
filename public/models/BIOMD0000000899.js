export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.default1 = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(12).fill(0);
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
    state[10] = internal.initial_s13;
    state[11] = internal.initial_s16;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["k1", "k2", "k3", "k4", "k5", "k6", "k7", "k8", "k9", "kcatGAP", "kcatGEF", "KmGAPGDI", "KmGAPRho", "KmGEFGDI", "KmGEFRho", "s1_init", "s10_init", "s13_init", "s16_init", "s2_init", "s3_init", "s4_init", "s5_init", "s6_init", "s7_init", "s8_init", "s9_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "k1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 28.199999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 0.17999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcatGAP", internal, 95.900000000000006, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcatGEF", internal, 5.6399999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KmGAPGDI", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KmGAPRho", internal, 4.4800000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KmGEFGDI", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KmGEFRho", internal, 24.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s1_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s10_init", internal, 1.3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s13_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s16_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s3_init", internal, 0.31, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s4_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s5_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s6_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s7_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s8_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s9_init", internal, 1, -Infinity, Infinity, false);
    internal.initial_s1 = internal.s1_init;
    internal.initial_s10 = internal.s10_init;
    internal.initial_s13 = internal.s13_init;
    internal.initial_s16 = internal.s16_init;
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
    const s3 = state[2];
    const s4 = state[3];
    const s5 = state[4];
    const s6 = state[5];
    const s7 = state[6];
    const s8 = state[7];
    const s9 = state[8];
    const s10 = state[9];
    const s13 = state[10];
    const s16 = state[11];
    dstatedt[7] = 0;
    dstatedt[0] = 0 - 1 * internal.default1 * (s1 * internal.default1 * internal.k3 / internal.default1);
    dstatedt[9] = 0 + 1 * internal.default1 * ((internal.k4 * s5 * s7 * internal.default1 - internal.k5 * s10 * internal.default1) / internal.default1);
    dstatedt[10] = 0 + 1 * internal.default1 * ((internal.k6 * s6 * s7 * internal.default1 - internal.k7 * s13) / internal.default1);
    dstatedt[11] = 0 + 1 * internal.default1 * ((internal.k8 * s6 * s9 * internal.default1 - internal.k9 * s16) / internal.default1);
    dstatedt[1] = 0 + 1 * internal.default1 * (s1 * internal.default1 * internal.k3 / internal.default1);
    dstatedt[2] = 0 - 1 * internal.default1 * (s1 * internal.default1 * s3 * internal.default1 * internal.k1 / internal.default1) + 1 * internal.default1 * (s4 * internal.k2 / internal.default1);
    dstatedt[3] = 0 + 1 * internal.default1 * (s1 * internal.default1 * s3 * internal.default1 * internal.k1 / internal.default1) - 1 * internal.default1 * (s4 * internal.k2 / internal.default1);
    dstatedt[4] = 0 - 1 * internal.default1 * (internal.kcatGEF * s5 * s4 / (internal.KmGEFRho * (1 + s7 * internal.default1 / internal.KmGEFGDI) + s5 * (1 + s7 * internal.default1 / internal.KmGEFGDI)) / internal.default1) + 1 * internal.default1 * (internal.kcatGAP * s6 * s8 * internal.default1 / (internal.KmGAPRho * (1 + s7 * internal.default1 / internal.KmGAPGDI) + s6 * (1 + s7 * internal.default1 / internal.KmGAPGDI)) / internal.default1) - 1 * internal.default1 * ((internal.k4 * s5 * s7 * internal.default1 - internal.k5 * s10 * internal.default1) / internal.default1);
    dstatedt[5] = 0 + 1 * internal.default1 * (internal.kcatGEF * s5 * s4 / (internal.KmGEFRho * (1 + s7 * internal.default1 / internal.KmGEFGDI) + s5 * (1 + s7 * internal.default1 / internal.KmGEFGDI)) / internal.default1) - 1 * internal.default1 * (internal.kcatGAP * s6 * s8 * internal.default1 / (internal.KmGAPRho * (1 + s7 * internal.default1 / internal.KmGAPGDI) + s6 * (1 + s7 * internal.default1 / internal.KmGAPGDI)) / internal.default1) - 1 * internal.default1 * ((internal.k6 * s6 * s7 * internal.default1 - internal.k7 * s13) / internal.default1) - 1 * internal.default1 * ((internal.k8 * s6 * s9 * internal.default1 - internal.k9 * s16) / internal.default1);
    dstatedt[6] = 0 - 1 * internal.default1 * ((internal.k4 * s5 * s7 * internal.default1 - internal.k5 * s10 * internal.default1) / internal.default1) - 1 * internal.default1 * ((internal.k6 * s6 * s7 * internal.default1 - internal.k7 * s13) / internal.default1);
    dstatedt[8] = 0 - 1 * internal.default1 * ((internal.k8 * s6 * s9 * internal.default1 - internal.k9 * s16) / internal.default1);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s13", "s16"];
    this.metadata.internalOrder = {default1: null, initial_s1: null, initial_s10: null, initial_s13: null, initial_s16: null, initial_s2: null, initial_s3: null, initial_s4: null, initial_s5: null, initial_s6: null, initial_s7: null, initial_s8: null, initial_s9: null, k1: null, k2: null, k3: null, k4: null, k5: null, k6: null, k7: null, k8: null, k9: null, kcatGAP: null, kcatGEF: null, KmGAPGDI: null, KmGAPRho: null, KmGEFGDI: null, KmGEFRho: null, s1_init: null, s10_init: null, s13_init: null, s16_init: null, s2_init: null, s3_init: null, s4_init: null, s5_init: null, s6_init: null, s7_init: null, s8_init: null, s9_init: null};
    this.metadata.variableOrder = {s1: null, s2: null, s3: null, s4: null, s5: null, s6: null, s7: null, s8: null, s9: null, s10: null, s13: null, s16: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
