export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Tumor_microenvironment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(6).fill(0);
    state[0] = internal.initial_Tumor_cells;
    state[1] = internal.initial_NK_cells;
    state[2] = internal.initial_CD8_T_cells;
    state[3] = internal.initial_CD4_T_cells;
    state[4] = internal.initial_Circulating_lymphocytes;
    state[5] = internal.initial_IL_2;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "a_1", "alpha", "alpha_1", "alpha_2", "b", "beta", "beta_1", "beta_2", "c", "c_1", "CD4_T_cells_init", "CD8_T_cells_init", "Circulating_lymphocytes_init", "d", "delta_2", "e", "f", "g", "g_i", "h", "IL_2_init", "jxj", "kxk", "lxl", "m", "mu_1", "mu_i", "NK_cells_init", "p", "p_i", "q", "r_1", "r_2", "s", "Tumor_cells_init", "u"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.43099999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_1", internal, 100000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha", internal, 750000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_1", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_2", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 1.02e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 0.012, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_1", internal, 0.83499999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_2", internal, 5.4000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c", internal, 6.4100000000000004e-11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c_1", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CD4_T_cells_init", internal, 1000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CD8_T_cells_init", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Circulating_lymphocytes_init", internal, 60000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d", internal, 2.3399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_2", internal, 9.9999999999999995e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e", internal, 2.0800000000000001e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f", internal, 0.041200000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g", internal, 0.012500000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_i", internal, 20000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h", internal, 20200000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IL_2_init", internal, 100000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "jxj", internal, 0.024899999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 36600000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lxl", internal, 2.0899999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m", internal, 0.20399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu_i", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NK_cells_init", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p", internal, 3.4199999999999999e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_i", internal, 0.125, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q", internal, 1.42e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_1", internal, 1.1000000000000001e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_2", internal, 6.4999999999999995e-11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s", internal, 0.083900000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tumor_cells_init", internal, 10000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u", internal, 3e-10, -Infinity, Infinity, false);
    internal.initial_CD4_T_cells = internal.CD4_T_cells_init;
    internal.initial_CD8_T_cells = internal.CD8_T_cells_init;
    internal.initial_Circulating_lymphocytes = internal.Circulating_lymphocytes_init;
    internal.initial_IL_2 = internal.IL_2_init;
    internal.initial_NK_cells = internal.NK_cells_init;
    internal.initial_Tumor_cells = internal.Tumor_cells_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Tumor_cells = state[0];
    const NK_cells = state[1];
    const CD8_T_cells = state[2];
    const CD4_T_cells = state[3];
    const Circulating_lymphocytes = state[4];
    const IL_2 = state[5];
    var D = internal.d * (Math.pow((CD8_T_cells / (Tumor_cells + 1e-10)), (internal.lxl)) / (internal.s + Math.pow((CD8_T_cells / (Tumor_cells + 1e-10)), (internal.lxl))));
    dstatedt[3] = 0 + 1 * internal.Tumor_microenvironment * (internal.beta_1 * Tumor_cells / (internal.alpha_1 + Tumor_cells) * IL_2) - 1 * internal.Tumor_microenvironment * (internal.mu_1 * CD4_T_cells + internal.delta_2 * Tumor_cells * CD4_T_cells);
    dstatedt[4] = 0 + 1 * internal.Tumor_microenvironment * (internal.alpha) - 1 * internal.Tumor_microenvironment * internal.beta * Circulating_lymphocytes;
    dstatedt[5] = 0 + 1 * internal.Tumor_microenvironment * (internal.beta_2 * Tumor_cells / (internal.alpha_2 + Tumor_cells) * CD4_T_cells) - 1 * internal.Tumor_microenvironment * internal.mu_i * IL_2;
    dstatedt[1] = 0 + 1 * internal.Tumor_microenvironment * (internal.e * Circulating_lymphocytes + internal.g * Math.pow((Tumor_cells), (2)) / (internal.h + Math.pow((Tumor_cells), (2))) * NK_cells) - 1 * internal.Tumor_microenvironment * (internal.f * NK_cells + internal.p * NK_cells * Tumor_cells);
    dstatedt[2] = 0 + 1 * internal.Tumor_microenvironment * (internal.jxj * Math.pow((D), (2)) * Math.pow((Tumor_cells), (2)) / (internal.kxk + Math.pow((D), (2)) * Math.pow((Tumor_cells), (2))) * CD8_T_cells + (internal.r_1 * NK_cells + internal.r_2 * Circulating_lymphocytes) * Tumor_cells + internal.p_i * IL_2 / (internal.g_i + IL_2) * CD8_T_cells) - 1 * internal.Tumor_microenvironment * (internal.m * CD8_T_cells + internal.q * CD8_T_cells * Tumor_cells + internal.u * NK_cells * Math.pow((CD8_T_cells), (2)));
    dstatedt[0] = 0 + 1 * internal.Tumor_microenvironment * (internal.a * Tumor_cells * (1 - internal.b * Tumor_cells)) - 1 * internal.Tumor_microenvironment * (internal.c * NK_cells * Tumor_cells + D * Tumor_cells + internal.c_1 * Tumor_cells / (internal.a_1 + Tumor_cells) * IL_2);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Tumor_cells", "NK_cells", "CD8_T_cells", "CD4_T_cells", "Circulating_lymphocytes", "IL_2"];
    this.metadata.internalOrder = {a: null, a_1: null, alpha: null, alpha_1: null, alpha_2: null, b: null, beta: null, beta_1: null, beta_2: null, c: null, c_1: null, CD4_T_cells_init: null, CD8_T_cells_init: null, Circulating_lymphocytes_init: null, d: null, delta_2: null, e: null, f: null, g: null, g_i: null, h: null, IL_2_init: null, initial_CD4_T_cells: null, initial_CD8_T_cells: null, initial_Circulating_lymphocytes: null, initial_IL_2: null, initial_NK_cells: null, initial_Tumor_cells: null, jxj: null, kxk: null, lxl: null, m: null, mu_1: null, mu_i: null, NK_cells_init: null, p: null, p_i: null, q: null, r_1: null, r_2: null, s: null, Tumor_cells_init: null, Tumor_microenvironment: null, u: null};
    this.metadata.variableOrder = {Tumor_cells: null, NK_cells: null, CD8_T_cells: null, CD4_T_cells: null, Circulating_lymphocytes: null, IL_2: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
