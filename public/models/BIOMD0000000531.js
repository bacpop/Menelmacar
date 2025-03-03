export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Cell = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(1).fill(0);
    state[0] = internal.initial_alpha;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha_init", "Ka", "kat50", "kb", "v50t50"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ka", internal, 1.4399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kat50", internal, 22.555847300854701, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kb", internal, 1.5999999999999999e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v50t50", internal, 5.63896182611591, -Infinity, Infinity, false);
    internal.initial_alpha = internal.alpha_init;
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
    this.metadata.ynames = ["t", "alpha"];
    this.metadata.internalOrder = {alpha_init: null, Cell: null, initial_alpha: null, Ka: null, kat50: null, kb: null, v50t50: null};
    this.metadata.variableOrder = {alpha: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
