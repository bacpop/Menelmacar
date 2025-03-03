export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cytoplasm = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(9).fill(0);
    state[0] = internal.initial_cyclin;
    state[1] = internal.initial_dimer;
    state[2] = internal.initial_dimer_p;
    state[3] = internal.initial_p_dimer;
    state[4] = internal.initial_p_dimer_p;
    state[5] = internal.initial_cdc25_p;
    state[6] = internal.initial_wee1_p;
    state[7] = internal.initial_IE_p;
    state[8] = internal.initial_UbE_star;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["cdc25_p_init", "cyclin_init", "dimer_init", "dimer_p_init", "IE_p_init", "K_a", "K_b", "K_c", "K_d", "K_e", "K_f", "K_g", "K_h", "k1AA", "k3", "ka", "kbPPase", "kc", "kcak", "kd_anti_IE", "ke", "kfPPase", "kg", "khPPAse", "kinh", "p_dimer_init", "p_dimer_p_init", "total_cdc2", "total_cdc25", "total_IE", "total_UbE", "total_wee1", "UbE_star_init", "V2_double_prime", "V2_prime", "V25_double_prime", "V25_prime", "Vwee_double_prime", "Vwee_prime", "wee1_p_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "cdc25_p_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cyclin_init", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dimer_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dimer_p_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IE_p_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_a", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_b", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_c", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_d", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_e", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_f", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_g", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_h", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1AA", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ka", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kbPPase", internal, 0.125, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kc", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcak", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd_anti_IE", internal, 0.095000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ke", internal, 0.013299999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kfPPase", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kg", internal, 0.0064999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "khPPAse", internal, 0.086999999999999994, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kinh", internal, 0.025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_dimer_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_dimer_p_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "total_cdc2", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "total_cdc25", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "total_IE", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "total_UbE", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "total_wee1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "UbE_star_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V2_double_prime", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V2_prime", internal, 0.014999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V25_double_prime", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V25_prime", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vwee_double_prime", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vwee_prime", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "wee1_p_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_cdc25_p = internal.cdc25_p_init;
    internal.initial_cyclin = internal.cyclin_init;
    internal.initial_dimer = internal.dimer_init;
    internal.initial_dimer_p = internal.dimer_p_init;
    internal.initial_IE_p = internal.IE_p_init;
    internal.initial_p_dimer = internal.p_dimer_init;
    internal.initial_p_dimer_p = internal.p_dimer_p_init;
    internal.initial_UbE_star = internal.UbE_star_init;
    internal.initial_wee1_p = internal.wee1_p_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const cyclin = state[0];
    const dimer = state[1];
    const dimer_p = state[2];
    const p_dimer = state[3];
    const p_dimer_p = state[4];
    const cdc25_p = state[5];
    const wee1_p = state[6];
    const IE_p = state[7];
    const UbE_star = state[8];
    var cdc2 = internal.total_cdc2 - (dimer + p_dimer + p_dimer_p + dimer_p);
    dstatedt[5] = 0 + 1 * internal.ka * dimer_p * (internal.total_cdc25 - cdc25_p) / (internal.K_a + internal.total_cdc25 - cdc25_p) - 1 * internal.kbPPase * cdc25_p / (internal.K_b + cdc25_p);
    dstatedt[7] = 0 + 1 * internal.kg * dimer_p * (internal.total_IE - IE_p) / (internal.K_g + internal.total_IE - IE_p) - 1 * internal.khPPAse * IE_p / (internal.K_h + IE_p);
    dstatedt[8] = 0 + 1 * internal.kc * IE_p * (internal.total_UbE - UbE_star) / (internal.K_c + internal.total_UbE - UbE_star) - 1 * internal.kd_anti_IE * UbE_star / (internal.K_d + UbE_star);
    dstatedt[6] = 0 + 1 * internal.ke * dimer_p * (internal.total_wee1 - wee1_p) / (internal.K_e + internal.total_wee1 - wee1_p) - 1 * internal.kfPPase * wee1_p / (internal.K_f + wee1_p);
    var k2 = internal.V2_prime * (internal.total_UbE - UbE_star) + internal.V2_double_prime * UbE_star;
    var k25 = internal.V25_prime * (internal.total_cdc25 - cdc25_p) + internal.V25_double_prime * cdc25_p;
    var kwee = internal.Vwee_prime * wee1_p + internal.Vwee_double_prime * (internal.total_wee1 - wee1_p);
    dstatedt[0] = 0 + 1 * internal.k1AA - 1 * k2 * cyclin - 1 * internal.k3 * cyclin * cdc2;
    dstatedt[1] = 0 + 1 * internal.k3 * cyclin * cdc2 + 1 * internal.kinh * dimer_p - 1 * kwee * dimer - 1 * internal.kcak * dimer - 1 * k2 * dimer + 1 * k25 * p_dimer;
    dstatedt[2] = 0 - 1 * internal.kinh * dimer_p + 1 * internal.kcak * dimer - 1 * kwee * dimer_p + 1 * k25 * p_dimer_p - 1 * k2 * dimer_p;
    dstatedt[3] = 0 + 1 * kwee * dimer - 1 * k25 * p_dimer - 1 * internal.kcak * p_dimer - 1 * k2 * p_dimer + 1 * internal.kinh * p_dimer_p;
    dstatedt[4] = 0 + 1 * internal.kcak * p_dimer - 1 * internal.kinh * p_dimer_p + 1 * kwee * dimer_p - 1 * k25 * p_dimer_p - 1 * k2 * p_dimer_p;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "cyclin", "dimer", "dimer_p", "p_dimer", "p_dimer_p", "cdc25_p", "wee1_p", "IE_p", "UbE_star"];
    this.metadata.internalOrder = {cdc25_p_init: null, cyclin_init: null, cytoplasm: null, dimer_init: null, dimer_p_init: null, IE_p_init: null, initial_cdc25_p: null, initial_cyclin: null, initial_dimer: null, initial_dimer_p: null, initial_IE_p: null, initial_p_dimer: null, initial_p_dimer_p: null, initial_UbE_star: null, initial_wee1_p: null, K_a: null, K_b: null, K_c: null, K_d: null, K_e: null, K_f: null, K_g: null, K_h: null, k1AA: null, k3: null, ka: null, kbPPase: null, kc: null, kcak: null, kd_anti_IE: null, ke: null, kfPPase: null, kg: null, khPPAse: null, kinh: null, p_dimer_init: null, p_dimer_p_init: null, total_cdc2: null, total_cdc25: null, total_IE: null, total_UbE: null, total_wee1: null, UbE_star_init: null, V2_double_prime: null, V2_prime: null, V25_double_prime: null, V25_prime: null, Vwee_double_prime: null, Vwee_prime: null, wee1_p_init: null};
    this.metadata.variableOrder = {cyclin: null, dimer: null, dimer_p: null, p_dimer: null, p_dimer_p: null, cdc25_p: null, wee1_p: null, IE_p: null, UbE_star: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
