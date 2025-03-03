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
    var state = Array(14).fill(0);
    state[0] = internal.initial_DFG;
    state[1] = internal.initial_E1;
    state[2] = internal.initial_E2;
    state[3] = internal.initial_Cn;
    state[4] = internal.initial_Gly;
    state[5] = internal.initial_p_3DG;
    state[6] = internal.initial_FA;
    state[7] = internal.initial_p_1DG;
    state[8] = internal.initial_AA;
    state[9] = internal.initial_Man;
    state[10] = internal.initial_Glu;
    state[11] = internal.initial_MG;
    state[12] = internal.initial_Mel;
    state[13] = internal.initial_Fru;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["AA_init", "Cn_init", "DFG_init", "E1_init", "E2_init", "FA_init", "Fru_init", "Glu_init", "Gly_init", "k1", "k10", "k11", "k12", "k13", "k14", "k15", "k16", "k2", "k3", "k4", "k5", "k6", "k7", "k8", "k9", "Man_init", "Mel_init", "MG_init", "p_1DG_init", "p_3DG_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "AA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cn_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DFG_init", internal, 9, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Fru_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Glu_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Gly_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.0057000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 0.070699999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11", internal, 0.11310000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k12", internal, 0.00080000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k13", internal, 0.0022000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k14", internal, 0.0033999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k15", internal, 0.015900000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k16", internal, 0.0134, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.015599999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.0155, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0.079399999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 0.090700000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 0.027400000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 0.21249999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 1.9085000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Man_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Mel_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MG_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_1DG_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_3DG_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_AA = internal.AA_init;
    internal.initial_Cn = internal.Cn_init;
    internal.initial_DFG = internal.DFG_init;
    internal.initial_E1 = internal.E1_init;
    internal.initial_E2 = internal.E2_init;
    internal.initial_FA = internal.FA_init;
    internal.initial_Fru = internal.Fru_init;
    internal.initial_Glu = internal.Glu_init;
    internal.initial_Gly = internal.Gly_init;
    internal.initial_Man = internal.Man_init;
    internal.initial_Mel = internal.Mel_init;
    internal.initial_MG = internal.MG_init;
    internal.initial_p_1DG = internal.p_1DG_init;
    internal.initial_p_3DG = internal.p_3DG_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const DFG = state[0];
    const E1 = state[1];
    const E2 = state[2];
    const Cn = state[3];
    const Gly = state[4];
    const p_3DG = state[5];
    const p_1DG = state[7];
    const Man = state[9];
    const Glu = state[10];
    dstatedt[8] = 0 + 1 * internal.k9 * p_1DG + 1 * internal.k15 * Cn;
    dstatedt[3] = 0 + 1 * internal.k3 * DFG + 1 * internal.k5 * p_3DG + 1 * internal.k8 * p_1DG - 1 * internal.k14 * Cn * Gly - 1 * internal.k15 * Cn;
    dstatedt[0] = 0 - 1 * internal.k1 * DFG - 1 * internal.k2 * DFG - 1 * internal.k3 * DFG;
    dstatedt[1] = 0 + 1 * internal.k1 * DFG - 1 * internal.k4 * E1 - 1 * internal.k10 * E1 - 1 * internal.k11 * E1;
    dstatedt[2] = 0 + 1 * internal.k2 * DFG - 1 * internal.k7 * E2 - 1 * internal.k16 * E2;
    dstatedt[6] = 0 + 1 * internal.k6 * p_3DG + 1 * internal.k15 * Cn;
    dstatedt[13] = 0 + 1 * internal.k16 * E2;
    dstatedt[10] = 0 + 1 * internal.k11 * E1 + 1 * internal.k12 * Man - 1 * internal.k13 * Glu;
    dstatedt[4] = 0 + 1 * internal.k3 * DFG + 1 * internal.k4 * E1 + 1 * internal.k7 * E2 + 1 * internal.k10 * E1 + 1 * internal.k11 * E1 - 1 * internal.k14 * Cn * Gly + 1 * internal.k16 * E2;
    dstatedt[9] = 0 + 1 * internal.k10 * E1 - 1 * internal.k12 * Man;
    dstatedt[12] = 0 + 1 * internal.k14 * Cn * Gly;
    dstatedt[11] = 0 + 1 * internal.k15 * Cn;
    dstatedt[7] = 0 + 1 * internal.k7 * E2 - 1 * internal.k8 * p_1DG - 1 * internal.k9 * p_1DG;
    dstatedt[5] = 0 + 1 * internal.k4 * E1 - 1 * internal.k5 * p_3DG - 1 * internal.k6 * p_3DG + 1 * internal.k13 * Glu;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "DFG", "E1", "E2", "Cn", "Gly", "p_3DG", "FA", "p_1DG", "AA", "Man", "Glu", "MG", "Mel", "Fru"];
    this.metadata.internalOrder = {AA_init: null, Cn_init: null, compartment: null, DFG_init: null, E1_init: null, E2_init: null, FA_init: null, Fru_init: null, Glu_init: null, Gly_init: null, initial_AA: null, initial_Cn: null, initial_DFG: null, initial_E1: null, initial_E2: null, initial_FA: null, initial_Fru: null, initial_Glu: null, initial_Gly: null, initial_Man: null, initial_Mel: null, initial_MG: null, initial_p_1DG: null, initial_p_3DG: null, k1: null, k10: null, k11: null, k12: null, k13: null, k14: null, k15: null, k16: null, k2: null, k3: null, k4: null, k5: null, k6: null, k7: null, k8: null, k9: null, Man_init: null, Mel_init: null, MG_init: null, p_1DG_init: null, p_3DG_init: null};
    this.metadata.variableOrder = {DFG: null, E1: null, E2: null, Cn: null, Gly: null, p_3DG: null, FA: null, p_1DG: null, AA: null, Man: null, Glu: null, MG: null, Mel: null, Fru: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
