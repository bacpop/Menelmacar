export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.initial_T = 0;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var S_init = 1 - (internal.initial_O + internal.initial_I1 + internal.initial_I2);
    internal.initial_S = S_init;
    var state = Array(6).fill(0);
    state[0] = internal.initial_S;
    state[1] = internal.initial_O;
    state[2] = internal.initial_I1;
    state[3] = internal.initial_I2;
    state[4] = internal.initial_c;
    state[5] = internal.initial_T;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha1", "alpha4", "beta1", "beta4", "c_init", "I1_init", "I2_init", "Jinflux_0", "k_1", "k2", "k3", "k5", "kflux", "Kp", "O_init", "t_constant", "Vp"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha1", internal, 40, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha4", internal, 0.059999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta1", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta4", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Jinflux_0", internal, 0.025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_1", internal, 0.88, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kflux", internal, 22, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kp", internal, 0.54000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "O_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t_constant", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vp", internal, 0.20000000000000001, -Infinity, Infinity, false);
    internal.initial_c = internal.c_init;
    internal.initial_I1 = internal.I1_init;
    internal.initial_I2 = internal.I2_init;
    internal.initial_O = internal.O_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const T = state[5];
    const S = state[0];
    const O = state[1];
    const I1 = state[2];
    const I2 = state[3];
    const c = state[4];
    dstatedt[0] = 0 + 0;
    dstatedt[5] = 1;
    dstatedt[4] = 0 + 1 * internal.compartment * (internal.kflux * Math.pow((O), (4)) / internal.compartment) - 1 * internal.compartment * (internal.Vp * Math.pow((c), (2)) / (Math.pow((internal.Kp), (2)) + Math.pow((c), (2))) / internal.compartment) + 1 * internal.compartment * (internal.Jinflux_0 / internal.compartment);
    var k1 = internal.alpha1 * Math.pow((c), (3)) / (Math.pow((internal.beta1), (3)) + Math.pow((c), (3)));
    var p = 0.59999999999999998 * (1 - Math.exp(- T / internal.t_constant));
    dstatedt[1] = 0 + 1 * internal.compartment * ((k1 * p * S - internal.k_1 * O) / internal.compartment) - 1 * internal.compartment * (internal.k2 * O / internal.compartment);
    var k4 = internal.alpha4 * p / (internal.beta4 + p);
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.k2 * O / internal.compartment) - 1 * internal.compartment * (internal.k3 * I1 / internal.compartment) - 1 * internal.compartment * (k4 * I1 / internal.compartment);
    dstatedt[3] = 0 + 1 * internal.compartment * (k4 * I1 / internal.compartment) - 1 * internal.compartment * (internal.k5 * I2 / internal.compartment);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "S", "O", "I1", "I2", "c", "T"];
    this.metadata.internalOrder = {alpha1: null, alpha4: null, beta1: null, beta4: null, c_init: null, compartment: null, I1_init: null, I2_init: null, initial_c: null, initial_I1: null, initial_I2: null, initial_O: null, initial_S: null, initial_T: null, Jinflux_0: null, k_1: null, k2: null, k3: null, k5: null, kflux: null, Kp: null, O_init: null, t_constant: null, Vp: null};
    this.metadata.variableOrder = {S: null, O: null, I1: null, I2: null, c: null, T: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
