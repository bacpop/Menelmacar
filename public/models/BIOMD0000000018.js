export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.ATP = 2980;
    internal.cell = 1;
    internal.dUMP = 20.760000000000002;
    internal.EMTX = 0;
    internal.ext = 1;
    internal.formate = 500;
    internal.GAR = 689.60000000000002;
    internal.glutamine = 7170;
    internal.glycine = 1600;
    internal.homocysteine = 10;
    internal.NADP = 6.7300000000000004;
    internal.NADPH = 294;
    internal.serine = 123.3;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(20).fill(0);
    state[0] = internal.initial_FH2f;
    state[1] = internal.initial_DHFRf;
    state[2] = internal.initial_FH4;
    state[3] = internal.initial_CH2FH4;
    state[4] = internal.initial_CH3FH4;
    state[5] = internal.initial_CHOFH4;
    state[6] = internal.initial_FFH2;
    state[7] = internal.initial_HCHO;
    state[8] = internal.initial_FGAR;
    state[9] = internal.initial_AICAR;
    state[10] = internal.initial_MTX1;
    state[11] = internal.initial_MTX2;
    state[12] = internal.initial_MTX3;
    state[13] = internal.initial_MTX4;
    state[14] = internal.initial_MTX5;
    state[15] = internal.initial_MTX1b;
    state[16] = internal.initial_MTX2b;
    state[17] = internal.initial_MTX3b;
    state[18] = internal.initial_MTX4b;
    state[19] = internal.initial_MTX5b;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["AICAR_init", "CH2FH4_init", "CH3FH4_init", "CHOFH4_init", "DHFRf_init", "FFH2_init", "FGAR_init", "FH2f_init", "FH4_init", "HCHO_init", "hl", "hp", "k0", "k1", "Keq", "Ki1", "Ki1f", "Ki21", "Ki22", "Ki23", "Ki24", "Ki25", "Km", "Km1", "Km2", "Km3", "kter", "MTX1_init", "MTX1b_init", "MTX2_init", "MTX2b_init", "MTX3_init", "MTX3b_init", "MTX4_init", "MTX4b_init", "MTX5_init", "MTX5b_init", "Vm"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "AICAR_init", internal, 3.6949999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CH2FH4_init", internal, 0.26000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CH3FH4_init", internal, 1.6299999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CHOFH4_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DHFRf_init", internal, 0.64000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FFH2_init", internal, 0.00033199999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FGAR_init", internal, 16.489999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FH2f_init", internal, 0.0011999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FH4_init", internal, 0.46000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HCHO_init", internal, 0.0074000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "hl", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "hp", internal, 23.199999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k0", internal, 0.019199999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.044159999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Keq", internal, 0.32000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ki1", internal, 2.8900000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ki1f", internal, 5.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ki21", internal, 40, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ki22", internal, 31.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ki23", internal, 2.3300000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ki24", internal, 3.6099999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ki25", internal, 5.8899999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km", internal, 8.1999999999999993, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km1", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km2", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km3", internal, 1600, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kter", internal, 2109.4000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MTX1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MTX1b_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MTX2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MTX2b_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MTX3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MTX3b_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MTX4_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MTX4b_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MTX5_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MTX5b_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vm", internal, 0.029999999999999999, -Infinity, Infinity, false);
    internal.initial_AICAR = internal.AICAR_init;
    internal.initial_CH2FH4 = internal.CH2FH4_init;
    internal.initial_CH3FH4 = internal.CH3FH4_init;
    internal.initial_CHOFH4 = internal.CHOFH4_init;
    internal.initial_DHFRf = internal.DHFRf_init;
    internal.initial_FFH2 = internal.FFH2_init;
    internal.initial_FGAR = internal.FGAR_init;
    internal.initial_FH2f = internal.FH2f_init;
    internal.initial_FH4 = internal.FH4_init;
    internal.initial_HCHO = internal.HCHO_init;
    internal.initial_MTX1 = internal.MTX1_init;
    internal.initial_MTX1b = internal.MTX1b_init;
    internal.initial_MTX2 = internal.MTX2_init;
    internal.initial_MTX2b = internal.MTX2b_init;
    internal.initial_MTX3 = internal.MTX3_init;
    internal.initial_MTX3b = internal.MTX3b_init;
    internal.initial_MTX4 = internal.MTX4_init;
    internal.initial_MTX4b = internal.MTX4b_init;
    internal.initial_MTX5 = internal.MTX5_init;
    internal.initial_MTX5b = internal.MTX5b_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const FH2f = state[0];
    const DHFRf = state[1];
    const FH4 = state[2];
    const CH2FH4 = state[3];
    const CH3FH4 = state[4];
    const CHOFH4 = state[5];
    const FFH2 = state[6];
    const HCHO = state[7];
    const FGAR = state[8];
    const AICAR = state[9];
    const MTX1 = state[10];
    const MTX2 = state[11];
    const MTX3 = state[12];
    const MTX4 = state[13];
    const MTX5 = state[14];
    const MTX1b = state[15];
    const MTX2b = state[16];
    const MTX3b = state[17];
    const MTX4b = state[18];
    const MTX5b = state[19];
    dstatedt[9] = 0 - 1 * internal.cell * (internal.Vm * CHOFH4 * AICAR / (AICAR * CHOFH4 + CHOFH4 * internal.Km2 + (AICAR + internal.Km2) * internal.Km1 * (1 + MTX1 / internal.Ki21 + MTX2 / internal.Ki22 + MTX3 / internal.Ki23 + MTX4 / internal.Ki24 + MTX5 / internal.Ki25 + FH2f / internal.Ki1 + FFH2 / internal.Ki1f))) - 1 * internal.cell * (internal.Vm * FFH2 * AICAR / (AICAR * FFH2 + FFH2 * internal.Km2 + (AICAR + internal.Km2) * internal.Km1 * (1 + MTX1 / internal.Ki21 + MTX2 / internal.Ki22 + MTX3 / internal.Ki23 + MTX4 / internal.Ki24 + MTX5 / internal.Ki25 + FH2f / internal.Ki1 + FFH2 / internal.Ki1f))) + 1 * internal.cell * internal.Vm * (internal.glutamine / internal.Km1 / (1 + internal.glutamine / internal.Km1)) * (FGAR / internal.Km2 / (1 + FGAR / internal.Km2));
    dstatedt[3] = 0 + 1 * internal.cell * (internal.Vm * (internal.serine / internal.Km2 / (1 + internal.serine / internal.Km2)) * (FH4 / internal.Km1) / (1 + FH4 / internal.Km1)) - 1 * internal.cell * (internal.Vm * (internal.glycine / internal.Km2 / (1 + internal.glycine / internal.Km2)) * (CH2FH4 / internal.Km1) / (1 + CH2FH4 / internal.Km1)) + 1 * internal.cell * internal.hp * FH4 * HCHO - 1 * internal.cell * internal.hl * CH2FH4 - 1 * internal.cell * (internal.Vm * CH2FH4 * internal.NADPH / (internal.NADPH * CH2FH4 + CH2FH4 * internal.Km2 + (internal.NADPH + internal.Km2) * internal.Km1 * (1 + MTX1 / internal.Ki21 + MTX2 / internal.Ki22 + MTX3 / internal.Ki23 + MTX4 / internal.Ki24 + MTX5 / internal.Ki25 + FH2f / internal.Ki1))) - 1 * internal.cell * internal.Vm * (CH2FH4 / internal.Km1 / (1 + CH2FH4 / internal.Km1)) * (internal.NADP / internal.Km2 / (1 + internal.NADP / internal.Km2)) - 1 * internal.cell * (internal.Vm * CH2FH4 * internal.dUMP / (internal.dUMP * CH2FH4 * (1 + MTX1 / internal.Ki21 + MTX2 / internal.Ki22 + MTX3 / internal.Ki23 + MTX4 / internal.Ki24 + MTX5 / internal.Ki25 + FH2f / internal.Ki1) + internal.Km1 * internal.dUMP * (FFH2 / internal.Ki1f * (MTX1 / internal.Ki21) + (1 + FFH2 / internal.Ki1f) * (1 + MTX2 / internal.Ki22 + MTX3 / internal.Ki23 + MTX4 / internal.Ki24 + MTX5 / internal.Ki25 + FH2f / internal.Ki1)) + internal.Km1 * internal.Km2 * (1 + MTX2 / internal.Ki22 + MTX3 / internal.Ki23 + MTX4 / internal.Ki24 + MTX5 / internal.Ki25 + FH2f / internal.Ki1)));
    dstatedt[4] = 0 + 1 * internal.cell * (internal.Vm * CH2FH4 * internal.NADPH / (internal.NADPH * CH2FH4 + CH2FH4 * internal.Km2 + (internal.NADPH + internal.Km2) * internal.Km1 * (1 + MTX1 / internal.Ki21 + MTX2 / internal.Ki22 + MTX3 / internal.Ki23 + MTX4 / internal.Ki24 + MTX5 / internal.Ki25 + FH2f / internal.Ki1))) - 1 * internal.cell * (internal.Vm * (internal.homocysteine / internal.Km2 / (1 + internal.homocysteine / internal.Km2)) * (CH3FH4 / internal.Km1) / (1 + CH3FH4 / internal.Km1));
    dstatedt[5] = 0 + 1 * internal.cell * (internal.Vm / ((1 + internal.Km1 / FH4) * (1 + internal.Km2 / internal.ATP) * (1 + internal.Km3 / internal.formate))) - 1 * internal.cell * (internal.Vm * CHOFH4 * internal.GAR / (internal.GAR * CHOFH4 + CHOFH4 * internal.Km2 + (internal.GAR + internal.Km2) * internal.Km1 * (1 + MTX1 / internal.Ki21 + MTX2 / internal.Ki22 + MTX3 / internal.Ki23 + MTX4 / internal.Ki24 + MTX5 / internal.Ki25 + FH2f / internal.Ki1 + FFH2 / internal.Ki1f))) - 1 * internal.cell * (internal.Vm * CHOFH4 * AICAR / (AICAR * CHOFH4 + CHOFH4 * internal.Km2 + (AICAR + internal.Km2) * internal.Km1 * (1 + MTX1 / internal.Ki21 + MTX2 / internal.Ki22 + MTX3 / internal.Ki23 + MTX4 / internal.Ki24 + MTX5 / internal.Ki25 + FH2f / internal.Ki1 + FFH2 / internal.Ki1f))) + 1 * internal.cell * internal.Vm * (CH2FH4 / internal.Km1 / (1 + CH2FH4 / internal.Km1)) * (internal.NADP / internal.Km2 / (1 + internal.NADP / internal.Km2));
    dstatedt[6] = 0 + 1 * internal.cell * internal.Vm * FH2f - 1 * internal.cell * (internal.Vm * FFH2 * AICAR / (AICAR * FFH2 + FFH2 * internal.Km2 + (AICAR + internal.Km2) * internal.Km1 * (1 + MTX1 / internal.Ki21 + MTX2 / internal.Ki22 + MTX3 / internal.Ki23 + MTX4 / internal.Ki24 + MTX5 / internal.Ki25 + FH2f / internal.Ki1 + FFH2 / internal.Ki1f)));
    dstatedt[8] = 0 + 1 * internal.cell * (internal.Vm * CHOFH4 * internal.GAR / (internal.GAR * CHOFH4 + CHOFH4 * internal.Km2 + (internal.GAR + internal.Km2) * internal.Km1 * (1 + MTX1 / internal.Ki21 + MTX2 / internal.Ki22 + MTX3 / internal.Ki23 + MTX4 / internal.Ki24 + MTX5 / internal.Ki25 + FH2f / internal.Ki1 + FFH2 / internal.Ki1f))) - 1 * internal.cell * internal.Vm * (internal.glutamine / internal.Km1 / (1 + internal.glutamine / internal.Km1)) * (FGAR / internal.Km2 / (1 + FGAR / internal.Km2));
    dstatedt[7] = 0 - 1 * internal.cell * internal.hp * FH4 * HCHO + 1 * internal.cell * internal.hl * CH2FH4;
    dstatedt[10] = 0 - 1 * internal.cell * internal.Vm * MTX1 + 1 * internal.cell * internal.Vm * MTX2 + 1 * internal.ext * (internal.Vm * internal.EMTX / (internal.Km + internal.EMTX)) - 1 * internal.cell * internal.Vm * MTX1 - 1 * internal.cell * internal.Vm * DHFRf * MTX1 + 1 * internal.cell * internal.Vm * MTX1b + 1 * internal.cell * internal.Vm * MTX1b;
    dstatedt[15] = 0 + 1 * internal.cell * internal.Vm * DHFRf * MTX1 - 1 * internal.cell * internal.Vm * MTX1b - 1 * internal.cell * internal.Vm * MTX1b;
    dstatedt[11] = 0 + 1 * internal.cell * internal.Vm * MTX1 - 1 * internal.cell * internal.Vm * MTX2 - 1 * internal.cell * internal.Vm * MTX2 + 1 * internal.cell * internal.Vm * MTX3 - 1 * internal.cell * internal.Vm * MTX2 - 1 * internal.cell * internal.Vm * DHFRf * MTX2 + 1 * internal.cell * internal.Vm * MTX2b + 1 * internal.cell * internal.Vm * MTX2b;
    dstatedt[16] = 0 + 1 * internal.cell * internal.Vm * DHFRf * MTX2 - 1 * internal.cell * internal.Vm * MTX2b - 1 * internal.cell * internal.Vm * MTX2b;
    dstatedt[12] = 0 + 1 * internal.cell * internal.Vm * MTX2 - 1 * internal.cell * internal.Vm * MTX3 - 1 * internal.cell * internal.Vm * MTX3 + 1 * internal.cell * internal.Vm * MTX4 - 1 * internal.cell * internal.Vm * MTX3 - 1 * internal.cell * internal.Vm * DHFRf * MTX3 + 1 * internal.cell * internal.Vm * MTX3b + 1 * internal.cell * internal.Vm * MTX3b;
    dstatedt[17] = 0 + 1 * internal.cell * internal.Vm * DHFRf * MTX3 - 1 * internal.cell * internal.Vm * MTX3b - 1 * internal.cell * internal.Vm * MTX3b;
    dstatedt[13] = 0 + 1 * internal.cell * internal.Vm * MTX3 - 1 * internal.cell * internal.Vm * MTX4 - 1 * internal.cell * internal.Vm * MTX4 + 1 * internal.cell * internal.Vm * MTX5 - 1 * internal.cell * internal.Vm * MTX4 - 1 * internal.cell * internal.Vm * DHFRf * MTX4 + 1 * internal.cell * internal.Vm * MTX4b + 1 * internal.cell * internal.Vm * MTX4b;
    dstatedt[18] = 0 + 1 * internal.cell * internal.Vm * DHFRf * MTX4 - 1 * internal.cell * internal.Vm * MTX4b - 1 * internal.cell * internal.Vm * MTX4b;
    dstatedt[14] = 0 + 1 * internal.cell * internal.Vm * MTX4 - 1 * internal.cell * internal.Vm * MTX5 - 1 * internal.cell * internal.Vm * MTX5 - 1 * internal.cell * internal.Vm * DHFRf * MTX5 + 1 * internal.cell * internal.Vm * MTX5b + 1 * internal.cell * internal.Vm * MTX5b;
    dstatedt[19] = 0 + 1 * internal.cell * internal.Vm * DHFRf * MTX5 - 1 * internal.cell * internal.Vm * MTX5b - 1 * internal.cell * internal.Vm * MTX5b;
    var FH2b = FH2f * DHFRf / internal.Keq;
    dstatedt[1] = 0 - 1 * internal.cell * internal.Vm * DHFRf * MTX1 - 1 * internal.cell * internal.Vm * DHFRf * MTX2 - 1 * internal.cell * internal.Vm * DHFRf * MTX3 - 1 * internal.cell * internal.Vm * DHFRf * MTX4 - 1 * internal.cell * internal.Vm * DHFRf * MTX5 + 1 * internal.cell * internal.Vm * MTX1b + 1 * internal.cell * internal.Vm * MTX2b + 1 * internal.cell * internal.Vm * MTX3b + 1 * internal.cell * internal.Vm * MTX4b + 1 * internal.cell * internal.Vm * MTX5b + 1 * internal.cell * (internal.k0 + internal.k1 * internal.EMTX) - 1 * internal.Vm * internal.cell * (DHFRf + FH2b);
    dstatedt[0] = 0 + 1 * internal.cell * (internal.Vm * CH2FH4 * internal.dUMP / (internal.dUMP * CH2FH4 * (1 + MTX1 / internal.Ki21 + MTX2 / internal.Ki22 + MTX3 / internal.Ki23 + MTX4 / internal.Ki24 + MTX5 / internal.Ki25 + FH2f / internal.Ki1) + internal.Km1 * internal.dUMP * (FFH2 / internal.Ki1f * (MTX1 / internal.Ki21) + (1 + FFH2 / internal.Ki1f) * (1 + MTX2 / internal.Ki22 + MTX3 / internal.Ki23 + MTX4 / internal.Ki24 + MTX5 / internal.Ki25 + FH2f / internal.Ki1)) + internal.Km1 * internal.Km2 * (1 + MTX2 / internal.Ki22 + MTX3 / internal.Ki23 + MTX4 / internal.Ki24 + MTX5 / internal.Ki25 + FH2f / internal.Ki1))) - 1 * internal.cell * internal.kter * FH2b - 1 * internal.cell * internal.Vm * FH2f + 1 * internal.cell * (internal.Vm * FFH2 * AICAR / (AICAR * FFH2 + FFH2 * internal.Km2 + (AICAR + internal.Km2) * internal.Km1 * (1 + MTX1 / internal.Ki21 + MTX2 / internal.Ki22 + MTX3 / internal.Ki23 + MTX4 / internal.Ki24 + MTX5 / internal.Ki25 + FH2f / internal.Ki1 + FFH2 / internal.Ki1f))) + 1 * internal.cell * internal.Vm * FH2b;
    dstatedt[2] = 0 - 1 * internal.cell * (internal.Vm * (internal.serine / internal.Km2 / (1 + internal.serine / internal.Km2)) * (FH4 / internal.Km1) / (1 + FH4 / internal.Km1)) + 1 * internal.cell * (internal.Vm * (internal.glycine / internal.Km2 / (1 + internal.glycine / internal.Km2)) * (CH2FH4 / internal.Km1) / (1 + CH2FH4 / internal.Km1)) - 1 * internal.cell * internal.hp * FH4 * HCHO + 1 * internal.cell * internal.hl * CH2FH4 + 1 * internal.cell * (internal.Vm * (internal.homocysteine / internal.Km2 / (1 + internal.homocysteine / internal.Km2)) * (CH3FH4 / internal.Km1) / (1 + CH3FH4 / internal.Km1)) - 1 * internal.cell * (internal.Vm / ((1 + internal.Km1 / FH4) * (1 + internal.Km2 / internal.ATP) * (1 + internal.Km3 / internal.formate))) + 1 * internal.cell * (internal.Vm * CHOFH4 * internal.GAR / (internal.GAR * CHOFH4 + CHOFH4 * internal.Km2 + (internal.GAR + internal.Km2) * internal.Km1 * (1 + MTX1 / internal.Ki21 + MTX2 / internal.Ki22 + MTX3 / internal.Ki23 + MTX4 / internal.Ki24 + MTX5 / internal.Ki25 + FH2f / internal.Ki1 + FFH2 / internal.Ki1f))) + 1 * internal.cell * (internal.Vm * CHOFH4 * AICAR / (AICAR * CHOFH4 + CHOFH4 * internal.Km2 + (AICAR + internal.Km2) * internal.Km1 * (1 + MTX1 / internal.Ki21 + MTX2 / internal.Ki22 + MTX3 / internal.Ki23 + MTX4 / internal.Ki24 + MTX5 / internal.Ki25 + FH2f / internal.Ki1 + FFH2 / internal.Ki1f))) + 1 * internal.cell * internal.kter * FH2b;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "FH2f", "DHFRf", "FH4", "CH2FH4", "CH3FH4", "CHOFH4", "FFH2", "HCHO", "FGAR", "AICAR", "MTX1", "MTX2", "MTX3", "MTX4", "MTX5", "MTX1b", "MTX2b", "MTX3b", "MTX4b", "MTX5b"];
    this.metadata.internalOrder = {AICAR_init: null, ATP: null, cell: null, CH2FH4_init: null, CH3FH4_init: null, CHOFH4_init: null, DHFRf_init: null, dUMP: null, EMTX: null, ext: null, FFH2_init: null, FGAR_init: null, FH2f_init: null, FH4_init: null, formate: null, GAR: null, glutamine: null, glycine: null, HCHO_init: null, hl: null, homocysteine: null, hp: null, initial_AICAR: null, initial_CH2FH4: null, initial_CH3FH4: null, initial_CHOFH4: null, initial_DHFRf: null, initial_FFH2: null, initial_FGAR: null, initial_FH2f: null, initial_FH4: null, initial_HCHO: null, initial_MTX1: null, initial_MTX1b: null, initial_MTX2: null, initial_MTX2b: null, initial_MTX3: null, initial_MTX3b: null, initial_MTX4: null, initial_MTX4b: null, initial_MTX5: null, initial_MTX5b: null, k0: null, k1: null, Keq: null, Ki1: null, Ki1f: null, Ki21: null, Ki22: null, Ki23: null, Ki24: null, Ki25: null, Km: null, Km1: null, Km2: null, Km3: null, kter: null, MTX1_init: null, MTX1b_init: null, MTX2_init: null, MTX2b_init: null, MTX3_init: null, MTX3b_init: null, MTX4_init: null, MTX4b_init: null, MTX5_init: null, MTX5b_init: null, NADP: null, NADPH: null, serine: null, Vm: null};
    this.metadata.variableOrder = {FH2f: null, DHFRf: null, FH4: null, CH2FH4: null, CH3FH4: null, CHOFH4: null, FFH2: null, HCHO: null, FGAR: null, AICAR: null, MTX1: null, MTX2: null, MTX3: null, MTX4: null, MTX5: null, MTX1b: null, MTX2b: null, MTX3b: null, MTX4b: null, MTX5b: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
