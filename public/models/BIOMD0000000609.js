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
    var state = Array(5).fill(0);
    state[0] = internal.initial_Sulphate__PAPS;
    state[1] = internal.initial_GSH;
    state[2] = internal.initial_NAPQI;
    state[3] = internal.initial_Paracetamol_APAP;
    state[4] = internal.initial_Protein_adducts;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["bG", "bS", "dG", "dS", "k450", "kG", "kGSH", "kN", "kPSH", "kS", "NAPQI_init", "P0", "Protein_adducts_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "bG", internal, 1.374e-14, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "bS", internal, 2.6500000000000001e-14, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dG", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dS", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k450", internal, 0.315, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kG", internal, 2.9900000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kGSH", internal, 1.6e+18, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kN", internal, 0.0315, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kPSH", internal, 110, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kS", internal, 226000000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NAPQI_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P0", internal, 1.3199999999999999e-13, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Protein_adducts_init", internal, 0, -Infinity, Infinity, false);
    internal.GSH_init = internal.bG / internal.dG;
    internal.initial_NAPQI = internal.NAPQI_init;
    internal.initial_Protein_adducts = internal.Protein_adducts_init;
    internal.Paracetamol_APAP_init = internal.P0;
    internal.Sulphate__PAPS_init = internal.bS / internal.dS;
    internal.initial_GSH = internal.GSH_init;
    internal.initial_Paracetamol_APAP = internal.Paracetamol_APAP_init;
    internal.initial_Sulphate__PAPS = internal.Sulphate__PAPS_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Sulphate__PAPS = state[0];
    const GSH = state[1];
    const NAPQI = state[2];
    const Paracetamol_APAP = state[3];
    dstatedt[1] = 0 - 1 * internal.compartment * internal.kGSH * NAPQI * GSH - 1 * internal.compartment * internal.dG * GSH + 1 * internal.compartment * (internal.bG);
    dstatedt[2] = 0 + 1 * internal.compartment * internal.k450 * Paracetamol_APAP - 1 * internal.compartment * internal.kN * NAPQI - 1 * internal.compartment * internal.kPSH * NAPQI - 1 * internal.compartment * internal.kGSH * NAPQI * GSH;
    dstatedt[3] = 0 - 1 * internal.compartment * internal.k450 * Paracetamol_APAP + 1 * internal.compartment * internal.kN * NAPQI - 1 * internal.compartment * internal.kG * Paracetamol_APAP - 1 * internal.compartment * internal.kS * Paracetamol_APAP * Sulphate__PAPS;
    dstatedt[4] = 0 + 1 * internal.compartment * internal.kPSH * NAPQI;
    dstatedt[0] = 0 - 1 * internal.compartment * internal.kS * Paracetamol_APAP * Sulphate__PAPS - 1 * internal.compartment * internal.dS * Sulphate__PAPS + 1 * internal.compartment * (internal.bS);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Sulphate__PAPS", "GSH", "NAPQI", "Paracetamol_APAP", "Protein_adducts"];
    this.metadata.internalOrder = {bG: null, bS: null, compartment: null, dG: null, dS: null, GSH_init: null, initial_GSH: null, initial_NAPQI: null, initial_Paracetamol_APAP: null, initial_Protein_adducts: null, initial_Sulphate__PAPS: null, k450: null, kG: null, kGSH: null, kN: null, kPSH: null, kS: null, NAPQI_init: null, P0: null, Paracetamol_APAP_init: null, Protein_adducts_init: null, Sulphate__PAPS_init: null};
    this.metadata.variableOrder = {Sulphate__PAPS: null, GSH: null, NAPQI: null, Paracetamol_APAP: null, Protein_adducts: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
