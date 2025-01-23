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
    var parameter_7 = internal.parameter_2 / internal.parameter_3 * (internal.parameter_3 + internal.initial_species_3 + internal.parameter_6 * (internal.initial_species_5 - internal.initial_species_3));
    var species_10_init = 0.5 * (internal.initial_species_1 - internal.initial_species_8 - internal.parameter_4 + Math.sqrt(Math.pow((internal.parameter_4 - internal.initial_species_1 + internal.initial_species_8), (2)) + 4 * internal.initial_species_1 * internal.parameter_4));
    var species_13_init = internal.initial_species_2 / (internal.parameter_5 + internal.initial_species_1);
    var species_14_init = internal.initial_species_1 / (internal.parameter_5 + internal.initial_species_1);
    var species_15_init = (internal.initial_species_1 - internal.initial_species_2) / (internal.parameter_5 + internal.initial_species_1);
    var species_16_init = internal.initial_species_3 / internal.initial_species_5;
    var species_4_init = internal.initial_species_1 - internal.initial_species_2;
    var species_6_init = internal.initial_species_5 - internal.initial_species_3;
    internal.initial_species_10 = species_10_init;
    internal.initial_species_13 = species_13_init;
    internal.initial_species_14 = species_14_init;
    internal.initial_species_15 = species_15_init;
    internal.initial_species_16 = species_16_init;
    internal.initial_species_4 = species_4_init;
    internal.initial_species_6 = species_6_init;
    var species_12_init = (internal.parameter_2 + internal.initial_species_9) / (parameter_7 + internal.initial_species_9);
    var species_9_init = 0.5 * (internal.initial_species_2 - internal.initial_species_7 - parameter_7 + Math.sqrt(Math.pow((parameter_7 - internal.initial_species_2 + internal.initial_species_7), (2)) + 4 * internal.initial_species_2 * parameter_7));
    internal.initial_species_12 = species_12_init;
    internal.initial_species_9 = species_9_init;
    var state = Array(16).fill(0);
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
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["parameter_1", "parameter_10", "parameter_11", "parameter_17", "parameter_18", "parameter_2", "parameter_3", "parameter_4", "parameter_5", "parameter_6", "parameter_8", "species_1_init", "species_11_init", "species_2_init", "species_3_init", "species_5_init", "species_7_init", "species_8_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "parameter_1", internal, 0.33000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_10", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_11", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_17", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_18", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_4", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_5", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_6", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_8", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_11_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_5_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_7_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_8_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_species_1 = internal.species_1_init;
    internal.initial_species_11 = internal.species_11_init;
    internal.initial_species_2 = internal.species_2_init;
    internal.initial_species_3 = internal.species_3_init;
    internal.initial_species_5 = internal.species_5_init;
    internal.initial_species_7 = internal.species_7_init;
    internal.initial_species_8 = internal.species_8_init;
    internal.parameter_13 = internal.parameter_8 * internal.parameter_10;
    internal.parameter_14 = 1 / internal.parameter_11;
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
    const species_5 = state[4];
    const species_7 = state[6];
    const species_8 = state[7];
    const species_9 = state[8];
    const species_10 = state[9];
    const species_11 = state[10];
    dstatedt[9] = 0 + 0;
    dstatedt[10] = 0;
    dstatedt[11] = 0 + 0;
    dstatedt[12] = 0 + 0;
    dstatedt[13] = 0 + 0;
    dstatedt[14] = 0 + 0;
    dstatedt[15] = 0 + 0;
    dstatedt[3] = 0 + 0;
    dstatedt[4] = 0;
    dstatedt[5] = 0 + 0;
    dstatedt[6] = 0;
    dstatedt[7] = 0;
    dstatedt[8] = 0 + 0;
    dstatedt[0] = 0 + 1 * internal.compartment_1 * (internal.parameter_18) - 1 * internal.compartment_1 * internal.parameter_17 * species_1 - 1 * internal.compartment_1 * (species_1 * internal.parameter_8 * species_8 * species_11 / (1 + species_11) / (internal.parameter_4 + species_8 + species_10));
    var parameter_16 = species_5 / internal.parameter_11;
    var parameter_7 = internal.parameter_2 / internal.parameter_3 * (internal.parameter_3 + species_3 + internal.parameter_6 * (species_5 - species_3));
    var parameter_9 = internal.parameter_3 / internal.parameter_2 * (internal.parameter_2 + species_9);
    dstatedt[1] = 0 + 1 * internal.compartment_1 * (internal.parameter_18) - 1 * internal.compartment_1 * internal.parameter_17 * species_2 - 1 * internal.compartment_1 * (species_2 * internal.parameter_8 * species_8 * species_11 / (1 + species_11) / (internal.parameter_4 + species_8 + species_10)) - 1 * internal.compartment_1 * (species_2 * internal.parameter_13 * species_7 * species_11 / (internal.parameter_1 + species_11) / (parameter_7 + species_7 + species_9));
    dstatedt[2] = 0 + 1 * internal.compartment_1 * (parameter_16) - 1 * internal.compartment_1 * internal.parameter_14 * species_3 - 1 * internal.compartment_1 * (species_3 * internal.parameter_13 * species_7 * species_11 / (internal.parameter_1 + species_11) / (parameter_9 + species_3 + internal.parameter_6 * (species_5 - species_3)));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "species_1", "species_2", "species_3", "species_4", "species_5", "species_6", "species_7", "species_8", "species_9", "species_10", "species_11", "species_12", "species_13", "species_14", "species_15", "species_16"];
    this.metadata.internalOrder = {compartment_1: null, initial_species_1: null, initial_species_10: null, initial_species_11: null, initial_species_12: null, initial_species_13: null, initial_species_14: null, initial_species_15: null, initial_species_16: null, initial_species_2: null, initial_species_3: null, initial_species_4: null, initial_species_5: null, initial_species_6: null, initial_species_7: null, initial_species_8: null, initial_species_9: null, parameter_1: null, parameter_10: null, parameter_11: null, parameter_13: null, parameter_14: null, parameter_17: null, parameter_18: null, parameter_2: null, parameter_3: null, parameter_4: null, parameter_5: null, parameter_6: null, parameter_8: null, species_1_init: null, species_11_init: null, species_2_init: null, species_3_init: null, species_5_init: null, species_7_init: null, species_8_init: null};
    this.metadata.variableOrder = {species_1: null, species_2: null, species_3: null, species_4: null, species_5: null, species_6: null, species_7: null, species_8: null, species_9: null, species_10: null, species_11: null, species_12: null, species_13: null, species_14: null, species_15: null, species_16: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
