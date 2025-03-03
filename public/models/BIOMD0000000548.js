export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Brain = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_F;
    state[1] = internal.initial_P;
    state[2] = internal.initial_C;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["C_init", "F_init", "gamma", "m", "nu", "P_init", "sigma"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "C_init", internal, 18, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "F_init", internal, 135, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nu", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigma", internal, 1, -Infinity, Infinity, false);
    internal.initial_C = internal.C_init;
    internal.initial_F = internal.F_init;
    internal.initial_P = internal.P_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const F = state[0];
    const P = state[1];
    const C = state[2];
    dstatedt[2] = internal.gamma * F * P - internal.nu * C;
    dstatedt[0] = internal.m / (1 + P) - internal.gamma * F * P;
    dstatedt[1] = internal.sigma - P - internal.gamma * F * P + internal.nu * C;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "F", "P", "C"];
    this.metadata.internalOrder = {Brain: null, C_init: null, F_init: null, gamma: null, initial_C: null, initial_F: null, initial_P: null, m: null, nu: null, P_init: null, sigma: null};
    this.metadata.variableOrder = {F: null, P: null, C: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
