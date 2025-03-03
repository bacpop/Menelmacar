export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.A = 10;
    internal.CDX2_Gene = 0;
    internal.cell = 1;
    internal.degradation = 0;
    internal.GATA6_Gene = 0;
    internal.GCNF_Gene = 0;
    internal.NANOG_Gene = 0;
    internal.OCT4_Gene = 0;
    internal.p53 = 0;
    internal.SOX2_Gene = 0;
    internal.targetGene = 0.01;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(8).fill(0);
    state[0] = internal.initial_OCT4;
    state[1] = internal.initial_SOX2;
    state[2] = internal.initial_NANOG;
    state[3] = internal.initial_GATA6;
    state[4] = internal.initial_CDX2;
    state[5] = internal.initial_GCNF;
    state[6] = internal.initial_OCT4_SOX2;
    state[7] = internal.initial_Protein;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a0", "a1", "a2", "a3", "b0", "b1", "b2", "b3", "b4", "b5", "c0", "c1", "c2", "CDX2_init", "d0", "d1", "d2", "d3", "e0", "e1", "e2", "f0", "f1", "f2", "f3", "g0", "g1", "gamma1", "gamma2", "gamma3", "gamma4", "gamma5", "gammag", "gamman", "GATA6_init", "GCNF_init", "h0", "h1", "i0", "i1", "i2", "j0", "j1", "NANOG_init", "OCT4_init", "OCT4_SOX2_init", "p0", "p1", "p2", "Protein_init", "q0", "q1", "q2", "SOX2_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a0", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a1", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a2", internal, 0.012500000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a3", internal, 0.025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b0", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b1", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b2", internal, 0.012500000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b3", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b4", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b5", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c0", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c1", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c2", internal, 0.012500000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CDX2_init", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d0", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d1", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d2", internal, 0.012500000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d3", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e0", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f0", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f3", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g0", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g1", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma3", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma4", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma5", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gammag", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamman", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GATA6_init", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GCNF_init", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h0", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h1", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "i0", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "i1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "i2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "j0", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "j1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NANOG_init", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "OCT4_init", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "OCT4_SOX2_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p0", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p2", internal, 0.00025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Protein_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q0", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q1", internal, 0.00025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q2", internal, 15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SOX2_init", internal, 0.01, -Infinity, Infinity, false);
    internal.initial_CDX2 = internal.CDX2_init;
    internal.initial_GATA6 = internal.GATA6_init;
    internal.initial_GCNF = internal.GCNF_init;
    internal.initial_NANOG = internal.NANOG_init;
    internal.initial_OCT4 = internal.OCT4_init;
    internal.initial_OCT4_SOX2 = internal.OCT4_SOX2_init;
    internal.initial_Protein = internal.Protein_init;
    internal.initial_SOX2 = internal.SOX2_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const OCT4 = state[0];
    const SOX2 = state[1];
    const NANOG = state[2];
    const GATA6 = state[3];
    const CDX2 = state[4];
    const GCNF = state[5];
    const OCT4_SOX2 = state[6];
    dstatedt[6] = 0;
    dstatedt[7] = 0;
    dstatedt[4] = 0 + 1 * (internal.g0 + internal.g1 * CDX2) / (1 + internal.h0 * CDX2 + internal.h1 * CDX2 * OCT4) - 1 * internal.gamma4 * CDX2;
    dstatedt[3] = 0 + 1 * (internal.c1 * OCT4_SOX2 + internal.c2 * GATA6) / (1 + internal.d1 * OCT4_SOX2 + internal.d2 * GATA6 + internal.d3 * NANOG) - 1 * internal.gammag * GATA6;
    dstatedt[5] = 0 + 1 * (internal.i0 + internal.i1 * CDX2 + internal.i2 * GATA6) / (1 + internal.j0 * CDX2 + internal.j1 * GATA6) - 1 * internal.gamma5 * GCNF;
    dstatedt[2] = 0 + 1 * (internal.a1 * OCT4_SOX2 + internal.a2 * OCT4_SOX2 * NANOG) / (1 + internal.b1 * OCT4_SOX2 + internal.b2 * OCT4_SOX2 * NANOG + internal.b3 * OCT4_SOX2 * GATA6) - 1 * internal.gamman * NANOG;
    dstatedt[0] = 0 + 1 * (internal.a0 + internal.a1 * internal.A + internal.a2 * OCT4 * SOX2 + internal.a3 * OCT4 * SOX2 * NANOG) / (1 + internal.b0 * internal.A + internal.b1 * OCT4 + internal.b2 * OCT4 * SOX2 + internal.b3 * OCT4 * SOX2 * NANOG + internal.b4 * CDX2 * OCT4 + internal.b5 * GCNF) - 1 * internal.gamma1 * OCT4;
    dstatedt[1] = 0 + 1 * (internal.c0 + internal.c1 * OCT4 * SOX2 + internal.c2 * OCT4 * SOX2 * NANOG) / (1 + internal.d0 * OCT4 + internal.d1 * OCT4 * SOX2 + internal.d2 * OCT4 * SOX2 * NANOG) - 1 * internal.gamma2 * SOX2;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "OCT4", "SOX2", "NANOG", "GATA6", "CDX2", "GCNF", "OCT4_SOX2", "Protein"];
    this.metadata.internalOrder = {A: null, a0: null, a1: null, a2: null, a3: null, b0: null, b1: null, b2: null, b3: null, b4: null, b5: null, c0: null, c1: null, c2: null, CDX2_Gene: null, CDX2_init: null, cell: null, d0: null, d1: null, d2: null, d3: null, degradation: null, e0: null, e1: null, e2: null, f0: null, f1: null, f2: null, f3: null, g0: null, g1: null, gamma1: null, gamma2: null, gamma3: null, gamma4: null, gamma5: null, gammag: null, gamman: null, GATA6_Gene: null, GATA6_init: null, GCNF_Gene: null, GCNF_init: null, h0: null, h1: null, i0: null, i1: null, i2: null, initial_CDX2: null, initial_GATA6: null, initial_GCNF: null, initial_NANOG: null, initial_OCT4: null, initial_OCT4_SOX2: null, initial_Protein: null, initial_SOX2: null, j0: null, j1: null, NANOG_Gene: null, NANOG_init: null, OCT4_Gene: null, OCT4_init: null, OCT4_SOX2_init: null, p0: null, p1: null, p2: null, p53: null, Protein_init: null, q0: null, q1: null, q2: null, SOX2_Gene: null, SOX2_init: null, targetGene: null};
    this.metadata.variableOrder = {OCT4: null, SOX2: null, NANOG: null, GATA6: null, CDX2: null, GCNF: null, OCT4_SOX2: null, Protein: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
