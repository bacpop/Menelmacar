export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(19).fill(0);
    state[0] = internal.initial_E4P;
    state[1] = internal.initial_G6L;
    state[2] = internal.initial_NADPH;
    state[3] = internal.initial_P6G;
    state[4] = internal.initial_R5P;
    state[5] = internal.initial_Ru5P;
    state[6] = internal.initial_S7P;
    state[7] = internal.initial_X5P;
    state[8] = internal.initial_F6P;
    state[9] = internal.initial_GAP;
    state[10] = internal.initial_GND1;
    state[11] = internal.initial_GND2;
    state[12] = internal.initial_NQM1;
    state[13] = internal.initial_RKI1;
    state[14] = internal.initial_RPE1;
    state[15] = internal.initial_SOL3;
    state[16] = internal.initial_TAL1;
    state[17] = internal.initial_TKL1;
    state[18] = internal.initial_ZWF1;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["E4P_init", "F6P_init", "G6L_init", "GAP_init", "GND1_init", "GND2_init", "kcat", "kcat_GND1", "kcat_GND2", "kcat_NQM1", "kcat_TAL1", "Ke4p_NQM1", "Ke4p_TAL", "Ke4p_TAL1", "Keq", "Kf6p_NQM1", "Kf6p_TAL", "Kf6p_TAL1", "Kg6l", "Kg6p", "Kgap_NQM1", "Kgap_TAL", "Kgap_TAL1", "Kiru5p", "Knadp", "Knadp_GND1", "Knadp_GND2", "Knadph", "Knadph_GND1", "Knadph_GND2", "Kp6g", "Kp6g_GND1", "Kp6g_GND2", "Kr5p", "Kr5p_TAL", "Kru5p", "Kru5p_GND1", "Kru5p_GND2", "Ks7p_NQM1", "Ks7p_TAL", "Ks7p_TAL1", "Kx5p", "Kx5p_TAL", "kxk", "NADPH_init", "NQM1_init", "P6G_init", "R5P_init", "RKI1_init", "RPE1_init", "Ru5P_init", "S7P_init", "SOL3_init", "sum_NADP", "TAL1_init", "TKL1_init", "X5P_init", "ZWF1_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "E4P_init", internal, 0.029000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "F6P_init", internal, 0.32500000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G6L_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GAP_init", internal, 0.067000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GND1_init", internal, 0.012999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GND2_init", internal, 0.0030000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcat", internal, 189, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcat_GND1", internal, 28, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcat_GND2", internal, 27.300000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcat_NQM1", internal, 0.69399999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcat_TAL1", internal, 0.69399999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ke4p_NQM1", internal, 0.30499999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ke4p_TAL", internal, 0.94599999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ke4p_TAL1", internal, 0.36199999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Keq", internal, 1.2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kf6p_NQM1", internal, 1.04, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kf6p_TAL", internal, 1.1000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kf6p_TAL1", internal, 1.4399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kg6l", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kg6p", internal, 0.042000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kgap_NQM1", internal, 0.27200000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kgap_TAL", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kgap_TAL1", internal, 0.27200000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kiru5p", internal, 9.8800000000000008, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Knadp", internal, 0.044999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Knadp_GND1", internal, 0.094, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Knadp_GND2", internal, 0.094, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Knadph", internal, 0.017000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Knadph_GND1", internal, 0.055, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Knadph_GND2", internal, 0.055, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kp6g", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kp6g_GND1", internal, 0.062, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kp6g_GND2", internal, 0.115, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kr5p", internal, 5.7000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kr5p_TAL", internal, 0.23499999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kru5p", internal, 5.9699999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kru5p_GND1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kru5p_GND2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ks7p_NQM1", internal, 0.78600000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ks7p_TAL", internal, 0.14999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ks7p_TAL1", internal, 0.78600000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kx5p", internal, 7.7000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kx5p_TAL", internal, 0.67000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NADPH_init", internal, 0.16, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NQM1_init", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P6G_init", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R5P_init", internal, 0.11799999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RKI1_init", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RPE1_init", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ru5P_init", internal, 0.033000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S7P_init", internal, 0.082000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SOL3_init", internal, 0.029600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sum_NADP", internal, 0.33000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TAL1_init", internal, 0.14399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TKL1_init", internal, 0.45500000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X5P_init", internal, 0.041000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ZWF1_init", internal, 0.02, -Infinity, Infinity, false);
    internal.initial_E4P = internal.E4P_init;
    internal.initial_F6P = internal.F6P_init;
    internal.initial_G6L = internal.G6L_init;
    internal.initial_GAP = internal.GAP_init;
    internal.initial_GND1 = internal.GND1_init;
    internal.initial_GND2 = internal.GND2_init;
    internal.initial_NADPH = internal.NADPH_init;
    internal.initial_NQM1 = internal.NQM1_init;
    internal.initial_P6G = internal.P6G_init;
    internal.initial_R5P = internal.R5P_init;
    internal.initial_RKI1 = internal.RKI1_init;
    internal.initial_RPE1 = internal.RPE1_init;
    internal.initial_Ru5P = internal.Ru5P_init;
    internal.initial_S7P = internal.S7P_init;
    internal.initial_SOL3 = internal.SOL3_init;
    internal.initial_TAL1 = internal.TAL1_init;
    internal.initial_TKL1 = internal.TKL1_init;
    internal.initial_X5P = internal.X5P_init;
    internal.initial_ZWF1 = internal.ZWF1_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const E4P = state[0];
    const G6L = state[1];
    const NADPH = state[2];
    const P6G = state[3];
    const R5P = state[4];
    const Ru5P = state[5];
    const S7P = state[6];
    const X5P = state[7];
    const F6P = state[8];
    const GAP = state[9];
    const GND1 = state[10];
    const GND2 = state[11];
    const NQM1 = state[12];
    const RKI1 = state[13];
    const RPE1 = state[14];
    const SOL3 = state[15];
    const TAL1 = state[16];
    const TKL1 = state[17];
    const ZWF1 = state[18];
    dstatedt[8] = 0;
    dstatedt[9] = 0;
    dstatedt[10] = 0;
    dstatedt[11] = 0;
    dstatedt[12] = 0;
    dstatedt[13] = 0;
    dstatedt[14] = 0;
    dstatedt[15] = 0;
    dstatedt[16] = 0;
    dstatedt[17] = 0;
    dstatedt[18] = 0;
    dstatedt[0] = 0 + 1 * internal.cell * (TAL1 * internal.kcat_TAL1 * (GAP * S7P - F6P * E4P / internal.Keq) / (internal.Kgap_TAL1 * internal.Ks7p_TAL1) / ((1 + GAP / internal.Kgap_TAL1 + F6P / internal.Kf6p_TAL1) * (1 + S7P / internal.Ks7p_TAL1 + E4P / internal.Ke4p_TAL1)) + NQM1 * internal.kcat_NQM1 * (GAP * S7P - F6P * E4P / internal.Keq) / (internal.Kgap_NQM1 * internal.Ks7p_NQM1) / ((1 + GAP / internal.Kgap_NQM1 + F6P / internal.Kf6p_NQM1) * (1 + S7P / internal.Ks7p_NQM1 + E4P / internal.Ke4p_NQM1))) - 1 * internal.cell * TKL1 * internal.kcat * (X5P * E4P - GAP * F6P / internal.Keq) / (internal.Kx5p_TAL * internal.Ke4p_TAL) / ((1 + X5P / internal.Kx5p_TAL + GAP / internal.Kgap_TAL) * (1 + E4P / internal.Ke4p_TAL + F6P / internal.Kf6p_TAL + R5P / internal.Kr5p_TAL + S7P / internal.Ks7p_TAL)) - 1 * internal.cell * internal.kxk * E4P;
    dstatedt[4] = 0 + 1 * internal.cell * RKI1 * internal.kcat * (Ru5P - R5P / internal.Keq) / internal.Kru5p / (1 + Ru5P / internal.Kru5p + R5P / internal.Kr5p) - 1 * internal.cell * TKL1 * internal.kcat * (X5P * R5P - GAP * S7P / internal.Keq) / (internal.Kx5p_TAL * internal.Kr5p_TAL) / ((1 + X5P / internal.Kx5p_TAL + GAP / internal.Kgap_TAL) * (1 + E4P / internal.Ke4p_TAL + F6P / internal.Kf6p_TAL + R5P / internal.Kr5p_TAL + S7P / internal.Ks7p_TAL)) - 1 * internal.cell * internal.kxk * R5P;
    dstatedt[6] = 0 - 1 * internal.cell * (TAL1 * internal.kcat_TAL1 * (GAP * S7P - F6P * E4P / internal.Keq) / (internal.Kgap_TAL1 * internal.Ks7p_TAL1) / ((1 + GAP / internal.Kgap_TAL1 + F6P / internal.Kf6p_TAL1) * (1 + S7P / internal.Ks7p_TAL1 + E4P / internal.Ke4p_TAL1)) + NQM1 * internal.kcat_NQM1 * (GAP * S7P - F6P * E4P / internal.Keq) / (internal.Kgap_NQM1 * internal.Ks7p_NQM1) / ((1 + GAP / internal.Kgap_NQM1 + F6P / internal.Kf6p_NQM1) * (1 + S7P / internal.Ks7p_NQM1 + E4P / internal.Ke4p_NQM1))) + 1 * internal.cell * TKL1 * internal.kcat * (X5P * R5P - GAP * S7P / internal.Keq) / (internal.Kx5p_TAL * internal.Kr5p_TAL) / ((1 + X5P / internal.Kx5p_TAL + GAP / internal.Kgap_TAL) * (1 + E4P / internal.Ke4p_TAL + F6P / internal.Kf6p_TAL + R5P / internal.Kr5p_TAL + S7P / internal.Ks7p_TAL));
    dstatedt[7] = 0 + 1 * internal.cell * RPE1 * internal.kcat * (Ru5P - X5P / internal.Keq) / internal.Kru5p / (1 + Ru5P / internal.Kru5p + X5P / internal.Kx5p) - 1 * internal.cell * TKL1 * internal.kcat * (X5P * E4P - GAP * F6P / internal.Keq) / (internal.Kx5p_TAL * internal.Ke4p_TAL) / ((1 + X5P / internal.Kx5p_TAL + GAP / internal.Kgap_TAL) * (1 + E4P / internal.Ke4p_TAL + F6P / internal.Kf6p_TAL + R5P / internal.Kr5p_TAL + S7P / internal.Ks7p_TAL)) - 1 * internal.cell * TKL1 * internal.kcat * (X5P * R5P - GAP * S7P / internal.Keq) / (internal.Kx5p_TAL * internal.Kr5p_TAL) / ((1 + X5P / internal.Kx5p_TAL + GAP / internal.Kgap_TAL) * (1 + E4P / internal.Ke4p_TAL + F6P / internal.Kf6p_TAL + R5P / internal.Kr5p_TAL + S7P / internal.Ks7p_TAL));
    var G6P = 0.90000000000000002 + ((t >= 0 ? 44.100000000000001 * t / (48 + t + 0.45000000000000001 * Math.pow((t), (2))) : 0));
    var NADP = internal.sum_NADP - NADPH;
    dstatedt[1] = 0 - 1 * internal.cell * SOL3 * internal.kcat * G6L / internal.Kg6l / (1 + G6L / internal.Kg6l + P6G / internal.Kp6g) + 1 * internal.cell * ZWF1 * internal.kcat * G6P * NADP / (internal.Kg6p * internal.Knadp) / ((1 + G6P / internal.Kg6p + G6L / internal.Kg6l) * (1 + NADP / internal.Knadp + NADPH / internal.Knadph));
    dstatedt[2] = 0 + 1 * internal.cell * (GND1 * internal.kcat_GND1 * P6G * NADP / (internal.Kp6g_GND1 * internal.Knadp_GND1) / ((1 + P6G / internal.Kp6g_GND1 + Ru5P / internal.Kru5p_GND1) * (1 + NADP / internal.Knadp_GND1 + NADPH / internal.Knadph_GND1)) + GND2 * internal.kcat_GND2 * P6G * NADP / ((1 + P6G / internal.Kp6g_GND2 + Ru5P / internal.Kru5p_GND2) * (1 + NADP / internal.Knadp_GND2 + NADPH / internal.Knadph_GND2))) + 1 * internal.cell * ZWF1 * internal.kcat * G6P * NADP / (internal.Kg6p * internal.Knadp) / ((1 + G6P / internal.Kg6p + G6L / internal.Kg6l) * (1 + NADP / internal.Knadp + NADPH / internal.Knadph)) - 1 * internal.cell * internal.kxk * NADPH;
    dstatedt[3] = 0 - 1 * internal.cell * (GND1 * internal.kcat_GND1 * P6G * NADP / (internal.Kp6g_GND1 * internal.Knadp_GND1) / ((1 + P6G / internal.Kp6g_GND1 + Ru5P / internal.Kru5p_GND1) * (1 + NADP / internal.Knadp_GND1 + NADPH / internal.Knadph_GND1)) + GND2 * internal.kcat_GND2 * P6G * NADP / ((1 + P6G / internal.Kp6g_GND2 + Ru5P / internal.Kru5p_GND2) * (1 + NADP / internal.Knadp_GND2 + NADPH / internal.Knadph_GND2))) + 1 * internal.cell * SOL3 * internal.kcat * G6L / internal.Kg6l / (1 + G6L / internal.Kg6l + P6G / internal.Kp6g);
    dstatedt[5] = 0 + 1 * internal.cell * (GND1 * internal.kcat_GND1 * P6G * NADP / (internal.Kp6g_GND1 * internal.Knadp_GND1) / ((1 + P6G / internal.Kp6g_GND1 + Ru5P / internal.Kru5p_GND1) * (1 + NADP / internal.Knadp_GND1 + NADPH / internal.Knadph_GND1)) + GND2 * internal.kcat_GND2 * P6G * NADP / ((1 + P6G / internal.Kp6g_GND2 + Ru5P / internal.Kru5p_GND2) * (1 + NADP / internal.Knadp_GND2 + NADPH / internal.Knadph_GND2))) - 1 * internal.cell * RKI1 * internal.kcat * (Ru5P - R5P / internal.Keq) / internal.Kru5p / (1 + Ru5P / internal.Kru5p + R5P / internal.Kr5p) - 1 * internal.cell * RPE1 * internal.kcat * (Ru5P - X5P / internal.Keq) / internal.Kru5p / (1 + Ru5P / internal.Kru5p + X5P / internal.Kx5p);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "E4P", "G6L", "NADPH", "P6G", "R5P", "Ru5P", "S7P", "X5P", "F6P", "GAP", "GND1", "GND2", "NQM1", "RKI1", "RPE1", "SOL3", "TAL1", "TKL1", "ZWF1"];
    this.metadata.internalOrder = {cell: null, E4P_init: null, F6P_init: null, G6L_init: null, GAP_init: null, GND1_init: null, GND2_init: null, initial_E4P: null, initial_F6P: null, initial_G6L: null, initial_GAP: null, initial_GND1: null, initial_GND2: null, initial_NADPH: null, initial_NQM1: null, initial_P6G: null, initial_R5P: null, initial_RKI1: null, initial_RPE1: null, initial_Ru5P: null, initial_S7P: null, initial_SOL3: null, initial_TAL1: null, initial_TKL1: null, initial_X5P: null, initial_ZWF1: null, kcat: null, kcat_GND1: null, kcat_GND2: null, kcat_NQM1: null, kcat_TAL1: null, Ke4p_NQM1: null, Ke4p_TAL: null, Ke4p_TAL1: null, Keq: null, Kf6p_NQM1: null, Kf6p_TAL: null, Kf6p_TAL1: null, Kg6l: null, Kg6p: null, Kgap_NQM1: null, Kgap_TAL: null, Kgap_TAL1: null, Kiru5p: null, Knadp: null, Knadp_GND1: null, Knadp_GND2: null, Knadph: null, Knadph_GND1: null, Knadph_GND2: null, Kp6g: null, Kp6g_GND1: null, Kp6g_GND2: null, Kr5p: null, Kr5p_TAL: null, Kru5p: null, Kru5p_GND1: null, Kru5p_GND2: null, Ks7p_NQM1: null, Ks7p_TAL: null, Ks7p_TAL1: null, Kx5p: null, Kx5p_TAL: null, kxk: null, NADPH_init: null, NQM1_init: null, P6G_init: null, R5P_init: null, RKI1_init: null, RPE1_init: null, Ru5P_init: null, S7P_init: null, SOL3_init: null, sum_NADP: null, TAL1_init: null, TKL1_init: null, X5P_init: null, ZWF1_init: null};
    this.metadata.variableOrder = {E4P: null, G6L: null, NADPH: null, P6G: null, R5P: null, Ru5P: null, S7P: null, X5P: null, F6P: null, GAP: null, GND1: null, GND2: null, NQM1: null, RKI1: null, RPE1: null, SOL3: null, TAL1: null, TKL1: null, ZWF1: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
