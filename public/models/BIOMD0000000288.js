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
    var state = Array(19).fill(0);
    state[0] = internal.initial_sumrc1;
    state[1] = internal.initial_r;
    state[2] = internal.initial_c1;
    state[3] = internal.initial_c2;
    state[4] = internal.initial_ePI3K;
    state[5] = internal.initial_m3PI;
    state[6] = internal.initial_eGEF;
    state[7] = internal.initial_mRas;
    state[8] = internal.initial_x1;
    state[9] = internal.initial_x2;
    state[10] = internal.initial_y;
    state[11] = internal.initial_yp;
    state[12] = internal.initial_ypp;
    state[13] = internal.initial_z;
    state[14] = internal.initial_zp;
    state[15] = internal.initial_zpp;
    state[16] = internal.initial_fGEF;
    state[17] = internal.initial_w;
    state[18] = internal.initial_eph;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alphaPI3K", "c1_init", "c2_init", "eGEF_init", "eph_init", "ePI3K_init", "fGEF_init", "Gamma", "k3PI", "kappaPI3K", "KDL", "kdw", "kdx1", "kdx2", "ke", "Kf", "kFBf", "kFBph", "KGP", "KGR", "kminusx", "KMx11", "KMx12", "KMx21", "KMx22", "KMy1", "KMy2", "KMyph1", "KMyph2", "KMzph1", "KMzph2", "Kph", "kRas", "kt", "Kx2", "kxR0", "L", "m3PI_init", "mRas_init", "n", "p", "r_init", "sumrc1_init", "VmaxOVERKMx11", "VmaxOVERKMx12", "VmaxOVERKMx21", "VmaxOVERKMx22", "VmaxOVERKMy1", "VmaxOVERKMy2", "VmaxOVERKMyph1", "VmaxOVERKMyph2", "VmaxOVERKMzph1", "VmaxOVERKMzph2", "w_init", "Wph", "x1_init", "x2_init", "y_init", "yp_init", "ypp_init", "z_init", "Zf", "zp_init", "zpp_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alphaPI3K", internal, 80, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "eGEF_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "eph_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ePI3K_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "fGEF_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Gamma", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3PI", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kappaPI3K", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KDL", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdw", internal, 0.033300000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdx1", internal, 0.745, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdx2", internal, 2.8500000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ke", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kf", internal, 3.7599999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kFBf", internal, 0.97599999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kFBph", internal, 2.3399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KGP", internal, 5.0899999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KGR", internal, 495, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kminusx", internal, 0.0070000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KMx11", internal, 30.300000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KMx12", internal, 18.600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KMx21", internal, 13.699999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KMx22", internal, 9.5899999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KMy1", internal, 9.9100000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KMy2", internal, 8.8100000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KMyph1", internal, 23, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KMyph2", internal, 7.9900000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KMzph1", internal, 8.2699999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KMzph2", internal, 31.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kph", internal, 4.6399999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kRas", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kt", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kx2", internal, 6.7699999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxR0", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m3PI_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mRas_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 1.03, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p", internal, 1.98, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sumrc1_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VmaxOVERKMx11", internal, 1.1799999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VmaxOVERKMx12", internal, 3.4500000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VmaxOVERKMx21", internal, 0.40500000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VmaxOVERKMx22", internal, 1.0900000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VmaxOVERKMy1", internal, 6.5700000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VmaxOVERKMy2", internal, 31.899999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VmaxOVERKMyph1", internal, 1.6499999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VmaxOVERKMyph2", internal, 4.2000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VmaxOVERKMzph1", internal, 0.16700000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VmaxOVERKMzph2", internal, 0.22800000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "w_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Wph", internal, 0.38500000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "yp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ypp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "z_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Zf", internal, 0.27200000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "zp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "zpp_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_c1 = internal.c1_init;
    internal.initial_c2 = internal.c2_init;
    internal.initial_eGEF = internal.eGEF_init;
    internal.initial_eph = internal.eph_init;
    internal.initial_ePI3K = internal.ePI3K_init;
    internal.initial_fGEF = internal.fGEF_init;
    internal.initial_m3PI = internal.m3PI_init;
    internal.initial_mRas = internal.mRas_init;
    internal.initial_r = internal.r_init;
    internal.initial_sumrc1 = internal.sumrc1_init;
    internal.initial_w = internal.w_init;
    internal.initial_x1 = internal.x1_init;
    internal.initial_x2 = internal.x2_init;
    internal.initial_y = internal.y_init;
    internal.initial_yp = internal.yp_init;
    internal.initial_ypp = internal.ypp_init;
    internal.initial_z = internal.z_init;
    internal.initial_zp = internal.zp_init;
    internal.initial_zpp = internal.zpp_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const sumrc1 = state[0];
    const c1 = state[2];
    const c2 = state[3];
    const ePI3K = state[4];
    const m3PI = state[5];
    const eGEF = state[6];
    const mRas = state[7];
    const x1 = state[8];
    const x2 = state[9];
    const y = state[10];
    const yp = state[11];
    const ypp = state[12];
    const z = state[13];
    const zp = state[14];
    const zpp = state[15];
    const fGEF = state[16];
    const w = state[17];
    const eph = state[18];
    dstatedt[2] = 0;
    dstatedt[6] = 0;
    dstatedt[4] = 0;
    dstatedt[1] = 0;
    dstatedt[11] = 0;
    dstatedt[14] = 0;
    dstatedt[3] = 0 + 1 * internal.kxR0 * Math.pow((c1), (2)) - (internal.kminusx + internal.ke) * c2;
    dstatedt[18] = 0 + 1 * internal.kFBph * (Math.pow((w), (internal.p)) / (Math.pow((internal.Wph), (internal.p)) + Math.pow((w), (internal.p))) - (eph - 1) / internal.Kph);
    dstatedt[16] = 0 + 1 * internal.kFBf * ((1 - fGEF) / internal.Kf - Math.pow((zpp), (internal.n)) / (Math.pow((internal.Zf), (internal.n)) + Math.pow((zpp), (internal.n))) * fGEF);
    dstatedt[5] = 0 + 1 * internal.k3PI * (ePI3K - m3PI);
    dstatedt[7] = 0 + 1 * internal.kRas * ((1 + internal.Gamma) * eGEF - (1 + internal.Gamma * eGEF) * mRas);
    dstatedt[0] = 0 + 1 * internal.kt * (1 - sumrc1) + 2 * (internal.kminusx * c2 - internal.kxR0 * Math.pow((c1), (2)));
    dstatedt[17] = 0 + 1 * internal.kdw * (zpp - w);
    dstatedt[8] = 0 + 1 * internal.kdx1 * (mRas - x1 / (1 + y / internal.KMx11 + yp / internal.KMx12));
    dstatedt[9] = 0 + 1 * internal.kdx2 * ((1 + internal.Kx2) * m3PI / (1 + internal.Kx2 * m3PI) - x2 / (1 + y / internal.KMx21 + yp / internal.KMx22));
    dstatedt[10] = 0 + 1 * internal.VmaxOVERKMyph1 * yp / (1 + yp / internal.KMyph1 + ypp / internal.KMyph2) - internal.VmaxOVERKMx11 * x1 * y / (1 + y / internal.KMx11 + yp / internal.KMx12) - internal.VmaxOVERKMx21 * x2 * y / (1 + y / internal.KMx21 + yp / internal.KMx22);
    dstatedt[12] = 0 + 1 * internal.VmaxOVERKMx12 * x1 * yp / (1 + y / internal.KMx11 + yp / internal.KMx12) + internal.VmaxOVERKMx22 * x2 * yp / (1 + y / internal.KMx21 + yp / internal.KMx22) - internal.VmaxOVERKMyph2 * ypp / ((1 + z / internal.KMy1 + zp / internal.KMy2) * (1 + yp / internal.KMyph1) + ypp / internal.KMyph2);
    dstatedt[13] = 0 + 1 * internal.VmaxOVERKMzph1 * eph * zp / (1 + zp / internal.KMzph1 + zpp / internal.KMzph2) - internal.VmaxOVERKMy1 * ypp * z / (1 + z / internal.KMy1 + zp / internal.KMy2);
    dstatedt[15] = 0 + 1 * internal.VmaxOVERKMy2 * ypp * zp / (1 + z / internal.KMy1 + zp / internal.KMy2) - internal.VmaxOVERKMzph2 * eph * zpp / (1 + zp / internal.KMzph1 + zpp / internal.KMzph2);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "sumrc1", "r", "c1", "c2", "ePI3K", "m3PI", "eGEF", "mRas", "x1", "x2", "y", "yp", "ypp", "z", "zp", "zpp", "fGEF", "w", "eph"];
    this.metadata.internalOrder = {alphaPI3K: null, c1_init: null, c2_init: null, cell: null, eGEF_init: null, eph_init: null, ePI3K_init: null, fGEF_init: null, Gamma: null, initial_c1: null, initial_c2: null, initial_eGEF: null, initial_eph: null, initial_ePI3K: null, initial_fGEF: null, initial_m3PI: null, initial_mRas: null, initial_r: null, initial_sumrc1: null, initial_w: null, initial_x1: null, initial_x2: null, initial_y: null, initial_yp: null, initial_ypp: null, initial_z: null, initial_zp: null, initial_zpp: null, k3PI: null, kappaPI3K: null, KDL: null, kdw: null, kdx1: null, kdx2: null, ke: null, Kf: null, kFBf: null, kFBph: null, KGP: null, KGR: null, kminusx: null, KMx11: null, KMx12: null, KMx21: null, KMx22: null, KMy1: null, KMy2: null, KMyph1: null, KMyph2: null, KMzph1: null, KMzph2: null, Kph: null, kRas: null, kt: null, Kx2: null, kxR0: null, L: null, m3PI_init: null, mRas_init: null, n: null, p: null, r_init: null, sumrc1_init: null, VmaxOVERKMx11: null, VmaxOVERKMx12: null, VmaxOVERKMx21: null, VmaxOVERKMx22: null, VmaxOVERKMy1: null, VmaxOVERKMy2: null, VmaxOVERKMyph1: null, VmaxOVERKMyph2: null, VmaxOVERKMzph1: null, VmaxOVERKMzph2: null, w_init: null, Wph: null, x1_init: null, x2_init: null, y_init: null, yp_init: null, ypp_init: null, z_init: null, Zf: null, zp_init: null, zpp_init: null};
    this.metadata.variableOrder = {sumrc1: null, r: null, c1: null, c2: null, ePI3K: null, m3PI: null, eGEF: null, mRas: null, x1: null, x2: null, y: null, yp: null, ypp: null, z: null, zp: null, zpp: null, fGEF: null, w: null, eph: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
