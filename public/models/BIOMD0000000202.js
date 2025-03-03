export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Cytoplasm = 1;
    internal.ER = 0.185;
    internal.initial_h = 0;
    internal.PM = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(10).fill(0);
    state[0] = internal.initial_Ca_Cyt;
    state[1] = internal.initial_IP3_Cyt;
    state[2] = internal.initial_Ca_ER;
    state[3] = internal.initial_S2;
    state[4] = internal.initial_S2a;
    state[5] = internal.initial_S4;
    state[6] = internal.initial_Oc;
    state[7] = internal.initial_O_o;
    state[8] = internal.initial_Orai1;
    state[9] = internal.initial_h;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A", "Ca_Cyt_init", "Ca_ec", "Ca_ER_init", "IP3_Cyt_init", "k_a", "K_deg", "k_i", "K_PLC", "K_PMCA", "K_SERCA", "k_soc", "K1", "K2", "Ka", "Kc", "Kd", "kd_oligo", "kdc", "kdeg", "kdo", "Ki", "Ko", "kod", "kop", "L", "l_hill", "n_hill", "O_o_init", "Oc_init", "Orai1_init", "Orai1_t", "p", "P_IP3R", "q", "r_hill", "S2_init", "S2a_init", "S4_init", "St", "V_PLC", "V_PMCA", "V_PMleak", "V_SERCA", "Vcp", "Vs4"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ca_Cyt_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ca_ec", internal, 1500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ca_ER_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IP3_Cyt_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_a", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_deg", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_i", internal, 6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_PLC", internal, 0.12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_PMCA", internal, 0.45000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_SERCA", internal, 0.14999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_soc", internal, 2.2999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2", internal, 0.14000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ka", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kc", internal, 2.0000000000000002e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kd", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd_oligo", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdc", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdeg", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdo", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ki", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ko", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kod", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kop", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L", internal, 0.00093000000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "l_hill", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n_hill", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "O_o_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Oc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Orai1_init", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Orai1_t", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_IP3R", internal, 66.599999999999994, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r_hill", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S2_init", internal, 0.54000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S2a_init", internal, 0.059999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S4_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "St", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_PLC", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_PMCA", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_PMleak", internal, 4.9999999999999998e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_SERCA", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vcp", internal, 0.00018000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vs4", internal, 0.25, -Infinity, Infinity, false);
    internal.initial_Ca_Cyt = internal.Ca_Cyt_init;
    internal.initial_Ca_ER = internal.Ca_ER_init;
    internal.initial_IP3_Cyt = internal.IP3_Cyt_init;
    internal.initial_O_o = internal.O_o_init;
    internal.initial_Oc = internal.Oc_init;
    internal.initial_Orai1 = internal.Orai1_init;
    internal.initial_S2 = internal.S2_init;
    internal.initial_S2a = internal.S2a_init;
    internal.initial_S4 = internal.S4_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Ca_Cyt = state[0];
    const IP3_Cyt = state[1];
    const Ca_ER = state[2];
    const S2 = state[3];
    const S2a = state[4];
    const S4 = state[5];
    const Oc = state[6];
    const O_o = state[7];
    const Orai1 = state[8];
    const h = state[9];
    dstatedt[8] = 0;
    dstatedt[3] = 0;
    dstatedt[0] = 0 + 1 * internal.Cytoplasm * (internal.L + internal.P_IP3R * Math.pow((IP3_Cyt), (3)) * Math.pow((Ca_Cyt), (3)) * Math.pow((h), (3)) / (Math.pow((IP3_Cyt + internal.Ki), (3)) * Math.pow((Ca_Cyt + internal.Ka), (3)))) * (Ca_ER - Ca_Cyt) - 1 * internal.Cytoplasm * (internal.V_SERCA * Math.pow((Ca_Cyt), (internal.p)) / (Math.pow((internal.K_SERCA), (internal.p)) + Math.pow((Ca_Cyt), (internal.p)))) + 1 * internal.Cytoplasm * (internal.k_soc * O_o + internal.V_PMleak) * (internal.Ca_ec - Ca_Cyt) - 1 * internal.Cytoplasm * (internal.V_PMCA * Math.pow((Ca_Cyt), (internal.q)) / (Math.pow((internal.K_PMCA), (internal.q)) + Math.pow((Ca_Cyt), (internal.q))));
    dstatedt[2] = 0 - 1 * internal.Cytoplasm * (internal.L + internal.P_IP3R * Math.pow((IP3_Cyt), (3)) * Math.pow((Ca_Cyt), (3)) * Math.pow((h), (3)) / (Math.pow((IP3_Cyt + internal.Ki), (3)) * Math.pow((Ca_Cyt + internal.Ka), (3)))) * (Ca_ER - Ca_Cyt) + 1 * internal.Cytoplasm * (internal.V_SERCA * Math.pow((Ca_Cyt), (internal.p)) / (Math.pow((internal.K_SERCA), (internal.p)) + Math.pow((Ca_Cyt), (internal.p))));
    dstatedt[9] = internal.A * (internal.Kd - (Ca_Cyt + internal.Kd) * h);
    dstatedt[1] = 0 + 1 * internal.Cytoplasm * (internal.V_PLC * Math.pow((Ca_Cyt), (2)) / (Math.pow((internal.K_PLC), (2)) + Math.pow((Ca_Cyt), (2)))) - 1 * internal.Cytoplasm * (internal.kdeg * Math.pow((Ca_Cyt), (2)) / (Math.pow((internal.K_deg), (2)) + Math.pow((Ca_Cyt), (2)))) * IP3_Cyt;
    dstatedt[7] = 0 + 1 * internal.PM * (internal.kop * Math.pow((S2a), (internal.l_hill)) * Oc / (Math.pow((internal.Ko), (internal.l_hill)) + Math.pow((S2a), (internal.l_hill)))) - 1 * internal.PM * internal.kod * O_o - 1 * internal.PM * internal.kdo * O_o;
    dstatedt[6] = 0 + 1 * internal.PM * (internal.Vcp * Math.pow((Orai1), (internal.n_hill)) / (Math.pow((internal.Kc), (internal.n_hill)) + Math.pow((Orai1), (internal.n_hill)))) - 1 * internal.PM * internal.kdc * Oc - 1 * internal.PM * (internal.kop * Math.pow((S2a), (internal.l_hill)) * Oc / (Math.pow((internal.Ko), (internal.l_hill)) + Math.pow((S2a), (internal.l_hill)))) + 1 * internal.PM * internal.kod * O_o;
    dstatedt[4] = 0 + 1 * internal.ER * internal.k_a * S2 - 1 * internal.ER * internal.k_i * S2a;
    dstatedt[5] = 0 + 1 * internal.ER * (internal.Vs4 * Math.pow((S2), (2)) / (Math.pow((S2), (2)) + Math.pow((internal.K2), (2)))) - 1 * internal.ER * internal.kd_oligo * S4;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Ca_Cyt", "IP3_Cyt", "Ca_ER", "S2", "S2a", "S4", "Oc", "O_o", "Orai1", "h"];
    this.metadata.internalOrder = {A: null, Ca_Cyt_init: null, Ca_ec: null, Ca_ER_init: null, Cytoplasm: null, ER: null, initial_Ca_Cyt: null, initial_Ca_ER: null, initial_h: null, initial_IP3_Cyt: null, initial_O_o: null, initial_Oc: null, initial_Orai1: null, initial_S2: null, initial_S2a: null, initial_S4: null, IP3_Cyt_init: null, k_a: null, K_deg: null, k_i: null, K_PLC: null, K_PMCA: null, K_SERCA: null, k_soc: null, K1: null, K2: null, Ka: null, Kc: null, Kd: null, kd_oligo: null, kdc: null, kdeg: null, kdo: null, Ki: null, Ko: null, kod: null, kop: null, L: null, l_hill: null, n_hill: null, O_o_init: null, Oc_init: null, Orai1_init: null, Orai1_t: null, p: null, P_IP3R: null, PM: null, q: null, r_hill: null, S2_init: null, S2a_init: null, S4_init: null, St: null, V_PLC: null, V_PMCA: null, V_PMleak: null, V_SERCA: null, Vcp: null, Vs4: null};
    this.metadata.variableOrder = {Ca_Cyt: null, IP3_Cyt: null, Ca_ER: null, S2: null, S2a: null, S4: null, Oc: null, O_o: null, Orai1: null, h: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
