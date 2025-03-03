export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.pi = 3.1415929999999999;
    internal.rho = Math.pow((36 * internal.pi), (1 / 3));
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(2).fill(0);
    state[0] = internal.initial_V_Tumor_Volume;
    state[1] = internal.initial_C_Cytotoxic_T_Lymphocytes_Coverage;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["C_Cytotoxic_T_Lymphocytes_Coverage_init", "d_c", "kxk", "r_c", "r_t", "V_Tumor_Volume_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "C_Cytotoxic_T_Lymphocytes_Coverage_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_c", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_c", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_t", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_Tumor_Volume_init", internal, 1, -Infinity, Infinity, false);
    internal.initial_C_Cytotoxic_T_Lymphocytes_Coverage = internal.C_Cytotoxic_T_Lymphocytes_Coverage_init;
    internal.initial_V_Tumor_Volume = internal.V_Tumor_Volume_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const V_Tumor_Volume = state[0];
    const C_Cytotoxic_T_Lymphocytes_Coverage = state[1];
    var min_C = ((C_Cytotoxic_T_Lymphocytes_Coverage >= 1 ? 1 : C_Cytotoxic_T_Lymphocytes_Coverage));
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.rho * internal.r_c * Math.pow((V_Tumor_Volume), (2 / 3)) * C_Cytotoxic_T_Lymphocytes_Coverage) - 1 * internal.compartment * internal.d_c * C_Cytotoxic_T_Lymphocytes_Coverage;
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.rho * internal.r_t * Math.pow((V_Tumor_Volume), (2 / 3))) - 1 * internal.compartment * (internal.rho * internal.kxk * Math.pow((V_Tumor_Volume), (2 / 3)) * min_C);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "V_Tumor_Volume", "C_Cytotoxic_T_Lymphocytes_Coverage"];
    this.metadata.internalOrder = {C_Cytotoxic_T_Lymphocytes_Coverage_init: null, compartment: null, d_c: null, initial_C_Cytotoxic_T_Lymphocytes_Coverage: null, initial_V_Tumor_Volume: null, kxk: null, pi: null, r_c: null, r_t: null, rho: null, V_Tumor_Volume_init: null};
    this.metadata.variableOrder = {V_Tumor_Volume: null, C_Cytotoxic_T_Lymphocytes_Coverage: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
