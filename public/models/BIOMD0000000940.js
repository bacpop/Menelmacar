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
    var state = Array(20).fill(0);
    state[0] = internal.initial_PKN1;
    state[1] = internal.initial_ZAK;
    state[2] = internal.initial_MAP2K3;
    state[3] = internal.initial_MAPK14;
    state[4] = internal.initial_MAP2K4;
    state[5] = internal.initial_TP53;
    state[6] = internal.initial_ATM;
    state[7] = internal.initial_MAPK13;
    state[8] = internal.initial_PRKACA;
    state[9] = internal.initial_SRC;
    state[10] = internal.initial_BAD;
    state[11] = internal.initial_PTEN;
    state[12] = internal.initial_SHC1;
    state[13] = internal.initial_PIK3R1;
    state[14] = internal.initial_PARP1;
    state[15] = internal.initial_AURKB;
    state[16] = internal.initial_BRCA1;
    state[17] = internal.initial_YWHAZ;
    state[18] = internal.initial_TGFBR1;
    state[19] = internal.initial_CSF1R;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["ATM_init", "AURKB_init", "BAD_init", "BRCA1_init", "const1", "CSF1R_init", "k_atm", "k_aurkb", "k_bad", "k_brca1", "k_csf1r", "k_map2k3", "k_map2k4", "k_mapk13", "k_mapk14", "k_parp1", "k_pik3r1", "k_pkn1", "k_prkaca", "k_pten", "k_shc1", "k_src", "k_tgfbr1", "k_tp53", "k_ywhaz", "k_zak", "kd_atm", "kd_aurkb", "kd_bad", "kd_brca1", "kd_csf1r", "kd_map2k3", "kd_map2k4", "kd_mapk13", "kd_mapk14", "kd_parp1", "kd_pik3r1", "kd_pkn1", "kd_prkaca", "kd_pten", "kd_shc1", "kd_src", "kd_tgfbr1", "kd_tp53", "kd_ywhaz", "kd_zak", "MAP2K3_init", "MAP2K4_init", "MAPK13_init", "MAPK14_init", "PARP1_init", "PIK3R1_init", "PKN1_init", "PRKACA_init", "PTEN_init", "SHC1_init", "SRC_init", "TGFBR1_init", "TP53_init", "YWHAZ_init", "ZAK_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "ATM_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AURKB_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "BAD_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "BRCA1_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "const1", internal, 0.0067000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CSF1R_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_atm", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_aurkb", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_bad", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_brca1", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_csf1r", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_map2k3", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_map2k4", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_mapk13", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_mapk14", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_parp1", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_pik3r1", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_pkn1", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_prkaca", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_pten", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_shc1", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_src", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_tgfbr1", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_tp53", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_ywhaz", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_zak", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd_atm", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd_aurkb", internal, 4.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd_bad", internal, 0.040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd_brca1", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd_csf1r", internal, 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd_map2k3", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd_map2k4", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd_mapk13", internal, 1.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd_mapk14", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd_parp1", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd_pik3r1", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd_pkn1", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd_prkaca", internal, 6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd_pten", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd_shc1", internal, 0.059999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd_src", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd_tgfbr1", internal, 0.45000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd_tp53", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd_ywhaz", internal, 0.071999999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd_zak", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MAP2K3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MAP2K4_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MAPK13_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MAPK14_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PARP1_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PIK3R1_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PKN1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PRKACA_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PTEN_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SHC1_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SRC_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TGFBR1_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TP53_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "YWHAZ_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ZAK_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_ATM = internal.ATM_init;
    internal.initial_AURKB = internal.AURKB_init;
    internal.initial_BAD = internal.BAD_init;
    internal.initial_BRCA1 = internal.BRCA1_init;
    internal.initial_CSF1R = internal.CSF1R_init;
    internal.initial_MAP2K3 = internal.MAP2K3_init;
    internal.initial_MAP2K4 = internal.MAP2K4_init;
    internal.initial_MAPK13 = internal.MAPK13_init;
    internal.initial_MAPK14 = internal.MAPK14_init;
    internal.initial_PARP1 = internal.PARP1_init;
    internal.initial_PIK3R1 = internal.PIK3R1_init;
    internal.initial_PKN1 = internal.PKN1_init;
    internal.initial_PRKACA = internal.PRKACA_init;
    internal.initial_PTEN = internal.PTEN_init;
    internal.initial_SHC1 = internal.SHC1_init;
    internal.initial_SRC = internal.SRC_init;
    internal.initial_TGFBR1 = internal.TGFBR1_init;
    internal.initial_TP53 = internal.TP53_init;
    internal.initial_YWHAZ = internal.YWHAZ_init;
    internal.initial_ZAK = internal.ZAK_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const PKN1 = state[0];
    const ZAK = state[1];
    const MAP2K3 = state[2];
    const MAPK14 = state[3];
    const MAP2K4 = state[4];
    const TP53 = state[5];
    const ATM = state[6];
    const MAPK13 = state[7];
    const PRKACA = state[8];
    const SRC = state[9];
    const BAD = state[10];
    const PTEN = state[11];
    const SHC1 = state[12];
    const PIK3R1 = state[13];
    const PARP1 = state[14];
    const AURKB = state[15];
    const BRCA1 = state[16];
    const YWHAZ = state[17];
    const TGFBR1 = state[18];
    const CSF1R = state[19];
    dstatedt[6] = 0 + 1 * internal.Cell * (internal.k_atm * MAPK14) - 1 * internal.Cell * internal.kd_atm * ATM + 1 * internal.Cell * (internal.k_atm * PARP1) + 1 * internal.Cell * (internal.k_atm * AURKB);
    dstatedt[15] = 0 + 1 * internal.Cell * (internal.k_aurkb * PARP1) - 1 * internal.Cell * internal.kd_aurkb * AURKB;
    dstatedt[10] = 0 + 1 * internal.Cell * (internal.k_bad) - 1 * internal.Cell * internal.kd_bad * BAD - 1 * internal.Cell * (internal.kd_bad * BAD * YWHAZ * internal.const1);
    dstatedt[16] = 0 + 1 * internal.Cell * (internal.k_brca1 * PARP1) - 1 * internal.Cell * internal.kd_brca1 * BRCA1 + 1 * internal.Cell * (internal.k_brca1 * ATM);
    dstatedt[19] = 0 + 1 * internal.Cell * (internal.k_csf1r * PIK3R1) + 1 * internal.Cell * (internal.k_csf1r * SHC1) - 1 * internal.Cell * internal.kd_csf1r * CSF1R;
    dstatedt[2] = 0 + 1 * internal.Cell * (internal.k_map2k3 * PKN1) - 1 * internal.Cell * internal.kd_map2k3 * MAP2K3 + 1 * internal.Cell * (internal.k_map2k3 * ZAK);
    dstatedt[4] = 0 + 1 * internal.Cell * (internal.k_map2k4 * MAP2K3) - 1 * internal.Cell * internal.kd_map2k4 * MAP2K4 + 1 * internal.Cell * (internal.k_map2k4 * ZAK);
    dstatedt[7] = 0 + 1 * internal.Cell * (internal.k_mapk13 * MAP2K4) - 1 * internal.Cell * internal.kd_mapk13 * MAPK13;
    dstatedt[3] = 0 + 1 * internal.Cell * (internal.k_mapk14 * MAP2K3) - 1 * internal.Cell * internal.kd_mapk14 * MAPK14 + 1 * internal.Cell * (internal.k_mapk14 * MAP2K4) + 1 * internal.Cell * (internal.k_mapk14 * TGFBR1) + 1 * internal.Cell * (internal.k_mapk14 * SHC1);
    dstatedt[14] = 0 + 1 * internal.Cell * (internal.k_parp1) - 1 * internal.Cell * internal.kd_parp1 * PARP1;
    dstatedt[13] = 0 - 1 * internal.Cell * (internal.kd_pik3r1 * PIK3R1 * PTEN) + 1 * internal.Cell * (internal.k_pik3r1 * YWHAZ) + 1 * internal.Cell * (internal.k_pik3r1 * SHC1);
    dstatedt[0] = 0 + 1 * internal.Cell * (internal.k_pkn1) - 1 * internal.Cell * internal.kd_pkn1 * PKN1;
    dstatedt[8] = 0 + 1 * internal.Cell * (internal.k_prkaca * MAPK13) - 1 * internal.Cell * internal.kd_prkaca * PRKACA + 1 * internal.Cell * (internal.k_prkaca * AURKB);
    dstatedt[11] = 0 + 1 * internal.Cell * (internal.k_pten * TP53) - 1 * internal.Cell * internal.kd_pten * PTEN;
    dstatedt[12] = 0 + 1 * internal.Cell * (internal.k_shc1 * TGFBR1) - 1 * internal.Cell * (internal.kd_shc1 * SHC1 * PTEN);
    dstatedt[9] = 0 + 1 * internal.Cell * (internal.k_src * PRKACA) - 1 * internal.Cell * internal.kd_src * SRC + 1 * internal.Cell * (internal.k_src * CSF1R);
    dstatedt[18] = 0 + 1 * internal.Cell * (internal.k_tgfbr1 * ZAK) - 1 * internal.Cell * internal.kd_tgfbr1 * TGFBR1 + 1 * internal.Cell * (internal.k_tgfbr1 * PIK3R1);
    dstatedt[5] = 0 + 1 * internal.Cell * (internal.k_tp53 * MAPK14) - 1 * internal.Cell * internal.kd_tp53 * TP53 + 1 * internal.Cell * (internal.k_tp53 * SRC) + 1 * internal.Cell * (internal.k_tp53 * BAD) + 1 * internal.Cell * (internal.k_tp53 * PARP1) + 1 * internal.Cell * (internal.k_tp53 * ATM) + 1 * internal.Cell * (internal.k_tp53 * BRCA1) - 1 * internal.Cell * (internal.kd_tp53 * TP53 * AURKB * internal.const1);
    dstatedt[17] = 0 + 1 * internal.Cell * (internal.k_ywhaz * ZAK) - 1 * internal.Cell * internal.kd_ywhaz * YWHAZ;
    dstatedt[1] = 0 + 1 * internal.Cell * (internal.k_zak * PKN1) - 1 * internal.Cell * internal.kd_zak * ZAK;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "PKN1", "ZAK", "MAP2K3", "MAPK14", "MAP2K4", "TP53", "ATM", "MAPK13", "PRKACA", "SRC", "BAD", "PTEN", "SHC1", "PIK3R1", "PARP1", "AURKB", "BRCA1", "YWHAZ", "TGFBR1", "CSF1R"];
    this.metadata.internalOrder = {ATM_init: null, AURKB_init: null, BAD_init: null, BRCA1_init: null, Cell: null, const1: null, CSF1R_init: null, initial_ATM: null, initial_AURKB: null, initial_BAD: null, initial_BRCA1: null, initial_CSF1R: null, initial_MAP2K3: null, initial_MAP2K4: null, initial_MAPK13: null, initial_MAPK14: null, initial_PARP1: null, initial_PIK3R1: null, initial_PKN1: null, initial_PRKACA: null, initial_PTEN: null, initial_SHC1: null, initial_SRC: null, initial_TGFBR1: null, initial_TP53: null, initial_YWHAZ: null, initial_ZAK: null, k_atm: null, k_aurkb: null, k_bad: null, k_brca1: null, k_csf1r: null, k_map2k3: null, k_map2k4: null, k_mapk13: null, k_mapk14: null, k_parp1: null, k_pik3r1: null, k_pkn1: null, k_prkaca: null, k_pten: null, k_shc1: null, k_src: null, k_tgfbr1: null, k_tp53: null, k_ywhaz: null, k_zak: null, kd_atm: null, kd_aurkb: null, kd_bad: null, kd_brca1: null, kd_csf1r: null, kd_map2k3: null, kd_map2k4: null, kd_mapk13: null, kd_mapk14: null, kd_parp1: null, kd_pik3r1: null, kd_pkn1: null, kd_prkaca: null, kd_pten: null, kd_shc1: null, kd_src: null, kd_tgfbr1: null, kd_tp53: null, kd_ywhaz: null, kd_zak: null, MAP2K3_init: null, MAP2K4_init: null, MAPK13_init: null, MAPK14_init: null, PARP1_init: null, pi: null, PIK3R1_init: null, PKN1_init: null, PRKACA_init: null, PTEN_init: null, SHC1_init: null, SRC_init: null, TGFBR1_init: null, TP53_init: null, YWHAZ_init: null, ZAK_init: null};
    this.metadata.variableOrder = {PKN1: null, ZAK: null, MAP2K3: null, MAPK14: null, MAP2K4: null, TP53: null, ATM: null, MAPK13: null, PRKACA: null, SRC: null, BAD: null, PTEN: null, SHC1: null, PIK3R1: null, PARP1: null, AURKB: null, BRCA1: null, YWHAZ: null, TGFBR1: null, CSF1R: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
