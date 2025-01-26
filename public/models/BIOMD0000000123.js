export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cytosol = 2.6900000000000001e-13;
    internal.nucleus = 1.13e-13;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(14).fill(0);
    state[0] = internal.initial_Ca_Nuc;
    state[1] = internal.initial_Ca_Cyt;
    state[2] = internal.initial_NFAT_Nuc;
    state[3] = internal.initial_Act_C_Nuc;
    state[4] = internal.initial_NFAT_Pi_Nuc;
    state[5] = internal.initial_NFAT_Act_C_Nuc;
    state[6] = internal.initial_NFAT_Pi_Act_C_Nuc;
    state[7] = internal.initial_Inact_C_Nuc;
    state[8] = internal.initial_NFAT_Cyt;
    state[9] = internal.initial_Act_C_Cyt;
    state[10] = internal.initial_NFAT_Pi_Cyt;
    state[11] = internal.initial_NFAT_Act_C_Cyt;
    state[12] = internal.initial_NFAT_Pi_Act_C_Cyt;
    state[13] = internal.initial_Inact_C_Cyt;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Act_C_Cyt_init", "Act_C_Nuc_init", "Ca_Cyt_init", "Ca_Nuc_init", "Inact_C_Cyt_init", "Inact_C_Nuc_init", "k1", "k10", "k11", "k12", "k13", "k14", "k15", "k16", "k17", "k18", "k19", "k2", "k20", "k21", "k22", "k3", "k4", "k5", "k6", "k7", "k8", "k9", "NFAT_Act_C_Cyt_init", "NFAT_Act_C_Nuc_init", "NFAT_Cyt_init", "NFAT_Nuc_init", "NFAT_Pi_Act_C_Cyt_init", "NFAT_Pi_Act_C_Nuc_init", "NFAT_Pi_Cyt_init", "NFAT_Pi_Nuc_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Act_C_Cyt_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Act_C_Nuc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ca_Cyt_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ca_Nuc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Inact_C_Cyt_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Inact_C_Nuc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 2.5599999999999999e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11", internal, 6.6299999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k12", internal, 0.0016800000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k13", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k14", internal, 0.0025600000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k15", internal, 0.0016800000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k16", internal, 6.6299999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k17", internal, 0.0015, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k18", internal, 0.00096000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k19", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.0025600000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k20", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k21", internal, 0.20999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k22", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 0.0019, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 0.00092000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NFAT_Act_C_Cyt_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NFAT_Act_C_Nuc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NFAT_Cyt_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NFAT_Nuc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NFAT_Pi_Act_C_Cyt_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NFAT_Pi_Act_C_Nuc_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NFAT_Pi_Cyt_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NFAT_Pi_Nuc_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_Act_C_Cyt = internal.Act_C_Cyt_init;
    internal.initial_Act_C_Nuc = internal.Act_C_Nuc_init;
    internal.initial_Ca_Cyt = internal.Ca_Cyt_init;
    internal.initial_Ca_Nuc = internal.Ca_Nuc_init;
    internal.initial_Inact_C_Cyt = internal.Inact_C_Cyt_init;
    internal.initial_Inact_C_Nuc = internal.Inact_C_Nuc_init;
    internal.initial_NFAT_Act_C_Cyt = internal.NFAT_Act_C_Cyt_init;
    internal.initial_NFAT_Act_C_Nuc = internal.NFAT_Act_C_Nuc_init;
    internal.initial_NFAT_Cyt = internal.NFAT_Cyt_init;
    internal.initial_NFAT_Nuc = internal.NFAT_Nuc_init;
    internal.initial_NFAT_Pi_Act_C_Cyt = internal.NFAT_Pi_Act_C_Cyt_init;
    internal.initial_NFAT_Pi_Act_C_Nuc = internal.NFAT_Pi_Act_C_Nuc_init;
    internal.initial_NFAT_Pi_Cyt = internal.NFAT_Pi_Cyt_init;
    internal.initial_NFAT_Pi_Nuc = internal.NFAT_Pi_Nuc_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Ca_Nuc = state[0];
    const Ca_Cyt = state[1];
    const NFAT_Nuc = state[2];
    const Act_C_Nuc = state[3];
    const NFAT_Pi_Nuc = state[4];
    const NFAT_Act_C_Nuc = state[5];
    const NFAT_Pi_Act_C_Nuc = state[6];
    const Inact_C_Nuc = state[7];
    const NFAT_Cyt = state[8];
    const Act_C_Cyt = state[9];
    const NFAT_Pi_Cyt = state[10];
    const NFAT_Act_C_Cyt = state[11];
    const NFAT_Pi_Act_C_Cyt = state[12];
    const Inact_C_Cyt = state[13];
    dstatedt[9] = 0 + 1 * internal.nucleus * internal.k6 * Act_C_Nuc - internal.cytosol * internal.k5 * Act_C_Cyt + 1 * internal.cytosol * (internal.k12 * NFAT_Pi_Act_C_Cyt - internal.k11 * NFAT_Pi_Cyt * Act_C_Cyt) + 1 * internal.cytosol * (internal.k15 * NFAT_Act_C_Cyt - internal.k16 * NFAT_Cyt * Act_C_Cyt) + 1 * internal.cytosol * (internal.k1 * NFAT_Pi_Cyt - internal.k2 * NFAT_Cyt) - 1 * internal.cytosol * (internal.k1 * NFAT_Pi_Cyt - internal.k2 * NFAT_Cyt) + 1 * internal.cytosol * (internal.k19 * Inact_C_Cyt * Math.pow((Ca_Cyt), (3)) - internal.k20 * Act_C_Cyt);
    dstatedt[3] = 0 + 1 * internal.nucleus * (internal.k1 * NFAT_Pi_Nuc - internal.k2 * NFAT_Nuc) - 1 * internal.nucleus * (internal.k1 * NFAT_Pi_Nuc - internal.k2 * NFAT_Nuc) - 1 * internal.nucleus * (internal.k16 * NFAT_Nuc * Act_C_Nuc - internal.k15 * NFAT_Act_C_Nuc) - 1 * internal.nucleus * internal.k6 * Act_C_Nuc - internal.cytosol * internal.k5 * Act_C_Cyt + 1 * internal.nucleus * (internal.k12 * NFAT_Pi_Act_C_Nuc - internal.k11 * NFAT_Pi_Nuc * Act_C_Nuc) + 1 * internal.nucleus * (internal.k19 * Inact_C_Nuc * Math.pow((Ca_Nuc), (3)) - internal.k20 * Act_C_Nuc);
    dstatedt[1] = 0 - 3 * internal.cytosol * (internal.k19 * Inact_C_Cyt * Math.pow((Ca_Cyt), (3)) - internal.k20 * Act_C_Cyt) - 1 * internal.cytosol * internal.k21 * Ca_Cyt - internal.nucleus * internal.k22 * Ca_Nuc;
    dstatedt[0] = 0 - 3 * internal.nucleus * (internal.k19 * Inact_C_Nuc * Math.pow((Ca_Nuc), (3)) - internal.k20 * Act_C_Nuc) + 1 * internal.cytosol * internal.k21 * Ca_Cyt - internal.nucleus * internal.k22 * Ca_Nuc;
    dstatedt[13] = 0 - 1 * internal.cytosol * (internal.k19 * Inact_C_Cyt * Math.pow((Ca_Cyt), (3)) - internal.k20 * Act_C_Cyt) - 1 * internal.cytosol * internal.k5 * Inact_C_Cyt - internal.nucleus * internal.k6 * Inact_C_Nuc;
    dstatedt[7] = 0 - 1 * internal.nucleus * (internal.k19 * Inact_C_Nuc * Math.pow((Ca_Nuc), (3)) - internal.k20 * Act_C_Nuc) + 1 * internal.cytosol * internal.k5 * Inact_C_Cyt - internal.nucleus * internal.k6 * Inact_C_Nuc;
    dstatedt[11] = 0 + 1 * internal.nucleus * internal.k10 * NFAT_Act_C_Nuc - internal.cytosol * internal.k9 * NFAT_Act_C_Cyt - 1 * internal.cytosol * (internal.k14 * NFAT_Act_C_Cyt - internal.k13 * NFAT_Pi_Act_C_Cyt) - 1 * internal.cytosol * (internal.k15 * NFAT_Act_C_Cyt - internal.k16 * NFAT_Cyt * Act_C_Cyt);
    dstatedt[5] = 0 + 1 * internal.nucleus * (internal.k16 * NFAT_Nuc * Act_C_Nuc - internal.k15 * NFAT_Act_C_Nuc) - 1 * internal.nucleus * (internal.k14 * NFAT_Act_C_Nuc - internal.k13 * NFAT_Pi_Act_C_Nuc) - 1 * internal.nucleus * internal.k10 * NFAT_Act_C_Nuc - internal.cytosol * internal.k9 * NFAT_Act_C_Cyt;
    dstatedt[8] = 0 + 1 * internal.nucleus * internal.k18 * NFAT_Nuc - internal.cytosol * internal.k17 * NFAT_Cyt + 1 * internal.cytosol * (internal.k15 * NFAT_Act_C_Cyt - internal.k16 * NFAT_Cyt * Act_C_Cyt) + 1 * internal.cytosol * (internal.k1 * NFAT_Pi_Cyt - internal.k2 * NFAT_Cyt);
    dstatedt[2] = 0 + 1 * internal.nucleus * (internal.k1 * NFAT_Pi_Nuc - internal.k2 * NFAT_Nuc) - 1 * internal.nucleus * (internal.k16 * NFAT_Nuc * Act_C_Nuc - internal.k15 * NFAT_Act_C_Nuc) - 1 * internal.nucleus * internal.k18 * NFAT_Nuc - internal.cytosol * internal.k17 * NFAT_Cyt;
    dstatedt[12] = 0 + 1 * internal.cytosol * (internal.k14 * NFAT_Act_C_Cyt - internal.k13 * NFAT_Pi_Act_C_Cyt) - 1 * internal.cytosol * (internal.k12 * NFAT_Pi_Act_C_Cyt - internal.k11 * NFAT_Pi_Cyt * Act_C_Cyt) - 1 * internal.cytosol * internal.k7 * NFAT_Pi_Act_C_Cyt - internal.nucleus * internal.k8 * NFAT_Pi_Act_C_Nuc;
    dstatedt[6] = 0 + 1 * internal.nucleus * (internal.k14 * NFAT_Act_C_Nuc - internal.k13 * NFAT_Pi_Act_C_Nuc) - 1 * internal.nucleus * (internal.k12 * NFAT_Pi_Act_C_Nuc - internal.k11 * NFAT_Pi_Nuc * Act_C_Nuc) + 1 * internal.cytosol * internal.k7 * NFAT_Pi_Act_C_Cyt - internal.nucleus * internal.k8 * NFAT_Pi_Act_C_Nuc;
    dstatedt[10] = 0 + 1 * internal.cytosol * (internal.k12 * NFAT_Pi_Act_C_Cyt - internal.k11 * NFAT_Pi_Cyt * Act_C_Cyt) - 1 * internal.cytosol * internal.k3 * NFAT_Pi_Cyt - internal.nucleus * internal.k4 * NFAT_Pi_Nuc - 1 * internal.cytosol * (internal.k1 * NFAT_Pi_Cyt - internal.k2 * NFAT_Cyt);
    dstatedt[4] = 0 - 1 * internal.nucleus * (internal.k1 * NFAT_Pi_Nuc - internal.k2 * NFAT_Nuc) + 1 * internal.nucleus * (internal.k12 * NFAT_Pi_Act_C_Nuc - internal.k11 * NFAT_Pi_Nuc * Act_C_Nuc) + 1 * internal.cytosol * internal.k3 * NFAT_Pi_Cyt - internal.nucleus * internal.k4 * NFAT_Pi_Nuc;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Ca_Nuc", "Ca_Cyt", "NFAT_Nuc", "Act_C_Nuc", "NFAT_Pi_Nuc", "NFAT_Act_C_Nuc", "NFAT_Pi_Act_C_Nuc", "Inact_C_Nuc", "NFAT_Cyt", "Act_C_Cyt", "NFAT_Pi_Cyt", "NFAT_Act_C_Cyt", "NFAT_Pi_Act_C_Cyt", "Inact_C_Cyt"];
    this.metadata.internalOrder = {Act_C_Cyt_init: null, Act_C_Nuc_init: null, Ca_Cyt_init: null, Ca_Nuc_init: null, cytosol: null, Inact_C_Cyt_init: null, Inact_C_Nuc_init: null, initial_Act_C_Cyt: null, initial_Act_C_Nuc: null, initial_Ca_Cyt: null, initial_Ca_Nuc: null, initial_Inact_C_Cyt: null, initial_Inact_C_Nuc: null, initial_NFAT_Act_C_Cyt: null, initial_NFAT_Act_C_Nuc: null, initial_NFAT_Cyt: null, initial_NFAT_Nuc: null, initial_NFAT_Pi_Act_C_Cyt: null, initial_NFAT_Pi_Act_C_Nuc: null, initial_NFAT_Pi_Cyt: null, initial_NFAT_Pi_Nuc: null, k1: null, k10: null, k11: null, k12: null, k13: null, k14: null, k15: null, k16: null, k17: null, k18: null, k19: null, k2: null, k20: null, k21: null, k22: null, k3: null, k4: null, k5: null, k6: null, k7: null, k8: null, k9: null, NFAT_Act_C_Cyt_init: null, NFAT_Act_C_Nuc_init: null, NFAT_Cyt_init: null, NFAT_Nuc_init: null, NFAT_Pi_Act_C_Cyt_init: null, NFAT_Pi_Act_C_Nuc_init: null, NFAT_Pi_Cyt_init: null, NFAT_Pi_Nuc_init: null, nucleus: null};
    this.metadata.variableOrder = {Ca_Nuc: null, Ca_Cyt: null, NFAT_Nuc: null, Act_C_Nuc: null, NFAT_Pi_Nuc: null, NFAT_Act_C_Nuc: null, NFAT_Pi_Act_C_Nuc: null, Inact_C_Nuc: null, NFAT_Cyt: null, Act_C_Cyt: null, NFAT_Pi_Cyt: null, NFAT_Act_C_Cyt: null, NFAT_Pi_Act_C_Cyt: null, Inact_C_Cyt: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
