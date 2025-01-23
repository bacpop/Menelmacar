export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.tme = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_H1;
    state[1] = internal.initial_H2;
    state[2] = internal.initial_M1;
    state[3] = internal.initial_M2;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["ah1", "ah2", "am1", "am2", "eh1", "eh2", "em1", "em2", "H1_init", "H2_init", "m1", "M1_init", "m2", "M2_init", "ph1", "ph2", "pm1", "pm2", "rm1", "rm2"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "ah1", internal, 0.0080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ah2", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "am1", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "am2", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "eh1", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "eh2", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "em1", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "em2", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m1", internal, 100000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M1_init", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m2", internal, 1000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ph1", internal, 0.089999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ph2", internal, 0.089999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pm1", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pm2", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rm1", internal, 0.089999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rm2", internal, 0.050000000000000003, -Infinity, Infinity, false);
    internal.initial_H1 = internal.H1_init;
    internal.initial_H2 = internal.H2_init;
    internal.initial_M1 = internal.M1_init;
    internal.initial_M2 = internal.M2_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const H1 = state[0];
    const H2 = state[1];
    const M1 = state[2];
    const M2 = state[3];
    dstatedt[0] = 0 + 1 * internal.tme * (internal.ah1 * M1) + 1 * internal.tme * (internal.ph1 * H1 * M1 * (1 - (H1 + H2) / internal.m1)) - 1 * internal.tme * internal.eh1 * H1;
    dstatedt[1] = 0 + 1 * internal.tme * (internal.ah2 * M2) + 1 * internal.tme * (internal.ph2 * H2 * M2 * (1 - (H2 + H1) / internal.m1)) - 1 * internal.tme * internal.eh2 * H2;
    dstatedt[2] = 0 + 1 * internal.tme * (internal.am1 * H1) + 1 * internal.tme * (internal.pm1 * M1 * (1 - (M1 + M2) / internal.m2)) - 1 * internal.tme * internal.em1 * M1 - 1 * internal.tme * internal.rm2 * M1 + 1 * internal.tme * internal.rm1 * M2;
    dstatedt[3] = 0 + 1 * internal.tme * internal.rm2 * M1 - 1 * internal.tme * internal.rm1 * M2 + 1 * internal.tme * (internal.am2 * H2) + 1 * internal.tme * (internal.pm2 * M2 * H2 * (1 - (M2 + M1) / internal.m2)) - 1 * internal.tme * internal.em2 * M2;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "H1", "H2", "M1", "M2"];
    this.metadata.internalOrder = {ah1: null, ah2: null, am1: null, am2: null, eh1: null, eh2: null, em1: null, em2: null, H1_init: null, H2_init: null, initial_H1: null, initial_H2: null, initial_M1: null, initial_M2: null, m1: null, M1_init: null, m2: null, M2_init: null, ph1: null, ph2: null, pm1: null, pm2: null, rm1: null, rm2: null, tme: null};
    this.metadata.variableOrder = {H1: null, H2: null, M1: null, M2: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
