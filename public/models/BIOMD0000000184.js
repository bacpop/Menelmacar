export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.ER = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_X;
    state[1] = internal.initial_Y;
    state[2] = internal.initial_Z;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["k_CaA", "k_CaI", "k2", "kdeg", "kf", "kip3", "kout", "kp", "m", "n", "vin", "vM2", "vM3", "vp", "X_init", "Y_init", "Z_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "k_CaA", internal, 0.14999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_CaI", internal, 0.14999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdeg", internal, 0.080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kip3", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kout", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kp", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m", internal, 2.2000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 2.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vin", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vM2", internal, 15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vM3", internal, 40, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vp", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Y_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Z_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_X = internal.X_init;
    internal.initial_Y = internal.Y_init;
    internal.initial_Z = internal.Z_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const X = state[0];
    const Y = state[1];
    const Z = state[2];
    dstatedt[0] = 0 + 1 * internal.compartment * internal.vin - 1 * internal.compartment * internal.kout * X + 1 * internal.ER * 4 * internal.vM3 * Math.pow((internal.k_CaA), (internal.n)) * (Math.pow((X), (internal.n)) / ((Math.pow((X), (internal.n)) + Math.pow((internal.k_CaA), (internal.n))) * (Math.pow((X), (internal.n)) + Math.pow((internal.k_CaI), (internal.n))))) * (Math.pow((Z), (internal.m)) / (Math.pow((Z), (internal.m)) + Math.pow((internal.kip3), (internal.m)))) * (Y - X) - 1 * internal.compartment * internal.vM2 * Math.pow((X), (2)) / (Math.pow((X), (2)) + Math.pow((internal.k2), (2))) + 1 * internal.ER * internal.kf * (Y - X);
    dstatedt[1] = 0 - 1 * internal.ER * 4 * internal.vM3 * Math.pow((internal.k_CaA), (internal.n)) * (Math.pow((X), (internal.n)) / ((Math.pow((X), (internal.n)) + Math.pow((internal.k_CaA), (internal.n))) * (Math.pow((X), (internal.n)) + Math.pow((internal.k_CaI), (internal.n))))) * (Math.pow((Z), (internal.m)) / (Math.pow((Z), (internal.m)) + Math.pow((internal.kip3), (internal.m)))) * (Y - X) + 1 * internal.compartment * internal.vM2 * Math.pow((X), (2)) / (Math.pow((X), (2)) + Math.pow((internal.k2), (2))) - 1 * internal.ER * internal.kf * (Y - X);
    dstatedt[2] = 0 + 1 * internal.compartment * internal.vp * Math.pow((X), (2)) / (Math.pow((X), (2)) + Math.pow((internal.kp), (2))) - 1 * internal.compartment * internal.kdeg * Z;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "X", "Y", "Z"];
    this.metadata.internalOrder = {compartment: null, ER: null, initial_X: null, initial_Y: null, initial_Z: null, k_CaA: null, k_CaI: null, k2: null, kdeg: null, kf: null, kip3: null, kout: null, kp: null, m: null, n: null, vin: null, vM2: null, vM3: null, vp: null, X_init: null, Y_init: null, Z_init: null};
    this.metadata.variableOrder = {X: null, Y: null, Z: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
