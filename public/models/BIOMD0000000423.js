export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.default1 = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(9).fill(0);
    state[0] = internal.initial_IR;
    state[1] = internal.initial_IRins;
    state[2] = internal.initial_IRp;
    state[3] = internal.initial_IRiP;
    state[4] = internal.initial_IRi;
    state[5] = internal.initial_IRS;
    state[6] = internal.initial_IRSiP;
    state[7] = internal.initial_X;
    state[8] = internal.initial_Xp;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["ins", "IR_init", "IRi_init", "IRins_init", "IRiP_init", "IRp_init", "IRS_init", "IRSiP_init", "k1a", "k1aBasic", "k1b", "k1c", "k1d", "k1e", "k1f", "k1g", "k1r", "k21", "k22", "k3", "km2", "km23", "km3", "X_init", "Xp_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "ins", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IR_init", internal, 8.9406759753263199, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IRi_init", internal, 4.8386389075851502e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IRins_init", internal, 0.59688996214639001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IRiP_init", internal, 0.42407663182338401, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IRp_init", internal, 0.0383525925240207, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IRS_init", internal, 9.4399819422554394, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IRSiP_init", internal, 0.56001805774457303, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1a", internal, 0.153418, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1aBasic", internal, 0.038338900000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1b", internal, 3.4699e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1c", internal, 0.57426600000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1d", internal, 4.7884399999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1e", internal, 5.2502700000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1f", internal, 119.35299999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1g", internal, 4.1489900000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1r", internal, 37954.699999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k21", internal, 538004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k22", internal, 1.7252e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 8.6291699999999999e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "km2", internal, 262759, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "km23", internal, 88.909599999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "km3", internal, 0.13267100000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_init", internal, 9.9963588640715102, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Xp_init", internal, 0.0036411359284838599, -Infinity, Infinity, false);
    internal.initial_IR = internal.IR_init;
    internal.initial_IRi = internal.IRi_init;
    internal.initial_IRins = internal.IRins_init;
    internal.initial_IRiP = internal.IRiP_init;
    internal.initial_IRp = internal.IRp_init;
    internal.initial_IRS = internal.IRS_init;
    internal.initial_IRSiP = internal.IRSiP_init;
    internal.initial_X = internal.X_init;
    internal.initial_Xp = internal.Xp_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const IR = state[0];
    const IRins = state[1];
    const IRp = state[2];
    const IRiP = state[3];
    const IRi = state[4];
    const IRS = state[5];
    const IRSiP = state[6];
    const X = state[7];
    const Xp = state[8];
    dstatedt[0] = 0 - 1 * internal.k1a * internal.ins * IR + internal.k1aBasic * IR + 1 * internal.k1b * IRins + 1 * internal.k1g * IRp + 1 * internal.k1r * IRi;
    dstatedt[4] = 0 + 1 * IRiP * (internal.k1e + internal.k1f * Xp / (1 + Xp)) - 1 * internal.k1r * IRi;
    dstatedt[1] = 0 + 1 * internal.k1a * internal.ins * IR + internal.k1aBasic * IR - 1 * internal.k1b * IRins - 1 * internal.k1c * IRins;
    dstatedt[3] = 0 + 1 * internal.k1d * IRp - 1 * IRiP * (internal.k1e + internal.k1f * Xp / (1 + Xp));
    dstatedt[2] = 0 + 1 * internal.k1c * IRins - 1 * internal.k1d * IRp - 1 * internal.k1g * IRp;
    dstatedt[5] = 0 - 1 * internal.k21 * IRS * (IRp + internal.k22 * IRiP) / (1 + internal.km23 * Xp) + 1 * internal.km2 * IRSiP;
    dstatedt[6] = 0 + 1 * internal.k21 * IRS * (IRp + internal.k22 * IRiP) / (1 + internal.km23 * Xp) - 1 * internal.km2 * IRSiP;
    dstatedt[7] = 0 - 1 * internal.k3 * X * IRSiP + 1 * internal.km3 * Xp;
    dstatedt[8] = 0 + 1 * internal.k3 * X * IRSiP - 1 * internal.km3 * Xp;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "IR", "IRins", "IRp", "IRiP", "IRi", "IRS", "IRSiP", "X", "Xp"];
    this.metadata.internalOrder = {default1: null, initial_IR: null, initial_IRi: null, initial_IRins: null, initial_IRiP: null, initial_IRp: null, initial_IRS: null, initial_IRSiP: null, initial_X: null, initial_Xp: null, ins: null, IR_init: null, IRi_init: null, IRins_init: null, IRiP_init: null, IRp_init: null, IRS_init: null, IRSiP_init: null, k1a: null, k1aBasic: null, k1b: null, k1c: null, k1d: null, k1e: null, k1f: null, k1g: null, k1r: null, k21: null, k22: null, k3: null, km2: null, km23: null, km3: null, X_init: null, Xp_init: null};
    this.metadata.variableOrder = {IR: null, IRins: null, IRp: null, IRiP: null, IRi: null, IRS: null, IRSiP: null, X: null, Xp: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
