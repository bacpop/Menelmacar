export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.alpha = 0.001;
    internal.cell = 1;
    internal.delta = 1.0000000000000001e-05;
    internal.gamma = 1.0000000000000001e-05;
    internal.kappa = 0.5;
    internal.kd = 1;
    internal.phi = 5.0000000000000004e-06;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(1).fill(0);
    state[0] = internal.initial_c;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["c_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "c_init", internal, 1, -Infinity, Infinity, false);
    internal.initial_c = internal.c_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const c = state[0];
    dstatedt[0] = 0 + 1 * internal.alpha - 1 * internal.kd * c + 1 * c / (internal.kappa + c) - 1 * internal.phi * c / (internal.delta + internal.gamma * c);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "c"];
    this.metadata.internalOrder = {alpha: null, c_init: null, cell: null, delta: null, gamma: null, initial_c: null, kappa: null, kd: null, phi: null};
    this.metadata.variableOrder = {c: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
