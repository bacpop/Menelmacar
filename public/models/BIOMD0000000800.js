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
    this.base.user.checkUser(user, ["a", "A", "b", "B", "c", "C", "epsilon", "g", "G", "h", "x_init", "y_init", "z_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.23000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "A", internal, 0.45000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 2.1999999999999998e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B", internal, 2.1999999999999998e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "epsilon", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_init", internal, 200000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y_init", internal, 100000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "z_init", internal, 400000000, -Infinity, Infinity, false);
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
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.a / (1 + internal.b * (x + y + z)) * ((x + y + internal.epsilon) / (x + y + internal.epsilon + internal.g * z)) * x) - 1 * internal.compartment * internal.c * x;
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.A / (1 + internal.B * (x + y + z)) * ((x + y + internal.epsilon) / (x + y + internal.epsilon + internal.G * z)) * y) - 1 * internal.compartment * internal.C * y;
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.a / (1 + internal.b * (x + y + z)) * (1 - internal.h * (x + y) / (z + internal.epsilon + internal.h * (x + y))) * z) - 1 * internal.compartment * internal.c * z;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "x", "y", "z"];
    this.metadata.internalOrder = {a: null, A: null, b: null, B: null, c: null, C: null, compartment: null, epsilon: null, g: null, G: null, h: null, initial_x: null, initial_y: null, initial_z: null, x_init: null, y_init: null, z_init: null};
    this.metadata.variableOrder = {x: null, y: null, z: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
