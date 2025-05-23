export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Cell = 1;
    internal.pi = 3.1415929999999999;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(28).fill(0);
    state[0] = internal.initial_LCKi;
    state[1] = internal.initial_LCKyi;
    state[2] = internal.initial_LCKya;
    state[3] = internal.initial_LCKyiya;
    state[4] = internal.initial_LCKpi;
    state[5] = internal.initial_PD1;
    state[6] = internal.initial_PD1p1;
    state[7] = internal.initial_PD1p2;
    state[8] = internal.initial_CP1;
    state[9] = internal.initial_SHP2;
    state[10] = internal.initial_CP2;
    state[11] = internal.initial_CD28a;
    state[12] = internal.initial_CD28i;
    state[13] = internal.initial_PI3K;
    state[14] = internal.initial_PI3Kb;
    state[15] = internal.initial_CD3a;
    state[16] = internal.initial_CD3i;
    state[17] = internal.initial_ZAP70a1;
    state[18] = internal.initial_ZAP70i;
    state[19] = internal.initial_ZAP70;
    state[20] = internal.initial_ZAP70a2;
    state[21] = internal.initial_LATa;
    state[22] = internal.initial_LATi;
    state[23] = internal.initial_GADS;
    state[24] = internal.initial_SLP76;
    state[25] = internal.initial_SLP76i;
    state[26] = internal.initial_SLP76a;
    state[27] = internal.initial_GADSa;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["CD28a_init", "CD28i_init", "CD3a_init", "CD3i_init", "CP1_init", "CP2_init", "GADS_init", "GADSa_init", "Ka_gads", "Ka_pi3k", "Ka_shp", "Ka_slp", "Ka_zap", "Kd_gads", "Kd_pi3k", "Kd_slp", "Kd_zap", "Kd1_shp", "Kd2_shp", "Kdp_cd28", "Kdp_cd3", "Kdp_cp2", "KMdp_cd28", "KMdp_cd3", "KMp_cd28", "KMp_cd3", "KMp_pd1", "Kp_cd28", "Kp_cd3", "Kp_lat", "Kp_pd1", "Kp_slp", "Kp1_zap", "Kp2_zap", "Kpa_i", "Kpa_yi", "Kpi_i", "Kpi_ya", "kxk", "LATa_init", "LATi_init", "LCK_switch", "LCKi_init", "LCKpi_init", "LCKya_init", "LCKyi_init", "LCKyiya_init", "PD1_init", "PD1p1_init", "PD1p2_init", "PI3K_init", "PI3Kb_init", "SHP2_init", "SLP76_init", "SLP76a_init", "SLP76i_init", "ZAP70_init", "ZAP70a1_init", "ZAP70a2_init", "ZAP70i_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "CD28a_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CD28i_init", internal, 250, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CD3a_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CD3i_init", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CP1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CP2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GADS_init", internal, 300, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GADSa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ka_gads", internal, 0.00050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ka_pi3k", internal, 1.3999999999999999e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ka_shp", internal, 0.0064999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ka_slp", internal, 0.014999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ka_zap", internal, 6.9999999999999994e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kd_gads", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kd_pi3k", internal, 0.00089999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kd_slp", internal, 0.12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kd_zap", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kd1_shp", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kd2_shp", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kdp_cd28", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kdp_cd3", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kdp_cp2", internal, 4.9999999999999998e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KMdp_cd28", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KMdp_cd3", internal, 150, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KMp_cd28", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KMp_cd3", internal, 80, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KMp_pd1", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kp_cd28", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kp_cd3", internal, 3.29, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kp_lat", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kp_pd1", internal, 7.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kp_slp", internal, 0.0030000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kp1_zap", internal, 1.9999999999999999e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kp2_zap", internal, 3.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kpa_i", internal, 9.9999999999999995e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kpa_yi", internal, 0.00075000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kpi_i", internal, 5.9999999999999997e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kpi_ya", internal, 6.0000000000000002e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 41, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "LATa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "LATi_init", internal, 300, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "LCK_switch", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "LCKi_init", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "LCKpi_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "LCKya_init", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "LCKyi_init", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "LCKyiya_init", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PD1_init", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PD1p1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PD1p2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PI3K_init", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PI3Kb_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SHP2_init", internal, 300, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SLP76_init", internal, 300, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SLP76a_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SLP76i_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ZAP70_init", internal, 300, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ZAP70a1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ZAP70a2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ZAP70i_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_CD28a = internal.CD28a_init;
    internal.initial_CD28i = internal.CD28i_init;
    internal.initial_CD3a = internal.CD3a_init;
    internal.initial_CD3i = internal.CD3i_init;
    internal.initial_CP1 = internal.CP1_init;
    internal.initial_CP2 = internal.CP2_init;
    internal.initial_GADS = internal.GADS_init;
    internal.initial_GADSa = internal.GADSa_init;
    internal.initial_LATa = internal.LATa_init;
    internal.initial_LATi = internal.LATi_init;
    internal.initial_LCKi = internal.LCKi_init;
    internal.initial_LCKpi = internal.LCKpi_init;
    internal.initial_LCKya = internal.LCKya_init;
    internal.initial_LCKyi = internal.LCKyi_init;
    internal.initial_LCKyiya = internal.LCKyiya_init;
    internal.initial_PD1 = internal.PD1_init;
    internal.initial_PD1p1 = internal.PD1p1_init;
    internal.initial_PD1p2 = internal.PD1p2_init;
    internal.initial_PI3K = internal.PI3K_init;
    internal.initial_PI3Kb = internal.PI3Kb_init;
    internal.initial_SHP2 = internal.SHP2_init;
    internal.initial_SLP76 = internal.SLP76_init;
    internal.initial_SLP76a = internal.SLP76a_init;
    internal.initial_SLP76i = internal.SLP76i_init;
    internal.initial_ZAP70 = internal.ZAP70_init;
    internal.initial_ZAP70a1 = internal.ZAP70a1_init;
    internal.initial_ZAP70a2 = internal.ZAP70a2_init;
    internal.initial_ZAP70i = internal.ZAP70i_init;
    internal.ModelValue_0 = internal.LCK_switch;
    internal.Kdpa_pi = 1.1999999999999999e-07 * internal.ModelValue_0;
    internal.Kdpa_ya = 6.0000000000000002e-06 * internal.ModelValue_0;
    internal.Kdpa_yiya = 2.4000000000000001e-05 * internal.ModelValue_0;
    internal.Kdpi_yi = 2.4000000000000001e-05 * internal.ModelValue_0;
    internal.Kdpi_yiya = 1.2e-05 * internal.ModelValue_0;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const LCKi = state[0];
    const LCKyi = state[1];
    const LCKya = state[2];
    const LCKyiya = state[3];
    const LCKpi = state[4];
    const PD1 = state[5];
    const PD1p1 = state[6];
    const PD1p2 = state[7];
    const CP1 = state[8];
    const SHP2 = state[9];
    const CP2 = state[10];
    const CD28a = state[11];
    const CD28i = state[12];
    const PI3K = state[13];
    const PI3Kb = state[14];
    const CD3a = state[15];
    const CD3i = state[16];
    const ZAP70a1 = state[17];
    const ZAP70i = state[18];
    const ZAP70 = state[19];
    const ZAP70a2 = state[20];
    const LATa = state[21];
    const LATi = state[22];
    const GADS = state[23];
    const SLP76 = state[24];
    const SLP76i = state[25];
    const GADSa = state[27];
    var CPactive = CP1 + CP2;
    dstatedt[8] = 0 + 1 * internal.Cell * (internal.Ka_shp * PD1p1 * SHP2 - internal.Kd1_shp * CP1) + 1 * internal.Cell * internal.Kdp_cp2 * CP2 - 1 * internal.Cell * internal.Kd2_shp * CP1;
    dstatedt[10] = 0 + 1 * internal.Cell * (internal.Ka_shp * PD1p2 * SHP2 - internal.Kd1_shp * CP2) - 1 * internal.Cell * internal.Kd2_shp * CP2 - 1 * internal.Cell * internal.Kdp_cp2 * CP2;
    dstatedt[23] = 0 - 1 * internal.Cell * (internal.Ka_gads * LATa * GADS - internal.Kd_gads * GADSa);
    dstatedt[27] = 0 + 1 * internal.Cell * (internal.Ka_gads * LATa * GADS - internal.Kd_gads * GADSa) - 1 * internal.Cell * (internal.Ka_slp * GADSa * SLP76 - internal.Kd_slp * SLP76i);
    dstatedt[21] = 0 + 1 * internal.Cell * (internal.Kp_lat * ZAP70a2 * LATi) - 1 * internal.Cell * (internal.Ka_gads * LATa * GADS - internal.Kd_gads * GADSa);
    dstatedt[22] = 0 - 1 * internal.Cell * (internal.Kp_lat * ZAP70a2 * LATi);
    dstatedt[13] = 0 - 1 * internal.Cell * (internal.Ka_pi3k * CD28a * PI3K - internal.Kd_pi3k * PI3Kb);
    dstatedt[14] = 0 + 1 * internal.Cell * (internal.Ka_pi3k * CD28a * PI3K - internal.Kd_pi3k * PI3Kb);
    dstatedt[9] = 0 - 1 * internal.Cell * (internal.Ka_shp * PD1p1 * SHP2 - internal.Kd1_shp * CP1) - 1 * internal.Cell * (internal.Ka_shp * PD1p2 * SHP2 - internal.Kd1_shp * CP2) + 1 * internal.Cell * internal.Kd2_shp * CP2 + 1 * internal.Cell * internal.Kd2_shp * CP1;
    dstatedt[24] = 0 - 1 * internal.Cell * (internal.Ka_slp * GADSa * SLP76 - internal.Kd_slp * SLP76i);
    dstatedt[26] = 0 + 1 * internal.Cell * (internal.Kp_slp * ZAP70a2 * SLP76i);
    dstatedt[25] = 0 + 1 * internal.Cell * (internal.Ka_slp * GADSa * SLP76 - internal.Kd_slp * SLP76i) - 1 * internal.Cell * (internal.Kp_slp * ZAP70a2 * SLP76i);
    dstatedt[19] = 0 - 1 * internal.Cell * (internal.Ka_zap * CD3a * ZAP70 - internal.Kd_zap * ZAP70i);
    var LCKactive = LCKya + LCKyiya;
    var LCKt = LCKi + LCKya + LCKyi + LCKyiya + LCKpi;
    dstatedt[11] = 0 + 1 * internal.Cell * (internal.Kp_cd28 * LCKactive * CD28i / (internal.KMp_cd28 + CD28i)) - 1 * internal.Cell * (internal.Kdp_cd28 * CPactive * CD28a / (internal.KMdp_cd28 + CD28a)) - 1 * internal.Cell * (internal.Ka_pi3k * CD28a * PI3K - internal.Kd_pi3k * PI3Kb);
    dstatedt[12] = 0 - 1 * internal.Cell * (internal.Kp_cd28 * LCKactive * CD28i / (internal.KMp_cd28 + CD28i)) + 1 * internal.Cell * (internal.Kdp_cd28 * CPactive * CD28a / (internal.KMdp_cd28 + CD28a));
    dstatedt[15] = 0 + 1 * internal.Cell * (internal.Kp_cd3 * LCKactive * CD3i / (internal.KMp_cd3 + CD3i)) - 1 * internal.Cell * (internal.Kdp_cd3 * CPactive * CD3a / (internal.KMdp_cd3 + CD3a)) - 1 * internal.Cell * (internal.Ka_zap * CD3a * ZAP70 - internal.Kd_zap * ZAP70i);
    dstatedt[16] = 0 - 1 * internal.Cell * (internal.Kp_cd3 * LCKactive * CD3i / (internal.KMp_cd3 + CD3i)) + 1 * internal.Cell * (internal.Kdp_cd3 * CPactive * CD3a / (internal.KMdp_cd3 + CD3a));
    dstatedt[5] = 0 - 1 * internal.Cell * (internal.Kp_pd1 * LCKactive * PD1 / (internal.KMp_pd1 + PD1) * (1 - (PD1p1 + PD1p2) / (LCKt * internal.kxk))) + 1 * internal.Cell * internal.Kd2_shp * CP1;
    dstatedt[6] = 0 + 1 * internal.Cell * (internal.Kp_pd1 * LCKactive * PD1 / (internal.KMp_pd1 + PD1) * (1 - (PD1p1 + PD1p2) / (LCKt * internal.kxk))) - 1 * internal.Cell * (internal.Kp_pd1 * LCKactive * PD1p1 / (internal.KMp_pd1 + PD1p1)) - 1 * internal.Cell * (internal.Ka_shp * PD1p1 * SHP2 - internal.Kd1_shp * CP1) + 1 * internal.Cell * internal.Kd2_shp * CP2;
    dstatedt[7] = 0 + 1 * internal.Cell * (internal.Kp_pd1 * LCKactive * PD1p1 / (internal.KMp_pd1 + PD1p1)) - 1 * internal.Cell * (internal.Ka_shp * PD1p2 * SHP2 - internal.Kd1_shp * CP2);
    dstatedt[17] = 0 + 1 * internal.Cell * (internal.Kp1_zap * LCKactive * ZAP70i) - 1 * internal.Cell * (internal.Kp2_zap * LCKactive * ZAP70a1);
    dstatedt[20] = 0 + 1 * internal.Cell * (internal.Kp2_zap * LCKactive * ZAP70a1);
    dstatedt[18] = 0 + 1 * internal.Cell * (internal.Ka_zap * CD3a * ZAP70 - internal.Kd_zap * ZAP70i) - 1 * internal.Cell * (internal.Kp1_zap * LCKactive * ZAP70i);
    dstatedt[0] = 0 - 1 * internal.Cell * internal.Kpi_i * LCKi - 1 * internal.Cell * internal.Kpa_i * LCKi + 1 * internal.Cell * (internal.Kdpa_ya * CPactive * LCKya) + 1 * internal.Cell * (internal.Kdpi_yi * CPactive * LCKyi);
    dstatedt[4] = 0 + 1 * internal.Cell * internal.Kpa_yi * LCKyi - 1 * internal.Cell * (internal.Kdpa_pi * CPactive * LCKpi);
    dstatedt[2] = 0 + 1 * internal.Cell * internal.Kpa_i * LCKi - 1 * internal.Cell * internal.Kpi_ya * LCKya - 1 * internal.Cell * (internal.Kdpa_ya * CPactive * LCKya) + 1 * internal.Cell * (internal.Kdpi_yiya * CPactive * LCKyiya);
    dstatedt[1] = 0 + 1 * internal.Cell * internal.Kpi_i * LCKi - 1 * internal.Cell * internal.Kpa_yi * LCKyi + 1 * internal.Cell * (internal.Kdpi_yiya * CPactive * LCKyiya) - 1 * internal.Cell * (internal.Kdpi_yi * CPactive * LCKyi) + 1 * internal.Cell * (internal.Kdpa_pi * CPactive * LCKpi);
    dstatedt[3] = 0 + 1 * internal.Cell * internal.Kpi_ya * LCKya - 1 * internal.Cell * (internal.Kdpi_yiya * CPactive * LCKyiya) - 1 * internal.Cell * (internal.Kdpi_yiya * CPactive * LCKyiya);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "LCKi", "LCKyi", "LCKya", "LCKyiya", "LCKpi", "PD1", "PD1p1", "PD1p2", "CP1", "SHP2", "CP2", "CD28a", "CD28i", "PI3K", "PI3Kb", "CD3a", "CD3i", "ZAP70a1", "ZAP70i", "ZAP70", "ZAP70a2", "LATa", "LATi", "GADS", "SLP76", "SLP76i", "SLP76a", "GADSa"];
    this.metadata.internalOrder = {CD28a_init: null, CD28i_init: null, CD3a_init: null, CD3i_init: null, Cell: null, CP1_init: null, CP2_init: null, GADS_init: null, GADSa_init: null, initial_CD28a: null, initial_CD28i: null, initial_CD3a: null, initial_CD3i: null, initial_CP1: null, initial_CP2: null, initial_GADS: null, initial_GADSa: null, initial_LATa: null, initial_LATi: null, initial_LCKi: null, initial_LCKpi: null, initial_LCKya: null, initial_LCKyi: null, initial_LCKyiya: null, initial_PD1: null, initial_PD1p1: null, initial_PD1p2: null, initial_PI3K: null, initial_PI3Kb: null, initial_SHP2: null, initial_SLP76: null, initial_SLP76a: null, initial_SLP76i: null, initial_ZAP70: null, initial_ZAP70a1: null, initial_ZAP70a2: null, initial_ZAP70i: null, Ka_gads: null, Ka_pi3k: null, Ka_shp: null, Ka_slp: null, Ka_zap: null, Kd_gads: null, Kd_pi3k: null, Kd_slp: null, Kd_zap: null, Kd1_shp: null, Kd2_shp: null, Kdp_cd28: null, Kdp_cd3: null, Kdp_cp2: null, Kdpa_pi: null, Kdpa_ya: null, Kdpa_yiya: null, Kdpi_yi: null, Kdpi_yiya: null, KMdp_cd28: null, KMdp_cd3: null, KMp_cd28: null, KMp_cd3: null, KMp_pd1: null, Kp_cd28: null, Kp_cd3: null, Kp_lat: null, Kp_pd1: null, Kp_slp: null, Kp1_zap: null, Kp2_zap: null, Kpa_i: null, Kpa_yi: null, Kpi_i: null, Kpi_ya: null, kxk: null, LATa_init: null, LATi_init: null, LCK_switch: null, LCKi_init: null, LCKpi_init: null, LCKya_init: null, LCKyi_init: null, LCKyiya_init: null, ModelValue_0: null, PD1_init: null, PD1p1_init: null, PD1p2_init: null, pi: null, PI3K_init: null, PI3Kb_init: null, SHP2_init: null, SLP76_init: null, SLP76a_init: null, SLP76i_init: null, ZAP70_init: null, ZAP70a1_init: null, ZAP70a2_init: null, ZAP70i_init: null};
    this.metadata.variableOrder = {LCKi: null, LCKyi: null, LCKya: null, LCKyiya: null, LCKpi: null, PD1: null, PD1p1: null, PD1p2: null, CP1: null, SHP2: null, CP2: null, CD28a: null, CD28i: null, PI3K: null, PI3Kb: null, CD3a: null, CD3i: null, ZAP70a1: null, ZAP70i: null, ZAP70: null, ZAP70a2: null, LATa: null, LATi: null, GADS: null, SLP76: null, SLP76i: null, SLP76a: null, GADSa: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
