export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.DHAP = 0.58999999999999997;
    internal.Gly = 15.1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(1).fill(0);
    state[0] = internal.initial_G3P;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["ADP", "ATP", "F16BP", "G3P_init", "K1adp", "K1atp", "K1dhap", "K1f16bp", "K1g3p", "K1nad", "K1nadh", "K2g3p", "K2phi", "Keq1", "NAD", "NADH", "Phi", "V2", "Vf1"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "ADP", internal, 2.1699999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ATP", internal, 2.3700000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "F16BP", internal, 6.0099999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G3P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1adp", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1atp", internal, 0.72999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1dhap", internal, 0.54000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1f16bp", internal, 4.7999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1g3p", internal, 1.2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1nad", internal, 0.93000000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1nadh", internal, 0.023, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2g3p", internal, 3.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2phi", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Keq1", internal, 10000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NAD", internal, 1.45, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NADH", internal, 1.8700000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Phi", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V2", internal, 53, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vf1", internal, 47, -Infinity, Infinity, false);
    internal.initial_G3P = internal.G3P_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const G3P = state[0];
    dstatedt[0] = 0 + 1 * internal.compartment * internal.Vf1 / (internal.K1nadh * internal.K1dhap) * (internal.NADH * internal.DHAP - internal.NAD * G3P / internal.Keq1) / ((1 + internal.F16BP / internal.K1f16bp + internal.ATP / internal.K1atp + internal.ADP / internal.K1adp) * (1 + internal.NADH / internal.K1nadh + internal.NAD / internal.K1nad) * (1 + internal.DHAP / internal.K1dhap + G3P / internal.K1g3p)) - 1 * internal.compartment * internal.V2 * G3P / internal.K2g3p / ((1 + G3P / internal.K2g3p) * (1 + internal.Phi / internal.K2phi));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "G3P"];
    this.metadata.internalOrder = {ADP: null, ATP: null, compartment: null, DHAP: null, F16BP: null, G3P_init: null, Gly: null, initial_G3P: null, K1adp: null, K1atp: null, K1dhap: null, K1f16bp: null, K1g3p: null, K1nad: null, K1nadh: null, K2g3p: null, K2phi: null, Keq1: null, NAD: null, NADH: null, Phi: null, V2: null, Vf1: null};
    this.metadata.variableOrder = {G3P: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
