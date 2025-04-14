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
    var state = Array(3).fill(0);
    state[0] = internal.initial_EmptySet;
    state[1] = internal.initial_u;
    state[2] = internal.initial_v;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["EmptySet_init", "k4", "k4prime", "k6", "kappa", "u_init", "v_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "EmptySet_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 180, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4prime", internal, 0.017999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kappa", internal, 0.014999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v_init", internal, 0, -Infinity, Infinity, false);
    internal.alpha = internal.k4prime / internal.k4;
    internal.initial_EmptySet = internal.EmptySet_init;
    internal.initial_u = internal.u_init;
    internal.initial_v = internal.v_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const u = state[1];
    const v = state[2];
    dstatedt[0] = 0;
    dstatedt[2] = internal.kappa - internal.k6 * u;
    dstatedt[1] = internal.k4 * (v - u) * (internal.alpha + Math.pow((u), (2))) - internal.k6 * u;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "EmptySet", "u", "v"];
    this.metadata.internalOrder = {alpha: null, cell: null, EmptySet_init: null, initial_EmptySet: null, initial_u: null, initial_v: null, k4: null, k4prime: null, k6: null, kappa: null, u_init: null, v_init: null};
    this.metadata.variableOrder = {EmptySet: null, u: null, v: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
