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
    var alpha_init = 1 - 1 / (internal.kb * (Math.exp(internal.Ka * t) - 1) + 1);
    internal.initial_alpha = alpha_init;
    var state = Array(1).fill(0);
    state[0] = internal.initial_alpha;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Ka", "kb"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Ka", internal, 1.4399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kb", internal, 1.5999999999999999e-10, -Infinity, Infinity, false);
    internal.kat50 = Math.log(1 / internal.kb + 1);
    internal.v50t50 = 1 / 4 * (internal.kb + 1) * Math.log(1 / internal.kb + 1);
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
    this.metadata.ynames = ["t", "alpha"];
    this.metadata.internalOrder = {Cell: null, initial_alpha: null, Ka: null, kat50: null, kb: null, v50t50: null};
    this.metadata.variableOrder = {alpha: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
