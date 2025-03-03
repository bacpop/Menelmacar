export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.uVol = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(8).fill(0);
    state[0] = internal.initial_MKKK;
    state[1] = internal.initial_MKKK_P;
    state[2] = internal.initial_MKK;
    state[3] = internal.initial_MKK_P;
    state[4] = internal.initial_MKK_PP;
    state[5] = internal.initial_MAPK;
    state[6] = internal.initial_MAPK_P;
    state[7] = internal.initial_MAPK_PP;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["K1", "k3", "k4", "k7", "k8", "Ki", "KK10", "KK2", "KK3", "KK4", "KK5", "KK6", "KK7", "KK8", "KK9", "MAPK_init", "MAPK_P_init", "MAPK_PP_init", "MKK_init", "MKK_P_init", "MKK_PP_init", "MKKK_init", "MKKK_P_init", "n", "V1", "V10", "V2", "V5", "V6", "V9"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "K1", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0.025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 0.025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 0.025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ki", internal, 9, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KK10", internal, 15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KK2", internal, 8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KK3", internal, 15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KK4", internal, 15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KK5", internal, 15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KK6", internal, 15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KK7", internal, 15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KK8", internal, 15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KK9", internal, 15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MAPK_init", internal, 280, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MAPK_P_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MAPK_PP_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MKK_init", internal, 280, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MKK_P_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MKK_PP_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MKKK_init", internal, 90, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MKKK_P_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V1", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V10", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V2", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V5", internal, 0.75, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V6", internal, 0.75, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V9", internal, 0.5, -Infinity, Infinity, false);
    internal.initial_MAPK = internal.MAPK_init;
    internal.initial_MAPK_P = internal.MAPK_P_init;
    internal.initial_MAPK_PP = internal.MAPK_PP_init;
    internal.initial_MKK = internal.MKK_init;
    internal.initial_MKK_P = internal.MKK_P_init;
    internal.initial_MKK_PP = internal.MKK_PP_init;
    internal.initial_MKKK = internal.MKKK_init;
    internal.initial_MKKK_P = internal.MKKK_P_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const MKKK = state[0];
    const MKKK_P = state[1];
    const MKK = state[2];
    const MKK_P = state[3];
    const MKK_PP = state[4];
    const MAPK = state[5];
    const MAPK_P = state[6];
    const MAPK_PP = state[7];
    dstatedt[5] = 0 - 1 * internal.uVol * internal.k7 * MKK_PP * MAPK / (internal.KK7 + MAPK) + 1 * internal.uVol * internal.V10 * MAPK_P / (internal.KK10 + MAPK_P);
    dstatedt[6] = 0 + 1 * internal.uVol * internal.k7 * MKK_PP * MAPK / (internal.KK7 + MAPK) - 1 * internal.uVol * internal.k8 * MKK_PP * MAPK_P / (internal.KK8 + MAPK_P) + 1 * internal.uVol * internal.V9 * MAPK_PP / (internal.KK9 + MAPK_PP) - 1 * internal.uVol * internal.V10 * MAPK_P / (internal.KK10 + MAPK_P);
    dstatedt[7] = 0 + 1 * internal.uVol * internal.k8 * MKK_PP * MAPK_P / (internal.KK8 + MAPK_P) - 1 * internal.uVol * internal.V9 * MAPK_PP / (internal.KK9 + MAPK_PP);
    dstatedt[2] = 0 - 1 * internal.uVol * internal.k3 * MKKK_P * MKK / (internal.KK3 + MKK) + 1 * internal.uVol * internal.V6 * MKK_P / (internal.KK6 + MKK_P);
    dstatedt[3] = 0 + 1 * internal.uVol * internal.k3 * MKKK_P * MKK / (internal.KK3 + MKK) - 1 * internal.uVol * internal.k4 * MKKK_P * MKK_P / (internal.KK4 + MKK_P) + 1 * internal.uVol * internal.V5 * MKK_PP / (internal.KK5 + MKK_PP) - 1 * internal.uVol * internal.V6 * MKK_P / (internal.KK6 + MKK_P);
    dstatedt[4] = 0 + 1 * internal.uVol * internal.k4 * MKKK_P * MKK_P / (internal.KK4 + MKK_P) - 1 * internal.uVol * internal.V5 * MKK_PP / (internal.KK5 + MKK_PP);
    dstatedt[0] = 0 - 1 * internal.uVol * internal.V1 * MKKK / ((1 + Math.pow((MAPK_PP / internal.Ki), (internal.n))) * (internal.K1 + MKKK)) + 1 * internal.uVol * internal.V2 * MKKK_P / (internal.KK2 + MKKK_P);
    dstatedt[1] = 0 + 1 * internal.uVol * internal.V1 * MKKK / ((1 + Math.pow((MAPK_PP / internal.Ki), (internal.n))) * (internal.K1 + MKKK)) - 1 * internal.uVol * internal.V2 * MKKK_P / (internal.KK2 + MKKK_P);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "MKKK", "MKKK_P", "MKK", "MKK_P", "MKK_PP", "MAPK", "MAPK_P", "MAPK_PP"];
    this.metadata.internalOrder = {initial_MAPK: null, initial_MAPK_P: null, initial_MAPK_PP: null, initial_MKK: null, initial_MKK_P: null, initial_MKK_PP: null, initial_MKKK: null, initial_MKKK_P: null, K1: null, k3: null, k4: null, k7: null, k8: null, Ki: null, KK10: null, KK2: null, KK3: null, KK4: null, KK5: null, KK6: null, KK7: null, KK8: null, KK9: null, MAPK_init: null, MAPK_P_init: null, MAPK_PP_init: null, MKK_init: null, MKK_P_init: null, MKK_PP_init: null, MKKK_init: null, MKKK_P_init: null, n: null, uVol: null, V1: null, V10: null, V2: null, V5: null, V6: null, V9: null};
    this.metadata.variableOrder = {MKKK: null, MKKK_P: null, MKK: null, MKK_P: null, MKK_PP: null, MAPK: null, MAPK_P: null, MAPK_PP: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
