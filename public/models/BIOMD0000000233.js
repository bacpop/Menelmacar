export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.batch = 1;
    internal.P = 1;
    internal.S = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(2).fill(0);
    state[0] = internal.initial_X;
    state[1] = internal.initial_Y;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["k1", "k2", "k3", "k4", "X_init", "Y_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "k1", internal, 8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Y_init", internal, 1, -Infinity, Infinity, false);
    internal.initial_X = internal.X_init;
    internal.initial_Y = internal.Y_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const X = state[0];
    const Y = state[1];
    dstatedt[0] = 0 + 2 * internal.k1 * internal.S * Y - 2 * internal.k2 * Math.pow((X), (2)) + 1 * internal.k2 * Math.pow((X), (2)) - 1 * internal.k3 * X * Y - 1 * internal.k4 * X;
    dstatedt[1] = 0 - 1 * internal.k1 * internal.S * Y + 1 * internal.k2 * Math.pow((X), (2)) - 1 * internal.k3 * X * Y + 1 * internal.k3 * X * Y;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "X", "Y"];
    this.metadata.internalOrder = {batch: null, initial_X: null, initial_Y: null, k1: null, k2: null, k3: null, k4: null, P: null, S: null, X_init: null, Y_init: null};
    this.metadata.variableOrder = {X: null, Y: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
