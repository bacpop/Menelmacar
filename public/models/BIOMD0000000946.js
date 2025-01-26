export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.breast_cancer_cell = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(7).fill(0);
    state[0] = internal.initial_L_m;
    state[1] = internal.initial_H_m;
    state[2] = internal.initial_L_e;
    state[3] = internal.initial_H_e;
    state[4] = internal.initial_L_c;
    state[5] = internal.initial_H_c;
    state[6] = internal.initial_L_n;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "B_T", "D", "H_c_init", "H_e_init", "H_m_init", "k_b", "k_cc", "k_cm", "k_dh", "k_dl", "k_e", "k_i", "k_mi", "k_mo", "k_oc", "k_om", "L_c_init", "L_e_init", "L_n_init", "V_c", "V_n", "v0"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 24125, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B_T", internal, 89.971999999999994, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "D", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H_c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H_e_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H_m_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_b", internal, 0.00038085000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_cc", internal, 0.00031577999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_cm", internal, 0.00029553000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_dh", internal, 1.5639000000000001e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_dl", internal, 0.055522000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_e", internal, 0.0078914999999999992, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_i", internal, 0.022110000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_mi", internal, 1.3974e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_mo", internal, 0.085551000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_oc", internal, 0.00012913000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_om", internal, 0.00015599, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L_c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L_e_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L_n_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_c", internal, 829, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_n", internal, 326, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v0", internal, 1.5045000000000001e-05, -Infinity, Infinity, false);
    internal.initial_H_c = internal.H_c_init;
    internal.initial_H_e = internal.H_e_init;
    internal.initial_H_m = internal.H_m_init;
    internal.initial_L_c = internal.L_c_init;
    internal.initial_L_e = internal.L_e_init;
    internal.initial_L_n = internal.L_n_init;
    internal.L_m_init = (1 + internal.v0) * internal.D;
    internal.V_e = 2000000000000 * internal.v0 / (1 + internal.v0);
    internal.v1 = internal.alpha * internal.v0 / (1 + internal.v0);
    internal.v2 = internal.V_n / internal.V_c;
    internal.initial_L_m = internal.L_m_init;
    internal.V_m = 2000000000000 - internal.V_e;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const L_m = state[0];
    const H_m = state[1];
    const L_e = state[2];
    const H_e = state[3];
    const L_c = state[4];
    const H_c = state[5];
    const L_n = state[6];
    dstatedt[3] = 0 + internal.k_mi / internal.v0 * H_m + internal.k_om * L_e - (internal.k_cm + internal.k_mo) * H_e;
    dstatedt[1] = 0 + internal.k_om * L_m - (internal.k_cm + internal.k_mi) * H_m + internal.k_mo * internal.v0 * H_e;
    dstatedt[0] = 0 + - (internal.k_om + internal.k_mi) * L_m + internal.k_cm * H_m + internal.k_mo * internal.v0 * L_e;
    dstatedt[5] = 0 + internal.k_oc * L_c - internal.k_cc * H_c + internal.k_dh * internal.v2 * L_n;
    dstatedt[4] = 0 + internal.k_i * internal.v1 * L_e - (internal.k_e + internal.k_oc) * L_c + internal.k_cc * H_c + internal.k_dl * internal.v2 * L_n - internal.k_b * (internal.B_T - L_n) * L_c;
    dstatedt[2] = 0 + internal.k_mi / internal.v0 * L_m - (internal.k_mo + internal.k_om + internal.k_i) * L_e + internal.k_cm * H_e + internal.k_e / internal.v1 * L_c;
    dstatedt[6] = 0 + internal.k_b / internal.v2 * (internal.B_T - L_n) * L_c - (internal.k_dl + internal.k_dh) * L_n;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "L_m", "H_m", "L_e", "H_e", "L_c", "H_c", "L_n"];
    this.metadata.internalOrder = {alpha: null, B_T: null, breast_cancer_cell: null, D: null, H_c_init: null, H_e_init: null, H_m_init: null, initial_H_c: null, initial_H_e: null, initial_H_m: null, initial_L_c: null, initial_L_e: null, initial_L_m: null, initial_L_n: null, k_b: null, k_cc: null, k_cm: null, k_dh: null, k_dl: null, k_e: null, k_i: null, k_mi: null, k_mo: null, k_oc: null, k_om: null, L_c_init: null, L_e_init: null, L_m_init: null, L_n_init: null, V_c: null, V_e: null, V_m: null, V_n: null, v0: null, v1: null, v2: null};
    this.metadata.variableOrder = {L_m: null, H_m: null, L_e: null, H_e: null, L_c: null, H_c: null, L_n: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
