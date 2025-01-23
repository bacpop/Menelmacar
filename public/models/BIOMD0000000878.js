export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.COMpartment = 1;
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
    this.base.user.checkUser(user, ["c_1", "c_2", "epsilon", "r_1", "r_2", "r_3", "r_4", "r_5", "r_6", "r_7", "t_environment", "x_init", "y_hat", "y_init", "z_hat", "z_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "c_1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c_2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "epsilon", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_1", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_3", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_4", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_5", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_6", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_7", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t_environment", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y_hat", internal, 1.24, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "z_hat", internal, 2.5703957827688599, -Infinity, Infinity, false);
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
    dstatedt[0] = 0 + 1 * internal.COMpartment * (z * (internal.r_1 * y + internal.c_1)) - 1 * internal.COMpartment * (z * internal.r_2 * x);
    dstatedt[1] = 0 + 1 * internal.COMpartment * (internal.epsilon * internal.r_3 / z + internal.epsilon * internal.c_2) - 1 * internal.COMpartment * (internal.epsilon * internal.r_4 * x);
    dstatedt[2] = 0 + 1 * internal.COMpartment * (internal.r_5 * (y - internal.y_hat) * (internal.z_hat - z) + internal.r_6 * z * (internal.z_hat - z)) - 1 * internal.COMpartment * (internal.r_7 * z);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "x", "y", "z"];
    this.metadata.internalOrder = {c_1: null, c_2: null, COMpartment: null, epsilon: null, initial_x: null, initial_y: null, initial_z: null, r_1: null, r_2: null, r_3: null, r_4: null, r_5: null, r_6: null, r_7: null, t_environment: null, x_init: null, y_hat: null, y_init: null, z_hat: null, z_init: null};
    this.metadata.variableOrder = {x: null, y: null, z: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
