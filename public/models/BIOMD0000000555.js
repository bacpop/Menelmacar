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
    var Amyloid_init = 1 - Math.exp(- Math.pow((t / internal.omega), (internal.n)));
    internal.initial_Amyloid = Amyloid_init;
    var state = Array(1).fill(0);
    state[0] = internal.initial_Amyloid;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["C", "e", "kxk", "n", "omega"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "C", internal, 0.00068999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e", internal, 2.718, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 0.20499999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 7.2000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "omega", internal, 35.299999999999997, -Infinity, Infinity, false);
    internal.a = internal.n * Math.exp(- (internal.n - 1) / internal.n) - 1;
    internal.ka = internal.kxk / internal.e;
    internal.t1 = (Math.log(1 / internal.C) - internal.e + 1) * (1 / internal.kxk);
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    dstatedt[0] = 0 + 0;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Amyloid"];
    this.metadata.internalOrder = {a: null, Brain: null, C: null, e: null, initial_Amyloid: null, ka: null, kxk: null, n: null, omega: null, t1: null};
    this.metadata.variableOrder = {Amyloid: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
