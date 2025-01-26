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
    state[0] = internal.initial_C;
    state[1] = internal.initial_I;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "C_init", "I_init", "Ie", "K", "u", "y"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_init", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ie", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K", internal, 10000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y", internal, 0.20000000000000001, -Infinity, Infinity, false);
    internal.initial_C = internal.C_init;
    internal.initial_I = internal.I_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const C = state[0];
    const I = state[1];
    var a0 = 0.000105 * Math.exp(- t / 168.09999999999999);
    dstatedt[1] = 0 + 1 * internal.tumor_microenvironment * (internal.y * I * (1 - I / (internal.Ie + internal.u * C * I)));
    dstatedt[0] = 0 + 1 * internal.tumor_microenvironment * (internal.a * C * (1 - C / internal.K)) - 1 * internal.tumor_microenvironment * (a0 * C * I);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "C", "I"];
    this.metadata.internalOrder = {a: null, C_init: null, I_init: null, Ie: null, initial_C: null, initial_I: null, K: null, tumor_microenvironment: null, u: null, y: null};
    this.metadata.variableOrder = {C: null, I: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
