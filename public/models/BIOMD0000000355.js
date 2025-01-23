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
    var state = Array(9).fill(0);
    state[0] = internal.initial_CaI;
    state[1] = internal.initial_IP3;
    state[2] = internal.initial_g;
    state[3] = internal.initial_mwaf195932_a72c_4552_8cf2_b349b15d39c4;
    state[4] = internal.initial_mw0ebc76ad_49d7_4845_8f88_04d443fbe7f3;
    state[5] = internal.initial_mw7cb2644a_384a_4bbb_93fd_fd686e01d7cb;
    state[6] = internal.initial_mwd6b792d8_c983_42c1_b3bc_2494d6a3363e;
    state[7] = internal.initial_mw013a7c64_a9ec_483c_b3b8_ed658337ee95;
    state[8] = internal.initial_CaS;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A", "B", "CaI_init", "CaS_init", "D", "E", "F", "g_init", "IP3_init", "k2", "L", "mw004dcb62_da5f_41c7_a7bd_033574894f48", "mw013a7c64_a9ec_483c_b3b8_ed658337ee95_init", "mw0ad64e84_bb75_4be4_a9c3_2d4741b0f45f", "mw0ebc76ad_49d7_4845_8f88_04d443fbe7f3_init", "mw219cf65d_18cc_4f7e_ab5a_5b87cda6fc43", "mw3a93c3a6_623a_44fe_84e9_a47823defd1f", "mw78dd80b8_e003_4c62_81d1_547d001767af", "mw7cb2644a_384a_4bbb_93fd_fd686e01d7cb_init", "mw92b257b7_00af_4fd6_a11b_8e4655a4ba65", "mwa3072851_e3e4_4767_ac41_49fa7c0de7a7", "mwaf195932_a72c_4552_8cf2_b349b15d39c4_init", "mwd21d3f76_d133_4053_8e44_02a538657e0a", "mwd3b36919_202a_4fed_a3c8_1a3a60594404", "mwd6b792d8_c983_42c1_b3bc_2494d6a3363e_init", "mwd8bf5d8f_ad00_4119_bde1_91015ef2cd7c", "mwe3841c25_6042_49c2_9feb_90cbf6751167", "mwf998b218_be11_4aa4_81ae_41141861fb42", "mwfbff577a_4e9c_40fe_8777_eb0ceade28c9", "mwfe8e89cf_3c67_4dd5_939e_b4cfee2e0778", "R"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B", internal, 0.26600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CaI_init", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CaS_init", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "D", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "F", internal, 0.017999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g_init", internal, 0.002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IP3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.17499999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mw004dcb62_da5f_41c7_a7bd_033574894f48", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mw013a7c64_a9ec_483c_b3b8_ed658337ee95_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mw0ad64e84_bb75_4be4_a9c3_2d4741b0f45f", internal, 0.034599999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mw0ebc76ad_49d7_4845_8f88_04d443fbe7f3_init", internal, 0.26600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mw219cf65d_18cc_4f7e_ab5a_5b87cda6fc43", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mw3a93c3a6_623a_44fe_84e9_a47823defd1f", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mw78dd80b8_e003_4c62_81d1_547d001767af", internal, 0.13, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mw7cb2644a_384a_4bbb_93fd_fd686e01d7cb_init", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mw92b257b7_00af_4fd6_a11b_8e4655a4ba65", internal, 0.17499999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mwa3072851_e3e4_4767_ac41_49fa7c0de7a7", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mwaf195932_a72c_4552_8cf2_b349b15d39c4_init", internal, 0.012999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mwd21d3f76_d133_4053_8e44_02a538657e0a", internal, 0.012999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mwd3b36919_202a_4fed_a3c8_1a3a60594404", internal, 8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mwd6b792d8_c983_42c1_b3bc_2494d6a3363e_init", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mwd8bf5d8f_ad00_4119_bde1_91015ef2cd7c", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mwe3841c25_6042_49c2_9feb_90cbf6751167", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mwf998b218_be11_4aa4_81ae_41141861fb42", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mwfbff577a_4e9c_40fe_8777_eb0ceade28c9", internal, 9.9999999999999995e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mwfe8e89cf_3c67_4dd5_939e_b4cfee2e0778", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R", internal, 1, -Infinity, Infinity, false);
    internal.initial_CaI = internal.CaI_init;
    internal.initial_CaS = internal.CaS_init;
    internal.initial_g = internal.g_init;
    internal.initial_IP3 = internal.IP3_init;
    internal.initial_mw013a7c64_a9ec_483c_b3b8_ed658337ee95 = internal.mw013a7c64_a9ec_483c_b3b8_ed658337ee95_init;
    internal.initial_mw0ebc76ad_49d7_4845_8f88_04d443fbe7f3 = internal.mw0ebc76ad_49d7_4845_8f88_04d443fbe7f3_init;
    internal.initial_mw7cb2644a_384a_4bbb_93fd_fd686e01d7cb = internal.mw7cb2644a_384a_4bbb_93fd_fd686e01d7cb_init;
    internal.initial_mwaf195932_a72c_4552_8cf2_b349b15d39c4 = internal.mwaf195932_a72c_4552_8cf2_b349b15d39c4_init;
    internal.initial_mwd6b792d8_c983_42c1_b3bc_2494d6a3363e = internal.mwd6b792d8_c983_42c1_b3bc_2494d6a3363e_init;
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
    const mwaf195932_a72c_4552_8cf2_b349b15d39c4 = state[3];
    const mw0ebc76ad_49d7_4845_8f88_04d443fbe7f3 = state[4];
    const mw7cb2644a_384a_4bbb_93fd_fd686e01d7cb = state[5];
    const mw013a7c64_a9ec_483c_b3b8_ed658337ee95 = state[7];
    const CaS = state[8];
    dstatedt[6] = 0;
    dstatedt[0] = 0 - 1 * mw0ebc76ad_49d7_4845_8f88_04d443fbe7f3 * Math.pow((CaI), (2)) / (Math.pow((CaI), (2)) + Math.pow((internal.k2), (2))) + 1 * (1 - internal.mwd8bf5d8f_ad00_4119_bde1_91015ef2cd7c) * (internal.L + (1 - g) * internal.A * Math.pow((IP3), (2)) / (Math.pow((IP3), (2)) + Math.pow((internal.mw92b257b7_00af_4fd6_a11b_8e4655a4ba65), (2))) * Math.pow((CaI), (2)) / (Math.pow((CaI), (2)) + Math.pow((internal.mw78dd80b8_e003_4c62_81d1_547d001767af), (2)))) * CaS + 1 * mw7cb2644a_384a_4bbb_93fd_fd686e01d7cb * (internal.mw0ad64e84_bb75_4be4_a9c3_2d4741b0f45f + Math.pow((internal.mwfe8e89cf_3c67_4dd5_939e_b4cfee2e0778), (8)) / (Math.pow((CaS), (8)) + Math.pow((internal.mwfe8e89cf_3c67_4dd5_939e_b4cfee2e0778), (8)))) - 1 * mwaf195932_a72c_4552_8cf2_b349b15d39c4 * Math.pow((CaI), (2)) / (Math.pow((CaI), (2)) + Math.pow((internal.mw3a93c3a6_623a_44fe_84e9_a47823defd1f), (2))) - 1 * internal.mwa3072851_e3e4_4767_ac41_49fa7c0de7a7 * Math.pow((CaI), (4)) / (Math.pow((CaI), (4)) + Math.pow((internal.mwe3841c25_6042_49c2_9feb_90cbf6751167), (4))) + 1 * internal.mw219cf65d_18cc_4f7e_ab5a_5b87cda6fc43 * mw013a7c64_a9ec_483c_b3b8_ed658337ee95 / (mw013a7c64_a9ec_483c_b3b8_ed658337ee95 + 0.01);
    dstatedt[8] = 0 + 1 * mw0ebc76ad_49d7_4845_8f88_04d443fbe7f3 * Math.pow((CaI), (2)) / (Math.pow((CaI), (2)) + Math.pow((internal.k2), (2))) - 1 * (1 - internal.mwd8bf5d8f_ad00_4119_bde1_91015ef2cd7c) * (internal.L + (1 - g) * internal.A * Math.pow((IP3), (2)) / (Math.pow((IP3), (2)) + Math.pow((internal.mw92b257b7_00af_4fd6_a11b_8e4655a4ba65), (2))) * Math.pow((CaI), (2)) / (Math.pow((CaI), (2)) + Math.pow((internal.mw78dd80b8_e003_4c62_81d1_547d001767af), (2)))) * CaS - 1 * internal.mwd8bf5d8f_ad00_4119_bde1_91015ef2cd7c * (internal.L + (1 - g) * internal.A * Math.pow((IP3), (2)) / (Math.pow((IP3), (2)) + Math.pow((internal.mw92b257b7_00af_4fd6_a11b_8e4655a4ba65), (2))) * Math.pow((CaI), (2)) / (Math.pow((CaI), (2)) + Math.pow((internal.mw78dd80b8_e003_4c62_81d1_547d001767af), (2)))) * CaS;
    dstatedt[2] = 0 + 1 * internal.E * Math.pow((CaI), (4)) / (Math.pow((CaI), (4)) + Math.pow((internal.mwf998b218_be11_4aa4_81ae_41141861fb42), (4))) * (1 - g) - 1 * internal.F * g;
    dstatedt[1] = 0 + 1 * internal.R * CaI - 1 * internal.D * IP3;
    dstatedt[7] = 0 + 1 * internal.mwa3072851_e3e4_4767_ac41_49fa7c0de7a7 * Math.pow((CaI), (4)) / (Math.pow((CaI), (4)) + Math.pow((internal.mwe3841c25_6042_49c2_9feb_90cbf6751167), (4))) + 1 * internal.mwd8bf5d8f_ad00_4119_bde1_91015ef2cd7c * (internal.L + (1 - g) * internal.A * Math.pow((IP3), (2)) / (Math.pow((IP3), (2)) + Math.pow((internal.mw92b257b7_00af_4fd6_a11b_8e4655a4ba65), (2))) * Math.pow((CaI), (2)) / (Math.pow((CaI), (2)) + Math.pow((internal.mw78dd80b8_e003_4c62_81d1_547d001767af), (2)))) * CaS - 1 * internal.mw219cf65d_18cc_4f7e_ab5a_5b87cda6fc43 * mw013a7c64_a9ec_483c_b3b8_ed658337ee95 / (mw013a7c64_a9ec_483c_b3b8_ed658337ee95 + 0.01);
    dstatedt[4] = 0 + 1 * 1 / internal.mwd3b36919_202a_4fed_a3c8_1a3a60594404 * internal.B * internal.mwfbff577a_4e9c_40fe_8777_eb0ceade28c9 * ((internal.mwd3b36919_202a_4fed_a3c8_1a3a60594404 - 1) * Math.pow((2), (4)) + Math.pow((CaS), (4))) / Math.pow((CaS), (4)) - 1 * mw0ebc76ad_49d7_4845_8f88_04d443fbe7f3 * internal.mwfbff577a_4e9c_40fe_8777_eb0ceade28c9;
    dstatedt[5] = 0 + 1 * 1 / (internal.mwd3b36919_202a_4fed_a3c8_1a3a60594404 * internal.mwd3b36919_202a_4fed_a3c8_1a3a60594404) * internal.mw004dcb62_da5f_41c7_a7bd_033574894f48 * internal.mwfbff577a_4e9c_40fe_8777_eb0ceade28c9 * ((internal.mwd3b36919_202a_4fed_a3c8_1a3a60594404 - 1) * Math.pow((2), (2)) + Math.pow((CaS), (2))) / Math.pow((CaS), (2)) * ((internal.mwd3b36919_202a_4fed_a3c8_1a3a60594404 - 1) * Math.pow((0.050000000000000003), (2)) + Math.pow((CaI), (2))) / Math.pow((CaI), (2)) - 1 * mw7cb2644a_384a_4bbb_93fd_fd686e01d7cb * internal.mwfbff577a_4e9c_40fe_8777_eb0ceade28c9;
    dstatedt[3] = 0 + 1 * internal.mwd3b36919_202a_4fed_a3c8_1a3a60594404 * internal.mwfbff577a_4e9c_40fe_8777_eb0ceade28c9 * internal.mwd21d3f76_d133_4053_8e44_02a538657e0a * Math.pow((CaI), (4)) / ((internal.mwd3b36919_202a_4fed_a3c8_1a3a60594404 - 1) * Math.pow((0.050000000000000003), (4)) + Math.pow((CaI), (4))) - 1 * mwaf195932_a72c_4552_8cf2_b349b15d39c4 * internal.mwfbff577a_4e9c_40fe_8777_eb0ceade28c9;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "CaI", "IP3", "g", "mwaf195932_a72c_4552_8cf2_b349b15d39c4", "mw0ebc76ad_49d7_4845_8f88_04d443fbe7f3", "mw7cb2644a_384a_4bbb_93fd_fd686e01d7cb", "mwd6b792d8_c983_42c1_b3bc_2494d6a3363e", "mw013a7c64_a9ec_483c_b3b8_ed658337ee95", "CaS"];
    this.metadata.internalOrder = {A: null, B: null, CaI_init: null, CaS_init: null, cytosol: null, D: null, E: null, ER_store: null, F: null, g_init: null, initial_CaI: null, initial_CaS: null, initial_g: null, initial_IP3: null, initial_mw013a7c64_a9ec_483c_b3b8_ed658337ee95: null, initial_mw0ebc76ad_49d7_4845_8f88_04d443fbe7f3: null, initial_mw7cb2644a_384a_4bbb_93fd_fd686e01d7cb: null, initial_mwaf195932_a72c_4552_8cf2_b349b15d39c4: null, initial_mwd6b792d8_c983_42c1_b3bc_2494d6a3363e: null, IP3_init: null, k2: null, L: null, mitochondria: null, mw004dcb62_da5f_41c7_a7bd_033574894f48: null, mw013a7c64_a9ec_483c_b3b8_ed658337ee95_init: null, mw0ad64e84_bb75_4be4_a9c3_2d4741b0f45f: null, mw0ebc76ad_49d7_4845_8f88_04d443fbe7f3_init: null, mw219cf65d_18cc_4f7e_ab5a_5b87cda6fc43: null, mw3a93c3a6_623a_44fe_84e9_a47823defd1f: null, mw78dd80b8_e003_4c62_81d1_547d001767af: null, mw7cb2644a_384a_4bbb_93fd_fd686e01d7cb_init: null, mw92b257b7_00af_4fd6_a11b_8e4655a4ba65: null, mwa3072851_e3e4_4767_ac41_49fa7c0de7a7: null, mwaf195932_a72c_4552_8cf2_b349b15d39c4_init: null, mwd21d3f76_d133_4053_8e44_02a538657e0a: null, mwd3b36919_202a_4fed_a3c8_1a3a60594404: null, mwd6b792d8_c983_42c1_b3bc_2494d6a3363e_init: null, mwd8bf5d8f_ad00_4119_bde1_91015ef2cd7c: null, mwe3841c25_6042_49c2_9feb_90cbf6751167: null, mwf998b218_be11_4aa4_81ae_41141861fb42: null, mwfbff577a_4e9c_40fe_8777_eb0ceade28c9: null, mwfe8e89cf_3c67_4dd5_939e_b4cfee2e0778: null, outside: null, R: null};
    this.metadata.variableOrder = {CaI: null, IP3: null, g: null, mwaf195932_a72c_4552_8cf2_b349b15d39c4: null, mw0ebc76ad_49d7_4845_8f88_04d443fbe7f3: null, mw7cb2644a_384a_4bbb_93fd_fd686e01d7cb: null, mwd6b792d8_c983_42c1_b3bc_2494d6a3363e: null, mw013a7c64_a9ec_483c_b3b8_ed658337ee95: null, CaS: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
