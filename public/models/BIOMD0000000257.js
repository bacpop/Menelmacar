export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.env = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(11).fill(0);
    state[0] = internal.initial_S;
    state[1] = internal.initial_U;
    state[2] = internal.initial_T;
    state[3] = internal.initial_STU;
    state[4] = internal.initial_STUS;
    state[5] = internal.initial_STUST;
    state[6] = internal.initial_STUSU;
    state[7] = internal.initial_SU;
    state[8] = internal.initial_ST;
    state[9] = internal.initial_SUST;
    state[10] = internal.initial_SUSTU;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["k1", "k10", "k10r", "k1r", "k2", "k2r", "k3", "k3r", "k4", "k5", "k5r", "k6", "k6r", "k7", "k7r", "k9", "k9r", "S_init", "ST_init", "STU_init", "STUS_init", "STUST_init", "STUSU_init", "SU_init", "SUST_init", "SUSTU_init", "T_init", "U_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "k1", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10r", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1r", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2r", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3r", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5r", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6r", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7r", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9r", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ST_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "STU_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "STUS_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "STUST_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "STUSU_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SU_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SUST_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SUSTU_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "U_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_S = internal.S_init;
    internal.initial_ST = internal.ST_init;
    internal.initial_STU = internal.STU_init;
    internal.initial_STUS = internal.STUS_init;
    internal.initial_STUST = internal.STUST_init;
    internal.initial_STUSU = internal.STUSU_init;
    internal.initial_SU = internal.SU_init;
    internal.initial_SUST = internal.SUST_init;
    internal.initial_SUSTU = internal.SUSTU_init;
    internal.initial_T = internal.T_init;
    internal.initial_U = internal.U_init;
    internal.k11 = internal.k4;
    internal.k8 = internal.k4;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const S = state[0];
    const U = state[1];
    const T = state[2];
    const STU = state[3];
    const STUS = state[4];
    const STUST = state[5];
    const STUSU = state[6];
    const SU = state[7];
    const ST = state[8];
    const SUST = state[9];
    const SUSTU = state[10];
    dstatedt[0] = 0;
    dstatedt[2] = 0;
    dstatedt[1] = 0;
    dstatedt[3] = 0 - 1 * internal.env * (internal.k1 * S * STU - internal.k1r * STUS) + 1 * internal.env * (internal.k3 * STUST - internal.k3r * ST * STU) - 1 * internal.env * internal.k4 * STU + 1 * internal.env * (internal.k7 * SUSTU - internal.k7r * STU * SU) + 1 * internal.env * (internal.k10 * STUSU - internal.k10r * STU * SU);
    dstatedt[4] = 0 + 1 * internal.env * (internal.k1 * S * STU - internal.k1r * STUS) - 1 * internal.env * (internal.k2 * T * STUS - internal.k2r * STUST) - 1 * internal.env * (internal.k9 * U * STUS - internal.k9r * STUSU);
    dstatedt[5] = 0 + 1 * internal.env * (internal.k2 * T * STUS - internal.k2r * STUST) - 1 * internal.env * (internal.k3 * STUST - internal.k3r * ST * STU);
    dstatedt[6] = 0 + 1 * internal.env * (internal.k9 * U * STUS - internal.k9r * STUSU) - 1 * internal.env * (internal.k10 * STUSU - internal.k10r * STU * SU);
    dstatedt[9] = 0 + 1 * internal.env * (internal.k5 * ST * SU - internal.k5r * SUST) - 1 * internal.env * (internal.k6 * U * SUST - internal.k6r * SUSTU);
    dstatedt[10] = 0 + 1 * internal.env * (internal.k6 * U * SUST - internal.k6r * SUSTU) - 1 * internal.env * (internal.k7 * SUSTU - internal.k7r * STU * SU);
    dstatedt[8] = 0 + 1 * internal.env * (internal.k3 * STUST - internal.k3r * ST * STU) - 1 * internal.env * (internal.k5 * ST * SU - internal.k5r * SUST) - 1 * internal.env * internal.k11 * ST;
    dstatedt[7] = 0 - 1 * internal.env * (internal.k5 * ST * SU - internal.k5r * SUST) + 1 * internal.env * (internal.k7 * SUSTU - internal.k7r * STU * SU) - 1 * internal.env * internal.k8 * SU + 1 * internal.env * (internal.k10 * STUSU - internal.k10r * STU * SU);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "S", "U", "T", "STU", "STUS", "STUST", "STUSU", "SU", "ST", "SUST", "SUSTU"];
    this.metadata.internalOrder = {env: null, initial_S: null, initial_ST: null, initial_STU: null, initial_STUS: null, initial_STUST: null, initial_STUSU: null, initial_SU: null, initial_SUST: null, initial_SUSTU: null, initial_T: null, initial_U: null, k1: null, k10: null, k10r: null, k11: null, k1r: null, k2: null, k2r: null, k3: null, k3r: null, k4: null, k5: null, k5r: null, k6: null, k6r: null, k7: null, k7r: null, k8: null, k9: null, k9r: null, S_init: null, ST_init: null, STU_init: null, STUS_init: null, STUST_init: null, STUSU_init: null, SU_init: null, SUST_init: null, SUSTU_init: null, T_init: null, U_init: null};
    this.metadata.variableOrder = {S: null, U: null, T: null, STU: null, STUS: null, STUST: null, STUSU: null, SU: null, ST: null, SUST: null, SUSTU: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
