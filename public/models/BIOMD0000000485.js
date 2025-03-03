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
    state[0] = internal.initial_X;
    state[1] = internal.initial_ES;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A", "B", "ES_init", "k1", "k2", "k3", "k4", "V", "value", "X_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ES_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 2.9500000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "value", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_init", internal, 1, -Infinity, Infinity, false);
    internal.initial_ES = internal.ES_init;
    internal.initial_X = internal.X_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const X = state[0];
    dstatedt[1] = 0 - 1 * internal.default1 * internal.k1 * internal.A * X * (X - 1) / internal.V + 1 * internal.default1 * (internal.k2 / 1) * X * (X - 1) * (X - 2) / Math.pow((internal.V), (2)) - 1 * internal.default1 * internal.k3 * internal.B * internal.V + 1 * internal.default1 * internal.k4 * X;
    dstatedt[0] = 0 + 1 * internal.default1 * internal.k1 * internal.A * X * (X - 1) / internal.V - 1 * internal.default1 * (internal.k2 / 1) * X * (X - 1) * (X - 2) / Math.pow((internal.V), (2)) + 1 * internal.default1 * internal.k3 * internal.B * internal.V - 1 * internal.default1 * internal.k4 * X;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "X", "ES"];
    this.metadata.internalOrder = {A: null, B: null, default1: null, ES_init: null, initial_ES: null, initial_X: null, k1: null, k2: null, k3: null, k4: null, V: null, value: null, X_init: null};
    this.metadata.variableOrder = {X: null, ES: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
