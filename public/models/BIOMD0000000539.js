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
    var state = Array(6).fill(0);
    state[0] = internal.initial_A;
    state[1] = internal.initial_AgB;
    state[2] = internal.initial_gB;
    state[3] = internal.initial_rB;
    state[4] = internal.initial_B;
    state[5] = internal.initial_AB;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A_init", "AB_init", "AgB_init", "alpha", "B_init", "beta", "deltaA", "deltaAB", "deltaB", "deltar", "gamma", "gB_init", "rB_init", "rhoA", "rhob", "rhof", "theta"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A_init", internal, 40, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AB_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AgB_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "deltaA", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "deltaAB", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "deltaB", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "deltar", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gB_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rB_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rhoA", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rhob", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rhof", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "theta", internal, 0.040000000000000001, -Infinity, Infinity, false);
    internal.initial_A = internal.A_init;
    internal.initial_AB = internal.AB_init;
    internal.initial_AgB = internal.AgB_init;
    internal.initial_B = internal.B_init;
    internal.initial_gB = internal.gB_init;
    internal.initial_rB = internal.rB_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const A = state[0];
    const AgB = state[1];
    const gB = state[2];
    const rB = state[3];
    const B = state[4];
    const AB = state[5];
    dstatedt[0] = 0 - 1 * internal.cell * internal.alpha * A * gB + 1 * internal.cell * internal.theta * AgB + 1 * internal.cell * (internal.rhoA) - 1 * internal.cell * internal.deltaA * A - 1 * internal.cell * internal.gamma * A * B;
    dstatedt[5] = 0 + 1 * internal.cell * internal.gamma * A * B - 1 * internal.cell * internal.deltaAB * AB;
    dstatedt[1] = 0 + 1 * internal.cell * internal.alpha * A * gB - 1 * internal.cell * internal.theta * AgB;
    dstatedt[4] = 0 + 1 * internal.cell * (internal.beta * rB) - 1 * internal.cell * internal.deltaB * B - 1 * internal.cell * internal.gamma * A * B;
    dstatedt[2] = 0 - 1 * internal.cell * internal.alpha * A * gB + 1 * internal.cell * internal.theta * AgB;
    dstatedt[3] = 0 + 1 * internal.cell * (internal.rhof * gB) + 1 * internal.cell * (internal.rhob * AgB) - 1 * internal.cell * internal.deltar * rB;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "A", "AgB", "gB", "rB", "B", "AB"];
    this.metadata.internalOrder = {A_init: null, AB_init: null, AgB_init: null, alpha: null, B_init: null, beta: null, cell: null, deltaA: null, deltaAB: null, deltaB: null, deltar: null, gamma: null, gB_init: null, initial_A: null, initial_AB: null, initial_AgB: null, initial_B: null, initial_gB: null, initial_rB: null, rB_init: null, rhoA: null, rhob: null, rhof: null, theta: null};
    this.metadata.variableOrder = {A: null, AgB: null, gB: null, rB: null, B: null, AB: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
