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
    var state = Array(20).fill(0);
    state[0] = internal.initial_Ifng;
    state[1] = internal.initial_II;
    state[2] = internal.initial_d1;
    state[3] = internal.initial_d2;
    state[4] = internal.initial_d3;
    state[5] = internal.initial_d4;
    state[6] = internal.initial_Stat1Pd;
    state[7] = internal.initial_Stat1Pdn;
    state[8] = internal.initial_i1;
    state[9] = internal.initial_i2;
    state[10] = internal.initial_i3;
    state[11] = internal.initial_i4;
    state[12] = internal.initial_j1;
    state[13] = internal.initial_j2;
    state[14] = internal.initial_j3;
    state[15] = internal.initial_j4;
    state[16] = internal.initial_Ir;
    state[17] = internal.initial_Stat1U;
    state[18] = internal.initial_Stat1Un;
    state[19] = internal.initial_mRNA;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["d1_init", "d2_init", "d3_init", "d4_init", "i1_init", "i2_init", "i3_init", "i4_init", "Ifng_init", "II_init", "Ir_init", "j1_init", "j2_init", "j3_init", "j4_init", "k1", "k10", "k11", "k12", "k13", "k14", "k3", "k4", "k5", "k6", "k9", "mRNA_init", "scale_RSNCex", "scale_Socs1ex", "scale_Stat1cex", "scale_Stat1ex", "scale_Stat1nex", "scale_Stat1Pcex", "scale_Stat1Pex", "scale_Stat1Pnex", "Stat1Pd_init", "Stat1Pdn_init", "Stat1U_init", "Stat1Un_init", "tau", "taud", "tauj"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "d1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d4_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "i1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "i2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "i3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "i4_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ifng_init", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "II_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ir_init", internal, 0.057209999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "j1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "j2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "j3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "j4_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.00094914999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 0.058342699999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11", internal, 8.9024400000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k12", internal, 12.267899999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k13", internal, 0.0094981900000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k14", internal, 0.74844900000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.095979599999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0.099762100000000006, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 298.76299999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 0.066685099999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 4179.5600000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mRNA_init", internal, 0.108325, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "scale_RSNCex", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "scale_Socs1ex", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "scale_Stat1cex", internal, 0.74769699999999994, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "scale_Stat1ex", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "scale_Stat1nex", internal, 1.21851, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "scale_Stat1Pcex", internal, 19.057400000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "scale_Stat1Pex", internal, 34.4009, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "scale_Stat1Pnex", internal, 91677.699999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Stat1Pd_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Stat1Pdn_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Stat1U_init", internal, 0.95041799999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Stat1Un_init", internal, 0.66121300000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau", internal, 79.335400000000007, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "taud", internal, 277.363, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tauj", internal, 451.93700000000001, -Infinity, Infinity, false);
    internal.initial_d1 = internal.d1_init;
    internal.initial_d2 = internal.d2_init;
    internal.initial_d3 = internal.d3_init;
    internal.initial_d4 = internal.d4_init;
    internal.initial_i1 = internal.i1_init;
    internal.initial_i2 = internal.i2_init;
    internal.initial_i3 = internal.i3_init;
    internal.initial_i4 = internal.i4_init;
    internal.initial_Ifng = internal.Ifng_init;
    internal.initial_II = internal.II_init;
    internal.initial_Ir = internal.Ir_init;
    internal.initial_j1 = internal.j1_init;
    internal.initial_j2 = internal.j2_init;
    internal.initial_j3 = internal.j3_init;
    internal.initial_j4 = internal.j4_init;
    internal.initial_mRNA = internal.mRNA_init;
    internal.initial_Stat1Pd = internal.Stat1Pd_init;
    internal.initial_Stat1Pdn = internal.Stat1Pdn_init;
    internal.initial_Stat1U = internal.Stat1U_init;
    internal.initial_Stat1Un = internal.Stat1Un_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Ifng = state[0];
    const II = state[1];
    const d1 = state[2];
    const d2 = state[3];
    const d3 = state[4];
    const d4 = state[5];
    const Stat1Pd = state[6];
    const Stat1Pdn = state[7];
    const i1 = state[8];
    const i2 = state[9];
    const i3 = state[10];
    const i4 = state[11];
    const j1 = state[12];
    const j2 = state[13];
    const j3 = state[14];
    const j4 = state[15];
    const Ir = state[16];
    const Stat1U = state[17];
    const Stat1Un = state[18];
    const mRNA = state[19];
    dstatedt[2] = 4 * (II - d1) / internal.taud;
    dstatedt[3] = 4 * (d1 - d2) / internal.taud;
    dstatedt[4] = 4 * (d2 - d3) / internal.taud;
    dstatedt[5] = 4 * (d3 - d4) / internal.taud;
    dstatedt[8] = 4 * (Stat1Pdn - i1) / internal.tau;
    dstatedt[9] = 4 * (i1 - i2) / internal.tau;
    dstatedt[10] = 4 * (i2 - i3) / internal.tau;
    dstatedt[11] = 4 * (i3 - i4) / internal.tau;
    dstatedt[0] = - (internal.k1 * Ifng * Ir);
    dstatedt[1] = internal.k1 * Ifng * Ir;
    dstatedt[16] = - (internal.k1 * Ifng * Ir);
    dstatedt[12] = 4 * (mRNA - j1) / internal.tauj;
    dstatedt[13] = 4 * (j1 - j2) / internal.tauj;
    dstatedt[14] = 4 * (j2 - j3) / internal.tauj;
    dstatedt[15] = 4 * (j3 - j4) / internal.tauj;
    dstatedt[19] = internal.k13 + internal.k9 * i4 - internal.k10 * mRNA;
    dstatedt[6] = internal.k4 * II * Stat1U / (1 + internal.k14 * j4) - internal.k6 * Stat1Pd;
    dstatedt[7] = internal.k6 * Stat1Pd - internal.k5 * Stat1Pdn;
    dstatedt[17] = internal.k3 * d4 + internal.k12 * Stat1Un - internal.k11 * Stat1U - internal.k4 * II * Stat1U / (1 + internal.k14 * j4);
    dstatedt[18] = internal.k11 * Stat1U - internal.k12 * Stat1Un + internal.k5 * Stat1Pdn;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Ifng", "II", "d1", "d2", "d3", "d4", "Stat1Pd", "Stat1Pdn", "i1", "i2", "i3", "i4", "j1", "j2", "j3", "j4", "Ir", "Stat1U", "Stat1Un", "mRNA"];
    this.metadata.internalOrder = {cell: null, d1_init: null, d2_init: null, d3_init: null, d4_init: null, i1_init: null, i2_init: null, i3_init: null, i4_init: null, Ifng_init: null, II_init: null, initial_d1: null, initial_d2: null, initial_d3: null, initial_d4: null, initial_i1: null, initial_i2: null, initial_i3: null, initial_i4: null, initial_Ifng: null, initial_II: null, initial_Ir: null, initial_j1: null, initial_j2: null, initial_j3: null, initial_j4: null, initial_mRNA: null, initial_Stat1Pd: null, initial_Stat1Pdn: null, initial_Stat1U: null, initial_Stat1Un: null, Ir_init: null, j1_init: null, j2_init: null, j3_init: null, j4_init: null, k1: null, k10: null, k11: null, k12: null, k13: null, k14: null, k3: null, k4: null, k5: null, k6: null, k9: null, mRNA_init: null, scale_RSNCex: null, scale_Socs1ex: null, scale_Stat1cex: null, scale_Stat1ex: null, scale_Stat1nex: null, scale_Stat1Pcex: null, scale_Stat1Pex: null, scale_Stat1Pnex: null, Stat1Pd_init: null, Stat1Pdn_init: null, Stat1U_init: null, Stat1Un_init: null, tau: null, taud: null, tauj: null};
    this.metadata.variableOrder = {Ifng: null, II: null, d1: null, d2: null, d3: null, d4: null, Stat1Pd: null, Stat1Pdn: null, i1: null, i2: null, i3: null, i4: null, j1: null, j2: null, j3: null, j4: null, Ir: null, Stat1U: null, Stat1Un: null, mRNA: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
