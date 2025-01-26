export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Central = 1;
    internal.Peripheral_Tissue = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_C;
    state[1] = internal.initial_A_T;
    state[2] = internal.initial_R;
    state[3] = internal.initial_RC;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A_T_init", "C_init", "K_D", "k_deg", "k_el", "k_int", "k_off", "k_on", "k_pt", "k_syn", "k_tp", "ModelValue_1", "R_init", "RC_init", "V_c"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A_T_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_D", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_deg", internal, 0.56599999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_el", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_int", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_off", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_on", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_pt", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_syn", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_tp", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_1", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RC_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_c", internal, 10, -Infinity, Infinity, false);
    internal.initial_A_T = internal.A_T_init;
    internal.initial_C = internal.C_init;
    internal.initial_R = internal.R_init;
    internal.initial_RC = internal.RC_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const C = state[0];
    const A_T = state[1];
    const R = state[2];
    const RC = state[3];
    dstatedt[1] = 0 + 1 * (internal.k_pt * C * internal.V_c) - 1 * internal.Peripheral_Tissue * internal.k_tp * A_T;
    dstatedt[0] = 0 - 1 * internal.Central * internal.k_on * R * C + 1 * internal.Central * (internal.k_off * RC) - 1 * internal.Central * ((internal.k_el + internal.k_pt) * C) + 1 * (internal.k_tp * (A_T / internal.V_c));
    dstatedt[2] = 0 - 1 * internal.Central * internal.k_on * R * C + 1 * internal.Central * (internal.k_off * RC) + 1 * internal.Central * (internal.k_syn) - 1 * internal.Central * internal.k_deg * R;
    dstatedt[3] = 0 + 1 * internal.Central * internal.k_on * R * C - 1 * internal.Central * ((internal.k_off + internal.k_int) * RC);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "C", "A_T", "R", "RC"];
    this.metadata.internalOrder = {A_T_init: null, C_init: null, Central: null, initial_A_T: null, initial_C: null, initial_R: null, initial_RC: null, K_D: null, k_deg: null, k_el: null, k_int: null, k_off: null, k_on: null, k_pt: null, k_syn: null, k_tp: null, ModelValue_1: null, Peripheral_Tissue: null, R_init: null, RC_init: null, V_c: null};
    this.metadata.variableOrder = {C: null, A_T: null, R: null, RC: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
