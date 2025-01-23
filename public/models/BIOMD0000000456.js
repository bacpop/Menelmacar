export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell = 1;
    internal.e1 = 1;
    internal.e2 = 1;
    internal.e3 = 1;
    internal.e4 = 1;
    internal.e6 = 1;
    internal.e7 = 1;
    internal.p1 = 10;
    internal.p2 = 10;
    internal.p3 = 50;
    internal.p4 = 10;
    internal.p6 = 1;
    internal.p7 = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(11).fill(0);
    state[0] = internal.initial_x1;
    state[1] = internal.initial_x2;
    state[2] = internal.initial_x3;
    state[3] = internal.initial_y1;
    state[4] = internal.initial_y2;
    state[5] = internal.initial_y3;
    state[6] = internal.initial_y4;
    state[7] = internal.initial_y5;
    state[8] = internal.initial_y7;
    state[9] = internal.initial_x4;
    state[10] = internal.initial_y8;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["x1_init", "x2_init", "x3_init", "x4_init", "y1_init", "y2_init", "y3_init", "y4_init", "y5_init", "y7_init", "y8_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "x1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x4_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y4_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y5_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y7_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y8_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_x1 = internal.x1_init;
    internal.initial_x2 = internal.x2_init;
    internal.initial_x3 = internal.x3_init;
    internal.initial_x4 = internal.x4_init;
    internal.initial_y1 = internal.y1_init;
    internal.initial_y2 = internal.y2_init;
    internal.initial_y3 = internal.y3_init;
    internal.initial_y4 = internal.y4_init;
    internal.initial_y5 = internal.y5_init;
    internal.initial_y7 = internal.y7_init;
    internal.initial_y8 = internal.y8_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const x1 = state[0];
    const x2 = state[1];
    const x3 = state[2];
    const y1 = state[3];
    const y2 = state[4];
    const y3 = state[5];
    const y4 = state[6];
    const y5 = state[7];
    const y7 = state[8];
    dstatedt[3] = 0;
    dstatedt[4] = 0;
    dstatedt[5] = 0;
    dstatedt[6] = 0;
    dstatedt[7] = 0;
    dstatedt[8] = 0;
    dstatedt[10] = 0;
    dstatedt[0] = 0 + 1 * internal.e1 * (internal.p1 * y1 * x2 - x1 * x3) / (1 + y1 + x2 + x1 + x3 + y1 * x2 + x1 * x3) - 1 * internal.e3 * (internal.p3 * x1 - y2) / (1 + x1 + y2) - 1 * internal.e4 * (internal.p4 * x1 - y3) / (1 + x1 + y3);
    dstatedt[1] = 0 - 1 * internal.e1 * (internal.p1 * y1 * x2 - x1 * x3) / (1 + y1 + x2 + x1 + x3 + y1 * x2 + x1 * x3) + 1 * internal.e2 * (internal.p2 * y4 * x3 - y5 * x2) / (1 + x3 + x2 + y4 + y5 + x3 * y4 + x2 * y5);
    dstatedt[2] = 0 + 1 * internal.e1 * (internal.p1 * y1 * x2 - x1 * x3) / (1 + y1 + x2 + x1 + x3 + y1 * x2 + x1 * x3) - 1 * internal.e2 * (internal.p2 * y4 * x3 - y5 * x2) / (1 + x3 + x2 + y4 + y5 + x3 * y4 + x2 * y5);
    dstatedt[9] = 0 + 1 * internal.e6 * internal.p6 * y7 - 1 * internal.e7 * internal.p7;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "x1", "x2", "x3", "y1", "y2", "y3", "y4", "y5", "y7", "x4", "y8"];
    this.metadata.internalOrder = {cell: null, e1: null, e2: null, e3: null, e4: null, e6: null, e7: null, initial_x1: null, initial_x2: null, initial_x3: null, initial_x4: null, initial_y1: null, initial_y2: null, initial_y3: null, initial_y4: null, initial_y5: null, initial_y7: null, initial_y8: null, p1: null, p2: null, p3: null, p4: null, p6: null, p7: null, x1_init: null, x2_init: null, x3_init: null, x4_init: null, y1_init: null, y2_init: null, y3_init: null, y4_init: null, y5_init: null, y7_init: null, y8_init: null};
    this.metadata.variableOrder = {x1: null, x2: null, x3: null, y1: null, y2: null, y3: null, y4: null, y5: null, y7: null, x4: null, y8: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
