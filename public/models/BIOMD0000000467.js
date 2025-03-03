export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.c1 = 1;
    internal.default1 = 1;
    internal.s3 = 117.2;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(19).fill(0);
    state[0] = internal.initial_s27;
    state[1] = internal.initial_s45;
    state[2] = internal.initial_s47;
    state[3] = internal.initial_s48;
    state[4] = internal.initial_s50;
    state[5] = internal.initial_s51;
    state[6] = internal.initial_s52;
    state[7] = internal.initial_s57;
    state[8] = internal.initial_s58;
    state[9] = internal.initial_s60;
    state[10] = internal.initial_s61;
    state[11] = internal.initial_s62;
    state[12] = internal.initial_s63;
    state[13] = internal.initial_s64;
    state[14] = internal.initial_s65;
    state[15] = internal.initial_s66;
    state[16] = internal.initial_s116;
    state[17] = internal.initial_s117;
    state[18] = internal.initial_s118;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["k1", "k10", "k1r", "k2", "k2r", "k3", "k3r", "k4", "k5", "k6", "k7", "kCaM", "kD", "Km10", "Km10r", "kp", "kpCaM", "s116_init", "s117_init", "s118_init", "s27_init", "s45_init", "s47_init", "s48_init", "s50_init", "s51_init", "s52_init", "s57_init", "s58_init", "s60_init", "s61_init", "s62_init", "s63_init", "s64_init", "s65_init", "s66_init", "V10r"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "k1", internal, 0.0040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1r", internal, 10.300000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2r", internal, 1152, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.00014999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3r", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0.014999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 115.2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 0.002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kCaM", internal, 17, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kD", internal, 9.4500000000000007e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km10", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km10r", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kp", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kpCaM", internal, 17, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s116_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s117_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s118_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s27_init", internal, 1.7230000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s45_init", internal, 0.041500000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s47_init", internal, 2.827, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s48_init", internal, 347.51999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s50_init", internal, 2.1200000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s51_init", internal, 34.979999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s52_init", internal, 7635.3599999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s57_init", internal, 199987, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s58_init", internal, 1.0369999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s60_init", internal, 0.0088999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s61_init", internal, 10.98, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s62_init", internal, 0.106, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s63_init", internal, 500000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s64_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s65_init", internal, 0.64300000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s66_init", internal, 0.083000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V10r", internal, 4, -Infinity, Infinity, false);
    internal.initial_s116 = internal.s116_init;
    internal.initial_s117 = internal.s117_init;
    internal.initial_s118 = internal.s118_init;
    internal.initial_s27 = internal.s27_init;
    internal.initial_s45 = internal.s45_init;
    internal.initial_s47 = internal.s47_init;
    internal.initial_s48 = internal.s48_init;
    internal.initial_s50 = internal.s50_init;
    internal.initial_s51 = internal.s51_init;
    internal.initial_s52 = internal.s52_init;
    internal.initial_s57 = internal.s57_init;
    internal.initial_s58 = internal.s58_init;
    internal.initial_s60 = internal.s60_init;
    internal.initial_s61 = internal.s61_init;
    internal.initial_s62 = internal.s62_init;
    internal.initial_s63 = internal.s63_init;
    internal.initial_s64 = internal.s64_init;
    internal.initial_s65 = internal.s65_init;
    internal.initial_s66 = internal.s66_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const s27 = state[0];
    const s45 = state[1];
    const s47 = state[2];
    const s48 = state[3];
    const s50 = state[4];
    const s51 = state[5];
    const s52 = state[6];
    const s57 = state[7];
    const s58 = state[8];
    const s60 = state[9];
    const s61 = state[10];
    const s62 = state[11];
    const s65 = state[14];
    const s66 = state[15];
    dstatedt[0] = 0;
    dstatedt[16] = 0 + 1 * internal.kD * s51;
    dstatedt[17] = 0 + 1 * internal.kD * s45 + 1 * internal.kD * s50;
    dstatedt[18] = 0 + 1 * internal.kD * s66 + 1 * internal.kD * s65;
    dstatedt[1] = 0 + 1 * internal.k4 * s47 * s51 - 1 * internal.k5 * s45 - internal.k2 * internal.s3 * s50 - 1 * internal.k6 * s45 * s57 - 1 * internal.kD * s45;
    dstatedt[2] = 0 - 1 * internal.k4 * s47 * s51 + 1 * internal.k2 * internal.s3 * s48 - internal.k2r * s47 + 1 * internal.kD * s45 + 1 * internal.kD * s58 + 1 * internal.kD * s60;
    dstatedt[3] = 0 - 1 * internal.k3 * s51 * s48 - internal.k3r * s50 + 1 * internal.k1 * internal.s3 * s52 - internal.k1r * s48 - 1 * internal.k2 * internal.s3 * s48 - internal.k2r * s47 + 1 * internal.k3r * s62 - internal.k3 * s65 * s48 + 1 * internal.kD * s50 + 1 * internal.kD * s61 + 1 * internal.kD * s62;
    dstatedt[4] = 0 + 1 * internal.k3 * s51 * s48 - internal.k3r * s50 + 1 * internal.k5 * s45 - internal.k2 * internal.s3 * s50 + 1 * internal.k7 * s61 - 1 * internal.kD * s50;
    dstatedt[5] = 0 - 1 * internal.k4 * s47 * s51 - 1 * internal.k3 * s51 * s48 - internal.k3r * s50 + 1 * internal.k7 * s66 - 1 * internal.kD * s51;
    dstatedt[6] = 0 - 1 * internal.k1 * internal.s3 * s52 - internal.k1r * s48;
    dstatedt[7] = 0 - 1 * internal.k6 * s45 * s57 + 1 * internal.k7 * s61 + 1 * internal.k7 * s66 + 1 * internal.kD * s66 + 1 * internal.kD * s65 + 1 * internal.kD * s61 + 1 * internal.kD * s62 + 1 * internal.kD * s58 + 1 * internal.kD * s60;
    dstatedt[8] = 0 + 1 * internal.k6 * s45 * s57 - 1 * internal.k5 * s58 - internal.k2 * internal.s3 * s61 - 1 * internal.k10 * s58 * s27 / (s58 + internal.Km10) - internal.V10r * s60 / (s60 + internal.Km10r) - 1 * internal.kD * s58;
    dstatedt[9] = 0 - 1 * internal.k5 * s60 - internal.k2 * internal.s3 * s62 + 1 * internal.k10 * s58 * s27 / (s58 + internal.Km10) - internal.V10r * s60 / (s60 + internal.Km10r) - 1 * internal.kD * s60;
    dstatedt[10] = 0 + 1 * internal.k5 * s58 - internal.k2 * internal.s3 * s61 - 1 * internal.k7 * s61 - 1 * internal.k10 * s61 * s27 / (s61 + internal.Km10) - internal.V10r * s62 / (s62 + internal.Km10r) - 1 * internal.kD * s61;
    dstatedt[11] = 0 + 1 * internal.k5 * s60 - internal.k2 * internal.s3 * s62 + 1 * internal.k10 * s61 * s27 / (s61 + internal.Km10) - internal.V10r * s62 / (s62 + internal.Km10r) - 1 * internal.k3r * s62 - internal.k3 * s65 * s48 - 1 * internal.kD * s62;
    dstatedt[12] = 0 - 1 * internal.kCaM * (s45 + s58) + internal.kp * (s62 + s65) + internal.kpCaM * s60;
    dstatedt[13] = 0 + 1 * internal.kCaM * (s45 + s58) + internal.kp * (s62 + s65) + internal.kpCaM * s60;
    dstatedt[14] = 0 - 1 * internal.V10r * s65 / (s65 + internal.Km10r) + 1 * internal.k3r * s62 - internal.k3 * s65 * s48 - 1 * internal.kD * s65;
    dstatedt[15] = 0 + 1 * internal.V10r * s65 / (s65 + internal.Km10r) - 1 * internal.k7 * s66 - 1 * internal.kD * s66;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "s27", "s45", "s47", "s48", "s50", "s51", "s52", "s57", "s58", "s60", "s61", "s62", "s63", "s64", "s65", "s66", "s116", "s117", "s118"];
    this.metadata.internalOrder = {c1: null, default1: null, initial_s116: null, initial_s117: null, initial_s118: null, initial_s27: null, initial_s45: null, initial_s47: null, initial_s48: null, initial_s50: null, initial_s51: null, initial_s52: null, initial_s57: null, initial_s58: null, initial_s60: null, initial_s61: null, initial_s62: null, initial_s63: null, initial_s64: null, initial_s65: null, initial_s66: null, k1: null, k10: null, k1r: null, k2: null, k2r: null, k3: null, k3r: null, k4: null, k5: null, k6: null, k7: null, kCaM: null, kD: null, Km10: null, Km10r: null, kp: null, kpCaM: null, s116_init: null, s117_init: null, s118_init: null, s27_init: null, s3: null, s45_init: null, s47_init: null, s48_init: null, s50_init: null, s51_init: null, s52_init: null, s57_init: null, s58_init: null, s60_init: null, s61_init: null, s62_init: null, s63_init: null, s64_init: null, s65_init: null, s66_init: null, V10r: null};
    this.metadata.variableOrder = {s27: null, s45: null, s47: null, s48: null, s50: null, s51: null, s52: null, s57: null, s58: null, s60: null, s61: null, s62: null, s63: null, s64: null, s65: null, s66: null, s116: null, s117: null, s118: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
