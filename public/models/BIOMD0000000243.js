export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.default1 = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(23).fill(0);
    state[0] = internal.initial_L;
    state[1] = internal.initial_L_RF;
    state[2] = internal.initial_L_RF_C8;
    state[3] = internal.initial_L_RF_FL;
    state[4] = internal.initial_L_RF_FS;
    state[5] = internal.initial_p43_p41;
    state[6] = internal.initial_C3;
    state[7] = internal.initial_C8;
    state[8] = internal.initial_C8_star;
    state[9] = internal.initial_C3_star;
    state[10] = internal.initial_p43_FLIP;
    state[11] = internal.initial_NF_kB_IkB;
    state[12] = internal.initial_NF_kB_IkB_P;
    state[13] = internal.initial_p43_FLIP_IKK_star;
    state[14] = internal.initial_NF_kB_star;
    state[15] = internal.initial_RF;
    state[16] = internal.initial_FL;
    state[17] = internal.initial_FS;
    state[18] = internal.initial_IKK;
    state[19] = internal.initial_L_RF_C8_FS;
    state[20] = internal.initial_L_RF_FL_FL;
    state[21] = internal.initial_L_RF_FL_FS;
    state[22] = internal.initial_L_RF_FS_FS;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["C3_init", "C3_star_init", "C8_init", "C8_star_init", "FL_init", "FS_init", "IKK_init", "k1", "k10", "k11", "k12", "k13", "k14", "k15", "k16", "k17", "k2", "k3", "k4", "k5", "k6", "k7", "k8", "k9", "L_init", "L_RF_C8_FS_init", "L_RF_C8_init", "L_RF_FL_FL_init", "L_RF_FL_FS_init", "L_RF_FL_init", "L_RF_FS_FS_init", "L_RF_FS_init", "L_RF_init", "NF_kB_IkB_init", "NF_kB_IkB_P_init", "NF_kB_star_init", "p43_FLIP_IKK_star_init", "p43_FLIP_init", "p43_p41_init", "RF_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "C3_init", internal, 1.4434039999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C3_star_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C8_init", internal, 64.476519999999994, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C8_star_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FL_init", internal, 7.3985620000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FS_init", internal, 5.0839230000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IKK_init", internal, 5.7728250000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 0.1205258, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11", internal, 0.028914510000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k12", internal, 0.15029139999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k13", internal, 0.00072042609999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k14", internal, 0.35882239999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k15", internal, 3.6841620000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k16", internal, 0.022299119999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k17", internal, 0.0064181999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.00012772479999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.66933160000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 1.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 0.00059465690000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 0.99999990000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 0.88750629999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 0.00080443780000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 0.002249759, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L_init", internal, 113.22, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L_RF_C8_FS_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L_RF_C8_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L_RF_FL_FL_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L_RF_FL_FS_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L_RF_FL_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L_RF_FS_FS_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L_RF_FS_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L_RF_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NF_kB_IkB_init", internal, 4.7395459999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NF_kB_IkB_P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NF_kB_star_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p43_FLIP_IKK_star_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p43_FLIP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p43_p41_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RF_init", internal, 91.265919999999994, -Infinity, Infinity, false);
    internal.initial_C3 = internal.C3_init;
    internal.initial_C3_star = internal.C3_star_init;
    internal.initial_C8 = internal.C8_init;
    internal.initial_C8_star = internal.C8_star_init;
    internal.initial_FL = internal.FL_init;
    internal.initial_FS = internal.FS_init;
    internal.initial_IKK = internal.IKK_init;
    internal.initial_L = internal.L_init;
    internal.initial_L_RF = internal.L_RF_init;
    internal.initial_L_RF_C8 = internal.L_RF_C8_init;
    internal.initial_L_RF_C8_FS = internal.L_RF_C8_FS_init;
    internal.initial_L_RF_FL = internal.L_RF_FL_init;
    internal.initial_L_RF_FL_FL = internal.L_RF_FL_FL_init;
    internal.initial_L_RF_FL_FS = internal.L_RF_FL_FS_init;
    internal.initial_L_RF_FS = internal.L_RF_FS_init;
    internal.initial_L_RF_FS_FS = internal.L_RF_FS_FS_init;
    internal.initial_NF_kB_IkB = internal.NF_kB_IkB_init;
    internal.initial_NF_kB_IkB_P = internal.NF_kB_IkB_P_init;
    internal.initial_NF_kB_star = internal.NF_kB_star_init;
    internal.initial_p43_FLIP = internal.p43_FLIP_init;
    internal.initial_p43_FLIP_IKK_star = internal.p43_FLIP_IKK_star_init;
    internal.initial_p43_p41 = internal.p43_p41_init;
    internal.initial_RF = internal.RF_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const L = state[0];
    const L_RF = state[1];
    const L_RF_C8 = state[2];
    const L_RF_FL = state[3];
    const L_RF_FS = state[4];
    const p43_p41 = state[5];
    const C3 = state[6];
    const C8 = state[7];
    const C8_star = state[8];
    const C3_star = state[9];
    const p43_FLIP = state[10];
    const NF_kB_IkB = state[11];
    const NF_kB_IkB_P = state[12];
    const p43_FLIP_IKK_star = state[13];
    const NF_kB_star = state[14];
    const RF = state[15];
    const FL = state[16];
    const FS = state[17];
    const IKK = state[18];
    dstatedt[6] = 0 - 1 * internal.default1 * internal.k9 * C3 * C8_star;
    dstatedt[9] = 0 + 1 * internal.default1 * internal.k9 * C3 * C8_star - 1 * internal.default1 * internal.k10 * C8 * C3_star + 1 * internal.default1 * internal.k10 * C8 * C3_star - 1 * internal.default1 * internal.k12 * C3_star;
    dstatedt[7] = 0 - 1 * internal.default1 * internal.k2 * L_RF * C8 - 1 * internal.default1 * internal.k5 * L_RF_C8 * C8 - 1 * internal.default1 * internal.k5 * L_RF_FL * C8 - 1 * internal.default1 * internal.k5 * L_RF_FS * C8 - 1 * internal.default1 * internal.k10 * C8 * C3_star;
    dstatedt[8] = 0 + 1 * internal.default1 * internal.k8 * p43_p41 * p43_p41 - 1 * internal.default1 * internal.k9 * C3 * C8_star + 1 * internal.default1 * internal.k9 * C3 * C8_star - 1 * internal.default1 * internal.k11 * C8_star;
    dstatedt[16] = 0 - 1 * internal.default1 * internal.k3 * L_RF * FL - 1 * internal.default1 * internal.k6 * L_RF_C8 * FL - 1 * internal.default1 * internal.k6 * L_RF_FL * FL - 1 * internal.default1 * internal.k6 * L_RF_FS * FL;
    dstatedt[17] = 0 - 1 * internal.default1 * internal.k4 * L_RF * FS - 1 * internal.default1 * internal.k7 * L_RF_C8 * FS - 1 * internal.default1 * internal.k7 * L_RF_FL * FS - 1 * internal.default1 * internal.k7 * L_RF_FS * FS;
    dstatedt[18] = 0 - 1 * internal.default1 * internal.k13 * p43_FLIP * IKK;
    dstatedt[0] = 0 - 1 * internal.default1 * internal.k1 * L * RF;
    dstatedt[1] = 0 + 1 * internal.default1 * internal.k1 * L * RF - 1 * internal.default1 * internal.k2 * L_RF * C8 - 1 * internal.default1 * internal.k3 * L_RF * FL - 1 * internal.default1 * internal.k4 * L_RF * FS;
    dstatedt[2] = 0 + 1 * internal.default1 * internal.k2 * L_RF * C8 - 1 * internal.default1 * internal.k5 * L_RF_C8 * C8 - 1 * internal.default1 * internal.k6 * L_RF_C8 * FL - 1 * internal.default1 * internal.k7 * L_RF_C8 * FS;
    dstatedt[19] = 0 + 1 * internal.default1 * internal.k7 * L_RF_C8 * FS + 1 * internal.default1 * internal.k5 * L_RF_FS * C8;
    dstatedt[3] = 0 + 1 * internal.default1 * internal.k3 * L_RF * FL - 1 * internal.default1 * internal.k5 * L_RF_FL * C8 - 1 * internal.default1 * internal.k6 * L_RF_FL * FL - 1 * internal.default1 * internal.k7 * L_RF_FL * FS;
    dstatedt[20] = 0 + 1 * internal.default1 * internal.k6 * L_RF_FL * FL;
    dstatedt[21] = 0 + 1 * internal.default1 * internal.k7 * L_RF_FL * FS + 1 * internal.default1 * internal.k6 * L_RF_FS * FL;
    dstatedt[4] = 0 + 1 * internal.default1 * internal.k4 * L_RF * FS - 1 * internal.default1 * internal.k5 * L_RF_FS * C8 - 1 * internal.default1 * internal.k6 * L_RF_FS * FL - 1 * internal.default1 * internal.k7 * L_RF_FS * FS;
    dstatedt[22] = 0 + 1 * internal.default1 * internal.k7 * L_RF_FS * FS;
    dstatedt[11] = 0 - 1 * internal.default1 * internal.k14 * NF_kB_IkB * p43_FLIP_IKK_star;
    dstatedt[12] = 0 + 1 * internal.default1 * internal.k14 * NF_kB_IkB * p43_FLIP_IKK_star - 1 * internal.default1 * internal.k15 * NF_kB_IkB_P;
    dstatedt[14] = 0 + 1 * internal.default1 * internal.k15 * NF_kB_IkB_P - 1 * internal.default1 * internal.k17 * NF_kB_star;
    dstatedt[10] = 0 + 1 * internal.default1 * internal.k6 * L_RF_C8 * FL + 1 * internal.default1 * internal.k5 * L_RF_FL * C8 - 1 * internal.default1 * internal.k13 * p43_FLIP * IKK;
    dstatedt[13] = 0 + 1 * internal.default1 * internal.k13 * p43_FLIP * IKK - 1 * internal.default1 * internal.k14 * NF_kB_IkB * p43_FLIP_IKK_star + 1 * internal.default1 * internal.k14 * NF_kB_IkB * p43_FLIP_IKK_star - 1 * internal.default1 * internal.k16 * p43_FLIP_IKK_star;
    dstatedt[5] = 0 + 1 * internal.default1 * internal.k5 * L_RF_C8 * C8 - 1 * internal.default1 * internal.k8 * p43_p41 * p43_p41 + 1 * internal.default1 * internal.k10 * C8 * C3_star;
    dstatedt[15] = 0 - 1 * internal.default1 * internal.k1 * L * RF;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "L", "L_RF", "L_RF_C8", "L_RF_FL", "L_RF_FS", "p43_p41", "C3", "C8", "C8_star", "C3_star", "p43_FLIP", "NF_kB_IkB", "NF_kB_IkB_P", "p43_FLIP_IKK_star", "NF_kB_star", "RF", "FL", "FS", "IKK", "L_RF_C8_FS", "L_RF_FL_FL", "L_RF_FL_FS", "L_RF_FS_FS"];
    this.metadata.internalOrder = {C3_init: null, C3_star_init: null, C8_init: null, C8_star_init: null, default1: null, FL_init: null, FS_init: null, IKK_init: null, initial_C3: null, initial_C3_star: null, initial_C8: null, initial_C8_star: null, initial_FL: null, initial_FS: null, initial_IKK: null, initial_L: null, initial_L_RF: null, initial_L_RF_C8: null, initial_L_RF_C8_FS: null, initial_L_RF_FL: null, initial_L_RF_FL_FL: null, initial_L_RF_FL_FS: null, initial_L_RF_FS: null, initial_L_RF_FS_FS: null, initial_NF_kB_IkB: null, initial_NF_kB_IkB_P: null, initial_NF_kB_star: null, initial_p43_FLIP: null, initial_p43_FLIP_IKK_star: null, initial_p43_p41: null, initial_RF: null, k1: null, k10: null, k11: null, k12: null, k13: null, k14: null, k15: null, k16: null, k17: null, k2: null, k3: null, k4: null, k5: null, k6: null, k7: null, k8: null, k9: null, L_init: null, L_RF_C8_FS_init: null, L_RF_C8_init: null, L_RF_FL_FL_init: null, L_RF_FL_FS_init: null, L_RF_FL_init: null, L_RF_FS_FS_init: null, L_RF_FS_init: null, L_RF_init: null, NF_kB_IkB_init: null, NF_kB_IkB_P_init: null, NF_kB_star_init: null, p43_FLIP_IKK_star_init: null, p43_FLIP_init: null, p43_p41_init: null, RF_init: null};
    this.metadata.variableOrder = {L: null, L_RF: null, L_RF_C8: null, L_RF_FL: null, L_RF_FS: null, p43_p41: null, C3: null, C8: null, C8_star: null, C3_star: null, p43_FLIP: null, NF_kB_IkB: null, NF_kB_IkB_P: null, p43_FLIP_IKK_star: null, NF_kB_star: null, RF: null, FL: null, FS: null, IKK: null, L_RF_C8_FS: null, L_RF_FL_FL: null, L_RF_FL_FS: null, L_RF_FS_FS: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
