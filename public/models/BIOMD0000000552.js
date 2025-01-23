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
    var aRel_init = internal.initial_a / 50;
    internal.initial_aRel = aRel_init;
    var state = Array(3).fill(0);
    state[0] = internal.initial_a;
    state[1] = internal.initial_b;
    state[2] = internal.initial_aRel;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a_init", "b_init", "k1", "k2", "k3", "k4"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.0070000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.33000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.0041999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0.01, -Infinity, Infinity, false);
    internal.initial_a = internal.a_init;
    internal.initial_b = internal.b_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const a = state[0];
    const b = state[1];
    dstatedt[2] = 0 + 0;
    dstatedt[0] = 0 - 1 * internal.Brain * (internal.k1 * a * b);
    dstatedt[1] = 0 + 1 * internal.Brain * (internal.k2) - 1 * internal.Brain * (internal.k3 * a) - 1 * internal.Brain * (internal.k4 * b);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "a", "b", "aRel"];
    this.metadata.internalOrder = {a_init: null, b_init: null, Brain: null, initial_a: null, initial_aRel: null, initial_b: null, k1: null, k2: null, k3: null, k4: null};
    this.metadata.variableOrder = {a: null, b: null, aRel: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
