export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment_1 = 1;
    internal.species_11 = 0;
    internal.species_5 = 100;
    internal.species_7 = 1;
    internal.species_8 = 0.20000000000000001;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_species_1;
    state[1] = internal.initial_species_2;
    state[2] = internal.initial_species_3;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["parameter_1", "parameter_10", "parameter_11", "parameter_17", "parameter_18", "parameter_2", "parameter_3", "parameter_4", "parameter_5", "parameter_6", "parameter_8", "species_1_init", "species_2_init", "species_3_init"], unusedUserAction);
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
    this.base.user.setUserScalar(user, "species_2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_3_init", internal, 100, -Infinity, Infinity, false);
    internal.initial_species_1 = internal.species_1_init;
    internal.initial_species_2 = internal.species_2_init;
    internal.initial_species_3 = internal.species_3_init;
    internal.parameter_13 = internal.parameter_8 * internal.parameter_10;
    internal.parameter_14 = 1 / internal.parameter_11;
    internal.parameter_16 = internal.species_5 / internal.parameter_11;
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
    var parameter_7 = internal.parameter_2 / internal.parameter_3 * (internal.parameter_3 + species_3 + internal.parameter_6 * (internal.species_5 - species_3));
    var species_10 = 0.5 * (species_1 - internal.species_8 - internal.parameter_4 + Math.sqrt(Math.pow((internal.parameter_4 - species_1 + internal.species_8), (2)) + 4 * species_1 * internal.parameter_4));
    dstatedt[0] = 0 + 1 * internal.compartment_1 * (internal.parameter_18) - 1 * internal.compartment_1 * internal.parameter_17 * species_1 - 1 * internal.compartment_1 * (species_1 * internal.parameter_8 * internal.species_8 * internal.species_11 / (1 + internal.species_11) / (internal.parameter_4 + internal.species_8 + species_10));
    var species_9 = 0.5 * (species_2 - internal.species_7 - parameter_7 + Math.sqrt(Math.pow((parameter_7 - species_2 + internal.species_7), (2)) + 4 * species_2 * parameter_7));
    dstatedt[1] = 0 + 1 * internal.compartment_1 * (internal.parameter_18) - 1 * internal.compartment_1 * internal.parameter_17 * species_2 - 1 * internal.compartment_1 * (species_2 * internal.parameter_8 * internal.species_8 * internal.species_11 / (1 + internal.species_11) / (internal.parameter_4 + internal.species_8 + species_10)) - 1 * internal.compartment_1 * (species_2 * internal.parameter_13 * internal.species_7 * internal.species_11 / (internal.parameter_1 + internal.species_11) / (parameter_7 + internal.species_7 + species_9));
    var parameter_9 = internal.parameter_3 / internal.parameter_2 * (internal.parameter_2 + species_9);
    dstatedt[2] = 0 + 1 * internal.compartment_1 * (internal.parameter_16) - 1 * internal.compartment_1 * internal.parameter_14 * species_3 - 1 * internal.compartment_1 * (species_3 * internal.parameter_13 * internal.species_7 * internal.species_11 / (internal.parameter_1 + internal.species_11) / (parameter_9 + species_3 + internal.parameter_6 * (internal.species_5 - species_3)));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "species_1", "species_2", "species_3"];
    this.metadata.internalOrder = {compartment_1: null, initial_species_1: null, initial_species_2: null, initial_species_3: null, parameter_1: null, parameter_10: null, parameter_11: null, parameter_13: null, parameter_14: null, parameter_16: null, parameter_17: null, parameter_18: null, parameter_2: null, parameter_3: null, parameter_4: null, parameter_5: null, parameter_6: null, parameter_8: null, species_1_init: null, species_11: null, species_2_init: null, species_3_init: null, species_5: null, species_7: null, species_8: null};
    this.metadata.variableOrder = {species_1: null, species_2: null, species_3: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
