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
    var state = Array(6).fill(0);
    state[0] = internal.initial_species_1;
    state[1] = internal.initial_species_2;
    state[2] = internal.initial_species_3;
    state[3] = internal.initial_species_4;
    state[4] = internal.initial_species_5;
    state[5] = internal.initial_species_6;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["parameter_1", "parameter_2", "parameter_3", "parameter_4", "parameter_5", "species_1_init", "species_2_init", "species_3_init", "species_4_init", "species_5_init", "species_6_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "parameter_1", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_2", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_3", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_4", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_5", internal, 0.034657359027989998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_4_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_5_init", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_6_init", internal, 1, -Infinity, Infinity, false);
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
    const species_1 = state[0];
    const species_2 = state[1];
    const species_3 = state[2];
    const species_4 = state[3];
    const species_5 = state[4];
    dstatedt[5] = 0;
    dstatedt[0] = 0 - 1 * internal.compartment_1 * internal.parameter_4 * species_1 * species_5 + 1 * internal.compartment_1 * (internal.parameter_1) - 1 * internal.compartment_1 * internal.parameter_5 * species_1;
    dstatedt[1] = 0 - 1 * internal.compartment_1 * internal.parameter_4 * species_2 * species_5 + 1 * internal.compartment_1 * (internal.parameter_2) - 1 * internal.compartment_1 * internal.parameter_5 * species_2;
    dstatedt[2] = 0 + 1 * internal.compartment_1 * internal.parameter_4 * species_1 * species_5 - 1 * internal.compartment_1 * internal.parameter_3 * species_3;
    dstatedt[3] = 0 + 1 * internal.compartment_1 * internal.parameter_4 * species_2 * species_5 - 1 * internal.compartment_1 * internal.parameter_3 * species_4;
    dstatedt[4] = 0 - 1 * internal.compartment_1 * internal.parameter_4 * species_1 * species_5 - 1 * internal.compartment_1 * internal.parameter_4 * species_2 * species_5 + 1 * internal.compartment_1 * internal.parameter_3 * species_3 + 1 * internal.compartment_1 * internal.parameter_3 * species_4;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "species_1", "species_2", "species_3", "species_4", "species_5", "species_6"];
    this.metadata.internalOrder = {compartment_1: null, initial_species_1: null, initial_species_2: null, initial_species_3: null, initial_species_4: null, initial_species_5: null, initial_species_6: null, parameter_1: null, parameter_2: null, parameter_3: null, parameter_4: null, parameter_5: null, species_1_init: null, species_2_init: null, species_3_init: null, species_4_init: null, species_5_init: null, species_6_init: null};
    this.metadata.variableOrder = {species_1: null, species_2: null, species_3: null, species_4: null, species_5: null, species_6: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
