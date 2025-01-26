export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.tumor_microenvironment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_x;
    state[1] = internal.initial_y;
    state[2] = internal.initial_v;
    state[3] = internal.initial_z;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "b", "c", "d", "e", "m", "n", "r", "v_init", "x_init", "y_init", "z_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 9, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c", internal, 0.47999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d", internal, 0.16, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 0.035999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 0.35999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v_init", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_init", internal, 0.98999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y_init", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "z_init", internal, 0.01, -Infinity, Infinity, false);
    internal.initial_v = internal.v_init;
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
    const v = state[2];
    const z = state[3];
    dstatedt[2] = 0 + 1 * internal.tumor_microenvironment * (internal.b * y) - 1 * internal.tumor_microenvironment * (internal.e * v) - 1 * internal.tumor_microenvironment * (internal.d * v * z) - 1 * internal.tumor_microenvironment * (internal.a * x * v);
    dstatedt[0] = 0 + 1 * internal.tumor_microenvironment * (internal.r * x) - 1 * internal.tumor_microenvironment * (internal.r * x * x) - 1 * internal.tumor_microenvironment * (internal.r * x * y) - 1 * internal.tumor_microenvironment * (internal.a * x * v);
    dstatedt[1] = 0 - 1 * internal.tumor_microenvironment * (internal.c * y * z) - 1 * internal.tumor_microenvironment * (y) + 1 * internal.tumor_microenvironment * (internal.a * x * v);
    dstatedt[3] = 0 + 1 * internal.tumor_microenvironment * (internal.m * y * z) - 1 * internal.tumor_microenvironment * (internal.n * z);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "x", "y", "v", "z"];
    this.metadata.internalOrder = {a: null, b: null, c: null, d: null, e: null, initial_v: null, initial_x: null, initial_y: null, initial_z: null, m: null, n: null, r: null, tumor_microenvironment: null, v_init: null, x_init: null, y_init: null, z_init: null};
    this.metadata.variableOrder = {x: null, y: null, v: null, z: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
