export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(9).fill(0);
    state[0] = internal.initial_RCT0;
    state[1] = internal.initial_alpha;
    state[2] = internal.initial_BN1;
    state[3] = internal.initial_BN2;
    state[4] = internal.initial_BN3;
    state[5] = internal.initial_BN4;
    state[6] = internal.initial_BTX;
    state[7] = internal.initial_BM;
    state[8] = internal.initial_RCT1;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha_init", "BM_init", "BN1_init", "BN2_init", "BN3_init", "BN4_init", "BTX_init", "epsilon", "k0", "k1", "k2", "k3", "k4", "q", "RCT0_init", "RCT1_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "BM_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "BN1_init", internal, 11.9, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "BN2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "BN3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "BN4_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "BTX_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "epsilon", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k0", internal, 0.58999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.67200000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.67800000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.039199999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0.55400000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RCT0_init", internal, 88.099999999999994, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RCT1_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_alpha = internal.alpha_init;
    internal.initial_BM = internal.BM_init;
    internal.initial_BN1 = internal.BN1_init;
    internal.initial_BN2 = internal.BN2_init;
    internal.initial_BN3 = internal.BN3_init;
    internal.initial_BN4 = internal.BN4_init;
    internal.initial_BTX = internal.BTX_init;
    internal.initial_RCT0 = internal.RCT0_init;
    internal.initial_RCT1 = internal.RCT1_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const RCT0 = state[0];
    const alpha = state[1];
    const BN1 = state[2];
    const BN2 = state[3];
    const BN3 = state[4];
    const BN4 = state[5];
    const BTX = state[6];
    const BM = state[7];
    dstatedt[1] = internal.k1 * BTX * RCT0 - internal.k2 * Math.pow((BTX), (internal.q)) * alpha;
    dstatedt[7] = internal.k4 * BTX;
    dstatedt[2] = internal.k2 * Math.pow((BTX), (internal.q)) * alpha - 4 * internal.k3 * BN1;
    dstatedt[3] = 4 * internal.k3 * BN1 - 4 * internal.k3 * BN2;
    dstatedt[4] = 4 * internal.k3 * BN2 - 4 * internal.k3 * BN3;
    dstatedt[5] = 4 * internal.k3 * BN3 - 4 * internal.k3 * BN4;
    dstatedt[6] = 4 * internal.k3 * BN4 - internal.k4 * BTX;
    dstatedt[0] = - internal.k0 * (internal.epsilon + BM) * RCT0 - internal.k1 * BTX * RCT0;
    dstatedt[8] = internal.k0 * (internal.epsilon + BM) * RCT0;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "RCT0", "alpha", "BN1", "BN2", "BN3", "BN4", "BTX", "BM", "RCT1"];
    this.metadata.internalOrder = {alpha_init: null, BM_init: null, BN1_init: null, BN2_init: null, BN3_init: null, BN4_init: null, BTX_init: null, cell: null, epsilon: null, initial_alpha: null, initial_BM: null, initial_BN1: null, initial_BN2: null, initial_BN3: null, initial_BN4: null, initial_BTX: null, initial_RCT0: null, initial_RCT1: null, k0: null, k1: null, k2: null, k3: null, k4: null, q: null, RCT0_init: null, RCT1_init: null};
    this.metadata.variableOrder = {RCT0: null, alpha: null, BN1: null, BN2: null, BN3: null, BN4: null, BTX: null, BM: null, RCT1: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
