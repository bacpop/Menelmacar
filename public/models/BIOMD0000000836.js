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
    var state = Array(2).fill(0);
    state[0] = internal.initial_S;
    state[1] = internal.initial_P;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "beta", "C", "delta", "gamma", "P_init", "S_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 2.7999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_P = internal.P_init;
    internal.initial_S = internal.S_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const S = state[0];
    const P = state[1];
    dstatedt[1] = 0 + (- internal.gamma + internal.delta * S) * P;
    dstatedt[0] = 0 + (internal.alpha * (1 - S / internal.C) - internal.beta * P) * S;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "S", "P"];
    this.metadata.internalOrder = {alpha: null, beta: null, C: null, compartment: null, delta: null, gamma: null, initial_P: null, initial_S: null, P_init: null, S_init: null};
    this.metadata.variableOrder = {S: null, P: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
