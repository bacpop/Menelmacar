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
    var mTORC1_init = internal.initial_Rptor_free * internal.k_build_mTORC1 * internal.initial_mTOR_free * (internal.initial_TSC * internal.k_phospho_TSC_ERK * (internal.initial_ERK * internal.initial_MEK * internal.initial_MET * internal.k_phospho_ERK * internal.k_phospho_MEK * internal.k_phospho_MET_basal / (internal.k_dephospho_pERK * internal.k_dephospho_pMEK * internal.k_pMET_degradation)) / internal.k_dephospho_TSC) / internal.k_dissociate_mTORC1;
    var mTORC2_init = internal.initial_MET * internal.initial_Mapkap1_free * internal.initial_PI3K * internal.k_build_mTORC2 * Math.pow((internal.k_dephospho_S6K), (2)) * Math.pow((internal.k_dissociate_mTORC1), (2)) * internal.k_phospho_MET_basal * internal.k_recruit_PI3K_MET * internal.initial_mTOR_free / (internal.k_dissociate_mTORC2 * internal.k_pMET_degradation * internal.k_release_PI3K * (Math.pow((internal.initial_Rptor_free), (2)) * Math.pow((internal.initial_S6K), (2)) * Math.pow((internal.k_build_mTORC1), (2)) * internal.k_inhibit_IRS1_S6K * internal.k_inhibit_mTORC2_S6K * Math.pow((internal.k_phospho_S6K), (2)) * Math.pow((internal.initial_mTOR_free), (2)) * Math.pow((internal.initial_TSC * internal.k_phospho_TSC_ERK * (internal.initial_ERK * internal.initial_MEK * internal.initial_MET * internal.k_phospho_ERK * internal.k_phospho_MEK * internal.k_phospho_MET_basal / (internal.k_dephospho_pERK * internal.k_dephospho_pMEK * internal.k_pMET_degradation)) / internal.k_dephospho_TSC), (2)) + internal.initial_Rptor_free * internal.initial_S6K * internal.k_build_mTORC1 * internal.k_dephospho_S6K * internal.k_dissociate_mTORC1 * internal.k_inhibit_IRS1_S6K * internal.k_phospho_S6K * internal.initial_mTOR_free * (internal.initial_TSC * internal.k_phospho_TSC_ERK * (internal.initial_ERK * internal.initial_MEK * internal.initial_MET * internal.k_phospho_ERK * internal.k_phospho_MEK * internal.k_phospho_MET_basal / (internal.k_dephospho_pERK * internal.k_dephospho_pMEK * internal.k_pMET_degradation)) / internal.k_dephospho_TSC) + internal.initial_Rptor_free * internal.initial_S6K * internal.k_build_mTORC1 * internal.k_dephospho_S6K * internal.k_dissociate_mTORC1 * internal.k_inhibit_mTORC2_S6K * internal.k_phospho_S6K * internal.initial_mTOR_free * (internal.initial_TSC * internal.k_phospho_TSC_ERK * (internal.initial_ERK * internal.initial_MEK * internal.initial_MET * internal.k_phospho_ERK * internal.k_phospho_MEK * internal.k_phospho_MET_basal / (internal.k_dephospho_pERK * internal.k_dephospho_pMEK * internal.k_pMET_degradation)) / internal.k_dephospho_TSC) + Math.pow((internal.k_dephospho_S6K), (2)) * Math.pow((internal.k_dissociate_mTORC1), (2))));
    var pAKT_T308_init = internal.initial_AKT * internal.initial_MET * internal.initial_PI3K * internal.k_dephospho_S6K * internal.k_dissociate_mTORC1 * internal.k_phospho_AKT_T308 * internal.k_phospho_MET_basal * internal.k_recruit_PI3K_MET / (internal.k_dephospho_pAKT_T308 * internal.k_pMET_degradation * internal.k_release_PI3K * (internal.initial_Rptor_free * internal.initial_S6K * internal.k_build_mTORC1 * internal.k_inhibit_IRS1_S6K * internal.k_phospho_S6K * internal.initial_mTOR_free * (internal.initial_TSC * internal.k_phospho_TSC_ERK * (internal.initial_ERK * internal.initial_MEK * internal.initial_MET * internal.k_phospho_ERK * internal.k_phospho_MEK * internal.k_phospho_MET_basal / (internal.k_dephospho_pERK * internal.k_dephospho_pMEK * internal.k_pMET_degradation)) / internal.k_dephospho_TSC) + internal.k_dephospho_S6K * internal.k_dissociate_mTORC1));
    var pAKT_T308_S473_init = internal.initial_AKT * Math.pow((internal.initial_MET), (2)) * internal.initial_Mapkap1_free * Math.pow((internal.initial_PI3K), (2)) * internal.k_build_mTORC2 * Math.pow((internal.k_dephospho_S6K), (3)) * Math.pow((internal.k_dissociate_mTORC1), (3)) * internal.k_phospho_AKT_S473 * internal.k_phospho_AKT_T308 * Math.pow((internal.k_phospho_MET_basal), (2)) * Math.pow((internal.k_recruit_PI3K_MET), (2)) * internal.initial_mTOR_free / (internal.k_dephospho_pAKT_S473 * internal.k_dephospho_pAKT_T308 * internal.k_dissociate_mTORC2 * Math.pow((internal.k_pMET_degradation), (2)) * Math.pow((internal.k_release_PI3K), (2)) * (Math.pow((internal.initial_Rptor_free), (3)) * Math.pow((internal.initial_S6K), (3)) * Math.pow((internal.k_build_mTORC1), (3)) * Math.pow((internal.k_inhibit_IRS1_S6K), (2)) * internal.k_inhibit_mTORC2_S6K * Math.pow((internal.k_phospho_S6K), (3)) * Math.pow((internal.initial_mTOR_free), (3)) * Math.pow((internal.initial_TSC * internal.k_phospho_TSC_ERK * (internal.initial_ERK * internal.initial_MEK * internal.initial_MET * internal.k_phospho_ERK * internal.k_phospho_MEK * internal.k_phospho_MET_basal / (internal.k_dephospho_pERK * internal.k_dephospho_pMEK * internal.k_pMET_degradation)) / internal.k_dephospho_TSC), (3)) + Math.pow((internal.initial_Rptor_free), (2)) * Math.pow((internal.initial_S6K), (2)) * Math.pow((internal.k_build_mTORC1), (2)) * internal.k_dephospho_S6K * internal.k_dissociate_mTORC1 * Math.pow((internal.k_inhibit_IRS1_S6K), (2)) * Math.pow((internal.k_phospho_S6K), (2)) * Math.pow((internal.initial_mTOR_free), (2)) * Math.pow((internal.initial_TSC * internal.k_phospho_TSC_ERK * (internal.initial_ERK * internal.initial_MEK * internal.initial_MET * internal.k_phospho_ERK * internal.k_phospho_MEK * internal.k_phospho_MET_basal / (internal.k_dephospho_pERK * internal.k_dephospho_pMEK * internal.k_pMET_degradation)) / internal.k_dephospho_TSC), (2)) + 2 * Math.pow((internal.initial_Rptor_free), (2)) * Math.pow((internal.initial_S6K), (2)) * Math.pow((internal.k_build_mTORC1), (2)) * internal.k_dephospho_S6K * internal.k_dissociate_mTORC1 * internal.k_inhibit_IRS1_S6K * internal.k_inhibit_mTORC2_S6K * Math.pow((internal.k_phospho_S6K), (2)) * Math.pow((internal.initial_mTOR_free), (2)) * Math.pow((internal.initial_TSC * internal.k_phospho_TSC_ERK * (internal.initial_ERK * internal.initial_MEK * internal.initial_MET * internal.k_phospho_ERK * internal.k_phospho_MEK * internal.k_phospho_MET_basal / (internal.k_dephospho_pERK * internal.k_dephospho_pMEK * internal.k_pMET_degradation)) / internal.k_dephospho_TSC), (2)) + 2 * internal.initial_Rptor_free * internal.initial_S6K * internal.k_build_mTORC1 * Math.pow((internal.k_dephospho_S6K), (2)) * Math.pow((internal.k_dissociate_mTORC1), (2)) * internal.k_inhibit_IRS1_S6K * internal.k_phospho_S6K * internal.initial_mTOR_free * (internal.initial_TSC * internal.k_phospho_TSC_ERK * (internal.initial_ERK * internal.initial_MEK * internal.initial_MET * internal.k_phospho_ERK * internal.k_phospho_MEK * internal.k_phospho_MET_basal / (internal.k_dephospho_pERK * internal.k_dephospho_pMEK * internal.k_pMET_degradation)) / internal.k_dephospho_TSC) + internal.initial_Rptor_free * internal.initial_S6K * internal.k_build_mTORC1 * Math.pow((internal.k_dephospho_S6K), (2)) * Math.pow((internal.k_dissociate_mTORC1), (2)) * internal.k_inhibit_mTORC2_S6K * internal.k_phospho_S6K * internal.initial_mTOR_free * (internal.initial_TSC * internal.k_phospho_TSC_ERK * (internal.initial_ERK * internal.initial_MEK * internal.initial_MET * internal.k_phospho_ERK * internal.k_phospho_MEK * internal.k_phospho_MET_basal / (internal.k_dephospho_pERK * internal.k_dephospho_pMEK * internal.k_pMET_degradation)) / internal.k_dephospho_TSC) + Math.pow((internal.k_dephospho_S6K), (3)) * Math.pow((internal.k_dissociate_mTORC1), (3))));
    var pERK_init = internal.initial_ERK * internal.initial_MEK * internal.initial_MET * internal.k_phospho_ERK * internal.k_phospho_MEK * internal.k_phospho_MET_basal / (internal.k_dephospho_pERK * internal.k_dephospho_pMEK * internal.k_pMET_degradation);
    var PI3K_atMembrane_init = internal.initial_MET * internal.initial_PI3K * internal.k_dephospho_S6K * internal.k_dissociate_mTORC1 * internal.k_phospho_MET_basal * internal.k_recruit_PI3K_MET / (internal.k_pMET_degradation * internal.k_release_PI3K * (internal.initial_Rptor_free * internal.initial_S6K * internal.k_build_mTORC1 * internal.k_inhibit_IRS1_S6K * internal.k_phospho_S6K * internal.initial_mTOR_free * (internal.initial_TSC * internal.k_phospho_TSC_ERK * (internal.initial_ERK * internal.initial_MEK * internal.initial_MET * internal.k_phospho_ERK * internal.k_phospho_MEK * internal.k_phospho_MET_basal / (internal.k_dephospho_pERK * internal.k_dephospho_pMEK * internal.k_pMET_degradation)) / internal.k_dephospho_TSC) + internal.k_dephospho_S6K * internal.k_dissociate_mTORC1));
    var pMEK_init = internal.initial_MEK * internal.initial_MET * internal.k_phospho_MEK * internal.k_phospho_MET_basal / (internal.k_dephospho_pMEK * internal.k_pMET_degradation);
    var pMET_init = internal.initial_MET * internal.k_phospho_MET_basal / internal.k_pMET_degradation;
    var pS6_init = internal.initial_Rptor_free * internal.initial_S6 * internal.initial_S6K * internal.k_build_mTORC1 * internal.k_phospho_S6 * internal.k_phospho_S6K * internal.initial_mTOR_free * (internal.initial_TSC * internal.k_phospho_TSC_ERK * (internal.initial_ERK * internal.initial_MEK * internal.initial_MET * internal.k_phospho_ERK * internal.k_phospho_MEK * internal.k_phospho_MET_basal / (internal.k_dephospho_pERK * internal.k_dephospho_pMEK * internal.k_pMET_degradation)) / internal.k_dephospho_TSC) / (internal.k_dephospho_S6K * internal.k_dephospho_pS6 * internal.k_dissociate_mTORC1);
    var pS6K_init = internal.initial_Rptor_free * internal.initial_S6K * internal.k_build_mTORC1 * internal.k_phospho_S6K * internal.initial_mTOR_free * (internal.initial_TSC * internal.k_phospho_TSC_ERK * (internal.initial_ERK * internal.initial_MEK * internal.initial_MET * internal.k_phospho_ERK * internal.k_phospho_MEK * internal.k_phospho_MET_basal / (internal.k_dephospho_pERK * internal.k_dephospho_pMEK * internal.k_pMET_degradation)) / internal.k_dephospho_TSC) / (internal.k_dephospho_S6K * internal.k_dissociate_mTORC1);
    var pTSC_init = internal.initial_TSC * internal.k_phospho_TSC_ERK * (internal.initial_ERK * internal.initial_MEK * internal.initial_MET * internal.k_phospho_ERK * internal.k_phospho_MEK * internal.k_phospho_MET_basal / (internal.k_dephospho_pERK * internal.k_dephospho_pMEK * internal.k_pMET_degradation)) / internal.k_dephospho_TSC;
    internal.initial_mTORC1 = mTORC1_init;
    internal.initial_mTORC2 = mTORC2_init;
    internal.initial_pAKT_T308 = pAKT_T308_init;
    internal.initial_pAKT_T308_S473 = pAKT_T308_S473_init;
    internal.initial_pERK = pERK_init;
    internal.initial_PI3K_atMembrane = PI3K_atMembrane_init;
    internal.initial_pMEK = pMEK_init;
    internal.initial_pMET = pMET_init;
    internal.initial_pS6 = pS6_init;
    internal.initial_pS6K = pS6K_init;
    internal.initial_pTSC = pTSC_init;
    var state = Array(23).fill(0);
    state[0] = internal.initial_MET;
    state[1] = internal.initial_HGF;
    state[2] = internal.initial_pMET;
    state[3] = internal.initial_MEK;
    state[4] = internal.initial_pMEK;
    state[5] = internal.initial_ERK;
    state[6] = internal.initial_pERK;
    state[7] = internal.initial_PI3K;
    state[8] = internal.initial_PI3K_atMembrane;
    state[9] = internal.initial_AKT;
    state[10] = internal.initial_pAKT_T308;
    state[11] = internal.initial_pAKT_T308_S473;
    state[12] = internal.initial_mTOR_free;
    state[13] = internal.initial_Mapkap1_free;
    state[14] = internal.initial_mTORC2;
    state[15] = internal.initial_pTSC;
    state[16] = internal.initial_TSC;
    state[17] = internal.initial_Rptor_free;
    state[18] = internal.initial_mTORC1;
    state[19] = internal.initial_S6K;
    state[20] = internal.initial_pS6K;
    state[21] = internal.initial_S6;
    state[22] = internal.initial_pS6;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["AKT_init", "ERK_init", "HGF_init", "k_build_mTORC1", "k_build_mTORC2", "k_dephospho_pAKT_S473", "k_dephospho_pAKT_T308", "k_dephospho_pERK", "k_dephospho_pMEK", "k_dephospho_pS6", "k_dephospho_S6K", "k_dephospho_TSC", "k_dissociate_mTORC1", "k_dissociate_mTORC2", "k_inhibit_IRS1_S6K", "k_inhibit_mTORC2_S6K", "k_MET_degradation", "k_phospho_AKT_S473", "k_phospho_AKT_T308", "k_phospho_ERK", "k_phospho_MEK", "k_phospho_MET", "k_phospho_MET_basal", "k_phospho_S6", "k_phospho_S6K", "k_phospho_TSC_AKT", "k_phospho_TSC_ERK", "k_pMET_degradation", "k_recruit_PI3K_MET", "k_release_PI3K", "Mapkap1_free_init", "MEK_init", "MET_init", "mTOR_free_init", "PI3K_init", "Rptor_free_init", "S6_init", "S6K_init", "TSC_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "AKT_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ERK_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HGF_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_build_mTORC1", internal, 0.83333333333333304, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_build_mTORC2", internal, 0.63333333333333297, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_dephospho_pAKT_S473", internal, 0.56666666666666698, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_dephospho_pAKT_T308", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_dephospho_pERK", internal, 0.36666666666666697, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_dephospho_pMEK", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_dephospho_pS6", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_dephospho_S6K", internal, 0.93333333333333302, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_dephospho_TSC", internal, 0.73333333333333295, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_dissociate_mTORC1", internal, 0.86666666666666703, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_dissociate_mTORC2", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_inhibit_IRS1_S6K", internal, 0.43333333333333302, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_inhibit_mTORC2_S6K", internal, 0.66666666666666696, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_MET_degradation", internal, 0.233333333333333, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_phospho_AKT_S473", internal, 0.53333333333333299, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_phospho_AKT_T308", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_phospho_ERK", internal, 0.33333333333333298, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_phospho_MEK", internal, 0.266666666666667, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_phospho_MET", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_phospho_MET_basal", internal, 0.133333333333333, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_phospho_S6", internal, 0.96666666666666701, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_phospho_S6K", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_phospho_TSC_AKT", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_phospho_TSC_ERK", internal, 0.76666666666666705, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_pMET_degradation", internal, 0.16666666666666699, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_recruit_PI3K_MET", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_release_PI3K", internal, 0.46666666666666701, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Mapkap1_free_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MEK_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MET_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mTOR_free_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PI3K_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rptor_free_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S6_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S6K_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TSC_init", internal, 1, -Infinity, Infinity, false);
    internal.initial_AKT = internal.AKT_init;
    internal.initial_ERK = internal.ERK_init;
    internal.initial_HGF = internal.HGF_init;
    internal.initial_Mapkap1_free = internal.Mapkap1_free_init;
    internal.initial_MEK = internal.MEK_init;
    internal.initial_MET = internal.MET_init;
    internal.initial_mTOR_free = internal.mTOR_free_init;
    internal.initial_PI3K = internal.PI3K_init;
    internal.initial_Rptor_free = internal.Rptor_free_init;
    internal.initial_S6 = internal.S6_init;
    internal.initial_S6K = internal.S6K_init;
    internal.initial_TSC = internal.TSC_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const MET = state[0];
    const HGF = state[1];
    const pMET = state[2];
    const MEK = state[3];
    const pMEK = state[4];
    const ERK = state[5];
    const pERK = state[6];
    const PI3K = state[7];
    const PI3K_atMembrane = state[8];
    const AKT = state[9];
    const pAKT_T308 = state[10];
    const pAKT_T308_S473 = state[11];
    const mTOR_free = state[12];
    const Mapkap1_free = state[13];
    const mTORC2 = state[14];
    const pTSC = state[15];
    const TSC = state[16];
    const Rptor_free = state[17];
    const mTORC1 = state[18];
    const S6K = state[19];
    const pS6K = state[20];
    const S6 = state[21];
    const pS6 = state[22];
    dstatedt[9] = 0 - 1 * internal.k_phospho_AKT_T308 * AKT * PI3K_atMembrane * internal.cytoplasm + 1 * internal.k_dephospho_pAKT_T308 * pAKT_T308 * internal.cytoplasm;
    dstatedt[5] = 0 - 1 * internal.k_phospho_ERK * ERK * pMEK * internal.cytoplasm + 1 * internal.k_dephospho_pERK * pERK * internal.cytoplasm;
    dstatedt[1] = 0 - 1 * internal.k_phospho_MET * MET * HGF * internal.cytoplasm;
    dstatedt[13] = 0 - 1 * internal.k_build_mTORC2 * mTOR_free * Mapkap1_free * PI3K_atMembrane * (1 / (1 + internal.k_inhibit_mTORC2_S6K * pS6K)) * internal.cytoplasm + 1 * internal.k_dissociate_mTORC2 * mTORC2 * internal.cytoplasm;
    dstatedt[3] = 0 - 1 * internal.k_phospho_MEK * MEK * pMET * internal.cytoplasm + 1 * internal.k_dephospho_pMEK * pMEK * internal.cytoplasm;
    dstatedt[12] = 0 - 1 * internal.k_build_mTORC2 * mTOR_free * Mapkap1_free * PI3K_atMembrane * (1 / (1 + internal.k_inhibit_mTORC2_S6K * pS6K)) * internal.cytoplasm + 1 * internal.k_dissociate_mTORC2 * mTORC2 * internal.cytoplasm - 1 * internal.k_build_mTORC1 * mTOR_free * Rptor_free * pTSC * internal.cytoplasm + 1 * internal.k_dissociate_mTORC1 * mTORC1 * internal.cytoplasm;
    dstatedt[18] = 0 + 1 * internal.k_build_mTORC1 * mTOR_free * Rptor_free * pTSC * internal.cytoplasm - 1 * internal.k_dissociate_mTORC1 * mTORC1 * internal.cytoplasm;
    dstatedt[14] = 0 + 1 * internal.k_build_mTORC2 * mTOR_free * Mapkap1_free * PI3K_atMembrane * (1 / (1 + internal.k_inhibit_mTORC2_S6K * pS6K)) * internal.cytoplasm - 1 * internal.k_dissociate_mTORC2 * mTORC2 * internal.cytoplasm;
    dstatedt[10] = 0 + 1 * internal.k_phospho_AKT_T308 * AKT * PI3K_atMembrane * internal.cytoplasm - 1 * internal.k_phospho_AKT_S473 * pAKT_T308 * mTORC2 * internal.cytoplasm + 1 * internal.k_dephospho_pAKT_S473 * pAKT_T308_S473 * internal.cytoplasm - 1 * internal.k_dephospho_pAKT_T308 * pAKT_T308 * internal.cytoplasm;
    dstatedt[11] = 0 + 1 * internal.k_phospho_AKT_S473 * pAKT_T308 * mTORC2 * internal.cytoplasm - 1 * internal.k_dephospho_pAKT_S473 * pAKT_T308_S473 * internal.cytoplasm;
    dstatedt[6] = 0 + 1 * internal.k_phospho_ERK * ERK * pMEK * internal.cytoplasm - 1 * internal.k_dephospho_pERK * pERK * internal.cytoplasm;
    dstatedt[7] = 0 - 1 * internal.k_recruit_PI3K_MET * PI3K * pMET * (1 / (1 + internal.k_inhibit_IRS1_S6K * pS6K)) * internal.cytoplasm + 1 * internal.k_release_PI3K * PI3K_atMembrane * internal.cytoplasm;
    dstatedt[8] = 0 + 1 * internal.k_recruit_PI3K_MET * PI3K * pMET * (1 / (1 + internal.k_inhibit_IRS1_S6K * pS6K)) * internal.cytoplasm - 1 * internal.k_release_PI3K * PI3K_atMembrane * internal.cytoplasm;
    dstatedt[4] = 0 + 1 * internal.k_phospho_MEK * MEK * pMET * internal.cytoplasm - 1 * internal.k_dephospho_pMEK * pMEK * internal.cytoplasm;
    dstatedt[2] = 0 + 1 * internal.k_phospho_MET * MET * HGF * internal.cytoplasm + 1 * internal.k_phospho_MET_basal * MET * internal.cytoplasm - 1 * internal.k_pMET_degradation * pMET * internal.cytoplasm;
    dstatedt[22] = 0 + 1 * internal.k_phospho_S6 * S6 * pS6K * internal.cytoplasm - 1 * internal.k_dephospho_pS6 * pS6 * internal.cytoplasm;
    dstatedt[20] = 0 + 1 * internal.k_phospho_S6K * S6K * mTORC1 * internal.cytoplasm - 1 * internal.k_dephospho_S6K * pS6K * internal.cytoplasm;
    dstatedt[15] = 0 - 1 * internal.k_dephospho_TSC * pTSC * internal.cytoplasm + 1 * internal.k_phospho_TSC_ERK * TSC * pERK * internal.cytoplasm + 1 * internal.k_phospho_TSC_AKT * TSC * pAKT_T308 * internal.cytoplasm;
    dstatedt[17] = 0 - 1 * internal.k_build_mTORC1 * mTOR_free * Rptor_free * pTSC * internal.cytoplasm + 1 * internal.k_dissociate_mTORC1 * mTORC1 * internal.cytoplasm;
    dstatedt[21] = 0 - 1 * internal.k_phospho_S6 * S6 * pS6K * internal.cytoplasm + 1 * internal.k_dephospho_pS6 * pS6 * internal.cytoplasm;
    dstatedt[19] = 0 - 1 * internal.k_phospho_S6K * S6K * mTORC1 * internal.cytoplasm + 1 * internal.k_dephospho_S6K * pS6K * internal.cytoplasm;
    dstatedt[16] = 0 + 1 * internal.k_dephospho_TSC * pTSC * internal.cytoplasm - 1 * internal.k_phospho_TSC_ERK * TSC * pERK * internal.cytoplasm - 1 * internal.k_phospho_TSC_AKT * TSC * pAKT_T308 * internal.cytoplasm;
    var k_MET_expression = MET * internal.k_MET_degradation + MET * internal.k_phospho_MET_basal;
    dstatedt[0] = 0 - 1 * internal.k_phospho_MET * MET * HGF * internal.cytoplasm - 1 * internal.k_phospho_MET_basal * MET * internal.cytoplasm + 1 * k_MET_expression * internal.cytoplasm - 1 * internal.k_MET_degradation * MET * internal.cytoplasm;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "MET", "HGF", "pMET", "MEK", "pMEK", "ERK", "pERK", "PI3K", "PI3K_atMembrane", "AKT", "pAKT_T308", "pAKT_T308_S473", "mTOR_free", "Mapkap1_free", "mTORC2", "pTSC", "TSC", "Rptor_free", "mTORC1", "S6K", "pS6K", "S6", "pS6"];
    this.metadata.internalOrder = {AKT_init: null, cytoplasm: null, ERK_init: null, HGF_init: null, initial_AKT: null, initial_ERK: null, initial_HGF: null, initial_Mapkap1_free: null, initial_MEK: null, initial_MET: null, initial_mTOR_free: null, initial_mTORC1: null, initial_mTORC2: null, initial_pAKT_T308: null, initial_pAKT_T308_S473: null, initial_pERK: null, initial_PI3K: null, initial_PI3K_atMembrane: null, initial_pMEK: null, initial_pMET: null, initial_pS6: null, initial_pS6K: null, initial_pTSC: null, initial_Rptor_free: null, initial_S6: null, initial_S6K: null, initial_TSC: null, k_build_mTORC1: null, k_build_mTORC2: null, k_dephospho_pAKT_S473: null, k_dephospho_pAKT_T308: null, k_dephospho_pERK: null, k_dephospho_pMEK: null, k_dephospho_pS6: null, k_dephospho_S6K: null, k_dephospho_TSC: null, k_dissociate_mTORC1: null, k_dissociate_mTORC2: null, k_inhibit_IRS1_S6K: null, k_inhibit_mTORC2_S6K: null, k_MET_degradation: null, k_phospho_AKT_S473: null, k_phospho_AKT_T308: null, k_phospho_ERK: null, k_phospho_MEK: null, k_phospho_MET: null, k_phospho_MET_basal: null, k_phospho_S6: null, k_phospho_S6K: null, k_phospho_TSC_AKT: null, k_phospho_TSC_ERK: null, k_pMET_degradation: null, k_recruit_PI3K_MET: null, k_release_PI3K: null, Mapkap1_free_init: null, MEK_init: null, MET_init: null, mTOR_free_init: null, PI3K_init: null, Rptor_free_init: null, S6_init: null, S6K_init: null, TSC_init: null};
    this.metadata.variableOrder = {MET: null, HGF: null, pMET: null, MEK: null, pMEK: null, ERK: null, pERK: null, PI3K: null, PI3K_atMembrane: null, AKT: null, pAKT_T308: null, pAKT_T308_S473: null, mTOR_free: null, Mapkap1_free: null, mTORC2: null, pTSC: null, TSC: null, Rptor_free: null, mTORC1: null, S6K: null, pS6K: null, S6: null, pS6: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
