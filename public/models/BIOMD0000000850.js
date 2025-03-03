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
    state[0] = internal.initial_U;
    state[1] = internal.initial_I;
    state[2] = internal.initial_V;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["gamma", "I_init", "K", "m", "U_init", "V_init", "xi"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "gamma", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_init", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "U_init", internal, 75, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "xi", internal, 0.01, -Infinity, Infinity, false);
    internal.initial_I = internal.I_init;
    internal.initial_U = internal.U_init;
    internal.initial_V = internal.V_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const U = state[0];
    const I = state[1];
    const V = state[2];
    dstatedt[1] = 0 + 1 * internal.compartment * (U * V / (U + I)) - 1 * internal.compartment * internal.xi * I;
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.m * Math.log(internal.K / U) * U) - 1 * internal.compartment * (U * V / (U + I));
    dstatedt[2] = 0 + 1 * internal.compartment * internal.xi * I - 1 * internal.compartment * internal.gamma * V;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "U", "I", "V"];
    this.metadata.internalOrder = {compartment: null, gamma: null, I_init: null, initial_I: null, initial_U: null, initial_V: null, K: null, m: null, U_init: null, V_init: null, xi: null};
    this.metadata.variableOrder = {U: null, I: null, V: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
