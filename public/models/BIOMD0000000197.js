export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.apical = 1.5;
    internal.basolat = 1;
    internal.cell = 1;
    internal.pi = 3.1415929999999999;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var BSP_cell_init = internal.initial_x3 + internal.initial_x4;
    var BSP_tot_init = internal.initial_x1 + internal.initial_x2 + internal.initial_x3 + internal.initial_x4 + internal.initial_x5;
    internal.initial_BSP_cell = BSP_cell_init;
    internal.initial_BSP_tot = BSP_tot_init;
    var state = Array(7).fill(0);
    state[0] = internal.initial_x1;
    state[1] = internal.initial_x2;
    state[2] = internal.initial_x3;
    state[3] = internal.initial_x4;
    state[4] = internal.initial_x5;
    state[5] = internal.initial_BSP_tot;
    state[6] = internal.initial_BSP_cell;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["p1", "p10", "p11", "p12", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "x1_init", "x2_init", "x3_init", "x4_init", "x5_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "p1", internal, 0.0025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p10", internal, 1.6000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p11", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p12", internal, 0.00029999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p2", internal, 0.078399999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p3", internal, 0.0012999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p4", internal, 0.082699999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p5", internal, 0.0091000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p6", internal, 6.3999999999999997e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p7", internal, 0.039699999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p8", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p9", internal, 0.0097999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x1_init", internal, 88, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x4_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x5_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_x1 = internal.x1_init;
    internal.initial_x2 = internal.x2_init;
    internal.initial_x3 = internal.x3_init;
    internal.initial_x4 = internal.x4_init;
    internal.initial_x5 = internal.x5_init;
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
    const x4 = state[3];
    const x5 = state[4];
    dstatedt[6] = 0 + 0;
    dstatedt[5] = 0 + 0;
    dstatedt[0] = 0 - 1 * internal.p1 * x1 - 1 * internal.p3 * x1 + 1 * internal.p4 * x3 - 1 * internal.p6 * x1 * (internal.p8 - x2) + 1 * internal.p7 * x2 - 1 * internal.p12 * (x1 / internal.basolat - x5 / internal.apical);
    dstatedt[1] = 0 + 1 * internal.p6 * x1 * (internal.p8 - x2) - 1 * internal.p7 * x2;
    dstatedt[2] = 0 + 1 * internal.p1 * x1 - 1 * internal.p2 * x3 + 1 * internal.p3 * x1 - 1 * internal.p4 * x3 - 1 * internal.p5 * x3 - 1 * internal.p9 * x3 * (internal.p11 - x4) + 1 * internal.p10 * x4;
    dstatedt[3] = 0 + 1 * internal.p9 * x3 * (internal.p11 - x4) - 1 * internal.p10 * x4;
    dstatedt[4] = 0 + 1 * internal.p2 * x3 + 1 * internal.p5 * x3 + 1 * internal.p12 * (x1 / internal.basolat - x5 / internal.apical);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "x1", "x2", "x3", "x4", "x5", "BSP_tot", "BSP_cell"];
    this.metadata.internalOrder = {apical: null, basolat: null, cell: null, initial_BSP_cell: null, initial_BSP_tot: null, initial_x1: null, initial_x2: null, initial_x3: null, initial_x4: null, initial_x5: null, p1: null, p10: null, p11: null, p12: null, p2: null, p3: null, p4: null, p5: null, p6: null, p7: null, p8: null, p9: null, pi: null, x1_init: null, x2_init: null, x3_init: null, x4_init: null, x5_init: null};
    this.metadata.variableOrder = {x1: null, x2: null, x3: null, x4: null, x5: null, BSP_tot: null, BSP_cell: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
