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
    var state = Array(4).fill(0);
    state[0] = internal.initial_C;
    state[1] = internal.initial_B;
    state[2] = internal.initial_z;
    state[3] = internal.initial_Tumour;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha1", "alpha2", "B_init", "beta1", "beta2", "C_init", "g11", "g12", "g21", "g22", "gammaT", "k1", "k2", "LT", "r11", "r12", "r21", "r22", "Tumour_init", "v1", "v2", "z_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha1", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha2", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta1", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta2", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g11", internal, 1.1000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g12", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g21", internal, - 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g22", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gammaT", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.074800000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.00063949999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "LT", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r11", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r12", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r21", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r22", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tumour_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v1", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v2", internal, 0.0080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "z_init", internal, 0, -Infinity, Infinity, false);
    internal.gamma = internal.g12 / (1 + internal.r12) * internal.g21 * (1 + internal.r21) - (1 - internal.g11 * (1 + internal.r11)) * (1 - internal.g22 + internal.r22);
    internal.initial_B = internal.B_init;
    internal.initial_C = internal.C_init;
    internal.initial_Tumour = internal.Tumour_init;
    internal.initial_z = internal.z_init;
    internal.B_bar = Math.pow((internal.beta1 / internal.alpha1), (internal.g12 / (1 + internal.r12) / internal.gamma)) * Math.pow((internal.beta2 / internal.alpha2), ((1 - internal.g11 * (1 + internal.r11)) / internal.gamma));
    internal.C_bar = Math.pow((internal.beta1 / internal.alpha1), ((1 - internal.g22 + internal.r22) / internal.gamma)) * Math.pow((internal.beta2 / internal.alpha2), (internal.g21 * (1 + internal.r21) / internal.gamma));
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const C = state[0];
    const B = state[1];
    const Tumour = state[3];
    dstatedt[0] = 0 + internal.alpha1 * Math.pow((C), (internal.g11 * (1 + internal.r11 * Tumour / internal.LT))) * Math.pow((B), (internal.g21 * (1 + internal.r21 * Tumour / internal.LT))) - internal.beta1 * C;
    var V1 = ((t >= 600 ? internal.v1 : 0));
    var V2 = ((t >= 600 ? internal.v2 : 0));
    dstatedt[1] = 0 + internal.alpha2 * Math.pow((C), (internal.g12 / (1 + internal.r12 * Tumour / internal.LT))) * Math.pow((B), (internal.g22 - internal.r22 * Tumour / internal.LT)) - (internal.beta2 - V1) * B;
    dstatedt[3] = 0 + (internal.gammaT - V2) * Tumour * Math.log(internal.LT / Tumour);
    var y1 = ((C > internal.C_bar ? C - internal.C_bar : 0));
    var y2 = ((B > internal.B_bar ? B - internal.B_bar : 0));
    dstatedt[2] = 0 + internal.k2 * y2 - internal.k1 * y1;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "C", "B", "z", "Tumour"];
    this.metadata.internalOrder = {alpha1: null, alpha2: null, B_bar: null, B_init: null, beta1: null, beta2: null, C_bar: null, C_init: null, Compartment: null, g11: null, g12: null, g21: null, g22: null, gamma: null, gammaT: null, initial_B: null, initial_C: null, initial_Tumour: null, initial_z: null, k1: null, k2: null, LT: null, r11: null, r12: null, r21: null, r22: null, Tumour_init: null, v1: null, v2: null, z_init: null};
    this.metadata.variableOrder = {C: null, B: null, z: null, Tumour: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
