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
    var state = Array(7).fill(0);
    state[0] = internal.initial_species_1;
    state[1] = internal.initial_species_2;
    state[2] = internal.initial_species_3;
    state[3] = internal.initial_species_5;
    state[4] = internal.initial_species_7;
    state[5] = internal.initial_species_8;
    state[6] = internal.initial_species_11;
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
    this.base.user.setUserScalar(user, "species_3_init", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_5_init", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_7_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_8_init", internal, 0.20000000000000001, -Infinity, Infinity, false);
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
    const species_5 = state[3];
    const species_7 = state[4];
    const species_8 = state[5];
    const species_11 = state[6];
    dstatedt[6] = 0;
    dstatedt[3] = 0;
    dstatedt[4] = 0;
    dstatedt[5] = 0;
    var parameter_16 = species_5 / internal.parameter_11;
    var parameter_7 = internal.parameter_2 / internal.parameter_3 * (internal.parameter_3 + species_3 + internal.parameter_6 * (species_5 - species_3));
    var species_10 = 0.5 * (species_1 - species_8 - internal.parameter_4 + Math.sqrt(Math.pow((internal.parameter_4 - species_1 + species_8), (2)) + 4 * species_1 * internal.parameter_4));
    dstatedt[0] = 0 + 1 * internal.compartment_1 * (internal.parameter_18) - 1 * internal.compartment_1 * internal.parameter_17 * species_1 - 1 * internal.compartment_1 * (species_1 * internal.parameter_8 * species_8 * species_11 / (1 + species_11) / (internal.parameter_4 + species_8 + species_10));
    var species_9 = 0.5 * (species_2 - species_7 - parameter_7 + Math.sqrt(Math.pow((parameter_7 - species_2 + species_7), (2)) + 4 * species_2 * parameter_7));
    dstatedt[1] = 0 + 1 * internal.compartment_1 * (internal.parameter_18) - 1 * internal.compartment_1 * internal.parameter_17 * species_2 - 1 * internal.compartment_1 * (species_2 * internal.parameter_8 * species_8 * species_11 / (1 + species_11) / (internal.parameter_4 + species_8 + species_10)) - 1 * internal.compartment_1 * (species_2 * internal.parameter_13 * species_7 * species_11 / (internal.parameter_1 + species_11) / (parameter_7 + species_7 + species_9));
    var parameter_9 = internal.parameter_3 / internal.parameter_2 * (internal.parameter_2 + species_9);
    dstatedt[2] = 0 + 1 * internal.compartment_1 * (parameter_16) - 1 * internal.compartment_1 * internal.parameter_14 * species_3 - 1 * internal.compartment_1 * (species_3 * internal.parameter_13 * species_7 * species_11 / (internal.parameter_1 + species_11) / (parameter_9 + species_3 + internal.parameter_6 * (species_5 - species_3)));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "species_1", "species_2", "species_3", "species_5", "species_7", "species_8", "species_11"];
    this.metadata.internalOrder = {compartment_1: null, initial_species_1: null, initial_species_11: null, initial_species_2: null, initial_species_3: null, initial_species_5: null, initial_species_7: null, initial_species_8: null, parameter_1: null, parameter_10: null, parameter_11: null, parameter_13: null, parameter_14: null, parameter_17: null, parameter_18: null, parameter_2: null, parameter_3: null, parameter_4: null, parameter_5: null, parameter_6: null, parameter_8: null, species_1_init: null, species_11_init: null, species_2_init: null, species_3_init: null, species_5_init: null, species_7_init: null, species_8_init: null};
    this.metadata.variableOrder = {species_1: null, species_2: null, species_3: null, species_5: null, species_7: null, species_8: null, species_11: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
