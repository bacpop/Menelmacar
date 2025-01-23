export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell = 1;
    internal.Kaca_cs = 0.029999999999999999;
    internal.Kaca_ms = 0.01;
    internal.Kakg_icd = 0.13;
    internal.Kakg_kdh = 0.10000000000000001;
    internal.Kcit_acn = 1.7;
    internal.Kcit_cs = 0.69999999999999996;
    internal.Kcoa_cs = 0.29999999999999999;
    internal.Kcoa_ms = 0.10000000000000001;
    internal.Kfa_fum = 0.14999999999999999;
    internal.Kfa_sdh = 0.40000000000000002;
    internal.Kgly_icl = 0.13;
    internal.Kgly_ms = 2;
    internal.Kicit_acn = 3.3300000000000001;
    internal.Kicit_icd = 0.0080000000000000002;
    internal.Kicit_icl = 0.60399999999999998;
    internal.Kmal_fum = 0.040000000000000001;
    internal.Kmal_mdh = 2.6000000000000001;
    internal.Kmal_ms = 1;
    internal.Koaa_cs = 0.070000000000000007;
    internal.Koaa_mdh = 0.040000000000000001;
    internal.Ksca_kdh = 1;
    internal.Ksca_scas = 0.02;
    internal.Ksuc_icl = 0.58999999999999997;
    internal.Ksuc_scas = 5;
    internal.Ksuc_sdh = 0.02;
    internal.Vf_acn = 91.200000000000003;
    internal.Vf_cs = 91.200000000000003;
    internal.Vf_fum = 44.640000000000001;
    internal.Vf_icd = 14.720000000000001;
    internal.Vf_icl = 1.8999999999999999;
    internal.Vf_kdh = 35.840000000000003;
    internal.Vf_mdh = 356.63999999999999;
    internal.Vf_ms = 1.8999999999999999;
    internal.Vf_scas = 3.5;
    internal.Vf_sdh = 7.3799999999999999;
    internal.Vr_acn = 0.91200000000000003;
    internal.Vr_cs = 0.91200000000000003;
    internal.Vr_fum = 37.200000000000003;
    internal.Vr_icd = 0.1472;
    internal.Vr_icl = 0.019;
    internal.Vr_kdh = 0.3584;
    internal.Vr_mdh = 353.11000000000001;
    internal.Vr_ms = 0.019;
    internal.Vr_scas = 0.035000000000000003;
    internal.Vr_sdh = 7.3099999999999996;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(12).fill(0);
    state[0] = internal.initial_aca;
    state[1] = internal.initial_oaa;
    state[2] = internal.initial_coa;
    state[3] = internal.initial_cit;
    state[4] = internal.initial_icit;
    state[5] = internal.initial_akg;
    state[6] = internal.initial_sca;
    state[7] = internal.initial_suc;
    state[8] = internal.initial_fa;
    state[9] = internal.initial_mal;
    state[10] = internal.initial_gly;
    state[11] = internal.initial_biosyn;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["aca_init", "akg_init", "biosyn_init", "cit_init", "coa_init", "fa_init", "gly_init", "icit_init", "mal_init", "oaa_init", "sca_init", "suc_init"], unusedUserAction);
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
    const sca = state[6];
    const suc = state[7];
    const fa = state[8];
    const mal = state[9];
    const gly = state[10];
    dstatedt[0] = 0;
    dstatedt[11] = 0;
    dstatedt[2] = 0;
    dstatedt[1] = 0;
    dstatedt[5] = 0 + 1 * internal.cell * ((internal.Vf_icd * (icit / internal.Kicit_icd) - internal.Vr_icd * (akg / internal.Kakg_icd)) / (1 + icit / internal.Kicit_icd + akg / internal.Kakg_icd)) - 1 * internal.cell * ((internal.Vf_kdh * (akg / internal.Kakg_kdh) - internal.Vr_kdh * (sca / internal.Ksca_kdh)) / (1 + akg / internal.Kakg_kdh + sca / internal.Ksca_kdh)) - 1 * internal.cell * 0.188 * ((internal.Vf_icd * (icit / internal.Kicit_icd) - internal.Vr_icd * (akg / internal.Kakg_icd)) / (1 + icit / internal.Kicit_icd + akg / internal.Kakg_icd));
    dstatedt[3] = 0 + 1 * internal.cell * ((internal.Vf_cs * (aca / internal.Kaca_cs) * (oaa / internal.Koaa_cs) - internal.Vr_cs * (coa / internal.Kcoa_cs) * (cit / internal.Kcit_cs)) / ((1 + aca / internal.Kaca_cs + coa / internal.Kcoa_cs) * (1 + oaa / internal.Koaa_cs + cit / internal.Kcit_cs))) - 1 * internal.cell * ((internal.Vf_acn * (cit / internal.Kcit_acn) - internal.Vr_acn * (icit / internal.Kicit_acn)) / (1 + cit / internal.Kcit_acn + icit / internal.Kicit_acn));
    dstatedt[8] = 0 + 1 * internal.cell * ((internal.Vf_sdh * (suc / internal.Ksuc_sdh) - internal.Vr_sdh * (fa / internal.Kfa_sdh)) / (1 + suc / internal.Ksuc_sdh + fa / internal.Kfa_sdh)) - 1 * internal.cell * ((internal.Vf_fum * (fa / internal.Kfa_fum) - internal.Vr_fum * (mal / internal.Kmal_fum)) / (1 + fa / internal.Kfa_fum + mal / internal.Kmal_fum));
    dstatedt[10] = 0 + 1 * internal.cell * ((internal.Vf_icl * (icit / internal.Kicit_icl) - internal.Vr_icl * (suc / internal.Ksuc_icl) * (gly / internal.Kgly_icl)) / (1 + icit / internal.Kicit_icl + suc / internal.Ksuc_icl + gly / internal.Kgly_icl + icit / internal.Kicit_icl * (suc / internal.Ksuc_icl) + suc / internal.Ksuc_icl * (gly / internal.Kgly_icl))) - 1 * internal.cell * ((internal.Vf_ms * (gly / internal.Kgly_ms) * (aca / internal.Kaca_ms) - internal.Vr_ms * (mal / internal.Kmal_ms) * (coa / internal.Kcoa_ms)) / ((1 + gly / internal.Kgly_ms + mal / internal.Kmal_ms) * (1 + aca / internal.Kaca_ms + coa / internal.Kcoa_ms)));
    dstatedt[4] = 0 + 1 * internal.cell * ((internal.Vf_acn * (cit / internal.Kcit_acn) - internal.Vr_acn * (icit / internal.Kicit_acn)) / (1 + cit / internal.Kcit_acn + icit / internal.Kicit_acn)) - 1 * internal.cell * ((internal.Vf_icd * (icit / internal.Kicit_icd) - internal.Vr_icd * (akg / internal.Kakg_icd)) / (1 + icit / internal.Kicit_icd + akg / internal.Kakg_icd)) - 1 * internal.cell * ((internal.Vf_icl * (icit / internal.Kicit_icl) - internal.Vr_icl * (suc / internal.Ksuc_icl) * (gly / internal.Kgly_icl)) / (1 + icit / internal.Kicit_icl + suc / internal.Ksuc_icl + gly / internal.Kgly_icl + icit / internal.Kicit_icl * (suc / internal.Ksuc_icl) + suc / internal.Ksuc_icl * (gly / internal.Kgly_icl)));
    dstatedt[9] = 0 + 1 * internal.cell * ((internal.Vf_fum * (fa / internal.Kfa_fum) - internal.Vr_fum * (mal / internal.Kmal_fum)) / (1 + fa / internal.Kfa_fum + mal / internal.Kmal_fum)) - 1 * internal.cell * ((internal.Vf_mdh * (mal / internal.Kmal_mdh) - internal.Vr_mdh * (oaa / internal.Koaa_mdh)) / (1 + mal / internal.Kmal_mdh + oaa / internal.Koaa_mdh)) + 1 * internal.cell * ((internal.Vf_ms * (gly / internal.Kgly_ms) * (aca / internal.Kaca_ms) - internal.Vr_ms * (mal / internal.Kmal_ms) * (coa / internal.Kcoa_ms)) / ((1 + gly / internal.Kgly_ms + mal / internal.Kmal_ms) * (1 + aca / internal.Kaca_ms + coa / internal.Kcoa_ms)));
    dstatedt[6] = 0 + 1 * internal.cell * ((internal.Vf_kdh * (akg / internal.Kakg_kdh) - internal.Vr_kdh * (sca / internal.Ksca_kdh)) / (1 + akg / internal.Kakg_kdh + sca / internal.Ksca_kdh)) - 1 * internal.cell * ((internal.Vf_scas * (sca / internal.Ksca_scas) - internal.Vr_scas * (suc / internal.Ksuc_scas)) / (1 + sca / internal.Ksca_scas + suc / internal.Ksuc_scas));
    dstatedt[7] = 0 + 1 * internal.cell * ((internal.Vf_scas * (sca / internal.Ksca_scas) - internal.Vr_scas * (suc / internal.Ksuc_scas)) / (1 + sca / internal.Ksca_scas + suc / internal.Ksuc_scas)) - 1 * internal.cell * ((internal.Vf_sdh * (suc / internal.Ksuc_sdh) - internal.Vr_sdh * (fa / internal.Kfa_sdh)) / (1 + suc / internal.Ksuc_sdh + fa / internal.Kfa_sdh)) + 1 * internal.cell * ((internal.Vf_icl * (icit / internal.Kicit_icl) - internal.Vr_icl * (suc / internal.Ksuc_icl) * (gly / internal.Kgly_icl)) / (1 + icit / internal.Kicit_icl + suc / internal.Ksuc_icl + gly / internal.Kgly_icl + icit / internal.Kicit_icl * (suc / internal.Ksuc_icl) + suc / internal.Ksuc_icl * (gly / internal.Kgly_icl)));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "aca", "oaa", "coa", "cit", "icit", "akg", "sca", "suc", "fa", "mal", "gly", "biosyn"];
    this.metadata.internalOrder = {aca_init: null, akg_init: null, biosyn_init: null, cell: null, cit_init: null, coa_init: null, fa_init: null, gly_init: null, icit_init: null, initial_aca: null, initial_akg: null, initial_biosyn: null, initial_cit: null, initial_coa: null, initial_fa: null, initial_gly: null, initial_icit: null, initial_mal: null, initial_oaa: null, initial_sca: null, initial_suc: null, Kaca_cs: null, Kaca_ms: null, Kakg_icd: null, Kakg_kdh: null, Kcit_acn: null, Kcit_cs: null, Kcoa_cs: null, Kcoa_ms: null, Kfa_fum: null, Kfa_sdh: null, Kgly_icl: null, Kgly_ms: null, Kicit_acn: null, Kicit_icd: null, Kicit_icl: null, Kmal_fum: null, Kmal_mdh: null, Kmal_ms: null, Koaa_cs: null, Koaa_mdh: null, Ksca_kdh: null, Ksca_scas: null, Ksuc_icl: null, Ksuc_scas: null, Ksuc_sdh: null, mal_init: null, oaa_init: null, sca_init: null, suc_init: null, Vf_acn: null, Vf_cs: null, Vf_fum: null, Vf_icd: null, Vf_icl: null, Vf_kdh: null, Vf_mdh: null, Vf_ms: null, Vf_scas: null, Vf_sdh: null, Vr_acn: null, Vr_cs: null, Vr_fum: null, Vr_icd: null, Vr_icl: null, Vr_kdh: null, Vr_mdh: null, Vr_ms: null, Vr_scas: null, Vr_sdh: null};
    this.metadata.variableOrder = {aca: null, oaa: null, coa: null, cit: null, icit: null, akg: null, sca: null, suc: null, fa: null, mal: null, gly: null, biosyn: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
