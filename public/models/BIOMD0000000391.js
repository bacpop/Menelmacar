export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.chloroplast = 1;
    internal.cytosol = 1;
    internal.K = 0.02;
    internal.k1 = 500000000;
    internal.K1 = 0.050000000000000003;
    internal.k2 = 1612900000000;
    internal.K2 = 0.050000000000000003;
    internal.KA = 0.73999999999999999;
    internal.KA1 = 0.10000000000000001;
    internal.KA2 = 0.02;
    internal.KA3 = 0.02;
    internal.KR1 = 0.83999999999999997;
    internal.KR2 = 0.040000000000000001;
    internal.KR3 = 0.0074999999999999997;
    internal.KR4 = 0.90000000000000002;
    internal.KR41 = 2.5;
    internal.KR42 = 0.40000000000000002;
    internal.KR5 = 0.070000000000000007;
    internal.Vm = 340;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var ADP_init = 1.5 - internal.initial_ATP;
    var Pi_init = 15 - 2 * (internal.initial_RuBP + internal.initial_DPGA + internal.initial_FBP + internal.initial_SBP) - (internal.initial_PGA + internal.initial_GAP + internal.initial_DHAP + internal.initial_F6P + internal.initial_E4P + internal.initial_S7P + internal.initial_X5P + internal.initial_R5P + internal.initial_Ru5P + internal.initial_G6P + internal.initial_G1P + internal.initial_ATP);
    internal.initial_ADP = ADP_init;
    internal.initial_Pi = Pi_init;
    var state = Array(22).fill(0);
    state[0] = internal.initial_RuBP;
    state[1] = internal.initial_PGA;
    state[2] = internal.initial_DPGA;
    state[3] = internal.initial_GAP;
    state[4] = internal.initial_DHAP;
    state[5] = internal.initial_FBP;
    state[6] = internal.initial_F6P;
    state[7] = internal.initial_E4P;
    state[8] = internal.initial_SBP;
    state[9] = internal.initial_S7P;
    state[10] = internal.initial_X5P;
    state[11] = internal.initial_R5P;
    state[12] = internal.initial_Ru5P;
    state[13] = internal.initial_G6P;
    state[14] = internal.initial_G1P;
    state[15] = internal.initial_ATP;
    state[16] = internal.initial_ADP;
    state[17] = internal.initial_NADPH;
    state[18] = internal.initial_NADP;
    state[19] = internal.initial_H;
    state[20] = internal.initial_Pi;
    state[21] = internal.initial_Pext;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["ATP_init", "DHAP_init", "DPGA_init", "E4P_init", "F6P_init", "FBP_init", "G1P_init", "G6P_init", "GAP_init", "H_init", "NADP_init", "NADPH_init", "Pext_init", "PGA_init", "R5P_init", "Ru5P_init", "RuBP_init", "S7P_init", "SBP_init", "X5P_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "ATP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DHAP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DPGA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E4P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "F6P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FBP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G1P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G6P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GAP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NADP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NADPH_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pext_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PGA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R5P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ru5P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RuBP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S7P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SBP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X5P_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_ATP = internal.ATP_init;
    internal.initial_DHAP = internal.DHAP_init;
    internal.initial_DPGA = internal.DPGA_init;
    internal.initial_E4P = internal.E4P_init;
    internal.initial_F6P = internal.F6P_init;
    internal.initial_FBP = internal.FBP_init;
    internal.initial_G1P = internal.G1P_init;
    internal.initial_G6P = internal.G6P_init;
    internal.initial_GAP = internal.GAP_init;
    internal.initial_H = internal.H_init;
    internal.initial_NADP = internal.NADP_init;
    internal.initial_NADPH = internal.NADPH_init;
    internal.initial_Pext = internal.Pext_init;
    internal.initial_PGA = internal.PGA_init;
    internal.initial_R5P = internal.R5P_init;
    internal.initial_Ru5P = internal.Ru5P_init;
    internal.initial_RuBP = internal.RuBP_init;
    internal.initial_S7P = internal.S7P_init;
    internal.initial_SBP = internal.SBP_init;
    internal.initial_X5P = internal.X5P_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const RuBP = state[0];
    const PGA = state[1];
    const DPGA = state[2];
    const GAP = state[3];
    const DHAP = state[4];
    const FBP = state[5];
    const F6P = state[6];
    const E4P = state[7];
    const SBP = state[8];
    const S7P = state[9];
    const X5P = state[10];
    const R5P = state[11];
    const Ru5P = state[12];
    const G6P = state[13];
    const G1P = state[14];
    const ATP = state[15];
    const ADP = state[16];
    const NADPH = state[17];
    const NADP = state[18];
    const H = state[19];
    const Pi = state[20];
    const Pext = state[21];
    dstatedt[16] = 0 + 0;
    dstatedt[19] = 0;
    dstatedt[18] = 0;
    dstatedt[17] = 0;
    dstatedt[21] = 0;
    dstatedt[20] = 0 + 0;
    dstatedt[15] = 0 - 1 * internal.chloroplast * (internal.k1 * PGA * ATP - internal.k2 * DPGA * ADP) - 1 * internal.chloroplast * (internal.Vm * Ru5P * ATP / ((Ru5P + internal.K1 * (1 + PGA / internal.KR1 + RuBP / internal.KR2 + Pi / internal.KR3)) * (ATP * (1 + ADP / internal.KR41) + internal.K2 * (1 + ADP / internal.KR42)))) - 1 * internal.chloroplast * (internal.Vm * G1P * ATP / ((G1P + internal.K1) * (1 + ADP / internal.KR1) * (ATP + internal.K2 * (1 + internal.K2 * Pi / (internal.KA1 * PGA + internal.KA2 * F6P + internal.KA3 * FBP))))) + 1 * internal.chloroplast * (internal.Vm * ADP * Pi / ((ADP + internal.K1) * (Pi + internal.K2)));
    dstatedt[4] = 0 + 1 * internal.chloroplast * (internal.k1 * GAP - internal.k2 * DHAP) - 1 * internal.chloroplast * (internal.k1 * DHAP * GAP - internal.k2 * FBP) - 1 * internal.chloroplast * (internal.k1 * DHAP * E4P - internal.k2 * SBP) - 1 * internal.chloroplast * (internal.Vm * DHAP / (DHAP * (1 + internal.KA / Pext) + internal.K * (1 + (1 + internal.KA / Pext) * (Pi / internal.KR1 + PGA / internal.KR2 + GAP / internal.KR3))));
    dstatedt[2] = 0 + 1 * internal.chloroplast * (internal.k1 * PGA * ATP - internal.k2 * DPGA * ADP) - 1 * internal.chloroplast * (internal.k1 * DPGA * NADPH * H - internal.k2 * GAP * NADP * Pi);
    dstatedt[7] = 0 + 1 * internal.chloroplast * (internal.k1 * GAP * F6P - internal.k2 * X5P * E4P) - 1 * internal.chloroplast * (internal.k1 * DHAP * E4P - internal.k2 * SBP);
    dstatedt[6] = 0 + 1 * internal.chloroplast * (internal.Vm * FBP / (FBP + internal.K * (1 + F6P / internal.KR1 + Pi / internal.KR2))) - 1 * internal.chloroplast * (internal.k1 * GAP * F6P - internal.k2 * X5P * E4P) - 1 * internal.chloroplast * (internal.k1 * F6P - internal.k2 * G6P);
    dstatedt[5] = 0 + 1 * internal.chloroplast * (internal.k1 * DHAP * GAP - internal.k2 * FBP) - 1 * internal.chloroplast * (internal.Vm * FBP / (FBP + internal.K * (1 + F6P / internal.KR1 + Pi / internal.KR2)));
    dstatedt[14] = 0 + 1 * internal.chloroplast * (internal.k1 * G6P - internal.k2 * G1P) - 1 * internal.chloroplast * (internal.Vm * G1P * ATP / ((G1P + internal.K1) * (1 + ADP / internal.KR1) * (ATP + internal.K2 * (1 + internal.K2 * Pi / (internal.KA1 * PGA + internal.KA2 * F6P + internal.KA3 * FBP))))) + 1 * internal.chloroplast * (internal.Vm * Pi / (Pi + internal.K * (1 + G1P / internal.KR1)));
    dstatedt[13] = 0 + 1 * internal.chloroplast * (internal.k1 * F6P - internal.k2 * G6P) - 1 * internal.chloroplast * (internal.k1 * G6P - internal.k2 * G1P);
    dstatedt[3] = 0 + 1 * internal.chloroplast * (internal.k1 * DPGA * NADPH * H - internal.k2 * GAP * NADP * Pi) - 1 * internal.chloroplast * (internal.k1 * GAP - internal.k2 * DHAP) - 1 * internal.chloroplast * (internal.k1 * DHAP * GAP - internal.k2 * FBP) - 1 * internal.chloroplast * (internal.k1 * GAP * F6P - internal.k2 * X5P * E4P) - 1 * internal.chloroplast * (internal.k1 * GAP * S7P - internal.k2 * X5P * R5P) - 1 * internal.chloroplast * (internal.Vm * GAP / (GAP * (1 + internal.KA / Pext) + internal.K * (1 + (1 + internal.KA / Pext) * (Pi / internal.KR1 + PGA / internal.KR2 + DHAP / internal.KR3))));
    dstatedt[1] = 0 + 2 * internal.chloroplast * (internal.Vm * RuBP / (RuBP + internal.K * (1 + PGA / internal.KR1 + FBP / internal.KR2 + SBP / internal.KR3 + Pi / internal.KR4 + NADPH / internal.KR5))) - 1 * internal.chloroplast * (internal.k1 * PGA * ATP - internal.k2 * DPGA * ADP) - 1 * internal.chloroplast * (internal.Vm * PGA / (PGA * (1 + internal.KA / Pext) + internal.K * (1 + (1 + internal.KA / Pext) * (Pi / internal.KR1 + GAP / internal.KR2 + DHAP / internal.KR3))));
    dstatedt[11] = 0 + 1 * internal.chloroplast * (internal.k1 * GAP * S7P - internal.k2 * X5P * R5P) - 1 * internal.chloroplast * (internal.k1 * R5P - internal.k2 * Ru5P);
    dstatedt[12] = 0 + 1 * internal.chloroplast * (internal.k1 * R5P - internal.k2 * Ru5P) + 1 * internal.chloroplast * (internal.k1 * X5P - internal.k2 * Ru5P) - 1 * internal.chloroplast * (internal.Vm * Ru5P * ATP / ((Ru5P + internal.K1 * (1 + PGA / internal.KR1 + RuBP / internal.KR2 + Pi / internal.KR3)) * (ATP * (1 + ADP / internal.KR41) + internal.K2 * (1 + ADP / internal.KR42))));
    dstatedt[0] = 0 - 1 * internal.chloroplast * (internal.Vm * RuBP / (RuBP + internal.K * (1 + PGA / internal.KR1 + FBP / internal.KR2 + SBP / internal.KR3 + Pi / internal.KR4 + NADPH / internal.KR5))) + 1 * internal.chloroplast * (internal.Vm * Ru5P * ATP / ((Ru5P + internal.K1 * (1 + PGA / internal.KR1 + RuBP / internal.KR2 + Pi / internal.KR3)) * (ATP * (1 + ADP / internal.KR41) + internal.K2 * (1 + ADP / internal.KR42))));
    dstatedt[9] = 0 + 1 * internal.chloroplast * (internal.Vm * SBP / (SBP + internal.K * (1 + Pi / internal.KR1))) - 1 * internal.chloroplast * (internal.k1 * GAP * S7P - internal.k2 * X5P * R5P);
    dstatedt[8] = 0 + 1 * internal.chloroplast * (internal.k1 * DHAP * E4P - internal.k2 * SBP) - 1 * internal.chloroplast * (internal.Vm * SBP / (SBP + internal.K * (1 + Pi / internal.KR1)));
    dstatedt[10] = 0 + 1 * internal.chloroplast * (internal.k1 * GAP * F6P - internal.k2 * X5P * E4P) + 1 * internal.chloroplast * (internal.k1 * GAP * S7P - internal.k2 * X5P * R5P) - 1 * internal.chloroplast * (internal.k1 * X5P - internal.k2 * Ru5P);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "RuBP", "PGA", "DPGA", "GAP", "DHAP", "FBP", "F6P", "E4P", "SBP", "S7P", "X5P", "R5P", "Ru5P", "G6P", "G1P", "ATP", "ADP", "NADPH", "NADP", "H", "Pi", "Pext"];
    this.metadata.internalOrder = {ATP_init: null, chloroplast: null, cytosol: null, DHAP_init: null, DPGA_init: null, E4P_init: null, F6P_init: null, FBP_init: null, G1P_init: null, G6P_init: null, GAP_init: null, H_init: null, initial_ADP: null, initial_ATP: null, initial_DHAP: null, initial_DPGA: null, initial_E4P: null, initial_F6P: null, initial_FBP: null, initial_G1P: null, initial_G6P: null, initial_GAP: null, initial_H: null, initial_NADP: null, initial_NADPH: null, initial_Pext: null, initial_PGA: null, initial_Pi: null, initial_R5P: null, initial_Ru5P: null, initial_RuBP: null, initial_S7P: null, initial_SBP: null, initial_X5P: null, K: null, k1: null, K1: null, k2: null, K2: null, KA: null, KA1: null, KA2: null, KA3: null, KR1: null, KR2: null, KR3: null, KR4: null, KR41: null, KR42: null, KR5: null, NADP_init: null, NADPH_init: null, Pext_init: null, PGA_init: null, R5P_init: null, Ru5P_init: null, RuBP_init: null, S7P_init: null, SBP_init: null, Vm: null, X5P_init: null};
    this.metadata.variableOrder = {RuBP: null, PGA: null, DPGA: null, GAP: null, DHAP: null, FBP: null, F6P: null, E4P: null, SBP: null, S7P: null, X5P: null, R5P: null, Ru5P: null, G6P: null, G1P: null, ATP: null, ADP: null, NADPH: null, NADP: null, H: null, Pi: null, Pext: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
