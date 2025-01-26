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
    state[0] = internal.initial_M;
    state[1] = internal.initial_N;
    state[2] = internal.initial_Z;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "beta", "d1", "d2", "k1", "k2", "M_init", "N_init", "q", "r", "s", "Z_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d1", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d2", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Z_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_M = internal.M_init;
    internal.initial_N = internal.N_init;
    internal.initial_Z = internal.Z_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const M = state[0];
    const N = state[1];
    const Z = state[2];
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.q + internal.r * M * (1 - M / internal.k1)) - 1 * internal.compartment * (internal.alpha * M * N);
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.beta * N * Z) - 1 * internal.compartment * (internal.d1 * N);
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.s * Z * (1 - Z / internal.k2)) - 1 * internal.compartment * (internal.beta * N * Z + internal.d2 * Z);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "M", "N", "Z"];
    this.metadata.internalOrder = {alpha: null, beta: null, compartment: null, d1: null, d2: null, initial_M: null, initial_N: null, initial_Z: null, k1: null, k2: null, M_init: null, N_init: null, q: null, r: null, s: null, Z_init: null};
    this.metadata.variableOrder = {M: null, N: null, Z: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
