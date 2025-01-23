export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.VArt = 1.4994000000000001;
    internal.VGut = 1.1046;
    internal.VGutLumen = 1;
    internal.VKidney = 0.29399999999999998;
    internal.VKidneyTubules = 1;
    internal.VLiver = 1.7136;
    internal.VLung = 0.50819999999999999;
    internal.VRest = 33.469799999999999;
    internal.VVen = 3.4104000000000001;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(10).fill(0);
    state[0] = internal.initial_CArt;
    state[1] = internal.initial_CGut;
    state[2] = internal.initial_AGutlumen;
    state[3] = internal.initial_CLung;
    state[4] = internal.initial_CVen;
    state[5] = internal.initial_CRest;
    state[6] = internal.initial_CLiver;
    state[7] = internal.initial_CMetabolized;
    state[8] = internal.initial_CKidney;
    state[9] = internal.initial_CTubules;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["APAP_Dose", "APAP_Dose_grams", "APAP_MW", "BW", "BW_ref", "Cardiac_flow_ref", "CArt_init", "CGut_init", "CKidney_init", "CLiver_init", "CLmetabolism", "CLung_init", "CMetabolized_init", "CRest_init", "CTubules_init", "CVen_init", "Fraction_unbound_plasma", "kGutabs", "Kkidney2plasma", "Kliver2plasma", "KRest2plasma", "QCardiac", "Qgfr", "QGFR_ref", "QGut", "QGut_fraction_QCardiac", "QKidney", "QKidney_fraction_QCardiac", "QLiver", "QLiver_fraction_QCardiac", "QRest", "Ratioblood2plasma", "VArt_fraction_VTotal", "VGut_fraction_VTotal", "VKidney_fraction_VTotal", "VLiver_fraction_VTotal", "VLung_fraction_VTotal", "VTotal", "VTotal_ref", "VVen_fraction_VTotal"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "APAP_Dose", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "APAP_Dose_grams", internal, 1.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "APAP_MW", internal, 151.19999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "BW", internal, 70, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "BW_ref", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cardiac_flow_ref", internal, 15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CArt_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CGut_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CKidney_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CLiver_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CLmetabolism", internal, 9.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CLung_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CMetabolized_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CRest_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CTubules_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CVen_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Fraction_unbound_plasma", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kGutabs", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kkidney2plasma", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kliver2plasma", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KRest2plasma", internal, 1.6000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "QCardiac", internal, 363, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Qgfr", internal, 0.94379999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "QGFR_ref", internal, 0.039, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "QGut", internal, 74.420000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "QGut_fraction_QCardiac", internal, 0.20499999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "QKidney", internal, 80.370000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "QKidney_fraction_QCardiac", internal, 0.22140000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "QLiver", internal, 19.420000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "QLiver_fraction_QCardiac", internal, 0.053499999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "QRest", internal, 188.80000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ratioblood2plasma", internal, 1.0900000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VArt_fraction_VTotal", internal, 0.035700000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VGut_fraction_VTotal", internal, 0.0263, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VKidney_fraction_VTotal", internal, 0.0070000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VLiver_fraction_VTotal", internal, 0.040800000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VLung_fraction_VTotal", internal, 0.0121, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VTotal", internal, 42, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VTotal_ref", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VVen_fraction_VTotal", internal, 0.081199999999999994, -Infinity, Infinity, false);
    internal.AGutlumen_init = internal.APAP_Dose;
    internal.initial_CArt = internal.CArt_init;
    internal.initial_CGut = internal.CGut_init;
    internal.initial_CKidney = internal.CKidney_init;
    internal.initial_CLiver = internal.CLiver_init;
    internal.initial_CLung = internal.CLung_init;
    internal.initial_CMetabolized = internal.CMetabolized_init;
    internal.initial_CRest = internal.CRest_init;
    internal.initial_CTubules = internal.CTubules_init;
    internal.initial_CVen = internal.CVen_init;
    internal.initial_AGutlumen = internal.AGutlumen_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const CArt = state[0];
    const CGut = state[1];
    const AGutlumen = state[2];
    const CLung = state[3];
    const CVen = state[4];
    const CRest = state[5];
    const CLiver = state[6];
    const CKidney = state[8];
    dstatedt[2] = 0 - 1 * internal.kGutabs * AGutlumen;
    dstatedt[0] = 0 - 1 * internal.QGut / internal.VArt * CArt + 1 * internal.QCardiac / internal.VLung * CLung - 1 * internal.QRest * (CArt / internal.VArt) - 1 * internal.QLiver / internal.VArt * CArt - 1 * internal.QKidney / internal.VArt * CArt;
    dstatedt[1] = 0 + 1 * internal.QGut / internal.VArt * CArt + 1 * internal.kGutabs * AGutlumen - 1 * internal.QGut / internal.VGut * CGut;
    dstatedt[8] = 0 + 1 * internal.QKidney / internal.VArt * CArt - 1 * internal.Qgfr / internal.VKidney * CKidney / internal.Kkidney2plasma - 1 * internal.QKidney / internal.VKidney * CKidney * internal.Ratioblood2plasma / (internal.Kkidney2plasma * internal.Fraction_unbound_plasma);
    dstatedt[6] = 0 + 1 * internal.QLiver / internal.VArt * CArt - 1 * internal.CLmetabolism * CLiver / (internal.Kliver2plasma * internal.Fraction_unbound_plasma) + 1 * internal.QGut / internal.VGut * CGut - 1 * (internal.QLiver + internal.QGut) / internal.VLiver * CLiver * internal.Ratioblood2plasma / (internal.Kliver2plasma * internal.Fraction_unbound_plasma);
    dstatedt[3] = 0 - 1 * internal.QCardiac / internal.VLung * CLung + 1 * internal.QCardiac / internal.VVen * CVen;
    dstatedt[7] = 0 + 1 * internal.CLmetabolism * CLiver / (internal.Kliver2plasma * internal.Fraction_unbound_plasma);
    dstatedt[5] = 0 + 1 * internal.QRest * (CArt / internal.VArt) - 1 * internal.QRest / internal.VRest * CRest * internal.Ratioblood2plasma / (internal.KRest2plasma * internal.Fraction_unbound_plasma);
    dstatedt[9] = 0 + 1 * internal.Qgfr / internal.VKidney * CKidney / internal.Kkidney2plasma;
    dstatedt[4] = 0 - 1 * internal.QCardiac / internal.VVen * CVen + 1 * internal.QRest / internal.VRest * CRest * internal.Ratioblood2plasma / (internal.KRest2plasma * internal.Fraction_unbound_plasma) + 1 * (internal.QLiver + internal.QGut) / internal.VLiver * CLiver * internal.Ratioblood2plasma / (internal.Kliver2plasma * internal.Fraction_unbound_plasma) + 1 * internal.QKidney / internal.VKidney * CKidney * internal.Ratioblood2plasma / (internal.Kkidney2plasma * internal.Fraction_unbound_plasma);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "CArt", "CGut", "AGutlumen", "CLung", "CVen", "CRest", "CLiver", "CMetabolized", "CKidney", "CTubules"];
    this.metadata.internalOrder = {AGutlumen_init: null, APAP_Dose: null, APAP_Dose_grams: null, APAP_MW: null, BW: null, BW_ref: null, Cardiac_flow_ref: null, CArt_init: null, CGut_init: null, CKidney_init: null, CLiver_init: null, CLmetabolism: null, CLung_init: null, CMetabolized_init: null, CRest_init: null, CTubules_init: null, CVen_init: null, Fraction_unbound_plasma: null, initial_AGutlumen: null, initial_CArt: null, initial_CGut: null, initial_CKidney: null, initial_CLiver: null, initial_CLung: null, initial_CMetabolized: null, initial_CRest: null, initial_CTubules: null, initial_CVen: null, kGutabs: null, Kkidney2plasma: null, Kliver2plasma: null, KRest2plasma: null, QCardiac: null, Qgfr: null, QGFR_ref: null, QGut: null, QGut_fraction_QCardiac: null, QKidney: null, QKidney_fraction_QCardiac: null, QLiver: null, QLiver_fraction_QCardiac: null, QRest: null, Ratioblood2plasma: null, VArt: null, VArt_fraction_VTotal: null, VGut: null, VGut_fraction_VTotal: null, VGutLumen: null, VKidney: null, VKidney_fraction_VTotal: null, VKidneyTubules: null, VLiver: null, VLiver_fraction_VTotal: null, VLung: null, VLung_fraction_VTotal: null, VRest: null, VTotal: null, VTotal_ref: null, VVen: null, VVen_fraction_VTotal: null};
    this.metadata.variableOrder = {CArt: null, CGut: null, AGutlumen: null, CLung: null, CVen: null, CRest: null, CLiver: null, CMetabolized: null, CKidney: null, CTubules: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
