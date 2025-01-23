export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.T_Lymphocyte_cell = 1;
    internal.Tumour_cell = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(7).fill(0);
    state[0] = internal.initial_T;
    state[1] = internal.initial_LT;
    state[2] = internal.initial_RT;
    state[3] = internal.initial_m;
    state[4] = internal.initial_Lm;
    state[5] = internal.initial_Rm;
    state[6] = internal.initial_SL;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["k1", "k10", "k11", "k2", "k3", "k4", "k5", "k6", "k7", "k8", "k9", "Lm_init", "LT_init", "m_init", "Rm_init", "RT_init", "SL_init", "T_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "k1", internal, 8.38e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 3110, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11", internal, 13.9, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.0060000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 5.9413, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0.34999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 2.52e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 2244, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 0.34999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 19200000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 8730000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Lm_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "LT_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rm_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RT_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SL_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_Lm = internal.Lm_init;
    internal.initial_LT = internal.LT_init;
    internal.initial_m = internal.m_init;
    internal.initial_Rm = internal.Rm_init;
    internal.initial_RT = internal.RT_init;
    internal.initial_SL = internal.SL_init;
    internal.initial_T = internal.T_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const T = state[0];
    const LT = state[1];
    const RT = state[2];
    const m = state[3];
    const Lm = state[4];
    const Rm = state[5];
    const SL = state[6];
    dstatedt[4] = 0 + 1 * internal.Tumour_cell * (internal.k10) - 1 * internal.Tumour_cell * ((internal.k3 + internal.k4) * Lm) - 1 * (internal.k5 * m * T * Lm * RT);
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.k2 * T * m) - 1 * internal.compartment * ((internal.k4 + internal.k3) * LT) - 1 * (internal.k5 * m * T * LT * Rm);
    dstatedt[3] = 0 - 1 * (internal.k1 * m * T * LT * Rm);
    dstatedt[5] = 0 + 1 * internal.Tumour_cell * (internal.k6) - 1 * internal.Tumour_cell * internal.k7 * Rm - 1 * (internal.k8 * Rm * SL);
    dstatedt[2] = 0 + 1 * internal.T_Lymphocyte_cell * (internal.k6) - 1 * internal.T_Lymphocyte_cell * internal.k7 * RT - 1 * (internal.k8 * RT * SL);
    dstatedt[6] = 0 - 1 * internal.compartment * internal.k11 * SL + 1 * (internal.k3 * (Lm * m + LT * T)) - 1 * (internal.k9 * (Rm * m + RT * T) * SL);
    dstatedt[0] = 0 - 1 * (internal.k1 * m * T * Lm * RT);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "T", "LT", "RT", "m", "Lm", "Rm", "SL"];
    this.metadata.internalOrder = {compartment: null, initial_Lm: null, initial_LT: null, initial_m: null, initial_Rm: null, initial_RT: null, initial_SL: null, initial_T: null, k1: null, k10: null, k11: null, k2: null, k3: null, k4: null, k5: null, k6: null, k7: null, k8: null, k9: null, Lm_init: null, LT_init: null, m_init: null, Rm_init: null, RT_init: null, SL_init: null, T_init: null, T_Lymphocyte_cell: null, Tumour_cell: null};
    this.metadata.variableOrder = {T: null, LT: null, RT: null, m: null, Lm: null, Rm: null, SL: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
