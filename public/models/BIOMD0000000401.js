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
    state[0] = internal.initial_C;
    state[1] = internal.initial_B;
    state[2] = internal.initial_z;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha1", "alpha2", "B_init", "beta1", "beta2", "C_init", "g11", "g12", "g21", "g22", "k1", "k2", "z_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha1", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha2", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B_init", internal, 212.13, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta1", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta2", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_init", internal, 11.06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g11", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g12", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g21", internal, - 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g22", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.23999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.0016999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "z_init", internal, 100, -Infinity, Infinity, false);
    internal.gamma = internal.g12 * internal.g21 - (1 - internal.g11) * (1 - internal.g22);
    internal.initial_B = internal.B_init;
    internal.initial_C = internal.C_init;
    internal.initial_z = internal.z_init;
    internal.B_bar = Math.pow((internal.beta1 / internal.alpha1), (internal.g12 / internal.gamma)) * Math.pow((internal.beta2 / internal.alpha2), ((1 - internal.g11) / internal.gamma));
    internal.C_bar = Math.pow((internal.beta1 / internal.alpha1), ((1 - internal.g22) / internal.gamma)) * Math.pow((internal.beta2 / internal.alpha2), (internal.g21 / internal.gamma));
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    dstatedt[1] = 0;
    dstatedt[0] = 0;
    dstatedt[2] = 0;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "C", "B", "z"];
    this.metadata.internalOrder = {alpha1: null, alpha2: null, B_bar: null, B_init: null, beta1: null, beta2: null, C_bar: null, C_init: null, Compartment: null, g11: null, g12: null, g21: null, g22: null, gamma: null, initial_B: null, initial_C: null, initial_z: null, k1: null, k2: null, z_init: null};
    this.metadata.variableOrder = {C: null, B: null, z: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
