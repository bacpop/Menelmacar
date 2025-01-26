export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.a = 1;
    internal.A1 = 0.45000000000000001;
    internal.A2 = 0.45000000000000001;
    internal.A3 = 0.80000000000000004;
    internal.B1 = 0;
    internal.B2 = 0;
    internal.B3 = 0.59999999999999998;
    internal.c1 = 0;
    internal.c2 = 0;
    internal.c3 = 0;
    internal.compartment_0000002 = 1;
    internal.compartment_0000003 = 1;
    internal.D0 = 0.012;
    internal.D1 = 0.93999999999999995;
    internal.D10 = 0.29999999999999999;
    internal.D2 = 0.44;
    internal.D3 = 0.93999999999999995;
    internal.D4 = 0.44;
    internal.D5 = 0.44;
    internal.D6 = 0.28999999999999998;
    internal.D7 = 0.54000000000000004;
    internal.D8 = 0.59999999999999998;
    internal.D9 = 0.59999999999999998;
    internal.Drosophilia = 1;
    internal.k1 = 2;
    internal.k2 = 2;
    internal.k3 = 2;
    internal.k4 = 2;
    internal.L1 = 0.29999999999999999;
    internal.L10 = 0.20000000000000001;
    internal.L2 = 0.20000000000000001;
    internal.L3 = 0.29999999999999999;
    internal.L4 = 0.20000000000000001;
    internal.L5 = 0.20000000000000001;
    internal.L6 = 0.20000000000000001;
    internal.L7 = 0.13;
    internal.L8 = 0.20000000000000001;
    internal.L9 = 0.20000000000000001;
    internal.parameter_0000072 = 1.45;
    internal.parameter_0000073 = 1.6299999999999999;
    internal.r = 4;
    internal.r1 = 1.02;
    internal.r2 = 1.02;
    internal.r3 = 0.89000000000000001;
    internal.s1 = 1.45;
    internal.s2 = 0.47999999999999998;
    internal.s3 = 1.45;
    internal.s4 = 0.47999999999999998;
    internal.s5 = 1.6299999999999999;
    internal.s6 = 0.46999999999999997;
    internal.T1 = 1.73;
    internal.T2 = 0.71999999999999997;
    internal.T3 = 1.6299999999999999;
    internal.T4 = 0.52000000000000002;
    internal.v1 = 1.45;
    internal.v3 = 1.6299999999999999;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(13).fill(0);
    state[0] = internal.initial_EmptySet;
    state[1] = internal.initial_CCc;
    state[2] = internal.initial_CCn;
    state[3] = internal.initial_Clkc;
    state[4] = internal.initial_Clkm;
    state[5] = internal.initial_Perc;
    state[6] = internal.initial_Perm;
    state[7] = internal.initial_PTc;
    state[8] = internal.initial_PTn;
    state[9] = internal.initial_Timc;
    state[10] = internal.initial_Timm;
    state[11] = internal.initial_species_0000012;
    state[12] = internal.initial_species_0000013;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["CCc_init", "CCn_init", "Clkc_init", "Clkm_init", "EmptySet_init", "Perc_init", "Perm_init", "PTc_init", "PTn_init", "species_0000012_init", "species_0000013_init", "Timc_init", "Timm_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "CCc_init", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CCn_init", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Clkc_init", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Clkm_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EmptySet_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Perc_init", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Perm_init", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PTc_init", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PTn_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_0000012_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_0000013_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Timc_init", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Timm_init", internal, 0.69999999999999996, -Infinity, Infinity, false);
    internal.initial_CCc = internal.CCc_init;
    internal.initial_CCn = internal.CCn_init;
    internal.initial_Clkc = internal.Clkc_init;
    internal.initial_Clkm = internal.Clkm_init;
    internal.initial_EmptySet = internal.EmptySet_init;
    internal.initial_Perc = internal.Perc_init;
    internal.initial_Perm = internal.Perm_init;
    internal.initial_PTc = internal.PTc_init;
    internal.initial_PTn = internal.PTn_init;
    internal.initial_species_0000012 = internal.species_0000012_init;
    internal.initial_species_0000013 = internal.species_0000013_init;
    internal.initial_Timc = internal.Timc_init;
    internal.initial_Timm = internal.Timm_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const CCc = state[1];
    const CCn = state[2];
    const Clkc = state[3];
    const Clkm = state[4];
    const Perc = state[5];
    const Perm = state[6];
    const PTc = state[7];
    const PTn = state[8];
    const Timc = state[9];
    const Timm = state[10];
    const species_0000012 = state[11];
    const species_0000013 = state[12];
    dstatedt[0] = 0;
    dstatedt[11] = 0;
    dstatedt[12] = 0;
    dstatedt[1] = 0 - 1 * internal.compartment_0000003 * (CCc * internal.T3 / (internal.k3 + CCc)) + 1 * internal.compartment_0000002 * (CCn * internal.T4 / (internal.k4 + CCn)) + 1 * internal.compartment_0000003 * (Clkc * internal.v3 * species_0000012 - internal.parameter_0000073 * CCc) - 1 * internal.compartment_0000003 * CCc * internal.D0 - 1 * internal.compartment_0000003 * (CCc * internal.D9 / (CCc + internal.L9));
    dstatedt[2] = 0 + 1 * internal.compartment_0000003 * (CCc * internal.T3 / (internal.k3 + CCc)) - 1 * internal.compartment_0000002 * (CCn * internal.T4 / (internal.k4 + CCn)) - 1 * internal.compartment_0000002 * CCn * internal.D0 - 1 * internal.compartment_0000002 * (CCn * internal.D10 / (CCn + internal.L10));
    dstatedt[3] = 0 - 1 * internal.compartment_0000003 * (Clkc * internal.v3 * species_0000012 - internal.parameter_0000073 * CCc) + 1 * internal.compartment_0000003 * Clkm * internal.s6 - 1 * internal.compartment_0000003 * Clkc * internal.D0 - 1 * internal.compartment_0000003 * (Clkc * internal.D8 / (Clkc + internal.L8));
    dstatedt[4] = 0 + 1 * internal.compartment_0000003 * (internal.c3 + (internal.B3 + Math.pow((PTn / internal.A3), (internal.a))) * internal.s5 / (1 + internal.B3 + Math.pow((PTn / internal.A3), (internal.a)) + Math.pow((CCn / internal.r3), (internal.r)))) - 1 * internal.Drosophilia * Clkm * internal.D0 - 1 * internal.compartment_0000003 * (Clkm * internal.D7 / (Clkm + internal.L7));
    dstatedt[5] = 0 - 1 * internal.compartment_0000003 * (Perc * Timc * internal.v1 - internal.parameter_0000072 * PTc) + 1 * internal.compartment_0000003 * internal.s2 * Perm - 1 * internal.Drosophilia * internal.D0 * Perc - 1 * internal.compartment_0000003 * (internal.D2 * species_0000013 * Perc / (internal.L2 + Perc));
    dstatedt[6] = 0 + 1 * internal.compartment_0000003 * (internal.c1 + (internal.B1 + Math.pow((CCn / internal.A1), (internal.a))) * internal.s1 / (1 + internal.B1 + Math.pow((CCn / internal.A1), (internal.a)) + Math.pow((PTn / internal.r1), (internal.r)))) - 1 * internal.compartment_0000003 * internal.D0 * Perm - 1 * internal.compartment_0000003 * (internal.D1 * Perm / (internal.L1 + Perm));
    dstatedt[7] = 0 + 1 * internal.compartment_0000002 * (PTn * internal.T2 / (internal.k2 + PTn)) - 1 * internal.compartment_0000003 * (PTc * internal.T1 / (internal.k1 + PTc)) + 1 * internal.compartment_0000003 * (Perc * Timc * internal.v1 - internal.parameter_0000072 * PTc) - 1 * internal.compartment_0000003 * internal.D0 * PTc - 1 * internal.compartment_0000003 * (internal.D5 * PTc / (internal.L5 + PTc));
    dstatedt[8] = 0 - 1 * internal.compartment_0000002 * (PTn * internal.T2 / (internal.k2 + PTn)) + 1 * internal.compartment_0000003 * (PTc * internal.T1 / (internal.k1 + PTc)) - 1 * internal.compartment_0000002 * internal.D0 * PTn - 1 * internal.compartment_0000002 * (internal.D6 * PTn / (internal.L6 + PTn));
    dstatedt[9] = 0 - 1 * internal.compartment_0000003 * (Perc * Timc * internal.v1 - internal.parameter_0000072 * PTc) + 1 * internal.compartment_0000003 * internal.s4 * Timm - 1 * internal.compartment_0000003 * internal.D0 * Timc - 1 * internal.compartment_0000003 * (internal.D4 * Timc / (internal.L4 + Timc));
    dstatedt[10] = 0 + 1 * internal.compartment_0000003 * (internal.c2 + (internal.B2 + Math.pow((CCn / internal.A2), (internal.a))) * internal.s3 / (1 + internal.B2 + Math.pow((CCn / internal.A2), (internal.a)) + Math.pow((PTn / internal.r2), (internal.r)))) - 1 * internal.Drosophilia * internal.D0 * Timm - 1 * internal.compartment_0000003 * (internal.D3 * Timm / (internal.L3 + Timm));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "EmptySet", "CCc", "CCn", "Clkc", "Clkm", "Perc", "Perm", "PTc", "PTn", "Timc", "Timm", "species_0000012", "species_0000013"];
    this.metadata.internalOrder = {a: null, A1: null, A2: null, A3: null, B1: null, B2: null, B3: null, c1: null, c2: null, c3: null, CCc_init: null, CCn_init: null, Clkc_init: null, Clkm_init: null, compartment_0000002: null, compartment_0000003: null, D0: null, D1: null, D10: null, D2: null, D3: null, D4: null, D5: null, D6: null, D7: null, D8: null, D9: null, Drosophilia: null, EmptySet_init: null, initial_CCc: null, initial_CCn: null, initial_Clkc: null, initial_Clkm: null, initial_EmptySet: null, initial_Perc: null, initial_Perm: null, initial_PTc: null, initial_PTn: null, initial_species_0000012: null, initial_species_0000013: null, initial_Timc: null, initial_Timm: null, k1: null, k2: null, k3: null, k4: null, L1: null, L10: null, L2: null, L3: null, L4: null, L5: null, L6: null, L7: null, L8: null, L9: null, parameter_0000072: null, parameter_0000073: null, Perc_init: null, Perm_init: null, PTc_init: null, PTn_init: null, r: null, r1: null, r2: null, r3: null, s1: null, s2: null, s3: null, s4: null, s5: null, s6: null, species_0000012_init: null, species_0000013_init: null, T1: null, T2: null, T3: null, T4: null, Timc_init: null, Timm_init: null, v1: null, v3: null};
    this.metadata.variableOrder = {EmptySet: null, CCc: null, CCn: null, Clkc: null, Clkm: null, Perc: null, Perm: null, PTc: null, PTn: null, Timc: null, Timm: null, species_0000012: null, species_0000013: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
