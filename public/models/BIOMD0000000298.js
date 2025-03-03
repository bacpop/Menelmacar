export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Compartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(10).fill(0);
    state[0] = internal.initial_MP;
    state[1] = internal.initial_CN;
    state[2] = internal.initial_C;
    state[3] = internal.initial_T2;
    state[4] = internal.initial_T1;
    state[5] = internal.initial_T0;
    state[6] = internal.initial_MT;
    state[7] = internal.initial_P0;
    state[8] = internal.initial_P1;
    state[9] = internal.initial_P2;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["C_init", "CN_init", "k1", "K1P", "K1T", "k2", "K2P", "K2T", "k3", "K3P", "K3T", "k4", "K4P", "K4T", "kd", "kdC", "kdN", "KdP", "KdT", "KIP", "KIT", "KmP", "KmT", "ksP", "ksT", "MP_init", "MT_init", "n", "P0_init", "P1_init", "P2_init", "T0_init", "T1_init", "T2_init", "V1P", "V1T", "V2P", "V2T", "V3P", "V3T", "V4P", "V4T", "vdP", "vdT", "vmP", "vmT", "vsP", "vsT"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "C_init", internal, 0.20761399999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CN_init", internal, 1.34728, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1P", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1T", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2P", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2T", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 1.2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K3P", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K3T", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K4P", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K4T", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdC", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdN", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KdP", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KdT", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KIP", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KIT", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KmP", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KmT", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ksP", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ksT", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MP_init", internal, 0.0614368, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MT_init", internal, 0.086034200000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P0_init", internal, 0.016992799999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P1_init", internal, 0.0141356, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P2_init", internal, 0.0614368, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T0_init", internal, 0.021726100000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T1_init", internal, 0.0213384, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T2_init", internal, 0.0145428, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V1P", internal, 8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V1T", internal, 8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V2P", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V2T", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V3P", internal, 8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V3T", internal, 8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V4P", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V4T", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vdP", internal, 2.2000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vdT", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vmP", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vmT", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vsP", internal, 1.1000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vsT", internal, 1, -Infinity, Infinity, false);
    internal.initial_C = internal.C_init;
    internal.initial_CN = internal.CN_init;
    internal.initial_MP = internal.MP_init;
    internal.initial_MT = internal.MT_init;
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
    dstatedt[2] = 0;
    dstatedt[1] = 0;
    dstatedt[0] = 0;
    dstatedt[6] = 0;
    dstatedt[7] = 0;
    dstatedt[8] = 0;
    dstatedt[9] = 0;
    dstatedt[5] = 0;
    dstatedt[4] = 0;
    dstatedt[3] = 0;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "MP", "CN", "C", "T2", "T1", "T0", "MT", "P0", "P1", "P2"];
    this.metadata.internalOrder = {C_init: null, CN_init: null, Compartment: null, initial_C: null, initial_CN: null, initial_MP: null, initial_MT: null, initial_P0: null, initial_P1: null, initial_P2: null, initial_T0: null, initial_T1: null, initial_T2: null, k1: null, K1P: null, K1T: null, k2: null, K2P: null, K2T: null, k3: null, K3P: null, K3T: null, k4: null, K4P: null, K4T: null, kd: null, kdC: null, kdN: null, KdP: null, KdT: null, KIP: null, KIT: null, KmP: null, KmT: null, ksP: null, ksT: null, MP_init: null, MT_init: null, n: null, P0_init: null, P1_init: null, P2_init: null, T0_init: null, T1_init: null, T2_init: null, V1P: null, V1T: null, V2P: null, V2T: null, V3P: null, V3T: null, V4P: null, V4T: null, vdP: null, vdT: null, vmP: null, vmT: null, vsP: null, vsT: null};
    this.metadata.variableOrder = {MP: null, CN: null, C: null, T2: null, T1: null, T0: null, MT: null, P0: null, P1: null, P2: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
