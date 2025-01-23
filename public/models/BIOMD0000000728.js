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
    var state = Array(2).fill(0);
    state[0] = internal.initial_M;
    state[1] = internal.initial_C;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["C_init", "e", "f", "g", "ixi", "M_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "C_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e", internal, 3.4661599999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ixi", internal, 1.2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_C = internal.C_init;
    internal.initial_M = internal.M_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const M = state[0];
    const C = state[1];
    dstatedt[1] = 0 + 1 * internal.cell * (internal.ixi) - 1 * internal.cell * (M);
    dstatedt[0] = 0 + 1 * internal.cell * (internal.e * C) + 1 * internal.cell * (internal.f * C * Math.pow((M), (2))) - 1 * internal.cell * (internal.g * M / (M + 1));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "M", "C"];
    this.metadata.internalOrder = {C_init: null, cell: null, e: null, f: null, g: null, initial_C: null, initial_M: null, ixi: null, M_init: null};
    this.metadata.variableOrder = {M: null, C: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
