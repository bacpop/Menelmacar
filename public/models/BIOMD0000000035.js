export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.alphaA = 50;
    internal.alphaAp = 500;
    internal.alphaR = 0.01;
    internal.alphaRp = 50;
    internal.betaA = 50;
    internal.betaR = 5;
    internal.deltaA = 1;
    internal.deltaMA = 10;
    internal.deltaMR = 0.5;
    internal.deltaR = 0.20000000000000001;
    internal.deterministicOscillator = 1;
    internal.gammaA = 1;
    internal.gammaC = 2;
    internal.gammaR = 1;
    internal.thetaA = 50;
    internal.thetaR = 100;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(10).fill(0);
    state[0] = internal.initial_EmptySet;
    state[1] = internal.initial_A;
    state[2] = internal.initial_C;
    state[3] = internal.initial_DA;
    state[4] = internal.initial_DAp;
    state[5] = internal.initial_DR;
    state[6] = internal.initial_DRp;
    state[7] = internal.initial_MA;
    state[8] = internal.initial_MR;
    state[9] = internal.initial_R;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A_init", "C_init", "DA_init", "DAp_init", "DR_init", "DRp_init", "EmptySet_init", "MA_init", "MR_init", "R_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DA_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DAp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DR_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DRp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EmptySet_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MR_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_A = internal.A_init;
    internal.initial_C = internal.C_init;
    internal.initial_DA = internal.DA_init;
    internal.initial_DAp = internal.DAp_init;
    internal.initial_DR = internal.DR_init;
    internal.initial_DRp = internal.DRp_init;
    internal.initial_EmptySet = internal.EmptySet_init;
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
    const A = state[1];
    const C = state[2];
    const DA = state[3];
    const DAp = state[4];
    const DR = state[5];
    const DRp = state[6];
    const MA = state[7];
    const MR = state[8];
    const R = state[9];
    dstatedt[0] = 0;
    dstatedt[1] = 0 - 1 * A * R * internal.gammaC - 1 * A * internal.deltaA - 1 * A * DA * internal.gammaA + 1 * DAp * internal.thetaA + 1 * MA * internal.betaA - 1 * A * DR * internal.gammaR + 1 * DRp * internal.thetaR;
    dstatedt[2] = 0 + 1 * A * R * internal.gammaC - 1 * C * internal.deltaA;
    dstatedt[3] = 0 - 1 * A * DA * internal.gammaA + 1 * DAp * internal.thetaA + 1 * DA * internal.alphaA - 1 * DA * internal.alphaA;
    dstatedt[4] = 0 + 1 * A * DA * internal.gammaA - 1 * DAp * internal.thetaA + 1 * DAp * internal.alphaAp - 1 * DAp * internal.alphaAp;
    dstatedt[5] = 0 - 1 * A * DR * internal.gammaR + 1 * DRp * internal.thetaR + 1 * DR * internal.alphaR - 1 * DR * internal.alphaR;
    dstatedt[6] = 0 + 1 * A * DR * internal.gammaR - 1 * DRp * internal.thetaR + 1 * DRp * internal.alphaRp - 1 * DRp * internal.alphaRp;
    dstatedt[7] = 0 + 1 * DA * internal.alphaA + 1 * DAp * internal.alphaAp - 1 * MA * internal.deltaMA + 1 * MA * internal.betaA - 1 * MA * internal.betaA;
    dstatedt[8] = 0 + 1 * DR * internal.alphaR + 1 * DRp * internal.alphaRp - 1 * MR * internal.deltaMR + 1 * MR * internal.betaR - 1 * MR * internal.betaR;
    dstatedt[9] = 0 - 1 * A * R * internal.gammaC + 1 * C * internal.deltaA - 1 * R * internal.deltaR + 1 * MR * internal.betaR;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "EmptySet", "A", "C", "DA", "DAp", "DR", "DRp", "MA", "MR", "R"];
    this.metadata.internalOrder = {A_init: null, alphaA: null, alphaAp: null, alphaR: null, alphaRp: null, betaA: null, betaR: null, C_init: null, DA_init: null, DAp_init: null, deltaA: null, deltaMA: null, deltaMR: null, deltaR: null, deterministicOscillator: null, DR_init: null, DRp_init: null, EmptySet_init: null, gammaA: null, gammaC: null, gammaR: null, initial_A: null, initial_C: null, initial_DA: null, initial_DAp: null, initial_DR: null, initial_DRp: null, initial_EmptySet: null, initial_MA: null, initial_MR: null, initial_R: null, MA_init: null, MR_init: null, R_init: null, thetaA: null, thetaR: null};
    this.metadata.variableOrder = {EmptySet: null, A: null, C: null, DA: null, DAp: null, DR: null, DRp: null, MA: null, MR: null, R: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
