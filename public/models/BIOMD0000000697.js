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
    var state = Array(14).fill(0);
    state[0] = internal.initial_PCdk2_CycE;
    state[1] = internal.initial_Cdk2_CycE;
    state[2] = internal.initial_Wee1_a;
    state[3] = internal.initial_Cdk2_CycErem;
    state[4] = internal.initial_PCdk2_CycErem;
    state[5] = internal.initial_Deg_a;
    state[6] = internal.initial_Xic;
    state[7] = internal.initial_Xic_Cdk2_CycE;
    state[8] = internal.initial_Xic_PCdk2_CycE;
    state[9] = internal.initial_Xic_Cdk2_CycErem;
    state[10] = internal.initial_Xic_PCdk2_CycErem;
    state[11] = internal.initial_Xicrem;
    state[12] = internal.initial_Kin_a;
    state[13] = internal.initial_Wee1_total;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Cdk2_CycE_init", "Cdk2_CycErem_init", "Deg_a_init", "epsilon", "Jiact", "Jiinact", "Jwact", "Jwinact", "k25A", "kassoc", "kdact", "kdissoc", "kedeg", "kiact", "kiinact", "Kin_a_init", "koff", "kon", "kwact", "kwee", "kwinact", "kxdeg", "L", "n", "PCdk2_CycE_init", "PCdk2_CycErem_init", "theta", "Wee1_a_init", "Wee1_total_init", "Xic_Cdk2_CycE_init", "Xic_Cdk2_CycErem_init", "Xic_init", "Xic_PCdk2_CycE_init", "Xic_PCdk2_CycErem_init", "Xicrem_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Cdk2_CycE_init", internal, 0.059999999999999901, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cdk2_CycErem_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Deg_a_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "epsilon", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Jiact", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Jiinact", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Jwact", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Jwinact", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k25A", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kassoc", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdact", internal, 0.023, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdissoc", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kedeg", internal, 0.017000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kiact", internal, 0.14999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kiinact", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kin_a_init", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "koff", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kon", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kwact", internal, 0.75, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kwee", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kwinact", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxdeg", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "L", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PCdk2_CycE_init", internal, 0.93999999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PCdk2_CycErem_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "theta", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Wee1_a_init", internal, 1.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Wee1_total_init", internal, 7.9999999999999796, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Xic_Cdk2_CycE_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Xic_Cdk2_CycErem_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Xic_init", internal, 2.99999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Xic_PCdk2_CycE_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Xic_PCdk2_CycErem_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Xicrem_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_Cdk2_CycE = internal.Cdk2_CycE_init;
    internal.initial_Cdk2_CycErem = internal.Cdk2_CycErem_init;
    internal.initial_Deg_a = internal.Deg_a_init;
    internal.initial_Kin_a = internal.Kin_a_init;
    internal.initial_PCdk2_CycE = internal.PCdk2_CycE_init;
    internal.initial_PCdk2_CycErem = internal.PCdk2_CycErem_init;
    internal.initial_Wee1_a = internal.Wee1_a_init;
    internal.initial_Wee1_total = internal.Wee1_total_init;
    internal.initial_Xic = internal.Xic_init;
    internal.initial_Xic_Cdk2_CycE = internal.Xic_Cdk2_CycE_init;
    internal.initial_Xic_Cdk2_CycErem = internal.Xic_Cdk2_CycErem_init;
    internal.initial_Xic_PCdk2_CycE = internal.Xic_PCdk2_CycE_init;
    internal.initial_Xic_PCdk2_CycErem = internal.Xic_PCdk2_CycErem_init;
    internal.initial_Xicrem = internal.Xicrem_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const PCdk2_CycE = state[0];
    const Cdk2_CycE = state[1];
    const Wee1_a = state[2];
    const Cdk2_CycErem = state[3];
    const PCdk2_CycErem = state[4];
    const Deg_a = state[5];
    const Xic = state[6];
    const Xic_Cdk2_CycE = state[7];
    const Xic_PCdk2_CycE = state[8];
    const Xic_Cdk2_CycErem = state[9];
    const Xic_PCdk2_CycErem = state[10];
    const Xicrem = state[11];
    const Kin_a = state[12];
    const Wee1_total = state[13];
    dstatedt[13] = 0;
    dstatedt[12] = 0 + 1 * internal.compartment * (internal.kiact * (1 - Kin_a) / (internal.Jiact + 1 - Kin_a) - internal.kiinact * Cdk2_CycE * Kin_a / (internal.Jiinact + Kin_a));
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.kwact * (Wee1_total - Wee1_a) / (internal.Jwact + Wee1_total - Wee1_a) - internal.kwinact * Kin_a * Wee1_a / (internal.Jwinact + Wee1_a));
    dstatedt[6] = 0 - 1 * internal.compartment * internal.kassoc * Xic * Cdk2_CycE - 1 * internal.compartment * internal.kassoc * Xic * Cdk2_CycErem + 1 * internal.compartment * internal.kdissoc * Xic_Cdk2_CycE + 1 * internal.compartment * internal.kdissoc * Xic_Cdk2_CycErem - 1 * internal.compartment * internal.kassoc * Xic * PCdk2_CycE - 1 * internal.compartment * internal.kassoc * Xic * PCdk2_CycErem + 1 * internal.compartment * internal.kdissoc * Xic_PCdk2_CycE + 1 * internal.compartment * internal.kdissoc * Xic_PCdk2_CycErem;
    dstatedt[11] = 0 + 1 * internal.compartment * (internal.kedeg * Xic_PCdk2_CycErem * Deg_a) + 1 * internal.compartment * (internal.kedeg * Xic_Cdk2_CycErem * Deg_a) - 1 * internal.compartment * internal.kxdeg * Xicrem;
    var pool = Cdk2_CycErem + PCdk2_CycErem + Xic_Cdk2_CycErem + Xic_PCdk2_CycErem;
    var x = Cdk2_CycErem - internal.theta;
    var Heav = ((x < 0 ? 0 : 1));
    var phi = (internal.epsilon + Math.pow((pool), (internal.n))) / (Math.pow((internal.L), (internal.n)) + Math.pow((pool), (internal.n)));
    dstatedt[1] = 0 - 1 * internal.compartment * internal.kassoc * Xic * Cdk2_CycE + 1 * internal.compartment * internal.kdissoc * Xic_Cdk2_CycE + 1 * internal.compartment * internal.koff * Cdk2_CycErem - 1 * internal.compartment * (internal.kon * phi * Cdk2_CycE) + 1 * internal.compartment * internal.k25A * PCdk2_CycE - 1 * internal.compartment * (internal.kwee * Wee1_a * Cdk2_CycE) - 1 * internal.compartment * (internal.kiact * (1 - Kin_a) / (internal.Jiact + 1 - Kin_a) - internal.kiinact * Cdk2_CycE * Kin_a / (internal.Jiinact + Kin_a)) + 1 * internal.compartment * (internal.kiact * (1 - Kin_a) / (internal.Jiact + 1 - Kin_a) - internal.kiinact * Cdk2_CycE * Kin_a / (internal.Jiinact + Kin_a));
    dstatedt[3] = 0 - 1 * internal.compartment * internal.kassoc * Xic * Cdk2_CycErem + 1 * internal.compartment * internal.kdissoc * Xic_Cdk2_CycErem - 1 * internal.compartment * internal.koff * Cdk2_CycErem + 1 * internal.compartment * (internal.kon * phi * Cdk2_CycE) + 1 * internal.compartment * internal.kxdeg * Xic_Cdk2_CycErem - 1 * internal.compartment * (internal.kedeg * Cdk2_CycErem * Deg_a);
    dstatedt[5] = 0 + 1 * internal.compartment * (internal.kdact * Heav);
    dstatedt[0] = 0 + 1 * internal.compartment * internal.koff * PCdk2_CycErem - 1 * internal.compartment * (internal.kon * phi * PCdk2_CycE) - 1 * internal.compartment * internal.k25A * PCdk2_CycE + 1 * internal.compartment * (internal.kwee * Wee1_a * Cdk2_CycE) - 1 * internal.compartment * internal.kassoc * Xic * PCdk2_CycE + 1 * internal.compartment * internal.kdissoc * Xic_PCdk2_CycE;
    dstatedt[4] = 0 - 1 * internal.compartment * internal.koff * PCdk2_CycErem + 1 * internal.compartment * (internal.kon * phi * PCdk2_CycE) + 1 * internal.compartment * internal.kxdeg * Xic_PCdk2_CycErem - 1 * internal.compartment * internal.kassoc * Xic * PCdk2_CycErem + 1 * internal.compartment * internal.kdissoc * Xic_PCdk2_CycErem - 1 * internal.compartment * (internal.kedeg * PCdk2_CycErem * Deg_a);
    dstatedt[7] = 0 + 1 * internal.compartment * internal.kassoc * Xic * Cdk2_CycE - 1 * internal.compartment * internal.kdissoc * Xic_Cdk2_CycE + 1 * internal.compartment * internal.k25A * Xic_PCdk2_CycE - 1 * internal.compartment * (internal.kwee * Wee1_a * Xic_Cdk2_CycE) + 1 * internal.compartment * internal.koff * Xic_Cdk2_CycErem - 1 * internal.compartment * (internal.kon * phi * Xic_Cdk2_CycE);
    dstatedt[9] = 0 + 1 * internal.compartment * internal.kassoc * Xic * Cdk2_CycErem - 1 * internal.compartment * internal.kdissoc * Xic_Cdk2_CycErem - 1 * internal.compartment * internal.kxdeg * Xic_Cdk2_CycErem - 1 * internal.compartment * (internal.kedeg * Xic_Cdk2_CycErem * Deg_a) - 1 * internal.compartment * internal.koff * Xic_Cdk2_CycErem + 1 * internal.compartment * (internal.kon * phi * Xic_Cdk2_CycE);
    dstatedt[8] = 0 - 1 * internal.compartment * internal.k25A * Xic_PCdk2_CycE + 1 * internal.compartment * (internal.kwee * Wee1_a * Xic_Cdk2_CycE) + 1 * internal.compartment * internal.kassoc * Xic * PCdk2_CycE - 1 * internal.compartment * internal.kdissoc * Xic_PCdk2_CycE + 1 * internal.compartment * internal.koff * Xic_PCdk2_CycErem - 1 * internal.compartment * (internal.kon * phi * Xic_PCdk2_CycE);
    dstatedt[10] = 0 - 1 * internal.compartment * internal.kxdeg * Xic_PCdk2_CycErem - 1 * internal.compartment * (internal.kedeg * Xic_PCdk2_CycErem * Deg_a) + 1 * internal.compartment * internal.kassoc * Xic * PCdk2_CycErem - 1 * internal.compartment * internal.kdissoc * Xic_PCdk2_CycErem - 1 * internal.compartment * internal.koff * Xic_PCdk2_CycErem + 1 * internal.compartment * (internal.kon * phi * Xic_PCdk2_CycE);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "PCdk2_CycE", "Cdk2_CycE", "Wee1_a", "Cdk2_CycErem", "PCdk2_CycErem", "Deg_a", "Xic", "Xic_Cdk2_CycE", "Xic_PCdk2_CycE", "Xic_Cdk2_CycErem", "Xic_PCdk2_CycErem", "Xicrem", "Kin_a", "Wee1_total"];
    this.metadata.internalOrder = {Cdk2_CycE_init: null, Cdk2_CycErem_init: null, compartment: null, Deg_a_init: null, epsilon: null, initial_Cdk2_CycE: null, initial_Cdk2_CycErem: null, initial_Deg_a: null, initial_Kin_a: null, initial_PCdk2_CycE: null, initial_PCdk2_CycErem: null, initial_Wee1_a: null, initial_Wee1_total: null, initial_Xic: null, initial_Xic_Cdk2_CycE: null, initial_Xic_Cdk2_CycErem: null, initial_Xic_PCdk2_CycE: null, initial_Xic_PCdk2_CycErem: null, initial_Xicrem: null, Jiact: null, Jiinact: null, Jwact: null, Jwinact: null, k25A: null, kassoc: null, kdact: null, kdissoc: null, kedeg: null, kiact: null, kiinact: null, Kin_a_init: null, koff: null, kon: null, kwact: null, kwee: null, kwinact: null, kxdeg: null, L: null, n: null, PCdk2_CycE_init: null, PCdk2_CycErem_init: null, theta: null, Wee1_a_init: null, Wee1_total_init: null, Xic_Cdk2_CycE_init: null, Xic_Cdk2_CycErem_init: null, Xic_init: null, Xic_PCdk2_CycE_init: null, Xic_PCdk2_CycErem_init: null, Xicrem_init: null};
    this.metadata.variableOrder = {PCdk2_CycE: null, Cdk2_CycE: null, Wee1_a: null, Cdk2_CycErem: null, PCdk2_CycErem: null, Deg_a: null, Xic: null, Xic_Cdk2_CycE: null, Xic_PCdk2_CycE: null, Xic_Cdk2_CycErem: null, Xic_PCdk2_CycErem: null, Xicrem: null, Kin_a: null, Wee1_total: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
