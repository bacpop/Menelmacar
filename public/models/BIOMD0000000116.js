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
    var state = Array(6).fill(0);
    state[0] = internal.initial_species_0;
    state[1] = internal.initial_species_1;
    state[2] = internal.initial_species_2;
    state[3] = internal.initial_species_3;
    state[4] = internal.initial_species_4;
    state[5] = internal.initial_species_5;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["parameter_0", "parameter_1", "parameter_10", "parameter_11", "parameter_12", "parameter_13", "parameter_14", "parameter_15", "parameter_16", "parameter_17", "parameter_18", "parameter_19", "parameter_2", "parameter_3", "parameter_4", "parameter_5", "parameter_6", "parameter_7", "parameter_8", "parameter_9", "species_0_init", "species_1_init", "species_2_init", "species_3_init", "species_4_init", "species_5_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "parameter_0", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_1", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_10", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_11", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_12", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_13", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_14", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_15", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_16", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_17", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_18", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_19", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_2", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_3", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_4", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_5", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_6", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_7", internal, 8.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_8", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_9", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_0_init", internal, 1.0236670000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_1_init", internal, 2.1542309999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_2_init", internal, 6.2717929999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_3_init", internal, 3.2036920000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_4_init", internal, 8.2321919999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_5_init", internal, 9.3120209999999997, -Infinity, Infinity, false);
    internal.initial_species_0 = internal.species_0_init;
    internal.initial_species_1 = internal.species_1_init;
    internal.initial_species_2 = internal.species_2_init;
    internal.initial_species_3 = internal.species_3_init;
    internal.initial_species_4 = internal.species_4_init;
    internal.initial_species_5 = internal.species_5_init;
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
    dstatedt[0] = 0 - 1 * internal.compartment_0 * internal.parameter_9 * species_0 * (internal.parameter_1 - species_1) + 1 * internal.compartment_0 * internal.parameter_6 * internal.parameter_7 / (1 + internal.parameter_7 / internal.parameter_8) * (internal.parameter_0 - species_0) - 1 * internal.compartment_0 * internal.parameter_12 * species_0 * (internal.parameter_4 - species_4);
    dstatedt[1] = 0 + 1 * internal.compartment_0 * internal.parameter_9 * species_0 * (internal.parameter_1 - species_1) - 1 * internal.compartment_0 * internal.parameter_10 * species_1 * (internal.parameter_2 - species_2) + 1 * internal.compartment_0 * internal.parameter_12 * species_3 * (internal.parameter_1 - species_1);
    dstatedt[2] = 0 + 1 * internal.compartment_0 * internal.parameter_10 * species_1 * (internal.parameter_2 - species_2) - 1 * internal.compartment_0 * internal.parameter_11 * species_5 * species_2 / (1 + species_2 / internal.parameter_13);
    dstatedt[3] = 0 + 1 * internal.compartment_0 * internal.parameter_15 * internal.parameter_14 / (1 + internal.parameter_14 / internal.parameter_16) * (internal.parameter_3 - species_3) - 1 * internal.compartment_0 * internal.parameter_17 * species_3 * (internal.parameter_4 - species_4) - 1 * internal.compartment_0 * internal.parameter_12 * species_3 * (internal.parameter_1 - species_1);
    dstatedt[4] = 0 + 1 * internal.compartment_0 * internal.parameter_17 * species_3 * (internal.parameter_4 - species_4) - 1 * internal.compartment_0 * internal.parameter_18 * species_4 * (internal.parameter_5 - species_5) + 1 * internal.compartment_0 * internal.parameter_12 * species_0 * (internal.parameter_4 - species_4);
    dstatedt[5] = 0 + 1 * internal.compartment_0 * internal.parameter_18 * species_4 * (internal.parameter_5 - species_5) - 1 * internal.compartment_0 * internal.parameter_11 * species_5 * species_2 / (1 + species_5 / internal.parameter_19);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "species_0", "species_1", "species_2", "species_3", "species_4", "species_5"];
    this.metadata.internalOrder = {compartment_0: null, initial_species_0: null, initial_species_1: null, initial_species_2: null, initial_species_3: null, initial_species_4: null, initial_species_5: null, parameter_0: null, parameter_1: null, parameter_10: null, parameter_11: null, parameter_12: null, parameter_13: null, parameter_14: null, parameter_15: null, parameter_16: null, parameter_17: null, parameter_18: null, parameter_19: null, parameter_2: null, parameter_3: null, parameter_4: null, parameter_5: null, parameter_6: null, parameter_7: null, parameter_8: null, parameter_9: null, species_0_init: null, species_1_init: null, species_2_init: null, species_3_init: null, species_4_init: null, species_5_init: null};
    this.metadata.variableOrder = {species_0: null, species_1: null, species_2: null, species_3: null, species_4: null, species_5: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
