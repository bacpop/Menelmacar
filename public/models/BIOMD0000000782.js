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
    state[1] = internal.initial_N;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "d", "e1", "N_init", "r1", "S_init", "u1"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e1", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N_init", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r1", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u1", internal, 0.20000000000000001, -Infinity, Infinity, false);
    internal.initial_N = internal.N_init;
    internal.initial_S = internal.S_init;
    internal.Q1 = internal.a * internal.r1 * internal.u1 / (internal.d * (internal.d + internal.e1));
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const S = state[0];
    const N = state[1];
    dstatedt[1] = 0 + 1 * internal.tme * (internal.r1 * internal.u1 * S * N) - 1 * internal.tme * ((internal.d + internal.e1) * N);
    dstatedt[0] = 0 + 1 * internal.tme * (internal.a) - 1 * internal.tme * internal.d * S - 1 * internal.tme * (internal.u1 * S * N);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "S", "N"];
    this.metadata.internalOrder = {a: null, d: null, e1: null, initial_N: null, initial_S: null, N_init: null, Q1: null, r1: null, S_init: null, tme: null, u1: null};
    this.metadata.variableOrder = {S: null, N: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
