export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(2).fill(0);
    state[0] = internal.initial_E;
    state[1] = internal.initial_T;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "b", "d", "E_init", "e1", "e2", "g", "m", "n", "p", "s", "T_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.17999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 2.0000000000000001e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d", internal, 0.041200000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_init", internal, 1708110, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e2", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g", internal, 20190000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m", internal, 3.4220000000000002e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 1.101e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p", internal, 0.1245, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s", internal, 13000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_init", internal, 8286380, -Infinity, Infinity, false);
    internal.initial_E = internal.E_init;
    internal.initial_T = internal.T_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const E = state[0];
    const T = state[1];
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.s * internal.e1 + internal.p * E * T / (internal.g + T)) - 1 * internal.compartment * (internal.m * E * T + internal.d * E);
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.a * T * (1 - internal.b * T)) - 1 * internal.compartment * (internal.n * E * T + internal.e2 * T);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "E", "T"];
    this.metadata.internalOrder = {a: null, b: null, compartment: null, d: null, E_init: null, e1: null, e2: null, g: null, initial_E: null, initial_T: null, m: null, n: null, p: null, s: null, T_init: null};
    this.metadata.variableOrder = {E: null, T: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
