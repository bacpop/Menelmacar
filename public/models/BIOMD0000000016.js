export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment_0000004 = 1.0000000000000001e-15;
    internal.CYTOPLASM = 1.0000000000000001e-15;
    internal.default1 = 1.0000000000000001e-15;
    internal.EmptySet = 0;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(6).fill(0);
    state[0] = internal.initial_M;
    state[1] = internal.initial_P0;
    state[2] = internal.initial_P1;
    state[3] = internal.initial_P2;
    state[4] = internal.initial_Pn;
    state[5] = internal.initial_Pt;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["k1", "K1", "k2", "K2", "K3", "K4", "Kd", "KI", "Km", "ks", "M_init", "n", "P0_init", "P1_init", "P2_init", "Pn_init", "Pt_init", "V1", "V2", "V3", "V4", "Vd", "Vm", "Vs"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "k1", internal, 1.8999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 1.3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K3", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K4", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kd", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KI", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ks", internal, 0.38, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P0_init", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P1_init", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P2_init", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pn_init", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pt_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V1", internal, 3.2000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V2", internal, 1.5800000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V3", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V4", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vd", internal, 0.94999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vm", internal, 0.65000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vs", internal, 0.76000000000000001, -Infinity, Infinity, false);
    internal.initial_M = internal.M_init;
    internal.initial_P0 = internal.P0_init;
    internal.initial_P1 = internal.P1_init;
    internal.initial_P2 = internal.P2_init;
    internal.initial_Pn = internal.Pn_init;
    internal.initial_Pt = internal.Pt_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const M = state[0];
    const P0 = state[1];
    const P1 = state[2];
    const P2 = state[3];
    const Pn = state[4];
    dstatedt[5] = 0;
    dstatedt[0] = 0 + 1 * internal.default1 * internal.Vs * Math.pow((internal.KI), (internal.n)) / (Math.pow((internal.KI), (internal.n)) + Math.pow((Pn), (internal.n))) - 1 * internal.Vm * M * internal.CYTOPLASM / (internal.Km + M);
    dstatedt[1] = 0 + 1 * internal.ks * M * internal.default1 - 1 * internal.CYTOPLASM * internal.V1 * P0 / (internal.K1 + P0) + 1 * internal.CYTOPLASM * internal.V2 * P1 / (internal.K2 + P1);
    dstatedt[2] = 0 + 1 * internal.CYTOPLASM * internal.V1 * P0 / (internal.K1 + P0) - 1 * internal.CYTOPLASM * internal.V2 * P1 / (internal.K2 + P1) - 1 * internal.CYTOPLASM * internal.V3 * P1 / (internal.K3 + P1) + 1 * internal.CYTOPLASM * internal.V4 * P2 / (internal.K4 + P2);
    dstatedt[3] = 0 + 1 * internal.CYTOPLASM * internal.V3 * P1 / (internal.K3 + P1) - 1 * internal.CYTOPLASM * internal.V4 * P2 / (internal.K4 + P2) - 1 * internal.k1 * P2 * internal.CYTOPLASM + 1 * internal.k2 * Pn * internal.compartment_0000004 - 1 * internal.CYTOPLASM * internal.Vd * P2 / (internal.Kd + P2);
    dstatedt[4] = 0 + 1 * internal.k1 * P2 * internal.CYTOPLASM - 1 * internal.k2 * Pn * internal.compartment_0000004;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "M", "P0", "P1", "P2", "Pn", "Pt"];
    this.metadata.internalOrder = {compartment_0000004: null, CYTOPLASM: null, default1: null, EmptySet: null, initial_M: null, initial_P0: null, initial_P1: null, initial_P2: null, initial_Pn: null, initial_Pt: null, k1: null, K1: null, k2: null, K2: null, K3: null, K4: null, Kd: null, KI: null, Km: null, ks: null, M_init: null, n: null, P0_init: null, P1_init: null, P2_init: null, Pn_init: null, Pt_init: null, V1: null, V2: null, V3: null, V4: null, Vd: null, Vm: null, Vs: null};
    this.metadata.variableOrder = {M: null, P0: null, P1: null, P2: null, Pn: null, Pt: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
