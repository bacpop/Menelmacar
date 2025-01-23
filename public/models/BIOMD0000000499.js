export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment_1 = 1;
    internal.parameter_10 = 0.17100000000000001;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var species_10_init = (internal.parameter_13 + 1) * (internal.parameter_14 - internal.initial_species_3) - internal.parameter_13 * internal.initial_species_6;
    var species_11_init = (internal.parameter_13 + 1) * internal.initial_species_1 - internal.parameter_13 * internal.initial_species_13;
    var species_12_init = (internal.parameter_13 + 1) * internal.parameter_15 - internal.parameter_13 * internal.initial_species_19;
    var species_14_init = (internal.parameter_13 + 1) * internal.initial_species_3 - internal.parameter_13 * internal.initial_species_8;
    var species_15_init = internal.initial_species_14 - 2 * internal.initial_species_11 - internal.initial_species_16;
    var species_16_init = (internal.parameter_13 + 1) * internal.initial_species_2 - internal.parameter_13 * internal.initial_species_17;
    var species_18_init = internal.initial_species_19 - internal.initial_species_17;
    var species_20_init = internal.initial_species_8 - 2 * internal.initial_species_13 - internal.initial_species_17;
    var species_21_init = internal.initial_species_12 - internal.initial_species_16;
    var species_23_init = internal.initial_species_5 + internal.initial_species_7 + internal.initial_species_24 + internal.initial_species_26;
    internal.initial_species_10 = species_10_init;
    internal.initial_species_11 = species_11_init;
    internal.initial_species_12 = species_12_init;
    internal.initial_species_14 = species_14_init;
    internal.initial_species_15 = species_15_init;
    internal.initial_species_16 = species_16_init;
    internal.initial_species_18 = species_18_init;
    internal.initial_species_20 = species_20_init;
    internal.initial_species_21 = species_21_init;
    internal.initial_species_23 = species_23_init;
    var species_25_init = internal.initial_species_7 * (1 / (1 + internal.parameter_21));
    var species_9_init = internal.initial_species_7 * (internal.parameter_21 / (1 + internal.parameter_21));
    internal.initial_species_25 = species_25_init;
    internal.initial_species_9 = species_9_init;
    var state = Array(26).fill(0);
    state[0] = internal.initial_species_1;
    state[1] = internal.initial_species_2;
    state[2] = internal.initial_species_3;
    state[3] = internal.initial_species_4;
    state[4] = internal.initial_species_5;
    state[5] = internal.initial_species_6;
    state[6] = internal.initial_species_7;
    state[7] = internal.initial_species_8;
    state[8] = internal.initial_species_9;
    state[9] = internal.initial_species_10;
    state[10] = internal.initial_species_11;
    state[11] = internal.initial_species_12;
    state[12] = internal.initial_species_13;
    state[13] = internal.initial_species_14;
    state[14] = internal.initial_species_15;
    state[15] = internal.initial_species_16;
    state[16] = internal.initial_species_17;
    state[17] = internal.initial_species_18;
    state[18] = internal.initial_species_19;
    state[19] = internal.initial_species_20;
    state[20] = internal.initial_species_21;
    state[21] = internal.initial_species_22;
    state[22] = internal.initial_species_23;
    state[23] = internal.initial_species_24;
    state[24] = internal.initial_species_25;
    state[25] = internal.initial_species_26;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Metabolite_9", "parameter_1", "parameter_11", "parameter_12", "parameter_13", "parameter_14", "parameter_15", "parameter_16", "parameter_17", "parameter_18", "parameter_2", "parameter_22", "parameter_23", "parameter_24", "parameter_25", "parameter_26", "parameter_27", "parameter_28", "parameter_3", "parameter_4", "parameter_5", "parameter_6", "parameter_7", "parameter_8", "species_1_init", "species_13_init", "species_17_init", "species_2_init", "species_22_init", "species_24_init", "species_26_init", "species_3_init", "species_8_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Metabolite_9", internal, 0.55893352812271702, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_1", internal, 0.32000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_11", internal, 5.7000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_12", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_13", internal, 2.27, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_14", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_15", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_16", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_17", internal, 0.19656499999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_18", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_2", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_22", internal, 24.5383, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_23", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_24", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_25", internal, 0.34999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_26", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_27", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_28", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_3", internal, 9.3599999999999994, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_4", internal, 0.080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_5", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_6", internal, 21.371500000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_7", internal, 24, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_8", internal, 60, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_13_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_17_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_22_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_24_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_26_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_8_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_species_1 = internal.species_1_init;
    internal.initial_species_13 = internal.species_13_init;
    internal.initial_species_17 = internal.species_17_init;
    internal.initial_species_2 = internal.species_2_init;
    internal.initial_species_22 = internal.species_22_init;
    internal.initial_species_24 = internal.species_24_init;
    internal.initial_species_26 = internal.species_26_init;
    internal.initial_species_3 = internal.species_3_init;
    internal.initial_species_8 = internal.species_8_init;
    internal.parameter_19 = internal.parameter_3;
    internal.parameter_21 = internal.parameter_16 / (1 - internal.parameter_16) * ((internal.parameter_4 + 1) / internal.parameter_4);
    internal.parameter_9 = internal.parameter_8 / internal.parameter_10;
    internal.species_19_init = internal.parameter_15;
    internal.species_4_init = internal.parameter_23 * internal.parameter_24;
    internal.species_5_init = (1 - internal.parameter_16) / (internal.parameter_4 + 1);
    internal.species_6_init = internal.parameter_14 * internal.parameter_2 * (1 + internal.parameter_13) / (internal.parameter_3 + internal.parameter_13 * internal.parameter_2);
    internal.species_7_init = (internal.parameter_16 + internal.parameter_4) / (1 + internal.parameter_4);
    internal.initial_species_19 = internal.species_19_init;
    internal.initial_species_4 = internal.species_4_init;
    internal.initial_species_5 = internal.species_5_init;
    internal.initial_species_6 = internal.species_6_init;
    internal.initial_species_7 = internal.species_7_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const species_4 = state[3];
    const species_5 = state[4];
    const species_6 = state[5];
    const species_9 = state[8];
    const species_10 = state[9];
    const species_11 = state[10];
    const species_13 = state[12];
    const species_15 = state[14];
    const species_16 = state[15];
    const species_17 = state[16];
    const species_18 = state[17];
    const species_20 = state[19];
    const species_21 = state[20];
    const species_22 = state[21];
    const species_24 = state[23];
    const species_25 = state[24];
    const species_26 = state[25];
    dstatedt[9] = 0 + 0;
    dstatedt[10] = 0 + 0;
    dstatedt[11] = 0 + 0;
    dstatedt[13] = 0 + 0;
    dstatedt[14] = 0 + 0;
    dstatedt[15] = 0 + 0;
    dstatedt[17] = 0 + 0;
    dstatedt[19] = 0 + 0;
    dstatedt[20] = 0 + 0;
    dstatedt[21] = 0;
    dstatedt[22] = 0 + 0;
    dstatedt[24] = 0 + 0;
    dstatedt[8] = 0 + 0;
    dstatedt[23] = 0 + internal.parameter_1 * (internal.parameter_18 * species_4 * species_9 - (internal.parameter_22 + internal.parameter_12 * (1 - internal.parameter_28)) * species_24);
    dstatedt[25] = 0 + internal.parameter_1 * (internal.parameter_22 * species_24 - internal.parameter_12 * (1 - internal.parameter_28) * species_26);
    dstatedt[2] = 0 + 1 / (1 + internal.parameter_13) * (internal.parameter_13 * internal.parameter_6 * species_26 * (internal.parameter_17 / (internal.parameter_17 + species_22)) * species_6 - internal.parameter_7 * species_15);
    dstatedt[3] = 0 + internal.parameter_1 * (internal.parameter_27 + internal.parameter_26 * species_16 - (internal.parameter_18 * species_9 + internal.parameter_25) * species_4);
    dstatedt[4] = 0 + internal.parameter_1 * ((1 - internal.parameter_5) * (1 - internal.parameter_16) - (internal.parameter_4 + (1 - internal.parameter_28)) * species_5);
    dstatedt[5] = 0 + internal.parameter_2 * species_10 - (internal.parameter_3 + internal.parameter_6 * species_26 * (internal.parameter_17 / (internal.parameter_17 + species_22))) * species_6;
    dstatedt[6] = 0 + internal.parameter_1 * (internal.parameter_4 * species_5 - (1 - internal.parameter_28) * species_25 - internal.parameter_18 * species_4 * species_9);
    dstatedt[7] = 0 + internal.parameter_6 * species_26 * (internal.parameter_17 / (internal.parameter_17 + species_22)) * species_6 + internal.parameter_2 * species_15 - internal.parameter_3 * (species_20 + internal.parameter_11 * (species_17 + 2 * species_13));
    dstatedt[0] = 0 + 1 / (1 + internal.parameter_13) * (internal.parameter_9 * (internal.parameter_13 * Math.pow((species_20), (2)) + Math.pow((species_15), (2))) - internal.parameter_8 * (internal.parameter_13 * species_13 + species_11));
    dstatedt[12] = 0 + internal.parameter_9 * Math.pow((species_20), (2)) - (internal.parameter_8 + internal.parameter_3 * internal.parameter_11) * species_13;
    dstatedt[16] = 0 + internal.parameter_9 * species_18 * species_20 - (internal.parameter_8 + internal.parameter_3 * internal.parameter_11) * species_17;
    dstatedt[18] = 0 + internal.parameter_19 * species_21 - internal.parameter_3 * (species_18 + internal.parameter_11 * species_17);
    dstatedt[1] = 0 + 1 / (internal.parameter_13 + 1) * (internal.parameter_9 * (internal.parameter_13 * species_18 * species_20 + species_15 * species_21) - internal.parameter_8 * (internal.parameter_13 * species_17 + species_16));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "species_1", "species_2", "species_3", "species_4", "species_5", "species_6", "species_7", "species_8", "species_9", "species_10", "species_11", "species_12", "species_13", "species_14", "species_15", "species_16", "species_17", "species_18", "species_19", "species_20", "species_21", "species_22", "species_23", "species_24", "species_25", "species_26"];
    this.metadata.internalOrder = {compartment_1: null, initial_species_1: null, initial_species_10: null, initial_species_11: null, initial_species_12: null, initial_species_13: null, initial_species_14: null, initial_species_15: null, initial_species_16: null, initial_species_17: null, initial_species_18: null, initial_species_19: null, initial_species_2: null, initial_species_20: null, initial_species_21: null, initial_species_22: null, initial_species_23: null, initial_species_24: null, initial_species_25: null, initial_species_26: null, initial_species_3: null, initial_species_4: null, initial_species_5: null, initial_species_6: null, initial_species_7: null, initial_species_8: null, initial_species_9: null, Metabolite_9: null, parameter_1: null, parameter_10: null, parameter_11: null, parameter_12: null, parameter_13: null, parameter_14: null, parameter_15: null, parameter_16: null, parameter_17: null, parameter_18: null, parameter_19: null, parameter_2: null, parameter_21: null, parameter_22: null, parameter_23: null, parameter_24: null, parameter_25: null, parameter_26: null, parameter_27: null, parameter_28: null, parameter_3: null, parameter_4: null, parameter_5: null, parameter_6: null, parameter_7: null, parameter_8: null, parameter_9: null, species_1_init: null, species_13_init: null, species_17_init: null, species_19_init: null, species_2_init: null, species_22_init: null, species_24_init: null, species_26_init: null, species_3_init: null, species_4_init: null, species_5_init: null, species_6_init: null, species_7_init: null, species_8_init: null};
    this.metadata.variableOrder = {species_1: null, species_2: null, species_3: null, species_4: null, species_5: null, species_6: null, species_7: null, species_8: null, species_9: null, species_10: null, species_11: null, species_12: null, species_13: null, species_14: null, species_15: null, species_16: null, species_17: null, species_18: null, species_19: null, species_20: null, species_21: null, species_22: null, species_23: null, species_24: null, species_25: null, species_26: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
