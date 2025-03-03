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
    var state = Array(2).fill(0);
    state[0] = internal.initial_A;
    state[1] = internal.initial_B;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A_init", "B_init", "k1", "k2"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 1, -Infinity, Infinity, false);
    internal.initial_A = internal.A_init;
    internal.initial_B = internal.B_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const A = state[0];
    const B = state[1];
    dstatedt[0] = 0 + 1 * internal.k2 * B - 1 * internal.k1 * A;
    dstatedt[1] = 0 - 1 * internal.k2 * B + 1 * internal.k1 * A;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "A", "B"];
    this.metadata.internalOrder = {A_init: null, B_init: null, default1: null, initial_A: null, initial_B: null, k1: null, k2: null};
    this.metadata.variableOrder = {A: null, B: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
