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
    state[0] = internal.initial_U;
    state[1] = internal.initial_X;
    state[2] = internal.initial_Y;
    state[3] = internal.initial_M;
    state[4] = internal.initial_P;
    state[5] = internal.initial_Z;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "b1", "b2", "c", "d", "D", "h", "h2zero", "K", "k1", "k2", "M_init", "mu1", "mu2", "mu3", "P_init", "p1", "p2", "q1", "r1", "r2", "r3", "sigma", "U_init", "X_init", "Y_init", "Z_init", "z0"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.57999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c", internal, 5.0999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d", internal, 0.14499999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "D", internal, 1418.4000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h", internal, 634, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h2zero", internal, 0.066000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K", internal, 400, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.048500000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu1", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu2", internal, 0.014, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu3", internal, 0.080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p1", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p2", internal, 1.054, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q1", internal, 0.54000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r1", internal, 0.095000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r2", internal, 0.26000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r3", internal, 0.47999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigma", internal, 0.0030000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "U_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_init", internal, 1.9518500000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Y_init", internal, 0.066000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Z_init", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "z0", internal, 2, -Infinity, Infinity, false);
    internal.initial_M = internal.M_init;
    internal.initial_P = internal.P_init;
    internal.initial_U = internal.U_init;
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
    const U = state[0];
    const X = state[1];
    const Y = state[2];
    const M = state[3];
    const P = state[4];
    const Z = state[5];
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.a * U) - 1 * internal.compartment * internal.mu2 * M;
    dstatedt[4] = 0 + 1 * internal.compartment * (internal.b1 * U / (internal.b2 + U)) - 1 * internal.compartment * internal.mu3 * P;
    dstatedt[0] = 0 - 1 * internal.compartment * internal.mu1 * U + 1 * internal.compartment * (internal.h * Math.pow((Z), (3 / 2)));
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.r1 * X) - 1 * internal.compartment * (internal.r1 * Math.pow((X), (2)) / ((internal.p1 * U + internal.p2) / (U + internal.q1)));
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.r2 * Y) - 1 * internal.compartment * (internal.r2 * Math.pow((Y), (2)) / (internal.h2zero + internal.sigma * M / (1 + M / internal.D)));
    dstatedt[5] = 0 - 1 * internal.compartment * (internal.k1 * P * X * Z) - 1 * internal.compartment * (internal.k2 * P * Y * Z) + 1 * internal.compartment * (internal.c) + 1 * internal.compartment * (Math.pow((Z), (- 1 / 2)) * Math.pow((Z), (3 / 2)) * Math.pow((10), (- 6)));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "U", "X", "Y", "M", "P", "Z"];
    this.metadata.internalOrder = {a: null, b1: null, b2: null, c: null, compartment: null, d: null, D: null, h: null, h2zero: null, initial_M: null, initial_P: null, initial_U: null, initial_X: null, initial_Y: null, initial_Z: null, K: null, k1: null, k2: null, M_init: null, mu1: null, mu2: null, mu3: null, P_init: null, p1: null, p2: null, q1: null, r1: null, r2: null, r3: null, sigma: null, U_init: null, X_init: null, Y_init: null, Z_init: null, z0: null};
    this.metadata.variableOrder = {U: null, X: null, Y: null, M: null, P: null, Z: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
