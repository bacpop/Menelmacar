export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment_ = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(1).fill(0);
    state[0] = internal.initial_f;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "f_init", "k1", "k2"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 5.8499999999999999e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 2.79e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 2.29, -Infinity, Infinity, false);
    internal.initial_f = internal.f_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const f = state[0];
    dstatedt[0] = 0 + 1 * internal.compartment_ * (internal.k1) + 1 * internal.compartment_ * (internal.k2 * internal.a * f) - 1 * internal.compartment_ * (internal.k1 * f) - 1 * internal.compartment_ * (internal.k2 * internal.a * f * f);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "f"];
    this.metadata.internalOrder = {a: null, compartment_: null, f_init: null, initial_f: null, k1: null, k2: null};
    this.metadata.variableOrder = {f: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
