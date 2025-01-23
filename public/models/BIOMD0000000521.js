export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.plama = 1;
    internal.tissue = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_C;
    state[1] = internal.initial_P;
    state[2] = internal.initial_Q;
    state[3] = internal.initial_Qp;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["C_init", "delta_QP", "gamma", "K", "k_PQ", "k_Qp_P", "KDE", "lambda_P", "P_init", "P0", "Q_init", "Q0", "Qp_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "C_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_QP", internal, 0.0086999999999999994, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 0.72899999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_PQ", internal, 0.0029499999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_Qp_P", internal, 0.0030999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KDE", internal, 0.23999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda_P", internal, 0.121, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P0", internal, 7.1299999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Q_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Q0", internal, 41.200000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Qp_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_C = internal.C_init;
    internal.initial_P = internal.P_init;
    internal.initial_Q = internal.Q_init;
    internal.initial_Qp = internal.Qp_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const C = state[0];
    const P = state[1];
    const Q = state[2];
    const Qp = state[3];
    dstatedt[0] = 0 + - internal.KDE * C;
    dstatedt[2] = 0 + internal.k_PQ - internal.gamma * C * internal.KDE * Q;
    dstatedt[3] = 0 + internal.gamma * C * internal.KDE * Q - internal.k_Qp_P * Qp - internal.delta_QP * Qp;
    var Pstar = P + Q + Qp;
    dstatedt[1] = 0 + internal.lambda_P * P * (1 - Pstar / internal.K) + internal.k_Qp_P * Qp - internal.k_PQ * P - internal.gamma * C * internal.KDE * P;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "C", "P", "Q", "Qp"];
    this.metadata.internalOrder = {C_init: null, delta_QP: null, gamma: null, initial_C: null, initial_P: null, initial_Q: null, initial_Qp: null, K: null, k_PQ: null, k_Qp_P: null, KDE: null, lambda_P: null, P_init: null, P0: null, plama: null, Q_init: null, Q0: null, Qp_init: null, tissue: null};
    this.metadata.variableOrder = {C: null, P: null, Q: null, Qp: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
