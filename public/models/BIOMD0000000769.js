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
    var state = Array(5).fill(0);
    state[0] = internal.initial_T;
    state[1] = internal.initial_H1;
    state[2] = internal.initial_H2;
    state[3] = internal.initial_M1;
    state[4] = internal.initial_M2;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "ah1", "ah2", "am1", "am2", "b", "eh1", "eh2", "em1", "em2", "f", "gh1", "gh2", "gm1", "gm2", "H1_init", "H2_init", "m1", "M1_init", "m2", "M2_init", "nh1", "nh2", "nm1", "nm2", "ph1", "ph2", "pm1", "pm2", "rm1", "rm2", "T_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.68999999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ah1", internal, 0.0080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ah2", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "am1", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "am2", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 1000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "eh1", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "eh2", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "em1", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "em2", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f", internal, 1e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gh1", internal, 4.8e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gh2", internal, 1.0000000000000001e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gm1", internal, 6e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gm2", internal, 2.3000000000000001e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m1", internal, 100000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M1_init", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m2", internal, 1000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nh1", internal, 9.9999999999999995e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nh2", internal, 9.9999999999999995e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nm1", internal, 9.9999999999999995e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nm2", internal, 9.9999999999999995e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ph1", internal, 0.089999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ph2", internal, 0.089999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pm1", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pm2", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rm1", internal, 0.089999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rm2", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_init", internal, 100000, -Infinity, Infinity, false);
    internal.initial_H1 = internal.H1_init;
    internal.initial_H2 = internal.H2_init;
    internal.initial_M1 = internal.M1_init;
    internal.initial_M2 = internal.M2_init;
    internal.initial_T = internal.T_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const T = state[0];
    const H1 = state[1];
    const H2 = state[2];
    const M1 = state[3];
    const M2 = state[4];
    dstatedt[1] = 0 + 1 * internal.tme * (internal.ah1 * M1) + 1 * internal.tme * (internal.ph1 * H1 * M1 * (1 - (H1 + H2) / internal.m1)) - 1 * internal.tme * (internal.nh1 * H1 * T) - 1 * internal.tme * internal.eh1 * H1;
    dstatedt[2] = 0 + 1 * internal.tme * (internal.ah2 * M2) + 1 * internal.tme * (internal.ph2 * H2 * M2 * (1 - (H2 + H1) / internal.m1)) - 1 * internal.tme * (internal.nh2 * H2 * T) - 1 * internal.tme * internal.eh2 * H2;
    dstatedt[3] = 0 + 1 * internal.tme * (internal.am1 * H1) + 1 * internal.tme * (internal.pm1 * M1 * (1 - (M1 + M2) / internal.m2)) - 1 * internal.tme * (internal.nm1 * M1 * T) - 1 * internal.tme * internal.em1 * M1 - 1 * internal.tme * internal.rm2 * M1 + 1 * internal.tme * internal.rm1 * M2;
    dstatedt[4] = 0 + 1 * internal.tme * internal.rm2 * M1 - 1 * internal.tme * internal.rm1 * M2 + 1 * internal.tme * (internal.am2 * H2) + 1 * internal.tme * (internal.pm2 * M2 * H2 * (1 - (M2 + M1) / internal.m2)) + 1 * internal.tme * (internal.nm2 * M2 * T) - 1 * internal.tme * internal.em2 * M2;
    dstatedt[0] = 0 + 1 * internal.tme * (internal.a * T * (1 - T / internal.b)) - 1 * internal.tme * internal.f * T - 1 * internal.tme * (internal.gh1 * T * H1) - 1 * internal.tme * (internal.gh2 * T * H2) - 1 * internal.tme * (internal.gm1 * T * M1) + 1 * internal.tme * (internal.gm2 * T * M2);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "T", "H1", "H2", "M1", "M2"];
    this.metadata.internalOrder = {a: null, ah1: null, ah2: null, am1: null, am2: null, b: null, eh1: null, eh2: null, em1: null, em2: null, f: null, gh1: null, gh2: null, gm1: null, gm2: null, H1_init: null, H2_init: null, initial_H1: null, initial_H2: null, initial_M1: null, initial_M2: null, initial_T: null, m1: null, M1_init: null, m2: null, M2_init: null, nh1: null, nh2: null, nm1: null, nm2: null, ph1: null, ph2: null, pm1: null, pm2: null, rm1: null, rm2: null, T_init: null, tme: null};
    this.metadata.variableOrder = {T: null, H1: null, H2: null, M1: null, M2: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
