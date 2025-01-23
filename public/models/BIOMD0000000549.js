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
    var state = Array(2).fill(0);
    state[0] = internal.initial_species_1;
    state[1] = internal.initial_species_2;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["parameter_1", "parameter_3", "parameter_4", "parameter_5", "parameter_6", "parameter_7", "parameter_8", "species_1_init", "species_2_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "parameter_1", internal, 0.025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_3", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_4", internal, 7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_5", internal, 1.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_6", internal, 15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_7", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_8", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_2_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_species_1 = internal.species_1_init;
    internal.initial_species_2 = internal.species_2_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const species_1 = state[0];
    const species_2 = state[1];
    dstatedt[0] = 0 + - species_1 + internal.parameter_4 * (Math.pow((species_2), (2)) / (Math.pow((internal.parameter_3), (2)) + Math.pow((species_2), (2))));
    var parameter_2 = internal.parameter_7 + (internal.parameter_8 - internal.parameter_7) * Math.pow((t), (2)) / (Math.pow((internal.parameter_6), (2)) + Math.pow((t), (2)));
    dstatedt[1] = 0 + - internal.parameter_5 * species_2 + 1 / (1 + Math.pow((species_1), (2))) * (internal.parameter_1 + parameter_2 * (Math.pow((species_2), (2)) / (1 + Math.pow((species_2), (2)))));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "species_1", "species_2"];
    this.metadata.internalOrder = {compartment_1: null, initial_species_1: null, initial_species_2: null, parameter_1: null, parameter_3: null, parameter_4: null, parameter_5: null, parameter_6: null, parameter_7: null, parameter_8: null, species_1_init: null, species_2_init: null};
    this.metadata.variableOrder = {species_1: null, species_2: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
