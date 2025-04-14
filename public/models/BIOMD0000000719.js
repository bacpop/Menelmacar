export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.nuclear = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(6).fill(0);
    state[0] = internal.initial_Cyclin_B1_Cdk1_complex_phosphorylated;
    state[1] = internal.initial_Cyclin_B1_Cdk1_complex_unphosphorylated;
    state[2] = internal.initial_Plx1_active;
    state[3] = internal.initial_APC_C_active;
    state[4] = internal.initial_APC_C_total;
    state[5] = internal.initial_Plx1_total;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["APC_C_active_init", "APC_C_total_init", "Cyclin_B1_Cdk1_complex_phosphorylated_init", "Cyclin_B1_Cdk1_complex_unphosphorylated_init", "ec50_apc", "ec50_cdc25", "ec50_plx", "ec50_wee1", "k_apc_off", "k_apc_on", "k_cdk1_off", "k_cdk1_on", "k_dest", "k_plx_off", "k_plxon", "k_synth", "n_apc", "n_cdc25", "n_plx", "n_wee1", "p", "Plx1_active_init", "Plx1_total_init", "tau"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "APC_C_active_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "APC_C_total_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cyclin_B1_Cdk1_complex_phosphorylated_init", internal, 60, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cyclin_B1_Cdk1_complex_unphosphorylated_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ec50_apc", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ec50_cdc25", internal, 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ec50_plx", internal, 60, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ec50_wee1", internal, 35, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_apc_off", internal, 0.14999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_apc_on", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_cdk1_off", internal, 0.035400000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_cdk1_on", internal, 0.035400000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_dest", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_plx_off", internal, 0.125, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_plxon", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_synth", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n_apc", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n_cdc25", internal, 11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n_plx", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n_wee1", internal, 3.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Plx1_active_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Plx1_total_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau", internal, 4, -Infinity, Infinity, false);
    internal.initial_APC_C_active = internal.APC_C_active_init;
    internal.initial_APC_C_total = internal.APC_C_total_init;
    internal.initial_Cyclin_B1_Cdk1_complex_phosphorylated = internal.Cyclin_B1_Cdk1_complex_phosphorylated_init;
    internal.initial_Cyclin_B1_Cdk1_complex_unphosphorylated = internal.Cyclin_B1_Cdk1_complex_unphosphorylated_init;
    internal.initial_Plx1_active = internal.Plx1_active_init;
    internal.initial_Plx1_total = internal.Plx1_total_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Cyclin_B1_Cdk1_complex_phosphorylated = state[0];
    const Cyclin_B1_Cdk1_complex_unphosphorylated = state[1];
    const Plx1_active = state[2];
    const APC_C_active = state[3];
    const APC_C_total = state[4];
    const Plx1_total = state[5];
    dstatedt[4] = 0;
    dstatedt[5] = 0;
    dstatedt[3] = 0 + 1 * internal.nuclear * (internal.k_apc_on / (1 + Math.pow((internal.ec50_apc / Plx1_active), (internal.n_apc))) * (APC_C_total - APC_C_active)) - 1 * internal.nuclear * internal.k_apc_off * APC_C_active;
    dstatedt[2] = 0 + 1 * internal.nuclear * (internal.k_plxon / (1 + Math.pow((internal.ec50_plx / Cyclin_B1_Cdk1_complex_phosphorylated), (internal.n_plx))) * (Plx1_total - Plx1_active)) - 1 * internal.nuclear * internal.k_plx_off * Plx1_active;
    var r = 1 / (2 * Math.pow((1 + 3 / (1 + Math.exp((70 - t) / internal.tau))), (2)));
    dstatedt[0] = 0 + 1 * internal.nuclear * (internal.k_synth) - 1 * internal.nuclear * (internal.k_dest * APC_C_active * Cyclin_B1_Cdk1_complex_phosphorylated) - 1 * internal.nuclear * (Math.pow((r), (1 / 2)) * internal.k_cdk1_off * (1 + internal.p / (Math.pow((Cyclin_B1_Cdk1_complex_phosphorylated / internal.ec50_wee1), (internal.n_wee1)) + 1)) * Cyclin_B1_Cdk1_complex_phosphorylated) + 1 * internal.nuclear * (1 / Math.pow((r), (1 / 2)) * internal.k_cdk1_on * (1 + internal.p / (1 + Math.pow((internal.ec50_cdc25 / Cyclin_B1_Cdk1_complex_phosphorylated), (internal.n_cdc25)))) * Cyclin_B1_Cdk1_complex_unphosphorylated);
    dstatedt[1] = 0 - 1 * internal.nuclear * (internal.k_dest * APC_C_active * Cyclin_B1_Cdk1_complex_unphosphorylated) + 1 * internal.nuclear * (Math.pow((r), (1 / 2)) * internal.k_cdk1_off * (1 + internal.p / (Math.pow((Cyclin_B1_Cdk1_complex_phosphorylated / internal.ec50_wee1), (internal.n_wee1)) + 1)) * Cyclin_B1_Cdk1_complex_phosphorylated) - 1 * internal.nuclear * (1 / Math.pow((r), (1 / 2)) * internal.k_cdk1_on * (1 + internal.p / (1 + Math.pow((internal.ec50_cdc25 / Cyclin_B1_Cdk1_complex_phosphorylated), (internal.n_cdc25)))) * Cyclin_B1_Cdk1_complex_unphosphorylated);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Cyclin_B1_Cdk1_complex_phosphorylated", "Cyclin_B1_Cdk1_complex_unphosphorylated", "Plx1_active", "APC_C_active", "APC_C_total", "Plx1_total"];
    this.metadata.internalOrder = {APC_C_active_init: null, APC_C_total_init: null, Cyclin_B1_Cdk1_complex_phosphorylated_init: null, Cyclin_B1_Cdk1_complex_unphosphorylated_init: null, ec50_apc: null, ec50_cdc25: null, ec50_plx: null, ec50_wee1: null, initial_APC_C_active: null, initial_APC_C_total: null, initial_Cyclin_B1_Cdk1_complex_phosphorylated: null, initial_Cyclin_B1_Cdk1_complex_unphosphorylated: null, initial_Plx1_active: null, initial_Plx1_total: null, k_apc_off: null, k_apc_on: null, k_cdk1_off: null, k_cdk1_on: null, k_dest: null, k_plx_off: null, k_plxon: null, k_synth: null, n_apc: null, n_cdc25: null, n_plx: null, n_wee1: null, nuclear: null, p: null, Plx1_active_init: null, Plx1_total_init: null, tau: null};
    this.metadata.variableOrder = {Cyclin_B1_Cdk1_complex_phosphorylated: null, Cyclin_B1_Cdk1_complex_unphosphorylated: null, Plx1_active: null, APC_C_active: null, APC_C_total: null, Plx1_total: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
