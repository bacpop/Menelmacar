export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.ADP = 0.81999999999999995;
    internal.ATP = 0.68000000000000005;
    internal.chloroplast = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(5).fill(0);
    state[0] = internal.initial_RuBP;
    state[1] = internal.initial_PGA;
    state[2] = internal.initial_DPGA;
    state[3] = internal.initial_GAP;
    state[4] = internal.initial_Ru5P;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["DPGA_init", "GAP_init", "K1", "K2", "Km", "PGA_init", "Ru5P_init", "RuBP_init", "V", "Vm"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "DPGA_init", internal, 0.0011000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GAP_init", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1", internal, 0.14999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2", internal, 0.058999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PGA_init", internal, 2.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ru5P_init", internal, 0.050099999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RuBP_init", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vm", internal, 8, -Infinity, Infinity, false);
    internal.initial_DPGA = internal.DPGA_init;
    internal.initial_GAP = internal.GAP_init;
    internal.initial_PGA = internal.PGA_init;
    internal.initial_Ru5P = internal.Ru5P_init;
    internal.initial_RuBP = internal.RuBP_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const RuBP = state[0];
    const PGA = state[1];
    const DPGA = state[2];
    const GAP = state[3];
    const Ru5P = state[4];
    dstatedt[2] = 0 + 1 * internal.chloroplast * (internal.Vm * PGA * internal.ATP / ((PGA + internal.K1) * (internal.ATP + internal.K2))) - 1 * internal.chloroplast * (internal.V * DPGA / (internal.Km + DPGA));
    dstatedt[3] = 0 + 1 * internal.chloroplast * (internal.V * DPGA / (internal.Km + DPGA)) - 1 * internal.chloroplast * (internal.V * GAP / (internal.Km + GAP)) - 1 * internal.chloroplast * (internal.V * GAP / (internal.Km + GAP));
    dstatedt[1] = 0 + 2 * internal.chloroplast * (internal.V * RuBP / (internal.Km + RuBP)) - 1 * internal.chloroplast * (internal.Vm * PGA * internal.ATP / ((PGA + internal.K1) * (internal.ATP + internal.K2))) - 1 * internal.chloroplast * (internal.V * PGA / (internal.Km + PGA));
    dstatedt[4] = 0 + 0.59999999999999998 * internal.chloroplast * (internal.V * GAP / (internal.Km + GAP)) - 1 * internal.chloroplast * (internal.Vm * Ru5P * internal.ATP / ((Ru5P + internal.K1) * (internal.ATP + internal.K2)));
    dstatedt[0] = 0 - 1 * internal.chloroplast * (internal.V * RuBP / (internal.Km + RuBP)) + 1 * internal.chloroplast * (internal.Vm * Ru5P * internal.ATP / ((Ru5P + internal.K1) * (internal.ATP + internal.K2)));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "RuBP", "PGA", "DPGA", "GAP", "Ru5P"];
    this.metadata.internalOrder = {ADP: null, ATP: null, chloroplast: null, DPGA_init: null, GAP_init: null, initial_DPGA: null, initial_GAP: null, initial_PGA: null, initial_Ru5P: null, initial_RuBP: null, K1: null, K2: null, Km: null, PGA_init: null, Ru5P_init: null, RuBP_init: null, V: null, Vm: null};
    this.metadata.variableOrder = {RuBP: null, PGA: null, DPGA: null, GAP: null, Ru5P: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
