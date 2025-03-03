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
    state[0] = internal.initial_N0;
    state[1] = internal.initial_N1;
    state[2] = internal.initial_N2;
    state[3] = internal.initial_N3;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["d0", "d1", "d2", "d3", "K", "K03", "K0X", "K1X", "K2X", "N0_init", "N1_init", "N2_init", "N3_init", "p01", "p12", "q03", "r0", "r1"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "d0", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d1", internal, 0.84093418519973795, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d2", internal, 2.20277069544492, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d3", internal, 0.037962253602184602, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K", internal, 120, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K03", internal, 1.5709821428999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K0X", internal, 1.5709821428999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1X", internal, 1.5709821428999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2X", internal, 1.5709821428999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N0_init", internal, 1.7544483141276499, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N1_init", internal, 27.40585059, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N2_init", internal, 45.6191494109, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N3_init", internal, 1.5709821428999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p01", internal, 0.81568933480720796, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p12", internal, 0.82737748481094298, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q03", internal, 0.093515315273862004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r0", internal, 1.99862442375025, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r1", internal, 6.0917318009931396, -Infinity, Infinity, false);
    internal.initial_N0 = internal.N0_init;
    internal.initial_N1 = internal.N1_init;
    internal.initial_N2 = internal.N2_init;
    internal.initial_N3 = internal.N3_init;
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
    const N3 = state[3];
    var p03 = internal.q03 * internal.K03 / (N3 + internal.K03);
    var T = N0 + N1 + N2 + N3;
    var f0 = internal.r0 * N0 * (1 - T / internal.K);
    var f1 = internal.r1 * N1 * (1 - T / internal.K);
    var p00 = 1 - internal.p01 - p03;
    dstatedt[0] = 0 - 1 * internal.d0 * N0 * internal.K0X / (N3 + internal.K0X) - 1 * internal.p01 * f0 + 1 * internal.p01 * f0 - 1 * p00 * f0 + 2 * p00 * f0 - 1 * p03 * f0 + 1 * p03 * f0;
    dstatedt[1] = 0 + 1 * internal.p01 * f0 - 1 * internal.d1 * N1 * internal.K1X / (N3 + internal.K1X) - 1 * internal.p12 * f1 + 1 * internal.p12 * f1 - 1 * internal.p11 * f1 + 2 * internal.p11 * f1;
    dstatedt[2] = 0 + 1 * internal.p12 * f1 - 1 * internal.d2 * N2 * internal.K2X / (N3 + internal.K2X);
    dstatedt[3] = 0 + 1 * p03 * f0 - 1 * internal.d3 * N3;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "N0", "N1", "N2", "N3"];
    this.metadata.internalOrder = {compartment: null, d0: null, d1: null, d2: null, d3: null, initial_N0: null, initial_N1: null, initial_N2: null, initial_N3: null, K: null, K03: null, K0X: null, K1X: null, K2X: null, N0_init: null, N1_init: null, N2_init: null, N3_init: null, p01: null, p11: null, p12: null, q03: null, r0: null, r1: null};
    this.metadata.variableOrder = {N0: null, N1: null, N2: null, N3: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
