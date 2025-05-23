export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.initial_V = - 50;
    internal.musclefibre = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(1).fill(0);
    state[0] = internal.initial_V;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["C", "gCa", "gK", "gL", "Iapp", "lambdaM_bar", "lambdaN_bar", "V1", "V2", "V3", "V4", "VCa", "VK", "VL"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "C", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gCa", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gK", internal, 8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gL", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Iapp", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambdaM_bar", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambdaN_bar", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V1", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V2", internal, 15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V3", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V4", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VCa", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VK", internal, - 70, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VL", internal, - 50, -Infinity, Infinity, false);
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const V = state[0];
    var M = (1 + Math.tanh((V - internal.V1) / internal.V2)) / 2;
    var N = (1 + Math.tanh((V - internal.V3) / internal.V4)) / 2;
    dstatedt[0] = (internal.Iapp - internal.gL * (V - internal.VL) - internal.gCa * M * (V - internal.VCa) - internal.gK * N * (V - internal.VK)) / internal.C;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "V"];
    this.metadata.internalOrder = {C: null, gCa: null, gK: null, gL: null, Iapp: null, initial_V: null, lambdaM_bar: null, lambdaN_bar: null, musclefibre: null, V1: null, V2: null, V3: null, V4: null, VCa: null, VK: null, VL: null};
    this.metadata.variableOrder = {V: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
