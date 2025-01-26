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
    state[0] = internal.initial_S;
    state[1] = internal.initial_T;
    state[2] = internal.initial_D;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "D_init", "h1", "h2", "h3", "h4", "h5", "k1", "k2", "k3", "k4", "k5", "p1", "p2", "q", "r1", "r2", "S_init", "T_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.0025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "D_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h1", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h2", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h3", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h4", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h5", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p1", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p2", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r1", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r2", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_D = internal.D_init;
    internal.initial_S = internal.S_init;
    internal.initial_T = internal.T_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const S = state[0];
    const T = state[1];
    const D = state[2];
    var p1_0 = internal.p1 / (1 + internal.h2 * Math.pow((D), (internal.k2)));
    var p2_0 = internal.p2 / (1 + internal.h4 * Math.pow((D), (internal.k4)));
    var q_0 = internal.q / (1 + internal.h5 * Math.pow((S), (internal.k5)));
    var r1_0 = internal.r1 / (1 + internal.h1 * Math.pow((D), (internal.k1)));
    var r2_0 = internal.r2 / (1 + internal.h3 * Math.pow((D), (internal.k3)));
    dstatedt[2] = 0 + 1 * internal.tme * (2 * r2_0 * T * (1 - p2_0) * (1 - q_0)) - 1 * internal.tme * internal.a * D;
    dstatedt[0] = 0 + 1 * internal.tme * ((2 * p1_0 - 1) * r1_0 * S) + 1 * internal.tme * (2 * r2_0 * T * q_0 * (1 - p2_0));
    dstatedt[1] = 0 + 1 * internal.tme * (2 * r1_0 * S * (1 - p1_0)) + 1 * internal.tme * ((2 * p2_0 - 1) * r2_0 * T);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "S", "T", "D"];
    this.metadata.internalOrder = {a: null, D_init: null, h1: null, h2: null, h3: null, h4: null, h5: null, initial_D: null, initial_S: null, initial_T: null, k1: null, k2: null, k3: null, k4: null, k5: null, p1: null, p2: null, q: null, r1: null, r2: null, S_init: null, T_init: null, tme: null};
    this.metadata.variableOrder = {S: null, T: null, D: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
