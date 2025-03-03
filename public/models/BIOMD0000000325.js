export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell = 1;
    internal.L = 0.10000000000000001;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(5).fill(0);
    state[0] = internal.initial_R;
    state[1] = internal.initial_C;
    state[2] = internal.initial_I;
    state[3] = internal.initial_X;
    state[4] = internal.initial_A;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A_init", "BI", "BR", "C_init", "I_init", "k1", "k2", "k3", "KD", "kdegA", "kdegC", "kdegI", "kdegR", "kdegX", "koff", "kon", "R_init", "Rs", "TFs", "X_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "BI", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "BR", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 45, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KD", internal, 200, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdegA", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdegC", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdegI", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdegR", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdegX", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "koff", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kon", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rs", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TFs", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_A = internal.A_init;
    internal.initial_C = internal.C_init;
    internal.initial_I = internal.I_init;
    internal.initial_R = internal.R_init;
    internal.initial_X = internal.X_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const R = state[0];
    const C = state[1];
    const I = state[2];
    const X = state[3];
    const A = state[4];
    dstatedt[4] = 0 + 1 * internal.cell * internal.k3 * X - 1 * internal.cell * internal.kdegA * A;
    dstatedt[1] = 0 + 1 * internal.cell * (internal.kon * internal.L * R - internal.koff * C) - 1 * internal.cell * internal.kdegC * C - 1 * internal.cell * (internal.k1 * C * I - internal.k2 * X) + 1 * internal.cell * internal.k3 * X;
    dstatedt[2] = 0 - 1 * internal.cell * (internal.k1 * C * I - internal.k2 * X) + 1 * internal.cell * (internal.BI + internal.TFs * A / (internal.KD + A)) - 1 * internal.cell * internal.kdegI * I;
    dstatedt[0] = 0 + 1 * internal.cell * (internal.BR + internal.Rs * A / (internal.KD + A)) - 1 * internal.cell * internal.kdegR * R - 1 * internal.cell * (internal.kon * internal.L * R - internal.koff * C);
    dstatedt[3] = 0 + 1 * internal.cell * (internal.k1 * C * I - internal.k2 * X) - 1 * internal.cell * internal.k3 * X - 1 * internal.cell * internal.kdegX * X;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "R", "C", "I", "X", "A"];
    this.metadata.internalOrder = {A_init: null, BI: null, BR: null, C_init: null, cell: null, I_init: null, initial_A: null, initial_C: null, initial_I: null, initial_R: null, initial_X: null, k1: null, k2: null, k3: null, KD: null, kdegA: null, kdegC: null, kdegI: null, kdegR: null, kdegX: null, koff: null, kon: null, L: null, R_init: null, Rs: null, TFs: null, X_init: null};
    this.metadata.variableOrder = {R: null, C: null, I: null, X: null, A: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
