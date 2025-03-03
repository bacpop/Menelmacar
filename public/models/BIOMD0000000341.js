export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_G;
    state[1] = internal.initial_I;
    state[2] = internal.initial_B;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "B_init", "d0", "Eg0", "G_init", "I_init", "kxk", "R0", "r1", "r2", "si", "sigma"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 20000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B_init", internal, 37, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d0", internal, 0.059999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Eg0", internal, 1.4399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G_init", internal, 250, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_init", internal, 2.7999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 432, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R0", internal, 864, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r1", internal, 0.00084000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r2", internal, 2.3999999999999999e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "si", internal, 0.71999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigma", internal, 43.200000000000003, -Infinity, Infinity, false);
    internal.initial_B = internal.B_init;
    internal.initial_G = internal.G_init;
    internal.initial_I = internal.I_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const G = state[0];
    const I = state[1];
    const B = state[2];
    dstatedt[2] = (- internal.d0 + internal.r1 * G - internal.r2 * Math.pow((G), (2))) * B;
    dstatedt[0] = internal.R0 - (internal.Eg0 + internal.si * I) * G;
    dstatedt[1] = B * internal.sigma * Math.pow((G), (2)) / (internal.alpha + Math.pow((G), (2))) - internal.kxk * I;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "G", "I", "B"];
    this.metadata.internalOrder = {alpha: null, B_init: null, cell: null, d0: null, Eg0: null, G_init: null, I_init: null, initial_B: null, initial_G: null, initial_I: null, kxk: null, R0: null, r1: null, r2: null, si: null, sigma: null};
    this.metadata.variableOrder = {G: null, I: null, B: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
