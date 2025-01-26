export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment_1 = 1;
    internal.k1 = 1;
    internal.Shalve = 1;
    internal.V = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_species_1;
    state[1] = internal.initial_species_2;
    state[2] = internal.initial_species_3;
    state[3] = internal.initial_species_4;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["parameter_1", "parameter_2", "parameter_3", "parameter_4", "parameter_5", "parameter_6", "species_1_init", "species_2_init", "species_3_init", "species_4_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "parameter_1", internal, 0.56999999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_2", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_4", internal, 6.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_5", internal, 6.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_6", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_4_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_species_1 = internal.species_1_init;
    internal.initial_species_2 = internal.species_2_init;
    internal.initial_species_3 = internal.species_3_init;
    internal.initial_species_4 = internal.species_4_init;
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
    dstatedt[0] = 0 - 1 * internal.compartment_1 * internal.k1 * species_1 + 1 * internal.compartment_1 * internal.parameter_1 * species_3 + 1 * internal.compartment_1 * (internal.V * Math.pow((species_1), (internal.parameter_5)) / (Math.pow((internal.Shalve), (internal.parameter_5)) + Math.pow((species_1), (internal.parameter_5)))) - 1 * internal.compartment_1 * (internal.V * Math.pow((species_1), (internal.parameter_5)) / (Math.pow((internal.Shalve), (internal.parameter_5)) + Math.pow((species_1), (internal.parameter_5)))) + 1 * internal.compartment_1 * internal.parameter_6 * species_4;
    dstatedt[1] = 0 - 1 * internal.compartment_1 * internal.k1 * species_2 + 1 * internal.compartment_1 * internal.parameter_2 * species_4 + 1 * internal.compartment_1 * (internal.V / (Math.pow((internal.Shalve), (internal.parameter_4)) + Math.pow((species_2), (internal.parameter_4)))) - 1 * internal.compartment_1 * (internal.V / (Math.pow((internal.Shalve), (internal.parameter_4)) + Math.pow((species_2), (internal.parameter_4))));
    dstatedt[2] = 0 - 1 * internal.compartment_1 * internal.k1 * species_3 + 1 * internal.compartment_1 * internal.parameter_1 * species_3 - 1 * internal.compartment_1 * internal.parameter_1 * species_3 + 1 * internal.compartment_1 * (internal.V / (Math.pow((internal.Shalve), (internal.parameter_4)) + Math.pow((species_2), (internal.parameter_4))));
    dstatedt[3] = 0 - 1 * internal.compartment_1 * internal.k1 * species_4 + 1 * internal.compartment_1 * internal.parameter_2 * species_4 - 1 * internal.compartment_1 * internal.parameter_2 * species_4 + 1 * internal.compartment_1 * (internal.V * Math.pow((species_1), (internal.parameter_5)) / (Math.pow((internal.Shalve), (internal.parameter_5)) + Math.pow((species_1), (internal.parameter_5)))) + 1 * internal.compartment_1 * internal.parameter_6 * species_4 - 1 * internal.compartment_1 * internal.parameter_6 * species_4;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "species_1", "species_2", "species_3", "species_4"];
    this.metadata.internalOrder = {compartment_1: null, initial_species_1: null, initial_species_2: null, initial_species_3: null, initial_species_4: null, k1: null, parameter_1: null, parameter_2: null, parameter_3: null, parameter_4: null, parameter_5: null, parameter_6: null, Shalve: null, species_1_init: null, species_2_init: null, species_3_init: null, species_4_init: null, V: null};
    this.metadata.variableOrder = {species_1: null, species_2: null, species_3: null, species_4: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
