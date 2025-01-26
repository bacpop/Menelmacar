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
    var state = Array(4).fill(0);
    state[0] = internal.initial_A;
    state[1] = internal.initial_R;
    state[2] = internal.initial_S;
    state[3] = internal.initial_C;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A_init", "a1", "a2", "C_init", "fk", "n", "R_init", "rk", "S_init", "u", "v1", "v2"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a1", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a2", internal, 1.4399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "fk", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rk", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v1", internal, 120, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v2", internal, 14.4, -Infinity, Infinity, false);
    internal.e = internal.a1;
    internal.initial_A = internal.A_init;
    internal.initial_C = internal.C_init;
    internal.initial_R = internal.R_init;
    internal.initial_S = internal.S_init;
    internal.y = Math.pow((internal.e), (internal.n));
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const A = state[0];
    const R = state[1];
    const S = state[2];
    const C = state[3];
    var f = internal.fk * R / (R + internal.rk);
    dstatedt[3] = 0 - 1 * internal.tme * f * C + 1 * internal.tme * (internal.v1 * (internal.u - C) * (S - C)) - 1 * internal.tme * internal.v2 * C;
    dstatedt[2] = 0 - 1 * internal.tme * (f * C);
    dstatedt[0] = 0 - 1 * internal.tme * (internal.a1 * (1 - R) * A * S) + 1 * internal.tme * (internal.a2 * internal.y * R * S);
    dstatedt[1] = 0 + 1 * internal.tme * (internal.a1 / internal.y * (1 - R) * A) - 1 * internal.tme * internal.a2 * R;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "A", "R", "S", "C"];
    this.metadata.internalOrder = {A_init: null, a1: null, a2: null, C_init: null, e: null, fk: null, initial_A: null, initial_C: null, initial_R: null, initial_S: null, n: null, R_init: null, rk: null, S_init: null, tme: null, u: null, v1: null, v2: null, y: null};
    this.metadata.variableOrder = {A: null, R: null, S: null, C: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
