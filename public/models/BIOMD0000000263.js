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
    var TrkA_init = internal.initial_pro_TrkA;
    internal.initial_TrkA = TrkA_init;
    var state = Array(10).fill(0);
    state[0] = internal.initial_TrkA;
    state[1] = internal.initial_pTrkA;
    state[2] = internal.initial_pTrkA_Akt;
    state[3] = internal.initial_Akt;
    state[4] = internal.initial_pAkt;
    state[5] = internal.initial_S6;
    state[6] = internal.initial_pAkt_S6;
    state[7] = internal.initial_pS6;
    state[8] = internal.initial_NGF_TrkA;
    state[9] = internal.initial_pro_TrkA;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Akt_init", "k1", "k2", "NGF_conc_pulse", "NGF_conc_ramp", "NGF_conc_step", "NGF_TrkA_init", "pAkt_init", "pAkt_S6_init", "pAkt_scaleFactor", "pro_TrkA_init", "pS6_init", "pS6_scaleFactor", "pTrkA_Akt_init", "pTrkA_init", "pTrkA_scaleFactor", "pulse_t", "ramp_t", "S6_init", "TrkA_turnover"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Akt_init", internal, 1.1559489791939701, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.0083317800000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 5.2351900000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NGF_conc_pulse", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NGF_conc_ramp", internal, 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NGF_conc_step", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NGF_TrkA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pAkt_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pAkt_S6_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pAkt_scaleFactor", internal, 2.4238121109450801, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pro_TrkA_init", internal, 8.5206509051827606, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pS6_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pS6_scaleFactor", internal, 0.52584271826306905, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pTrkA_Akt_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pTrkA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pTrkA_scaleFactor", internal, 0.84878347494126805, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pulse_t", internal, 60, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ramp_t", internal, 3600, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S6_init", internal, 3.5523360395550001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TrkA_turnover", internal, 0.0011032440769796, -Infinity, Infinity, false);
    internal.initial_Akt = internal.Akt_init;
    internal.initial_NGF_TrkA = internal.NGF_TrkA_init;
    internal.initial_pAkt = internal.pAkt_init;
    internal.initial_pAkt_S6 = internal.pAkt_S6_init;
    internal.initial_pro_TrkA = internal.pro_TrkA_init;
    internal.initial_pS6 = internal.pS6_init;
    internal.initial_pTrkA = internal.pTrkA_init;
    internal.initial_pTrkA_Akt = internal.pTrkA_Akt_init;
    internal.initial_S6 = internal.S6_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const TrkA = state[0];
    const pTrkA = state[1];
    const pTrkA_Akt = state[2];
    const Akt = state[3];
    const pAkt = state[4];
    const S6 = state[5];
    const pAkt_S6 = state[6];
    const pS6 = state[7];
    const NGF_TrkA = state[8];
    const pro_TrkA = state[9];
    dstatedt[9] = 0;
    dstatedt[3] = 0 - 1 * internal.Cell * (internal.k1 * pTrkA * Akt - internal.k2 * pTrkA_Akt) + 1 * internal.Cell * internal.k1 * pAkt;
    dstatedt[4] = 0 + 1 * internal.Cell * internal.k1 * pTrkA_Akt - 1 * internal.Cell * (internal.k1 * pAkt * S6 - internal.k2 * pAkt_S6) + 1 * internal.Cell * internal.k1 * pAkt_S6 - 1 * internal.Cell * internal.k1 * pAkt;
    dstatedt[6] = 0 + 1 * internal.Cell * (internal.k1 * pAkt * S6 - internal.k2 * pAkt_S6) - 1 * internal.Cell * internal.k1 * pAkt_S6;
    dstatedt[7] = 0 + 1 * internal.Cell * internal.k1 * pAkt_S6 - 1 * internal.Cell * internal.k1 * pS6;
    dstatedt[1] = 0 - 1 * internal.Cell * (internal.k1 * pTrkA * Akt - internal.k2 * pTrkA_Akt) + 1 * internal.Cell * internal.k1 * pTrkA_Akt - 1 * internal.Cell * internal.k1 * pTrkA + 1 * internal.Cell * internal.k1 * NGF_TrkA;
    dstatedt[2] = 0 + 1 * internal.Cell * (internal.k1 * pTrkA * Akt - internal.k2 * pTrkA_Akt) - 1 * internal.Cell * internal.k1 * pTrkA_Akt;
    dstatedt[5] = 0 - 1 * internal.Cell * (internal.k1 * pAkt * S6 - internal.k2 * pAkt_S6) + 1 * internal.Cell * internal.k1 * pS6;
    var NGF = internal.NGF_conc_step + ((t <= internal.pulse_t ? internal.NGF_conc_pulse : 0)) + internal.NGF_conc_ramp * t / internal.ramp_t;
    dstatedt[8] = 0 + 1 * internal.Cell * (internal.k1 * NGF * TrkA - internal.k2 * NGF_TrkA) - 1 * internal.Cell * internal.k1 * NGF_TrkA;
    dstatedt[0] = 0 - 1 * internal.Cell * (internal.k1 * NGF * TrkA - internal.k2 * NGF_TrkA) + 1 * internal.Cell * internal.TrkA_turnover * pro_TrkA - 1 * internal.Cell * internal.TrkA_turnover * TrkA;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "TrkA", "pTrkA", "pTrkA_Akt", "Akt", "pAkt", "S6", "pAkt_S6", "pS6", "NGF_TrkA", "pro_TrkA"];
    this.metadata.internalOrder = {Akt_init: null, Cell: null, initial_Akt: null, initial_NGF_TrkA: null, initial_pAkt: null, initial_pAkt_S6: null, initial_pro_TrkA: null, initial_pS6: null, initial_pTrkA: null, initial_pTrkA_Akt: null, initial_S6: null, initial_TrkA: null, k1: null, k2: null, NGF_conc_pulse: null, NGF_conc_ramp: null, NGF_conc_step: null, NGF_TrkA_init: null, pAkt_init: null, pAkt_S6_init: null, pAkt_scaleFactor: null, pro_TrkA_init: null, pS6_init: null, pS6_scaleFactor: null, pTrkA_Akt_init: null, pTrkA_init: null, pTrkA_scaleFactor: null, pulse_t: null, ramp_t: null, S6_init: null, TrkA_turnover: null};
    this.metadata.variableOrder = {TrkA: null, pTrkA: null, pTrkA_Akt: null, Akt: null, pAkt: null, S6: null, pAkt_S6: null, pS6: null, NGF_TrkA: null, pro_TrkA: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
