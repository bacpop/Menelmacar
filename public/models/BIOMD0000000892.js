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
    var state = Array(4).fill(0);
    state[0] = internal.initial_T;
    state[1] = internal.initial_I;
    state[2] = internal.initial_VI;
    state[3] = internal.initial_VNI;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "beta", "c", "d1", "d2", "d3", "I_init", "kxk", "n1", "nr", "r", "s", "T_init", "VI_init", "VNI_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 2.2499999999999999e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 2.8999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d1", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d3", internal, 6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_init", internal, 1000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 36000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n1", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nr", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 1.99, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_init", internal, 1000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VI_init", internal, 10000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VNI_init", internal, 1000000, -Infinity, Infinity, false);
    internal.initial_I = internal.I_init;
    internal.initial_T = internal.T_init;
    internal.initial_VI = internal.VI_init;
    internal.initial_VNI = internal.VNI_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const T = state[0];
    const I = state[1];
    const VI = state[2];
    const VNI = state[3];
    dstatedt[1] = 0 + 1 * internal.compartment * ((1 - internal.c * internal.n1) * internal.alpha * VI * T) - 1 * internal.compartment * (internal.d2 * I);
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.s + internal.r * T * (1 - (T + 1) / internal.kxk)) - 1 * internal.compartment * (internal.d1 * T + (1 - internal.c * internal.n1) * internal.alpha * VI * T);
    dstatedt[2] = 0 + 1 * internal.compartment * ((1 - (internal.nr + internal.n1) / 2) * internal.beta * I) - 1 * internal.compartment * (internal.d3 * VI);
    dstatedt[3] = 0 + 1 * internal.compartment * ((internal.nr + internal.n1) / 2 * internal.beta * I) - 1 * internal.compartment * (internal.d3 * VNI);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "T", "I", "VI", "VNI"];
    this.metadata.internalOrder = {alpha: null, beta: null, c: null, compartment: null, d1: null, d2: null, d3: null, I_init: null, initial_I: null, initial_T: null, initial_VI: null, initial_VNI: null, kxk: null, n1: null, nr: null, r: null, s: null, T_init: null, VI_init: null, VNI_init: null};
    this.metadata.variableOrder = {T: null, I: null, VI: null, VNI: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
