export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.tumor_microenvironment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(2).fill(0);
    state[0] = internal.initial_E;
    state[1] = internal.initial_R;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["B", "c", "d0", "d1", "E_init", "kxk", "la", "ld", "lm", "r", "R_init", "sigma"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "B", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d0", internal, 0.37, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d1", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_init", internal, 1000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 2.7200000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "la", internal, 0.14000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ld", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lm", internal, 1.3400000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 0.56999999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_init", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigma", internal, 13000, -Infinity, Infinity, false);
    internal.initial_E = internal.E_init;
    internal.initial_R = internal.R_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const E = state[0];
    const R = state[1];
    var E_0 = E / 100000;
    var f = Math.pow((R), (internal.B - 1)) / (Math.pow((R), (internal.B - 1)) + 1);
    dstatedt[0] = 0 + 1 * internal.tumor_microenvironment * (internal.r * R * R * R * E / (internal.kxk + R * R * R)) - 1 * internal.tumor_microenvironment * (internal.d1 * E * R * R * R * f) - 1 * internal.tumor_microenvironment * internal.d0 * E + 1 * internal.tumor_microenvironment * (internal.sigma);
    dstatedt[1] = 0 + 1 * internal.tumor_microenvironment * (internal.lm * internal.B * R / 3) - 1 * internal.tumor_microenvironment * (internal.la * R / 3) - 1 * internal.tumor_microenvironment * (internal.c * E_0 * R * f) + 1 * internal.tumor_microenvironment * (internal.lm * (1 - internal.B) * internal.ld / Math.tanh(R / internal.ld)) - 1 * internal.tumor_microenvironment * (internal.lm * (1 - internal.B) * internal.ld * internal.ld / R);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "E", "R"];
    this.metadata.internalOrder = {B: null, c: null, d0: null, d1: null, E_init: null, initial_E: null, initial_R: null, kxk: null, la: null, ld: null, lm: null, r: null, R_init: null, sigma: null, tumor_microenvironment: null};
    this.metadata.variableOrder = {E: null, R: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
