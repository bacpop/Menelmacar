export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cytoplasm = 1;
    internal.K_1P = 2;
    internal.K_1T = 2;
    internal.K_2P = 2;
    internal.K_2T = 2;
    internal.K_3P = 2;
    internal.K_3T = 2;
    internal.K_4P = 2;
    internal.K_4T = 2;
    internal.K_dP = 0.20000000000000001;
    internal.K_dT = 0.20000000000000001;
    internal.K_mP = 0.20000000000000001;
    internal.K_mT = 0.20000000000000001;
    internal.k_sP = 0.90000000000000002;
    internal.k_sT = 0.90000000000000002;
    internal.k1 = 1.2;
    internal.k2 = 0.20000000000000001;
    internal.k3 = 1.2;
    internal.k4 = 0.59999999999999998;
    internal.kd_C = 0.01;
    internal.kd_CN = 0.01;
    internal.Ki_P = 1;
    internal.Ki_T = 1;
    internal.nucleus = 1;
    internal.pi = 3.1415929999999999;
    internal.V_1P = 8;
    internal.V_1T = 8;
    internal.V_2P = 1;
    internal.V_2T = 1;
    internal.V_3P = 8;
    internal.V_3T = 8;
    internal.V_4P = 1;
    internal.V_4T = 1;
    internal.v_dP = 2;
    internal.v_mP = 0.80000000000000004;
    internal.v_mT = 0.69999999999999996;
    internal.v_sP = 0.80000000000000004;
    internal.v_sT = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var Pt_init = internal.initial_P0 + internal.initial_P1 + internal.initial_P2 + internal.initial_C + internal.initial_CN * internal.nucleus / internal.cytoplasm;
    var Tt_init = internal.initial_T0 + internal.initial_T1 + internal.initial_T2 + internal.initial_C + internal.initial_CN * internal.nucleus / internal.cytoplasm;
    internal.initial_Pt = Pt_init;
    internal.initial_Tt = Tt_init;
    var state = Array(12).fill(0);
    state[0] = internal.initial_M_T;
    state[1] = internal.initial_M_P;
    state[2] = internal.initial_T0;
    state[3] = internal.initial_T1;
    state[4] = internal.initial_T2;
    state[5] = internal.initial_P0;
    state[6] = internal.initial_P1;
    state[7] = internal.initial_P2;
    state[8] = internal.initial_C;
    state[9] = internal.initial_CN;
    state[10] = internal.initial_Tt;
    state[11] = internal.initial_Pt;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["C_init", "CN_init", "kd", "l_d", "M_P_init", "M_T_init", "n", "P0_init", "P1_init", "P2_init", "T0_init", "T1_init", "T2_init", "v_dT_dark", "v_dT_fac"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "C_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CN_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "l_d", internal, 12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_T_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v_dT_dark", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v_dT_fac", internal, 2, -Infinity, Infinity, false);
    internal.initial_C = internal.C_init;
    internal.initial_CN = internal.CN_init;
    internal.initial_M_P = internal.M_P_init;
    internal.initial_M_T = internal.M_T_init;
    internal.initial_P0 = internal.P0_init;
    internal.initial_P1 = internal.P1_init;
    internal.initial_P2 = internal.P2_init;
    internal.initial_T0 = internal.T0_init;
    internal.initial_T1 = internal.T1_init;
    internal.initial_T2 = internal.T2_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const M_T = state[0];
    const M_P = state[1];
    const T0 = state[2];
    const T1 = state[3];
    const T2 = state[4];
    const P0 = state[5];
    const P1 = state[6];
    const P2 = state[7];
    const C = state[8];
    const CN = state[9];
    dstatedt[11] = 0 + 0;
    dstatedt[10] = 0 + 0;
    dstatedt[8] = 0 + 1 * (internal.k3 * T2 * P2 - internal.k4 * C) * internal.cytoplasm - 1 * internal.kd_C * C * internal.cytoplasm - 1 * internal.k1 * C * internal.cytoplasm - internal.k2 * CN * internal.nucleus;
    dstatedt[9] = 0 - 1 * internal.kd_CN * CN * internal.nucleus + 1 * internal.k1 * C * internal.cytoplasm - internal.k2 * CN * internal.nucleus;
    dstatedt[1] = 0 + 1 * internal.v_sP * Math.pow((internal.Ki_P), (internal.n)) / (Math.pow((internal.Ki_P), (internal.n)) + Math.pow((CN), (internal.n))) - 1 * (internal.v_mP / (internal.K_mP + M_P) + internal.kd) * M_P * internal.cytoplasm;
    dstatedt[0] = 0 + 1 * internal.v_sT * Math.pow((internal.Ki_T), (internal.n)) / (Math.pow((internal.Ki_T), (internal.n)) + Math.pow((CN), (internal.n))) - 1 * (internal.v_mT / (internal.K_mT + M_T) + internal.kd) * M_T * internal.cytoplasm;
    dstatedt[5] = 0 + 1 * internal.k_sP * M_P * internal.cytoplasm - 1 * internal.kd * P0 * internal.cytoplasm - 1 * internal.V_1P * P0 / (internal.K_1P + P0) * internal.cytoplasm + 1 * internal.V_2P * P1 / (internal.K_2P + P1) * internal.cytoplasm;
    dstatedt[6] = 0 - 1 * internal.kd * P1 * internal.cytoplasm + 1 * internal.V_1P * P0 / (internal.K_1P + P0) * internal.cytoplasm - 1 * internal.V_3P * P1 / (internal.K_3P + P1) * internal.cytoplasm - 1 * internal.V_2P * P1 / (internal.K_2P + P1) * internal.cytoplasm + 1 * internal.V_4P * P2 / (internal.K_4P + P2) * internal.cytoplasm;
    dstatedt[7] = 0 - 1 * internal.kd * P2 * internal.cytoplasm - 1 * (internal.k3 * T2 * P2 - internal.k4 * C) * internal.cytoplasm + 1 * internal.V_3P * P1 / (internal.K_3P + P1) * internal.cytoplasm - 1 * internal.V_4P * P2 / (internal.K_4P + P2) * internal.cytoplasm - 1 * internal.v_dP * P2 / (internal.K_dP + P2) * internal.cytoplasm;
    dstatedt[2] = 0 + 1 * internal.k_sT * M_T * internal.cytoplasm - 1 * internal.kd * T0 * internal.cytoplasm - 1 * internal.V_1T * T0 / (internal.K_1T + T0) * internal.cytoplasm + 1 * internal.V_2T * T1 / (internal.K_2T + T1) * internal.cytoplasm;
    dstatedt[3] = 0 - 1 * internal.kd * T1 * internal.cytoplasm + 1 * internal.V_1T * T0 / (internal.K_1T + T0) * internal.cytoplasm - 1 * internal.V_3T * T1 / (internal.K_3T + T1) * internal.cytoplasm - 1 * internal.V_2T * T1 / (internal.K_2T + T1) * internal.cytoplasm + 1 * internal.V_4T * T2 / (internal.K_4T + T2) * internal.cytoplasm;
    var v_dT = (1 + (internal.v_dT_fac - 1) * Math.ceil(Math.sin(t / internal.l_d * internal.pi) * 0.90000000000000002)) * internal.v_dT_dark;
    dstatedt[4] = 0 - 1 * internal.kd * T2 * internal.cytoplasm - 1 * (internal.k3 * T2 * P2 - internal.k4 * C) * internal.cytoplasm + 1 * internal.V_3T * T1 / (internal.K_3T + T1) * internal.cytoplasm - 1 * internal.V_4T * T2 / (internal.K_4T + T2) * internal.cytoplasm - 1 * v_dT * T2 / (internal.K_dT + T2) * internal.cytoplasm;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "M_T", "M_P", "T0", "T1", "T2", "P0", "P1", "P2", "C", "CN", "Tt", "Pt"];
    this.metadata.internalOrder = {C_init: null, CN_init: null, cytoplasm: null, initial_C: null, initial_CN: null, initial_M_P: null, initial_M_T: null, initial_P0: null, initial_P1: null, initial_P2: null, initial_Pt: null, initial_T0: null, initial_T1: null, initial_T2: null, initial_Tt: null, K_1P: null, K_1T: null, K_2P: null, K_2T: null, K_3P: null, K_3T: null, K_4P: null, K_4T: null, K_dP: null, K_dT: null, K_mP: null, K_mT: null, k_sP: null, k_sT: null, k1: null, k2: null, k3: null, k4: null, kd: null, kd_C: null, kd_CN: null, Ki_P: null, Ki_T: null, l_d: null, M_P_init: null, M_T_init: null, n: null, nucleus: null, P0_init: null, P1_init: null, P2_init: null, pi: null, T0_init: null, T1_init: null, T2_init: null, V_1P: null, V_1T: null, V_2P: null, V_2T: null, V_3P: null, V_3T: null, V_4P: null, V_4T: null, v_dP: null, v_dT_dark: null, v_dT_fac: null, v_mP: null, v_mT: null, v_sP: null, v_sT: null};
    this.metadata.variableOrder = {M_T: null, M_P: null, T0: null, T1: null, T2: null, P0: null, P1: null, P2: null, C: null, CN: null, Tt: null, Pt: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
