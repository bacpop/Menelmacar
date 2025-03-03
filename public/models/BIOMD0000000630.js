export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment_1 = 1;
    internal.species_5 = 0;
    internal.species_6 = 0;
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
    this.base.user.checkUser(user, ["k1", "k2", "parameter_1", "parameter_13", "parameter_2", "parameter_8", "species_1_init", "species_2_init", "species_3_init", "species_4_init", "v"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "k1", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.016, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_1", internal, 0.084000000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_13", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_2", internal, 0.032000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_8", internal, 40, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_1_init", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_3_init", internal, 0.002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_4_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v", internal, 0.01, -Infinity, Infinity, false);
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
    dstatedt[0] = 0 - 1 * internal.compartment_1 * internal.k1 * species_3 * species_1 - 1 * internal.compartment_1 * internal.k1 * species_4 * species_1 - 1 * internal.compartment_1 * internal.parameter_2 * species_1 + 1 * internal.compartment_1 * (internal.v);
    dstatedt[1] = 0 + 1 * internal.compartment_1 * internal.k1 * species_3 * species_1 - 1 * internal.compartment_1 * (internal.parameter_8 * Math.pow((species_2), (internal.parameter_13)) * species_3) + 1 * internal.compartment_1 * (internal.parameter_8 * Math.pow((species_2), (internal.parameter_13)) * species_3) + 1 * internal.compartment_1 * internal.k1 * species_4 * species_1 - 1 * internal.compartment_1 * internal.parameter_1 * species_2 - 1 * internal.compartment_1 * (internal.k1 * species_2 * internal.species_5 - internal.k2 * internal.species_6) + 1 * internal.compartment_1 * internal.k1 * internal.species_6;
    dstatedt[2] = 0 - 1 * internal.compartment_1 * internal.k1 * species_3 * species_1 + 1 * internal.compartment_1 * internal.k1 * species_3 * species_1 - 1 * internal.compartment_1 * (internal.parameter_8 * Math.pow((species_2), (internal.parameter_13)) * species_3) - 1 * internal.compartment_1 * internal.parameter_1 * species_3 + 1 * internal.compartment_1 * (internal.v);
    dstatedt[3] = 0 + 1 * internal.compartment_1 * (internal.parameter_8 * Math.pow((species_2), (internal.parameter_13)) * species_3) - 1 * internal.compartment_1 * internal.k1 * species_4 * species_1 + 1 * internal.compartment_1 * internal.k1 * species_4 * species_1 - 1 * internal.compartment_1 * internal.parameter_1 * species_4;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "species_1", "species_2", "species_3", "species_4"];
    this.metadata.internalOrder = {compartment_1: null, initial_species_1: null, initial_species_2: null, initial_species_3: null, initial_species_4: null, k1: null, k2: null, parameter_1: null, parameter_13: null, parameter_2: null, parameter_8: null, species_1_init: null, species_2_init: null, species_3_init: null, species_4_init: null, species_5: null, species_6: null, v: null};
    this.metadata.variableOrder = {species_1: null, species_2: null, species_3: null, species_4: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
