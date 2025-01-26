export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment_0 = 1;
    internal.K = 1;
    internal.k1 = 0.02;
    internal.k2 = 0.40000000000000002;
    internal.Km = 1.006;
    internal.kxk = 0.32000000000000001;
    internal.m = 2;
    internal.n = 2;
    internal.V = 1.3999999999999999;
    internal.Vs = 2.3999999999999999;
    internal.vsb = 1.8;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(19).fill(0);
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
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["species_0_init", "species_1_init", "species_10_init", "species_11_init", "species_12_init", "species_13_init", "species_14_init", "species_15_init", "species_16_init", "species_17_init", "species_18_init", "species_2_init", "species_3_init", "species_4_init", "species_5_init", "species_6_init", "species_7_init", "species_8_init", "species_9_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "species_0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_10_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_11_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_12_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_13_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_14_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_15_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_16_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_17_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_18_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_4_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_5_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_6_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_7_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_8_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_9_init", internal, 0, -Infinity, Infinity, false);
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
    const species_18 = state[18];
    dstatedt[0] = 0 + 1 * internal.compartment_0 * (internal.vsb * Math.pow((internal.K), (internal.m)) / (Math.pow((internal.K), (internal.m)) + Math.pow((species_18), (internal.m)))) - 1 * internal.compartment_0 * internal.k1 * species_0 - 1 * internal.compartment_0 * (internal.V * species_0 / (internal.Km + species_0));
    dstatedt[1] = 0 + 1 * internal.compartment_0 * (internal.kxk * species_0) - 1 * internal.compartment_0 * (internal.V * species_1 / (internal.Km + species_1)) - 1 * internal.compartment_0 * (internal.k1 * species_1 - internal.k2 * species_3) - 1 * internal.compartment_0 * internal.k1 * species_1 + 1 * internal.compartment_0 * (internal.V * species_2 / (internal.Km + species_2));
    dstatedt[10] = 0 + 1 * internal.compartment_0 * (internal.k1 * species_4 * species_8 - internal.k2 * species_10) - 1 * internal.compartment_0 * (internal.V * species_10 / (internal.Km + species_10)) - 1 * internal.compartment_0 * (internal.k1 * species_10 - internal.k2 * species_12) - 1 * internal.compartment_0 * internal.k1 * species_10 + 1 * internal.compartment_0 * (internal.V * species_11 / (internal.Km + species_11));
    dstatedt[11] = 0 + 1 * internal.compartment_0 * (internal.V * species_10 / (internal.Km + species_10)) - 1 * internal.compartment_0 * (internal.V * species_11 / (internal.Km + species_11)) - 1 * internal.compartment_0 * internal.k1 * species_11 - 1 * internal.compartment_0 * (internal.V * species_11 / (internal.Km + species_11));
    dstatedt[12] = 0 + 1 * internal.compartment_0 * (internal.k1 * species_10 - internal.k2 * species_12) - 1 * internal.compartment_0 * (internal.V * species_12 / (internal.Km + species_12)) - 1 * internal.compartment_0 * (internal.k1 * species_12 * species_3 - internal.k2 * species_15) + 1 * internal.compartment_0 * (internal.V * species_14 / (internal.Km + species_14)) - 1 * internal.compartment_0 * internal.k1 * species_12;
    dstatedt[13] = 0 - 1 * internal.compartment_0 * internal.k1 * species_13 + 1 * internal.compartment_0 * (internal.V * species_3 / (internal.Km + species_3)) - 1 * internal.compartment_0 * (internal.V * species_13 / (internal.Km + species_13)) - 1 * internal.compartment_0 * (internal.V * species_13 / (internal.Km + species_13));
    dstatedt[14] = 0 - 1 * internal.compartment_0 * internal.k1 * species_14 + 1 * internal.compartment_0 * (internal.V * species_12 / (internal.Km + species_12)) - 1 * internal.compartment_0 * (internal.V * species_14 / (internal.Km + species_14)) - 1 * internal.compartment_0 * (internal.V * species_14 / (internal.Km + species_14));
    dstatedt[15] = 0 + 1 * internal.compartment_0 * (internal.k1 * species_12 * species_3 - internal.k2 * species_15) - 1 * internal.compartment_0 * internal.k1 * species_15 - 1 * internal.compartment_0 * (internal.V * species_15 / (internal.Km + species_15));
    dstatedt[16] = 0 + 1 * internal.compartment_0 * (internal.Vs * Math.pow((species_3), (internal.n)) / (Math.pow((internal.K), (internal.n)) + Math.pow((species_3), (internal.n)))) - 1 * internal.compartment_0 * internal.k1 * species_16 - 1 * internal.compartment_0 * (internal.V * species_16 / (internal.Km + species_16));
    dstatedt[17] = 0 + 1 * internal.compartment_0 * (internal.kxk * species_16) - 1 * internal.compartment_0 * (internal.k1 * species_17 - internal.k2 * species_18) - 1 * internal.compartment_0 * (internal.V * species_17 / (internal.Km + species_17)) - 1 * internal.compartment_0 * internal.k1 * species_17;
    dstatedt[18] = 0 + 1 * internal.compartment_0 * (internal.k1 * species_17 - internal.k2 * species_18) - 1 * internal.compartment_0 * (internal.V * species_18 / (internal.Km + species_18)) - 1 * internal.compartment_0 * internal.k1 * species_18;
    dstatedt[2] = 0 + 1 * internal.compartment_0 * (internal.V * species_1 / (internal.Km + species_1)) - 1 * internal.compartment_0 * internal.k1 * species_2 - 1 * internal.compartment_0 * (internal.V * species_2 / (internal.Km + species_2)) - 1 * internal.compartment_0 * (internal.V * species_2 / (internal.Km + species_2));
    dstatedt[3] = 0 + 1 * internal.compartment_0 * (internal.k1 * species_1 - internal.k2 * species_3) - 1 * internal.compartment_0 * (internal.k1 * species_12 * species_3 - internal.k2 * species_15) - 1 * internal.compartment_0 * (internal.V * species_3 / (internal.Km + species_3)) - 1 * internal.compartment_0 * internal.k1 * species_3 + 1 * internal.compartment_0 * (internal.V * species_13 / (internal.Km + species_13));
    dstatedt[4] = 0 + 1 * internal.compartment_0 * (internal.kxk * species_5) - 1 * internal.compartment_0 * (internal.V * species_4 / (internal.Km + species_4)) - 1 * internal.compartment_0 * (internal.k1 * species_4 * species_8 - internal.k2 * species_10) - 1 * internal.compartment_0 * internal.k1 * species_4 + 1 * internal.compartment_0 * (internal.V * species_6 / (internal.Km + species_6));
    dstatedt[5] = 0 - 1 * internal.compartment_0 * internal.k1 * species_5 + 1 * internal.compartment_0 * (internal.Vs * Math.pow((species_3), (internal.n)) / (Math.pow((internal.K), (internal.n)) + Math.pow((species_3), (internal.n)))) - 1 * internal.compartment_0 * (internal.V * species_5 / (internal.Km + species_5));
    dstatedt[6] = 0 + 1 * internal.compartment_0 * (internal.V * species_4 / (internal.Km + species_4)) - 1 * internal.compartment_0 * (internal.V * species_6 / (internal.Km + species_6)) - 1 * internal.compartment_0 * internal.k1 * species_6 - 1 * internal.compartment_0 * (internal.V * species_6 / (internal.Km + species_6));
    dstatedt[7] = 0 + 1 * internal.compartment_0 * (internal.Vs * Math.pow((species_3), (internal.n)) / (Math.pow((internal.K), (internal.n)) + Math.pow((species_3), (internal.n)))) - 1 * internal.compartment_0 * internal.k1 * species_7 - 1 * internal.compartment_0 * (internal.V * species_7 / (internal.Km + species_7));
    dstatedt[8] = 0 + 1 * internal.compartment_0 * (internal.kxk * species_7) - 1 * internal.compartment_0 * (internal.V * species_8 / (internal.Km + species_8)) - 1 * internal.compartment_0 * (internal.k1 * species_4 * species_8 - internal.k2 * species_10) - 1 * internal.compartment_0 * internal.k1 * species_8 + 1 * internal.compartment_0 * (internal.V * species_9 / (internal.Km + species_9));
    dstatedt[9] = 0 - 1 * internal.compartment_0 * (internal.V * species_9 / (internal.Km + species_9)) + 1 * internal.compartment_0 * (internal.V * species_8 / (internal.Km + species_8)) - 1 * internal.compartment_0 * internal.k1 * species_9 - 1 * internal.compartment_0 * (internal.V * species_9 / (internal.Km + species_9));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "species_0", "species_1", "species_2", "species_3", "species_4", "species_5", "species_6", "species_7", "species_8", "species_9", "species_10", "species_11", "species_12", "species_13", "species_14", "species_15", "species_16", "species_17", "species_18"];
    this.metadata.internalOrder = {compartment_0: null, initial_species_0: null, initial_species_1: null, initial_species_10: null, initial_species_11: null, initial_species_12: null, initial_species_13: null, initial_species_14: null, initial_species_15: null, initial_species_16: null, initial_species_17: null, initial_species_18: null, initial_species_2: null, initial_species_3: null, initial_species_4: null, initial_species_5: null, initial_species_6: null, initial_species_7: null, initial_species_8: null, initial_species_9: null, K: null, k1: null, k2: null, Km: null, kxk: null, m: null, n: null, species_0_init: null, species_1_init: null, species_10_init: null, species_11_init: null, species_12_init: null, species_13_init: null, species_14_init: null, species_15_init: null, species_16_init: null, species_17_init: null, species_18_init: null, species_2_init: null, species_3_init: null, species_4_init: null, species_5_init: null, species_6_init: null, species_7_init: null, species_8_init: null, species_9_init: null, V: null, Vs: null, vsb: null};
    this.metadata.variableOrder = {species_0: null, species_1: null, species_2: null, species_3: null, species_4: null, species_5: null, species_6: null, species_7: null, species_8: null, species_9: null, species_10: null, species_11: null, species_12: null, species_13: null, species_14: null, species_15: null, species_16: null, species_17: null, species_18: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
