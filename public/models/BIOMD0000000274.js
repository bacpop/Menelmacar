export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Compartment = 1;
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
    this.base.user.checkUser(user, ["a1", "a2", "a3", "a4", "a5", "b1", "b2", "b3", "delta", "epsilon", "k1", "k2", "k3", "x_init", "y_init", "z_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a1", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a2", internal, 0.0089999999999999993, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a3", internal, 0.67500000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a4", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a5", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b2", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b3", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "epsilon", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_init", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "z_init", internal, 0.14999999999999999, -Infinity, Infinity, false);
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
    dstatedt[0] = 0;
    dstatedt[1] = 0;
    dstatedt[2] = 0;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "x", "y", "z"];
    this.metadata.internalOrder = {a1: null, a2: null, a3: null, a4: null, a5: null, b1: null, b2: null, b3: null, Compartment: null, delta: null, epsilon: null, initial_x: null, initial_y: null, initial_z: null, k1: null, k2: null, k3: null, x_init: null, y_init: null, z_init: null};
    this.metadata.variableOrder = {x: null, y: null, z: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
