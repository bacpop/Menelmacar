export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.CYTOPLASM = 1;
    internal.default1 = 1;
    internal.EmptySet = 0;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(2).fill(0);
    state[0] = internal.initial_M;
    state[1] = internal.initial_P;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["D", "J", "k1", "k2", "Keq", "M_init", "N_A", "P_init", "Pcrit", "V", "Vm"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "D", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "J", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Keq", internal, 200, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N_A", internal, 6.0221366999999997e+23, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pcrit", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vm", internal, 1, -Infinity, Infinity, false);
    internal.initial_M = internal.M_init;
    internal.initial_P = internal.P_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const M = state[0];
    const P = state[1];
    dstatedt[0] = 0 + 1 * internal.CYTOPLASM * (internal.Vm / (1 + Math.pow((P * (1 - 2 / (1 + Math.pow((1 + 8 * internal.Keq * P), (0.5)))) / (2 * internal.Pcrit)), (2)))) - 1 * internal.D * M * internal.CYTOPLASM;
    dstatedt[1] = 0 + 1 * internal.V * M * internal.CYTOPLASM - 1 * internal.D * P * internal.CYTOPLASM - 1 * internal.CYTOPLASM * ((internal.k1 * P * (2 / (1 + Math.pow((1 + 8 * internal.Keq * P), (0.5)))) + internal.k2 * P) / (internal.J + P));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "M", "P"];
    this.metadata.internalOrder = {CYTOPLASM: null, D: null, default1: null, EmptySet: null, initial_M: null, initial_P: null, J: null, k1: null, k2: null, Keq: null, M_init: null, N_A: null, P_init: null, Pcrit: null, V: null, Vm: null};
    this.metadata.variableOrder = {M: null, P: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
