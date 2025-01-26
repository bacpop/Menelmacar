export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.tumor_microenvironment = 1;
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
    this.base.user.checkUser(user, ["a", "b", "d", "E_init", "g", "m", "n", "p", "s", "T_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 1.6359999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 0.0040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_init", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g", internal, 20.190000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m", internal, 0.0031099999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p", internal, 1.131, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s", internal, 0.318, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_init", internal, 50, -Infinity, Infinity, false);
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
    dstatedt[1] = 0 + 1 * internal.tumor_microenvironment * (internal.p * T * E / (internal.g + T)) - 1 * internal.tumor_microenvironment * (internal.m * E * T) - 1 * internal.tumor_microenvironment * internal.d * E + 1 * internal.tumor_microenvironment * (internal.s);
    dstatedt[0] = 0 + 1 * internal.tumor_microenvironment * (internal.a * T) - 1 * internal.tumor_microenvironment * (internal.a * internal.b * T * T) - 1 * internal.tumor_microenvironment * (internal.n * T * E);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "T", "E"];
    this.metadata.internalOrder = {a: null, b: null, d: null, E_init: null, g: null, initial_E: null, initial_T: null, m: null, n: null, p: null, s: null, T_init: null, tumor_microenvironment: null};
    this.metadata.variableOrder = {T: null, E: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
