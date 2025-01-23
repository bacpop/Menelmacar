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
    state[0] = internal.initial_CDK1_active;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a1", "b1", "CDK1_active_init", "k1", "n1"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CDK1_active_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n1", internal, 8, -Infinity, Infinity, false);
    internal.initial_CDK1_active = internal.CDK1_active_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const CDK1_active = state[0];
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.a1) - 1 * internal.compartment * (internal.b1 * Math.pow((CDK1_active), (internal.n1 + 1)) / (Math.pow((internal.k1), (internal.n1)) + Math.pow((CDK1_active), (internal.n1))));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "CDK1_active"];
    this.metadata.internalOrder = {a1: null, b1: null, CDK1_active_init: null, compartment: null, initial_CDK1_active: null, k1: null, n1: null};
    this.metadata.variableOrder = {CDK1_active: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
