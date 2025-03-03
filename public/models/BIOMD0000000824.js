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
    var state = Array(1).fill(0);
    state[0] = internal.initial_N;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "gamma_0", "K", "myu_0", "myu_1", "N_init", "p"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.043999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_0", internal, 18000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K", internal, 10000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "myu_0", internal, 0.17999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "myu_1", internal, 0.040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p", internal, 0.17000000000000001, -Infinity, Infinity, false);
    internal.initial_N = internal.N_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const N = state[0];
    var gamma = internal.gamma_0 * Math.exp(- internal.a * t);
    var myu = internal.myu_0 + internal.myu_1 * Math.pow((N), (2)) / (Math.pow((N), (2)) + Math.pow((internal.K), (2)));
    dstatedt[0] = 0 + 1 * internal.compartment * (gamma) + 1 * internal.compartment * (internal.p * N) - 1 * internal.compartment * (myu * N);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "N"];
    this.metadata.internalOrder = {a: null, compartment: null, gamma_0: null, initial_N: null, K: null, myu_0: null, myu_1: null, N_init: null, p: null};
    this.metadata.variableOrder = {N: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
