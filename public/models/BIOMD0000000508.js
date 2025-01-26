export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var ad_init = internal.addash + internal.gamma * (internal.initial_ca - internal.p1);
    var ca_init = internal.p1 + internal.p2 * Math.pow((internal.initial_ip3), (internal.m)) / (Math.pow((internal.p3), (internal.m)) + Math.pow((internal.initial_ip3), (internal.m))) + internal.p4 * Math.pow((internal.initial_ip3), (internal.n)) / (Math.pow((internal.p5), (internal.n)) + Math.pow((internal.initial_ip3), (internal.n)));
    var dcon_init = (Math.tanh((internal.initial_d - internal.dcrit) / 0.01) + 1) / 2;
    var delta_init = internal.initial_kg * internal.kdeg * internal.ip30 / (internal.rhstar - internal.kdeg * internal.ip30);
    var gstar_init = (internal.initial_ro + internal.initial_delta) / (internal.initial_kg + internal.initial_delta + internal.initial_ro);
    var ip3con_init = (Math.tanh((internal.initial_ip3 - internal.ip3min) / 0.01) + 1) / 2;
    var ro_init = internal.initial_atp / (internal.kr + internal.initial_atp);
    internal.initial_ad = ad_init;
    internal.initial_ca = ca_init;
    internal.initial_dcon = dcon_init;
    internal.initial_delta = delta_init;
    internal.initial_gstar = gstar_init;
    internal.initial_ip3con = ip3con_init;
    internal.initial_ro = ro_init;
    var state = Array(16).fill(0);
    state[0] = internal.initial_d;
    state[1] = internal.initial_ad;
    state[2] = internal.initial_e;
    state[3] = internal.initial_r;
    state[4] = internal.initial_rs;
    state[5] = internal.initial_x;
    state[6] = internal.initial_ip3;
    state[7] = internal.initial_kg;
    state[8] = internal.initial_gstar;
    state[9] = internal.initial_ro;
    state[10] = internal.initial_ip3con;
    state[11] = internal.initial_dcon;
    state[12] = internal.initial_atp;
    state[13] = internal.initial_y;
    state[14] = internal.initial_delta;
    state[15] = internal.initial_ca;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["addash", "ae", "af", "alpha", "atp_init", "ax", "cabasil", "d_init", "datpp", "dcrit", "ddd", "dee", "dip", "dist", "dxx", "e_init", "f", "g", "gamma", "gf", "ip3_init", "ip30", "ip3min", "ka", "kd", "kdeg", "kkdeg", "kr", "krel", "kxk", "m", "n", "p1", "p2", "p3", "p4", "p5", "pd", "pe", "ps", "px", "qd", "qe", "qx", "r_init", "rhstar", "rs_init", "rt", "scale", "smoothness", "vatp_s", "vdeg", "x_init", "y_init", "ymax", "yo"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "addash", internal, 0.40999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ae", internal, 0.16, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "af", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha", internal, 0.083000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "atp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ax", internal, 0.080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cabasil", internal, 0.020552359999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "datpp", internal, 300, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dcrit", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ddd", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dee", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dip", internal, 280, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dist", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dxx", internal, 1.04, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g", internal, 0.52800000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gf", internal, 6.2999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ip3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ip30", internal, 0.012999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ip3min", internal, 0.012, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ka", internal, 0.017000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd", internal, 0.14999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdeg", internal, 0.0625, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kkdeg", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kr", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "krel", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m", internal, 24.194600000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 9.7918299999999991, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p1", internal, 0.015983500000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p2", internal, 0.51498699999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p3", internal, 1.3131900000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p4", internal, 0.33219500000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p5", internal, 0.78790199999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pd", internal, 0.47999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pe", internal, 0.096000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ps", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "px", internal, 0.47999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "qd", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "qe", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "qx", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rhstar", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rs_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rt", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "scale", internal, 3600, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "smoothness", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vatp_s", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vdeg", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ymax", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "yo", internal, 1.5, -Infinity, Infinity, false);
    internal.initial_atp = internal.atp_init;
    internal.initial_d = internal.d_init;
    internal.initial_e = internal.e_init;
    internal.initial_ip3 = internal.ip3_init;
    internal.initial_r = internal.r_init;
    internal.initial_rs = internal.rs_init;
    internal.initial_x = internal.x_init;
    internal.initial_y = internal.y_init;
    internal.kg_init = internal.kd / internal.ka;
    internal.initial_kg = internal.kg_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const d = state[0];
    const ad = state[1];
    const e = state[2];
    const r = state[3];
    const rs = state[4];
    const x = state[5];
    const ip3 = state[6];
    const gstar = state[8];
    const ip3con = state[10];
    const dcon = state[11];
    const atp = state[12];
    const y = state[13];
    dstatedt[1] = 0 + 0;
    dstatedt[15] = 0 + 0;
    dstatedt[11] = 0 + 0;
    dstatedt[14] = 0 + 0;
    dstatedt[8] = 0 + 0;
    dstatedt[10] = 0 + 0;
    dstatedt[7] = 0 + 0;
    dstatedt[9] = 0 + 0;
    dstatedt[12] = 0 + internal.scale * (internal.vatp_s * (y - atp) * dcon * ip3con * ((ip3 - internal.ip3min) / (internal.krel + ip3)) - internal.vdeg * atp / (internal.kkdeg + atp));
    dstatedt[0] = 0 + ad * (internal.kxk * internal.gf / (1 + internal.kxk * internal.gf)) - internal.ddd * e * d;
    dstatedt[2] = 0 + internal.ae * (1 + internal.af * (internal.yo - rs)) - internal.dee * x * e;
    dstatedt[6] = 0 + internal.scale * (internal.rhstar * gstar - internal.kdeg * ip3);
    dstatedt[3] = 0 + internal.px * (internal.rt - rs - r) * x / (internal.qx + (internal.rt - rs - r) + x) - internal.ps * (internal.yo - rs) * r;
    dstatedt[4] = 0 + internal.ps * (internal.yo - rs) * r - internal.pd * rs * d / (internal.qd + rs + d) - internal.pe * rs * e / (internal.qe + rs + e);
    dstatedt[5] = 0 + internal.ax * e + internal.f * (internal.yo - rs) + internal.g * Math.pow((x), (2)) * e - internal.dxx * x;
    dstatedt[13] = 0 + internal.scale * (internal.alpha * (internal.ymax - y) - dcon * ip3con * internal.vatp_s * (y - atp) * ((ip3 - internal.ip3min) / (internal.krel + ip3)));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "d", "ad", "e", "r", "rs", "x", "ip3", "kg", "gstar", "ro", "ip3con", "dcon", "atp", "y", "delta", "ca"];
    this.metadata.internalOrder = {addash: null, ae: null, af: null, alpha: null, atp_init: null, ax: null, cabasil: null, cell: null, d_init: null, datpp: null, dcrit: null, ddd: null, dee: null, dip: null, dist: null, dxx: null, e_init: null, f: null, g: null, gamma: null, gf: null, initial_ad: null, initial_atp: null, initial_ca: null, initial_d: null, initial_dcon: null, initial_delta: null, initial_e: null, initial_gstar: null, initial_ip3: null, initial_ip3con: null, initial_kg: null, initial_r: null, initial_ro: null, initial_rs: null, initial_x: null, initial_y: null, ip3_init: null, ip30: null, ip3min: null, ka: null, kd: null, kdeg: null, kg_init: null, kkdeg: null, kr: null, krel: null, kxk: null, m: null, n: null, p1: null, p2: null, p3: null, p4: null, p5: null, pd: null, pe: null, ps: null, px: null, qd: null, qe: null, qx: null, r_init: null, rhstar: null, rs_init: null, rt: null, scale: null, smoothness: null, vatp_s: null, vdeg: null, x_init: null, y_init: null, ymax: null, yo: null};
    this.metadata.variableOrder = {d: null, ad: null, e: null, r: null, rs: null, x: null, ip3: null, kg: null, gstar: null, ro: null, ip3con: null, dcon: null, atp: null, y: null, delta: null, ca: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
