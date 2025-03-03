export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(6).fill(0);
    state[0] = internal.initial_y1;
    state[1] = internal.initial_y2;
    state[2] = internal.initial_y3;
    state[3] = internal.initial_y4;
    state[4] = internal.initial_y5;
    state[5] = internal.initial_y6;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["emax", "k1", "k1_double_prime", "k1_prime", "k2", "k3", "k4", "k4_double_prime", "k4a", "k4i", "k6", "phi1", "phi2", "phi3", "phi4a", "phi4i", "phi6", "y1_init", "y2_init", "y3_init", "y4_init", "y5_init", "y6_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "emax", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1_double_prime", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1_prime", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0.089999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4_double_prime", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4a", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4i", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "phi1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "phi2", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "phi3", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "phi4a", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "phi4i", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "phi6", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y1_init", internal, 0.014, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y2_init", internal, 0.0060000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y4_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y5_init", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y6_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_y1 = internal.y1_init;
    internal.initial_y2 = internal.y2_init;
    internal.initial_y3 = internal.y3_init;
    internal.initial_y4 = internal.y4_init;
    internal.initial_y5 = internal.y5_init;
    internal.initial_y6 = internal.y6_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const y1 = state[0];
    const y2 = state[1];
    const y3 = state[2];
    const y4 = state[3];
    const y5 = state[4];
    const y6 = state[5];
    dstatedt[0] = 0 + 1 * internal.emax * internal.k1 * y1 / (internal.k1 * y1 + (internal.k1_prime + internal.k1_double_prime * y1) * y2) - 1 * internal.phi1 * y1;
    dstatedt[1] = 0 + 1 * internal.k2 * y1 - 1 * internal.k3 * y2 * y5 - 1 * internal.phi2 * y2;
    dstatedt[2] = 0 + 1 * internal.k3 * y2 * y5 - 1 * internal.phi3 * y3;
    dstatedt[3] = 0 + 1 * internal.k4 * y1 + 1 * internal.k4_double_prime * y6 - 1 * internal.k4i * y4 * y5 + 1 * internal.k4a * y5 - 1 * internal.phi4i * y4;
    dstatedt[4] = 0 + 1 * internal.k4i * y4 * y5 - 1 * internal.k4a * y5 - 1 * internal.phi4a * y5;
    var F6 = ((t <= 60 ? 0.043999999999999997 : 0));
    dstatedt[5] = 0 + 1 * internal.k6 * y1 + 1 * F6 - 1 * internal.phi6 * y6;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "y1", "y2", "y3", "y4", "y5", "y6"];
    this.metadata.internalOrder = {compartment: null, emax: null, initial_y1: null, initial_y2: null, initial_y3: null, initial_y4: null, initial_y5: null, initial_y6: null, k1: null, k1_double_prime: null, k1_prime: null, k2: null, k3: null, k4: null, k4_double_prime: null, k4a: null, k4i: null, k6: null, phi1: null, phi2: null, phi3: null, phi4a: null, phi4i: null, phi6: null, y1_init: null, y2_init: null, y3_init: null, y4_init: null, y5_init: null, y6_init: null};
    this.metadata.variableOrder = {y1: null, y2: null, y3: null, y4: null, y5: null, y6: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
