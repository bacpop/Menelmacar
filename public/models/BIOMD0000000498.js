export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment_1 = 1;
    internal.compartment_3 = 1;
    internal.species_11 = 9.9999999999999995e-08;
    internal.species_43 = 5.0000000000000004e-06;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(19).fill(0);
    state[0] = internal.initial_species_7;
    state[1] = internal.initial_species_24;
    state[2] = internal.initial_species_25;
    state[3] = internal.initial_species_26;
    state[4] = internal.initial_species_1;
    state[5] = internal.initial_species_5;
    state[6] = internal.initial_species_2;
    state[7] = internal.initial_species_4;
    state[8] = internal.initial_species_6;
    state[9] = internal.initial_species_3;
    state[10] = internal.initial_species_12;
    state[11] = internal.initial_species_8;
    state[12] = internal.initial_species_9;
    state[13] = internal.initial_species_15;
    state[14] = internal.initial_species_16;
    state[15] = internal.initial_species_17;
    state[16] = internal.initial_species_18;
    state[17] = internal.initial_species_19;
    state[18] = internal.initial_species_10;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "a1", "basal", "C", "K", "k1", "K1", "kloss", "Km", "n", "species_1_init", "species_10_init", "species_12_init", "species_15_init", "species_16_init", "species_17_init", "species_18_init", "species_19_init", "species_2_init", "species_24_init", "species_25_init", "species_26_init", "species_3_init", "species_4_init", "species_5_init", "species_6_init", "species_7_init", "species_8_init", "species_9_init", "v", "V"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 2.1432000000000002e-15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a1", internal, 4.9999999999999997e-12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "basal", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C", internal, 17777.700000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K", internal, 1.9999999999999999e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 3.2089999999999999e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1", internal, 5.9999999999999997e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kloss", internal, 13.112, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km", internal, 1.7799999999999999e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_1_init", internal, 3.5599999999999999e-11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_10_init", internal, 3.0000000000000001e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_12_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_15_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_16_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_17_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_18_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_19_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_2_init", internal, 1.3e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_24_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_25_init", internal, 1.66e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_26_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_3_init", internal, 3.9999999999999998e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_4_init", internal, 1.0000000000000001e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_5_init", internal, 1.0000000000000001e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_6_init", internal, 1.1599999999999999e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_7_init", internal, 5.0000000000000001e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_8_init", internal, 1.9999999999999999e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_9_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v", internal, 3e-11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V", internal, 2.1800000000000001e-05, -Infinity, Infinity, false);
    internal.initial_species_1 = internal.species_1_init;
    internal.initial_species_10 = internal.species_10_init;
    internal.initial_species_12 = internal.species_12_init;
    internal.initial_species_15 = internal.species_15_init;
    internal.initial_species_16 = internal.species_16_init;
    internal.initial_species_17 = internal.species_17_init;
    internal.initial_species_18 = internal.species_18_init;
    internal.initial_species_19 = internal.species_19_init;
    internal.initial_species_2 = internal.species_2_init;
    internal.initial_species_24 = internal.species_24_init;
    internal.initial_species_25 = internal.species_25_init;
    internal.initial_species_26 = internal.species_26_init;
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
    const species_7 = state[0];
    const species_24 = state[1];
    const species_25 = state[2];
    const species_26 = state[3];
    const species_1 = state[4];
    const species_5 = state[5];
    const species_2 = state[6];
    const species_4 = state[7];
    const species_6 = state[8];
    const species_3 = state[9];
    const species_12 = state[10];
    const species_8 = state[11];
    const species_9 = state[12];
    const species_15 = state[13];
    const species_16 = state[14];
    const species_17 = state[15];
    const species_18 = state[16];
    const species_19 = state[17];
    const species_10 = state[18];
    dstatedt[4] = 0 + 1 * internal.compartment_1 * (internal.a * (species_5 / (internal.K + species_5))) - 1 * internal.compartment_1 * internal.k1 * species_1;
    dstatedt[18] = 0 + 1 * internal.compartment_3 * (internal.v) - 1 * internal.compartment_3 * (internal.a * (1 - Math.pow((internal.species_43), (internal.n)) / (Math.pow((internal.K), (internal.n)) + Math.pow((internal.species_43), (internal.n)))) * species_10) - 1 * internal.compartment_3 * internal.k1 * Math.pow((species_8), (2)) * species_10 + 1 * internal.compartment_3 * internal.k1 * species_18 - 1 * internal.compartment_3 * internal.k1 * internal.species_43 * species_10 + 1 * internal.compartment_3 * internal.k1 * species_15 + 1 * internal.k1 * species_19;
    dstatedt[10] = 0 + 1 * internal.compartment_3 * internal.k1 * internal.species_43 * species_3 - 1 * internal.compartment_3 * internal.k1 * species_12 - 1 * internal.compartment_3 * internal.k1 * species_12 * internal.species_43 + 1 * internal.compartment_3 * internal.k1 * species_16;
    dstatedt[13] = 0 + 1 * internal.compartment_3 * internal.k1 * internal.species_43 * species_10 - 1 * internal.compartment_3 * internal.k1 * species_15 - 1 * internal.compartment_3 * internal.k1 * species_15 * internal.species_43 + 1 * internal.compartment_3 * internal.k1 * species_19;
    dstatedt[14] = 0 + 1 * internal.compartment_3 * internal.k1 * species_12 * internal.species_43 - 1 * internal.compartment_3 * internal.k1 * species_16 - 1 * internal.k1 * species_16;
    dstatedt[15] = 0 + 1 * internal.compartment_3 * internal.k1 * species_9 * species_8 - 1 * internal.compartment_3 * internal.k1 * species_17 - 1 * internal.compartment_3 * internal.k1 * species_17;
    dstatedt[16] = 0 + 1 * internal.compartment_3 * internal.k1 * Math.pow((species_8), (2)) * species_10 - 1 * internal.compartment_3 * internal.k1 * species_18 - 1 * internal.compartment_3 * internal.k1 * species_18;
    dstatedt[17] = 0 + 1 * internal.compartment_3 * internal.k1 * species_15 * internal.species_43 - 1 * internal.compartment_3 * internal.k1 * species_19 - 1 * internal.k1 * species_19;
    dstatedt[6] = 0 - 2 * (internal.a * (Math.pow((species_4), (internal.n)) / (Math.pow((internal.K), (internal.n)) + Math.pow((species_4), (internal.n)))) * species_2) + 4 * internal.k1 * species_16 + 4 * internal.k1 * species_19 - 1 * internal.compartment_1 * internal.k1 * species_2 - 1 * internal.compartment_1 * internal.k1 * species_2 * species_25 + 1 * internal.compartment_1 * internal.k1 * species_24 + 1 * internal.compartment_1 * (species_26 * internal.kloss * (1 + 0.048000000000000001 * (species_26 / species_25) / (1 + species_26 / species_25))) + 1 * internal.compartment_1 * (internal.K * (species_26 / species_25) * species_25) + 1 * internal.compartment_1 * (species_1 * internal.C * species_5 / (internal.K + species_5));
    dstatedt[1] = 0 + 1 * internal.compartment_1 * internal.k1 * species_2 * species_25 - 1 * internal.compartment_1 * internal.k1 * species_24 - 1 * internal.compartment_1 * internal.k1 * species_24;
    dstatedt[2] = 0 - 1 * internal.compartment_1 * internal.k1 * species_2 * species_25 + 1 * internal.compartment_1 * internal.k1 * species_24 + 1 * internal.compartment_1 * internal.k1 * species_24 + 1 * internal.compartment_1 * (internal.a * (1 - Math.pow((species_6), (internal.n)) / (Math.pow((internal.K), (internal.n)) + Math.pow((species_6), (internal.n))))) - 1 * internal.compartment_1 * internal.k1 * species_25;
    dstatedt[3] = 0 + 1 * internal.compartment_1 * internal.k1 * species_24 - 1 * internal.compartment_1 * (species_26 * internal.kloss * (1 + 0.048000000000000001 * (species_26 / species_25) / (1 + species_26 / species_25))) - 1 * internal.compartment_1 * (internal.K * (species_26 / species_25) * species_25);
    dstatedt[9] = 0 + 1 * internal.compartment_3 * (internal.a * Math.pow((species_6), (internal.n)) / (Math.pow((internal.K), (internal.n)) + Math.pow((species_6), (internal.n)))) - 1 * internal.compartment_3 * internal.k1 * species_3 - 1 * internal.compartment_3 * internal.k1 * species_8 * species_3 + 1 * internal.compartment_3 * internal.k1 * species_9 - 1 * internal.compartment_3 * internal.k1 * internal.species_43 * species_3 + 1 * internal.compartment_3 * internal.k1 * species_12 + 1 * internal.k1 * species_16;
    dstatedt[7] = 0 + 1 * internal.compartment_1 * (internal.a * (1 - Math.pow((species_6), (internal.n)) / (Math.pow((internal.K), (internal.n)) + Math.pow((species_6), (internal.n))))) - 1 * internal.compartment_1 * (internal.a * (Math.pow((species_7), (internal.n)) / (Math.pow((internal.K), (internal.n)) + Math.pow((species_7), (internal.n)))) * species_4);
    dstatedt[5] = 0 + 1 * (internal.V * internal.species_11 / (internal.Km + internal.species_11)) - 1 * (internal.V * species_5 / (internal.Km + species_5)) - 1 * internal.compartment_1 * (species_1 * internal.C * species_5 / (internal.K + species_5));
    dstatedt[8] = 0 + 1 * internal.compartment_1 * (internal.a * (1 - Math.pow((species_2), (internal.n)) / (Math.pow((internal.K), (internal.n)) + Math.pow((species_2), (internal.n))))) - 1 * internal.compartment_1 * internal.k1 * species_6;
    dstatedt[0] = 0 + 1 * internal.compartment_1 * (internal.basal + internal.a * Math.pow((species_18), (internal.n)) / (Math.pow((internal.K), (internal.n)) + Math.pow((species_18), (internal.n))) + internal.a1 * species_19 / (internal.K1 + species_19)) - 1 * internal.compartment_1 * internal.k1 * species_7;
    dstatedt[11] = 0 - 1 * internal.compartment_3 * internal.k1 * species_8 + 1 * internal.compartment_3 * (internal.v) - 1 * internal.compartment_3 * internal.k1 * species_8 * species_3 + 1 * internal.compartment_3 * internal.k1 * species_9 - 2 * internal.compartment_3 * internal.k1 * Math.pow((species_8), (2)) * species_10 + 2 * internal.compartment_3 * internal.k1 * species_18 - 1 * internal.compartment_3 * internal.k1 * species_9 * species_8 + 1 * internal.compartment_3 * internal.k1 * species_17;
    dstatedt[12] = 0 + 1 * internal.compartment_3 * internal.k1 * species_8 * species_3 - 1 * internal.compartment_3 * internal.k1 * species_9 - 1 * internal.compartment_3 * internal.k1 * species_9 * species_8 + 1 * internal.compartment_3 * internal.k1 * species_17;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "species_7", "species_24", "species_25", "species_26", "species_1", "species_5", "species_2", "species_4", "species_6", "species_3", "species_12", "species_8", "species_9", "species_15", "species_16", "species_17", "species_18", "species_19", "species_10"];
    this.metadata.internalOrder = {a: null, a1: null, basal: null, C: null, compartment_1: null, compartment_3: null, initial_species_1: null, initial_species_10: null, initial_species_12: null, initial_species_15: null, initial_species_16: null, initial_species_17: null, initial_species_18: null, initial_species_19: null, initial_species_2: null, initial_species_24: null, initial_species_25: null, initial_species_26: null, initial_species_3: null, initial_species_4: null, initial_species_5: null, initial_species_6: null, initial_species_7: null, initial_species_8: null, initial_species_9: null, K: null, k1: null, K1: null, kloss: null, Km: null, n: null, species_1_init: null, species_10_init: null, species_11: null, species_12_init: null, species_15_init: null, species_16_init: null, species_17_init: null, species_18_init: null, species_19_init: null, species_2_init: null, species_24_init: null, species_25_init: null, species_26_init: null, species_3_init: null, species_4_init: null, species_43: null, species_5_init: null, species_6_init: null, species_7_init: null, species_8_init: null, species_9_init: null, v: null, V: null};
    this.metadata.variableOrder = {species_7: null, species_24: null, species_25: null, species_26: null, species_1: null, species_5: null, species_2: null, species_4: null, species_6: null, species_3: null, species_12: null, species_8: null, species_9: null, species_15: null, species_16: null, species_17: null, species_18: null, species_19: null, species_10: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
