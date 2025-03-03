export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.tumor_microenvironment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(6).fill(0);
    state[0] = internal.initial_Tn;
    state[1] = internal.initial_Ts;
    state[2] = internal.initial_M1;
    state[3] = internal.initial_M2;
    state[4] = internal.initial_Th1;
    state[5] = internal.initial_Th2;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["ah1", "ah2", "am1", "am2", "an", "as", "bm", "bt", "bth", "dh1", "dh2", "dm1", "dm2", "dmn", "dms", "dts", "k12", "k21", "ksn", "M1_init", "M2_init", "r", "rh1", "rh2", "rmn", "Th1_init", "Th2_init", "Tn_init", "Ts_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "ah1", internal, 0.0080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ah2", internal, 0.0080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "am1", internal, 4.9999999999999998e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "am2", internal, 4.9999999999999998e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "an", internal, 4.9999999999999998e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "as", internal, 9.9999999999999995e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "bm", internal, 100000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "bt", internal, 2000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "bth", internal, 100000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dh1", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dh2", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dm1", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dm2", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dmn", internal, 1.9999999999999999e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dms", internal, 1.9999999999999999e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dts", internal, 5.2999999999999998e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k12", internal, 5.0000000000000002e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k21", internal, 4.0000000000000003e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ksn", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M1_init", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M2_init", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 0.56499999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rh1", internal, 9.0000000000000002e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rh2", internal, 9.0000000000000002e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rmn", internal, 9.9999999999999995e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Th1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Th2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tn_init", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ts_init", internal, 1000000, -Infinity, Infinity, false);
    internal.initial_M1 = internal.M1_init;
    internal.initial_M2 = internal.M2_init;
    internal.initial_Th1 = internal.Th1_init;
    internal.initial_Th2 = internal.Th2_init;
    internal.initial_Tn = internal.Tn_init;
    internal.initial_Ts = internal.Ts_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Tn = state[0];
    const Ts = state[1];
    const M1 = state[2];
    const M2 = state[3];
    const Th1 = state[4];
    const Th2 = state[5];
    dstatedt[2] = 0 + 1 * internal.tumor_microenvironment * ((internal.as * Ts + internal.am1 * Th1) * M1 * (1 - (M1 + M2) / internal.bm)) - 1 * internal.tumor_microenvironment * internal.dm1 * M1 - 1 * internal.tumor_microenvironment * (internal.k12 * M1 * M2) + 1 * internal.tumor_microenvironment * (internal.k21 * M2 * M1);
    dstatedt[3] = 0 + 1 * internal.tumor_microenvironment * (internal.k12 * M1 * M2) - 1 * internal.tumor_microenvironment * (internal.k21 * M2 * M1) + 1 * internal.tumor_microenvironment * ((internal.an * Tn + internal.am2 * Th2) * M2 * (1 - (M2 + M1) / internal.bm)) - 1 * internal.tumor_microenvironment * internal.dm2 * M2;
    dstatedt[4] = 0 + 1 * internal.tumor_microenvironment * (internal.rh1 * M1 * Th1 * (1 - (Th1 + Th2) / internal.bth)) - 1 * internal.tumor_microenvironment * internal.dh1 * Th1 + 1 * internal.tumor_microenvironment * (internal.ah1 * M1);
    dstatedt[5] = 0 + 1 * internal.tumor_microenvironment * (internal.rh2 * M2 * Th2 * (1 - (Th2 + Th1) / internal.bth)) - 1 * internal.tumor_microenvironment * internal.dh2 * Th2 + 1 * internal.tumor_microenvironment * (internal.ah2 * M2);
    dstatedt[0] = 0 + 1 * internal.tumor_microenvironment * (internal.r * Tn * (1 - (Tn + Ts) / internal.bt)) + 1 * internal.tumor_microenvironment * internal.ksn * Ts - 1 * internal.tumor_microenvironment * (internal.dmn * M1 * Tn) + 1 * internal.tumor_microenvironment * (internal.rmn * Tn * M2);
    dstatedt[1] = 0 - 1 * internal.tumor_microenvironment * internal.ksn * Ts + 1 * internal.tumor_microenvironment * (internal.r * Ts * (1 - (Ts + Tn) / internal.bt)) - 1 * internal.tumor_microenvironment * (internal.dms * M1 * Ts) - 1 * internal.tumor_microenvironment * (internal.dts * Th1 * Ts);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Tn", "Ts", "M1", "M2", "Th1", "Th2"];
    this.metadata.internalOrder = {ah1: null, ah2: null, am1: null, am2: null, an: null, as: null, bm: null, bt: null, bth: null, dh1: null, dh2: null, dm1: null, dm2: null, dmn: null, dms: null, dts: null, initial_M1: null, initial_M2: null, initial_Th1: null, initial_Th2: null, initial_Tn: null, initial_Ts: null, k12: null, k21: null, ksn: null, M1_init: null, M2_init: null, r: null, rh1: null, rh2: null, rmn: null, Th1_init: null, Th2_init: null, Tn_init: null, Ts_init: null, tumor_microenvironment: null};
    this.metadata.variableOrder = {Tn: null, Ts: null, M1: null, M2: null, Th1: null, Th2: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
