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
    state[0] = internal.initial_x;
    state[1] = internal.initial_y;
    state[2] = internal.initial_y0;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha_0", "alpha_x", "alpha_xy", "alpha_y", "beta_y", "psi", "Theta", "x_init", "y_init", "y0_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha_0", internal, 1.1000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_x", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_xy", internal, 3.7000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_y", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_y", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "psi", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Theta", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y0_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_x = internal.x_init;
    internal.initial_y = internal.y_init;
    internal.initial_y0 = internal.y0_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const x = state[0];
    const y = state[1];
    const y0 = state[2];
    dstatedt[0] = 0 + 1 * internal.compartment * internal.Theta * x * internal.psi - 1 * internal.compartment * internal.alpha_xy * y * x;
    dstatedt[1] = 0 + 1 * internal.compartment * internal.alpha_0 * y0 - 1 * internal.compartment * internal.alpha_y * y;
    dstatedt[2] = 0 + 1 * internal.compartment * internal.beta_y * x * internal.psi - 1 * internal.compartment * internal.alpha_0 * y0;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "x", "y", "y0"];
    this.metadata.internalOrder = {alpha_0: null, alpha_x: null, alpha_xy: null, alpha_y: null, beta_y: null, compartment: null, initial_x: null, initial_y: null, initial_y0: null, psi: null, Theta: null, x_init: null, y_init: null, y0_init: null};
    this.metadata.variableOrder = {x: null, y: null, y0: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
