export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.env = 1;
    internal.S = 0;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(1).fill(0);
    state[0] = internal.initial_R;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Et", "J3", "J4", "k0", "k1", "k2", "k3", "k4", "R_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Et", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "J3", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "J4", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k0", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_R = internal.R_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const R = state[0];
    var Ep = (2 * internal.k3 * R * internal.J4 / (internal.k4 - internal.k3 * R + internal.J3 * internal.k4 + internal.J4 * internal.k3 * R + Math.pow((Math.pow((internal.k4 - internal.k3 * R + internal.J3 * internal.k4 + internal.J4 * internal.k3 * R), (2)) - 4 * (internal.k4 - internal.k3 * R) * internal.k3 * R * internal.J4), (1 / 2))));
    dstatedt[0] = 0 + 1 * internal.env * internal.k0 * Ep + 1 * internal.env * internal.k1 * internal.S - 1 * internal.env * internal.k2 * R;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "R"];
    this.metadata.internalOrder = {env: null, Et: null, initial_R: null, J3: null, J4: null, k0: null, k1: null, k2: null, k3: null, k4: null, R_init: null, S: null};
    this.metadata.variableOrder = {R: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
