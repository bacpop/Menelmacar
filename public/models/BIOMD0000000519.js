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
    this.base.user.checkUser(user, ["d0", "d1", "d2", "K", "N0_init", "N1_init", "N2_init", "p01", "p12", "r0", "r1"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "d0", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d1", internal, 0.42046709259986897, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d2", internal, 1.10138534772246, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K", internal, 120, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N0_init", internal, 1.7544483141276499, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N1_init", internal, 27.40585059, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N2_init", internal, 45.6191494109, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p01", internal, 0.85569985569985596, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p12", internal, 0.82737748481094298, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r0", internal, 1.8389868522466499, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r1", internal, 5.8801023201021199, -Infinity, Infinity, false);
    internal.initial_N0 = internal.N0_init;
    internal.initial_N1 = internal.N1_init;
    internal.initial_N2 = internal.N2_init;
    internal.p00 = 1 - internal.p01;
    internal.p11 = 1 - internal.p12;
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
    var T = N0 + N1 + N2;
    var f0 = internal.r0 * N0 * (1 - T / internal.K);
    var f1 = internal.r1 * N1 * (1 - T / internal.K);
    dstatedt[0] = 0 - 1 * internal.d0 * N0 - 1 * internal.p01 * f0 + 1 * internal.p01 * f0 - 1 * internal.p00 * f0 + 2 * internal.p00 * f0;
    dstatedt[1] = 0 + 1 * internal.p01 * f0 - 1 * internal.d1 * N1 - 1 * internal.p12 * f1 + 1 * internal.p12 * f1 - 1 * internal.p11 * f1 + 2 * internal.p11 * f1;
    dstatedt[2] = 0 + 1 * internal.p12 * f1 - 1 * internal.d2 * N2;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "N0", "N1", "N2"];
    this.metadata.internalOrder = {compartment: null, d0: null, d1: null, d2: null, initial_N0: null, initial_N1: null, initial_N2: null, K: null, N0_init: null, N1_init: null, N2_init: null, p00: null, p01: null, p11: null, p12: null, r0: null, r1: null};
    this.metadata.variableOrder = {N0: null, N1: null, N2: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
