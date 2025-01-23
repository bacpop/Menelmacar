export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cytoplasm = 10;
    internal.phagosome = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(20).fill(0);
    state[0] = internal.initial_H2O2_p;
    state[1] = internal.initial_per3_p;
    state[2] = internal.initial_coI_p;
    state[3] = internal.initial_MLTH_p;
    state[4] = internal.initial_coII_p;
    state[5] = internal.initial_MLT_p;
    state[6] = internal.initial_O2minus_p;
    state[7] = internal.initial_H_p;
    state[8] = internal.initial_O2_p;
    state[9] = internal.initial_NADPH_c;
    state[10] = internal.initial_O2_c;
    state[11] = internal.initial_NADPplus_c;
    state[12] = internal.initial_H2O2_c;
    state[13] = internal.initial_NADP_c;
    state[14] = internal.initial_O2minus_c;
    state[15] = internal.initial_H_c;
    state[16] = internal.initial_MLT_c;
    state[17] = internal.initial_MLTH_c;
    state[18] = internal.initial_coIII_p;
    state[19] = internal.initial_NADP2_c;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["coI_p_init", "coII_p_init", "coIII_p_init", "H_c_init", "H_p_init", "H2O2_c_init", "H2O2_p_init", "k1", "k10", "k11", "k12", "k13", "k14", "k15", "k16", "k17", "k18", "k2", "k3", "k4", "k5", "k6", "k7", "k8", "k9", "kminus1", "kminus13", "Knadph", "Ko", "L", "MLT_c_init", "MLT_p_init", "MLTH_c_init", "MLTH_p_init", "NADP_c_init", "NADP2_c_init", "NADPH_c_init", "NADPplus_c_init", "O2_c_init", "O2_p_init", "O2minus_c_init", "O2minus_p_init", "per3_p_init", "V"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "coI_p_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "coII_p_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "coIII_p_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H_c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H_p_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H2O2_c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H2O2_p_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11", internal, 60, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k12", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k13", internal, 12.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k14", internal, 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k15", internal, 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k16", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k17", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k18", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.0040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 9.9999999999999995e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kminus1", internal, 58, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kminus13", internal, 0.044999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Knadph", internal, 60, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ko", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L", internal, 550, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MLT_c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MLT_p_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MLTH_c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MLTH_p_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NADP_c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NADP2_c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NADPH_c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NADPplus_c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "O2_c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "O2_p_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "O2minus_c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "O2minus_p_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "per3_p_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V", internal, 288, -Infinity, Infinity, false);
    internal.initial_coI_p = internal.coI_p_init;
    internal.initial_coII_p = internal.coII_p_init;
    internal.initial_coIII_p = internal.coIII_p_init;
    internal.initial_H_c = internal.H_c_init;
    internal.initial_H_p = internal.H_p_init;
    internal.initial_H2O2_c = internal.H2O2_c_init;
    internal.initial_H2O2_p = internal.H2O2_p_init;
    internal.initial_MLT_c = internal.MLT_c_init;
    internal.initial_MLT_p = internal.MLT_p_init;
    internal.initial_MLTH_c = internal.MLTH_c_init;
    internal.initial_MLTH_p = internal.MLTH_p_init;
    internal.initial_NADP_c = internal.NADP_c_init;
    internal.initial_NADP2_c = internal.NADP2_c_init;
    internal.initial_NADPH_c = internal.NADPH_c_init;
    internal.initial_NADPplus_c = internal.NADPplus_c_init;
    internal.initial_O2_c = internal.O2_c_init;
    internal.initial_O2_p = internal.O2_p_init;
    internal.initial_O2minus_c = internal.O2minus_c_init;
    internal.initial_O2minus_p = internal.O2minus_p_init;
    internal.initial_per3_p = internal.per3_p_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const H2O2_p = state[0];
    const per3_p = state[1];
    const coI_p = state[2];
    const MLTH_p = state[3];
    const coII_p = state[4];
    const MLT_p = state[5];
    const O2minus_p = state[6];
    const O2_p = state[8];
    const NADPH_c = state[9];
    const O2_c = state[10];
    const H2O2_c = state[12];
    const NADP_c = state[13];
    const O2minus_c = state[14];
    const MLT_c = state[16];
    const MLTH_c = state[17];
    const coIII_p = state[18];
    dstatedt[2] = 0 + 1 * internal.phagosome * (internal.k1 * H2O2_p * per3_p - internal.kminus1 * coI_p) - 1 * internal.phagosome * internal.k2 * coI_p * MLTH_p + 1 * internal.phagosome * internal.k6 * coIII_p * O2minus_p;
    dstatedt[4] = 0 + 1 * internal.phagosome * internal.k2 * coI_p * MLTH_p - 1 * internal.phagosome * internal.k3 * coII_p * MLTH_p;
    dstatedt[18] = 0 + 1 * internal.phagosome * internal.k4 * per3_p * O2minus_p - 1 * internal.phagosome * internal.k6 * coIII_p * O2minus_p;
    dstatedt[15] = 0 - 2 * internal.cytoplasm * internal.k9 * Math.pow((O2minus_c), (2));
    dstatedt[7] = 0 - 2 * internal.phagosome * internal.k5 * Math.pow((O2minus_p), (2));
    dstatedt[12] = 0 + 1 * internal.cytoplasm * internal.k7 * NADPH_c * O2_c + 1 * internal.cytoplasm * internal.k9 * Math.pow((O2minus_c), (2)) + 1 * internal.phagosome * (internal.k15 * H2O2_p - internal.k15 * H2O2_c);
    dstatedt[0] = 0 - 1 * internal.phagosome * (internal.k1 * H2O2_p * per3_p - internal.kminus1 * coI_p) + 1 * internal.phagosome * internal.k5 * Math.pow((O2minus_p), (2)) - 1 * internal.phagosome * (internal.k15 * H2O2_p - internal.k15 * H2O2_c);
    dstatedt[16] = 0 - 1 * internal.cytoplasm * internal.k10 * MLT_c * NADPH_c + 1 * internal.phagosome * (internal.k17 * MLT_p - internal.k17 * MLT_c);
    dstatedt[5] = 0 + 1 * internal.phagosome * internal.k2 * coI_p * MLTH_p + 1 * internal.phagosome * internal.k3 * coII_p * MLTH_p - 1 * internal.phagosome * (internal.k17 * MLT_p - internal.k17 * MLT_c);
    dstatedt[17] = 0 + 1 * internal.cytoplasm * internal.k10 * MLT_c * NADPH_c + 1 * internal.phagosome * (internal.k16 * MLTH_p - internal.k16 * MLTH_c);
    dstatedt[3] = 0 - 1 * internal.phagosome * internal.k2 * coI_p * MLTH_p - 1 * internal.phagosome * internal.k3 * coII_p * MLTH_p - 1 * internal.phagosome * (internal.k16 * MLTH_p - internal.k16 * MLTH_c);
    dstatedt[13] = 0 - 1 * internal.cytoplasm * internal.k8 * NADP_c * O2_c + 1 * internal.cytoplasm * internal.k10 * MLT_c * NADPH_c - 2 * internal.cytoplasm * internal.k11 * Math.pow((NADP_c), (2));
    dstatedt[19] = 0 + 1 * internal.cytoplasm * internal.k11 * Math.pow((NADP_c), (2));
    dstatedt[9] = 0 - 1 * internal.cytoplasm * internal.k7 * NADPH_c * O2_c - 1 * internal.cytoplasm * internal.k10 * MLT_c * NADPH_c + 1 * internal.cytoplasm * internal.k12 - 1 * internal.phagosome * (internal.V * NADPH_c / internal.Knadph * (1 + NADPH_c / internal.Knadph) * O2_p / ((internal.L + Math.pow((1 + NADPH_c / internal.Knadph), (2))) * (internal.Ko + O2_p)));
    dstatedt[11] = 0 + 1 * internal.cytoplasm * internal.k7 * NADPH_c * O2_c + 1 * internal.cytoplasm * internal.k8 * NADP_c * O2_c + 1 * internal.phagosome * (internal.V * NADPH_c / internal.Knadph * (1 + NADPH_c / internal.Knadph) * O2_p / ((internal.L + Math.pow((1 + NADPH_c / internal.Knadph), (2))) * (internal.Ko + O2_p)));
    dstatedt[10] = 0 - 1 * internal.cytoplasm * internal.k7 * NADPH_c * O2_c - 1 * internal.cytoplasm * internal.k8 * NADP_c * O2_c + 1 * internal.cytoplasm * internal.k9 * Math.pow((O2minus_c), (2)) + 1 * internal.cytoplasm * internal.k13 - 1 * internal.cytoplasm * internal.kminus13 * O2_c + 1 * internal.phagosome * (internal.k14 * O2_p - internal.k14 * O2_c);
    dstatedt[8] = 0 + 1 * internal.phagosome * internal.k5 * Math.pow((O2minus_p), (2)) + 1 * internal.phagosome * internal.k6 * coIII_p * O2minus_p - 1 * internal.phagosome * (internal.k14 * O2_p - internal.k14 * O2_c) - 2 * internal.phagosome * (internal.V * NADPH_c / internal.Knadph * (1 + NADPH_c / internal.Knadph) * O2_p / ((internal.L + Math.pow((1 + NADPH_c / internal.Knadph), (2))) * (internal.Ko + O2_p)));
    dstatedt[14] = 0 + 1 * internal.cytoplasm * internal.k8 * NADP_c * O2_c - 2 * internal.cytoplasm * internal.k9 * Math.pow((O2minus_c), (2)) + 1 * internal.phagosome * (internal.k18 * O2minus_p - internal.k18 * O2minus_c);
    dstatedt[6] = 0 - 1 * internal.phagosome * internal.k4 * per3_p * O2minus_p - 2 * internal.phagosome * internal.k5 * Math.pow((O2minus_p), (2)) - 1 * internal.phagosome * internal.k6 * coIII_p * O2minus_p - 1 * internal.phagosome * (internal.k18 * O2minus_p - internal.k18 * O2minus_c) + 2 * internal.phagosome * (internal.V * NADPH_c / internal.Knadph * (1 + NADPH_c / internal.Knadph) * O2_p / ((internal.L + Math.pow((1 + NADPH_c / internal.Knadph), (2))) * (internal.Ko + O2_p)));
    dstatedt[1] = 0 - 1 * internal.phagosome * (internal.k1 * H2O2_p * per3_p - internal.kminus1 * coI_p) + 1 * internal.phagosome * internal.k3 * coII_p * MLTH_p - 1 * internal.phagosome * internal.k4 * per3_p * O2minus_p;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "H2O2_p", "per3_p", "coI_p", "MLTH_p", "coII_p", "MLT_p", "O2minus_p", "H_p", "O2_p", "NADPH_c", "O2_c", "NADPplus_c", "H2O2_c", "NADP_c", "O2minus_c", "H_c", "MLT_c", "MLTH_c", "coIII_p", "NADP2_c"];
    this.metadata.internalOrder = {coI_p_init: null, coII_p_init: null, coIII_p_init: null, cytoplasm: null, H_c_init: null, H_p_init: null, H2O2_c_init: null, H2O2_p_init: null, initial_coI_p: null, initial_coII_p: null, initial_coIII_p: null, initial_H_c: null, initial_H_p: null, initial_H2O2_c: null, initial_H2O2_p: null, initial_MLT_c: null, initial_MLT_p: null, initial_MLTH_c: null, initial_MLTH_p: null, initial_NADP_c: null, initial_NADP2_c: null, initial_NADPH_c: null, initial_NADPplus_c: null, initial_O2_c: null, initial_O2_p: null, initial_O2minus_c: null, initial_O2minus_p: null, initial_per3_p: null, k1: null, k10: null, k11: null, k12: null, k13: null, k14: null, k15: null, k16: null, k17: null, k18: null, k2: null, k3: null, k4: null, k5: null, k6: null, k7: null, k8: null, k9: null, kminus1: null, kminus13: null, Knadph: null, Ko: null, L: null, MLT_c_init: null, MLT_p_init: null, MLTH_c_init: null, MLTH_p_init: null, NADP_c_init: null, NADP2_c_init: null, NADPH_c_init: null, NADPplus_c_init: null, O2_c_init: null, O2_p_init: null, O2minus_c_init: null, O2minus_p_init: null, per3_p_init: null, phagosome: null, V: null};
    this.metadata.variableOrder = {H2O2_p: null, per3_p: null, coI_p: null, MLTH_p: null, coII_p: null, MLT_p: null, O2minus_p: null, H_p: null, O2_p: null, NADPH_c: null, O2_c: null, NADPplus_c: null, H2O2_c: null, NADP_c: null, O2minus_c: null, H_c: null, MLT_c: null, MLTH_c: null, coIII_p: null, NADP2_c: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
