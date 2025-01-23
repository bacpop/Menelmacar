export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.bladder_cancer_tme = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_C;
    state[1] = internal.initial_E;
    state[2] = internal.initial_B;
    state[3] = internal.initial_P;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a1", "a2", "alpha1", "alpha2", "alpha3", "b", "B_init", "C_init", "delta", "E_init", "kxk", "P_init", "r", "u1", "u2", "u3"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a1", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a2", internal, 0.051999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha1", internal, 1.1000000000000001e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha2", internal, 3.45e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha3", internal, 1.2499999999999999e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 650000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_init", internal, 100000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta", internal, 151932, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 2000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 0.0033, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u1", internal, 0.041000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u3", internal, 166.31999999999999, -Infinity, Infinity, false);
    internal.initial_B = internal.B_init;
    internal.initial_C = internal.C_init;
    internal.initial_E = internal.E_init;
    internal.initial_P = internal.P_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const C = state[0];
    const E = state[1];
    const B = state[2];
    const P = state[3];
    dstatedt[2] = 0 + 1 * internal.bladder_cancer_tme * (internal.b) - 1 * internal.bladder_cancer_tme * internal.u2 * B - 1 * internal.bladder_cancer_tme * (internal.alpha3 * E * B);
    dstatedt[0] = 0 + 1 * internal.bladder_cancer_tme * (internal.r * C) - 1 * internal.bladder_cancer_tme * (internal.alpha1 * E * C / (P + internal.kxk));
    dstatedt[1] = 0 + 1 * internal.bladder_cancer_tme * (internal.a1 * C * E / (P + internal.kxk)) + 1 * internal.bladder_cancer_tme * (internal.a2 * B * E / (P + internal.kxk)) - 1 * internal.bladder_cancer_tme * (internal.alpha2 * E * C) - 1 * internal.bladder_cancer_tme * internal.u1 * E;
    dstatedt[3] = 0 + 1 * internal.bladder_cancer_tme * (internal.delta) - 1 * internal.bladder_cancer_tme * internal.u3 * P;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "C", "E", "B", "P"];
    this.metadata.internalOrder = {a1: null, a2: null, alpha1: null, alpha2: null, alpha3: null, b: null, B_init: null, bladder_cancer_tme: null, C_init: null, delta: null, E_init: null, initial_B: null, initial_C: null, initial_E: null, initial_P: null, kxk: null, P_init: null, r: null, u1: null, u2: null, u3: null};
    this.metadata.variableOrder = {C: null, E: null, B: null, P: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
