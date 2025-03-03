export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Cell = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(2).fill(0);
    state[0] = internal.initial_Agonist_1;
    state[1] = internal.initial_Agonist_2;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Agonist_1_init", "Agonist_2_init", "Em", "K", "K1", "K2", "m1", "m2", "n1", "n2", "n3"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Agonist_1_init", internal, 1e-14, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Agonist_2_init", internal, 1.0000000000000001e-15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Em", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1", internal, 1.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2", internal, 1.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m1", internal, 1000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m2", internal, 1000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n3", internal, 0.33000000000000002, -Infinity, Infinity, false);
    internal.initial_Agonist_1 = internal.Agonist_1_init;
    internal.initial_Agonist_2 = internal.Agonist_2_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    dstatedt[0] = 0;
    dstatedt[1] = 0;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Agonist_1", "Agonist_2"];
    this.metadata.internalOrder = {Agonist_1_init: null, Agonist_2_init: null, Cell: null, Em: null, initial_Agonist_1: null, initial_Agonist_2: null, K: null, K1: null, K2: null, m1: null, m2: null, n1: null, n2: null, n3: null};
    this.metadata.variableOrder = {Agonist_1: null, Agonist_2: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
