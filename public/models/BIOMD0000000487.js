export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.default1 = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(6).fill(0);
    state[0] = internal.initial_S1;
    state[1] = internal.initial_S2;
    state[2] = internal.initial_S3;
    state[3] = internal.initial_S4;
    state[4] = internal.initial_S5;
    state[5] = internal.initial_S6;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["k1", "k2", "k3", "k4", "k5", "k6", "S1_init", "S2_init", "S3_init", "S4_init", "S5_init", "S6_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "k1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S4_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S5_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S6_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_S1 = internal.S1_init;
    internal.initial_S2 = internal.S2_init;
    internal.initial_S3 = internal.S3_init;
    internal.initial_S4 = internal.S4_init;
    internal.initial_S5 = internal.S5_init;
    internal.initial_S6 = internal.S6_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const S1 = state[0];
    const S2 = state[1];
    const S3 = state[2];
    const S4 = state[3];
    const S5 = state[4];
    const S6 = state[5];
    dstatedt[0] = 0 - 1 * internal.k1 * S1 * S2 + 1 * internal.k2 * S3 + 1 * internal.k3 * S3;
    dstatedt[1] = 0 - 1 * internal.k1 * S1 * S2 + 1 * internal.k2 * S3 + 1 * internal.k6 * S6;
    dstatedt[2] = 0 + 1 * internal.k1 * S1 * S2 - 1 * internal.k2 * S3 - 1 * internal.k3 * S3;
    dstatedt[3] = 0 - 1 * internal.k4 * S4 * S5 + 1 * internal.k5 * S6 + 1 * internal.k6 * S6;
    dstatedt[4] = 0 + 1 * internal.k3 * S3 - 1 * internal.k4 * S4 * S5 + 1 * internal.k5 * S6;
    dstatedt[5] = 0 + 1 * internal.k4 * S4 * S5 - 1 * internal.k5 * S6 - 1 * internal.k6 * S6;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "S1", "S2", "S3", "S4", "S5", "S6"];
    this.metadata.internalOrder = {default1: null, initial_S1: null, initial_S2: null, initial_S3: null, initial_S4: null, initial_S5: null, initial_S6: null, k1: null, k2: null, k3: null, k4: null, k5: null, k6: null, S1_init: null, S2_init: null, S3_init: null, S4_init: null, S5_init: null, S6_init: null};
    this.metadata.variableOrder = {S1: null, S2: null, S3: null, S4: null, S5: null, S6: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
