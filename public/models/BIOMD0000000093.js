export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cytoplasm = 1;
    internal.nucleus = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(34).fill(0);
    state[0] = internal.initial_R;
    state[1] = internal.initial_JAK;
    state[2] = internal.initial_RJ;
    state[3] = internal.initial_IFNRJ;
    state[4] = internal.initial_IFNRJ2;
    state[5] = internal.initial_IFNRJ2_star;
    state[6] = internal.initial_STAT1c;
    state[7] = internal.initial_IFNRJ2_star_STAT1c;
    state[8] = internal.initial_STAT1c_star;
    state[9] = internal.initial_IFNRJ2_star_STAT1c_star;
    state[10] = internal.initial_STAT1c_star_STAT1c_star;
    state[11] = internal.initial_SHP2;
    state[12] = internal.initial_IFNRJ2_star_SHP2;
    state[13] = internal.initial_PPX;
    state[14] = internal.initial_STAT1c_star_PPX;
    state[15] = internal.initial_STAT1c_STAT1c_star;
    state[16] = internal.initial_STAT1n_star_STAT1n_star;
    state[17] = internal.initial_STAT1n_star;
    state[18] = internal.initial_PPN;
    state[19] = internal.initial_STAT1n_star_PPN;
    state[20] = internal.initial_STAT1n;
    state[21] = internal.initial_STAT1n_STAT1n_star;
    state[22] = internal.initial_mRNAn;
    state[23] = internal.initial_mRNAc;
    state[24] = internal.initial_SOCS1;
    state[25] = internal.initial_IFNRJ2_star_SOCS1;
    state[26] = internal.initial_IFNRJ2_star_SHP2_SOCS1_STAT1c;
    state[27] = internal.initial_STAT1c_star_STAT1c_star_PPX;
    state[28] = internal.initial_STAT1n_star_STAT1n_star_PPN;
    state[29] = internal.initial_IFNRJ2_star_SOCS1_STAT1c;
    state[30] = internal.initial_IFNRJ2_star_SHP2_STAT1c;
    state[31] = internal.initial_IFNRJ2_star_SHP2_SOCS1;
    state[32] = internal.initial_IFNR;
    state[33] = internal.initial_IFN;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["IFN_init", "IFNR_init", "IFNRJ_init", "IFNRJ2_init", "IFNRJ2_star_init", "IFNRJ2_star_SHP2_init", "IFNRJ2_star_SHP2_SOCS1_init", "IFNRJ2_star_SHP2_SOCS1_STAT1c_init", "IFNRJ2_star_SHP2_STAT1c_init", "IFNRJ2_star_SOCS1_init", "IFNRJ2_star_SOCS1_STAT1c_init", "IFNRJ2_star_STAT1c_init", "IFNRJ2_star_STAT1c_star_init", "JAK_init", "ka", "kb", "kf", "mRNAc_init", "mRNAn_init", "PPN_init", "PPX_init", "R_init", "RJ_init", "SHP2_init", "SOCS1_init", "STAT1c_init", "STAT1c_star_init", "STAT1c_star_PPX_init", "STAT1c_star_STAT1c_star_init", "STAT1c_star_STAT1c_star_PPX_init", "STAT1c_STAT1c_star_init", "STAT1n_init", "STAT1n_star_init", "STAT1n_star_PPN_init", "STAT1n_star_STAT1n_star_init", "STAT1n_star_STAT1n_star_PPN_init", "STAT1n_STAT1n_star_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "IFN_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IFNR_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IFNRJ_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IFNRJ2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IFNRJ2_star_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IFNRJ2_star_SHP2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IFNRJ2_star_SHP2_SOCS1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IFNRJ2_star_SHP2_SOCS1_STAT1c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IFNRJ2_star_SHP2_STAT1c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IFNRJ2_star_SOCS1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IFNRJ2_star_SOCS1_STAT1c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IFNRJ2_star_STAT1c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IFNRJ2_star_STAT1c_star_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "JAK_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ka", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kb", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mRNAc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mRNAn_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PPN_init", internal, 60, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PPX_init", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RJ_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SHP2_init", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SOCS1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "STAT1c_init", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "STAT1c_star_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "STAT1c_star_PPX_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "STAT1c_star_STAT1c_star_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "STAT1c_star_STAT1c_star_PPX_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "STAT1c_STAT1c_star_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "STAT1n_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "STAT1n_star_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "STAT1n_star_PPN_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "STAT1n_star_STAT1n_star_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "STAT1n_star_STAT1n_star_PPN_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "STAT1n_STAT1n_star_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_IFN = internal.IFN_init;
    internal.initial_IFNR = internal.IFNR_init;
    internal.initial_IFNRJ = internal.IFNRJ_init;
    internal.initial_IFNRJ2 = internal.IFNRJ2_init;
    internal.initial_IFNRJ2_star = internal.IFNRJ2_star_init;
    internal.initial_IFNRJ2_star_SHP2 = internal.IFNRJ2_star_SHP2_init;
    internal.initial_IFNRJ2_star_SHP2_SOCS1 = internal.IFNRJ2_star_SHP2_SOCS1_init;
    internal.initial_IFNRJ2_star_SHP2_SOCS1_STAT1c = internal.IFNRJ2_star_SHP2_SOCS1_STAT1c_init;
    internal.initial_IFNRJ2_star_SHP2_STAT1c = internal.IFNRJ2_star_SHP2_STAT1c_init;
    internal.initial_IFNRJ2_star_SOCS1 = internal.IFNRJ2_star_SOCS1_init;
    internal.initial_IFNRJ2_star_SOCS1_STAT1c = internal.IFNRJ2_star_SOCS1_STAT1c_init;
    internal.initial_IFNRJ2_star_STAT1c = internal.IFNRJ2_star_STAT1c_init;
    internal.initial_IFNRJ2_star_STAT1c_star = internal.IFNRJ2_star_STAT1c_star_init;
    internal.initial_JAK = internal.JAK_init;
    internal.initial_mRNAc = internal.mRNAc_init;
    internal.initial_mRNAn = internal.mRNAn_init;
    internal.initial_PPN = internal.PPN_init;
    internal.initial_PPX = internal.PPX_init;
    internal.initial_R = internal.R_init;
    internal.initial_RJ = internal.RJ_init;
    internal.initial_SHP2 = internal.SHP2_init;
    internal.initial_SOCS1 = internal.SOCS1_init;
    internal.initial_STAT1c = internal.STAT1c_init;
    internal.initial_STAT1c_star = internal.STAT1c_star_init;
    internal.initial_STAT1c_star_PPX = internal.STAT1c_star_PPX_init;
    internal.initial_STAT1c_star_STAT1c_star = internal.STAT1c_star_STAT1c_star_init;
    internal.initial_STAT1c_star_STAT1c_star_PPX = internal.STAT1c_star_STAT1c_star_PPX_init;
    internal.initial_STAT1c_STAT1c_star = internal.STAT1c_STAT1c_star_init;
    internal.initial_STAT1n = internal.STAT1n_init;
    internal.initial_STAT1n_star = internal.STAT1n_star_init;
    internal.initial_STAT1n_star_PPN = internal.STAT1n_star_PPN_init;
    internal.initial_STAT1n_star_STAT1n_star = internal.STAT1n_star_STAT1n_star_init;
    internal.initial_STAT1n_star_STAT1n_star_PPN = internal.STAT1n_star_STAT1n_star_PPN_init;
    internal.initial_STAT1n_STAT1n_star = internal.STAT1n_STAT1n_star_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const R = state[0];
    const JAK = state[1];
    const RJ = state[2];
    const IFNRJ = state[3];
    const IFNRJ2 = state[4];
    const IFNRJ2_star = state[5];
    const STAT1c = state[6];
    const IFNRJ2_star_STAT1c = state[7];
    const STAT1c_star = state[8];
    const IFNRJ2_star_STAT1c_star = state[9];
    const STAT1c_star_STAT1c_star = state[10];
    const SHP2 = state[11];
    const IFNRJ2_star_SHP2 = state[12];
    const PPX = state[13];
    const STAT1c_star_PPX = state[14];
    const STAT1c_STAT1c_star = state[15];
    const STAT1n_star_STAT1n_star = state[16];
    const STAT1n_star = state[17];
    const PPN = state[18];
    const STAT1n_star_PPN = state[19];
    const STAT1n = state[20];
    const STAT1n_STAT1n_star = state[21];
    const mRNAn = state[22];
    const mRNAc = state[23];
    const SOCS1 = state[24];
    const IFNRJ2_star_SOCS1 = state[25];
    const IFNRJ2_star_SHP2_SOCS1_STAT1c = state[26];
    const STAT1c_star_STAT1c_star_PPX = state[27];
    const STAT1n_star_STAT1n_star_PPN = state[28];
    const IFNRJ2_star_SOCS1_STAT1c = state[29];
    const IFNRJ2_star_SHP2_STAT1c = state[30];
    const IFNRJ2_star_SHP2_SOCS1 = state[31];
    const IFNR = state[32];
    const IFN = state[33];
    dstatedt[33] = 0;
    dstatedt[32] = 0 + 1 * internal.cytoplasm * (internal.kf * IFN * R - internal.kb * IFNR) - 1 * internal.cytoplasm * (internal.kf * IFNR * JAK - internal.kb * IFNRJ);
    dstatedt[3] = 0 + 1 * internal.cytoplasm * (internal.kf * IFN * RJ - internal.kb * IFNRJ) - 2 * internal.cytoplasm * (internal.kf * IFNRJ * IFNRJ - internal.kb * IFNRJ2) + 1 * internal.cytoplasm * (internal.kf * IFNR * JAK - internal.kb * IFNRJ);
    dstatedt[4] = 0 + 1 * internal.cytoplasm * (internal.kf * IFNRJ * IFNRJ - internal.kb * IFNRJ2) - 1 * internal.cytoplasm * internal.kf * IFNRJ2 + 1 * internal.cytoplasm * internal.kf * IFNRJ2_star_SHP2 + 1 * internal.cytoplasm * internal.kf * IFNRJ2_star_SHP2_SOCS1_STAT1c + 1 * internal.cytoplasm * internal.kf * IFNRJ2_star_SHP2_STAT1c + 1 * internal.cytoplasm * internal.kf * IFNRJ2_star_SHP2_SOCS1;
    dstatedt[5] = 0 + 1 * internal.cytoplasm * internal.kf * IFNRJ2 - 1 * internal.cytoplasm * (internal.kf * STAT1c * IFNRJ2_star - internal.kb * IFNRJ2_star_STAT1c) + 1 * internal.cytoplasm * internal.kf * IFNRJ2_star_STAT1c - 1 * internal.cytoplasm * (internal.kf * IFNRJ2_star * STAT1c_star - internal.kb * IFNRJ2_star_STAT1c_star) - 1 * internal.cytoplasm * (internal.kf * IFNRJ2_star * SHP2 - internal.kb * IFNRJ2_star_SHP2) - 1 * internal.cytoplasm * (internal.kf * SOCS1 * IFNRJ2_star - internal.kb * IFNRJ2_star_SOCS1) + 1 * internal.cytoplasm * internal.kf * IFNRJ2_star_SOCS1;
    dstatedt[12] = 0 + 1 * internal.cytoplasm * (internal.kf * IFNRJ2_star * SHP2 - internal.kb * IFNRJ2_star_SHP2) - 1 * internal.cytoplasm * internal.kf * IFNRJ2_star_SHP2 + 1 * internal.cytoplasm * internal.kf * IFNRJ2_star_SHP2_SOCS1 - 1 * internal.cytoplasm * (internal.kf * SOCS1 * IFNRJ2_star_SHP2 - internal.kb * IFNRJ2_star_SHP2_SOCS1);
    dstatedt[31] = 0 + 1 * internal.cytoplasm * (internal.kf * SHP2 * IFNRJ2_star_SOCS1 - internal.kb * IFNRJ2_star_SHP2_SOCS1) - 1 * internal.cytoplasm * (internal.kf * STAT1c * IFNRJ2_star_SHP2_SOCS1 - internal.kb * IFNRJ2_star_SHP2_SOCS1_STAT1c) - 1 * internal.cytoplasm * internal.kf * IFNRJ2_star_SHP2_SOCS1 - 1 * internal.cytoplasm * internal.kf * IFNRJ2_star_SHP2_SOCS1 + 1 * internal.cytoplasm * (internal.kf * SOCS1 * IFNRJ2_star_SHP2 - internal.kb * IFNRJ2_star_SHP2_SOCS1);
    dstatedt[26] = 0 + 1 * internal.cytoplasm * (internal.kf * SHP2 * IFNRJ2_star_SOCS1_STAT1c - internal.kb * IFNRJ2_star_SHP2_SOCS1_STAT1c) - 1 * internal.cytoplasm * internal.kf * IFNRJ2_star_SHP2_SOCS1_STAT1c - 1 * internal.cytoplasm * internal.kf * IFNRJ2_star_SHP2_SOCS1_STAT1c + 1 * internal.cytoplasm * (internal.kf * STAT1c * IFNRJ2_star_SHP2_SOCS1 - internal.kb * IFNRJ2_star_SHP2_SOCS1_STAT1c) + 1 * internal.cytoplasm * (internal.kf * SOCS1 * IFNRJ2_star_SHP2_STAT1c - internal.kb * IFNRJ2_star_SHP2_SOCS1_STAT1c);
    dstatedt[30] = 0 + 1 * internal.cytoplasm * internal.kf * IFNRJ2_star_SHP2_SOCS1_STAT1c + 1 * internal.cytoplasm * (internal.kf * SHP2 * IFNRJ2_star_STAT1c - internal.kb * IFNRJ2_star_SHP2_STAT1c) - 1 * internal.cytoplasm * internal.kf * IFNRJ2_star_SHP2_STAT1c - 1 * internal.cytoplasm * (internal.kf * SOCS1 * IFNRJ2_star_SHP2_STAT1c - internal.kb * IFNRJ2_star_SHP2_SOCS1_STAT1c);
    dstatedt[25] = 0 + 1 * internal.cytoplasm * (internal.kf * SOCS1 * IFNRJ2_star - internal.kb * IFNRJ2_star_SOCS1) - 1 * internal.cytoplasm * (internal.kf * STAT1c * IFNRJ2_star_SOCS1 - internal.kb * IFNRJ2_star_SOCS1_STAT1c) - 1 * internal.cytoplasm * (internal.kf * SHP2 * IFNRJ2_star_SOCS1 - internal.kb * IFNRJ2_star_SHP2_SOCS1) - 1 * internal.cytoplasm * internal.kf * IFNRJ2_star_SOCS1;
    dstatedt[29] = 0 + 1 * internal.cytoplasm * (internal.kf * STAT1c * IFNRJ2_star_SOCS1 - internal.kb * IFNRJ2_star_SOCS1_STAT1c) - 1 * internal.cytoplasm * (internal.kf * SHP2 * IFNRJ2_star_SOCS1_STAT1c - internal.kb * IFNRJ2_star_SHP2_SOCS1_STAT1c) - 1 * internal.cytoplasm * internal.kf * IFNRJ2_star_SOCS1_STAT1c + 1 * internal.cytoplasm * (internal.kf * SOCS1 * IFNRJ2_star_STAT1c - internal.kb * IFNRJ2_star_SOCS1_STAT1c);
    dstatedt[7] = 0 + 1 * internal.cytoplasm * (internal.kf * STAT1c * IFNRJ2_star - internal.kb * IFNRJ2_star_STAT1c) - 1 * internal.cytoplasm * internal.kf * IFNRJ2_star_STAT1c - 1 * internal.cytoplasm * (internal.kf * SHP2 * IFNRJ2_star_STAT1c - internal.kb * IFNRJ2_star_SHP2_STAT1c) + 1 * internal.cytoplasm * internal.kf * IFNRJ2_star_SOCS1_STAT1c - 1 * internal.cytoplasm * (internal.kf * SOCS1 * IFNRJ2_star_STAT1c - internal.kb * IFNRJ2_star_SOCS1_STAT1c);
    dstatedt[9] = 0 + 1 * internal.cytoplasm * (internal.kf * IFNRJ2_star * STAT1c_star - internal.kb * IFNRJ2_star_STAT1c_star);
    dstatedt[1] = 0 - 1 * internal.cytoplasm * (internal.kf * R * JAK - internal.kb * RJ) - 1 * internal.cytoplasm * (internal.kf * IFNR * JAK - internal.kb * IFNRJ);
    dstatedt[23] = 0 + 1 * internal.nucleus * internal.kf * mRNAn - 1 * internal.cytoplasm * internal.kf * mRNAc;
    dstatedt[22] = 0 + 1 * internal.nucleus * internal.ka * STAT1n_star_STAT1n_star / (internal.kb + STAT1n_star_STAT1n_star) - 1 * internal.nucleus * internal.kf * mRNAn;
    dstatedt[18] = 0 - 1 * internal.nucleus * (internal.kf * PPN * STAT1n_star - internal.kb * STAT1n_star_PPN) + 1 * internal.nucleus * internal.kf * STAT1n_star_PPN - 1 * internal.nucleus * (internal.kf * PPN * STAT1n_star_STAT1n_star - internal.kb * STAT1n_star_STAT1n_star_PPN) + 1 * internal.nucleus * internal.kf * STAT1n_star_STAT1n_star_PPN;
    dstatedt[13] = 0 - 1 * internal.cytoplasm * (internal.kf * PPX * STAT1c_star - internal.kb * STAT1c_star_PPX) + 1 * internal.cytoplasm * internal.kf * STAT1c_star_PPX - 1 * internal.cytoplasm * (internal.kf * PPX * STAT1c_star_STAT1c_star - internal.kb * STAT1c_star_STAT1c_star_PPX) + 1 * internal.cytoplasm * internal.kf * STAT1c_star_STAT1c_star_PPX;
    dstatedt[0] = 0 - 1 * internal.cytoplasm * (internal.kf * R * JAK - internal.kb * RJ) - 1 * internal.cytoplasm * (internal.kf * IFN * R - internal.kb * IFNR);
    dstatedt[2] = 0 + 1 * internal.cytoplasm * (internal.kf * R * JAK - internal.kb * RJ) - 1 * internal.cytoplasm * (internal.kf * IFN * RJ - internal.kb * IFNRJ);
    dstatedt[11] = 0 - 1 * internal.cytoplasm * (internal.kf * IFNRJ2_star * SHP2 - internal.kb * IFNRJ2_star_SHP2) + 1 * internal.cytoplasm * internal.kf * IFNRJ2_star_SHP2 - 1 * internal.cytoplasm * (internal.kf * SHP2 * IFNRJ2_star_SOCS1_STAT1c - internal.kb * IFNRJ2_star_SHP2_SOCS1_STAT1c) + 1 * internal.cytoplasm * internal.kf * IFNRJ2_star_SHP2_SOCS1_STAT1c - 1 * internal.cytoplasm * (internal.kf * SHP2 * IFNRJ2_star_SOCS1 - internal.kb * IFNRJ2_star_SHP2_SOCS1) - 1 * internal.cytoplasm * (internal.kf * SHP2 * IFNRJ2_star_STAT1c - internal.kb * IFNRJ2_star_SHP2_STAT1c) + 1 * internal.cytoplasm * internal.kf * IFNRJ2_star_SHP2_STAT1c + 1 * internal.cytoplasm * internal.kf * IFNRJ2_star_SHP2_SOCS1;
    dstatedt[24] = 0 + 1 * internal.cytoplasm * internal.kf * mRNAc - 1 * internal.cytoplasm * internal.kf * SOCS1 - 1 * internal.cytoplasm * (internal.kf * SOCS1 * IFNRJ2_star - internal.kb * IFNRJ2_star_SOCS1) + 1 * internal.cytoplasm * internal.kf * IFNRJ2_star_SHP2_SOCS1_STAT1c + 1 * internal.cytoplasm * internal.kf * IFNRJ2_star_SHP2_SOCS1 - 1 * internal.cytoplasm * (internal.kf * SOCS1 * IFNRJ2_star_STAT1c - internal.kb * IFNRJ2_star_SOCS1_STAT1c) - 1 * internal.cytoplasm * (internal.kf * SOCS1 * IFNRJ2_star_SHP2 - internal.kb * IFNRJ2_star_SHP2_SOCS1) - 1 * internal.cytoplasm * (internal.kf * SOCS1 * IFNRJ2_star_SHP2_STAT1c - internal.kb * IFNRJ2_star_SHP2_SOCS1_STAT1c);
    dstatedt[6] = 0 - 1 * internal.cytoplasm * (internal.kf * STAT1c * IFNRJ2_star - internal.kb * IFNRJ2_star_STAT1c) + 1 * internal.cytoplasm * internal.kf * STAT1c_star_PPX - 1 * internal.cytoplasm * (internal.kf * STAT1c * STAT1c_star - internal.kb * STAT1c_STAT1c_star) + 1 * internal.nucleus * internal.kf * STAT1n - 1 * internal.cytoplasm * (internal.kf * STAT1c * IFNRJ2_star_SOCS1 - internal.kb * IFNRJ2_star_SOCS1_STAT1c) + 1 * internal.cytoplasm * internal.kf * IFNRJ2_star_SHP2_SOCS1_STAT1c - 1 * internal.cytoplasm * (internal.kf * STAT1c * IFNRJ2_star_SHP2_SOCS1 - internal.kb * IFNRJ2_star_SHP2_SOCS1_STAT1c) + 1 * internal.cytoplasm * internal.kf * IFNRJ2_star_SHP2_STAT1c;
    dstatedt[8] = 0 + 1 * internal.cytoplasm * internal.kf * IFNRJ2_star_STAT1c - 1 * internal.cytoplasm * (internal.kf * IFNRJ2_star * STAT1c_star - internal.kb * IFNRJ2_star_STAT1c_star) - 2 * internal.cytoplasm * (internal.kf * STAT1c_star * STAT1c_star - internal.kb * STAT1c_star_STAT1c_star) - 1 * internal.cytoplasm * (internal.kf * PPX * STAT1c_star - internal.kb * STAT1c_star_PPX) - 1 * internal.cytoplasm * (internal.kf * STAT1c * STAT1c_star - internal.kb * STAT1c_STAT1c_star);
    dstatedt[14] = 0 + 1 * internal.cytoplasm * (internal.kf * PPX * STAT1c_star - internal.kb * STAT1c_star_PPX) - 1 * internal.cytoplasm * internal.kf * STAT1c_star_PPX;
    dstatedt[10] = 0 + 1 * internal.cytoplasm * (internal.kf * STAT1c_star * STAT1c_star - internal.kb * STAT1c_star_STAT1c_star) - 1 * internal.cytoplasm * (internal.kf * PPX * STAT1c_star_STAT1c_star - internal.kb * STAT1c_star_STAT1c_star_PPX) - 1 * internal.cytoplasm * internal.kf * STAT1c_star_STAT1c_star;
    dstatedt[27] = 0 + 1 * internal.cytoplasm * (internal.kf * PPX * STAT1c_star_STAT1c_star - internal.kb * STAT1c_star_STAT1c_star_PPX) - 1 * internal.cytoplasm * internal.kf * STAT1c_star_STAT1c_star_PPX;
    dstatedt[15] = 0 + 1 * internal.cytoplasm * internal.kf * STAT1c_star_STAT1c_star_PPX + 1 * internal.cytoplasm * (internal.kf * STAT1c * STAT1c_star - internal.kb * STAT1c_STAT1c_star);
    dstatedt[20] = 0 + 1 * internal.nucleus * internal.kf * STAT1n_star_PPN - 1 * internal.nucleus * (internal.kf * STAT1n * STAT1n_star - internal.kb * STAT1n_STAT1n_star) - 1 * internal.nucleus * internal.kf * STAT1n;
    dstatedt[17] = 0 - 2 * internal.nucleus * (internal.kf * STAT1n_star * STAT1n_star - internal.kb * STAT1n_star_STAT1n_star) - 1 * internal.nucleus * (internal.kf * PPN * STAT1n_star - internal.kb * STAT1n_star_PPN) - 1 * internal.nucleus * (internal.kf * STAT1n * STAT1n_star - internal.kb * STAT1n_STAT1n_star);
    dstatedt[19] = 0 + 1 * internal.nucleus * (internal.kf * PPN * STAT1n_star - internal.kb * STAT1n_star_PPN) - 1 * internal.nucleus * internal.kf * STAT1n_star_PPN;
    dstatedt[16] = 0 + 1 * internal.cytoplasm * internal.kf * STAT1c_star_STAT1c_star + 1 * internal.nucleus * (internal.kf * STAT1n_star * STAT1n_star - internal.kb * STAT1n_star_STAT1n_star) - 1 * internal.nucleus * (internal.kf * PPN * STAT1n_star_STAT1n_star - internal.kb * STAT1n_star_STAT1n_star_PPN);
    dstatedt[28] = 0 + 1 * internal.nucleus * (internal.kf * PPN * STAT1n_star_STAT1n_star - internal.kb * STAT1n_star_STAT1n_star_PPN) - 1 * internal.nucleus * internal.kf * STAT1n_star_STAT1n_star_PPN;
    dstatedt[21] = 0 + 1 * internal.nucleus * internal.kf * STAT1n_star_STAT1n_star_PPN + 1 * internal.nucleus * (internal.kf * STAT1n * STAT1n_star - internal.kb * STAT1n_STAT1n_star);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "R", "JAK", "RJ", "IFNRJ", "IFNRJ2", "IFNRJ2_star", "STAT1c", "IFNRJ2_star_STAT1c", "STAT1c_star", "IFNRJ2_star_STAT1c_star", "STAT1c_star_STAT1c_star", "SHP2", "IFNRJ2_star_SHP2", "PPX", "STAT1c_star_PPX", "STAT1c_STAT1c_star", "STAT1n_star_STAT1n_star", "STAT1n_star", "PPN", "STAT1n_star_PPN", "STAT1n", "STAT1n_STAT1n_star", "mRNAn", "mRNAc", "SOCS1", "IFNRJ2_star_SOCS1", "IFNRJ2_star_SHP2_SOCS1_STAT1c", "STAT1c_star_STAT1c_star_PPX", "STAT1n_star_STAT1n_star_PPN", "IFNRJ2_star_SOCS1_STAT1c", "IFNRJ2_star_SHP2_STAT1c", "IFNRJ2_star_SHP2_SOCS1", "IFNR", "IFN"];
    this.metadata.internalOrder = {cytoplasm: null, IFN_init: null, IFNR_init: null, IFNRJ_init: null, IFNRJ2_init: null, IFNRJ2_star_init: null, IFNRJ2_star_SHP2_init: null, IFNRJ2_star_SHP2_SOCS1_init: null, IFNRJ2_star_SHP2_SOCS1_STAT1c_init: null, IFNRJ2_star_SHP2_STAT1c_init: null, IFNRJ2_star_SOCS1_init: null, IFNRJ2_star_SOCS1_STAT1c_init: null, IFNRJ2_star_STAT1c_init: null, IFNRJ2_star_STAT1c_star_init: null, initial_IFN: null, initial_IFNR: null, initial_IFNRJ: null, initial_IFNRJ2: null, initial_IFNRJ2_star: null, initial_IFNRJ2_star_SHP2: null, initial_IFNRJ2_star_SHP2_SOCS1: null, initial_IFNRJ2_star_SHP2_SOCS1_STAT1c: null, initial_IFNRJ2_star_SHP2_STAT1c: null, initial_IFNRJ2_star_SOCS1: null, initial_IFNRJ2_star_SOCS1_STAT1c: null, initial_IFNRJ2_star_STAT1c: null, initial_IFNRJ2_star_STAT1c_star: null, initial_JAK: null, initial_mRNAc: null, initial_mRNAn: null, initial_PPN: null, initial_PPX: null, initial_R: null, initial_RJ: null, initial_SHP2: null, initial_SOCS1: null, initial_STAT1c: null, initial_STAT1c_star: null, initial_STAT1c_star_PPX: null, initial_STAT1c_star_STAT1c_star: null, initial_STAT1c_star_STAT1c_star_PPX: null, initial_STAT1c_STAT1c_star: null, initial_STAT1n: null, initial_STAT1n_star: null, initial_STAT1n_star_PPN: null, initial_STAT1n_star_STAT1n_star: null, initial_STAT1n_star_STAT1n_star_PPN: null, initial_STAT1n_STAT1n_star: null, JAK_init: null, ka: null, kb: null, kf: null, mRNAc_init: null, mRNAn_init: null, nucleus: null, PPN_init: null, PPX_init: null, R_init: null, RJ_init: null, SHP2_init: null, SOCS1_init: null, STAT1c_init: null, STAT1c_star_init: null, STAT1c_star_PPX_init: null, STAT1c_star_STAT1c_star_init: null, STAT1c_star_STAT1c_star_PPX_init: null, STAT1c_STAT1c_star_init: null, STAT1n_init: null, STAT1n_star_init: null, STAT1n_star_PPN_init: null, STAT1n_star_STAT1n_star_init: null, STAT1n_star_STAT1n_star_PPN_init: null, STAT1n_STAT1n_star_init: null};
    this.metadata.variableOrder = {R: null, JAK: null, RJ: null, IFNRJ: null, IFNRJ2: null, IFNRJ2_star: null, STAT1c: null, IFNRJ2_star_STAT1c: null, STAT1c_star: null, IFNRJ2_star_STAT1c_star: null, STAT1c_star_STAT1c_star: null, SHP2: null, IFNRJ2_star_SHP2: null, PPX: null, STAT1c_star_PPX: null, STAT1c_STAT1c_star: null, STAT1n_star_STAT1n_star: null, STAT1n_star: null, PPN: null, STAT1n_star_PPN: null, STAT1n: null, STAT1n_STAT1n_star: null, mRNAn: null, mRNAc: null, SOCS1: null, IFNRJ2_star_SOCS1: null, IFNRJ2_star_SHP2_SOCS1_STAT1c: null, STAT1c_star_STAT1c_star_PPX: null, STAT1n_star_STAT1n_star_PPN: null, IFNRJ2_star_SOCS1_STAT1c: null, IFNRJ2_star_SHP2_STAT1c: null, IFNRJ2_star_SHP2_SOCS1: null, IFNR: null, IFN: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
