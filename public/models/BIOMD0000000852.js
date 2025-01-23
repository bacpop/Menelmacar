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
    var state = Array(6).fill(0);
    state[0] = internal.initial_x0;
    state[1] = internal.initial_x1;
    state[2] = internal.initial_y0;
    state[3] = internal.initial_y1;
    state[4] = internal.initial_a;
    state[5] = internal.initial_s;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a_init", "ax", "Ax", "cxx", "dx0", "dx1", "ea", "es", "inflammation", "ModelValue_1", "ModelValue_15", "ModelValue_16", "ModelValue_2", "ModelValue_3", "ModelValue_4", "ModelValue_5", "ModelValue_6", "rm", "rs", "rx", "ry", "s_init", "x0_init", "x1_init", "y0_init", "y1_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ax", internal, 1.1e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ax", internal, 47000000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cxx", internal, 7.4999999999999993e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dx0", internal, 0.002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dx1", internal, 129, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ea", internal, 2000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "es", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "inflammation", internal, 7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_1", internal, 1.1e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_15", internal, 7.4999999999999993e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_16", internal, 7.4999999999999993e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_2", internal, 47000000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_3", internal, 0.002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_4", internal, 129, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_5", internal, 7.4999999999999993e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_6", internal, 7.4999999999999993e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rm", internal, 2e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rs", internal, 0.00029999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rx", internal, 0.00087000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ry", internal, 0.0012999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y1_init", internal, 0, -Infinity, Infinity, false);
    internal.ay = internal.ModelValue_1;
    internal.Ay = internal.ModelValue_2;
    internal.cxy = internal.ModelValue_5;
    internal.cyx = internal.ModelValue_5;
    internal.cyy = internal.ModelValue_5;
    internal.dy0 = internal.ModelValue_3;
    internal.dy1 = internal.ModelValue_4;
    internal.initial_a = internal.a_init;
    internal.initial_s = internal.s_init;
    internal.initial_x0 = internal.x0_init;
    internal.initial_x1 = internal.x1_init;
    internal.initial_y0 = internal.y0_init;
    internal.initial_y1 = internal.y1_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const x0 = state[0];
    const x1 = state[1];
    const y0 = state[2];
    const y1 = state[3];
    const a = state[4];
    const s = state[5];
    dstatedt[5] = 0 + 1 * internal.compartment * (internal.rs * a) - 1 * internal.compartment * internal.es * s + 1 * internal.compartment * (internal.inflammation);
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.ax * internal.Ax * x0) - 1 * internal.compartment * internal.dx1 * x1;
    var psi_x = 1 / (1 + Math.pow((internal.ModelValue_5 * x0 + internal.ModelValue_6 * y0), (2)));
    var psi_y = 1 / (1 + Math.pow((internal.ModelValue_15 * x0 + internal.ModelValue_16 * y0), (2)));
    dstatedt[4] = 0 + 1 * internal.compartment * internal.dx0 * x0 + 1 * internal.compartment * internal.dx1 * x1 + 1 * internal.compartment * internal.dy0 * y0 + 1 * internal.compartment * internal.dy1 * y1 - 1 * internal.compartment * (internal.ea * a * s);
    dstatedt[0] = 0 + 1 * internal.compartment * (x0 * internal.rx * psi_x * s) - 1 * internal.compartment * internal.dx0 * x0 - 1 * internal.compartment * internal.ax * x0 - 1 * internal.compartment * (internal.rm * s * x0);
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.rm * s * x0) + 1 * internal.compartment * (internal.ry * psi_y * s * y0) - 1 * internal.compartment * internal.dy0 * y0 - 1 * internal.compartment * internal.ay * y0;
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.ay * internal.Ay * y0) - 1 * internal.compartment * internal.dy1 * y1;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "x0", "x1", "y0", "y1", "a", "s"];
    this.metadata.internalOrder = {a_init: null, ax: null, Ax: null, ay: null, Ay: null, compartment: null, cxx: null, cxy: null, cyx: null, cyy: null, dx0: null, dx1: null, dy0: null, dy1: null, ea: null, es: null, inflammation: null, initial_a: null, initial_s: null, initial_x0: null, initial_x1: null, initial_y0: null, initial_y1: null, ModelValue_1: null, ModelValue_15: null, ModelValue_16: null, ModelValue_2: null, ModelValue_3: null, ModelValue_4: null, ModelValue_5: null, ModelValue_6: null, rm: null, rs: null, rx: null, ry: null, s_init: null, x0_init: null, x1_init: null, y0_init: null, y1_init: null};
    this.metadata.variableOrder = {x0: null, x1: null, y0: null, y1: null, a: null, s: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
