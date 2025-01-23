export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Cell = 1;
    internal.pi = 3.1415929999999999;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var tCy_init = internal.initial_Cy + internal.initial_CyP21;
    var tP21_init = internal.initial_P21 + internal.initial_CyP21 + internal.initial_iPcna + internal.initial_iRc;
    var tPcna_init = internal.initial_aPcna + internal.initial_iPcna + internal.initial_aRc + internal.initial_iRc;
    internal.initial_tCy = tCy_init;
    internal.initial_tP21 = tP21_init;
    internal.initial_tPcna = tPcna_init;
    var state = Array(20).fill(0);
    state[0] = internal.initial_MrnaP21;
    state[1] = internal.initial_MrnaCy;
    state[2] = internal.initial_MrnaP53;
    state[3] = internal.initial_P21;
    state[4] = internal.initial_Cy;
    state[5] = internal.initial_CyP21;
    state[6] = internal.initial_aPcna;
    state[7] = internal.initial_Rc;
    state[8] = internal.initial_pRc;
    state[9] = internal.initial_aRc;
    state[10] = internal.initial_iRc;
    state[11] = internal.initial_Dna;
    state[12] = internal.initial_Dam;
    state[13] = internal.initial_P53;
    state[14] = internal.initial_Skp2;
    state[15] = internal.initial_Cdt2;
    state[16] = internal.initial_iPcna;
    state[17] = internal.initial_tP21;
    state[18] = internal.initial_tCy;
    state[19] = internal.initial_tPcna;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["aPcna_init", "aRc_init", "Cdt2_init", "Cy_init", "CyP21_init", "Dam_init", "Dna_init", "iPcna_init", "iRc_init", "jCy", "jDam", "jP53", "kAsCyP21", "kAsPcP21", "kAsRcPc", "kDeCy", "kDeCyCy", "kDeMrna", "kDeP21", "kDeP21aRc", "kDeP21Cy", "kDeP53", "kDpRc", "kDsCyP21", "kDsPcP21", "kDsRcPc", "kExPc", "kGeDam", "kGeDamArc", "kImPc", "kPhRc", "kReDam", "kReDamP53", "kSyCy", "kSyDna", "kSyMrna", "kSyMrnaP53", "kSyP21", "kSyP53", "MrnaCy_init", "MrnaP21_init", "MrnaP53_init", "n", "P21_init", "P53_init", "pRc_init", "Rc_init", "Skp2_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "aPcna_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "aRc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cdt2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cy_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CyP21_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Dam_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Dna_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "iPcna_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "iRc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "jCy", internal, 1.8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "jDam", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "jP53", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kAsCyP21", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kAsPcP21", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kAsRcPc", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kDeCy", internal, 0.002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kDeCyCy", internal, 0.00020000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kDeMrna", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kDeP21", internal, 0.0025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kDeP21aRc", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kDeP21Cy", internal, 0.0070000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kDeP53", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kDpRc", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kDsCyP21", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kDsPcP21", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kDsRcPc", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kExPc", internal, 0.0060000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kGeDam", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kGeDamArc", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kImPc", internal, 0.0030000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kPhRc", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kReDam", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kReDamP53", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kSyCy", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kSyDna", internal, 0.0070000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kSyMrna", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kSyMrnaP53", internal, 0.080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kSyP21", internal, 0.0018, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kSyP53", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MrnaCy_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MrnaP21_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MrnaP53_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P21_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P53_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pRc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Skp2_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_aPcna = internal.aPcna_init;
    internal.initial_aRc = internal.aRc_init;
    internal.initial_Cdt2 = internal.Cdt2_init;
    internal.initial_Cy = internal.Cy_init;
    internal.initial_CyP21 = internal.CyP21_init;
    internal.initial_Dam = internal.Dam_init;
    internal.initial_Dna = internal.Dna_init;
    internal.initial_iPcna = internal.iPcna_init;
    internal.initial_iRc = internal.iRc_init;
    internal.initial_MrnaCy = internal.MrnaCy_init;
    internal.initial_MrnaP21 = internal.MrnaP21_init;
    internal.initial_MrnaP53 = internal.MrnaP53_init;
    internal.initial_P21 = internal.P21_init;
    internal.initial_P53 = internal.P53_init;
    internal.initial_pRc = internal.pRc_init;
    internal.initial_Rc = internal.Rc_init;
    internal.initial_Skp2 = internal.Skp2_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const MrnaP21 = state[0];
    const MrnaCy = state[1];
    const MrnaP53 = state[2];
    const P21 = state[3];
    const Cy = state[4];
    const CyP21 = state[5];
    const aPcna = state[6];
    const Rc = state[7];
    const pRc = state[8];
    const aRc = state[9];
    const iRc = state[10];
    const Dna = state[11];
    const Dam = state[12];
    const P53 = state[13];
    const Skp2 = state[14];
    const Cdt2 = state[15];
    const iPcna = state[16];
    dstatedt[15] = 0;
    dstatedt[14] = 0;
    dstatedt[18] = 0 + 0;
    dstatedt[17] = 0 + 0;
    dstatedt[19] = 0 + 0;
    dstatedt[6] = 0 + 1 * internal.Cell * (internal.kImPc) - 1 * internal.Cell * internal.kExPc * aPcna - 1 * internal.Cell * (internal.kAsPcP21 * aPcna * P21 - internal.kDsPcP21 * iPcna) + 1 * internal.Cell * ((internal.kDeP21 + internal.kDeP21Cy * Skp2 * Cy + internal.kDeP21aRc * Cdt2 * aRc) * iPcna) - 1 * internal.Cell * (internal.kAsRcPc * aPcna * pRc - internal.kDsRcPc * aRc) + 1 * internal.Cell * (((Dna < 1 ? 0 : ((Dna > 1 ? 1 * aRc : 0.5 * aRc)))));
    dstatedt[9] = 0 + 1 * internal.Cell * (internal.kAsRcPc * aPcna * pRc - internal.kDsRcPc * aRc) - 1 * internal.Cell * (internal.kAsPcP21 * aRc * P21 - internal.kDsPcP21 * iRc) + 1 * internal.Cell * ((internal.kDeP21 + internal.kDeP21Cy * Skp2 * Cy + internal.kDeP21aRc * Cdt2 * aRc) * iRc) + 1 * internal.Cell * internal.kSyDna * aRc - 1 * internal.Cell * internal.kSyDna * aRc - 1 * internal.Cell * (((Dna < 1 ? 0 : ((Dna > 1 ? 1 * aRc : 0.5 * aRc))))) + 1 * internal.Cell * internal.kGeDamArc * aRc - 1 * internal.Cell * internal.kGeDamArc * aRc;
    dstatedt[4] = 0 + 1 * internal.Cell * internal.kSyCy * MrnaCy - 1 * internal.Cell * ((internal.kDeCy + internal.kDeCyCy * Skp2 * Cy) * Cy) - 1 * internal.Cell * (internal.kAsCyP21 * Cy * P21 - internal.kDsCyP21 * CyP21) + 1 * internal.Cell * ((internal.kDeP21 + internal.kDeP21Cy * Skp2 * Cy + internal.kDeP21aRc * Cdt2 * aRc) * CyP21);
    dstatedt[5] = 0 + 1 * internal.Cell * (internal.kAsCyP21 * Cy * P21 - internal.kDsCyP21 * CyP21) - 1 * internal.Cell * ((internal.kDeCy + internal.kDeCyCy * Skp2 * Cy) * CyP21) - 1 * internal.Cell * ((internal.kDeP21 + internal.kDeP21Cy * Skp2 * Cy + internal.kDeP21aRc * Cdt2 * aRc) * CyP21);
    dstatedt[12] = 0 + 1 * internal.Cell * (internal.kGeDam) + 1 * internal.Cell * internal.kGeDamArc * aRc - 1 * internal.Cell * ((internal.kReDam + internal.kReDamP53 * P53 / (internal.jDam + Dam)) * Dam);
    dstatedt[11] = 0 + 1 * internal.Cell * internal.kSyDna * aRc;
    dstatedt[16] = 0 - 1 * internal.Cell * internal.kExPc * iPcna + 1 * internal.Cell * (internal.kAsPcP21 * aPcna * P21 - internal.kDsPcP21 * iPcna) - 1 * internal.Cell * ((internal.kDeP21 + internal.kDeP21Cy * Skp2 * Cy + internal.kDeP21aRc * Cdt2 * aRc) * iPcna) - 1 * internal.Cell * (internal.kAsRcPc * iPcna * pRc - internal.kDsRcPc * iRc) + 1 * internal.Cell * (((Dna < 1 ? 0 : ((Dna > 1 ? 1 * iRc : 0.5 * iRc)))));
    dstatedt[10] = 0 + 1 * internal.Cell * (internal.kAsRcPc * iPcna * pRc - internal.kDsRcPc * iRc) + 1 * internal.Cell * (internal.kAsPcP21 * aRc * P21 - internal.kDsPcP21 * iRc) - 1 * internal.Cell * ((internal.kDeP21 + internal.kDeP21Cy * Skp2 * Cy + internal.kDeP21aRc * Cdt2 * aRc) * iRc) - 1 * internal.Cell * (((Dna < 1 ? 0 : ((Dna > 1 ? 1 * iRc : 0.5 * iRc)))));
    dstatedt[1] = 0 + 1 * internal.Cell * (internal.kSyMrna) - 1 * internal.Cell * internal.kDeMrna * MrnaCy + 1 * internal.Cell * internal.kSyCy * MrnaCy - 1 * internal.Cell * internal.kSyCy * MrnaCy;
    dstatedt[0] = 0 + 1 * internal.Cell * (internal.kSyMrna) + 1 * internal.Cell * internal.kSyMrnaP53 * P53 - 1 * internal.Cell * internal.kDeMrna * MrnaP21 + 1 * internal.Cell * internal.kSyP21 * MrnaP21 - 1 * internal.Cell * internal.kSyP21 * MrnaP21;
    dstatedt[2] = 0 + 1 * internal.Cell * (internal.kSyMrna) - 1 * internal.Cell * internal.kDeMrna * MrnaP53 + 1 * internal.Cell * internal.kSyP53 * MrnaP53 - 1 * internal.Cell * internal.kSyP53 * MrnaP53;
    dstatedt[3] = 0 + 1 * internal.Cell * internal.kSyP21 * MrnaP21 - 1 * internal.Cell * ((internal.kDeP21 + internal.kDeP21Cy * Skp2 * Cy + internal.kDeP21aRc * Cdt2 * aRc) * P21) - 1 * internal.Cell * (internal.kAsCyP21 * Cy * P21 - internal.kDsCyP21 * CyP21) + 1 * internal.Cell * ((internal.kDeCy + internal.kDeCyCy * Skp2 * Cy) * CyP21) + 1 * internal.Cell * internal.kExPc * iPcna - 1 * internal.Cell * (internal.kAsPcP21 * aPcna * P21 - internal.kDsPcP21 * iPcna) - 1 * internal.Cell * (internal.kAsPcP21 * aRc * P21 - internal.kDsPcP21 * iRc);
    dstatedt[13] = 0 + 1 * internal.Cell * internal.kSyMrnaP53 * P53 - 1 * internal.Cell * internal.kSyMrnaP53 * P53 + 1 * internal.Cell * internal.kSyP53 * MrnaP53 - 1 * internal.Cell * (internal.kDeP53 / (internal.jP53 + Dam) * P53);
    dstatedt[8] = 0 + 1 * internal.Cell * (internal.kPhRc * Math.pow((Cy), (internal.n)) / (Math.pow((internal.jCy), (internal.n)) + Math.pow((Cy), (internal.n))) * Rc) - 1 * internal.Cell * internal.kDpRc * pRc - 1 * internal.Cell * (internal.kAsRcPc * aPcna * pRc - internal.kDsRcPc * aRc) - 1 * internal.Cell * (internal.kAsRcPc * iPcna * pRc - internal.kDsRcPc * iRc) - 1 * internal.Cell * (((Dna < 1 ? 0 : ((Dna > 1 ? 1 * pRc : 0.5 * pRc)))));
    dstatedt[7] = 0 - 1 * internal.Cell * (internal.kPhRc * Math.pow((Cy), (internal.n)) / (Math.pow((internal.jCy), (internal.n)) + Math.pow((Cy), (internal.n))) * Rc) + 1 * internal.Cell * internal.kDpRc * pRc - 1 * internal.Cell * (((Dna < 1 ? 0 : ((Dna > 1 ? 1 * Rc : 0.5 * Rc)))));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "MrnaP21", "MrnaCy", "MrnaP53", "P21", "Cy", "CyP21", "aPcna", "Rc", "pRc", "aRc", "iRc", "Dna", "Dam", "P53", "Skp2", "Cdt2", "iPcna", "tP21", "tCy", "tPcna"];
    this.metadata.internalOrder = {aPcna_init: null, aRc_init: null, Cdt2_init: null, Cell: null, Cy_init: null, CyP21_init: null, Dam_init: null, Dna_init: null, initial_aPcna: null, initial_aRc: null, initial_Cdt2: null, initial_Cy: null, initial_CyP21: null, initial_Dam: null, initial_Dna: null, initial_iPcna: null, initial_iRc: null, initial_MrnaCy: null, initial_MrnaP21: null, initial_MrnaP53: null, initial_P21: null, initial_P53: null, initial_pRc: null, initial_Rc: null, initial_Skp2: null, initial_tCy: null, initial_tP21: null, initial_tPcna: null, iPcna_init: null, iRc_init: null, jCy: null, jDam: null, jP53: null, kAsCyP21: null, kAsPcP21: null, kAsRcPc: null, kDeCy: null, kDeCyCy: null, kDeMrna: null, kDeP21: null, kDeP21aRc: null, kDeP21Cy: null, kDeP53: null, kDpRc: null, kDsCyP21: null, kDsPcP21: null, kDsRcPc: null, kExPc: null, kGeDam: null, kGeDamArc: null, kImPc: null, kPhRc: null, kReDam: null, kReDamP53: null, kSyCy: null, kSyDna: null, kSyMrna: null, kSyMrnaP53: null, kSyP21: null, kSyP53: null, MrnaCy_init: null, MrnaP21_init: null, MrnaP53_init: null, n: null, P21_init: null, P53_init: null, pi: null, pRc_init: null, Rc_init: null, Skp2_init: null};
    this.metadata.variableOrder = {MrnaP21: null, MrnaCy: null, MrnaP53: null, P21: null, Cy: null, CyP21: null, aPcna: null, Rc: null, pRc: null, aRc: null, iRc: null, Dna: null, Dam: null, P53: null, Skp2: null, Cdt2: null, iPcna: null, tP21: null, tCy: null, tPcna: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
