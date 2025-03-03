export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.nm = 1;
    internal.nuc = 1;
    internal.sol = 14.625;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(8).fill(0);
    state[0] = internal.initial_stat_sol;
    state[1] = internal.initial_Pstat_sol;
    state[2] = internal.initial_PstatDimer_sol;
    state[3] = internal.initial_PstatDimer_nuc;
    state[4] = internal.initial_stat_nuc;
    state[5] = internal.initial_Pstat_nuc;
    state[6] = internal.initial_statPhosphatase_nuc;
    state[7] = internal.initial_species_test;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Kcat_dephos", "Kcat_phos", "Kf_PstatDimerisation", "Km_dephos", "Km_phos", "Kpsd_imp", "Kr_PstatDimerisation", "Ks_exp", "Ks_imp", "Pstat_nuc_init", "Pstat_sol_init", "PstatDimer_impMax", "PstatDimer_nuc_init", "PstatDimer_sol_init", "species_test_init", "stat_expMax", "stat_impMax", "stat_nuc_init", "stat_sol_init", "statPhosphatase_nuc_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Kcat_dephos", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kcat_phos", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kf_PstatDimerisation", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km_dephos", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km_phos", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kpsd_imp", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kr_PstatDimerisation", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ks_exp", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ks_imp", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pstat_nuc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pstat_sol_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PstatDimer_impMax", internal, 0.044999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PstatDimer_nuc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PstatDimer_sol_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_test_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "stat_expMax", internal, - 0.059999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "stat_impMax", internal, 0.0030000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "stat_nuc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "stat_sol_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "statPhosphatase_nuc_init", internal, 0.050000000000000003, -Infinity, Infinity, false);
    internal.initial_Pstat_nuc = internal.Pstat_nuc_init;
    internal.initial_Pstat_sol = internal.Pstat_sol_init;
    internal.initial_PstatDimer_nuc = internal.PstatDimer_nuc_init;
    internal.initial_PstatDimer_sol = internal.PstatDimer_sol_init;
    internal.initial_species_test = internal.species_test_init;
    internal.initial_stat_nuc = internal.stat_nuc_init;
    internal.initial_stat_sol = internal.stat_sol_init;
    internal.initial_statPhosphatase_nuc = internal.statPhosphatase_nuc_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const stat_sol = state[0];
    const Pstat_sol = state[1];
    const PstatDimer_sol = state[2];
    const PstatDimer_nuc = state[3];
    const stat_nuc = state[4];
    const Pstat_nuc = state[5];
    const statPhosphatase_nuc = state[6];
    dstatedt[6] = 0;
    dstatedt[5] = 0 - 1 * internal.Kcat_dephos * statPhosphatase_nuc * Pstat_nuc * (1 / (internal.Km_dephos + Pstat_nuc)) * internal.nuc - 2 * (internal.Kf_PstatDimerisation * Math.pow((Pstat_nuc), (2)) + - (internal.Kr_PstatDimerisation * PstatDimer_nuc)) * internal.nuc;
    dstatedt[3] = 0 + 1 * (internal.Kf_PstatDimerisation * Math.pow((Pstat_nuc), (2)) + - (internal.Kr_PstatDimerisation * PstatDimer_nuc)) * internal.nuc + 1 * internal.PstatDimer_impMax * PstatDimer_sol * (1 / (internal.Kpsd_imp + PstatDimer_sol)) * internal.nm;
    dstatedt[2] = 0 + 1 * (internal.Kf_PstatDimerisation * Math.pow((Pstat_sol), (2)) + - (internal.Kr_PstatDimerisation * PstatDimer_sol)) * internal.sol - 1 * internal.PstatDimer_impMax * PstatDimer_sol * (1 / (internal.Kpsd_imp + PstatDimer_sol)) * internal.nm;
    dstatedt[4] = 0 + 1 * internal.Kcat_dephos * statPhosphatase_nuc * Pstat_nuc * (1 / (internal.Km_dephos + Pstat_nuc)) * internal.nuc + 1 * internal.nuc * internal.stat_expMax * stat_nuc * (1 / (internal.Ks_exp + stat_nuc)) * internal.nm + 1 * internal.nuc * internal.stat_impMax * stat_sol * (1 / (internal.Ks_imp + stat_sol)) * internal.nm;
    var statKinase_sol = (((t > 500 && t < 2502.5461489497102) ? 0.01 * Math.sin(0.0015709999999999999 * (- 500 + t)) : 0));
    dstatedt[1] = 0 - 2 * (internal.Kf_PstatDimerisation * Math.pow((Pstat_sol), (2)) + - (internal.Kr_PstatDimerisation * PstatDimer_sol)) * internal.sol + 1 * internal.Kcat_phos * statKinase_sol * stat_sol * (1 / (internal.Km_phos + stat_sol)) * internal.sol;
    dstatedt[7] = 0 + 1 * internal.Kcat_phos * statKinase_sol * stat_sol * (1 / (internal.Km_phos + stat_sol)) * internal.sol;
    dstatedt[0] = 0 - 1 * internal.Kcat_phos * statKinase_sol * stat_sol * (1 / (internal.Km_phos + stat_sol)) * internal.sol - 1 * internal.nuc * internal.stat_expMax * stat_nuc * (1 / (internal.Ks_exp + stat_nuc)) * internal.nm - 1 * internal.nuc * internal.stat_impMax * stat_sol * (1 / (internal.Ks_imp + stat_sol)) * internal.nm;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "stat_sol", "Pstat_sol", "PstatDimer_sol", "PstatDimer_nuc", "stat_nuc", "Pstat_nuc", "statPhosphatase_nuc", "species_test"];
    this.metadata.internalOrder = {initial_Pstat_nuc: null, initial_Pstat_sol: null, initial_PstatDimer_nuc: null, initial_PstatDimer_sol: null, initial_species_test: null, initial_stat_nuc: null, initial_stat_sol: null, initial_statPhosphatase_nuc: null, Kcat_dephos: null, Kcat_phos: null, Kf_PstatDimerisation: null, Km_dephos: null, Km_phos: null, Kpsd_imp: null, Kr_PstatDimerisation: null, Ks_exp: null, Ks_imp: null, nm: null, nuc: null, Pstat_nuc_init: null, Pstat_sol_init: null, PstatDimer_impMax: null, PstatDimer_nuc_init: null, PstatDimer_sol_init: null, sol: null, species_test_init: null, stat_expMax: null, stat_impMax: null, stat_nuc_init: null, stat_sol_init: null, statPhosphatase_nuc_init: null};
    this.metadata.variableOrder = {stat_sol: null, Pstat_sol: null, PstatDimer_sol: null, PstatDimer_nuc: null, stat_nuc: null, Pstat_nuc: null, statPhosphatase_nuc: null, species_test: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
