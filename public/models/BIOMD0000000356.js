export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.default1 = 1;
    internal.E = 0;
    internal.initial_G_p = 178;
    internal.initial_G_t = 135;
    internal.initial_I_1 = 25;
    internal.initial_I_d = 25;
    internal.initial_I_l = 4.5;
    internal.initial_I_p = 1.25;
    internal.initial_I_po = 3.6000000000000001;
    internal.initial_INS = 0;
    internal.initial_Q_gut = 0;
    internal.initial_Q_sto1 = 78000;
    internal.initial_Q_sto2 = 0;
    internal.initial_Y = 0;
    internal.K4 = 1400;
    internal.K8 = 0.01;
    internal.KD = 6.9999999999999999e-06;
    internal.S2 = 0;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(44).fill(0);
    state[0] = internal.initial_r0;
    state[1] = internal.initial_r1;
    state[2] = internal.initial_r2;
    state[3] = internal.initial_r11;
    state[4] = internal.initial_r12;
    state[5] = internal.initial_r22;
    state[6] = internal.initial_r1x2;
    state[7] = internal.initial_r11x2;
    state[8] = internal.initial_r1x22;
    state[9] = internal.initial_r1x22d;
    state[10] = internal.initial_r11x22;
    state[11] = internal.initial_rend;
    state[12] = internal.initial_rendP;
    state[13] = internal.initial_iendIR;
    state[14] = internal.initial_iend;
    state[15] = internal.initial_rPbasal;
    state[16] = internal.initial_IRS;
    state[17] = internal.initial_IRSiP;
    state[18] = internal.initial_X;
    state[19] = internal.initial_X_P;
    state[20] = internal.initial_PI3K;
    state[21] = internal.initial_PI3K_;
    state[22] = internal.initial_PDK1;
    state[23] = internal.initial_PDK1_;
    state[24] = internal.initial_PKC;
    state[25] = internal.initial_PKC_P;
    state[26] = internal.initial_PKB;
    state[27] = internal.initial_PKB_P;
    state[28] = internal.initial_mTOR;
    state[29] = internal.initial_mTOR_;
    state[30] = internal.initial_GLUT4_C;
    state[31] = internal.initial_GLUT4_M;
    state[32] = internal.initial_G_p;
    state[33] = internal.initial_G_t;
    state[34] = internal.initial_I_l;
    state[35] = internal.initial_I_p;
    state[36] = internal.initial_Q_sto1;
    state[37] = internal.initial_Q_sto2;
    state[38] = internal.initial_Q_gut;
    state[39] = internal.initial_I_1;
    state[40] = internal.initial_I_d;
    state[41] = internal.initial_INS;
    state[42] = internal.initial_I_po;
    state[43] = internal.initial_Y;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a1", "a2", "alpha", "b", "beta", "BW", "d", "D", "d1", "d2", "f", "G_b", "gamma", "GLUT4_C_init", "GLUT4_M_init", "HE_b", "I_b", "iend_init", "iendIR_init", "IRS_init", "IRSiP_init", "K", "k_1", "k_2", "k_abs", "k_e1", "k_e2", "k_glut1", "k_glut4", "k_gri", "k_i", "K_m0", "k_max", "k_min", "k_p1", "k_p2", "k_p3", "k_p4", "k21", "k22", "k23", "k24", "k2b", "k3b", "k3f", "k4b", "k4f", "k5b", "k5Basic", "k5BasicWb", "k5f", "k6b", "k6f", "k7b", "k7f", "k8b", "k8f", "k91", "k92", "k9b", "kbf", "Kcat", "Kcr", "Kdp", "Kend", "Kex", "kfbasal", "Km", "KmG1", "KmG4", "krbasal", "m_1", "m_2", "m_4", "m_5", "m_6", "mTOR__init", "mTOR_init", "p_2U", "part", "PDK1__init", "PDK1_init", "PI3K__init", "PI3K_init", "PKB_init", "PKB_P_init", "PKC_init", "PKC_P_init", "r0_init", "r1_init", "r11_init", "r11x2_init", "r11x22_init", "r12_init", "r1x2_init", "r1x22_init", "r1x22d_init", "r2_init", "r22_init", "rend_init", "rendP_init", "rPbasal_init", "S_b", "S_b_minus", "U_ii", "V_G", "V_I", "V_m0", "V_mX", "X_init", "X_P_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a1", internal, 448251462.71204001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a2", internal, 4321891.9032703098, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 0.81999999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 0.11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "BW", internal, 78, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "D", internal, 78000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d1", internal, 0.77226123420000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d2", internal, 0.0122057759, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G_b", internal, 95, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GLUT4_C_init", internal, 9.99316830771855, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GLUT4_M_init", internal, 0.0068316922814498802, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HE_b", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_b", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "iend_init", internal, 1.1322849756793401e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "iendIR_init", internal, 7.2551917892470704e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IRS_init", internal, 9.9998225360000692, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IRSiP_init", internal, 0.000177463999892648, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K", internal, 2.2999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_1", internal, 0.065000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_2", internal, 0.079000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_abs", internal, 0.057000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_e1", internal, 0.00050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_e2", internal, 339, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_glut1", internal, 0.29666510810000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_glut4", internal, 31.4211308621, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_gri", internal, 0.055800000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_i", internal, 0.0079000000000000008, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_m0", internal, 225.59, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_max", internal, 0.055800000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_min", internal, 0.0080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_p1", internal, 2.7000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_p2", internal, 0.0020999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_p3", internal, 0.0089999999999999993, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_p4", internal, 0.061800000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k21", internal, 0.0096458629999999993, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k22", internal, 2374.9773277896002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k23", internal, 0.1199031163, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k24", internal, 0.94308609720000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2b", internal, 608.58395854059995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3b", internal, 0.1895302156, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3f", internal, 8.1119350487999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4b", internal, 28137.0701606029, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4f", internal, 384885.68827788299, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5b", internal, 10052.508452120601, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5Basic", internal, 0.2040341054, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5BasicWb", internal, 2.3400000000000001e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5f", internal, 64300.071275085596, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6b", internal, 77.771210548499994, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6f", internal, 16094201.792656301, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7b", internal, 565342.162392942, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7f", internal, 4174.6300598326998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8b", internal, 300.75116564839999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8f", internal, 1515762.4188757101, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k91", internal, 8.1400000000000001e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k92", internal, 0.0280831426, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9b", internal, 4.0297596908999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kbf", internal, 0.003119389367, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kcat", internal, 237.51892204340001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kcr", internal, 0.0013640432, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kdp", internal, 0.00095008310000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kend", internal, 30.682511007700001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kex", internal, 37.081892484199997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kfbasal", internal, 0.49752158000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km", internal, 3.0181933401999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KmG1", internal, 132.77047191060001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KmG4", internal, 70.403202546399996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "krbasal", internal, 128042.884096176, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_1", internal, 0.19, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_2", internal, 0.48399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_4", internal, 0.19400000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_5", internal, 0.0304, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_6", internal, 0.64710000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mTOR__init", internal, 9.9798084988707192, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mTOR_init", internal, 0.020191501129293299, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_2U", internal, 0.033099999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "part", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PDK1__init", internal, 1.3412301526933801, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PDK1_init", internal, 8.6587698473066297, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PI3K__init", internal, 0.024216430333761401, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PI3K_init", internal, 9.9757835696662305, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PKB_init", internal, 9.9019314361730206, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PKB_P_init", internal, 0.098068563826994207, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PKC_init", internal, 3.6028359410272399e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PKC_P_init", internal, 9.9999639716405895, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r0_init", internal, 9.9682037930699803, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r1_init", internal, 0.022136604339986401, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r11_init", internal, 1.2288671196222199e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r11x2_init", internal, 1.5151391539076601e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r11x22_init", internal, 1.7872551533221901e-14, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r12_init", internal, 1.0376421415740999e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r1x2_init", internal, 1.3647581783769201e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r1x22_init", internal, 6.3935184948859604e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r1x22d_init", internal, 5.5923107931936899e-20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r2_init", internal, 0.0093492109473816906, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r22_init", internal, 2.1868330194558799e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rend_init", internal, 3.3171180381096098e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rendP_init", internal, 0.000212533941418487, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rPbasal_init", internal, 3.8723030935624703e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_b", internal, 1.8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_b_minus", internal, - 1.8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "U_ii", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_G", internal, 1.8799999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_I", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_m0", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_mX", internal, 0.047, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_init", internal, 9.9246324163474409, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_P_init", internal, 0.075367583652568196, -Infinity, Infinity, false);
    internal.aa = 5 / 2 / (1 - internal.b) / internal.D;
    internal.cc = 5 / 2 / internal.d / internal.D;
    internal.initial_GLUT4_C = internal.GLUT4_C_init;
    internal.initial_GLUT4_M = internal.GLUT4_M_init;
    internal.initial_iend = internal.iend_init;
    internal.initial_iendIR = internal.iendIR_init;
    internal.initial_IRS = internal.IRS_init;
    internal.initial_IRSiP = internal.IRSiP_init;
    internal.initial_mTOR = internal.mTOR_init;
    internal.initial_mTOR_ = internal.mTOR__init;
    internal.initial_PDK1 = internal.PDK1_init;
    internal.initial_PDK1_ = internal.PDK1__init;
    internal.initial_PI3K = internal.PI3K_init;
    internal.initial_PI3K_ = internal.PI3K__init;
    internal.initial_PKB = internal.PKB_init;
    internal.initial_PKB_P = internal.PKB_P_init;
    internal.initial_PKC = internal.PKC_init;
    internal.initial_PKC_P = internal.PKC_P_init;
    internal.initial_r0 = internal.r0_init;
    internal.initial_r1 = internal.r1_init;
    internal.initial_r11 = internal.r11_init;
    internal.initial_r11x2 = internal.r11x2_init;
    internal.initial_r11x22 = internal.r11x22_init;
    internal.initial_r12 = internal.r12_init;
    internal.initial_r1x2 = internal.r1x2_init;
    internal.initial_r1x22 = internal.r1x22_init;
    internal.initial_r1x22d = internal.r1x22d_init;
    internal.initial_r2 = internal.r2_init;
    internal.initial_r22 = internal.r22_init;
    internal.initial_rend = internal.rend_init;
    internal.initial_rendP = internal.rendP_init;
    internal.initial_rPbasal = internal.rPbasal_init;
    internal.initial_X = internal.X_init;
    internal.initial_X_P = internal.X_P_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const r0 = state[0];
    const r1 = state[1];
    const r2 = state[2];
    const r11 = state[3];
    const r12 = state[4];
    const r22 = state[5];
    const r1x2 = state[6];
    const r11x2 = state[7];
    const r1x22 = state[8];
    const r1x22d = state[9];
    const r11x22 = state[10];
    const rend = state[11];
    const rendP = state[12];
    const iendIR = state[13];
    const iend = state[14];
    const rPbasal = state[15];
    const IRS = state[16];
    const IRSiP = state[17];
    const X = state[18];
    const X_P = state[19];
    const PI3K = state[20];
    const PI3K_ = state[21];
    const PDK1 = state[22];
    const PDK1_ = state[23];
    const PKC = state[24];
    const PKC_P = state[25];
    const PKB = state[26];
    const PKB_P = state[27];
    const mTOR = state[28];
    const mTOR_ = state[29];
    const GLUT4_C = state[30];
    const GLUT4_M = state[31];
    const G_p = state[32];
    const G_t = state[33];
    const I_l = state[34];
    const I_p = state[35];
    const Q_sto1 = state[36];
    const Q_sto2 = state[37];
    const Q_gut = state[38];
    const I_1 = state[39];
    const I_d = state[40];
    const INS = state[41];
    const I_po = state[42];
    const Y = state[43];
    dstatedt[30] = 0 - 1 * internal.k91 * GLUT4_C * PKC_P + internal.k92 * GLUT4_C * PKB_P + internal.k5BasicWb * GLUT4_C + 1 * internal.k9b * GLUT4_M;
    dstatedt[31] = 0 + 1 * internal.k91 * GLUT4_C * PKC_P + internal.k92 * GLUT4_C * PKB_P + internal.k5BasicWb * GLUT4_C - 1 * internal.k9b * GLUT4_M;
    dstatedt[40] = - internal.k_i * (I_d - I_1);
    dstatedt[35] = - internal.m_2 * I_p - internal.m_4 * I_p + internal.m_1 * I_l;
    dstatedt[14] = 0 - 1 * internal.Kex * iend + 1 * (internal.Kdp + internal.Kcat * X_P / (internal.Km + X_P)) * iendIR;
    dstatedt[13] = 0 + 1 * internal.Kend * r1x2 + 2 * internal.Kend * r11x2 + 2 * internal.Kend * r1x22 + 3 * internal.Kend * r1x22d + 3 * internal.Kend * r11x22 - 1 * (internal.Kdp + internal.Kcat * X_P / (internal.Km + X_P)) * iendIR;
    dstatedt[16] = 0 - 1 * internal.k21 * IRS * (r1x2 + r11x2 + r1x22 + r1x22d + r11x22 + rPbasal + internal.k22 * rendP) * (1 + internal.k23 * PKC_P + internal.k24 * mTOR) + 1 * internal.k2b * IRSiP;
    dstatedt[17] = 0 + 1 * internal.k21 * IRS * (r1x2 + r11x2 + r1x22 + r1x22d + r11x22 + rPbasal + internal.k22 * rendP) * (1 + internal.k23 * PKC_P + internal.k24 * mTOR) - 1 * internal.k2b * IRSiP;
    dstatedt[28] = 0 - 1 * internal.k8f * mTOR * PKB_P + 1 * internal.k8b * mTOR_;
    dstatedt[29] = 0 + 1 * internal.k8f * mTOR * PKB_P - 1 * internal.k8b * mTOR_;
    dstatedt[22] = 0 - 1 * internal.k5f * PDK1 * PI3K_ + 1 * internal.k5b * PDK1_;
    dstatedt[23] = 0 + 1 * internal.k5f * PDK1 * PI3K_ - 1 * internal.k5b * PDK1_;
    dstatedt[20] = 0 - 1 * internal.k4f * PI3K * IRSiP + 1 * internal.k4b * PI3K_;
    dstatedt[21] = 0 + 1 * internal.k4f * PI3K * IRSiP - 1 * internal.k4b * PI3K_;
    dstatedt[26] = 0 - 1 * internal.k7f * PKB * PDK1_ + 1 * internal.k7b * PKB_P;
    dstatedt[27] = 0 + 1 * internal.k7f * PKB * PDK1_ - 1 * internal.k7b * PKB_P;
    dstatedt[24] = 0 - 1 * internal.k6f * PKC * PDK1_ + 1 * internal.k6b * PKC_P;
    dstatedt[25] = 0 + 1 * internal.k6f * PKC * PDK1_ - 1 * internal.k6b * PKC_P;
    dstatedt[36] = - internal.k_gri * Q_sto1;
    dstatedt[11] = 0 - 1 * internal.Kex * rend + 1 * (internal.Kdp + internal.Kcat * X_P / (internal.Km + X_P)) * rendP;
    dstatedt[12] = 0 + 1 * internal.Kend * r1x2 + 1 * internal.Kend * r11x2 + 1 * internal.Kend * r1x22 + 1 * internal.Kend * r1x22d + 1 * internal.Kend * r11x22 - 1 * (internal.Kdp + internal.Kcat * X_P / (internal.Km + X_P)) * rendP + 1 * internal.Kend * rPbasal;
    dstatedt[15] = 0 + 1 * internal.kfbasal * r0 - 1 * internal.krbasal * rPbasal - 1 * internal.Kend * rPbasal;
    dstatedt[18] = 0 - 1 * internal.k3f * X * IRSiP + 1 * internal.k3b * X_P;
    dstatedt[19] = 0 + 1 * internal.k3f * X * IRSiP - 1 * internal.k3b * X_P;
    var EGP = internal.k_p1 - internal.k_p2 * G_p - internal.k_p3 * I_d - internal.k_p4 * I_po;
    var G = G_p / internal.V_G;
    var I = I_p / internal.V_I;
    var Q_sto = Q_sto1 + Q_sto2;
    var Ra = internal.f * internal.k_abs * Q_gut / internal.BW;
    var S = internal.gamma * I_po;
    var S1 = (INS + 5) * 9.9999999999999998e-13;
    var V_mmax = (1 - internal.part) * (internal.V_m0 + internal.V_mX * INS);
    var vglucoseuptake = internal.k_glut1 * G_t / (internal.KmG1 + G_t) + internal.k_glut4 * GLUT4_M * G_t / (internal.KmG4 + G_t) + internal.kbf * (INS + 5);
    dstatedt[32] = EGP + Ra - internal.E - internal.U_ii - internal.k_1 * G_p + internal.k_2 * G_t;
    dstatedt[39] = - internal.k_i * (I_1 - I);
    dstatedt[41] = - internal.p_2U * INS + internal.p_2U * (I - internal.I_b);
    dstatedt[0] = 0 - 1 * 2 * internal.a1 * S1 * r0 - 1 * 2 * internal.a2 * S1 * r0 + 1 * internal.d1 * r1 + 1 * internal.d2 * r2 + 1 * internal.Kex * rend - 1 * internal.kfbasal * r0 + 1 * internal.krbasal * rPbasal;
    dstatedt[1] = 0 + 1 * 2 * internal.a1 * S1 * r0 - 1 * internal.a1 * S1 * r1 - 1 * internal.d1 * r1 - 1 * internal.a2 * S1 * r1 - 1 * internal.Kcr * r1 + 1 * 2 * internal.d1 * r11 + 1 * internal.d2 * r12 + 1 * internal.d2 * r1x2;
    dstatedt[3] = 0 + 1 * internal.a1 * S1 * r1 - 1 * 2 * internal.d1 * r11 - 1 * 2 * internal.Kcr * r11 + 1 * internal.d2 * r11x2;
    dstatedt[7] = 0 + 1 * internal.a1 * S1 * r1x2 + 1 * 2 * internal.Kcr * r11 + 1 * internal.Kcr * r12 - 1 * internal.d1 * r11x2 - 1 * internal.d2 * r11x2 - 1 * internal.d1 * r11x2 - 1 * internal.a2 * S1 * r11x2 + 1 * internal.d2 * r11x22 - 1 * internal.Kend * r11x2;
    dstatedt[10] = 0 + 1 * internal.a1 * S1 * r1x22 + 1 * internal.a2 * S1 * r11x2 - 1 * internal.d1 * r11x22 - 1 * internal.d2 * r11x22 - 1 * internal.Kend * r11x22;
    dstatedt[4] = 0 + 1 * internal.a1 * S1 * r2 + 1 * internal.a2 * S1 * r1 - 1 * internal.d1 * r12 - 1 * internal.d2 * r12 - 1 * internal.Kcr * r12 - 1 * internal.Kcr * r12 + 1 * internal.d2 * r1x22 + 1 * internal.d1 * r11x2;
    dstatedt[6] = 0 + 1 * internal.Kcr * r1 + 1 * internal.Kcr * r2 - 1 * internal.a1 * S1 * r1x2 - 1 * internal.a2 * S1 * r1x2 - 1 * internal.d2 * r1x2 - 1 * internal.d1 * r1x2 - 1 * internal.a2 * internal.S2 * r1x2 + 1 * internal.d1 * r11x2 + 1 * internal.d2 * r1x22 + 1 * internal.d2 * r1x22d - 1 * internal.Kend * r1x2;
    dstatedt[8] = 0 + 1 * internal.a2 * S1 * r1x2 + 1 * internal.Kcr * r12 + 1 * 2 * internal.Kcr * r22 - 1 * internal.d2 * r1x22 - 1 * internal.d2 * r1x22 - 1 * internal.d1 * r1x22 - 1 * internal.a1 * S1 * r1x22 - 1 * internal.K4 * S1 * r1x22 + 1 * internal.K8 * r1x22d + 1 * internal.d1 * r11x22 - 1 * internal.Kend * r1x22;
    dstatedt[9] = 0 + 1 * internal.a2 * internal.S2 * r1x2 + 1 * internal.K4 * S1 * r1x22 - 1 * internal.K8 * r1x22d - 1 * internal.d2 * r1x22d - 1 * internal.Kend * r1x22d;
    dstatedt[2] = 0 + 1 * 2 * internal.a2 * S1 * r0 - 1 * internal.a1 * S1 * r2 - 1 * internal.a2 * S1 * r2 - 1 * internal.d2 * r2 - 1 * internal.Kcr * r2 + 1 * internal.d1 * r12 + 1 * 2 * internal.d2 * r22 + 1 * internal.d1 * r1x2;
    dstatedt[5] = 0 + 1 * internal.a2 * S1 * r2 - 1 * 2 * internal.d2 * r22 - 1 * 2 * internal.Kcr * r22 + 1 * internal.d1 * r1x22;
    dstatedt[43] = - internal.alpha * (Y - internal.beta * (G - internal.G_b));
    var HE = - internal.m_5 * S + internal.m_6;
    var k_empt = internal.k_min + (internal.k_max - internal.k_min) / 2 * (Math.tanh(internal.aa * (Q_sto - internal.b * internal.D)) - Math.tanh(internal.cc * (Q_sto - internal.d * internal.D)) + 2);
    var S_po = Y + internal.K * (EGP + Ra - internal.E - internal.U_ii - internal.k_1 * G_p + internal.k_2 * G_t) / internal.V_G + internal.S_b;
    var U_idm = V_mmax * G_t / (internal.K_m0 + G_t);
    dstatedt[42] = - internal.gamma * I_po + S_po;
    dstatedt[38] = - internal.k_abs * Q_gut + k_empt * Q_sto2;
    dstatedt[37] = - k_empt * Q_sto2 + internal.k_gri * Q_sto1;
    var m_3 = HE * internal.m_1 / (1 - HE);
    var U_id = U_idm + vglucoseuptake;
    dstatedt[33] = - U_id + internal.k_1 * G_p - internal.k_2 * G_t;
    dstatedt[34] = - internal.m_1 * I_l - m_3 * I_l + internal.m_2 * I_p + S;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "r0", "r1", "r2", "r11", "r12", "r22", "r1x2", "r11x2", "r1x22", "r1x22d", "r11x22", "rend", "rendP", "iendIR", "iend", "rPbasal", "IRS", "IRSiP", "X", "X_P", "PI3K", "PI3K_", "PDK1", "PDK1_", "PKC", "PKC_P", "PKB", "PKB_P", "mTOR", "mTOR_", "GLUT4_C", "GLUT4_M", "G_p", "G_t", "I_l", "I_p", "Q_sto1", "Q_sto2", "Q_gut", "I_1", "I_d", "INS", "I_po", "Y"];
    this.metadata.internalOrder = {a1: null, a2: null, aa: null, alpha: null, b: null, beta: null, BW: null, cc: null, d: null, D: null, d1: null, d2: null, default1: null, E: null, f: null, G_b: null, gamma: null, GLUT4_C_init: null, GLUT4_M_init: null, HE_b: null, I_b: null, iend_init: null, iendIR_init: null, initial_G_p: null, initial_G_t: null, initial_GLUT4_C: null, initial_GLUT4_M: null, initial_I_1: null, initial_I_d: null, initial_I_l: null, initial_I_p: null, initial_I_po: null, initial_iend: null, initial_iendIR: null, initial_INS: null, initial_IRS: null, initial_IRSiP: null, initial_mTOR: null, initial_mTOR_: null, initial_PDK1: null, initial_PDK1_: null, initial_PI3K: null, initial_PI3K_: null, initial_PKB: null, initial_PKB_P: null, initial_PKC: null, initial_PKC_P: null, initial_Q_gut: null, initial_Q_sto1: null, initial_Q_sto2: null, initial_r0: null, initial_r1: null, initial_r11: null, initial_r11x2: null, initial_r11x22: null, initial_r12: null, initial_r1x2: null, initial_r1x22: null, initial_r1x22d: null, initial_r2: null, initial_r22: null, initial_rend: null, initial_rendP: null, initial_rPbasal: null, initial_X: null, initial_X_P: null, initial_Y: null, IRS_init: null, IRSiP_init: null, K: null, k_1: null, k_2: null, k_abs: null, k_e1: null, k_e2: null, k_glut1: null, k_glut4: null, k_gri: null, k_i: null, K_m0: null, k_max: null, k_min: null, k_p1: null, k_p2: null, k_p3: null, k_p4: null, k21: null, k22: null, k23: null, k24: null, k2b: null, k3b: null, k3f: null, K4: null, k4b: null, k4f: null, k5b: null, k5Basic: null, k5BasicWb: null, k5f: null, k6b: null, k6f: null, k7b: null, k7f: null, K8: null, k8b: null, k8f: null, k91: null, k92: null, k9b: null, kbf: null, Kcat: null, Kcr: null, KD: null, Kdp: null, Kend: null, Kex: null, kfbasal: null, Km: null, KmG1: null, KmG4: null, krbasal: null, m_1: null, m_2: null, m_4: null, m_5: null, m_6: null, mTOR__init: null, mTOR_init: null, p_2U: null, part: null, PDK1__init: null, PDK1_init: null, PI3K__init: null, PI3K_init: null, PKB_init: null, PKB_P_init: null, PKC_init: null, PKC_P_init: null, r0_init: null, r1_init: null, r11_init: null, r11x2_init: null, r11x22_init: null, r12_init: null, r1x2_init: null, r1x22_init: null, r1x22d_init: null, r2_init: null, r22_init: null, rend_init: null, rendP_init: null, rPbasal_init: null, S_b: null, S_b_minus: null, S2: null, U_ii: null, V_G: null, V_I: null, V_m0: null, V_mX: null, X_init: null, X_P_init: null};
    this.metadata.variableOrder = {r0: null, r1: null, r2: null, r11: null, r12: null, r22: null, r1x2: null, r11x2: null, r1x22: null, r1x22d: null, r11x22: null, rend: null, rendP: null, iendIR: null, iend: null, rPbasal: null, IRS: null, IRSiP: null, X: null, X_P: null, PI3K: null, PI3K_: null, PDK1: null, PDK1_: null, PKC: null, PKC_P: null, PKB: null, PKB_P: null, mTOR: null, mTOR_: null, GLUT4_C: null, GLUT4_M: null, G_p: null, G_t: null, I_l: null, I_p: null, Q_sto1: null, Q_sto2: null, Q_gut: null, I_1: null, I_d: null, INS: null, I_po: null, Y: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
