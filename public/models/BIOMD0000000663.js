export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_x;
    state[1] = internal.initial_y;
    state[2] = internal.initial_v;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "Beta", "d", "eta", "kxk", "r", "u", "v_init", "x_init", "y_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Beta", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "eta", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_v = internal.v_init;
    internal.initial_x = internal.x_init;
    internal.initial_y = internal.y_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const x = state[0];
    const y = state[1];
    const v = state[2];
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.eta * y) - 1 * internal.compartment * internal.u * v;
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.r * v * x) - 1 * internal.compartment * (internal.r * x * v * (x + y) / internal.kxk) - 1 * internal.compartment * internal.d * x - 1 * internal.compartment * (internal.Beta * v * x);
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.Beta * v * x) + 1 * internal.compartment * (internal.r * v * y) - 1 * internal.compartment * (internal.r * y * v * (x + y) / internal.kxk) - 1 * internal.compartment * internal.a * y;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "x", "y", "v"];
    this.metadata.internalOrder = {a: null, Beta: null, compartment: null, d: null, eta: null, initial_v: null, initial_x: null, initial_y: null, kxk: null, r: null, u: null, v_init: null, x_init: null, y_init: null};
    this.metadata.variableOrder = {x: null, y: null, v: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
