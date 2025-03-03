export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Cytosol = 1;
    internal.ER = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(7).fill(0);
    state[0] = internal.initial_Galpha_GTP;
    state[1] = internal.initial_APLC;
    state[2] = internal.initial_IP3;
    state[3] = internal.initial_Ca_ER;
    state[4] = internal.initial_Ca_Cyt;
    state[5] = internal.initial_PLC;
    state[6] = internal.initial_DG;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["APLC_init", "Ca_Cyt_init", "Ca_ER_init", "Cplc_total", "DG_init", "Galpha_GTP_init", "IP3_init", "k0", "k1", "k10", "k11", "k2", "k3", "k4", "k5", "k6", "k7", "k8", "k9", "Kc1", "Kc2", "Kd", "Ker", "Kg", "Kp", "Kr", "Ks", "m", "n", "PLC_init", "w"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "APLC_init", internal, 9, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ca_Cyt_init", internal, 200, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ca_ER_init", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cplc_total", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DG_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Galpha_GTP_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IP3_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k0", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 3.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 3000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11", internal, 260, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 4.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 1.2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 0.12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 14, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 10500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 600, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kc1", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kc2", internal, 2000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kd", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ker", internal, 75, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kg", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kp", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kr", internal, 200, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ks", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PLC_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "w", internal, 3, -Infinity, Infinity, false);
    internal.initial_APLC = internal.APLC_init;
    internal.initial_Ca_Cyt = internal.Ca_Cyt_init;
    internal.initial_Ca_ER = internal.Ca_ER_init;
    internal.initial_DG = internal.DG_init;
    internal.initial_Galpha_GTP = internal.Galpha_GTP_init;
    internal.initial_IP3 = internal.IP3_init;
    internal.initial_PLC = internal.PLC_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Galpha_GTP = state[0];
    const APLC = state[1];
    const IP3 = state[2];
    const Ca_ER = state[3];
    const Ca_Cyt = state[4];
    const PLC = state[5];
    const DG = state[6];
    dstatedt[6] = 0;
    dstatedt[5] = 0;
    dstatedt[2] = 0 + 1 * internal.Cytosol * internal.k6 * APLC - 1 * internal.Cytosol * internal.k7 * IP3;
    var Raplc = APLC / (internal.Kp + APLC);
    var Rcyt1 = Ca_Cyt / (internal.Kc1 + Ca_Cyt);
    var Rcyt2 = Ca_Cyt / (internal.Kc2 + Ca_Cyt);
    var Rdg = Math.pow((DG), (internal.m)) / (Math.pow((internal.Kd), (internal.m)) + Math.pow((DG), (internal.m)));
    var Rer = Math.pow((Ca_ER), (internal.w)) / (Math.pow((internal.Ker), (internal.w)) + Math.pow((Ca_ER), (internal.w)));
    var Rgalpha_gtp = Math.pow((Galpha_GTP), (internal.n)) / (Math.pow((internal.Kg), (internal.n)) + Math.pow((Galpha_GTP), (internal.n)));
    var Rip3 = Math.pow((IP3), (3)) / (Math.pow((internal.Ks), (3)) + Math.pow((IP3), (3)));
    var Rpkc = DG / (internal.Kd + DG) * Ca_Cyt / (internal.Kr + Ca_Cyt);
    dstatedt[1] = 0 + 1 * internal.Cytosol * internal.k4 * Rgalpha_gtp * Rdg * PLC - 1 * internal.Cytosol * internal.k5 * APLC;
    dstatedt[4] = 0 + 0.01 * internal.ER * (internal.k8 * Rip3 * Rer - internal.k9 * Rcyt1) - 0.050000000000000003 * internal.Cytosol * internal.k10 * Rcyt2 + 0.050000000000000003 * internal.Cytosol * internal.k11;
    dstatedt[3] = 0 - 0.001 * internal.ER * (internal.k8 * Rip3 * Rer - internal.k9 * Rcyt1);
    dstatedt[0] = 0 + 1 * internal.Cytosol * internal.k0 + 1 * internal.Cytosol * internal.k1 * Galpha_GTP - 1 * internal.Cytosol * internal.k2 * Raplc * Galpha_GTP - 1 * internal.Cytosol * internal.k3 * Rpkc * Galpha_GTP;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Galpha_GTP", "APLC", "IP3", "Ca_ER", "Ca_Cyt", "PLC", "DG"];
    this.metadata.internalOrder = {APLC_init: null, Ca_Cyt_init: null, Ca_ER_init: null, Cplc_total: null, Cytosol: null, DG_init: null, ER: null, Galpha_GTP_init: null, initial_APLC: null, initial_Ca_Cyt: null, initial_Ca_ER: null, initial_DG: null, initial_Galpha_GTP: null, initial_IP3: null, initial_PLC: null, IP3_init: null, k0: null, k1: null, k10: null, k11: null, k2: null, k3: null, k4: null, k5: null, k6: null, k7: null, k8: null, k9: null, Kc1: null, Kc2: null, Kd: null, Ker: null, Kg: null, Kp: null, Kr: null, Ks: null, m: null, n: null, PLC_init: null, w: null};
    this.metadata.variableOrder = {Galpha_GTP: null, APLC: null, IP3: null, Ca_ER: null, Ca_Cyt: null, PLC: null, DG: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
