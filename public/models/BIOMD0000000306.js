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
    var state = Array(2).fill(0);
    state[0] = internal.initial_R;
    state[1] = internal.initial_X;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Et", "J3", "J4", "k0", "k1", "k2", "k2_prime", "k3", "k4", "k5", "k6", "R_init", "X_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Et", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "J3", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "J4", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k0", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2_prime", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 0.074999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_R = internal.R_init;
    internal.initial_X = internal.X_init;
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
    const X = state[1];
    dstatedt[1] = 0 + 1 * internal.env * internal.k5 * R - 1 * internal.env * internal.k6 * X;
    var Ep = (2 * internal.k3 * R * internal.J4 / (internal.k4 - internal.k3 * R + internal.J3 * internal.k4 + internal.J4 * internal.k3 * R + Math.pow((Math.pow((internal.k4 - internal.k3 * R + internal.J3 * internal.k4 + internal.J4 * internal.k3 * R), (2)) - 4 * (internal.k4 - internal.k3 * R) * internal.k3 * R * internal.J4), (1 / 2)))) * internal.Et;
    dstatedt[0] = 0 + 1 * internal.env * internal.k0 * Ep + 1 * internal.env * internal.k1 * internal.S - 1 * internal.env * internal.k2 * R - 1 * internal.env * internal.k2_prime * R * X;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "R", "X"];
    this.metadata.internalOrder = {env: null, Et: null, initial_R: null, initial_X: null, J3: null, J4: null, k0: null, k1: null, k2: null, k2_prime: null, k3: null, k4: null, k5: null, k6: null, Km3: null, Km4: null, R_init: null, S: null, X_init: null};
    this.metadata.variableOrder = {R: null, X: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
