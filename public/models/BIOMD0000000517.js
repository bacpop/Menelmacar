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
    this.base.user.setUserScalar(user, "d0", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d1", internal, 0.54805971149999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d2", internal, 1.8886766180000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d3", internal, 0.1677359306, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K", internal, 106.09044077221699, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K03", internal, 0.78365666982827098, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K0X", internal, 0.153646265911768, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1X", internal, 15.364564486440401, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2X", internal, 2.7040583795426798, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N0_init", internal, 1.7158984244129301, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N1_init", internal, 26.803671255747101, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N2_init", internal, 44.6167755224769, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N3_init", internal, 1.53646349229917, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p01", internal, 0.63137809280000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p12", internal, 0.80504595889999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q03", internal, 0.93514944119999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r0", internal, 1.998624424, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r1", internal, 10.585818489999999, -Infinity, Infinity, false);
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
