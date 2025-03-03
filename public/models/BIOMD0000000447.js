export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment_1 = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(13).fill(0);
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
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["parameter_1", "parameter_10", "parameter_11", "parameter_12", "parameter_13", "parameter_14", "parameter_15", "parameter_16", "parameter_17", "parameter_18", "parameter_19", "parameter_2", "parameter_20", "parameter_21", "parameter_22", "parameter_23", "parameter_3", "parameter_4", "parameter_5", "parameter_6", "parameter_7", "parameter_8", "parameter_9", "species_1_init", "species_10_init", "species_11_init", "species_12_init", "species_13_init", "species_2_init", "species_3_init", "species_4_init", "species_5_init", "species_6_init", "species_7_init", "species_8_init", "species_9_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "parameter_1", internal, 0.035000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_10", internal, 0.024500000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_11", internal, 0.34999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_12", internal, 24.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_13", internal, 0.010500000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_14", internal, 0.035000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_15", internal, 0.0035000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_16", internal, 0.070000000000000007, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_17", internal, 0.0035000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_18", internal, 24.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_19", internal, 0.20999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_2", internal, 0.34999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_20", internal, 0.052499999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_21", internal, 0.017500000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_22", internal, 0.0035000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_23", internal, 0.035000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_3", internal, 1.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_4", internal, 0.035000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_5", internal, 24.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_6", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_7", internal, 0.34999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_8", internal, 1.05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_9", internal, 17.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_1_init", internal, 0.0030000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_10_init", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_11_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_12_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_13_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_3_init", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_4_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_5_init", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_6_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_7_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_8_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_9_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_species_1 = internal.species_1_init;
    internal.initial_species_10 = internal.species_10_init;
    internal.initial_species_11 = internal.species_11_init;
    internal.initial_species_12 = internal.species_12_init;
    internal.initial_species_13 = internal.species_13_init;
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
    const species_1 = state[0];
    const species_2 = state[1];
    const species_3 = state[2];
    const species_4 = state[3];
    const species_5 = state[4];
    const species_6 = state[5];
    const species_7 = state[6];
    const species_8 = state[7];
    const species_9 = state[8];
    const species_10 = state[9];
    const species_11 = state[10];
    const species_12 = state[11];
    const species_13 = state[12];
    dstatedt[0] = 0 - 1 * internal.compartment_1 * internal.parameter_1 * species_3 * species_1 - 1 * internal.compartment_1 * internal.parameter_3 * species_4 * species_1 + 1 * internal.compartment_1 * (internal.parameter_23) - 1 * internal.compartment_1 * internal.parameter_21 * species_1;
    dstatedt[9] = 0 - 1 * internal.compartment_1 * (internal.parameter_12 * species_10 * species_2 - internal.parameter_13 * species_11) + 1 * internal.compartment_1 * (internal.parameter_22) - 1 * internal.compartment_1 * internal.parameter_21 * species_10;
    dstatedt[10] = 0 + 1 * internal.compartment_1 * (internal.parameter_12 * species_10 * species_2 - internal.parameter_13 * species_11) - 1 * internal.compartment_1 * internal.parameter_21 * species_11;
    dstatedt[11] = 0 + 1 * internal.compartment_1 * (internal.parameter_14 * species_8 * species_4 - internal.parameter_15 * species_12) - 1 * internal.compartment_1 * internal.parameter_21 * species_12;
    dstatedt[12] = 0 + 1 * internal.compartment_1 * (internal.parameter_16 * species_8 * species_3 - internal.parameter_17 * species_13) - 1 * internal.compartment_1 * internal.parameter_21 * species_13;
    dstatedt[1] = 0 + 1 * internal.compartment_1 * internal.parameter_1 * species_3 * species_1 - 1 * internal.compartment_1 * internal.parameter_2 * species_2 * species_3 + 1 * internal.compartment_1 * internal.parameter_2 * species_2 * species_3 + 1 * internal.compartment_1 * internal.parameter_3 * species_4 * species_1 - 1 * internal.compartment_1 * internal.parameter_4 * species_2 * species_5 + 1 * internal.compartment_1 * internal.parameter_4 * species_2 * species_5 - 1 * internal.compartment_1 * (internal.parameter_9 * species_7 * species_2 - internal.parameter_10 * species_9) + 1 * internal.compartment_1 * internal.parameter_11 * species_9 - 1 * internal.compartment_1 * (internal.parameter_12 * species_10 * species_2 - internal.parameter_13 * species_11) - 1 * internal.compartment_1 * internal.parameter_20 * species_2;
    dstatedt[2] = 0 - 1 * internal.compartment_1 * internal.parameter_1 * species_3 * species_1 + 1 * internal.compartment_1 * internal.parameter_1 * species_3 * species_1 - 1 * internal.compartment_1 * internal.parameter_2 * species_2 * species_3 - 1 * internal.compartment_1 * (internal.parameter_16 * species_8 * species_3 - internal.parameter_17 * species_13) + 1 * internal.compartment_1 * (internal.parameter_22) - 1 * internal.compartment_1 * internal.parameter_20 * species_3;
    dstatedt[3] = 0 + 1 * internal.compartment_1 * internal.parameter_2 * species_2 * species_3 - 1 * internal.compartment_1 * internal.parameter_3 * species_4 * species_1 + 1 * internal.compartment_1 * internal.parameter_3 * species_4 * species_1 - 1 * internal.compartment_1 * (internal.parameter_14 * species_8 * species_4 - internal.parameter_15 * species_12) - 1 * internal.compartment_1 * internal.parameter_20 * species_4;
    dstatedt[4] = 0 - 1 * internal.compartment_1 * internal.parameter_4 * species_2 * species_5 - 1 * internal.compartment_1 * internal.parameter_5 * species_7 * species_5 - 1 * internal.compartment_1 * internal.parameter_6 * species_5 + 1 * internal.compartment_1 * (internal.parameter_22) - 1 * internal.compartment_1 * internal.parameter_21 * species_5;
    dstatedt[5] = 0 + 1 * internal.compartment_1 * internal.parameter_4 * species_2 * species_5 + 1 * internal.compartment_1 * internal.parameter_5 * species_7 * species_5 + 1 * internal.compartment_1 * internal.parameter_6 * species_5 - 1 * internal.compartment_1 * internal.parameter_7 * species_6 + 1 * internal.compartment_1 * internal.parameter_7 * species_6 - 1 * internal.compartment_1 * internal.parameter_8 * species_6 + 1 * internal.compartment_1 * internal.parameter_8 * species_6 - 1 * internal.compartment_1 * internal.parameter_21 * species_6 - 1 * internal.compartment_1 * internal.parameter_19 * species_6;
    dstatedt[6] = 0 - 1 * internal.compartment_1 * internal.parameter_5 * species_7 * species_5 + 1 * internal.compartment_1 * internal.parameter_7 * species_6 - 1 * internal.compartment_1 * (internal.parameter_9 * species_7 * species_2 - internal.parameter_10 * species_9) - 1 * internal.compartment_1 * internal.parameter_21 * species_7;
    dstatedt[7] = 0 + 1 * internal.compartment_1 * internal.parameter_8 * species_6 - 1 * internal.compartment_1 * (internal.parameter_14 * species_8 * species_4 - internal.parameter_15 * species_12) - 1 * internal.compartment_1 * (internal.parameter_16 * species_8 * species_3 - internal.parameter_17 * species_13) - 1 * internal.compartment_1 * internal.parameter_21 * species_8;
    dstatedt[8] = 0 + 1 * internal.compartment_1 * (internal.parameter_9 * species_7 * species_2 - internal.parameter_10 * species_9) - 1 * internal.compartment_1 * internal.parameter_11 * species_9 - 1 * internal.compartment_1 * internal.parameter_21 * species_9 - 1 * internal.compartment_1 * internal.parameter_18 * species_9;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "species_1", "species_2", "species_3", "species_4", "species_5", "species_6", "species_7", "species_8", "species_9", "species_10", "species_11", "species_12", "species_13"];
    this.metadata.internalOrder = {compartment_1: null, initial_species_1: null, initial_species_10: null, initial_species_11: null, initial_species_12: null, initial_species_13: null, initial_species_2: null, initial_species_3: null, initial_species_4: null, initial_species_5: null, initial_species_6: null, initial_species_7: null, initial_species_8: null, initial_species_9: null, parameter_1: null, parameter_10: null, parameter_11: null, parameter_12: null, parameter_13: null, parameter_14: null, parameter_15: null, parameter_16: null, parameter_17: null, parameter_18: null, parameter_19: null, parameter_2: null, parameter_20: null, parameter_21: null, parameter_22: null, parameter_23: null, parameter_3: null, parameter_4: null, parameter_5: null, parameter_6: null, parameter_7: null, parameter_8: null, parameter_9: null, species_1_init: null, species_10_init: null, species_11_init: null, species_12_init: null, species_13_init: null, species_2_init: null, species_3_init: null, species_4_init: null, species_5_init: null, species_6_init: null, species_7_init: null, species_8_init: null, species_9_init: null};
    this.metadata.variableOrder = {species_1: null, species_2: null, species_3: null, species_4: null, species_5: null, species_6: null, species_7: null, species_8: null, species_9: null, species_10: null, species_11: null, species_12: null, species_13: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
