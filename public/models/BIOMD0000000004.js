export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(5).fill(0);
    state[0] = internal.initial_C;
    state[1] = internal.initial_M;
    state[2] = internal.initial_X;
    state[3] = internal.initial_MI;
    state[4] = internal.initial_XI;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["C_init", "K1", "K2", "K3", "K4", "Kc", "kd", "Kd", "M_init", "MI_init", "V2", "V4", "vd", "vi", "VM1", "VM3", "X_init", "XI_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "C_init", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K3", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K4", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kc", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kd", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_init", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MI_init", internal, 0.98999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V2", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V4", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vd", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vi", internal, 0.025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VM1", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VM3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_init", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "XI_init", internal, 0.98999999999999999, -Infinity, Infinity, false);
    internal.initial_C = internal.C_init;
    internal.initial_M = internal.M_init;
    internal.initial_MI = internal.MI_init;
    internal.initial_X = internal.X_init;
    internal.initial_XI = internal.XI_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const C = state[0];
    const M = state[1];
    const X = state[2];
    const MI = state[3];
    const XI = state[4];
    dstatedt[0] = 0 + 1 * internal.cell * internal.vi - 1 * C * internal.cell * internal.kd - 1 * C * internal.cell * internal.vd * X * Math.pow((C + internal.Kd), (- 1));
    var V1 = C * internal.VM1 * Math.pow((C + internal.Kc), (- 1));
    var V3 = M * internal.VM3;
    dstatedt[1] = 0 + 1 * internal.cell * MI * V1 * Math.pow((internal.K1 + MI), (- 1)) - 1 * internal.cell * M * internal.V2 * Math.pow((internal.K2 + M), (- 1));
    dstatedt[3] = 0 - 1 * internal.cell * MI * V1 * Math.pow((internal.K1 + MI), (- 1)) + 1 * internal.cell * M * internal.V2 * Math.pow((internal.K2 + M), (- 1));
    dstatedt[2] = 0 + 1 * internal.cell * V3 * XI * Math.pow((internal.K3 + XI), (- 1)) - 1 * internal.cell * internal.V4 * X * Math.pow((internal.K4 + X), (- 1));
    dstatedt[4] = 0 - 1 * internal.cell * V3 * XI * Math.pow((internal.K3 + XI), (- 1)) + 1 * internal.cell * internal.V4 * X * Math.pow((internal.K4 + X), (- 1));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "C", "M", "X", "MI", "XI"];
    this.metadata.internalOrder = {C_init: null, cell: null, initial_C: null, initial_M: null, initial_MI: null, initial_X: null, initial_XI: null, K1: null, K2: null, K3: null, K4: null, Kc: null, kd: null, Kd: null, M_init: null, MI_init: null, V2: null, V4: null, vd: null, vi: null, VM1: null, VM3: null, X_init: null, XI_init: null};
    this.metadata.variableOrder = {C: null, M: null, X: null, MI: null, XI: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
