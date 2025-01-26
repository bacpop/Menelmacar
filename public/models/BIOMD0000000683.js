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
    var state = Array(4).fill(0);
    state[0] = internal.initial_w;
    state[1] = internal.initial_x;
    state[2] = internal.initial_y;
    state[3] = internal.initial_z;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "b", "beta", "c", "d", "h", "lamda", "p", "q", "w_init", "x_init", "y_init", "z_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lamda", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "w_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "z_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_w = internal.w_init;
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
    const w = state[0];
    const x = state[1];
    const y = state[2];
    const z = state[3];
    dstatedt[0] = 0 - 1 * internal.COMpartment * internal.b * w - 1 * internal.COMpartment * (internal.c * internal.q * y * w) + 1 * internal.COMpartment * (internal.c * x * y * w);
    dstatedt[3] = 0 - 1 * internal.COMpartment * internal.h * z + 1 * internal.COMpartment * (internal.c * internal.q * y * w);
    var s = ((t < 1 ? 1 : ((t > 15 ? 1 : 0.0041999999999999997))));
    dstatedt[1] = 0 - 1 * internal.COMpartment * internal.d * x - 1 * internal.COMpartment * (s * internal.beta * x * y) + 1 * internal.COMpartment * (internal.lamda);
    dstatedt[2] = 0 - 1 * internal.COMpartment * internal.a * y + 1 * internal.COMpartment * (s * internal.beta * x * y) - 1 * internal.COMpartment * (internal.p * y * z);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "w", "x", "y", "z"];
    this.metadata.internalOrder = {a: null, b: null, beta: null, c: null, COMpartment: null, d: null, h: null, initial_w: null, initial_x: null, initial_y: null, initial_z: null, lamda: null, p: null, q: null, w_init: null, x_init: null, y_init: null, z_init: null};
    this.metadata.variableOrder = {w: null, x: null, y: null, z: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
