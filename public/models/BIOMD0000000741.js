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
    var state = Array(4).fill(0);
    state[0] = internal.initial_NT;
    state[1] = internal.initial_NI;
    state[2] = internal.initial_BT;
    state[3] = internal.initial_BI;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["ai", "BI_init", "BT_init", "cca_conc", "cil_conc", "dca_conc", "di", "dil_conc", "dt", "fhirhinh", "fhtrhtnh", "firi", "ft", "hi", "kei", "ket", "kgr", "M", "ModelValue_16", "ModelValue_17", "ModelValue_18", "ModelValue_19", "ModelValue_8", "nh", "NI_init", "NT_init", "rt", "vpl"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "ai", internal, 2.0794000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "BI_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "BT_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cca_conc", internal, 34.109999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cil_conc", internal, 3.7999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dca_conc", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "di", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dil_conc", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dt", internal, 9.9999999999999995e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "fhirhinh", internal, 19548, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "fhtrhtnh", internal, 4560, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "firi", internal, 1.0924999999999999e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ft", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "hi", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kei", internal, 2.1400000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ket", internal, 0.11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kgr", internal, 0.0057800000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M", internal, 1000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_16", internal, 3.7999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_17", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_18", internal, 34.109999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_19", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_8", internal, 3150, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nh", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NI_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NT_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rt", internal, 4.5000000000000003e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vpl", internal, 3150, -Infinity, Infinity, false);
    internal.cca = internal.ModelValue_18 * internal.ModelValue_8;
    internal.cil = internal.ModelValue_16 * internal.ModelValue_8;
    internal.dca = internal.ModelValue_19 * internal.ModelValue_8;
    internal.dil = internal.ModelValue_17 * internal.ModelValue_8;
    internal.initial_BI = internal.BI_init;
    internal.initial_BT = internal.BT_init;
    internal.initial_NI = internal.NI_init;
    internal.initial_NT = internal.NT_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const NT = state[0];
    const NI = state[1];
    const BT = state[2];
    const BI = state[3];
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.fhirhinh) - 1 * internal.compartment * internal.kei * BI + 1 * internal.compartment * (internal.firi * NI);
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.fhtrhtnh) - 1 * internal.compartment * internal.ket * BT + 1 * internal.compartment * (internal.ft * internal.rt * NT);
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.ai * NT * (1 - NI / internal.M)) - 1 * internal.compartment * internal.di * NI;
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.kgr * NT) - 1 * internal.compartment * (internal.dt * NT * NI / (internal.hi + NI));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "NT", "NI", "BT", "BI"];
    this.metadata.internalOrder = {ai: null, BI_init: null, BT_init: null, cca: null, cca_conc: null, cil: null, cil_conc: null, compartment: null, dca: null, dca_conc: null, di: null, dil: null, dil_conc: null, dt: null, fhirhinh: null, fhtrhtnh: null, firi: null, ft: null, hi: null, initial_BI: null, initial_BT: null, initial_NI: null, initial_NT: null, kei: null, ket: null, kgr: null, M: null, ModelValue_16: null, ModelValue_17: null, ModelValue_18: null, ModelValue_19: null, ModelValue_8: null, nh: null, NI_init: null, NT_init: null, rt: null, vpl: null};
    this.metadata.variableOrder = {NT: null, NI: null, BT: null, BI: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
