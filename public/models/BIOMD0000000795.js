export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.bone_marrow = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(2).fill(0);
    state[0] = internal.initial_H;
    state[1] = internal.initial_T;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["b1", "b2", "H_init", "kxk", "T_init", "u1", "u2", "v"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "b1", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b2", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H_init", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_init", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v", internal, 0.10000000000000001, -Infinity, Infinity, false);
    internal.initial_H = internal.H_init;
    internal.initial_T = internal.T_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const H = state[0];
    const T = state[1];
    dstatedt[0] = 0 + 1 * internal.bone_marrow * (internal.b2 * H * (1 - H - (1 - internal.v) * T)) - 1 * internal.bone_marrow * internal.u2 * H - 1 * internal.bone_marrow * (internal.b1 * H * T * internal.kxk);
    dstatedt[1] = 0 + 1 * internal.bone_marrow * (internal.b1 * T * (1 - T - (1 - internal.kxk) * H)) - 1 * internal.bone_marrow * internal.u1 * T - 1 * internal.bone_marrow * (internal.b2 * T * H * internal.v);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "H", "T"];
    this.metadata.internalOrder = {b1: null, b2: null, bone_marrow: null, H_init: null, initial_H: null, initial_T: null, kxk: null, T_init: null, u1: null, u2: null, v: null};
    this.metadata.variableOrder = {H: null, T: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
