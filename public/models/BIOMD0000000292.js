export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.c = 1;
    internal.Y = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_NADPH;
    state[1] = internal.initial_ATP;
    state[2] = internal.initial_X;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A0", "ATP_init", "k1", "k2", "k3", "k4", "N0", "NADPH_init", "X_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A0", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ATP_init", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.123, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.625, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0.61399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N0", internal, 1.2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NADPH_init", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_init", internal, 2, -Infinity, Infinity, false);
    internal.initial_ATP = internal.ATP_init;
    internal.initial_NADPH = internal.NADPH_init;
    internal.initial_X = internal.X_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const NADPH = state[0];
    const ATP = state[1];
    const X = state[2];
    var ADP = internal.A0 - ATP;
    dstatedt[2] = 0 + 1 * internal.c * internal.k2 * ATP - 1 * internal.c * internal.k1 * X;
    var NADP = internal.N0 - NADPH;
    dstatedt[1] = 0 + 2 * internal.c * internal.k3 * ADP * NADP - 1 * internal.c * internal.k2 * ATP - 1 * internal.c * internal.k1 * X;
    dstatedt[0] = 0 + 1 * internal.c * internal.k4 * NADP - 1 * internal.c * internal.k2 * ATP;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "NADPH", "ATP", "X"];
    this.metadata.internalOrder = {A0: null, ATP_init: null, c: null, initial_ATP: null, initial_NADPH: null, initial_X: null, k1: null, k2: null, k3: null, k4: null, N0: null, NADPH_init: null, X_init: null, Y: null};
    this.metadata.variableOrder = {NADPH: null, ATP: null, X: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
