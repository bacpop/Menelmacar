export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment_0000001 = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(10).fill(0);
    state[0] = internal.initial_measIRp;
    state[1] = internal.initial_IR;
    state[2] = internal.initial_IRins;
    state[3] = internal.initial_IRp;
    state[4] = internal.initial_IRip;
    state[5] = internal.initial_IRi;
    state[6] = internal.initial_IRS;
    state[7] = internal.initial_IRSip;
    state[8] = internal.initial_X;
    state[9] = internal.initial_Xp;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["ins", "IR_init", "IRi_init", "IRins_init", "IRip_init", "IRp_init", "IRS_init", "IRSip_init", "k1a", "k1abasic", "k1b", "k1c", "k1d", "k1e", "k1f", "k1g", "k1r", "k21", "k22", "k3", "km2", "km3", "ky1", "ky2", "kyanna", "kyDosR", "measIRp_init", "X_init", "Xp_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "ins", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IR_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IRi_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IRins_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IRip_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IRp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IRS_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IRSip_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1a", internal, 0.38928818520000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1abasic", internal, 0.012452744, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1b", internal, 0.020002245049999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1c", internal, 0.36351679279999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1d", internal, 1580.6782649401, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1e", internal, 4.3833399999999999e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1f", internal, 20.072603503700002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1g", internal, 286.6994648072, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1r", internal, 3.6327773442, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k21", internal, 1.6722503302, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k22", internal, 0.036381618999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 1.6286590231, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "km2", internal, 32.594237189099999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "km3", internal, 0.1131073982, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ky1", internal, 152.9631668536, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ky2", internal, 8936.2195574050002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kyanna", internal, 16760.120314092601, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kyDosR", internal, 13740.432172999101, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "measIRp_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Xp_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_IR = internal.IR_init;
    internal.initial_IRi = internal.IRi_init;
    internal.initial_IRins = internal.IRins_init;
    internal.initial_IRip = internal.IRip_init;
    internal.initial_IRp = internal.IRp_init;
    internal.initial_IRS = internal.IRS_init;
    internal.initial_IRSip = internal.IRSip_init;
    internal.initial_measIRp = internal.measIRp_init;
    internal.initial_X = internal.X_init;
    internal.initial_Xp = internal.Xp_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const IR = state[1];
    const IRins = state[2];
    const IRp = state[3];
    const IRip = state[4];
    const IRi = state[5];
    const IRS = state[6];
    const IRSip = state[7];
    const X = state[8];
    const Xp = state[9];
    dstatedt[0] = 0;
    var V1a = internal.k1a * internal.ins * IR + internal.k1abasic * IR;
    var V1b = internal.k1b * IRins;
    var V1c = internal.k1c * IRins;
    var V1d = internal.k1d * IRp;
    var V1e = IRip * (internal.k1e + internal.k1f * Xp / (1 + Xp));
    var V1g = internal.k1g * IRp;
    var V1r = internal.k1r * IRi;
    var V2 = internal.k21 * (IRp + internal.k22 * IRip) * IRS;
    var V3 = internal.k3 * X * IRSip;
    var Vm2 = internal.km2 * IRSip;
    var Vm3 = internal.km3 * Xp;
    dstatedt[1] = - V1a + V1b + V1r + V1g;
    dstatedt[5] = V1e - V1r;
    dstatedt[2] = V1a - V1b - V1c;
    dstatedt[4] = V1d - V1e;
    dstatedt[3] = V1c - V1d - V1g;
    dstatedt[6] = - V2 + Vm2;
    dstatedt[7] = V2 - Vm2;
    dstatedt[8] = - V3 + Vm3;
    dstatedt[9] = V3 - Vm3;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "measIRp", "IR", "IRins", "IRp", "IRip", "IRi", "IRS", "IRSip", "X", "Xp"];
    this.metadata.internalOrder = {compartment_0000001: null, initial_IR: null, initial_IRi: null, initial_IRins: null, initial_IRip: null, initial_IRp: null, initial_IRS: null, initial_IRSip: null, initial_measIRp: null, initial_X: null, initial_Xp: null, ins: null, IR_init: null, IRi_init: null, IRins_init: null, IRip_init: null, IRp_init: null, IRS_init: null, IRSip_init: null, k1a: null, k1abasic: null, k1b: null, k1c: null, k1d: null, k1e: null, k1f: null, k1g: null, k1r: null, k21: null, k22: null, k3: null, km2: null, km3: null, ky1: null, ky2: null, kyanna: null, kyDosR: null, measIRp_init: null, X_init: null, Xp_init: null};
    this.metadata.variableOrder = {measIRp: null, IR: null, IRins: null, IRp: null, IRip: null, IRi: null, IRS: null, IRSip: null, X: null, Xp: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
