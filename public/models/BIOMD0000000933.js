export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.pi = 3.1415929999999999;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_C;
    state[1] = internal.initial_M;
    state[2] = internal.initial_X;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["C_init", "epislon", "jxj", "Kc", "kd", "Kd", "kj", "M_init", "V2", "V4", "vd", "vi", "VM1", "VM3", "X_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "C_init", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "epislon", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "jxj", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kc", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kd", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kj", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V2", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V4", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vd", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vi", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VM1", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VM3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_C = internal.C_init;
    internal.initial_M = internal.M_init;
    internal.initial_X = internal.X_init;
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
    dstatedt[0] = 0 + 1 * internal.compartment * (1 / 4 * (1 - X - C));
    dstatedt[1] = 0 + 1 * internal.compartment * (6 * C / (1 + 2 * C) * ((1 - M) / (internal.epislon + 1 - M)) - 3 / 2 * (M / (internal.epislon + M)));
    dstatedt[2] = 0 + 1 * internal.compartment * (M * ((1 - X) / (internal.epislon + 1 - X)) - 7 / 10 * (X / (internal.epislon + X)));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "C", "M", "X"];
    this.metadata.internalOrder = {C_init: null, compartment: null, epislon: null, initial_C: null, initial_M: null, initial_X: null, jxj: null, Kc: null, kd: null, Kd: null, kj: null, M_init: null, pi: null, V2: null, V4: null, vd: null, vi: null, VM1: null, VM3: null, X_init: null};
    this.metadata.variableOrder = {C: null, M: null, X: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
