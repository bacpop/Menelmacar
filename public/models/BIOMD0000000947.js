export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Apical = 1;
    internal.Basolateral___HepG2 = 1;
    internal.Caco_2 = 1;
    internal.pi = 3.1415929999999999;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(9).fill(0);
    state[0] = internal.initial_C_para_Apical;
    state[1] = internal.initial_C_para_Caco_2;
    state[2] = internal.initial_C_para__Basolateral___HepG2_;
    state[3] = internal.initial_C_sulf_Apical;
    state[4] = internal.initial_C_sulf_Caco_2;
    state[5] = internal.initial_C_sulf__Basolateral___HepG2_;
    state[6] = internal.initial_C_glu_Apical;
    state[7] = internal.initial_C_glu_Caco_2;
    state[8] = internal.initial_C_glu__Basolateral___HepG2_;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Ai", "C_glu__Basolateral___HepG2__init", "C_glu_Apical_init", "C_glu_Caco_2_init", "C_para__Basolateral___HepG2__init", "C_para_Apical_init", "C_para_Caco_2_init", "C_sulf__Basolateral___HepG2__init", "C_sulf_Apical_init", "C_sulf_Caco_2_init", "Mp_g_caco", "Mp_g_HepG2", "Mp_s_caco", "Mp_s_HepG2", "P_glu", "P_para", "P_sulf", "t_threshold"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Ai", internal, 0.33000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_glu__Basolateral___HepG2__init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_glu_Apical_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_glu_Caco_2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_para__Basolateral___HepG2__init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_para_Apical_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_para_Caco_2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_sulf__Basolateral___HepG2__init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_sulf_Apical_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_sulf_Caco_2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Mp_g_caco", internal, 17.600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Mp_g_HepG2", internal, 0.58999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Mp_s_caco", internal, 14.9, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Mp_s_HepG2", internal, 0.34999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_glu", internal, 58.899999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_para", internal, 103.8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_sulf", internal, 49.899999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t_threshold", internal, 6, -Infinity, Infinity, false);
    internal.initial_C_glu__Basolateral___HepG2_ = internal.C_glu__Basolateral___HepG2__init;
    internal.initial_C_glu_Apical = internal.C_glu_Apical_init;
    internal.initial_C_glu_Caco_2 = internal.C_glu_Caco_2_init;
    internal.initial_C_para__Basolateral___HepG2_ = internal.C_para__Basolateral___HepG2__init;
    internal.initial_C_para_Apical = internal.C_para_Apical_init;
    internal.initial_C_para_Caco_2 = internal.C_para_Caco_2_init;
    internal.initial_C_sulf__Basolateral___HepG2_ = internal.C_sulf__Basolateral___HepG2__init;
    internal.initial_C_sulf_Apical = internal.C_sulf_Apical_init;
    internal.initial_C_sulf_Caco_2 = internal.C_sulf_Caco_2_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const C_para_Apical = state[0];
    const C_para_Caco_2 = state[1];
    const C_para__Basolateral___HepG2_ = state[2];
    const C_sulf_Apical = state[3];
    const C_sulf_Caco_2 = state[4];
    const C_sulf__Basolateral___HepG2_ = state[5];
    const C_glu_Apical = state[6];
    const C_glu_Caco_2 = state[7];
    const C_glu__Basolateral___HepG2_ = state[8];
    var V_api = ((t <= internal.t_threshold ? 500 : 400));
    var V_basol = ((t <= internal.t_threshold ? 380 : 280));
    var V_caco = ((t <= internal.t_threshold ? 0.33000000000000002 : 0.33000000000000002));
    dstatedt[8] = 0 + (internal.P_glu * internal.Ai * (C_glu_Caco_2 - C_glu__Basolateral___HepG2_) + internal.Mp_g_HepG2 * C_para__Basolateral___HepG2_ * V_basol) / V_basol;
    dstatedt[6] = 0 + - 1 * internal.P_glu * internal.Ai * (C_glu_Apical - C_glu_Caco_2) / V_api;
    dstatedt[7] = 0 + (internal.P_glu * internal.Ai * (C_glu_Apical - C_glu_Caco_2) - internal.P_glu * internal.Ai * (C_glu_Caco_2 - C_glu__Basolateral___HepG2_) + internal.Mp_g_caco * C_para_Caco_2 * V_caco) / V_caco;
    dstatedt[2] = 0 + (internal.P_para * internal.Ai * (C_para_Caco_2 - C_para__Basolateral___HepG2_) - internal.Mp_s_HepG2 * C_para__Basolateral___HepG2_ * V_basol - internal.Mp_g_HepG2 * C_para__Basolateral___HepG2_ * V_basol) / V_basol;
    dstatedt[0] = 0 + - 1 * internal.P_para * internal.Ai * (C_para_Apical - C_para_Caco_2) / V_api;
    dstatedt[1] = 0 + (internal.P_para * internal.Ai * (C_para_Apical - C_para_Caco_2) - internal.P_para * internal.Ai * (C_para_Caco_2 - C_para__Basolateral___HepG2_) - internal.Mp_s_caco * C_para_Caco_2 * V_caco - internal.Mp_g_caco * C_para_Caco_2 * V_caco) / V_caco;
    dstatedt[5] = 0 + (internal.P_sulf * internal.Ai * (C_sulf_Caco_2 - C_sulf__Basolateral___HepG2_) + internal.Mp_s_HepG2 * C_para__Basolateral___HepG2_ * V_basol) / V_basol;
    dstatedt[3] = 0 + - 1 * internal.P_sulf * internal.Ai * (C_sulf_Apical - C_sulf_Caco_2) / V_api;
    dstatedt[4] = 0 + (internal.P_sulf * internal.Ai * (C_sulf_Apical - C_sulf_Caco_2) - internal.P_sulf * internal.Ai * (C_sulf_Caco_2 - C_sulf__Basolateral___HepG2_) + internal.Mp_s_caco * C_para_Caco_2 * V_caco) / V_caco;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "C_para_Apical", "C_para_Caco_2", "C_para__Basolateral___HepG2_", "C_sulf_Apical", "C_sulf_Caco_2", "C_sulf__Basolateral___HepG2_", "C_glu_Apical", "C_glu_Caco_2", "C_glu__Basolateral___HepG2_"];
    this.metadata.internalOrder = {Ai: null, Apical: null, Basolateral___HepG2: null, C_glu__Basolateral___HepG2__init: null, C_glu_Apical_init: null, C_glu_Caco_2_init: null, C_para__Basolateral___HepG2__init: null, C_para_Apical_init: null, C_para_Caco_2_init: null, C_sulf__Basolateral___HepG2__init: null, C_sulf_Apical_init: null, C_sulf_Caco_2_init: null, Caco_2: null, initial_C_glu__Basolateral___HepG2_: null, initial_C_glu_Apical: null, initial_C_glu_Caco_2: null, initial_C_para__Basolateral___HepG2_: null, initial_C_para_Apical: null, initial_C_para_Caco_2: null, initial_C_sulf__Basolateral___HepG2_: null, initial_C_sulf_Apical: null, initial_C_sulf_Caco_2: null, Mp_g_caco: null, Mp_g_HepG2: null, Mp_s_caco: null, Mp_s_HepG2: null, P_glu: null, P_para: null, P_sulf: null, pi: null, t_threshold: null};
    this.metadata.variableOrder = {C_para_Apical: null, C_para_Caco_2: null, C_para__Basolateral___HepG2_: null, C_sulf_Apical: null, C_sulf_Caco_2: null, C_sulf__Basolateral___HepG2_: null, C_glu_Apical: null, C_glu_Caco_2: null, C_glu__Basolateral___HepG2_: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
