export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.COMpartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(15).fill(0);
    state[0] = internal.initial_x_0;
    state[1] = internal.initial_y_0;
    state[2] = internal.initial_y_1;
    state[3] = internal.initial_L_0;
    state[4] = internal.initial_v_0;
    state[5] = internal.initial_z_a;
    state[6] = internal.initial_m_0_0;
    state[7] = internal.initial_m_1_0;
    state[8] = internal.initial_m_2_0;
    state[9] = internal.initial_m_3_0;
    state[10] = internal.initial_m_4_0;
    state[11] = internal.initial_m_5_0;
    state[12] = internal.initial_m_6_0;
    state[13] = internal.initial_m_7_0;
    state[14] = internal.initial_m_8_0;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a0", "a1", "alpha", "ba", "beta", "ca", "d", "eta", "gamma", "kxk", "L_0_init", "lambda", "m_0_0_init", "m_1_0_init", "m_2_0_init", "m_3_0_init", "m_4_0_init", "m_5_0_init", "m_6_0_init", "m_7_0_init", "m_8_0_init", "pa", "phi", "r", "u", "v_0_init", "x_0_init", "y_0_init", "y_1_init", "z_a_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a0", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a1", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ba", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ca", internal, 15.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "eta", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L_0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_0_0_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_1_0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_2_0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_3_0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_4_0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_5_0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_6_0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_7_0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_8_0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pa", internal, 9.9999999999999995e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "phi", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v_0_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_0_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y_0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "z_a_init", internal, 1, -Infinity, Infinity, false);
    internal.initial_L_0 = internal.L_0_init;
    internal.initial_m_0_0 = internal.m_0_0_init;
    internal.initial_m_1_0 = internal.m_1_0_init;
    internal.initial_m_2_0 = internal.m_2_0_init;
    internal.initial_m_3_0 = internal.m_3_0_init;
    internal.initial_m_4_0 = internal.m_4_0_init;
    internal.initial_m_5_0 = internal.m_5_0_init;
    internal.initial_m_6_0 = internal.m_6_0_init;
    internal.initial_m_7_0 = internal.m_7_0_init;
    internal.initial_m_8_0 = internal.m_8_0_init;
    internal.initial_v_0 = internal.v_0_init;
    internal.initial_x_0 = internal.x_0_init;
    internal.initial_y_0 = internal.y_0_init;
    internal.initial_y_1 = internal.y_1_init;
    internal.initial_z_a = internal.z_a_init;
    internal.R0 = internal.lambda * internal.eta / (internal.d * internal.a1 * (internal.a0 + internal.eta)) * (internal.beta + internal.gamma * internal.phi / (internal.phi + internal.d));
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const x_0 = state[0];
    const y_0 = state[1];
    const y_1 = state[2];
    const L_0 = state[3];
    const v_0 = state[4];
    const z_a = state[5];
    const m_0_0 = state[6];
    const m_1_0 = state[7];
    const m_2_0 = state[8];
    const m_3_0 = state[9];
    const m_4_0 = state[10];
    const m_5_0 = state[11];
    const m_6_0 = state[12];
    const m_7_0 = state[13];
    const m_8_0 = state[14];
    dstatedt[3] = 0 + 1 * internal.COMpartment * (internal.gamma * v_0 * x_0) - 1 * internal.COMpartment * internal.phi * L_0 - 1 * internal.COMpartment * internal.d * L_0;
    dstatedt[6] = 0 - 1 * internal.COMpartment * internal.r * m_0_0;
    dstatedt[7] = 0 + 2 * internal.COMpartment * internal.r * m_0_0 - 1 * internal.COMpartment * internal.r * m_1_0;
    dstatedt[8] = 0 + 2 * internal.COMpartment * internal.r * m_1_0 - 1 * internal.COMpartment * internal.r * m_2_0;
    dstatedt[9] = 0 + 2 * internal.COMpartment * internal.r * m_2_0 - 1 * internal.COMpartment * internal.r * m_3_0;
    dstatedt[10] = 0 + 2 * internal.COMpartment * internal.r * m_3_0 - 1 * internal.COMpartment * internal.r * m_4_0;
    dstatedt[11] = 0 + 2 * internal.COMpartment * internal.r * m_4_0 - 1 * internal.COMpartment * internal.r * m_5_0;
    dstatedt[12] = 0 + 2 * internal.COMpartment * internal.r * m_5_0 - 1 * internal.COMpartment * internal.r * m_6_0;
    dstatedt[13] = 0 + 2 * internal.COMpartment * internal.r * m_6_0 - 1 * internal.COMpartment * internal.r * m_7_0;
    dstatedt[14] = 0 + 2 * internal.COMpartment * internal.r * m_7_0 - 1 * internal.COMpartment * internal.r * m_8_0;
    dstatedt[4] = 0 + 1 * internal.COMpartment * (internal.kxk * y_1) - 1 * internal.COMpartment * internal.u * v_0;
    dstatedt[0] = 0 + 1 * internal.COMpartment * (internal.lambda) - 1 * internal.COMpartment * internal.d * x_0 - 1 * internal.COMpartment * (internal.beta * v_0 * x_0) - 1 * internal.COMpartment * (internal.gamma * v_0 * x_0);
    dstatedt[1] = 0 + 1 * internal.COMpartment * (internal.beta * v_0 * x_0) - 1 * internal.COMpartment * internal.a0 * y_0 - 1 * internal.COMpartment * internal.eta * y_0 + 1 * internal.COMpartment * internal.phi * L_0 - 1 * internal.COMpartment * (internal.pa * z_a * y_0);
    dstatedt[2] = 0 + 1 * internal.COMpartment * internal.eta * y_0 - 1 * internal.COMpartment * internal.a1 * y_1 - 1 * internal.COMpartment * (internal.pa * z_a * y_1);
    dstatedt[5] = 0 + 1 * internal.COMpartment * (internal.alpha * m_8_0) + 1 * internal.COMpartment * (internal.ca * (y_0 + y_1) * z_a) - 1 * internal.COMpartment * internal.ba * z_a;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "x_0", "y_0", "y_1", "L_0", "v_0", "z_a", "m_0_0", "m_1_0", "m_2_0", "m_3_0", "m_4_0", "m_5_0", "m_6_0", "m_7_0", "m_8_0"];
    this.metadata.internalOrder = {a0: null, a1: null, alpha: null, ba: null, beta: null, ca: null, COMpartment: null, d: null, eta: null, gamma: null, initial_L_0: null, initial_m_0_0: null, initial_m_1_0: null, initial_m_2_0: null, initial_m_3_0: null, initial_m_4_0: null, initial_m_5_0: null, initial_m_6_0: null, initial_m_7_0: null, initial_m_8_0: null, initial_v_0: null, initial_x_0: null, initial_y_0: null, initial_y_1: null, initial_z_a: null, kxk: null, L_0_init: null, lambda: null, m_0_0_init: null, m_1_0_init: null, m_2_0_init: null, m_3_0_init: null, m_4_0_init: null, m_5_0_init: null, m_6_0_init: null, m_7_0_init: null, m_8_0_init: null, pa: null, phi: null, r: null, R0: null, u: null, v_0_init: null, x_0_init: null, y_0_init: null, y_1_init: null, z_a_init: null};
    this.metadata.variableOrder = {x_0: null, y_0: null, y_1: null, L_0: null, v_0: null, z_a: null, m_0_0: null, m_1_0: null, m_2_0: null, m_3_0: null, m_4_0: null, m_5_0: null, m_6_0: null, m_7_0: null, m_8_0: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
