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
    var state = Array(3).fill(0);
    state[0] = internal.initial_Cdk1CycB;
    state[1] = internal.initial_APC;
    state[2] = internal.initial_CycB;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Acdc", "Adeg", "AK", "AP", "APC_init", "Awee", "Bcdc", "Bdeg", "BK", "BP", "Bwee", "Cdk1CycB_init", "CycB_init", "EC50apc", "EC50cdc", "EC50K", "EC50P", "EC50wee", "Ks", "n_apc", "n_cdc", "n_K", "n_P", "n_wee"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Acdc", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Adeg", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AK", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "AP", internal, 0.025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "APC_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Awee", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Bcdc", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Bdeg", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "BK", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "BP", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Bwee", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cdk1CycB_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CycB_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EC50apc", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EC50cdc", internal, 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EC50K", internal, 0.17999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EC50P", internal, 0.17999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EC50wee", internal, 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ks", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n_apc", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n_cdc", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n_K", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n_P", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n_wee", internal, 10, -Infinity, Infinity, false);
    internal.initial_APC = internal.APC_init;
    internal.initial_Cdk1CycB = internal.Cdk1CycB_init;
    internal.initial_CycB = internal.CycB_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Cdk1CycB = state[0];
    const APC = state[1];
    const CycB = state[2];
    dstatedt[1] = 0 + 1 * internal.Cell * ((internal.AK + internal.BK * Math.pow((Cdk1CycB / 200), (internal.n_K)) / (Math.pow((Cdk1CycB / 200), (internal.n_K)) + Math.pow((internal.EC50K), (internal.n_K)))) * (1 - APC) - (internal.AP + internal.BP * Math.pow((internal.EC50P), (internal.n_P)) / (Math.pow((APC), (internal.n_P)) + Math.pow((internal.EC50P), (internal.n_P)))) * APC);
    dstatedt[0] = 0 + 1 * internal.Cell * (internal.Ks - internal.Adeg * Cdk1CycB - internal.Bdeg * Math.pow((APC), (internal.n_apc)) * Cdk1CycB / (Math.pow((internal.EC50apc), (internal.n_apc)) + Math.pow((APC), (internal.n_apc))) + (internal.Acdc + internal.Bcdc * Math.pow((Cdk1CycB), (internal.n_cdc)) / (Math.pow((internal.EC50cdc), (internal.n_cdc)) + Math.pow((Cdk1CycB), (internal.n_cdc)))) * (CycB - Cdk1CycB) - (internal.Awee + internal.Bwee * Math.pow((internal.EC50wee), (internal.n_wee)) / (Math.pow((internal.EC50wee), (internal.n_wee)) + Math.pow((Cdk1CycB), (internal.n_wee)))) * Cdk1CycB);
    dstatedt[2] = 0 + 1 * internal.Cell * (internal.Ks - internal.Adeg * CycB - internal.Bdeg * Math.pow((APC), (internal.n_apc)) * CycB / (Math.pow((internal.EC50apc), (internal.n_apc)) + Math.pow((APC), (internal.n_apc))));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Cdk1CycB", "APC", "CycB"];
    this.metadata.internalOrder = {Acdc: null, Adeg: null, AK: null, AP: null, APC_init: null, Awee: null, Bcdc: null, Bdeg: null, BK: null, BP: null, Bwee: null, Cdk1CycB_init: null, Cell: null, CycB_init: null, EC50apc: null, EC50cdc: null, EC50K: null, EC50P: null, EC50wee: null, initial_APC: null, initial_Cdk1CycB: null, initial_CycB: null, Ks: null, n_apc: null, n_cdc: null, n_K: null, n_P: null, n_wee: null};
    this.metadata.variableOrder = {Cdk1CycB: null, APC: null, CycB: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
