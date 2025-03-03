export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.k_LRC = 2197;
    internal.V_cyt = 0.0010499999999999999;
    internal.V_medium = 1;
    internal.V_nuc = 0.00035;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(16).fill(0);
    state[0] = internal.initial_Smad2c;
    state[1] = internal.initial_Smad2n;
    state[2] = internal.initial_Smad4c;
    state[3] = internal.initial_Smad4n;
    state[4] = internal.initial_T1R_Surf;
    state[5] = internal.initial_T1R_Cave;
    state[6] = internal.initial_T1R_EE;
    state[7] = internal.initial_T2R_Surf;
    state[8] = internal.initial_T2R_Cave;
    state[9] = internal.initial_T2R_EE;
    state[10] = internal.initial_LRC_Surf;
    state[11] = internal.initial_LRC_Cave;
    state[12] = internal.initial_LRC_EE;
    state[13] = internal.initial_Smads_Complex_c;
    state[14] = internal.initial_Smads_Complex_n;
    state[15] = internal.initial_TGF_beta;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["k_Smads_Complex_c", "Kcd", "Kdeg_T1R_EE", "Kdeg_T2R_EE", "Kdiss_Smads_Complex_n", "Kexp_Smad2n", "Kexp_Smad4n", "ki_Cave", "ki_EE", "Kimp_Smad2c", "Kimp_Smad4c", "Kimp_Smads_Complex_c", "Klid", "kr_Cave", "kr_EE", "LRC_Cave_init", "LRC_EE_init", "LRC_Surf_init", "Smad2c_init", "Smad2n_init", "Smad4c_init", "Smad4n_init", "Smads_Complex_c_init", "Smads_Complex_n_init", "T1R_Cave_init", "T1R_EE_init", "T1R_Surf_init", "T2R_Cave_init", "T2R_EE_init", "T2R_Surf_init", "TGF_beta_init", "v_T1R", "v_T2R"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "k_Smads_Complex_c", internal, 6.8499999999999998e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kcd", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kdeg_T1R_EE", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kdeg_T2R_EE", internal, 0.025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kdiss_Smads_Complex_n", internal, 0.1174, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kexp_Smad2n", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kexp_Smad4n", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ki_Cave", internal, 0.33000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ki_EE", internal, 0.33000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kimp_Smad2c", internal, 0.16, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kimp_Smad4c", internal, 0.080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kimp_Smads_Complex_c", internal, 0.16, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Klid", internal, 0.026089999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kr_Cave", internal, 0.037420000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kr_EE", internal, 0.033000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "LRC_Cave_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "LRC_EE_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "LRC_Surf_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Smad2c_init", internal, 492.61000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Smad2n_init", internal, 236.44999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Smad4c_init", internal, 1149.4000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Smad4n_init", internal, 551.72000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Smads_Complex_c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Smads_Complex_n_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T1R_Cave_init", internal, 2.0920000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T1R_EE_init", internal, 2.0600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T1R_Surf_init", internal, 0.23699999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T2R_Cave_init", internal, 1.778, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T2R_EE_init", internal, 1.1479999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T2R_Surf_init", internal, 0.20200000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TGF_beta_init", internal, 0.080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v_T1R", internal, 0.0103, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v_T2R", internal, 0.02869, -Infinity, Infinity, false);
    internal.initial_LRC_Cave = internal.LRC_Cave_init;
    internal.initial_LRC_EE = internal.LRC_EE_init;
    internal.initial_LRC_Surf = internal.LRC_Surf_init;
    internal.initial_Smad2c = internal.Smad2c_init;
    internal.initial_Smad2n = internal.Smad2n_init;
    internal.initial_Smad4c = internal.Smad4c_init;
    internal.initial_Smad4n = internal.Smad4n_init;
    internal.initial_Smads_Complex_c = internal.Smads_Complex_c_init;
    internal.initial_Smads_Complex_n = internal.Smads_Complex_n_init;
    internal.initial_T1R_Cave = internal.T1R_Cave_init;
    internal.initial_T1R_EE = internal.T1R_EE_init;
    internal.initial_T1R_Surf = internal.T1R_Surf_init;
    internal.initial_T2R_Cave = internal.T2R_Cave_init;
    internal.initial_T2R_EE = internal.T2R_EE_init;
    internal.initial_T2R_Surf = internal.T2R_Surf_init;
    internal.initial_TGF_beta = internal.TGF_beta_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Smad2c = state[0];
    const Smad2n = state[1];
    const Smad4c = state[2];
    const Smad4n = state[3];
    const T1R_Surf = state[4];
    const T1R_Cave = state[5];
    const T1R_EE = state[6];
    const T2R_Surf = state[7];
    const T2R_Cave = state[8];
    const T2R_EE = state[9];
    const LRC_Surf = state[10];
    const LRC_Cave = state[11];
    const LRC_EE = state[12];
    const Smads_Complex_c = state[13];
    const Smads_Complex_n = state[14];
    const TGF_beta = state[15];
    dstatedt[11] = 0 + 1 * internal.V_cyt * internal.ki_Cave * LRC_Surf - 1 * internal.V_cyt * internal.kr_Cave * LRC_Cave - 1 * internal.V_cyt * internal.Klid * LRC_Cave * Smads_Complex_n;
    dstatedt[12] = 0 + 1 * internal.V_cyt * internal.ki_EE * LRC_Surf - 1 * internal.V_cyt * internal.kr_EE * LRC_EE - 1 * internal.V_cyt * internal.Kcd * LRC_EE;
    dstatedt[10] = 0 + 1 * internal.V_cyt * internal.k_LRC * TGF_beta * T2R_Surf * T1R_Surf - 1 * internal.V_cyt * internal.ki_Cave * LRC_Surf - 1 * internal.V_cyt * internal.ki_EE * LRC_Surf;
    dstatedt[0] = 0 - 1 * internal.V_cyt * internal.Kimp_Smad2c * Smad2c + 1 * internal.V_nuc * internal.Kexp_Smad2n * Smad2n - 1 * internal.V_cyt * internal.k_Smads_Complex_c * Smad2c * Smad4c * LRC_EE;
    dstatedt[1] = 0 + 1 * internal.V_cyt * internal.Kimp_Smad2c * Smad2c - 1 * internal.V_nuc * internal.Kexp_Smad2n * Smad2n + 1 * internal.V_nuc * internal.Kdiss_Smads_Complex_n * Smads_Complex_n;
    dstatedt[2] = 0 - 1 * internal.V_cyt * internal.Kimp_Smad4c * Smad4c + 1 * internal.V_nuc * internal.Kexp_Smad4n * Smad4n - 1 * internal.V_cyt * internal.k_Smads_Complex_c * Smad2c * Smad4c * LRC_EE;
    dstatedt[3] = 0 + 1 * internal.V_cyt * internal.Kimp_Smad4c * Smad4c - 1 * internal.V_nuc * internal.Kexp_Smad4n * Smad4n + 1 * internal.V_nuc * internal.Kdiss_Smads_Complex_n * Smads_Complex_n;
    dstatedt[13] = 0 + 1 * internal.V_cyt * internal.k_Smads_Complex_c * Smad2c * Smad4c * LRC_EE - 1 * internal.V_cyt * internal.Kimp_Smads_Complex_c * Smads_Complex_c;
    dstatedt[14] = 0 + 1 * internal.V_cyt * internal.Kimp_Smads_Complex_c * Smads_Complex_c - 1 * internal.V_nuc * internal.Kdiss_Smads_Complex_n * Smads_Complex_n;
    dstatedt[5] = 0 + 1 * internal.V_cyt * internal.ki_Cave * T1R_Surf - 1 * internal.V_cyt * internal.kr_Cave * T1R_Cave;
    dstatedt[6] = 0 + 1 * internal.V_cyt * internal.ki_EE * T1R_Surf - 1 * internal.V_cyt * internal.kr_EE * T1R_EE - 1 * internal.V_cyt * internal.Kdeg_T1R_EE * T1R_EE;
    dstatedt[4] = 0 + 1 * internal.V_cyt * internal.v_T1R - 1 * internal.V_cyt * internal.ki_Cave * T1R_Surf + 1 * internal.V_cyt * internal.kr_Cave * T1R_Cave - 1 * internal.V_cyt * internal.ki_EE * T1R_Surf + 1 * internal.V_cyt * internal.kr_EE * T1R_EE - 1 * internal.V_cyt * internal.k_LRC * TGF_beta * T2R_Surf * T1R_Surf + 1 * internal.V_cyt * internal.kr_Cave * LRC_Cave + 1 * internal.V_cyt * internal.kr_EE * LRC_EE;
    dstatedt[8] = 0 + 1 * internal.V_cyt * internal.ki_Cave * T2R_Surf - 1 * internal.V_cyt * internal.kr_Cave * T2R_Cave;
    dstatedt[9] = 0 + 1 * internal.V_cyt * internal.ki_EE * T2R_Surf - 1 * internal.V_cyt * internal.kr_EE * T2R_EE - 1 * internal.V_cyt * internal.Kdeg_T2R_EE * T2R_EE;
    dstatedt[7] = 0 + 1 * internal.V_cyt * internal.v_T2R - 1 * internal.V_cyt * internal.ki_Cave * T2R_Surf + 1 * internal.V_cyt * internal.kr_Cave * T2R_Cave - 1 * internal.V_cyt * internal.ki_EE * T2R_Surf + 1 * internal.V_cyt * internal.kr_EE * T2R_EE - 1 * internal.V_cyt * internal.k_LRC * TGF_beta * T2R_Surf * T1R_Surf + 1 * internal.V_cyt * internal.kr_Cave * LRC_Cave + 1 * internal.V_cyt * internal.kr_EE * LRC_EE;
    dstatedt[15] = 0 + 1 * internal.V_cyt * internal.kr_EE * T2R_EE - 1 * internal.V_cyt * internal.k_LRC * TGF_beta * T2R_Surf * T1R_Surf + 1 * internal.V_cyt * internal.kr_Cave * LRC_Cave + 1 * internal.V_cyt * internal.kr_EE * LRC_EE;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Smad2c", "Smad2n", "Smad4c", "Smad4n", "T1R_Surf", "T1R_Cave", "T1R_EE", "T2R_Surf", "T2R_Cave", "T2R_EE", "LRC_Surf", "LRC_Cave", "LRC_EE", "Smads_Complex_c", "Smads_Complex_n", "TGF_beta"];
    this.metadata.internalOrder = {initial_LRC_Cave: null, initial_LRC_EE: null, initial_LRC_Surf: null, initial_Smad2c: null, initial_Smad2n: null, initial_Smad4c: null, initial_Smad4n: null, initial_Smads_Complex_c: null, initial_Smads_Complex_n: null, initial_T1R_Cave: null, initial_T1R_EE: null, initial_T1R_Surf: null, initial_T2R_Cave: null, initial_T2R_EE: null, initial_T2R_Surf: null, initial_TGF_beta: null, k_LRC: null, k_Smads_Complex_c: null, Kcd: null, Kdeg_T1R_EE: null, Kdeg_T2R_EE: null, Kdiss_Smads_Complex_n: null, Kexp_Smad2n: null, Kexp_Smad4n: null, ki_Cave: null, ki_EE: null, Kimp_Smad2c: null, Kimp_Smad4c: null, Kimp_Smads_Complex_c: null, Klid: null, kr_Cave: null, kr_EE: null, LRC_Cave_init: null, LRC_EE_init: null, LRC_Surf_init: null, Smad2c_init: null, Smad2n_init: null, Smad4c_init: null, Smad4n_init: null, Smads_Complex_c_init: null, Smads_Complex_n_init: null, T1R_Cave_init: null, T1R_EE_init: null, T1R_Surf_init: null, T2R_Cave_init: null, T2R_EE_init: null, T2R_Surf_init: null, TGF_beta_init: null, V_cyt: null, V_medium: null, V_nuc: null, v_T1R: null, v_T2R: null};
    this.metadata.variableOrder = {Smad2c: null, Smad2n: null, Smad4c: null, Smad4n: null, T1R_Surf: null, T1R_Cave: null, T1R_EE: null, T2R_Surf: null, T2R_Cave: null, T2R_EE: null, LRC_Surf: null, LRC_Cave: null, LRC_EE: null, Smads_Complex_c: null, Smads_Complex_n: null, TGF_beta: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
