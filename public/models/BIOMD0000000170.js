export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Cytoplasm = 1;
    internal.Nucleus = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(7).fill(0);
    state[0] = internal.initial_y1;
    state[1] = internal.initial_y2;
    state[2] = internal.initial_y3;
    state[3] = internal.initial_y4;
    state[4] = internal.initial_y5;
    state[5] = internal.initial_y6;
    state[6] = internal.initial_y7;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["c", "hill_coeff", "k1b", "k1d", "k1i", "k2b", "k2d", "k2t", "k3d", "k3t", "k4b", "k4d", "k5b", "k5d", "k5t", "k6a", "k6d", "k6t", "k7a", "k7d", "q", "r", "v1b", "v4b", "y1_init", "y2_init", "y3_init", "y4_init", "y5_init", "y6_init", "y7_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "c", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "hill_coeff", internal, 8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1b", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1d", internal, 0.12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1i", internal, 0.56000000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2b", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2d", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2t", internal, 0.23999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3d", internal, 0.12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3t", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4b", internal, 2.1600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4d", internal, 0.75, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5b", internal, 0.23999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5d", internal, 0.059999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5t", internal, 0.45000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6a", internal, 0.089999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6d", internal, 0.12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6t", internal, 0.059999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7a", internal, 0.0030000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7d", internal, 0.089999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v1b", internal, 9, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v4b", internal, 3.6000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y1_init", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y3_init", internal, 1.1000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y4_init", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y5_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y6_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y7_init", internal, 1.05, -Infinity, Infinity, false);
    internal.initial_y1 = internal.y1_init;
    internal.initial_y2 = internal.y2_init;
    internal.initial_y3 = internal.y3_init;
    internal.initial_y4 = internal.y4_init;
    internal.initial_y5 = internal.y5_init;
    internal.initial_y6 = internal.y6_init;
    internal.initial_y7 = internal.y7_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const y1 = state[0];
    const y2 = state[1];
    const y3 = state[2];
    const y4 = state[3];
    const y5 = state[4];
    const y6 = state[5];
    const y7 = state[6];
    dstatedt[1] = 0 + 1 * internal.Cytoplasm * internal.k2b * Math.pow((y1), (internal.q)) - 1 * internal.Cytoplasm * internal.k2d * y2 - 1 * internal.Cytoplasm * internal.k2t * y2 + 1 * internal.Nucleus * internal.k3t * y3;
    dstatedt[2] = 0 + 1 * internal.Cytoplasm * internal.k2t * y2 - 1 * internal.Nucleus * internal.k3t * y3 - 1 * internal.Nucleus * internal.k3d * y3;
    dstatedt[4] = 0 + 1 * internal.Cytoplasm * internal.k5b * y4 - 1 * internal.Cytoplasm * internal.k5d * y5 - 1 * internal.Cytoplasm * internal.k5t * y5 + 1 * internal.Nucleus * internal.k6t * y6;
    dstatedt[5] = 0 + 1 * internal.Cytoplasm * internal.k5t * y5 - 1 * internal.Nucleus * internal.k6t * y6 - 1 * internal.Nucleus * internal.k6d * y6 - 1 * internal.Nucleus * internal.k6a * y6 + 1 * internal.Nucleus * internal.k7a * y7;
    dstatedt[6] = 0 + 1 * internal.Nucleus * internal.k6a * y6 - 1 * internal.Nucleus * internal.k7a * y7 - 1 * internal.Nucleus * internal.k7d * y7;
    var trans_Bmal1 = internal.v4b * Math.pow((y3), (internal.r)) / (Math.pow((internal.k4b), (internal.r)) + Math.pow((y3), (internal.r)));
    var trans_per2_cry = internal.v1b * (y7 + internal.c) / (internal.k1b * (1 + Math.pow((y3 / internal.k1i), (internal.hill_coeff))) + y7 + internal.c);
    dstatedt[0] = 0 + 1 * internal.Cytoplasm * trans_per2_cry - 1 * internal.Cytoplasm * internal.k1d * y1;
    dstatedt[3] = 0 + 1 * internal.Cytoplasm * trans_Bmal1 - 1 * internal.Cytoplasm * internal.k4d * y4;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "y1", "y2", "y3", "y4", "y5", "y6", "y7"];
    this.metadata.internalOrder = {c: null, Cytoplasm: null, hill_coeff: null, initial_y1: null, initial_y2: null, initial_y3: null, initial_y4: null, initial_y5: null, initial_y6: null, initial_y7: null, k1b: null, k1d: null, k1i: null, k2b: null, k2d: null, k2t: null, k3d: null, k3t: null, k4b: null, k4d: null, k5b: null, k5d: null, k5t: null, k6a: null, k6d: null, k6t: null, k7a: null, k7d: null, Nucleus: null, q: null, r: null, v1b: null, v4b: null, y1_init: null, y2_init: null, y3_init: null, y4_init: null, y5_init: null, y6_init: null, y7_init: null};
    this.metadata.variableOrder = {y1: null, y2: null, y3: null, y4: null, y5: null, y6: null, y7: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
