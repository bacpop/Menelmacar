export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.nucleus = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var Cdc25_active_total_init = internal.initial_Cdc25_active + internal.initial_Cdc25Ps216_active;
    internal.initial_Cdc25_active_total = Cdc25_active_total_init;
    var state = Array(17).fill(0);
    state[0] = internal.initial_Cdc25_active;
    state[1] = internal.initial_Cdc25Ps216_active;
    state[2] = internal.initial_Cdc25_inactive;
    state[3] = internal.initial_Cdc25Ps216_inactive;
    state[4] = internal.initial_Chk1P;
    state[5] = internal.initial_protein_14_3_3;
    state[6] = internal.initial_Cdc25Ps216_14_3_3_inactive;
    state[7] = internal.initial_p53;
    state[8] = internal.initial_p21;
    state[9] = internal.initial_MPF;
    state[10] = internal.initial_p21_MPF;
    state[11] = internal.initial_preMPF;
    state[12] = internal.initial_Wee1;
    state[13] = internal.initial_Chk1;
    state[14] = internal.initial_Rad3_ATM;
    state[15] = internal.initial_Wee1_phosphorylated;
    state[16] = internal.initial_Cdc25_active_total;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Cdc25_active_init", "Cdc25_inactive_init", "Cdc25Ps216_14_3_3_inactive_init", "Cdc25Ps216_active_init", "Cdc25Ps216_inactive_init", "Chk1_init", "Chk1P_init", "k_23", "k_3", "k_ctak1", "k_ctak1_0", "k_Plk1", "k_Plk1_0", "k1", "k1_0", "k10", "k11", "k12", "k13", "k14", "k14_0", "k15", "k16", "k17", "k18", "k18_0", "k2", "k2_0", "k2_1", "k20", "k21", "k22", "k23", "k3", "k4", "k5", "k6", "k7", "k7_0", "k8", "k8_0", "k8_1", "k9", "k9_0", "k9_1", "kex", "kin", "MPF_init", "p21_init", "p21_MPF_init", "p53_init", "preMPF_init", "protein_14_3_3_init", "Rad3_ATM_init", "Wee1_init", "Wee1_phosphorylated_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Cdc25_active_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cdc25_inactive_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cdc25Ps216_14_3_3_inactive_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cdc25Ps216_active_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cdc25Ps216_inactive_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Chk1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Chk1P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_23", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_3", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_ctak1", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_ctak1_0", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_Plk1", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_Plk1_0", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1_0", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k12", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k13", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k14", internal, 0.00050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k14_0", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k15", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k16", internal, 0.00020000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k17", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k18", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k18_0", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2_0", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2_1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k20", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k21", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k22", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k23", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7_0", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8_0", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8_1", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9_0", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9_1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kex", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kin", internal, 1.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MPF_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p21_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p21_MPF_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p53_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "preMPF_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "protein_14_3_3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rad3_ATM_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Wee1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Wee1_phosphorylated_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_Cdc25_active = internal.Cdc25_active_init;
    internal.initial_Cdc25_inactive = internal.Cdc25_inactive_init;
    internal.initial_Cdc25Ps216_14_3_3_inactive = internal.Cdc25Ps216_14_3_3_inactive_init;
    internal.initial_Cdc25Ps216_active = internal.Cdc25Ps216_active_init;
    internal.initial_Cdc25Ps216_inactive = internal.Cdc25Ps216_inactive_init;
    internal.initial_Chk1 = internal.Chk1_init;
    internal.initial_Chk1P = internal.Chk1P_init;
    internal.initial_MPF = internal.MPF_init;
    internal.initial_p21 = internal.p21_init;
    internal.initial_p21_MPF = internal.p21_MPF_init;
    internal.initial_p53 = internal.p53_init;
    internal.initial_preMPF = internal.preMPF_init;
    internal.initial_protein_14_3_3 = internal.protein_14_3_3_init;
    internal.initial_Rad3_ATM = internal.Rad3_ATM_init;
    internal.initial_Wee1 = internal.Wee1_init;
    internal.initial_Wee1_phosphorylated = internal.Wee1_phosphorylated_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Cdc25_active = state[0];
    const Cdc25Ps216_active = state[1];
    const Cdc25_inactive = state[2];
    const Cdc25Ps216_inactive = state[3];
    const Chk1P = state[4];
    const protein_14_3_3 = state[5];
    const Cdc25Ps216_14_3_3_inactive = state[6];
    const p53 = state[7];
    const p21 = state[8];
    const MPF = state[9];
    const p21_MPF = state[10];
    const preMPF = state[11];
    const Wee1 = state[12];
    const Chk1 = state[13];
    const Rad3_ATM = state[14];
    const Wee1_phosphorylated = state[15];
    dstatedt[16] = 0 + 0;
    dstatedt[0] = 0 - 1 * internal.nucleus * (internal.k2 * Chk1P * Cdc25_active + internal.k_ctak1 * Cdc25_active) + 1 * internal.nucleus * internal.k2_0 * Cdc25Ps216_active - 1 * internal.nucleus * internal.k7_0 * Cdc25_active + 1 * internal.nucleus * (internal.k7 * MPF * Cdc25_inactive + internal.k_Plk1 * Cdc25_inactive);
    dstatedt[2] = 0 + 1 * internal.nucleus * internal.k7_0 * Cdc25_active - 1 * internal.nucleus * (internal.k7 * MPF * Cdc25_inactive + internal.k_Plk1 * Cdc25_inactive) - 1 * internal.nucleus * (internal.k2_1 * Chk1P * Cdc25_inactive + internal.k_ctak1_0 * Cdc25_inactive) + 1 * internal.nucleus * internal.k_3 * Cdc25Ps216_14_3_3_inactive + 1 * internal.nucleus * (internal.kin);
    dstatedt[6] = 0 - 1 * internal.nucleus * internal.k_3 * Cdc25Ps216_14_3_3_inactive + 1 * internal.nucleus * internal.k3 * protein_14_3_3 * Cdc25Ps216_inactive - 1 * internal.nucleus * internal.kex * Cdc25Ps216_14_3_3_inactive;
    dstatedt[1] = 0 + 1 * internal.nucleus * (internal.k2 * Chk1P * Cdc25_active + internal.k_ctak1 * Cdc25_active) - 1 * internal.nucleus * internal.k2_0 * Cdc25Ps216_active + 1 * internal.nucleus * (internal.k18 * MPF * Cdc25Ps216_inactive + internal.k_Plk1_0 * Cdc25Ps216_inactive) - 1 * internal.nucleus * internal.k18_0 * Cdc25Ps216_active;
    dstatedt[3] = 0 - 1 * internal.nucleus * (internal.k18 * MPF * Cdc25Ps216_inactive + internal.k_Plk1_0 * Cdc25Ps216_inactive) + 1 * internal.nucleus * internal.k18_0 * Cdc25Ps216_active + 1 * internal.nucleus * (internal.k2_1 * Chk1P * Cdc25_inactive + internal.k_ctak1_0 * Cdc25_inactive) - 1 * internal.nucleus * internal.k3 * protein_14_3_3 * Cdc25Ps216_inactive;
    dstatedt[13] = 0 - 1 * internal.nucleus * (internal.k1 * Chk1 * Rad3_ATM) + 1 * internal.nucleus * internal.k1_0 * Chk1P;
    dstatedt[4] = 0 + 1 * internal.nucleus * (internal.k1 * Chk1 * Rad3_ATM) - 1 * internal.nucleus * internal.k1_0 * Chk1P;
    dstatedt[9] = 0 - 1 * internal.nucleus * internal.k23 * p21 * MPF + 1 * internal.nucleus * internal.k_23 * p21_MPF + 1 * internal.nucleus * (internal.k9 * (Cdc25_active + Cdc25Ps216_active) * preMPF + internal.k9_0 * preMPF) - 1 * internal.nucleus * (internal.k9_1 * MPF * Wee1) - 1 * internal.nucleus * (internal.k15 * MPF * MPF);
    dstatedt[8] = 0 + 1 * internal.nucleus * (internal.k20 * p53) + 1 * internal.nucleus * (internal.k21) - 1 * internal.nucleus * internal.k22 * p21 - 1 * internal.nucleus * internal.k23 * p21 * MPF + 1 * internal.nucleus * internal.k_23 * p21_MPF;
    dstatedt[10] = 0 + 1 * internal.nucleus * internal.k23 * p21 * MPF - 1 * internal.nucleus * internal.k_23 * p21_MPF;
    dstatedt[7] = 0 + 1 * internal.nucleus * (internal.k10) - 1 * internal.nucleus * internal.k11 * p53;
    dstatedt[11] = 0 - 1 * internal.nucleus * (internal.k9 * (Cdc25_active + Cdc25Ps216_active) * preMPF + internal.k9_0 * preMPF) + 1 * internal.nucleus * (internal.k9_1 * MPF * Wee1) + 1 * internal.nucleus * (internal.k14 / (1 + internal.k14_0 * p53));
    dstatedt[5] = 0 + 1 * internal.nucleus * internal.k_3 * Cdc25Ps216_14_3_3_inactive - 1 * internal.nucleus * internal.k12 * protein_14_3_3 + 1 * internal.nucleus * (internal.k13) + 1 * internal.nucleus * (internal.k6 * p53) - 1 * internal.nucleus * internal.k3 * protein_14_3_3 * Cdc25Ps216_inactive;
    dstatedt[14] = 0 + 1 * internal.nucleus * (internal.k4) - 1 * internal.nucleus * internal.k5 * Rad3_ATM;
    dstatedt[12] = 0 + 1 * internal.nucleus * (internal.k16) - 1 * internal.nucleus * (internal.k8 * MPF * Wee1 + internal.k8_0 * Wee1) + 1 * internal.nucleus * internal.k8_1 * Wee1_phosphorylated;
    dstatedt[15] = 0 + 1 * internal.nucleus * (internal.k8 * MPF * Wee1 + internal.k8_0 * Wee1) - 1 * internal.nucleus * internal.k8_1 * Wee1_phosphorylated - 1 * internal.nucleus * internal.k17 * Wee1_phosphorylated;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Cdc25_active", "Cdc25Ps216_active", "Cdc25_inactive", "Cdc25Ps216_inactive", "Chk1P", "protein_14_3_3", "Cdc25Ps216_14_3_3_inactive", "p53", "p21", "MPF", "p21_MPF", "preMPF", "Wee1", "Chk1", "Rad3_ATM", "Wee1_phosphorylated", "Cdc25_active_total"];
    this.metadata.internalOrder = {Cdc25_active_init: null, Cdc25_inactive_init: null, Cdc25Ps216_14_3_3_inactive_init: null, Cdc25Ps216_active_init: null, Cdc25Ps216_inactive_init: null, Chk1_init: null, Chk1P_init: null, initial_Cdc25_active: null, initial_Cdc25_active_total: null, initial_Cdc25_inactive: null, initial_Cdc25Ps216_14_3_3_inactive: null, initial_Cdc25Ps216_active: null, initial_Cdc25Ps216_inactive: null, initial_Chk1: null, initial_Chk1P: null, initial_MPF: null, initial_p21: null, initial_p21_MPF: null, initial_p53: null, initial_preMPF: null, initial_protein_14_3_3: null, initial_Rad3_ATM: null, initial_Wee1: null, initial_Wee1_phosphorylated: null, k_23: null, k_3: null, k_ctak1: null, k_ctak1_0: null, k_Plk1: null, k_Plk1_0: null, k1: null, k1_0: null, k10: null, k11: null, k12: null, k13: null, k14: null, k14_0: null, k15: null, k16: null, k17: null, k18: null, k18_0: null, k2: null, k2_0: null, k2_1: null, k20: null, k21: null, k22: null, k23: null, k3: null, k4: null, k5: null, k6: null, k7: null, k7_0: null, k8: null, k8_0: null, k8_1: null, k9: null, k9_0: null, k9_1: null, kex: null, kin: null, MPF_init: null, nucleus: null, p21_init: null, p21_MPF_init: null, p53_init: null, preMPF_init: null, protein_14_3_3_init: null, Rad3_ATM_init: null, Wee1_init: null, Wee1_phosphorylated_init: null};
    this.metadata.variableOrder = {Cdc25_active: null, Cdc25Ps216_active: null, Cdc25_inactive: null, Cdc25Ps216_inactive: null, Chk1P: null, protein_14_3_3: null, Cdc25Ps216_14_3_3_inactive: null, p53: null, p21: null, MPF: null, p21_MPF: null, preMPF: null, Wee1: null, Chk1: null, Rad3_ATM: null, Wee1_phosphorylated: null, Cdc25_active_total: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
