export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.DefaultCompartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(21).fill(0);
    state[0] = internal.initial_IPTG;
    state[1] = internal.initial_ia1_ActiveTF;
    state[2] = internal.initial_ia1_InactiveTF;
    state[3] = internal.initial_p1;
    state[4] = internal.initial_p2;
    state[5] = internal.initial_p3;
    state[6] = internal.initial_pAUR1;
    state[7] = internal.initial_pSLS1;
    state[8] = internal.initial_pSLS4;
    state[9] = internal.initial_proAUR1;
    state[10] = internal.initial_proLACI;
    state[11] = internal.initial_proLAMDAR;
    state[12] = internal.initial_proSLS1;
    state[13] = internal.initial_proSLS4;
    state[14] = internal.initial_proTETR;
    state[15] = internal.initial_ter1;
    state[16] = internal.initial_ter2;
    state[17] = internal.initial_ter3;
    state[18] = internal.initial_ter4;
    state[19] = internal.initial_ter5;
    state[20] = internal.initial_ter6;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["ia1_ActiveTF_init", "ia1_InactiveTF_init", "ia1_Kd", "ia1_repression_h", "ia1_repression_Kd", "IPTG_init", "p1_init", "p1_strength", "p2_init", "p2_strength", "p3_init", "p3_strength", "pAUR1_init", "pAUR1_strength", "pp2_translation_rate", "pp3_translation_rate", "pp4_translation_rate", "pp5_translation_rate", "pp6_translation_rate", "proAUR1_degradation_rate", "proAUR1_init", "proLACI_degradation_rate", "proLACI_init", "proLAMDAR_degradation_rate", "proLAMDAR_init", "proSLS1_degradation_rate", "proSLS1_init", "proSLS4_degradation_rate", "proSLS4_init", "proTETR_degradation_rate", "proTETR_init", "pSLS1_init", "pSLS1_strength", "pSLS4_init", "pSLS4_strength", "ta1_h", "ta1_Kd", "ter1_init", "ter2_init", "ter3_init", "ter4_init", "ter5_init", "ter6_init", "tr1_h", "tr1_Kd", "tr2_h", "tr2_Kd", "tr3_h", "tr3_Kd", "tr4_h", "tr4_Kd", "tr5_h", "tr5_Kd", "tr6_h", "tr6_Kd"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "ia1_ActiveTF_init", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ia1_InactiveTF_init", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ia1_Kd", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ia1_repression_h", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ia1_repression_Kd", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IPTG_init", internal, 10000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p1_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p1_strength", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p2_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p2_strength", internal, 2.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p3_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p3_strength", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pAUR1_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pAUR1_strength", internal, 2.0139999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pp2_translation_rate", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pp3_translation_rate", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pp4_translation_rate", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pp5_translation_rate", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pp6_translation_rate", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "proAUR1_degradation_rate", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "proAUR1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "proLACI_degradation_rate", internal, 0.070000000000000007, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "proLACI_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "proLAMDAR_degradation_rate", internal, 0.041500000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "proLAMDAR_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "proSLS1_degradation_rate", internal, 0.070000000000000007, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "proSLS1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "proSLS4_degradation_rate", internal, 0.040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "proSLS4_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "proTETR_degradation_rate", internal, 0.080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "proTETR_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pSLS1_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pSLS1_strength", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pSLS4_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pSLS4_strength", internal, 2.5699999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ta1_h", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ta1_Kd", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ter1_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ter2_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ter3_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ter4_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ter5_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ter6_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tr1_h", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tr1_Kd", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tr2_h", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tr2_Kd", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tr3_h", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tr3_Kd", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tr4_h", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tr4_Kd", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tr5_h", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tr5_Kd", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tr6_h", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tr6_Kd", internal, 1, -Infinity, Infinity, false);
    internal.initial_ia1_ActiveTF = internal.ia1_ActiveTF_init;
    internal.initial_ia1_InactiveTF = internal.ia1_InactiveTF_init;
    internal.initial_IPTG = internal.IPTG_init;
    internal.initial_p1 = internal.p1_init;
    internal.initial_p2 = internal.p2_init;
    internal.initial_p3 = internal.p3_init;
    internal.initial_pAUR1 = internal.pAUR1_init;
    internal.initial_proAUR1 = internal.proAUR1_init;
    internal.initial_proLACI = internal.proLACI_init;
    internal.initial_proLAMDAR = internal.proLAMDAR_init;
    internal.initial_proSLS1 = internal.proSLS1_init;
    internal.initial_proSLS4 = internal.proSLS4_init;
    internal.initial_proTETR = internal.proTETR_init;
    internal.initial_pSLS1 = internal.pSLS1_init;
    internal.initial_pSLS4 = internal.pSLS4_init;
    internal.initial_ter1 = internal.ter1_init;
    internal.initial_ter2 = internal.ter2_init;
    internal.initial_ter3 = internal.ter3_init;
    internal.initial_ter4 = internal.ter4_init;
    internal.initial_ter5 = internal.ter5_init;
    internal.initial_ter6 = internal.ter6_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const IPTG = state[0];
    const ia1_ActiveTF = state[1];
    const ia1_InactiveTF = state[2];
    const proAUR1 = state[9];
    const proLACI = state[10];
    const proLAMDAR = state[11];
    const proSLS1 = state[12];
    const proSLS4 = state[13];
    const proTETR = state[14];
    dstatedt[3] = 0;
    dstatedt[4] = 0;
    dstatedt[5] = 0;
    dstatedt[6] = 0;
    dstatedt[7] = 0;
    dstatedt[8] = 0;
    dstatedt[15] = 0;
    dstatedt[16] = 0;
    dstatedt[17] = 0;
    dstatedt[18] = 0;
    dstatedt[19] = 0;
    dstatedt[20] = 0;
    dstatedt[1] = 0 - 1 * IPTG * ia1_ActiveTF + 1 * internal.ia1_Kd * ia1_InactiveTF;
    dstatedt[2] = 0 + 1 * IPTG * ia1_ActiveTF - 1 * internal.ia1_Kd * ia1_InactiveTF;
    dstatedt[0] = 0 - 1 * IPTG * ia1_ActiveTF + 1 * internal.ia1_Kd * ia1_InactiveTF;
    dstatedt[12] = 0 + 1 * 1 - 1 * internal.proSLS1_degradation_rate * proSLS1;
    var rs1 = 1 / (1 + Math.pow((proSLS1 / internal.tr1_Kd), (internal.tr1_h)));
    var rs2 = 1 / (1 + Math.pow((proAUR1 / internal.tr2_Kd), (internal.tr2_h)));
    var rs4 = 1 / (1 + Math.pow((proLAMDAR / internal.tr5_Kd), (internal.tr5_h)));
    var rs5 = 1 / (1 + Math.pow((proLACI / internal.tr3_Kd), (internal.tr3_h)));
    var rs6 = 1 / (1 + Math.pow((proTETR / internal.tr4_Kd), (internal.tr4_h)));
    var AUR1 = internal.pAUR1_strength * rs1;
    var LACI = internal.p2_strength * rs4;
    var LAMDAR = internal.p1_strength * rs6;
    var SLS4 = internal.pSLS4_strength * rs2;
    var TETR = internal.p3_strength * rs5;
    dstatedt[9] = 0 + 1 * internal.pp2_translation_rate * internal.pAUR1_strength * AUR1 - 1 * internal.proAUR1_degradation_rate * proAUR1;
    dstatedt[10] = 0 + 1 * internal.pp4_translation_rate * internal.p2_strength * LACI - 1 * internal.proLACI_degradation_rate * proLACI;
    dstatedt[11] = 0 + 1 * internal.pp5_translation_rate * internal.p1_strength * LAMDAR - 1 * internal.proLAMDAR_degradation_rate * proLAMDAR;
    dstatedt[13] = 0 + 1 * internal.pp3_translation_rate * internal.pSLS4_strength * SLS4 - 1 * internal.proSLS4_degradation_rate * proSLS4;
    dstatedt[14] = 0 + 1 * internal.pp6_translation_rate * internal.p3_strength * TETR - 1 * internal.proTETR_degradation_rate * proTETR;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "IPTG", "ia1_ActiveTF", "ia1_InactiveTF", "p1", "p2", "p3", "pAUR1", "pSLS1", "pSLS4", "proAUR1", "proLACI", "proLAMDAR", "proSLS1", "proSLS4", "proTETR", "ter1", "ter2", "ter3", "ter4", "ter5", "ter6"];
    this.metadata.internalOrder = {DefaultCompartment: null, ia1_ActiveTF_init: null, ia1_InactiveTF_init: null, ia1_Kd: null, ia1_repression_h: null, ia1_repression_Kd: null, initial_ia1_ActiveTF: null, initial_ia1_InactiveTF: null, initial_IPTG: null, initial_p1: null, initial_p2: null, initial_p3: null, initial_pAUR1: null, initial_proAUR1: null, initial_proLACI: null, initial_proLAMDAR: null, initial_proSLS1: null, initial_proSLS4: null, initial_proTETR: null, initial_pSLS1: null, initial_pSLS4: null, initial_ter1: null, initial_ter2: null, initial_ter3: null, initial_ter4: null, initial_ter5: null, initial_ter6: null, IPTG_init: null, p1_init: null, p1_strength: null, p2_init: null, p2_strength: null, p3_init: null, p3_strength: null, pAUR1_init: null, pAUR1_strength: null, pp2_translation_rate: null, pp3_translation_rate: null, pp4_translation_rate: null, pp5_translation_rate: null, pp6_translation_rate: null, proAUR1_degradation_rate: null, proAUR1_init: null, proLACI_degradation_rate: null, proLACI_init: null, proLAMDAR_degradation_rate: null, proLAMDAR_init: null, proSLS1_degradation_rate: null, proSLS1_init: null, proSLS4_degradation_rate: null, proSLS4_init: null, proTETR_degradation_rate: null, proTETR_init: null, pSLS1_init: null, pSLS1_strength: null, pSLS4_init: null, pSLS4_strength: null, ta1_h: null, ta1_Kd: null, ter1_init: null, ter2_init: null, ter3_init: null, ter4_init: null, ter5_init: null, ter6_init: null, tr1_h: null, tr1_Kd: null, tr2_h: null, tr2_Kd: null, tr3_h: null, tr3_Kd: null, tr4_h: null, tr4_Kd: null, tr5_h: null, tr5_Kd: null, tr6_h: null, tr6_Kd: null};
    this.metadata.variableOrder = {IPTG: null, ia1_ActiveTF: null, ia1_InactiveTF: null, p1: null, p2: null, p3: null, pAUR1: null, pSLS1: null, pSLS4: null, proAUR1: null, proLACI: null, proLAMDAR: null, proSLS1: null, proSLS4: null, proTETR: null, ter1: null, ter2: null, ter3: null, ter4: null, ter5: null, ter6: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
