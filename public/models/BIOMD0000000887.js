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
    var state = Array(4).fill(0);
    state[0] = internal.initial_x;
    state[1] = internal.initial_u;
    state[2] = internal.initial_y;
    state[3] = internal.initial_z;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["beta", "gamma", "lambda", "mu_1", "mu_2", "mu_3", "mu_4", "nu", "r", "tau", "u_init", "x_init", "y_init", "z_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "beta", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 0.029000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_1", internal, 0.012, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_2", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_3", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_4", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nu", internal, 0.035999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 0.010999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau", internal, 0.0030000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "z_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_u = internal.u_init;
    internal.initial_x = internal.x_init;
    internal.initial_y = internal.y_init;
    internal.initial_z = internal.z_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const x = state[0];
    const u = state[1];
    const y = state[2];
    const z = state[3];
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.beta * x * y) + 1 * internal.compartment * (internal.r * y) - 1 * internal.compartment * internal.tau * u - 1 * internal.compartment * internal.mu_2 * u;
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.lambda) - 1 * internal.compartment * (internal.beta * x * y) - 1 * internal.compartment * internal.mu_1 * x;
    dstatedt[2] = 0 + 1 * internal.compartment * internal.tau * u - 1 * internal.compartment * (internal.gamma * y * z) - 1 * internal.compartment * internal.mu_3 * y;
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.nu * y) - 1 * internal.compartment * internal.mu_4 * z;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "x", "u", "y", "z"];
    this.metadata.internalOrder = {beta: null, compartment: null, gamma: null, initial_u: null, initial_x: null, initial_y: null, initial_z: null, lambda: null, mu_1: null, mu_2: null, mu_3: null, mu_4: null, nu: null, r: null, tau: null, u_init: null, x_init: null, y_init: null, z_init: null};
    this.metadata.variableOrder = {x: null, u: null, y: null, z: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
