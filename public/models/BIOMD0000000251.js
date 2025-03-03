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
    state[0] = internal.initial_x1;
    state[1] = internal.initial_x2;
    state[2] = internal.initial_ppERKn;
    state[3] = internal.initial_DUSP;
    state[4] = internal.initial_pRSKn;
    state[5] = internal.initial_cFOSp;
    state[6] = internal.initial_cFOS;
    state[7] = internal.initial_pcFOS;
    state[8] = internal.initial_cFOSm;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["cFOS_init", "cFOSm_init", "cFOSp_init", "DUSP_init", "k1", "K1", "k10", "k11", "k12", "k13", "k2", "K2", "k3", "k4", "k5", "k6", "k7", "k8", "k9", "kxk", "L", "n", "pcFOS_init", "ppERKn_init", "pRSKn_init", "tau1", "tau2", "x1_init", "x2_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "cFOS_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cFOSm_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cFOSp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DUSP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1", internal, 1.0900000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11", internal, 0.11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k12", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k13", internal, 0.059999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2", internal, 2.8900000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 14, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 0.14999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 0.13, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 0.080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 1.1000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pcFOS_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ppERKn_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pRSKn_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau1", internal, 3.0699999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau2", internal, 472, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x2_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_cFOS = internal.cFOS_init;
    internal.initial_cFOSm = internal.cFOSm_init;
    internal.initial_cFOSp = internal.cFOSp_init;
    internal.initial_DUSP = internal.DUSP_init;
    internal.initial_pcFOS = internal.pcFOS_init;
    internal.initial_ppERKn = internal.ppERKn_init;
    internal.initial_pRSKn = internal.pRSKn_init;
    internal.initial_x1 = internal.x1_init;
    internal.initial_x2 = internal.x2_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const x1 = state[0];
    const x2 = state[1];
    const ppERKn = state[2];
    const DUSP = state[3];
    const pRSKn = state[4];
    const cFOSp = state[5];
    const cFOS = state[6];
    const pcFOS = state[7];
    const cFOSm = state[8];
    dstatedt[8] = 0 + 1 * internal.compartment * (internal.k7 * cFOSp - internal.k8 * cFOSm);
    dstatedt[5] = 0 + 1 * internal.compartment * (Math.pow((ppERKn * pRSKn), (internal.n)) / (Math.pow((internal.k6), (internal.n)) + Math.pow((ppERKn * pRSKn), (internal.n))) - internal.k7 * cFOSp);
    dstatedt[3] = 0 + 1 * internal.compartment * internal.kxk * ppERKn;
    dstatedt[4] = 0 + 1 * internal.compartment * (internal.k4 * ppERKn - internal.k5 * pRSKn);
    dstatedt[0] = 0 + 1 * internal.compartment * (- x1 / internal.tau1 + internal.K1 * internal.L / internal.tau1);
    dstatedt[1] = 0 + 1 * internal.compartment * (- x2 / internal.tau2 + internal.K2 * internal.L / internal.tau2);
    var ppERKc = x1 - x2;
    dstatedt[6] = 0 + 1 * internal.compartment * (internal.k9 * cFOSm - internal.k10 * cFOS - internal.k11 * cFOS * ppERKc + internal.k13 * pcFOS);
    dstatedt[7] = 0 + 1 * internal.compartment * (internal.k11 * cFOS * ppERKc - internal.k12 * pcFOS - internal.k13 * pcFOS);
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.k1 * ppERKc - internal.k2 * ppERKn - internal.k3 * DUSP * ppERKn);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "x1", "x2", "ppERKn", "DUSP", "pRSKn", "cFOSp", "cFOS", "pcFOS", "cFOSm"];
    this.metadata.internalOrder = {cFOS_init: null, cFOSm_init: null, cFOSp_init: null, compartment: null, DUSP_init: null, initial_cFOS: null, initial_cFOSm: null, initial_cFOSp: null, initial_DUSP: null, initial_pcFOS: null, initial_ppERKn: null, initial_pRSKn: null, initial_x1: null, initial_x2: null, k1: null, K1: null, k10: null, k11: null, k12: null, k13: null, k2: null, K2: null, k3: null, k4: null, k5: null, k6: null, k7: null, k8: null, k9: null, kxk: null, L: null, n: null, pcFOS_init: null, ppERKn_init: null, pRSKn_init: null, tau1: null, tau2: null, x1_init: null, x2_init: null};
    this.metadata.variableOrder = {x1: null, x2: null, ppERKn: null, DUSP: null, pRSKn: null, cFOSp: null, cFOS: null, pcFOS: null, cFOSm: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
