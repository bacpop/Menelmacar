export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.environment = 1;
    internal.IPTG = 5;
    internal.sink = 0;
    internal.source = 0;
    internal.d1 = 0.5 + Math.pow((internal.IPTG), (2)) / (Math.pow((5), (2)) + Math.pow((internal.IPTG), (2)));
    internal.kA2 = 0.02 + 0.029999999999999999 * (Math.pow((internal.IPTG), (2)) / (Math.pow((5), (2)) + Math.pow((internal.IPTG), (2))));
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_C1;
    state[1] = internal.initial_C2;
    state[2] = internal.initial_A1;
    state[3] = internal.initial_A2;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A1_init", "A2_init", "C1_init", "C2_init", "Cm", "D", "d2", "dAA1", "dAA2", "K1", "K2", "kA1", "kc1", "kc2"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A1_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "A2_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C1_init", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C2_init", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cm", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "D", internal, 0.1125, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d2", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dAA1", internal, 0.017000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dAA2", internal, 0.11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kA1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kc1", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kc2", internal, 0.40000000000000002, -Infinity, Infinity, false);
    internal.initial_A1 = internal.A1_init;
    internal.initial_A2 = internal.A2_init;
    internal.initial_C1 = internal.C1_init;
    internal.initial_C2 = internal.C2_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const C1 = state[0];
    const C2 = state[1];
    const A1 = state[2];
    const A2 = state[3];
    dstatedt[2] = 0 + 1 * internal.environment * internal.kA1 * C1 - 1 * internal.environment * (internal.dAA1 + internal.D) * A1;
    dstatedt[1] = 0 + 1 * internal.environment * internal.kc2 * C2 * (1 - (C1 + C2) / internal.Cm) - 1 * internal.environment * (internal.D + internal.d2 * Math.pow((A1), (2)) / (internal.K2 + Math.pow((A1), (2)))) * C2;
    dstatedt[3] = 0 + 1 * internal.environment * internal.kA2 * C2 - 1 * internal.environment * (internal.dAA2 + internal.D) * A2;
    dstatedt[0] = 0 + 1 * internal.environment * internal.kc1 * C1 * (1 - (C1 + C2) / internal.Cm) - 1 * internal.environment * (internal.D + internal.d1 * internal.K1 / (internal.K1 + Math.pow((A2), (2)))) * C1;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "C1", "C2", "A1", "A2"];
    this.metadata.internalOrder = {A1_init: null, A2_init: null, C1_init: null, C2_init: null, Cm: null, D: null, d1: null, d2: null, dAA1: null, dAA2: null, environment: null, initial_A1: null, initial_A2: null, initial_C1: null, initial_C2: null, IPTG: null, K1: null, K2: null, kA1: null, kA2: null, kc1: null, kc2: null, sink: null, source: null};
    this.metadata.variableOrder = {C1: null, C2: null, A1: null, A2: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
