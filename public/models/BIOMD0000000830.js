export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.default1 = 1;
    internal.s6 = 0.050000000000000003;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(6).fill(0);
    state[0] = internal.initial_s1;
    state[1] = internal.initial_s2;
    state[2] = internal.initial_s3;
    state[3] = internal.initial_s4;
    state[4] = internal.initial_release;
    state[5] = internal.initial_shedding;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["k1", "k2", "k3", "k4", "k6", "k7", "k8", "release_init", "s1_init", "s2_init", "s3_init", "s4_init", "shedding_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "k1", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.95999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0.033000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "release_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s1_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s2_init", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s3_init", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s4_init", internal, 1.23, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "shedding_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_release = internal.release_init;
    internal.initial_s1 = internal.s1_init;
    internal.initial_s2 = internal.s2_init;
    internal.initial_s3 = internal.s3_init;
    internal.initial_s4 = internal.s4_init;
    internal.initial_shedding = internal.shedding_init;
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
    dstatedt[4] = 0 + 1 * internal.default1 * (s4 * internal.default1 * internal.k8 / internal.default1);
    dstatedt[0] = 0 + 1 * internal.default1 * (internal.s6 * internal.default1 * internal.k3 / internal.default1) - 1 * internal.default1 * (s1 * internal.default1 * internal.k1 / internal.default1) + 1 * internal.default1 * (s2 * internal.default1 * internal.k2 / internal.default1) - 1 * internal.default1 * (s1 * internal.default1 * internal.k4 / internal.default1);
    dstatedt[1] = 0 + 1 * internal.default1 * (s1 * internal.default1 * internal.k1 / internal.default1) - 1 * internal.default1 * (s2 * internal.default1 * internal.k2 / internal.default1) - 1 * internal.default1 * (s2 * internal.default1 * internal.k6 / internal.default1);
    dstatedt[2] = 0 + 1 * internal.default1 * (s2 * internal.default1 * internal.k6 / internal.default1) - 1 * internal.default1 * (s3 * internal.default1 * internal.k7 / internal.default1);
    dstatedt[3] = 0 + 1 * internal.default1 * (s3 * internal.default1 * internal.k7 / internal.default1) - 1 * internal.default1 * (s4 * internal.default1 * internal.k8 / internal.default1);
    dstatedt[5] = 0 + 1 * internal.default1 * (s1 * internal.default1 * internal.k4 / internal.default1);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "s1", "s2", "s3", "s4", "release", "shedding"];
    this.metadata.internalOrder = {default1: null, initial_release: null, initial_s1: null, initial_s2: null, initial_s3: null, initial_s4: null, initial_shedding: null, k1: null, k2: null, k3: null, k4: null, k6: null, k7: null, k8: null, release_init: null, s1_init: null, s2_init: null, s3_init: null, s4_init: null, s6: null, shedding_init: null};
    this.metadata.variableOrder = {s1: null, s2: null, s3: null, s4: null, release: null, shedding: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
