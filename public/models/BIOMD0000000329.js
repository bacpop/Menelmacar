export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1e-13;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_a;
    state[1] = internal.initial_b;
    state[2] = internal.initial_c;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a_init", "b_init", "c_init", "constant", "Km", "v", "V"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a_init", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_init", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c_init", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "constant", internal, 13.58, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km", internal, 0.16, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v", internal, 0.21199999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V", internal, 153, -Infinity, Infinity, false);
    internal.initial_a = internal.a_init;
    internal.initial_b = internal.b_init;
    internal.initial_c = internal.c_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const a = state[0];
    const b = state[1];
    const c = state[2];
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.v) + 1 * internal.compartment * (internal.constant * a) - 1 * internal.compartment * (internal.V * b * a / (internal.Km + a)) - 1 * internal.compartment * (internal.V * c * a / (internal.Km + a));
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.constant * a) - 1 * internal.compartment * (internal.V * b / (internal.Km + b));
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.constant * a) - 1 * internal.compartment * (internal.V * c / (internal.Km + c));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "a", "b", "c"];
    this.metadata.internalOrder = {a_init: null, b_init: null, c_init: null, compartment: null, constant: null, initial_a: null, initial_b: null, initial_c: null, Km: null, v: null, V: null};
    this.metadata.variableOrder = {a: null, b: null, c: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
