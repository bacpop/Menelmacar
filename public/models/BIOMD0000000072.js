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
    var state = Array(7).fill(0);
    state[0] = internal.initial_L;
    state[1] = internal.initial_R;
    state[2] = internal.initial_G;
    state[3] = internal.initial_Gbg;
    state[4] = internal.initial_Gd;
    state[5] = internal.initial_Ga;
    state[6] = internal.initial_RL;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["G_init", "Ga_init", "Gbg_init", "Gd_init", "k1", "k2", "L_init", "R_init", "RL_init", "v"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "G_init", internal, 7000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ga_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Gbg_init", internal, 3000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Gd_init", internal, 3000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L_init", internal, 6.02e+17, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_init", internal, 10000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RL_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v", internal, 4, -Infinity, Infinity, false);
    internal.initial_G = internal.G_init;
    internal.initial_Ga = internal.Ga_init;
    internal.initial_Gbg = internal.Gbg_init;
    internal.initial_Gd = internal.Gd_init;
    internal.initial_L = internal.L_init;
    internal.initial_R = internal.R_init;
    internal.initial_RL = internal.RL_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const L = state[0];
    const R = state[1];
    const G = state[2];
    const Gbg = state[3];
    const Gd = state[4];
    const Ga = state[5];
    const RL = state[6];
    dstatedt[2] = 0 + 1 * internal.cell * internal.k1 * Gd * Gbg - 1 * internal.cell * internal.k1 * RL * G;
    dstatedt[5] = 0 + 1 * internal.cell * internal.k1 * RL * G - 1 * internal.cell * internal.k1 * Ga;
    dstatedt[3] = 0 - 1 * internal.cell * internal.k1 * Gd * Gbg + 1 * internal.cell * internal.k1 * RL * G;
    dstatedt[4] = 0 - 1 * internal.cell * internal.k1 * Gd * Gbg + 1 * internal.cell * internal.k1 * Ga;
    dstatedt[0] = 0 - 1 * internal.cell * (internal.k1 * L * R - internal.k2 * RL);
    dstatedt[1] = 0 - 1 * internal.cell * (internal.k1 * L * R - internal.k2 * RL) + 1 * internal.cell * internal.v - 1 * internal.cell * internal.k1 * R;
    dstatedt[6] = 0 + 1 * internal.cell * (internal.k1 * L * R - internal.k2 * RL) - 1 * internal.cell * internal.k1 * RL;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "L", "R", "G", "Gbg", "Gd", "Ga", "RL"];
    this.metadata.internalOrder = {cell: null, G_init: null, Ga_init: null, Gbg_init: null, Gd_init: null, initial_G: null, initial_Ga: null, initial_Gbg: null, initial_Gd: null, initial_L: null, initial_R: null, initial_RL: null, k1: null, k2: null, L_init: null, R_init: null, RL_init: null, v: null};
    this.metadata.variableOrder = {L: null, R: null, G: null, Gbg: null, Gd: null, Ga: null, RL: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
