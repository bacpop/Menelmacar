export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cytoplasm = 1;
    internal.H = 1;
    internal.H2O = 1;
    internal.He = 1;
    internal.initial_DeltaPsi = 0;
    internal.iP = 2.4399999999999999;
    internal.mitochondrion = 1;
    internal.O2 = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(8).fill(0);
    state[0] = internal.initial_ATP;
    state[1] = internal.initial_NAD;
    state[2] = internal.initial_AcCoA;
    state[3] = internal.initial_KG;
    state[4] = internal.initial_Cit;
    state[5] = internal.initial_OAA;
    state[6] = internal.initial_Pyr;
    state[7] = internal.initial_DeltaPsi;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "AcCoA_init", "At", "ATP_init", "b", "C", "Cit_init", "DeltaPsim", "F", "K", "k1", "k2", "k3", "k4", "k5", "k6", "k7", "k8", "kANT", "Kapp", "kATP", "Keq", "KG_init", "kleak", "kresp", "NAD_init", "Nt", "OAA_init", "Pyr_init", "R", "T"], unusedUserAction);
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
    this.base.user.setUserScalar(user, "OAA_init", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pyr_init", internal, 0.154, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R", internal, 8314, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T", internal, 298, -Infinity, Infinity, false);
    internal.initial_AcCoA = internal.AcCoA_init;
    internal.initial_ATP = internal.ATP_init;
    internal.initial_Cit = internal.Cit_init;
    internal.initial_KG = internal.KG_init;
    internal.initial_NAD = internal.NAD_init;
    internal.initial_OAA = internal.OAA_init;
    internal.initial_Pyr = internal.Pyr_init;
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
    const DeltaPsi = state[7];
    var DeltaGtransport = 1.2 * internal.F * DeltaPsi;
    dstatedt[2] = 0 + 1 * internal.mitochondrion * internal.k2 * Pyr * NAD - 1 * internal.mitochondrion * internal.k3 * OAA * AcCoA;
    dstatedt[4] = 0 + 1 * internal.mitochondrion * internal.k3 * OAA * AcCoA - 1 * internal.mitochondrion * internal.k4 * Cit * NAD;
    dstatedt[3] = 0 + 1 * internal.mitochondrion * internal.k4 * Cit * NAD - 1 * internal.mitochondrion * internal.k5 * KG * NAD * (internal.At - ATP) + 1 * internal.mitochondrion * internal.k6 * (OAA - KG / internal.Keq);
    dstatedt[5] = 0 - 1 * internal.mitochondrion * internal.k3 * OAA * AcCoA + 1 * internal.mitochondrion * internal.k5 * KG * NAD * (internal.At - ATP) - 1 * internal.mitochondrion * internal.k6 * (OAA - KG / internal.Keq) + 1 * internal.mitochondrion * internal.k7 * Pyr * ATP - 1 * internal.mitochondrion * internal.k8 * OAA;
    dstatedt[6] = 0 + 1 * internal.mitochondrion * internal.k1 - 1 * internal.mitochondrion * internal.k2 * Pyr * NAD - 1 * internal.mitochondrion * internal.k7 * Pyr * ATP;
    var JANT = internal.kANT * ATP;
    var Jleak = internal.kleak * DeltaPsi;
    var Jresp = internal.kresp * ((internal.Nt - NAD) / (internal.K + internal.Nt - NAD)) / (1 + Math.exp(internal.a * (DeltaPsi - internal.DeltaPsim)));
    var ATPcrit = internal.At / (1 + Math.exp(- 3 * DeltaGtransport / (internal.R * internal.T)) / (internal.Kapp * internal.iP));
    dstatedt[1] = 0 - 1 * internal.mitochondrion * internal.k2 * Pyr * NAD - 1 * internal.mitochondrion * internal.k4 * Cit * NAD - 2 * internal.mitochondrion * internal.k5 * KG * NAD * (internal.At - ATP) + 1 * internal.mitochondrion * Jresp;
    var JATP = internal.kATP * (2 / (1 + Math.exp(internal.b * (ATP - ATPcrit))) - 1);
    dstatedt[0] = 0 + 1 * internal.mitochondrion * internal.k5 * KG * NAD * (internal.At - ATP) - 1 * internal.mitochondrion * internal.k7 * Pyr * ATP + 1 * internal.mitochondrion * JATP - 1 * internal.mitochondrion * JANT;
    dstatedt[7] = (10 * Jresp - 3 * JATP - Jleak - JANT) / internal.C;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "ATP", "NAD", "AcCoA", "KG", "Cit", "OAA", "Pyr", "DeltaPsi"];
    this.metadata.internalOrder = {a: null, AcCoA_init: null, At: null, ATP_init: null, b: null, C: null, Cit_init: null, cytoplasm: null, DeltaPsim: null, F: null, H: null, H2O: null, He: null, initial_AcCoA: null, initial_ATP: null, initial_Cit: null, initial_DeltaPsi: null, initial_KG: null, initial_NAD: null, initial_OAA: null, initial_Pyr: null, iP: null, K: null, k1: null, k2: null, k3: null, k4: null, k5: null, k6: null, k7: null, k8: null, kANT: null, Kapp: null, kATP: null, Keq: null, KG_init: null, kleak: null, kresp: null, mitochondrion: null, NAD_init: null, Nt: null, O2: null, OAA_init: null, Pyr_init: null, R: null, T: null};
    this.metadata.variableOrder = {ATP: null, NAD: null, AcCoA: null, KG: null, Cit: null, OAA: null, Pyr: null, DeltaPsi: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
