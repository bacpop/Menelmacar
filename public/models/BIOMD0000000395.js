export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.c1 = 1;
    internal.c4 = 1;
    internal.c5 = 1;
    internal.default1 = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(23).fill(0);
    state[0] = internal.initial_s9;
    state[1] = internal.initial_s10;
    state[2] = internal.initial_s1;
    state[3] = internal.initial_s75;
    state[4] = internal.initial_s135;
    state[5] = internal.initial_s7;
    state[6] = internal.initial_s21;
    state[7] = internal.initial_s46;
    state[8] = internal.initial_s48;
    state[9] = internal.initial_s69;
    state[10] = internal.initial_s71;
    state[11] = internal.initial_s68;
    state[12] = internal.initial_s70;
    state[13] = internal.initial_s128;
    state[14] = internal.initial_s140;
    state[15] = internal.initial_s148;
    state[16] = internal.initial_s150;
    state[17] = internal.initial_s152;
    state[18] = internal.initial_s157;
    state[19] = internal.initial_s158;
    state[20] = internal.initial_s159;
    state[21] = internal.initial_s160;
    state[22] = internal.initial_s161;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["kass_r15_s21", "kass_r23_s21", "kass_r25", "kass_r26", "kass_r51", "kass_r52", "kass_r54", "kass_r55", "kass_r7", "kass_re24_s157", "kcatn_r14", "kcatn_r53", "kcatp_r14", "kcatp_r53", "kdiss_r15_s21", "kdiss_r23_s21", "kdiss_r25", "kdiss_r26", "kdiss_r51", "kdiss_r52", "kdiss_r54", "kdiss_r7", "kM_r14_s46", "kM_r14_s69", "kM_r53_s70", "s1_init", "s10_init", "s128_init", "s135_init", "s140_init", "s148_init", "s150_init", "s152_init", "s157_init", "s158_init", "s159_init", "s160_init", "s161_init", "s21_init", "s46_init", "s48_init", "s68_init", "s69_init", "s7_init", "s70_init", "s71_init", "s75_init", "s9_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "kass_r15_s21", internal, 1.53, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kass_r23_s21", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kass_r25", internal, 1.27, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kass_r26", internal, 1.3300000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kass_r51", internal, 1.23, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kass_r52", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kass_r54", internal, 1.28, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kass_r55", internal, 1.5600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kass_r7", internal, 1.1299999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kass_re24_s157", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcatn_r14", internal, 1.75, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcatn_r53", internal, 1.6200000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcatp_r14", internal, 1.1459999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcatp_r53", internal, 1.29, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdiss_r15_s21", internal, 0.89000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdiss_r23_s21", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdiss_r25", internal, 0.72999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdiss_r26", internal, 0.60999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdiss_r51", internal, 0.46000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdiss_r52", internal, 1.6699999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdiss_r54", internal, 0.70999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdiss_r7", internal, 1.1220000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kM_r14_s46", internal, 0.215, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kM_r14_s69", internal, 1.03, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kM_r53_s70", internal, 0.79000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s1_init", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s10_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s128_init", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s135_init", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s140_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s148_init", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s150_init", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s152_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s157_init", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s158_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s159_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s160_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s161_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s21_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s46_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s48_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s68_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s69_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s7_init", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s70_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s71_init", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s75_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s9_init", internal, 2, -Infinity, Infinity, false);
    internal.initial_s1 = internal.s1_init;
    internal.initial_s10 = internal.s10_init;
    internal.initial_s128 = internal.s128_init;
    internal.initial_s135 = internal.s135_init;
    internal.initial_s140 = internal.s140_init;
    internal.initial_s148 = internal.s148_init;
    internal.initial_s150 = internal.s150_init;
    internal.initial_s152 = internal.s152_init;
    internal.initial_s157 = internal.s157_init;
    internal.initial_s158 = internal.s158_init;
    internal.initial_s159 = internal.s159_init;
    internal.initial_s160 = internal.s160_init;
    internal.initial_s161 = internal.s161_init;
    internal.initial_s21 = internal.s21_init;
    internal.initial_s46 = internal.s46_init;
    internal.initial_s48 = internal.s48_init;
    internal.initial_s68 = internal.s68_init;
    internal.initial_s69 = internal.s69_init;
    internal.initial_s7 = internal.s7_init;
    internal.initial_s70 = internal.s70_init;
    internal.initial_s71 = internal.s71_init;
    internal.initial_s75 = internal.s75_init;
    internal.initial_s9 = internal.s9_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const s9 = state[0];
    const s10 = state[1];
    const s1 = state[2];
    const s75 = state[3];
    const s135 = state[4];
    const s7 = state[5];
    const s21 = state[6];
    const s46 = state[7];
    const s48 = state[8];
    const s69 = state[9];
    const s71 = state[10];
    const s68 = state[11];
    const s70 = state[12];
    const s128 = state[13];
    const s140 = state[14];
    const s148 = state[15];
    const s150 = state[16];
    const s157 = state[18];
    const s158 = state[19];
    const s159 = state[20];
    const s160 = state[21];
    const s161 = state[22];
    dstatedt[17] = 0;
    dstatedt[18] = 0;
    dstatedt[2] = 0 - 1 * internal.kass_r7 * s7 * s1 - internal.kdiss_r7 * s21;
    dstatedt[1] = 0 + 1 * s21 * (internal.kass_r15_s21 * s46 * s9 - internal.kdiss_r15_s21 * s48 * s10);
    dstatedt[13] = 0 - 1 * internal.kass_r51 * s135 * s128 - internal.kdiss_r51 * s140;
    dstatedt[4] = 0 - 1 * internal.kass_r51 * s135 * s128 - internal.kdiss_r51 * s140;
    dstatedt[14] = 0 - 1 * internal.kass_r52 * s140 - internal.kdiss_r52 * s75 + 1 * internal.kass_r51 * s135 * s128 - internal.kdiss_r51 * s140;
    dstatedt[15] = 0 - 1 * s157 * internal.kass_re24_s157 * s148 * s150;
    dstatedt[16] = 0 - 1 * s157 * internal.kass_re24_s157 * s148 * s150;
    dstatedt[19] = 0 - 1 * internal.kass_r55 * s158 + 1 * internal.kass_r54 * s70 * s71 - internal.kdiss_r54 * s158;
    dstatedt[20] = 0 + 1 * s157 * internal.kass_re24_s157 * s148 * s150 - 1 * s21 * (internal.kass_r23_s21 * s159 - internal.kdiss_r23_s21 * s68 * s160);
    dstatedt[21] = 0 + 1 * s21 * (internal.kass_r23_s21 * s159 - internal.kdiss_r23_s21 * s68 * s160) - 1 * internal.kass_r25 * s160 - internal.kdiss_r25 * s161 * s69;
    dstatedt[22] = 0 - 1 * internal.kass_r26 * s161 - internal.kdiss_r26 * s70 + 1 * internal.kass_r25 * s160 - internal.kdiss_r25 * s161 * s69;
    dstatedt[6] = 0 + 1 * internal.kass_r7 * s7 * s1 - internal.kdiss_r7 * s21;
    dstatedt[7] = 0 + 1 * s21 * ((internal.kcatp_r14 / internal.kM_r14_s69 * s69 - internal.kcatn_r14 / internal.kM_r14_s46 * s46) / (1 + s69 / internal.kM_r14_s69 + s46 / internal.kM_r14_s46)) - 1 * s21 * (internal.kass_r15_s21 * s46 * s9 - internal.kdiss_r15_s21 * s48 * s10);
    dstatedt[8] = 0 + 1 * s21 * (internal.kass_r15_s21 * s46 * s9 - internal.kdiss_r15_s21 * s48 * s10);
    dstatedt[11] = 0 + 1 * s21 * (internal.kass_r23_s21 * s159 - internal.kdiss_r23_s21 * s68 * s160);
    dstatedt[9] = 0 - 1 * s21 * ((internal.kcatp_r14 / internal.kM_r14_s69 * s69 - internal.kcatn_r14 / internal.kM_r14_s46 * s46) / (1 + s69 / internal.kM_r14_s69 + s46 / internal.kM_r14_s46)) + 1 * internal.kass_r25 * s160 - internal.kdiss_r25 * s161 * s69;
    dstatedt[5] = 0 - 1 * internal.kass_r7 * s7 * s1 - internal.kdiss_r7 * s21;
    dstatedt[12] = 0 - 1 * s48 * ((internal.kcatp_r53 / internal.kM_r53_s70 * s70 - internal.kcatn_r53 / internal.kM_r53_s70 * s70) / (1 + s70 / internal.kM_r53_s70 + s70 / internal.kM_r53_s70)) + 1 * s48 * ((internal.kcatp_r53 / internal.kM_r53_s70 * s70 - internal.kcatn_r53 / internal.kM_r53_s70 * s70) / (1 + s70 / internal.kM_r53_s70 + s70 / internal.kM_r53_s70)) - 1 * internal.kass_r54 * s70 * s71 - internal.kdiss_r54 * s158 + 1 * internal.kass_r26 * s161 - internal.kdiss_r26 * s70;
    dstatedt[10] = 0 - 1 * internal.kass_r54 * s70 * s71 - internal.kdiss_r54 * s158;
    dstatedt[3] = 0 + 1 * internal.kass_r52 * s140 - internal.kdiss_r52 * s75 + 1 * internal.kass_r55 * s158;
    dstatedt[0] = 0 - 1 * s21 * (internal.kass_r15_s21 * s46 * s9 - internal.kdiss_r15_s21 * s48 * s10);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "s9", "s10", "s1", "s75", "s135", "s7", "s21", "s46", "s48", "s69", "s71", "s68", "s70", "s128", "s140", "s148", "s150", "s152", "s157", "s158", "s159", "s160", "s161"];
    this.metadata.internalOrder = {c1: null, c4: null, c5: null, default1: null, initial_s1: null, initial_s10: null, initial_s128: null, initial_s135: null, initial_s140: null, initial_s148: null, initial_s150: null, initial_s152: null, initial_s157: null, initial_s158: null, initial_s159: null, initial_s160: null, initial_s161: null, initial_s21: null, initial_s46: null, initial_s48: null, initial_s68: null, initial_s69: null, initial_s7: null, initial_s70: null, initial_s71: null, initial_s75: null, initial_s9: null, kass_r15_s21: null, kass_r23_s21: null, kass_r25: null, kass_r26: null, kass_r51: null, kass_r52: null, kass_r54: null, kass_r55: null, kass_r7: null, kass_re24_s157: null, kcatn_r14: null, kcatn_r53: null, kcatp_r14: null, kcatp_r53: null, kdiss_r15_s21: null, kdiss_r23_s21: null, kdiss_r25: null, kdiss_r26: null, kdiss_r51: null, kdiss_r52: null, kdiss_r54: null, kdiss_r7: null, kM_r14_s46: null, kM_r14_s69: null, kM_r53_s70: null, s1_init: null, s10_init: null, s128_init: null, s135_init: null, s140_init: null, s148_init: null, s150_init: null, s152_init: null, s157_init: null, s158_init: null, s159_init: null, s160_init: null, s161_init: null, s21_init: null, s46_init: null, s48_init: null, s68_init: null, s69_init: null, s7_init: null, s70_init: null, s71_init: null, s75_init: null, s9_init: null};
    this.metadata.variableOrder = {s9: null, s10: null, s1: null, s75: null, s135: null, s7: null, s21: null, s46: null, s48: null, s69: null, s71: null, s68: null, s70: null, s128: null, s140: null, s148: null, s150: null, s152: null, s157: null, s158: null, s159: null, s160: null, s161: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
