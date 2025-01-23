export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.k1 = 0.029499999999999998;
    internal.Km = 380;
    internal.v = 0.00134;
    internal.Vmax = 0.13400000000000001;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(2).fill(0);
    state[0] = internal.initial_V;
    state[1] = internal.initial_C;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["C_init", "V_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "C_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_C = internal.C_init;
    internal.initial_V = internal.V_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const V = state[0];
    const C = state[1];
    dstatedt[1] = 0 + 1 * internal.compartment * internal.k1 * V * C - 1 * internal.compartment * internal.k1 * V * C + 1 * internal.compartment * (internal.v) - 1 * internal.compartment * internal.k1 * V * C - 1 * internal.compartment * internal.k1 * C;
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.v) + 2 * internal.compartment * (internal.Vmax * V / (internal.Km + V)) - 1 * internal.compartment * (internal.Vmax * V / (internal.Km + V)) - 1 * internal.compartment * internal.k1 * V * C - 1 * internal.compartment * internal.k1 * V + 1 * internal.compartment * internal.k1 * V * C - 1 * internal.compartment * internal.k1 * V * C;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "V", "C"];
    this.metadata.internalOrder = {C_init: null, compartment: null, initial_C: null, initial_V: null, k1: null, Km: null, v: null, V_init: null, Vmax: null};
    this.metadata.variableOrder = {V: null, C: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
