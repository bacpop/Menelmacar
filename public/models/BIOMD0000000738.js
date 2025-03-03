export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.BoneMarrow = 0.000214286;
    internal.Duodenum = 3.8461499999999998e-05;
    internal.FeOutside = 0;
    internal.Liver = 0.001161905;
    internal.Plasma = 0.0012999999999999999;
    internal.RBC = 0.00079000000000000001;
    internal.RestOfBody = 0.019694765999999999;
    internal.Spleen = 6.7307700000000006e-05;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(11).fill(0);
    state[0] = internal.initial_FeDuo;
    state[1] = internal.initial_FeRBC;
    state[2] = internal.initial_FeSpleen;
    state[3] = internal.initial_FeLiver;
    state[4] = internal.initial_Tf;
    state[5] = internal.initial_Hepcidin;
    state[6] = internal.initial_Fe2Tf;
    state[7] = internal.initial_Fe1Tf;
    state[8] = internal.initial_NTBI;
    state[9] = internal.initial_FeRest;
    state[10] = internal.initial_FeBM;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Avogadro", "Fe1Tf_init", "Fe2Tf_init", "FeBM_init", "FeDuo_init", "FeLiver_init", "FeRBC_init", "FeRest_init", "FeSpleen_init", "Hepcidin_init", "k1", "kBMSpleen", "kDuoLoss", "kFe1Tf_Fe2Tf", "Ki", "kInBM", "kInDuo", "kInLiver", "kInRBC", "kInRest", "Km", "kNTBI_Fe1Tf", "kRestLoss", "ModelValue_57_0", "NTBI_init", "quantity_to_number_factor", "Tf_init", "v", "vDiet", "VDuoNTBI", "VLiverNTBI", "vRBCSpleen", "VRestNTBI", "VSpleenNTBI"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Avogadro", internal, 6.0221417899999999e+23, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Fe1Tf_init", internal, 9.3533472405891505e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Fe2Tf_init", internal, 1.3524819675704799e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FeBM_init", internal, 0.00303783614844319, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FeDuo_init", internal, 0.011759056870631401, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FeLiver_init", internal, 0.0020001098121223801, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FeRBC_init", internal, 0.037979988757166502, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FeRest_init", internal, 0.00028684165634121703, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FeSpleen_init", internal, 0.0039423999012376696, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Hepcidin_init", internal, 2.3001745662293699e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.75616000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kBMSpleen", internal, 0.061902954378781003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kDuoLoss", internal, 0.027011330269821599, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kFe1Tf_Fe2Tf", internal, 1084322005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ki", internal, 1.0000000000000001e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kInBM", internal, 15.7690636138556, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kInDuo", internal, 0.068998422608153101, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kInLiver", internal, 2.9779054566767198, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kInRBC", internal, 1.0844758017670599, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kInRest", internal, 6.1635623535287296, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km", internal, 0.015942121866951299, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kNTBI_Fe1Tf", internal, 1084322005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kRestLoss", internal, 0.023533240736162999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_57_0", internal, 6.0221417899999999e+23, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NTBI_init", internal, 3.3311210465159003e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "quantity_to_number_factor", internal, 6.0221417899999999e+23, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tf_init", internal, 1.5821833083706e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v", internal, 2.3094199999999999e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vDiet", internal, 0.0041562400000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VDuoNTBI", internal, 0.20024189378681401, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VLiverNTBI", internal, 0.026114763800117499, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vRBCSpleen", internal, 0.0235286, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VRestNTBI", internal, 0.010945133520019801, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VSpleenNTBI", internal, 1.3422049229999999, -Infinity, Infinity, false);
    internal.initial_Fe1Tf = internal.Fe1Tf_init;
    internal.initial_Fe2Tf = internal.Fe2Tf_init;
    internal.initial_FeBM = internal.FeBM_init;
    internal.initial_FeDuo = internal.FeDuo_init;
    internal.initial_FeLiver = internal.FeLiver_init;
    internal.initial_FeRBC = internal.FeRBC_init;
    internal.initial_FeRest = internal.FeRest_init;
    internal.initial_FeSpleen = internal.FeSpleen_init;
    internal.initial_Hepcidin = internal.Hepcidin_init;
    internal.initial_NTBI = internal.NTBI_init;
    internal.initial_Tf = internal.Tf_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const FeDuo = state[0];
    const FeRBC = state[1];
    const FeSpleen = state[2];
    const FeLiver = state[3];
    const Tf = state[4];
    const Hepcidin = state[5];
    const Fe2Tf = state[6];
    const Fe1Tf = state[7];
    const NTBI = state[8];
    const FeRest = state[9];
    const FeBM = state[10];
    dstatedt[7] = 0 + 1 * internal.Plasma * internal.kNTBI_Fe1Tf * NTBI * Tf - 1 * internal.Plasma * internal.kFe1Tf_Fe2Tf * Fe1Tf * NTBI - 1 * (internal.kInLiver * Fe1Tf * internal.Plasma) - 1 * (internal.kInBM * Fe1Tf * internal.Plasma) - 1 * (internal.kInRest * Fe1Tf * internal.Plasma) - 1 * (internal.kInDuo * Fe1Tf * internal.Plasma);
    dstatedt[6] = 0 - 1 * (internal.kInBM * Fe2Tf * internal.Plasma) - 1 * (internal.kInLiver * Fe2Tf * internal.Plasma) - 1 * (internal.kInRest * Fe2Tf * internal.Plasma) - 1 * (internal.kInDuo * Fe2Tf * internal.Plasma) + 1 * internal.Plasma * internal.kFe1Tf_Fe2Tf * Fe1Tf * NTBI;
    dstatedt[10] = 0 + 2 * (internal.kInBM * Fe2Tf * internal.Plasma) + 1 * (internal.kInBM * Fe1Tf * internal.Plasma) - 1 * (internal.kInRBC * FeBM * internal.BoneMarrow) - 1 * (internal.kBMSpleen * FeBM * internal.BoneMarrow);
    dstatedt[0] = 0 + 1 * internal.Duodenum * (internal.vDiet) - 1 * (internal.VDuoNTBI * internal.Duodenum * FeDuo / ((internal.Km + FeDuo) * (1 + Hepcidin / internal.Ki))) - 1 * (internal.kDuoLoss * FeDuo * internal.Duodenum) + 2 * (internal.kInDuo * Fe2Tf * internal.Plasma) + 1 * (internal.kInDuo * Fe1Tf * internal.Plasma);
    dstatedt[3] = 0 - 1 * (internal.VLiverNTBI * internal.Liver * FeLiver / ((internal.Km + FeLiver) * (1 + Hepcidin / internal.Ki))) + 2 * (internal.kInLiver * Fe2Tf * internal.Plasma) + 1 * (internal.kInLiver * Fe1Tf * internal.Plasma);
    dstatedt[1] = 0 - 1 * (internal.vRBCSpleen * FeRBC * internal.RBC) + 1 * (internal.kInRBC * FeBM * internal.BoneMarrow);
    dstatedt[9] = 0 + 2 * (internal.kInRest * Fe2Tf * internal.Plasma) - 1 * internal.RestOfBody * internal.kRestLoss * FeRest - 1 * (internal.VRestNTBI * internal.RestOfBody * FeRest / ((internal.Km + FeRest) * (1 + Hepcidin / internal.Ki))) + 1 * (internal.kInRest * Fe1Tf * internal.Plasma);
    dstatedt[2] = 0 + 1 * (internal.vRBCSpleen * FeRBC * internal.RBC) - 1 * (internal.VSpleenNTBI * internal.Spleen * FeSpleen / ((internal.Km + FeSpleen) * (1 + Hepcidin / internal.Ki))) + 1 * (internal.kBMSpleen * FeBM * internal.BoneMarrow);
    dstatedt[5] = 0 + 1 * internal.Plasma * (internal.v) - 1 * internal.Plasma * internal.k1 * Hepcidin;
    dstatedt[8] = 0 + 1 * (internal.VDuoNTBI * internal.Duodenum * FeDuo / ((internal.Km + FeDuo) * (1 + Hepcidin / internal.Ki))) + 1 * (internal.VSpleenNTBI * internal.Spleen * FeSpleen / ((internal.Km + FeSpleen) * (1 + Hepcidin / internal.Ki))) + 1 * (internal.VLiverNTBI * internal.Liver * FeLiver / ((internal.Km + FeLiver) * (1 + Hepcidin / internal.Ki))) - 1 * internal.Plasma * internal.kNTBI_Fe1Tf * NTBI * Tf + 1 * (internal.VRestNTBI * internal.RestOfBody * FeRest / ((internal.Km + FeRest) * (1 + Hepcidin / internal.Ki))) - 1 * internal.Plasma * internal.kFe1Tf_Fe2Tf * Fe1Tf * NTBI;
    dstatedt[4] = 0 + 1 * (internal.kInBM * Fe2Tf * internal.Plasma) - 1 * internal.Plasma * internal.kNTBI_Fe1Tf * NTBI * Tf + 1 * (internal.kInLiver * Fe2Tf * internal.Plasma) + 1 * (internal.kInRest * Fe2Tf * internal.Plasma) + 1 * (internal.kInDuo * Fe2Tf * internal.Plasma) + 1 * (internal.kInLiver * Fe1Tf * internal.Plasma) + 1 * (internal.kInBM * Fe1Tf * internal.Plasma) + 1 * (internal.kInRest * Fe1Tf * internal.Plasma) + 1 * (internal.kInDuo * Fe1Tf * internal.Plasma);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "FeDuo", "FeRBC", "FeSpleen", "FeLiver", "Tf", "Hepcidin", "Fe2Tf", "Fe1Tf", "NTBI", "FeRest", "FeBM"];
    this.metadata.internalOrder = {Avogadro: null, BoneMarrow: null, Duodenum: null, Fe1Tf_init: null, Fe2Tf_init: null, FeBM_init: null, FeDuo_init: null, FeLiver_init: null, FeOutside: null, FeRBC_init: null, FeRest_init: null, FeSpleen_init: null, Hepcidin_init: null, initial_Fe1Tf: null, initial_Fe2Tf: null, initial_FeBM: null, initial_FeDuo: null, initial_FeLiver: null, initial_FeRBC: null, initial_FeRest: null, initial_FeSpleen: null, initial_Hepcidin: null, initial_NTBI: null, initial_Tf: null, k1: null, kBMSpleen: null, kDuoLoss: null, kFe1Tf_Fe2Tf: null, Ki: null, kInBM: null, kInDuo: null, kInLiver: null, kInRBC: null, kInRest: null, Km: null, kNTBI_Fe1Tf: null, kRestLoss: null, Liver: null, ModelValue_57_0: null, NTBI_init: null, Plasma: null, quantity_to_number_factor: null, RBC: null, RestOfBody: null, Spleen: null, Tf_init: null, v: null, vDiet: null, VDuoNTBI: null, VLiverNTBI: null, vRBCSpleen: null, VRestNTBI: null, VSpleenNTBI: null};
    this.metadata.variableOrder = {FeDuo: null, FeRBC: null, FeSpleen: null, FeLiver: null, Tf: null, Hepcidin: null, Fe2Tf: null, Fe1Tf: null, NTBI: null, FeRest: null, FeBM: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
