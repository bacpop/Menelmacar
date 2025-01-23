export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.COMpartment = 1;
    internal.initial_L = 0;
    internal.initial_v = 1;
    internal.initial_x = 1;
    internal.initial_y0 = 0;
    internal.initial_y1 = 0;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(5).fill(0);
    state[0] = internal.initial_x;
    state[1] = internal.initial_y0;
    state[2] = internal.initial_y1;
    state[3] = internal.initial_L;
    state[4] = internal.initial_v;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a0", "a1", "beta", "d", "eta", "gamma", "kxk", "lambda", "phi", "u"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a0", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a1", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "eta", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "phi", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u", internal, 1, -Infinity, Infinity, false);
    internal.R0 = internal.lambda * internal.eta / (internal.d * internal.a1 * (internal.a0 + internal.eta)) * (internal.beta + internal.gamma * internal.phi / (internal.phi + internal.d));
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const x = state[0];
    const y0 = state[1];
    const y1 = state[2];
    const L = state[3];
    const v = state[4];
    dstatedt[3] = internal.gamma * x * v - (internal.phi * L + internal.d * L);
    dstatedt[4] = internal.kxk * y1 - internal.u * v;
    dstatedt[0] = internal.lambda - (internal.d * x + internal.beta * x * v + internal.gamma * x * v);
    dstatedt[1] = internal.beta * x * v - (internal.a0 * y0 + internal.eta * y0) + internal.phi * L;
    dstatedt[2] = internal.eta * y0 - internal.a1 * y1;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "x", "y0", "y1", "L", "v"];
    this.metadata.internalOrder = {a0: null, a1: null, beta: null, COMpartment: null, d: null, eta: null, gamma: null, initial_L: null, initial_v: null, initial_x: null, initial_y0: null, initial_y1: null, kxk: null, lambda: null, phi: null, R0: null, u: null};
    this.metadata.variableOrder = {x: null, y0: null, y1: null, L: null, v: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
