export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Brain = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(1).fill(0);
    state[0] = internal.initial_Amyloid;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Amyloid_init", "C", "C_0", "deltamt", "gamma", "ka", "kb", "sigmao", "V"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Amyloid_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_0", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "deltamt", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ka", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kb", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigmao", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V", internal, 1, -Infinity, Infinity, false);
    internal.initial_Amyloid = internal.Amyloid_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    dstatedt[0] = 0;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Amyloid"];
    this.metadata.internalOrder = {Amyloid_init: null, Brain: null, C: null, C_0: null, deltamt: null, gamma: null, initial_Amyloid: null, ka: null, kb: null, sigmao: null, V: null};
    this.metadata.variableOrder = {Amyloid: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
