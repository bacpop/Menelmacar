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
    var state = Array(5).fill(0);
    state[0] = internal.initial_C;
    state[1] = internal.initial_T;
    state[2] = internal.initial_H;
    state[3] = internal.initial_I;
    state[4] = internal.initial_E;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a1", "a2", "a3", "C_init", "d1", "d2", "d3", "delta", "E_init", "gamma1", "gamma2", "gamma3", "H_init", "I_init", "k1", "k2", "M1", "M2", "M3", "mu", "n1", "n2", "p", "p1", "p2", "p3", "q", "s", "T_init", "tau", "u", "v", "w"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a1", internal, 1135000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a2", internal, 11350000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a3", internal, 1250000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_init", internal, 737100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d1", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d2", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d3", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta", internal, 5.9999999999999995e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma1", internal, 2.9999999999999999e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma2", internal, 3.0000000000000001e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma3", internal, 9.9999999999999995e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H_init", internal, 25000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.75, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.51400000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M1", internal, 2270000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M2", internal, 22700000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M3", internal, 25000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu", internal, 0.96999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n1", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n2", internal, 0.28999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p1", internal, 600, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p2", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p3", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s", internal, 13000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_init", internal, 7616700, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau", internal, 2700, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v", internal, 400, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "w", internal, 300000, -Infinity, Infinity, false);
    internal.initial_C = internal.C_init;
    internal.initial_E = internal.E_init;
    internal.initial_H = internal.H_init;
    internal.initial_I = internal.I_init;
    internal.initial_T = internal.T_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const C = state[0];
    const T = state[1];
    const H = state[2];
    const I = state[3];
    const E = state[4];
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.k1 * C * (1 - C / internal.M1) + internal.p1 * C * E / (internal.a1 + C)) - 1 * internal.compartment * (internal.gamma1 * I * C);
    dstatedt[4] = 0 + 1 * internal.compartment * (internal.tau) - 1 * internal.compartment * ((internal.mu + internal.d1 * C / (internal.a1 + C) + internal.d2 * T / (internal.a2 + T) + internal.d3 * H / (internal.a3 + H)) * E);
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.q * H * (1 - H / internal.M3)) - 1 * internal.compartment * (internal.delta * H * T + internal.p3 * H * E / (internal.a3 + H));
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.s + internal.p * I * T / (internal.w + T)) - 1 * internal.compartment * (internal.gamma3 * I * T + internal.n2 * I + internal.u * I * E / (internal.v + E));
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.k2 * C * (C / internal.M1) * (1 - T / internal.M2) + internal.p2 * T * E / (internal.a2 + T)) - 1 * internal.compartment * (internal.n1 * T + internal.gamma2 * I * T);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "C", "T", "H", "I", "E"];
    this.metadata.internalOrder = {a1: null, a2: null, a3: null, C_init: null, compartment: null, d1: null, d2: null, d3: null, delta: null, E_init: null, gamma1: null, gamma2: null, gamma3: null, H_init: null, I_init: null, initial_C: null, initial_E: null, initial_H: null, initial_I: null, initial_T: null, k1: null, k2: null, M1: null, M2: null, M3: null, mu: null, n1: null, n2: null, p: null, p1: null, p2: null, p3: null, q: null, s: null, T_init: null, tau: null, u: null, v: null, w: null};
    this.metadata.variableOrder = {C: null, T: null, H: null, I: null, E: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
