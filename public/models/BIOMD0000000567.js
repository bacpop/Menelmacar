export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Brain = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var B_init = internal.A0 - (internal.k1 / internal.k2 + internal.A0) / (1 + internal.k1 / (internal.k2 * internal.A0) * Math.exp((internal.k1 + internal.k2 * internal.A0) * t));
    internal.initial_B = B_init;
    var state = Array(2).fill(0);
    state[0] = internal.initial_B;
    state[1] = internal.initial_A;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A_init", "A0", "k1", "k2", "k2A0"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "A0", internal, 184713.37579617801, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 4.0000000000000003e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 1.57e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2A0", internal, 0.28999999999999998, -Infinity, Infinity, false);
    internal.initial_A = internal.A_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    dstatedt[1] = 0;
    dstatedt[0] = 0 + 0;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "B", "A"];
    this.metadata.internalOrder = {A_init: null, A0: null, Brain: null, initial_A: null, initial_B: null, k1: null, k2: null, k2A0: null};
    this.metadata.variableOrder = {B: null, A: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
