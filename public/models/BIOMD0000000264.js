export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Cell = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var EGFR_i_init = internal.initial_pro_EGFR - internal.initial_EGFR;
    var EGFR_init = internal.initial_pro_EGFR / (1 + internal.inhibitor_binding_kf * internal.initial_Inhibitor / (internal.inhibitor_binding_kb + internal.EGFR_turnover));
    internal.initial_EGFR = EGFR_init;
    internal.initial_EGFR_i = EGFR_i_init;
    var state = Array(13).fill(0);
    state[0] = internal.initial_EGFR;
    state[1] = internal.initial_pEGFR;
    state[2] = internal.initial_pEGFR_Akt;
    state[3] = internal.initial_Akt;
    state[4] = internal.initial_pAkt;
    state[5] = internal.initial_S6;
    state[6] = internal.initial_pAkt_S6;
    state[7] = internal.initial_pS6;
    state[8] = internal.initial_EGF_EGFR;
    state[9] = internal.initial_EGFR_i;
    state[10] = internal.initial_EGF_EGFR_i;
    state[11] = internal.initial_pro_EGFR;
    state[12] = internal.initial_Inhibitor;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Akt_init", "EGF_binding_kb", "EGF_binding_kf", "EGF_conc_pulse", "EGF_conc_ramp", "EGF_conc_step", "EGF_EGFR_i_init", "EGF_EGFR_init", "EGFR_turnover", "inhibitor_binding_kb", "inhibitor_binding_kf", "Inhibitor_init", "k1", "k2", "pAkt_init", "pAkt_S6_init", "pAkt_scaleFactor", "pEGFR_Akt_init", "pEGFR_init", "pEGFR_scaleFactor", "pro_EGFR_init", "pS6_init", "pS6_scaleFactor", "pulse_t", "ramp_t", "S6_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Akt_init", internal, 0.043309, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EGF_binding_kb", internal, 0.040749, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EGF_binding_kf", internal, 0.00673816, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EGF_conc_pulse", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EGF_conc_ramp", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EGF_conc_step", internal, 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EGF_EGFR_i_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EGF_EGFR_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EGFR_turnover", internal, 0.00010638599999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "inhibitor_binding_kb", internal, 5.25096686262403e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "inhibitor_binding_kf", internal, 2.4346602902065502e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Inhibitor_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.019239099999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 5.1793999999999997e-15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pAkt_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pAkt_S6_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pAkt_scaleFactor", internal, 60.058799999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pEGFR_Akt_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pEGFR_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pEGFR_scaleFactor", internal, 0.00018173500000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pro_EGFR_init", internal, 68190.200000000201, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pS6_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pS6_scaleFactor", internal, 49886.199999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pulse_t", internal, 60, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ramp_t", internal, 3600, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S6_init", internal, 3.5431699999999999, -Infinity, Infinity, false);
    internal.initial_Akt = internal.Akt_init;
    internal.initial_EGF_EGFR = internal.EGF_EGFR_init;
    internal.initial_EGF_EGFR_i = internal.EGF_EGFR_i_init;
    internal.initial_Inhibitor = internal.Inhibitor_init;
    internal.initial_pAkt = internal.pAkt_init;
    internal.initial_pAkt_S6 = internal.pAkt_S6_init;
    internal.initial_pEGFR = internal.pEGFR_init;
    internal.initial_pEGFR_Akt = internal.pEGFR_Akt_init;
    internal.initial_pro_EGFR = internal.pro_EGFR_init;
    internal.initial_pS6 = internal.pS6_init;
    internal.initial_S6 = internal.S6_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const EGFR = state[0];
    const pEGFR = state[1];
    const pEGFR_Akt = state[2];
    const Akt = state[3];
    const pAkt = state[4];
    const S6 = state[5];
    const pAkt_S6 = state[6];
    const pS6 = state[7];
    const EGF_EGFR = state[8];
    const EGFR_i = state[9];
    const EGF_EGFR_i = state[10];
    const pro_EGFR = state[11];
    const Inhibitor = state[12];
    dstatedt[12] = 0;
    dstatedt[11] = 0;
    dstatedt[3] = 0 - 1 * internal.Cell * (internal.k1 * pEGFR * Akt - internal.k2 * pEGFR_Akt) + 1 * internal.Cell * internal.k1 * pAkt;
    dstatedt[4] = 0 + 1 * internal.Cell * internal.k1 * pEGFR_Akt - 1 * internal.Cell * (internal.k1 * pAkt * S6 - internal.k2 * pAkt_S6) + 1 * internal.Cell * internal.k1 * pAkt_S6 - 1 * internal.Cell * internal.k1 * pAkt;
    dstatedt[6] = 0 + 1 * internal.Cell * (internal.k1 * pAkt * S6 - internal.k2 * pAkt_S6) - 1 * internal.Cell * internal.k1 * pAkt_S6;
    dstatedt[1] = 0 - 1 * internal.Cell * (internal.k1 * pEGFR * Akt - internal.k2 * pEGFR_Akt) + 1 * internal.Cell * internal.k1 * pEGFR_Akt - 1 * internal.Cell * internal.k1 * pEGFR + 1 * internal.Cell * internal.k1 * EGF_EGFR;
    dstatedt[2] = 0 + 1 * internal.Cell * (internal.k1 * pEGFR * Akt - internal.k2 * pEGFR_Akt) - 1 * internal.Cell * internal.k1 * pEGFR_Akt;
    dstatedt[7] = 0 + 1 * internal.Cell * internal.k1 * pAkt_S6 - 1 * internal.Cell * internal.k1 * pS6;
    dstatedt[5] = 0 - 1 * internal.Cell * (internal.k1 * pAkt * S6 - internal.k2 * pAkt_S6) + 1 * internal.Cell * internal.k1 * pS6;
    var EGF = internal.EGF_conc_step + ((t <= internal.pulse_t ? internal.EGF_conc_pulse : 0)) + internal.EGF_conc_ramp * t / internal.ramp_t;
    dstatedt[8] = 0 + 1 * internal.Cell * (internal.EGF_binding_kf * EGF * EGFR - internal.EGF_binding_kb * EGF_EGFR) - 1 * internal.Cell * internal.k1 * EGF_EGFR - 1 * internal.Cell * (internal.inhibitor_binding_kf * Inhibitor * EGF_EGFR - internal.inhibitor_binding_kb * EGF_EGFR_i);
    dstatedt[10] = 0 + 1 * internal.Cell * (internal.inhibitor_binding_kf * Inhibitor * EGF_EGFR - internal.inhibitor_binding_kb * EGF_EGFR_i) + 1 * internal.Cell * (internal.EGF_binding_kf * EGF * EGFR_i - internal.EGF_binding_kb * EGF_EGFR_i);
    dstatedt[0] = 0 - 1 * internal.Cell * (internal.EGF_binding_kf * EGF * EGFR - internal.EGF_binding_kb * EGF_EGFR) + 1 * internal.Cell * internal.EGFR_turnover * pro_EGFR - 1 * internal.Cell * internal.EGFR_turnover * EGFR - 1 * internal.Cell * (internal.inhibitor_binding_kf * Inhibitor * EGFR - internal.inhibitor_binding_kb * EGFR_i);
    dstatedt[9] = 0 + 1 * internal.Cell * (internal.inhibitor_binding_kf * Inhibitor * EGFR - internal.inhibitor_binding_kb * EGFR_i) - 1 * internal.Cell * (internal.EGF_binding_kf * EGF * EGFR_i - internal.EGF_binding_kb * EGF_EGFR_i) - 1 * internal.Cell * internal.EGFR_turnover * EGFR_i;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "EGFR", "pEGFR", "pEGFR_Akt", "Akt", "pAkt", "S6", "pAkt_S6", "pS6", "EGF_EGFR", "EGFR_i", "EGF_EGFR_i", "pro_EGFR", "Inhibitor"];
    this.metadata.internalOrder = {Akt_init: null, Cell: null, EGF_binding_kb: null, EGF_binding_kf: null, EGF_conc_pulse: null, EGF_conc_ramp: null, EGF_conc_step: null, EGF_EGFR_i_init: null, EGF_EGFR_init: null, EGFR_turnover: null, inhibitor_binding_kb: null, inhibitor_binding_kf: null, Inhibitor_init: null, initial_Akt: null, initial_EGF_EGFR: null, initial_EGF_EGFR_i: null, initial_EGFR: null, initial_EGFR_i: null, initial_Inhibitor: null, initial_pAkt: null, initial_pAkt_S6: null, initial_pEGFR: null, initial_pEGFR_Akt: null, initial_pro_EGFR: null, initial_pS6: null, initial_S6: null, k1: null, k2: null, pAkt_init: null, pAkt_S6_init: null, pAkt_scaleFactor: null, pEGFR_Akt_init: null, pEGFR_init: null, pEGFR_scaleFactor: null, pro_EGFR_init: null, pS6_init: null, pS6_scaleFactor: null, pulse_t: null, ramp_t: null, S6_init: null};
    this.metadata.variableOrder = {EGFR: null, pEGFR: null, pEGFR_Akt: null, Akt: null, pAkt: null, S6: null, pAkt_S6: null, pS6: null, EGF_EGFR: null, EGFR_i: null, EGF_EGFR_i: null, pro_EGFR: null, Inhibitor: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
