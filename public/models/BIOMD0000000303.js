export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(42).fill(0);
    state[0] = internal.initial_CRP;
    state[1] = internal.initial_PC;
    state[2] = internal.initial_PC_CRP;
    state[3] = internal.initial_C4;
    state[4] = internal.initial_C4a;
    state[5] = internal.initial_C4b;
    state[6] = internal.initial_C2;
    state[7] = internal.initial_C1;
    state[8] = internal.initial_PC_CRP_C1;
    state[9] = internal.initial_C2a;
    state[10] = internal.initial_C2b;
    state[11] = internal.initial_C4b_C2a;
    state[12] = internal.initial_C3;
    state[13] = internal.initial_C3a;
    state[14] = internal.initial_C3b;
    state[15] = internal.initial_dC3b;
    state[16] = internal.initial_MASP;
    state[17] = internal.initial_dC4b_C2a;
    state[18] = internal.initial_GlcNac;
    state[19] = internal.initial_GlcNac_LF;
    state[20] = internal.initial_LF;
    state[21] = internal.initial_GlcNac_LF_MASP;
    state[22] = internal.initial_PC_CRP_LF;
    state[23] = internal.initial_PC_CRP_LF_MASP;
    state[24] = internal.initial_GlcNac_LF_CRP;
    state[25] = internal.initial_GlcNac_LF_CRP_C1;
    state[26] = internal.initial_C4BP;
    state[27] = internal.initial_C4BP_PC_CRP;
    state[28] = internal.initial_C4BP_GlcNac_LF_CRP;
    state[29] = internal.initial_iC4b_C2a;
    state[30] = internal.initial_C4BP_C4b;
    state[31] = internal.initial_C4b_C2a_C4BP;
    state[32] = internal.initial_dC4b_C2a_C4BP;
    state[33] = internal.initial_PC_CRP_LF_C1;
    state[34] = internal.initial_C4BP_PC_CRP_LF;
    state[35] = internal.initial_GlcNac_LF_CRP_MASP;
    state[36] = internal.initial_PC_CRP_LF_C1_MASP;
    state[37] = internal.initial_GlcNac_LF_C1_MASP;
    state[38] = internal.initial_GlcNac_HF;
    state[39] = internal.initial_HF;
    state[40] = internal.initial_GlcNac_HF_MASP;
    state[41] = internal.initial_X;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["C1_init", "C2_init", "C2a_init", "C2b_init", "C3_init", "C3a_init", "C3b_init", "C4_init", "C4a_init", "C4b_C2a_C4BP_init", "C4b_C2a_init", "C4b_init", "C4BP_C4b_init", "C4BP_GlcNac_LF_CRP_init", "C4BP_init", "C4BP_PC_CRP_init", "C4BP_PC_CRP_LF_init", "CRP_init", "dC3b_init", "dC4b_C2a_C4BP_init", "dC4b_C2a_init", "GlcNac_HF_init", "GlcNac_HF_MASP_init", "GlcNac_init", "GlcNac_LF_C1_MASP_init", "GlcNac_LF_CRP_C1_init", "GlcNac_LF_CRP_init", "GlcNac_LF_CRP_MASP_init", "GlcNac_LF_init", "GlcNac_LF_MASP_init", "HF_init", "iC4b_C2a_init", "k1_4", "k2", "ka01_1", "ka01_2", "ka02_1", "ka02_2", "ka03_1", "ka03_2", "ka04_1", "ka04_2", "kb01_1", "kb01_2", "kb02_1", "kb02_2", "kb03_1", "kb03_2", "kb04_1", "kb04_2", "kc01_1", "kc01_2", "kc02", "kc03_1", "kc03_2", "kc04_1", "kc04_2", "kd01_1", "kd01_2", "kd02_1", "kd02_2", "kd03_1", "kd03_2", "kd04_1", "kd04_2", "kd05_1", "kd05_2", "kd06_1", "kd06_2", "kd07_1", "kd07_2", "kd08_1", "kd08_2", "kd09_1", "kd09_2", "kd10_1", "kd10_2", "kd11_1", "kd11_2", "ke01_1", "ke01_2", "ke02_1", "ke02_2", "ke03_1", "ke03_2", "ke04_1", "ke04_2", "ke05_1", "ke05_2", "ke06_1", "ke06_2", "ke07_1", "ke07_2", "kf01_1", "kf01_2", "kf02_1", "kf02_2", "kf03", "kf04_1", "kf04_2", "kf05", "kf06_1", "kf06_2", "kf07_1", "kf07_2", "kg01_1", "kg01_2", "kg02_1", "kg02_2", "kg03_1", "kg03_2", "kg04_1", "kg04_2", "kt01", "kt02", "kt03", "kt04_1", "kt04_2", "LF_init", "MASP_init", "PC_CRP_C1_init", "PC_CRP_init", "PC_CRP_LF_C1_init", "PC_CRP_LF_C1_MASP_init", "PC_CRP_LF_init", "PC_CRP_LF_MASP_init", "PC_init", "X_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "C1_init", internal, 2470, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C2_init", internal, 310, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C2a_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C2b_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C3_init", internal, 4650, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C3a_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C3b_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C4_init", internal, 770, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C4a_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C4b_C2a_C4BP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C4b_C2a_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C4b_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C4BP_C4b_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C4BP_GlcNac_LF_CRP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C4BP_init", internal, 260, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C4BP_PC_CRP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C4BP_PC_CRP_LF_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CRP_init", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dC3b_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dC4b_C2a_C4BP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dC4b_C2a_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GlcNac_HF_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GlcNac_HF_MASP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GlcNac_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GlcNac_LF_C1_MASP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GlcNac_LF_CRP_C1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GlcNac_LF_CRP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GlcNac_LF_CRP_MASP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GlcNac_LF_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GlcNac_LF_MASP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HF_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "iC4b_C2a_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1_4", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ka01_1", internal, 0.0275999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ka01_2", internal, 0.0109, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ka02_1", internal, 0.00073999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ka02_2", internal, 0.0011000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ka03_1", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ka03_2", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ka04_1", internal, 10.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ka04_2", internal, 2500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kb01_1", internal, 0.091011109910328999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kb01_2", internal, 0.0508205528375529, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kb02_1", internal, 0.036801079668263501, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kb02_2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kb03_1", internal, 66.377680739538306, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kb03_2", internal, 829.11581338906103, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kb04_1", internal, 1.1000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kb04_2", internal, 2000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kc01_1", internal, 0.64564661669101997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kc01_2", internal, 0.194551104058408, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kc02", internal, 0.00059115277585799402, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kc03_1", internal, 0.41400445994900198, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kc03_2", internal, 0.99647572245388005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kc04_1", internal, 0.97783656757689497, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kc04_2", internal, 0.19916243225852701, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd01_1", internal, 7.0699999999999997e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd01_2", internal, 7.2299999999999996e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd02_1", internal, 0.036801079668263501, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd02_2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd03_1", internal, 66.377680739538306, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd03_2", internal, 829.11581338906103, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd04_1", internal, 1.1000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd04_2", internal, 2000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd05_1", internal, 0.00073999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd05_2", internal, 0.0011000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd06_1", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd06_2", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd07_1", internal, 10.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd07_2", internal, 2500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd08_1", internal, 0.036801079668263501, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd08_2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd09_1", internal, 0.00073999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd09_2", internal, 0.0011000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd10_1", internal, 71.170576047593102, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd10_2", internal, 3796.2268437765501, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd11_1", internal, 38.962590348766703, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd11_2", internal, 5972.3064065786502, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ke01_1", internal, 7.0699999999999997e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ke01_2", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ke02_1", internal, 0.00073999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ke02_2", internal, 0.0011000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ke03_1", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ke03_2", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ke04_1", internal, 10.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ke04_2", internal, 2500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ke05_1", internal, 0.036801079668263501, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ke05_2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ke06_1", internal, 66.377680739538306, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ke06_2", internal, 829.11581338906103, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ke07_1", internal, 1.1000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ke07_2", internal, 2000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf01_1", internal, 0.96999827717314402, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf01_2", internal, 0.069020578737621005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf02_1", internal, 0.96999827717314402, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf02_2", internal, 0.069020578737621005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf03", internal, 0.061353720421584601, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf04_1", internal, 0.61341605042893799, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf04_2", internal, 0.98369120404215504, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf05", internal, 0.98077755893788399, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf06_1", internal, 0.61341605042893799, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf06_2", internal, 0.98369120404215504, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf07_1", internal, 0.61341605042893799, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf07_2", internal, 0.98369120404215504, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kg01_1", internal, 0.091011109910328999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kg01_2", internal, 0.0508205528375529, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kg02_1", internal, 0.036801079668263501, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kg02_2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kg03_1", internal, 66.377680739538306, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kg03_2", internal, 829.11581338906103, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kg04_1", internal, 1.1000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kg04_2", internal, 2000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kt01", internal, 0.00034226599999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kt02", internal, 0.49290099999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kt03", internal, 0.047091099999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kt04_1", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kt04_2", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "LF_init", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MASP_init", internal, 6.7999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PC_CRP_C1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PC_CRP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PC_CRP_LF_C1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PC_CRP_LF_C1_MASP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PC_CRP_LF_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PC_CRP_LF_MASP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PC_init", internal, 0.032779599999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_init", internal, 0.00050000000000000001, -Infinity, Infinity, false);
    internal.initial_C1 = internal.C1_init;
    internal.initial_C2 = internal.C2_init;
    internal.initial_C2a = internal.C2a_init;
    internal.initial_C2b = internal.C2b_init;
    internal.initial_C3 = internal.C3_init;
    internal.initial_C3a = internal.C3a_init;
    internal.initial_C3b = internal.C3b_init;
    internal.initial_C4 = internal.C4_init;
    internal.initial_C4a = internal.C4a_init;
    internal.initial_C4b = internal.C4b_init;
    internal.initial_C4b_C2a = internal.C4b_C2a_init;
    internal.initial_C4b_C2a_C4BP = internal.C4b_C2a_C4BP_init;
    internal.initial_C4BP = internal.C4BP_init;
    internal.initial_C4BP_C4b = internal.C4BP_C4b_init;
    internal.initial_C4BP_GlcNac_LF_CRP = internal.C4BP_GlcNac_LF_CRP_init;
    internal.initial_C4BP_PC_CRP = internal.C4BP_PC_CRP_init;
    internal.initial_C4BP_PC_CRP_LF = internal.C4BP_PC_CRP_LF_init;
    internal.initial_CRP = internal.CRP_init;
    internal.initial_dC3b = internal.dC3b_init;
    internal.initial_dC4b_C2a = internal.dC4b_C2a_init;
    internal.initial_dC4b_C2a_C4BP = internal.dC4b_C2a_C4BP_init;
    internal.initial_GlcNac = internal.GlcNac_init;
    internal.initial_GlcNac_HF = internal.GlcNac_HF_init;
    internal.initial_GlcNac_HF_MASP = internal.GlcNac_HF_MASP_init;
    internal.initial_GlcNac_LF = internal.GlcNac_LF_init;
    internal.initial_GlcNac_LF_C1_MASP = internal.GlcNac_LF_C1_MASP_init;
    internal.initial_GlcNac_LF_CRP = internal.GlcNac_LF_CRP_init;
    internal.initial_GlcNac_LF_CRP_C1 = internal.GlcNac_LF_CRP_C1_init;
    internal.initial_GlcNac_LF_CRP_MASP = internal.GlcNac_LF_CRP_MASP_init;
    internal.initial_GlcNac_LF_MASP = internal.GlcNac_LF_MASP_init;
    internal.initial_HF = internal.HF_init;
    internal.initial_iC4b_C2a = internal.iC4b_C2a_init;
    internal.initial_LF = internal.LF_init;
    internal.initial_MASP = internal.MASP_init;
    internal.initial_PC = internal.PC_init;
    internal.initial_PC_CRP = internal.PC_CRP_init;
    internal.initial_PC_CRP_C1 = internal.PC_CRP_C1_init;
    internal.initial_PC_CRP_LF = internal.PC_CRP_LF_init;
    internal.initial_PC_CRP_LF_C1 = internal.PC_CRP_LF_C1_init;
    internal.initial_PC_CRP_LF_C1_MASP = internal.PC_CRP_LF_C1_MASP_init;
    internal.initial_PC_CRP_LF_MASP = internal.PC_CRP_LF_MASP_init;
    internal.initial_X = internal.X_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const CRP = state[0];
    const PC = state[1];
    const PC_CRP = state[2];
    const C4 = state[3];
    const C4b = state[5];
    const C2 = state[6];
    const C1 = state[7];
    const PC_CRP_C1 = state[8];
    const C2a = state[9];
    const C4b_C2a = state[11];
    const C3 = state[12];
    const C3b = state[14];
    const dC3b = state[15];
    const MASP = state[16];
    const dC4b_C2a = state[17];
    const GlcNac = state[18];
    const GlcNac_LF = state[19];
    const LF = state[20];
    const GlcNac_LF_MASP = state[21];
    const PC_CRP_LF = state[22];
    const PC_CRP_LF_MASP = state[23];
    const GlcNac_LF_CRP = state[24];
    const GlcNac_LF_CRP_C1 = state[25];
    const C4BP = state[26];
    const C4BP_PC_CRP = state[27];
    const C4BP_GlcNac_LF_CRP = state[28];
    const C4BP_C4b = state[30];
    const C4b_C2a_C4BP = state[31];
    const dC4b_C2a_C4BP = state[32];
    const PC_CRP_LF_C1 = state[33];
    const C4BP_PC_CRP_LF = state[34];
    const GlcNac_LF_CRP_MASP = state[35];
    const PC_CRP_LF_C1_MASP = state[36];
    const GlcNac_HF = state[38];
    const HF = state[39];
    const GlcNac_HF_MASP = state[40];
    const X = state[41];
    dstatedt[37] = 0;
    dstatedt[7] = 0 - 1 * internal.compartment * (internal.ka02_1 * PC_CRP * C1 - internal.ka02_2 * PC_CRP_C1) - 1 * internal.compartment * (internal.ke02_1 * GlcNac_LF_CRP * C1 - internal.ke02_2 * GlcNac_LF_CRP_C1) - 1 * internal.compartment * (internal.kd05_1 * PC_CRP_LF * C1 - internal.kd05_2 * PC_CRP_LF_C1) - 1 * internal.compartment * (internal.kd09_1 * PC_CRP_LF_MASP * C1 - internal.kd09_2 * PC_CRP_LF_C1_MASP);
    dstatedt[6] = 0 - 1 * internal.compartment * (internal.ka04_1 * PC_CRP_C1 * C2 / (internal.ka04_2 + C2)) - 1 * internal.compartment * (internal.kd04_1 * PC_CRP_LF_MASP * C2 / (internal.kd04_2 + C2)) - 1 * internal.compartment * (internal.kb04_1 * GlcNac_LF_MASP * C2 / (internal.kb04_2 + C2)) - 1 * internal.compartment * (internal.ke04_1 * GlcNac_LF_CRP_C1 * C2 / (internal.ke04_2 + C2)) - 1 * internal.compartment * (internal.kd07_1 * PC_CRP_LF_C1 * C2 / (internal.kd07_2 + C2)) - 1 * internal.compartment * (internal.ke07_1 * GlcNac_LF_CRP_MASP * C2 / (internal.ke07_2 + C2)) - 1 * internal.compartment * (internal.kd11_1 * PC_CRP_LF_C1_MASP * C2 / (internal.kd11_2 + C2)) - 1 * internal.compartment * (internal.kg04_1 * GlcNac_HF_MASP * C2 / (internal.kg04_2 + C2));
    dstatedt[9] = 0 + 1 * internal.compartment * (internal.ka04_1 * PC_CRP_C1 * C2 / (internal.ka04_2 + C2)) - 1 * internal.compartment * (internal.kc01_1 * C4b * C2a - internal.kc01_2 * C4b_C2a) + 1 * internal.compartment * (internal.kd04_1 * PC_CRP_LF_MASP * C2 / (internal.kd04_2 + C2)) + 1 * internal.compartment * (internal.kb04_1 * GlcNac_LF_MASP * C2 / (internal.kb04_2 + C2)) + 1 * internal.compartment * (internal.ke04_1 * GlcNac_LF_CRP_C1 * C2 / (internal.ke04_2 + C2)) + 1 * internal.compartment * internal.kf05 * C4b_C2a * C4BP + 1 * internal.compartment * (internal.kd07_1 * PC_CRP_LF_C1 * C2 / (internal.kd07_2 + C2)) + 1 * internal.compartment * (internal.ke07_1 * GlcNac_LF_CRP_MASP * C2 / (internal.ke07_2 + C2)) + 1 * internal.compartment * (internal.kd11_1 * PC_CRP_LF_C1_MASP * C2 / (internal.kd11_2 + C2)) + 1 * internal.compartment * (internal.kg04_1 * GlcNac_HF_MASP * C2 / (internal.kg04_2 + C2));
    dstatedt[10] = 0 + 1 * internal.compartment * (internal.ka04_1 * PC_CRP_C1 * C2 / (internal.ka04_2 + C2)) + 1 * internal.compartment * (internal.kd04_1 * PC_CRP_LF_MASP * C2 / (internal.kd04_2 + C2)) + 1 * internal.compartment * (internal.kb04_1 * GlcNac_LF_MASP * C2 / (internal.kb04_2 + C2)) + 1 * internal.compartment * (internal.ke04_1 * GlcNac_LF_CRP_C1 * C2 / (internal.ke04_2 + C2)) + 1 * internal.compartment * (internal.kd07_1 * PC_CRP_LF_C1 * C2 / (internal.kd07_2 + C2)) + 1 * internal.compartment * (internal.ke07_1 * GlcNac_LF_CRP_MASP * C2 / (internal.ke07_2 + C2)) + 1 * internal.compartment * (internal.kd11_1 * PC_CRP_LF_C1_MASP * C2 / (internal.kd11_2 + C2)) + 1 * internal.compartment * (internal.kg04_1 * GlcNac_HF_MASP * C2 / (internal.kg04_2 + C2));
    dstatedt[12] = 0 - 1 * internal.compartment * internal.kc02 * C4b_C2a * C3;
    dstatedt[13] = 0 + 1 * internal.compartment * internal.kc02 * C4b_C2a * C3;
    dstatedt[14] = 0 + 1 * internal.compartment * internal.kc02 * C4b_C2a * C3 - 1 * internal.compartment * (internal.kc03_1 * C3b - internal.kc03_2 * dC3b) - 1 * internal.compartment * internal.k1_4 * C3b;
    dstatedt[3] = 0 - 1 * internal.compartment * (internal.ka03_1 * PC_CRP_C1 * C4 / (internal.ka03_2 + C4)) - 1 * internal.compartment * (internal.kd03_1 * PC_CRP_LF_MASP * C4 / (internal.kd03_2 + C4)) - 1 * internal.compartment * (internal.kb03_1 * GlcNac_LF_MASP * C4 / (internal.kb03_2 + C4)) - 1 * internal.compartment * (internal.ke03_1 * GlcNac_LF_CRP_C1 * C4 / (internal.ke03_2 + C4)) - 1 * internal.compartment * (internal.kd06_1 * PC_CRP_LF_C1 * C4 / (internal.kd06_2 + C4)) - 1 * internal.compartment * (internal.ke06_1 * GlcNac_LF_CRP_MASP * C4 / (internal.ke06_2 + C4)) - 1 * internal.compartment * (internal.kd10_1 * PC_CRP_LF_C1_MASP * C4 / (internal.kd10_2 + C4)) - 1 * internal.compartment * (internal.kg03_1 * GlcNac_HF_MASP * C4 / (internal.kg03_2 + C4));
    dstatedt[4] = 0 + 1 * internal.compartment * (internal.ka03_1 * PC_CRP_C1 * C4 / (internal.ka03_2 + C4)) + 1 * internal.compartment * (internal.kd03_1 * PC_CRP_LF_MASP * C4 / (internal.kd03_2 + C4)) + 1 * internal.compartment * (internal.kb03_1 * GlcNac_LF_MASP * C4 / (internal.kb03_2 + C4)) + 1 * internal.compartment * (internal.ke03_1 * GlcNac_LF_CRP_C1 * C4 / (internal.ke03_2 + C4)) + 1 * internal.compartment * (internal.kd06_1 * PC_CRP_LF_C1 * C4 / (internal.kd06_2 + C4)) + 1 * internal.compartment * (internal.ke06_1 * GlcNac_LF_CRP_MASP * C4 / (internal.ke06_2 + C4)) + 1 * internal.compartment * (internal.kd10_1 * PC_CRP_LF_C1_MASP * C4 / (internal.kd10_2 + C4)) + 1 * internal.compartment * (internal.kg03_1 * GlcNac_HF_MASP * C4 / (internal.kg03_2 + C4));
    dstatedt[5] = 0 + 1 * internal.compartment * (internal.ka03_1 * PC_CRP_C1 * C4 / (internal.ka03_2 + C4)) - 1 * internal.compartment * (internal.kc01_1 * C4b * C2a - internal.kc01_2 * C4b_C2a) + 1 * internal.compartment * (internal.kd03_1 * PC_CRP_LF_MASP * C4 / (internal.kd03_2 + C4)) + 1 * internal.compartment * (internal.kb03_1 * GlcNac_LF_MASP * C4 / (internal.kb03_2 + C4)) + 1 * internal.compartment * (internal.ke03_1 * GlcNac_LF_CRP_C1 * C4 / (internal.ke03_2 + C4)) - 1 * internal.compartment * (internal.kf04_1 * C4BP * C4b - internal.kf04_2 * C4BP_C4b) + 1 * internal.compartment * internal.kf05 * C4b_C2a * C4BP + 1 * internal.compartment * (internal.kd06_1 * PC_CRP_LF_C1 * C4 / (internal.kd06_2 + C4)) + 1 * internal.compartment * (internal.ke06_1 * GlcNac_LF_CRP_MASP * C4 / (internal.ke06_2 + C4)) + 1 * internal.compartment * (internal.kd10_1 * PC_CRP_LF_C1_MASP * C4 / (internal.kd10_2 + C4)) + 1 * internal.compartment * (internal.kg03_1 * GlcNac_HF_MASP * C4 / (internal.kg03_2 + C4));
    dstatedt[11] = 0 + 1 * internal.compartment * (internal.kc01_1 * C4b * C2a - internal.kc01_2 * C4b_C2a) - 1 * internal.compartment * internal.kc02 * C4b_C2a * C3 + 1 * internal.compartment * internal.kc02 * C4b_C2a * C3 - 1 * internal.compartment * (internal.kc04_1 * C4b_C2a - internal.kc04_2 * dC4b_C2a) - 1 * internal.compartment * internal.kf03 * C4b_C2a * C4BP - 1 * internal.compartment * internal.kf05 * C4b_C2a * C4BP - 1 * internal.compartment * (internal.kf06_1 * C4b_C2a * C4BP - internal.kf06_2 * C4b_C2a_C4BP) - 1 * internal.compartment * internal.k1_4 * C4b_C2a;
    dstatedt[31] = 0 + 1 * internal.compartment * (internal.kf06_1 * C4b_C2a * C4BP - internal.kf06_2 * C4b_C2a_C4BP);
    dstatedt[26] = 0 - 1 * internal.compartment * (internal.kf01_1 * C4BP * PC_CRP - internal.kf01_2 * C4BP_PC_CRP) - 1 * internal.compartment * (internal.kf02_1 * C4BP * GlcNac_LF_CRP - internal.kf02_2 * C4BP_GlcNac_LF_CRP) - 1 * internal.compartment * internal.kf03 * C4b_C2a * C4BP + 1 * internal.compartment * internal.kf03 * C4b_C2a * C4BP - 1 * internal.compartment * (internal.kf04_1 * C4BP * C4b - internal.kf04_2 * C4BP_C4b) - 1 * internal.compartment * internal.kf05 * C4b_C2a * C4BP + 1 * internal.compartment * internal.kf05 * C4b_C2a * C4BP - 1 * internal.compartment * (internal.kf06_1 * C4b_C2a * C4BP - internal.kf06_2 * C4b_C2a_C4BP) - 1 * internal.compartment * (internal.kf07_1 * dC4b_C2a * C4BP - internal.kf07_2 * dC4b_C2a_C4BP) - 1 * internal.compartment * internal.k1_4 * C4BP - 1 * internal.compartment * (internal.k1_4 * C4BP * PC_CRP_LF - internal.k2 * C4BP_PC_CRP_LF);
    dstatedt[30] = 0 + 1 * internal.compartment * (internal.kf04_1 * C4BP * C4b - internal.kf04_2 * C4BP_C4b);
    dstatedt[28] = 0 + 1 * internal.compartment * (internal.kf02_1 * C4BP * GlcNac_LF_CRP - internal.kf02_2 * C4BP_GlcNac_LF_CRP);
    dstatedt[27] = 0 + 1 * internal.compartment * (internal.kf01_1 * C4BP * PC_CRP - internal.kf01_2 * C4BP_PC_CRP);
    dstatedt[34] = 0 + 1 * internal.compartment * (internal.k1_4 * C4BP * PC_CRP_LF - internal.k2 * C4BP_PC_CRP_LF);
    dstatedt[0] = 0 - 1 * internal.compartment * (internal.ka01_1 * PC * CRP - internal.ka01_2 * PC_CRP) - 1 * internal.compartment * (internal.ke01_1 * GlcNac_LF * CRP - internal.ke01_2 * GlcNac_LF_CRP);
    dstatedt[15] = 0 + 1 * internal.compartment * (internal.kc03_1 * C3b - internal.kc03_2 * dC3b);
    dstatedt[17] = 0 + 1 * internal.compartment * (internal.kc04_1 * C4b_C2a - internal.kc04_2 * dC4b_C2a) - 1 * internal.compartment * (internal.kf07_1 * dC4b_C2a * C4BP - internal.kf07_2 * dC4b_C2a_C4BP);
    dstatedt[32] = 0 + 1 * internal.compartment * (internal.kf07_1 * dC4b_C2a * C4BP - internal.kf07_2 * dC4b_C2a_C4BP);
    dstatedt[18] = 0 - 1 * internal.compartment * (internal.kb01_1 * GlcNac * LF - internal.kb01_2 * GlcNac_LF);
    dstatedt[38] = 0 + 1 * internal.compartment * (internal.kg01_1 * X * HF - internal.kg01_2 * GlcNac_HF) - 1 * internal.compartment * (internal.kg02_1 * GlcNac_HF * MASP - internal.kg02_2 * GlcNac_HF_MASP);
    dstatedt[40] = 0 + 1 * internal.compartment * (internal.kg02_1 * GlcNac_HF * MASP - internal.kg02_2 * GlcNac_HF_MASP);
    dstatedt[19] = 0 + 1 * internal.compartment * (internal.kb01_1 * GlcNac * LF - internal.kb01_2 * GlcNac_LF) - 1 * internal.compartment * (internal.kb02_1 * GlcNac_LF * MASP - internal.kb02_2 * GlcNac_LF_MASP) - 1 * internal.compartment * (internal.ke01_1 * GlcNac_LF * CRP - internal.ke01_2 * GlcNac_LF_CRP);
    dstatedt[24] = 0 + 1 * internal.compartment * (internal.ke01_1 * GlcNac_LF * CRP - internal.ke01_2 * GlcNac_LF_CRP) - 1 * internal.compartment * (internal.ke02_1 * GlcNac_LF_CRP * C1 - internal.ke02_2 * GlcNac_LF_CRP_C1) - 1 * internal.compartment * (internal.kf02_1 * C4BP * GlcNac_LF_CRP - internal.kf02_2 * C4BP_GlcNac_LF_CRP) - 1 * internal.compartment * (internal.ke05_1 * GlcNac_LF_CRP * MASP - internal.ke05_2 * GlcNac_LF_CRP_MASP);
    dstatedt[25] = 0 + 1 * internal.compartment * (internal.ke02_1 * GlcNac_LF_CRP * C1 - internal.ke02_2 * GlcNac_LF_CRP_C1);
    dstatedt[35] = 0 + 1 * internal.compartment * (internal.ke05_1 * GlcNac_LF_CRP * MASP - internal.ke05_2 * GlcNac_LF_CRP_MASP);
    dstatedt[21] = 0 + 1 * internal.compartment * (internal.kb02_1 * GlcNac_LF * MASP - internal.kb02_2 * GlcNac_LF_MASP);
    dstatedt[39] = 0 - 1 * internal.compartment * (internal.kg01_1 * X * HF - internal.kg01_2 * GlcNac_HF);
    dstatedt[29] = 0 + 1 * internal.compartment * internal.kf03 * C4b_C2a * C4BP;
    dstatedt[20] = 0 - 1 * internal.compartment * (internal.kd01_1 * PC_CRP * LF - internal.kd01_2 * PC_CRP_LF) - 1 * internal.compartment * (internal.kb01_1 * GlcNac * LF - internal.kb01_2 * GlcNac_LF);
    dstatedt[16] = 0 - 1 * internal.compartment * (internal.kd02_1 * PC_CRP_LF * MASP - internal.kd02_2 * PC_CRP_LF_MASP) - 1 * internal.compartment * (internal.kb02_1 * GlcNac_LF * MASP - internal.kb02_2 * GlcNac_LF_MASP) - 1 * internal.compartment * (internal.ke05_1 * GlcNac_LF_CRP * MASP - internal.ke05_2 * GlcNac_LF_CRP_MASP) - 1 * internal.compartment * (internal.kd08_1 * PC_CRP_LF_C1 * MASP - internal.kd08_2 * PC_CRP_LF_C1_MASP) - 1 * internal.compartment * (internal.kg02_1 * GlcNac_HF * MASP - internal.kg02_2 * GlcNac_HF_MASP);
    dstatedt[1] = 0 - 1 * internal.compartment * (internal.ka01_1 * PC * CRP - internal.ka01_2 * PC_CRP);
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.ka01_1 * PC * CRP - internal.ka01_2 * PC_CRP) - 1 * internal.compartment * (internal.ka02_1 * PC_CRP * C1 - internal.ka02_2 * PC_CRP_C1) - 1 * internal.compartment * (internal.kd01_1 * PC_CRP * LF - internal.kd01_2 * PC_CRP_LF) - 1 * internal.compartment * (internal.kf01_1 * C4BP * PC_CRP - internal.kf01_2 * C4BP_PC_CRP);
    dstatedt[8] = 0 + 1 * internal.compartment * (internal.ka02_1 * PC_CRP * C1 - internal.ka02_2 * PC_CRP_C1);
    dstatedt[22] = 0 + 1 * internal.compartment * (internal.kd01_1 * PC_CRP * LF - internal.kd01_2 * PC_CRP_LF) - 1 * internal.compartment * (internal.kd02_1 * PC_CRP_LF * MASP - internal.kd02_2 * PC_CRP_LF_MASP) - 1 * internal.compartment * (internal.kd05_1 * PC_CRP_LF * C1 - internal.kd05_2 * PC_CRP_LF_C1) - 1 * internal.compartment * (internal.k1_4 * C4BP * PC_CRP_LF - internal.k2 * C4BP_PC_CRP_LF);
    dstatedt[33] = 0 + 1 * internal.compartment * (internal.kd05_1 * PC_CRP_LF * C1 - internal.kd05_2 * PC_CRP_LF_C1) - 1 * internal.compartment * (internal.kd08_1 * PC_CRP_LF_C1 * MASP - internal.kd08_2 * PC_CRP_LF_C1_MASP);
    dstatedt[36] = 0 + 1 * internal.compartment * (internal.kd08_1 * PC_CRP_LF_C1 * MASP - internal.kd08_2 * PC_CRP_LF_C1_MASP) + 1 * internal.compartment * (internal.kd09_1 * PC_CRP_LF_MASP * C1 - internal.kd09_2 * PC_CRP_LF_C1_MASP);
    dstatedt[23] = 0 + 1 * internal.compartment * (internal.kd02_1 * PC_CRP_LF * MASP - internal.kd02_2 * PC_CRP_LF_MASP) - 1 * internal.compartment * (internal.kd09_1 * PC_CRP_LF_MASP * C1 - internal.kd09_2 * PC_CRP_LF_C1_MASP);
    dstatedt[41] = 0 - 1 * internal.compartment * (internal.kg01_1 * X * HF - internal.kg01_2 * GlcNac_HF);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "CRP", "PC", "PC_CRP", "C4", "C4a", "C4b", "C2", "C1", "PC_CRP_C1", "C2a", "C2b", "C4b_C2a", "C3", "C3a", "C3b", "dC3b", "MASP", "dC4b_C2a", "GlcNac", "GlcNac_LF", "LF", "GlcNac_LF_MASP", "PC_CRP_LF", "PC_CRP_LF_MASP", "GlcNac_LF_CRP", "GlcNac_LF_CRP_C1", "C4BP", "C4BP_PC_CRP", "C4BP_GlcNac_LF_CRP", "iC4b_C2a", "C4BP_C4b", "C4b_C2a_C4BP", "dC4b_C2a_C4BP", "PC_CRP_LF_C1", "C4BP_PC_CRP_LF", "GlcNac_LF_CRP_MASP", "PC_CRP_LF_C1_MASP", "GlcNac_LF_C1_MASP", "GlcNac_HF", "HF", "GlcNac_HF_MASP", "X"];
    this.metadata.internalOrder = {C1_init: null, C2_init: null, C2a_init: null, C2b_init: null, C3_init: null, C3a_init: null, C3b_init: null, C4_init: null, C4a_init: null, C4b_C2a_C4BP_init: null, C4b_C2a_init: null, C4b_init: null, C4BP_C4b_init: null, C4BP_GlcNac_LF_CRP_init: null, C4BP_init: null, C4BP_PC_CRP_init: null, C4BP_PC_CRP_LF_init: null, compartment: null, CRP_init: null, dC3b_init: null, dC4b_C2a_C4BP_init: null, dC4b_C2a_init: null, GlcNac_HF_init: null, GlcNac_HF_MASP_init: null, GlcNac_init: null, GlcNac_LF_C1_MASP_init: null, GlcNac_LF_CRP_C1_init: null, GlcNac_LF_CRP_init: null, GlcNac_LF_CRP_MASP_init: null, GlcNac_LF_init: null, GlcNac_LF_MASP_init: null, HF_init: null, iC4b_C2a_init: null, initial_C1: null, initial_C2: null, initial_C2a: null, initial_C2b: null, initial_C3: null, initial_C3a: null, initial_C3b: null, initial_C4: null, initial_C4a: null, initial_C4b: null, initial_C4b_C2a: null, initial_C4b_C2a_C4BP: null, initial_C4BP: null, initial_C4BP_C4b: null, initial_C4BP_GlcNac_LF_CRP: null, initial_C4BP_PC_CRP: null, initial_C4BP_PC_CRP_LF: null, initial_CRP: null, initial_dC3b: null, initial_dC4b_C2a: null, initial_dC4b_C2a_C4BP: null, initial_GlcNac: null, initial_GlcNac_HF: null, initial_GlcNac_HF_MASP: null, initial_GlcNac_LF: null, initial_GlcNac_LF_C1_MASP: null, initial_GlcNac_LF_CRP: null, initial_GlcNac_LF_CRP_C1: null, initial_GlcNac_LF_CRP_MASP: null, initial_GlcNac_LF_MASP: null, initial_HF: null, initial_iC4b_C2a: null, initial_LF: null, initial_MASP: null, initial_PC: null, initial_PC_CRP: null, initial_PC_CRP_C1: null, initial_PC_CRP_LF: null, initial_PC_CRP_LF_C1: null, initial_PC_CRP_LF_C1_MASP: null, initial_PC_CRP_LF_MASP: null, initial_X: null, k1_4: null, k2: null, ka01_1: null, ka01_2: null, ka02_1: null, ka02_2: null, ka03_1: null, ka03_2: null, ka04_1: null, ka04_2: null, kb01_1: null, kb01_2: null, kb02_1: null, kb02_2: null, kb03_1: null, kb03_2: null, kb04_1: null, kb04_2: null, kc01_1: null, kc01_2: null, kc02: null, kc03_1: null, kc03_2: null, kc04_1: null, kc04_2: null, kd01_1: null, kd01_2: null, kd02_1: null, kd02_2: null, kd03_1: null, kd03_2: null, kd04_1: null, kd04_2: null, kd05_1: null, kd05_2: null, kd06_1: null, kd06_2: null, kd07_1: null, kd07_2: null, kd08_1: null, kd08_2: null, kd09_1: null, kd09_2: null, kd10_1: null, kd10_2: null, kd11_1: null, kd11_2: null, ke01_1: null, ke01_2: null, ke02_1: null, ke02_2: null, ke03_1: null, ke03_2: null, ke04_1: null, ke04_2: null, ke05_1: null, ke05_2: null, ke06_1: null, ke06_2: null, ke07_1: null, ke07_2: null, kf01_1: null, kf01_2: null, kf02_1: null, kf02_2: null, kf03: null, kf04_1: null, kf04_2: null, kf05: null, kf06_1: null, kf06_2: null, kf07_1: null, kf07_2: null, kg01_1: null, kg01_2: null, kg02_1: null, kg02_2: null, kg03_1: null, kg03_2: null, kg04_1: null, kg04_2: null, kt01: null, kt02: null, kt03: null, kt04_1: null, kt04_2: null, LF_init: null, MASP_init: null, PC_CRP_C1_init: null, PC_CRP_init: null, PC_CRP_LF_C1_init: null, PC_CRP_LF_C1_MASP_init: null, PC_CRP_LF_init: null, PC_CRP_LF_MASP_init: null, PC_init: null, X_init: null};
    this.metadata.variableOrder = {CRP: null, PC: null, PC_CRP: null, C4: null, C4a: null, C4b: null, C2: null, C1: null, PC_CRP_C1: null, C2a: null, C2b: null, C4b_C2a: null, C3: null, C3a: null, C3b: null, dC3b: null, MASP: null, dC4b_C2a: null, GlcNac: null, GlcNac_LF: null, LF: null, GlcNac_LF_MASP: null, PC_CRP_LF: null, PC_CRP_LF_MASP: null, GlcNac_LF_CRP: null, GlcNac_LF_CRP_C1: null, C4BP: null, C4BP_PC_CRP: null, C4BP_GlcNac_LF_CRP: null, iC4b_C2a: null, C4BP_C4b: null, C4b_C2a_C4BP: null, dC4b_C2a_C4BP: null, PC_CRP_LF_C1: null, C4BP_PC_CRP_LF: null, GlcNac_LF_CRP_MASP: null, PC_CRP_LF_C1_MASP: null, GlcNac_LF_C1_MASP: null, GlcNac_HF: null, HF: null, GlcNac_HF_MASP: null, X: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
