export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment_0 = 1;
    internal.species_25 = 10002000;
    internal.species_26 = 120000;
    internal.species_27 = 120000;
    internal.species_28 = 120000;
    internal.species_29 = 120000;
    internal.species_30 = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(25).fill(0);
    state[0] = internal.initial_species_0;
    state[1] = internal.initial_species_1;
    state[2] = internal.initial_species_2;
    state[3] = internal.initial_species_3;
    state[4] = internal.initial_species_4;
    state[5] = internal.initial_species_5;
    state[6] = internal.initial_species_6;
    state[7] = internal.initial_species_7;
    state[8] = internal.initial_species_8;
    state[9] = internal.initial_species_9;
    state[10] = internal.initial_species_10;
    state[11] = internal.initial_species_11;
    state[12] = internal.initial_species_12;
    state[13] = internal.initial_species_13;
    state[14] = internal.initial_species_14;
    state[15] = internal.initial_species_15;
    state[16] = internal.initial_species_16;
    state[17] = internal.initial_species_17;
    state[18] = internal.initial_species_18;
    state[19] = internal.initial_species_19;
    state[20] = internal.initial_species_20;
    state[21] = internal.initial_species_21;
    state[22] = internal.initial_species_22;
    state[23] = internal.initial_species_23;
    state[24] = internal.initial_species_24;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["k1", "k2", "kcat", "Kcat", "km", "species_0_init", "species_1_init", "species_10_init", "species_11_init", "species_12_init", "species_13_init", "species_14_init", "species_15_init", "species_16_init", "species_17_init", "species_18_init", "species_19_init", "species_2_init", "species_20_init", "species_21_init", "species_22_init", "species_23_init", "species_24_init", "species_3_init", "species_4_init", "species_5_init", "species_6_init", "species_7_init", "species_8_init", "species_9_init", "v"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "k1", internal, 0.00125, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.121008, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcat", internal, 0.88409599999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kcat", internal, 15.1212, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "km", internal, 62464.599999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_1_init", internal, 80000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_10_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_11_init", internal, 600000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_12_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_13_init", internal, 120000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_14_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_15_init", internal, 120000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_16_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_17_init", internal, 120000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_18_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_19_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_20_init", internal, 120000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_21_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_22_init", internal, 120000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_23_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_24_init", internal, 120000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_3_init", internal, 120000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_4_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_5_init", internal, 120000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_6_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_7_init", internal, 120000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_8_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_9_init", internal, 600000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v", internal, 100, -Infinity, Infinity, false);
    internal.initial_species_0 = internal.species_0_init;
    internal.initial_species_1 = internal.species_1_init;
    internal.initial_species_10 = internal.species_10_init;
    internal.initial_species_11 = internal.species_11_init;
    internal.initial_species_12 = internal.species_12_init;
    internal.initial_species_13 = internal.species_13_init;
    internal.initial_species_14 = internal.species_14_init;
    internal.initial_species_15 = internal.species_15_init;
    internal.initial_species_16 = internal.species_16_init;
    internal.initial_species_17 = internal.species_17_init;
    internal.initial_species_18 = internal.species_18_init;
    internal.initial_species_19 = internal.species_19_init;
    internal.initial_species_2 = internal.species_2_init;
    internal.initial_species_20 = internal.species_20_init;
    internal.initial_species_21 = internal.species_21_init;
    internal.initial_species_22 = internal.species_22_init;
    internal.initial_species_23 = internal.species_23_init;
    internal.initial_species_24 = internal.species_24_init;
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
    const species_0 = state[0];
    const species_1 = state[1];
    const species_2 = state[2];
    const species_3 = state[3];
    const species_4 = state[4];
    const species_5 = state[5];
    const species_6 = state[6];
    const species_7 = state[7];
    const species_8 = state[8];
    const species_9 = state[9];
    const species_10 = state[10];
    const species_11 = state[11];
    const species_12 = state[12];
    const species_13 = state[13];
    const species_14 = state[14];
    const species_15 = state[15];
    const species_16 = state[16];
    const species_17 = state[17];
    const species_19 = state[19];
    const species_20 = state[20];
    const species_21 = state[21];
    const species_22 = state[22];
    const species_23 = state[23];
    const species_24 = state[24];
    dstatedt[0] = 0 + 1 * internal.compartment_0 * (internal.k1 * internal.species_25 * species_1 - internal.k2 * species_0) - 1 * internal.compartment_0 * internal.k1 * species_0;
    dstatedt[1] = 0 - 1 * internal.compartment_0 * (internal.k1 * internal.species_25 * species_1 - internal.k2 * species_0) + 1 * internal.compartment_0 * (internal.v) - 1 * internal.compartment_0 * internal.k1 * species_1;
    dstatedt[10] = 0 + 1 * internal.compartment_0 * (internal.Kcat * species_8 * species_11 / (internal.km + species_11)) - 1 * internal.compartment_0 * (internal.Kcat * internal.species_26 * species_10 / (internal.km + species_10));
    dstatedt[11] = 0 - 1 * internal.compartment_0 * (internal.Kcat * species_8 * species_11 / (internal.km + species_11)) + 1 * internal.compartment_0 * (internal.Kcat * internal.species_26 * species_10 / (internal.km + species_10));
    dstatedt[12] = 0 + 1 * internal.compartment_0 * (internal.Kcat * species_10 * species_13 / (internal.km + species_13)) - 1 * internal.compartment_0 * internal.k1 * species_12;
    dstatedt[13] = 0 - 1 * internal.compartment_0 * (internal.Kcat * species_10 * species_13 / (internal.km + species_13)) + 1 * internal.compartment_0 * internal.k1 * species_12;
    dstatedt[14] = 0 + 1 * internal.compartment_0 * (internal.Kcat * species_0 * species_15 / (internal.km + species_15)) + 1 * internal.compartment_0 * (internal.Kcat * species_4 * species_15 / (internal.km + species_15)) - 1 * internal.compartment_0 * internal.k1 * species_14;
    dstatedt[15] = 0 - 1 * internal.compartment_0 * (internal.Kcat * species_0 * species_15 / (internal.km + species_15)) - 1 * internal.compartment_0 * (internal.Kcat * species_4 * species_15 / (internal.km + species_15)) + 1 * internal.compartment_0 * internal.k1 * species_14;
    dstatedt[16] = 0 + 1 * internal.compartment_0 * (internal.Kcat * species_14 * species_17 / (internal.km + species_17)) - 1 * internal.compartment_0 * internal.k1 * species_16;
    dstatedt[17] = 0 - 1 * internal.compartment_0 * (internal.Kcat * species_14 * species_17 / (internal.km + species_17)) + 1 * internal.compartment_0 * internal.k1 * species_16;
    dstatedt[18] = 0 + 1 * internal.compartment_0 * internal.k1 * species_0 + 1 * internal.compartment_0 * internal.k1 * species_1;
    dstatedt[19] = 0 + 1 * internal.compartment_0 * (internal.kcat * species_0 * species_20 / (internal.km + species_20)) - 1 * internal.compartment_0 * internal.k1 * species_19;
    dstatedt[2] = 0 + 1 * internal.compartment_0 * (internal.Kcat * species_0 * species_3 / (internal.km + species_3)) - 1 * internal.compartment_0 * internal.k1 * species_2 - 1 * internal.compartment_0 * (internal.Kcat * species_12 * species_2 / (internal.km + species_2));
    dstatedt[20] = 0 - 1 * internal.compartment_0 * (internal.kcat * species_0 * species_20 / (internal.km + species_20)) + 1 * internal.compartment_0 * internal.k1 * species_19;
    dstatedt[21] = 0 + 1 * internal.compartment_0 * (internal.kcat * species_19 * species_22 / (internal.km + species_22)) - 1 * internal.compartment_0 * (internal.kcat * internal.species_29 * species_21 / (internal.km + species_21));
    dstatedt[22] = 0 - 1 * internal.compartment_0 * (internal.kcat * species_19 * species_22 / (internal.km + species_22)) + 1 * internal.compartment_0 * (internal.kcat * internal.species_29 * species_21 / (internal.km + species_21));
    dstatedt[23] = 0 + 1 * internal.compartment_0 * (internal.kcat * species_21 * species_24 / (internal.km + species_24)) - 1 * internal.compartment_0 * (internal.kcat * internal.species_27 * species_23 / (internal.km + species_23)) + 1 * internal.compartment_0 * (internal.kcat * species_4 * species_24 / (internal.km + species_24));
    dstatedt[24] = 0 - 1 * internal.compartment_0 * (internal.kcat * species_21 * species_24 / (internal.km + species_24)) + 1 * internal.compartment_0 * (internal.kcat * internal.species_27 * species_23 / (internal.km + species_23)) - 1 * internal.compartment_0 * (internal.kcat * species_4 * species_24 / (internal.km + species_24));
    dstatedt[3] = 0 - 1 * internal.compartment_0 * (internal.Kcat * species_0 * species_3 / (internal.km + species_3)) + 1 * internal.compartment_0 * internal.k1 * species_2 + 1 * internal.compartment_0 * (internal.Kcat * species_12 * species_2 / (internal.km + species_2));
    dstatedt[4] = 0 + 1 * internal.compartment_0 * (internal.Kcat * species_2 * species_5 / (internal.km + species_5)) - 1 * internal.compartment_0 * (internal.Kcat * internal.species_28 * species_4 / (internal.km + species_4));
    dstatedt[5] = 0 - 1 * internal.compartment_0 * (internal.Kcat * species_2 * species_5 / (internal.km + species_5)) + 1 * internal.compartment_0 * (internal.Kcat * internal.species_28 * species_4 / (internal.km + species_4));
    dstatedt[6] = 0 + 1 * internal.compartment_0 * (internal.Kcat * species_4 * species_7 / (internal.km + species_7)) - 1 * internal.compartment_0 * (internal.Kcat * internal.species_27 * species_6 / (internal.km + species_6)) - 1 * internal.compartment_0 * (internal.Kcat * species_16 * species_6 / (internal.km + species_6));
    dstatedt[7] = 0 - 1 * internal.compartment_0 * (internal.Kcat * species_4 * species_7 / (internal.km + species_7)) + 1 * internal.compartment_0 * (internal.Kcat * internal.species_27 * species_6 / (internal.km + species_6)) + 1 * internal.compartment_0 * (internal.Kcat * species_16 * species_6 / (internal.km + species_6));
    dstatedt[8] = 0 + 1 * internal.compartment_0 * (internal.Kcat * species_6 * species_9 / (internal.km + species_9)) - 1 * internal.compartment_0 * (internal.Kcat * internal.species_26 * species_8 / (internal.km + species_8)) + 1 * internal.compartment_0 * (internal.kcat * species_23 * species_9 / (internal.km + species_9));
    dstatedt[9] = 0 - 1 * internal.compartment_0 * (internal.Kcat * species_6 * species_9 / (internal.km + species_9)) + 1 * internal.compartment_0 * (internal.Kcat * internal.species_26 * species_8 / (internal.km + species_8)) - 1 * internal.compartment_0 * (internal.kcat * species_23 * species_9 / (internal.km + species_9));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "species_0", "species_1", "species_2", "species_3", "species_4", "species_5", "species_6", "species_7", "species_8", "species_9", "species_10", "species_11", "species_12", "species_13", "species_14", "species_15", "species_16", "species_17", "species_18", "species_19", "species_20", "species_21", "species_22", "species_23", "species_24"];
    this.metadata.internalOrder = {compartment_0: null, initial_species_0: null, initial_species_1: null, initial_species_10: null, initial_species_11: null, initial_species_12: null, initial_species_13: null, initial_species_14: null, initial_species_15: null, initial_species_16: null, initial_species_17: null, initial_species_18: null, initial_species_19: null, initial_species_2: null, initial_species_20: null, initial_species_21: null, initial_species_22: null, initial_species_23: null, initial_species_24: null, initial_species_3: null, initial_species_4: null, initial_species_5: null, initial_species_6: null, initial_species_7: null, initial_species_8: null, initial_species_9: null, k1: null, k2: null, kcat: null, Kcat: null, km: null, species_0_init: null, species_1_init: null, species_10_init: null, species_11_init: null, species_12_init: null, species_13_init: null, species_14_init: null, species_15_init: null, species_16_init: null, species_17_init: null, species_18_init: null, species_19_init: null, species_2_init: null, species_20_init: null, species_21_init: null, species_22_init: null, species_23_init: null, species_24_init: null, species_25: null, species_26: null, species_27: null, species_28: null, species_29: null, species_3_init: null, species_30: null, species_4_init: null, species_5_init: null, species_6_init: null, species_7_init: null, species_8_init: null, species_9_init: null, v: null};
    this.metadata.variableOrder = {species_0: null, species_1: null, species_2: null, species_3: null, species_4: null, species_5: null, species_6: null, species_7: null, species_8: null, species_9: null, species_10: null, species_11: null, species_12: null, species_13: null, species_14: null, species_15: null, species_16: null, species_17: null, species_18: null, species_19: null, species_20: null, species_21: null, species_22: null, species_23: null, species_24: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
