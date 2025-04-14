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
    var state = Array(19).fill(0);
    state[0] = internal.initial_NaiveCD4;
    state[1] = internal.initial_nTreg;
    state[2] = internal.initial_Tfh;
    state[3] = internal.initial_Tfr;
    state[4] = internal.initial_Bcl6;
    state[5] = internal.initial_Blimp1;
    state[6] = internal.initial_FoxP3;
    state[7] = internal.initial_STAT3;
    state[8] = internal.initial_IL4;
    state[9] = internal.initial_IL6;
    state[10] = internal.initial_IL10;
    state[11] = internal.initial_IL21;
    state[12] = internal.initial_CXCR5;
    state[13] = internal.initial_ICOS;
    state[14] = internal.initial_TGFb;
    state[15] = internal.initial_Tgif1;
    state[16] = internal.initial_RXR;
    state[17] = internal.initial_STAT5;
    state[18] = internal.initial_IL2;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "alpha1", "alpha2", "alpha3", "Bcl6_init", "Blimp1_init", "CXCR5_init", "FoxP3_init", "gamma", "gamma1", "gamma2", "ICOS_init", "IL10_init", "IL2_init", "IL21_init", "IL4_init", "IL6_init", "k1", "NaiveCD4_init", "nTreg_init", "RXR_init", "sigma", "sigma1", "sigma2", "STAT3_init", "STAT5_init", "Tfh_init", "Tfr_init", "TGFb_init", "Tgif1_init", "v"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 3.0498500000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha1", internal, 0.43475000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha2", internal, 1.3675200000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha3", internal, 0.12529999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Bcl6_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Blimp1_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CXCR5_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FoxP3_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 0.36431799999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma1", internal, 0.055570799999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma2", internal, 0.111444, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ICOS_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IL10_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IL2_init", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IL21_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IL4_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IL6_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NaiveCD4_init", internal, 200, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nTreg_init", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RXR_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigma", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigma1", internal, 0.99009999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigma2", internal, 2.9224299999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "STAT3_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "STAT5_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tfh_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tfr_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TGFb_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tgif1_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v", internal, 0.10000000000000001, -Infinity, Infinity, false);
    internal.initial_Bcl6 = internal.Bcl6_init;
    internal.initial_Blimp1 = internal.Blimp1_init;
    internal.initial_CXCR5 = internal.CXCR5_init;
    internal.initial_FoxP3 = internal.FoxP3_init;
    internal.initial_ICOS = internal.ICOS_init;
    internal.initial_IL10 = internal.IL10_init;
    internal.initial_IL2 = internal.IL2_init;
    internal.initial_IL21 = internal.IL21_init;
    internal.initial_IL4 = internal.IL4_init;
    internal.initial_IL6 = internal.IL6_init;
    internal.initial_NaiveCD4 = internal.NaiveCD4_init;
    internal.initial_nTreg = internal.nTreg_init;
    internal.initial_RXR = internal.RXR_init;
    internal.initial_STAT3 = internal.STAT3_init;
    internal.initial_STAT5 = internal.STAT5_init;
    internal.initial_Tfh = internal.Tfh_init;
    internal.initial_Tfr = internal.Tfr_init;
    internal.initial_TGFb = internal.TGFb_init;
    internal.initial_Tgif1 = internal.Tgif1_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const NaiveCD4 = state[0];
    const nTreg = state[1];
    const Tfh = state[2];
    const Tfr = state[3];
    const Bcl6 = state[4];
    const Blimp1 = state[5];
    const FoxP3 = state[6];
    const STAT3 = state[7];
    const IL4 = state[8];
    const IL6 = state[9];
    const IL10 = state[10];
    const IL21 = state[11];
    const CXCR5 = state[12];
    const ICOS = state[13];
    const TGFb = state[14];
    const Tgif1 = state[15];
    const RXR = state[16];
    const STAT5 = state[17];
    dstatedt[18] = 0;
    dstatedt[17] = 0;
    dstatedt[4] = 0 + 1 * internal.compartment * ((internal.sigma1 * ICOS + internal.sigma2 * STAT3) / ((internal.alpha1 + Blimp1) * (internal.alpha2 + STAT5) * (internal.alpha3 + RXR))) - 1 * internal.compartment * internal.k1 * Bcl6;
    dstatedt[5] = 0 + 1 * internal.compartment * (internal.sigma * Tfr / (internal.alpha + Bcl6)) - 1 * internal.compartment * internal.k1 * Blimp1;
    dstatedt[12] = 0 + 1 * internal.compartment * ((internal.sigma1 * Tfh + internal.sigma2 * Tfr) / (internal.alpha + Blimp1)) - 1 * internal.compartment * internal.k1 * CXCR5;
    dstatedt[6] = 0 + 1 * internal.compartment * (internal.sigma * nTreg) - 1 * internal.compartment * internal.k1 * FoxP3;
    dstatedt[13] = 0 + 1 * internal.compartment * (internal.sigma * Tfh) - 1 * internal.compartment * internal.k1 * ICOS;
    dstatedt[10] = 0 + 1 * internal.compartment * (internal.sigma * Tfr) - 1 * internal.compartment * internal.k1 * IL10;
    dstatedt[11] = 0 - 1 * internal.compartment * internal.k1 * IL21 + 1 * internal.compartment * (internal.sigma * Tfh);
    dstatedt[8] = 0 + 1 * internal.compartment * (internal.sigma * Tfh) - 1 * internal.compartment * internal.k1 * IL4;
    dstatedt[9] = 0 + 1 * internal.compartment * (internal.sigma1 / (internal.alpha1 + IL4)) - 1 * internal.compartment * internal.k1 * IL6;
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.v) - 1 * internal.compartment * internal.k1 * NaiveCD4 - 1 * internal.compartment * (internal.gamma * NaiveCD4 * Bcl6 / (internal.alpha + IL10));
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.v) - 1 * internal.compartment * internal.k1 * nTreg - 1 * internal.compartment * (internal.gamma1 * nTreg * Bcl6 + internal.gamma2 * nTreg * CXCR5);
    dstatedt[16] = 0 + 1 * internal.compartment * (internal.sigma * TGFb / (internal.alpha + Tgif1)) - 1 * internal.compartment * internal.k1 * RXR;
    dstatedt[7] = 0 + 1 * internal.compartment * (internal.sigma1 * IL6 + internal.sigma2 * IL21) - 1 * internal.compartment * internal.k1 * STAT3;
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.gamma * NaiveCD4 * Bcl6 / (internal.alpha + IL10)) - 1 * internal.compartment * internal.k1 * Tfh;
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.gamma1 * nTreg * Bcl6 + internal.gamma2 * nTreg * CXCR5) - 1 * internal.compartment * internal.k1 * Tfr;
    dstatedt[14] = 0 + 1 * internal.compartment * (internal.sigma * IL10) - 1 * internal.compartment * internal.k1 * TGFb;
    dstatedt[15] = 0 + 1 * internal.compartment * (internal.sigma * Tfh) - 1 * internal.compartment * internal.k1 * Tgif1;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "NaiveCD4", "nTreg", "Tfh", "Tfr", "Bcl6", "Blimp1", "FoxP3", "STAT3", "IL4", "IL6", "IL10", "IL21", "CXCR5", "ICOS", "TGFb", "Tgif1", "RXR", "STAT5", "IL2"];
    this.metadata.internalOrder = {alpha: null, alpha1: null, alpha2: null, alpha3: null, Bcl6_init: null, Blimp1_init: null, compartment: null, CXCR5_init: null, FoxP3_init: null, gamma: null, gamma1: null, gamma2: null, ICOS_init: null, IL10_init: null, IL2_init: null, IL21_init: null, IL4_init: null, IL6_init: null, initial_Bcl6: null, initial_Blimp1: null, initial_CXCR5: null, initial_FoxP3: null, initial_ICOS: null, initial_IL10: null, initial_IL2: null, initial_IL21: null, initial_IL4: null, initial_IL6: null, initial_NaiveCD4: null, initial_nTreg: null, initial_RXR: null, initial_STAT3: null, initial_STAT5: null, initial_Tfh: null, initial_Tfr: null, initial_TGFb: null, initial_Tgif1: null, k1: null, NaiveCD4_init: null, nTreg_init: null, RXR_init: null, sigma: null, sigma1: null, sigma2: null, STAT3_init: null, STAT5_init: null, Tfh_init: null, Tfr_init: null, TGFb_init: null, Tgif1_init: null, v: null};
    this.metadata.variableOrder = {NaiveCD4: null, nTreg: null, Tfh: null, Tfr: null, Bcl6: null, Blimp1: null, FoxP3: null, STAT3: null, IL4: null, IL6: null, IL10: null, IL21: null, CXCR5: null, ICOS: null, TGFb: null, Tgif1: null, RXR: null, STAT5: null, IL2: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
