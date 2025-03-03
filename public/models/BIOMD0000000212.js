export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.AdoMet = 20;
    internal.AK1 = 0.25;
    internal.AK2 = 0.25;
    internal.AKHSDHI = 0.63;
    internal.AKHSDHII = 0.63;
    internal.ASADH = 11.6;
    internal.Asp = 1500;
    internal.c1 = 1;
    internal.CGS = 0.69999999999999996;
    internal.Cys = 15;
    internal.Cysta = 0;
    internal.DHDPS1 = 1.6000000000000001;
    internal.DHDPS2 = 1.6000000000000001;
    internal.Gly = 0;
    internal.HSK = 4;
    internal.IleTRNA = 0;
    internal.LKR = 0;
    internal.LysTRNA = 0;
    internal.Phosphate = 10000;
    internal.Sacc = 0;
    internal.TD = 0.35999999999999999;
    internal.THA = 0;
    internal.ThrTRNA = 0;
    internal.Val = 100;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(8).fill(0);
    state[0] = internal.initial_Lys;
    state[1] = internal.initial_AspP;
    state[2] = internal.initial_Thr;
    state[3] = internal.initial_ASA;
    state[4] = internal.initial_Hser;
    state[5] = internal.initial_PHser;
    state[6] = internal.initial_TS1;
    state[7] = internal.initial_Ile;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["AK1_AdoMet_Ka_app_exp", "AK1_kforward_app_exp", "AK1_kreverse_app_exp", "AK1_Lys_Ki_app_exp", "AK1_nH_exp", "AK2_kforward_app_exp", "AK2_kreverse_app_exp", "AK2_Lys_Ki_app_exp", "AK2_nH_exp", "AKI_kforward_app_exp", "AKI_kreverse_app_exp", "AKI_nH_exp", "AKI_Thr_Ki_app_exp", "AKII_kforward_app_exp", "AKII_kreverse_app_exp", "AKII_nH_exp", "AKII_Thr_Ki_app_exp", "ASA_init", "ASADH_kforward_app_exp", "ASADH_kreverse_app_exp", "AspP_init", "CGS_Cys_Km_exp", "CGS_kcat_exp", "CGS_Phosphate_Ki_exp", "CGS_Phser_Km_exp", "DHDPS1_k_app_exp", "DHDPS1_Lys_Ki_app_exp", "DHDPS1_nH_exp", "DHDPS2_k_app_exp", "DHDPS2_Lys_Ki_app_exp", "DHDPS2_nH_exp", "HSDHI_kforward_app_exp", "HSDHI_Thr_Ki_app_exp", "HSDHI_Thr_relative_inhibition_app_exp", "HSDHI_Thr_relative_residual_activity_app_exp", "HSDHII_kforward_app_exp", "HSDHII_Thr_Ki_app_exp", "HSDHII_Thr_relative_inhibition_app_exp", "HSDHII_Thr_relative_residual_activity_app_exp", "Hser_init", "HSK_Hser_app_exp", "HSK_kcat_app_exp", "Ile_init", "Ile_tRNAS_Ile_Km", "LKR_kcat_exp", "LKR_Lys_Km_exp", "Lys_init", "Lys_tRNAS_Lys_Km", "PHser_init", "TD_Ile_Ki_no_Val_app_exp", "TD_k_app_exp", "TD_nH_app_exp", "TD_Val_Ka1_app_exp", "TD_Val_Ka2_app_exp", "THA_kcat_exp", "THA_Thr_Km_exp", "Thr_init", "Thr_tRNAS_Thr_Km", "TS1_AdoMet_Ka1_exp", "TS1_AdoMet_Ka2_exp", "TS1_AdoMet_Ka3_exp", "TS1_AdoMet_Ka4_exp", "TS1_AdoMet_kcatmax_exp", "TS1_AdoMEt_Km_no_AdoMet_exp", "TS1_init", "TS1_kcatmin_exp", "TS1_nH_exp", "TS1_Phosphate_Ki_exp", "V_AA_RS"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "AK1_AdoMet_Ka_app_exp", internal, 3.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AK1_kforward_app_exp", internal, 5.6500000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AK1_kreverse_app_exp", internal, 1.6000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AK1_Lys_Ki_app_exp", internal, 550, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AK1_nH_exp", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AK2_kforward_app_exp", internal, 3.1499999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AK2_kreverse_app_exp", internal, 0.85999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AK2_Lys_Ki_app_exp", internal, 22, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AK2_nH_exp", internal, 1.1000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AKI_kforward_app_exp", internal, 0.35999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AKI_kreverse_app_exp", internal, 0.14999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AKI_nH_exp", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AKI_Thr_Ki_app_exp", internal, 124, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AKII_kforward_app_exp", internal, 1.3500000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AKII_kreverse_app_exp", internal, 0.22, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AKII_nH_exp", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AKII_Thr_Ki_app_exp", internal, 109, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ASA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ASADH_kforward_app_exp", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ASADH_kreverse_app_exp", internal, 0.23000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AspP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CGS_Cys_Km_exp", internal, 460, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CGS_kcat_exp", internal, 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CGS_Phosphate_Ki_exp", internal, 2000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CGS_Phser_Km_exp", internal, 2500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DHDPS1_k_app_exp", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DHDPS1_Lys_Ki_app_exp", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DHDPS1_nH_exp", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DHDPS2_k_app_exp", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DHDPS2_Lys_Ki_app_exp", internal, 33, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DHDPS2_nH_exp", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HSDHI_kforward_app_exp", internal, 0.83999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HSDHI_Thr_Ki_app_exp", internal, 400, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HSDHI_Thr_relative_inhibition_app_exp", internal, 0.85999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HSDHI_Thr_relative_residual_activity_app_exp", internal, 0.14000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HSDHII_kforward_app_exp", internal, 0.64000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HSDHII_Thr_Ki_app_exp", internal, 8500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HSDHII_Thr_relative_inhibition_app_exp", internal, 0.75, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HSDHII_Thr_relative_residual_activity_app_exp", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Hser_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HSK_Hser_app_exp", internal, 14, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HSK_kcat_app_exp", internal, 2.7999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ile_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ile_tRNAS_Ile_Km", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "LKR_kcat_exp", internal, 3.1000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "LKR_Lys_Km_exp", internal, 13000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Lys_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Lys_tRNAS_Lys_Km", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PHser_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TD_Ile_Ki_no_Val_app_exp", internal, 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TD_k_app_exp", internal, 0.0124, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TD_nH_app_exp", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TD_Val_Ka1_app_exp", internal, 73, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TD_Val_Ka2_app_exp", internal, 615, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "THA_kcat_exp", internal, 1.7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "THA_Thr_Km_exp", internal, 7100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Thr_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Thr_tRNAS_Thr_Km", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TS1_AdoMet_Ka1_exp", internal, 73, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TS1_AdoMet_Ka2_exp", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TS1_AdoMet_Ka3_exp", internal, 1.0900000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TS1_AdoMet_Ka4_exp", internal, 140, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TS1_AdoMet_kcatmax_exp", internal, 3.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TS1_AdoMEt_Km_no_AdoMet_exp", internal, 250, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TS1_init", internal, 7.4000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TS1_kcatmin_exp", internal, 0.41999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TS1_nH_exp", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TS1_Phosphate_Ki_exp", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_AA_RS", internal, 0.42999999999999999, -Infinity, Infinity, false);
    internal.initial_ASA = internal.ASA_init;
    internal.initial_AspP = internal.AspP_init;
    internal.initial_Hser = internal.Hser_init;
    internal.initial_Ile = internal.Ile_init;
    internal.initial_Lys = internal.Lys_init;
    internal.initial_PHser = internal.PHser_init;
    internal.initial_Thr = internal.Thr_init;
    internal.initial_TS1 = internal.TS1_init;
    internal.V_Ile_RS = internal.V_AA_RS;
    internal.V_Lys_RS = internal.V_AA_RS;
    internal.V_Thr_RS = internal.V_AA_RS;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Lys = state[0];
    const AspP = state[1];
    const Thr = state[2];
    const ASA = state[3];
    const Hser = state[4];
    const PHser = state[5];
    const TS1 = state[6];
    const Ile = state[7];
    dstatedt[6] = 0;
    dstatedt[3] = 0 + 1 * internal.c1 * internal.ASADH * (internal.ASADH_kforward_app_exp * AspP - internal.ASADH_kreverse_app_exp * ASA) - 1 * internal.c1 * internal.DHDPS1_k_app_exp * internal.DHDPS1 * ASA * (1 / (1 + Math.pow((Lys / internal.DHDPS1_Lys_Ki_app_exp), (internal.DHDPS1_nH_exp)))) - 1 * internal.c1 * internal.DHDPS2_k_app_exp * internal.DHDPS2 * ASA * (1 / (1 + Math.pow((Lys / internal.DHDPS2_Lys_Ki_app_exp), (internal.DHDPS2_nH_exp)))) - 1 * internal.c1 * internal.HSDHI_kforward_app_exp * internal.AKHSDHI * ASA * (internal.HSDHI_Thr_relative_residual_activity_app_exp + internal.HSDHI_Thr_relative_inhibition_app_exp / (1 + Thr / internal.HSDHI_Thr_Ki_app_exp)) - 1 * internal.c1 * internal.HSDHII_kforward_app_exp * internal.AKHSDHII * ASA * (internal.HSDHII_Thr_relative_residual_activity_app_exp + internal.HSDHII_Thr_relative_inhibition_app_exp / (1 + Thr / internal.HSDHII_Thr_Ki_app_exp));
    dstatedt[1] = 0 + 1 * internal.c1 * internal.AK1 * ((internal.AK1_kforward_app_exp - internal.AK1_kreverse_app_exp * AspP) / (1 + Math.pow((Lys / (internal.AK1_Lys_Ki_app_exp / (1 + internal.AdoMet / internal.AK1_AdoMet_Ka_app_exp))), (internal.AK1_nH_exp)))) + 1 * internal.c1 * internal.AK2 * ((internal.AK2_kforward_app_exp - internal.AK2_kreverse_app_exp * AspP) / (1 + Math.pow((Lys / internal.AK2_Lys_Ki_app_exp), (internal.AK2_nH_exp)))) + 1 * internal.c1 * internal.AKHSDHI * ((internal.AKI_kforward_app_exp - internal.AKI_kreverse_app_exp * AspP) / (1 + Math.pow((Thr / internal.AKI_Thr_Ki_app_exp), (internal.AKI_nH_exp)))) + 1 * internal.c1 * internal.AKHSDHII * ((internal.AKII_kforward_app_exp - internal.AKII_kreverse_app_exp * AspP) / (1 + Math.pow((Thr / internal.AKII_Thr_Ki_app_exp), (internal.AKII_nH_exp)))) - 1 * internal.c1 * internal.ASADH * (internal.ASADH_kforward_app_exp * AspP - internal.ASADH_kreverse_app_exp * ASA);
    dstatedt[4] = 0 + 1 * internal.c1 * internal.HSDHI_kforward_app_exp * internal.AKHSDHI * ASA * (internal.HSDHI_Thr_relative_residual_activity_app_exp + internal.HSDHI_Thr_relative_inhibition_app_exp / (1 + Thr / internal.HSDHI_Thr_Ki_app_exp)) + 1 * internal.c1 * internal.HSDHII_kforward_app_exp * internal.AKHSDHII * ASA * (internal.HSDHII_Thr_relative_residual_activity_app_exp + internal.HSDHII_Thr_relative_inhibition_app_exp / (1 + Thr / internal.HSDHII_Thr_Ki_app_exp)) - 1 * internal.c1 * internal.HSK_kcat_app_exp * internal.HSK * Hser / (internal.HSK_Hser_app_exp + Hser);
    dstatedt[5] = 0 + 1 * internal.c1 * internal.HSK_kcat_app_exp * internal.HSK * Hser / (internal.HSK_Hser_app_exp + Hser) - 1 * internal.c1 * TS1 * PHser * ((internal.TS1_kcatmin_exp + internal.TS1_AdoMet_kcatmax_exp * (Math.pow((internal.AdoMet), (internal.TS1_nH_exp)) / internal.TS1_AdoMet_Ka1_exp)) / (1 + Math.pow((internal.AdoMet), (internal.TS1_nH_exp)) / internal.TS1_AdoMet_Ka1_exp) / (internal.TS1_AdoMEt_Km_no_AdoMet_exp * ((1 + internal.AdoMet / internal.TS1_AdoMet_Ka2_exp) / (1 + internal.AdoMet / internal.TS1_AdoMet_Ka3_exp) / (1 + Math.pow((internal.AdoMet), (internal.TS1_nH_exp)) / internal.TS1_AdoMet_Ka4_exp)) * (1 + internal.Phosphate / internal.TS1_Phosphate_Ki_exp) + PHser)) - 1 * internal.c1 * internal.CGS * PHser * (internal.CGS_kcat_exp / (1 + internal.CGS_Cys_Km_exp / internal.Cys) / (internal.CGS_Phser_Km_exp / (1 + internal.CGS_Cys_Km_exp / internal.Cys) * (1 + internal.Phosphate / internal.CGS_Phosphate_Ki_exp) + PHser));
    dstatedt[7] = 0 + 1 * internal.c1 * internal.TD * Thr * (internal.TD_k_app_exp / (1 + Math.pow((Ile / (internal.TD_Ile_Ki_no_Val_app_exp + internal.TD_Val_Ka1_app_exp * internal.Val / (internal.TD_Val_Ka2_app_exp + internal.Val))), (internal.TD_nH_app_exp)))) - 1 * internal.c1 * internal.V_Ile_RS * Ile / (internal.Ile_tRNAS_Ile_Km + Ile);
    dstatedt[0] = 0 + 1 * internal.c1 * internal.DHDPS1_k_app_exp * internal.DHDPS1 * ASA * (1 / (1 + Math.pow((Lys / internal.DHDPS1_Lys_Ki_app_exp), (internal.DHDPS1_nH_exp)))) + 1 * internal.c1 * internal.DHDPS2_k_app_exp * internal.DHDPS2 * ASA * (1 / (1 + Math.pow((Lys / internal.DHDPS2_Lys_Ki_app_exp), (internal.DHDPS2_nH_exp)))) - 1 * internal.c1 * internal.V_Lys_RS * Lys / (internal.Lys_tRNAS_Lys_Km + Lys) - 1 * internal.c1 * internal.LKR_kcat_exp * internal.LKR * Lys / (internal.LKR_Lys_Km_exp + Lys);
    dstatedt[2] = 0 + 1 * internal.c1 * TS1 * PHser * ((internal.TS1_kcatmin_exp + internal.TS1_AdoMet_kcatmax_exp * (Math.pow((internal.AdoMet), (internal.TS1_nH_exp)) / internal.TS1_AdoMet_Ka1_exp)) / (1 + Math.pow((internal.AdoMet), (internal.TS1_nH_exp)) / internal.TS1_AdoMet_Ka1_exp) / (internal.TS1_AdoMEt_Km_no_AdoMet_exp * ((1 + internal.AdoMet / internal.TS1_AdoMet_Ka2_exp) / (1 + internal.AdoMet / internal.TS1_AdoMet_Ka3_exp) / (1 + Math.pow((internal.AdoMet), (internal.TS1_nH_exp)) / internal.TS1_AdoMet_Ka4_exp)) * (1 + internal.Phosphate / internal.TS1_Phosphate_Ki_exp) + PHser)) - 1 * internal.c1 * internal.TD * Thr * (internal.TD_k_app_exp / (1 + Math.pow((Ile / (internal.TD_Ile_Ki_no_Val_app_exp + internal.TD_Val_Ka1_app_exp * internal.Val / (internal.TD_Val_Ka2_app_exp + internal.Val))), (internal.TD_nH_app_exp)))) - 1 * internal.c1 * internal.V_Thr_RS * Thr / (internal.Thr_tRNAS_Thr_Km + Thr) - 1 * internal.c1 * internal.THA_kcat_exp * internal.THA * Thr / (internal.THA_Thr_Km_exp + Thr);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Lys", "AspP", "Thr", "ASA", "Hser", "PHser", "TS1", "Ile"];
    this.metadata.internalOrder = {AdoMet: null, AK1: null, AK1_AdoMet_Ka_app_exp: null, AK1_kforward_app_exp: null, AK1_kreverse_app_exp: null, AK1_Lys_Ki_app_exp: null, AK1_nH_exp: null, AK2: null, AK2_kforward_app_exp: null, AK2_kreverse_app_exp: null, AK2_Lys_Ki_app_exp: null, AK2_nH_exp: null, AKHSDHI: null, AKHSDHII: null, AKI_kforward_app_exp: null, AKI_kreverse_app_exp: null, AKI_nH_exp: null, AKI_Thr_Ki_app_exp: null, AKII_kforward_app_exp: null, AKII_kreverse_app_exp: null, AKII_nH_exp: null, AKII_Thr_Ki_app_exp: null, ASA_init: null, ASADH: null, ASADH_kforward_app_exp: null, ASADH_kreverse_app_exp: null, Asp: null, AspP_init: null, c1: null, CGS: null, CGS_Cys_Km_exp: null, CGS_kcat_exp: null, CGS_Phosphate_Ki_exp: null, CGS_Phser_Km_exp: null, Cys: null, Cysta: null, DHDPS1: null, DHDPS1_k_app_exp: null, DHDPS1_Lys_Ki_app_exp: null, DHDPS1_nH_exp: null, DHDPS2: null, DHDPS2_k_app_exp: null, DHDPS2_Lys_Ki_app_exp: null, DHDPS2_nH_exp: null, Gly: null, HSDHI_kforward_app_exp: null, HSDHI_Thr_Ki_app_exp: null, HSDHI_Thr_relative_inhibition_app_exp: null, HSDHI_Thr_relative_residual_activity_app_exp: null, HSDHII_kforward_app_exp: null, HSDHII_Thr_Ki_app_exp: null, HSDHII_Thr_relative_inhibition_app_exp: null, HSDHII_Thr_relative_residual_activity_app_exp: null, Hser_init: null, HSK: null, HSK_Hser_app_exp: null, HSK_kcat_app_exp: null, Ile_init: null, Ile_tRNAS_Ile_Km: null, IleTRNA: null, initial_ASA: null, initial_AspP: null, initial_Hser: null, initial_Ile: null, initial_Lys: null, initial_PHser: null, initial_Thr: null, initial_TS1: null, LKR: null, LKR_kcat_exp: null, LKR_Lys_Km_exp: null, Lys_init: null, Lys_tRNAS_Lys_Km: null, LysTRNA: null, Phosphate: null, PHser_init: null, Sacc: null, TD: null, TD_Ile_Ki_no_Val_app_exp: null, TD_k_app_exp: null, TD_nH_app_exp: null, TD_Val_Ka1_app_exp: null, TD_Val_Ka2_app_exp: null, THA: null, THA_kcat_exp: null, THA_Thr_Km_exp: null, Thr_init: null, Thr_tRNAS_Thr_Km: null, ThrTRNA: null, TS1_AdoMet_Ka1_exp: null, TS1_AdoMet_Ka2_exp: null, TS1_AdoMet_Ka3_exp: null, TS1_AdoMet_Ka4_exp: null, TS1_AdoMet_kcatmax_exp: null, TS1_AdoMEt_Km_no_AdoMet_exp: null, TS1_init: null, TS1_kcatmin_exp: null, TS1_nH_exp: null, TS1_Phosphate_Ki_exp: null, V_AA_RS: null, V_Ile_RS: null, V_Lys_RS: null, V_Thr_RS: null, Val: null};
    this.metadata.variableOrder = {Lys: null, AspP: null, Thr: null, ASA: null, Hser: null, PHser: null, TS1: null, Ile: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
