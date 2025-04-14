export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell = 1;
    internal.medium = 1;
    internal.pi = 3.1415929999999999;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(16).fill(0);
    state[0] = internal.initial_glc;
    state[1] = internal.initial_g1p;
    state[2] = internal.initial_g6p;
    state[3] = internal.initial_trh;
    state[4] = internal.initial_t6p;
    state[5] = internal.initial_udg;
    state[6] = internal.initial_adp;
    state[7] = internal.initial_atp;
    state[8] = internal.initial_ppi;
    state[9] = internal.initial_f6p;
    state[10] = internal.initial_h;
    state[11] = internal.initial_pho;
    state[12] = internal.initial_udp;
    state[13] = internal.initial_utp;
    state[14] = internal.initial_h2o;
    state[15] = internal.initial_glx;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["activity", "adp_init", "atp_init", "f6p_init", "g1p_0", "g6p_0", "glc_0", "glx_init", "h_init", "h2o_init", "heat", "Kadp", "Katp", "Keq", "Kf6p", "Kg1p", "Kg6p", "Kglc", "Ki", "Kit6p", "Kiudg", "Kiutp", "Kt6p", "Ktrh", "Kudg", "Kutp", "pho_init", "ppi_init", "shock", "t6p_0", "trh_0", "udg_0", "udp_init", "utp_init", "Vmax"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "activity", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "adp_init", internal, 1.282, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "atp_init", internal, 2.5249999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f6p_init", internal, 0.625, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g1p_0", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g6p_0", internal, 2.6749999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "glc_0", internal, 0.097650000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "glx_init", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h2o_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "heat", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kadp", internal, 0.23000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Katp", internal, 0.14999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Keq", internal, 0.16669999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kf6p", internal, 0.28999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kg1p", internal, 0.32000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kg6p", internal, 3.7999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kglc", internal, 0.080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ki", internal, 0.91000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kit6p", internal, 0.040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kiudg", internal, 0.0035000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kiutp", internal, 0.11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kt6p", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ktrh", internal, 2.9900000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kudg", internal, 0.88600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kutp", internal, 0.11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pho_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ppi_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "shock", internal, 16, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t6p_0", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "trh_0", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "udg_0", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "udp_init", internal, 0.28149999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "utp_init", internal, 0.64910000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vmax", internal, 36.82, -Infinity, Infinity, false);
    internal.g1p_init = internal.g1p_0;
    internal.g6p_init = internal.g6p_0;
    internal.glc_init = internal.glc_0;
    internal.initial_adp = internal.adp_init;
    internal.initial_atp = internal.atp_init;
    internal.initial_f6p = internal.f6p_init;
    internal.initial_glx = internal.glx_init;
    internal.initial_h = internal.h_init;
    internal.initial_h2o = internal.h2o_init;
    internal.initial_pho = internal.pho_init;
    internal.initial_ppi = internal.ppi_init;
    internal.initial_udp = internal.udp_init;
    internal.initial_utp = internal.utp_init;
    internal.t6p_init = internal.t6p_0;
    internal.trh_init = internal.trh_0;
    internal.udg_init = internal.udg_0;
    internal.initial_g1p = internal.g1p_init;
    internal.initial_g6p = internal.g6p_init;
    internal.initial_glc = internal.glc_init;
    internal.initial_t6p = internal.t6p_init;
    internal.initial_trh = internal.trh_init;
    internal.initial_udg = internal.udg_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const glc = state[0];
    const g1p = state[1];
    const g6p = state[2];
    const trh = state[3];
    const t6p = state[4];
    const udg = state[5];
    const adp = state[6];
    const atp = state[7];
    const f6p = state[9];
    const utp = state[13];
    const glx = state[15];
    dstatedt[6] = 0;
    dstatedt[7] = 0;
    dstatedt[9] = 0;
    dstatedt[15] = 0;
    dstatedt[10] = 0;
    dstatedt[14] = 0;
    dstatedt[11] = 0;
    dstatedt[8] = 0;
    dstatedt[12] = 0;
    dstatedt[13] = 0;
    dstatedt[1] = 0 + 1 * internal.cell * Math.pow((internal.shock), (internal.heat)) * internal.Vmax / internal.Kg6p * (g6p - g1p / internal.Keq) / (1 + g6p / internal.Kg6p + g1p / internal.Kg1p) - 1 * internal.cell * Math.pow((internal.shock), (internal.heat)) * internal.Vmax * utp * g1p / (internal.Kutp * internal.Kg1p) / (internal.Kiutp / internal.Kutp + utp / internal.Kutp + g1p / internal.Kg1p + utp * g1p / (internal.Kutp * internal.Kg1p) + internal.Kiutp / internal.Kutp * udg / internal.Kiudg + g1p * udg / (internal.Kg1p * internal.Kiudg));
    dstatedt[2] = 0 - 1 * internal.cell * Math.pow((internal.shock), (internal.heat)) * internal.Vmax / internal.Kg6p * (g6p - f6p / internal.Keq) / (1 + g6p / internal.Kg6p + f6p / internal.Kf6p) + 1 * internal.cell * Math.pow((internal.shock), (internal.heat)) * internal.Vmax / (internal.Kglc * internal.Katp) * (glc * atp - g6p * adp / internal.Keq) / ((1 + glc / internal.Kglc + g6p / internal.Kg6p + t6p / internal.Kit6p) * (1 + atp / internal.Katp + adp / internal.Kadp)) - 1 * internal.cell * Math.pow((internal.shock), (internal.heat)) * internal.Vmax / internal.Kg6p * (g6p - g1p / internal.Keq) / (1 + g6p / internal.Kg6p + g1p / internal.Kg1p) - 1 * internal.cell * internal.activity * Math.pow((internal.shock), (internal.heat)) * internal.Vmax * g6p * udg / (internal.Kg6p * internal.Kudg) / ((1 + g6p / internal.Kg6p) * (1 + udg / internal.Kudg));
    dstatedt[0] = 0 + 1 * internal.cell * Math.pow((internal.shock), (internal.heat)) * internal.Vmax * (glx - glc) / internal.Kglc / (1 + (glx + glc) / internal.Kglc + internal.Ki * glx * glc / Math.pow((internal.Kglc), (2))) - 1 * internal.cell * Math.pow((internal.shock), (internal.heat)) * internal.Vmax / (internal.Kglc * internal.Katp) * (glc * atp - g6p * adp / internal.Keq) / ((1 + glc / internal.Kglc + g6p / internal.Kg6p + t6p / internal.Kit6p) * (1 + atp / internal.Katp + adp / internal.Kadp)) + 2 * internal.cell * Math.pow((internal.shock), (internal.heat)) * internal.Vmax * trh / internal.Ktrh / (1 + trh / internal.Ktrh);
    dstatedt[4] = 0 - 1 * internal.cell * Math.pow((internal.shock), (internal.heat)) * internal.Vmax * t6p / internal.Kt6p / (1 + t6p / internal.Kt6p) + 1 * internal.cell * internal.activity * Math.pow((internal.shock), (internal.heat)) * internal.Vmax * g6p * udg / (internal.Kg6p * internal.Kudg) / ((1 + g6p / internal.Kg6p) * (1 + udg / internal.Kudg));
    dstatedt[3] = 0 + 1 * internal.cell * Math.pow((internal.shock), (internal.heat)) * internal.Vmax * t6p / internal.Kt6p / (1 + t6p / internal.Kt6p) - 1 * internal.cell * Math.pow((internal.shock), (internal.heat)) * internal.Vmax * trh / internal.Ktrh / (1 + trh / internal.Ktrh);
    dstatedt[5] = 0 - 1 * internal.cell * internal.activity * Math.pow((internal.shock), (internal.heat)) * internal.Vmax * g6p * udg / (internal.Kg6p * internal.Kudg) / ((1 + g6p / internal.Kg6p) * (1 + udg / internal.Kudg)) + 1 * internal.cell * Math.pow((internal.shock), (internal.heat)) * internal.Vmax * utp * g1p / (internal.Kutp * internal.Kg1p) / (internal.Kiutp / internal.Kutp + utp / internal.Kutp + g1p / internal.Kg1p + utp * g1p / (internal.Kutp * internal.Kg1p) + internal.Kiutp / internal.Kutp * udg / internal.Kiudg + g1p * udg / (internal.Kg1p * internal.Kiudg));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "glc", "g1p", "g6p", "trh", "t6p", "udg", "adp", "atp", "ppi", "f6p", "h", "pho", "udp", "utp", "h2o", "glx"];
    this.metadata.internalOrder = {activity: null, adp_init: null, atp_init: null, cell: null, f6p_init: null, g1p_0: null, g1p_init: null, g6p_0: null, g6p_init: null, glc_0: null, glc_init: null, glx_init: null, h_init: null, h2o_init: null, heat: null, initial_adp: null, initial_atp: null, initial_f6p: null, initial_g1p: null, initial_g6p: null, initial_glc: null, initial_glx: null, initial_h: null, initial_h2o: null, initial_pho: null, initial_ppi: null, initial_t6p: null, initial_trh: null, initial_udg: null, initial_udp: null, initial_utp: null, Kadp: null, Katp: null, Keq: null, Kf6p: null, Kg1p: null, Kg6p: null, Kglc: null, Ki: null, Kit6p: null, Kiudg: null, Kiutp: null, Kt6p: null, Ktrh: null, Kudg: null, Kutp: null, medium: null, pho_init: null, pi: null, ppi_init: null, shock: null, t6p_0: null, t6p_init: null, trh_0: null, trh_init: null, udg_0: null, udg_init: null, udp_init: null, utp_init: null, Vmax: null};
    this.metadata.variableOrder = {glc: null, g1p: null, g6p: null, trh: null, t6p: null, udg: null, adp: null, atp: null, ppi: null, f6p: null, h: null, pho: null, udp: null, utp: null, h2o: null, glx: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
