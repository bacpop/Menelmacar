export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment_1 = 1;
    internal.compartment_2 = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(11).fill(0);
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
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["k1", "k10b", "k2a", "k3", "k4", "k5a", "k5b", "k6a", "k6b", "k7", "k9b", "parameter_1", "parameter_10", "parameter_11", "parameter_12", "parameter_13", "parameter_14", "parameter_2", "parameter_3", "parameter_4", "parameter_5", "parameter_6", "parameter_7", "parameter_8", "parameter_9", "species_1_init", "species_10_init", "species_11_init", "species_2_init", "species_3_init", "species_4_init", "species_5_init", "species_6_init", "species_7_init", "species_8_init", "species_9_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "k1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10b", internal, 0.085999999999999993, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2a", internal, 0.085999999999999993, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5a", internal, 0.091999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5b", internal, 0.091999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6a", internal, 0.085999999999999993, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6b", internal, 0.085999999999999993, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9b", internal, 0.091999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_1", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_10", internal, 108.59999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_11", internal, 3e+51, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_12", internal, 3e+51, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_13", internal, 24.300000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_14", internal, 108.59999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_2", internal, 54.299999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_3", internal, 50.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_4", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_5", internal, 24.300000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_6", internal, 108.59999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_7", internal, 50.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_8", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_9", internal, 24.300000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_1_init", internal, 300, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_10_init", internal, 200, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_11_init", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_3_init", internal, 1199.9999422132501, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_4_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_5_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_6_init", internal, 1199.9999422132501, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_7_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_8_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_9_init", internal, 100, -Infinity, Infinity, false);
    internal.initial_species_1 = internal.species_1_init;
    internal.initial_species_10 = internal.species_10_init;
    internal.initial_species_11 = internal.species_11_init;
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
    dstatedt[9] = 0;
    dstatedt[10] = 0;
    dstatedt[8] = 0;
    dstatedt[0] = 0 - 1 * internal.compartment_1 * (internal.k1 * species_11 * species_1 / (internal.parameter_1 + species_1)) + 1 * internal.compartment_1 * (internal.k2a * species_2 * species_9 / internal.parameter_2 / (1 + species_2 / internal.parameter_2 + species_1 / internal.parameter_11 + species_5 / internal.parameter_5 + species_4 / internal.parameter_6 + species_3 / internal.parameter_11));
    dstatedt[1] = 0 + 1 * internal.compartment_1 * (internal.k1 * species_11 * species_1 / (internal.parameter_1 + species_1)) - 1 * internal.compartment_1 * (internal.k2a * species_2 * species_9 / internal.parameter_2 / (1 + species_2 / internal.parameter_2 + species_1 / internal.parameter_11 + species_5 / internal.parameter_5 + species_4 / internal.parameter_6 + species_3 / internal.parameter_11));
    dstatedt[2] = 0 - 1 * internal.compartment_1 * (internal.k3 * species_2 * species_3 / internal.parameter_3 / (1 + species_3 / internal.parameter_3 + species_4 / internal.parameter_4)) + 1 * internal.compartment_1 * (internal.k6a * species_9 * species_4 / internal.parameter_6 / (1 + species_2 / internal.parameter_2 + species_1 / internal.parameter_11 + species_5 / internal.parameter_5 + species_4 / internal.parameter_6 + species_3 / internal.parameter_11) + internal.k6b * species_10 * species_4 / internal.parameter_14 / (1 + species_5 / internal.parameter_13 + species_4 / internal.parameter_14 + species_3 / internal.parameter_12 + species_6 / internal.parameter_12 + species_7 / internal.parameter_10 + species_8 / internal.parameter_9));
    dstatedt[3] = 0 + 1 * internal.compartment_1 * (internal.k3 * species_2 * species_3 / internal.parameter_3 / (1 + species_3 / internal.parameter_3 + species_4 / internal.parameter_4)) - 1 * internal.compartment_1 * (internal.k4 * species_2 * species_4 / internal.parameter_4 / (1 + species_3 / internal.parameter_3 + species_4 / internal.parameter_4)) + 1 * internal.compartment_1 * (internal.k5a * species_9 * species_5 / internal.parameter_5 / (1 + species_2 / internal.parameter_2 + species_1 / internal.parameter_11 + species_5 / internal.parameter_5 + species_4 / internal.parameter_6 + species_3 / internal.parameter_11) + internal.k5b * species_10 * species_5 / internal.parameter_13 / (1 + species_5 / internal.parameter_13 + species_4 / internal.parameter_14 + species_3 / internal.parameter_12 + species_6 / internal.parameter_12 + species_7 / internal.parameter_10 + species_8 / internal.parameter_9)) - 1 * internal.compartment_1 * (internal.k6a * species_9 * species_4 / internal.parameter_6 / (1 + species_2 / internal.parameter_2 + species_1 / internal.parameter_11 + species_5 / internal.parameter_5 + species_4 / internal.parameter_6 + species_3 / internal.parameter_11) + internal.k6b * species_10 * species_4 / internal.parameter_14 / (1 + species_5 / internal.parameter_13 + species_4 / internal.parameter_14 + species_3 / internal.parameter_12 + species_6 / internal.parameter_12 + species_7 / internal.parameter_10 + species_8 / internal.parameter_9));
    dstatedt[4] = 0 + 1 * internal.compartment_1 * (internal.k4 * species_2 * species_4 / internal.parameter_4 / (1 + species_3 / internal.parameter_3 + species_4 / internal.parameter_4)) - 1 * internal.compartment_1 * (internal.k5a * species_9 * species_5 / internal.parameter_5 / (1 + species_2 / internal.parameter_2 + species_1 / internal.parameter_11 + species_5 / internal.parameter_5 + species_4 / internal.parameter_6 + species_3 / internal.parameter_11) + internal.k5b * species_10 * species_5 / internal.parameter_13 / (1 + species_5 / internal.parameter_13 + species_4 / internal.parameter_14 + species_3 / internal.parameter_12 + species_6 / internal.parameter_12 + species_7 / internal.parameter_10 + species_8 / internal.parameter_9));
    dstatedt[5] = 0 - 1 * internal.compartment_1 * (internal.k7 * species_5 * species_6 / internal.parameter_7 / (1 + species_6 / internal.parameter_7 + species_7 / internal.parameter_8)) + 1 * internal.compartment_1 * (internal.k10b * species_10 * species_7 / internal.parameter_10 / (1 + species_5 / internal.parameter_13 + species_4 / internal.parameter_14 + species_3 / internal.parameter_12 + species_6 / internal.parameter_12 + species_7 / internal.parameter_10 + species_8 / internal.parameter_9));
    dstatedt[6] = 0 + 1 * internal.compartment_1 * (internal.k7 * species_5 * species_6 / internal.parameter_7 / (1 + species_6 / internal.parameter_7 + species_7 / internal.parameter_8)) - 1 * internal.compartment_1 * (internal.k7 * species_5 * species_7 / internal.parameter_8 / (1 + species_6 / internal.parameter_7 + species_7 / internal.parameter_8)) + 1 * internal.compartment_1 * (internal.k9b * species_10 * species_8 / internal.parameter_9 / (1 + species_9 / internal.parameter_13 + species_4 / internal.parameter_14 + species_3 / internal.parameter_12 + species_6 / internal.parameter_12 + species_7 / internal.parameter_10 + species_8 / internal.parameter_9)) - 1 * internal.compartment_1 * (internal.k10b * species_10 * species_7 / internal.parameter_10 / (1 + species_5 / internal.parameter_13 + species_4 / internal.parameter_14 + species_3 / internal.parameter_12 + species_6 / internal.parameter_12 + species_7 / internal.parameter_10 + species_8 / internal.parameter_9));
    dstatedt[7] = 0 + 1 * internal.compartment_1 * (internal.k7 * species_5 * species_7 / internal.parameter_8 / (1 + species_6 / internal.parameter_7 + species_7 / internal.parameter_8)) - 1 * internal.compartment_1 * (internal.k9b * species_10 * species_8 / internal.parameter_9 / (1 + species_9 / internal.parameter_13 + species_4 / internal.parameter_14 + species_3 / internal.parameter_12 + species_6 / internal.parameter_12 + species_7 / internal.parameter_10 + species_8 / internal.parameter_9));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "species_1", "species_2", "species_3", "species_4", "species_5", "species_6", "species_7", "species_8", "species_9", "species_10", "species_11"];
    this.metadata.internalOrder = {compartment_1: null, compartment_2: null, initial_species_1: null, initial_species_10: null, initial_species_11: null, initial_species_2: null, initial_species_3: null, initial_species_4: null, initial_species_5: null, initial_species_6: null, initial_species_7: null, initial_species_8: null, initial_species_9: null, k1: null, k10b: null, k2a: null, k3: null, k4: null, k5a: null, k5b: null, k6a: null, k6b: null, k7: null, k9b: null, parameter_1: null, parameter_10: null, parameter_11: null, parameter_12: null, parameter_13: null, parameter_14: null, parameter_2: null, parameter_3: null, parameter_4: null, parameter_5: null, parameter_6: null, parameter_7: null, parameter_8: null, parameter_9: null, species_1_init: null, species_10_init: null, species_11_init: null, species_2_init: null, species_3_init: null, species_4_init: null, species_5_init: null, species_6_init: null, species_7_init: null, species_8_init: null, species_9_init: null};
    this.metadata.variableOrder = {species_1: null, species_2: null, species_3: null, species_4: null, species_5: null, species_6: null, species_7: null, species_8: null, species_9: null, species_10: null, species_11: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
