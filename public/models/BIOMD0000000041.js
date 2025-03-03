export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.CYT = 0.75;
    internal.IMS = 0.0625;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(10).fill(0);
    state[0] = internal.initial_ADPi;
    state[1] = internal.initial_ATPi;
    state[2] = internal.initial_Cri;
    state[3] = internal.initial_PCri;
    state[4] = internal.initial_PCr;
    state[5] = internal.initial_ADP;
    state[6] = internal.initial_ATP;
    state[7] = internal.initial_Cr;
    state[8] = internal.initial_Pi;
    state[9] = internal.initial_P;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["ADP_init", "ADPi_init", "ATP_init", "ATPi_init", "Cr_init", "Cri_init", "k1_6", "k1_7", "k1_8", "k1_9", "k2_5", "Ka_1", "Kb_1", "Kb_2", "Kb_3", "Kd_2", "Kd_3", "Kia_2", "Kia_3", "Kib_2", "Kib_3", "Kic_2", "Kic_3", "Kid_2", "Kid_3", "P_init", "PCr_init", "PCri_init", "Pi_init", "V_1", "v_4", "Vb_2", "Vb_3", "Vf_2", "Vf_3"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "ADP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ADPi_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ATP_init", internal, 9700, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ATPi_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cr_init", internal, 26000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cri_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1_6", internal, 14.6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1_7", internal, 8.1600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1_8", internal, 14.6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1_9", internal, 8.1600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2_5", internal, 18.399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ka_1", internal, 800, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kb_1", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kb_2", internal, 5200, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kb_3", internal, 15500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kd_2", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kd_3", internal, 1670, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kia_2", internal, 750, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kia_3", internal, 900, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kib_2", internal, 28800, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kib_3", internal, 34900, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kic_2", internal, 204.80000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kic_3", internal, 222.40000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kid_2", internal, 1600, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kid_3", internal, 4730, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PCr_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PCri_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pi_init", internal, 32000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_1", internal, 4600, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v_4", internal, 4600, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vb_2", internal, 11160, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vb_3", internal, 29250, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vf_2", internal, 2658, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vf_3", internal, 6966, -Infinity, Infinity, false);
    internal.initial_ADP = internal.ADP_init;
    internal.initial_ADPi = internal.ADPi_init;
    internal.initial_ATP = internal.ATP_init;
    internal.initial_ATPi = internal.ATPi_init;
    internal.initial_Cr = internal.Cr_init;
    internal.initial_Cri = internal.Cri_init;
    internal.initial_P = internal.P_init;
    internal.initial_PCr = internal.PCr_init;
    internal.initial_PCri = internal.PCri_init;
    internal.initial_Pi = internal.Pi_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const ADPi = state[0];
    const ATPi = state[1];
    const Cri = state[2];
    const PCri = state[3];
    const PCr = state[4];
    const ADP = state[5];
    const ATP = state[6];
    const Cr = state[7];
    const Pi = state[8];
    const P = state[9];
    dstatedt[5] = 0 + 1 * internal.CYT * ((internal.Vf_3 * ATP * Cr / (internal.Kia_3 * internal.Kb_3) - internal.Vb_3 * ADP * PCr / (internal.Kic_3 * internal.Kd_3)) / (1 + Cr / internal.Kib_3 + PCr / internal.Kid_3 + ATP * (1 / internal.Kia_3 + Cr / (internal.Kia_3 * internal.Kb_3)) + ADP * (1 / internal.Kic_3 + Cr / (internal.Kic_3 * internal.Kib_3) + PCr / (internal.Kid_3 * (internal.Kic_3 * internal.Kd_3 / internal.Kid_3))))) + 1 * internal.CYT * internal.v_4 * ATP + 1 * internal.IMS * internal.k1_7 * ADPi - internal.CYT * internal.k1_7 * ADP;
    dstatedt[0] = 0 - 1 * internal.IMS * (internal.V_1 * ADPi * Pi / (internal.Ka_1 * internal.Kb_1 * (1 + ADPi / internal.Ka_1 + Pi / internal.Kb_1 + ADPi * Pi / (internal.Ka_1 * internal.Kb_1)))) + 1 * internal.IMS * ((internal.Vf_2 * ATPi * Cri / (internal.Kia_2 * internal.Kb_2) - internal.Vb_2 * ADPi * PCri / (internal.Kic_2 * internal.Kd_2)) / (1 + Cri / internal.Kib_2 + PCri / internal.Kid_2 + ATPi * (1 / internal.Kia_2 + Cri / (internal.Kia_2 * internal.Kb_2)) + ADPi * (1 / internal.Kic_2 + Cri / (internal.Kic_2 * internal.Kib_2) + PCri / (internal.Kid_2 * (internal.Kic_2 * internal.Kd_2 / internal.Kid_2))))) - 1 * internal.IMS * internal.k1_7 * ADPi - internal.CYT * internal.k1_7 * ADP;
    dstatedt[6] = 0 - 1 * internal.CYT * ((internal.Vf_3 * ATP * Cr / (internal.Kia_3 * internal.Kb_3) - internal.Vb_3 * ADP * PCr / (internal.Kic_3 * internal.Kd_3)) / (1 + Cr / internal.Kib_3 + PCr / internal.Kid_3 + ATP * (1 / internal.Kia_3 + Cr / (internal.Kia_3 * internal.Kb_3)) + ADP * (1 / internal.Kic_3 + Cr / (internal.Kic_3 * internal.Kib_3) + PCr / (internal.Kid_3 * (internal.Kic_3 * internal.Kd_3 / internal.Kid_3))))) - 1 * internal.CYT * internal.v_4 * ATP + 1 * internal.IMS * internal.k1_9 * ATPi - internal.CYT * internal.k1_9 * ATP;
    dstatedt[1] = 0 + 1 * internal.IMS * (internal.V_1 * ADPi * Pi / (internal.Ka_1 * internal.Kb_1 * (1 + ADPi / internal.Ka_1 + Pi / internal.Kb_1 + ADPi * Pi / (internal.Ka_1 * internal.Kb_1)))) - 1 * internal.IMS * ((internal.Vf_2 * ATPi * Cri / (internal.Kia_2 * internal.Kb_2) - internal.Vb_2 * ADPi * PCri / (internal.Kic_2 * internal.Kd_2)) / (1 + Cri / internal.Kib_2 + PCri / internal.Kid_2 + ATPi * (1 / internal.Kia_2 + Cri / (internal.Kia_2 * internal.Kb_2)) + ADPi * (1 / internal.Kic_2 + Cri / (internal.Kic_2 * internal.Kib_2) + PCri / (internal.Kid_2 * (internal.Kic_2 * internal.Kd_2 / internal.Kid_2))))) - 1 * internal.IMS * internal.k1_9 * ATPi - internal.CYT * internal.k1_9 * ATP;
    dstatedt[7] = 0 - 1 * internal.CYT * ((internal.Vf_3 * ATP * Cr / (internal.Kia_3 * internal.Kb_3) - internal.Vb_3 * ADP * PCr / (internal.Kic_3 * internal.Kd_3)) / (1 + Cr / internal.Kib_3 + PCr / internal.Kid_3 + ATP * (1 / internal.Kia_3 + Cr / (internal.Kia_3 * internal.Kb_3)) + ADP * (1 / internal.Kic_3 + Cr / (internal.Kic_3 * internal.Kib_3) + PCr / (internal.Kid_3 * (internal.Kic_3 * internal.Kd_3 / internal.Kid_3))))) + 1 * internal.IMS * internal.k1_6 * Cri - internal.CYT * internal.k1_6 * Cr;
    dstatedt[2] = 0 - 1 * internal.IMS * ((internal.Vf_2 * ATPi * Cri / (internal.Kia_2 * internal.Kb_2) - internal.Vb_2 * ADPi * PCri / (internal.Kic_2 * internal.Kd_2)) / (1 + Cri / internal.Kib_2 + PCri / internal.Kid_2 + ATPi * (1 / internal.Kia_2 + Cri / (internal.Kia_2 * internal.Kb_2)) + ADPi * (1 / internal.Kic_2 + Cri / (internal.Kic_2 * internal.Kib_2) + PCri / (internal.Kid_2 * (internal.Kic_2 * internal.Kd_2 / internal.Kid_2))))) - 1 * internal.IMS * internal.k1_6 * Cri - internal.CYT * internal.k1_6 * Cr;
    dstatedt[9] = 0 + 1 * internal.CYT * internal.v_4 * ATP + 1 * internal.IMS * internal.k2_5 * Pi - internal.CYT * internal.k2_5 * P;
    dstatedt[4] = 0 + 1 * internal.CYT * ((internal.Vf_3 * ATP * Cr / (internal.Kia_3 * internal.Kb_3) - internal.Vb_3 * ADP * PCr / (internal.Kic_3 * internal.Kd_3)) / (1 + Cr / internal.Kib_3 + PCr / internal.Kid_3 + ATP * (1 / internal.Kia_3 + Cr / (internal.Kia_3 * internal.Kb_3)) + ADP * (1 / internal.Kic_3 + Cr / (internal.Kic_3 * internal.Kib_3) + PCr / (internal.Kid_3 * (internal.Kic_3 * internal.Kd_3 / internal.Kid_3))))) + 1 * internal.IMS * internal.k1_8 * PCri - internal.CYT * internal.k1_8 * PCr;
    dstatedt[3] = 0 + 1 * internal.IMS * ((internal.Vf_2 * ATPi * Cri / (internal.Kia_2 * internal.Kb_2) - internal.Vb_2 * ADPi * PCri / (internal.Kic_2 * internal.Kd_2)) / (1 + Cri / internal.Kib_2 + PCri / internal.Kid_2 + ATPi * (1 / internal.Kia_2 + Cri / (internal.Kia_2 * internal.Kb_2)) + ADPi * (1 / internal.Kic_2 + Cri / (internal.Kic_2 * internal.Kib_2) + PCri / (internal.Kid_2 * (internal.Kic_2 * internal.Kd_2 / internal.Kid_2))))) - 1 * internal.IMS * internal.k1_8 * PCri - internal.CYT * internal.k1_8 * PCr;
    dstatedt[8] = 0 - 1 * internal.IMS * (internal.V_1 * ADPi * Pi / (internal.Ka_1 * internal.Kb_1 * (1 + ADPi / internal.Ka_1 + Pi / internal.Kb_1 + ADPi * Pi / (internal.Ka_1 * internal.Kb_1)))) - 1 * internal.IMS * internal.k2_5 * Pi - internal.CYT * internal.k2_5 * P;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "ADPi", "ATPi", "Cri", "PCri", "PCr", "ADP", "ATP", "Cr", "Pi", "P"];
    this.metadata.internalOrder = {ADP_init: null, ADPi_init: null, ATP_init: null, ATPi_init: null, Cr_init: null, Cri_init: null, CYT: null, IMS: null, initial_ADP: null, initial_ADPi: null, initial_ATP: null, initial_ATPi: null, initial_Cr: null, initial_Cri: null, initial_P: null, initial_PCr: null, initial_PCri: null, initial_Pi: null, k1_6: null, k1_7: null, k1_8: null, k1_9: null, k2_5: null, Ka_1: null, Kb_1: null, Kb_2: null, Kb_3: null, Kd_2: null, Kd_3: null, Kia_2: null, Kia_3: null, Kib_2: null, Kib_3: null, Kic_2: null, Kic_3: null, Kid_2: null, Kid_3: null, P_init: null, PCr_init: null, PCri_init: null, Pi_init: null, V_1: null, v_4: null, Vb_2: null, Vb_3: null, Vf_2: null, Vf_3: null};
    this.metadata.variableOrder = {ADPi: null, ATPi: null, Cri: null, PCri: null, PCr: null, ADP: null, ATP: null, Cr: null, Pi: null, P: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
