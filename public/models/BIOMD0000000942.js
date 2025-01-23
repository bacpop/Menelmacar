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
    var Cdc25_init = internal.initial_Cdc25_total - internal.initial_Cdc25_phosphorylated;
    var Cdk1_init = internal.initial_Cdk1_total;
    var Cyclin_total_init = internal.initial_Cyclin_Cdk1_MPF + internal.initial_Cyclin_Cdk1_preMPF + internal.initial_Cyclin;
    var IE_init = internal.initial_IE_total - internal.initial_IE_phosphorylated;
    var Wee1_init = internal.initial_Wee1_total - internal.initial_Wee1_phosphorylated;
    internal.initial_Cdc25 = Cdc25_init;
    internal.initial_Cdk1 = Cdk1_init;
    internal.initial_Cyclin_total = Cyclin_total_init;
    internal.initial_IE = IE_init;
    internal.initial_Wee1 = Wee1_init;
    var state = Array(18).fill(0);
    state[0] = internal.initial_Cdc25;
    state[1] = internal.initial_Cdc25_phosphorylated;
    state[2] = internal.initial_Cyclin_Cdk1_MPF;
    state[3] = internal.initial_Cyclin_Cdk1_preMPF;
    state[4] = internal.initial_Wee1;
    state[5] = internal.initial_Wee1_phosphorylated;
    state[6] = internal.initial_Cyclin;
    state[7] = internal.initial_Cdk1;
    state[8] = internal.initial_IE;
    state[9] = internal.initial_IE_phosphorylated;
    state[10] = internal.initial_APC_active;
    state[11] = internal.initial_Cdk1_total;
    state[12] = internal.initial_Cdc25_total;
    state[13] = internal.initial_Wee1_total;
    state[14] = internal.initial_IE_total;
    state[15] = internal.initial_APC_total;
    state[16] = internal.initial_ppase;
    state[17] = internal.initial_Cyclin_total;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["APC_active_init", "APC_total_init", "Cdc25_phosphorylated_init", "Cdc25_total_init", "Cdk1_total_init", "Cyclin_Cdk1_MPF_init", "Cyclin_Cdk1_preMPF_init", "Cyclin_init", "IE_phosphorylated_init", "IE_total_init", "k1", "k3", "ka", "kb", "kc", "kd", "ke", "kf", "kg", "kh", "KKa", "KKb", "KKc", "KKd", "KKe", "KKf", "KKg", "KKh", "ppase_init", "v2", "v2_", "v25", "v25_", "vwee", "vwee_", "Wee1_phosphorylated_init", "Wee1_total_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "APC_active_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "APC_total_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cdc25_phosphorylated_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cdc25_total_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cdk1_total_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cyclin_Cdk1_MPF_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cyclin_Cdk1_preMPF_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cyclin_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IE_phosphorylated_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IE_total_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ka", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kb", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kc", internal, 0.13, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd", internal, 0.13, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ke", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kg", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kh", internal, 0.14999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KKa", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KKb", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KKc", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KKd", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KKe", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KKf", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KKg", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KKh", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ppase_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v2", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v2_", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v25", internal, 0.017000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v25_", internal, 0.17000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vwee", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vwee_", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Wee1_phosphorylated_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Wee1_total_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_APC_active = internal.APC_active_init;
    internal.initial_APC_total = internal.APC_total_init;
    internal.initial_Cdc25_phosphorylated = internal.Cdc25_phosphorylated_init;
    internal.initial_Cdc25_total = internal.Cdc25_total_init;
    internal.initial_Cdk1_total = internal.Cdk1_total_init;
    internal.initial_Cyclin = internal.Cyclin_init;
    internal.initial_Cyclin_Cdk1_MPF = internal.Cyclin_Cdk1_MPF_init;
    internal.initial_Cyclin_Cdk1_preMPF = internal.Cyclin_Cdk1_preMPF_init;
    internal.initial_IE_phosphorylated = internal.IE_phosphorylated_init;
    internal.initial_IE_total = internal.IE_total_init;
    internal.initial_ppase = internal.ppase_init;
    internal.initial_Wee1_phosphorylated = internal.Wee1_phosphorylated_init;
    internal.initial_Wee1_total = internal.Wee1_total_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Cdc25_phosphorylated = state[1];
    const Cyclin_Cdk1_MPF = state[2];
    const Cyclin_Cdk1_preMPF = state[3];
    const Wee1_phosphorylated = state[5];
    const Cyclin = state[6];
    const Cdk1 = state[7];
    const IE_phosphorylated = state[9];
    const APC_active = state[10];
    const Cdc25_total = state[12];
    const Wee1_total = state[13];
    const IE_total = state[14];
    const APC_total = state[15];
    const ppase = state[16];
    dstatedt[15] = 0;
    dstatedt[0] = 0 + 0;
    dstatedt[12] = 0;
    dstatedt[7] = 0 + 0;
    dstatedt[11] = 0;
    dstatedt[17] = 0 + 0;
    dstatedt[8] = 0 + 0;
    dstatedt[14] = 0;
    dstatedt[16] = 0;
    dstatedt[4] = 0 + 0;
    dstatedt[13] = 0;
    dstatedt[10] = 0 - 1 * internal.nuclear * (internal.kd * ppase * APC_active / (internal.KKd + APC_active)) + 1 * internal.nuclear * (internal.kc * IE_phosphorylated * (APC_total - APC_active) / (internal.KKc + APC_total - APC_active));
    dstatedt[1] = 0 - 1 * internal.nuclear * (internal.kb * ppase * Cdc25_phosphorylated / (internal.KKb + Cdc25_phosphorylated)) + 1 * internal.nuclear * (internal.ka * Cyclin_Cdk1_MPF * (Cdc25_total - Cdc25_phosphorylated) / (internal.KKa + Cdc25_total - Cdc25_phosphorylated));
    dstatedt[9] = 0 - 1 * internal.nuclear * (internal.kh * ppase * IE_phosphorylated / (internal.KKh + IE_phosphorylated)) + 1 * internal.nuclear * (internal.kg * Cyclin_Cdk1_MPF * (IE_total - IE_phosphorylated) / (internal.KKg + IE_total - IE_phosphorylated));
    dstatedt[5] = 0 - 1 * internal.nuclear * (internal.kf * ppase * Wee1_phosphorylated / (internal.KKf + Wee1_phosphorylated)) + 1 * internal.nuclear * (internal.ke * Cyclin_Cdk1_MPF * (Wee1_total - Wee1_phosphorylated) / (internal.KKe + Wee1_total - Wee1_phosphorylated));
    var k2 = internal.v2 * (APC_total - APC_active) + internal.v2_ * APC_active;
    var k25 = internal.v25 * (Cdc25_total - Cdc25_phosphorylated) + internal.v25_ * Cdc25_phosphorylated;
    var kwee = internal.vwee * Wee1_phosphorylated + internal.vwee_ * (Wee1_total - Wee1_phosphorylated);
    dstatedt[6] = 0 - 1 * internal.nuclear * (internal.k3 * Cdk1 * Cyclin) + 1 * internal.nuclear * (internal.k1) - 1 * internal.nuclear * k2 * Cyclin;
    dstatedt[2] = 0 + 1 * internal.nuclear * k25 * Cyclin_Cdk1_preMPF - 1 * internal.nuclear * kwee * Cyclin_Cdk1_MPF + 1 * internal.nuclear * (internal.k3 * Cdk1 * Cyclin) - 1 * internal.nuclear * k2 * Cyclin_Cdk1_MPF;
    dstatedt[3] = 0 - 1 * internal.nuclear * k25 * Cyclin_Cdk1_preMPF + 1 * internal.nuclear * kwee * Cyclin_Cdk1_MPF - 1 * internal.nuclear * k2 * Cyclin_Cdk1_preMPF;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Cdc25", "Cdc25_phosphorylated", "Cyclin_Cdk1_MPF", "Cyclin_Cdk1_preMPF", "Wee1", "Wee1_phosphorylated", "Cyclin", "Cdk1", "IE", "IE_phosphorylated", "APC_active", "Cdk1_total", "Cdc25_total", "Wee1_total", "IE_total", "APC_total", "ppase", "Cyclin_total"];
    this.metadata.internalOrder = {APC_active_init: null, APC_total_init: null, Cdc25_phosphorylated_init: null, Cdc25_total_init: null, Cdk1_total_init: null, Cyclin_Cdk1_MPF_init: null, Cyclin_Cdk1_preMPF_init: null, Cyclin_init: null, IE_phosphorylated_init: null, IE_total_init: null, initial_APC_active: null, initial_APC_total: null, initial_Cdc25: null, initial_Cdc25_phosphorylated: null, initial_Cdc25_total: null, initial_Cdk1: null, initial_Cdk1_total: null, initial_Cyclin: null, initial_Cyclin_Cdk1_MPF: null, initial_Cyclin_Cdk1_preMPF: null, initial_Cyclin_total: null, initial_IE: null, initial_IE_phosphorylated: null, initial_IE_total: null, initial_ppase: null, initial_Wee1: null, initial_Wee1_phosphorylated: null, initial_Wee1_total: null, k1: null, k3: null, ka: null, kb: null, kc: null, kd: null, ke: null, kf: null, kg: null, kh: null, KKa: null, KKb: null, KKc: null, KKd: null, KKe: null, KKf: null, KKg: null, KKh: null, nuclear: null, ppase_init: null, v2: null, v2_: null, v25: null, v25_: null, vwee: null, vwee_: null, Wee1_phosphorylated_init: null, Wee1_total_init: null};
    this.metadata.variableOrder = {Cdc25: null, Cdc25_phosphorylated: null, Cyclin_Cdk1_MPF: null, Cyclin_Cdk1_preMPF: null, Wee1: null, Wee1_phosphorylated: null, Cyclin: null, Cdk1: null, IE: null, IE_phosphorylated: null, APC_active: null, Cdk1_total: null, Cdc25_total: null, Wee1_total: null, IE_total: null, APC_total: null, ppase: null, Cyclin_total: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
