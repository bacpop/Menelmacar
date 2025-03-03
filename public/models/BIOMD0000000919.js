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
    state[0] = internal.initial_y;
    state[1] = internal.initial_x;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "beta", "delta", "gamma", "kappa", "mu_C", "mu_I", "v", "x_inf", "x_init", "y_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 0.1181, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 0.00264, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta", internal, 0.37451000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kappa", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_C", internal, 0.55989999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_I", internal, 0.0048399999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_inf", internal, 780, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_init", internal, 600, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    internal.initial_x = internal.x_init;
    internal.initial_y = internal.y_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const y = state[0];
    const x = state[1];
    dstatedt[1] = 0 - 1 * internal.compartment * (internal.gamma * x * y) + 1 * internal.compartment * (internal.mu_C * x * (1 - Math.pow((x / internal.x_inf), (internal.v))));
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.alpha) - 1 * internal.compartment * (internal.delta * y) + 1 * internal.compartment * (internal.mu_I * (1 - internal.beta * x) * x * y);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "y", "x"];
    this.metadata.internalOrder = {alpha: null, beta: null, compartment: null, delta: null, gamma: null, initial_x: null, initial_y: null, kappa: null, mu_C: null, mu_I: null, v: null, x_inf: null, x_init: null, y_init: null};
    this.metadata.variableOrder = {y: null, x: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
