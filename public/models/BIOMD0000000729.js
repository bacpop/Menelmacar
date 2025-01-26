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
    var state = Array(3).fill(0);
    state[0] = internal.initial_C;
    state[1] = internal.initial_M;
    state[2] = internal.initial_X;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["C_init", "K1", "K2", "K3", "K4", "Kc", "kd", "Kd", "M_init", "V2", "V4", "vd", "vi", "VM1", "VM3", "X_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "C_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K3", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K4", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kc", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kd", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V2", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V4", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vd", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vi", internal, 0.050000000000000003, -Infinity, Infinity, false);
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
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.vi) - 1 * internal.compartment * (internal.vd * X * C / (internal.Kd + C)) - 1 * internal.compartment * internal.kd * C;
    var V1 = C / (internal.Kc + C) * internal.VM1;
    var V3 = M * internal.VM3;
    dstatedt[1] = 0 + 1 * internal.compartment * (V1 * (1 - M) / (internal.K1 + 1 - M)) - 1 * internal.compartment * (internal.V2 * M / (internal.K2 + M));
    dstatedt[2] = 0 + 1 * internal.compartment * (V3 * (1 - X) / (internal.K3 + 1 - X)) - 1 * internal.compartment * (internal.V4 * X / (internal.K4 + X));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "C", "M", "X"];
    this.metadata.internalOrder = {C_init: null, compartment: null, initial_C: null, initial_M: null, initial_X: null, K1: null, K2: null, K3: null, K4: null, Kc: null, kd: null, Kd: null, M_init: null, V2: null, V4: null, vd: null, vi: null, VM1: null, VM3: null, X_init: null};
    this.metadata.variableOrder = {C: null, M: null, X: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
