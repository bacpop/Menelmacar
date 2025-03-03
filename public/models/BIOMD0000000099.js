export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment_0 = 1;
    internal.compartment_1 = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(7).fill(0);
    state[0] = internal.initial_species_0;
    state[1] = internal.initial_species_1;
    state[2] = internal.initial_species_2;
    state[3] = internal.initial_species_3;
    state[4] = internal.initial_species_4;
    state[5] = internal.initial_species_5;
    state[6] = internal.initial_species_6;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["parameter_0", "parameter_1", "parameter_10", "parameter_11", "parameter_12", "parameter_13", "parameter_2", "parameter_3", "parameter_4", "parameter_5", "parameter_6", "parameter_7", "parameter_8", "parameter_9", "species_0_init", "species_1_init", "species_2_init", "species_3_init", "species_4_init", "species_5_init", "species_6_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "parameter_0", internal, 1.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_1", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_10", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_11", internal, 3.1000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_12", internal, 33, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_13", internal, 4.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_2", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_3", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_4", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_5", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_6", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_7", internal, 1.3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_8", internal, 0.28999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_9", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_1_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_2_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_3_init", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_4_init", internal, 1.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_5_init", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_6_init", internal, 1.6000000000000001, -Infinity, Infinity, false);
    internal.initial_species_0 = internal.species_0_init;
    internal.initial_species_1 = internal.species_1_init;
    internal.initial_species_2 = internal.species_2_init;
    internal.initial_species_3 = internal.species_3_init;
    internal.initial_species_4 = internal.species_4_init;
    internal.initial_species_5 = internal.species_5_init;
    internal.initial_species_6 = internal.species_6_init;
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
    dstatedt[0] = 0 + 1 * internal.compartment_0 * internal.parameter_10 * species_4 - 1 * internal.compartment_0 * internal.parameter_11 * species_0;
    dstatedt[1] = 0 + 1 * internal.compartment_1 * internal.parameter_8 * species_4 - 1 * internal.compartment_1 * internal.parameter_9 * species_1 * species_3;
    dstatedt[2] = 0 + 1 * internal.compartment_1 * internal.parameter_2 * species_1 - 1 * internal.compartment_1 * internal.parameter_3 * species_2;
    dstatedt[3] = 0 + 1 * internal.compartment_1 * internal.parameter_6 - 1 * internal.compartment_1 * internal.parameter_7 * species_3 * species_6;
    dstatedt[4] = 0 + 1 * internal.compartment_1 * internal.parameter_0 * species_6 - 1 * internal.compartment_1 * internal.parameter_1 * species_4;
    dstatedt[5] = 0 + 1 * internal.compartment_1 * internal.parameter_12 * species_0 - 1 * internal.compartment_1 * internal.parameter_13 * species_5 * species_2;
    dstatedt[6] = 0 + 1 * internal.compartment_1 * internal.parameter_4 * species_5 - 1 * internal.compartment_1 * internal.parameter_5 * species_6 * species_2;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "species_0", "species_1", "species_2", "species_3", "species_4", "species_5", "species_6"];
    this.metadata.internalOrder = {compartment_0: null, compartment_1: null, initial_species_0: null, initial_species_1: null, initial_species_2: null, initial_species_3: null, initial_species_4: null, initial_species_5: null, initial_species_6: null, parameter_0: null, parameter_1: null, parameter_10: null, parameter_11: null, parameter_12: null, parameter_13: null, parameter_2: null, parameter_3: null, parameter_4: null, parameter_5: null, parameter_6: null, parameter_7: null, parameter_8: null, parameter_9: null, species_0_init: null, species_1_init: null, species_2_init: null, species_3_init: null, species_4_init: null, species_5_init: null, species_6_init: null};
    this.metadata.variableOrder = {species_0: null, species_1: null, species_2: null, species_3: null, species_4: null, species_5: null, species_6: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
