export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cyt = 1.3999999999999999;
    internal.nuc = 0.45000000000000001;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(8).fill(0);
    state[0] = internal.initial_STAT5A;
    state[1] = internal.initial_STAT5B;
    state[2] = internal.initial_pApB;
    state[3] = internal.initial_pApA;
    state[4] = internal.initial_pBpB;
    state[5] = internal.initial_nucpApA;
    state[6] = internal.initial_nucpApB;
    state[7] = internal.initial_nucpBpB;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Epo_degradation_BaF3", "k_exp_hetero", "k_exp_homo", "k_imp_hetero", "k_imp_homo", "k_phos", "nucpApA_init", "nucpApB_init", "nucpBpB_init", "pApA_init", "pApB_init", "pBpB_init", "ratio"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Epo_degradation_BaF3", internal, 0.026976536808817501, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_exp_hetero", internal, 1.00097114635938e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_exp_homo", internal, 0.0061723799618614, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_imp_hetero", internal, 0.016370156181246698, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_imp_homo", internal, 96807.681790944596, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_phos", internal, 15767.646991350401, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nucpApA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nucpApB_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nucpBpB_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pApA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pApB_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pBpB_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ratio", internal, 0.69299999999999995, -Infinity, Infinity, false);
    internal.initial_nucpApA = internal.nucpApA_init;
    internal.initial_nucpApB = internal.nucpApB_init;
    internal.initial_nucpBpB = internal.nucpBpB_init;
    internal.initial_pApA = internal.pApA_init;
    internal.initial_pApB = internal.pApB_init;
    internal.initial_pBpB = internal.pBpB_init;
    internal.STAT5A_init = 207.59999999999999 * internal.ratio;
    internal.STAT5B_init = 207.59999999999999 - 207.59999999999999 * internal.ratio;
    internal.initial_STAT5A = internal.STAT5A_init;
    internal.initial_STAT5B = internal.STAT5B_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const STAT5A = state[0];
    const STAT5B = state[1];
    const pApB = state[2];
    const pApA = state[3];
    const pBpB = state[4];
    const nucpApA = state[5];
    const nucpApB = state[6];
    const nucpBpB = state[7];
    dstatedt[5] = 0 + 1 * internal.k_imp_homo * pApA - 1 * internal.k_exp_homo * nucpApA;
    dstatedt[6] = 0 + 1 * internal.k_imp_hetero * pApB - 1 * internal.k_exp_hetero * nucpApB;
    dstatedt[7] = 0 + 1 * internal.k_imp_homo * pBpB - 1 * internal.k_exp_homo * nucpBpB;
    dstatedt[3] = 0 + 1 * 1.2499999999999999e-07 * Math.pow((STAT5A), (2)) * internal.k_phos * Math.exp(- internal.Epo_degradation_BaF3 * t) - 1 * internal.k_imp_homo * pApA;
    dstatedt[2] = 0 + 1 * 1.2499999999999999e-07 * STAT5A * STAT5B * internal.k_phos * Math.exp(- internal.Epo_degradation_BaF3 * t) - 1 * internal.k_imp_hetero * pApB;
    dstatedt[4] = 0 + 1 * 1.2499999999999999e-07 * Math.pow((STAT5B), (2)) * internal.k_phos * Math.exp(- internal.Epo_degradation_BaF3 * t) - 1 * internal.k_imp_homo * pBpB;
    dstatedt[0] = 0 - 2 * 1.2499999999999999e-07 * Math.pow((STAT5A), (2)) * internal.k_phos * Math.exp(- internal.Epo_degradation_BaF3 * t) - 1 * 1.2499999999999999e-07 * STAT5A * STAT5B * internal.k_phos * Math.exp(- internal.Epo_degradation_BaF3 * t) + 2 * internal.k_exp_homo * nucpApA + 1 * internal.k_exp_hetero * nucpApB;
    dstatedt[1] = 0 - 1 * 1.2499999999999999e-07 * STAT5A * STAT5B * internal.k_phos * Math.exp(- internal.Epo_degradation_BaF3 * t) - 2 * 1.2499999999999999e-07 * Math.pow((STAT5B), (2)) * internal.k_phos * Math.exp(- internal.Epo_degradation_BaF3 * t) + 1 * internal.k_exp_hetero * nucpApB + 2 * internal.k_exp_homo * nucpBpB;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "STAT5A", "STAT5B", "pApB", "pApA", "pBpB", "nucpApA", "nucpApB", "nucpBpB"];
    this.metadata.internalOrder = {cyt: null, Epo_degradation_BaF3: null, initial_nucpApA: null, initial_nucpApB: null, initial_nucpBpB: null, initial_pApA: null, initial_pApB: null, initial_pBpB: null, initial_STAT5A: null, initial_STAT5B: null, k_exp_hetero: null, k_exp_homo: null, k_imp_hetero: null, k_imp_homo: null, k_phos: null, nuc: null, nucpApA_init: null, nucpApB_init: null, nucpBpB_init: null, pApA_init: null, pApB_init: null, pBpB_init: null, ratio: null, STAT5A_init: null, STAT5B_init: null};
    this.metadata.variableOrder = {STAT5A: null, STAT5B: null, pApB: null, pApA: null, pBpB: null, nucpApA: null, nucpApB: null, nucpBpB: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
