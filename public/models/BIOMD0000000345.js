export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment1 = 1;
    internal.i5xi5 = 0;
    internal.i6xi6 = 0;
    internal.i7xi7 = 3.2063240951174503e-17;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(12).fill(0);
    state[0] = internal.initial_R;
    state[1] = internal.initial_ins;
    state[2] = internal.initial_IR;
    state[3] = internal.initial_I2R;
    state[4] = internal.initial_Rp;
    state[5] = internal.initial_IRp;
    state[6] = internal.initial_I2Rp;
    state[7] = internal.initial_Ren;
    state[8] = internal.initial_IRen;
    state[9] = internal.initial_I2Ren;
    state[10] = internal.initial_RPen;
    state[11] = internal.initial_IRPen;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["bw", "I2R_init", "I2Ren_init", "I2Rp_init", "ins_init", "intk1", "intk2", "IR_init", "IRen_init", "IRp_init", "IRPen_init", "k1ub", "k2ub", "kins", "kins1d", "kins1den", "kins2d", "kins2den", "Kpan", "kyd", "kyden", "kyp", "pansec", "R_init", "reck1", "Ren_init", "rholiver", "Rp_init", "RPen_init", "Rtotal"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "bw", internal, 200, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I2R_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I2Ren_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I2Rp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ins_init", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "intk1", internal, 0.00055000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "intk2", internal, 0.00020000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IR_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IRen_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IRp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IRPen_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1ub", internal, 0.34999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2ub", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kins", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kins1d", internal, 0.00040000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kins1den", internal, 0.0019250000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kins2d", internal, 0.040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kins2den", internal, 0.0038500000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kpan", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kyd", internal, 0.0038500000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kyden", internal, 0.0072199999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kyp", internal, 0.023099999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pansec", internal, 0.0016976000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_init", internal, 35.383699999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "reck1", internal, 0.0015330000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ren_init", internal, 4.6162999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rholiver", internal, 1051, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RPen_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rtotal", internal, 40, -Infinity, Infinity, false);
    internal.initial_I2R = internal.I2R_init;
    internal.initial_I2Ren = internal.I2Ren_init;
    internal.initial_I2Rp = internal.I2Rp_init;
    internal.initial_ins = internal.ins_init;
    internal.initial_IR = internal.IR_init;
    internal.initial_IRen = internal.IRen_init;
    internal.initial_IRp = internal.IRp_init;
    internal.initial_IRPen = internal.IRPen_init;
    internal.initial_R = internal.R_init;
    internal.initial_Ren = internal.Ren_init;
    internal.initial_Rp = internal.Rp_init;
    internal.initial_RPen = internal.RPen_init;
    internal.mkidney = 2 * 0.84999999999999998 * internal.bw / 230;
    internal.mliver = 0.050000000000000003 * internal.bw;
    internal.vp = 0.033750000000000002 * Math.pow((10), (- 3)) * internal.bw;
    internal.Kkidney = 0.022499999999999999 * Math.pow((10), (- 3)) * internal.mkidney;
    internal.vhep = internal.mliver / internal.rholiver * 0.78000000000000003;
    internal.vd = 0.27200000000000002 * Math.pow((10), (- 3)) * internal.vhep * internal.rholiver;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const R = state[0];
    const ins = state[1];
    const IR = state[2];
    const I2R = state[3];
    const Rp = state[4];
    const IRp = state[5];
    const I2Rp = state[6];
    const Ren = state[7];
    const IRen = state[8];
    const I2Ren = state[9];
    const RPen = state[10];
    const IRPen = state[11];
    dstatedt[1] = 0;
    var f1 = internal.intk2 * R - internal.reck1 * Ren;
    var f2 = internal.intk2 * IR;
    var f3 = internal.intk2 * I2R;
    var f4 = internal.intk1 * Rp - internal.reck1 * RPen;
    var f5 = internal.intk1 * IRp;
    var f6 = internal.intk1 * I2Rp;
    var i1 = internal.kins1den * IRen;
    var i2 = internal.kins1den * IRPen;
    var I2RPen = internal.Rtotal - R - IR - I2R - Rp - IRp - I2Rp - Ren - IRen - I2Ren - RPen - IRPen;
    var i3 = internal.kins2den * I2Ren;
    var r1 = internal.kins * R * ins - internal.kins1d * IR;
    var r2 = internal.kins * Rp * ins - internal.kins1d * IRp;
    var r3 = internal.kins * IR * ins - internal.kins2d * I2R;
    var r4 = internal.kins * IRp * ins - internal.kins2d * I2Rp;
    var r5 = internal.kyd * Rp;
    var r6 = internal.kyp * IR - internal.kyd * IRp;
    var r7 = internal.kyp * I2R - internal.kyd * I2Rp;
    dstatedt[3] = r3 - r7 - f3;
    dstatedt[9] = - i3 - internal.i7xi7 + f3;
    dstatedt[6] = r4 + r7 - f6;
    dstatedt[2] = r1 - r3 - r6 - f2;
    dstatedt[8] = - i1 + i3 - internal.i6xi6 + f2;
    dstatedt[5] = r2 - r4 + r6 - f5;
    dstatedt[0] = - r1 + r5 - f1;
    dstatedt[7] = i1 + internal.i5xi5 + f1;
    dstatedt[4] = - r2 - r5 - f4;
    dstatedt[10] = i2 - internal.i5xi5 + f4;
    var i4 = internal.kins2den * I2RPen;
    dstatedt[11] = - i2 + i4 + internal.i6xi6 + f5;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "R", "ins", "IR", "I2R", "Rp", "IRp", "I2Rp", "Ren", "IRen", "I2Ren", "RPen", "IRPen"];
    this.metadata.internalOrder = {bw: null, compartment1: null, I2R_init: null, I2Ren_init: null, I2Rp_init: null, i5xi5: null, i6xi6: null, i7xi7: null, initial_I2R: null, initial_I2Ren: null, initial_I2Rp: null, initial_ins: null, initial_IR: null, initial_IRen: null, initial_IRp: null, initial_IRPen: null, initial_R: null, initial_Ren: null, initial_Rp: null, initial_RPen: null, ins_init: null, intk1: null, intk2: null, IR_init: null, IRen_init: null, IRp_init: null, IRPen_init: null, k1ub: null, k2ub: null, kins: null, kins1d: null, kins1den: null, kins2d: null, kins2den: null, Kkidney: null, Kpan: null, kyd: null, kyden: null, kyp: null, mkidney: null, mliver: null, pansec: null, R_init: null, reck1: null, Ren_init: null, rholiver: null, Rp_init: null, RPen_init: null, Rtotal: null, vd: null, vhep: null, vp: null};
    this.metadata.variableOrder = {R: null, ins: null, IR: null, I2R: null, Rp: null, IRp: null, I2Rp: null, Ren: null, IRen: null, I2Ren: null, RPen: null, IRPen: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
