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
    var state = Array(11).fill(0);
    state[0] = internal.initial_Glu;
    state[1] = internal.initial_Fru;
    state[2] = internal.initial_Formic_acid;
    state[3] = internal.initial_Triose;
    state[4] = internal.initial_Acetic_acid;
    state[5] = internal.initial_Cn;
    state[6] = internal.initial_Amadori;
    state[7] = internal.initial_AMP;
    state[8] = internal.initial_C5;
    state[9] = internal.initial_lys_R;
    state[10] = internal.initial_Melanoidin;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Acetic_acid_init", "Amadori_init", "AMP_init", "C5_init", "Cn_init", "Formic_acid_init", "Fru_init", "Glu_init", "K1", "K10", "K11", "K2", "K3", "K4", "K5", "K6", "K7", "K8", "K9", "lys_R_init", "Melanoidin_init", "Triose_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Acetic_acid_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Amadori_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AMP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C5_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cn_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Formic_acid_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Fru_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Glu_init", internal, 160, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K10", internal, 0.00014999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K11", internal, 0.12514, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2", internal, 0.0050899999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K3", internal, 0.00046999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K4", internal, 0.0011000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K5", internal, 0.0071199999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K6", internal, 0.0043899999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K7", internal, 0.00018000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K8", internal, 0.11133999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K9", internal, 0.14359, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lys_R_init", internal, 15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Melanoidin_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Triose_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_Acetic_acid = internal.Acetic_acid_init;
    internal.initial_Amadori = internal.Amadori_init;
    internal.initial_AMP = internal.AMP_init;
    internal.initial_C5 = internal.C5_init;
    internal.initial_Cn = internal.Cn_init;
    internal.initial_Formic_acid = internal.Formic_acid_init;
    internal.initial_Fru = internal.Fru_init;
    internal.initial_Glu = internal.Glu_init;
    internal.initial_lys_R = internal.lys_R_init;
    internal.initial_Melanoidin = internal.Melanoidin_init;
    internal.initial_Triose = internal.Triose_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Glu = state[0];
    const Fru = state[1];
    const Triose = state[3];
    const Amadori = state[6];
    const AMP = state[7];
    const lys_R = state[9];
    dstatedt[4] = 0 + 1 * internal.K6 * Triose + 1 * internal.K8 * Amadori;
    dstatedt[6] = 0 + 1 * internal.K7 * Glu * lys_R - 1 * internal.K8 * Amadori - 1 * internal.K9 * Amadori;
    dstatedt[7] = 0 + 1 * internal.K9 * Amadori + 1 * internal.K10 * Fru * lys_R - 1 * internal.K11 * AMP;
    dstatedt[8] = 0 + 1 * internal.K3 * Glu + 1 * internal.K4 * Fru;
    dstatedt[5] = 0 + 1 * internal.K6 * Triose;
    dstatedt[2] = 0 + 1 * internal.K3 * Glu + 1 * internal.K4 * Fru;
    dstatedt[1] = 0 + 1 * internal.K1 * Glu - 1 * internal.K2 * Fru - 1 * internal.K4 * Fru - 1 * internal.K5 * Fru - 1 * internal.K10 * Fru * lys_R;
    dstatedt[0] = 0 - 1 * internal.K1 * Glu + 1 * internal.K2 * Fru - 1 * internal.K3 * Glu - 1 * internal.K7 * Glu * lys_R;
    dstatedt[9] = 0 - 1 * internal.K7 * Glu * lys_R + 1 * internal.K8 * Amadori - 1 * internal.K10 * Fru * lys_R;
    dstatedt[10] = 0 + 1 * internal.K11 * AMP;
    dstatedt[3] = 0 + 2 * internal.K5 * Fru - 1 * internal.K6 * Triose;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Glu", "Fru", "Formic_acid", "Triose", "Acetic_acid", "Cn", "Amadori", "AMP", "C5", "lys_R", "Melanoidin"];
    this.metadata.internalOrder = {Acetic_acid_init: null, Amadori_init: null, AMP_init: null, C5_init: null, Cn_init: null, compartment: null, Formic_acid_init: null, Fru_init: null, Glu_init: null, initial_Acetic_acid: null, initial_Amadori: null, initial_AMP: null, initial_C5: null, initial_Cn: null, initial_Formic_acid: null, initial_Fru: null, initial_Glu: null, initial_lys_R: null, initial_Melanoidin: null, initial_Triose: null, K1: null, K10: null, K11: null, K2: null, K3: null, K4: null, K5: null, K6: null, K7: null, K8: null, K9: null, lys_R_init: null, Melanoidin_init: null, Triose_init: null};
    this.metadata.variableOrder = {Glu: null, Fru: null, Formic_acid: null, Triose: null, Acetic_acid: null, Cn: null, Amadori: null, AMP: null, C5: null, lys_R: null, Melanoidin: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
