export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_auxin;
    state[1] = internal.initial_IAA;
    state[2] = internal.initial_ARF;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha_no_reg", "alpha_reg", "ARF_init", "auxin_init", "beta", "IAA_init", "SARF", "Sauxin", "SIAA", "TARF", "Tauxin", "TIAA"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha_no_reg", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_reg", internal, 150, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ARF_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "auxin_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 0.0030000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "IAA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SARF", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Sauxin", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SIAA", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TARF", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tauxin", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TIAA", internal, 333, -Infinity, Infinity, false);
    internal.initial_ARF = internal.ARF_init;
    internal.initial_auxin = internal.auxin_init;
    internal.initial_IAA = internal.IAA_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const auxin = state[0];
    const IAA = state[1];
    const ARF = state[2];
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.SARF - ARF / internal.TARF) - 1 * internal.compartment * (internal.beta * IAA * ARF);
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.Sauxin - auxin / internal.Tauxin);
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.SIAA - IAA / internal.TIAA) - 1 * internal.compartment * (internal.alpha_no_reg * auxin * IAA);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "auxin", "IAA", "ARF"];
    this.metadata.internalOrder = {alpha_no_reg: null, alpha_reg: null, ARF_init: null, auxin_init: null, beta: null, compartment: null, IAA_init: null, initial_ARF: null, initial_auxin: null, initial_IAA: null, SARF: null, Sauxin: null, SIAA: null, TARF: null, Tauxin: null, TIAA: null};
    this.metadata.variableOrder = {auxin: null, IAA: null, ARF: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
