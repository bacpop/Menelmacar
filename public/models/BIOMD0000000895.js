export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(9).fill(0);
    state[0] = internal.initial_CD4;
    state[1] = internal.initial_CD8;
    state[2] = internal.initial_Mr;
    state[3] = internal.initial_Ma;
    state[4] = internal.initial_Mi;
    state[5] = internal.initial_Se;
    state[6] = internal.initial_Si;
    state[7] = internal.initial_CD4rec;
    state[8] = internal.initial_Mrrec;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["aMr", "apop", "bMi", "cc1CD4", "cc1CD8", "cCD4CD8", "ccMr", "ccSe", "CD4_init", "CD4n", "CD4rec_init", "CD8_init", "cdaMa", "compCD8", "cSeMr", "cSeMri", "daMa", "drCD4", "drCD8", "drMa", "drMi", "drMr", "drSe", "drSi", "gbCD4", "gbCD8", "gbMr", "iMr", "k2CD4", "k2CD8", "kcompCD4", "kmrecCD4", "kmrecMr", "kSeCD4", "kSedCD4", "kSeMa", "kSeMr", "lMi", "Ma_init", "Mi_init", "mMi", "Mr_init", "Mrrec_init", "N", "ncompCD4", "ndCD4", "ngbCD4", "p1", "pSe", "pSi", "sCD4", "sCD8", "Se_init", "Si_init", "sMr", "vrecCD4", "vrecMr", "w1"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "aMr", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "apop", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "bMi", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cc1CD4", internal, 82000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cc1CD8", internal, 13000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cCD4CD8", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ccMr", internal, 25000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ccSe", internal, 500000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CD4_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CD4n", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CD4rec_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CD8_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cdaMa", internal, 30000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "compCD8", internal, 0.84999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cSeMr", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cSeMri", internal, 600000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "daMa", internal, 40, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "drCD4", internal, 0.016, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "drCD8", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "drMa", internal, 0.080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "drMi", internal, 0.010999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "drMr", internal, 0.010999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "drSe", internal, 27.800000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "drSi", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gbCD4", internal, 0.19, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gbCD8", internal, 1.4399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gbMr", internal, 1.2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "iMr", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2CD4", internal, 8700000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2CD8", internal, 47000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcompCD4", internal, 34000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kmrecCD4", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kmrecMr", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kSeCD4", internal, 1.0000000000000001e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kSedCD4", internal, 4200, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kSeMa", internal, 2.6e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kSeMr", internal, 4.9999999999999998e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lMi", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ma_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Mi_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mMi", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Mr_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Mrrec_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N", internal, 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ncompCD4", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ndCD4", internal, 8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ngbCD4", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p1", internal, 0.65000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pSe", internal, 35, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pSi", internal, 4.0999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sCD4", internal, 490000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sCD8", internal, 430000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Se_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Si_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sMr", internal, 300000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vrecCD4", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vrecMr", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "w1", internal, 1e-25, -Infinity, Infinity, false);
    internal.initial_CD4 = internal.CD4_init;
    internal.initial_CD4rec = internal.CD4rec_init;
    internal.initial_CD8 = internal.CD8_init;
    internal.initial_Ma = internal.Ma_init;
    internal.initial_Mi = internal.Mi_init;
    internal.initial_Mr = internal.Mr_init;
    internal.initial_Mrrec = internal.Mrrec_init;
    internal.initial_Se = internal.Se_init;
    internal.initial_Si = internal.Si_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const CD4 = state[0];
    const CD8 = state[1];
    const Mr = state[2];
    const Ma = state[3];
    const Mi = state[4];
    const Se = state[5];
    const Si = state[6];
    const CD4rec = state[7];
    const Mrrec = state[8];
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.sCD4) + 1 * internal.compartment * (internal.gbCD4 * CD4 * (1 - CD4 / internal.cc1CD4) * (Math.pow((CD4), (internal.ngbCD4)) / (Math.pow((CD4), (internal.ngbCD4)) + Math.pow((internal.k2CD4), (internal.ngbCD4))))) + 1 * internal.compartment * (CD4rec * internal.vrecCD4 * Se / (Se + internal.kmrecCD4)) - 1 * internal.compartment * internal.kSeCD4 * CD4 * Se - 1 * internal.compartment * (internal.CD4n * CD4 * Math.pow((Se), (internal.ndCD4)) / (Math.pow((Se), (internal.ndCD4)) + Math.pow((internal.kSedCD4), (internal.ndCD4)))) - 1 * internal.compartment * internal.drCD4 * CD4;
    dstatedt[7] = 0 - 1 * internal.compartment * (CD4rec * internal.vrecCD4 * Se / (Se + internal.kmrecCD4));
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.sCD8) + 1 * internal.compartment * (internal.gbCD8 * CD8 * (1 - CD8 / internal.cc1CD8) * (CD8 / (CD8 + internal.k2CD8))) - 1 * internal.compartment * (internal.compCD8 * CD8 * (Se / (Se + internal.w1)) * (Math.pow((CD4), (internal.ncompCD4)) / (Math.pow((CD4), (internal.ncompCD4)) + Math.pow((internal.kcompCD4), (internal.ncompCD4))))) - 1 * internal.compartment * internal.drCD8 * CD8;
    dstatedt[3] = 0 - 1 * internal.compartment * (internal.daMa * Ma * CD4 / (CD4 + internal.cdaMa)) + 1 * internal.compartment * (internal.aMr * Mr * Se / (Se + internal.cSeMr)) - 1 * internal.compartment * internal.drMa * Ma - 1 * internal.compartment * internal.kSeMa * Ma * Se;
    dstatedt[4] = 0 + 1 * internal.compartment * (internal.iMr * Mr * Se / (Se + internal.cSeMri)) - 1 * internal.compartment * (internal.bMi * Mi * Math.pow((Si), (internal.mMi)) / (Math.pow((Si), (internal.mMi)) + Math.pow((internal.N * Mi), (internal.mMi)))) - 1 * internal.compartment * ((1 - internal.apop * Si / (Si + internal.N + Mi)) * internal.lMi * (CD4 + CD8 / Mi) / (CD4 + CD8 / Mi + internal.cCD4CD8)) - 1 * internal.compartment * internal.drMi * Mi;
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.sMr) + 1 * internal.compartment * (internal.gbMr * Mr * (1 - Mr / (internal.ccMr - internal.ccMr * internal.p1))) + 1 * internal.compartment * (Mrrec * internal.vrecMr * Se / (Se + internal.kmrecMr)) + 1 * internal.compartment * (internal.daMa * Ma * CD4 / (CD4 + internal.cdaMa)) - 1 * internal.compartment * (internal.iMr * Mr * Se / (Se + internal.cSeMri)) - 1 * internal.compartment * (internal.aMr * Mr * Se / (Se + internal.cSeMr)) - 1 * internal.compartment * internal.kSeMr * Mr * Se - 1 * internal.compartment * internal.drMr * Mr;
    dstatedt[8] = 0 - 1 * internal.compartment * (Mrrec * internal.vrecMr * Se / (Se + internal.kmrecMr));
    dstatedt[5] = 0 - 1 * internal.compartment * (internal.iMr * Mr * Se / (Se + internal.cSeMri)) - 1 * internal.compartment * internal.kSeMr * Mr * Se - 1 * internal.compartment * internal.kSeCD4 * CD4 * Se - 1 * internal.compartment * internal.kSeMa * Ma * Se + 1 * internal.compartment * (internal.bMi * Mi * Math.pow((Si), (internal.mMi)) / (Math.pow((Si), (internal.mMi)) + Math.pow((internal.N * Mi), (internal.mMi)))) + 1 * internal.compartment * (internal.pSe * Se * (1 - Se / internal.ccSe)) - 1 * internal.compartment * internal.drSe * Se;
    dstatedt[6] = 0 - 1 * internal.compartment * (internal.bMi * Mi * Math.pow((Si), (internal.mMi)) / (Math.pow((Si), (internal.mMi)) + Math.pow((internal.N * Mi), (internal.mMi)))) - 1 * internal.compartment * internal.drSi * Si + 1 * internal.compartment * (internal.pSi * Si * (1 - Si / (Si + internal.N * Mi))) + 1 * internal.compartment * (internal.iMr * Mr * Si / (Si + internal.cSeMr)) - 1 * internal.compartment * (internal.lMi * (CD4 + CD8 / Mi) / (CD4 + CD8 / Mi + internal.cCD4CD8));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "CD4", "CD8", "Mr", "Ma", "Mi", "Se", "Si", "CD4rec", "Mrrec"];
    this.metadata.internalOrder = {aMr: null, apop: null, bMi: null, cc1CD4: null, cc1CD8: null, cCD4CD8: null, ccMr: null, ccSe: null, CD4_init: null, CD4n: null, CD4rec_init: null, CD8_init: null, cdaMa: null, compartment: null, compCD8: null, cSeMr: null, cSeMri: null, daMa: null, drCD4: null, drCD8: null, drMa: null, drMi: null, drMr: null, drSe: null, drSi: null, gbCD4: null, gbCD8: null, gbMr: null, iMr: null, initial_CD4: null, initial_CD4rec: null, initial_CD8: null, initial_Ma: null, initial_Mi: null, initial_Mr: null, initial_Mrrec: null, initial_Se: null, initial_Si: null, k2CD4: null, k2CD8: null, kcompCD4: null, kmrecCD4: null, kmrecMr: null, kSeCD4: null, kSedCD4: null, kSeMa: null, kSeMr: null, lMi: null, Ma_init: null, Mi_init: null, mMi: null, Mr_init: null, Mrrec_init: null, N: null, ncompCD4: null, ndCD4: null, ngbCD4: null, p1: null, pSe: null, pSi: null, sCD4: null, sCD8: null, Se_init: null, Si_init: null, sMr: null, vrecCD4: null, vrecMr: null, w1: null};
    this.metadata.variableOrder = {CD4: null, CD8: null, Mr: null, Ma: null, Mi: null, Se: null, Si: null, CD4rec: null, Mrrec: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
