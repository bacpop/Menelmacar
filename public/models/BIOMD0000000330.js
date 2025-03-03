export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cytoplasm = 1;
    internal.ER = 1;
    internal.mit = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(5).fill(0);
    state[0] = internal.initial_G_alpha;
    state[1] = internal.initial_PLC;
    state[2] = internal.initial_Ca_cyt;
    state[3] = internal.initial_Ca_ER;
    state[4] = internal.initial_Ca_mit;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Ca_cyt_init", "Ca_ER_init", "Ca_mit_init", "G_alpha_init", "k1", "k10", "K11", "k12", "k13", "k14", "K15", "k16", "K17", "k18", "K19", "k2", "k20", "K21", "k3", "K4", "k5", "K6", "k7", "k8", "K9", "PLC_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Ca_cyt_init", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ca_ER_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ca_mit_init", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G_alpha_init", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.34999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 0.93000000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K11", internal, 2.6669999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k12", internal, 0.76000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k13", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k14", internal, 149, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K15", internal, 0.16, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k16", internal, 20.899999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K17", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k18", internal, 79, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K19", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k20", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K21", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K4", internal, 0.78300000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 1.24, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K6", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 5.8200000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 32.240000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K9", internal, 29.09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PLC_init", internal, 0.01, -Infinity, Infinity, false);
    internal.initial_Ca_cyt = internal.Ca_cyt_init;
    internal.initial_Ca_ER = internal.Ca_ER_init;
    internal.initial_Ca_mit = internal.Ca_mit_init;
    internal.initial_G_alpha = internal.G_alpha_init;
    internal.initial_PLC = internal.PLC_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    dstatedt[2] = 0;
    dstatedt[3] = 0;
    dstatedt[4] = 0;
    dstatedt[0] = 0;
    dstatedt[1] = 0;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "G_alpha", "PLC", "Ca_cyt", "Ca_ER", "Ca_mit"];
    this.metadata.internalOrder = {Ca_cyt_init: null, Ca_ER_init: null, Ca_mit_init: null, cytoplasm: null, ER: null, G_alpha_init: null, initial_Ca_cyt: null, initial_Ca_ER: null, initial_Ca_mit: null, initial_G_alpha: null, initial_PLC: null, k1: null, k10: null, K11: null, k12: null, k13: null, k14: null, K15: null, k16: null, K17: null, k18: null, K19: null, k2: null, k20: null, K21: null, k3: null, K4: null, k5: null, K6: null, k7: null, k8: null, K9: null, mit: null, PLC_init: null};
    this.metadata.variableOrder = {G_alpha: null, PLC: null, Ca_cyt: null, Ca_ER: null, Ca_mit: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
