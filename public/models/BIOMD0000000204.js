export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(12).fill(0);
    state[0] = internal.initial_OCT4_Gene;
    state[1] = internal.initial_NANOG_Gene;
    state[2] = internal.initial_SOX2_Gene;
    state[3] = internal.initial_targetGene;
    state[4] = internal.initial_degradation;
    state[5] = internal.initial_p53;
    state[6] = internal.initial_A;
    state[7] = internal.initial_OCT4;
    state[8] = internal.initial_SOX2;
    state[9] = internal.initial_NANOG;
    state[10] = internal.initial_OCT4_SOX2;
    state[11] = internal.initial_Protein;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A_init", "a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3", "d1", "d2", "d3", "degradation_init", "e1", "e2", "eta1", "eta3", "eta5", "eta7", "f", "f1", "f2", "f3", "g1", "gamma1", "gamma2", "gamma3", "gamma4", "h1", "h2", "k1c", "k2c", "k3c", "NANOG_Gene_init", "NANOG_init", "OCT4_Gene_init", "OCT4_init", "OCT4_SOX2_init", "p53_init", "Protein_init", "SOX2_Gene_init", "SOX2_init", "targetGene_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a2", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a3", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b1", internal, 0.0011000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b2", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b3", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c2", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c3", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d1", internal, 0.0011000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d2", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d3", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "degradation_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e1", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "eta1", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "eta3", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "eta5", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "eta7", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f1", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f2", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f3", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma4", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h1", internal, 0.0011000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1c", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2c", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3c", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NANOG_Gene_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NANOG_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "OCT4_Gene_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "OCT4_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "OCT4_SOX2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p53_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Protein_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SOX2_Gene_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SOX2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "targetGene_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_A = internal.A_init;
    internal.initial_degradation = internal.degradation_init;
    internal.initial_NANOG = internal.NANOG_init;
    internal.initial_NANOG_Gene = internal.NANOG_Gene_init;
    internal.initial_OCT4 = internal.OCT4_init;
    internal.initial_OCT4_Gene = internal.OCT4_Gene_init;
    internal.initial_OCT4_SOX2 = internal.OCT4_SOX2_init;
    internal.initial_p53 = internal.p53_init;
    internal.initial_Protein = internal.Protein_init;
    internal.initial_SOX2 = internal.SOX2_init;
    internal.initial_SOX2_Gene = internal.SOX2_Gene_init;
    internal.initial_targetGene = internal.targetGene_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const p53 = state[5];
    const A = state[6];
    const OCT4 = state[7];
    const SOX2 = state[8];
    const NANOG = state[9];
    const OCT4_SOX2 = state[10];
    const Protein = state[11];
    dstatedt[6] = 0;
    dstatedt[4] = 0;
    dstatedt[1] = 0;
    dstatedt[0] = 0;
    dstatedt[5] = 0;
    dstatedt[2] = 0;
    dstatedt[3] = 0;
    dstatedt[9] = 0 + 1 * (internal.eta5 + internal.e1 * OCT4_SOX2 + internal.e2 * OCT4_SOX2 * NANOG) / (1 + internal.eta5 / internal.f + internal.f2 * OCT4_SOX2 + internal.f1 * OCT4_SOX2 * NANOG + internal.f3 * p53) - 1 * internal.gamma2 * NANOG;
    dstatedt[7] = 0 + 1 * (internal.eta1 + internal.a1 * A + internal.a2 * OCT4_SOX2 + internal.a3 * OCT4_SOX2 * NANOG) / (1 + internal.eta1 / internal.f + internal.b1 * A + internal.b2 * OCT4_SOX2 + internal.b3 * OCT4_SOX2 * NANOG) - 1 * internal.gamma1 * OCT4 - 1 * internal.k1c * OCT4 * SOX2 - internal.k2c * OCT4_SOX2;
    dstatedt[10] = 0 + 1 * internal.k1c * OCT4 * SOX2 - internal.k2c * OCT4_SOX2 - 1 * internal.k3c * OCT4_SOX2;
    dstatedt[11] = 0 + 1 * (internal.g1 * OCT4_SOX2 + internal.eta7) / (1 + internal.eta7 / internal.f2 + internal.h1 * OCT4_SOX2 + internal.h2 * OCT4_SOX2 * NANOG) - 1 * internal.gamma4 * Protein;
    dstatedt[8] = 0 - 1 * internal.k1c * OCT4 * SOX2 - internal.k2c * OCT4_SOX2 + 1 * (internal.eta3 + internal.c1 * A + internal.c2 * OCT4_SOX2 + internal.c3 * OCT4_SOX2 * NANOG) / (1 + internal.eta3 / internal.f + internal.d1 * A + internal.d2 * OCT4_SOX2 + internal.d3 * OCT4_SOX2 * NANOG) - 1 * internal.gamma3 * SOX2;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "OCT4_Gene", "NANOG_Gene", "SOX2_Gene", "targetGene", "degradation", "p53", "A", "OCT4", "SOX2", "NANOG", "OCT4_SOX2", "Protein"];
    this.metadata.internalOrder = {A_init: null, a1: null, a2: null, a3: null, b1: null, b2: null, b3: null, c1: null, c2: null, c3: null, compartment: null, d1: null, d2: null, d3: null, degradation_init: null, e1: null, e2: null, eta1: null, eta3: null, eta5: null, eta7: null, f: null, f1: null, f2: null, f3: null, g1: null, gamma1: null, gamma2: null, gamma3: null, gamma4: null, h1: null, h2: null, initial_A: null, initial_degradation: null, initial_NANOG: null, initial_NANOG_Gene: null, initial_OCT4: null, initial_OCT4_Gene: null, initial_OCT4_SOX2: null, initial_p53: null, initial_Protein: null, initial_SOX2: null, initial_SOX2_Gene: null, initial_targetGene: null, k1c: null, k2c: null, k3c: null, NANOG_Gene_init: null, NANOG_init: null, OCT4_Gene_init: null, OCT4_init: null, OCT4_SOX2_init: null, p53_init: null, Protein_init: null, SOX2_Gene_init: null, SOX2_init: null, targetGene_init: null};
    this.metadata.variableOrder = {OCT4_Gene: null, NANOG_Gene: null, SOX2_Gene: null, targetGene: null, degradation: null, p53: null, A: null, OCT4: null, SOX2: null, NANOG: null, OCT4_SOX2: null, Protein: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
