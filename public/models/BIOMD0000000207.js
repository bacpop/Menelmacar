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
    var state = Array(6).fill(0);
    state[0] = internal.initial_C1;
    state[1] = internal.initial_M1;
    state[2] = internal.initial_X1;
    state[3] = internal.initial_C2;
    state[4] = internal.initial_M2;
    state[5] = internal.initial_X2;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["C1_init", "C2_init", "H1", "H2", "H3", "H4", "K_d1", "K_d2", "K1", "K2", "K3", "K4", "Kc1", "Kc2", "kd1", "kd2", "Kim1", "Kim2", "M1_init", "M2_init", "U_M1", "U_M3", "U2", "U4", "V_M1", "V_M3", "V2", "V4", "vd1", "vd2", "vi1", "vi2", "X1_init", "X2_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "C1_init", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H1", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H2", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H3", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H4", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_d1", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_d2", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K3", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K4", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kc1", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kc2", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd1", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd2", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kim1", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kim2", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M1_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "U_M1", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "U_M3", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "U2", internal, 0.14999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "U4", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_M1", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_M3", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V2", internal, 0.14999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V4", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vd1", internal, 0.025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vd2", internal, 0.025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vi1", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vi2", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X2_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_C1 = internal.C1_init;
    internal.initial_C2 = internal.C2_init;
    internal.initial_M1 = internal.M1_init;
    internal.initial_M2 = internal.M2_init;
    internal.initial_X1 = internal.X1_init;
    internal.initial_X2 = internal.X2_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const C1 = state[0];
    const M1 = state[1];
    const X1 = state[2];
    const C2 = state[3];
    const M2 = state[4];
    const X2 = state[5];
    dstatedt[0] = 0 + 1 * internal.compartment * internal.vi1 * internal.Kim1 / (internal.Kim1 + M2) - 1 * internal.compartment * internal.vd1 * X1 * C1 / (internal.K_d1 + C1) - 1 * internal.compartment * internal.kd1 * C1;
    dstatedt[3] = 0 + 1 * internal.compartment * internal.vi2 * internal.Kim2 / (internal.Kim2 + M1) - 1 * internal.compartment * internal.vd2 * X2 * C2 / (internal.K_d2 + C2) - 1 * internal.compartment * internal.kd2 * C2;
    var U1 = C2 / (internal.Kc2 + C2) * internal.U_M1;
    var U3 = M2 * internal.U_M3;
    var V1 = C1 / (internal.Kc1 + C1) * internal.V_M1;
    var V3 = M1 * internal.V_M3;
    dstatedt[1] = 0 + V1 * (1 - M1) / (internal.K1 + (1 - M1)) - internal.V2 * M1 / (internal.K2 + M1);
    dstatedt[4] = 0 + U1 * (1 - M2) / (internal.H1 + (1 - M2)) - internal.U2 * M2 / (internal.H2 + M2);
    dstatedt[2] = 0 + V3 * (1 - X1) / (internal.K3 + (1 - X1)) - internal.V4 * X1 / (internal.K4 + X1);
    dstatedt[5] = 0 + U3 * (1 - X2) / (internal.H3 + (1 - X2)) - internal.U4 * X2 / (internal.H4 + X2);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "C1", "M1", "X1", "C2", "M2", "X2"];
    this.metadata.internalOrder = {C1_init: null, C2_init: null, compartment: null, H1: null, H2: null, H3: null, H4: null, initial_C1: null, initial_C2: null, initial_M1: null, initial_M2: null, initial_X1: null, initial_X2: null, K_d1: null, K_d2: null, K1: null, K2: null, K3: null, K4: null, Kc1: null, Kc2: null, kd1: null, kd2: null, Kim1: null, Kim2: null, M1_init: null, M2_init: null, U_M1: null, U_M3: null, U2: null, U4: null, V_M1: null, V_M3: null, V2: null, V4: null, vd1: null, vd2: null, vi1: null, vi2: null, X1_init: null, X2_init: null};
    this.metadata.variableOrder = {C1: null, M1: null, X1: null, C2: null, M2: null, X2: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
