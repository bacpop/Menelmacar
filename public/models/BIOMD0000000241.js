export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.C = 0.31;
    internal.Eff = 1;
    internal.Gut = 1;
    internal.P = 1;
    internal.Tol = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(5).fill(0);
    state[0] = internal.initial_X_gut;
    state[1] = internal.initial_C_p;
    state[2] = internal.initial_C_per;
    state[3] = internal.initial_C_e;
    state[4] = internal.initial_C_t;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["bodyweight", "C_e_init", "C_p_init", "C_per_init", "C_t_init", "CL", "cups", "cupsize", "E", "E_0", "F", "k_a", "k_eo", "k_tol", "k10", "k12", "k21", "S", "T_50", "t_half", "t_int", "t_lag", "V_C", "X_gut_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "bodyweight", internal, 80, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_e_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_p_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_per_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_t_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CL", internal, 0.11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cups", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cupsize", internal, 90, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_0", internal, 83.299999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "F", internal, 0.98399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_a", internal, 12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_eo", internal, 2.0299999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_tol", internal, 0.75, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 0.34000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k12", internal, 1.6399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k21", internal, 1.1899999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S", internal, 19.07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_50", internal, 0.26000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t_half", internal, 3.98, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t_int", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t_lag", internal, 0.14999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_C", internal, 0.32000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_gut_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_C_e = internal.C_e_init;
    internal.initial_C_p = internal.C_p_init;
    internal.initial_C_per = internal.C_per_init;
    internal.initial_C_t = internal.C_t_init;
    internal.initial_X_gut = internal.X_gut_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const X_gut = state[0];
    const C_p = state[1];
    const C_per = state[2];
    const C_e = state[3];
    const C_t = state[4];
    dstatedt[3] = internal.k_eo * (C_p - C_e);
    dstatedt[1] = internal.k_a * internal.F * X_gut / internal.V_C - internal.k12 * C_p + internal.k21 * C_per - internal.k10 * C_p;
    dstatedt[2] = internal.k12 * C_p - internal.k21 * C_per;
    dstatedt[4] = internal.k_tol * (C_p - C_t);
    dstatedt[0] = - internal.k_a * X_gut;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "X_gut", "C_p", "C_per", "C_e", "C_t"];
    this.metadata.internalOrder = {bodyweight: null, C: null, C_e_init: null, C_p_init: null, C_per_init: null, C_t_init: null, CL: null, cups: null, cupsize: null, E: null, E_0: null, Eff: null, F: null, Gut: null, initial_C_e: null, initial_C_p: null, initial_C_per: null, initial_C_t: null, initial_X_gut: null, k_a: null, k_eo: null, k_tol: null, k10: null, k12: null, k21: null, P: null, S: null, T_50: null, t_half: null, t_int: null, t_lag: null, Tol: null, V_C: null, X_gut_init: null};
    this.metadata.variableOrder = {X_gut: null, C_p: null, C_per: null, C_e: null, C_t: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
