export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.k1 = 0.0050000000000000001;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_II;
    state[1] = internal.initial_M;
    state[2] = internal.initial_IIa;
    state[3] = internal.initial_P2;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["II_init", "IIa_init", "M_init", "P2_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "II_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IIa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P2_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_II = internal.II_init;
    internal.initial_IIa = internal.IIa_init;
    internal.initial_M = internal.M_init;
    internal.initial_P2 = internal.P2_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const II = state[0];
    const M = state[1];
    const P2 = state[3];
    dstatedt[0] = 0 - 1 * internal.compartment * internal.k1 * II - 1 * internal.compartment * internal.k1 * II;
    dstatedt[2] = 0 + 1 * internal.compartment * internal.k1 * M + 1 * internal.compartment * internal.k1 * P2;
    dstatedt[1] = 0 + 1 * internal.compartment * internal.k1 * II - 1 * internal.compartment * internal.k1 * M;
    dstatedt[3] = 0 + 1 * internal.compartment * internal.k1 * II - 1 * internal.compartment * internal.k1 * P2;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "II", "M", "IIa", "P2"];
    this.metadata.internalOrder = {compartment: null, II_init: null, IIa_init: null, initial_II: null, initial_IIa: null, initial_M: null, initial_P2: null, k1: null, M_init: null, P2_init: null};
    this.metadata.variableOrder = {II: null, M: null, IIa: null, P2: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
