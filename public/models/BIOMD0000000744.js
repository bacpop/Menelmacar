export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Pancreatic_tumor = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(5).fill(0);
    state[0] = internal.initial_x;
    state[1] = internal.initial_y;
    state[2] = internal.initial_z;
    state[3] = internal.initial_w;
    state[4] = internal.initial_v;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["b1", "b2", "beta1", "beta2", "beta3", "beta4", "beta5", "delta1", "k2", "k3", "k4", "k5", "m1", "m3", "m4", "r1", "r2", "r3", "r4", "u2", "u3", "u4", "u5", "v_init", "w_init", "x_init", "y_init", "z_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "b1", internal, 1.0199999999999999e-11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b2", internal, 1.7856999999999999e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta1", internal, 3.4821150000000001e-12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta2", internal, 0.125, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta3", internal, 124.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta4", internal, 5.8499999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta5", internal, 7.2999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta1", internal, 0.95999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 56000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 20000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 1000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 1000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m1", internal, 100000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m3", internal, 1000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m4", internal, 89000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r1", internal, 0.0195, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r2", internal, 0.0019499999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r3", internal, 3500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r4", internal, 12500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u2", internal, 0.014999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u3", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u4", internal, 0.034000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u5", internal, 0.034000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v_init", internal, 9.4000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "w_init", internal, 50000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_init", internal, 1000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y_init", internal, 5600000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "z_init", internal, 190000000, -Infinity, Infinity, false);
    internal.initial_v = internal.v_init;
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
    const x = state[0];
    const y = state[1];
    const z = state[2];
    const w = state[3];
    const v = state[4];
    dstatedt[4] = 0 + 1 * internal.Pancreatic_tumor * (internal.beta5 * x * z / (internal.k5 + x)) - 1 * internal.Pancreatic_tumor * (internal.u5 * v);
    dstatedt[3] = 0 + 1 * internal.Pancreatic_tumor * (internal.beta4 * x * z / (internal.k4 + x)) - 1 * internal.Pancreatic_tumor * (internal.u4 * w) + 1 * internal.Pancreatic_tumor * (internal.r4 * x * y / (internal.m4 + v));
    dstatedt[0] = 0 + 1 * internal.Pancreatic_tumor * (internal.r1 * x * (1 - x * internal.b1)) + 1 * internal.Pancreatic_tumor * (internal.beta1 * y * x * (1 - x * internal.b1)) - 1 * internal.Pancreatic_tumor * (internal.delta1 * x * z / (internal.m1 + w));
    dstatedt[1] = 0 + 1 * internal.Pancreatic_tumor * (internal.r2 * y * (1 - internal.b2 * y)) + 1 * internal.Pancreatic_tumor * (internal.beta2 * w / (internal.k2 + w) * y * (1 - internal.b2 * y)) - 1 * internal.Pancreatic_tumor * (internal.u2 * y);
    dstatedt[2] = 0 + 1 * internal.Pancreatic_tumor * (internal.beta3 * z * v / ((internal.k3 + v) * (internal.m3 + w))) + 1 * internal.Pancreatic_tumor * (internal.r3) - 1 * internal.Pancreatic_tumor * (internal.u3 * z);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "x", "y", "z", "w", "v"];
    this.metadata.internalOrder = {b1: null, b2: null, beta1: null, beta2: null, beta3: null, beta4: null, beta5: null, delta1: null, initial_v: null, initial_w: null, initial_x: null, initial_y: null, initial_z: null, k2: null, k3: null, k4: null, k5: null, m1: null, m3: null, m4: null, Pancreatic_tumor: null, r1: null, r2: null, r3: null, r4: null, u2: null, u3: null, u4: null, u5: null, v_init: null, w_init: null, x_init: null, y_init: null, z_init: null};
    this.metadata.variableOrder = {x: null, y: null, z: null, w: null, v: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
