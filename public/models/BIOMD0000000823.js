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
    var state = Array(16).fill(0);
    state[0] = internal.initial_IR;
    state[1] = internal.initial_pIR;
    state[2] = internal.initial_IRS;
    state[3] = internal.initial_pIRS;
    state[4] = internal.initial_iIRS;
    state[5] = internal.initial_Akt;
    state[6] = internal.initial_pAkt;
    state[7] = internal.initial_mTORC1;
    state[8] = internal.initial_pmTORC1;
    state[9] = internal.initial_mTORC2;
    state[10] = internal.initial_pmTORC2;
    state[11] = internal.initial_imTORC2;
    state[12] = internal.initial_mTORC1_DEPTOR;
    state[13] = internal.initial_mTORC2_DEPTOR;
    state[14] = internal.initial_DEPTOR;
    state[15] = internal.initial_pDEPTOR;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Akt_init", "DEPTOR_init", "iIRS_init", "imTORC2_init", "IR_init", "IRS_init", "k11ca", "k11cb", "k13f", "k13r", "k14f", "k14r", "k15c", "k3c", "k5ca", "k5cb", "k7c", "k9c", "kd18", "Km1", "Km10", "Km11a", "Km11b", "Km12", "Km15", "Km16", "Km2", "Km3", "Km4", "Km5a", "Km5b", "Km6", "Km7", "Km8", "Km9", "ks17", "mTORC1_DEPTOR_init", "mTORC1_init", "mTORC2_DEPTOR_init", "mTORC2_init", "pAkt_init", "pDEPTOR_init", "pIR_init", "pIRS_init", "pmTORC1_init", "pmTORC2_init", "V1", "V10", "V12", "V16", "V2", "V4", "V6", "V8"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Akt_init", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DEPTOR_init", internal, 350, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "iIRS_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "imTORC2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IR_init", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IRS_init", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11ca", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11cb", internal, 0.13, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k13f", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k13r", internal, 0.0060000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k14f", internal, 0.0070000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k14r", internal, 0.0060000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k15c", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3c", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5ca", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5cb", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7c", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9c", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd18", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km1", internal, 95, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km10", internal, 7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km11a", internal, 120, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km11b", internal, 11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km12", internal, 7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km15", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km16", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km2", internal, 35, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km3", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km4", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km5a", internal, 7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km5b", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km6", internal, 34, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km7", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km8", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km9", internal, 160, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ks17", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mTORC1_DEPTOR_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mTORC1_init", internal, 250, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mTORC2_DEPTOR_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mTORC2_init", internal, 200, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pAkt_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pDEPTOR_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pIR_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pIRS_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pmTORC1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pmTORC2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V10", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V12", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V16", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V4", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V6", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V8", internal, 6, -Infinity, Infinity, false);
    internal.initial_Akt = internal.Akt_init;
    internal.initial_DEPTOR = internal.DEPTOR_init;
    internal.initial_iIRS = internal.iIRS_init;
    internal.initial_imTORC2 = internal.imTORC2_init;
    internal.initial_IR = internal.IR_init;
    internal.initial_IRS = internal.IRS_init;
    internal.initial_mTORC1 = internal.mTORC1_init;
    internal.initial_mTORC1_DEPTOR = internal.mTORC1_DEPTOR_init;
    internal.initial_mTORC2 = internal.mTORC2_init;
    internal.initial_mTORC2_DEPTOR = internal.mTORC2_DEPTOR_init;
    internal.initial_pAkt = internal.pAkt_init;
    internal.initial_pDEPTOR = internal.pDEPTOR_init;
    internal.initial_pIR = internal.pIR_init;
    internal.initial_pIRS = internal.pIRS_init;
    internal.initial_pmTORC1 = internal.pmTORC1_init;
    internal.initial_pmTORC2 = internal.pmTORC2_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const IR = state[0];
    const pIR = state[1];
    const IRS = state[2];
    const pIRS = state[3];
    const iIRS = state[4];
    const Akt = state[5];
    const pAkt = state[6];
    const mTORC1 = state[7];
    const pmTORC1 = state[8];
    const mTORC2 = state[9];
    const pmTORC2 = state[10];
    const mTORC1_DEPTOR = state[12];
    const mTORC2_DEPTOR = state[13];
    const DEPTOR = state[14];
    const pDEPTOR = state[15];
    dstatedt[11] = 0;
    dstatedt[5] = 0 - 1 * internal.compartment * (internal.k5ca * pIRS * Akt / (internal.Km5a + Akt) + internal.k5cb * pmTORC2 * Akt / (internal.Km5b + Akt)) + 1 * internal.compartment * (internal.V6 * pAkt / (internal.Km6 + pAkt));
    dstatedt[14] = 0 - 1 * internal.compartment * (internal.k11ca * pmTORC1 * DEPTOR / (internal.Km11a + pDEPTOR) + internal.k11cb * pmTORC2 * DEPTOR / (internal.Km11b + DEPTOR)) + 1 * internal.compartment * (internal.V12 * pDEPTOR / (internal.Km12 + pDEPTOR)) - 1 * internal.compartment * (internal.k13f * mTORC1 * DEPTOR - internal.k13r * mTORC1_DEPTOR) - 1 * internal.compartment * (internal.k14f * mTORC2 * DEPTOR - internal.k14r * mTORC2_DEPTOR) + 1 * internal.compartment * (internal.ks17);
    dstatedt[4] = 0 + 1 * internal.compartment * (internal.k15c * IRS * pmTORC1 / (internal.Km15 + IRS)) - 1 * internal.compartment * (internal.V16 * iIRS / (internal.Km16 + iIRS));
    dstatedt[0] = 0 - 1 * internal.compartment * (internal.V1 * IR / (internal.Km1 + IR)) + 1 * internal.compartment * (internal.V2 * pIR / (internal.Km2 + pIR));
    dstatedt[2] = 0 - 1 * internal.compartment * (internal.k3c * IRS * pIR / (internal.Km3 + IRS)) + 1 * internal.compartment * (internal.V4 * pIRS / (internal.Km4 + pIRS)) - 1 * internal.compartment * (internal.k15c * IRS * pmTORC1 / (internal.Km15 + IRS)) + 1 * internal.compartment * (internal.V16 * iIRS / (internal.Km16 + iIRS));
    dstatedt[7] = 0 - 1 * internal.compartment * (internal.k7c * mTORC1 * pAkt / (internal.Km7 + mTORC1)) + 1 * internal.compartment * (internal.V8 * pmTORC1 / (internal.Km8 + pmTORC1)) - 1 * internal.compartment * (internal.k13f * mTORC1 * DEPTOR - internal.k13r * mTORC1_DEPTOR);
    dstatedt[12] = 0 + 1 * internal.compartment * (internal.k13f * mTORC1 * DEPTOR - internal.k13r * mTORC1_DEPTOR);
    dstatedt[9] = 0 - 1 * internal.compartment * (internal.k9c * mTORC2 * pIR / (internal.Km9 + mTORC2)) + 1 * internal.compartment * (internal.V10 * pmTORC2 / (internal.Km10 + pmTORC2)) - 1 * internal.compartment * (internal.k14f * mTORC2 * DEPTOR - internal.k14r * mTORC2_DEPTOR);
    dstatedt[13] = 0 + 1 * internal.compartment * (internal.k14f * mTORC2 * DEPTOR - internal.k14r * mTORC2_DEPTOR);
    dstatedt[6] = 0 + 1 * internal.compartment * (internal.k5ca * pIRS * Akt / (internal.Km5a + Akt) + internal.k5cb * pmTORC2 * Akt / (internal.Km5b + Akt)) - 1 * internal.compartment * (internal.V6 * pAkt / (internal.Km6 + pAkt));
    dstatedt[15] = 0 + 1 * internal.compartment * (internal.k11ca * pmTORC1 * DEPTOR / (internal.Km11a + pDEPTOR) + internal.k11cb * pmTORC2 * DEPTOR / (internal.Km11b + DEPTOR)) - 1 * internal.compartment * (internal.V12 * pDEPTOR / (internal.Km12 + pDEPTOR)) - 1 * internal.compartment * internal.kd18 * pDEPTOR;
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.V1 * IR / (internal.Km1 + IR)) - 1 * internal.compartment * (internal.V2 * pIR / (internal.Km2 + pIR));
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.k3c * IRS * pIR / (internal.Km3 + IRS)) - 1 * internal.compartment * (internal.V4 * pIRS / (internal.Km4 + pIRS));
    dstatedt[8] = 0 + 1 * internal.compartment * (internal.k7c * mTORC1 * pAkt / (internal.Km7 + mTORC1)) - 1 * internal.compartment * (internal.V8 * pmTORC1 / (internal.Km8 + pmTORC1));
    dstatedt[10] = 0 + 1 * internal.compartment * (internal.k9c * mTORC2 * pIR / (internal.Km9 + mTORC2)) - 1 * internal.compartment * (internal.V10 * pmTORC2 / (internal.Km10 + pmTORC2));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "IR", "pIR", "IRS", "pIRS", "iIRS", "Akt", "pAkt", "mTORC1", "pmTORC1", "mTORC2", "pmTORC2", "imTORC2", "mTORC1_DEPTOR", "mTORC2_DEPTOR", "DEPTOR", "pDEPTOR"];
    this.metadata.internalOrder = {Akt_init: null, compartment: null, DEPTOR_init: null, iIRS_init: null, imTORC2_init: null, initial_Akt: null, initial_DEPTOR: null, initial_iIRS: null, initial_imTORC2: null, initial_IR: null, initial_IRS: null, initial_mTORC1: null, initial_mTORC1_DEPTOR: null, initial_mTORC2: null, initial_mTORC2_DEPTOR: null, initial_pAkt: null, initial_pDEPTOR: null, initial_pIR: null, initial_pIRS: null, initial_pmTORC1: null, initial_pmTORC2: null, IR_init: null, IRS_init: null, k11ca: null, k11cb: null, k13f: null, k13r: null, k14f: null, k14r: null, k15c: null, k3c: null, k5ca: null, k5cb: null, k7c: null, k9c: null, kd18: null, Km1: null, Km10: null, Km11a: null, Km11b: null, Km12: null, Km15: null, Km16: null, Km2: null, Km3: null, Km4: null, Km5a: null, Km5b: null, Km6: null, Km7: null, Km8: null, Km9: null, ks17: null, mTORC1_DEPTOR_init: null, mTORC1_init: null, mTORC2_DEPTOR_init: null, mTORC2_init: null, pAkt_init: null, pDEPTOR_init: null, pIR_init: null, pIRS_init: null, pmTORC1_init: null, pmTORC2_init: null, V1: null, V10: null, V12: null, V16: null, V2: null, V4: null, V6: null, V8: null};
    this.metadata.variableOrder = {IR: null, pIR: null, IRS: null, pIRS: null, iIRS: null, Akt: null, pAkt: null, mTORC1: null, pmTORC1: null, mTORC2: null, pmTORC2: null, imTORC2: null, mTORC1_DEPTOR: null, mTORC2_DEPTOR: null, DEPTOR: null, pDEPTOR: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
