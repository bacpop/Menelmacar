export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.tumor_microenvironment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var CSC_Plot_init = internal.initial_CancerStemCell / 10000000;
    var CTL_Plot_init = internal.initial_CytotoxicTcell / 100;
    var Tumor_Plot_init = internal.initial_Tumor / 100000000;
    internal.initial_CSC_Plot = CSC_Plot_init;
    internal.initial_CTL_Plot = CTL_Plot_init;
    internal.initial_Tumor_Plot = Tumor_Plot_init;
    var state = Array(10).fill(0);
    state[0] = internal.initial_Tumor;
    state[1] = internal.initial_CancerStemCell;
    state[2] = internal.initial_CytotoxicTcell;
    state[3] = internal.initial_TGFb;
    state[4] = internal.initial_IFNy;
    state[5] = internal.initial_MHC1;
    state[6] = internal.initial_MHC2;
    state[7] = internal.initial_Tumor_Plot;
    state[8] = internal.initial_CSC_Plot;
    state[9] = internal.initial_CTL_Plot;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["abt", "am1y", "am2b", "am2y", "at", "atb", "ayc", "CancerStemCell_init", "CytotoxicTcell_init", "em1y", "em2b", "em2y", "et", "etb", "gb", "gm1", "ht", "IFNy_init", "k1", "k2", "MHC1_init", "MHC2_init", "N", "r1", "r2", "ra", "TGFb_init", "Tumor_init", "ub", "uc", "um1", "um2", "uy"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "abt", internal, 5.75e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "am1y", internal, 2.8799999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "am2b", internal, 0.012, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "am2y", internal, 8660, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "at", internal, 0.12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "atb", internal, 0.68999999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ayc", internal, 0.000102, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CancerStemCell_init", internal, 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CytotoxicTcell_init", internal, 250, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "em1y", internal, 338000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "em2b", internal, 100000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "em2y", internal, 1420, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "et", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "etb", internal, 10000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gb", internal, 63945, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gm1", internal, 1.4399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ht", internal, 500000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IFNy_init", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 100000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 10000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MHC1_init", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MHC2_init", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r1", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ra", internal, 0.0060000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TGFb_init", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tumor_init", internal, 70, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ub", internal, 7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "uc", internal, 0.0070000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "um1", internal, 0.0144, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "um2", internal, 0.0144, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "uy", internal, 0.10199999999999999, -Infinity, Infinity, false);
    internal.abs = internal.abt;
    internal.as = internal.at * 0.10000000000000001;
    internal.asb = internal.atb;
    internal.es = internal.et;
    internal.esb = internal.etb;
    internal.hs = internal.ht;
    internal.initial_CancerStemCell = internal.CancerStemCell_init;
    internal.initial_CytotoxicTcell = internal.CytotoxicTcell_init;
    internal.initial_IFNy = internal.IFNy_init;
    internal.initial_MHC1 = internal.MHC1_init;
    internal.initial_MHC2 = internal.MHC2_init;
    internal.initial_TGFb = internal.TGFb_init;
    internal.initial_Tumor = internal.Tumor_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Tumor = state[0];
    const CancerStemCell = state[1];
    const CytotoxicTcell = state[2];
    const TGFb = state[3];
    const IFNy = state[4];
    const MHC1 = state[5];
    const MHC2 = state[6];
    dstatedt[8] = 0 + 0;
    dstatedt[9] = 0 + 0;
    dstatedt[7] = 0 + 0;
    dstatedt[2] = 0 - 1 * internal.tumor_microenvironment * internal.uc * CytotoxicTcell + 1 * internal.tumor_microenvironment * (internal.N);
    dstatedt[4] = 0 + 1 * internal.tumor_microenvironment * (internal.ayc * CytotoxicTcell) - 1 * internal.tumor_microenvironment * internal.uy * IFNy;
    dstatedt[5] = 0 + 1 * internal.tumor_microenvironment * (internal.gm1) - 1 * internal.tumor_microenvironment * internal.um1 * MHC1 + 1 * internal.tumor_microenvironment * (internal.am1y * IFNy / (IFNy + internal.em1y));
    dstatedt[6] = 0 + 1 * internal.tumor_microenvironment * (internal.am2y * IFNy / (IFNy + internal.em2y) * (internal.em2b * (1 - internal.am2b) / (TGFb + internal.em2b) + internal.am2b)) - 1 * internal.tumor_microenvironment * internal.um2 * MHC2;
    dstatedt[0] = 0 + 1 * internal.tumor_microenvironment * (internal.r1 * Tumor * (1 - Tumor / internal.k1)) + 1 * internal.tumor_microenvironment * (internal.ra * (Tumor / internal.k1) * (CancerStemCell / internal.k2) * (internal.k1 - Tumor)) - 1 * internal.tumor_microenvironment * (internal.at * (MHC1 / (MHC1 + internal.etb)) * (internal.atb + internal.etb * (1 - internal.atb) / (TGFb + internal.etb)) * CytotoxicTcell * Tumor / (internal.ht + Tumor));
    dstatedt[1] = 0 - 1 * internal.tumor_microenvironment * (internal.ra * (Tumor / internal.k1) * (CancerStemCell / internal.k2) * (internal.k1 - Tumor)) + 1 * internal.tumor_microenvironment * (internal.r2 * CancerStemCell * (1 - CancerStemCell / internal.k2)) - 1 * internal.tumor_microenvironment * (internal.as * (MHC1 / (MHC1 + internal.esb)) * (internal.asb + internal.esb * (1 - internal.asb) / (TGFb + internal.esb)) * CytotoxicTcell * CancerStemCell / (internal.hs + CancerStemCell));
    dstatedt[3] = 0 + 1 * internal.tumor_microenvironment * (internal.gb) + 1 * internal.tumor_microenvironment * (internal.abt * Tumor) + 1 * internal.tumor_microenvironment * (internal.abs * CancerStemCell) - 1 * internal.tumor_microenvironment * internal.ub * TGFb;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Tumor", "CancerStemCell", "CytotoxicTcell", "TGFb", "IFNy", "MHC1", "MHC2", "Tumor_Plot", "CSC_Plot", "CTL_Plot"];
    this.metadata.internalOrder = {abs: null, abt: null, am1y: null, am2b: null, am2y: null, as: null, asb: null, at: null, atb: null, ayc: null, CancerStemCell_init: null, CytotoxicTcell_init: null, em1y: null, em2b: null, em2y: null, es: null, esb: null, et: null, etb: null, gb: null, gm1: null, hs: null, ht: null, IFNy_init: null, initial_CancerStemCell: null, initial_CSC_Plot: null, initial_CTL_Plot: null, initial_CytotoxicTcell: null, initial_IFNy: null, initial_MHC1: null, initial_MHC2: null, initial_TGFb: null, initial_Tumor: null, initial_Tumor_Plot: null, k1: null, k2: null, MHC1_init: null, MHC2_init: null, N: null, r1: null, r2: null, ra: null, TGFb_init: null, Tumor_init: null, tumor_microenvironment: null, ub: null, uc: null, um1: null, um2: null, uy: null};
    this.metadata.variableOrder = {Tumor: null, CancerStemCell: null, CytotoxicTcell: null, TGFb: null, IFNy: null, MHC1: null, MHC2: null, Tumor_Plot: null, CSC_Plot: null, CTL_Plot: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
