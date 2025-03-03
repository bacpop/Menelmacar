export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.HOAc_E = 0;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(7).fill(0);
    state[0] = internal.initial_AcCoA;
    state[1] = internal.initial_AcP;
    state[2] = internal.initial_OAc;
    state[3] = internal.initial_HOAc;
    state[4] = internal.initial_LacI;
    state[5] = internal.initial_Acs;
    state[6] = internal.initial_Pta;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["AcCoA_init", "AcP_init", "Acs_init", "alpha0", "alpha1", "alpha2", "alpha3", "C", "H", "HOAc_init", "k1", "k2", "k3", "kAck_f", "kAck_r", "kd", "Keq", "Kg1", "Kg2", "Kg3", "KM1", "KM2", "kTCA", "LacI_init", "n", "OAc_init", "Pta_init", "S0"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "AcCoA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AcP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Acs_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha0", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha2", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha3", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H", internal, 9.9999999999999995e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HOAc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 80, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kAck_f", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kAck_r", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd", internal, 0.059999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Keq", internal, 0.00050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kg1", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kg2", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kg3", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KM1", internal, 0.059999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KM2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kTCA", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "LacI_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "OAc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pta_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S0", internal, 0.5, -Infinity, Infinity, false);
    internal.initial_AcCoA = internal.AcCoA_init;
    internal.initial_AcP = internal.AcP_init;
    internal.initial_Acs = internal.Acs_init;
    internal.initial_HOAc = internal.HOAc_init;
    internal.initial_LacI = internal.LacI_init;
    internal.initial_OAc = internal.OAc_init;
    internal.initial_Pta = internal.Pta_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const AcCoA = state[0];
    const AcP = state[1];
    const OAc = state[2];
    const HOAc = state[3];
    const LacI = state[4];
    const Acs = state[5];
    const Pta = state[6];
    dstatedt[0] = 0 + 1 * internal.compartment * internal.S0 - 1 * internal.compartment * internal.kTCA * AcCoA - 1 * internal.compartment * internal.k1 * Pta * AcCoA / (internal.KM1 + AcCoA) + 1 * internal.compartment * internal.k2 * Acs * OAc / (internal.KM2 + OAc);
    dstatedt[1] = 0 + 1 * internal.compartment * internal.k1 * Pta * AcCoA / (internal.KM1 + AcCoA) - 1 * internal.compartment * (internal.kAck_f * AcP - internal.kAck_r * OAc);
    dstatedt[5] = 0 + 1 * internal.compartment * (internal.alpha2 * Math.pow((AcP / internal.Kg2), (internal.n)) / (1 + Math.pow((AcP / internal.Kg2), (internal.n))) + internal.alpha0) - 1 * internal.compartment * internal.kd * Acs;
    dstatedt[3] = 0 - 1 * internal.compartment * internal.k3 * (HOAc - internal.HOAc_E) + 1 * internal.compartment * internal.C * (OAc * internal.H - internal.Keq * HOAc);
    dstatedt[4] = 0 + 1 * internal.compartment * (internal.alpha1 * Math.pow((AcP / internal.Kg1), (internal.n)) / (1 + Math.pow((AcP / internal.Kg1), (internal.n))) + internal.alpha0) - 1 * internal.compartment * internal.kd * LacI;
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.kAck_f * AcP - internal.kAck_r * OAc) - 1 * internal.compartment * internal.k2 * Acs * OAc / (internal.KM2 + OAc) - 1 * internal.compartment * internal.C * (OAc * internal.H - internal.Keq * HOAc);
    dstatedt[6] = 0 + 1 * internal.alpha3 / (1 + Math.pow((LacI / internal.Kg3), (internal.n))) + internal.alpha0 - 1 * internal.compartment * internal.kd * Pta;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "AcCoA", "AcP", "OAc", "HOAc", "LacI", "Acs", "Pta"];
    this.metadata.internalOrder = {AcCoA_init: null, AcP_init: null, Acs_init: null, alpha0: null, alpha1: null, alpha2: null, alpha3: null, C: null, compartment: null, H: null, HOAc_E: null, HOAc_init: null, initial_AcCoA: null, initial_AcP: null, initial_Acs: null, initial_HOAc: null, initial_LacI: null, initial_OAc: null, initial_Pta: null, k1: null, k2: null, k3: null, kAck_f: null, kAck_r: null, kd: null, Keq: null, Kg1: null, Kg2: null, Kg3: null, KM1: null, KM2: null, kTCA: null, LacI_init: null, n: null, OAc_init: null, Pta_init: null, S0: null};
    this.metadata.variableOrder = {AcCoA: null, AcP: null, OAc: null, HOAc: null, LacI: null, Acs: null, Pta: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
