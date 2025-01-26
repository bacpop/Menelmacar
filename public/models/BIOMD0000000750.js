export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.tumor_microenvironment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(8).fill(0);
    state[0] = internal.initial_Tp;
    state[1] = internal.initial_Tm;
    state[2] = internal.initial_G;
    state[3] = internal.initial_A;
    state[4] = internal.initial_S;
    state[5] = internal.initial_P;
    state[6] = internal.initial_Nn;
    state[7] = internal.initial_Na;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A_init", "ca", "cn", "da", "dA", "delta", "dg", "dn", "dt", "G_init", "kp", "ks", "kt", "Na_init", "Nn_init", "P_init", "p1", "p2", "p3", "p4", "rp", "rs", "rtm", "rtp", "S_init", "sa", "sA", "sg", "sigma1", "sigma2", "sigma3", "sigma4", "sn", "t1", "t2", "theta1", "theta2", "Tm_init", "Tp_init", "u0", "u1", "u2", "y1", "y2", "y3", "y4", "y5", "y6"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ca", internal, 3990, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cn", internal, 0.40999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "da", internal, 49.909999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dA", internal, 2.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta", internal, 0.0129, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dg", internal, 22.18, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dn", internal, 1.6599999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dt", internal, 0.012699999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kp", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ks", internal, 0.26000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kt", internal, 1000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Na_init", internal, 80, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Nn_init", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_init", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p1", internal, 0.33000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p4", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rp", internal, 7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rs", internal, 0.059999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rtm", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rtp", internal, 0.00048099999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_init", internal, 0.26000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sa", internal, 0.72999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sA", internal, 0.0054200000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sg", internal, 0.0022200000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigma1", internal, 129, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigma2", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigma3", internal, 7.79, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigma4", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sn", internal, 1.6000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t1", internal, 134.27000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t2", internal, 2.3900000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "theta1", internal, 10000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "theta2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tm_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tp_init", internal, 100000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u0", internal, 0.22, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u1", internal, 9.7999999999999993e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u2", internal, 0.002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y1", internal, 5.5699999999999999e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y2", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y3", internal, 1.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y4", internal, 1.47e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y5", internal, 0.002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y6", internal, 0.001, -Infinity, Infinity, false);
    internal.initial_A = internal.A_init;
    internal.initial_G = internal.G_init;
    internal.initial_Na = internal.Na_init;
    internal.initial_Nn = internal.Nn_init;
    internal.initial_P = internal.P_init;
    internal.initial_S = internal.S_init;
    internal.initial_Tm = internal.Tm_init;
    internal.initial_Tp = internal.Tp_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Tp = state[0];
    const Tm = state[1];
    const G = state[2];
    const A = state[3];
    const S = state[4];
    const P = state[5];
    const Nn = state[6];
    const Na = state[7];
    dstatedt[3] = 0 + 1 * internal.tumor_microenvironment * (internal.sA * Tp) - 1 * internal.tumor_microenvironment * internal.dA * A - 1 * internal.tumor_microenvironment * ((internal.y3 * Tp + internal.y4 * (S + P)) * A);
    dstatedt[2] = 0 + 1 * internal.tumor_microenvironment * (internal.sg * Tp) - 1 * internal.tumor_microenvironment * internal.dg * G - 1 * internal.tumor_microenvironment * ((internal.y1 * Tp + internal.y2 * (S + P)) * G);
    dstatedt[7] = 0 + 1 * internal.tumor_microenvironment * (internal.ca) + 1 * internal.tumor_microenvironment * (internal.sa * P) - 1 * internal.tumor_microenvironment * internal.da * Na - 1 * internal.tumor_microenvironment * (internal.y6 * Tp * Na);
    dstatedt[6] = 0 + 1 * internal.tumor_microenvironment * (internal.cn) + 1 * internal.tumor_microenvironment * (internal.sn * S) - 1 * internal.tumor_microenvironment * internal.dn * Nn - 1 * internal.tumor_microenvironment * (internal.y5 * Tp * Nn);
    dstatedt[5] = 0 + 1 * internal.tumor_microenvironment * (internal.rp * (1 - P / internal.kp) * P) + 1 * internal.tumor_microenvironment * (G * P / (internal.p1 + internal.p2 * G)) + 1 * internal.tumor_microenvironment * (A * P / (internal.p3 + internal.p4 * A));
    dstatedt[4] = 0 + 1 * internal.tumor_microenvironment * (internal.rs * (1 - S / internal.ks) * S) + 1 * internal.tumor_microenvironment * (G * S / (internal.sigma1 + internal.sigma2 * G)) + 1 * internal.tumor_microenvironment * (A * S / (internal.sigma3 + internal.sigma4 * A));
    dstatedt[1] = 0 + 1 * internal.tumor_microenvironment * ((internal.u0 + internal.u1 * A + internal.u2 * Na) * Tp) + 1 * internal.tumor_microenvironment * (internal.rtm * Tm) - 1 * internal.tumor_microenvironment * internal.dt * Tm;
    var ONn = internal.theta1 / (1 + internal.theta2 * Nn);
    dstatedt[0] = 0 + 1 * internal.tumor_microenvironment * (7 / 8 * Tp * (internal.rtp + G / (internal.t1 + internal.t2 * G)) * (1 - Tp / internal.kt) * (Tp / ONn - 1)) - 1 * internal.tumor_microenvironment * (internal.dt * (1 + internal.delta * A) * Tp) - 1 * internal.tumor_microenvironment * ((internal.u0 + internal.u1 * A + internal.u2 * Na) * Tp);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Tp", "Tm", "G", "A", "S", "P", "Nn", "Na"];
    this.metadata.internalOrder = {A_init: null, ca: null, cn: null, da: null, dA: null, delta: null, dg: null, dn: null, dt: null, G_init: null, initial_A: null, initial_G: null, initial_Na: null, initial_Nn: null, initial_P: null, initial_S: null, initial_Tm: null, initial_Tp: null, kp: null, ks: null, kt: null, Na_init: null, Nn_init: null, P_init: null, p1: null, p2: null, p3: null, p4: null, rp: null, rs: null, rtm: null, rtp: null, S_init: null, sa: null, sA: null, sg: null, sigma1: null, sigma2: null, sigma3: null, sigma4: null, sn: null, t1: null, t2: null, theta1: null, theta2: null, Tm_init: null, Tp_init: null, tumor_microenvironment: null, u0: null, u1: null, u2: null, y1: null, y2: null, y3: null, y4: null, y5: null, y6: null};
    this.metadata.variableOrder = {Tp: null, Tm: null, G: null, A: null, S: null, P: null, Nn: null, Na: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
