export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Compartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_x1;
    state[1] = internal.initial_x2;
    state[2] = internal.initial_z;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha1", "alpha2", "beta1", "beta2", "g11", "g12", "g21", "g22", "k1", "k2", "x1_init", "x2_init", "z_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha1", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha2", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta1", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta2", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g11", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g12", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g21", internal, - 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g22", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.23999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.0016999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "z_init", internal, 0, -Infinity, Infinity, false);
    internal.gamma = internal.g12 * internal.g21 - (1 - internal.g11) * (1 - internal.g22);
    internal.initial_x1 = internal.x1_init;
    internal.initial_x2 = internal.x2_init;
    internal.initial_z = internal.z_init;
    internal.x1_bar = Math.pow((internal.beta1 / internal.alpha1), ((1 - internal.g22) / internal.gamma)) * Math.pow((internal.beta2 / internal.alpha2), (internal.g21 / internal.gamma));
    internal.x2_bar = Math.pow((internal.beta1 / internal.alpha1), (internal.g12 / internal.gamma)) * Math.pow((internal.beta2 / internal.alpha2), ((1 - internal.g11) / internal.gamma));
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const x1 = state[0];
    const x2 = state[1];
    dstatedt[0] = 0 + internal.alpha1 * Math.pow((x1), (internal.g11)) * Math.pow((x2), (internal.g21)) - internal.beta1 * x1;
    dstatedt[1] = 0 + internal.alpha2 * Math.pow((x1), (internal.g12)) * Math.pow((x2), (internal.g22)) - internal.beta2 * x2;
    var y1 = ((x1 > internal.x1_bar ? x1 - internal.x1_bar : 0));
    var y2 = ((x2 > internal.x2_bar ? x2 - internal.x2_bar : 0));
    dstatedt[2] = 0 + internal.k2 * y2 - internal.k1 * y1;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "x1", "x2", "z"];
    this.metadata.internalOrder = {alpha1: null, alpha2: null, beta1: null, beta2: null, Compartment: null, g11: null, g12: null, g21: null, g22: null, gamma: null, initial_x1: null, initial_x2: null, initial_z: null, k1: null, k2: null, x1_bar: null, x1_init: null, x2_bar: null, x2_init: null, z_init: null};
    this.metadata.variableOrder = {x1: null, x2: null, z: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
