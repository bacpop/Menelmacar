export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Cytoplasm = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(5).fill(0);
    state[0] = internal.initial_Mad1_CMad2;
    state[1] = internal.initial_OMad2;
    state[2] = internal.initial_Mad1_CMad2_OMad2;
    state[3] = internal.initial_Cdc20;
    state[4] = internal.initial_Cdc20_CMad2;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha_T", "beta_T", "Cdc20_CMad2_init", "Cdc20_init", "const_val_0", "const_val_1", "eta_T", "gamma_T", "Mad1_CMad2_init", "Mad1_CMad2_OMad2_init", "OMad2_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha_T", internal, 200000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta_T", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cdc20_CMad2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cdc20_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "const_val_0", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "const_val_1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "eta_T", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_T", internal, 1000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Mad1_CMad2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Mad1_CMad2_OMad2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "OMad2_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_Cdc20 = internal.Cdc20_init;
    internal.initial_Cdc20_CMad2 = internal.Cdc20_CMad2_init;
    internal.initial_Mad1_CMad2 = internal.Mad1_CMad2_init;
    internal.initial_Mad1_CMad2_OMad2 = internal.Mad1_CMad2_OMad2_init;
    internal.initial_OMad2 = internal.OMad2_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Mad1_CMad2 = state[0];
    const OMad2 = state[1];
    const Mad1_CMad2_OMad2 = state[2];
    const Cdc20 = state[3];
    const Cdc20_CMad2 = state[4];
    var u = (t > 2000 ? internal.const_val_0 : 1);
    dstatedt[3] = 0 - 1 * internal.Cytoplasm * u * internal.gamma_T * Mad1_CMad2_OMad2 * Cdc20 + 1 * internal.Cytoplasm * internal.eta_T * Cdc20_CMad2;
    dstatedt[4] = 0 + 1 * internal.Cytoplasm * u * internal.gamma_T * Mad1_CMad2_OMad2 * Cdc20 - 1 * internal.Cytoplasm * internal.eta_T * Cdc20_CMad2;
    dstatedt[0] = 0 - 1 * internal.Cytoplasm * (u * internal.alpha_T * Mad1_CMad2 * OMad2 - internal.beta_T * Mad1_CMad2_OMad2) + 1 * internal.Cytoplasm * u * internal.gamma_T * Mad1_CMad2_OMad2 * Cdc20;
    dstatedt[2] = 0 + 1 * internal.Cytoplasm * (u * internal.alpha_T * Mad1_CMad2 * OMad2 - internal.beta_T * Mad1_CMad2_OMad2) - 1 * internal.Cytoplasm * u * internal.gamma_T * Mad1_CMad2_OMad2 * Cdc20;
    dstatedt[1] = 0 - 1 * internal.Cytoplasm * (u * internal.alpha_T * Mad1_CMad2 * OMad2 - internal.beta_T * Mad1_CMad2_OMad2) + 1 * internal.Cytoplasm * internal.eta_T * Cdc20_CMad2;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Mad1_CMad2", "OMad2", "Mad1_CMad2_OMad2", "Cdc20", "Cdc20_CMad2"];
    this.metadata.internalOrder = {alpha_T: null, beta_T: null, Cdc20_CMad2_init: null, Cdc20_init: null, const_val_0: null, const_val_1: null, Cytoplasm: null, eta_T: null, gamma_T: null, initial_Cdc20: null, initial_Cdc20_CMad2: null, initial_Mad1_CMad2: null, initial_Mad1_CMad2_OMad2: null, initial_OMad2: null, Mad1_CMad2_init: null, Mad1_CMad2_OMad2_init: null, OMad2_init: null};
    this.metadata.variableOrder = {Mad1_CMad2: null, OMad2: null, Mad1_CMad2_OMad2: null, Cdc20: null, Cdc20_CMad2: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
