export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell = 1;
    internal.y1 = 10;
    internal.y2 = 0;
    internal.y3 = 0;
    internal.y4 = 1;
    internal.y5 = 1;
    internal.y6 = 0;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_x1;
    state[1] = internal.initial_x2;
    state[2] = internal.initial_x3;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["e1", "e2", "e3", "e4", "e5", "p1", "p2", "p3", "p4", "p5", "x1_init", "x2_init", "x3_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "e1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e4", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e5", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p1", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p2", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p3", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p4", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p5", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x1_init", internal, 0.056257383105260003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x2_init", internal, 0.76876151899652001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x3_init", internal, 4.23123848100348, -Infinity, Infinity, false);
    internal.initial_x1 = internal.x1_init;
    internal.initial_x2 = internal.x2_init;
    internal.initial_x3 = internal.x3_init;
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
    dstatedt[0] = 0 + 1 * internal.e1 * (internal.p1 * internal.y1 * x2 - x1 * x3) / (1 + internal.y1 + x2 + x1 + x3 + internal.y1 * x2 + x1 * x3) - 1 * internal.e3 * (internal.p3 * x1 - internal.y2) / (1 + x1 + internal.y2) - 1 * internal.e4 * (internal.p4 * x1 - internal.y3) / (1 + x1 + internal.y3);
    dstatedt[1] = 0 - 1 * internal.e1 * (internal.p1 * internal.y1 * x2 - x1 * x3) / (1 + internal.y1 + x2 + x1 + x3 + internal.y1 * x2 + x1 * x3) + 1 * internal.e2 * (internal.p2 * internal.y4 * x3 - internal.y5 * x2) / (1 + x3 + x2 + internal.y4 + internal.y5 + x3 * internal.y4 + x2 * internal.y5);
    dstatedt[2] = 0 + 1 * internal.e1 * (internal.p1 * internal.y1 * x2 - x1 * x3) / (1 + internal.y1 + x2 + x1 + x3 + internal.y1 * x2 + x1 * x3) - 1 * internal.e2 * (internal.p2 * internal.y4 * x3 - internal.y5 * x2) / (1 + x3 + x2 + internal.y4 + internal.y5 + x3 * internal.y4 + x2 * internal.y5) - 1 * internal.e5 * internal.p5 * x3;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "x1", "x2", "x3"];
    this.metadata.internalOrder = {cell: null, e1: null, e2: null, e3: null, e4: null, e5: null, initial_x1: null, initial_x2: null, initial_x3: null, p1: null, p2: null, p3: null, p4: null, p5: null, x1_init: null, x2_init: null, x3_init: null, y1: null, y2: null, y3: null, y4: null, y5: null, y6: null};
    this.metadata.variableOrder = {x1: null, x2: null, x3: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
