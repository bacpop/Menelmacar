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
    var state = Array(4).fill(0);
    state[0] = internal.initial_sigb;
    state[1] = internal.initial_lacz;
    state[2] = internal.initial_x;
    state[3] = internal.initial_IPTG;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["IPTG_init", "kbd", "kbs", "kbx", "kxd", "kxs", "kzd", "kzs", "lacz_init", "sigb_init", "x_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "IPTG_init", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kbd", internal, 5.7999999999999998e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kbs", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kbx", internal, 8.3999999999999995e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxd", internal, 1.1999999999999999e-13, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxs", internal, 1.9999999999999999e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kzd", internal, 0.051999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kzs", internal, 1.7e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lacz_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigb_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_IPTG = internal.IPTG_init;
    internal.initial_lacz = internal.lacz_init;
    internal.initial_sigb = internal.sigb_init;
    internal.initial_x = internal.x_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const sigb = state[0];
    const lacz = state[1];
    const x = state[2];
    const IPTG = state[3];
    dstatedt[3] = 0;
    dstatedt[1] = 0 + 1 * - (internal.kzd * lacz) + internal.kzs * sigb;
    dstatedt[0] = 0 + 1 * IPTG * internal.kbs - sigb * (internal.kbd + internal.kbx * x) - 1 * - (internal.kzd * lacz) + internal.kzs * sigb - 1 * internal.kxs * sigb - internal.kxd * x;
    dstatedt[2] = 0 + 1 * internal.kxs * sigb - internal.kxd * x;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "sigb", "lacz", "x", "IPTG"];
    this.metadata.internalOrder = {compartment: null, initial_IPTG: null, initial_lacz: null, initial_sigb: null, initial_x: null, IPTG_init: null, kbd: null, kbs: null, kbx: null, kxd: null, kxs: null, kzd: null, kzs: null, lacz_init: null, sigb_init: null, x_init: null};
    this.metadata.variableOrder = {sigb: null, lacz: null, x: null, IPTG: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
