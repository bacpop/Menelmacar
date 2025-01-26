export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.pi = 3.1415929999999999;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(6).fill(0);
    state[0] = internal.initial_H;
    state[1] = internal.initial_D;
    state[2] = internal.initial_M;
    state[3] = internal.initial_C;
    state[4] = internal.initial_N;
    state[5] = internal.initial_R;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["C_init", "C0", "D_init", "dC", "dD", "dH", "dM", "h", "H_init", "H0", "k1", "k2", "k3", "k4", "k5", "k6", "m", "M_init", "M0", "N_init", "R_init", "sigma"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "C_init", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C0", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "D_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dC", internal, 1.61511, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dD", internal, 1.3467100000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dH", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dM", internal, 0.78115500000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h", internal, 0.51165700000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H0", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.034099999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.11537500000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.76657600000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0.123848, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 0.00409948, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 0.000323097, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m", internal, 4.2268600000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_init", internal, 400, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M0", internal, 400, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N_init", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigma", internal, 2.2000000000000002, -Infinity, Infinity, false);
    internal.bC = internal.dC * internal.C0;
    internal.bH = internal.dH * internal.H0;
    internal.bM = internal.dM * internal.M0;
    internal.initial_C = internal.C_init;
    internal.initial_D = internal.D_init;
    internal.initial_H = internal.H_init;
    internal.initial_M = internal.M_init;
    internal.initial_N = internal.N_init;
    internal.initial_R = internal.R_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const H = state[0];
    const D = state[1];
    const M = state[2];
    const C = state[3];
    const N = state[4];
    const R = state[5];
    var alpha = internal.h / ((t + 9.9999999999999994e-12) * internal.sigma * Math.pow((2 * internal.pi), (0.5))) * Math.exp(- Math.pow((Math.log(t + 9.9999999999999994e-12) - internal.m), (2)) / (2 * Math.pow((internal.sigma), (2))));
    dstatedt[5] = 0 + 1 * internal.compartment * (internal.k6 * M * D + internal.dD * D) - 1 * internal.compartment * internal.k4 * R;
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.bC + internal.k2 * D * H) - 1 * internal.compartment * internal.dC * C;
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.k5 * C * N + alpha * N) - 1 * internal.compartment * (internal.k6 * M * D + internal.dD * D);
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.bH + internal.k1 * D * M) - 1 * internal.compartment * internal.dH * H;
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.bM + internal.k3 * D * M) - 1 * internal.compartment * internal.dM * M;
    dstatedt[4] = 0 - 1 * internal.compartment * (internal.k5 * C * N + alpha * N) + 1 * internal.compartment * internal.k4 * R;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "H", "D", "M", "C", "N", "R"];
    this.metadata.internalOrder = {bC: null, bH: null, bM: null, C_init: null, C0: null, compartment: null, D_init: null, dC: null, dD: null, dH: null, dM: null, h: null, H_init: null, H0: null, initial_C: null, initial_D: null, initial_H: null, initial_M: null, initial_N: null, initial_R: null, k1: null, k2: null, k3: null, k4: null, k5: null, k6: null, m: null, M_init: null, M0: null, N_init: null, pi: null, R_init: null, sigma: null};
    this.metadata.variableOrder = {H: null, D: null, M: null, C: null, N: null, R: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
