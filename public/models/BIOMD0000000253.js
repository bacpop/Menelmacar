export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell = 1;
    internal.Glc = 10;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_HMP;
    state[1] = internal.initial_Fru16P2;
    state[2] = internal.initial_ATP;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["ATP_init", "c1", "c2", "ci", "Fru16P2_init", "gR", "gT", "HMP_init", "KADP", "KATP", "KFru16P2", "KGlc", "KiATP", "KiTre6P", "KRATP", "KRHMP", "L0", "VATPase", "VHK", "Vlower", "VPFK", "wild_type"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "ATP_init", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c1", internal, 0.00050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ci", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Fru16P2_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gR", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gT", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HMP_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KADP", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KATP", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KFru16P2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KGlc", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KiATP", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KiTre6P", internal, 4.4219999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KRATP", internal, 0.059999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KRHMP", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L0", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VATPase", internal, 68, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VHK", internal, 68, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vlower", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VPFK", internal, 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "wild_type", internal, 1, -Infinity, Infinity, false);
    internal.initial_ATP = internal.ATP_init;
    internal.initial_Fru16P2 = internal.Fru16P2_init;
    internal.initial_HMP = internal.HMP_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const HMP = state[0];
    const Fru16P2 = state[1];
    const ATP = state[2];
    var ADP = 5 - ATP;
    var lambda1 = HMP / internal.KRHMP;
    var lambda2 = ATP / internal.KRATP;
    var lambda3 = ATP / internal.KiATP;
    var Tre6P = Math.pow((HMP), (2));
    var L = internal.L0 * Math.pow(((1 + internal.ci * lambda3) / (1 + lambda3)), (2));
    var R = 1 + lambda1 + lambda2 + internal.gR * lambda1 * lambda2;
    var T = 1 + internal.c1 * lambda1 + internal.c2 * lambda2 + internal.gT * internal.c1 * lambda1 * internal.c2 * lambda2;
    dstatedt[2] = 0 - 1 * internal.cell * internal.VHK * internal.Glc * ATP / (internal.KGlc * internal.KATP) / ((1 + internal.Glc / internal.KGlc + internal.wild_type * Tre6P / internal.KiTre6P) * (1 + ATP / internal.KATP)) - 1 * internal.cell * internal.VPFK * internal.gR * lambda1 * lambda2 * R / (Math.pow((R), (2)) + L * Math.pow((T), (2))) + 4 * internal.cell * internal.Vlower * Fru16P2 * ADP / (internal.KFru16P2 * internal.KADP) / ((1 + Fru16P2 / internal.KFru16P2) * (1 + ADP / internal.KADP)) - 1 * internal.cell * internal.VATPase * ATP / (internal.KATP + ATP);
    dstatedt[1] = 0 + 1 * internal.cell * internal.VPFK * internal.gR * lambda1 * lambda2 * R / (Math.pow((R), (2)) + L * Math.pow((T), (2))) - 1 * internal.cell * internal.Vlower * Fru16P2 * ADP / (internal.KFru16P2 * internal.KADP) / ((1 + Fru16P2 / internal.KFru16P2) * (1 + ADP / internal.KADP));
    dstatedt[0] = 0 + 1 * internal.cell * internal.VHK * internal.Glc * ATP / (internal.KGlc * internal.KATP) / ((1 + internal.Glc / internal.KGlc + internal.wild_type * Tre6P / internal.KiTre6P) * (1 + ATP / internal.KATP)) - 1 * internal.cell * internal.VPFK * internal.gR * lambda1 * lambda2 * R / (Math.pow((R), (2)) + L * Math.pow((T), (2)));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "HMP", "Fru16P2", "ATP"];
    this.metadata.internalOrder = {ATP_init: null, c1: null, c2: null, cell: null, ci: null, Fru16P2_init: null, Glc: null, gR: null, gT: null, HMP_init: null, initial_ATP: null, initial_Fru16P2: null, initial_HMP: null, KADP: null, KATP: null, KFru16P2: null, KGlc: null, KiATP: null, KiTre6P: null, KRATP: null, KRHMP: null, L0: null, VATPase: null, VHK: null, Vlower: null, VPFK: null, wild_type: null};
    this.metadata.variableOrder = {HMP: null, Fru16P2: null, ATP: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
