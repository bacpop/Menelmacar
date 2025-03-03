export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.aca = 0.5;
    internal.biosyn = 0.10000000000000001;
    internal.cell = 1;
    internal.coa = 0.0001;
    internal.oaa = 0.0014;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(8).fill(0);
    state[0] = internal.initial_cit;
    state[1] = internal.initial_icit;
    state[2] = internal.initial_akg;
    state[3] = internal.initial_sca;
    state[4] = internal.initial_suc;
    state[5] = internal.initial_fa;
    state[6] = internal.initial_mal;
    state[7] = internal.initial_gly;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["akg_init", "cit_init", "fa_init", "gly_init", "icit_init", "Kaca_cs", "Kaca_ms", "Kakg_icd", "Kakg_kdh", "Kcit_acn", "Kcit_cs", "Kcoa_cs", "Kcoa_ms", "Kfa_fum", "Kfa_sdh", "Kgly_icl", "Kgly_ms", "Kicit_acn", "Kicit_icd", "Kicit_icl", "Kmal_fum", "Kmal_mdh", "Kmal_ms", "Koaa_cs", "Koaa_mdh", "Ksca_kdh", "Ksca_scas", "Ksuc_icl", "Ksuc_scas", "Ksuc_sdh", "mal_init", "sca_init", "suc_init", "Vf_acn", "Vf_cs", "Vf_fum", "Vf_icd", "Vf_icl", "Vf_kdh", "Vf_mdh", "Vf_ms", "Vf_scas", "Vf_sdh", "Vr_acn", "Vr_cs", "Vr_fum", "Vr_icd", "Vr_icl", "Vr_kdh", "Vr_mdh", "Vr_ms", "Vr_scas", "Vr_sdh"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "akg_init", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cit_init", internal, 9, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "fa_init", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gly_init", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "icit_init", internal, 0.14999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kaca_cs", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kaca_ms", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kakg_icd", internal, 0.13, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kakg_kdh", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kcit_acn", internal, 1.7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kcit_cs", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kcoa_cs", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kcoa_ms", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kfa_fum", internal, 0.14999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kfa_sdh", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kgly_icl", internal, 0.13, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kgly_ms", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kicit_acn", internal, 3.3300000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kicit_icd", internal, 0.0080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kicit_icl", internal, 0.60399999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kmal_fum", internal, 0.040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kmal_mdh", internal, 2.6000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kmal_ms", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Koaa_cs", internal, 0.070000000000000007, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Koaa_mdh", internal, 0.040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ksca_kdh", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ksca_scas", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ksuc_icl", internal, 0.58999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ksuc_scas", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ksuc_sdh", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mal_init", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sca_init", internal, 0.040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "suc_init", internal, 6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vf_acn", internal, 629.27999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vf_cs", internal, 446.88, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vf_fum", internal, 156.24000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vf_icd", internal, 6.625, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vf_icl", internal, 28.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vf_kdh", internal, 57.344000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vf_mdh", internal, 1390.9000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vf_ms", internal, 28.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vf_scas", internal, 8.9600000000000009, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vf_sdh", internal, 17.699999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vr_acn", internal, 6.2927999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vr_cs", internal, 4.4687999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vr_fum", internal, 144.66999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vr_icd", internal, 0.066250000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vr_icl", internal, 0.28499999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vr_kdh", internal, 0.57343999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vr_mdh", internal, 1276.0599999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vr_ms", internal, 0.28499999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vr_scas", internal, 0.089599999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vr_sdh", internal, 16.239999999999998, -Infinity, Infinity, false);
    internal.initial_akg = internal.akg_init;
    internal.initial_cit = internal.cit_init;
    internal.initial_fa = internal.fa_init;
    internal.initial_gly = internal.gly_init;
    internal.initial_icit = internal.icit_init;
    internal.initial_mal = internal.mal_init;
    internal.initial_sca = internal.sca_init;
    internal.initial_suc = internal.suc_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const cit = state[0];
    const icit = state[1];
    const akg = state[2];
    const sca = state[3];
    const suc = state[4];
    const fa = state[5];
    const mal = state[6];
    const gly = state[7];
    dstatedt[2] = 0 + 1 * internal.cell * ((internal.Vf_icd * (icit / internal.Kicit_icd) - internal.Vr_icd * (akg / internal.Kakg_icd)) / (1 + icit / internal.Kicit_icd + akg / internal.Kakg_icd)) - 1 * internal.cell * ((internal.Vf_kdh * (akg / internal.Kakg_kdh) - internal.Vr_kdh * (sca / internal.Ksca_kdh)) / (1 + akg / internal.Kakg_kdh + sca / internal.Ksca_kdh)) - 1 * internal.cell * 0.034099999999999998 * ((internal.Vf_icd * (icit / internal.Kicit_icd) - internal.Vr_icd * (akg / internal.Kakg_icd)) / (1 + icit / internal.Kicit_icd + akg / internal.Kakg_icd));
    dstatedt[0] = 0 + 1 * internal.cell * ((internal.Vf_cs * (internal.aca / internal.Kaca_cs) * (internal.oaa / internal.Koaa_cs) - internal.Vr_cs * (internal.coa / internal.Kcoa_cs) * (cit / internal.Kcit_cs)) / ((1 + internal.aca / internal.Kaca_cs + internal.coa / internal.Kcoa_cs) * (1 + internal.oaa / internal.Koaa_cs + cit / internal.Kcit_cs))) - 1 * internal.cell * ((internal.Vf_acn * (cit / internal.Kcit_acn) - internal.Vr_acn * (icit / internal.Kicit_acn)) / (1 + cit / internal.Kcit_acn + icit / internal.Kicit_acn));
    dstatedt[5] = 0 + 1 * internal.cell * ((internal.Vf_sdh * (suc / internal.Ksuc_sdh) - internal.Vr_sdh * (fa / internal.Kfa_sdh)) / (1 + suc / internal.Ksuc_sdh + fa / internal.Kfa_sdh)) - 1 * internal.cell * ((internal.Vf_fum * (fa / internal.Kfa_fum) - internal.Vr_fum * (mal / internal.Kmal_fum)) / (1 + fa / internal.Kfa_fum + mal / internal.Kmal_fum));
    dstatedt[7] = 0 + 1 * internal.cell * ((internal.Vf_icl * (icit / internal.Kicit_icl) - internal.Vr_icl * (suc / internal.Ksuc_icl) * (gly / internal.Kgly_icl)) / (1 + icit / internal.Kicit_icl + suc / internal.Ksuc_icl + gly / internal.Kgly_icl + icit / internal.Kicit_icl * (suc / internal.Ksuc_icl) + suc / internal.Ksuc_icl * (gly / internal.Kgly_icl))) - 1 * internal.cell * ((internal.Vf_ms * (gly / internal.Kgly_ms) * (internal.aca / internal.Kaca_ms) - internal.Vr_ms * (mal / internal.Kmal_ms) * (internal.coa / internal.Kcoa_ms)) / ((1 + gly / internal.Kgly_ms + mal / internal.Kmal_ms) * (1 + internal.aca / internal.Kaca_ms + internal.coa / internal.Kcoa_ms)));
    dstatedt[1] = 0 + 1 * internal.cell * ((internal.Vf_acn * (cit / internal.Kcit_acn) - internal.Vr_acn * (icit / internal.Kicit_acn)) / (1 + cit / internal.Kcit_acn + icit / internal.Kicit_acn)) - 1 * internal.cell * ((internal.Vf_icd * (icit / internal.Kicit_icd) - internal.Vr_icd * (akg / internal.Kakg_icd)) / (1 + icit / internal.Kicit_icd + akg / internal.Kakg_icd)) - 1 * internal.cell * ((internal.Vf_icl * (icit / internal.Kicit_icl) - internal.Vr_icl * (suc / internal.Ksuc_icl) * (gly / internal.Kgly_icl)) / (1 + icit / internal.Kicit_icl + suc / internal.Ksuc_icl + gly / internal.Kgly_icl + icit / internal.Kicit_icl * (suc / internal.Ksuc_icl) + suc / internal.Ksuc_icl * (gly / internal.Kgly_icl)));
    dstatedt[6] = 0 + 1 * internal.cell * ((internal.Vf_fum * (fa / internal.Kfa_fum) - internal.Vr_fum * (mal / internal.Kmal_fum)) / (1 + fa / internal.Kfa_fum + mal / internal.Kmal_fum)) - 1 * internal.cell * ((internal.Vf_mdh * (mal / internal.Kmal_mdh) - internal.Vr_mdh * (internal.oaa / internal.Koaa_mdh)) / (1 + mal / internal.Kmal_mdh + internal.oaa / internal.Koaa_mdh)) + 1 * internal.cell * ((internal.Vf_ms * (gly / internal.Kgly_ms) * (internal.aca / internal.Kaca_ms) - internal.Vr_ms * (mal / internal.Kmal_ms) * (internal.coa / internal.Kcoa_ms)) / ((1 + gly / internal.Kgly_ms + mal / internal.Kmal_ms) * (1 + internal.aca / internal.Kaca_ms + internal.coa / internal.Kcoa_ms)));
    dstatedt[3] = 0 + 1 * internal.cell * ((internal.Vf_kdh * (akg / internal.Kakg_kdh) - internal.Vr_kdh * (sca / internal.Ksca_kdh)) / (1 + akg / internal.Kakg_kdh + sca / internal.Ksca_kdh)) - 1 * internal.cell * ((internal.Vf_scas * (sca / internal.Ksca_scas) - internal.Vr_scas * (suc / internal.Ksuc_scas)) / (1 + sca / internal.Ksca_scas + suc / internal.Ksuc_scas));
    dstatedt[4] = 0 + 1 * internal.cell * ((internal.Vf_scas * (sca / internal.Ksca_scas) - internal.Vr_scas * (suc / internal.Ksuc_scas)) / (1 + sca / internal.Ksca_scas + suc / internal.Ksuc_scas)) - 1 * internal.cell * ((internal.Vf_sdh * (suc / internal.Ksuc_sdh) - internal.Vr_sdh * (fa / internal.Kfa_sdh)) / (1 + suc / internal.Ksuc_sdh + fa / internal.Kfa_sdh)) + 1 * internal.cell * ((internal.Vf_icl * (icit / internal.Kicit_icl) - internal.Vr_icl * (suc / internal.Ksuc_icl) * (gly / internal.Kgly_icl)) / (1 + icit / internal.Kicit_icl + suc / internal.Ksuc_icl + gly / internal.Kgly_icl + icit / internal.Kicit_icl * (suc / internal.Ksuc_icl) + suc / internal.Ksuc_icl * (gly / internal.Kgly_icl)));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "cit", "icit", "akg", "sca", "suc", "fa", "mal", "gly"];
    this.metadata.internalOrder = {aca: null, akg_init: null, biosyn: null, cell: null, cit_init: null, coa: null, fa_init: null, gly_init: null, icit_init: null, initial_akg: null, initial_cit: null, initial_fa: null, initial_gly: null, initial_icit: null, initial_mal: null, initial_sca: null, initial_suc: null, Kaca_cs: null, Kaca_ms: null, Kakg_icd: null, Kakg_kdh: null, Kcit_acn: null, Kcit_cs: null, Kcoa_cs: null, Kcoa_ms: null, Kfa_fum: null, Kfa_sdh: null, Kgly_icl: null, Kgly_ms: null, Kicit_acn: null, Kicit_icd: null, Kicit_icl: null, Kmal_fum: null, Kmal_mdh: null, Kmal_ms: null, Koaa_cs: null, Koaa_mdh: null, Ksca_kdh: null, Ksca_scas: null, Ksuc_icl: null, Ksuc_scas: null, Ksuc_sdh: null, mal_init: null, oaa: null, sca_init: null, suc_init: null, Vf_acn: null, Vf_cs: null, Vf_fum: null, Vf_icd: null, Vf_icl: null, Vf_kdh: null, Vf_mdh: null, Vf_ms: null, Vf_scas: null, Vf_sdh: null, Vr_acn: null, Vr_cs: null, Vr_fum: null, Vr_icd: null, Vr_icl: null, Vr_kdh: null, Vr_mdh: null, Vr_ms: null, Vr_scas: null, Vr_sdh: null};
    this.metadata.variableOrder = {cit: null, icit: null, akg: null, sca: null, suc: null, fa: null, mal: null, gly: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
