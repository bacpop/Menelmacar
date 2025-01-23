export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell = 1;
    internal.external = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(8).fill(0);
    state[0] = internal.initial_X0;
    state[1] = internal.initial_X1;
    state[2] = internal.initial_X2;
    state[3] = internal.initial_X3;
    state[4] = internal.initial_X4;
    state[5] = internal.initial_X5;
    state[6] = internal.initial_X6;
    state[7] = internal.initial_X7;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["heat_shock", "X0_init", "X1_init", "X2_init", "X3_init", "X4_init", "X5_init", "X6_init", "X7_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "heat_shock", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X4_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X5_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X6_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X7_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_X0 = internal.X0_init;
    internal.initial_X1 = internal.X1_init;
    internal.initial_X2 = internal.X2_init;
    internal.initial_X3 = internal.X3_init;
    internal.initial_X4 = internal.X4_init;
    internal.initial_X5 = internal.X5_init;
    internal.initial_X6 = internal.X6_init;
    internal.initial_X7 = internal.X7_init;
    internal.X10 = ((internal.heat_shock == 1 ? 1 : 1));
    internal.X11 = ((internal.heat_shock == 6 ? 1 : 1));
    internal.X12f = ((internal.heat_shock == 16 ? 1 : 1));
    internal.X12r = ((internal.heat_shock == 1 ? 16 : 1));
    internal.X13 = ((internal.heat_shock == 1 ? 16 : 1));
    internal.X14 = ((internal.heat_shock == 16 ? 1 : 1));
    internal.X15f = ((internal.heat_shock == 50 ? 1 : 1));
    internal.X15r = ((internal.heat_shock == 1 ? 50 : 1));
    internal.X16 = ((internal.heat_shock == 1 ? 16 : 1));
    internal.X17 = ((internal.heat_shock == 12 ? 1 : 1));
    internal.X18 = ((internal.heat_shock == 1 ? 18 : 1));
    internal.X19 = ((internal.heat_shock == 6 ? 1 : 1));
    internal.X8 = ((internal.heat_shock == 1 ? 8 : 1));
    internal.X9 = ((internal.heat_shock == 8 ? 1 : 1));
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const X0 = state[0];
    const X1 = state[1];
    const X2 = state[2];
    const X3 = state[3];
    const X4 = state[4];
    const X5 = state[5];
    const X6 = state[6];
    const X7 = state[7];
    dstatedt[0] = 0;
    var flux_X1_in = 31.911999999999999 * Math.pow((X0), (0.96799999999999997)) * Math.pow((X2), (- 0.19400000000000001)) * Math.pow((X7), (0.0096799999999999994)) * Math.pow((internal.X8), (0.96799999999999997)) * Math.pow((internal.X19), (0.032300000000000002));
    var flux_X1_out = 89.935000000000002 * Math.pow((X1), (0.75)) * Math.pow((X6), (- 0.40000000000000002)) * internal.X9;
    var flux_X2_in = 142.72 * Math.pow((X1), (0.51700000000000002)) * Math.pow((X2), (- 0.17899999999999999)) * Math.pow((X3), (0.183)) * Math.pow((X6), (- 0.27600000000000002)) * Math.pow((internal.X9), (0.68899999999999995)) * Math.pow((internal.X12r), (0.311));
    var flux_X2_out = 30.120000000000001 * Math.pow((X1), (- 0.0033300000000000001)) * Math.pow((X2), (0.57499999999999996)) * Math.pow((X3), (- 0.17000000000000001)) * Math.pow((X4), (0.0033300000000000001)) * Math.pow((internal.X10), (0.5111)) * Math.pow((internal.X11), (0.066699999999999995)) * Math.pow((internal.X12f), (0.41099999999999998)) * Math.pow((internal.X17), (0.0111));
    var flux_X3_in = 7.8818999999999999 * Math.pow((X2), (0.39400000000000002)) * Math.pow((X3), (- 0.39200000000000002)) * Math.pow((X4), (- 0.01)) * Math.pow((X5), (0.012800000000000001)) * Math.pow((internal.X12f), (0.94899999999999995)) * Math.pow((internal.X15r), (0.051299999999999998));
    var flux_X3_out = 76.433999999999997 * Math.pow((X2), (- 0.41199999999999998)) * Math.pow((X3), (0.59299999999999997)) * Math.pow((internal.X12r), (0.71799999999999997)) * Math.pow((internal.X13), (0.17999999999999999)) * Math.pow((internal.X15f), (0.10299999999999999));
    var flux_X4_in = 11.07 * Math.pow((X3), (0.5)) * internal.X13;
    var flux_X4_out = 3.4556 * Math.pow((X1), (- 0.042900000000000001)) * Math.pow((X2), (0.214)) * Math.pow((X4), (0.38600000000000001)) * Math.pow((internal.X14), (0.85699999999999998)) * Math.pow((internal.X17), (0.14299999999999999));
    var flux_X5_in = 11.06 * Math.pow((X2), (0.040000000000000001)) * Math.pow((X3), (0.32000000000000001)) * Math.pow((X4), (0.16)) * Math.pow((internal.X14), (0.59999999999999998)) * Math.pow((internal.X15f), (0.40000000000000002));
    var flux_X5_out = 4.9290000000000003 * Math.pow((X2), (- 0.040000000000000001)) * Math.pow((X4), (- 0.040000000000000001)) * Math.pow((X5), (0.25)) * Math.pow((internal.X15r), (0.20000000000000001)) * Math.pow((internal.X16), (0.80000000000000004));
    var flux_X6_in = 0.19424 * Math.pow((X1), (- 0.29999999999999999)) * Math.pow((X2), (0.29999999999999999)) * Math.pow((X4), (0.29999999999999999)) * internal.X17;
    var flux_X6_out = 1.0939000000000001 * Math.pow((X6), (0.20000000000000001)) * internal.X18;
    var flux_X7_in = 1.0939000000000001 * Math.pow((X6), (0.20000000000000001)) * internal.X18;
    var flux_X7_out = 1.2287999999999999 * Math.pow((X7), (0.29999999999999999)) * internal.X19;
    dstatedt[1] = 0 + flux_X1_in - flux_X1_out;
    dstatedt[2] = 0 + flux_X2_in - flux_X2_out;
    dstatedt[3] = 0 + flux_X3_in - flux_X3_out;
    dstatedt[4] = 0 + flux_X4_in - flux_X4_out;
    dstatedt[5] = 0 + flux_X5_in - flux_X5_out;
    dstatedt[6] = 0 + flux_X6_in - flux_X6_out;
    dstatedt[7] = 0 + flux_X7_in - flux_X7_out;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "X0", "X1", "X2", "X3", "X4", "X5", "X6", "X7"];
    this.metadata.internalOrder = {cell: null, external: null, heat_shock: null, initial_X0: null, initial_X1: null, initial_X2: null, initial_X3: null, initial_X4: null, initial_X5: null, initial_X6: null, initial_X7: null, X0_init: null, X1_init: null, X10: null, X11: null, X12f: null, X12r: null, X13: null, X14: null, X15f: null, X15r: null, X16: null, X17: null, X18: null, X19: null, X2_init: null, X3_init: null, X4_init: null, X5_init: null, X6_init: null, X7_init: null, X8: null, X9: null};
    this.metadata.variableOrder = {X0: null, X1: null, X2: null, X3: null, X4: null, X5: null, X6: null, X7: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
