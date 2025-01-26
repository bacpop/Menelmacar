export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Tumor = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(2).fill(0);
    state[0] = internal.initial_T;
    state[1] = internal.initial_E;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "b", "d", "E_init", "kxk", "m", "s", "T_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.51400000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 1.02e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_init", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m", internal, - 9.9999999999999995e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_init", internal, 100, -Infinity, Infinity, false);
    internal.initial_E = internal.E_init;
    internal.initial_T = internal.T_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const T = state[0];
    const E = state[1];
    dstatedt[1] = 0 - 1 * internal.Tumor * internal.d * E + 1 * internal.Tumor * (internal.s) + 1 * internal.Tumor * (internal.m * E * T);
    dstatedt[0] = 0 + 1 * internal.Tumor * (internal.a * T) - 1 * internal.Tumor * (internal.a * internal.b * T * T) - 1 * internal.Tumor * (internal.kxk * T * E);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "T", "E"];
    this.metadata.internalOrder = {a: null, b: null, d: null, E_init: null, initial_E: null, initial_T: null, kxk: null, m: null, s: null, T_init: null, Tumor: null};
    this.metadata.variableOrder = {T: null, E: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
