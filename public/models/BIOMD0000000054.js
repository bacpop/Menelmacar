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
    var state = Array(3).fill(0);
    state[0] = internal.initial_I;
    state[1] = internal.initial_E;
    state[2] = internal.initial_A;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A_init", "E_init", "I_init", "J", "kxk", "n", "P", "U", "W", "W2", "W3"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A_init", internal, 1.1100000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_init", internal, 2.1000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "J", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, - 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 1.2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P", internal, 0.121, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "U", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "W", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "W2", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "W3", internal, 13.48, -Infinity, Infinity, false);
    internal.initial_A = internal.A_init;
    internal.initial_E = internal.E_init;
    internal.initial_I = internal.I_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const I = state[0];
    const E = state[1];
    const A = state[2];
    var M = (7 * A - 3 * E - Math.pow((6 * A * E - 3 * Math.pow((E), (2)) + Math.pow((A), (2))), (0.5))) / 6;
    var T = (A + 3 * E - Math.pow((6 * A * E - 3 * Math.pow((E), (2)) + Math.pow((A), (2))), (0.5))) / 6;
    dstatedt[2] = 0 + 1 * internal.cell * internal.U * (1 - internal.W * Math.pow((T), (internal.n)) * Math.pow((M), (internal.kxk)));
    dstatedt[1] = 0 - 1 * internal.cell * internal.W2 * I * T + 1 * internal.cell * internal.W3 * Math.pow((T), (0.52000000000000002)) * Math.pow((M), (0.40999999999999998)) - 1 * internal.cell * 2 * internal.U;
    dstatedt[0] = 0 + 1 * internal.cell * internal.P * internal.J - 3 * internal.cell * internal.W2 * I * T;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "I", "E", "A"];
    this.metadata.internalOrder = {A_init: null, cell: null, E_init: null, I_init: null, initial_A: null, initial_E: null, initial_I: null, J: null, kxk: null, n: null, P: null, U: null, W: null, W2: null, W3: null};
    this.metadata.variableOrder = {I: null, E: null, A: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
