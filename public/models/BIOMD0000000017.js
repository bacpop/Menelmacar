export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Ac = 1;
    internal.AcetoinOut = 0;
    internal.Butanediol = 0.01;
    internal.compartment = 1;
    internal.EtOH = 1;
    internal.halfglucose = 30;
    internal.lactate = 0.10000000000000001;
    internal.O2 = 0.20000000000000001;
    internal.pi = 3.1415929999999999;
    internal.PO4 = 10;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(11).fill(0);
    state[0] = internal.initial_ADP;
    state[1] = internal.initial_NAD;
    state[2] = internal.initial_ATP;
    state[3] = internal.initial_NADH;
    state[4] = internal.initial_pyruvate;
    state[5] = internal.initial_CoA;
    state[6] = internal.initial_AcCoA;
    state[7] = internal.initial_AcP;
    state[8] = internal.initial_AcO;
    state[9] = internal.initial_AcLac;
    state[10] = internal.initial_AcetoinIn;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["AcCoA_init", "AcetoinIn_init", "AcLac_init", "AcO_init", "AcP_init", "ADP_init", "ATP_init", "CoA_init", "k_14", "Kac_5", "Kaccoa_3", "Kaccoa_6", "Kacet_10", "Kacet_11", "Kacet_9", "Kaclac_8", "Kaclac_9", "Kaco_6", "Kaco_7", "Kacp_4", "Kacp_5", "Kadp_1", "Kadp_5", "Katp_1", "Katp_12", "Katp_5", "Kbut_11", "Kcoa_3", "Kcoa_6", "Keq_11", "Keq_2", "Keq_4", "Keq_5", "Keq_6", "Keq_7", "Keq_8", "Ketoh_7", "Kglc_1", "Ki_3", "Kiaccoa_4", "Kiacp_4", "Kicoa_4", "Kipi_4", "Klac_2", "Knad_1", "Knad_11", "Knad_13", "Knad_2", "Knad_3", "Knad_6", "Knad_7", "Knadh_1", "Knadh_11", "Knadh_13", "Knadh_2", "Knadh_3", "Knadh_6", "Knadh_7", "Ko_13", "Kpi_4", "Kpyr_1", "Kpyr_2", "Kpyr_3", "Kpyr_8", "n_12", "n_8", "NAD_init", "NADH_init", "pyruvate_init", "V_1", "V_10", "V_11", "V_12", "V_13", "V_2", "V_3", "V_4", "V_5", "V_6", "V_7", "V_8", "V_9"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "AcCoA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AcetoinIn_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AcLac_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AcO_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AcP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ADP_init", internal, 4.9000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ATP_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CoA_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_14", internal, 0.00029999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kac_5", internal, 7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kaccoa_3", internal, 0.0080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kaccoa_6", internal, 0.0070000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kacet_10", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kacet_11", internal, 0.059999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kacet_9", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kaclac_8", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kaclac_9", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kaco_6", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kaco_7", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kacp_4", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kacp_5", internal, 0.16, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kadp_1", internal, 0.046989999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kadp_5", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Katp_1", internal, 0.018669999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Katp_12", internal, 6.1959999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Katp_5", internal, 0.070000000000000007, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kbut_11", internal, 2.6000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kcoa_3", internal, 0.014, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kcoa_6", internal, 0.0080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Keq_11", internal, 1400, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Keq_2", internal, 21120.689999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Keq_4", internal, 0.0064999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Keq_5", internal, 174.21700000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Keq_6", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Keq_7", internal, 12354.9, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Keq_8", internal, 9000000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ketoh_7", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kglc_1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ki_3", internal, 46.415900000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kiaccoa_4", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kiacp_4", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kicoa_4", internal, 0.029000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kipi_4", internal, 2.6000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Klac_2", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Knad_1", internal, 0.14119999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Knad_11", internal, 0.16, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Knad_13", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Knad_2", internal, 2.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Knad_3", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Knad_6", internal, 0.080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Knad_7", internal, 0.080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Knadh_1", internal, 0.089990000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Knadh_11", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Knadh_13", internal, 0.041000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Knadh_2", internal, 0.080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Knadh_3", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Knadh_6", internal, 0.025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Knadh_7", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ko_13", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kpi_4", internal, 2.6000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kpyr_1", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kpyr_2", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kpyr_3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kpyr_8", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n_12", internal, 2.5800000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n_8", internal, 2.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NAD_init", internal, 6.3300000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NADH_init", internal, 3.6699999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pyruvate_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_1", internal, 2397, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_10", internal, 200, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_11", internal, 105, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_12", internal, 900, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_13", internal, 118, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_2", internal, 5118, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_3", internal, 259, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_4", internal, 42, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_5", internal, 2700, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_6", internal, 97, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_7", internal, 162, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_8", internal, 600, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_9", internal, 106, -Infinity, Infinity, false);
    internal.initial_AcCoA = internal.AcCoA_init;
    internal.initial_AcetoinIn = internal.AcetoinIn_init;
    internal.initial_AcLac = internal.AcLac_init;
    internal.initial_AcO = internal.AcO_init;
    internal.initial_AcP = internal.AcP_init;
    internal.initial_ADP = internal.ADP_init;
    internal.initial_ATP = internal.ATP_init;
    internal.initial_CoA = internal.CoA_init;
    internal.initial_NAD = internal.NAD_init;
    internal.initial_NADH = internal.NADH_init;
    internal.initial_pyruvate = internal.pyruvate_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const ADP = state[0];
    const NAD = state[1];
    const ATP = state[2];
    const NADH = state[3];
    const pyruvate = state[4];
    const CoA = state[5];
    const AcCoA = state[6];
    const AcP = state[7];
    const AcO = state[8];
    const AcLac = state[9];
    const AcetoinIn = state[10];
    dstatedt[6] = 0 + 1 * internal.V_3 * (pyruvate / internal.Kpyr_3) * (NAD / internal.Knad_3) * (CoA / internal.Kcoa_3) * (NAD / (NAD + internal.Ki_3 * NADH)) / ((1 + pyruvate / internal.Kpyr_3) * (1 + NAD / internal.Knad_3 + NADH / internal.Knadh_3) * (1 + CoA / internal.Kcoa_3 + AcCoA / internal.Kaccoa_3)) - 1 * internal.V_4 * ((AcCoA * internal.PO4 - AcP * CoA / internal.Keq_4) / (internal.Kiaccoa_4 * internal.Kpi_4)) / (1 + AcCoA / internal.Kiaccoa_4 + internal.PO4 / internal.Kipi_4 + AcP / internal.Kiacp_4 + CoA / internal.Kicoa_4 + AcCoA * internal.PO4 / (internal.Kiaccoa_4 * internal.Kpi_4) + AcP * CoA / (internal.Kacp_4 * internal.Kicoa_4)) - 1 * internal.V_6 * ((AcCoA * NADH - CoA * NAD * AcO / internal.Keq_6) / (internal.Kaccoa_6 * internal.Knadh_6)) / ((1 + NAD / internal.Knad_6 + NADH / internal.Knadh_6) * (1 + AcCoA / internal.Kaccoa_6 + CoA / internal.Kcoa_6) * (1 + AcO / internal.Kaco_6));
    dstatedt[10] = 0 + 1 * internal.V_9 * (AcLac / internal.Kaclac_9) / (1 + AcLac / internal.Kaclac_9 + AcetoinIn / internal.Kacet_9) - 1 * internal.V_10 * (AcetoinIn / internal.Kacet_10) / (1 + AcetoinIn / internal.Kacet_10) - 1 * internal.V_11 * ((AcetoinIn * NADH - internal.Butanediol * NAD / internal.Keq_11) / (internal.Kacet_11 * internal.Knadh_11)) / ((1 + AcetoinIn / internal.Kacet_11 + internal.Butanediol / internal.Kbut_11) * (1 + NADH / internal.Knadh_11 + NAD / internal.Knad_11)) + 1 * internal.k_14 * AcLac;
    dstatedt[9] = 0 + 1 * internal.V_8 * (pyruvate / internal.Kpyr_8) * (1 - AcLac / (pyruvate * internal.Keq_8)) * Math.pow((pyruvate / internal.Kpyr_8 + AcLac / internal.Kaclac_8), (internal.n_8 - 1)) / (1 + Math.pow((pyruvate / internal.Kpyr_8 + AcLac / internal.Kaclac_8), (internal.n_8))) - 1 * internal.V_9 * (AcLac / internal.Kaclac_9) / (1 + AcLac / internal.Kaclac_9 + AcetoinIn / internal.Kacet_9) - 1 * internal.k_14 * AcLac;
    dstatedt[8] = 0 + 1 * internal.V_6 * ((AcCoA * NADH - CoA * NAD * AcO / internal.Keq_6) / (internal.Kaccoa_6 * internal.Knadh_6)) / ((1 + NAD / internal.Knad_6 + NADH / internal.Knadh_6) * (1 + AcCoA / internal.Kaccoa_6 + CoA / internal.Kcoa_6) * (1 + AcO / internal.Kaco_6)) - 1 * internal.V_7 * ((AcO * NADH - internal.EtOH * NAD / internal.Keq_7) / (internal.Kaco_7 * internal.Knadh_7)) / ((1 + NAD / internal.Knad_7 + NADH / internal.Knadh_7) * (1 + AcO / internal.Kaco_7 + internal.EtOH / internal.Ketoh_7));
    dstatedt[7] = 0 + 1 * internal.V_4 * ((AcCoA * internal.PO4 - AcP * CoA / internal.Keq_4) / (internal.Kiaccoa_4 * internal.Kpi_4)) / (1 + AcCoA / internal.Kiaccoa_4 + internal.PO4 / internal.Kipi_4 + AcP / internal.Kiacp_4 + CoA / internal.Kicoa_4 + AcCoA * internal.PO4 / (internal.Kiaccoa_4 * internal.Kpi_4) + AcP * CoA / (internal.Kacp_4 * internal.Kicoa_4)) - 1 * internal.V_5 * ((AcP * ADP - internal.Ac * ATP / internal.Keq_5) / (internal.Kadp_5 * internal.Kacp_5)) / ((1 + AcP / internal.Kacp_5 + internal.Ac / internal.Kac_5) * (1 + ADP / internal.Kadp_5 + ATP / internal.Katp_5));
    dstatedt[0] = 0 - 1 * 2 * internal.V_1 * (internal.halfglucose / (2 * internal.Kglc_1)) * (NAD / internal.Knad_1) * (ADP / internal.Kadp_1) / ((1 + internal.halfglucose / (2 * internal.Kglc_1) + pyruvate / internal.Kpyr_1) * (1 + NAD / internal.Knad_1 + NADH / internal.Knadh_1) * (1 + ADP / internal.Kadp_1 + ATP / internal.Katp_1)) - 1 * internal.V_5 * ((AcP * ADP - internal.Ac * ATP / internal.Keq_5) / (internal.Kadp_5 * internal.Kacp_5)) / ((1 + AcP / internal.Kacp_5 + internal.Ac / internal.Kac_5) * (1 + ADP / internal.Kadp_5 + ATP / internal.Katp_5)) + 1 * internal.V_12 * Math.pow((ATP / (ADP * internal.Katp_12)), (internal.n_12)) / (1 + Math.pow((ATP / (ADP * internal.Katp_12)), (internal.n_12)));
    dstatedt[2] = 0 + 1 * 2 * internal.V_1 * (internal.halfglucose / (2 * internal.Kglc_1)) * (NAD / internal.Knad_1) * (ADP / internal.Kadp_1) / ((1 + internal.halfglucose / (2 * internal.Kglc_1) + pyruvate / internal.Kpyr_1) * (1 + NAD / internal.Knad_1 + NADH / internal.Knadh_1) * (1 + ADP / internal.Kadp_1 + ATP / internal.Katp_1)) + 1 * internal.V_5 * ((AcP * ADP - internal.Ac * ATP / internal.Keq_5) / (internal.Kadp_5 * internal.Kacp_5)) / ((1 + AcP / internal.Kacp_5 + internal.Ac / internal.Kac_5) * (1 + ADP / internal.Kadp_5 + ATP / internal.Katp_5)) - 1 * internal.V_12 * Math.pow((ATP / (ADP * internal.Katp_12)), (internal.n_12)) / (1 + Math.pow((ATP / (ADP * internal.Katp_12)), (internal.n_12)));
    dstatedt[5] = 0 - 1 * internal.V_3 * (pyruvate / internal.Kpyr_3) * (NAD / internal.Knad_3) * (CoA / internal.Kcoa_3) * (NAD / (NAD + internal.Ki_3 * NADH)) / ((1 + pyruvate / internal.Kpyr_3) * (1 + NAD / internal.Knad_3 + NADH / internal.Knadh_3) * (1 + CoA / internal.Kcoa_3 + AcCoA / internal.Kaccoa_3)) + 1 * internal.V_4 * ((AcCoA * internal.PO4 - AcP * CoA / internal.Keq_4) / (internal.Kiaccoa_4 * internal.Kpi_4)) / (1 + AcCoA / internal.Kiaccoa_4 + internal.PO4 / internal.Kipi_4 + AcP / internal.Kiacp_4 + CoA / internal.Kicoa_4 + AcCoA * internal.PO4 / (internal.Kiaccoa_4 * internal.Kpi_4) + AcP * CoA / (internal.Kacp_4 * internal.Kicoa_4)) + 1 * internal.V_6 * ((AcCoA * NADH - CoA * NAD * AcO / internal.Keq_6) / (internal.Kaccoa_6 * internal.Knadh_6)) / ((1 + NAD / internal.Knad_6 + NADH / internal.Knadh_6) * (1 + AcCoA / internal.Kaccoa_6 + CoA / internal.Kcoa_6) * (1 + AcO / internal.Kaco_6));
    dstatedt[1] = 0 - 1 * 2 * internal.V_1 * (internal.halfglucose / (2 * internal.Kglc_1)) * (NAD / internal.Knad_1) * (ADP / internal.Kadp_1) / ((1 + internal.halfglucose / (2 * internal.Kglc_1) + pyruvate / internal.Kpyr_1) * (1 + NAD / internal.Knad_1 + NADH / internal.Knadh_1) * (1 + ADP / internal.Kadp_1 + ATP / internal.Katp_1)) + 1 * internal.V_2 * ((pyruvate * NADH - internal.lactate * NAD / internal.Keq_2) / (internal.Kpyr_2 * internal.Knadh_2)) / ((1 + pyruvate / internal.Kpyr_2 + internal.lactate / internal.Klac_2) * (1 + NADH / internal.Knadh_2 + NAD / internal.Knad_2)) - 1 * internal.V_3 * (pyruvate / internal.Kpyr_3) * (NAD / internal.Knad_3) * (CoA / internal.Kcoa_3) * (NAD / (NAD + internal.Ki_3 * NADH)) / ((1 + pyruvate / internal.Kpyr_3) * (1 + NAD / internal.Knad_3 + NADH / internal.Knadh_3) * (1 + CoA / internal.Kcoa_3 + AcCoA / internal.Kaccoa_3)) + 1 * internal.V_6 * ((AcCoA * NADH - CoA * NAD * AcO / internal.Keq_6) / (internal.Kaccoa_6 * internal.Knadh_6)) / ((1 + NAD / internal.Knad_6 + NADH / internal.Knadh_6) * (1 + AcCoA / internal.Kaccoa_6 + CoA / internal.Kcoa_6) * (1 + AcO / internal.Kaco_6)) + 1 * internal.V_7 * ((AcO * NADH - internal.EtOH * NAD / internal.Keq_7) / (internal.Kaco_7 * internal.Knadh_7)) / ((1 + NAD / internal.Knad_7 + NADH / internal.Knadh_7) * (1 + AcO / internal.Kaco_7 + internal.EtOH / internal.Ketoh_7)) + 1 * internal.V_11 * ((AcetoinIn * NADH - internal.Butanediol * NAD / internal.Keq_11) / (internal.Kacet_11 * internal.Knadh_11)) / ((1 + AcetoinIn / internal.Kacet_11 + internal.Butanediol / internal.Kbut_11) * (1 + NADH / internal.Knadh_11 + NAD / internal.Knad_11)) + 1 * internal.V_13 * (NADH * internal.O2 / (internal.Knadh_13 * internal.Ko_13)) / ((1 + NADH / internal.Knadh_13 + NAD / internal.Knad_13) * (1 + internal.O2 / internal.Ko_13));
    dstatedt[3] = 0 + 1 * 2 * internal.V_1 * (internal.halfglucose / (2 * internal.Kglc_1)) * (NAD / internal.Knad_1) * (ADP / internal.Kadp_1) / ((1 + internal.halfglucose / (2 * internal.Kglc_1) + pyruvate / internal.Kpyr_1) * (1 + NAD / internal.Knad_1 + NADH / internal.Knadh_1) * (1 + ADP / internal.Kadp_1 + ATP / internal.Katp_1)) - 1 * internal.V_2 * ((pyruvate * NADH - internal.lactate * NAD / internal.Keq_2) / (internal.Kpyr_2 * internal.Knadh_2)) / ((1 + pyruvate / internal.Kpyr_2 + internal.lactate / internal.Klac_2) * (1 + NADH / internal.Knadh_2 + NAD / internal.Knad_2)) + 1 * internal.V_3 * (pyruvate / internal.Kpyr_3) * (NAD / internal.Knad_3) * (CoA / internal.Kcoa_3) * (NAD / (NAD + internal.Ki_3 * NADH)) / ((1 + pyruvate / internal.Kpyr_3) * (1 + NAD / internal.Knad_3 + NADH / internal.Knadh_3) * (1 + CoA / internal.Kcoa_3 + AcCoA / internal.Kaccoa_3)) - 1 * internal.V_6 * ((AcCoA * NADH - CoA * NAD * AcO / internal.Keq_6) / (internal.Kaccoa_6 * internal.Knadh_6)) / ((1 + NAD / internal.Knad_6 + NADH / internal.Knadh_6) * (1 + AcCoA / internal.Kaccoa_6 + CoA / internal.Kcoa_6) * (1 + AcO / internal.Kaco_6)) - 1 * internal.V_7 * ((AcO * NADH - internal.EtOH * NAD / internal.Keq_7) / (internal.Kaco_7 * internal.Knadh_7)) / ((1 + NAD / internal.Knad_7 + NADH / internal.Knadh_7) * (1 + AcO / internal.Kaco_7 + internal.EtOH / internal.Ketoh_7)) - 1 * internal.V_11 * ((AcetoinIn * NADH - internal.Butanediol * NAD / internal.Keq_11) / (internal.Kacet_11 * internal.Knadh_11)) / ((1 + AcetoinIn / internal.Kacet_11 + internal.Butanediol / internal.Kbut_11) * (1 + NADH / internal.Knadh_11 + NAD / internal.Knad_11)) - 1 * internal.V_13 * (NADH * internal.O2 / (internal.Knadh_13 * internal.Ko_13)) / ((1 + NADH / internal.Knadh_13 + NAD / internal.Knad_13) * (1 + internal.O2 / internal.Ko_13));
    dstatedt[4] = 0 + 1 * 2 * internal.V_1 * (internal.halfglucose / (2 * internal.Kglc_1)) * (NAD / internal.Knad_1) * (ADP / internal.Kadp_1) / ((1 + internal.halfglucose / (2 * internal.Kglc_1) + pyruvate / internal.Kpyr_1) * (1 + NAD / internal.Knad_1 + NADH / internal.Knadh_1) * (1 + ADP / internal.Kadp_1 + ATP / internal.Katp_1)) - 1 * internal.V_2 * ((pyruvate * NADH - internal.lactate * NAD / internal.Keq_2) / (internal.Kpyr_2 * internal.Knadh_2)) / ((1 + pyruvate / internal.Kpyr_2 + internal.lactate / internal.Klac_2) * (1 + NADH / internal.Knadh_2 + NAD / internal.Knad_2)) - 1 * internal.V_3 * (pyruvate / internal.Kpyr_3) * (NAD / internal.Knad_3) * (CoA / internal.Kcoa_3) * (NAD / (NAD + internal.Ki_3 * NADH)) / ((1 + pyruvate / internal.Kpyr_3) * (1 + NAD / internal.Knad_3 + NADH / internal.Knadh_3) * (1 + CoA / internal.Kcoa_3 + AcCoA / internal.Kaccoa_3)) - 2 * internal.V_8 * (pyruvate / internal.Kpyr_8) * (1 - AcLac / (pyruvate * internal.Keq_8)) * Math.pow((pyruvate / internal.Kpyr_8 + AcLac / internal.Kaclac_8), (internal.n_8 - 1)) / (1 + Math.pow((pyruvate / internal.Kpyr_8 + AcLac / internal.Kaclac_8), (internal.n_8)));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "ADP", "NAD", "ATP", "NADH", "pyruvate", "CoA", "AcCoA", "AcP", "AcO", "AcLac", "AcetoinIn"];
    this.metadata.internalOrder = {Ac: null, AcCoA_init: null, AcetoinIn_init: null, AcetoinOut: null, AcLac_init: null, AcO_init: null, AcP_init: null, ADP_init: null, ATP_init: null, Butanediol: null, CoA_init: null, compartment: null, EtOH: null, halfglucose: null, initial_AcCoA: null, initial_AcetoinIn: null, initial_AcLac: null, initial_AcO: null, initial_AcP: null, initial_ADP: null, initial_ATP: null, initial_CoA: null, initial_NAD: null, initial_NADH: null, initial_pyruvate: null, k_14: null, Kac_5: null, Kaccoa_3: null, Kaccoa_6: null, Kacet_10: null, Kacet_11: null, Kacet_9: null, Kaclac_8: null, Kaclac_9: null, Kaco_6: null, Kaco_7: null, Kacp_4: null, Kacp_5: null, Kadp_1: null, Kadp_5: null, Katp_1: null, Katp_12: null, Katp_5: null, Kbut_11: null, Kcoa_3: null, Kcoa_6: null, Keq_11: null, Keq_2: null, Keq_4: null, Keq_5: null, Keq_6: null, Keq_7: null, Keq_8: null, Ketoh_7: null, Kglc_1: null, Ki_3: null, Kiaccoa_4: null, Kiacp_4: null, Kicoa_4: null, Kipi_4: null, Klac_2: null, Knad_1: null, Knad_11: null, Knad_13: null, Knad_2: null, Knad_3: null, Knad_6: null, Knad_7: null, Knadh_1: null, Knadh_11: null, Knadh_13: null, Knadh_2: null, Knadh_3: null, Knadh_6: null, Knadh_7: null, Ko_13: null, Kpi_4: null, Kpyr_1: null, Kpyr_2: null, Kpyr_3: null, Kpyr_8: null, lactate: null, n_12: null, n_8: null, NAD_init: null, NADH_init: null, O2: null, pi: null, PO4: null, pyruvate_init: null, V_1: null, V_10: null, V_11: null, V_12: null, V_13: null, V_2: null, V_3: null, V_4: null, V_5: null, V_6: null, V_7: null, V_8: null, V_9: null};
    this.metadata.variableOrder = {ADP: null, NAD: null, ATP: null, NADH: null, pyruvate: null, CoA: null, AcCoA: null, AcP: null, AcO: null, AcLac: null, AcetoinIn: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
