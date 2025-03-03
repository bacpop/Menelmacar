export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cytosol = 1;
    internal.nucleus = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(16).fill(0);
    state[0] = internal.initial_E1F;
    state[1] = internal.initial_E1Fp;
    state[2] = internal.initial_E1W;
    state[3] = internal.initial_E2F;
    state[4] = internal.initial_E2Fp;
    state[5] = internal.initial_E2W;
    state[6] = internal.initial_MF;
    state[7] = internal.initial_MW;
    state[8] = internal.initial_PF;
    state[9] = internal.initial_PFp;
    state[10] = internal.initial_PW;
    state[11] = internal.initial_PWL;
    state[12] = internal.initial_sFrq_tot;
    state[13] = internal.initial_lFrq_tot;
    state[14] = internal.initial_Frq_tot;
    state[15] = internal.initial_WC1_tot;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a1", "a2", "a3", "a3p", "a4", "a5", "a6", "a7", "amp", "b1", "b10", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "d1", "d2", "d2p", "d3", "d4", "d5", "dawn", "dusk", "E1F_init", "E1Fp_init", "E1W_init", "E2F_init", "E2Fp_init", "E2W_init", "f1", "f1p", "f2", "Frq_tot_init", "gam1", "gam1p", "gam2", "kxk", "lFrq_tot_init", "m", "MF_init", "MW_init", "n", "PF_init", "PFp_init", "PW_init", "PWL_init", "r1", "r2", "sFrq_tot_init", "WC1_tot_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a1", internal, 24.973600000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a2", internal, 3.5979700000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a3", internal, 0.28339999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a3p", internal, 0.34577999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a4", internal, 0.46227000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a5", internal, 0.029170000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a6", internal, 0.20695, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a7", internal, 3.0285600000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "amp", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b1", internal, 0.0020899999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b10", internal, 93.036640000000006, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b2", internal, 2.13476, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b3", internal, 0.080390000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b4", internal, 0.45859, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b5", internal, 0.13056000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b6", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b7", internal, 2.96739, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b8", internal, 0.11167000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b9", internal, 81.103809999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d1", internal, 1.4354899999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d2", internal, 0.21251, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d2p", internal, 0.18190999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d3", internal, 0.50309000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d4", internal, 3.3664100000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d5", internal, 0.41084999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dawn", internal, 12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dusk", internal, 24, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E1F_init", internal, 0.43075999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E1Fp_init", internal, 0.45583000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E1W_init", internal, 5.84748, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E2F_init", internal, 0.10647, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E2Fp_init", internal, 0.098720000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E2W_init", internal, 5.7026500000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f1", internal, 0.092920000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f1p", internal, 0.095880000000000007, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f2", internal, 0.14979000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Frq_tot_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gam1", internal, 0.34603, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gam1p", internal, 0.40118999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gam2", internal, 0.00027999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 2.1823399999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lFrq_tot_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m", internal, 1.34979, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MF_init", internal, 0.69350000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MW_init", internal, 1.2688999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 1.0241899999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PF_init", internal, 0.06565, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PFp_init", internal, 0.077189999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PW_init", internal, 26.439299999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PWL_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r1", internal, 2.7157399999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r2", internal, 35.40005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sFrq_tot_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "WC1_tot_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_E1F = internal.E1F_init;
    internal.initial_E1Fp = internal.E1Fp_init;
    internal.initial_E1W = internal.E1W_init;
    internal.initial_E2F = internal.E2F_init;
    internal.initial_E2Fp = internal.E2Fp_init;
    internal.initial_E2W = internal.E2W_init;
    internal.initial_Frq_tot = internal.Frq_tot_init;
    internal.initial_lFrq_tot = internal.lFrq_tot_init;
    internal.initial_MF = internal.MF_init;
    internal.initial_MW = internal.MW_init;
    internal.initial_PF = internal.PF_init;
    internal.initial_PFp = internal.PFp_init;
    internal.initial_PW = internal.PW_init;
    internal.initial_PWL = internal.PWL_init;
    internal.initial_sFrq_tot = internal.sFrq_tot_init;
    internal.initial_WC1_tot = internal.WC1_tot_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const E1F = state[0];
    const E1Fp = state[1];
    const E1W = state[2];
    const E2F = state[3];
    const E2Fp = state[4];
    const E2W = state[5];
    const MF = state[6];
    const MW = state[7];
    const PF = state[8];
    const PFp = state[9];
    const PW = state[10];
    const PWL = state[11];
    dstatedt[14] = 0;
    dstatedt[13] = 0;
    dstatedt[12] = 0;
    dstatedt[15] = 0;
    dstatedt[0] = 0 + 1 * internal.a3 * MF - 1 * internal.gam1 * E1F - 1 * internal.f1 * E1F;
    dstatedt[1] = 0 + 1 * internal.a3p * MF - 1 * internal.gam1p * E1Fp - 1 * internal.f1p * E1Fp;
    dstatedt[2] = 0 + 1 * (internal.a6 + internal.a7 * (PF + PFp)) * MW - 1 * internal.gam2 * E1W - 1 * internal.f2 * E1W;
    dstatedt[3] = 0 + 1 * internal.f1 * E1F - 1 * internal.gam1 * E2F - 1 * internal.f1 * E2F;
    dstatedt[4] = 0 + 1 * internal.f1p * E1Fp - 1 * internal.gam1p * E2Fp - 1 * internal.f1p * E2Fp;
    dstatedt[5] = 0 + 1 * internal.f2 * E1W - 1 * internal.gam2 * E2W - 1 * internal.f2 * E2W;
    dstatedt[6] = 0 + 1 * internal.a1 * Math.pow((PWL), (internal.n)) / ((1 + (PF + PFp) / internal.b1) * (Math.pow((PWL), (internal.n)) + Math.pow((internal.b2), (internal.n)))) + internal.a2 * Math.pow((PW), (internal.m)) / ((1 + (PF + PFp) / internal.b3) * (Math.pow((PW), (internal.m)) + Math.pow((internal.b4), (internal.m)))) - 1 * internal.d1 * MF / (MF + internal.b5);
    dstatedt[7] = 0 + 1 * internal.a4 + internal.a5 * Math.pow((PWL), (internal.kxk)) / (Math.pow((PWL), (internal.kxk)) + Math.pow((internal.b7), (internal.kxk))) - 1 * internal.d3 * MW / (MW + internal.b8);
    dstatedt[8] = 0 + 1 * internal.f1 * E2F - 1 * internal.d2 * PF;
    dstatedt[9] = 0 + 1 * internal.f1p * E2Fp - 1 * internal.d2p * PFp;
    dstatedt[10] = 0 + 1 * internal.f2 * E2W - 1 * internal.d4 * PW / (PW + internal.b9) - 1 * internal.r1 * internal.amp * PW * (1 + Math.tanh(24 * (t - 24 * Math.floor(t / 24) - internal.dawn))) * (1 - Math.tanh(24 * (t - 24 * Math.floor(t / 24) - internal.dusk))) / 4 - internal.r2 * PWL;
    dstatedt[11] = 0 + 1 * internal.r1 * internal.amp * PW * (1 + Math.tanh(24 * (t - 24 * Math.floor(t / 24) - internal.dawn))) * (1 - Math.tanh(24 * (t - 24 * Math.floor(t / 24) - internal.dusk))) / 4 - internal.r2 * PWL - 1 * internal.d5 * PWL / (PWL + internal.b10);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "E1F", "E1Fp", "E1W", "E2F", "E2Fp", "E2W", "MF", "MW", "PF", "PFp", "PW", "PWL", "sFrq_tot", "lFrq_tot", "Frq_tot", "WC1_tot"];
    this.metadata.internalOrder = {a1: null, a2: null, a3: null, a3p: null, a4: null, a5: null, a6: null, a7: null, amp: null, b1: null, b10: null, b2: null, b3: null, b4: null, b5: null, b6: null, b7: null, b8: null, b9: null, cytosol: null, d1: null, d2: null, d2p: null, d3: null, d4: null, d5: null, dawn: null, dusk: null, E1F_init: null, E1Fp_init: null, E1W_init: null, E2F_init: null, E2Fp_init: null, E2W_init: null, f1: null, f1p: null, f2: null, Frq_tot_init: null, gam1: null, gam1p: null, gam2: null, initial_E1F: null, initial_E1Fp: null, initial_E1W: null, initial_E2F: null, initial_E2Fp: null, initial_E2W: null, initial_Frq_tot: null, initial_lFrq_tot: null, initial_MF: null, initial_MW: null, initial_PF: null, initial_PFp: null, initial_PW: null, initial_PWL: null, initial_sFrq_tot: null, initial_WC1_tot: null, kxk: null, lFrq_tot_init: null, m: null, MF_init: null, MW_init: null, n: null, nucleus: null, PF_init: null, PFp_init: null, PW_init: null, PWL_init: null, r1: null, r2: null, sFrq_tot_init: null, WC1_tot_init: null};
    this.metadata.variableOrder = {E1F: null, E1Fp: null, E1W: null, E2F: null, E2Fp: null, E2W: null, MF: null, MW: null, PF: null, PFp: null, PW: null, PWL: null, sFrq_tot: null, lFrq_tot: null, Frq_tot: null, WC1_tot: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
