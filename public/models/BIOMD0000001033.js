export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Whole_organism = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(6).fill(0);
    state[0] = internal.initial_Uninfected_tumour_cells;
    state[1] = internal.initial_Infected_tumour_cells;
    state[2] = internal.initial_M1_macrophages;
    state[3] = internal.initial_Uninfected_M2_macrophages;
    state[4] = internal.initial_Infected_M2_macrophages;
    state[5] = internal.initial_Oncolytic_viruses;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a1_i", "a1_u", "a1_v", "a2_u", "b", "beta1", "beta2", "c", "d_e1", "d_e2", "d_i", "d_m", "d_u", "delta_i1", "delta_i2", "delta_v", "g1", "g2", "h_m", "h_u", "h_v", "Infected_M2_macrophages_init", "Infected_tumour_cells_init", "K1", "K2", "M1_macrophages_init", "omega", "Oncolytic_viruses_init", "p_m1", "p_m2", "r", "r_u_m1", "r_v_m2", "r0_m1", "r0_m2", "Uninfected_M2_macrophages_init", "Uninfected_tumour_cells_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a1_i", internal, 0.00025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a1_u", internal, 1.2499999999999999e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a1_v", internal, 0.025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a2_u", internal, 2.4999999999999999e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta1", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta2", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c", internal, 8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_e1", internal, 0.88, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_e2", internal, 0.12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_i", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_m", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_u", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_i1", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_i2", internal, 0.52000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_v", internal, 5.0000000000000002e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g1", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g2", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h_m", internal, 0.00025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h_u", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h_v", internal, 9.9999999999999995e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Infected_M2_macrophages_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Infected_tumour_cells_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M1_macrophages_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "omega", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Oncolytic_viruses_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_m1", internal, 0.56999999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_m2", internal, 0.56999999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 0.62, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_u_m1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_v_m2", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r0_m1", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r0_m2", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Uninfected_M2_macrophages_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Uninfected_tumour_cells_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_Infected_M2_macrophages = internal.Infected_M2_macrophages_init;
    internal.initial_Infected_tumour_cells = internal.Infected_tumour_cells_init;
    internal.initial_M1_macrophages = internal.M1_macrophages_init;
    internal.initial_Oncolytic_viruses = internal.Oncolytic_viruses_init;
    internal.initial_Uninfected_M2_macrophages = internal.Uninfected_M2_macrophages_init;
    internal.initial_Uninfected_tumour_cells = internal.Uninfected_tumour_cells_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Uninfected_tumour_cells = state[0];
    const Infected_tumour_cells = state[1];
    const M1_macrophages = state[2];
    const Uninfected_M2_macrophages = state[3];
    const Infected_M2_macrophages = state[4];
    const Oncolytic_viruses = state[5];
    dstatedt[4] = 0 + 1 * internal.Whole_organism * (internal.beta2 * Oncolytic_viruses * Uninfected_M2_macrophages) - 1 * internal.Whole_organism * internal.delta_i2 * Infected_M2_macrophages;
    dstatedt[1] = 0 + 1 * internal.Whole_organism * (internal.beta1 * Oncolytic_viruses * Uninfected_tumour_cells) - 1 * internal.Whole_organism * (internal.delta_i1 * Infected_tumour_cells + internal.d_i * Infected_tumour_cells * (M1_macrophages / (internal.h_m + Uninfected_M2_macrophages)));
    dstatedt[2] = 0 + 1 * internal.Whole_organism * (internal.a1_v * Oncolytic_viruses + internal.a1_i * Infected_tumour_cells + internal.a1_u * Uninfected_tumour_cells + internal.p_m1 * M1_macrophages * (1 - (M1_macrophages + Uninfected_M2_macrophages) / internal.K2)) - 1 * internal.Whole_organism * (M1_macrophages * (internal.r0_m1 + internal.r_u_m1 * (Uninfected_tumour_cells / (internal.h_u + Uninfected_tumour_cells))) - Uninfected_M2_macrophages * (internal.r0_m2 + internal.r_v_m2 * (Oncolytic_viruses / (internal.h_v + Oncolytic_viruses)))) - 1 * internal.Whole_organism * internal.d_e1 * M1_macrophages;
    dstatedt[5] = 0 + 1 * internal.Whole_organism * (internal.b * internal.delta_i1 * Infected_tumour_cells + internal.c * internal.delta_i2 * Infected_M2_macrophages) - 1 * internal.Whole_organism * (internal.omega * Oncolytic_viruses + internal.delta_v * Oncolytic_viruses * (M1_macrophages / (internal.h_m + Uninfected_M2_macrophages)));
    dstatedt[3] = 0 + 1 * internal.Whole_organism * (M1_macrophages * (internal.r0_m1 + internal.r_u_m1 * (Uninfected_tumour_cells / (internal.h_u + Uninfected_tumour_cells))) - Uninfected_M2_macrophages * (internal.r0_m2 + internal.r_v_m2 * (Oncolytic_viruses / (internal.h_v + Oncolytic_viruses)))) + 1 * internal.Whole_organism * (internal.a2_u * Uninfected_tumour_cells + internal.p_m2 * Uninfected_M2_macrophages * (1 - (M1_macrophages + Uninfected_M2_macrophages) / internal.K2)) - 1 * internal.Whole_organism * (internal.beta2 * Oncolytic_viruses * Uninfected_M2_macrophages) - 1 * internal.Whole_organism * internal.d_e2 * Uninfected_M2_macrophages;
    dstatedt[0] = 0 + 1 * internal.Whole_organism * (internal.r * Uninfected_tumour_cells * (1 - Uninfected_tumour_cells / internal.K1) + internal.d_m * Uninfected_tumour_cells * (Uninfected_M2_macrophages / (internal.h_m + Uninfected_M2_macrophages))) - 1 * internal.Whole_organism * (internal.beta1 * Oncolytic_viruses * Uninfected_tumour_cells) - 1 * internal.Whole_organism * (internal.d_u * Uninfected_tumour_cells * (M1_macrophages / (internal.h_m + Uninfected_M2_macrophages)));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Uninfected_tumour_cells", "Infected_tumour_cells", "M1_macrophages", "Uninfected_M2_macrophages", "Infected_M2_macrophages", "Oncolytic_viruses"];
    this.metadata.internalOrder = {a1_i: null, a1_u: null, a1_v: null, a2_u: null, b: null, beta1: null, beta2: null, c: null, d_e1: null, d_e2: null, d_i: null, d_m: null, d_u: null, delta_i1: null, delta_i2: null, delta_v: null, g1: null, g2: null, h_m: null, h_u: null, h_v: null, Infected_M2_macrophages_init: null, Infected_tumour_cells_init: null, initial_Infected_M2_macrophages: null, initial_Infected_tumour_cells: null, initial_M1_macrophages: null, initial_Oncolytic_viruses: null, initial_Uninfected_M2_macrophages: null, initial_Uninfected_tumour_cells: null, K1: null, K2: null, M1_macrophages_init: null, omega: null, Oncolytic_viruses_init: null, p_m1: null, p_m2: null, r: null, r_u_m1: null, r_v_m2: null, r0_m1: null, r0_m2: null, Uninfected_M2_macrophages_init: null, Uninfected_tumour_cells_init: null, Whole_organism: null};
    this.metadata.variableOrder = {Uninfected_tumour_cells: null, Infected_tumour_cells: null, M1_macrophages: null, Uninfected_M2_macrophages: null, Infected_M2_macrophages: null, Oncolytic_viruses: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
