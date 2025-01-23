export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cytosol = 1;
    internal.ER_store = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_CaI;
    state[1] = internal.initial_IP3;
    state[2] = internal.initial_CaS;
    state[3] = internal.initial_g;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A", "B", "C", "CaI_init", "CaS_init", "D", "E", "F", "g_init", "IP3_init", "k1", "k2", "k3", "L", "R"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B", internal, 40, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C", internal, 1.1000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CaI_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CaS_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "D", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "F", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IP3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.14999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R", internal, 0.089999999999999997, -Infinity, Infinity, false);
    internal.initial_CaI = internal.CaI_init;
    internal.initial_CaS = internal.CaS_init;
    internal.initial_g = internal.g_init;
    internal.initial_IP3 = internal.IP3_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const CaI = state[0];
    const IP3 = state[1];
    const CaS = state[2];
    const g = state[3];
    dstatedt[0] = 0 + 1 * (1 - g) * (internal.A * Math.pow((IP3 * 0.5), (4)) / Math.pow((IP3 * 0.5 + internal.k1), (4)) + internal.L) * CaS - 1 * internal.B * Math.pow((CaI * 0.01), (2)) / (Math.pow((CaI * 0.01), (2)) + Math.pow((internal.k2), (2)));
    dstatedt[2] = 0 - 1 * (1 - g) * (internal.A * Math.pow((IP3 * 0.5), (4)) / Math.pow((IP3 * 0.5 + internal.k1), (4)) + internal.L) * CaS + 1 * internal.B * Math.pow((CaI * 0.01), (2)) / (Math.pow((CaI * 0.01), (2)) + Math.pow((internal.k2), (2)));
    dstatedt[3] = 0 + 1 * internal.E * Math.pow((CaI * 0.01), (4)) * (1 - g) - 1 * internal.F;
    dstatedt[1] = 0 + 1 * internal.C * (1 - internal.k3 / (CaI * 0.01 + internal.k3) * (1 / (1 + internal.R))) - 1 * internal.D * IP3 * 0.5;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "CaI", "IP3", "CaS", "g"];
    this.metadata.internalOrder = {A: null, B: null, C: null, CaI_init: null, CaS_init: null, cytosol: null, D: null, E: null, ER_store: null, F: null, g_init: null, initial_CaI: null, initial_CaS: null, initial_g: null, initial_IP3: null, IP3_init: null, k1: null, k2: null, k3: null, L: null, R: null};
    this.metadata.variableOrder = {CaI: null, IP3: null, CaS: null, g: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
