export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment_0000001 = 1;
    internal.initial_bbs = 0.207565;
    internal.initial_ccs = 0.0024859999999999999;
    internal.initial_hhs = 0.97919900000000004;
    internal.initial_nns = 0.024216600000000001;
    internal.initial_qqs = 0;
    internal.initial_rrs = 0.0055069999999999997;
    internal.initial_V = - 71.962000000000003;
    internal.initial_zzs = 0.0013688999999999999;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(9).fill(0);
    state[0] = internal.initial_Ca;
    state[1] = internal.initial_zzs;
    state[2] = internal.initial_bbs;
    state[3] = internal.initial_hhs;
    state[4] = internal.initial_nns;
    state[5] = internal.initial_rrs;
    state[6] = internal.initial_ccs;
    state[7] = internal.initial_qqs;
    state[8] = internal.initial_V;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["ac", "aq", "Ca_init", "Cm", "gA", "gCa", "gKAHP", "gKCa", "gKdr", "gL", "gNa", "gNaP", "gZ", "Iapp", "phi", "pms", "pns", "pwrc", "pwrq", "sigmaa", "sigmab", "sigmac", "sigmah", "sigmam", "sigman", "sigmap", "sigmar", "sigmaz", "t_tauh", "t_taun", "tauBs", "tauCa", "tauKc", "tauq", "tauRs", "tauZs", "thetaa", "thetab", "thetac", "thetah", "thetam", "thetan", "thetap", "thetar", "thetaz", "uuCa", "VCa", "VK", "VL", "VNa"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "ac", internal, 6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "aq", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ca_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cm", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gA", internal, 1.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gCa", internal, 0.080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gKAHP", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gKCa", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gKdr", internal, 6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gL", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gNa", internal, 35, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gNaP", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gZ", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Iapp", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "phi", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pms", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pns", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pwrc", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pwrq", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigmaa", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigmab", internal, - 6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigmac", internal, 7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigmah", internal, - 7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigmam", internal, 9.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigman", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigmap", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigmar", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigmaz", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t_tauh", internal, - 40.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t_taun", internal, - 27, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tauBs", internal, 15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tauCa", internal, 13, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tauKc", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tauq", internal, 450, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tauRs", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tauZs", internal, 75, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "thetaa", internal, - 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "thetab", internal, - 80, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "thetac", internal, - 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "thetah", internal, - 45, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "thetam", internal, - 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "thetan", internal, - 35, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "thetap", internal, - 41, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "thetar", internal, - 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "thetaz", internal, - 39, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "uuCa", internal, 0.13, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VCa", internal, 120, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VK", internal, - 90, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VL", internal, - 70, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VNa", internal, 55, -Infinity, Infinity, false);
    internal.initial_Ca = internal.Ca_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const zzs = state[1];
    const bbs = state[2];
    const hhs = state[3];
    const nns = state[4];
    const rrs = state[5];
    const ccs = state[6];
    const qqs = state[7];
    const V = state[8];
    const Ca = state[0];
    var Ainfs = (1 / (1 + Math.exp(- (V - internal.thetaa) / internal.sigmaa)));
    dstatedt[2] = ((1 / (1 + Math.exp(- (V - internal.thetab) / internal.sigmab))) - bbs) / internal.tauBs;
    dstatedt[6] = ((1 / (1 + Math.exp(- (V - internal.thetac) / internal.sigmac))) - ccs) / internal.tauKc;
    dstatedt[3] = internal.phi * ((1 / (1 + Math.exp(- (V - internal.thetah) / internal.sigmah))) - hhs) / (1 + 7.5 * (1 / (1 + Math.exp(- (V - internal.t_tauh) / - 6))));
    dstatedt[4] = internal.phi * ((1 / (1 + Math.exp(- (V - internal.thetan) / internal.sigman))) - nns) / (1 + 5 * (1 / (1 + Math.exp(- (V - internal.t_taun) / - 15))));
    dstatedt[7] = ((1 / (1 + Math.pow((internal.aq), (internal.pwrq)) / Math.pow((Ca), (internal.pwrq)))) - qqs) / internal.tauq;
    dstatedt[5] = ((1 / (1 + Math.exp(- (V - internal.thetar) / internal.sigmar))) - rrs) / internal.tauRs;
    dstatedt[1] = ((1 / (1 + Math.exp(- (V - internal.thetaz) / internal.sigmaz))) - zzs) / internal.tauZs;
    var IAHP = internal.gKAHP * qqs * (V - internal.VK);
    var ICa = internal.gCa * Math.pow((rrs), (2)) * (V - internal.VCa);
    var IKdr = internal.gKdr * Math.pow((nns), (internal.pns)) * (V - internal.VK);
    var Iz = internal.gZ * zzs * (V - internal.VK);
    var Minfs = (1 / (1 + Math.exp(- (V - internal.thetam) / internal.sigmam)));
    var mKCa = (1 / (1 + Math.pow((internal.ac), (internal.pwrc)) / Math.pow((Ca), (internal.pwrc))));
    var Pinfs = (1 / (1 + Math.exp(- (V - internal.thetap) / internal.sigmap)));
    dstatedt[0] = 0 + 1 * internal.compartment_0000001 * (- internal.uuCa * ICa - Ca) / internal.tauCa;
    var IA = internal.gA * Math.pow((Ainfs), (3)) * bbs * (V - internal.VK);
    var IKC = internal.gKCa * mKCa * ccs * (V - internal.VK);
    var INa = internal.gNa * Math.pow((Minfs), (internal.pms)) * hhs * (V - internal.VNa);
    var INaP = internal.gNaP * Pinfs * (V - internal.VNa);
    dstatedt[8] = (- internal.gL * (V - internal.VL) - INa - INaP - IKdr - IA - Iz - ICa - IKC - IAHP + internal.Iapp) / internal.Cm;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Ca", "zzs", "bbs", "hhs", "nns", "rrs", "ccs", "qqs", "V"];
    this.metadata.internalOrder = {ac: null, aq: null, Ca_init: null, Cm: null, compartment_0000001: null, gA: null, gCa: null, gKAHP: null, gKCa: null, gKdr: null, gL: null, gNa: null, gNaP: null, gZ: null, Iapp: null, initial_bbs: null, initial_Ca: null, initial_ccs: null, initial_hhs: null, initial_nns: null, initial_qqs: null, initial_rrs: null, initial_V: null, initial_zzs: null, phi: null, pms: null, pns: null, pwrc: null, pwrq: null, sigmaa: null, sigmab: null, sigmac: null, sigmah: null, sigmam: null, sigman: null, sigmap: null, sigmar: null, sigmaz: null, t_tauh: null, t_taun: null, tauBs: null, tauCa: null, tauKc: null, tauq: null, tauRs: null, tauZs: null, thetaa: null, thetab: null, thetac: null, thetah: null, thetam: null, thetan: null, thetap: null, thetar: null, thetaz: null, uuCa: null, VCa: null, VK: null, VL: null, VNa: null};
    this.metadata.variableOrder = {Ca: null, zzs: null, bbs: null, hhs: null, nns: null, rrs: null, ccs: null, qqs: null, V: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
