export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Body = 1;
    internal.pi = 3.1415929999999999;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(5).fill(0);
    state[0] = internal.initial_Active_TGF_beta;
    state[1] = internal.initial_Macrophages;
    state[2] = internal.initial_VEGF;
    state[3] = internal.initial_LECs;
    state[4] = internal.initial_Capillaries;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a_M", "a_p", "Active_TGF_beta_init", "alpha", "b1", "b2", "b3", "b4", "beta", "C", "c1", "c2", "c3", "c4", "Capillaries_init", "d1", "d2", "d3", "delta1", "delta2", "gamma", "k1", "k2", "L", "LECs_init", "Macrophages_init", "p_0", "r1", "r2", "r3", "rho", "S_L", "s_M", "S_V", "T_L", "VEGF_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a_M", internal, 0.45000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_p", internal, 0.029000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Active_TGF_beta_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b1", internal, 800000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b2", internal, 8100000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b3", internal, 10000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b4", internal, 8100000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C", internal, 10000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c1", internal, 0.41999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c2", internal, 42, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c3", internal, 4.0999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c4", internal, 0.23999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Capillaries_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d1", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d2", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d3", internal, 11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta1", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta2", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 0.0014, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 600000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 471000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L", internal, 10000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "LECs_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Macrophages_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_0", internal, 250000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r1", internal, 3.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r2", internal, 1.22, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r3", internal, 0.0019, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho", internal, 1.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_L", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s_M", internal, 542, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_V", internal, 1.8999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_L", internal, 18, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VEGF_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_Active_TGF_beta = internal.Active_TGF_beta_init;
    internal.initial_Capillaries = internal.Capillaries_init;
    internal.initial_LECs = internal.LECs_init;
    internal.initial_Macrophages = internal.Macrophages_init;
    internal.initial_VEGF = internal.VEGF_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Active_TGF_beta = state[0];
    const Macrophages = state[1];
    const VEGF = state[2];
    const LECs = state[3];
    const Capillaries = state[4];
    dstatedt[0] = 0 + 1 * internal.Body * ((internal.a_p * internal.p_0 * Math.exp(- internal.a_p * internal.T_L * t) + internal.a_M * Macrophages) * (internal.T_L + internal.r1 * Macrophages)) - 1 * internal.Body * internal.d1 * Active_TGF_beta;
    dstatedt[1] = 0 + 1 * internal.Body * (internal.s_M) + 1 * internal.Body * (internal.alpha * (internal.b1 * Math.pow((Active_TGF_beta), (2)) / (internal.b2 + Math.pow((Active_TGF_beta), (4))))) + 1 * internal.Body * (internal.beta * internal.r2 * Macrophages * (1 - Macrophages / internal.k1)) - 1 * internal.Body * internal.d2 * Macrophages - 1 * internal.Body * (internal.rho * Capillaries * Macrophages);
    dstatedt[2] = 0 + 1 * internal.Body * (internal.S_V) + 1 * internal.Body * (internal.r3 * Macrophages) - 1 * internal.Body * internal.d3 * VEGF - 1 * internal.Body * (internal.gamma * VEGF * LECs);
    var f = ((Capillaries < internal.C ? 1 - Capillaries / internal.C : 0));
    var sigma = ((LECs + Capillaries < internal.L ? 0 : 1));
    dstatedt[4] = 0 + 1 * internal.Body * (sigma * (internal.delta1 + internal.delta2 * VEGF) * LECs);
    dstatedt[3] = 0 + 1 * internal.Body * ((internal.c1 + VEGF / (internal.c2 + internal.c3 * VEGF)) * (1 / (1 + internal.c4 * Active_TGF_beta)) * LECs) + 1 * internal.Body * ((internal.S_L + internal.b3 * Math.pow((VEGF), (2)) / (internal.b4 + Math.pow((VEGF), (4)))) * f) - 1 * internal.Body * ((Macrophages + LECs + Capillaries) / internal.k2 * LECs) - 1 * internal.Body * (sigma * (internal.delta1 + internal.delta2 * VEGF) * LECs);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Active_TGF_beta", "Macrophages", "VEGF", "LECs", "Capillaries"];
    this.metadata.internalOrder = {a_M: null, a_p: null, Active_TGF_beta_init: null, alpha: null, b1: null, b2: null, b3: null, b4: null, beta: null, Body: null, C: null, c1: null, c2: null, c3: null, c4: null, Capillaries_init: null, d1: null, d2: null, d3: null, delta1: null, delta2: null, gamma: null, initial_Active_TGF_beta: null, initial_Capillaries: null, initial_LECs: null, initial_Macrophages: null, initial_VEGF: null, k1: null, k2: null, L: null, LECs_init: null, Macrophages_init: null, p_0: null, pi: null, r1: null, r2: null, r3: null, rho: null, S_L: null, s_M: null, S_V: null, T_L: null, VEGF_init: null};
    this.metadata.variableOrder = {Active_TGF_beta: null, Macrophages: null, VEGF: null, LECs: null, Capillaries: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
