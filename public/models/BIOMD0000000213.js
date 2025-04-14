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
    var state = Array(14).fill(0);
    state[0] = internal.initial_p_5mTHF;
    state[1] = internal.initial_THF;
    state[2] = internal.initial_DHF;
    state[3] = internal.initial_p_5_10_CH2THF;
    state[4] = internal.initial_p_5_10_CHTHF;
    state[5] = internal.initial_p_10fTHF;
    state[6] = internal.initial_Ser;
    state[7] = internal.initial_Gly;
    state[8] = internal.initial_dUMP;
    state[9] = internal.initial_GAR;
    state[10] = internal.initial_AICAR;
    state[11] = internal.initial_HCOOH;
    state[12] = internal.initial_NADPH;
    state[13] = internal.initial_Hcy;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["AICAR_init", "AICART_Km_AICAR", "AICART_Kmp_10fTHF", "AICART_Vmax", "DHF_init", "DHFR_Km_DHF", "DHFR_Km_NADPH", "DHFR_Vmax", "dUMP_init", "FTD_Kmp_10fTHF", "FTD_Vmax", "FTS_Km_HCOOH", "FTS_Km_THF", "FTS_Vmax", "GAR_init", "Gly_init", "HCOOH_init", "Hcy_init", "MS_Kd", "MS_Km_Hcy", "MS_Kmp_5mTHF", "MS_Vmax", "MTCH_Kmp_10fTHF", "MTCH_Kmp_5_10_CHTHF", "MTCH_VmaxF", "MTCH_VmaxR", "MTD_Kmp_5_10_CH2THF", "MTD_Kmp_5_10_CHTHF", "MTD_VmaxF", "MTD_VmaxR", "MTHFR_Km_NADPH", "MTHFR_Kmp_5_10_CH2THF", "MTHFR_Vmax", "NADPH_init", "NE_k1", "NE_k2", "p_10fTHF_init", "p_5_10_CH2THF_init", "p_5_10_CHTHF_init", "p_5mTHF_init", "PGT_Km_GAR", "PGT_Kmp_10fTHF", "PGT_Vmax", "Ser_init", "SHMT_Km_Ser", "SHMT_Km_THF", "SHMT_VmaxF", "SHMT_VmaxR", "THF_init", "TS_Km_dUMP", "TS_Kmp_5_10_CH2THF", "TS_Vmax"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "AICAR_init", internal, 2.1000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AICART_Km_AICAR", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AICART_Kmp_10fTHF", internal, 5.9000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AICART_Vmax", internal, 45000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DHF_init", internal, 0.027, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DHFR_Km_DHF", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DHFR_Km_NADPH", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DHFR_Vmax", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dUMP_init", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FTD_Kmp_10fTHF", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FTD_Vmax", internal, 14000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FTS_Km_HCOOH", internal, 43, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FTS_Km_THF", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FTS_Vmax", internal, 2000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GAR_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Gly_init", internal, 1850, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HCOOH_init", internal, 900, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Hcy_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MS_Kd", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MS_Km_Hcy", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MS_Kmp_5mTHF", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MS_Vmax", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MTCH_Kmp_10fTHF", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MTCH_Kmp_5_10_CHTHF", internal, 250, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MTCH_VmaxF", internal, 800000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MTCH_VmaxR", internal, 20000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MTD_Kmp_5_10_CH2THF", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MTD_Kmp_5_10_CHTHF", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MTD_VmaxF", internal, 200000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MTD_VmaxR", internal, 594000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MTHFR_Km_NADPH", internal, 16, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MTHFR_Kmp_5_10_CH2THF", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MTHFR_Vmax", internal, 6000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NADPH_init", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NE_k1", internal, 0.14999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NE_k2", internal, 12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_10fTHF_init", internal, 5.9900000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_5_10_CH2THF_init", internal, 0.93999999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_5_10_CHTHF_init", internal, 1.153, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_5mTHF_init", internal, 5.1600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PGT_Km_GAR", internal, 520, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PGT_Kmp_10fTHF", internal, 4.9000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PGT_Vmax", internal, 16200, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ser_init", internal, 468, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SHMT_Km_Ser", internal, 600, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SHMT_Km_THF", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SHMT_VmaxF", internal, 40000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SHMT_VmaxR", internal, 25000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "THF_init", internal, 6.7300000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TS_Km_dUMP", internal, 6.2999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TS_Kmp_5_10_CH2THF", internal, 14, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TS_Vmax", internal, 50, -Infinity, Infinity, false);
    internal.initial_AICAR = internal.AICAR_init;
    internal.initial_DHF = internal.DHF_init;
    internal.initial_dUMP = internal.dUMP_init;
    internal.initial_GAR = internal.GAR_init;
    internal.initial_Gly = internal.Gly_init;
    internal.initial_HCOOH = internal.HCOOH_init;
    internal.initial_Hcy = internal.Hcy_init;
    internal.initial_NADPH = internal.NADPH_init;
    internal.initial_p_10fTHF = internal.p_10fTHF_init;
    internal.initial_p_5_10_CH2THF = internal.p_5_10_CH2THF_init;
    internal.initial_p_5_10_CHTHF = internal.p_5_10_CHTHF_init;
    internal.initial_p_5mTHF = internal.p_5mTHF_init;
    internal.initial_Ser = internal.Ser_init;
    internal.initial_THF = internal.THF_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const p_5mTHF = state[0];
    const THF = state[1];
    const DHF = state[2];
    const p_5_10_CH2THF = state[3];
    const p_5_10_CHTHF = state[4];
    const p_10fTHF = state[5];
    const Ser = state[6];
    const Gly = state[7];
    const dUMP = state[8];
    const GAR = state[9];
    const AICAR = state[10];
    const HCOOH = state[11];
    const NADPH = state[12];
    const Hcy = state[13];
    dstatedt[10] = 0;
    dstatedt[8] = 0;
    dstatedt[9] = 0;
    dstatedt[7] = 0;
    dstatedt[11] = 0;
    dstatedt[13] = 0;
    dstatedt[12] = 0;
    dstatedt[6] = 0;
    dstatedt[2] = 0 + 1 * internal.TS_Vmax * (dUMP / (internal.TS_Km_dUMP + dUMP)) * (p_5_10_CH2THF / (internal.TS_Kmp_5_10_CH2THF + p_5_10_CH2THF)) - 1 * internal.DHFR_Vmax * (NADPH / (internal.DHFR_Km_NADPH + NADPH)) * (DHF / (internal.DHFR_Km_DHF + DHF));
    dstatedt[5] = 0 - 1 * internal.FTD_Vmax * (p_10fTHF / (internal.FTD_Kmp_10fTHF + p_10fTHF)) + 1 * internal.FTS_Vmax * (HCOOH / (internal.FTS_Km_HCOOH + HCOOH)) * (THF / (internal.FTS_Km_THF + THF)) - 1 * internal.AICART_Vmax * (AICAR / (internal.AICART_Km_AICAR + AICAR)) * (p_10fTHF / (internal.AICART_Kmp_10fTHF + p_10fTHF)) - 1 * internal.PGT_Vmax * (GAR / (internal.PGT_Km_GAR + GAR)) * (p_10fTHF / (internal.PGT_Kmp_10fTHF + p_10fTHF)) + 1 * internal.MTCH_VmaxF * (p_5_10_CHTHF / (internal.MTCH_Kmp_5_10_CHTHF + p_5_10_CHTHF)) - internal.MTCH_VmaxR * (p_10fTHF / (internal.MTCH_Kmp_10fTHF + p_10fTHF));
    dstatedt[3] = 0 + 1 * HCOOH * internal.NE_k1 * THF - internal.NE_k2 * p_5_10_CH2THF - 1 * internal.MTHFR_Vmax * (NADPH / (internal.MTHFR_Km_NADPH + NADPH)) * (p_5_10_CH2THF / (internal.MTHFR_Kmp_5_10_CH2THF + p_5_10_CH2THF)) - 1 * internal.TS_Vmax * (dUMP / (internal.TS_Km_dUMP + dUMP)) * (p_5_10_CH2THF / (internal.TS_Kmp_5_10_CH2THF + p_5_10_CH2THF)) + 1 * internal.SHMT_VmaxF * (Ser / (internal.SHMT_Km_Ser + Ser)) * (THF / (internal.SHMT_Km_THF + THF)) - internal.SHMT_VmaxR * (Gly / (internal.SHMT_Km_Ser + Gly)) * (p_5_10_CH2THF / (internal.SHMT_Km_THF + p_5_10_CH2THF)) - 1 * internal.MTD_VmaxF * (p_5_10_CH2THF / (internal.MTD_Kmp_5_10_CH2THF + p_5_10_CH2THF)) - internal.MTD_VmaxR * (p_5_10_CHTHF / (internal.MTD_Kmp_5_10_CHTHF + p_5_10_CHTHF));
    dstatedt[4] = 0 - 1 * internal.MTCH_VmaxF * (p_5_10_CHTHF / (internal.MTCH_Kmp_5_10_CHTHF + p_5_10_CHTHF)) - internal.MTCH_VmaxR * (p_10fTHF / (internal.MTCH_Kmp_10fTHF + p_10fTHF)) + 1 * internal.MTD_VmaxF * (p_5_10_CH2THF / (internal.MTD_Kmp_5_10_CH2THF + p_5_10_CH2THF)) - internal.MTD_VmaxR * (p_5_10_CHTHF / (internal.MTD_Kmp_5_10_CHTHF + p_5_10_CHTHF));
    dstatedt[0] = 0 - 1 * internal.MS_Vmax * (p_5mTHF / internal.MS_Kmp_5mTHF) * (Hcy / internal.MS_Km_Hcy) / (internal.MS_Kd / internal.MS_Kmp_5mTHF + p_5mTHF / internal.MS_Kmp_5mTHF + Hcy / internal.MS_Km_Hcy + p_5mTHF * Hcy / (internal.MS_Kmp_5mTHF * internal.MS_Km_Hcy)) + 1 * internal.MTHFR_Vmax * (NADPH / (internal.MTHFR_Km_NADPH + NADPH)) * (p_5_10_CH2THF / (internal.MTHFR_Kmp_5_10_CH2THF + p_5_10_CH2THF));
    dstatedt[1] = 0 - 1 * HCOOH * internal.NE_k1 * THF - internal.NE_k2 * p_5_10_CH2THF + 1 * internal.MS_Vmax * (p_5mTHF / internal.MS_Kmp_5mTHF) * (Hcy / internal.MS_Km_Hcy) / (internal.MS_Kd / internal.MS_Kmp_5mTHF + p_5mTHF / internal.MS_Kmp_5mTHF + Hcy / internal.MS_Km_Hcy + p_5mTHF * Hcy / (internal.MS_Kmp_5mTHF * internal.MS_Km_Hcy)) + 1 * internal.FTD_Vmax * (p_10fTHF / (internal.FTD_Kmp_10fTHF + p_10fTHF)) - 1 * internal.FTS_Vmax * (HCOOH / (internal.FTS_Km_HCOOH + HCOOH)) * (THF / (internal.FTS_Km_THF + THF)) + 1 * internal.AICART_Vmax * (AICAR / (internal.AICART_Km_AICAR + AICAR)) * (p_10fTHF / (internal.AICART_Kmp_10fTHF + p_10fTHF)) + 1 * internal.PGT_Vmax * (GAR / (internal.PGT_Km_GAR + GAR)) * (p_10fTHF / (internal.PGT_Kmp_10fTHF + p_10fTHF)) + 1 * internal.DHFR_Vmax * (NADPH / (internal.DHFR_Km_NADPH + NADPH)) * (DHF / (internal.DHFR_Km_DHF + DHF)) - 1 * internal.SHMT_VmaxF * (Ser / (internal.SHMT_Km_Ser + Ser)) * (THF / (internal.SHMT_Km_THF + THF)) - internal.SHMT_VmaxR * (Gly / (internal.SHMT_Km_Ser + Gly)) * (p_5_10_CH2THF / (internal.SHMT_Km_THF + p_5_10_CH2THF));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "p_5mTHF", "THF", "DHF", "p_5_10_CH2THF", "p_5_10_CHTHF", "p_10fTHF", "Ser", "Gly", "dUMP", "GAR", "AICAR", "HCOOH", "NADPH", "Hcy"];
    this.metadata.internalOrder = {AICAR_init: null, AICART_Km_AICAR: null, AICART_Kmp_10fTHF: null, AICART_Vmax: null, compartment: null, DHF_init: null, DHFR_Km_DHF: null, DHFR_Km_NADPH: null, DHFR_Vmax: null, dUMP_init: null, FTD_Kmp_10fTHF: null, FTD_Vmax: null, FTS_Km_HCOOH: null, FTS_Km_THF: null, FTS_Vmax: null, GAR_init: null, Gly_init: null, HCOOH_init: null, Hcy_init: null, initial_AICAR: null, initial_DHF: null, initial_dUMP: null, initial_GAR: null, initial_Gly: null, initial_HCOOH: null, initial_Hcy: null, initial_NADPH: null, initial_p_10fTHF: null, initial_p_5_10_CH2THF: null, initial_p_5_10_CHTHF: null, initial_p_5mTHF: null, initial_Ser: null, initial_THF: null, MS_Kd: null, MS_Km_Hcy: null, MS_Kmp_5mTHF: null, MS_Vmax: null, MTCH_Kmp_10fTHF: null, MTCH_Kmp_5_10_CHTHF: null, MTCH_VmaxF: null, MTCH_VmaxR: null, MTD_Kmp_5_10_CH2THF: null, MTD_Kmp_5_10_CHTHF: null, MTD_VmaxF: null, MTD_VmaxR: null, MTHFR_Km_NADPH: null, MTHFR_Kmp_5_10_CH2THF: null, MTHFR_Vmax: null, NADPH_init: null, NE_k1: null, NE_k2: null, p_10fTHF_init: null, p_5_10_CH2THF_init: null, p_5_10_CHTHF_init: null, p_5mTHF_init: null, PGT_Km_GAR: null, PGT_Kmp_10fTHF: null, PGT_Vmax: null, Ser_init: null, SHMT_Km_Ser: null, SHMT_Km_THF: null, SHMT_VmaxF: null, SHMT_VmaxR: null, THF_init: null, TS_Km_dUMP: null, TS_Kmp_5_10_CH2THF: null, TS_Vmax: null};
    this.metadata.variableOrder = {p_5mTHF: null, THF: null, DHF: null, p_5_10_CH2THF: null, p_5_10_CHTHF: null, p_10fTHF: null, Ser: null, Gly: null, dUMP: null, GAR: null, AICAR: null, HCOOH: null, NADPH: null, Hcy: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
