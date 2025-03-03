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
    state[0] = internal.initial_Cyclin;
    state[1] = internal.initial_Active_Cdc2_kinase;
    state[2] = internal.initial_Active_APC;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Active_APC_init", "Active_Cdc2_kinase_init", "Cyclin_init", "K1", "K3", "K4", "Kc", "kd", "Kd", "V2", "V4", "vd", "Vm1", "Vm3", "vs"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Active_APC_init", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Active_Cdc2_kinase_init", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cyclin_init", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1", internal, 0.002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K3", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K4", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kc", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd", internal, 0.045999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kd", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V2", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V4", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vd", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vm1", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vm3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vs", internal, 0.059999999999999998, -Infinity, Infinity, false);
    internal.initial_Active_APC = internal.Active_APC_init;
    internal.initial_Active_Cdc2_kinase = internal.Active_Cdc2_kinase_init;
    internal.initial_Cyclin = internal.Cyclin_init;
    internal.K2 = internal.K1;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Cyclin = state[0];
    const Active_Cdc2_kinase = state[1];
    const Active_APC = state[2];
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.vs) - 1 * internal.compartment * (internal.vd * Active_APC * (Cyclin / (internal.Kd + Cyclin)) + internal.kd * Cyclin);
    var V1 = Cyclin / (internal.Kc + Cyclin) * internal.Vm1;
    var V3 = Active_Cdc2_kinase * internal.Vm3;
    dstatedt[2] = 0 + 1 * internal.compartment * (V3 * ((1 - Active_APC) / (internal.K3 + (1 - Active_APC)))) - 1 * internal.compartment * (internal.V4 * (Active_APC / (internal.K4 + Active_APC)));
    dstatedt[1] = 0 + 1 * internal.compartment * (V1 * ((1 - Active_Cdc2_kinase) / (internal.K1 + (1 - Active_Cdc2_kinase)))) - 1 * internal.compartment * (internal.V2 * (Active_Cdc2_kinase / (internal.K2 + Active_Cdc2_kinase)));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Cyclin", "Active_Cdc2_kinase", "Active_APC"];
    this.metadata.internalOrder = {Active_APC_init: null, Active_Cdc2_kinase_init: null, compartment: null, Cyclin_init: null, initial_Active_APC: null, initial_Active_Cdc2_kinase: null, initial_Cyclin: null, K1: null, K2: null, K3: null, K4: null, Kc: null, kd: null, Kd: null, V2: null, V4: null, vd: null, Vm1: null, Vm3: null, vs: null};
    this.metadata.variableOrder = {Cyclin: null, Active_Cdc2_kinase: null, Active_APC: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
