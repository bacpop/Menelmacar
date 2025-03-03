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
    var state = Array(3).fill(0);
    state[0] = internal.initial_T;
    state[1] = internal.initial_E;
    state[2] = internal.initial_I;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "b", "c", "E_init", "g1", "g2", "g3", "I_init", "mu2", "mu3", "p1", "p2", "r2", "s1", "s2", "T_init", "V"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 1.0000000000000001e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g1", internal, 20000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g2", internal, 100000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g3", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu2", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu3", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p1", internal, 0.1245, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p2", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r2", internal, 0.17999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s1", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s2", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V", internal, 3.2000000000000002, -Infinity, Infinity, false);
    internal.initial_E = internal.E_init;
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
    const E = state[1];
    const I = state[2];
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.p1 * I / (internal.g1 * I) * E + internal.c * T + internal.V * internal.s1) - 1 * internal.compartment * (internal.mu2 * E);
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.p2 / internal.V * (T * E / (internal.g3 * internal.V + T)) + internal.s2) - 1 * internal.compartment * (internal.mu3 * I);
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.r2 * T * (1 - internal.b / internal.V * T)) - 1 * internal.compartment * (internal.a * T / (internal.g2 * internal.V + T) * E);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "T", "E", "I"];
    this.metadata.internalOrder = {a: null, b: null, c: null, compartment: null, E_init: null, g1: null, g2: null, g3: null, I_init: null, initial_E: null, initial_I: null, initial_T: null, mu2: null, mu3: null, p1: null, p2: null, r2: null, s1: null, s2: null, T_init: null, V: null};
    this.metadata.variableOrder = {T: null, E: null, I: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
