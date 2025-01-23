export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.env = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var E_init = internal.Et * (2 * internal.k3 * internal.J4 / (internal.k4 * internal.initial_R - internal.k3 + internal.J3 * internal.k4 * internal.initial_R + internal.J4 * internal.k3 + Math.pow((Math.pow((internal.k4 * internal.initial_R - internal.k3 + internal.J3 * internal.k4 * internal.initial_R + internal.J4 * internal.k3), (2)) - 4 * (internal.k4 * internal.initial_R - internal.k3) * internal.k3 * internal.J4), (1 / 2))));
    var Ep_init = internal.Et - internal.initial_E;
    internal.initial_E = E_init;
    internal.initial_Ep = Ep_init;
    var state = Array(4).fill(0);
    state[0] = internal.initial_R;
    state[1] = internal.initial_S;
    state[2] = internal.initial_Ep;
    state[3] = internal.initial_E;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Et", "J3", "J4", "k0", "k1", "k2", "k2_prime", "k3", "k4", "R_init", "S_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Et", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "J3", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "J4", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k0", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2_prime", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_R = internal.R_init;
    internal.initial_S = internal.S_init;
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
    const S = state[1];
    const E = state[3];
    dstatedt[3] = 0 + 0;
    dstatedt[2] = 0 + 0;
    dstatedt[1] = 0;
    dstatedt[0] = 0 + 1 * internal.env * internal.k0 + 1 * internal.env * internal.k1 * S - 1 * internal.env * internal.k2 * R - 1 * internal.env * internal.k2_prime * R * E;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "R", "S", "Ep", "E"];
    this.metadata.internalOrder = {env: null, Et: null, initial_E: null, initial_Ep: null, initial_R: null, initial_S: null, J3: null, J4: null, k0: null, k1: null, k2: null, k2_prime: null, k3: null, k4: null, Km3: null, Km4: null, R_init: null, S_init: null};
    this.metadata.variableOrder = {R: null, S: null, Ep: null, E: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
