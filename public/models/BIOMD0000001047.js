export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell_1___plasma_membrane = 1;
    internal.cell_2___plasma_membrane = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_delta1;
    state[1] = internal.initial_delta2;
    state[2] = internal.initial_notch1;
    state[3] = internal.initial_notch2;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "b", "delta1_init", "delta2_init", "h", "kxk", "ModelValue_0", "ModelValue_1", "ModelValue_3", "ModelValue_4", "mu", "notch1_init", "notch2_init", "rho"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_0", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_1", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_3", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_4", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "notch1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "notch2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho", internal, 1, -Infinity, Infinity, false);
    internal.initial_delta1 = internal.delta1_init;
    internal.initial_delta2 = internal.delta2_init;
    internal.initial_notch1 = internal.notch1_init;
    internal.initial_notch2 = internal.notch2_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const delta1 = state[0];
    const delta2 = state[1];
    const notch1 = state[2];
    const notch2 = state[3];
    var F1 = Math.pow((delta1), (internal.ModelValue_4)) / (internal.ModelValue_0 + Math.pow((delta1), (internal.ModelValue_4)));
    var F2 = Math.pow((delta2), (internal.ModelValue_4)) / (internal.ModelValue_0 + Math.pow((delta2), (internal.ModelValue_4)));
    var G1 = 1 / (1 + internal.ModelValue_1 * Math.pow((notch1), (internal.ModelValue_3)));
    var G2 = 1 / (1 + internal.ModelValue_1 * Math.pow((notch2), (internal.ModelValue_3)));
    dstatedt[0] = 0 + 1 * internal.cell_1___plasma_membrane * (G1 / internal.rho) - 1 * internal.cell_1___plasma_membrane * (internal.rho * delta1);
    dstatedt[1] = 0 + 1 * internal.cell_2___plasma_membrane * (G2 / internal.rho) - 1 * internal.cell_2___plasma_membrane * (internal.rho * delta2);
    dstatedt[2] = 0 + 1 * internal.cell_1___plasma_membrane * (F2) - 1 * internal.cell_1___plasma_membrane * (internal.mu * notch1);
    dstatedt[3] = 0 + 1 * internal.cell_2___plasma_membrane * (F1) - 1 * internal.cell_2___plasma_membrane * (internal.mu * notch2);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "delta1", "delta2", "notch1", "notch2"];
    this.metadata.internalOrder = {a: null, b: null, cell_1___plasma_membrane: null, cell_2___plasma_membrane: null, delta1_init: null, delta2_init: null, h: null, initial_delta1: null, initial_delta2: null, initial_notch1: null, initial_notch2: null, kxk: null, ModelValue_0: null, ModelValue_1: null, ModelValue_3: null, ModelValue_4: null, mu: null, notch1_init: null, notch2_init: null, rho: null};
    this.metadata.variableOrder = {delta1: null, delta2: null, notch1: null, notch2: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
