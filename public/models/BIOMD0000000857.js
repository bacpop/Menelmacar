export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.ECO2 = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(9).fill(0);
    state[0] = internal.initial_sucr;
    state[1] = internal.initial_EtrioseP;
    state[2] = internal.initial_Ephe;
    state[3] = internal.initial_N;
    state[4] = internal.initial_starch;
    state[5] = internal.initial_Next;
    state[6] = internal.initial_Enitrate;
    state[7] = internal.initial_trioseP;
    state[8] = internal.initial_Estarch;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Enitrate_init", "Ephe_init", "Estarch_init", "EtrioseP_init", "g", "k1", "k10", "k11", "k12", "k13", "k14", "k15", "k2", "k26", "k27", "k28", "k29", "k3", "k30", "k31", "k32", "k33", "k34", "k35", "k36", "k37", "k38", "k39", "k4", "k5", "k6", "k7", "k8", "k9", "N_init", "Next_init", "starch_init", "sucr_init", "trioseP_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Enitrate_init", internal, 0.074999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ephe_init", internal, 1.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Estarch_init", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EtrioseP_init", internal, 8.0600000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k12", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k13", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k14", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k15", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k26", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k27", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k28", internal, 9.9999999999999995e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k29", internal, 10.1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 1.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k30", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k31", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k32", internal, 1.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k33", internal, 9.9999999999999994e-12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k34", internal, 9.8000000000000007, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k35", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k36", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k37", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k38", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k39", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 9.8000000000000007, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 9.9999999999999995e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N_init", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Next_init", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "starch_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sucr_init", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "trioseP_init", internal, 1.1000000000000001, -Infinity, Infinity, false);
    internal.initial_Enitrate = internal.Enitrate_init;
    internal.initial_Ephe = internal.Ephe_init;
    internal.initial_Estarch = internal.Estarch_init;
    internal.initial_EtrioseP = internal.EtrioseP_init;
    internal.initial_N = internal.N_init;
    internal.initial_Next = internal.Next_init;
    internal.initial_starch = internal.starch_init;
    internal.initial_sucr = internal.sucr_init;
    internal.initial_trioseP = internal.trioseP_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const sucr = state[0];
    const EtrioseP = state[1];
    const Ephe = state[2];
    const N = state[3];
    const starch = state[4];
    const Next = state[5];
    const Enitrate = state[6];
    const trioseP = state[7];
    const Estarch = state[8];
    dstatedt[6] = 0 + 1 * internal.compartment * (internal.k26) - 1 * internal.compartment * (internal.k27 * N * Enitrate / (internal.k28 + Enitrate));
    dstatedt[8] = 0 + 1 * internal.compartment * (internal.k34) - 1 * internal.compartment * (internal.k35 * sucr * Estarch / (internal.k36 + Estarch));
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.k1) - 1 * internal.compartment * (internal.k2 * sucr * EtrioseP / (internal.k3 + EtrioseP));
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.k11 * Next * Enitrate) - 1 * internal.compartment * internal.k12 * N;
    dstatedt[5] = 0 - 1 * internal.compartment * (internal.g * internal.k11 * Next * Enitrate);
    dstatedt[4] = 0 - 1 * internal.compartment * (internal.k37 * starch * Estarch) + 1 * internal.compartment * internal.k10 * trioseP;
    var f_act_pcf = N / (internal.k13 + N);
    var f_act_trioseP = N / (internal.k33 + N);
    var f_I_E_phe_outfl = internal.k39 / (internal.k39 + N);
    var f_I_phe = internal.k38 / (internal.k38 + N);
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.k6 * sucr * f_I_E_phe_outfl) - 1 * internal.compartment * (internal.k7 * Ephe / (internal.k8 + Ephe));
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.k4 * EtrioseP * trioseP) - 1 * internal.compartment * (internal.k9 * sucr * Ephe * f_I_phe) - 1 * internal.compartment * (internal.k5 * sucr * f_act_pcf) - 1 * internal.compartment * ((internal.k14 + internal.k15) * sucr) + 1 * internal.compartment * (internal.k37 * starch * Estarch);
    dstatedt[7] = 0 - 1 * internal.compartment * (internal.k4 * EtrioseP * trioseP) - 1 * internal.compartment * internal.k10 * trioseP + 1 * internal.compartment * (internal.k29 * f_act_trioseP * internal.ECO2);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "sucr", "EtrioseP", "Ephe", "N", "starch", "Next", "Enitrate", "trioseP", "Estarch"];
    this.metadata.internalOrder = {compartment: null, ECO2: null, Enitrate_init: null, Ephe_init: null, Estarch_init: null, EtrioseP_init: null, g: null, initial_Enitrate: null, initial_Ephe: null, initial_Estarch: null, initial_EtrioseP: null, initial_N: null, initial_Next: null, initial_starch: null, initial_sucr: null, initial_trioseP: null, k1: null, k10: null, k11: null, k12: null, k13: null, k14: null, k15: null, k2: null, k26: null, k27: null, k28: null, k29: null, k3: null, k30: null, k31: null, k32: null, k33: null, k34: null, k35: null, k36: null, k37: null, k38: null, k39: null, k4: null, k5: null, k6: null, k7: null, k8: null, k9: null, N_init: null, Next_init: null, starch_init: null, sucr_init: null, trioseP_init: null};
    this.metadata.variableOrder = {sucr: null, EtrioseP: null, Ephe: null, N: null, starch: null, Next: null, Enitrate: null, trioseP: null, Estarch: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
