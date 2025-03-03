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
    var state = Array(3).fill(0);
    state[0] = internal.initial_m;
    state[1] = internal.initial_h;
    state[2] = internal.initial_c;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["c_init", "delta_c", "delta_h", "delta_m", "h_init", "kappa_c", "kappa_m", "m_init", "mu_c", "mu_m", "x", "y"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "c_init", internal, 0.023, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_c", internal, 0.0035999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_h", internal, 0.0019300000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_m", internal, 0.0013500000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h_init", internal, 1.1e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kappa_c", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kappa_m", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_init", internal, 3.6500000000000003e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_c", internal, 0.46200000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_m", internal, 1.8999999999999999e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y", internal, 4, -Infinity, Infinity, false);
    internal.initial_c = internal.c_init;
    internal.initial_h = internal.h_init;
    internal.initial_m = internal.m_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const m = state[0];
    const h = state[1];
    const c = state[2];
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.mu_c * h) - 1 * internal.compartment * internal.delta_c * c;
    dstatedt[1] = 0 + 1 * internal.compartment * (m) - 1 * internal.compartment * internal.delta_h * h;
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.mu_m / (1 + Math.pow((internal.kappa_m * (1 + Math.pow((c / internal.kappa_c), (internal.y)))), (internal.x)))) - 1 * internal.compartment * internal.delta_m * m;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "m", "h", "c"];
    this.metadata.internalOrder = {c_init: null, compartment: null, delta_c: null, delta_h: null, delta_m: null, h_init: null, initial_c: null, initial_h: null, initial_m: null, kappa_c: null, kappa_m: null, m_init: null, mu_c: null, mu_m: null, x: null, y: null};
    this.metadata.variableOrder = {m: null, h: null, c: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
