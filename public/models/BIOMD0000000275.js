export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.PSM = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(5).fill(0);
    state[0] = internal.initial_RA;
    state[1] = internal.initial_M_C;
    state[2] = internal.initial_C;
    state[3] = internal.initial_F;
    state[4] = internal.initial_M_F;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["C_init", "F_init", "Ka", "kd1", "kd2", "kd3", "kd4", "kd5", "Ki", "Kr1", "Kr2", "ks1", "ks2", "ks3", "L", "m", "M_0", "M_C_init", "M_F_init", "n", "RA_init", "RALDH2_0", "V0", "Vsc", "x"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "C_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "F_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ka", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd2", internal, 0.28000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd4", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd5", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ki", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kr1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kr2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ks1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ks2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ks3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_0", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_C_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_F_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RA_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RALDH2_0", internal, 7.0999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V0", internal, 0.36499999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vsc", internal, 7.0999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x", internal, 15, -Infinity, Infinity, false);
    internal.initial_C = internal.C_init;
    internal.initial_F = internal.F_init;
    internal.initial_M_C = internal.M_C_init;
    internal.initial_M_F = internal.M_F_init;
    internal.initial_RA = internal.RA_init;
    internal.vs1 = internal.ks1 * internal.RALDH2_0 * (1 - internal.x / internal.L);
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const RA = state[0];
    const M_C = state[1];
    const C = state[2];
    const F = state[3];
    const M_F = state[4];
    dstatedt[4] = 0;
    dstatedt[2] = 0 + 1 * internal.PSM * internal.ks2 * M_C - 1 * internal.PSM * internal.kd2 * C;
    dstatedt[3] = 0 + 1 * internal.PSM * internal.ks3 * M_F * (Math.pow((internal.Ki), (internal.m)) / (Math.pow((internal.Ki), (internal.m)) + Math.pow((RA), (internal.m)))) - 1 * internal.PSM * internal.kd4 * F;
    dstatedt[1] = 0 + 1 * internal.PSM * (internal.V0 + internal.Vsc * Math.pow((F), (internal.n)) / (Math.pow((internal.Ka), (internal.n)) + Math.pow((F), (internal.n)))) - 1 * internal.PSM * internal.kd3 * M_C;
    dstatedt[0] = 0 + 1 * internal.PSM * internal.vs1 - 1 * internal.PSM * internal.kd5 * RA - 1 * internal.PSM * internal.kd1 * RA * C;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "RA", "M_C", "C", "F", "M_F"];
    this.metadata.internalOrder = {C_init: null, F_init: null, initial_C: null, initial_F: null, initial_M_C: null, initial_M_F: null, initial_RA: null, Ka: null, kd1: null, kd2: null, kd3: null, kd4: null, kd5: null, Ki: null, Kr1: null, Kr2: null, ks1: null, ks2: null, ks3: null, L: null, m: null, M_0: null, M_C_init: null, M_F_init: null, n: null, PSM: null, RA_init: null, RALDH2_0: null, V0: null, vs1: null, Vsc: null, x: null};
    this.metadata.variableOrder = {RA: null, M_C: null, C: null, F: null, M_F: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
