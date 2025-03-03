export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cytoplasm = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(11).fill(0);
    state[0] = internal.initial_Raf1;
    state[1] = internal.initial_RKIP;
    state[2] = internal.initial_Raf1_RKIP;
    state[3] = internal.initial_Raf1_RKIP_ERKPP;
    state[4] = internal.initial_ERK;
    state[5] = internal.initial_RKIPP;
    state[6] = internal.initial_MEKPP;
    state[7] = internal.initial_MEKPP_ERK;
    state[8] = internal.initial_ERKPP;
    state[9] = internal.initial_RP;
    state[10] = internal.initial_RKIPP_RP;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["ERK_init", "ERKPP_init", "k1", "k10", "k11", "k2", "k3", "k4", "k5", "k6", "k7", "k8", "k9", "MEKPP_ERK_init", "MEKPP_init", "Raf1_init", "Raf1_RKIP_ERKPP_init", "Raf1_RKIP_init", "RKIP_init", "RKIPP_init", "RKIPP_RP_init", "RP_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "ERK_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ERKPP_init", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.53000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 0.0012199999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11", internal, 0.87, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.0071999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.625, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0.0024499999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 0.0315, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 0.0074999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 0.070999999999999994, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 0.92000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MEKPP_ERK_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MEKPP_init", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Raf1_init", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Raf1_RKIP_ERKPP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Raf1_RKIP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RKIP_init", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RKIPP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RKIPP_RP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RP_init", internal, 3, -Infinity, Infinity, false);
    internal.initial_ERK = internal.ERK_init;
    internal.initial_ERKPP = internal.ERKPP_init;
    internal.initial_MEKPP = internal.MEKPP_init;
    internal.initial_MEKPP_ERK = internal.MEKPP_ERK_init;
    internal.initial_Raf1 = internal.Raf1_init;
    internal.initial_Raf1_RKIP = internal.Raf1_RKIP_init;
    internal.initial_Raf1_RKIP_ERKPP = internal.Raf1_RKIP_ERKPP_init;
    internal.initial_RKIP = internal.RKIP_init;
    internal.initial_RKIPP = internal.RKIPP_init;
    internal.initial_RKIPP_RP = internal.RKIPP_RP_init;
    internal.initial_RP = internal.RP_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Raf1 = state[0];
    const RKIP = state[1];
    const Raf1_RKIP = state[2];
    const Raf1_RKIP_ERKPP = state[3];
    const ERK = state[4];
    const RKIPP = state[5];
    const MEKPP = state[6];
    const MEKPP_ERK = state[7];
    const ERKPP = state[8];
    const RP = state[9];
    const RKIPP_RP = state[10];
    dstatedt[4] = 0 + 1 * internal.cytoplasm * internal.k5 * Raf1_RKIP_ERKPP - 1 * internal.cytoplasm * internal.k6 * ERK * MEKPP + 1 * internal.cytoplasm * internal.k7 * MEKPP_ERK;
    dstatedt[8] = 0 - 1 * internal.cytoplasm * internal.k3 * Raf1_RKIP * ERKPP + 1 * internal.cytoplasm * internal.k4 * Raf1_RKIP_ERKPP + 1 * internal.cytoplasm * internal.k8 * MEKPP_ERK;
    dstatedt[6] = 0 - 1 * internal.cytoplasm * internal.k6 * ERK * MEKPP + 1 * internal.cytoplasm * internal.k7 * MEKPP_ERK + 1 * internal.cytoplasm * internal.k8 * MEKPP_ERK;
    dstatedt[7] = 0 + 1 * internal.cytoplasm * internal.k6 * ERK * MEKPP - 1 * internal.cytoplasm * internal.k7 * MEKPP_ERK - 1 * internal.cytoplasm * internal.k8 * MEKPP_ERK;
    dstatedt[0] = 0 - 1 * internal.cytoplasm * internal.k1 * Raf1 * RKIP + 1 * internal.cytoplasm * internal.k2 * Raf1_RKIP + 1 * internal.cytoplasm * internal.k5 * Raf1_RKIP_ERKPP;
    dstatedt[2] = 0 + 1 * internal.cytoplasm * internal.k1 * Raf1 * RKIP - 1 * internal.cytoplasm * internal.k2 * Raf1_RKIP - 1 * internal.cytoplasm * internal.k3 * Raf1_RKIP * ERKPP + 1 * internal.cytoplasm * internal.k4 * Raf1_RKIP_ERKPP;
    dstatedt[3] = 0 + 1 * internal.cytoplasm * internal.k3 * Raf1_RKIP * ERKPP - 1 * internal.cytoplasm * internal.k4 * Raf1_RKIP_ERKPP - 1 * internal.cytoplasm * internal.k5 * Raf1_RKIP_ERKPP;
    dstatedt[1] = 0 - 1 * internal.cytoplasm * internal.k1 * Raf1 * RKIP + 1 * internal.cytoplasm * internal.k2 * Raf1_RKIP + 1 * internal.cytoplasm * internal.k11 * RKIPP_RP;
    dstatedt[5] = 0 + 1 * internal.cytoplasm * internal.k5 * Raf1_RKIP_ERKPP - 1 * internal.cytoplasm * internal.k9 * RKIPP * RP + 1 * internal.cytoplasm * internal.k10 * RKIPP_RP;
    dstatedt[10] = 0 + 1 * internal.cytoplasm * internal.k9 * RKIPP * RP - 1 * internal.cytoplasm * internal.k10 * RKIPP_RP - 1 * internal.cytoplasm * internal.k11 * RKIPP_RP;
    dstatedt[9] = 0 - 1 * internal.cytoplasm * internal.k9 * RKIPP * RP + 1 * internal.cytoplasm * internal.k10 * RKIPP_RP + 1 * internal.cytoplasm * internal.k11 * RKIPP_RP;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Raf1", "RKIP", "Raf1_RKIP", "Raf1_RKIP_ERKPP", "ERK", "RKIPP", "MEKPP", "MEKPP_ERK", "ERKPP", "RP", "RKIPP_RP"];
    this.metadata.internalOrder = {cytoplasm: null, ERK_init: null, ERKPP_init: null, initial_ERK: null, initial_ERKPP: null, initial_MEKPP: null, initial_MEKPP_ERK: null, initial_Raf1: null, initial_Raf1_RKIP: null, initial_Raf1_RKIP_ERKPP: null, initial_RKIP: null, initial_RKIPP: null, initial_RKIPP_RP: null, initial_RP: null, k1: null, k10: null, k11: null, k2: null, k3: null, k4: null, k5: null, k6: null, k7: null, k8: null, k9: null, MEKPP_ERK_init: null, MEKPP_init: null, Raf1_init: null, Raf1_RKIP_ERKPP_init: null, Raf1_RKIP_init: null, RKIP_init: null, RKIPP_init: null, RKIPP_RP_init: null, RP_init: null};
    this.metadata.variableOrder = {Raf1: null, RKIP: null, Raf1_RKIP: null, Raf1_RKIP_ERKPP: null, ERK: null, RKIPP: null, MEKPP: null, MEKPP_ERK: null, ERKPP: null, RP: null, RKIPP_RP: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
