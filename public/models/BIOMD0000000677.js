export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Compartment = 1;
    internal.initial_L_ce = 0.69999999999999996;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(1).fill(0);
    state[0] = internal.initial_L_ce;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "alpha", "b", "ModelValue_1", "P_0"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 37.240000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha", internal, 1449.027, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 0.32500000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_1", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_0", internal, 144.90000000000001, -Infinity, Infinity, false);
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const L_ce = state[0];
    var L = ((t < 2 ? 1 : 0.94999999999999996));
    var L_se = L - L_ce;
    var P = internal.alpha * (L_se - internal.ModelValue_1);
    var v_ce = internal.b * (P - internal.P_0) / (P + internal.a);
    dstatedt[0] = v_ce;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "L_ce"];
    this.metadata.internalOrder = {a: null, alpha: null, b: null, Compartment: null, initial_L_ce: null, ModelValue_1: null, P_0: null};
    this.metadata.variableOrder = {L_ce: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
