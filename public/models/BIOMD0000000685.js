export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.COMpartment = 1;
    internal.initial_A = 2;
    internal.initial_A_star = 2;
    internal.initial_C = 0.29999999999999999;
    internal.initial_T = 0.10000000000000001;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_T;
    state[1] = internal.initial_A;
    state[2] = internal.initial_A_star;
    state[3] = internal.initial_C;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "d", "delta_1", "delta_2", "epsilon", "eta", "gamma", "kxk", "lambda", "mu", "q", "r"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_2", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "epsilon", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "eta", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 1, -Infinity, Infinity, false);
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const T = state[0];
    const A = state[1];
    const A_star = state[2];
    const C = state[3];
    dstatedt[1] = internal.lambda - internal.delta_1 * A - internal.alpha * A * T;
    dstatedt[2] = internal.alpha * A * T - internal.delta_2 * A_star;
    dstatedt[3] = internal.eta * A_star * C / (internal.epsilon * C + 1) - internal.q * T * C - internal.mu * C;
    dstatedt[0] = internal.r * T * (1 - T / internal.kxk) - internal.d * T - internal.gamma * T * C;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "T", "A", "A_star", "C"];
    this.metadata.internalOrder = {alpha: null, COMpartment: null, d: null, delta_1: null, delta_2: null, epsilon: null, eta: null, gamma: null, initial_A: null, initial_A_star: null, initial_C: null, initial_T: null, kxk: null, lambda: null, mu: null, q: null, r: null};
    this.metadata.variableOrder = {T: null, A: null, A_star: null, C: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
