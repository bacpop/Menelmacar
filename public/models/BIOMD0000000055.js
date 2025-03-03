export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.pi = 3.1415929999999999;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(13).fill(0);
    state[0] = internal.initial_cLm;
    state[1] = internal.initial_cLc;
    state[2] = internal.initial_cLn;
    state[3] = internal.initial_cTm;
    state[4] = internal.initial_cTc;
    state[5] = internal.initial_cTn;
    state[6] = internal.initial_cXm;
    state[7] = internal.initial_cXc;
    state[8] = internal.initial_cXn;
    state[9] = internal.initial_cYm;
    state[10] = internal.initial_cYc;
    state[11] = internal.initial_cYn;
    state[12] = internal.initial_cPn;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "b", "c", "cLc_init", "cLm_init", "cLn_init", "CP", "cPn_init", "cTc_init", "cTm_init", "cTn_init", "cXc_init", "cXm_init", "cXn_init", "cYc_init", "cYm_init", "cYn_init", "d", "dayLength", "e", "f", "Fch_0", "g1", "g2", "g3", "g4", "g5", "g6", "k1", "k10", "k11", "k12", "k13", "k2", "k3", "k4", "k5", "k6", "k7", "k8", "k9", "Lmax", "Lmin", "m1", "m10", "m11", "m12", "m13", "m14", "m15", "m2", "m3", "m4", "m5", "m6", "m7", "m8", "m9", "n1", "n2", "n3", "n4", "n5", "p1", "p2", "p3", "p4", "p5", "q1", "q2", "q3", "r1", "r2", "r3", "r4", "r5", "r6", "r7", "r8"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 3.3064, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 1.0258, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c", internal, 1.0258, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cLc_init", internal, 0.014999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cLm_init", internal, 0.53900000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cLn_init", internal, 0.085500000000000007, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CP", internal, 24, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cPn_init", internal, 0.83499999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cTc_init", internal, 8.6999999999999993, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cTm_init", internal, 0.45600000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cTn_init", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cXc_init", internal, 1.3400000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cXm_init", internal, 0.080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cXn_init", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cYc_init", internal, 0.0040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cYm_init", internal, 0.036999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cYn_init", internal, 0.012999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d", internal, 1.4421999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dayLength", internal, 12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e", internal, 3.6063999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f", internal, 1.0237000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Fch_0", internal, 8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g1", internal, 0.87673848799999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g2", internal, 0.036805783000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g3", internal, 0.26593317999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g4", internal, 0.53881122800000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g5", internal, 1.17803247, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "g6", internal, 0.064455136999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 1.8169999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 1.7302999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11", internal, 1.8258000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k12", internal, 1.8066, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k13", internal, 1.2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 1.5644, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 1.2765, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 2.5733999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 2.7454000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 0.40329999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 6.5585000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 0.66320000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 17.1111, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Lmax", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Lmin", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m1", internal, 1.5283, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m10", internal, 0.21790000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m11", internal, 3.3441999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m12", internal, 4.2969999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m13", internal, 0.13469999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m14", internal, 0.61140000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m15", internal, 1.2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m2", internal, 20.440000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m3", internal, 3.6888000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m4", internal, 3.8231000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m5", internal, 0.0012999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m6", internal, 3.1741000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m7", internal, 0.049200000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m8", internal, 4.0423999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m9", internal, 10.113200000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n1", internal, 5.1694000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n2", internal, 3.0087000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n3", internal, 0.24310000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n4", internal, 0.085699999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n5", internal, 0.16489999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p1", internal, 0.82950000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p2", internal, 4.3239999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p3", internal, 2.1469999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p4", internal, 0.2485, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p5", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q1", internal, 2.4514, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q2", internal, 2.40178, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r1", internal, 16.836300000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r2", internal, 0.16869999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r3", internal, 0.31659999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r4", internal, 2.1509, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r5", internal, 1.0351999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r6", internal, 3.3016999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r7", internal, 2.2122999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r8", internal, 0.20019999999999999, -Infinity, Infinity, false);
    internal.initial_cLc = internal.cLc_init;
    internal.initial_cLm = internal.cLm_init;
    internal.initial_cLn = internal.cLn_init;
    internal.initial_cPn = internal.cPn_init;
    internal.initial_cTc = internal.cTc_init;
    internal.initial_cTm = internal.cTm_init;
    internal.initial_cTn = internal.cTn_init;
    internal.initial_cXc = internal.cXc_init;
    internal.initial_cXm = internal.cXm_init;
    internal.initial_cXn = internal.cXn_init;
    internal.initial_cYc = internal.cYc_init;
    internal.initial_cYm = internal.cYm_init;
    internal.initial_cYn = internal.cYn_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const cLm = state[0];
    const cLc = state[1];
    const cLn = state[2];
    const cTm = state[3];
    const cTc = state[4];
    const cTn = state[5];
    const cXm = state[6];
    const cXc = state[7];
    const cXn = state[8];
    const cYm = state[9];
    const cYc = state[10];
    const cYn = state[11];
    const cPn = state[12];
    dstatedt[1] = 0 + 1 * internal.compartment * internal.p1 * cLm + 1 * internal.compartment * internal.r2 * cLn - 1 * internal.compartment * (internal.m2 * cLc / (internal.k2 + cLc)) - 1 * internal.compartment * internal.r1 * cLc;
    dstatedt[0] = 0 + 1 * internal.compartment * Math.ceil(Math.sin(internal.pi * t / internal.dayLength + 0.001) / 2) * internal.q1 * cPn + 1 * internal.compartment * (internal.n1 * Math.pow((cXn), (internal.a)) / (Math.pow((internal.g1), (internal.a)) + Math.pow((cXn), (internal.a)))) - 1 * internal.compartment * (internal.m1 * cLm / (internal.k1 + cLm));
    dstatedt[2] = 0 - 1 * internal.compartment * internal.r2 * cLn + 1 * internal.compartment * internal.r1 * cLc - 1 * internal.compartment * (internal.m3 * cLn / (internal.k3 + cLn));
    dstatedt[12] = 0 + 1 * internal.compartment * (1 - Math.ceil(Math.sin(internal.pi * t / internal.dayLength + 0.001) / 2)) * internal.p5 - 1 * internal.compartment * (internal.m15 * cPn / (internal.k13 + cPn)) - 1 * internal.compartment * internal.q3 * Math.ceil(Math.sin(internal.pi * t / internal.dayLength + 0.001) / 2) * cPn;
    dstatedt[4] = 0 + 1 * internal.compartment * internal.p2 * cTm + 1 * internal.compartment * internal.r4 * cTn - 1 * internal.compartment * ((1 - Math.ceil(Math.sin(internal.pi * t / internal.dayLength + 0.001) / 2)) * internal.m5 + internal.m6) * (cTc / (internal.k5 + cTc)) - 1 * internal.compartment * internal.r3 * cTc;
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.n2 * Math.pow((cYn), (internal.b)) / (Math.pow((internal.g2), (internal.b)) + Math.pow((cYn), (internal.b)))) * (Math.pow((internal.g3), (internal.c)) / (Math.pow((internal.g3), (internal.c)) + Math.pow((cLn), (internal.c)))) - 1 * internal.compartment * (internal.m4 * cTm / (internal.k4 + cTm));
    dstatedt[5] = 0 - 1 * internal.compartment * internal.r4 * cTn + 1 * internal.compartment * internal.r3 * cTc - 1 * internal.compartment * ((1 - Math.ceil(Math.sin(internal.pi * t / internal.dayLength + 0.001) / 2)) * internal.m7 + internal.m8) * (cTn / (internal.k6 + cTn));
    dstatedt[7] = 0 + 1 * internal.compartment * internal.p3 * cXm + 1 * internal.compartment * internal.r6 * cXn - 1 * internal.compartment * (internal.m10 * cXc / (internal.k8 + cXc)) - 1 * internal.compartment * internal.r5 * cXc;
    dstatedt[6] = 0 + 1 * internal.compartment * (internal.n3 * Math.pow((cTn), (internal.d)) / (Math.pow((internal.g4), (internal.d)) + Math.pow((cTn), (internal.d)))) - 1 * internal.compartment * (internal.m9 * cXm / (internal.k7 + cXm));
    dstatedt[8] = 0 - 1 * internal.compartment * internal.r6 * cXn + 1 * internal.compartment * internal.r5 * cXc - 1 * internal.compartment * (internal.m11 * cXn / (internal.k9 + cXn));
    dstatedt[10] = 0 + 1 * internal.compartment * internal.p4 * cYm + 1 * internal.compartment * internal.r8 * cYn - 1 * internal.compartment * (internal.m13 * cYc / (internal.k11 + cYc)) - 1 * internal.compartment * internal.r7 * cYc;
    dstatedt[9] = 0 + 1 * internal.compartment * (Math.ceil(Math.sin(internal.pi * t / internal.dayLength + 0.001) / 2) * internal.q2 * cPn + (Math.ceil(Math.sin(internal.pi * t / internal.dayLength + 0.001) / 2) * internal.n4 + internal.n5) * Math.pow((internal.g5), (internal.e)) / (Math.pow((internal.g5), (internal.e)) + Math.pow((cTn), (internal.e)))) * (Math.pow((internal.g6), (internal.f)) / (Math.pow((internal.g6), (internal.f)) + Math.pow((cLn), (internal.f)))) - 1 * internal.compartment * (internal.m12 * cYm / (internal.k10 + cYm));
    dstatedt[11] = 0 - 1 * internal.compartment * internal.r8 * cYn + 1 * internal.compartment * internal.r7 * cYc - 1 * internal.compartment * (internal.m14 * cYn / (internal.k12 + cYn));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "cLm", "cLc", "cLn", "cTm", "cTc", "cTn", "cXm", "cXc", "cXn", "cYm", "cYc", "cYn", "cPn"];
    this.metadata.internalOrder = {a: null, b: null, c: null, cLc_init: null, cLm_init: null, cLn_init: null, compartment: null, CP: null, cPn_init: null, cTc_init: null, cTm_init: null, cTn_init: null, cXc_init: null, cXm_init: null, cXn_init: null, cYc_init: null, cYm_init: null, cYn_init: null, d: null, dayLength: null, e: null, f: null, Fch_0: null, g1: null, g2: null, g3: null, g4: null, g5: null, g6: null, initial_cLc: null, initial_cLm: null, initial_cLn: null, initial_cPn: null, initial_cTc: null, initial_cTm: null, initial_cTn: null, initial_cXc: null, initial_cXm: null, initial_cXn: null, initial_cYc: null, initial_cYm: null, initial_cYn: null, k1: null, k10: null, k11: null, k12: null, k13: null, k2: null, k3: null, k4: null, k5: null, k6: null, k7: null, k8: null, k9: null, Lmax: null, Lmin: null, m1: null, m10: null, m11: null, m12: null, m13: null, m14: null, m15: null, m2: null, m3: null, m4: null, m5: null, m6: null, m7: null, m8: null, m9: null, n1: null, n2: null, n3: null, n4: null, n5: null, p1: null, p2: null, p3: null, p4: null, p5: null, pi: null, q1: null, q2: null, q3: null, r1: null, r2: null, r3: null, r4: null, r5: null, r6: null, r7: null, r8: null};
    this.metadata.variableOrder = {cLm: null, cLc: null, cLn: null, cTm: null, cTc: null, cTn: null, cXm: null, cXc: null, cXn: null, cYm: null, cYc: null, cYn: null, cPn: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
