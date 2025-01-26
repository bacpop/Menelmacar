export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.k1 = 15;
    internal.k10 = 0.29999999999999999;
    internal.k12 = 0.001;
    internal.k2 = 50;
    internal.k3 = 14;
    internal.k4 = 0.10000000000000001;
    internal.k5 = 0.14999999999999999;
    internal.k6 = 0.13;
    internal.k8 = 0.080000000000000002;
    internal.k9 = 0.29999999999999999;
    internal.kxk = 1;
    internal.n = 1.1000000000000001;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var ppERKc_init = internal.initial_x1 - internal.initial_x2;
    internal.initial_ppERKc = ppERKc_init;
    var state = Array(10).fill(0);
    state[0] = internal.initial_x1;
    state[1] = internal.initial_x2;
    state[2] = internal.initial_ppERKn;
    state[3] = internal.initial_DUSP;
    state[4] = internal.initial_pRSKn;
    state[5] = internal.initial_cFOSp;
    state[6] = internal.initial_cFOS;
    state[7] = internal.initial_pcFOS;
    state[8] = internal.initial_cFOSm;
    state[9] = internal.initial_ppERKc;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["cFOS_init", "cFOSm_init", "cFOSp_init", "DUSP_init", "K1", "k11", "k13", "K2", "k7", "L", "pcFOS_init", "ppERKn_init", "pRSKn_init", "tau1", "tau2", "x1_init", "x2_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "cFOS_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cFOSm_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cFOSp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "DUSP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1", internal, 1.0900000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11", internal, 0.11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k13", internal, 0.059999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2", internal, 2.8900000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L", internal, 1, -Infinity, Infinity, false);
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
    const ppERKc = state[9];
    dstatedt[9] = 0 + 0;
    dstatedt[6] = 0 + 1 * internal.compartment * (internal.k9 * cFOSm - internal.k10 * cFOS - internal.k11 * cFOS * ppERKc + internal.k13 * pcFOS);
    dstatedt[8] = 0 + 1 * internal.compartment * (internal.k7 * cFOSp - internal.k8 * cFOSm);
    dstatedt[5] = 0 + 1 * internal.compartment * (Math.pow((ppERKn * pRSKn), (internal.n)) / (Math.pow((internal.k6), (internal.n)) + Math.pow((ppERKn * pRSKn), (internal.n))) - internal.k7 * cFOSp);
    dstatedt[3] = 0 + 1 * internal.compartment * internal.kxk * ppERKn;
    dstatedt[7] = 0 + 1 * internal.compartment * (internal.k11 * cFOS * ppERKc - internal.k12 * pcFOS - internal.k13 * pcFOS);
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.k1 * ppERKc - internal.k2 * ppERKn - internal.k3 * DUSP * ppERKn);
    dstatedt[4] = 0 + 1 * internal.compartment * (internal.k4 * ppERKn - internal.k5 * pRSKn);
    dstatedt[0] = 0 + 1 * internal.compartment * (- x1 / internal.tau1 + internal.K1 * internal.L / internal.tau1);
    dstatedt[1] = 0 + 1 * internal.compartment * (- x2 / internal.tau2 + internal.K2 * internal.L / internal.tau2);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "x1", "x2", "ppERKn", "DUSP", "pRSKn", "cFOSp", "cFOS", "pcFOS", "cFOSm", "ppERKc"];
    this.metadata.internalOrder = {cFOS_init: null, cFOSm_init: null, cFOSp_init: null, compartment: null, DUSP_init: null, initial_cFOS: null, initial_cFOSm: null, initial_cFOSp: null, initial_DUSP: null, initial_pcFOS: null, initial_ppERKc: null, initial_ppERKn: null, initial_pRSKn: null, initial_x1: null, initial_x2: null, k1: null, K1: null, k10: null, k11: null, k12: null, k13: null, k2: null, K2: null, k3: null, k4: null, k5: null, k6: null, k7: null, k8: null, k9: null, kxk: null, L: null, n: null, pcFOS_init: null, ppERKn_init: null, pRSKn_init: null, tau1: null, tau2: null, x1_init: null, x2_init: null};
    this.metadata.variableOrder = {x1: null, x2: null, ppERKn: null, DUSP: null, pRSKn: null, cFOSp: null, cFOS: null, pcFOS: null, cFOSm: null, ppERKc: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
