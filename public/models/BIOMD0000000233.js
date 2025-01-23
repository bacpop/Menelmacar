export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.batch = 1;
    internal.k1 = 8;
    internal.k2 = 1;
    internal.k3 = 1;
    internal.k4 = 1.5;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_S;
    state[1] = internal.initial_P;
    state[2] = internal.initial_X;
    state[3] = internal.initial_Y;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["P_init", "S_init", "X_init", "Y_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Y_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_P = internal.P_init;
    internal.initial_S = internal.S_init;
    internal.initial_X = internal.X_init;
    internal.initial_Y = internal.Y_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const S = state[0];
    const X = state[2];
    const Y = state[3];
    dstatedt[1] = 0;
    dstatedt[0] = 0;
    dstatedt[2] = 0 + 2 * internal.k1 * S * Y + 1 * internal.k2 * Math.pow((X), (2)) - 2 * internal.k2 * Math.pow((X), (2)) - 1 * internal.k3 * X * Y - 1 * internal.k4 * X;
    dstatedt[3] = 0 - 1 * internal.k1 * S * Y + 1 * internal.k2 * Math.pow((X), (2)) + 1 * internal.k3 * X * Y - 1 * internal.k3 * X * Y;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "S", "P", "X", "Y"];
    this.metadata.internalOrder = {batch: null, initial_P: null, initial_S: null, initial_X: null, initial_Y: null, k1: null, k2: null, k3: null, k4: null, P_init: null, S_init: null, X_init: null, Y_init: null};
    this.metadata.variableOrder = {S: null, P: null, X: null, Y: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
