export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.pi = 3.1415929999999999;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(16).fill(0);
    state[0] = internal.initial_Auxin;
    state[1] = internal.initial_Cytokinin;
    state[2] = internal.initial_AHP6m;
    state[3] = internal.initial_AHP6p;
    state[4] = internal.initial_IAA2m;
    state[5] = internal.initial_IAA2p;
    state[6] = internal.initial_ARR5m;
    state[7] = internal.initial_ARR5p;
    state[8] = internal.initial_PHBm;
    state[9] = internal.initial_PHBp;
    state[10] = internal.initial_CKX3m;
    state[11] = internal.initial_CKX3p;
    state[12] = internal.initial_PIN3m;
    state[13] = internal.initial_PIN1m;
    state[14] = internal.initial_PIN7m;
    state[15] = internal.initial_miRNA;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["AHP6m_init", "AHP6p_init", "all_section_rate_ax", "all_section_rate_ck", "ARR5m_init", "ARR5p_init", "Auxin_init", "b_ahp6", "b_arr5", "b_iaa2", "b_pin1", "b_pin3", "b_pin7", "CKX3m_init", "CKX3p_init", "Cytokinin_init", "d_ax", "d_ck", "d_ckx3", "d_mirna", "d_mirna_mrna", "d_phb", "delta_AHP6", "delta_ARR5", "delta_CKX3", "delta_IAA2", "delta_PHB", "delta_PIN1", "delta_PIN3", "delta_PIN7", "hill_ahp6", "hill_arr5", "hill_ax", "hill_ck", "hill_ckx3", "hill_phb", "IAA2m_init", "IAA2p_init", "lambda_AHP6", "lambda_ARR5", "lambda_IAA2", "lambda_PIN1", "lambda_PIN3", "lambda_PIN7", "miRNA_init", "mu_m_AHP6", "mu_m_ARR5", "mu_m_IAA2", "mu_m_PHB", "mu_m_PIN1", "mu_m_PIN3", "mu_m_PIN7", "mu_p_AHP6", "mu_p_ARR5", "mu_p_CKX3", "mu_p_IAA2", "mu_p_PHB", "mu_p_PIN1", "mu_p_PIN3", "mu_p_PIN7", "p_ax", "p_ck", "p_ckx3", "p_mirna", "p_phb", "PHBm_init", "PHBp_init", "phloem_rate_ax", "phloem_rate_ck", "PIN1m_init", "PIN3m_init", "PIN7m_init", "theta_AHP6", "theta_ARR5", "theta_Ax", "theta_Ck", "theta_CKX3", "theta_PHB"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "AHP6m_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AHP6p_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "all_section_rate_ax", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "all_section_rate_ck", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ARR5m_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ARR5p_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Auxin_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_ahp6", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_arr5", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_iaa2", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_pin1", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_pin3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_pin7", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CKX3m_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CKX3p_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cytokinin_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_ax", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_ck", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_ckx3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_mirna", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_mirna_mrna", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_phb", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_AHP6", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_ARR5", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_CKX3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_IAA2", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_PHB", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_PIN1", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_PIN3", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_PIN7", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "hill_ahp6", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "hill_arr5", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "hill_ax", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "hill_ck", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "hill_ckx3", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "hill_phb", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IAA2m_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IAA2p_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_AHP6", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_ARR5", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_IAA2", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_PIN1", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_PIN3", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_PIN7", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "miRNA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_m_AHP6", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_m_ARR5", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_m_IAA2", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_m_PHB", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_m_PIN1", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_m_PIN3", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_m_PIN7", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_p_AHP6", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_p_ARR5", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_p_CKX3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_p_IAA2", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_p_PHB", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_p_PIN1", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_p_PIN3", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_p_PIN7", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_ax", internal, 0.059999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_ck", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_ckx3", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_mirna", internal, 32.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_phb", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PHBm_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PHBp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "phloem_rate_ax", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "phloem_rate_ck", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PIN1m_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PIN3m_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PIN7m_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "theta_AHP6", internal, 0.040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "theta_ARR5", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "theta_Ax", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "theta_Ck", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "theta_CKX3", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "theta_PHB", internal, 0.40000000000000002, -Infinity, Infinity, false);
    internal.F_PIN3 = internal.b_pin3;
    internal.initial_AHP6m = internal.AHP6m_init;
    internal.initial_AHP6p = internal.AHP6p_init;
    internal.initial_ARR5m = internal.ARR5m_init;
    internal.initial_ARR5p = internal.ARR5p_init;
    internal.initial_Auxin = internal.Auxin_init;
    internal.initial_CKX3m = internal.CKX3m_init;
    internal.initial_CKX3p = internal.CKX3p_init;
    internal.initial_Cytokinin = internal.Cytokinin_init;
    internal.initial_IAA2m = internal.IAA2m_init;
    internal.initial_IAA2p = internal.IAA2p_init;
    internal.initial_miRNA = internal.miRNA_init;
    internal.initial_PHBm = internal.PHBm_init;
    internal.initial_PHBp = internal.PHBp_init;
    internal.initial_PIN1m = internal.PIN1m_init;
    internal.initial_PIN3m = internal.PIN3m_init;
    internal.initial_PIN7m = internal.PIN7m_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Auxin = state[0];
    const Cytokinin = state[1];
    const AHP6m = state[2];
    const AHP6p = state[3];
    const IAA2m = state[4];
    const IAA2p = state[5];
    const ARR5m = state[6];
    const ARR5p = state[7];
    const PHBm = state[8];
    const PHBp = state[9];
    const CKX3m = state[10];
    const CKX3p = state[11];
    const PIN3m = state[12];
    const PIN1m = state[13];
    const PIN7m = state[14];
    const miRNA = state[15];
    dstatedt[10] = 0;
    dstatedt[15] = 0 + 0;
    dstatedt[3] = 0 + internal.delta_AHP6 * AHP6m - internal.mu_p_AHP6 * AHP6p;
    dstatedt[7] = 0 + internal.delta_ARR5 * ARR5m - internal.mu_p_ARR5 * ARR5p;
    dstatedt[0] = 0 + internal.phloem_rate_ax * internal.p_ax - internal.d_ax * Auxin;
    dstatedt[11] = 0 + internal.delta_CKX3 * CKX3m - internal.mu_p_CKX3 * CKX3p;
    dstatedt[5] = 0 + internal.delta_IAA2 * IAA2m - internal.mu_p_IAA2 * IAA2p;
    dstatedt[8] = 0 + internal.p_phb - internal.d_phb * PHBm - internal.d_mirna_mrna * PHBm * miRNA;
    dstatedt[9] = 0 + internal.delta_PHB * PHBm - internal.mu_p_PHB * PHBp;
    var F_AHP6 = (internal.b_ahp6 + Math.pow((Auxin / internal.theta_Ax), (internal.hill_ax))) / (1 + Math.pow((Auxin / internal.theta_Ax), (internal.hill_ax)) + Math.pow((PHBp / internal.theta_PHB), (internal.hill_phb)));
    var F_ARR5 = (internal.b_arr5 + Math.pow((Cytokinin / internal.theta_Ck), (internal.hill_ck))) / (1 + Math.pow((Cytokinin / internal.theta_Ck), (internal.hill_ck)) + Math.pow((AHP6p / internal.theta_AHP6), (internal.hill_ahp6)));
    var F_CK = 1 / (1 + Math.pow((CKX3p / internal.theta_CKX3), (internal.hill_ckx3)));
    var F_IAA2 = (internal.b_iaa2 + Math.pow((Auxin / internal.theta_Ax), (internal.hill_ax))) / (1 + Math.pow((Auxin / internal.theta_Ax), (internal.hill_ax)));
    var F_PIN1 = (internal.b_pin1 + Math.pow((ARR5p / internal.theta_ARR5), (internal.hill_arr5))) / (1 + Math.pow((ARR5p / internal.theta_ARR5), (internal.hill_arr5)));
    var F_PIN7 = (internal.b_pin7 + Math.pow((ARR5p / internal.theta_ARR5), (internal.hill_arr5))) / (1 + Math.pow((ARR5p / internal.theta_ARR5), (internal.hill_arr5)));
    dstatedt[2] = 0 + internal.lambda_AHP6 * F_AHP6 - internal.mu_m_AHP6 * AHP6m;
    dstatedt[6] = 0 + internal.lambda_ARR5 * F_ARR5 - internal.mu_m_ARR5 * ARR5m;
    dstatedt[1] = 0 + internal.phloem_rate_ck * internal.p_ck * F_CK - internal.d_ck * Cytokinin;
    dstatedt[4] = 0 + internal.lambda_IAA2 * F_IAA2 - internal.mu_m_IAA2 * IAA2m;
    dstatedt[13] = 0 + internal.lambda_PIN1 * F_PIN1 - internal.mu_m_PIN1 * PIN1m;
    dstatedt[12] = 0 + internal.lambda_PIN3 * internal.F_PIN3 - internal.mu_m_PIN3 * PIN3m;
    dstatedt[14] = 0 + internal.lambda_PIN7 * F_PIN7 - internal.mu_m_PIN7 * PIN7m;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Auxin", "Cytokinin", "AHP6m", "AHP6p", "IAA2m", "IAA2p", "ARR5m", "ARR5p", "PHBm", "PHBp", "CKX3m", "CKX3p", "PIN3m", "PIN1m", "PIN7m", "miRNA"];
    this.metadata.internalOrder = {AHP6m_init: null, AHP6p_init: null, all_section_rate_ax: null, all_section_rate_ck: null, ARR5m_init: null, ARR5p_init: null, Auxin_init: null, b_ahp6: null, b_arr5: null, b_iaa2: null, b_pin1: null, b_pin3: null, b_pin7: null, CKX3m_init: null, CKX3p_init: null, compartment: null, Cytokinin_init: null, d_ax: null, d_ck: null, d_ckx3: null, d_mirna: null, d_mirna_mrna: null, d_phb: null, delta_AHP6: null, delta_ARR5: null, delta_CKX3: null, delta_IAA2: null, delta_PHB: null, delta_PIN1: null, delta_PIN3: null, delta_PIN7: null, F_PIN3: null, hill_ahp6: null, hill_arr5: null, hill_ax: null, hill_ck: null, hill_ckx3: null, hill_phb: null, IAA2m_init: null, IAA2p_init: null, initial_AHP6m: null, initial_AHP6p: null, initial_ARR5m: null, initial_ARR5p: null, initial_Auxin: null, initial_CKX3m: null, initial_CKX3p: null, initial_Cytokinin: null, initial_IAA2m: null, initial_IAA2p: null, initial_miRNA: null, initial_PHBm: null, initial_PHBp: null, initial_PIN1m: null, initial_PIN3m: null, initial_PIN7m: null, lambda_AHP6: null, lambda_ARR5: null, lambda_IAA2: null, lambda_PIN1: null, lambda_PIN3: null, lambda_PIN7: null, miRNA_init: null, mu_m_AHP6: null, mu_m_ARR5: null, mu_m_IAA2: null, mu_m_PHB: null, mu_m_PIN1: null, mu_m_PIN3: null, mu_m_PIN7: null, mu_p_AHP6: null, mu_p_ARR5: null, mu_p_CKX3: null, mu_p_IAA2: null, mu_p_PHB: null, mu_p_PIN1: null, mu_p_PIN3: null, mu_p_PIN7: null, p_ax: null, p_ck: null, p_ckx3: null, p_mirna: null, p_phb: null, PHBm_init: null, PHBp_init: null, phloem_rate_ax: null, phloem_rate_ck: null, pi: null, PIN1m_init: null, PIN3m_init: null, PIN7m_init: null, theta_AHP6: null, theta_ARR5: null, theta_Ax: null, theta_Ck: null, theta_CKX3: null, theta_PHB: null};
    this.metadata.variableOrder = {Auxin: null, Cytokinin: null, AHP6m: null, AHP6p: null, IAA2m: null, IAA2p: null, ARR5m: null, ARR5p: null, PHBm: null, PHBp: null, CKX3m: null, CKX3p: null, PIN3m: null, PIN1m: null, PIN7m: null, miRNA: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
