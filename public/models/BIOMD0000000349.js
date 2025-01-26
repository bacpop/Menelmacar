export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.initial_Cac = 0;
    internal.initial_Vp = 0;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(9).fill(0);
    state[0] = internal.initial_G3P;
    state[1] = internal.initial_PYR;
    state[2] = internal.initial_ATP;
    state[3] = internal.initial_NADHm;
    state[4] = internal.initial_NADHc;
    state[5] = internal.initial_Vm;
    state[6] = internal.initial_Cam;
    state[7] = internal.initial_Vp;
    state[8] = internal.initial_Cac;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["ai", "am", "Ao", "ATP_init1", "Cac_init1", "Cam_init1", "Cmit", "Cmp", "F", "fi", "fm", "G3P_init1", "gKCa", "Glu", "gmVCa", "hgl", "hp", "hpc", "kat", "kATP", "kATPCa", "kbt", "kCaA", "KCaj", "KCam", "KgNc", "kgpd", "Klnc", "klp", "Kmadp", "KmATP", "Kmg3p", "Kmgl", "KmLD", "KmNh", "Kmph", "Kmpyr", "knadhc", "knadhm", "KNaj", "KpCam", "KPNm", "ksg", "KTNc", "KTNm", "NADHc_init1", "NADHm_init1", "Nam", "Ni", "Ntc", "Ntm", "PCa", "Plb", "Plr", "PYR_init1", "Tnadh", "Tv", "u1", "u2", "Vci", "Vi", "Vm_init1", "Vme", "Vmglu", "Vmgpd", "Vmldh", "Vmmit", "Vmnc", "Vmpdh", "Vmph", "Vp_init1", "ZCa"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "ai", internal, 0.34100000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "am", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ao", internal, 4000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ATP_init1", internal, 3700, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cac_init1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cam_init1", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cmit", internal, 1.8200000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cmp", internal, 6158, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "F", internal, 96480, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "fi", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "fm", internal, 0.00029999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G3P_init1", internal, 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gKCa", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Glu", internal, 8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gmVCa", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "hgl", internal, 1.7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "hp", internal, 8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "hpc", internal, 8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kat", internal, - 0.0049199999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kATP", internal, 4.0000000000000003e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kATPCa", internal, 9.0000000000000006e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kbt", internal, - 0.0044299999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kCaA", internal, 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KCaj", internal, 8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KCam", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KgNc", internal, 0.089999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kgpd", internal, 1.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Klnc", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "klp", internal, 0.030499999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kmadp", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KmATP", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kmg3p", internal, 200, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kmgl", internal, 7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KmLD", internal, 47.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KmNh", internal, 3000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kmph", internal, 131.40000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kmpyr", internal, 47.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "knadhc", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "knadhm", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KNaj", internal, 8000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KpCam", internal, 0.16500000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KPNm", internal, 81, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ksg", internal, 2.0000000000000002e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KTNc", internal, 0.002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KTNm", internal, 16.780000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NADHc_init1", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NADHm_init1", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Nam", internal, 5000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ni", internal, 10000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ntc", internal, 2000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ntm", internal, 2200, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PCa", internal, 0.0040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Plb", internal, 0.0011999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Plr", internal, 0.0011999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PYR_init1", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tnadh", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tv", internal, 26.73, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u1", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u2", internal, 1.1000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vci", internal, 0.76400000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vi", internal, 0.53000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vm_init1", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vme", internal, 22, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vmglu", internal, 0.010999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vmgpd", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vmldh", internal, 1.2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vmmit", internal, 0.0144, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vmnc", internal, 0.025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vmpdh", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vmph", internal, 8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vp_init1", internal, - 70, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ZCa", internal, 2, -Infinity, Infinity, false);
    internal.ATP_init = internal.ATP_init1;
    internal.Cam_init = internal.Cam_init1;
    internal.G3P_init = internal.G3P_init1;
    internal.NADHc_init = internal.NADHc_init1;
    internal.NADHm_init = internal.NADHm_init1;
    internal.PYR_init = internal.PYR_init1;
    internal.Vm_init = internal.Vm_init1;
    internal.initial_ATP = internal.ATP_init;
    internal.initial_Cam = internal.Cam_init;
    internal.initial_G3P = internal.G3P_init;
    internal.initial_NADHc = internal.NADHc_init;
    internal.initial_NADHm = internal.NADHm_init;
    internal.initial_PYR = internal.PYR_init;
    internal.initial_Vm = internal.Vm_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Vp = state[7];
    const Cac = state[8];
    const G3P = state[0];
    const PYR = state[1];
    const ATP = state[2];
    const NADHm = state[3];
    const NADHc = state[4];
    const Vm = state[5];
    const Cam = state[6];
    var ACa = 1 + - (1 * (1 / Math.exp(Cam * (1 / internal.KpCam))));
    var ADP = internal.Ao + - ATP;
    var AT = Math.pow((Vm), (internal.hp)) * (1 / (Math.pow((internal.Kmph), (internal.hp)) + Math.pow((Vm), (internal.hp))));
    var DelJNCa = 1 + Math.pow((internal.Ni), (3)) * (1 / Math.pow((internal.KNaj), (3))) + Cam * (1 / internal.KCaj) + Math.pow((internal.Ni), (3)) * Cam * (1 / (Math.pow((internal.KNaj), (3)) * internal.KCaj)) + Math.pow((internal.Nam), (3)) * (1 / Math.pow((internal.KNaj), (3))) + Cac * (1 / internal.KCaj) + Math.pow((internal.Nam), (3)) * Cac * (1 / (Math.pow((internal.KNaj), (3)) * internal.KCaj));
    var FDe = NADHm * (1 / (internal.KmNh + NADHm));
    var FPCa = 1 * (1 / (1 + internal.u2 * (1 + internal.u1 * (1 / Math.pow((1 + Cam * (1 / internal.KCam)), (2))))));
    var FPYR = PYR * (1 / (internal.Kmpyr + PYR));
    var FTe = (1 + internal.kat * Vm) * (1 / (1 + internal.kbt * Vm));
    var hCa = 1 * (1 / (1 + Math.exp(0.16666666666666699 * (15 + Vp))));
    var JGlu = internal.Vmglu * Math.pow((internal.Glu), (internal.hgl)) * ATP * (1 / (Math.pow((internal.Kmgl), (internal.hgl)) + Math.pow((internal.Glu), (internal.hgl)))) * (1 / (internal.KmATP + ATP));
    var Jhl = (internal.Plb + internal.Plr) * Math.exp(internal.klp * Vm);
    var Juni = internal.PCa * internal.ZCa * Vm * (internal.am * Cam * Math.exp(- (Vm * internal.ZCa * (1 / internal.Tv))) + - (internal.ai * Cac)) * (1 / internal.Tv) * (1 / (- 1 + Math.exp(- (Vm * internal.ZCa * (1 / internal.Tv)))));
    var NADc = internal.Ntc + - NADHc;
    var NADm = internal.Ntm + - NADHm;
    var nKCa = Math.pow((Cac), (3)) * (1 / (0.015625 + Math.pow((Cac), (3))));
    var PVCa = 1 * (1 / (1 + Math.exp(0.105263157894737 * (- 19 + - Vp))));
    var FLNADc = NADHc * (1 / (internal.Klnc + NADHc * (1 / NADc))) * (1 / NADc);
    var FNADc = NADHc * (1 / (internal.KTNc + NADHc * (1 / NADc))) * (1 / NADc);
    var FPNAD = NADm * (1 / (internal.KPNm + NADm * (1 / NADHm))) * (1 / NADHm);
    var IKCa = internal.gKCa * nKCa * (75 + Vp);
    var IVCa = internal.gmVCa * PVCa * hCa * (- 100 + Vp);
    var Jgpd = internal.Vmgpd * G3P * NADc * (1 / (G3P + internal.Kmg3p)) * (1 / (internal.KgNc + NADc * (1 / NADHc))) * (1 / NADHc);
    var Jhres = internal.Vme * FTe * FDe;
    var JNCa = internal.Vmnc * (Math.exp(0.5 * Vm * Math.pow((internal.Ni), (3)) * Cam * (1 / (internal.Tv * Math.pow((internal.KNaj), (3)) * internal.KCaj))) + - Math.exp(- (0.5 * Vm * Math.pow((internal.Nam), (3)) * Cac * (1 / (internal.Tv * Math.pow((internal.KNaj), (3)) * internal.KCaj))))) * (1 / DelJNCa);
    var MgADP = 0.055 * ADP;
    var AD = MgADP * MgADP * (1 / (MgADP * MgADP + internal.Kmadp * internal.Kmadp));
    dstatedt[8] = - (internal.fi * IVCa * (1 / (2 * internal.F * internal.Vci))) + - (internal.ksg * Cac);
    dstatedt[6] = 0 + internal.fm * (Juni + - JNCa) * (1 / internal.Vmmit);
    dstatedt[0] = 0 + (2 * JGlu + - Jgpd) * (1 / internal.Vi) + - (internal.kgpd * G3P);
    dstatedt[7] = - ((IVCa + IKCa) * (1 / internal.Cmp));
    var JLDH = internal.Vmldh * FLNADc * PYR * (1 / (internal.KmLD + PYR));
    var JPYR = internal.Vmpdh * FPNAD * FPCa * FPYR;
    var Jtnadh = internal.Tnadh * FNADc * NADm * (1 / (internal.KTNm + NADm * (1 / NADHm))) * (1 / NADHm);
    dstatedt[4] = 0 + (Jgpd + - Jtnadh + - JLDH) * (1 / internal.Vi) + - (internal.knadhc * NADHc);
    dstatedt[3] = 0 + (4.5999999999999996 * JPYR + - (0.10000000000000001 * Jhres) + Jtnadh) * (1 / internal.Vmmit) + - (internal.knadhm * NADHm);
    dstatedt[1] = 0 + (Jgpd + - JPYR + - JLDH) * (1 / (internal.Vi + internal.Vmmit));
    var Jph = internal.Vmph * AD * AT * ACa;
    dstatedt[2] = 0 + - ((internal.kATP + internal.kATPCa * Cac) * ATP) + (2 * JGlu + 0.23100000000000001 * Jph) * (1 / internal.Vi);
    dstatedt[5] = 0 + (Jhres + - Jph + - Jhl + - (2 * Juni) + - JNCa) * (1 / internal.Cmit);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "G3P", "PYR", "ATP", "NADHm", "NADHc", "Vm", "Cam", "Vp", "Cac"];
    this.metadata.internalOrder = {ai: null, am: null, Ao: null, ATP_init: null, ATP_init1: null, Cac_init1: null, Cam_init: null, Cam_init1: null, Cmit: null, Cmp: null, compartment: null, F: null, fi: null, fm: null, G3P_init: null, G3P_init1: null, gKCa: null, Glu: null, gmVCa: null, hgl: null, hp: null, hpc: null, initial_ATP: null, initial_Cac: null, initial_Cam: null, initial_G3P: null, initial_NADHc: null, initial_NADHm: null, initial_PYR: null, initial_Vm: null, initial_Vp: null, kat: null, kATP: null, kATPCa: null, kbt: null, kCaA: null, KCaj: null, KCam: null, KgNc: null, kgpd: null, Klnc: null, klp: null, Kmadp: null, KmATP: null, Kmg3p: null, Kmgl: null, KmLD: null, KmNh: null, Kmph: null, Kmpyr: null, knadhc: null, knadhm: null, KNaj: null, KpCam: null, KPNm: null, ksg: null, KTNc: null, KTNm: null, NADHc_init: null, NADHc_init1: null, NADHm_init: null, NADHm_init1: null, Nam: null, Ni: null, Ntc: null, Ntm: null, PCa: null, Plb: null, Plr: null, PYR_init: null, PYR_init1: null, Tnadh: null, Tv: null, u1: null, u2: null, Vci: null, Vi: null, Vm_init: null, Vm_init1: null, Vme: null, Vmglu: null, Vmgpd: null, Vmldh: null, Vmmit: null, Vmnc: null, Vmpdh: null, Vmph: null, Vp_init1: null, ZCa: null};
    this.metadata.variableOrder = {G3P: null, PYR: null, ATP: null, NADHm: null, NADHc: null, Vm: null, Cam: null, Vp: null, Cac: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
