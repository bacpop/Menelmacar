export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment_1 = 1000;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(10).fill(0);
    state[0] = internal.initial_species_1;
    state[1] = internal.initial_species_7;
    state[2] = internal.initial_species_8;
    state[3] = internal.initial_species_9;
    state[4] = internal.initial_species_10;
    state[5] = internal.initial_species_11;
    state[6] = internal.initial_species_12;
    state[7] = internal.initial_species_13;
    state[8] = internal.initial_species_14;
    state[9] = internal.initial_species_15;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["parameter_1", "parameter_2", "parameter_3", "parameter_4", "parameter_5", "parameter_6", "parameter_7", "parameter_8", "species_1_init", "species_10_init", "species_11_init", "species_12_init", "species_13_init", "species_14_init", "species_15_init", "species_7_init", "species_8_init", "species_9_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "parameter_1", internal, 0.48999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_2", internal, 0.0082500000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_3", internal, 0.48999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_4", internal, 0.039, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_5", internal, 0.48999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_6", internal, 0.0025500000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_7", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_8", internal, 0.28499999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_1_init", internal, 6.69999967735732e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_10_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_11_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_12_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_13_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_14_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_15_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_7_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_8_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_9_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_species_1 = internal.species_1_init;
    internal.initial_species_10 = internal.species_10_init;
    internal.initial_species_11 = internal.species_11_init;
    internal.initial_species_12 = internal.species_12_init;
    internal.initial_species_13 = internal.species_13_init;
    internal.initial_species_14 = internal.species_14_init;
    internal.initial_species_15 = internal.species_15_init;
    internal.initial_species_7 = internal.species_7_init;
    internal.initial_species_8 = internal.species_8_init;
    internal.initial_species_9 = internal.species_9_init;
    internal.parameter_9 = 0.13500000000000001 * internal.parameter_8;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const species_1 = state[0];
    const species_7 = state[1];
    const species_8 = state[2];
    dstatedt[0] = 0 - 1 * internal.compartment_1 * (internal.parameter_2 * species_1 / (internal.parameter_1 + species_1)) - 1 * internal.compartment_1 * (internal.parameter_4 * species_1 / (internal.parameter_3 + species_1)) - 1 * internal.compartment_1 * (internal.parameter_6 * species_1 / (internal.parameter_5 + species_1));
    dstatedt[4] = 0 + 0.012 * internal.compartment_1 * (internal.parameter_2 * species_1 / (internal.parameter_1 + species_1)) + 0.014999999999999999 * internal.compartment_1 * (internal.parameter_4 * species_1 / (internal.parameter_3 + species_1)) + 0.107 * internal.compartment_1 * (internal.parameter_6 * species_1 / (internal.parameter_5 + species_1));
    dstatedt[5] = 0 + 0.16200000000000001 * internal.compartment_1 * (internal.parameter_2 * species_1 / (internal.parameter_1 + species_1)) + 0.127 * internal.compartment_1 * (internal.parameter_4 * species_1 / (internal.parameter_3 + species_1)) + 0.218 * internal.compartment_1 * (internal.parameter_6 * species_1 / (internal.parameter_5 + species_1));
    dstatedt[6] = 0 + 0.040000000000000001 * internal.compartment_1 * (internal.parameter_2 * species_1 / (internal.parameter_1 + species_1)) + 0.025999999999999999 * internal.compartment_1 * (internal.parameter_4 * species_1 / (internal.parameter_3 + species_1)) + 0.218 * internal.compartment_1 * (internal.parameter_6 * species_1 / (internal.parameter_5 + species_1));
    dstatedt[7] = 0 + 0.014 * internal.compartment_1 * (internal.parameter_2 * species_1 / (internal.parameter_1 + species_1)) + 0.017999999999999999 * internal.compartment_1 * (internal.parameter_4 * species_1 / (internal.parameter_3 + species_1)) + 0.098000000000000004 * internal.compartment_1 * (internal.parameter_6 * species_1 / (internal.parameter_5 + species_1));
    dstatedt[8] = 0 + 0.0040000000000000001 * internal.compartment_1 * (internal.parameter_2 * species_1 / (internal.parameter_1 + species_1)) + 0.016 * internal.compartment_1 * (internal.parameter_4 * species_1 / (internal.parameter_3 + species_1)) + 0.097000000000000003 * internal.compartment_1 * (internal.parameter_6 * species_1 / (internal.parameter_5 + species_1));
    dstatedt[1] = 0 + 0.57399999999999995 * internal.compartment_1 * (internal.parameter_2 * species_1 / (internal.parameter_1 + species_1)) + 0.751 * internal.compartment_1 * (internal.parameter_4 * species_1 / (internal.parameter_3 + species_1)) + 0.068000000000000005 * internal.compartment_1 * (internal.parameter_6 * species_1 / (internal.parameter_5 + species_1)) - 1 * internal.compartment_1 * (internal.parameter_8 * species_7 / (internal.parameter_7 + species_7));
    dstatedt[3] = 0 + 0.050000000000000003 * internal.compartment_1 * (internal.parameter_2 * species_1 / (internal.parameter_1 + species_1)) + 0.025000000000000001 * internal.compartment_1 * (internal.parameter_4 * species_1 / (internal.parameter_3 + species_1)) + 0.13600000000000001 * internal.compartment_1 * (internal.parameter_6 * species_1 / (internal.parameter_5 + species_1));
    dstatedt[9] = 0 + 1 * internal.compartment_1 * (internal.parameter_8 * species_7 / (internal.parameter_7 + species_7)) + 1 * internal.compartment_1 * (internal.parameter_9 * species_8 / (internal.parameter_7 + species_8));
    dstatedt[2] = 0 + 0.14399999999999999 * internal.compartment_1 * (internal.parameter_2 * species_1 / (internal.parameter_1 + species_1)) + 0.023 * internal.compartment_1 * (internal.parameter_4 * species_1 / (internal.parameter_3 + species_1)) + 0.058999999999999997 * internal.compartment_1 * (internal.parameter_6 * species_1 / (internal.parameter_5 + species_1)) - 1 * internal.compartment_1 * (internal.parameter_9 * species_8 / (internal.parameter_7 + species_8));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "species_1", "species_7", "species_8", "species_9", "species_10", "species_11", "species_12", "species_13", "species_14", "species_15"];
    this.metadata.internalOrder = {compartment_1: null, initial_species_1: null, initial_species_10: null, initial_species_11: null, initial_species_12: null, initial_species_13: null, initial_species_14: null, initial_species_15: null, initial_species_7: null, initial_species_8: null, initial_species_9: null, parameter_1: null, parameter_2: null, parameter_3: null, parameter_4: null, parameter_5: null, parameter_6: null, parameter_7: null, parameter_8: null, parameter_9: null, species_1_init: null, species_10_init: null, species_11_init: null, species_12_init: null, species_13_init: null, species_14_init: null, species_15_init: null, species_7_init: null, species_8_init: null, species_9_init: null};
    this.metadata.variableOrder = {species_1: null, species_7: null, species_8: null, species_9: null, species_10: null, species_11: null, species_12: null, species_13: null, species_14: null, species_15: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
