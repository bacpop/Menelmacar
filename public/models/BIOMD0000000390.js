export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.chloroplast = 1;
    internal.cytosol = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(10).fill(0);
    state[0] = internal.initial_RuBP;
    state[1] = internal.initial_PGA;
    state[2] = internal.initial_TP;
    state[3] = internal.initial_Ru5P;
    state[4] = internal.initial_Pi;
    state[5] = internal.initial_ATP;
    state[6] = internal.initial_ADP;
    state[7] = internal.initial_E_RuBisCO;
    state[8] = internal.initial_TPc;
    state[9] = internal.initial_Pic;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["ADP_init", "ATP_init", "E_RuBisCO_init", "K", "K1", "K2", "K3", "kxk", "P_0", "PGA_init", "Pi_init", "Pic_init", "Ru5P_init", "RuBP_init", "TP_init", "TPc_init", "V6", "Vm"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "ADP_init", internal, 0.81999999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ATP_init", internal, 0.68000000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_RuBisCO_init", internal, 3.5600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1", internal, 0.080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K3", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 14, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_0", internal, 16, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PGA_init", internal, 2.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pi_init", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pic_init", internal, 1.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ru5P_init", internal, 0.050074738415545599, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RuBP_init", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TP_init", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "TPc_init", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V6", internal, 5.8801285588795, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vm", internal, 3.2999999999999998, -Infinity, Infinity, false);
    internal.initial_ADP = internal.ADP_init;
    internal.initial_ATP = internal.ATP_init;
    internal.initial_E_RuBisCO = internal.E_RuBisCO_init;
    internal.initial_PGA = internal.PGA_init;
    internal.initial_Pi = internal.Pi_init;
    internal.initial_Pic = internal.Pic_init;
    internal.initial_Ru5P = internal.Ru5P_init;
    internal.initial_RuBP = internal.RuBP_init;
    internal.initial_TP = internal.TP_init;
    internal.initial_TPc = internal.TPc_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const PGA = state[1];
    const TP = state[2];
    const Ru5P = state[3];
    const Pi = state[4];
    const ATP = state[5];
    const ADP = state[6];
    const E_RuBisCO = state[7];
    const TPc = state[8];
    const Pic = state[9];
    dstatedt[7] = 0;
    dstatedt[9] = 0;
    dstatedt[8] = 0;
    dstatedt[6] = 0 + 1 * internal.chloroplast * (internal.Vm * (PGA * ATP - ADP * TP * Pi / internal.kxk) / (internal.K1 + PGA * ATP * internal.K1 / internal.K2 + ADP * TP * Pi / internal.kxk)) + 1 * internal.chloroplast * (internal.Vm * Ru5P * ATP / (internal.K1 * internal.K2 + internal.K2 * ATP + Ru5P * ATP + internal.K3 * Pi)) - 1 * internal.chloroplast * (internal.V6 * ADP * Pi / ((ADP + internal.K1) * (Pi + internal.K2)));
    dstatedt[5] = 0 - 1 * internal.chloroplast * (internal.Vm * (PGA * ATP - ADP * TP * Pi / internal.kxk) / (internal.K1 + PGA * ATP * internal.K1 / internal.K2 + ADP * TP * Pi / internal.kxk)) - 1 * internal.chloroplast * (internal.Vm * Ru5P * ATP / (internal.K1 * internal.K2 + internal.K2 * ATP + Ru5P * ATP + internal.K3 * Pi)) + 1 * internal.chloroplast * (internal.V6 * ADP * Pi / ((ADP + internal.K1) * (Pi + internal.K2)));
    dstatedt[4] = 0 + 1 * internal.chloroplast * (internal.Vm * (PGA * ATP - ADP * TP * Pi / internal.kxk) / (internal.K1 + PGA * ATP * internal.K1 / internal.K2 + ADP * TP * Pi / internal.kxk)) + 2 * internal.chloroplast * (internal.Vm * TP / (TP + internal.K)) + 1 * (internal.Vm * (TP * Pic - TPc * Pi) / ((TP + TPc) * internal.K2 + (Pic + Pi) * internal.K1 + internal.K1 * internal.K2 * (TP / internal.K1 + Pi / internal.K2) * (Pic / internal.K2 + TPc / internal.K1))) - 1 * internal.chloroplast * (internal.V6 * ADP * Pi / ((ADP + internal.K1) * (Pi + internal.K2)));
    dstatedt[3] = 0 + 3 * internal.chloroplast * (internal.Vm * TP / (TP + internal.K)) - 1 * internal.chloroplast * (internal.Vm * Ru5P * ATP / (internal.K1 * internal.K2 + internal.K2 * ATP + Ru5P * ATP + internal.K3 * Pi));
    dstatedt[2] = 0 + 1 * internal.chloroplast * (internal.Vm * (PGA * ATP - ADP * TP * Pi / internal.kxk) / (internal.K1 + PGA * ATP * internal.K1 / internal.K2 + ADP * TP * Pi / internal.kxk)) - 5 * internal.chloroplast * (internal.Vm * TP / (TP + internal.K)) - 1 * (internal.Vm * (TP * Pic - TPc * Pi) / ((TP + TPc) * internal.K2 + (Pic + Pi) * internal.K1 + internal.K1 * internal.K2 * (TP / internal.K1 + Pi / internal.K2) * (Pic / internal.K2 + TPc / internal.K1)));
    var totRuBP = 1 / 2 * (internal.P_0 - (PGA + TP + Ru5P + Pi + ATP));
    dstatedt[1] = 0 + 2 * internal.chloroplast * (internal.kxk / 2 * (E_RuBisCO + totRuBP + internal.K - Math.sqrt(Math.pow((E_RuBisCO + totRuBP + internal.K), (2)) - 4 * E_RuBisCO * totRuBP))) - 1 * internal.chloroplast * (internal.Vm * (PGA * ATP - ADP * TP * Pi / internal.kxk) / (internal.K1 + PGA * ATP * internal.K1 / internal.K2 + ADP * TP * Pi / internal.kxk));
    dstatedt[0] = 0 - 1 * internal.chloroplast * (internal.kxk / 2 * (E_RuBisCO + totRuBP + internal.K - Math.sqrt(Math.pow((E_RuBisCO + totRuBP + internal.K), (2)) - 4 * E_RuBisCO * totRuBP))) + 1 * internal.chloroplast * (internal.Vm * Ru5P * ATP / (internal.K1 * internal.K2 + internal.K2 * ATP + Ru5P * ATP + internal.K3 * Pi));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "RuBP", "PGA", "TP", "Ru5P", "Pi", "ATP", "ADP", "E_RuBisCO", "TPc", "Pic"];
    this.metadata.internalOrder = {ADP_init: null, ATP_init: null, chloroplast: null, cytosol: null, E_RuBisCO_init: null, initial_ADP: null, initial_ATP: null, initial_E_RuBisCO: null, initial_PGA: null, initial_Pi: null, initial_Pic: null, initial_Ru5P: null, initial_RuBP: null, initial_TP: null, initial_TPc: null, K: null, K1: null, K2: null, K3: null, kxk: null, P_0: null, PGA_init: null, Pi_init: null, Pic_init: null, Ru5P_init: null, RuBP_init: null, TP_init: null, TPc_init: null, V6: null, Vm: null};
    this.metadata.variableOrder = {RuBP: null, PGA: null, TP: null, Ru5P: null, Pi: null, ATP: null, ADP: null, E_RuBisCO: null, TPc: null, Pic: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
