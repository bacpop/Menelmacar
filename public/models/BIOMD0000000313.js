export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(15).fill(0);
    state[0] = internal.initial_Rec;
    state[1] = internal.initial_Rec_i;
    state[2] = internal.initial_IL13_Rec;
    state[3] = internal.initial_p_IL13_Rec;
    state[4] = internal.initial_p_IL13_Rec_i;
    state[5] = internal.initial_JAK2;
    state[6] = internal.initial_pJAK2;
    state[7] = internal.initial_SHP1;
    state[8] = internal.initial_STAT5;
    state[9] = internal.initial_pSTAT5;
    state[10] = internal.initial_SOCS3mRNA;
    state[11] = internal.initial_DecoyR;
    state[12] = internal.initial_IL13_DecoyR;
    state[13] = internal.initial_SOCS3;
    state[14] = internal.initial_CD274mRNA;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["CD274mRNA_init", "CD274mRNA_production", "DecoyR_binding", "DecoyR_init", "IL13_DecoyR_init", "IL13_Rec_init", "IL13stimulation", "JAK2_init", "JAK2_p_inhibition", "JAK2_phosphorylation", "Kon_IL13Rec", "p_IL13_Rec_i_init", "p_IL13_Rec_init", "pJAK2_dephosphorylation", "pJAK2_init", "pRec_degradation", "pRec_intern", "pSTAT5_dephosphorylation", "pSTAT5_init", "Rec_i_init", "Rec_init", "Rec_intern", "Rec_phosphorylation", "Rec_recycle", "SHP1_init", "SOCS3_accumulation", "SOCS3_degradation", "SOCS3_init", "SOCS3_translation", "SOCS3mRNA_init", "SOCS3mRNA_production", "STAT5_init", "STAT5_phosphorylation"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "CD274mRNA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CD274mRNA_production", internal, 8.2175200000000006e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DecoyR_binding", internal, 0.00012439100000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DecoyR_init", internal, 0.34000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IL13_DecoyR_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IL13_Rec_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IL13stimulation", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "JAK2_init", internal, 2.7999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "JAK2_p_inhibition", internal, 0.016826799999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "JAK2_phosphorylation", internal, 0.157057, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kon_IL13Rec", internal, 0.0034199199999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_IL13_Rec_i_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_IL13_Rec_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pJAK2_dephosphorylation", internal, 0.00062190599999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pJAK2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pRec_degradation", internal, 0.172928, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pRec_intern", internal, 0.15254000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pSTAT5_dephosphorylation", internal, 0.00034339199999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pSTAT5_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rec_i_init", internal, 113.194, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rec_init", internal, 1.3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rec_intern", internal, 0.10334599999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rec_phosphorylation", internal, 999.63099999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rec_recycle", internal, 0.0013559799999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SHP1_init", internal, 91, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SOCS3_accumulation", internal, 3.7080299999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SOCS3_degradation", internal, 0.042918600000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SOCS3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SOCS3_translation", internal, 11.9086, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SOCS3mRNA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SOCS3mRNA_production", internal, 0.00215826, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "STAT5_init", internal, 165, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "STAT5_phosphorylation", internal, 0.038259599999999998, -Infinity, Infinity, false);
    internal.IL13 = 2.2650000000000001 * internal.IL13stimulation;
    internal.initial_CD274mRNA = internal.CD274mRNA_init;
    internal.initial_DecoyR = internal.DecoyR_init;
    internal.initial_IL13_DecoyR = internal.IL13_DecoyR_init;
    internal.initial_IL13_Rec = internal.IL13_Rec_init;
    internal.initial_JAK2 = internal.JAK2_init;
    internal.initial_p_IL13_Rec = internal.p_IL13_Rec_init;
    internal.initial_p_IL13_Rec_i = internal.p_IL13_Rec_i_init;
    internal.initial_pJAK2 = internal.pJAK2_init;
    internal.initial_pSTAT5 = internal.pSTAT5_init;
    internal.initial_Rec = internal.Rec_init;
    internal.initial_Rec_i = internal.Rec_i_init;
    internal.initial_SHP1 = internal.SHP1_init;
    internal.initial_SOCS3 = internal.SOCS3_init;
    internal.initial_SOCS3mRNA = internal.SOCS3mRNA_init;
    internal.initial_STAT5 = internal.STAT5_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Rec = state[0];
    const Rec_i = state[1];
    const IL13_Rec = state[2];
    const p_IL13_Rec = state[3];
    const p_IL13_Rec_i = state[4];
    const JAK2 = state[5];
    const pJAK2 = state[6];
    const SHP1 = state[7];
    const STAT5 = state[8];
    const pSTAT5 = state[9];
    const SOCS3mRNA = state[10];
    const DecoyR = state[11];
    const SOCS3 = state[13];
    dstatedt[7] = 0;
    dstatedt[14] = 0 + 1 * pSTAT5 * internal.CD274mRNA_production * internal.cell;
    dstatedt[5] = 0 - 1 * internal.JAK2_phosphorylation * IL13_Rec * JAK2 / (1 + internal.JAK2_p_inhibition * SOCS3) * internal.cell - 1 * internal.JAK2_phosphorylation * p_IL13_Rec * JAK2 / (1 + internal.JAK2_p_inhibition * SOCS3) * internal.cell + 1 * internal.pJAK2_dephosphorylation * pJAK2 * SHP1 * internal.cell;
    dstatedt[3] = 0 + 1 * internal.Rec_phosphorylation * IL13_Rec * pJAK2 * internal.cell - 1 * internal.pRec_intern * p_IL13_Rec * internal.cell;
    dstatedt[4] = 0 + 1 * internal.pRec_intern * p_IL13_Rec * internal.cell - 1 * internal.pRec_degradation * p_IL13_Rec_i * internal.cell;
    dstatedt[6] = 0 + 1 * internal.JAK2_phosphorylation * IL13_Rec * JAK2 / (1 + internal.JAK2_p_inhibition * SOCS3) * internal.cell + 1 * internal.JAK2_phosphorylation * p_IL13_Rec * JAK2 / (1 + internal.JAK2_p_inhibition * SOCS3) * internal.cell - 1 * internal.pJAK2_dephosphorylation * pJAK2 * SHP1 * internal.cell;
    dstatedt[9] = 0 + 1 * internal.STAT5_phosphorylation * STAT5 * pJAK2 * internal.cell - 1 * internal.pSTAT5_dephosphorylation * pSTAT5 * SHP1 * internal.cell;
    dstatedt[1] = 0 + 1 * internal.Rec_intern * Rec * internal.cell - 1 * internal.Rec_recycle * Rec_i * internal.cell;
    dstatedt[13] = 0 + 1 * SOCS3mRNA * internal.SOCS3_translation / (internal.SOCS3_accumulation + SOCS3mRNA) * internal.cell - 1 * internal.SOCS3_degradation * SOCS3 * internal.cell;
    dstatedt[10] = 0 + 1 * pSTAT5 * internal.SOCS3mRNA_production * internal.cell;
    dstatedt[8] = 0 - 1 * internal.STAT5_phosphorylation * STAT5 * pJAK2 * internal.cell + 1 * internal.pSTAT5_dephosphorylation * pSTAT5 * SHP1 * internal.cell;
    dstatedt[11] = 0 - 1 * internal.DecoyR_binding * internal.IL13 * DecoyR * internal.cell;
    dstatedt[12] = 0 + 1 * internal.DecoyR_binding * internal.IL13 * DecoyR * internal.cell;
    dstatedt[2] = 0 + 1 * internal.Kon_IL13Rec * internal.IL13 * Rec * internal.cell - 1 * internal.Rec_phosphorylation * IL13_Rec * pJAK2 * internal.cell;
    dstatedt[0] = 0 - 1 * internal.Kon_IL13Rec * internal.IL13 * Rec * internal.cell - 1 * internal.Rec_intern * Rec * internal.cell + 1 * internal.Rec_recycle * Rec_i * internal.cell;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Rec", "Rec_i", "IL13_Rec", "p_IL13_Rec", "p_IL13_Rec_i", "JAK2", "pJAK2", "SHP1", "STAT5", "pSTAT5", "SOCS3mRNA", "DecoyR", "IL13_DecoyR", "SOCS3", "CD274mRNA"];
    this.metadata.internalOrder = {CD274mRNA_init: null, CD274mRNA_production: null, cell: null, DecoyR_binding: null, DecoyR_init: null, IL13: null, IL13_DecoyR_init: null, IL13_Rec_init: null, IL13stimulation: null, initial_CD274mRNA: null, initial_DecoyR: null, initial_IL13_DecoyR: null, initial_IL13_Rec: null, initial_JAK2: null, initial_p_IL13_Rec: null, initial_p_IL13_Rec_i: null, initial_pJAK2: null, initial_pSTAT5: null, initial_Rec: null, initial_Rec_i: null, initial_SHP1: null, initial_SOCS3: null, initial_SOCS3mRNA: null, initial_STAT5: null, JAK2_init: null, JAK2_p_inhibition: null, JAK2_phosphorylation: null, Kon_IL13Rec: null, p_IL13_Rec_i_init: null, p_IL13_Rec_init: null, pJAK2_dephosphorylation: null, pJAK2_init: null, pRec_degradation: null, pRec_intern: null, pSTAT5_dephosphorylation: null, pSTAT5_init: null, Rec_i_init: null, Rec_init: null, Rec_intern: null, Rec_phosphorylation: null, Rec_recycle: null, SHP1_init: null, SOCS3_accumulation: null, SOCS3_degradation: null, SOCS3_init: null, SOCS3_translation: null, SOCS3mRNA_init: null, SOCS3mRNA_production: null, STAT5_init: null, STAT5_phosphorylation: null};
    this.metadata.variableOrder = {Rec: null, Rec_i: null, IL13_Rec: null, p_IL13_Rec: null, p_IL13_Rec_i: null, JAK2: null, pJAK2: null, SHP1: null, STAT5: null, pSTAT5: null, SOCS3mRNA: null, DecoyR: null, IL13_DecoyR: null, SOCS3: null, CD274mRNA: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
