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
    var state = Array(4).fill(0);
    state[0] = internal.initial_T;
    state[1] = internal.initial_E;
    state[2] = internal.initial_I;
    state[3] = internal.initial_S;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "aa", "alpha", "c", "E_init", "g1", "g2", "g3", "g4", "gamma", "I_init", "kxk", "p1", "p2", "p3", "p4", "q1", "q2", "S_init", "T_init", "theta", "u1", "u2", "u3"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.17999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "aa", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c", internal, 0.035000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g1", internal, 20000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g2", internal, 100000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g3", internal, 20000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g4", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 10000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p1", internal, 0.1245, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p2", internal, 0.27000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p3", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p4", internal, 2.8399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q1", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q2", internal, 0.11210000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "theta", internal, 1000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u1", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u2", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u3", internal, 10, -Infinity, Infinity, false);
    internal.initial_E = internal.E_init;
    internal.initial_I = internal.I_init;
    internal.initial_S = internal.S_init;
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
    const S = state[3];
    dstatedt[1] = 0 - 1 * internal.tumor_microenvironment * internal.u1 * E + 1 * internal.tumor_microenvironment * (internal.c * T / (1 + internal.gamma * S)) + 1 * internal.tumor_microenvironment * (internal.p1 * E * I / (internal.g1 + I) * (internal.p1 - internal.q1 * S / (internal.q2 + S)));
    dstatedt[2] = 0 - 1 * internal.tumor_microenvironment * internal.u2 * I + 1 * internal.tumor_microenvironment * (internal.p3 * E * T / ((internal.g4 + T) * (1 + internal.alpha * S)));
    dstatedt[3] = 0 + 1 * internal.tumor_microenvironment * (internal.p4 * Math.pow((T), (2)) / (Math.pow((internal.theta), (2)) + Math.pow((T), (2)))) - 1 * internal.tumor_microenvironment * internal.u3 * S;
    dstatedt[0] = 0 + 1 * internal.tumor_microenvironment * (internal.a * T) - 1 * internal.tumor_microenvironment * (internal.a * Math.pow((T), (2)) / internal.kxk) - 1 * internal.tumor_microenvironment * (internal.aa * E * T / (internal.g2 + T)) + 1 * internal.tumor_microenvironment * (internal.p2 * S * T / (internal.g3 + S));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "T", "E", "I", "S"];
    this.metadata.internalOrder = {a: null, aa: null, alpha: null, c: null, E_init: null, g1: null, g2: null, g3: null, g4: null, gamma: null, I_init: null, initial_E: null, initial_I: null, initial_S: null, initial_T: null, kxk: null, p1: null, p2: null, p3: null, p4: null, q1: null, q2: null, S_init: null, T_init: null, theta: null, tumor_microenvironment: null, u1: null, u2: null, u3: null};
    this.metadata.variableOrder = {T: null, E: null, I: null, S: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
