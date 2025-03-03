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
    this.base.user.checkUser(user, ["Et", "J3", "J4", "k0", "k2", "k3", "k4", "R_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Et", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "J3", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "J4", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k0", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_R = internal.R_init;
    internal.Km3 = internal.J3 * internal.Et;
    internal.Km4 = internal.J4 * internal.Et;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const R = state[0];
    var E = internal.Et * (2 * internal.k3 * internal.J4 / (internal.k4 * R - internal.k3 + internal.J3 * internal.k4 * R + internal.J4 * internal.k3 + Math.pow((Math.pow((internal.k4 * R - internal.k3 + internal.J3 * internal.k4 * R + internal.J4 * internal.k3), (2)) - 4 * (internal.k4 * R - internal.k3) * internal.k3 * internal.J4), (1 / 2))));
    dstatedt[0] = 0 + 1 * internal.env * internal.k0 * E - 1 * internal.env * internal.k2 * R * internal.S;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "R"];
    this.metadata.internalOrder = {env: null, Et: null, initial_R: null, J3: null, J4: null, k0: null, k2: null, k3: null, k4: null, Km3: null, Km4: null, R_init: null, S: null};
    this.metadata.variableOrder = {R: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
