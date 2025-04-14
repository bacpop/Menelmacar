export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.env = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(2).fill(0);
    state[0] = internal.initial_R;
    state[1] = internal.initial_X;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["k1", "k2", "k3", "k4", "tau", "X_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "k1", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_X = internal.X_init;
    internal.R_init = internal.k1 * internal.k4 / (internal.k2 * internal.k3);
    internal.initial_R = internal.R_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const R = state[0];
    const X = state[1];
    var S = 1 * Math.floor(t / internal.tau);
    dstatedt[0] = 0 + 1 * internal.env * internal.k1 * S - 1 * internal.env * internal.k2 * R * X;
    dstatedt[1] = 0 + 1 * internal.env * internal.k3 * S - 1 * internal.env * internal.k4 * X;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "R", "X"];
    this.metadata.internalOrder = {env: null, initial_R: null, initial_X: null, k1: null, k2: null, k3: null, k4: null, R_init: null, tau: null, X_init: null};
    this.metadata.variableOrder = {R: null, X: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
