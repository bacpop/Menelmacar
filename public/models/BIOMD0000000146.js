export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment_0000001 = 1;
    internal.E = 7;
    internal.MKP3 = 2.3999999999999999;
    internal.PP2A = 11.4;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(33).fill(0);
    state[0] = internal.initial_Akt;
    state[1] = internal.initial_AktPIP3;
    state[2] = internal.initial_AktPIP;
    state[3] = internal.initial_AktPIPP;
    state[4] = internal.initial_ERK;
    state[5] = internal.initial_ERKP;
    state[6] = internal.initial_ERKPP;
    state[7] = internal.initial_GS;
    state[8] = internal.initial_HRG;
    state[9] = internal.initial_MEK;
    state[10] = internal.initial_MEKP;
    state[11] = internal.initial_MEKPP;
    state[12] = internal.initial_PI3K;
    state[13] = internal.initial_PI3Kstar;
    state[14] = internal.initial_PIP3;
    state[15] = internal.initial_R;
    state[16] = internal.initial_RP;
    state[17] = internal.initial_RHRG;
    state[18] = internal.initial_RHRG2;
    state[19] = internal.initial_RPI3K;
    state[20] = internal.initial_RPI3Kstar;
    state[21] = internal.initial_RShGS;
    state[22] = internal.initial_RShP;
    state[23] = internal.initial_RShc;
    state[24] = internal.initial_Raf;
    state[25] = internal.initial_Rafstar;
    state[26] = internal.initial_RasGDP;
    state[27] = internal.initial_RasGTP;
    state[28] = internal.initial_ShGS;
    state[29] = internal.initial_ShP;
    state[30] = internal.initial_Shc;
    state[31] = internal.initial_P_I;
    state[32] = internal.initial_internalization;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Akt_init", "AktPIP_init", "AktPIP3_init", "AktPIPP_init", "ERK_init", "ERKP_init", "ERKPP_init", "GS_init", "HRG_init", "internalization_init", "k_1", "k_2", "k_23", "k_24", "k_25", "k_29", "k_3", "k_34", "k_5", "k_6", "k_7", "k_8", "k_9", "k1", "K10", "k11", "K11", "K12", "k13", "K13", "k14", "K14", "k15", "K15", "k16", "K16", "k17", "K17", "k18", "K18", "k19", "K19", "k2", "k20", "K20", "k21", "K21", "k22", "K22", "k23", "k24", "k25", "K26", "k27", "K27", "K28", "k29", "k3", "K30", "k31", "K31", "K32", "k33", "K33", "k34", "K4", "k5", "k6", "k7", "k8", "k9", "MEK_init", "MEKP_init", "MEKPP_init", "P_I_init", "PI3K_init", "PI3Kstar_init", "PIP3_init", "R_init", "Raf_init", "Rafstar_init", "RasGDP_init", "RasGTP_init", "RHRG_init", "RHRG2_init", "RP_init", "RPI3K_init", "RPI3Kstar_init", "RShc_init", "RShGS_init", "RShP_init", "Shc_init", "ShGS_init", "ShP_init", "V10", "V12", "V26", "V28", "V30", "V32", "V4"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Akt_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AktPIP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AktPIP3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AktPIPP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ERK_init", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ERKP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ERKPP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GS_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HRG_init", internal, 330, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "internalization_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_1", internal, 0.00076000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_23", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_24", internal, 0.098500000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_25", internal, 0.047, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_29", internal, 234, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_3", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_34", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_5", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_6", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_7", internal, 546, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_8", internal, 15700, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_9", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.0011999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K10", internal, 340, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11", internal, 0.222, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K11", internal, 0.18099999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K12", internal, 0.057099999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k13", internal, 1.53, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K13", internal, 11.699999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k14", internal, 0.0067299999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K14", internal, 8.0700000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k15", internal, 3.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K15", internal, 317, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k16", internal, 0.058000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K16", internal, 2200, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k17", internal, 2.8999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K17", internal, 317, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k18", internal, 0.058000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K18", internal, 60, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k19", internal, 9.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K19", internal, 146000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k20", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K20", internal, 160, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k21", internal, 16, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K21", internal, 146000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k22", internal, 0.27000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K22", internal, 60, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k23", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k24", internal, 9.8499999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k25", internal, 45.799999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K26", internal, 3680, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k27", internal, 16.899999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K27", internal, 39.100000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K28", internal, 9.0199999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k29", internal, 507, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K30", internal, 80000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k31", internal, 0.107, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K31", internal, 4.3499999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K32", internal, 80000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k33", internal, 0.21099999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K33", internal, 12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k34", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K4", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 60, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 2040, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 40.799999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MEK_init", internal, 120, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MEKP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MEKPP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_I_init", internal, 800, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PI3K_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PI3Kstar_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PIP3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_init", internal, 80, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Raf_init", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rafstar_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RasGDP_init", internal, 120, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RasGTP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RHRG_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RHRG2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RPI3K_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RPI3Kstar_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RShc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RShGS_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RShP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Shc_init", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ShGS_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ShP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V10", internal, 0.0154, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V12", internal, 0.28899999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V26", internal, 2620, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V28", internal, 17000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V30", internal, 20000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V32", internal, 20000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V4", internal, 62.5, -Infinity, Infinity, false);
    internal.initial_Akt = internal.Akt_init;
    internal.initial_AktPIP = internal.AktPIP_init;
    internal.initial_AktPIP3 = internal.AktPIP3_init;
    internal.initial_AktPIPP = internal.AktPIPP_init;
    internal.initial_ERK = internal.ERK_init;
    internal.initial_ERKP = internal.ERKP_init;
    internal.initial_ERKPP = internal.ERKPP_init;
    internal.initial_GS = internal.GS_init;
    internal.initial_HRG = internal.HRG_init;
    internal.initial_internalization = internal.internalization_init;
    internal.initial_MEK = internal.MEK_init;
    internal.initial_MEKP = internal.MEKP_init;
    internal.initial_MEKPP = internal.MEKPP_init;
    internal.initial_P_I = internal.P_I_init;
    internal.initial_PI3K = internal.PI3K_init;
    internal.initial_PI3Kstar = internal.PI3Kstar_init;
    internal.initial_PIP3 = internal.PIP3_init;
    internal.initial_R = internal.R_init;
    internal.initial_Raf = internal.Raf_init;
    internal.initial_Rafstar = internal.Rafstar_init;
    internal.initial_RasGDP = internal.RasGDP_init;
    internal.initial_RasGTP = internal.RasGTP_init;
    internal.initial_RHRG = internal.RHRG_init;
    internal.initial_RHRG2 = internal.RHRG2_init;
    internal.initial_RP = internal.RP_init;
    internal.initial_RPI3K = internal.RPI3K_init;
    internal.initial_RPI3Kstar = internal.RPI3Kstar_init;
    internal.initial_RShc = internal.RShc_init;
    internal.initial_RShGS = internal.RShGS_init;
    internal.initial_RShP = internal.RShP_init;
    internal.initial_Shc = internal.Shc_init;
    internal.initial_ShGS = internal.ShGS_init;
    internal.initial_ShP = internal.ShP_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Akt = state[0];
    const AktPIP3 = state[1];
    const AktPIP = state[2];
    const AktPIPP = state[3];
    const ERK = state[4];
    const ERKP = state[5];
    const ERKPP = state[6];
    const GS = state[7];
    const HRG = state[8];
    const MEK = state[9];
    const MEKP = state[10];
    const MEKPP = state[11];
    const PI3K = state[12];
    const PI3Kstar = state[13];
    const PIP3 = state[14];
    const R = state[15];
    const RP = state[16];
    const RHRG = state[17];
    const RHRG2 = state[18];
    const RPI3K = state[19];
    const RPI3Kstar = state[20];
    const RShGS = state[21];
    const RShP = state[22];
    const RShc = state[23];
    const Raf = state[24];
    const Rafstar = state[25];
    const RasGDP = state[26];
    const RasGTP = state[27];
    const ShGS = state[28];
    const ShP = state[29];
    const Shc = state[30];
    const P_I = state[31];
    const internalization = state[32];
    dstatedt[0] = 0 - 1 * internal.compartment_0000001 * (internal.k29 * PIP3 * Akt - internal.k_29 * AktPIP3);
    dstatedt[2] = 0 + 1 * internal.compartment_0000001 * internal.V30 * AktPIP3 / (internal.K30 * (1 + AktPIP / internal.K32) + AktPIP3) - 1 * internal.compartment_0000001 * internal.k31 * internal.PP2A * AktPIP / (internal.K31 * (1 + MEKP / internal.K16 + MEKPP / internal.K18 + AktPIPP / internal.K33) + AktPIP) - 1 * internal.compartment_0000001 * internal.V32 * AktPIP / (internal.K32 * (1 + AktPIP3 / internal.K30) + AktPIP) + 1 * internal.compartment_0000001 * internal.k33 * internal.PP2A * AktPIPP / (internal.K33 * (1 + MEKP / internal.K16 + MEKPP / internal.K18 + AktPIP / internal.K31) + AktPIPP);
    dstatedt[1] = 0 + 1 * internal.compartment_0000001 * (internal.k29 * PIP3 * Akt - internal.k_29 * AktPIP3) - 1 * internal.compartment_0000001 * internal.V30 * AktPIP3 / (internal.K30 * (1 + AktPIP / internal.K32) + AktPIP3) + 1 * internal.compartment_0000001 * internal.k31 * internal.PP2A * AktPIP / (internal.K31 * (1 + MEKP / internal.K16 + MEKPP / internal.K18 + AktPIPP / internal.K33) + AktPIP);
    dstatedt[3] = 0 + 1 * internal.compartment_0000001 * internal.V32 * AktPIP / (internal.K32 * (1 + AktPIP3 / internal.K30) + AktPIP) - 1 * internal.compartment_0000001 * internal.k33 * internal.PP2A * AktPIPP / (internal.K33 * (1 + MEKP / internal.K16 + MEKPP / internal.K18 + AktPIP / internal.K31) + AktPIPP);
    dstatedt[4] = 0 - 1 * internal.compartment_0000001 * internal.k19 * MEKPP * ERK / (internal.K19 * (1 + ERKP / internal.K21) + ERK) + 1 * internal.compartment_0000001 * internal.k20 * internal.MKP3 * ERKP / (internal.K20 * (1 + ERKPP / internal.K22) + ERKP);
    dstatedt[5] = 0 + 1 * internal.compartment_0000001 * internal.k19 * MEKPP * ERK / (internal.K19 * (1 + ERKP / internal.K21) + ERK) - 1 * internal.compartment_0000001 * internal.k20 * internal.MKP3 * ERKP / (internal.K20 * (1 + ERKPP / internal.K22) + ERKP) - 1 * internal.compartment_0000001 * internal.k21 * MEKPP * ERKP / (internal.K21 * (1 + ERK / internal.K19) + ERKP) + 1 * internal.compartment_0000001 * internal.k22 * internal.MKP3 * ERKPP / (internal.K22 * (1 + ERKP / internal.K20) + ERKPP);
    dstatedt[6] = 0 + 1 * internal.compartment_0000001 * internal.k21 * MEKPP * ERKP / (internal.K21 * (1 + ERK / internal.K19) + ERKP) - 1 * internal.compartment_0000001 * internal.k22 * internal.MKP3 * ERKPP / (internal.K22 * (1 + ERKP / internal.K20) + ERKPP);
    dstatedt[7] = 0 - 1 * internal.compartment_0000001 * (internal.k7 * RShP * GS - internal.k_7 * RShGS) + 1 * internal.compartment_0000001 * (internal.k9 * ShGS - internal.k_9 * GS * ShP);
    dstatedt[8] = 0 - 1 * internal.compartment_0000001 * (internal.k1 * R * HRG - internal.k_1 * RHRG);
    dstatedt[32] = 0 + 1 * internal.compartment_0000001 * (internal.k34 * RP - internal.k_34 * internalization);
    dstatedt[9] = 0 - 1 * internal.compartment_0000001 * internal.k15 * Rafstar * MEK / (internal.K15 * (1 + MEKP / internal.K17) + MEK) + 1 * internal.compartment_0000001 * internal.k16 * internal.PP2A * MEKP / (internal.K16 * (1 + MEKPP / internal.K18 + AktPIP / internal.K31 + AktPIPP / internal.K33) + MEKP);
    dstatedt[10] = 0 + 1 * internal.compartment_0000001 * internal.k15 * Rafstar * MEK / (internal.K15 * (1 + MEKP / internal.K17) + MEK) - 1 * internal.compartment_0000001 * internal.k16 * internal.PP2A * MEKP / (internal.K16 * (1 + MEKPP / internal.K18 + AktPIP / internal.K31 + AktPIPP / internal.K33) + MEKP) - 1 * internal.compartment_0000001 * internal.k17 * Rafstar * MEKP / (internal.K17 * (1 + MEK / internal.K15) + MEKP) + 1 * internal.compartment_0000001 * internal.k18 * internal.PP2A * MEKPP / (internal.K18 * (1 + MEKP / internal.K16 + AktPIPP / internal.K31 + AktPIPP / internal.K33) + MEKPP);
    dstatedt[11] = 0 + 1 * internal.compartment_0000001 * internal.k17 * Rafstar * MEKP / (internal.K17 * (1 + MEK / internal.K15) + MEKP) - 1 * internal.compartment_0000001 * internal.k18 * internal.PP2A * MEKPP / (internal.K18 * (1 + MEKP / internal.K16 + AktPIPP / internal.K31 + AktPIPP / internal.K33) + MEKPP);
    dstatedt[31] = 0 + 1 * internal.compartment_0000001 * (internal.V28 * PIP3 / (internal.K28 + PIP3)) - 1 * internal.compartment_0000001 * internal.k27 * PI3Kstar * P_I / (internal.K27 + P_I);
    dstatedt[12] = 0 - 1 * internal.compartment_0000001 * (internal.k23 * RP * PI3K - internal.k_23 * RPI3K) + 1 * internal.compartment_0000001 * internal.V26 * PI3Kstar / (internal.K26 + PI3Kstar);
    dstatedt[13] = 0 + 1 * internal.compartment_0000001 * (internal.k25 * RPI3Kstar - internal.k_25 * RP * PI3Kstar) - 1 * internal.compartment_0000001 * internal.V26 * PI3Kstar / (internal.K26 + PI3Kstar);
    dstatedt[14] = 0 - 1 * internal.compartment_0000001 * (internal.k29 * PIP3 * Akt - internal.k_29 * AktPIP3) - 1 * internal.compartment_0000001 * (internal.V28 * PIP3 / (internal.K28 + PIP3)) + 1 * internal.compartment_0000001 * internal.k27 * PI3Kstar * P_I / (internal.K27 + P_I);
    dstatedt[15] = 0 - 1 * internal.compartment_0000001 * (internal.k1 * R * HRG - internal.k_1 * RHRG);
    dstatedt[24] = 0 - 1 * internal.compartment_0000001 * (internal.k13 * RasGTP * Raf / (internal.K13 + Raf)) + 1 * internal.compartment_0000001 * internal.k14 * (AktPIPP + internal.E) * Rafstar / (internal.K14 + Rafstar);
    dstatedt[25] = 0 + 1 * internal.compartment_0000001 * (internal.k13 * RasGTP * Raf / (internal.K13 + Raf)) - 1 * internal.compartment_0000001 * internal.k14 * (AktPIPP + internal.E) * Rafstar / (internal.K14 + Rafstar);
    dstatedt[26] = 0 - 1 * internal.compartment_0000001 * (internal.k11 * ShGS * RasGDP / (internal.K11 + RasGDP)) + 1 * internal.compartment_0000001 * (internal.V12 * RasGTP / (internal.K12 + RasGTP));
    dstatedt[27] = 0 + 1 * internal.compartment_0000001 * (internal.k11 * ShGS * RasGDP / (internal.K11 + RasGDP)) - 1 * internal.compartment_0000001 * (internal.V12 * RasGTP / (internal.K12 + RasGTP));
    dstatedt[17] = 0 + 1 * internal.compartment_0000001 * (internal.k1 * R * HRG - internal.k_1 * RHRG) - 2 * internal.compartment_0000001 * (internal.k2 * Math.pow((RHRG), (2)) - internal.k_2 * RHRG2);
    dstatedt[18] = 0 + 1 * internal.compartment_0000001 * (internal.k2 * Math.pow((RHRG), (2)) - internal.k_2 * RHRG2) - 1 * internal.compartment_0000001 * (internal.k3 * RHRG2 - internal.k_3 * RP) + 1 * internal.compartment_0000001 * internal.V4 * RP / (internal.K4 + RP);
    dstatedt[16] = 0 + 1 * internal.compartment_0000001 * (internal.k3 * RHRG2 - internal.k_3 * RP) - 1 * internal.compartment_0000001 * internal.V4 * RP / (internal.K4 + RP) - 1 * internal.compartment_0000001 * (internal.k5 * RP * Shc - internal.k_5 * RShc) + 1 * internal.compartment_0000001 * (internal.k8 * RShGS - internal.k_8 * ShGS * RP) - 1 * internal.compartment_0000001 * (internal.k23 * RP * PI3K - internal.k_23 * RPI3K) + 1 * internal.compartment_0000001 * (internal.k25 * RPI3Kstar - internal.k_25 * RP * PI3Kstar) - 1 * internal.compartment_0000001 * (internal.k34 * RP - internal.k_34 * internalization);
    dstatedt[19] = 0 + 1 * internal.compartment_0000001 * (internal.k23 * RP * PI3K - internal.k_23 * RPI3K) - 1 * internal.compartment_0000001 * (internal.k24 * RPI3K - internal.k_24 * RPI3Kstar);
    dstatedt[20] = 0 + 1 * internal.compartment_0000001 * (internal.k24 * RPI3K - internal.k_24 * RPI3Kstar) - 1 * internal.compartment_0000001 * (internal.k25 * RPI3Kstar - internal.k_25 * RP * PI3Kstar);
    dstatedt[23] = 0 + 1 * internal.compartment_0000001 * (internal.k5 * RP * Shc - internal.k_5 * RShc) - 1 * internal.compartment_0000001 * (internal.k6 * RShc - internal.k_6 * RShP);
    dstatedt[21] = 0 + 1 * internal.compartment_0000001 * (internal.k7 * RShP * GS - internal.k_7 * RShGS) - 1 * internal.compartment_0000001 * (internal.k8 * RShGS - internal.k_8 * ShGS * RP);
    dstatedt[22] = 0 + 1 * internal.compartment_0000001 * (internal.k6 * RShc - internal.k_6 * RShP) - 1 * internal.compartment_0000001 * (internal.k7 * RShP * GS - internal.k_7 * RShGS);
    dstatedt[30] = 0 - 1 * internal.compartment_0000001 * (internal.k5 * RP * Shc - internal.k_5 * RShc) + 1 * internal.compartment_0000001 * internal.V10 * ShP / (internal.K10 + ShP);
    dstatedt[28] = 0 + 1 * internal.compartment_0000001 * (internal.k8 * RShGS - internal.k_8 * ShGS * RP) - 1 * internal.compartment_0000001 * (internal.k9 * ShGS - internal.k_9 * GS * ShP);
    dstatedt[29] = 0 + 1 * internal.compartment_0000001 * (internal.k9 * ShGS - internal.k_9 * GS * ShP) - 1 * internal.compartment_0000001 * internal.V10 * ShP / (internal.K10 + ShP);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Akt", "AktPIP3", "AktPIP", "AktPIPP", "ERK", "ERKP", "ERKPP", "GS", "HRG", "MEK", "MEKP", "MEKPP", "PI3K", "PI3Kstar", "PIP3", "R", "RP", "RHRG", "RHRG2", "RPI3K", "RPI3Kstar", "RShGS", "RShP", "RShc", "Raf", "Rafstar", "RasGDP", "RasGTP", "ShGS", "ShP", "Shc", "P_I", "internalization"];
    this.metadata.internalOrder = {Akt_init: null, AktPIP_init: null, AktPIP3_init: null, AktPIPP_init: null, compartment_0000001: null, E: null, ERK_init: null, ERKP_init: null, ERKPP_init: null, GS_init: null, HRG_init: null, initial_Akt: null, initial_AktPIP: null, initial_AktPIP3: null, initial_AktPIPP: null, initial_ERK: null, initial_ERKP: null, initial_ERKPP: null, initial_GS: null, initial_HRG: null, initial_internalization: null, initial_MEK: null, initial_MEKP: null, initial_MEKPP: null, initial_P_I: null, initial_PI3K: null, initial_PI3Kstar: null, initial_PIP3: null, initial_R: null, initial_Raf: null, initial_Rafstar: null, initial_RasGDP: null, initial_RasGTP: null, initial_RHRG: null, initial_RHRG2: null, initial_RP: null, initial_RPI3K: null, initial_RPI3Kstar: null, initial_RShc: null, initial_RShGS: null, initial_RShP: null, initial_Shc: null, initial_ShGS: null, initial_ShP: null, internalization_init: null, k_1: null, k_2: null, k_23: null, k_24: null, k_25: null, k_29: null, k_3: null, k_34: null, k_5: null, k_6: null, k_7: null, k_8: null, k_9: null, k1: null, K10: null, k11: null, K11: null, K12: null, k13: null, K13: null, k14: null, K14: null, k15: null, K15: null, k16: null, K16: null, k17: null, K17: null, k18: null, K18: null, k19: null, K19: null, k2: null, k20: null, K20: null, k21: null, K21: null, k22: null, K22: null, k23: null, k24: null, k25: null, K26: null, k27: null, K27: null, K28: null, k29: null, k3: null, K30: null, k31: null, K31: null, K32: null, k33: null, K33: null, k34: null, K4: null, k5: null, k6: null, k7: null, k8: null, k9: null, MEK_init: null, MEKP_init: null, MEKPP_init: null, MKP3: null, P_I_init: null, PI3K_init: null, PI3Kstar_init: null, PIP3_init: null, PP2A: null, R_init: null, Raf_init: null, Rafstar_init: null, RasGDP_init: null, RasGTP_init: null, RHRG_init: null, RHRG2_init: null, RP_init: null, RPI3K_init: null, RPI3Kstar_init: null, RShc_init: null, RShGS_init: null, RShP_init: null, Shc_init: null, ShGS_init: null, ShP_init: null, V10: null, V12: null, V26: null, V28: null, V30: null, V32: null, V4: null};
    this.metadata.variableOrder = {Akt: null, AktPIP3: null, AktPIP: null, AktPIPP: null, ERK: null, ERKP: null, ERKPP: null, GS: null, HRG: null, MEK: null, MEKP: null, MEKPP: null, PI3K: null, PI3Kstar: null, PIP3: null, R: null, RP: null, RHRG: null, RHRG2: null, RPI3K: null, RPI3Kstar: null, RShGS: null, RShP: null, RShc: null, Raf: null, Rafstar: null, RasGDP: null, RasGTP: null, ShGS: null, ShP: null, Shc: null, P_I: null, internalization: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
