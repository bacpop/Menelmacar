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
    var state = Array(2).fill(0);
    state[0] = internal.initial_S;
    state[1] = internal.initial_D;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "D_init", "g_0", "h1", "h2", "h3", "k1", "k2", "k3", "p_0", "r_0", "S_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.0025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "D_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_0", internal, 0.0035000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h1", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h2", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h3", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_0", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_0", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_init", internal, 1, -Infinity, Infinity, false);
    internal.initial_D = internal.D_init;
    internal.initial_S = internal.S_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const S = state[0];
    const D = state[1];
    var g = internal.g_0 / (1 + internal.h3 * Math.pow((S), (internal.k3)));
    var p = internal.p_0 / (1 + internal.h2 * Math.pow((D), (internal.k2)));
    var r = internal.r_0 / (1 + internal.h1 * Math.pow((D), (internal.k1)));
    dstatedt[1] = 0 - 1 * internal.tme * g * D + 1 * internal.tme * (2 * r * S * (1 - p)) - 1 * internal.tme * internal.a * D;
    dstatedt[0] = 0 + 1 * internal.tme * (r * S * (2 * p - 1)) + 1 * internal.tme * g * D;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "S", "D"];
    this.metadata.internalOrder = {a: null, D_init: null, g_0: null, h1: null, h2: null, h3: null, initial_D: null, initial_S: null, k1: null, k2: null, k3: null, p_0: null, r_0: null, S_init: null, tme: null};
    this.metadata.variableOrder = {S: null, D: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
