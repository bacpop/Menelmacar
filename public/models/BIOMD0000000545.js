export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Hypctol = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(14).fill(0);
    state[0] = internal.initial_CS;
    state[1] = internal.initial_CD;
    state[2] = internal.initial_CDCS;
    state[3] = internal.initial_UVR8M;
    state[4] = internal.initial_UCS;
    state[5] = internal.initial_UVR8D;
    state[6] = internal.initial_RUP;
    state[7] = internal.initial_UR;
    state[8] = internal.initial_UVR8_M;
    state[9] = internal.initial_COP1;
    state[10] = internal.initial_HY5;
    state[11] = internal.initial_FHY3;
    state[12] = internal.initial_DWD;
    state[13] = internal.initial_CDW;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["CD_init", "CDCS_init", "CDW_init", "COP1_init", "CS_init", "DWD_init", "FHY3_init", "HY5_init", "k1", "k2", "ka1", "ka2", "ka3", "ka4", "kd1", "kd2", "kd3", "kd4", "kdr1", "kdr2", "kdr3", "kdr3a", "kdr3b", "ks1", "ks2", "ks3", "ksr", "n1", "n2", "n3", "RUP_init", "UCS_init", "UR_init", "UV", "UVR8_M_init", "UVR8D_init", "UVR8M_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "CD_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CDCS_init", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CDW_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "COP1_init", internal, 4.2000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CS_init", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DWD_init", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FHY3_init", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "HY5_init", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.0043, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 161.62, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ka1", internal, 0.037199999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ka2", internal, 0.061100000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ka3", internal, 4.7206999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ka4", internal, 10.128500000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd1", internal, 94.352400000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd2", internal, 50.697299999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd3", internal, 0.55079999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd4", internal, 1.1999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdr1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdr2", internal, 0.21179999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdr3", internal, 1.246, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdr3a", internal, 0.97350000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdr3b", internal, 0.40600000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ks1", internal, 0.23000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ks2", internal, 4.0526, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ks3", internal, 0.43969999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ksr", internal, 0.75370000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n1", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n2", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n3", internal, 3.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RUP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "UCS_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "UR_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "UV", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "UVR8_M_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "UVR8D_init", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "UVR8M_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_CD = internal.CD_init;
    internal.initial_CDCS = internal.CDCS_init;
    internal.initial_CDW = internal.CDW_init;
    internal.initial_COP1 = internal.COP1_init;
    internal.initial_CS = internal.CS_init;
    internal.initial_DWD = internal.DWD_init;
    internal.initial_FHY3 = internal.FHY3_init;
    internal.initial_HY5 = internal.HY5_init;
    internal.initial_RUP = internal.RUP_init;
    internal.initial_UCS = internal.UCS_init;
    internal.initial_UR = internal.UR_init;
    internal.initial_UVR8_M = internal.UVR8_M_init;
    internal.initial_UVR8D = internal.UVR8D_init;
    internal.initial_UVR8M = internal.UVR8M_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const CS = state[0];
    const CD = state[1];
    const CDCS = state[2];
    const UVR8M = state[3];
    const UCS = state[4];
    const UVR8D = state[5];
    const RUP = state[6];
    const UR = state[7];
    const HY5 = state[10];
    const FHY3 = state[11];
    const DWD = state[12];
    const CDW = state[13];
    dstatedt[9] = 0;
    dstatedt[11] = 0;
    dstatedt[8] = 0;
    dstatedt[1] = 0 - 1 * internal.ka2 * Math.pow((CS), (2)) * CD - internal.kd2 * CDCS - 1 * internal.ka4 * CD * DWD - internal.kd4 * CDW;
    dstatedt[2] = 0 + 1 * internal.ka2 * Math.pow((CS), (2)) * CD - internal.kd2 * CDCS;
    dstatedt[13] = 0 + 1 * internal.ka4 * CD * DWD - internal.kd4 * CDW;
    dstatedt[0] = 0 + 1 * internal.ks1 * (1 + internal.UV * internal.n3 * (HY5 + FHY3)) - internal.kdr1 * (1 + internal.n1 * internal.UV) * CS - 2 * internal.ka1 * Math.pow((CS), (2)) * Math.pow((UVR8M), (2)) - internal.kd1 * UCS - 2 * internal.ka2 * Math.pow((CS), (2)) * CD - internal.kd2 * CDCS;
    dstatedt[12] = 0 - 1 * internal.ka4 * CD * DWD - internal.kd4 * CDW;
    dstatedt[10] = 0 + 1 * internal.ks3 * (1 + internal.n2 * internal.UV) - internal.kdr3 * (CDCS / (internal.kdr3a + CDCS) + CDW / (internal.kdr3b + CDW) - UCS / (internal.ksr + UCS)) * HY5;
    dstatedt[6] = 0 + 1 * internal.ks2 * (1 + internal.UV * UCS) - internal.kdr2 * RUP - 1 * internal.ka3 * UVR8M * RUP + 2 * internal.kd3 * Math.pow((UR), (2));
    dstatedt[4] = 0 + 1 * internal.ka1 * Math.pow((CS), (2)) * Math.pow((UVR8M), (2)) - internal.kd1 * UCS;
    dstatedt[7] = 0 + 1 * internal.ka3 * UVR8M * RUP - 2 * internal.kd3 * Math.pow((UR), (2));
    dstatedt[5] = 0 + 1 * internal.k1 * Math.pow((UVR8M), (2)) + 1 * internal.kd3 * Math.pow((UR), (2)) - 1 * internal.k2 * UVR8D;
    dstatedt[3] = 0 - 2 * internal.k1 * Math.pow((UVR8M), (2)) - 2 * internal.ka1 * Math.pow((CS), (2)) * Math.pow((UVR8M), (2)) - internal.kd1 * UCS - 1 * internal.ka3 * UVR8M * RUP + 2 * internal.k2 * UVR8D;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "CS", "CD", "CDCS", "UVR8M", "UCS", "UVR8D", "RUP", "UR", "UVR8_M", "COP1", "HY5", "FHY3", "DWD", "CDW"];
    this.metadata.internalOrder = {CD_init: null, CDCS_init: null, CDW_init: null, COP1_init: null, CS_init: null, DWD_init: null, FHY3_init: null, HY5_init: null, Hypctol: null, initial_CD: null, initial_CDCS: null, initial_CDW: null, initial_COP1: null, initial_CS: null, initial_DWD: null, initial_FHY3: null, initial_HY5: null, initial_RUP: null, initial_UCS: null, initial_UR: null, initial_UVR8_M: null, initial_UVR8D: null, initial_UVR8M: null, k1: null, k2: null, ka1: null, ka2: null, ka3: null, ka4: null, kd1: null, kd2: null, kd3: null, kd4: null, kdr1: null, kdr2: null, kdr3: null, kdr3a: null, kdr3b: null, ks1: null, ks2: null, ks3: null, ksr: null, n1: null, n2: null, n3: null, RUP_init: null, UCS_init: null, UR_init: null, UV: null, UVR8_M_init: null, UVR8D_init: null, UVR8M_init: null};
    this.metadata.variableOrder = {CS: null, CD: null, CDCS: null, UVR8M: null, UCS: null, UVR8D: null, RUP: null, UR: null, UVR8_M: null, COP1: null, HY5: null, FHY3: null, DWD: null, CDW: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
