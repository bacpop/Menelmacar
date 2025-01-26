export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment_1 = 1;
    internal.k_syn_miRNA_1 = 1;
    internal.k_syn_miRNA_2 = 1;
    internal.k_syn_mRNA = 1;
    internal.k_syn_prot = 1;
    internal.k1 = 0.00045298000000000002;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(10).fill(0);
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
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["species_1_init", "species_10_init", "species_2_init", "species_3_init", "species_4_init", "species_5_init", "species_6_init", "species_7_init", "species_8_init", "species_9_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "species_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_10_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_4_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_5_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_6_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_7_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_8_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_9_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_species_1 = internal.species_1_init;
    internal.initial_species_10 = internal.species_10_init;
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
    dstatedt[6] = 0;
    dstatedt[7] = 0;
    dstatedt[8] = 0;
    dstatedt[0] = 0 - 1 * internal.compartment_1 * internal.k1 * species_1 * species_2 - 1 * internal.compartment_1 * internal.k1 * species_1 * species_3 - 1 * internal.compartment_1 * internal.k1 * species_1 * species_2 * species_3 + 1 * internal.compartment_1 * (internal.k_syn_mRNA * species_7) - 1 * internal.compartment_1 * internal.k1 * species_1 + 1 * internal.compartment_1 * internal.k1 * species_4 + 1 * internal.compartment_1 * internal.k1 * species_5 + 1 * internal.compartment_1 * internal.k1 * species_6;
    dstatedt[9] = 0 + 1 * internal.compartment_1 * (internal.k_syn_prot * species_1) - 1 * internal.compartment_1 * internal.k1 * species_10;
    dstatedt[1] = 0 - 1 * internal.compartment_1 * internal.k1 * species_1 * species_2 - 1 * internal.compartment_1 * internal.k1 * species_1 * species_2 * species_3 + 1 * internal.compartment_1 * (internal.k_syn_miRNA_1 * species_8) - 1 * internal.compartment_1 * internal.k1 * species_2 + 1 * internal.compartment_1 * internal.k1 * species_4 + 1 * internal.compartment_1 * internal.k1 * species_6;
    dstatedt[2] = 0 - 1 * internal.compartment_1 * internal.k1 * species_1 * species_3 - 1 * internal.compartment_1 * internal.k1 * species_1 * species_2 * species_3 + 1 * internal.compartment_1 * (internal.k_syn_miRNA_2 * species_9) - 1 * internal.compartment_1 * internal.k1 * species_3 + 1 * internal.compartment_1 * internal.k1 * species_5 + 1 * internal.compartment_1 * internal.k1 * species_6;
    dstatedt[3] = 0 + 1 * internal.compartment_1 * internal.k1 * species_1 * species_2 - 1 * internal.compartment_1 * internal.k1 * species_4 - 1 * internal.compartment_1 * internal.k1 * species_4;
    dstatedt[4] = 0 + 1 * internal.compartment_1 * internal.k1 * species_1 * species_3 - 1 * internal.compartment_1 * internal.k1 * species_5 - 1 * internal.compartment_1 * internal.k1 * species_5;
    dstatedt[5] = 0 + 1 * internal.compartment_1 * internal.k1 * species_1 * species_2 * species_3 - 1 * internal.compartment_1 * internal.k1 * species_6 - 1 * internal.compartment_1 * internal.k1 * species_6;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "species_1", "species_2", "species_3", "species_4", "species_5", "species_6", "species_7", "species_8", "species_9", "species_10"];
    this.metadata.internalOrder = {compartment_1: null, initial_species_1: null, initial_species_10: null, initial_species_2: null, initial_species_3: null, initial_species_4: null, initial_species_5: null, initial_species_6: null, initial_species_7: null, initial_species_8: null, initial_species_9: null, k_syn_miRNA_1: null, k_syn_miRNA_2: null, k_syn_mRNA: null, k_syn_prot: null, k1: null, species_1_init: null, species_10_init: null, species_2_init: null, species_3_init: null, species_4_init: null, species_5_init: null, species_6_init: null, species_7_init: null, species_8_init: null, species_9_init: null};
    this.metadata.variableOrder = {species_1: null, species_2: null, species_3: null, species_4: null, species_5: null, species_6: null, species_7: null, species_8: null, species_9: null, species_10: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
