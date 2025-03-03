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
    state[1] = internal.initial_I;
    state[2] = internal.initial_y;
    state[3] = internal.initial_z;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "b", "c", "d", "I_init", "kxk", "n", "p", "r", "tau", "x_init", "y_init", "z_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 0.00044799999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 2139, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 0.20599999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_init", internal, 200, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y_init", internal, 800, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "z_init", internal, 100, -Infinity, Infinity, false);
    internal.initial_I = internal.I_init;
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
    const y = state[2];
    const z = state[3];
    dstatedt[1] = 0 + 1 * internal.compartment * internal.b * x * y - 1 * internal.compartment * (internal.b * Math.exp(- internal.n * internal.tau) * x * y);
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.r * x * (1 - (x + y) / internal.kxk)) - 1 * internal.compartment * internal.b * x * y;
    dstatedt[2] = 0 - 1 * internal.compartment * internal.b * x * y + 1 * internal.compartment * (internal.b * Math.exp(- internal.n * internal.tau) * x * y) - 1 * internal.compartment * internal.a * y - 1 * internal.compartment * (internal.p * y * z);
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.c * y * z) - 1 * internal.compartment * internal.d * z;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "x", "I", "y", "z"];
    this.metadata.internalOrder = {a: null, b: null, c: null, compartment: null, d: null, I_init: null, initial_I: null, initial_x: null, initial_y: null, initial_z: null, kxk: null, n: null, p: null, r: null, tau: null, x_init: null, y_init: null, z_init: null};
    this.metadata.variableOrder = {x: null, I: null, y: null, z: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
