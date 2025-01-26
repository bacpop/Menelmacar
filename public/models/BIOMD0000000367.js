export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment_1 = 1;
    internal.initial_mu_z = 0.40000000000000002;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_x;
    state[1] = internal.initial_y;
    state[2] = internal.initial_z;
    state[3] = internal.initial_mu_z;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["b", "epsilon", "kxk", "mu_x", "mu_z_star", "r", "x_init", "y_init", "z_init", "zeta"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "b", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "epsilon", internal, 0.002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_x", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_z_star", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "z_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "zeta", internal, 0.5, -Infinity, Infinity, false);
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
    const mu_z = state[3];
    const x = state[0];
    const y = state[1];
    const z = state[2];
    dstatedt[3] = internal.epsilon * (y - internal.kxk * (mu_z - internal.mu_z_star));
    dstatedt[0] = 0 + - internal.r * x * y + internal.zeta * internal.mu_x - internal.zeta * x;
    dstatedt[1] = 0 + internal.r * x * y - internal.b * y * z - internal.zeta * y;
    dstatedt[2] = 0 + - internal.b * y * z + internal.zeta * mu_z - internal.zeta * z;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "x", "y", "z", "mu_z"];
    this.metadata.internalOrder = {b: null, compartment_1: null, epsilon: null, initial_mu_z: null, initial_x: null, initial_y: null, initial_z: null, kxk: null, mu_x: null, mu_z_star: null, r: null, x_init: null, y_init: null, z_init: null, zeta: null};
    this.metadata.variableOrder = {x: null, y: null, z: null, mu_z: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
