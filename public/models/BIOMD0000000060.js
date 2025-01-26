export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Ca = 0.90000000000000002;
    internal.compartment = 1;
    internal.ka_minus = 28.800000000000001;
    internal.ka_plus = 1500;
    internal.kb_minus = 385.89999999999998;
    internal.kb_plus = 1500;
    internal.kc_minus = 0.10000000000000001;
    internal.kc_plus = 1.75;
    internal.m = 3;
    internal.n = 4;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_Pc1;
    state[1] = internal.initial_Po2;
    state[2] = internal.initial_Po1;
    state[3] = internal.initial_Pc2;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Pc1_init", "Pc2_init", "Po1_init", "Po2_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Pc1_init", internal, 0.96299999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pc2_init", internal, 0.036999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Po1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Po2_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_Pc1 = internal.Pc1_init;
    internal.initial_Pc2 = internal.Pc2_init;
    internal.initial_Po1 = internal.Po1_init;
    internal.initial_Po2 = internal.Po2_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Pc1 = state[0];
    const Po2 = state[1];
    const Po1 = state[2];
    const Pc2 = state[3];
    dstatedt[0] = 0 + 1 * internal.ka_minus * Po1 - internal.ka_plus * Math.pow((internal.Ca), (internal.n)) * Pc1;
    dstatedt[3] = 0 + 1 * internal.kc_plus * Po1 - internal.kc_minus * Pc2;
    dstatedt[2] = 0 - 1 * internal.ka_minus * Po1 - internal.ka_plus * Math.pow((internal.Ca), (internal.n)) * Pc1 - 1 * internal.kb_plus * Math.pow((internal.Ca), (internal.m)) * Po1 - internal.kb_minus * Po2 - 1 * internal.kc_plus * Po1 - internal.kc_minus * Pc2;
    dstatedt[1] = 0 + 1 * internal.kb_plus * Math.pow((internal.Ca), (internal.m)) * Po1 - internal.kb_minus * Po2;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Pc1", "Po2", "Po1", "Pc2"];
    this.metadata.internalOrder = {Ca: null, compartment: null, initial_Pc1: null, initial_Pc2: null, initial_Po1: null, initial_Po2: null, ka_minus: null, ka_plus: null, kb_minus: null, kb_plus: null, kc_minus: null, kc_plus: null, m: null, n: null, Pc1_init: null, Pc2_init: null, Po1_init: null, Po2_init: null};
    this.metadata.variableOrder = {Pc1: null, Po2: null, Po1: null, Pc2: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
