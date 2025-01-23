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
    var x5_init = internal.initial_A0 - internal.initial_x1 - internal.initial_x3 - internal.initial_x4;
    var x6_init = internal.initial_B0 - internal.initial_x1 - internal.initial_x2 - 2 * internal.initial_x4;
    var x7_init = internal.initial_C0 - internal.initial_x2 - internal.n * internal.initial_x3;
    internal.initial_x5 = x5_init;
    internal.initial_x6 = x6_init;
    internal.initial_x7 = x7_init;
    var state = Array(10).fill(0);
    state[0] = internal.initial_x1;
    state[1] = internal.initial_x2;
    state[2] = internal.initial_x3;
    state[3] = internal.initial_x4;
    state[4] = internal.initial_x5;
    state[5] = internal.initial_x6;
    state[6] = internal.initial_x7;
    state[7] = internal.initial_A0;
    state[8] = internal.initial_B0;
    state[9] = internal.initial_C0;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A0_init", "B0_init", "C0_init", "K_AlB", "K_AlB2", "k1", "k10", "k2", "k3", "k4", "k5", "k6", "k7", "k8", "k9", "n", "x1_init", "x2_init", "x3_init", "x4_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_AlB", internal, 95000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_AlB2", internal, 3000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.48399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 0.13250000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.079579999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 5.0950000000000003e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 2.656e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 0.005489, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 3.2259999999999999e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 0.0030100000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 1.011e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 0.01685, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x4_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_A0 = internal.A0_init;
    internal.initial_B0 = internal.B0_init;
    internal.initial_C0 = internal.C0_init;
    internal.initial_x1 = internal.x1_init;
    internal.initial_x2 = internal.x2_init;
    internal.initial_x3 = internal.x3_init;
    internal.initial_x4 = internal.x4_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const x1 = state[0];
    const x2 = state[1];
    const x3 = state[2];
    const x4 = state[3];
    const x5 = state[4];
    const x6 = state[5];
    const x7 = state[6];
    dstatedt[7] = 0;
    dstatedt[8] = 0;
    dstatedt[9] = 0;
    dstatedt[4] = 0 + 0;
    dstatedt[5] = 0 + 0;
    dstatedt[6] = 0 + 0;
    dstatedt[0] = 0 + internal.K_AlB * internal.k3 * x5 * x6 - internal.K_AlB2 * internal.k4 * x1 * x6 - internal.k3 * x1 - internal.k9 * x1 * Math.pow((x7), (internal.n + 1)) + internal.k4 * x4 + internal.k10 * x4 * x7;
    dstatedt[1] = 0 + internal.k6 * x7 * x6 - internal.k8 * x2 + internal.k9 * x1 * Math.pow((x7), (internal.n + 1)) + internal.k10 * x4 * x7;
    dstatedt[2] = 0 + internal.k5 * Math.pow((x7), (internal.n)) * x5 - internal.k7 * x3 + internal.k9 * x1 * Math.pow((x7), (internal.n + 1));
    dstatedt[3] = 0 + internal.K_AlB2 * internal.k4 * x1 * x6 - internal.k4 * x4 - internal.k10 * x4 * x7;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "x1", "x2", "x3", "x4", "x5", "x6", "x7", "A0", "B0", "C0"];
    this.metadata.internalOrder = {A0_init: null, B0_init: null, C0_init: null, compartment: null, initial_A0: null, initial_B0: null, initial_C0: null, initial_x1: null, initial_x2: null, initial_x3: null, initial_x4: null, initial_x5: null, initial_x6: null, initial_x7: null, K_AlB: null, K_AlB2: null, k1: null, k10: null, k2: null, k3: null, k4: null, k5: null, k6: null, k7: null, k8: null, k9: null, n: null, x1_init: null, x2_init: null, x3_init: null, x4_init: null};
    this.metadata.variableOrder = {x1: null, x2: null, x3: null, x4: null, x5: null, x6: null, x7: null, A0: null, B0: null, C0: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
