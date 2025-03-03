export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.default1 = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(10).fill(0);
    state[0] = internal.initial_srci;
    state[1] = internal.initial_srco;
    state[2] = internal.initial_srca;
    state[3] = internal.initial_srcc;
    state[4] = internal.initial_Cbp_P_CSK;
    state[5] = internal.initial_CSK_cytoplasm;
    state[6] = internal.initial_PTP;
    state[7] = internal.initial_PTP_pY789;
    state[8] = internal.initial_Cbp;
    state[9] = internal.initial_Cbp_P;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["acsk0", "Cbp_init", "Cbp_P_CSK_init", "Cbp_P_init", "CSK_cytoplasm_init", "k1", "k2", "k3", "k4", "kCbp", "kCSKoff", "kCSKon", "kPTP", "Kser", "p1", "p2", "p3", "PTP_background", "PTP_init", "PTP_pY789_init", "rho_srca", "rho_srcc", "rho_srco", "src_background", "srca_init", "srcc_init", "srci_init", "srco_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "acsk0", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cbp_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cbp_P_CSK_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cbp_P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CSK_cytoplasm_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kCbp", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kCSKoff", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kCSKon", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kPTP", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kser", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p1", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p2", internal, 0.14999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p3", internal, 0.035000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PTP_background", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PTP_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PTP_pY789_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho_srca", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho_srcc", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho_srco", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "src_background", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "srca_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "srcc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "srci_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "srco_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_Cbp = internal.Cbp_init;
    internal.initial_Cbp_P = internal.Cbp_P_init;
    internal.initial_Cbp_P_CSK = internal.Cbp_P_CSK_init;
    internal.initial_CSK_cytoplasm = internal.CSK_cytoplasm_init;
    internal.initial_PTP = internal.PTP_init;
    internal.initial_PTP_pY789 = internal.PTP_pY789_init;
    internal.initial_srca = internal.srca_init;
    internal.initial_srcc = internal.srcc_init;
    internal.initial_srci = internal.srci_init;
    internal.initial_srco = internal.srco_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const srci = state[0];
    const srco = state[1];
    const srca = state[2];
    const srcc = state[3];
    const Cbp_P_CSK = state[4];
    const CSK_cytoplasm = state[5];
    const PTP = state[6];
    const PTP_pY789 = state[7];
    const Cbp = state[8];
    const Cbp_P = state[9];
    dstatedt[4] = 0 + 1 * (Cbp_P * internal.kCSKon * CSK_cytoplasm - internal.kCSKoff * Cbp_P_CSK) * internal.default1;
    dstatedt[5] = 0 - 1 * (Cbp_P * internal.kCSKon * CSK_cytoplasm - internal.kCSKoff * Cbp_P_CSK) * internal.default1;
    var ptp_activity = internal.PTP_background + internal.Kser * PTP_pY789;
    var src_activity = internal.rho_srco * srco + internal.rho_srca * srca + internal.src_background + internal.rho_srcc * srcc;
    dstatedt[8] = 0 - 1 * internal.kCbp * src_activity * Cbp * internal.default1;
    dstatedt[9] = 0 - 1 * (Cbp_P * internal.kCSKon * CSK_cytoplasm - internal.kCSKoff * Cbp_P_CSK) * internal.default1 + 1 * internal.kCbp * src_activity * Cbp * internal.default1;
    dstatedt[6] = 0 - 1 * internal.default1 * ((internal.kPTP * src_activity + internal.p3) * PTP - internal.p2 * PTP_pY789);
    dstatedt[7] = 0 + 1 * internal.default1 * ((internal.kPTP * src_activity + internal.p3) * PTP - internal.p2 * PTP_pY789);
    dstatedt[2] = 0 + 1 * (internal.k3 * src_activity * srco - internal.p1 * srca) * internal.default1 - 1 * (internal.k1 * Cbp_P_CSK * srca - internal.k2 * ptp_activity * srcc) * internal.default1;
    dstatedt[3] = 0 + 1 * (internal.k1 * Cbp_P_CSK * srca - internal.k2 * ptp_activity * srcc) * internal.default1 - 1 * internal.default1 * internal.k4 * internal.p1 * srcc;
    dstatedt[0] = 0 - 1 * (internal.k2 * ptp_activity * srci - internal.k1 * Cbp_P_CSK * srco) * internal.default1 + 1 * internal.default1 * internal.k4 * internal.p1 * srcc;
    dstatedt[1] = 0 + 1 * (internal.k2 * ptp_activity * srci - internal.k1 * Cbp_P_CSK * srco) * internal.default1 - 1 * (internal.k3 * src_activity * srco - internal.p1 * srca) * internal.default1;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "srci", "srco", "srca", "srcc", "Cbp_P_CSK", "CSK_cytoplasm", "PTP", "PTP_pY789", "Cbp", "Cbp_P"];
    this.metadata.internalOrder = {acsk0: null, Cbp_init: null, Cbp_P_CSK_init: null, Cbp_P_init: null, CSK_cytoplasm_init: null, default1: null, initial_Cbp: null, initial_Cbp_P: null, initial_Cbp_P_CSK: null, initial_CSK_cytoplasm: null, initial_PTP: null, initial_PTP_pY789: null, initial_srca: null, initial_srcc: null, initial_srci: null, initial_srco: null, k1: null, k2: null, k3: null, k4: null, kCbp: null, kCSKoff: null, kCSKon: null, kPTP: null, Kser: null, p1: null, p2: null, p3: null, PTP_background: null, PTP_init: null, PTP_pY789_init: null, rho_srca: null, rho_srcc: null, rho_srco: null, src_background: null, srca_init: null, srcc_init: null, srci_init: null, srco_init: null};
    this.metadata.variableOrder = {srci: null, srco: null, srca: null, srcc: null, Cbp_P_CSK: null, CSK_cytoplasm: null, PTP: null, PTP_pY789: null, Cbp: null, Cbp_P: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
