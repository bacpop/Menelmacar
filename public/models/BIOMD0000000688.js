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
    var state = Array(16).fill(0);
    state[0] = internal.initial_x;
    state[1] = internal.initial_y_0;
    state[2] = internal.initial_y_1;
    state[3] = internal.initial_L;
    state[4] = internal.initial_v;
    state[5] = internal.initial_z_a;
    state[6] = internal.initial_m_0;
    state[7] = internal.initial_m_1;
    state[8] = internal.initial_m_2;
    state[9] = internal.initial_m_3;
    state[10] = internal.initial_m_4;
    state[11] = internal.initial_m_5;
    state[12] = internal.initial_m_6;
    state[13] = internal.initial_m_7;
    state[14] = internal.initial_m_8;
    state[15] = internal.initial_z_i;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a0", "a1", "alpha", "ba", "beta", "bi", "ca", "ci", "d", "eta", "gamma", "kxk", "L_init", "lambda", "m_0_init", "m_1_init", "m_2_init", "m_3_init", "m_4_init", "m_5_init", "m_6_init", "m_7_init", "m_8_init", "p_i", "pa", "phi", "r", "u", "v_init", "x_init", "xi", "y_0_init", "y_1_init", "z_a_init", "z_i_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a0", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a1", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ba", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "bi", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ca", internal, 15.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ci", internal, 12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "eta", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_4_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_5_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_6_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_7_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m_8_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_i", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pa", internal, 9.9999999999999995e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "phi", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "xi", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y_0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "z_a_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "z_i_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    internal.initial_L = internal.L_init;
    internal.initial_m_0 = internal.m_0_init;
    internal.initial_m_1 = internal.m_1_init;
    internal.initial_m_2 = internal.m_2_init;
    internal.initial_m_3 = internal.m_3_init;
    internal.initial_m_4 = internal.m_4_init;
    internal.initial_m_5 = internal.m_5_init;
    internal.initial_m_6 = internal.m_6_init;
    internal.initial_m_7 = internal.m_7_init;
    internal.initial_m_8 = internal.m_8_init;
    internal.initial_v = internal.v_init;
    internal.initial_x = internal.x_init;
    internal.initial_y_0 = internal.y_0_init;
    internal.initial_y_1 = internal.y_1_init;
    internal.initial_z_a = internal.z_a_init;
    internal.initial_z_i = internal.z_i_init;
    internal.R0 = internal.lambda * internal.eta / (internal.d * internal.a1 * (internal.a0 + internal.eta)) * (internal.beta + internal.gamma * internal.phi / (internal.phi + internal.d));
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const x = state[0];
    const y_0 = state[1];
    const y_1 = state[2];
    const L = state[3];
    const v = state[4];
    const z_a = state[5];
    const m_0 = state[6];
    const m_1 = state[7];
    const m_2 = state[8];
    const m_3 = state[9];
    const m_4 = state[10];
    const m_5 = state[11];
    const m_6 = state[12];
    const m_7 = state[13];
    const m_8 = state[14];
    const z_i = state[15];
    dstatedt[3] = 0 + 1 * internal.COMpartment * (internal.gamma * v * x) - 1 * internal.COMpartment * internal.phi * L - 1 * internal.COMpartment * internal.d * L;
    dstatedt[6] = 0 - 1 * internal.COMpartment * internal.r * m_0;
    dstatedt[7] = 0 + 2 * internal.COMpartment * internal.r * m_0 - 1 * internal.COMpartment * internal.r * m_1;
    dstatedt[8] = 0 + 2 * internal.COMpartment * internal.r * m_1 - 1 * internal.COMpartment * internal.r * m_2;
    dstatedt[9] = 0 + 2 * internal.COMpartment * internal.r * m_2 - 1 * internal.COMpartment * internal.r * m_3;
    dstatedt[10] = 0 + 2 * internal.COMpartment * internal.r * m_3 - 1 * internal.COMpartment * internal.r * m_4;
    dstatedt[11] = 0 + 2 * internal.COMpartment * internal.r * m_4 - 1 * internal.COMpartment * internal.r * m_5;
    dstatedt[12] = 0 + 2 * internal.COMpartment * internal.r * m_5 - 1 * internal.COMpartment * internal.r * m_6;
    dstatedt[13] = 0 + 2 * internal.COMpartment * internal.r * m_6 - 1 * internal.COMpartment * internal.r * m_7;
    dstatedt[14] = 0 + 2 * internal.COMpartment * internal.r * m_7 - 1 * internal.COMpartment * internal.r * m_8;
    dstatedt[4] = 0 + 1 * internal.COMpartment * (internal.kxk * y_1) - 1 * internal.COMpartment * internal.u * v;
    dstatedt[0] = 0 + 1 * internal.COMpartment * (internal.lambda) - 1 * internal.COMpartment * internal.d * x - 1 * internal.COMpartment * (internal.beta * v * x) - 1 * internal.COMpartment * (internal.gamma * v * x);
    dstatedt[1] = 0 + 1 * internal.COMpartment * (internal.beta * v * x) - 1 * internal.COMpartment * internal.a0 * y_0 - 1 * internal.COMpartment * internal.eta * y_0 + 1 * internal.COMpartment * internal.phi * L - 1 * internal.COMpartment * (internal.pa * z_a * y_0) - 1 * internal.COMpartment * (internal.p_i * z_i * y_0);
    dstatedt[2] = 0 + 1 * internal.COMpartment * internal.eta * y_0 - 1 * internal.COMpartment * internal.a1 * y_1 - 1 * internal.COMpartment * (internal.pa * z_a * y_1) - 1 * internal.COMpartment * (internal.p_i * z_i * y_1);
    dstatedt[5] = 0 + 1 * internal.COMpartment * (internal.alpha * m_8) + 1 * internal.COMpartment * (internal.ca * (y_0 + y_1) * z_a) - 1 * internal.COMpartment * internal.ba * z_a;
    dstatedt[15] = 0 + 1 * internal.COMpartment * (internal.xi) + 1 * internal.COMpartment * (internal.ci * (y_0 + y_1) * z_i) - 1 * internal.COMpartment * internal.bi * z_i;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "x", "y_0", "y_1", "L", "v", "z_a", "m_0", "m_1", "m_2", "m_3", "m_4", "m_5", "m_6", "m_7", "m_8", "z_i"];
    this.metadata.internalOrder = {a0: null, a1: null, alpha: null, ba: null, beta: null, bi: null, ca: null, ci: null, COMpartment: null, d: null, eta: null, gamma: null, initial_L: null, initial_m_0: null, initial_m_1: null, initial_m_2: null, initial_m_3: null, initial_m_4: null, initial_m_5: null, initial_m_6: null, initial_m_7: null, initial_m_8: null, initial_v: null, initial_x: null, initial_y_0: null, initial_y_1: null, initial_z_a: null, initial_z_i: null, kxk: null, L_init: null, lambda: null, m_0_init: null, m_1_init: null, m_2_init: null, m_3_init: null, m_4_init: null, m_5_init: null, m_6_init: null, m_7_init: null, m_8_init: null, p_i: null, pa: null, phi: null, r: null, R0: null, u: null, v_init: null, x_init: null, xi: null, y_0_init: null, y_1_init: null, z_a_init: null, z_i_init: null};
    this.metadata.variableOrder = {x: null, y_0: null, y_1: null, L: null, v: null, z_a: null, m_0: null, m_1: null, m_2: null, m_3: null, m_4: null, m_5: null, m_6: null, m_7: null, m_8: null, z_i: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
