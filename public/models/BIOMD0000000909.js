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
    var state = Array(4).fill(0);
    state[0] = internal.initial_N;
    state[1] = internal.initial_T;
    state[2] = internal.initial_I;
    state[3] = internal.initial_u;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a1", "a2", "a3", "alpha", "b1", "b2", "c1", "c2", "c3", "c4", "d1", "d2", "I_init", "N_init", "p", "r1", "r2", "s", "T_init", "u_init", "v"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a1", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a2", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a3", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c2", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c4", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d1", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r1", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s", internal, 0.33000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v", internal, 0, -Infinity, Infinity, false);
    internal.initial_I = internal.I_init;
    internal.initial_N = internal.N_init;
    internal.initial_T = internal.T_init;
    internal.initial_u = internal.u_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const N = state[0];
    const T = state[1];
    const I = state[2];
    const u = state[3];
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.s + internal.p * I * T / (internal.alpha + T)) - 1 * internal.compartment * (internal.c1 * I * T + internal.d1 * I + internal.a1 * (1 - Math.exp(- u)) * I);
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.r2 * N * (1 - internal.b2 * N)) - 1 * internal.compartment * (internal.c4 * T * N + internal.a3 * (1 - Math.exp(- u)) * N);
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.r1 * T * (1 - internal.b1 * T)) - 1 * internal.compartment * (internal.c2 * I * T + internal.c3 * T * N + internal.a2 * (1 - Math.exp(- u)) * T);
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.v) - 1 * internal.compartment * (internal.d2 * u);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "N", "T", "I", "u"];
    this.metadata.internalOrder = {a1: null, a2: null, a3: null, alpha: null, b1: null, b2: null, c1: null, c2: null, c3: null, c4: null, compartment: null, d1: null, d2: null, I_init: null, initial_I: null, initial_N: null, initial_T: null, initial_u: null, N_init: null, p: null, r1: null, r2: null, s: null, T_init: null, u_init: null, v: null};
    this.metadata.variableOrder = {N: null, T: null, I: null, u: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
