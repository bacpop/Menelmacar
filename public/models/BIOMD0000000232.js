export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cytoplasm = 1;
    internal.DeltaPsi = 150;
    internal.mitochondrion = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(12).fill(0);
    state[0] = internal.initial_ATP;
    state[1] = internal.initial_NAD;
    state[2] = internal.initial_AcCoA;
    state[3] = internal.initial_KG;
    state[4] = internal.initial_Cit;
    state[5] = internal.initial_OAA;
    state[6] = internal.initial_Pyr;
    state[7] = internal.initial_H;
    state[8] = internal.initial_He;
    state[9] = internal.initial_O2;
    state[10] = internal.initial_iP;
    state[11] = internal.initial_H2O;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "AcCoA_init", "At", "ATP_init", "b", "C", "Cit_init", "DeltaPsim", "F", "H_init", "H2O_init", "He_init", "iP_init", "K", "k1", "k2", "k3", "k4", "k5", "k6", "k7", "k8", "kANT", "Kapp", "kATP", "Keq", "KG_init", "kleak", "kresp", "NAD_init", "Nt", "O2_init", "OAA_init", "Pyr_init", "R", "T"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AcCoA_init", internal, 0.063, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "At", internal, 4.1600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ATP_init", internal, 3.536, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 0.0040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C", internal, 6.7499999999999997e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cit_init", internal, 0.44, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DeltaPsim", internal, 150, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "F", internal, 96485, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H2O_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "He_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "iP_init", internal, 2.4399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.037999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.152, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 57.142000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0.052999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 0.082361000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 0.0032000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 0.040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 3.6000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kANT", internal, 0.053870000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kapp", internal, 4.3999999999999997e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kATP", internal, 131.90000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Keq", internal, 0.39750000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KG_init", internal, 0.22500000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kleak", internal, 0.000426, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kresp", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NAD_init", internal, 0.85599999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Nt", internal, 1.0700000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "O2_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "OAA_init", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pyr_init", internal, 0.154, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R", internal, 8314, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T", internal, 298, -Infinity, Infinity, false);
    internal.DeltaGtransport = 1.2 * internal.F * internal.DeltaPsi;
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
    internal.Jleak = internal.kleak * internal.DeltaPsi;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const ATP = state[0];
    const NAD = state[1];
    const AcCoA = state[2];
    const KG = state[3];
    const Cit = state[4];
    const OAA = state[5];
    const Pyr = state[6];
    const iP = state[10];
    dstatedt[7] = 0;
    dstatedt[11] = 0;
    dstatedt[8] = 0;
    dstatedt[10] = 0;
    dstatedt[9] = 0;
    dstatedt[2] = 0 + 1 * internal.mitochondrion * internal.k2 * Pyr * NAD - 1 * internal.mitochondrion * internal.k3 * OAA * AcCoA;
    dstatedt[4] = 0 + 1 * internal.mitochondrion * internal.k3 * OAA * AcCoA - 1 * internal.mitochondrion * internal.k4 * Cit * NAD;
    dstatedt[3] = 0 + 1 * internal.mitochondrion * internal.k4 * Cit * NAD - 1 * internal.mitochondrion * internal.k5 * KG * NAD * (internal.At - ATP) + 1 * internal.mitochondrion * internal.k6 * (OAA - KG / internal.Keq);
    dstatedt[5] = 0 - 1 * internal.mitochondrion * internal.k3 * OAA * AcCoA + 1 * internal.mitochondrion * internal.k5 * KG * NAD * (internal.At - ATP) - 1 * internal.mitochondrion * internal.k6 * (OAA - KG / internal.Keq) + 1 * internal.mitochondrion * internal.k7 * Pyr * ATP - 1 * internal.mitochondrion * internal.k8 * OAA;
    dstatedt[6] = 0 + 1 * internal.mitochondrion * internal.k1 - 1 * internal.mitochondrion * internal.k2 * Pyr * NAD - 1 * internal.mitochondrion * internal.k7 * Pyr * ATP;
    var JANT = internal.kANT * ATP;
    var Jresp = internal.kresp * ((internal.Nt - NAD) / (internal.K + internal.Nt - NAD)) / (1 + Math.exp(internal.a * (internal.DeltaPsi - internal.DeltaPsim)));
    var ATPcrit = internal.At / (1 + Math.exp(- 3 * internal.DeltaGtransport / (internal.R * internal.T)) / (internal.Kapp * iP));
    dstatedt[1] = 0 - 1 * internal.mitochondrion * internal.k2 * Pyr * NAD - 1 * internal.mitochondrion * internal.k4 * Cit * NAD - 2 * internal.mitochondrion * internal.k5 * KG * NAD * (internal.At - ATP) + 1 * internal.mitochondrion * Jresp;
    var JATP = internal.kATP * (2 / (1 + Math.exp(internal.b * (ATP - ATPcrit))) - 1);
    dstatedt[0] = 0 + 1 * internal.mitochondrion * internal.k5 * KG * NAD * (internal.At - ATP) - 1 * internal.mitochondrion * internal.k7 * Pyr * ATP + 1 * internal.mitochondrion * JATP - 1 * internal.mitochondrion * JANT;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "ATP", "NAD", "AcCoA", "KG", "Cit", "OAA", "Pyr", "H", "He", "O2", "iP", "H2O"];
    this.metadata.internalOrder = {a: null, AcCoA_init: null, At: null, ATP_init: null, b: null, C: null, Cit_init: null, cytoplasm: null, DeltaGtransport: null, DeltaPsi: null, DeltaPsim: null, F: null, H_init: null, H2O_init: null, He_init: null, initial_AcCoA: null, initial_ATP: null, initial_Cit: null, initial_H: null, initial_H2O: null, initial_He: null, initial_iP: null, initial_KG: null, initial_NAD: null, initial_O2: null, initial_OAA: null, initial_Pyr: null, iP_init: null, Jleak: null, K: null, k1: null, k2: null, k3: null, k4: null, k5: null, k6: null, k7: null, k8: null, kANT: null, Kapp: null, kATP: null, Keq: null, KG_init: null, kleak: null, kresp: null, mitochondrion: null, NAD_init: null, Nt: null, O2_init: null, OAA_init: null, Pyr_init: null, R: null, T: null};
    this.metadata.variableOrder = {ATP: null, NAD: null, AcCoA: null, KG: null, Cit: null, OAA: null, Pyr: null, H: null, He: null, O2: null, iP: null, H2O: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
