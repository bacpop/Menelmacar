export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.default1 = 1;
    internal.pi = 3.1415929999999999;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var beta = internal.c1 / (internal.N1 * internal.initial_s4);
    var s3_init = beta * internal.initial_s4 * internal.initial_s2;
    internal.initial_s3 = s3_init;
    var state = Array(7).fill(0);
    state[0] = internal.initial_s2;
    state[1] = internal.initial_s3;
    state[2] = internal.initial_s4;
    state[3] = internal.initial_s14;
    state[4] = internal.initial_s16;
    state[5] = internal.initial_s13;
    state[6] = internal.initial_s12;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "b", "c1", "d", "delta", "e_pi", "e_rt", "epi", "k1", "k2", "mu", "N1", "N2", "omega", "p", "phi", "psi", "r", "s12_init", "s13_init", "s14_init", "s16_init", "s2_init", "s4_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 3.4999999999999997e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c1", internal, 23, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e_pi", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e_rt", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "epi", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu", internal, 0.048000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N1", internal, 467, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N2", internal, 10000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "omega", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p", internal, 2.0832999999999999e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "phi", internal, 1000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "psi", internal, 0.0067000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s12_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s13_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s14_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s16_init", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s2_init", internal, 48000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s4_init", internal, 250000, -Infinity, Infinity, false);
    internal.initial_s12 = internal.s12_init;
    internal.initial_s13 = internal.s13_init;
    internal.initial_s14 = internal.s14_init;
    internal.initial_s16 = internal.s16_init;
    internal.initial_s2 = internal.s2_init;
    internal.initial_s4 = internal.s4_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const s2 = state[0];
    const s3 = state[1];
    const s4 = state[2];
    const s14 = state[3];
    const s16 = state[4];
    const s13 = state[5];
    const s12 = state[6];
    var beta = internal.c1 / (internal.N1 * s4);
    dstatedt[6] = 0 - 1 * internal.default1 * internal.epi * s12 - 1 * internal.default1 * (internal.a * s12 * s16) - 1 * internal.default1 * internal.mu * s12 - 1 * internal.default1 * (internal.psi * s14 * (((1 + internal.p * s2) * internal.N2 - s12) / (internal.phi + (1 + internal.p * s2) * internal.N2 - s12))) + 2 * internal.default1 * (internal.psi * s14 * (((1 + internal.p * s2) * internal.N2 - s12) / (internal.phi + (1 + internal.p * s2) * internal.N2 - s12)));
    dstatedt[5] = 0 + 1 * internal.default1 * internal.epi * s12 - 1 * internal.default1 * internal.k1 * s13 - 1 * internal.default1 * (internal.a * s16 * s13) - 1 * internal.default1 * (internal.r * internal.epi * s13) + 2 * internal.default1 * (internal.r * internal.epi * s13);
    dstatedt[3] = 0 + 1 * internal.default1 * (internal.mu * internal.k1 * s12) - 1 * internal.default1 * internal.k1 * s14 + 1 * internal.default1 * (internal.mu * internal.k2 * s13);
    dstatedt[4] = 0 - 1 * internal.default1 * (internal.omega * s13 * s16 * s16 / (internal.b * s4)) - 1 * internal.default1 * (internal.omega * s13 * s16) + 2 * internal.default1 * (internal.omega * s13 * s16);
    dstatedt[0] = 0 + 1 * internal.default1 * ((1 - internal.e_pi) * internal.N1 * internal.delta * s3) - 1 * internal.default1 * internal.c1 * s2;
    dstatedt[1] = 0 + 1 * internal.default1 * ((1 - internal.e_rt) * beta * s4 * s2) - 1 * internal.default1 * internal.k1 * s3;
    var s = internal.d * s4 + beta * s4 * s2;
    dstatedt[2] = 0 - 1 * internal.default1 * ((1 - internal.e_rt) * beta * s4 * s2) + 1 * internal.default1 * (s) - 1 * internal.default1 * internal.d * s4;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "s2", "s3", "s4", "s14", "s16", "s13", "s12"];
    this.metadata.internalOrder = {a: null, b: null, c1: null, d: null, default1: null, delta: null, e_pi: null, e_rt: null, epi: null, initial_s12: null, initial_s13: null, initial_s14: null, initial_s16: null, initial_s2: null, initial_s3: null, initial_s4: null, k1: null, k2: null, mu: null, N1: null, N2: null, omega: null, p: null, phi: null, pi: null, psi: null, r: null, s12_init: null, s13_init: null, s14_init: null, s16_init: null, s2_init: null, s4_init: null};
    this.metadata.variableOrder = {s2: null, s3: null, s4: null, s14: null, s16: null, s13: null, s12: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
