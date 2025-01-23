export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Cell = 1;
    internal.compartment_0000002 = 1;
    internal.K_1T = 2;
    internal.K_2P = 2;
    internal.K_2T = 2;
    internal.K_3P = 2;
    internal.K_3T = 2;
    internal.K_4P = 2;
    internal.K_4T = 2;
    internal.k_d = 0.01;
    internal.k_dC = 0.01;
    internal.k_dN = 0.01;
    internal.K_dP = 0.20000000000000001;
    internal.K_dT = 0.20000000000000001;
    internal.K_IP = 1;
    internal.K_IT = 1;
    internal.K_mP = 0.20000000000000001;
    internal.K_mT = 0.20000000000000001;
    internal.k_sP = 0.90000000000000002;
    internal.k_sT = 0.90000000000000002;
    internal.k1 = 0.59999999999999998;
    internal.K1_P = 2;
    internal.k2 = 0.20000000000000001;
    internal.k3 = 1.2;
    internal.k4 = 0.59999999999999998;
    internal.n = 4;
    internal.V_1P = 8;
    internal.V_1T = 8;
    internal.V_2P = 1;
    internal.V_2T = 1;
    internal.V_3P = 8;
    internal.V_3T = 8;
    internal.V_4P = 1;
    internal.V_4T = 1;
    internal.V_dP = 2;
    internal.V_mP = 0.69999999999999996;
    internal.v_sP = 1;
    internal.V_sT = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(10).fill(0);
    state[0] = internal.initial_P0;
    state[1] = internal.initial_T0;
    state[2] = internal.initial_P1;
    state[3] = internal.initial_T1;
    state[4] = internal.initial_P2;
    state[5] = internal.initial_T2;
    state[6] = internal.initial_CC;
    state[7] = internal.initial_Cn;
    state[8] = internal.initial_Mp;
    state[9] = internal.initial_Mt;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["CC_init", "Cn_init", "Mp_init", "Mt_init", "P0_init", "P1_init", "P2_init", "T0_init", "T1_init", "T2_init", "V_dT", "V_mT"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "CC_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cn_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Mp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Mt_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_dT", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_mT", internal, 0.69999999999999996, -Infinity, Infinity, false);
    internal.initial_CC = internal.CC_init;
    internal.initial_Cn = internal.Cn_init;
    internal.initial_Mp = internal.Mp_init;
    internal.initial_Mt = internal.Mt_init;
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
    const P0 = state[0];
    const T0 = state[1];
    const P1 = state[2];
    const T1 = state[3];
    const P2 = state[4];
    const T2 = state[5];
    const CC = state[6];
    const Cn = state[7];
    const Mp = state[8];
    const Mt = state[9];
    dstatedt[6] = 0 + 1 * internal.Cell * internal.k3 * P2 * T2 - internal.Cell * internal.k4 * CC - 1 * internal.Cell * internal.k1 * CC - internal.compartment_0000002 * internal.k2 * Cn - 1 * internal.Cell * internal.k_dC * CC;
    dstatedt[7] = 0 + 1 * internal.Cell * internal.k1 * CC - internal.compartment_0000002 * internal.k2 * Cn - 1 * internal.compartment_0000002 * internal.k_dN * Cn;
    dstatedt[8] = 0 + 1 * internal.Cell * internal.v_sP * Math.pow((internal.K_IP), (internal.n)) / (Math.pow((internal.K_IP), (internal.n)) + Math.pow((Cn), (internal.n))) - 1 * internal.Cell * internal.k_d * Mp + internal.Cell * internal.V_mP * Mp / (internal.K_mP + Mp);
    dstatedt[9] = 0 + 1 * internal.Cell * internal.V_sT * Math.pow((internal.K_IT), (internal.n)) / (Math.pow((internal.K_IT), (internal.n)) + Math.pow((Cn), (internal.n))) - 1 * internal.Cell * internal.k_d * Mt + internal.Cell * internal.V_mT * Mt / (internal.K_mT + Mt);
    dstatedt[0] = 0 - 1 * internal.Cell * internal.V_1P * P0 / (internal.K1_P + P0) + 1 * internal.Cell * internal.V_2P * P1 / (internal.K_2P + P1) - 1 * internal.Cell * internal.k_d * P0 + 1 * internal.Cell * internal.k_sP * Mp;
    dstatedt[2] = 0 + 1 * internal.Cell * internal.V_1P * P0 / (internal.K1_P + P0) - 1 * internal.Cell * internal.V_2P * P1 / (internal.K_2P + P1) - 1 * internal.Cell * internal.V_3P * P1 / (internal.K_3P + P1) + 1 * internal.Cell * internal.V_4P * P2 / (internal.K_4P + P2) - 1 * internal.Cell * internal.k_d * P1;
    dstatedt[4] = 0 + 1 * internal.Cell * internal.V_3P * P1 / (internal.K_3P + P1) - 1 * internal.Cell * internal.V_4P * P2 / (internal.K_4P + P2) - 1 * internal.Cell * internal.k_d * P2 + internal.Cell * internal.V_dP * P2 / (internal.K_dP + P2) - 1 * internal.Cell * internal.k3 * P2 * T2 - internal.Cell * internal.k4 * CC;
    dstatedt[1] = 0 - 1 * internal.Cell * internal.V_1T * T0 / (internal.K_1T + T0) + 1 * internal.Cell * internal.V_2T * T1 / (internal.K_2T + T1) - 1 * internal.Cell * internal.k_d * T0 + 1 * internal.Cell * internal.k_sT * Mt;
    dstatedt[3] = 0 + 1 * internal.Cell * internal.V_1T * T0 / (internal.K_1T + T0) - 1 * internal.Cell * internal.V_2T * T1 / (internal.K_2T + T1) - 1 * internal.Cell * internal.V_3T * T1 / (internal.K_3T + T1) + 1 * internal.Cell * internal.V_4T * T2 / (internal.K_4T + T2) - 1 * internal.Cell * internal.k_d * T1;
    dstatedt[5] = 0 + 1 * internal.Cell * internal.V_3T * T1 / (internal.K_3T + T1) - 1 * internal.Cell * internal.V_4T * T2 / (internal.K_4T + T2) - 1 * internal.Cell * internal.k_d * T2 + internal.Cell * internal.V_dT * T2 / (internal.K_dT + T2) - 1 * internal.Cell * internal.k3 * P2 * T2 - internal.Cell * internal.k4 * CC;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "P0", "T0", "P1", "T1", "P2", "T2", "CC", "Cn", "Mp", "Mt"];
    this.metadata.internalOrder = {CC_init: null, Cell: null, Cn_init: null, compartment_0000002: null, initial_CC: null, initial_Cn: null, initial_Mp: null, initial_Mt: null, initial_P0: null, initial_P1: null, initial_P2: null, initial_T0: null, initial_T1: null, initial_T2: null, K_1T: null, K_2P: null, K_2T: null, K_3P: null, K_3T: null, K_4P: null, K_4T: null, k_d: null, k_dC: null, k_dN: null, K_dP: null, K_dT: null, K_IP: null, K_IT: null, K_mP: null, K_mT: null, k_sP: null, k_sT: null, k1: null, K1_P: null, k2: null, k3: null, k4: null, Mp_init: null, Mt_init: null, n: null, P0_init: null, P1_init: null, P2_init: null, T0_init: null, T1_init: null, T2_init: null, V_1P: null, V_1T: null, V_2P: null, V_2T: null, V_3P: null, V_3T: null, V_4P: null, V_4T: null, V_dP: null, V_dT: null, V_mP: null, V_mT: null, v_sP: null, V_sT: null};
    this.metadata.variableOrder = {P0: null, T0: null, P1: null, T1: null, P2: null, T2: null, CC: null, Cn: null, Mp: null, Mt: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
