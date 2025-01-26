export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.geometry = 9.9999999999999998e-13;
    internal.kb = 25;
    internal.kf = 19000000;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_CDK2cycA;
    state[1] = internal.initial_CyclinA;
    state[2] = internal.initial_Cdk2;
    state[3] = internal.initial_CDK2cycA_star_;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["basal_fluorescence", "Cdk2_init", "CDK2cycA_init", "CDK2cycA_star__init", "CyclinA_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "basal_fluorescence", internal, 1.2121064814814799, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cdk2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CDK2cycA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CDK2cycA_star__init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CyclinA_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_Cdk2 = internal.Cdk2_init;
    internal.initial_CDK2cycA = internal.CDK2cycA_init;
    internal.initial_CDK2cycA_star_ = internal.CDK2cycA_star__init;
    internal.initial_CyclinA = internal.CyclinA_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const CDK2cycA = state[0];
    const CyclinA = state[1];
    const Cdk2 = state[2];
    const CDK2cycA_star_ = state[3];
    dstatedt[2] = 0 - 1 * internal.kf * Cdk2 * CyclinA * internal.geometry - internal.kb * CDK2cycA * internal.geometry;
    dstatedt[0] = 0 + 1 * internal.kf * Cdk2 * CyclinA * internal.geometry - internal.kb * CDK2cycA * internal.geometry - 1 * internal.kf * CDK2cycA * internal.geometry - internal.kb * CDK2cycA_star_ * internal.geometry;
    dstatedt[3] = 0 + 1 * internal.kf * CDK2cycA * internal.geometry - internal.kb * CDK2cycA_star_ * internal.geometry;
    dstatedt[1] = 0 - 1 * internal.kf * Cdk2 * CyclinA * internal.geometry - internal.kb * CDK2cycA * internal.geometry;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "CDK2cycA", "CyclinA", "Cdk2", "CDK2cycA_star_"];
    this.metadata.internalOrder = {basal_fluorescence: null, Cdk2_init: null, CDK2cycA_init: null, CDK2cycA_star__init: null, CyclinA_init: null, geometry: null, initial_Cdk2: null, initial_CDK2cycA: null, initial_CDK2cycA_star_: null, initial_CyclinA: null, kb: null, kf: null};
    this.metadata.variableOrder = {CDK2cycA: null, CyclinA: null, Cdk2: null, CDK2cycA_star_: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
