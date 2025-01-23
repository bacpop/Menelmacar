export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell_1 = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(11).fill(0);
    state[0] = internal.initial_Y3_1;
    state[1] = internal.initial_Y4_1;
    state[2] = internal.initial_Y11_1;
    state[3] = internal.initial_Y2_1;
    state[4] = internal.initial_Y1_1;
    state[5] = internal.initial_Y5_1;
    state[6] = internal.initial_Y6_1;
    state[7] = internal.initial_Y7_1;
    state[8] = internal.initial_Y8_1;
    state[9] = internal.initial_Y10_1;
    state[10] = internal.initial_Y9_1;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["k1_1", "K10_1", "k17_1", "k18_1", "k19_1", "k1p_1", "k1pp_1", "k2_1", "k20_1", "k21_1", "k22_1", "k23_1", "k24_1", "k25_1", "k25p_1", "k26_1", "k26p_1", "k27_1", "k28_1", "k29_1", "k3_1", "k3p_1", "k4_1", "k5_1", "k6_1", "k7_1", "k8_1", "k9_1", "kminus1_1", "kminus2_1", "kminus4_1", "kminus6_1", "Y1_1_init", "Y10_1_init", "Y11_1_init", "Y2_1_init", "Y3_1_init", "Y4_1_init", "Y5_1_init", "Y6_1_init", "Y7_1_init", "Y8_1_init", "Y9_1_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "k1_1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K10_1", internal, 0.035000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k17_1", internal, 3.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k18_1", internal, 1.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k19_1", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1p_1", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1pp_1", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2_1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k20_1", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k21_1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k22_1", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k23_1", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k24_1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k25_1", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k25p_1", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k26_1", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k26p_1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k27_1", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k28_1", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k29_1", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3_1", internal, 1.4199999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3p_1", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4_1", internal, 9.9999999999999995e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5_1", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6_1", internal, 0.017999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7_1", internal, 1.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8_1", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9_1", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kminus1_1", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kminus2_1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kminus4_1", internal, 0.016, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kminus6_1", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Y1_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Y10_1_init", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Y11_1_init", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Y2_1_init", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Y3_1_init", internal, 1.95, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Y4_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Y5_1_init", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Y6_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Y7_1_init", internal, 15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Y8_1_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Y9_1_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_Y1_1 = internal.Y1_1_init;
    internal.initial_Y10_1 = internal.Y10_1_init;
    internal.initial_Y11_1 = internal.Y11_1_init;
    internal.initial_Y2_1 = internal.Y2_1_init;
    internal.initial_Y3_1 = internal.Y3_1_init;
    internal.initial_Y4_1 = internal.Y4_1_init;
    internal.initial_Y5_1 = internal.Y5_1_init;
    internal.initial_Y6_1 = internal.Y6_1_init;
    internal.initial_Y7_1 = internal.Y7_1_init;
    internal.initial_Y8_1 = internal.Y8_1_init;
    internal.initial_Y9_1 = internal.Y9_1_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Y3_1 = state[0];
    const Y4_1 = state[1];
    const Y11_1 = state[2];
    const Y2_1 = state[3];
    const Y1_1 = state[4];
    const Y5_1 = state[5];
    const Y6_1 = state[6];
    const Y7_1 = state[7];
    const Y8_1 = state[8];
    const Y10_1 = state[9];
    const Y9_1 = state[10];
    dstatedt[4] = 0 + 1 * internal.k2_1 * Y1_1 * Y2_1 - 1 * internal.kminus2_1 * Y1_1 - 1 * (internal.k9_1 * Y1_1 * Y7_1) + 1 * (internal.K10_1 * Y8_1) - 1 * internal.k21_1 * Y1_1 * Y1_1;
    dstatedt[9] = 0 - 1 * (internal.k17_1 * Y6_1 * Y10_1) + 1 * (internal.k23_1) - 1 * (internal.k24_1 * Y10_1) + 1 * internal.k25_1 / (1 + internal.k25p_1 * Y5_1);
    dstatedt[2] = 0 + 1 * internal.k1p_1 * Y6_1 * Y3_1 + internal.k1pp_1 * Y9_1 * Y3_1 + internal.k1_1 * Y1_1 * Y3_1 - 1 * (internal.k29_1 * Y11_1);
    dstatedt[3] = 0 - 1 * internal.k2_1 * Y1_1 * Y2_1 + 1 * internal.kminus2_1 * Y1_1 + 1 * internal.k3_1 * Y4_1 + internal.k3p_1 - 1 * (internal.k5_1 * Y2_1);
    dstatedt[0] = 0 - 1 * internal.k1p_1 * Y6_1 * Y3_1 + internal.k1pp_1 * Y9_1 * Y3_1 + internal.k1_1 * Y1_1 * Y3_1 + 1 * (internal.kminus1_1 * Y5_1 * Y4_1);
    dstatedt[1] = 0 + 1 * internal.k1p_1 * Y6_1 * Y3_1 + internal.k1pp_1 * Y9_1 * Y3_1 + internal.k1_1 * Y1_1 * Y3_1 - 1 * (internal.kminus1_1 * Y5_1 * Y4_1) + 1 * internal.k4_1 - 1 * (internal.kminus4_1 * Y4_1) + 1 * internal.k18_1 * Y4_1;
    dstatedt[5] = 0 - 1 * (internal.kminus1_1 * Y5_1 * Y4_1) + 1 * internal.k26_1 / (1 + internal.k26p_1 * Y10_1) + 1 * (internal.k27_1) - 1 * (internal.k28_1 * Y5_1) + 1 * (internal.k29_1 * Y11_1);
    dstatedt[6] = 0 + 1 * (internal.k6_1) - 1 * (internal.kminus6_1 * Y6_1) - 1 * (internal.k17_1 * Y6_1 * Y10_1) - 1 * (internal.k19_1 * Y7_1 * Y6_1) + 1 * (internal.k20_1 * Y9_1);
    dstatedt[7] = 0 + 1 * (internal.k7_1) - 1 * internal.k8_1 * Y7_1 * Y1_1 - 1 * (internal.k9_1 * Y1_1 * Y7_1) + 1 * (internal.K10_1 * Y8_1) - 1 * (internal.k19_1 * Y7_1 * Y6_1) + 1 * (internal.k20_1 * Y9_1) - 1 * (internal.k22_1 * Y7_1);
    dstatedt[8] = 0 + 1 * (internal.k9_1 * Y1_1 * Y7_1) - 1 * (internal.K10_1 * Y8_1);
    dstatedt[10] = 0 + 1 * (internal.k19_1 * Y7_1 * Y6_1) - 1 * (internal.k20_1 * Y9_1);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Y3_1", "Y4_1", "Y11_1", "Y2_1", "Y1_1", "Y5_1", "Y6_1", "Y7_1", "Y8_1", "Y10_1", "Y9_1"];
    this.metadata.internalOrder = {cell_1: null, initial_Y1_1: null, initial_Y10_1: null, initial_Y11_1: null, initial_Y2_1: null, initial_Y3_1: null, initial_Y4_1: null, initial_Y5_1: null, initial_Y6_1: null, initial_Y7_1: null, initial_Y8_1: null, initial_Y9_1: null, k1_1: null, K10_1: null, k17_1: null, k18_1: null, k19_1: null, k1p_1: null, k1pp_1: null, k2_1: null, k20_1: null, k21_1: null, k22_1: null, k23_1: null, k24_1: null, k25_1: null, k25p_1: null, k26_1: null, k26p_1: null, k27_1: null, k28_1: null, k29_1: null, k3_1: null, k3p_1: null, k4_1: null, k5_1: null, k6_1: null, k7_1: null, k8_1: null, k9_1: null, kminus1_1: null, kminus2_1: null, kminus4_1: null, kminus6_1: null, Y1_1_init: null, Y10_1_init: null, Y11_1_init: null, Y2_1_init: null, Y3_1_init: null, Y4_1_init: null, Y5_1_init: null, Y6_1_init: null, Y7_1_init: null, Y8_1_init: null, Y9_1_init: null};
    this.metadata.variableOrder = {Y3_1: null, Y4_1: null, Y11_1: null, Y2_1: null, Y1_1: null, Y5_1: null, Y6_1: null, Y7_1: null, Y8_1: null, Y10_1: null, Y9_1: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
