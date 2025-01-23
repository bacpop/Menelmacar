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
    var state = Array(5).fill(0);
    state[0] = internal.initial_C;
    state[1] = internal.initial_E;
    state[2] = internal.initial_T;
    state[3] = internal.initial_P;
    state[4] = internal.initial_A;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A_init", "a1", "a2", "a3", "b1", "b2", "C_init", "c1", "c2", "c3", "c4", "c5", "d", "e", "E_init", "k1", "k2", "k3", "k4", "P_init", "T_init", "u1", "u2", "u3", "u4", "u5", "y"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a3", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b1", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b2", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_init", internal, 9, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c1", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c2", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c4", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c5", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_init", internal, 1.0229999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u1", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u2", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u3", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u4", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u5", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y", internal, 0.01, -Infinity, Infinity, false);
    internal.initial_A = internal.A_init;
    internal.initial_C = internal.C_init;
    internal.initial_E = internal.E_init;
    internal.initial_P = internal.P_init;
    internal.initial_T = internal.T_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const C = state[0];
    const E = state[1];
    const T = state[2];
    const P = state[3];
    const A = state[4];
    dstatedt[4] = 0 + 1 * internal.tme * internal.d * P + 1 * internal.tme * (internal.e * T * A * (1 - A / internal.k4)) - 1 * internal.tme * internal.u5 * A;
    dstatedt[0] = 0 + 1 * internal.tme * (internal.a1 * C * (1 - C / internal.k1)) - 1 * internal.tme * internal.u1 * C - 1 * internal.tme * (internal.b1 * T * C);
    dstatedt[1] = 0 + 1 * internal.tme * (internal.a2 * E * (1 - E / internal.k2)) - 1 * internal.tme * internal.u2 * E - 1 * internal.tme * (internal.y * T * E);
    dstatedt[3] = 0 + 1 * internal.tme * (internal.y * T * E) - 1 * internal.tme * internal.u4 * P - 1 * internal.tme * internal.d * P;
    dstatedt[2] = 0 + 1 * internal.tme * (internal.a3 * T * T * (1 - T / internal.k3)) - 1 * internal.tme * internal.u3 * T - 1 * internal.tme * (internal.b2 * C * T);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "C", "E", "T", "P", "A"];
    this.metadata.internalOrder = {A_init: null, a1: null, a2: null, a3: null, b1: null, b2: null, C_init: null, c1: null, c2: null, c3: null, c4: null, c5: null, d: null, e: null, E_init: null, initial_A: null, initial_C: null, initial_E: null, initial_P: null, initial_T: null, k1: null, k2: null, k3: null, k4: null, P_init: null, T_init: null, tme: null, u1: null, u2: null, u3: null, u4: null, u5: null, y: null};
    this.metadata.variableOrder = {C: null, E: null, T: null, P: null, A: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
