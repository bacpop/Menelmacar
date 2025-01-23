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
    var state = Array(2).fill(0);
    state[0] = internal.initial_T;
    state[1] = internal.initial_N;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["b", "kn", "kt", "kxk", "N_init", "r0", "r1", "rn", "rt", "T_init", "txt"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "b", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kn", internal, 1000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kt", internal, 1200000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 0.028000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r0", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r1", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rn", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rt", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "txt", internal, 300000, -Infinity, Infinity, false);
    internal.initial_N = internal.N_init;
    internal.initial_T = internal.T_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const T = state[0];
    const N = state[1];
    dstatedt[1] = 0 + 1 * internal.tumor_microenvironment * (internal.rn * N * (1 - N / internal.kn)) + 1 * internal.tumor_microenvironment * (internal.kxk * T * (1 - T / internal.txt));
    dstatedt[0] = 0 + 1 * internal.tumor_microenvironment * (internal.rt * T * (1 - T / internal.kt)) - 1 * internal.tumor_microenvironment * (internal.b * internal.r0 * N / (internal.r1 + N));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "T", "N"];
    this.metadata.internalOrder = {b: null, initial_N: null, initial_T: null, kn: null, kt: null, kxk: null, N_init: null, r0: null, r1: null, rn: null, rt: null, T_init: null, tumor_microenvironment: null, txt: null};
    this.metadata.variableOrder = {T: null, N: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
