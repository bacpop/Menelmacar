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
    state[0] = internal.initial_N0;
    state[1] = internal.initial_N1;
    state[2] = internal.initial_N2;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a0", "a1", "b0", "b1", "c0", "c1", "d0", "d1", "d2", "m0", "m1", "N0_init", "N1_init", "N2_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a0", internal, 0.099999999999999797, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a1", internal, 0.23925480605197899, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b0", internal, 0.218, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b1", internal, 0.54700000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c0", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d0", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d1", internal, 0.26300000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d2", internal, 1.8300000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m0", internal, 2.92408052354609, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m1", internal, 29.2408052354609, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N0_init", internal, 1.7544483141276499, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N1_init", internal, 43.814670409879703, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N2_init", internal, 27.455881276892601, -Infinity, Infinity, false);
    internal.initial_N0 = internal.N0_init;
    internal.initial_N1 = internal.N1_init;
    internal.initial_N2 = internal.N2_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const N0 = state[0];
    const N1 = state[1];
    const N2 = state[2];
    dstatedt[0] = 0 - 1 * internal.d0 * N0 + 1 * (internal.b0 + internal.c0 * N0 / (N0 + internal.m0)) * N0 - 1 * (internal.b0 + internal.c0 * N0 / (N0 + internal.m0)) * N0 + 2 * internal.a0 * N0 - 1 * internal.a0 * N0;
    dstatedt[1] = 0 + 1 * (internal.b0 + internal.c0 * N0 / (N0 + internal.m0)) * N0 - 1 * internal.d1 * N1 + 1 * (internal.b1 + internal.c1 * N1 / (N1 + internal.m1)) * N1 - 1 * (internal.b1 + internal.c1 * N1 / (N1 + internal.m1)) * N1 + 2 * internal.a1 * N1 - 1 * internal.a1 * N1;
    dstatedt[2] = 0 + 1 * (internal.b1 + internal.c1 * N1 / (N1 + internal.m1)) * N1 - 1 * internal.d2 * N2;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "N0", "N1", "N2"];
    this.metadata.internalOrder = {a0: null, a1: null, b0: null, b1: null, c0: null, c1: null, compartment: null, d0: null, d1: null, d2: null, initial_N0: null, initial_N1: null, initial_N2: null, m0: null, m1: null, N0_init: null, N1_init: null, N2_init: null};
    this.metadata.variableOrder = {N0: null, N1: null, N2: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
