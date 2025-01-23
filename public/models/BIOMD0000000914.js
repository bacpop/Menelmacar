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
    var state = Array(5).fill(0);
    state[0] = internal.initial_VAC;
    state[1] = internal.initial_TRAN;
    state[2] = internal.initial_SVAC;
    state[3] = internal.initial_Ts;
    state[4] = internal.initial_REG;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["gamma", "k1", "k2_pop1", "k2_pop2", "k3", "k4", "lamda", "P", "REG_50", "REG_init", "Residual_error", "SVAC_init", "TRAN_init", "Ts_init", "VAC_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "gamma", internal, 5.2400000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.090700000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2_pop1", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2_pop2", internal, 0.090700000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 1.0800000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0.039, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lamda", internal, 0.35399999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P", internal, 0.84399999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "REG_50", internal, 3.1800000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "REG_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Residual_error", internal, 0.20599999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SVAC_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TRAN_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ts_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VAC_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_REG = internal.REG_init;
    internal.initial_SVAC = internal.SVAC_init;
    internal.initial_TRAN = internal.TRAN_init;
    internal.initial_Ts = internal.Ts_init;
    internal.initial_VAC = internal.VAC_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const VAC = state[0];
    const TRAN = state[1];
    const SVAC = state[2];
    const Ts = state[3];
    const REG = state[4];
    dstatedt[4] = 0 + 1 * internal.compartment * (internal.k4 * Ts) - 1 * internal.compartment * (internal.k4 * REG);
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.k1 * TRAN) - 1 * internal.compartment * (internal.k2_pop2 * SVAC);
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.k1 * VAC) - 1 * internal.compartment * (internal.k1 * TRAN);
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.gamma) - 1 * internal.compartment * (internal.k3 * (Math.pow((internal.REG_50), (internal.gamma)) / (Math.pow((internal.REG_50), (internal.gamma)) + Math.pow((REG), (internal.gamma)))) * Ts * SVAC);
    dstatedt[0] = 0 - 1 * internal.compartment * (internal.k1 * VAC);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "VAC", "TRAN", "SVAC", "Ts", "REG"];
    this.metadata.internalOrder = {compartment: null, gamma: null, initial_REG: null, initial_SVAC: null, initial_TRAN: null, initial_Ts: null, initial_VAC: null, k1: null, k2_pop1: null, k2_pop2: null, k3: null, k4: null, lamda: null, P: null, REG_50: null, REG_init: null, Residual_error: null, SVAC_init: null, TRAN_init: null, Ts_init: null, VAC_init: null};
    this.metadata.variableOrder = {VAC: null, TRAN: null, SVAC: null, Ts: null, REG: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
