export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.ADP = 2.1699999999999999;
    internal.ATP = 2.3700000000000001;
    internal.compartment = 1;
    internal.F16BP = 6.0099999999999998;
    internal.K1adp = 2;
    internal.K1atp = 0.72999999999999998;
    internal.K1dhap = 0.54000000000000004;
    internal.K1f16bp = 4.7999999999999998;
    internal.K1g3p = 1.2;
    internal.K1nad = 0.93000000000000005;
    internal.K1nadh = 0.023;
    internal.K2g3p = 3.5;
    internal.K2phi = 1;
    internal.Keq1 = 10000;
    internal.NAD = 1.45;
    internal.NADH = 1.8700000000000001;
    internal.Phi = 1;
    internal.V2 = 53;
    internal.Vf1 = 47;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_G3P;
    state[1] = internal.initial_Gly;
    state[2] = internal.initial_DHAP;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["DHAP_init", "G3P_init", "Gly_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "DHAP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G3P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Gly_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_DHAP = internal.DHAP_init;
    internal.initial_G3P = internal.G3P_init;
    internal.initial_Gly = internal.Gly_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const G3P = state[0];
    const DHAP = state[2];
    dstatedt[2] = 0;
    dstatedt[1] = 0;
    dstatedt[0] = 0 + 1 * internal.compartment * internal.Vf1 / (internal.K1nadh * internal.K1dhap) * (internal.NADH * DHAP - internal.NAD * G3P / internal.Keq1) / ((1 + internal.F16BP / internal.K1f16bp + internal.ATP / internal.K1atp + internal.ADP / internal.K1adp) * (1 + internal.NADH / internal.K1nadh + internal.NAD / internal.K1nad) * (1 + DHAP / internal.K1dhap + G3P / internal.K1g3p)) - 1 * internal.compartment * internal.V2 * G3P / internal.K2g3p / ((1 + G3P / internal.K2g3p) * (1 + internal.Phi / internal.K2phi));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "G3P", "Gly", "DHAP"];
    this.metadata.internalOrder = {ADP: null, ATP: null, compartment: null, DHAP_init: null, F16BP: null, G3P_init: null, Gly_init: null, initial_DHAP: null, initial_G3P: null, initial_Gly: null, K1adp: null, K1atp: null, K1dhap: null, K1f16bp: null, K1g3p: null, K1nad: null, K1nadh: null, K2g3p: null, K2phi: null, Keq1: null, NAD: null, NADH: null, Phi: null, V2: null, Vf1: null};
    this.metadata.variableOrder = {G3P: null, Gly: null, DHAP: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
