export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.deterministicOscillator = 1;
    internal.EmptySet = 0;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(9).fill(0);
    state[0] = internal.initial_A;
    state[1] = internal.initial_C;
    state[2] = internal.initial_DA;
    state[3] = internal.initial_DAp;
    state[4] = internal.initial_DR;
    state[5] = internal.initial_DRp;
    state[6] = internal.initial_MA;
    state[7] = internal.initial_MR;
    state[8] = internal.initial_R;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A_init", "alphaA", "alphaAp", "alphaR", "alphaRp", "betaA", "betaR", "C_init", "DA_init", "DAp_init", "deltaA", "deltaMA", "deltaMR", "deltaR", "DR_init", "DRp_init", "gammaA", "gammaC", "gammaR", "MA_init", "MR_init", "R_init", "thetaA", "thetaR"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alphaA", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alphaAp", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alphaR", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alphaRp", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "betaA", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "betaR", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DA_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DAp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "deltaA", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "deltaMA", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "deltaMR", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "deltaR", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DR_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DRp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gammaA", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gammaC", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gammaR", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MR_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "thetaA", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "thetaR", internal, 100, -Infinity, Infinity, false);
    internal.initial_A = internal.A_init;
    internal.initial_C = internal.C_init;
    internal.initial_DA = internal.DA_init;
    internal.initial_DAp = internal.DAp_init;
    internal.initial_DR = internal.DR_init;
    internal.initial_DRp = internal.DRp_init;
    internal.initial_MA = internal.MA_init;
    internal.initial_MR = internal.MR_init;
    internal.initial_R = internal.R_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const A = state[0];
    const C = state[1];
    const DA = state[2];
    const DAp = state[3];
    const DR = state[4];
    const DRp = state[5];
    const MA = state[6];
    const MR = state[7];
    const R = state[8];
    dstatedt[0] = 0 - 1 * A * R * internal.gammaC - 1 * A * internal.deltaA - 1 * A * DA * internal.gammaA + 1 * DAp * internal.thetaA + 1 * MA * internal.betaA - 1 * A * DR * internal.gammaR + 1 * DRp * internal.thetaR;
    dstatedt[1] = 0 + 1 * A * R * internal.gammaC - 1 * C * internal.deltaA;
    dstatedt[2] = 0 - 1 * A * DA * internal.gammaA + 1 * DAp * internal.thetaA - 1 * DA * internal.alphaA + 1 * DA * internal.alphaA;
    dstatedt[3] = 0 + 1 * A * DA * internal.gammaA - 1 * DAp * internal.thetaA - 1 * DAp * internal.alphaAp + 1 * DAp * internal.alphaAp;
    dstatedt[4] = 0 - 1 * A * DR * internal.gammaR + 1 * DRp * internal.thetaR - 1 * DR * internal.alphaR + 1 * DR * internal.alphaR;
    dstatedt[5] = 0 + 1 * A * DR * internal.gammaR - 1 * DRp * internal.thetaR - 1 * DRp * internal.alphaRp + 1 * DRp * internal.alphaRp;
    dstatedt[6] = 0 + 1 * DA * internal.alphaA + 1 * DAp * internal.alphaAp - 1 * MA * internal.deltaMA - 1 * MA * internal.betaA + 1 * MA * internal.betaA;
    dstatedt[7] = 0 + 1 * DR * internal.alphaR + 1 * DRp * internal.alphaRp - 1 * MR * internal.deltaMR - 1 * MR * internal.betaR + 1 * MR * internal.betaR;
    dstatedt[8] = 0 - 1 * A * R * internal.gammaC + 1 * C * internal.deltaA - 1 * R * internal.deltaR + 1 * MR * internal.betaR;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "A", "C", "DA", "DAp", "DR", "DRp", "MA", "MR", "R"];
    this.metadata.internalOrder = {A_init: null, alphaA: null, alphaAp: null, alphaR: null, alphaRp: null, betaA: null, betaR: null, C_init: null, DA_init: null, DAp_init: null, deltaA: null, deltaMA: null, deltaMR: null, deltaR: null, deterministicOscillator: null, DR_init: null, DRp_init: null, EmptySet: null, gammaA: null, gammaC: null, gammaR: null, initial_A: null, initial_C: null, initial_DA: null, initial_DAp: null, initial_DR: null, initial_DRp: null, initial_MA: null, initial_MR: null, initial_R: null, MA_init: null, MR_init: null, R_init: null, thetaA: null, thetaR: null};
    this.metadata.variableOrder = {A: null, C: null, DA: null, DAp: null, DR: null, DRp: null, MA: null, MR: null, R: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
