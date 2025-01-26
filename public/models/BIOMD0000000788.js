export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Central = 1;
    internal.Peripheral = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(8).fill(0);
    state[0] = internal.initial_C_free;
    state[1] = internal.initial_R_A;
    state[2] = internal.initial_R_B;
    state[3] = internal.initial_RC_A;
    state[4] = internal.initial_RC_B;
    state[5] = internal.initial_RC_AB;
    state[6] = internal.initial_AP;
    state[7] = internal.initial_AD;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["AD_init", "AP_init", "C_free_init", "F", "k_12", "k_21", "k_a", "k_deg_A", "k_deg_B", "k_el", "k_int_A", "k_int_AB", "k_int_B", "k_off_1", "k_off_2", "k_off_3", "k_off_4", "k_on_1", "k_on_2", "k_on_3", "k_on_4", "k_syn_A", "k_syn_B", "R_A_init", "R_B_init", "RC_A_init", "RC_AB_init", "RC_B_init", "V"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "AD_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_free_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "F", internal, 0.75, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_12", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_21", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_a", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_deg_A", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_deg_B", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_el", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_int_A", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_int_AB", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_int_B", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_off_1", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_off_2", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_off_3", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_off_4", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_on_1", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_on_2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_on_3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_on_4", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_syn_A", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_syn_B", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_A_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_B_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RC_A_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RC_AB_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RC_B_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V", internal, 3, -Infinity, Infinity, false);
    internal.initial_AD = internal.AD_init;
    internal.initial_AP = internal.AP_init;
    internal.initial_C_free = internal.C_free_init;
    internal.initial_R_A = internal.R_A_init;
    internal.initial_R_B = internal.R_B_init;
    internal.initial_RC_A = internal.RC_A_init;
    internal.initial_RC_AB = internal.RC_AB_init;
    internal.initial_RC_B = internal.RC_B_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const C_free = state[0];
    const R_A = state[1];
    const R_B = state[2];
    const RC_A = state[3];
    const RC_B = state[4];
    const RC_AB = state[5];
    const AP = state[6];
    const AD = state[7];
    dstatedt[7] = 0 - 1 * internal.Peripheral * internal.k_a * AD;
    dstatedt[6] = 0 + 1 * (internal.k_12 * C_free * internal.V) - 1 * internal.Peripheral * internal.k_21 * AP;
    dstatedt[0] = 0 - 1 * internal.Central * internal.k_on_1 * C_free * R_A - 1 * internal.Central * internal.k_on_2 * C_free * R_B + 1 * internal.Central * (internal.k_off_1 * RC_A) + 1 * internal.Central * (internal.k_off_2 * RC_B) - 1 * internal.Central * internal.k_el * C_free - 1 * internal.Central * internal.k_12 * C_free + 1 * (internal.k_21 * (AP / internal.V)) + 1 * (internal.k_a * AD * internal.V);
    dstatedt[1] = 0 - 1 * internal.Central * internal.k_on_1 * C_free * R_A - 1 * internal.Central * internal.k_on_4 * RC_B * R_A + 1 * internal.Central * (internal.k_off_1 * RC_A) + 1 * internal.Central * (internal.k_off_4 * RC_AB) + 1 * internal.Central * (internal.k_syn_A) - 1 * internal.Central * internal.k_deg_A * R_A;
    dstatedt[2] = 0 - 1 * internal.Central * internal.k_on_2 * C_free * R_B - 1 * internal.Central * internal.k_on_3 * RC_A * R_B + 1 * internal.Central * (internal.k_off_2 * RC_B) + 1 * internal.Central * (internal.k_off_3 * RC_AB) + 1 * internal.Central * (internal.k_syn_B) - 1 * internal.Central * internal.k_deg_B * R_B;
    dstatedt[3] = 0 + 1 * internal.Central * internal.k_on_1 * C_free * R_A - 1 * internal.Central * internal.k_on_3 * RC_A * R_B + 1 * internal.Central * (internal.k_off_4 * RC_AB) - 1 * internal.Central * ((internal.k_off_1 + internal.k_int_A) * RC_A);
    dstatedt[5] = 0 + 1 * internal.Central * internal.k_on_3 * RC_A * R_B + 1 * internal.Central * internal.k_on_4 * RC_B * R_A - 1 * internal.Central * ((internal.k_off_3 + internal.k_off_4 + internal.k_int_AB) * RC_AB);
    dstatedt[4] = 0 + 1 * internal.Central * internal.k_on_2 * C_free * R_B - 1 * internal.Central * internal.k_on_4 * RC_B * R_A + 1 * internal.Central * (internal.k_off_3 * RC_AB) - 1 * internal.Central * ((internal.k_off_2 + internal.k_int_B) * RC_B);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "C_free", "R_A", "R_B", "RC_A", "RC_B", "RC_AB", "AP", "AD"];
    this.metadata.internalOrder = {AD_init: null, AP_init: null, C_free_init: null, Central: null, F: null, initial_AD: null, initial_AP: null, initial_C_free: null, initial_R_A: null, initial_R_B: null, initial_RC_A: null, initial_RC_AB: null, initial_RC_B: null, k_12: null, k_21: null, k_a: null, k_deg_A: null, k_deg_B: null, k_el: null, k_int_A: null, k_int_AB: null, k_int_B: null, k_off_1: null, k_off_2: null, k_off_3: null, k_off_4: null, k_on_1: null, k_on_2: null, k_on_3: null, k_on_4: null, k_syn_A: null, k_syn_B: null, Peripheral: null, R_A_init: null, R_B_init: null, RC_A_init: null, RC_AB_init: null, RC_B_init: null, V: null};
    this.metadata.variableOrder = {C_free: null, R_A: null, R_B: null, RC_A: null, RC_B: null, RC_AB: null, AP: null, AD: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
