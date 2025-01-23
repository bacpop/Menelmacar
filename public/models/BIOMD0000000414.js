export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(1).fill(0);
    state[0] = internal.initial_VENUS;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["lambda_star", "p1_star", "p2", "qj_star", "VENUS_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "lambda_star", internal, 0.52000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p1_star", internal, 0.056000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p2", internal, 0.0053, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "qj_star", internal, 0.16, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VENUS_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_VENUS = internal.VENUS_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const VENUS = state[0];
    dstatedt[0] = 0 + 1 * internal.p2 - 1 * internal.lambda_star * internal.p2 * VENUS - 1 * internal.p2 * VENUS / (internal.p1_star * VENUS + internal.qj_star);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "VENUS"];
    this.metadata.internalOrder = {cell: null, initial_VENUS: null, lambda_star: null, p1_star: null, p2: null, qj_star: null, VENUS_init: null};
    this.metadata.variableOrder = {VENUS: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
