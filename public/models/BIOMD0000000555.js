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
    this.base.user.checkUser(user, ["a", "Amyloid_init", "C", "e", "ka", "kxk", "n", "omega", "t1"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 2.0433835760532499, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Amyloid_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C", internal, 0.00068999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e", internal, 2.718, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ka", internal, 0.075423105224429701, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 0.20499999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 7.2000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "omega", internal, 35.299999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t1", internal, 27.1259461481608, -Infinity, Infinity, false);
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
    this.metadata.internalOrder = {a: null, Amyloid_init: null, Brain: null, C: null, e: null, initial_Amyloid: null, ka: null, kxk: null, n: null, omega: null, t1: null};
    this.metadata.variableOrder = {Amyloid: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
