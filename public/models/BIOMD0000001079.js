export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.default_compartment = 1;
    internal.initial_APC = 0.040000000000000001;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(2).fill(0);
    state[0] = internal.initial_CycCdk;
    state[1] = internal.initial_APC;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "bdeg", "CycCdk_init", "epsilon", "K", "ks", "n", "r"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 4.1600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "bdeg", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CycCdk_init", internal, 17.449999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "epsilon", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ks", internal, 1.1000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 0.5, -Infinity, Infinity, false);
    internal.initial_CycCdk = internal.CycCdk_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const CycCdk = state[0];
    const APC = state[1];
    dstatedt[1] = 1 / internal.epsilon * (Math.pow((CycCdk), (internal.n)) / (Math.pow((internal.K * (1 + internal.alpha * APC * (APC - 1) * (APC - internal.r))), (internal.n)) + Math.pow((CycCdk), (internal.n))) - APC);
    dstatedt[0] = 0 + 1 * internal.default_compartment * (internal.ks / internal.default_compartment) - 1 * internal.default_compartment * (internal.bdeg * CycCdk * APC / internal.default_compartment);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "CycCdk", "APC"];
    this.metadata.internalOrder = {alpha: null, bdeg: null, CycCdk_init: null, default_compartment: null, epsilon: null, initial_APC: null, initial_CycCdk: null, K: null, ks: null, n: null, r: null};
    this.metadata.variableOrder = {CycCdk: null, APC: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
