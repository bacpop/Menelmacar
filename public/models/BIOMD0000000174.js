export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.endosome = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_r5;
    state[1] = internal.initial_R5;
    state[2] = internal.initial_r7;
    state[3] = internal.initial_R7;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["h", "K1", "ke", "kf", "kg", "kh", "kminus1", "r5_init", "R5_init", "r7_init", "R7_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "h", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1", internal, 0.48299999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ke", internal, 0.31, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kg", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kh", internal, 0.14999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kminus1", internal, 0.48299999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r5_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R5_init", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r7_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R7_init", internal, 0.001, -Infinity, Infinity, false);
    internal.initial_r5 = internal.r5_init;
    internal.initial_R5 = internal.R5_init;
    internal.initial_r7 = internal.r7_init;
    internal.initial_R7 = internal.R7_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const r5 = state[0];
    const R5 = state[1];
    const r7 = state[2];
    const R7 = state[3];
    dstatedt[0] = 0 + 1 * internal.endosome * internal.K1 - 1 * internal.endosome * (r5 * (internal.ke * t / (100 + t)) / (1 + Math.exp((internal.kg - R5) * internal.kf))) - 1 * internal.endosome * (internal.kminus1 * r5) + 1 * internal.endosome * (internal.ke * R5 / (1 + Math.exp((internal.kg - R7) * internal.kf))) + 1 * internal.endosome * (internal.kh * R5);
    dstatedt[1] = 0 + 1 * internal.endosome * (r5 * (internal.ke * t / (100 + t)) / (1 + Math.exp((internal.kg - R5) * internal.kf))) - 1 * internal.endosome * (internal.ke * R5 / (1 + Math.exp((internal.kg - R7) * internal.kf))) - 1 * internal.endosome * (internal.kh * R5);
    dstatedt[2] = 0 + 1 * internal.endosome * internal.K1 - 1 * internal.endosome * (r7 * internal.ke * Math.pow((R7), (internal.h)) / (internal.kg + Math.pow((R7), (internal.h)))) - 1 * internal.endosome * (internal.ke * r7 / (1 + Math.exp((internal.kg - R5) * internal.kf))) - 1 * internal.endosome * (internal.kminus1 * r7) + 1 * internal.endosome * (internal.kh * R7);
    dstatedt[3] = 0 + 1 * internal.endosome * (r7 * internal.ke * Math.pow((R7), (internal.h)) / (internal.kg + Math.pow((R7), (internal.h)))) + 1 * internal.endosome * (internal.ke * r7 / (1 + Math.exp((internal.kg - R5) * internal.kf))) - 1 * internal.endosome * (internal.kh * R7);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "r5", "R5", "r7", "R7"];
    this.metadata.internalOrder = {endosome: null, h: null, initial_r5: null, initial_R5: null, initial_r7: null, initial_R7: null, K1: null, ke: null, kf: null, kg: null, kh: null, kminus1: null, r5_init: null, R5_init: null, r7_init: null, R7_init: null};
    this.metadata.variableOrder = {r5: null, R5: null, r7: null, R7: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
