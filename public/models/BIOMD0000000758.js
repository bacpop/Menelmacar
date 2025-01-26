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
    state[0] = internal.initial_T;
    state[1] = internal.initial_I;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["g", "I_init", "kxk", "lxl", "T_init", "u"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "g", internal, 0.0040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_init", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lxl", internal, 0.089999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u", internal, 0.10000000000000001, -Infinity, Infinity, false);
    internal.initial_I = internal.I_init;
    internal.initial_T = internal.T_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const T = state[0];
    const I = state[1];
    dstatedt[1] = 0 + 1 * internal.tumor_microenvironment * (internal.lxl * T * I) - 1 * internal.tumor_microenvironment * internal.u * I;
    dstatedt[0] = 0 + 1 * internal.tumor_microenvironment * (internal.g * T) - 1 * internal.tumor_microenvironment * (internal.kxk * I);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "T", "I"];
    this.metadata.internalOrder = {g: null, I_init: null, initial_I: null, initial_T: null, kxk: null, lxl: null, T_init: null, tumor_microenvironment: null, u: null};
    this.metadata.variableOrder = {T: null, I: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
