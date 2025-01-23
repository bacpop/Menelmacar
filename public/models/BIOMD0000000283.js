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
    var state = Array(4).fill(0);
    state[0] = internal.initial_X;
    state[1] = internal.initial_E;
    state[2] = internal.initial_P;
    state[3] = internal.initial_Q;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["E_init", "K2", "K3", "P_init", "Q_init", "X_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "E_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K3", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Q_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_E = internal.E_init;
    internal.initial_P = internal.P_init;
    internal.initial_Q = internal.Q_init;
    internal.initial_X = internal.X_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const X = state[0];
    const E = state[1];
    const P = state[2];
    dstatedt[1] = 0 - 1 * internal.cell * (E * X - internal.K2 * P) + 1 * internal.cell * internal.K3 * P;
    dstatedt[2] = 0 + 1 * internal.cell * (E * X - internal.K2 * P) - 1 * internal.cell * internal.K3 * P;
    dstatedt[3] = 0 + 1 * internal.cell * internal.K3 * P;
    dstatedt[0] = 0 - 1 * internal.cell * (E * X - internal.K2 * P);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "X", "E", "P", "Q"];
    this.metadata.internalOrder = {cell: null, E_init: null, initial_E: null, initial_P: null, initial_Q: null, initial_X: null, K2: null, K3: null, P_init: null, Q_init: null, X_init: null};
    this.metadata.variableOrder = {X: null, E: null, P: null, Q: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
