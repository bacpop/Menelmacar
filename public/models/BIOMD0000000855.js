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
    var state = Array(4).fill(0);
    state[0] = internal.initial_P;
    state[1] = internal.initial_Pt;
    state[2] = internal.initial_M;
    state[3] = internal.initial_N;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["C", "Cm1", "Cm2", "Cn", "E", "EMinf", "ENinf", "kbp", "kem", "ken", "kmm", "kmn", "kmp", "kmpt", "knm", "knp", "knpt", "kpb", "kpg", "kpm", "kpn", "kptm", "kptn", "M_init", "mub", "mum", "mumr", "mun", "munr", "mupt", "N_init", "Ninf", "P_init", "pinf", "Pt_init", "sb", "smr", "snr"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "C", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cm1", internal, 72.840000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cm2", internal, 13.06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cn", internal, 175.72, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EMinf", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ENinf", internal, 6.7999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kbp", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kem", internal, 4.9699999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ken", internal, 5.3700000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kmm", internal, 0.059999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kmn", internal, 10.58, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kmp", internal, 18.52, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kmpt", internal, 41.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "knm", internal, 6.4199999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "knp", internal, 17.579999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "knpt", internal, 2.9700000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kpb", internal, 14.4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kpg", internal, 14.4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kpm", internal, 34.799999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kpn", internal, 35.030000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kptm", internal, 3.1600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kptn", internal, 2.0299999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mub", internal, 0.048000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mum", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mumr", internal, 0.54000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mun", internal, 1.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "munr", internal, 3.2999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mupt", internal, 0.37, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ninf", internal, 0.11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pinf", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pt_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sb", internal, 0.12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "smr", internal, 0.17000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "snr", internal, 0.38, -Infinity, Infinity, false);
    internal.fEM_Kmm_E = internal.kmm / (1 + Math.pow((internal.E / internal.EMinf), (2)));
    internal.initial_M = internal.M_init;
    internal.initial_N = internal.N_init;
    internal.initial_P = internal.P_init;
    internal.initial_Pt = internal.Pt_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const P = state[0];
    const Pt = state[1];
    const M = state[2];
    const N = state[3];
    var fi2 = M / (1 + Math.pow((N / internal.Ninf), (2)) + Math.pow((internal.C / internal.Cm1), (2)));
    var R2 = (internal.knpt * Pt + internal.knp * P) / (1 + Math.pow((internal.C / internal.Cn), (2)));
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.kpg * P * (1 - P / internal.pinf)) - 1 * internal.compartment * (internal.kpb * internal.sb * P / (internal.mub + internal.kbp * P)) - 1 * internal.compartment * (internal.kpn * P * N * (1 + internal.ken * internal.E)) - 1 * internal.compartment * (internal.kpm * P * fi2 * (1 + internal.kem * internal.E));
    dstatedt[1] = 0 - 1 * internal.compartment * (internal.kptn * Pt * N * (1 + internal.ken * N)) - 1 * internal.compartment * (internal.kptm * Pt * fi2 * (1 + internal.kem * internal.E)) + 1 * internal.compartment * internal.mun * N - 1 * internal.compartment * internal.mupt * Pt;
    var fEN = internal.snr * R2 / (internal.munr + R2) / (1 + Math.pow((internal.E / internal.ENinf), (2)));
    var R1 = (internal.kmpt * Pt + internal.kmp * P + internal.fEM_Kmm_E * M + internal.kmn * N) / (1 + Math.pow((internal.C / internal.Cm2), (2)));
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.smr * R1 / (internal.mumr + R1)) - 1 * internal.compartment * internal.mum * M;
    dstatedt[3] = 0 - 1 * internal.compartment * internal.mun * N + 1 * internal.compartment * (fEN) - 1 * internal.compartment * (internal.knm * N * fi2);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "P", "Pt", "M", "N"];
    this.metadata.internalOrder = {C: null, Cm1: null, Cm2: null, Cn: null, compartment: null, E: null, EMinf: null, ENinf: null, fEM_Kmm_E: null, initial_M: null, initial_N: null, initial_P: null, initial_Pt: null, kbp: null, kem: null, ken: null, kmm: null, kmn: null, kmp: null, kmpt: null, knm: null, knp: null, knpt: null, kpb: null, kpg: null, kpm: null, kpn: null, kptm: null, kptn: null, M_init: null, mub: null, mum: null, mumr: null, mun: null, munr: null, mupt: null, N_init: null, Ninf: null, P_init: null, pi: null, pinf: null, Pt_init: null, sb: null, smr: null, snr: null};
    this.metadata.variableOrder = {P: null, Pt: null, M: null, N: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
