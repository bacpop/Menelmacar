export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Cytoplasm = 1;
    internal.EX = 1;
    internal.kAlF4off = 0.0050000000000000001;
    internal.kAlF4on = 6.9999999999999999e-06;
    internal.kGDPbSon = 0.28000000000000003;
    internal.kGDPoff = 0.5;
    internal.kGDPon = 0.0030000000000000001;
    internal.kGGDPbSoff = 0.10000000000000001;
    internal.kGGTPase = 1.8;
    internal.kGTPgSoff = 0.0050000000000000001;
    internal.kGTPgSon = 0.0060000000000000001;
    internal.kGTPoff = 0.080000000000000002;
    internal.kGTPon = 0.45000000000000001;
    internal.kIP3ase = 0.29999999999999999;
    internal.kMg2onGTP = 0.0030000000000000001;
    internal.kMg2onGTPgS = 0.002;
    internal.kMgonAlF4 = 0.002;
    internal.kPI4Kinase = 0.0001;
    internal.kPIP2off = 0.25;
    internal.kPIP2on = 0.00025000000000000001;
    internal.kPIP2Pase = 0.0050000000000000001;
    internal.kPIP5Kinase = 0.059999999999999998;
    internal.kPLC = 4.7999999999999998;
    internal.M = 1;
    internal.PLCspont = 0.00075000000000000002;
    internal.TonicAct = 0.002;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(23).fill(0);
    state[0] = internal.initial_GTPgS_C;
    state[1] = internal.initial_KCNQsites_M;
    state[2] = internal.initial_PIP2_M;
    state[3] = internal.initial_GGDPbS_M;
    state[4] = internal.initial_Mg2_C;
    state[5] = internal.initial_ATP_C;
    state[6] = internal.initial_oxoM_EX;
    state[7] = internal.initial_GDPbS_C;
    state[8] = internal.initial_GGTPMg_M;
    state[9] = internal.initial_GDP_C;
    state[10] = internal.initial_GTP_C;
    state[11] = internal.initial_GGDPAlF4Mg_M;
    state[12] = internal.initial_ip3_C;
    state[13] = internal.initial_AlF4_C;
    state[14] = internal.initial_G_M;
    state[15] = internal.initial_GGTP_M;
    state[16] = internal.initial_GGDPAlF4_M;
    state[17] = internal.initial_GGTPgS_M;
    state[18] = internal.initial_PI_M;
    state[19] = internal.initial_PIP_M;
    state[20] = internal.initial_PIP2xKCNQ_M;
    state[21] = internal.initial_GGTPgSMg_M;
    state[22] = internal.initial_GGDP_M;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["AlF4_C_init", "ATP_C_init", "ATPSat1000", "ATPSat300", "fGactive", "G_M_init", "Gactive", "GDP_C_init", "GDPbS_C_init", "GGDP_M_init", "GGDPAlF4_M_init", "GGDPAlF4Mg_M_init", "GGDPbS_M_init", "GGTP_M_init", "GGTPgS_M_init", "GGTPgSMg_M_init", "GGTPMg_M_init", "GTP_C_init", "GTPgS_C_init", "I_KCNQ", "ip3_C_init", "KCNQsites_M_init", "KMgGTPase", "Koxom", "Mg2_C_init", "MgSat10", "MgSat20", "NA_micro", "nHill", "oxoM_EX_init", "OxoSat", "PI_M_init", "PIP_M_init", "PIP2_M_init", "PIP2xKCNQ_M_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "AlF4_C_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ATP_C_init", internal, 3000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ATPSat1000", internal, 0.75003124609423799, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ATPSat300", internal, 0.90910468110892295, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "fGactive", internal, 0.00050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G_M_init", internal, 0.065000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Gactive", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GDP_C_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GDPbS_C_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GGDP_M_init", internal, 200, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GGDPAlF4_M_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GGDPAlF4Mg_M_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GGDPbS_M_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GGTP_M_init", internal, 0.048000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GGTPgS_M_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GGTPgSMg_M_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GGTPMg_M_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GTP_C_init", internal, 95.539074129536999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GTPgS_C_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_KCNQ", internal, 0.95618797317775595, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ip3_C_init", internal, 0.47999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KCNQsites_M_init", internal, 6.7000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KMgGTPase", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Koxom", internal, 8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Mg2_C_init", internal, 2100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MgSat10", internal, 0.99620853080568705, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MgSat20", internal, 0.99056603773584895, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NA_micro", internal, 6.022e+17, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nHill", internal, 1.8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "oxoM_EX_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "OxoSat", internal, 1.2499984375019501e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PI_M_init", internal, 200000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PIP_M_init", internal, 1150, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PIP2_M_init", internal, 5000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PIP2xKCNQ_M_init", internal, 33.299999999999997, -Infinity, Infinity, false);
    internal.initial_AlF4_C = internal.AlF4_C_init;
    internal.initial_ATP_C = internal.ATP_C_init;
    internal.initial_G_M = internal.G_M_init;
    internal.initial_GDP_C = internal.GDP_C_init;
    internal.initial_GDPbS_C = internal.GDPbS_C_init;
    internal.initial_GGDP_M = internal.GGDP_M_init;
    internal.initial_GGDPAlF4_M = internal.GGDPAlF4_M_init;
    internal.initial_GGDPAlF4Mg_M = internal.GGDPAlF4Mg_M_init;
    internal.initial_GGDPbS_M = internal.GGDPbS_M_init;
    internal.initial_GGTP_M = internal.GGTP_M_init;
    internal.initial_GGTPgS_M = internal.GGTPgS_M_init;
    internal.initial_GGTPgSMg_M = internal.GGTPgSMg_M_init;
    internal.initial_GGTPMg_M = internal.GGTPMg_M_init;
    internal.initial_GTP_C = internal.GTP_C_init;
    internal.initial_GTPgS_C = internal.GTPgS_C_init;
    internal.initial_ip3_C = internal.ip3_C_init;
    internal.initial_KCNQsites_M = internal.KCNQsites_M_init;
    internal.initial_Mg2_C = internal.Mg2_C_init;
    internal.initial_oxoM_EX = internal.oxoM_EX_init;
    internal.initial_PI_M = internal.PI_M_init;
    internal.initial_PIP_M = internal.PIP_M_init;
    internal.initial_PIP2_M = internal.PIP2_M_init;
    internal.initial_PIP2xKCNQ_M = internal.PIP2xKCNQ_M_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const GTPgS_C = state[0];
    const KCNQsites_M = state[1];
    const PIP2_M = state[2];
    const GGDPbS_M = state[3];
    const GDPbS_C = state[7];
    const GGTPMg_M = state[8];
    const GDP_C = state[9];
    const ip3_C = state[12];
    const AlF4_C = state[13];
    const G_M = state[14];
    const GGTP_M = state[15];
    const GGDPAlF4_M = state[16];
    const GGTPgS_M = state[17];
    const PI_M = state[18];
    const PIP_M = state[19];
    const PIP2xKCNQ_M = state[20];
    const GGDP_M = state[22];
    const Mg2_C = state[4];
    const GTP_C = state[10];
    dstatedt[10] = 0;
    dstatedt[4] = 0;
    dstatedt[6] = 0;
    dstatedt[13] = 0 - 0.0009967000000000001 * ((internal.kAlF4on * AlF4_C * GGDP_M + - (internal.kAlF4off * GGDPAlF4_M)) * internal.M);
    dstatedt[5] = 0 - 0.0009967000000000001 * ((0.20000000000000001 + 0.80000000000000004 * internal.MgSat20) * internal.kPIP5Kinase * PIP_M * internal.ATPSat300) - 0.0009967000000000001 * ((0.20000000000000001 + 0.80000000000000004 * internal.MgSat20) * internal.kPI4Kinase * PI_M * internal.ATPSat1000 * internal.M);
    dstatedt[14] = 0 - 1 * ((internal.kGTPon * G_M * GTP_C + - (internal.kGTPoff * GGTP_M)) * internal.M) - 1 * ((internal.kGTPgSon * G_M * GTPgS_C + - (internal.kGTPgSoff * GGTPgS_M)) * internal.M) - 1 * ((internal.kGDPbSon * G_M * GDPbS_C + - (internal.kGGDPbSoff * (1 + 20 * internal.OxoSat) * GGDPbS_M)) * internal.M) + 1 * ((internal.kGDPoff * GGDP_M * (internal.OxoSat + internal.TonicAct) + - (internal.kGDPon * GDP_C * G_M)) * internal.M);
    dstatedt[9] = 0 + 0.0009967000000000001 * ((internal.kGDPoff * GGDP_M * (internal.OxoSat + internal.TonicAct) + - (internal.kGDPon * GDP_C * G_M)) * internal.M);
    dstatedt[7] = 0 - 0.0009967000000000001 * ((internal.kGDPbSon * G_M * GDPbS_C + - (internal.kGGDPbSoff * (1 + 20 * internal.OxoSat) * GGDPbS_M)) * internal.M);
    dstatedt[22] = 0 + 1 * internal.M * (internal.kGGTPase * internal.MgSat10 * GGTPMg_M) - 1 * ((internal.kGDPoff * GGDP_M * (internal.OxoSat + internal.TonicAct) + - (internal.kGDPon * GDP_C * G_M)) * internal.M) - 1 * ((internal.kAlF4on * AlF4_C * GGDP_M + - (internal.kAlF4off * GGDPAlF4_M)) * internal.M);
    dstatedt[16] = 0 + 1 * ((internal.kAlF4on * AlF4_C * GGDP_M + - (internal.kAlF4off * GGDPAlF4_M)) * internal.M) - 1 * (internal.kMgonAlF4 * GGDPAlF4_M * Mg2_C * internal.M);
    dstatedt[11] = 0 + 1 * (internal.kMgonAlF4 * GGDPAlF4_M * Mg2_C * internal.M);
    dstatedt[3] = 0 + 1 * ((internal.kGDPbSon * G_M * GDPbS_C + - (internal.kGGDPbSoff * (1 + 20 * internal.OxoSat) * GGDPbS_M)) * internal.M);
    dstatedt[15] = 0 + 1 * ((internal.kGTPon * G_M * GTP_C + - (internal.kGTPoff * GGTP_M)) * internal.M) - 1 * (internal.kMg2onGTP * GGTP_M * Mg2_C * internal.M);
    dstatedt[17] = 0 - 1 * (internal.kMg2onGTPgS * GGTPgS_M * Mg2_C * internal.M) + 1 * ((internal.kGTPgSon * G_M * GTPgS_C + - (internal.kGTPgSoff * GGTPgS_M)) * internal.M);
    dstatedt[21] = 0 + 1 * (internal.kMg2onGTPgS * GGTPgS_M * Mg2_C * internal.M);
    dstatedt[8] = 0 - 1 * internal.M * (internal.kGGTPase * internal.MgSat10 * GGTPMg_M) + 1 * (internal.kMg2onGTP * GGTP_M * Mg2_C * internal.M);
    dstatedt[0] = 0 - 0.0009967000000000001 * ((internal.kGTPgSon * G_M * GTPgS_C + - (internal.kGTPgSoff * GGTPgS_M)) * internal.M);
    dstatedt[12] = 0 - 1.6661112959999999e-18 * internal.Cytoplasm * (ip3_C * internal.kIP3ase * internal.NA_micro) + 0.0009967000000000001 * (internal.kPLC * (internal.fGactive + internal.PLCspont) * PIP2_M * internal.M);
    dstatedt[1] = 0 - 1 * internal.M * (internal.kPIP2on * KCNQsites_M * PIP2_M + - (internal.kPIP2off * PIP2xKCNQ_M));
    dstatedt[18] = 0 - 1 * ((0.20000000000000001 + 0.80000000000000004 * internal.MgSat20) * internal.kPI4Kinase * PI_M * internal.ATPSat1000 * internal.M);
    dstatedt[19] = 0 - 1 * ((0.20000000000000001 + 0.80000000000000004 * internal.MgSat20) * internal.kPIP5Kinase * PIP_M * internal.ATPSat300) + 1 * internal.M * (internal.MgSat20 * internal.kPIP2Pase * PIP2_M) + 1 * ((0.20000000000000001 + 0.80000000000000004 * internal.MgSat20) * internal.kPI4Kinase * PI_M * internal.ATPSat1000 * internal.M);
    dstatedt[2] = 0 + 1 * ((0.20000000000000001 + 0.80000000000000004 * internal.MgSat20) * internal.kPIP5Kinase * PIP_M * internal.ATPSat300) - 1 * internal.M * (internal.kPIP2on * KCNQsites_M * PIP2_M + - (internal.kPIP2off * PIP2xKCNQ_M)) - 1 * internal.M * (internal.MgSat20 * internal.kPIP2Pase * PIP2_M) - 1 * (internal.kPLC * (internal.fGactive + internal.PLCspont) * PIP2_M * internal.M);
    dstatedt[20] = 0 + 1 * internal.M * (internal.kPIP2on * KCNQsites_M * PIP2_M + - (internal.kPIP2off * PIP2xKCNQ_M));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "GTPgS_C", "KCNQsites_M", "PIP2_M", "GGDPbS_M", "Mg2_C", "ATP_C", "oxoM_EX", "GDPbS_C", "GGTPMg_M", "GDP_C", "GTP_C", "GGDPAlF4Mg_M", "ip3_C", "AlF4_C", "G_M", "GGTP_M", "GGDPAlF4_M", "GGTPgS_M", "PI_M", "PIP_M", "PIP2xKCNQ_M", "GGTPgSMg_M", "GGDP_M"];
    this.metadata.internalOrder = {AlF4_C_init: null, ATP_C_init: null, ATPSat1000: null, ATPSat300: null, Cytoplasm: null, EX: null, fGactive: null, G_M_init: null, Gactive: null, GDP_C_init: null, GDPbS_C_init: null, GGDP_M_init: null, GGDPAlF4_M_init: null, GGDPAlF4Mg_M_init: null, GGDPbS_M_init: null, GGTP_M_init: null, GGTPgS_M_init: null, GGTPgSMg_M_init: null, GGTPMg_M_init: null, GTP_C_init: null, GTPgS_C_init: null, I_KCNQ: null, initial_AlF4_C: null, initial_ATP_C: null, initial_G_M: null, initial_GDP_C: null, initial_GDPbS_C: null, initial_GGDP_M: null, initial_GGDPAlF4_M: null, initial_GGDPAlF4Mg_M: null, initial_GGDPbS_M: null, initial_GGTP_M: null, initial_GGTPgS_M: null, initial_GGTPgSMg_M: null, initial_GGTPMg_M: null, initial_GTP_C: null, initial_GTPgS_C: null, initial_ip3_C: null, initial_KCNQsites_M: null, initial_Mg2_C: null, initial_oxoM_EX: null, initial_PI_M: null, initial_PIP_M: null, initial_PIP2_M: null, initial_PIP2xKCNQ_M: null, ip3_C_init: null, kAlF4off: null, kAlF4on: null, KCNQsites_M_init: null, kGDPbSon: null, kGDPoff: null, kGDPon: null, kGGDPbSoff: null, kGGTPase: null, kGTPgSoff: null, kGTPgSon: null, kGTPoff: null, kGTPon: null, kIP3ase: null, kMg2onGTP: null, kMg2onGTPgS: null, KMgGTPase: null, kMgonAlF4: null, Koxom: null, kPI4Kinase: null, kPIP2off: null, kPIP2on: null, kPIP2Pase: null, kPIP5Kinase: null, kPLC: null, M: null, Mg2_C_init: null, MgSat10: null, MgSat20: null, NA_micro: null, nHill: null, oxoM_EX_init: null, OxoSat: null, PI_M_init: null, PIP_M_init: null, PIP2_M_init: null, PIP2xKCNQ_M_init: null, PLCspont: null, TonicAct: null};
    this.metadata.variableOrder = {GTPgS_C: null, KCNQsites_M: null, PIP2_M: null, GGDPbS_M: null, Mg2_C: null, ATP_C: null, oxoM_EX: null, GDPbS_C: null, GGTPMg_M: null, GDP_C: null, GTP_C: null, GGDPAlF4Mg_M: null, ip3_C: null, AlF4_C: null, G_M: null, GGTP_M: null, GGDPAlF4_M: null, GGTPgS_M: null, PI_M: null, PIP_M: null, PIP2xKCNQ_M: null, GGTPgSMg_M: null, GGDP_M: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
