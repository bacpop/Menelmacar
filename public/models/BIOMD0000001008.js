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
    var M_tot = internal.initial_Mediator_A1 + internal.initial_Mediator_A2;
    var Mediator_A1_init = internal.m1 * Math.pow((internal.initial_Agonist_1), (internal.n1)) / (Math.pow((internal.K1), (internal.n1)) + Math.pow((internal.initial_Agonist_1), (internal.n1)));
    var Mediator_A2_init = internal.m2 * Math.pow((internal.initial_Agonist_2), (internal.n2)) / (Math.pow((internal.K2), (internal.n2)) + Math.pow((internal.initial_Agonist_2), (internal.n2)));
    var Effect_init = internal.Em * Math.pow((M_tot), (internal.n3)) / (Math.pow((internal.K), (internal.n3)) + Math.pow((M_tot), (internal.n3)));
    internal.initial_Mediator_A1 = Mediator_A1_init;
    internal.initial_Mediator_A2 = Mediator_A2_init;
    internal.initial_Effect = Effect_init;
    var state = Array(5).fill(0);
    state[0] = internal.initial_Mediator_A1;
    state[1] = internal.initial_Mediator_A2;
    state[2] = internal.initial_Agonist_1;
    state[3] = internal.initial_Agonist_2;
    state[4] = internal.initial_Effect;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Agonist_1_init", "Agonist_2_init", "Em", "K", "K1", "K2", "m1", "m2", "n1", "n2", "n3"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Agonist_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Agonist_2_init", internal, 0, -Infinity, Infinity, false);
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
    dstatedt[2] = 0;
    dstatedt[3] = 0;
    dstatedt[4] = 0 + 0;
    dstatedt[0] = 0 + 0;
    dstatedt[1] = 0 + 0;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Mediator_A1", "Mediator_A2", "Agonist_1", "Agonist_2", "Effect"];
    this.metadata.internalOrder = {Agonist_1_init: null, Agonist_2_init: null, Cell: null, Em: null, initial_Agonist_1: null, initial_Agonist_2: null, initial_Effect: null, initial_Mediator_A1: null, initial_Mediator_A2: null, K: null, K1: null, K2: null, m1: null, m2: null, n1: null, n2: null, n3: null};
    this.metadata.variableOrder = {Mediator_A1: null, Mediator_A2: null, Agonist_1: null, Agonist_2: null, Effect: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
