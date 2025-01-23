export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(2).fill(0);
    state[0] = internal.initial_TFp53;
    state[1] = internal.initial_miR34a;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["g", "K", "k1", "k2", "k3", "k4", "k5", "miR34a_init", "TFp53_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "g", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0.059999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "miR34a_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TFp53_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_miR34a = internal.miR34a_init;
    internal.initial_TFp53 = internal.TFp53_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const TFp53 = state[0];
    const miR34a = state[1];
    dstatedt[1] = 0 + 1 * internal.cell * (internal.k4 * Math.pow((TFp53), (internal.g)) / (internal.K + Math.pow((TFp53), (internal.g)))) - 1 * internal.cell * internal.k5 * miR34a;
    dstatedt[0] = 0 + 1 * internal.cell * (internal.k1) + 1 * internal.cell * (internal.k2 * miR34a) - 1 * internal.cell * internal.k3 * TFp53;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "TFp53", "miR34a"];
    this.metadata.internalOrder = {cell: null, g: null, initial_miR34a: null, initial_TFp53: null, K: null, k1: null, k2: null, k3: null, k4: null, k5: null, miR34a_init: null, TFp53_init: null};
    this.metadata.variableOrder = {TFp53: null, miR34a: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
