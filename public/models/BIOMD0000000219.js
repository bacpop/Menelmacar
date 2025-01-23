export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell = 1;
    internal.Kaca_cs = 0.050000000000000003;
    internal.Kaca_ms = 0.029999999999999999;
    internal.Kakg_icd1 = 0.29999999999999999;
    internal.Kakg_icd2 = 0.59999999999999998;
    internal.Kakg_kdh = 0.10000000000000001;
    internal.Kakg_kgd = 0.47999999999999998;
    internal.Kcit_acn = 1.7;
    internal.Kcit_cs = 0.12;
    internal.Kcoa_cs = 0.5;
    internal.Kcoa_ms = 0.10000000000000001;
    internal.Kfa_fum = 0.25;
    internal.Kfa_sdh = 0.14999999999999999;
    internal.Kgly_icl1 = 0.13;
    internal.Kgly_icl2 = 1.3;
    internal.Kgly_ms = 0.057000000000000002;
    internal.Kicit_acn = 0.69999999999999996;
    internal.Kicit_icd1 = 0.029999999999999999;
    internal.Kicit_icd2 = 0.059999999999999998;
    internal.Kicit_icl1 = 0.14499999999999999;
    internal.Kicit_icl2 = 1.3;
    internal.Kmal_fum = 2.3799999999999999;
    internal.Kmal_mdh = 0.83299999999999996;
    internal.Kmal_ms = 1;
    internal.Koaa_cs = 0.012;
    internal.Koaa_mdh = 0.044299999999999999;
    internal.Ksca_kdh = 1;
    internal.Ksca_scas = 0.02;
    internal.Kssa_kgd = 4.7999999999999998;
    internal.Kssa_ssadh = 0.014999999999999999;
    internal.Ksuc_icl1 = 0.58999999999999997;
    internal.Ksuc_icl2 = 5.9000000000000004;
    internal.Ksuc_scas = 5;
    internal.Ksuc_sdh = 0.12;
    internal.Ksuc_ssadh = 0.14999999999999999;
    internal.Vf_acn = 31.199999999999999;
    internal.Vf_cs = 64.799999999999997;
    internal.Vf_fum = 87.700000000000003;
    internal.Vf_icd1 = 10.199999999999999;
    internal.Vf_icd2 = 9.9649999999999999;
    internal.Vf_icl1 = 1.1719999999999999;
    internal.Vf_icl2 = 0.39100000000000001;
    internal.Vf_kdh = 57.344000000000001;
    internal.Vf_kgd = 48.299999999999997;
    internal.Vf_mdh = 184;
    internal.Vf_ms = 20;
    internal.Vf_scas = 1.2;
    internal.Vf_sdh = 1.02;
    internal.Vf_ssadh = 6.5099999999999998;
    internal.Vr_acn = 0.312;
    internal.Vr_cs = 0.64800000000000002;
    internal.Vr_fum = 87.700000000000003;
    internal.Vr_icd1 = 0.10199999999999999;
    internal.Vr_icd2 = 0.099650000000000002;
    internal.Vr_icl1 = 0.01172;
    internal.Vr_icl2 = 0.0039100000000000003;
    internal.Vr_kdh = 0.57343999999999995;
    internal.Vr_kgd = 0.48299999999999998;
    internal.Vr_mdh = 184;
    internal.Vr_ms = 0.20000000000000001;
    internal.Vr_scas = 0.012;
    internal.Vr_sdh = 1.02;
    internal.Vr_ssadh = 0.065100000000000005;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(13).fill(0);
    state[0] = internal.initial_aca;
    state[1] = internal.initial_oaa;
    state[2] = internal.initial_coa;
    state[3] = internal.initial_cit;
    state[4] = internal.initial_icit;
    state[5] = internal.initial_akg;
    state[6] = internal.initial_ssa;
    state[7] = internal.initial_suc;
    state[8] = internal.initial_sca;
    state[9] = internal.initial_fa;
    state[10] = internal.initial_mal;
    state[11] = internal.initial_gly;
    state[12] = internal.initial_biosyn;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["aca_init", "akg_init", "biosyn_init", "cit_init", "coa_init", "fa_init", "gly_init", "icit_init", "mal_init", "oaa_init", "sca_init", "ssa_init", "suc_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "aca_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "akg_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "biosyn_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cit_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "coa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "fa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gly_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "icit_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mal_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "oaa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sca_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ssa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "suc_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_aca = internal.aca_init;
    internal.initial_akg = internal.akg_init;
    internal.initial_biosyn = internal.biosyn_init;
    internal.initial_cit = internal.cit_init;
    internal.initial_coa = internal.coa_init;
    internal.initial_fa = internal.fa_init;
    internal.initial_gly = internal.gly_init;
    internal.initial_icit = internal.icit_init;
    internal.initial_mal = internal.mal_init;
    internal.initial_oaa = internal.oaa_init;
    internal.initial_sca = internal.sca_init;
    internal.initial_ssa = internal.ssa_init;
    internal.initial_suc = internal.suc_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const aca = state[0];
    const oaa = state[1];
    const coa = state[2];
    const cit = state[3];
    const icit = state[4];
    const akg = state[5];
    const ssa = state[6];
    const suc = state[7];
    const sca = state[8];
    const fa = state[9];
    const mal = state[10];
    const gly = state[11];
    dstatedt[0] = 0;
    dstatedt[12] = 0;
    dstatedt[2] = 0;
    dstatedt[1] = 0;
    dstatedt[5] = 0 + 1 * internal.cell * ((internal.Vf_icd1 * (icit / internal.Kicit_icd1) - internal.Vr_icd1 * (akg / internal.Kakg_icd1)) / (1 + icit / internal.Kicit_icd1 + akg / internal.Kakg_icd1)) + 1 * internal.cell * ((internal.Vf_icd2 * (icit / internal.Kicit_icd2) - internal.Vr_icd2 * (akg / internal.Kakg_icd2)) / (1 + icit / internal.Kicit_icd2 + akg / internal.Kakg_icd2)) - 1 * internal.cell * ((internal.Vf_kdh * (akg / internal.Kakg_kdh) - internal.Vr_kdh * (sca / internal.Ksca_kdh)) / (1 + akg / internal.Kakg_kdh + sca / internal.Ksca_kdh)) - 1 * internal.cell * ((internal.Vf_kgd * (akg / internal.Kakg_kgd) - internal.Vr_kgd * (ssa / internal.Kssa_kgd)) / (1 + akg / internal.Kakg_kgd + ssa / internal.Kssa_kgd)) - 1 * internal.cell * 0.034099999999999998 * ((internal.Vf_icd1 * (icit / internal.Kicit_icd1) - internal.Vr_icd1 * (akg / internal.Kakg_icd1)) / (1 + icit / internal.Kicit_icd1 + akg / internal.Kakg_icd1) + (internal.Vf_icd2 * (icit / internal.Kicit_icd2) - internal.Vr_icd2 * (akg / internal.Kakg_icd2)) / (1 + icit / internal.Kicit_icd2 + akg / internal.Kakg_icd2));
    dstatedt[3] = 0 + 1 * internal.cell * ((internal.Vf_cs * (aca / internal.Kaca_cs) * (oaa / internal.Koaa_cs) - internal.Vr_cs * (coa / internal.Kcoa_cs) * (cit / internal.Kcit_cs)) / ((1 + aca / internal.Kaca_cs + coa / internal.Kcoa_cs) * (1 + oaa / internal.Koaa_cs + cit / internal.Kcit_cs))) - 1 * internal.cell * ((internal.Vf_acn * (cit / internal.Kcit_acn) - internal.Vr_acn * (icit / internal.Kicit_acn)) / (1 + cit / internal.Kcit_acn + icit / internal.Kicit_acn));
    dstatedt[9] = 0 + 1 * internal.cell * ((internal.Vf_sdh * (suc / internal.Ksuc_sdh) - internal.Vr_sdh * (fa / internal.Kfa_sdh)) / (1 + suc / internal.Ksuc_sdh + fa / internal.Kfa_sdh)) - 1 * internal.cell * ((internal.Vf_fum * (fa / internal.Kfa_fum) - internal.Vr_fum * (mal / internal.Kmal_fum)) / (1 + fa / internal.Kfa_fum + mal / internal.Kmal_fum));
    dstatedt[11] = 0 + 1 * internal.cell * ((internal.Vf_icl1 * (icit / internal.Kicit_icl1) - internal.Vr_icl1 * (suc / internal.Ksuc_icl1) * (gly / internal.Kgly_icl1)) / (1 + icit / internal.Kicit_icl1 + suc / internal.Ksuc_icl1 + gly / internal.Kgly_icl1 + icit / internal.Kicit_icl1 * (suc / internal.Ksuc_icl1) + suc / internal.Ksuc_icl1 * (gly / internal.Kgly_icl1))) + 1 * internal.cell * ((internal.Vf_icl2 * (icit / internal.Kicit_icl2) - internal.Vr_icl2 * (suc / internal.Ksuc_icl2) * (gly / internal.Kgly_icl2)) / (1 + icit / internal.Kicit_icl2 + suc / internal.Ksuc_icl2 + gly / internal.Kgly_icl2 + icit / internal.Kicit_icl2 * (suc / internal.Ksuc_icl2) + suc / internal.Ksuc_icl2 * (gly / internal.Kgly_icl2))) - 1 * internal.cell * ((internal.Vf_ms * (gly / internal.Kgly_ms) * (aca / internal.Kaca_ms) - internal.Vr_ms * (mal / internal.Kmal_ms) * (coa / internal.Kcoa_ms)) / ((1 + gly / internal.Kgly_ms + mal / internal.Kmal_ms) * (1 + aca / internal.Kaca_ms + coa / internal.Kcoa_ms)));
    dstatedt[4] = 0 + 1 * internal.cell * ((internal.Vf_acn * (cit / internal.Kcit_acn) - internal.Vr_acn * (icit / internal.Kicit_acn)) / (1 + cit / internal.Kcit_acn + icit / internal.Kicit_acn)) - 1 * internal.cell * ((internal.Vf_icd1 * (icit / internal.Kicit_icd1) - internal.Vr_icd1 * (akg / internal.Kakg_icd1)) / (1 + icit / internal.Kicit_icd1 + akg / internal.Kakg_icd1)) - 1 * internal.cell * ((internal.Vf_icd2 * (icit / internal.Kicit_icd2) - internal.Vr_icd2 * (akg / internal.Kakg_icd2)) / (1 + icit / internal.Kicit_icd2 + akg / internal.Kakg_icd2)) - 1 * internal.cell * ((internal.Vf_icl1 * (icit / internal.Kicit_icl1) - internal.Vr_icl1 * (suc / internal.Ksuc_icl1) * (gly / internal.Kgly_icl1)) / (1 + icit / internal.Kicit_icl1 + suc / internal.Ksuc_icl1 + gly / internal.Kgly_icl1 + icit / internal.Kicit_icl1 * (suc / internal.Ksuc_icl1) + suc / internal.Ksuc_icl1 * (gly / internal.Kgly_icl1))) - 1 * internal.cell * ((internal.Vf_icl2 * (icit / internal.Kicit_icl2) - internal.Vr_icl2 * (suc / internal.Ksuc_icl2) * (gly / internal.Kgly_icl2)) / (1 + icit / internal.Kicit_icl2 + suc / internal.Ksuc_icl2 + gly / internal.Kgly_icl2 + icit / internal.Kicit_icl2 * (suc / internal.Ksuc_icl2) + suc / internal.Ksuc_icl2 * (gly / internal.Kgly_icl2)));
    dstatedt[10] = 0 + 1 * internal.cell * ((internal.Vf_fum * (fa / internal.Kfa_fum) - internal.Vr_fum * (mal / internal.Kmal_fum)) / (1 + fa / internal.Kfa_fum + mal / internal.Kmal_fum)) - 1 * internal.cell * ((internal.Vf_mdh * (mal / internal.Kmal_mdh) - internal.Vr_mdh * (oaa / internal.Koaa_mdh)) / (1 + mal / internal.Kmal_mdh + oaa / internal.Koaa_mdh)) + 1 * internal.cell * ((internal.Vf_ms * (gly / internal.Kgly_ms) * (aca / internal.Kaca_ms) - internal.Vr_ms * (mal / internal.Kmal_ms) * (coa / internal.Kcoa_ms)) / ((1 + gly / internal.Kgly_ms + mal / internal.Kmal_ms) * (1 + aca / internal.Kaca_ms + coa / internal.Kcoa_ms)));
    dstatedt[8] = 0 + 1 * internal.cell * ((internal.Vf_kdh * (akg / internal.Kakg_kdh) - internal.Vr_kdh * (sca / internal.Ksca_kdh)) / (1 + akg / internal.Kakg_kdh + sca / internal.Ksca_kdh)) - 1 * internal.cell * ((internal.Vf_scas * (sca / internal.Ksca_scas) - internal.Vr_scas * (suc / internal.Ksuc_scas)) / (1 + sca / internal.Ksca_scas + suc / internal.Ksuc_scas));
    dstatedt[6] = 0 + 1 * internal.cell * ((internal.Vf_kgd * (akg / internal.Kakg_kgd) - internal.Vr_kgd * (ssa / internal.Kssa_kgd)) / (1 + akg / internal.Kakg_kgd + ssa / internal.Kssa_kgd)) - 1 * internal.cell * ((internal.Vf_ssadh * (ssa / internal.Kssa_ssadh) - internal.Vr_ssadh * (suc / internal.Ksuc_ssadh)) / (1 + ssa / internal.Kssa_ssadh + suc / internal.Ksuc_ssadh));
    dstatedt[7] = 0 + 1 * internal.cell * ((internal.Vf_ssadh * (ssa / internal.Kssa_ssadh) - internal.Vr_ssadh * (suc / internal.Ksuc_ssadh)) / (1 + ssa / internal.Kssa_ssadh + suc / internal.Ksuc_ssadh)) + 1 * internal.cell * ((internal.Vf_scas * (sca / internal.Ksca_scas) - internal.Vr_scas * (suc / internal.Ksuc_scas)) / (1 + sca / internal.Ksca_scas + suc / internal.Ksuc_scas)) - 1 * internal.cell * ((internal.Vf_sdh * (suc / internal.Ksuc_sdh) - internal.Vr_sdh * (fa / internal.Kfa_sdh)) / (1 + suc / internal.Ksuc_sdh + fa / internal.Kfa_sdh)) + 1 * internal.cell * ((internal.Vf_icl1 * (icit / internal.Kicit_icl1) - internal.Vr_icl1 * (suc / internal.Ksuc_icl1) * (gly / internal.Kgly_icl1)) / (1 + icit / internal.Kicit_icl1 + suc / internal.Ksuc_icl1 + gly / internal.Kgly_icl1 + icit / internal.Kicit_icl1 * (suc / internal.Ksuc_icl1) + suc / internal.Ksuc_icl1 * (gly / internal.Kgly_icl1))) + 1 * internal.cell * ((internal.Vf_icl2 * (icit / internal.Kicit_icl2) - internal.Vr_icl2 * (suc / internal.Ksuc_icl2) * (gly / internal.Kgly_icl2)) / (1 + icit / internal.Kicit_icl2 + suc / internal.Ksuc_icl2 + gly / internal.Kgly_icl2 + icit / internal.Kicit_icl2 * (suc / internal.Ksuc_icl2) + suc / internal.Ksuc_icl2 * (gly / internal.Kgly_icl2)));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "aca", "oaa", "coa", "cit", "icit", "akg", "ssa", "suc", "sca", "fa", "mal", "gly", "biosyn"];
    this.metadata.internalOrder = {aca_init: null, akg_init: null, biosyn_init: null, cell: null, cit_init: null, coa_init: null, fa_init: null, gly_init: null, icit_init: null, initial_aca: null, initial_akg: null, initial_biosyn: null, initial_cit: null, initial_coa: null, initial_fa: null, initial_gly: null, initial_icit: null, initial_mal: null, initial_oaa: null, initial_sca: null, initial_ssa: null, initial_suc: null, Kaca_cs: null, Kaca_ms: null, Kakg_icd1: null, Kakg_icd2: null, Kakg_kdh: null, Kakg_kgd: null, Kcit_acn: null, Kcit_cs: null, Kcoa_cs: null, Kcoa_ms: null, Kfa_fum: null, Kfa_sdh: null, Kgly_icl1: null, Kgly_icl2: null, Kgly_ms: null, Kicit_acn: null, Kicit_icd1: null, Kicit_icd2: null, Kicit_icl1: null, Kicit_icl2: null, Kmal_fum: null, Kmal_mdh: null, Kmal_ms: null, Koaa_cs: null, Koaa_mdh: null, Ksca_kdh: null, Ksca_scas: null, Kssa_kgd: null, Kssa_ssadh: null, Ksuc_icl1: null, Ksuc_icl2: null, Ksuc_scas: null, Ksuc_sdh: null, Ksuc_ssadh: null, mal_init: null, oaa_init: null, sca_init: null, ssa_init: null, suc_init: null, Vf_acn: null, Vf_cs: null, Vf_fum: null, Vf_icd1: null, Vf_icd2: null, Vf_icl1: null, Vf_icl2: null, Vf_kdh: null, Vf_kgd: null, Vf_mdh: null, Vf_ms: null, Vf_scas: null, Vf_sdh: null, Vf_ssadh: null, Vr_acn: null, Vr_cs: null, Vr_fum: null, Vr_icd1: null, Vr_icd2: null, Vr_icl1: null, Vr_icl2: null, Vr_kdh: null, Vr_kgd: null, Vr_mdh: null, Vr_ms: null, Vr_scas: null, Vr_sdh: null, Vr_ssadh: null};
    this.metadata.variableOrder = {aca: null, oaa: null, coa: null, cit: null, icit: null, akg: null, ssa: null, suc: null, sca: null, fa: null, mal: null, gly: null, biosyn: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
