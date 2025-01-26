export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cytosol = 1;
    internal.ER_store = 1;
    internal.mitochondria = 1;
    internal.outside = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(6).fill(0);
    state[0] = internal.initial_CaI;
    state[1] = internal.initial_IP3;
    state[2] = internal.initial_g;
    state[3] = internal.initial_CaO;
    state[4] = internal.initial_CaS;
    state[5] = internal.initial_CaM;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A", "B", "CaI_init", "CaM_init", "CaO_init", "CaS_init", "D", "E", "F", "g_init", "IP3_init", "k2", "kIP3R", "kSTIM", "L", "mw004dcb62_da5f_41c7_a7bd_033574894f48", "mw3a93c3a6_623a_44fe_84e9_a47823defd1f", "mw78dd80b8_e003_4c62_81d1_547d001767af", "mw886be93a_22c7_4966_a1fa_113afd832ae3", "mwc714c217_c8fd_4024_912c_681cd6931f59", "mwc8d6bdb5_59d4_43fa_b96d_7426f4857e0d", "mwd21d3f76_d133_4053_8e44_02a538657e0a", "mwd90ce3ea_f8d5_4f0a_8093_e39a2d3dbf33", "mwf998b218_be11_4aa4_81ae_41141861fb42", "PMleak", "R"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B", internal, 0.26600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CaI_init", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CaM_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CaO_init", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CaS_init", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "D", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "F", internal, 0.017999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_init", internal, 0.002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IP3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.17499999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kIP3R", internal, 0.17499999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kSTIM", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mw004dcb62_da5f_41c7_a7bd_033574894f48", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mw3a93c3a6_623a_44fe_84e9_a47823defd1f", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mw78dd80b8_e003_4c62_81d1_547d001767af", internal, 0.13, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mw886be93a_22c7_4966_a1fa_113afd832ae3", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mwc714c217_c8fd_4024_912c_681cd6931f59", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mwc8d6bdb5_59d4_43fa_b96d_7426f4857e0d", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mwd21d3f76_d133_4053_8e44_02a538657e0a", internal, 0.012999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mwd90ce3ea_f8d5_4f0a_8093_e39a2d3dbf33", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mwf998b218_be11_4aa4_81ae_41141861fb42", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PMleak", internal, 0.034599999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R", internal, 1, -Infinity, Infinity, false);
    internal.initial_CaI = internal.CaI_init;
    internal.initial_CaM = internal.CaM_init;
    internal.initial_CaO = internal.CaO_init;
    internal.initial_CaS = internal.CaS_init;
    internal.initial_g = internal.g_init;
    internal.initial_IP3 = internal.IP3_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const CaI = state[0];
    const IP3 = state[1];
    const g = state[2];
    const CaS = state[4];
    const CaM = state[5];
    dstatedt[3] = 0;
    dstatedt[0] = 0 - 1 * internal.B * Math.pow((CaI), (2)) / (Math.pow((CaI), (2)) + Math.pow((internal.k2), (2))) + 1 * (1 - internal.mwc714c217_c8fd_4024_912c_681cd6931f59) * (internal.L + (1 - g) * internal.A * Math.pow((IP3), (2)) / (Math.pow((IP3), (2)) + Math.pow((internal.kIP3R), (2))) * Math.pow((CaI), (2)) / (Math.pow((CaI), (2)) + Math.pow((internal.mw78dd80b8_e003_4c62_81d1_547d001767af), (2)))) * CaS + 1 * internal.mw004dcb62_da5f_41c7_a7bd_033574894f48 * (internal.PMleak + Math.pow((internal.kSTIM), (8)) / (Math.pow((CaS), (8)) + Math.pow((internal.kSTIM), (8)))) - 1 * internal.mwd21d3f76_d133_4053_8e44_02a538657e0a * Math.pow((CaI), (2)) / (Math.pow((CaI), (2)) + Math.pow((internal.mw3a93c3a6_623a_44fe_84e9_a47823defd1f), (2))) - 1 * internal.mw886be93a_22c7_4966_a1fa_113afd832ae3 * Math.pow((CaI), (4)) / (Math.pow((CaI), (4)) + Math.pow((internal.mwc8d6bdb5_59d4_43fa_b96d_7426f4857e0d), (4))) + 1 * internal.mwd90ce3ea_f8d5_4f0a_8093_e39a2d3dbf33 * CaM / (CaM + 0.01);
    dstatedt[5] = 0 + 1 * internal.mw886be93a_22c7_4966_a1fa_113afd832ae3 * Math.pow((CaI), (4)) / (Math.pow((CaI), (4)) + Math.pow((internal.mwc8d6bdb5_59d4_43fa_b96d_7426f4857e0d), (4))) - 1 * internal.mwd90ce3ea_f8d5_4f0a_8093_e39a2d3dbf33 * CaM / (CaM + 0.01) + 1 * internal.mwc714c217_c8fd_4024_912c_681cd6931f59 * (internal.L + (1 - g) * internal.A * Math.pow((IP3), (2)) / (Math.pow((IP3), (2)) + Math.pow((internal.kIP3R), (2))) * Math.pow((CaI), (2)) / (Math.pow((CaI), (2)) + Math.pow((internal.mw78dd80b8_e003_4c62_81d1_547d001767af), (2)))) * CaS;
    dstatedt[4] = 0 + 1 * internal.B * Math.pow((CaI), (2)) / (Math.pow((CaI), (2)) + Math.pow((internal.k2), (2))) - 1 * (1 - internal.mwc714c217_c8fd_4024_912c_681cd6931f59) * (internal.L + (1 - g) * internal.A * Math.pow((IP3), (2)) / (Math.pow((IP3), (2)) + Math.pow((internal.kIP3R), (2))) * Math.pow((CaI), (2)) / (Math.pow((CaI), (2)) + Math.pow((internal.mw78dd80b8_e003_4c62_81d1_547d001767af), (2)))) * CaS - 1 * internal.mwc714c217_c8fd_4024_912c_681cd6931f59 * (internal.L + (1 - g) * internal.A * Math.pow((IP3), (2)) / (Math.pow((IP3), (2)) + Math.pow((internal.kIP3R), (2))) * Math.pow((CaI), (2)) / (Math.pow((CaI), (2)) + Math.pow((internal.mw78dd80b8_e003_4c62_81d1_547d001767af), (2)))) * CaS;
    dstatedt[2] = 0 + 1 * internal.E * Math.pow((CaI), (4)) / (Math.pow((CaI), (4)) + Math.pow((internal.mwf998b218_be11_4aa4_81ae_41141861fb42), (4))) * (1 - g) - 1 * internal.F * g;
    dstatedt[1] = 0 + 1 * internal.R * CaI - 1 * internal.D * IP3;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "CaI", "IP3", "g", "CaO", "CaS", "CaM"];
    this.metadata.internalOrder = {A: null, B: null, CaI_init: null, CaM_init: null, CaO_init: null, CaS_init: null, cytosol: null, D: null, E: null, ER_store: null, F: null, g_init: null, initial_CaI: null, initial_CaM: null, initial_CaO: null, initial_CaS: null, initial_g: null, initial_IP3: null, IP3_init: null, k2: null, kIP3R: null, kSTIM: null, L: null, mitochondria: null, mw004dcb62_da5f_41c7_a7bd_033574894f48: null, mw3a93c3a6_623a_44fe_84e9_a47823defd1f: null, mw78dd80b8_e003_4c62_81d1_547d001767af: null, mw886be93a_22c7_4966_a1fa_113afd832ae3: null, mwc714c217_c8fd_4024_912c_681cd6931f59: null, mwc8d6bdb5_59d4_43fa_b96d_7426f4857e0d: null, mwd21d3f76_d133_4053_8e44_02a538657e0a: null, mwd90ce3ea_f8d5_4f0a_8093_e39a2d3dbf33: null, mwf998b218_be11_4aa4_81ae_41141861fb42: null, outside: null, PMleak: null, R: null};
    this.metadata.variableOrder = {CaI: null, IP3: null, g: null, CaO: null, CaS: null, CaM: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
