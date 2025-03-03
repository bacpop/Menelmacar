export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.A0 = 0.46153850000000002;
    internal.B0 = 0.1754386;
    internal.C0 = 1.1739999999999999;
    internal.compartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(7).fill(0);
    state[0] = internal.initial_x1;
    state[1] = internal.initial_x2;
    state[2] = internal.initial_x3;
    state[3] = internal.initial_x4;
    state[4] = internal.initial_x5;
    state[5] = internal.initial_x6;
    state[6] = internal.initial_x7;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["K_AlB", "K_AlB2", "k1", "k10", "k2", "k3", "k4", "k5", "k6", "k7", "k8", "k9", "n", "x1_init", "x2_init", "x3_init", "x4_init", "x5_init", "x6_init", "x7_init"], unusedUserAction);
    var internal = this.internal;
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
    this.base.user.setUserScalar(user, "x5_init", internal, 0.46153850000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x6_init", internal, 0.1754386, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x7_init", internal, 1.1739999999999999, -Infinity, Infinity, false);
    internal.initial_x1 = internal.x1_init;
    internal.initial_x2 = internal.x2_init;
    internal.initial_x3 = internal.x3_init;
    internal.initial_x4 = internal.x4_init;
    internal.initial_x5 = internal.x5_init;
    internal.initial_x6 = internal.x6_init;
    internal.initial_x7 = internal.x7_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    dstatedt[0] = 0;
    dstatedt[1] = 0;
    dstatedt[2] = 0;
    dstatedt[3] = 0;
    dstatedt[4] = 0;
    dstatedt[5] = 0;
    dstatedt[6] = 0;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "x1", "x2", "x3", "x4", "x5", "x6", "x7"];
    this.metadata.internalOrder = {A0: null, B0: null, C0: null, compartment: null, initial_x1: null, initial_x2: null, initial_x3: null, initial_x4: null, initial_x5: null, initial_x6: null, initial_x7: null, K_AlB: null, K_AlB2: null, k1: null, k10: null, k2: null, k3: null, k4: null, k5: null, k6: null, k7: null, k8: null, k9: null, n: null, x1_init: null, x2_init: null, x3_init: null, x4_init: null, x5_init: null, x6_init: null, x7_init: null};
    this.metadata.variableOrder = {x1: null, x2: null, x3: null, x4: null, x5: null, x6: null, x7: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
