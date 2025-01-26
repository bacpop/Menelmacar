export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.CYT = 0.75;
    internal.IMS = 0.0625;
    internal.k1_6 = 14.6;
    internal.k1_7 = 8.1600000000000001;
    internal.k1_8 = 14.6;
    internal.k1_9 = 8.1600000000000001;
    internal.k2_5 = 18.399999999999999;
    internal.Ka_1 = 800;
    internal.Kb_1 = 20;
    internal.Kb_2 = 5200;
    internal.Kb_3 = 15500;
    internal.Kd_2 = 500;
    internal.Kd_3 = 1670;
    internal.Kia_2 = 750;
    internal.Kia_3 = 900;
    internal.Kib_2 = 28800;
    internal.Kib_3 = 34900;
    internal.Kic_2 = 204.80000000000001;
    internal.Kic_3 = 222.40000000000001;
    internal.Kid_2 = 1600;
    internal.Kid_3 = 4730;
    internal.V_1 = 4600;
    internal.v_4 = 4600;
    internal.Vb_2 = 11160;
    internal.Vb_3 = 29250;
    internal.Vf_2 = 2658;
    internal.Vf_3 = 6966;
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
    this.base.user.checkUser(user, ["ADP_init", "ADPi_init", "ATP_init", "ATPi_init", "Cr_init", "Cri_init", "P_init", "PCr_init", "PCri_init", "Pi_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "ADP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ADPi_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ATP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ATPi_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cr_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cri_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PCr_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PCri_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pi_init", internal, 0, -Infinity, Infinity, false);
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
