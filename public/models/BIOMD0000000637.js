export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.k_Af_Gd = 1.6599999999999999 * 0.13;
    internal.PM = 3.9199999999999999;
    internal.k_Af_LRGd = internal.k_Af_Gd;
    internal.k_Af_RGd = internal.k_Af_Gd;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(12).fill(0);
    state[0] = internal.initial_R;
    state[1] = internal.initial_LR;
    state[2] = internal.initial_G;
    state[3] = internal.initial_Gt;
    state[4] = internal.initial_Gd;
    state[5] = internal.initial_RG;
    state[6] = internal.initial_Gbg;
    state[7] = internal.initial_LRG;
    state[8] = internal.initial_LRGt;
    state[9] = internal.initial_RGd;
    state[10] = internal.initial_RGt;
    state[11] = internal.initial_LRGd;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["eta", "Gbg_init", "Gd_init", "Gt_init", "Gtot", "K_d_Gd_Gbg", "K_d_L_R", "K_d_R_G", "k_Ef_Gd", "k_Ef_LRG", "k_Ef_RG", "k_Hf_Gt", "k_Hf_RGt", "k_off_L_R", "k_off_R_G", "L", "lambda", "lambda_d", "lambda_t", "LR_init", "LRG_init", "LRGd_init", "LRGt_init", "ModelValue_47", "RG_init", "RGd_init", "RGt_init", "rho", "Rtot"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "eta", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Gbg_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Gd_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Gt_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Gtot", internal, 2042, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_d_Gd_Gbg", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_d_L_R", internal, 5.5999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_d_R_G", internal, 36, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_Ef_Gd", internal, 0.00062, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_Ef_LRG", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_Ef_RG", internal, 0.00062, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_Hf_Gt", internal, 0.002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_Hf_RGt", internal, 0.11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_off_L_R", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_off_R_G", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_d", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_t", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "LR_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "LRG_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "LRGd_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "LRGt_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_47", internal, 0.00062, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RG_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RGd_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RGt_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rtot", internal, 3308, -Infinity, Infinity, false);
    internal.G_init = internal.Gtot / internal.PM;
    internal.initial_Gbg = internal.Gbg_init;
    internal.initial_Gd = internal.Gd_init;
    internal.initial_Gt = internal.Gt_init;
    internal.initial_LR = internal.LR_init;
    internal.initial_LRG = internal.LRG_init;
    internal.initial_LRGd = internal.LRGd_init;
    internal.initial_LRGt = internal.LRGt_init;
    internal.initial_RG = internal.RG_init;
    internal.initial_RGd = internal.RGd_init;
    internal.initial_RGt = internal.RGt_init;
    internal.k_Ar_Gd = internal.k_Af_Gd / 1.6599999999999999 * internal.K_d_Gd_Gbg;
    internal.k_Ef_G = internal.ModelValue_47;
    internal.k_Ef_LRGd = internal.k_Ef_LRG;
    internal.k_Ef_RGd = internal.k_Ef_RG;
    internal.k_Hf_LRGt = internal.k_Hf_RGt;
    internal.k_off_L_RG = internal.k_off_L_R;
    internal.k_off_L_RGd = internal.k_off_L_R;
    internal.k_off_L_RGt = internal.k_off_L_R;
    internal.k_off_LR_G = internal.k_off_R_G;
    internal.k_off_LR_Gd = internal.k_off_R_G;
    internal.k_off_LR_Gt = internal.k_off_R_G;
    internal.k_off_R_Gd = internal.k_off_R_G;
    internal.k_off_R_Gt = internal.k_off_R_G;
    internal.k_on_L_R = internal.L * (internal.k_off_L_R / internal.K_d_L_R);
    internal.k_on_R_G = internal.k_off_R_G / (internal.K_d_R_G / 1.6599999999999999);
    internal.R_init = internal.Rtot / internal.PM;
    internal.initial_G = internal.G_init;
    internal.initial_R = internal.R_init;
    internal.k_Ar_LRGd = internal.lambda * (internal.k_Af_LRGd / 1.6599999999999999) * internal.K_d_Gd_Gbg / (internal.lambda_d * internal.rho);
    internal.k_Ar_RGd = internal.k_Af_RGd / 1.6599999999999999 * internal.K_d_Gd_Gbg / internal.rho;
    internal.k_on_L_RG = internal.L * (internal.k_off_L_RG / (internal.lambda * internal.K_d_L_R));
    internal.k_on_L_RGd = internal.L * (internal.k_off_L_RGd / (internal.lambda_d * internal.K_d_L_R));
    internal.k_on_L_RGt = internal.L * (internal.k_off_L_RGt / (internal.lambda_t * internal.K_d_L_R));
    internal.k_on_LR_G = internal.k_off_LR_G / (internal.lambda * (internal.K_d_R_G / 1.6599999999999999));
    internal.k_on_LR_Gd = internal.k_off_LR_Gd / (internal.lambda_d * internal.rho * (internal.K_d_R_G / 1.6599999999999999));
    internal.k_on_LR_Gt = internal.k_off_LR_Gt / (internal.lambda_t * internal.eta * (internal.K_d_R_G / 1.6599999999999999));
    internal.k_on_R_Gd = internal.k_off_R_Gd / (internal.rho * (internal.K_d_R_G / 1.6599999999999999));
    internal.k_on_R_Gt = internal.k_off_R_Gt / (internal.eta * (internal.K_d_R_G / 1.6599999999999999));
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const R = state[0];
    const LR = state[1];
    const G = state[2];
    const Gt = state[3];
    const Gd = state[4];
    const RG = state[5];
    const Gbg = state[6];
    const LRG = state[7];
    const LRGt = state[8];
    const RGd = state[9];
    const RGt = state[10];
    const LRGd = state[11];
    dstatedt[2] = 0 - 1 * internal.PM * (internal.k_on_R_G * R * G - internal.k_off_R_G * RG) - 1 * internal.PM * (internal.k_on_LR_G * LR * G - internal.k_off_LR_G * LRG) - 1 * internal.PM * internal.k_Ef_G * G + 1 * internal.PM * (internal.k_Af_Gd * Gd * Gbg - internal.k_Ar_Gd * G);
    dstatedt[6] = 0 + 1 * internal.PM * internal.k_Ef_G * G - 1 * internal.PM * (internal.k_Af_Gd * Gd * Gbg - internal.k_Ar_Gd * G) + 1 * internal.PM * internal.k_Ef_RG * RG + 1 * internal.PM * internal.k_Ef_LRG * LRG - 1 * internal.PM * (internal.k_Af_RGd * RGd * Gbg - internal.k_Ar_RGd * RG) - 1 * internal.PM * (internal.k_Af_LRGd * LRGd * Gbg - internal.k_Ar_LRGd * LRG);
    dstatedt[4] = 0 - 1 * internal.PM * (internal.k_on_R_Gd * R * Gd - internal.k_off_R_Gd * RGd) - 1 * internal.PM * (internal.k_on_LR_Gd * LR * Gd - internal.k_off_LR_Gd * LRGd) + 1 * internal.PM * internal.k_Hf_Gt * Gt - 1 * internal.PM * (internal.k_Af_Gd * Gd * Gbg - internal.k_Ar_Gd * G) - 1 * internal.PM * internal.k_Ef_Gd * Gd;
    dstatedt[3] = 0 - 1 * internal.PM * (internal.k_on_R_Gt * R * Gt - internal.k_off_R_Gt * RGt) - 1 * internal.PM * (internal.k_on_LR_Gt * LR * Gt - internal.k_off_LR_Gt * LRGt) + 1 * internal.PM * internal.k_Ef_G * G - 1 * internal.PM * internal.k_Hf_Gt * Gt + 1 * internal.PM * internal.k_Ef_Gd * Gd;
    dstatedt[1] = 0 + 1 * internal.PM * (internal.k_on_L_R * R - internal.k_off_L_R * LR) - 1 * internal.PM * (internal.k_on_LR_G * LR * G - internal.k_off_LR_G * LRG) - 1 * internal.PM * (internal.k_on_LR_Gt * LR * Gt - internal.k_off_LR_Gt * LRGt) - 1 * internal.PM * (internal.k_on_LR_Gd * LR * Gd - internal.k_off_LR_Gd * LRGd);
    dstatedt[7] = 0 + 1 * internal.PM * (internal.k_on_LR_G * LR * G - internal.k_off_LR_G * LRG) + 1 * internal.PM * (internal.k_on_L_RG * RG - internal.k_off_L_RG * LRG) - 1 * internal.PM * internal.k_Ef_LRG * LRG + 1 * internal.PM * (internal.k_Af_LRGd * LRGd * Gbg - internal.k_Ar_LRGd * LRG);
    dstatedt[11] = 0 + 1 * internal.PM * (internal.k_on_LR_Gd * LR * Gd - internal.k_off_LR_Gd * LRGd) + 1 * internal.PM * internal.k_Hf_LRGt * LRGt - 1 * internal.PM * (internal.k_Af_LRGd * LRGd * Gbg - internal.k_Ar_LRGd * LRG) + 1 * internal.PM * (internal.k_on_L_RGd * RGd - internal.k_off_L_RGd * LRGd) - 1 * internal.PM * internal.k_Ef_LRGd * LRGd;
    dstatedt[8] = 0 + 1 * internal.PM * (internal.k_on_LR_Gt * LR * Gt - internal.k_off_LR_Gt * LRGt) + 1 * internal.PM * (internal.k_on_L_RGt * RGt - internal.k_off_L_RGt * LRGt) + 1 * internal.PM * internal.k_Ef_LRG * LRG - 1 * internal.PM * internal.k_Hf_LRGt * LRGt + 1 * internal.PM * internal.k_Ef_LRGd * LRGd;
    dstatedt[0] = 0 - 1 * internal.PM * (internal.k_on_R_G * R * G - internal.k_off_R_G * RG) - 1 * internal.PM * (internal.k_on_L_R * R - internal.k_off_L_R * LR) - 1 * internal.PM * (internal.k_on_R_Gt * R * Gt - internal.k_off_R_Gt * RGt) - 1 * internal.PM * (internal.k_on_R_Gd * R * Gd - internal.k_off_R_Gd * RGd);
    dstatedt[5] = 0 + 1 * internal.PM * (internal.k_on_R_G * R * G - internal.k_off_R_G * RG) - 1 * internal.PM * (internal.k_on_L_RG * RG - internal.k_off_L_RG * LRG) - 1 * internal.PM * internal.k_Ef_RG * RG + 1 * internal.PM * (internal.k_Af_RGd * RGd * Gbg - internal.k_Ar_RGd * RG);
    dstatedt[9] = 0 + 1 * internal.PM * (internal.k_on_R_Gd * R * Gd - internal.k_off_R_Gd * RGd) + 1 * internal.PM * internal.k_Hf_RGt * RGt - 1 * internal.PM * (internal.k_Af_RGd * RGd * Gbg - internal.k_Ar_RGd * RG) - 1 * internal.PM * (internal.k_on_L_RGd * RGd - internal.k_off_L_RGd * LRGd) - 1 * internal.PM * internal.k_Ef_RGd * RGd;
    dstatedt[10] = 0 + 1 * internal.PM * (internal.k_on_R_Gt * R * Gt - internal.k_off_R_Gt * RGt) - 1 * internal.PM * (internal.k_on_L_RGt * RGt - internal.k_off_L_RGt * LRGt) + 1 * internal.PM * internal.k_Ef_RG * RG - 1 * internal.PM * internal.k_Hf_RGt * RGt + 1 * internal.PM * internal.k_Ef_RGd * RGd;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "R", "LR", "G", "Gt", "Gd", "RG", "Gbg", "LRG", "LRGt", "RGd", "RGt", "LRGd"];
    this.metadata.internalOrder = {eta: null, G_init: null, Gbg_init: null, Gd_init: null, Gt_init: null, Gtot: null, initial_G: null, initial_Gbg: null, initial_Gd: null, initial_Gt: null, initial_LR: null, initial_LRG: null, initial_LRGd: null, initial_LRGt: null, initial_R: null, initial_RG: null, initial_RGd: null, initial_RGt: null, k_Af_Gd: null, k_Af_LRGd: null, k_Af_RGd: null, k_Ar_Gd: null, k_Ar_LRGd: null, k_Ar_RGd: null, K_d_Gd_Gbg: null, K_d_L_R: null, K_d_R_G: null, k_Ef_G: null, k_Ef_Gd: null, k_Ef_LRG: null, k_Ef_LRGd: null, k_Ef_RG: null, k_Ef_RGd: null, k_Hf_Gt: null, k_Hf_LRGt: null, k_Hf_RGt: null, k_off_L_R: null, k_off_L_RG: null, k_off_L_RGd: null, k_off_L_RGt: null, k_off_LR_G: null, k_off_LR_Gd: null, k_off_LR_Gt: null, k_off_R_G: null, k_off_R_Gd: null, k_off_R_Gt: null, k_on_L_R: null, k_on_L_RG: null, k_on_L_RGd: null, k_on_L_RGt: null, k_on_LR_G: null, k_on_LR_Gd: null, k_on_LR_Gt: null, k_on_R_G: null, k_on_R_Gd: null, k_on_R_Gt: null, L: null, lambda: null, lambda_d: null, lambda_t: null, LR_init: null, LRG_init: null, LRGd_init: null, LRGt_init: null, ModelValue_47: null, PM: null, R_init: null, RG_init: null, RGd_init: null, RGt_init: null, rho: null, Rtot: null};
    this.metadata.variableOrder = {R: null, LR: null, G: null, Gt: null, Gd: null, RG: null, Gbg: null, LRG: null, LRGt: null, RGd: null, RGt: null, LRGd: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
