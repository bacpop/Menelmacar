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
    var intamount_init = (internal.initial_IRi + internal.initial_IRip) / 10;
    var measanna_init = internal.kyanna * internal.initial_IRSip;
    var measdosR_init = internal.kyDosR * internal.initial_IRSip;
    var measdoublestep_init = internal.ky2 * internal.initial_IRSip;
    var simXP_init = internal.initial_Xp;
    var V1a_init = internal.k1a * internal.ins * internal.initial_IR + internal.k1abasic * internal.initial_IR;
    var V1b_init = internal.k1b * internal.initial_IRins;
    var V1c_init = internal.k1c * internal.initial_IRins;
    var V1d_init = internal.k1d * internal.initial_IRp;
    var V1e_init = internal.initial_IRip * (internal.k1e + internal.k1f * internal.initial_Xp / (1 + internal.initial_Xp));
    var V1g_init = internal.k1g * internal.initial_IRp;
    var V1r_init = internal.k1r * internal.initial_IRi;
    var V2_init = internal.k21 * (internal.initial_IRp + internal.k22 * internal.initial_IRip) * internal.initial_IRS;
    var V3_init = internal.k3 * internal.initial_X * internal.initial_IRSip;
    var Vm2_init = internal.km2 * internal.initial_IRSip;
    var Vm3_init = internal.km3 * internal.initial_Xp;
    internal.initial_intamount = intamount_init;
    internal.initial_measanna = measanna_init;
    internal.initial_measdosR = measdosR_init;
    internal.initial_measdoublestep = measdoublestep_init;
    internal.initial_simXP = simXP_init;
    internal.initial_V1a = V1a_init;
    internal.initial_V1b = V1b_init;
    internal.initial_V1c = V1c_init;
    internal.initial_V1d = V1d_init;
    internal.initial_V1e = V1e_init;
    internal.initial_V1g = V1g_init;
    internal.initial_V1r = V1r_init;
    internal.initial_V2 = V2_init;
    internal.initial_V3 = V3_init;
    internal.initial_Vm2 = Vm2_init;
    internal.initial_Vm3 = Vm3_init;
    var state = Array(26).fill(0);
    state[0] = internal.initial_IR;
    state[1] = internal.initial_IRins;
    state[2] = internal.initial_IRp;
    state[3] = internal.initial_IRip;
    state[4] = internal.initial_IRi;
    state[5] = internal.initial_IRS;
    state[6] = internal.initial_IRSip;
    state[7] = internal.initial_X;
    state[8] = internal.initial_Xp;
    state[9] = internal.initial_V1a;
    state[10] = internal.initial_V1b;
    state[11] = internal.initial_V1c;
    state[12] = internal.initial_V1d;
    state[13] = internal.initial_V1e;
    state[14] = internal.initial_V1g;
    state[15] = internal.initial_V1r;
    state[16] = internal.initial_V2;
    state[17] = internal.initial_Vm2;
    state[18] = internal.initial_V3;
    state[19] = internal.initial_Vm3;
    state[20] = internal.initial_simXP;
    state[21] = internal.initial_intamount;
    state[22] = internal.initial_measIRp;
    state[23] = internal.initial_measdoublestep;
    state[24] = internal.initial_measanna;
    state[25] = internal.initial_measdosR;
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
    this.base.user.setUserScalar(user, "IRS_init", internal, 0, -Infinity, Infinity, false);
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
    this.base.user.setUserScalar(user, "measIRp_init", internal, 0, -Infinity, Infinity, false);
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
    const V1a = state[9];
    const V1b = state[10];
    const V1c = state[11];
    const V1d = state[12];
    const V1e = state[13];
    const V1g = state[14];
    const V1r = state[15];
    const V2 = state[16];
    const Vm2 = state[17];
    const V3 = state[18];
    const Vm3 = state[19];
    dstatedt[21] = 0 + 0;
    dstatedt[24] = 0 + 0;
    dstatedt[25] = 0 + 0;
    dstatedt[23] = 0 + 0;
    dstatedt[22] = 0;
    dstatedt[20] = 0 + 0;
    dstatedt[9] = 0 + 0;
    dstatedt[10] = 0 + 0;
    dstatedt[11] = 0 + 0;
    dstatedt[12] = 0 + 0;
    dstatedt[13] = 0 + 0;
    dstatedt[14] = 0 + 0;
    dstatedt[15] = 0 + 0;
    dstatedt[16] = 0 + 0;
    dstatedt[18] = 0 + 0;
    dstatedt[17] = 0 + 0;
    dstatedt[19] = 0 + 0;
    dstatedt[0] = 0 + - V1a + V1b + V1r + V1g;
    dstatedt[4] = 0 + V1e - V1r;
    dstatedt[1] = 0 + V1a - V1b - V1c;
    dstatedt[3] = 0 + V1d - V1e;
    dstatedt[2] = 0 + V1c - V1d - V1g;
    dstatedt[5] = 0 + - V2 + Vm2;
    dstatedt[6] = 0 + V2 - Vm2;
    dstatedt[7] = 0 + - V3 + Vm3;
    dstatedt[8] = 0 + V3 - Vm3;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "IR", "IRins", "IRp", "IRip", "IRi", "IRS", "IRSip", "X", "Xp", "V1a", "V1b", "V1c", "V1d", "V1e", "V1g", "V1r", "V2", "Vm2", "V3", "Vm3", "simXP", "intamount", "measIRp", "measdoublestep", "measanna", "measdosR"];
    this.metadata.internalOrder = {compartment_0000001: null, initial_intamount: null, initial_IR: null, initial_IRi: null, initial_IRins: null, initial_IRip: null, initial_IRp: null, initial_IRS: null, initial_IRSip: null, initial_measanna: null, initial_measdosR: null, initial_measdoublestep: null, initial_measIRp: null, initial_simXP: null, initial_V1a: null, initial_V1b: null, initial_V1c: null, initial_V1d: null, initial_V1e: null, initial_V1g: null, initial_V1r: null, initial_V2: null, initial_V3: null, initial_Vm2: null, initial_Vm3: null, initial_X: null, initial_Xp: null, ins: null, IR_init: null, IRi_init: null, IRins_init: null, IRip_init: null, IRp_init: null, IRS_init: null, IRSip_init: null, k1a: null, k1abasic: null, k1b: null, k1c: null, k1d: null, k1e: null, k1f: null, k1g: null, k1r: null, k21: null, k22: null, k3: null, km2: null, km3: null, ky1: null, ky2: null, kyanna: null, kyDosR: null, measIRp_init: null, X_init: null, Xp_init: null};
    this.metadata.variableOrder = {IR: null, IRins: null, IRp: null, IRip: null, IRi: null, IRS: null, IRSip: null, X: null, Xp: null, V1a: null, V1b: null, V1c: null, V1d: null, V1e: null, V1g: null, V1r: null, V2: null, Vm2: null, V3: null, Vm3: null, simXP: null, intamount: null, measIRp: null, measdoublestep: null, measanna: null, measdosR: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
