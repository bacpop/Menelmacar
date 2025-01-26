export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.gut = 1;
    internal.V_3_OMD = 0.19600000000000001;
    internal.Vdopa = 0.496;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_A_dopa;
    state[1] = internal.initial_C_dopa;
    state[2] = internal.initial_C_OMD;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["C_dopa_init", "C_OMD_init", "CL_dopa0", "CL_OMD", "f_AADC", "f_COMT", "F_G", "f_H", "ka_b", "L_Dopa_per_kg_rat", "Q", "rat_body_mass"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "C_dopa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_OMD_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CL_dopa0", internal, 0.82299999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CL_OMD", internal, 0.012, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f_AADC", internal, 0.68999999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f_COMT", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "F_G", internal, 0.23999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f_H", internal, 0.13, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ka_b", internal, 2.1099999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L_Dopa_per_kg_rat", internal, 404, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Q", internal, 0.82799999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rat_body_mass", internal, 0.25, -Infinity, Infinity, false);
    internal.A_dopa_init = internal.L_Dopa_per_kg_rat * internal.rat_body_mass;
    internal.CL_AADC = internal.CL_dopa0 * internal.f_AADC;
    internal.CL_COMT = internal.CL_dopa0 * internal.f_COMT;
    internal.f_rest = 1 - (internal.f_AADC + internal.f_COMT);
    internal.initial_C_dopa = internal.C_dopa_init;
    internal.initial_C_OMD = internal.C_OMD_init;
    internal.CL_rest = internal.CL_dopa0 * internal.f_rest;
    internal.initial_A_dopa = internal.A_dopa_init;
    internal.CL_dopa = internal.CL_AADC + internal.CL_rest + internal.CL_COMT;
    internal.CL_H = internal.f_H * internal.CL_dopa;
    internal.F_H = 1 - internal.CL_H / internal.Q;
    internal.F_b = internal.F_H * internal.F_G;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const A_dopa = state[0];
    const C_dopa = state[1];
    const C_OMD = state[2];
    dstatedt[2] = 0 + 1 * internal.CL_COMT * C_dopa - 1 * internal.CL_OMD * C_OMD;
    dstatedt[0] = 0 - 1 * internal.ka_b * A_dopa * internal.F_b - 1 * internal.ka_b * A_dopa * (1 - internal.F_b);
    dstatedt[1] = 0 + 1 * internal.ka_b * A_dopa * internal.F_b - 1 * internal.CL_AADC * C_dopa - 1 * internal.CL_COMT * C_dopa - 1 * internal.CL_rest * C_dopa;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "A_dopa", "C_dopa", "C_OMD"];
    this.metadata.internalOrder = {A_dopa_init: null, C_dopa_init: null, C_OMD_init: null, CL_AADC: null, CL_COMT: null, CL_dopa: null, CL_dopa0: null, CL_H: null, CL_OMD: null, CL_rest: null, f_AADC: null, F_b: null, f_COMT: null, F_G: null, f_H: null, F_H: null, f_rest: null, gut: null, initial_A_dopa: null, initial_C_dopa: null, initial_C_OMD: null, ka_b: null, L_Dopa_per_kg_rat: null, Q: null, rat_body_mass: null, V_3_OMD: null, Vdopa: null};
    this.metadata.variableOrder = {A_dopa: null, C_dopa: null, C_OMD: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
