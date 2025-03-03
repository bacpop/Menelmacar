export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.APC_total = 1;
    internal.Cdc25_total = 1;
    internal.Cdk1_total = 100;
    internal.IE_total = 1;
    internal.nuclear = 1;
    internal.ppase = 1;
    internal.Wee1_total = 1;
    internal.Cdk1 = internal.Cdk1_total;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(7).fill(0);
    state[0] = internal.initial_Cdc25_phosphorylated;
    state[1] = internal.initial_Cyclin_Cdk1_MPF;
    state[2] = internal.initial_Cyclin_Cdk1_preMPF;
    state[3] = internal.initial_Wee1_phosphorylated;
    state[4] = internal.initial_Cyclin;
    state[5] = internal.initial_IE_phosphorylated;
    state[6] = internal.initial_APC_active;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["APC_active_init", "Cdc25_phosphorylated_init", "Cyclin_Cdk1_MPF_init", "Cyclin_Cdk1_preMPF_init", "Cyclin_init", "IE_phosphorylated_init", "k1", "k3", "ka", "kb", "kc", "kd", "ke", "kf", "kg", "kh", "KKa", "KKb", "KKc", "KKd", "KKe", "KKf", "KKg", "KKh", "v2", "v2_", "v25", "v25_", "vwee", "vwee_", "Wee1_phosphorylated_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "APC_active_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cdc25_phosphorylated_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cyclin_Cdk1_MPF_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cyclin_Cdk1_preMPF_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cyclin_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IE_phosphorylated_init", internal, 1, -Infinity, Infinity, false);
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
    this.base.user.setUserScalar(user, "v2", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v2_", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v25", internal, 0.017000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v25_", internal, 0.17000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vwee", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vwee_", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Wee1_phosphorylated_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_APC_active = internal.APC_active_init;
    internal.initial_Cdc25_phosphorylated = internal.Cdc25_phosphorylated_init;
    internal.initial_Cyclin = internal.Cyclin_init;
    internal.initial_Cyclin_Cdk1_MPF = internal.Cyclin_Cdk1_MPF_init;
    internal.initial_Cyclin_Cdk1_preMPF = internal.Cyclin_Cdk1_preMPF_init;
    internal.initial_IE_phosphorylated = internal.IE_phosphorylated_init;
    internal.initial_Wee1_phosphorylated = internal.Wee1_phosphorylated_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Cdc25_phosphorylated = state[0];
    const Cyclin_Cdk1_MPF = state[1];
    const Cyclin_Cdk1_preMPF = state[2];
    const Wee1_phosphorylated = state[3];
    const Cyclin = state[4];
    const IE_phosphorylated = state[5];
    const APC_active = state[6];
    dstatedt[6] = 0 - 1 * internal.nuclear * (internal.kd * internal.ppase * APC_active / (internal.KKd + APC_active)) + 1 * internal.nuclear * (internal.kc * IE_phosphorylated * (internal.APC_total - APC_active) / (internal.KKc + internal.APC_total - APC_active));
    dstatedt[0] = 0 - 1 * internal.nuclear * (internal.kb * internal.ppase * Cdc25_phosphorylated / (internal.KKb + Cdc25_phosphorylated)) + 1 * internal.nuclear * (internal.ka * Cyclin_Cdk1_MPF * (internal.Cdc25_total - Cdc25_phosphorylated) / (internal.KKa + internal.Cdc25_total - Cdc25_phosphorylated));
    dstatedt[5] = 0 - 1 * internal.nuclear * (internal.kh * internal.ppase * IE_phosphorylated / (internal.KKh + IE_phosphorylated)) + 1 * internal.nuclear * (internal.kg * Cyclin_Cdk1_MPF * (internal.IE_total - IE_phosphorylated) / (internal.KKg + internal.IE_total - IE_phosphorylated));
    dstatedt[3] = 0 - 1 * internal.nuclear * (internal.kf * internal.ppase * Wee1_phosphorylated / (internal.KKf + Wee1_phosphorylated)) + 1 * internal.nuclear * (internal.ke * Cyclin_Cdk1_MPF * (internal.Wee1_total - Wee1_phosphorylated) / (internal.KKe + internal.Wee1_total - Wee1_phosphorylated));
    var k2 = internal.v2 * (internal.APC_total - APC_active) + internal.v2_ * APC_active;
    var k25 = internal.v25 * (internal.Cdc25_total - Cdc25_phosphorylated) + internal.v25_ * Cdc25_phosphorylated;
    var kwee = internal.vwee * Wee1_phosphorylated + internal.vwee_ * (internal.Wee1_total - Wee1_phosphorylated);
    dstatedt[4] = 0 - 1 * internal.nuclear * (internal.k3 * internal.Cdk1 * Cyclin) + 1 * internal.nuclear * (internal.k1) - 1 * internal.nuclear * k2 * Cyclin;
    dstatedt[1] = 0 + 1 * internal.nuclear * k25 * Cyclin_Cdk1_preMPF - 1 * internal.nuclear * kwee * Cyclin_Cdk1_MPF + 1 * internal.nuclear * (internal.k3 * internal.Cdk1 * Cyclin) - 1 * internal.nuclear * k2 * Cyclin_Cdk1_MPF;
    dstatedt[2] = 0 - 1 * internal.nuclear * k25 * Cyclin_Cdk1_preMPF + 1 * internal.nuclear * kwee * Cyclin_Cdk1_MPF - 1 * internal.nuclear * k2 * Cyclin_Cdk1_preMPF;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Cdc25_phosphorylated", "Cyclin_Cdk1_MPF", "Cyclin_Cdk1_preMPF", "Wee1_phosphorylated", "Cyclin", "IE_phosphorylated", "APC_active"];
    this.metadata.internalOrder = {APC_active_init: null, APC_total: null, Cdc25_phosphorylated_init: null, Cdc25_total: null, Cdk1: null, Cdk1_total: null, Cyclin_Cdk1_MPF_init: null, Cyclin_Cdk1_preMPF_init: null, Cyclin_init: null, IE_phosphorylated_init: null, IE_total: null, initial_APC_active: null, initial_Cdc25_phosphorylated: null, initial_Cyclin: null, initial_Cyclin_Cdk1_MPF: null, initial_Cyclin_Cdk1_preMPF: null, initial_IE_phosphorylated: null, initial_Wee1_phosphorylated: null, k1: null, k3: null, ka: null, kb: null, kc: null, kd: null, ke: null, kf: null, kg: null, kh: null, KKa: null, KKb: null, KKc: null, KKd: null, KKe: null, KKf: null, KKg: null, KKh: null, nuclear: null, ppase: null, v2: null, v2_: null, v25: null, v25_: null, vwee: null, vwee_: null, Wee1_phosphorylated_init: null, Wee1_total: null};
    this.metadata.variableOrder = {Cdc25_phosphorylated: null, Cyclin_Cdk1_MPF: null, Cyclin_Cdk1_preMPF: null, Wee1_phosphorylated: null, Cyclin: null, IE_phosphorylated: null, APC_active: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
