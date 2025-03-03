export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.aca = 0.5;
    internal.biosyn = 0.10000000000000001;
    internal.cell = 1;
    internal.coa = 0.0001;
    internal.oaa = 0.00029999999999999997;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(9).fill(0);
    state[0] = internal.initial_cit;
    state[1] = internal.initial_icit;
    state[2] = internal.initial_akg;
    state[3] = internal.initial_ssa;
    state[4] = internal.initial_suc;
    state[5] = internal.initial_sca;
    state[6] = internal.initial_fa;
    state[7] = internal.initial_mal;
    state[8] = internal.initial_gly;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["akg_init", "cit_init", "fa_init", "gly_init", "icit_init", "Kaca_cs", "Kaca_ms", "Kakg_icd1", "Kakg_icd2", "Kakg_kgd", "Kcit_acn", "Kcit_cs", "Kcoa_cs", "Kcoa_ms", "Kfa_fum", "Kfa_sdh", "Kgly_icl1", "Kgly_icl2", "Kgly_ms", "Kicit_acn", "Kicit_icd1", "Kicit_icd2", "Kicit_icl1", "Kicit_icl2", "Kmal_fum", "Kmal_mdh", "Kmal_ms", "Koaa_cs", "Koaa_mdh", "Ksca_scas", "Kssa_kgd", "Kssa_ssadh", "Ksuc_icl1", "Ksuc_icl2", "Ksuc_scas", "Ksuc_sdh", "Ksuc_ssadh", "mal_init", "sca_init", "ssa_init", "suc_init", "Vf_acn", "Vf_cs", "Vf_fum", "Vf_icd1", "Vf_icd2", "Vf_icl1", "Vf_icl2", "Vf_kgd", "Vf_mdh", "Vf_ms", "Vf_scas", "Vf_sdh", "Vf_ssadh", "Vr_acn", "Vr_cs", "Vr_fum", "Vr_icd1", "Vr_icd2", "Vr_icl1", "Vr_icl2", "Vr_kgd", "Vr_mdh", "Vr_ms", "Vr_scas", "Vr_sdh", "Vr_ssadh"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "akg_init", internal, 0.95999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cit_init", internal, 3.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "fa_init", internal, 0.085279999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gly_init", internal, 0.114, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "icit_init", internal, 0.059999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kaca_cs", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kaca_ms", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kakg_icd1", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kakg_icd2", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kakg_kgd", internal, 0.47999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kcit_acn", internal, 1.7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kcit_cs", internal, 0.12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kcoa_cs", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kcoa_ms", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kfa_fum", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kfa_sdh", internal, 0.14999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kgly_icl1", internal, 0.13, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kgly_icl2", internal, 1.3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kgly_ms", internal, 0.057000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kicit_acn", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kicit_icd1", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kicit_icd2", internal, 0.059999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kicit_icl1", internal, 0.14499999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kicit_icl2", internal, 1.3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kmal_fum", internal, 2.3799999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kmal_mdh", internal, 0.83299999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kmal_ms", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Koaa_cs", internal, 0.012, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Koaa_mdh", internal, 0.044299999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ksca_scas", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kssa_kgd", internal, 4.7999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kssa_ssadh", internal, 0.014999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ksuc_icl1", internal, 0.58999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ksuc_icl2", internal, 5.9000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ksuc_scas", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ksuc_sdh", internal, 0.12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ksuc_ssadh", internal, 0.14999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mal_init", internal, 0.40799999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sca_init", internal, 0.040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ssa_init", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "suc_init", internal, 2.464, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vf_acn", internal, 31.199999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vf_cs", internal, 64.799999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vf_fum", internal, 87.700000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vf_icd1", internal, 10.199999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vf_icd2", internal, 9.9649999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vf_icl1", internal, 1.1719999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vf_icl2", internal, 0.39100000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vf_kgd", internal, 48.299999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vf_mdh", internal, 184, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vf_ms", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vf_scas", internal, 1.2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vf_sdh", internal, 1.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vf_ssadh", internal, 6.5099999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vr_acn", internal, 0.312, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vr_cs", internal, 0.64800000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vr_fum", internal, 87.700000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vr_icd1", internal, 0.10199999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vr_icd2", internal, 0.099650000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vr_icl1", internal, 0.01172, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vr_icl2", internal, 0.0039100000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vr_kgd", internal, 0.48299999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vr_mdh", internal, 184, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vr_ms", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vr_scas", internal, 0.012, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vr_sdh", internal, 1.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vr_ssadh", internal, 0.065100000000000005, -Infinity, Infinity, false);
    internal.initial_akg = internal.akg_init;
    internal.initial_cit = internal.cit_init;
    internal.initial_fa = internal.fa_init;
    internal.initial_gly = internal.gly_init;
    internal.initial_icit = internal.icit_init;
    internal.initial_mal = internal.mal_init;
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
    const cit = state[0];
    const icit = state[1];
    const akg = state[2];
    const ssa = state[3];
    const suc = state[4];
    const sca = state[5];
    const fa = state[6];
    const mal = state[7];
    const gly = state[8];
    dstatedt[2] = 0 + 1 * internal.cell * ((internal.Vf_icd1 * (icit / internal.Kicit_icd1) - internal.Vr_icd1 * (akg / internal.Kakg_icd1)) / (1 + icit / internal.Kicit_icd1 + akg / internal.Kakg_icd1)) + 1 * internal.cell * ((internal.Vf_icd2 * (icit / internal.Kicit_icd2) - internal.Vr_icd2 * (akg / internal.Kakg_icd2)) / (1 + icit / internal.Kicit_icd2 + akg / internal.Kakg_icd2)) - 1 * internal.cell * ((internal.Vf_kgd * (akg / internal.Kakg_kgd) - internal.Vr_kgd * (ssa / internal.Kssa_kgd)) / (1 + akg / internal.Kakg_kgd + ssa / internal.Kssa_kgd)) - 1 * internal.cell * 0.034099999999999998 * ((internal.Vf_icd1 * (icit / internal.Kicit_icd1) - internal.Vr_icd1 * (akg / internal.Kakg_icd1)) / (1 + icit / internal.Kicit_icd1 + akg / internal.Kakg_icd1) + (internal.Vf_icd2 * (icit / internal.Kicit_icd2) - internal.Vr_icd2 * (akg / internal.Kakg_icd2)) / (1 + icit / internal.Kicit_icd2 + akg / internal.Kakg_icd2));
    dstatedt[0] = 0 + 1 * internal.cell * ((internal.Vf_cs * (internal.aca / internal.Kaca_cs) * (internal.oaa / internal.Koaa_cs) - internal.Vr_cs * (internal.coa / internal.Kcoa_cs) * (cit / internal.Kcit_cs)) / ((1 + internal.aca / internal.Kaca_cs + internal.coa / internal.Kcoa_cs) * (1 + internal.oaa / internal.Koaa_cs + cit / internal.Kcit_cs))) - 1 * internal.cell * ((internal.Vf_acn * (cit / internal.Kcit_acn) - internal.Vr_acn * (icit / internal.Kicit_acn)) / (1 + cit / internal.Kcit_acn + icit / internal.Kicit_acn));
    dstatedt[6] = 0 + 1 * internal.cell * ((internal.Vf_sdh * (suc / internal.Ksuc_sdh) - internal.Vr_sdh * (fa / internal.Kfa_sdh)) / (1 + suc / internal.Ksuc_sdh + fa / internal.Kfa_sdh)) - 1 * internal.cell * ((internal.Vf_fum * (fa / internal.Kfa_fum) - internal.Vr_fum * (mal / internal.Kmal_fum)) / (1 + fa / internal.Kfa_fum + mal / internal.Kmal_fum));
    dstatedt[8] = 0 + 1 * internal.cell * ((internal.Vf_icl1 * (icit / internal.Kicit_icl1) - internal.Vr_icl1 * (suc / internal.Ksuc_icl1) * (gly / internal.Kgly_icl1)) / (1 + icit / internal.Kicit_icl1 + suc / internal.Ksuc_icl1 + gly / internal.Kgly_icl1 + icit / internal.Kicit_icl1 * (suc / internal.Ksuc_icl1) + suc / internal.Ksuc_icl1 * (gly / internal.Kgly_icl1))) + 1 * internal.cell * ((internal.Vf_icl2 * (icit / internal.Kicit_icl2) - internal.Vr_icl2 * (suc / internal.Ksuc_icl2) * (gly / internal.Kgly_icl2)) / (1 + icit / internal.Kicit_icl2 + suc / internal.Ksuc_icl2 + gly / internal.Kgly_icl2 + icit / internal.Kicit_icl2 * (suc / internal.Ksuc_icl2) + suc / internal.Ksuc_icl2 * (gly / internal.Kgly_icl2))) - 1 * internal.cell * ((internal.Vf_ms * (gly / internal.Kgly_ms) * (internal.aca / internal.Kaca_ms) - internal.Vr_ms * (mal / internal.Kmal_ms) * (internal.coa / internal.Kcoa_ms)) / ((1 + gly / internal.Kgly_ms + mal / internal.Kmal_ms) * (1 + internal.aca / internal.Kaca_ms + internal.coa / internal.Kcoa_ms)));
    dstatedt[1] = 0 + 1 * internal.cell * ((internal.Vf_acn * (cit / internal.Kcit_acn) - internal.Vr_acn * (icit / internal.Kicit_acn)) / (1 + cit / internal.Kcit_acn + icit / internal.Kicit_acn)) - 1 * internal.cell * ((internal.Vf_icd1 * (icit / internal.Kicit_icd1) - internal.Vr_icd1 * (akg / internal.Kakg_icd1)) / (1 + icit / internal.Kicit_icd1 + akg / internal.Kakg_icd1)) - 1 * internal.cell * ((internal.Vf_icd2 * (icit / internal.Kicit_icd2) - internal.Vr_icd2 * (akg / internal.Kakg_icd2)) / (1 + icit / internal.Kicit_icd2 + akg / internal.Kakg_icd2)) - 1 * internal.cell * ((internal.Vf_icl1 * (icit / internal.Kicit_icl1) - internal.Vr_icl1 * (suc / internal.Ksuc_icl1) * (gly / internal.Kgly_icl1)) / (1 + icit / internal.Kicit_icl1 + suc / internal.Ksuc_icl1 + gly / internal.Kgly_icl1 + icit / internal.Kicit_icl1 * (suc / internal.Ksuc_icl1) + suc / internal.Ksuc_icl1 * (gly / internal.Kgly_icl1))) - 1 * internal.cell * ((internal.Vf_icl2 * (icit / internal.Kicit_icl2) - internal.Vr_icl2 * (suc / internal.Ksuc_icl2) * (gly / internal.Kgly_icl2)) / (1 + icit / internal.Kicit_icl2 + suc / internal.Ksuc_icl2 + gly / internal.Kgly_icl2 + icit / internal.Kicit_icl2 * (suc / internal.Ksuc_icl2) + suc / internal.Ksuc_icl2 * (gly / internal.Kgly_icl2)));
    dstatedt[7] = 0 + 1 * internal.cell * ((internal.Vf_fum * (fa / internal.Kfa_fum) - internal.Vr_fum * (mal / internal.Kmal_fum)) / (1 + fa / internal.Kfa_fum + mal / internal.Kmal_fum)) - 1 * internal.cell * ((internal.Vf_mdh * (mal / internal.Kmal_mdh) - internal.Vr_mdh * (internal.oaa / internal.Koaa_mdh)) / (1 + mal / internal.Kmal_mdh + internal.oaa / internal.Koaa_mdh)) + 1 * internal.cell * ((internal.Vf_ms * (gly / internal.Kgly_ms) * (internal.aca / internal.Kaca_ms) - internal.Vr_ms * (mal / internal.Kmal_ms) * (internal.coa / internal.Kcoa_ms)) / ((1 + gly / internal.Kgly_ms + mal / internal.Kmal_ms) * (1 + internal.aca / internal.Kaca_ms + internal.coa / internal.Kcoa_ms)));
    dstatedt[5] = 0 - 1 * internal.cell * ((internal.Vf_scas * (sca / internal.Ksca_scas) - internal.Vr_scas * (suc / internal.Ksuc_scas)) / (1 + sca / internal.Ksca_scas + suc / internal.Ksuc_scas));
    dstatedt[3] = 0 + 1 * internal.cell * ((internal.Vf_kgd * (akg / internal.Kakg_kgd) - internal.Vr_kgd * (ssa / internal.Kssa_kgd)) / (1 + akg / internal.Kakg_kgd + ssa / internal.Kssa_kgd)) - 1 * internal.cell * ((internal.Vf_ssadh * (ssa / internal.Kssa_ssadh) - internal.Vr_ssadh * (suc / internal.Ksuc_ssadh)) / (1 + ssa / internal.Kssa_ssadh + suc / internal.Ksuc_ssadh));
    dstatedt[4] = 0 + 1 * internal.cell * ((internal.Vf_ssadh * (ssa / internal.Kssa_ssadh) - internal.Vr_ssadh * (suc / internal.Ksuc_ssadh)) / (1 + ssa / internal.Kssa_ssadh + suc / internal.Ksuc_ssadh)) + 1 * internal.cell * ((internal.Vf_scas * (sca / internal.Ksca_scas) - internal.Vr_scas * (suc / internal.Ksuc_scas)) / (1 + sca / internal.Ksca_scas + suc / internal.Ksuc_scas)) - 1 * internal.cell * ((internal.Vf_sdh * (suc / internal.Ksuc_sdh) - internal.Vr_sdh * (fa / internal.Kfa_sdh)) / (1 + suc / internal.Ksuc_sdh + fa / internal.Kfa_sdh)) + 1 * internal.cell * ((internal.Vf_icl1 * (icit / internal.Kicit_icl1) - internal.Vr_icl1 * (suc / internal.Ksuc_icl1) * (gly / internal.Kgly_icl1)) / (1 + icit / internal.Kicit_icl1 + suc / internal.Ksuc_icl1 + gly / internal.Kgly_icl1 + icit / internal.Kicit_icl1 * (suc / internal.Ksuc_icl1) + suc / internal.Ksuc_icl1 * (gly / internal.Kgly_icl1))) + 1 * internal.cell * ((internal.Vf_icl2 * (icit / internal.Kicit_icl2) - internal.Vr_icl2 * (suc / internal.Ksuc_icl2) * (gly / internal.Kgly_icl2)) / (1 + icit / internal.Kicit_icl2 + suc / internal.Ksuc_icl2 + gly / internal.Kgly_icl2 + icit / internal.Kicit_icl2 * (suc / internal.Ksuc_icl2) + suc / internal.Ksuc_icl2 * (gly / internal.Kgly_icl2)));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "cit", "icit", "akg", "ssa", "suc", "sca", "fa", "mal", "gly"];
    this.metadata.internalOrder = {aca: null, akg_init: null, biosyn: null, cell: null, cit_init: null, coa: null, fa_init: null, gly_init: null, icit_init: null, initial_akg: null, initial_cit: null, initial_fa: null, initial_gly: null, initial_icit: null, initial_mal: null, initial_sca: null, initial_ssa: null, initial_suc: null, Kaca_cs: null, Kaca_ms: null, Kakg_icd1: null, Kakg_icd2: null, Kakg_kgd: null, Kcit_acn: null, Kcit_cs: null, Kcoa_cs: null, Kcoa_ms: null, Kfa_fum: null, Kfa_sdh: null, Kgly_icl1: null, Kgly_icl2: null, Kgly_ms: null, Kicit_acn: null, Kicit_icd1: null, Kicit_icd2: null, Kicit_icl1: null, Kicit_icl2: null, Kmal_fum: null, Kmal_mdh: null, Kmal_ms: null, Koaa_cs: null, Koaa_mdh: null, Ksca_scas: null, Kssa_kgd: null, Kssa_ssadh: null, Ksuc_icl1: null, Ksuc_icl2: null, Ksuc_scas: null, Ksuc_sdh: null, Ksuc_ssadh: null, mal_init: null, oaa: null, sca_init: null, ssa_init: null, suc_init: null, Vf_acn: null, Vf_cs: null, Vf_fum: null, Vf_icd1: null, Vf_icd2: null, Vf_icl1: null, Vf_icl2: null, Vf_kgd: null, Vf_mdh: null, Vf_ms: null, Vf_scas: null, Vf_sdh: null, Vf_ssadh: null, Vr_acn: null, Vr_cs: null, Vr_fum: null, Vr_icd1: null, Vr_icd2: null, Vr_icl1: null, Vr_icl2: null, Vr_kgd: null, Vr_mdh: null, Vr_ms: null, Vr_scas: null, Vr_sdh: null, Vr_ssadh: null};
    this.metadata.variableOrder = {cit: null, icit: null, akg: null, ssa: null, suc: null, sca: null, fa: null, mal: null, gly: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
