export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.tme = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_T;
    state[1] = internal.initial_I;
    state[2] = internal.initial_C;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "alpha", "b", "beta", "C_init", "d", "I_init", "K", "kxk", "l1", "l2", "m", "r", "T_init", "u"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_init", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "l1", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "l2", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_init", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u", internal, 50, -Infinity, Infinity, false);
    internal.initial_C = internal.C_init;
    internal.initial_I = internal.I_init;
    internal.initial_T = internal.T_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const T = state[0];
    const I = state[1];
    const C = state[2];
    dstatedt[2] = 0 + 1 * internal.tme * (internal.alpha * T * I / (internal.b + T)) - 1 * internal.tme * internal.u * C + 1 * internal.tme * (internal.l2);
    dstatedt[1] = 0 + 1 * internal.tme * (internal.beta * T * I / (internal.kxk + T)) - 1 * internal.tme * internal.a * I + 1 * internal.tme * (internal.l1);
    dstatedt[0] = 0 + 1 * internal.tme * (internal.r * T * (1 - T / internal.K)) - 1 * internal.tme * (internal.d * T * C / (internal.m + T));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "T", "I", "C"];
    this.metadata.internalOrder = {a: null, alpha: null, b: null, beta: null, C_init: null, d: null, I_init: null, initial_C: null, initial_I: null, initial_T: null, K: null, kxk: null, l1: null, l2: null, m: null, r: null, T_init: null, tme: null, u: null};
    this.metadata.variableOrder = {T: null, I: null, C: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
