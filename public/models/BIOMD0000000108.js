export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment_0000001 = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(9).fill(0);
    state[0] = internal.initial_species_0000001;
    state[1] = internal.initial_species_0000002;
    state[2] = internal.initial_species_0000006;
    state[3] = internal.initial_species_0000007;
    state[4] = internal.initial_species_0000008;
    state[5] = internal.initial_species_0000009;
    state[6] = internal.initial_species_0000011;
    state[7] = internal.initial_species_0000016;
    state[8] = internal.initial_species_0000017;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["k1", "k10", "k11", "k12", "k13a", "k13b", "k17", "k18", "k19", "k2", "k3", "k4", "k5", "k6", "k7", "k9", "species_0000001_init", "species_0000002_init", "species_0000006_init", "species_0000007_init", "species_0000008_init", "species_0000009_init", "species_0000011_init", "species_0000016_init", "species_0000017_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "k1", internal, 6.6000000000000003e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11", internal, 250000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k12", internal, 0.38, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k13a", internal, 0.0086999999999999994, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k13b", internal, 0.0086999999999999994, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k17", internal, 30000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k18", internal, 7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k19", internal, 88000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 1600000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 1600000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 100000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 20000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 34000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 1000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_0000001_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_0000002_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_0000006_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_0000007_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_0000008_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_0000009_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_0000011_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_0000016_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_0000017_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_species_0000001 = internal.species_0000001_init;
    internal.initial_species_0000002 = internal.species_0000002_init;
    internal.initial_species_0000006 = internal.species_0000006_init;
    internal.initial_species_0000007 = internal.species_0000007_init;
    internal.initial_species_0000008 = internal.species_0000008_init;
    internal.initial_species_0000009 = internal.species_0000009_init;
    internal.initial_species_0000011 = internal.species_0000011_init;
    internal.initial_species_0000016 = internal.species_0000016_init;
    internal.initial_species_0000017 = internal.species_0000017_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const species_0000001 = state[0];
    const species_0000002 = state[1];
    const species_0000006 = state[2];
    const species_0000007 = state[3];
    const species_0000008 = state[4];
    const species_0000009 = state[5];
    const species_0000011 = state[6];
    const species_0000016 = state[7];
    const species_0000017 = state[8];
    dstatedt[7] = 0;
    dstatedt[8] = 0;
    var Cu_I_ZnSOD = species_0000016 - species_0000002;
    dstatedt[3] = 0 - 1 * internal.compartment_0000001 * internal.k4 * species_0000001 * species_0000007 + 1 * internal.compartment_0000001 * internal.k17 * species_0000011 - 1 * internal.compartment_0000001 * internal.k18 * species_0000007 - 2 * internal.compartment_0000001 * internal.k19 * Math.pow((species_0000007), (2));
    dstatedt[4] = 0 + 2 * internal.compartment_0000001 * internal.k5 * species_0000001 * species_0000006 + 2 * internal.compartment_0000001 * internal.k6 * species_0000006 * species_0000002 - 1 * internal.compartment_0000001 * internal.k9 * species_0000008 - 1 * internal.compartment_0000001 * internal.k11 * species_0000008;
    dstatedt[5] = 0 + 1 * internal.compartment_0000001 * internal.k4 * species_0000001 * species_0000007 - 1 * internal.compartment_0000001 * internal.k12 * species_0000009 + 1 * internal.compartment_0000001 * internal.k18 * species_0000007;
    var HO2star = species_0000001 / 100;
    dstatedt[0] = 0 + 1 * internal.compartment_0000001 * internal.k1 - 1 * internal.compartment_0000001 * internal.k2 * species_0000001 * species_0000002 - 1 * internal.compartment_0000001 * internal.k3 * species_0000001 * Cu_I_ZnSOD - 1 * internal.compartment_0000001 * internal.k4 * species_0000001 * species_0000007 - 1 * internal.compartment_0000001 * internal.k5 * species_0000001 * species_0000006 - 1 * internal.k10 * HO2star * internal.compartment_0000001;
    dstatedt[1] = 0 - 1 * internal.compartment_0000001 * internal.k2 * species_0000001 * species_0000002 + 1 * internal.compartment_0000001 * internal.k3 * species_0000001 * Cu_I_ZnSOD + 1 * internal.compartment_0000001 * internal.k13a * Cu_I_ZnSOD - 1 * internal.compartment_0000001 * internal.k13b * species_0000002;
    dstatedt[2] = 0 + 1 * internal.compartment_0000001 * internal.k3 * species_0000001 * Cu_I_ZnSOD - 1 * internal.compartment_0000001 * internal.k5 * species_0000001 * species_0000006 - 1 * internal.compartment_0000001 * internal.k6 * species_0000006 * species_0000002 - 1 * internal.compartment_0000001 * internal.k7 * species_0000006 * species_0000017 + 1 * internal.compartment_0000001 * internal.k10 * HO2star;
    dstatedt[6] = 0 + 1 * internal.compartment_0000001 * internal.k10 * HO2star + 1 * internal.compartment_0000001 * internal.k11 * species_0000008 - 1 * internal.compartment_0000001 * internal.k17 * species_0000011 + 1 * internal.compartment_0000001 * internal.k18 * species_0000007;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "species_0000001", "species_0000002", "species_0000006", "species_0000007", "species_0000008", "species_0000009", "species_0000011", "species_0000016", "species_0000017"];
    this.metadata.internalOrder = {compartment_0000001: null, initial_species_0000001: null, initial_species_0000002: null, initial_species_0000006: null, initial_species_0000007: null, initial_species_0000008: null, initial_species_0000009: null, initial_species_0000011: null, initial_species_0000016: null, initial_species_0000017: null, k1: null, k10: null, k11: null, k12: null, k13a: null, k13b: null, k17: null, k18: null, k19: null, k2: null, k3: null, k4: null, k5: null, k6: null, k7: null, k9: null, species_0000001_init: null, species_0000002_init: null, species_0000006_init: null, species_0000007_init: null, species_0000008_init: null, species_0000009_init: null, species_0000011_init: null, species_0000016_init: null, species_0000017_init: null};
    this.metadata.variableOrder = {species_0000001: null, species_0000002: null, species_0000006: null, species_0000007: null, species_0000008: null, species_0000009: null, species_0000011: null, species_0000016: null, species_0000017: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
