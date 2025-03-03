export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(9).fill(0);
    state[0] = internal.initial_IL7Ra;
    state[1] = internal.initial_IL15Rbeta;
    state[2] = internal.initial_gamma_c;
    state[3] = internal.initial_IL7Ru;
    state[4] = internal.initial_IL15Ru;
    state[5] = internal.initial_IL7Rb;
    state[6] = internal.initial_IL15Rb;
    state[7] = internal.initial_IL7;
    state[8] = internal.initial_IL15;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["gamma_c_init", "IL15_init", "IL15Rb_init", "IL15Rbeta_init", "IL15Ru_init", "IL7_init", "IL7Ra_init", "IL7Rb_init", "IL7Ru_init", "k_f_1", "k_f_2", "k_f_3", "k_f_4", "k_r_1", "k_r_2", "k_r_3", "k_r_4", "rho"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "gamma_c_init", internal, 100000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IL15_init", internal, 602.21400000000006, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IL15Rb_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IL15Rbeta_init", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IL15Ru_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IL7_init", internal, 6022.1400000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IL7Ra_init", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IL7Rb_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IL7Ru_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_f_1", internal, 0.00016605400000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_f_2", internal, 0.00016605400000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_f_3", internal, 0.00016605400000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_f_4", internal, 1.6605399999999999e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_r_1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_r_2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_r_3", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_r_4", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho", internal, 100000, -Infinity, Infinity, false);
    internal.initial_gamma_c = internal.gamma_c_init;
    internal.initial_IL15 = internal.IL15_init;
    internal.initial_IL15Rb = internal.IL15Rb_init;
    internal.initial_IL15Rbeta = internal.IL15Rbeta_init;
    internal.initial_IL15Ru = internal.IL15Ru_init;
    internal.initial_IL7 = internal.IL7_init;
    internal.initial_IL7Ra = internal.IL7Ra_init;
    internal.initial_IL7Rb = internal.IL7Rb_init;
    internal.initial_IL7Ru = internal.IL7Ru_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const IL7Ra = state[0];
    const IL15Rbeta = state[1];
    const gamma_c = state[2];
    const IL7Ru = state[3];
    const IL15Ru = state[4];
    const IL7Rb = state[5];
    const IL15Rb = state[6];
    const IL7 = state[7];
    const IL15 = state[8];
    dstatedt[2] = 0 - 1 * internal.compartment * internal.k_f_1 * IL7Ra * gamma_c + 1 * internal.compartment * internal.k_r_1 * IL7Ru - 1 * internal.compartment * internal.k_f_2 * IL15Rbeta * gamma_c + 1 * internal.compartment * internal.k_r_2 * IL15Ru;
    dstatedt[8] = 0 - 1 * internal.compartment * internal.k_f_4 * IL15 * IL15Ru + 1 * internal.compartment * internal.k_r_4 * IL15Rb;
    dstatedt[6] = 0 + 1 * internal.compartment * internal.k_f_4 * IL15 * IL15Ru - 1 * internal.compartment * internal.k_r_4 * IL15Rb;
    dstatedt[1] = 0 - 1 * internal.compartment * internal.k_f_2 * IL15Rbeta * gamma_c + 1 * internal.compartment * internal.k_r_2 * IL15Ru;
    dstatedt[4] = 0 + 1 * internal.compartment * internal.k_f_2 * IL15Rbeta * gamma_c - 1 * internal.compartment * internal.k_r_2 * IL15Ru - 1 * internal.compartment * internal.k_f_4 * IL15 * IL15Ru + 1 * internal.compartment * internal.k_r_4 * IL15Rb;
    dstatedt[7] = 0 - 1 * internal.compartment * internal.k_f_3 * IL7 * IL7Ru + 1 * internal.compartment * internal.k_r_3 * IL7Rb;
    dstatedt[0] = 0 - 1 * internal.compartment * internal.k_f_1 * IL7Ra * gamma_c + 1 * internal.compartment * internal.k_r_1 * IL7Ru;
    dstatedt[5] = 0 + 1 * internal.compartment * internal.k_f_3 * IL7 * IL7Ru - 1 * internal.compartment * internal.k_r_3 * IL7Rb;
    dstatedt[3] = 0 + 1 * internal.compartment * internal.k_f_1 * IL7Ra * gamma_c - 1 * internal.compartment * internal.k_r_1 * IL7Ru - 1 * internal.compartment * internal.k_f_3 * IL7 * IL7Ru + 1 * internal.compartment * internal.k_r_3 * IL7Rb;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "IL7Ra", "IL15Rbeta", "gamma_c", "IL7Ru", "IL15Ru", "IL7Rb", "IL15Rb", "IL7", "IL15"];
    this.metadata.internalOrder = {compartment: null, gamma_c_init: null, IL15_init: null, IL15Rb_init: null, IL15Rbeta_init: null, IL15Ru_init: null, IL7_init: null, IL7Ra_init: null, IL7Rb_init: null, IL7Ru_init: null, initial_gamma_c: null, initial_IL15: null, initial_IL15Rb: null, initial_IL15Rbeta: null, initial_IL15Ru: null, initial_IL7: null, initial_IL7Ra: null, initial_IL7Rb: null, initial_IL7Ru: null, k_f_1: null, k_f_2: null, k_f_3: null, k_f_4: null, k_r_1: null, k_r_2: null, k_r_3: null, k_r_4: null, rho: null};
    this.metadata.variableOrder = {IL7Ra: null, IL15Rbeta: null, gamma_c: null, IL7Ru: null, IL15Ru: null, IL7Rb: null, IL15Rb: null, IL7: null, IL15: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
