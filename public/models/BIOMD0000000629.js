export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.RAR_retinoids = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(5).fill(0);
    state[0] = internal.initial_L;
    state[1] = internal.initial_LR;
    state[2] = internal.initial_R;
    state[3] = internal.initial_CA;
    state[4] = internal.initial_LRCA;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["CA_init", "k1", "k2", "L_init", "LR_init", "LRCA_init", "R_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "CA_init", internal, 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.014, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L_init", internal, 0.00050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "LR_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "LRCA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_init", internal, 0.0035000000000000001, -Infinity, Infinity, false);
    internal.initial_CA = internal.CA_init;
    internal.initial_L = internal.L_init;
    internal.initial_LR = internal.LR_init;
    internal.initial_LRCA = internal.LRCA_init;
    internal.initial_R = internal.R_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const L = state[0];
    const LR = state[1];
    const R = state[2];
    const CA = state[3];
    const LRCA = state[4];
    dstatedt[3] = 0 - 1 * internal.RAR_retinoids * (internal.k1 * LR * CA - internal.k2 * LRCA);
    dstatedt[0] = 0 - 1 * internal.RAR_retinoids * (internal.k1 * L * R - internal.k2 * LR);
    dstatedt[1] = 0 + 1 * internal.RAR_retinoids * (internal.k1 * L * R - internal.k2 * LR) - 1 * internal.RAR_retinoids * (internal.k1 * LR * CA - internal.k2 * LRCA);
    dstatedt[4] = 0 + 1 * internal.RAR_retinoids * (internal.k1 * LR * CA - internal.k2 * LRCA);
    dstatedt[2] = 0 - 1 * internal.RAR_retinoids * (internal.k1 * L * R - internal.k2 * LR);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "L", "LR", "R", "CA", "LRCA"];
    this.metadata.internalOrder = {CA_init: null, initial_CA: null, initial_L: null, initial_LR: null, initial_LRCA: null, initial_R: null, k1: null, k2: null, L_init: null, LR_init: null, LRCA_init: null, R_init: null, RAR_retinoids: null};
    this.metadata.variableOrder = {L: null, LR: null, R: null, CA: null, LRCA: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
