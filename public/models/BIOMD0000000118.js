export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment_0000001 = 1;
    internal.initial_bbs = 0.203517;
    internal.initial_hhs = 0.98785999999999996;
    internal.initial_nns = 0.024570000000000002;
    internal.initial_V = - 71.813270000000003;
    internal.initial_zzs = 0.00141;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(5).fill(0);
    state[0] = internal.initial_zzs;
    state[1] = internal.initial_bbs;
    state[2] = internal.initial_hhs;
    state[3] = internal.initial_V;
    state[4] = internal.initial_nns;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Cm", "gA", "gKdr", "gL", "gNa", "gNaP", "gZ", "Iapp", "phi", "pms", "pns", "sigmaa", "sigmab", "sigmah", "sigmam", "sigman", "sigmap", "sigmaz", "t_tauh", "t_taun", "tauBs", "tauZs", "thetaa", "thetab", "thetah", "thetam", "thetan", "thetap", "thetaz", "VK", "VL", "VNa"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Cm", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gA", internal, 1.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gKdr", internal, 6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gL", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gNa", internal, 35, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gNaP", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gZ", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Iapp", internal, 0.661914, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "phi", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pms", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pns", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigmaa", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigmab", internal, - 6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigmah", internal, - 7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigmam", internal, 9.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigman", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigmap", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigmaz", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t_tauh", internal, - 40.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t_taun", internal, - 27, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tauBs", internal, 15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tauZs", internal, 75, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "thetaa", internal, - 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "thetab", internal, - 80, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "thetah", internal, - 45, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "thetam", internal, - 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "thetan", internal, - 35, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "thetap", internal, - 47, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "thetaz", internal, - 39, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VK", internal, - 90, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VL", internal, - 70, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VNa", internal, 55, -Infinity, Infinity, false);
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const zzs = state[0];
    const bbs = state[1];
    const hhs = state[2];
    const V = state[3];
    const nns = state[4];
    var Ainfs = (1 / (1 + Math.exp(- (V - internal.thetaa) / internal.sigmaa)));
    dstatedt[1] = ((1 / (1 + Math.exp(- (V - internal.thetab) / internal.sigmab))) - bbs) / internal.tauBs;
    dstatedt[2] = internal.phi * ((1 / (1 + Math.exp(- (V - internal.thetah) / internal.sigmah))) - hhs) / (1 + 7.5 * (1 / (1 + Math.exp(- (V - internal.t_tauh) / - 6))));
    dstatedt[4] = internal.phi * ((1 / (1 + Math.exp(- (V - internal.thetan) / internal.sigman))) - nns) / (1 + 5 * (1 / (1 + Math.exp(- (V - internal.t_taun) / - 15))));
    dstatedt[0] = ((1 / (1 + Math.exp(- (V - internal.thetaz) / internal.sigmaz))) - zzs) / internal.tauZs;
    var IKdr = internal.gKdr * Math.pow((nns), (internal.pns)) * (V - internal.VK);
    var Iz = internal.gZ * zzs * (V - internal.VK);
    var Minfs = (1 / (1 + Math.exp(- (V - internal.thetam) / internal.sigmam)));
    var Pinfs = (1 / (1 + Math.exp(- (V - internal.thetap) / internal.sigmap)));
    var IA = internal.gA * Math.pow((Ainfs), (3)) * bbs * (V - internal.VK);
    var INa = internal.gNa * Math.pow((Minfs), (internal.pms)) * hhs * (V - internal.VNa);
    var INaP = internal.gNaP * Pinfs * (V - internal.VNa);
    dstatedt[3] = (- internal.gL * (V - internal.VL) - INa - INaP - IKdr - IA - Iz + internal.Iapp) / internal.Cm;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "zzs", "bbs", "hhs", "V", "nns"];
    this.metadata.internalOrder = {Cm: null, compartment_0000001: null, gA: null, gKdr: null, gL: null, gNa: null, gNaP: null, gZ: null, Iapp: null, initial_bbs: null, initial_hhs: null, initial_nns: null, initial_V: null, initial_zzs: null, phi: null, pms: null, pns: null, sigmaa: null, sigmab: null, sigmah: null, sigmam: null, sigman: null, sigmap: null, sigmaz: null, t_tauh: null, t_taun: null, tauBs: null, tauZs: null, thetaa: null, thetab: null, thetah: null, thetam: null, thetan: null, thetap: null, thetaz: null, VK: null, VL: null, VNa: null};
    this.metadata.variableOrder = {zzs: null, bbs: null, hhs: null, V: null, nns: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
