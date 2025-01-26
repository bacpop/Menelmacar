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
    state[2] = internal.initial_z;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Dx", "Dy", "Dz", "mu", "p", "R", "tau", "txt", "x_init", "y_init", "z_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Dx", internal, 2.1000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Dy", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Dz", internal, 1.2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p", internal, 0.059999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "txt", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "z_init", internal, 0, -Infinity, Infinity, false);
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
    const y = state[1];
    const z = state[2];
    dstatedt[0] = 0 + 1 * internal.compartment * ((1 + internal.R * (1 - internal.Dx * internal.tau) + 0.5 * internal.Dx * internal.Dz * internal.tau) * x + internal.Dx * (1 + internal.R * internal.tau) * z) - 1 * internal.compartment * (x * x + x * y);
    dstatedt[1] = 0 + 1 * internal.compartment * (y * z) - 1 * internal.compartment * ((internal.p - internal.Dy) * y);
    dstatedt[2] = 0 + 1 * internal.compartment * ((internal.R * (1 - internal.Dx * internal.tau) + internal.Dx * internal.Dz * internal.tau) * x) - 1 * internal.compartment * ((internal.mu - (internal.R * (1 + internal.Dx * internal.tau) + internal.Dx * (1 + 0.5 * internal.Dz * internal.tau))) * z);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "x", "y", "z"];
    this.metadata.internalOrder = {compartment: null, Dx: null, Dy: null, Dz: null, initial_x: null, initial_y: null, initial_z: null, mu: null, p: null, R: null, tau: null, txt: null, x_init: null, y_init: null, z_init: null};
    this.metadata.variableOrder = {x: null, y: null, z: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
