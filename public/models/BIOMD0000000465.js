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
    var state = Array(16).fill(0);
    state[0] = internal.initial_s14;
    state[1] = internal.initial_s15;
    state[2] = internal.initial_s16;
    state[3] = internal.initial_s17;
    state[4] = internal.initial_s18;
    state[5] = internal.initial_s19;
    state[6] = internal.initial_s20;
    state[7] = internal.initial_s21;
    state[8] = internal.initial_s22;
    state[9] = internal.initial_s23;
    state[10] = internal.initial_s24;
    state[11] = internal.initial_s25;
    state[12] = internal.initial_s26;
    state[13] = internal.initial_s27;
    state[14] = internal.initial_s28;
    state[15] = internal.initial_s119;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["k10", "k11", "k2", "k3", "k4", "k5", "k6", "k7", "k8", "k9", "Km10", "Km11", "Km2", "Km3", "Km7", "Km8", "Km9", "kr4", "normal", "s119_init", "s14_init", "s15_init", "s16_init", "s17_init", "s18_init", "s19_init", "s20_init", "s21_init", "s22_init", "s23_init", "s24_init", "s25_init", "s26_init", "s27_init", "s28_init", "tf", "unimol", "unit", "unity"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "k10", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11", internal, 0.16300000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 7.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0.044999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 0.00069999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 0.97999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 0.036999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 0.040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km10", internal, 80000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km11", internal, 48000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km2", internal, 6170, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km3", internal, 80.900000000000006, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km7", internal, 8800, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km8", internal, 80000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km9", internal, 48000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kr4", internal, 0.088999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "normal", internal, 0.90700000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s119_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s14_init", internal, 0.246, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s15_init", internal, 150, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s16_init", internal, 167.61600000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s17_init", internal, 0.34499999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s18_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s19_init", internal, 6967.2709999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s20_init", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s21_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s22_init", internal, 99.969999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s23_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s24_init", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s25_init", internal, 999.75400000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s26_init", internal, 1.4570000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s27_init", internal, 1.7230000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s28_init", internal, 29.202999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tf", internal, 15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "unimol", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "unit", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "unity", internal, 1, -Infinity, Infinity, false);
    internal.initial_s119 = internal.s119_init;
    internal.initial_s14 = internal.s14_init;
    internal.initial_s15 = internal.s15_init;
    internal.initial_s16 = internal.s16_init;
    internal.initial_s17 = internal.s17_init;
    internal.initial_s18 = internal.s18_init;
    internal.initial_s19 = internal.s19_init;
    internal.initial_s20 = internal.s20_init;
    internal.initial_s21 = internal.s21_init;
    internal.initial_s22 = internal.s22_init;
    internal.initial_s23 = internal.s23_init;
    internal.initial_s24 = internal.s24_init;
    internal.initial_s25 = internal.s25_init;
    internal.initial_s26 = internal.s26_init;
    internal.initial_s27 = internal.s27_init;
    internal.initial_s28 = internal.s28_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const s14 = state[0];
    const s15 = state[1];
    const s16 = state[2];
    const s17 = state[3];
    const s18 = state[4];
    const s19 = state[5];
    const s20 = state[6];
    const s23 = state[9];
    const s24 = state[10];
    const s25 = state[11];
    const s26 = state[12];
    const s27 = state[13];
    const s28 = state[14];
    dstatedt[15] = 0;
    dstatedt[1] = 0;
    dstatedt[4] = 0;
    dstatedt[10] = 0;
    dstatedt[0] = 0 + 1 * internal.k5 * s17 * s25 - 1 * internal.k6 * s14;
    dstatedt[2] = 0 - 1 * internal.k4 * s17 * s16 - internal.kr4 * s28 + 1 * internal.k11 * s27 * s15 / (internal.Km11 + s27);
    dstatedt[3] = 0 + 1 * internal.k2 * s19 * s20 / (internal.Km2 + s19) - 1 * internal.k3 * s17 * s18 / (internal.Km3 + s17) - 1 * internal.k4 * s17 * s16 - internal.kr4 * s28 + 1 * internal.k11 * s27 * s15 / (internal.Km11 + s27);
    dstatedt[5] = 0 - 1 * internal.k2 * s19 * s20 / (internal.Km2 + s19) + 1 * internal.k3 * s17 * s18 / (internal.Km3 + s17);
    dstatedt[6] = 0 + 1 * Math.exp(internal.unity - Math.pow((s23 / internal.tf), (1.8))) * internal.normal * Math.pow((s23 / internal.unimol), (0.80000000000000004)) * (internal.unity - Math.pow((s23 / internal.tf), (1.8)));
    dstatedt[7] = 0 - 1 * internal.unit;
    dstatedt[8] = 0 - 1 * Math.exp(internal.unity - Math.pow((s23 / internal.tf), (1.8))) * internal.normal * Math.pow((s23 / internal.unimol), (0.80000000000000004)) * (internal.unity - Math.pow((s23 / internal.tf), (1.8)));
    dstatedt[9] = 0 + 1 * internal.unit;
    dstatedt[11] = 0 - 1 * internal.k5 * s17 * s25 + 1 * internal.k6 * s14;
    dstatedt[12] = 0 + 1 * internal.k8 * s28 * s14 / (internal.Km8 + s28) - 1 * internal.k10 * s26 * s24 / (internal.Km10 + s26) - 1 * internal.k7 * s26 * s15 / (internal.Km7 + s26) + 1 * internal.k9 * s27 * s15 / (internal.Km9 + s27);
    dstatedt[13] = 0 + 1 * internal.k10 * s26 * s24 / (internal.Km10 + s26) - 1 * internal.k9 * s27 * s15 / (internal.Km9 + s27) - 1 * internal.k11 * s27 * s15 / (internal.Km11 + s27);
    dstatedt[14] = 0 + 1 * internal.k4 * s17 * s16 - internal.kr4 * s28 - 1 * internal.k8 * s28 * s14 / (internal.Km8 + s28) + 1 * internal.k7 * s26 * s15 / (internal.Km7 + s26);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "s14", "s15", "s16", "s17", "s18", "s19", "s20", "s21", "s22", "s23", "s24", "s25", "s26", "s27", "s28", "s119"];
    this.metadata.internalOrder = {c1: null, default1: null, initial_s119: null, initial_s14: null, initial_s15: null, initial_s16: null, initial_s17: null, initial_s18: null, initial_s19: null, initial_s20: null, initial_s21: null, initial_s22: null, initial_s23: null, initial_s24: null, initial_s25: null, initial_s26: null, initial_s27: null, initial_s28: null, k10: null, k11: null, k2: null, k3: null, k4: null, k5: null, k6: null, k7: null, k8: null, k9: null, Km10: null, Km11: null, Km2: null, Km3: null, Km7: null, Km8: null, Km9: null, kr4: null, normal: null, s119_init: null, s14_init: null, s15_init: null, s16_init: null, s17_init: null, s18_init: null, s19_init: null, s20_init: null, s21_init: null, s22_init: null, s23_init: null, s24_init: null, s25_init: null, s26_init: null, s27_init: null, s28_init: null, tf: null, unimol: null, unit: null, unity: null};
    this.metadata.variableOrder = {s14: null, s15: null, s16: null, s17: null, s18: null, s19: null, s20: null, s21: null, s22: null, s23: null, s24: null, s25: null, s26: null, s27: null, s28: null, s119: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
