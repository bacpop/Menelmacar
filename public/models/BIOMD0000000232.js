export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cytoplasm = 1;
    internal.initial_DeltaPsi = 0;
    internal.k1 = 0.037999999999999999;
    internal.k2 = 0.152;
    internal.k3 = 57.142000000000003;
    internal.k4 = 0.052999999999999999;
    internal.k5 = 0.082361000000000004;
    internal.k6 = 0.0032000000000000002;
    internal.k7 = 0.040000000000000001;
    internal.k8 = 3.6000000000000001;
    internal.Keq = 0.39750000000000002;
    internal.mitochondrion = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var ADP_init = internal.At - internal.initial_ATP;
    var NADH_init = internal.Nt - internal.initial_NAD;
    internal.initial_ADP = ADP_init;
    internal.initial_NADH = NADH_init;
    var state = Array(15).fill(0);
    state[0] = internal.initial_ADP;
    state[1] = internal.initial_ATP;
    state[2] = internal.initial_H;
    state[3] = internal.initial_He;
    state[4] = internal.initial_NAD;
    state[5] = internal.initial_NADH;
    state[6] = internal.initial_AcCoA;
    state[7] = internal.initial_KG;
    state[8] = internal.initial_Cit;
    state[9] = internal.initial_OAA;
    state[10] = internal.initial_O2;
    state[11] = internal.initial_iP;
    state[12] = internal.initial_Pyr;
    state[13] = internal.initial_H2O;
    state[14] = internal.initial_DeltaPsi;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "AcCoA_init", "At", "ATP_init", "b", "C", "Cit_init", "DeltaPsim", "F", "H_init", "H2O_init", "He_init", "iP_init", "K", "kANT", "Kapp", "kATP", "KG_init", "kleak", "kresp", "NAD_init", "Nt", "O2_init", "OAA_init", "Pyr_init", "R", "T"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AcCoA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "At", internal, 4.1600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ATP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 0.0040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C", internal, 6.7499999999999997e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cit_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DeltaPsim", internal, 150, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "F", internal, 96485, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H2O_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "He_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "iP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kANT", internal, 0.053870000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kapp", internal, 4.3999999999999997e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kATP", internal, 131.90000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KG_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kleak", internal, 0.000426, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kresp", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NAD_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Nt", internal, 1.0700000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "O2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "OAA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pyr_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R", internal, 8314, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T", internal, 298, -Infinity, Infinity, false);
    internal.initial_AcCoA = internal.AcCoA_init;
    internal.initial_ATP = internal.ATP_init;
    internal.initial_Cit = internal.Cit_init;
    internal.initial_H = internal.H_init;
    internal.initial_H2O = internal.H2O_init;
    internal.initial_He = internal.He_init;
    internal.initial_iP = internal.iP_init;
    internal.initial_KG = internal.KG_init;
    internal.initial_NAD = internal.NAD_init;
    internal.initial_O2 = internal.O2_init;
    internal.initial_OAA = internal.OAA_init;
    internal.initial_Pyr = internal.Pyr_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const DeltaPsi = state[14];
    const ATP = state[1];
    const NAD = state[4];
    const AcCoA = state[6];
    const KG = state[7];
    const Cit = state[8];
    const OAA = state[9];
    const iP = state[11];
    const Pyr = state[12];
    dstatedt[0] = 0 + 0;
    dstatedt[2] = 0;
    dstatedt[13] = 0;
    dstatedt[3] = 0;
    dstatedt[11] = 0;
    dstatedt[5] = 0 + 0;
    dstatedt[10] = 0;
    var DeltaGtransport = 1.2 * internal.F * DeltaPsi;
    dstatedt[6] = 0 + 1 * internal.mitochondrion * internal.k2 * Pyr * NAD - 1 * internal.mitochondrion * internal.k3 * OAA * AcCoA;
    dstatedt[8] = 0 + 1 * internal.mitochondrion * internal.k3 * OAA * AcCoA - 1 * internal.mitochondrion * internal.k4 * Cit * NAD;
    dstatedt[7] = 0 + 1 * internal.mitochondrion * internal.k4 * Cit * NAD - 1 * internal.mitochondrion * internal.k5 * KG * NAD * (internal.At - ATP) + 1 * internal.mitochondrion * internal.k6 * (OAA - KG / internal.Keq);
    dstatedt[9] = 0 - 1 * internal.mitochondrion * internal.k3 * OAA * AcCoA + 1 * internal.mitochondrion * internal.k5 * KG * NAD * (internal.At - ATP) - 1 * internal.mitochondrion * internal.k6 * (OAA - KG / internal.Keq) + 1 * internal.mitochondrion * internal.k7 * Pyr * ATP - 1 * internal.mitochondrion * internal.k8 * OAA;
    dstatedt[12] = 0 + 1 * internal.mitochondrion * internal.k1 - 1 * internal.mitochondrion * internal.k2 * Pyr * NAD - 1 * internal.mitochondrion * internal.k7 * Pyr * ATP;
    var JANT = internal.kANT * ATP;
    var Jleak = internal.kleak * DeltaPsi;
    var Jresp = internal.kresp * ((internal.Nt - NAD) / (internal.K + internal.Nt - NAD)) / (1 + Math.exp(internal.a * (DeltaPsi - internal.DeltaPsim)));
    var ATPcrit = internal.At / (1 + Math.exp(- 3 * DeltaGtransport / (internal.R * internal.T)) / (internal.Kapp * iP));
    dstatedt[4] = 0 - 1 * internal.mitochondrion * internal.k2 * Pyr * NAD - 1 * internal.mitochondrion * internal.k4 * Cit * NAD - 2 * internal.mitochondrion * internal.k5 * KG * NAD * (internal.At - ATP) + 1 * internal.mitochondrion * Jresp;
    var JATP = internal.kATP * (2 / (1 + Math.exp(internal.b * (ATP - ATPcrit))) - 1);
    dstatedt[1] = 0 + 1 * internal.mitochondrion * internal.k5 * KG * NAD * (internal.At - ATP) - 1 * internal.mitochondrion * internal.k7 * Pyr * ATP + 1 * internal.mitochondrion * JATP - 1 * internal.mitochondrion * JANT;
    dstatedt[14] = (10 * Jresp - 3 * JATP - Jleak - JANT) / internal.C;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "ADP", "ATP", "H", "He", "NAD", "NADH", "AcCoA", "KG", "Cit", "OAA", "O2", "iP", "Pyr", "H2O", "DeltaPsi"];
    this.metadata.internalOrder = {a: null, AcCoA_init: null, At: null, ATP_init: null, b: null, C: null, Cit_init: null, cytoplasm: null, DeltaPsim: null, F: null, H_init: null, H2O_init: null, He_init: null, initial_AcCoA: null, initial_ADP: null, initial_ATP: null, initial_Cit: null, initial_DeltaPsi: null, initial_H: null, initial_H2O: null, initial_He: null, initial_iP: null, initial_KG: null, initial_NAD: null, initial_NADH: null, initial_O2: null, initial_OAA: null, initial_Pyr: null, iP_init: null, K: null, k1: null, k2: null, k3: null, k4: null, k5: null, k6: null, k7: null, k8: null, kANT: null, Kapp: null, kATP: null, Keq: null, KG_init: null, kleak: null, kresp: null, mitochondrion: null, NAD_init: null, Nt: null, O2_init: null, OAA_init: null, Pyr_init: null, R: null, T: null};
    this.metadata.variableOrder = {ADP: null, ATP: null, H: null, He: null, NAD: null, NADH: null, AcCoA: null, KG: null, Cit: null, OAA: null, O2: null, iP: null, Pyr: null, H2O: null, DeltaPsi: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
