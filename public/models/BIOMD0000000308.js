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
    var state = Array(4).fill(0);
    state[0] = internal.initial_Rp;
    state[1] = internal.initial_X;
    state[2] = internal.initial_Yp;
    state[3] = internal.initial_S;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["k0", "k1", "k2", "k2_prime", "k3", "k4", "k5", "k6", "Km3", "Km4", "Km5", "Km6", "Rp_init", "Rt", "S_init", "X_init", "Yp_init", "Yt"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "k0", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2_prime", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km3", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km4", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km5", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km6", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rt", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Yp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Yt", internal, 1, -Infinity, Infinity, false);
    internal.initial_Rp = internal.Rp_init;
    internal.initial_S = internal.S_init;
    internal.initial_X = internal.X_init;
    internal.initial_Yp = internal.Yp_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Rp = state[0];
    const X = state[1];
    const Yp = state[2];
    const S = state[3];
    dstatedt[3] = 0;
    dstatedt[0] = 0 + 1 * internal.env * internal.k5 * Yp * (internal.Rt - Rp) / (internal.Km5 + (internal.Rt - Rp)) - 1 * internal.env * internal.k6 * Rp / (internal.Km6 + Rp);
    dstatedt[1] = 0 + 1 * internal.env * (internal.k0 + internal.k1 * S) - 1 * internal.env * (internal.k2 + internal.k2_prime * Rp) * X;
    dstatedt[2] = 0 + 1 * internal.env * internal.k3 * X * (internal.Yt - Yp) / (internal.Km3 + (internal.Yt - Yp)) - 1 * internal.env * internal.k4 * Yp / (internal.Km4 + Yp);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Rp", "X", "Yp", "S"];
    this.metadata.internalOrder = {env: null, initial_Rp: null, initial_S: null, initial_X: null, initial_Yp: null, k0: null, k1: null, k2: null, k2_prime: null, k3: null, k4: null, k5: null, k6: null, Km3: null, Km4: null, Km5: null, Km6: null, Rp_init: null, Rt: null, S_init: null, X_init: null, Yp_init: null, Yt: null};
    this.metadata.variableOrder = {Rp: null, X: null, Yp: null, S: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
