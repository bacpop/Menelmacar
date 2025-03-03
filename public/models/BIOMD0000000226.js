export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.c2 = 1;
    internal.default1 = 1;
    internal.k3 = 2.5000000000000002e-06;
    internal.s121 = 0;
    internal.s122 = 0;
    internal.s124 = 0;
    internal.s126 = 0;
    internal.s129 = 0;
    internal.s131 = 0;
    internal.s134 = 0;
    internal.s150 = 0;
    internal.s153 = 0;
    internal.s154 = 0;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(14).fill(0);
    state[0] = internal.initial_s125;
    state[1] = internal.initial_s127;
    state[2] = internal.initial_s128;
    state[3] = internal.initial_s130;
    state[4] = internal.initial_s132;
    state[5] = internal.initial_s133;
    state[6] = internal.initial_s135;
    state[7] = internal.initial_s139;
    state[8] = internal.initial_s152;
    state[9] = internal.initial_s159;
    state[10] = internal.initial_s160;
    state[11] = internal.initial_s161;
    state[12] = internal.initial_s164;
    state[13] = internal.initial_s167;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["k1", "k10", "k11", "k12", "k16", "k17", "k18", "k19", "k2", "k20", "k21", "k22", "k26", "k27", "k4", "k5", "k6", "k7", "k8", "k9", "kf13", "kf14", "kf15", "kf23", "kf28", "kr13", "kr14", "kr15", "kr23", "kr28", "s125_init", "s127_init", "s128_init", "s130_init", "s132_init", "s133_init", "s135_init", "s139_init", "s152_init", "s159_init", "s160_init", "s161_init", "s164_init", "s167_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "k1", internal, 0.0025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11", internal, 0.000125, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k12", internal, 2.0000000000000002e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k16", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k17", internal, 0.00040000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k18", internal, 0.00029999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k19", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.000125, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k20", internal, 4.9999999999999998e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k21", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k22", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k26", internal, 4.9999999999999998e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k27", internal, 0.00040000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 0.0015, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 0.000125, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf13", internal, 18.399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf14", internal, 18.399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf15", internal, 0.0025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf23", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf28", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kr13", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kr14", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kr15", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kr23", internal, 0.00050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kr28", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s125_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s127_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s128_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s130_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s132_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s133_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s135_init", internal, 0.059999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s139_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s152_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s159_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s160_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s161_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s164_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s167_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_s125 = internal.s125_init;
    internal.initial_s127 = internal.s127_init;
    internal.initial_s128 = internal.s128_init;
    internal.initial_s130 = internal.s130_init;
    internal.initial_s132 = internal.s132_init;
    internal.initial_s133 = internal.s133_init;
    internal.initial_s135 = internal.s135_init;
    internal.initial_s139 = internal.s139_init;
    internal.initial_s152 = internal.s152_init;
    internal.initial_s159 = internal.s159_init;
    internal.initial_s160 = internal.s160_init;
    internal.initial_s161 = internal.s161_init;
    internal.initial_s164 = internal.s164_init;
    internal.initial_s167 = internal.s167_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const s125 = state[0];
    const s127 = state[1];
    const s128 = state[2];
    const s130 = state[3];
    const s132 = state[4];
    const s133 = state[5];
    const s135 = state[6];
    const s139 = state[7];
    const s152 = state[8];
    const s159 = state[9];
    const s160 = state[10];
    const s161 = state[11];
    const s164 = state[12];
    const s167 = state[13];
    dstatedt[0] = 0 + 1 * internal.k26 * s164 - 1 * internal.k27 * s125 - 1 * internal.k22 * s125 + 1 * internal.k22 * s125;
    dstatedt[1] = 0 + 1 * internal.k19 + internal.k20 * s164 - 1 * internal.k16 * s127 + 1 * internal.k16 * s127 - 1 * internal.k17 * s127;
    dstatedt[2] = 0 + 1 * internal.k16 * s127 - 1 * internal.k18 * s128;
    dstatedt[3] = 0 - 1 * internal.k11 * s130 + 1 * internal.k5 * s132 + internal.k4 * s132 * s128;
    dstatedt[4] = 0 + 1 * internal.k1 * s133 - 1 * internal.k6 * s132 + 1 * internal.k8 * s139 - 1 * internal.k9 * s132 * s135 + 1 * internal.k10 * s152 - 1 * internal.k5 * s132 + internal.k4 * s132 * s128 - 1 * internal.k7 * s132 * s160;
    dstatedt[5] = 0 - 1 * internal.k1 * s133 - 1 * internal.k2 * s133 + 1 * internal.k3;
    dstatedt[6] = 0 - 1 * internal.k12 * s135 - 1 * internal.k9 * s132 * s135 + 1 * internal.kf13 * s161 * s160 - internal.kr13 * s135 + 1 * internal.kf28 * s159 - internal.kr28 * s135;
    dstatedt[7] = 0 - 1 * internal.k8 * s139 + 1 * internal.k7 * s132 * s160;
    dstatedt[8] = 0 + 1 * internal.k9 * s132 * s135 - 1 * internal.k10 * s152;
    dstatedt[9] = 0 - 5 * internal.kf28 * s159 - internal.kr28 * s135 + 1 * internal.kf14 * s164 * s167 - internal.kr14 * s159;
    dstatedt[10] = 0 - 1 * internal.k21 * s160 + 1 * internal.k22 * s125 - 1 * internal.kf13 * s161 * s160 - internal.kr13 * s135 - 1 * internal.k7 * s132 * s160 - 1 * internal.kf23 * s160 - internal.kr23 * s167;
    dstatedt[11] = 0 + 1 * internal.k12 * s135 + 1 * internal.k10 * s152 - 1 * internal.kf13 * s161 * s160 - internal.kr13 * s135 - 1 * internal.kf15 * s161 - internal.kr15 * s164;
    dstatedt[12] = 0 + 5 * internal.kf15 * s161 - internal.kr15 * s164 - 1 * internal.kf14 * s164 * s167 - internal.kr14 * s159;
    dstatedt[13] = 0 - 1 * internal.kf14 * s164 * s167 - internal.kr14 * s159 + 5 * internal.kf23 * s160 - internal.kr23 * s167;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "s125", "s127", "s128", "s130", "s132", "s133", "s135", "s139", "s152", "s159", "s160", "s161", "s164", "s167"];
    this.metadata.internalOrder = {c2: null, default1: null, initial_s125: null, initial_s127: null, initial_s128: null, initial_s130: null, initial_s132: null, initial_s133: null, initial_s135: null, initial_s139: null, initial_s152: null, initial_s159: null, initial_s160: null, initial_s161: null, initial_s164: null, initial_s167: null, k1: null, k10: null, k11: null, k12: null, k16: null, k17: null, k18: null, k19: null, k2: null, k20: null, k21: null, k22: null, k26: null, k27: null, k3: null, k4: null, k5: null, k6: null, k7: null, k8: null, k9: null, kf13: null, kf14: null, kf15: null, kf23: null, kf28: null, kr13: null, kr14: null, kr15: null, kr23: null, kr28: null, s121: null, s122: null, s124: null, s125_init: null, s126: null, s127_init: null, s128_init: null, s129: null, s130_init: null, s131: null, s132_init: null, s133_init: null, s134: null, s135_init: null, s139_init: null, s150: null, s152_init: null, s153: null, s154: null, s159_init: null, s160_init: null, s161_init: null, s164_init: null, s167_init: null};
    this.metadata.variableOrder = {s125: null, s127: null, s128: null, s130: null, s132: null, s133: null, s135: null, s139: null, s152: null, s159: null, s160: null, s161: null, s164: null, s167: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
