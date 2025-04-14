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
    var state = Array(4).fill(0);
    state[0] = internal.initial_Cdk;
    state[1] = internal.initial_Anaphase_promoting_complex_Phosphorylated;
    state[2] = internal.initial_Securin;
    state[3] = internal.initial_Anaphase_promoting_complex_total;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Anaphase_promoting_complex_Phosphorylated_init", "Anaphase_promoting_complex_total_init", "Cdk_init", "K_1APC", "k_2APC", "K_2APC", "k_d1cdk", "k_d1sec", "k_dcdk", "K_dcdk", "k_dsec", "K_dsec", "Securin_init", "V_1APC", "V_scdk", "V_ssec"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Anaphase_promoting_complex_Phosphorylated_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Anaphase_promoting_complex_total_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cdk_init", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_1APC", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_2APC", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_2APC", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_d1cdk", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_d1sec", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_dcdk", internal, 0.34999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_dcdk", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_dsec", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_dsec", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Securin_init", internal, 0.34999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_1APC", internal, 0.14999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_scdk", internal, 0.059999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_ssec", internal, 0.10000000000000001, -Infinity, Infinity, false);
    internal.initial_Anaphase_promoting_complex_Phosphorylated = internal.Anaphase_promoting_complex_Phosphorylated_init;
    internal.initial_Anaphase_promoting_complex_total = internal.Anaphase_promoting_complex_total_init;
    internal.initial_Cdk = internal.Cdk_init;
    internal.initial_Securin = internal.Securin_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Cdk = state[0];
    const Anaphase_promoting_complex_Phosphorylated = state[1];
    const Securin = state[2];
    const Anaphase_promoting_complex_total = state[3];
    dstatedt[3] = 0;
    var Anaphase_promoting_complex = Anaphase_promoting_complex_total - Anaphase_promoting_complex_Phosphorylated;
    dstatedt[0] = 0 + 1 * internal.nuclear * (internal.V_scdk) - 1 * internal.nuclear * internal.k_d1cdk * Cdk - 1 * internal.nuclear * (internal.k_dcdk * Anaphase_promoting_complex_Phosphorylated * Cdk / (internal.K_dcdk * (1 + Securin / internal.K_dsec) + Cdk));
    dstatedt[2] = 0 + 1 * internal.nuclear * (internal.V_ssec) - 1 * internal.nuclear * internal.k_d1sec * Securin - 1 * internal.nuclear * (internal.k_dsec * Anaphase_promoting_complex_Phosphorylated * Securin / (internal.K_dsec * (1 + Cdk / internal.K_dcdk) + Securin));
    dstatedt[1] = 0 + 1 * internal.nuclear * (internal.k_2APC * Cdk * Anaphase_promoting_complex / (internal.K_2APC + Anaphase_promoting_complex)) - 1 * internal.nuclear * (internal.V_1APC * Anaphase_promoting_complex_Phosphorylated / (internal.K_1APC + Anaphase_promoting_complex_Phosphorylated));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Cdk", "Anaphase_promoting_complex_Phosphorylated", "Securin", "Anaphase_promoting_complex_total"];
    this.metadata.internalOrder = {Anaphase_promoting_complex_Phosphorylated_init: null, Anaphase_promoting_complex_total_init: null, Cdk_init: null, initial_Anaphase_promoting_complex_Phosphorylated: null, initial_Anaphase_promoting_complex_total: null, initial_Cdk: null, initial_Securin: null, K_1APC: null, k_2APC: null, K_2APC: null, k_d1cdk: null, k_d1sec: null, k_dcdk: null, K_dcdk: null, k_dsec: null, K_dsec: null, nuclear: null, Securin_init: null, V_1APC: null, V_scdk: null, V_ssec: null};
    this.metadata.variableOrder = {Cdk: null, Anaphase_promoting_complex_Phosphorylated: null, Securin: null, Anaphase_promoting_complex_total: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
