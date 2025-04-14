export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Cell = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(2).fill(0);
    state[0] = internal.initial_P;
    state[1] = internal.initial_N;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["k_1", "k_2", "k1", "k2", "k3", "N_init", "P_init", "p0"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "k_1", internal, 6.6000000000000004e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_2", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.00021000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 7.5000000000000002e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 1.1599999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_init", internal, 10000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p0", internal, 10000, -Infinity, Infinity, false);
    internal.initial_N = internal.N_init;
    internal.initial_P = internal.P_init;
    internal.ModelValue_6 = internal.p0;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const P = state[0];
    const N = state[1];
    dstatedt[1] = 0 + 1 * internal.Cell * (internal.k2 * Math.pow((P), (2))) - 1 * internal.Cell * (internal.k_2 * Math.pow((N), (2))) - 1 * internal.Cell * internal.k3 * N;
    dstatedt[0] = 0 - 1 * internal.Cell * (internal.k1 * N * P) - 1 * internal.Cell * (2 * internal.k2 * Math.pow((P), (2))) + 1 * internal.Cell * (internal.k_1 * N);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "P", "N"];
    this.metadata.internalOrder = {Cell: null, initial_N: null, initial_P: null, k_1: null, k_2: null, k1: null, k2: null, k3: null, ModelValue_6: null, N_init: null, P_init: null, p0: null};
    this.metadata.variableOrder = {P: null, N: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
