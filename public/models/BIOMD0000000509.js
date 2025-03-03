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
    state[11] = internal.initial_rscon;
    state[12] = internal.initial_atp;
    state[13] = internal.initial_y;
    state[14] = internal.initial_delta;
    state[15] = internal.initial_ca;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["ad_init", "addash", "ae", "af", "alpha", "atp_init", "ax", "ca_init", "cabasil", "d_init", "datpp", "ddd", "dee", "delta_init", "dip", "dist", "dxx", "e_init", "f", "g", "gamma", "gf", "gstar_init", "ip3_init", "ip30", "ip3con_init", "ip3min", "ka", "kd", "kdeg", "kg_init", "kkdeg", "kr", "krel", "kxk", "m", "n", "p1", "p2", "p3", "p4", "p5", "pd", "pe", "ps", "px", "qd", "qe", "qx", "r_init", "rhstar", "ro_init", "rs_init", "rscon_init", "rscrit", "rt", "scale", "smoothness", "vatp_s", "vdeg", "x_init", "y_init", "ymax", "yo"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "ad_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "addash", internal, 0.40999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ae", internal, 0.16, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "af", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha", internal, 0.083000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "atp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ax", internal, 0.080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ca_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cabasil", internal, 0.020552359999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "datpp", internal, 300, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ddd", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dee", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dip", internal, 280, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dist", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dxx", internal, 1.04, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g", internal, 0.52800000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gf", internal, 6.2999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gstar_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ip3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ip30", internal, 0.012999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ip3con_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ip3min", internal, 0.012, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ka", internal, 0.017000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd", internal, 0.14999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdeg", internal, 0.0625, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kg_init", internal, 0, -Infinity, Infinity, false);
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
    this.base.user.setUserScalar(user, "ro_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rs_init", internal, 1.1000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rscon_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rscrit", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rt", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "scale", internal, 3600, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "smoothness", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vatp_s", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vdeg", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ymax", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "yo", internal, 1.5, -Infinity, Infinity, false);
    internal.initial_ad = internal.ad_init;
    internal.initial_atp = internal.atp_init;
    internal.initial_ca = internal.ca_init;
    internal.initial_d = internal.d_init;
    internal.initial_delta = internal.delta_init;
    internal.initial_e = internal.e_init;
    internal.initial_gstar = internal.gstar_init;
    internal.initial_ip3 = internal.ip3_init;
    internal.initial_ip3con = internal.ip3con_init;
    internal.initial_kg = internal.kg_init;
    internal.initial_r = internal.r_init;
    internal.initial_ro = internal.ro_init;
    internal.initial_rs = internal.rs_init;
    internal.initial_rscon = internal.rscon_init;
    internal.initial_x = internal.x_init;
    internal.initial_y = internal.y_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    dstatedt[1] = 0;
    dstatedt[12] = 0;
    dstatedt[15] = 0;
    dstatedt[0] = 0;
    dstatedt[14] = 0;
    dstatedt[2] = 0;
    dstatedt[8] = 0;
    dstatedt[6] = 0;
    dstatedt[10] = 0;
    dstatedt[7] = 0;
    dstatedt[3] = 0;
    dstatedt[9] = 0;
    dstatedt[4] = 0;
    dstatedt[11] = 0;
    dstatedt[5] = 0;
    dstatedt[13] = 0;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "d", "ad", "e", "r", "rs", "x", "ip3", "kg", "gstar", "ro", "ip3con", "rscon", "atp", "y", "delta", "ca"];
    this.metadata.internalOrder = {ad_init: null, addash: null, ae: null, af: null, alpha: null, atp_init: null, ax: null, ca_init: null, cabasil: null, cell: null, d_init: null, datpp: null, ddd: null, dee: null, delta_init: null, dip: null, dist: null, dxx: null, e_init: null, f: null, g: null, gamma: null, gf: null, gstar_init: null, initial_ad: null, initial_atp: null, initial_ca: null, initial_d: null, initial_delta: null, initial_e: null, initial_gstar: null, initial_ip3: null, initial_ip3con: null, initial_kg: null, initial_r: null, initial_ro: null, initial_rs: null, initial_rscon: null, initial_x: null, initial_y: null, ip3_init: null, ip30: null, ip3con_init: null, ip3min: null, ka: null, kd: null, kdeg: null, kg_init: null, kkdeg: null, kr: null, krel: null, kxk: null, m: null, n: null, p1: null, p2: null, p3: null, p4: null, p5: null, pd: null, pe: null, ps: null, px: null, qd: null, qe: null, qx: null, r_init: null, rhstar: null, ro_init: null, rs_init: null, rscon_init: null, rscrit: null, rt: null, scale: null, smoothness: null, vatp_s: null, vdeg: null, x_init: null, y_init: null, ymax: null, yo: null};
    this.metadata.variableOrder = {d: null, ad: null, e: null, r: null, rs: null, x: null, ip3: null, kg: null, gstar: null, ro: null, ip3con: null, rscon: null, atp: null, y: null, delta: null, ca: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
