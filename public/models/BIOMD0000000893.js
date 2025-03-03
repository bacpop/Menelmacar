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
    this.base.user.checkUser(user, ["A", "B", "C", "delta", "epsilon", "k1", "x_init", "y_init", "z_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A", internal, 0.0070000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B", internal, 954.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C", internal, 0.035000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta", internal, 0.029000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "epsilon", internal, 2.0000000000000002e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 1, -Infinity, Infinity, false);
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
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.A * (1 - x) / (internal.epsilon + z)) - 1 * internal.compartment * (internal.B * z * x / (internal.delta + x));
    dstatedt[1] = 0 + 1 * internal.compartment * (x * x) - 1 * internal.compartment * internal.k1 * y;
    dstatedt[2] = 0 + 1 * internal.compartment * (y) - 1 * internal.compartment * (internal.C * z * (1 - x) / (internal.epsilon + z));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "x", "y", "z"];
    this.metadata.internalOrder = {A: null, B: null, C: null, compartment: null, delta: null, epsilon: null, initial_x: null, initial_y: null, initial_z: null, k1: null, x_init: null, y_init: null, z_init: null};
    this.metadata.variableOrder = {x: null, y: null, z: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
