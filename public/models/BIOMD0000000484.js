export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.default1 = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(2).fill(0);
    state[0] = internal.initial_S;
    state[1] = internal.initial_ES;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["ES_init", "k1", "k2", "S_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "ES_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_ES = internal.ES_init;
    internal.initial_S = internal.S_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const S = state[0];
    dstatedt[1] = 0 - 1 * internal.default1 * internal.k1 + 1 * internal.k2 * S;
    dstatedt[0] = 0 + 1 * internal.default1 * internal.k1 - 1 * internal.k2 * S;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "S", "ES"];
    this.metadata.internalOrder = {default1: null, ES_init: null, initial_ES: null, initial_S: null, k1: null, k2: null, S_init: null};
    this.metadata.variableOrder = {S: null, ES: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
