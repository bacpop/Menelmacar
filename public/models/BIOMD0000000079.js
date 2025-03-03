export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.body = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_P;
    state[1] = internal.initial_Q;
    state[2] = internal.initial_R;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "K1", "K2", "k3", "Km", "P_init", "Q_init", "R_init", "V", "V1", "V2", "V3"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_init", internal, 0.42999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Q_init", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_init", internal, 0.55000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V2", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V3", internal, 6, -Infinity, Infinity, false);
    internal.initial_P = internal.P_init;
    internal.initial_Q = internal.Q_init;
    internal.initial_R = internal.R_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const P = state[0];
    const Q = state[1];
    const R = state[2];
    dstatedt[0] = 0 + 1 * internal.body * (internal.a * Q) - 1 * (internal.V * P / (internal.Km + P));
    dstatedt[1] = 0 + 1 * (internal.V1 * (1 - Q) / (internal.K1 + (1 - Q))) - 1 * (internal.V2 * R * Q / (internal.K2 + Q));
    dstatedt[2] = 0 + 1 * (P * internal.V3 * (1 - R) / (internal.k3 + (1 - R))) - 1 * (internal.V * R / (internal.Km + R));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "P", "Q", "R"];
    this.metadata.internalOrder = {a: null, body: null, initial_P: null, initial_Q: null, initial_R: null, K1: null, K2: null, k3: null, Km: null, P_init: null, Q_init: null, R_init: null, V: null, V1: null, V2: null, V3: null};
    this.metadata.variableOrder = {P: null, Q: null, R: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
