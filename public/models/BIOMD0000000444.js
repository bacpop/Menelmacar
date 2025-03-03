export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment_0 = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(18).fill(0);
    state[0] = internal.initial_species_0;
    state[1] = internal.initial_species_1;
    state[2] = internal.initial_species_2;
    state[3] = internal.initial_species_3;
    state[4] = internal.initial_species_4;
    state[5] = internal.initial_species_5;
    state[6] = internal.initial_species_6;
    state[7] = internal.initial_species_7;
    state[8] = internal.initial_species_8;
    state[9] = internal.initial_species_9;
    state[10] = internal.initial_species_10;
    state[11] = internal.initial_species_11;
    state[12] = internal.initial_species_12;
    state[13] = internal.initial_species_13;
    state[14] = internal.initial_species_14;
    state[15] = internal.initial_species_15;
    state[16] = internal.initial_species_16;
    state[17] = internal.initial_species_17;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A", "k1", "K1", "k10", "K10", "k11b", "k11f", "K12", "k15", "k2", "K2", "k21", "K21", "K21i", "k22", "K22", "K22i", "k3", "K3", "k4", "K4", "k5", "K5", "k6", "K6", "k7", "K7", "k8", "K8", "k9", "K9", "Ka", "KI", "n12", "parameter_1", "species_0_init", "species_1_init", "species_10_init", "species_11_init", "species_12_init", "species_13_init", "species_14_init", "species_15_init", "species_16_init", "species_17_init", "species_2_init", "species_3_init", "species_4_init", "species_5_init", "species_6_init", "species_7_init", "species_8_init", "species_9_init", "V1", "V12"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 10.34, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1", internal, 15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K10", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11b", internal, 2.8599999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11f", internal, 10.34, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K12", internal, 169, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k15", internal, 0.0011999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 2.8599999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k21", internal, 0.68000000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K21", internal, 10300, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K21i", internal, 87, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k22", internal, 0.31, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K22", internal, 87, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K22i", internal, 10300, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K3", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K4", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K5", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K6", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K7", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K8", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K9", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ka", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KI", internal, 9, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n12", internal, 3.9700000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_1", internal, 0.021999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_0_init", internal, 999.99990368875297, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_10_init", internal, 499.99997592218801, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_11_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_12_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_13_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_14_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_15_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_16_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_17_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_2_init", internal, 3999.9998073775, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_4_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_5_init", internal, 999.99990368875297, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_6_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_7_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_8_init", internal, 99.999990368875203, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_9_init", internal, 499.99995184437699, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V1", internal, 6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V12", internal, 29.239999999999998, -Infinity, Infinity, false);
    internal.initial_species_0 = internal.species_0_init;
    internal.initial_species_1 = internal.species_1_init;
    internal.initial_species_10 = internal.species_10_init;
    internal.initial_species_11 = internal.species_11_init;
    internal.initial_species_12 = internal.species_12_init;
    internal.initial_species_13 = internal.species_13_init;
    internal.initial_species_14 = internal.species_14_init;
    internal.initial_species_15 = internal.species_15_init;
    internal.initial_species_16 = internal.species_16_init;
    internal.initial_species_17 = internal.species_17_init;
    internal.initial_species_2 = internal.species_2_init;
    internal.initial_species_3 = internal.species_3_init;
    internal.initial_species_4 = internal.species_4_init;
    internal.initial_species_5 = internal.species_5_init;
    internal.initial_species_6 = internal.species_6_init;
    internal.initial_species_7 = internal.species_7_init;
    internal.initial_species_8 = internal.species_8_init;
    internal.initial_species_9 = internal.species_9_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const species_0 = state[0];
    const species_1 = state[1];
    const species_2 = state[2];
    const species_3 = state[3];
    const species_4 = state[4];
    const species_5 = state[5];
    const species_6 = state[6];
    const species_7 = state[7];
    const species_8 = state[8];
    const species_9 = state[9];
    const species_10 = state[10];
    const species_11 = state[11];
    const species_12 = state[12];
    const species_13 = state[13];
    const species_14 = state[14];
    const species_15 = state[15];
    const species_16 = state[16];
    const species_17 = state[17];
    dstatedt[10] = 0;
    dstatedt[8] = 0;
    dstatedt[9] = 0;
    dstatedt[0] = 0 - 1 * internal.compartment_0 * (internal.V1 * species_0 / internal.K1 / (1 + species_0 / internal.K1) * ((1 + internal.A * species_7 / internal.Ka) / (1 + species_7 / internal.Ka))) + 1 * internal.compartment_0 * (internal.k2 * species_8 * species_1 / internal.K2 / (1 + species_1 / internal.K2));
    dstatedt[1] = 0 + 1 * internal.compartment_0 * (internal.V1 * species_0 / internal.K1 / (1 + species_0 / internal.K1) * ((1 + internal.A * species_7 / internal.Ka) / (1 + species_7 / internal.Ka))) - 1 * internal.compartment_0 * (internal.k2 * species_8 * species_1 / internal.K2 / (1 + species_1 / internal.K2));
    dstatedt[11] = 0 + 1 * internal.compartment_0 * (internal.k11f * species_7 - internal.k11b * species_11) - 1 * internal.compartment_0 * (internal.k21 * species_15 * species_11 / internal.K21 / (1 + species_11 / internal.K21 + species_17 / internal.K21i));
    dstatedt[12] = 0 + 1 * internal.compartment_0 * (internal.V12 * Math.pow((species_11), (internal.n12)) / (Math.pow((internal.K12), (internal.n12)) + Math.pow((species_11), (internal.n12)))) - 1 * internal.compartment_0 * internal.k1 * species_12;
    dstatedt[13] = 0 + 1 * internal.compartment_0 * internal.k1 * species_12 - 1 * internal.compartment_0 * internal.k1 * species_13;
    dstatedt[14] = 0 + 1 * internal.compartment_0 * (internal.k15 * species_13) - 1 * internal.compartment_0 * (internal.k1 * species_14 - internal.k2 * species_15) - 1 * internal.compartment_0 * internal.k1 * species_14;
    dstatedt[15] = 0 + 1 * internal.compartment_0 * (internal.k1 * species_14 - internal.k2 * species_15) - 1 * internal.compartment_0 * internal.k1 * species_15;
    dstatedt[16] = 0 + 1 * internal.compartment_0 * (internal.k1 * species_5 - internal.k2 * species_16) + 1 * internal.compartment_0 * (internal.k22 * species_15 * species_17 / internal.K22 / (1 + species_17 / internal.K22 + species_11 / internal.K22i));
    dstatedt[17] = 0 + 1 * internal.compartment_0 * (internal.k1 * species_6 - internal.k2 * species_17) + 1 * internal.compartment_0 * (internal.k21 * species_15 * species_11 / internal.K21 / (1 + species_11 / internal.K21 + species_17 / internal.K21i)) - 1 * internal.compartment_0 * (internal.k22 * species_15 * species_17 / internal.K22 / (1 + species_17 / internal.K22 + species_11 / internal.K22i));
    dstatedt[2] = 0 - 1 * internal.compartment_0 * (internal.k3 * species_1 * species_2 / internal.K3 / ((1 + species_2 / internal.K3 + species_3 / internal.K3) * (1 + species_7 / internal.KI))) + 1 * internal.compartment_0 * (internal.k6 * species_9 * species_3 / internal.K6 / (1 + species_4 / internal.K6 + species_3 / internal.K6));
    dstatedt[3] = 0 + 1 * internal.compartment_0 * (internal.k3 * species_1 * species_2 / internal.K3 / ((1 + species_2 / internal.K3 + species_3 / internal.K3) * (1 + species_7 / internal.KI))) - 1 * internal.compartment_0 * (internal.k4 * species_1 * species_3 / internal.K4 / ((1 + species_2 / internal.K4 + species_3 / internal.K4) * (1 + species_7 / internal.KI))) + 1 * internal.compartment_0 * (internal.k5 * species_9 * species_4 / internal.K5 / (1 + species_4 / internal.K5 + species_3 / internal.K5)) - 1 * internal.compartment_0 * (internal.k6 * species_9 * species_3 / internal.K6 / (1 + species_4 / internal.K6 + species_3 / internal.K6));
    dstatedt[4] = 0 + 1 * internal.compartment_0 * (internal.k4 * species_1 * species_3 / internal.K4 / ((1 + species_2 / internal.K4 + species_3 / internal.K4) * (1 + species_7 / internal.KI))) - 1 * internal.compartment_0 * (internal.k5 * species_9 * species_4 / internal.K5 / (1 + species_4 / internal.K5 + species_3 / internal.K5));
    dstatedt[5] = 0 - 1 * internal.compartment_0 * (internal.k7 * species_4 * species_5 / internal.K7 / (1 + species_5 / internal.K7 + species_6 / internal.K7)) + 1 * internal.compartment_0 * (internal.k10 * species_10 * species_6 / internal.K10 / (1 + species_7 / internal.K10 + species_6 / internal.K10)) - 1 * internal.compartment_0 * (internal.k1 * species_5 - internal.k2 * species_16);
    dstatedt[6] = 0 + 1 * internal.compartment_0 * (internal.k7 * species_4 * species_5 / internal.K7 / (1 + species_5 / internal.K7 + species_6 / internal.K7)) - 1 * internal.compartment_0 * (internal.k8 * species_4 * species_6 / internal.K8 / (1 + species_5 / internal.K8 + species_6 / internal.K8)) + 1 * internal.compartment_0 * (internal.k9 * species_10 * species_7 / internal.K9 / (1 + species_7 / internal.K9 + species_6 / internal.K9)) - 1 * internal.compartment_0 * (internal.k10 * species_10 * species_6 / internal.K10 / (1 + species_7 / internal.K10 + species_6 / internal.K10)) - 1 * internal.compartment_0 * (internal.k1 * species_6 - internal.k2 * species_17);
    dstatedt[7] = 0 + 1 * internal.compartment_0 * (internal.k8 * species_4 * species_6 / internal.K8 / (1 + species_5 / internal.K8 + species_6 / internal.K8)) - 1 * internal.compartment_0 * (internal.k9 * species_10 * species_7 / internal.K9 / (1 + species_7 / internal.K9 + species_6 / internal.K9)) - 1 * internal.compartment_0 * (internal.k11f * species_7 - internal.k11b * species_11);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "species_0", "species_1", "species_2", "species_3", "species_4", "species_5", "species_6", "species_7", "species_8", "species_9", "species_10", "species_11", "species_12", "species_13", "species_14", "species_15", "species_16", "species_17"];
    this.metadata.internalOrder = {A: null, compartment_0: null, initial_species_0: null, initial_species_1: null, initial_species_10: null, initial_species_11: null, initial_species_12: null, initial_species_13: null, initial_species_14: null, initial_species_15: null, initial_species_16: null, initial_species_17: null, initial_species_2: null, initial_species_3: null, initial_species_4: null, initial_species_5: null, initial_species_6: null, initial_species_7: null, initial_species_8: null, initial_species_9: null, k1: null, K1: null, k10: null, K10: null, k11b: null, k11f: null, K12: null, k15: null, k2: null, K2: null, k21: null, K21: null, K21i: null, k22: null, K22: null, K22i: null, k3: null, K3: null, k4: null, K4: null, k5: null, K5: null, k6: null, K6: null, k7: null, K7: null, k8: null, K8: null, k9: null, K9: null, Ka: null, KI: null, n12: null, parameter_1: null, species_0_init: null, species_1_init: null, species_10_init: null, species_11_init: null, species_12_init: null, species_13_init: null, species_14_init: null, species_15_init: null, species_16_init: null, species_17_init: null, species_2_init: null, species_3_init: null, species_4_init: null, species_5_init: null, species_6_init: null, species_7_init: null, species_8_init: null, species_9_init: null, V1: null, V12: null};
    this.metadata.variableOrder = {species_0: null, species_1: null, species_2: null, species_3: null, species_4: null, species_5: null, species_6: null, species_7: null, species_8: null, species_9: null, species_10: null, species_11: null, species_12: null, species_13: null, species_14: null, species_15: null, species_16: null, species_17: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
