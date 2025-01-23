export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.univ = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(6).fill(0);
    state[0] = internal.initial_AprE;
    state[1] = internal.initial_DegU;
    state[2] = internal.initial_DegUP;
    state[3] = internal.initial_Dim;
    state[4] = internal.initial_mAprE;
    state[5] = internal.initial_mDegU;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["AprE_init", "DegU_init", "DegUP_init", "Dim_init", "Imax", "Io", "Irmax", "Iro", "K", "ka", "kd", "kdeg", "kdegA", "kdegm", "Kdim", "Kr", "Kr1", "ksyn", "ksyn1", "mAprE_init", "mDegU_init", "p", "q", "R", "ratio", "V"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "AprE_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DegU_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DegUP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Dim_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Imax", internal, 0.048000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Io", internal, 0.0040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Irmax", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Iro", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K", internal, 7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ka", internal, 0.025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdeg", internal, 0.00040000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdegA", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdegm", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kdim", internal, 12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kr", internal, 7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kr1", internal, 7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ksyn", internal, 0.040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ksyn1", internal, 0.040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mAprE_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mDegU_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p", internal, 0.14999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q", internal, 0.0040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R", internal, 7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ratio", internal, 0.026666667000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V", internal, 1, -Infinity, Infinity, false);
    internal.initial_AprE = internal.AprE_init;
    internal.initial_DegU = internal.DegU_init;
    internal.initial_DegUP = internal.DegUP_init;
    internal.initial_Dim = internal.Dim_init;
    internal.initial_mAprE = internal.mAprE_init;
    internal.initial_mDegU = internal.mDegU_init;
    internal.kdephos = internal.q / internal.ratio;
    internal.kphos = internal.ratio * internal.p;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const AprE = state[0];
    const DegU = state[1];
    const DegUP = state[2];
    const Dim = state[3];
    const mAprE = state[4];
    const mDegU = state[5];
    dstatedt[0] = 0 - 1 * internal.kdeg * AprE + 1 * internal.ksyn * mAprE * internal.univ;
    dstatedt[3] = 0 + 1 * internal.ka * Math.pow((DegUP), (2)) - 1 * internal.kd * Dim - 1 * internal.kdeg * Dim * internal.univ;
    dstatedt[4] = 0 - 1 * internal.kdegm * mAprE + 1 * internal.Kr1 / (internal.R + internal.Kr1) * (internal.Iro * (Dim * internal.univ / internal.Kdim + 1) / (1 + Dim * internal.univ / internal.Kdim + Math.pow((Dim * internal.univ), (2)) / Math.pow((internal.Kdim), (2)) + internal.R / internal.Kr) + internal.Irmax * Math.pow((Dim * internal.univ), (2)) / (Math.pow((internal.Kdim), (2)) * (1 + Dim * internal.univ / internal.Kdim + Math.pow((Dim * internal.univ), (2)) / Math.pow((internal.Kdim), (2)) + internal.R / internal.Kr)));
    dstatedt[5] = 0 - 1 * internal.kdegm * mDegU + 1 * internal.Io * internal.K / (Dim * internal.univ + internal.K) + internal.Imax * Dim * internal.univ / (Dim * internal.univ + internal.K);
    dstatedt[1] = 0 - 1 * internal.kdeg * DegU * internal.univ + 1 * internal.kdephos * DegUP - 1 * internal.kphos * DegU + 1 * internal.ksyn1 * mDegU * internal.univ;
    dstatedt[2] = 0 - 2 * internal.ka * Math.pow((DegUP), (2)) + 2 * internal.kd * Dim - 1 * internal.kdeg * DegUP * internal.univ - 1 * internal.kdephos * DegUP + 1 * internal.kphos * DegU;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "AprE", "DegU", "DegUP", "Dim", "mAprE", "mDegU"];
    this.metadata.internalOrder = {AprE_init: null, DegU_init: null, DegUP_init: null, Dim_init: null, Imax: null, initial_AprE: null, initial_DegU: null, initial_DegUP: null, initial_Dim: null, initial_mAprE: null, initial_mDegU: null, Io: null, Irmax: null, Iro: null, K: null, ka: null, kd: null, kdeg: null, kdegA: null, kdegm: null, kdephos: null, Kdim: null, kphos: null, Kr: null, Kr1: null, ksyn: null, ksyn1: null, mAprE_init: null, mDegU_init: null, p: null, q: null, R: null, ratio: null, univ: null, V: null};
    this.metadata.variableOrder = {AprE: null, DegU: null, DegUP: null, Dim: null, mAprE: null, mDegU: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
