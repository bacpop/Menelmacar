export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.c1 = 1;
    internal.default1 = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(17).fill(0);
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
    state[13] = internal.initial_s14;
    state[14] = internal.initial_s15;
    state[15] = internal.initial_s16;
    state[16] = internal.initial_s17;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["k1", "s1_init", "s10_init", "s11_init", "s12_init", "s13_init", "s14_init", "s15_init", "s16_init", "s17_init", "s2_init", "s3_init", "s4_init", "s5_init", "s6_init", "s7_init", "s8_init", "s9_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "k1", internal, 0.37, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s1_init", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s10_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s11_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s12_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s13_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s14_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s15_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s16_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s17_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s4_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s5_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s6_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s7_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s8_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s9_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_s1 = internal.s1_init;
    internal.initial_s10 = internal.s10_init;
    internal.initial_s11 = internal.s11_init;
    internal.initial_s12 = internal.s12_init;
    internal.initial_s13 = internal.s13_init;
    internal.initial_s14 = internal.s14_init;
    internal.initial_s15 = internal.s15_init;
    internal.initial_s16 = internal.s16_init;
    internal.initial_s17 = internal.s17_init;
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
    const s5 = state[4];
    const s6 = state[5];
    const s7 = state[6];
    const s8 = state[7];
    const s9 = state[8];
    const s11 = state[10];
    const s12 = state[11];
    const s13 = state[12];
    const s14 = state[13];
    const s15 = state[14];
    const s16 = state[15];
    const s17 = state[16];
    dstatedt[0] = 0 - 1 * s1 * internal.k1 + 1 * s4 * internal.k1 - 1 * s1 * internal.k1 + 1 * s5 * internal.k1 - 1 * s1 * internal.k1 + 1 * s6 * internal.k1 - 1 * s1 * internal.k1 - 1 * s1 * internal.k1 - 1 * s1 * internal.k1 - 1 * s1 * internal.k1 + 1 * s11 * internal.k1 - 1 * s1 * internal.k1 + 1 * s12 * internal.k1 - 1 * s1 * internal.k1 + 1 * s13 * internal.k1 - 1 * s1 * internal.k1 + 1 * s14 * internal.k1 - 1 * s1 * internal.k1 - 1 * s1 * internal.k1 + 1 * s16 * internal.k1 - 1 * s1 * internal.k1 + 1 * s17 * internal.k1 + 1 * internal.k1 * s7;
    dstatedt[9] = 0 + 1 * s9 * internal.k1 + 1 * s8 * internal.k1 + 1 * internal.k1 * s15;
    dstatedt[10] = 0 + 1 * s1 * internal.k1 - 1 * s11 * internal.k1;
    dstatedt[11] = 0 + 1 * s1 * internal.k1 - 1 * s12 * internal.k1;
    dstatedt[12] = 0 + 1 * s1 * internal.k1 - 1 * s13 * internal.k1;
    dstatedt[13] = 0 + 1 * s1 * internal.k1 - 1 * s14 * internal.k1;
    dstatedt[14] = 0 + 1 * s1 * internal.k1 - 1 * internal.k1 * s15;
    dstatedt[15] = 0 + 1 * s1 * internal.k1 - 1 * s16 * internal.k1;
    dstatedt[16] = 0 + 1 * s1 * internal.k1 - 1 * s17 * internal.k1;
    dstatedt[1] = 0 + 1 * s1 * internal.k1 - 1 * s2 * internal.k1 - 1 * s2 * internal.k1;
    dstatedt[2] = 0 + 1 * s2 * internal.k1 - 1 * s3 * internal.k1;
    dstatedt[3] = 0 + 1 * s3 * internal.k1 - 1 * s4 * internal.k1 + 1 * s2 * internal.k1;
    dstatedt[4] = 0 + 1 * s1 * internal.k1 - 1 * s5 * internal.k1;
    dstatedt[5] = 0 + 1 * s1 * internal.k1 - 1 * s6 * internal.k1;
    dstatedt[6] = 0 + 1 * s1 * internal.k1 - 1 * internal.k1 * s7;
    dstatedt[7] = 0 + 1 * s1 * internal.k1 - 1 * s8 * internal.k1;
    dstatedt[8] = 0 + 1 * s1 * internal.k1 - 1 * s9 * internal.k1;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11", "s12", "s13", "s14", "s15", "s16", "s17"];
    this.metadata.internalOrder = {c1: null, default1: null, initial_s1: null, initial_s10: null, initial_s11: null, initial_s12: null, initial_s13: null, initial_s14: null, initial_s15: null, initial_s16: null, initial_s17: null, initial_s2: null, initial_s3: null, initial_s4: null, initial_s5: null, initial_s6: null, initial_s7: null, initial_s8: null, initial_s9: null, k1: null, s1_init: null, s10_init: null, s11_init: null, s12_init: null, s13_init: null, s14_init: null, s15_init: null, s16_init: null, s17_init: null, s2_init: null, s3_init: null, s4_init: null, s5_init: null, s6_init: null, s7_init: null, s8_init: null, s9_init: null};
    this.metadata.variableOrder = {s1: null, s2: null, s3: null, s4: null, s5: null, s6: null, s7: null, s8: null, s9: null, s10: null, s11: null, s12: null, s13: null, s14: null, s15: null, s16: null, s17: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
