export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.COMpartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var K_T_init = internal.tau1 * Math.pow((internal.initial_T), (3)) + internal.tau2 * Math.pow((internal.initial_T), (2)) + internal.tau3 * internal.initial_T + internal.tau4;
    internal.initial_K_T = K_T_init;
    var state = Array(4).fill(0);
    state[0] = internal.initial_K_T;
    state[1] = internal.initial_phi_I;
    state[2] = internal.initial_phi_R;
    state[3] = internal.initial_T;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "d1", "d2", "k1", "k2", "k3", "k4", "phi_I_init", "phi_R_init", "T_init", "tau1", "tau2", "tau3", "tau4"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d1", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d2", internal, 9.0999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.69299999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0.070000000000000007, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "phi_I_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "phi_R_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau1", internal, - 2.4700000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau2", internal, 21.940000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau3", internal, 6.4100000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau4", internal, 1.75, -Infinity, Infinity, false);
    internal.initial_phi_I = internal.phi_I_init;
    internal.initial_phi_R = internal.phi_R_init;
    internal.initial_T = internal.T_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const K_T = state[0];
    const phi_I = state[1];
    const phi_R = state[2];
    const T = state[3];
    dstatedt[0] = 0 + 0;
    dstatedt[1] = 0 + internal.alpha * K_T + internal.k1 * internal.k2 * phi_I * (1 - internal.k3 * (phi_I + phi_R)) - internal.d1 * phi_I;
    dstatedt[2] = 0 + (1 - internal.alpha) * K_T + internal.k1 * internal.k2 * phi_R * (1 - internal.k3 * (phi_I + phi_R)) - internal.d1 * phi_R;
    dstatedt[3] = 0 + internal.k4 * phi_I - internal.d2 * T;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "K_T", "phi_I", "phi_R", "T"];
    this.metadata.internalOrder = {alpha: null, COMpartment: null, d1: null, d2: null, initial_K_T: null, initial_phi_I: null, initial_phi_R: null, initial_T: null, k1: null, k2: null, k3: null, k4: null, phi_I_init: null, phi_R_init: null, T_init: null, tau1: null, tau2: null, tau3: null, tau4: null};
    this.metadata.variableOrder = {K_T: null, phi_I: null, phi_R: null, T: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
