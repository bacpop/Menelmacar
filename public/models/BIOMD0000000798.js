export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.bone_marrow = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(5).fill(0);
    state[0] = internal.initial_S;
    state[1] = internal.initial_A;
    state[2] = internal.initial_D;
    state[3] = internal.initial_L;
    state[4] = internal.initial_T;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "A_init", "D_init", "da", "dl", "ds", "k1", "k2", "L_init", "pa", "pl", "ps", "S_init", "T_init", "ud", "ut", "y"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.014999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "A_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "D_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "da", internal, 0.44, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dl", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ds", internal, 0.14000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pa", internal, 0.42999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pl", internal, 0.27000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ps", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ud", internal, 0.27500000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ut", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y", internal, 0.01, -Infinity, Infinity, false);
    internal.initial_A = internal.A_init;
    internal.initial_D = internal.D_init;
    internal.initial_L = internal.L_init;
    internal.initial_S = internal.S_init;
    internal.initial_T = internal.T_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const S = state[0];
    const A = state[1];
    const D = state[2];
    const L = state[3];
    const T = state[4];
    dstatedt[2] = 0 + 1 * internal.bone_marrow * internal.da * A - 1 * internal.bone_marrow * internal.ud * D;
    dstatedt[4] = 0 + 1 * internal.bone_marrow * internal.dl * L - 1 * internal.bone_marrow * internal.ut * T;
    var Z1 = S;
    var Z2 = A + L;
    dstatedt[1] = 0 + 1 * internal.bone_marrow * internal.ds * S + 1 * internal.bone_marrow * (internal.pa * A * (internal.k2 - Z2)) - 1 * internal.bone_marrow * internal.da * A;
    dstatedt[3] = 0 + 1 * internal.bone_marrow * (internal.pl * L * (internal.k2 - Z2)) - 1 * internal.bone_marrow * internal.dl * L - 1 * internal.bone_marrow * (internal.a * L / (internal.y + L));
    dstatedt[0] = 0 + 1 * internal.bone_marrow * (internal.ps * S * (internal.k1 - Z1)) - 1 * internal.bone_marrow * internal.ds * S;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "S", "A", "D", "L", "T"];
    this.metadata.internalOrder = {a: null, A_init: null, bone_marrow: null, D_init: null, da: null, dl: null, ds: null, initial_A: null, initial_D: null, initial_L: null, initial_S: null, initial_T: null, k1: null, k2: null, L_init: null, pa: null, pl: null, ps: null, S_init: null, T_init: null, ud: null, ut: null, y: null};
    this.metadata.variableOrder = {S: null, A: null, D: null, L: null, T: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
