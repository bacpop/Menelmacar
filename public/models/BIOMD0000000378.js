export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Compartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(6).fill(0);
    state[0] = internal.initial_V_membrane;
    state[1] = internal.initial_h;
    state[2] = internal.initial_d;
    state[3] = internal.initial_n;
    state[4] = internal.initial_Ca_i_cytosolic_calcium;
    state[5] = internal.initial_Ca_lum;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Ca_i_calcium_current_f_gate", "Ca_i_cytosolic_calcium_init", "Ca_lum_init", "Ca_o", "Cm", "d_init", "F", "g_fast", "g_K_ATP", "g_K_Ca", "g_K_dr", "g_NaL", "g_NS", "h_init", "k_Ca", "K_Ca", "K_NS", "k_pump", "k_rel", "lamda_d", "lamda_h", "lamda_n", "n_init", "omega", "P_Ca", "R", "Sd", "Sh", "Sm", "Sn", "T", "V_fast", "V_K", "V_membrane_init", "V_Na", "Vd", "Vh", "Vm", "Vn", "VNS"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Ca_i_calcium_current_f_gate", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ca_i_cytosolic_calcium_init", internal, 0.69594659999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ca_lum_init", internal, 102.68600000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ca_o", internal, 2500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cm", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_init", internal, 0.0031711237999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "F", internal, 96485, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_fast", internal, 600, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_K_ATP", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_K_Ca", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_K_dr", internal, 600, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_NaL", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_NS", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h_init", internal, 0.214723, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_Ca", internal, 7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_Ca", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_NS", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_pump", internal, 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_rel", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lamda_d", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lamda_h", internal, 12.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lamda_n", internal, 12.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n_init", internal, 0.18364030000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "omega", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_Ca", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R", internal, 8314, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Sd", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Sh", internal, - 7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Sm", internal, 9, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Sn", internal, 14, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T", internal, 310, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_fast", internal, 80, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_K", internal, - 75, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_membrane_init", internal, - 38.341459999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_Na", internal, 80, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vd", internal, - 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vh", internal, - 48, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vm", internal, - 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vn", internal, - 18, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VNS", internal, - 20, -Infinity, Infinity, false);
    internal.f_infinity = internal.K_Ca / (internal.K_Ca + internal.Ca_i_calcium_current_f_gate);
    internal.initial_Ca_i_cytosolic_calcium = internal.Ca_i_cytosolic_calcium_init;
    internal.initial_Ca_lum = internal.Ca_lum_init;
    internal.initial_d = internal.d_init;
    internal.initial_h = internal.h_init;
    internal.initial_n = internal.n_init;
    internal.initial_V_membrane = internal.V_membrane_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    dstatedt[4] = 0;
    dstatedt[5] = 0;
    dstatedt[2] = 0;
    dstatedt[1] = 0;
    dstatedt[3] = 0;
    dstatedt[0] = 0;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "V_membrane", "h", "d", "n", "Ca_i_cytosolic_calcium", "Ca_lum"];
    this.metadata.internalOrder = {Ca_i_calcium_current_f_gate: null, Ca_i_cytosolic_calcium_init: null, Ca_lum_init: null, Ca_o: null, Cm: null, Compartment: null, d_init: null, F: null, f_infinity: null, g_fast: null, g_K_ATP: null, g_K_Ca: null, g_K_dr: null, g_NaL: null, g_NS: null, h_init: null, initial_Ca_i_cytosolic_calcium: null, initial_Ca_lum: null, initial_d: null, initial_h: null, initial_n: null, initial_V_membrane: null, k_Ca: null, K_Ca: null, K_NS: null, k_pump: null, k_rel: null, lamda_d: null, lamda_h: null, lamda_n: null, n_init: null, omega: null, P_Ca: null, R: null, Sd: null, Sh: null, Sm: null, Sn: null, T: null, V_fast: null, V_K: null, V_membrane_init: null, V_Na: null, Vd: null, Vh: null, Vm: null, Vn: null, VNS: null};
    this.metadata.variableOrder = {V_membrane: null, h: null, d: null, n: null, Ca_i_cytosolic_calcium: null, Ca_lum: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
