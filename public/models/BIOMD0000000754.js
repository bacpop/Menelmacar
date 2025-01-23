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
    var state = Array(3).fill(0);
    state[0] = internal.initial_T;
    state[1] = internal.initial_E;
    state[2] = internal.initial_I;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "aa", "b", "c", "E_init", "g1", "g2", "g3", "I_init", "p1", "p2", "s1", "s2", "T_init", "u2", "u3"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.17999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "aa", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 1.0000000000000001e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g1", internal, 20000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g2", internal, 100000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g3", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p1", internal, 0.1245, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p2", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s1", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s2", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_init", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u2", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u3", internal, 10, -Infinity, Infinity, false);
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
    dstatedt[1] = 0 - 1 * internal.tumor_microenvironment * internal.u2 * E + 1 * internal.tumor_microenvironment * (internal.c * T) + 1 * internal.tumor_microenvironment * (internal.p1 * E * I / (internal.g1 + I)) + 1 * internal.tumor_microenvironment * (internal.s1);
    dstatedt[2] = 0 + 1 * internal.tumor_microenvironment * (internal.s2) - 1 * internal.tumor_microenvironment * internal.u3 * I + 1 * internal.tumor_microenvironment * (internal.p2 * E * T / (internal.g3 + T));
    dstatedt[0] = 0 + 1 * internal.tumor_microenvironment * (internal.a * T) - 1 * internal.tumor_microenvironment * (internal.a * internal.b * T * T) - 1 * internal.tumor_microenvironment * (internal.aa * E * T / (internal.g2 + T));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "T", "E", "I"];
    this.metadata.internalOrder = {a: null, aa: null, b: null, c: null, E_init: null, g1: null, g2: null, g3: null, I_init: null, initial_E: null, initial_I: null, initial_T: null, p1: null, p2: null, s1: null, s2: null, T_init: null, tumor_microenvironment: null, u2: null, u3: null};
    this.metadata.variableOrder = {T: null, E: null, I: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
