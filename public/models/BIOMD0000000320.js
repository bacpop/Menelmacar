export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.gut = 1;
    internal.V_3_OMD = 0.128;
    internal.V1_B = 0.20200000000000001;
    internal.V1_M = 0.069099999999999995;
    internal.V2_B = 0.127;
    internal.V2_M = 3.2000000000000002;
    internal.Vdopa = 0.496;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(9).fill(0);
    state[0] = internal.initial_A_dopa;
    state[1] = internal.initial_A_B;
    state[2] = internal.initial_A_M;
    state[3] = internal.initial_C_dopa;
    state[4] = internal.initial_C_OMD;
    state[5] = internal.initial_C1_M;
    state[6] = internal.initial_C2_M;
    state[7] = internal.initial_C1_B;
    state[8] = internal.initial_C2_B;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A_bens_tot", "B_M_frac", "Benserazide_per_kg_rat", "C_dopa_init", "C_OMD_init", "C1_B_init", "C1_M_init", "C2_B_init", "C2_M_init", "CL_B", "CL_dB", "CL_dM", "CL_dopa0", "CL_M", "CL_OMD", "f_AADC", "F_B", "f_COMT", "F_G", "f_H", "fm", "ka_B", "ka_c", "ka_M", "ki", "L_Dopa_per_kg_rat", "Q", "rat_body_mass"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A_bens_tot", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B_M_frac", internal, 0.070000000000000007, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Benserazide_per_kg_rat", internal, 78, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_dopa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_OMD_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C1_B_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C1_M_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C2_B_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C2_M_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CL_B", internal, 1.6699999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CL_dB", internal, 0.071999999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CL_dM", internal, 1.0600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CL_dopa0", internal, 0.82299999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CL_M", internal, 4.29, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CL_OMD", internal, 0.0089499999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f_AADC", internal, 0.68999999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "F_B", internal, 0.021999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f_COMT", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "F_G", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f_H", internal, 0.13, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "fm", internal, 0.14999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ka_B", internal, 0.93999999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ka_c", internal, 1.29, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ka_M", internal, 2.4700000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ki", internal, 0.0024599999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L_Dopa_per_kg_rat", internal, 404, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Q", internal, 0.82799999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rat_body_mass", internal, 0.25, -Infinity, Infinity, false);
    internal.A_B_init = internal.A_bens_tot * (1 - internal.B_M_frac);
    internal.A_dopa_init = internal.L_Dopa_per_kg_rat * internal.rat_body_mass;
    internal.A_M_init = internal.A_bens_tot * internal.B_M_frac;
    internal.CL_AADC0 = internal.CL_dopa0 * internal.f_AADC;
    internal.CL_COMT = internal.CL_dopa0 * internal.f_COMT;
    internal.f_rest = 1 - (internal.f_AADC + internal.f_COMT);
    internal.initial_C_dopa = internal.C_dopa_init;
    internal.initial_C_OMD = internal.C_OMD_init;
    internal.initial_C1_B = internal.C1_B_init;
    internal.initial_C1_M = internal.C1_M_init;
    internal.initial_C2_B = internal.C2_B_init;
    internal.initial_C2_M = internal.C2_M_init;
    internal.CL_rest = internal.CL_dopa0 * internal.f_rest;
    internal.initial_A_B = internal.A_B_init;
    internal.initial_A_dopa = internal.A_dopa_init;
    internal.initial_A_M = internal.A_M_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const A_dopa = state[0];
    const A_B = state[1];
    const A_M = state[2];
    const C_dopa = state[3];
    const C_OMD = state[4];
    const C1_M = state[5];
    const C2_M = state[6];
    const C1_B = state[7];
    const C2_B = state[8];
    dstatedt[1] = 0 - 1 * internal.ka_B * A_B * internal.F_B - 1 * internal.ka_B * A_B * (1 - internal.F_B);
    dstatedt[2] = 0 - 1 * internal.ka_M * A_M;
    dstatedt[7] = 0 + 1 * internal.ka_B * A_B * internal.F_B - 1 * internal.CL_B * C1_B - 1 * internal.fm / (1 - internal.fm) * internal.CL_B * C1_B - 1 * internal.CL_dB * (C1_B - C2_B);
    dstatedt[5] = 0 + 1 * internal.ka_M * A_M + 1 * internal.fm / (1 - internal.fm) * internal.CL_B * C1_B - 1 * internal.CL_M * C1_M - 1 * internal.CL_dM * (C1_M - C2_M);
    dstatedt[8] = 0 + 1 * internal.CL_dB * (C1_B - C2_B);
    dstatedt[6] = 0 + 1 * internal.CL_dM * (C1_M - C2_M);
    var CL_AADC = internal.CL_AADC0 / (1 + C1_M / internal.ki);
    dstatedt[4] = 0 + 1 * internal.CL_COMT * C_dopa - 1 * internal.CL_OMD * C_OMD;
    var CL_dopa = CL_AADC + internal.CL_rest + internal.CL_COMT;
    var CL_H = internal.f_H * CL_dopa;
    var F_H = 1 - CL_H / internal.Q;
    var F_c = F_H * internal.F_G;
    dstatedt[0] = 0 - 1 * internal.ka_c * A_dopa * F_c - 1 * internal.ka_c * A_dopa * (1 - F_c);
    dstatedt[3] = 0 + 1 * internal.ka_c * A_dopa * F_c - 1 * CL_AADC * C_dopa - 1 * internal.CL_COMT * C_dopa - 1 * internal.CL_rest * C_dopa;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "A_dopa", "A_B", "A_M", "C_dopa", "C_OMD", "C1_M", "C2_M", "C1_B", "C2_B"];
    this.metadata.internalOrder = {A_B_init: null, A_bens_tot: null, A_dopa_init: null, A_M_init: null, B_M_frac: null, Benserazide_per_kg_rat: null, C_dopa_init: null, C_OMD_init: null, C1_B_init: null, C1_M_init: null, C2_B_init: null, C2_M_init: null, CL_AADC0: null, CL_B: null, CL_COMT: null, CL_dB: null, CL_dM: null, CL_dopa0: null, CL_M: null, CL_OMD: null, CL_rest: null, f_AADC: null, F_B: null, f_COMT: null, F_G: null, f_H: null, f_rest: null, fm: null, gut: null, initial_A_B: null, initial_A_dopa: null, initial_A_M: null, initial_C_dopa: null, initial_C_OMD: null, initial_C1_B: null, initial_C1_M: null, initial_C2_B: null, initial_C2_M: null, ka_B: null, ka_c: null, ka_M: null, ki: null, L_Dopa_per_kg_rat: null, Q: null, rat_body_mass: null, V_3_OMD: null, V1_B: null, V1_M: null, V2_B: null, V2_M: null, Vdopa: null};
    this.metadata.variableOrder = {A_dopa: null, A_B: null, A_M: null, C_dopa: null, C_OMD: null, C1_M: null, C2_M: null, C1_B: null, C2_B: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
