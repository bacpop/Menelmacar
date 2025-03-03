export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.c0 = 1;
    internal.c1 = 1;
    internal.C1 = 0;
    internal.c2 = 1;
    internal.C2 = 0;
    internal.eth_ex = 0;
    internal.H2O = 0;
    internal.Hm = 0;
    internal.Ho = 0;
    internal.oxy_ex = 0;
    internal.PPi = 0;
    internal.sul_ex = 0;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(13).fill(0);
    state[0] = internal.initial_oxy;
    state[1] = internal.initial_A3c;
    state[2] = internal.initial_aps;
    state[3] = internal.initial_pap;
    state[4] = internal.initial_sul;
    state[5] = internal.initial_eth;
    state[6] = internal.initial_hyd;
    state[7] = internal.initial_cys;
    state[8] = internal.initial_N2;
    state[9] = internal.initial_aco;
    state[10] = internal.initial_oah;
    state[11] = internal.initial_S1;
    state[12] = internal.initial_A3m;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "A3c_init", "A3m_init", "Ac", "aco_init", "Am", "aps_init", "cys_init", "eth_init", "hyd_init", "k_v0", "k_v10", "k_v13", "k11", "k12", "k14", "k15", "k16", "k17", "k18", "k2", "k3", "k4", "k5", "k6", "k7", "k8", "k9", "Ka", "Kc", "Kh", "m", "n", "N", "N2_init", "oah_init", "oxy_init", "pap_init", "S", "S1_init", "sul_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "A3c_init", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "A3m_init", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ac", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "aco_init", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Am", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "aps_init", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cys_init", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "eth_init", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "hyd_init", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_v0", internal, 1.6000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_v10", internal, 80, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_v13", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k12", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k14", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k15", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k16", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k17", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k18", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 0.12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ka", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kc", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kh", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N2_init", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "oah_init", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "oxy_init", internal, 7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pap_init", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S1_init", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sul_init", internal, 0.40000000000000002, -Infinity, Infinity, false);
    internal.initial_A3c = internal.A3c_init;
    internal.initial_A3m = internal.A3m_init;
    internal.initial_aco = internal.aco_init;
    internal.initial_aps = internal.aps_init;
    internal.initial_cys = internal.cys_init;
    internal.initial_eth = internal.eth_init;
    internal.initial_hyd = internal.hyd_init;
    internal.initial_N2 = internal.N2_init;
    internal.initial_oah = internal.oah_init;
    internal.initial_oxy = internal.oxy_init;
    internal.initial_pap = internal.pap_init;
    internal.initial_S1 = internal.S1_init;
    internal.initial_sul = internal.sul_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const oxy = state[0];
    const A3c = state[1];
    const aps = state[2];
    const pap = state[3];
    const sul = state[4];
    const eth = state[5];
    const hyd = state[6];
    const cys = state[7];
    const N2 = state[8];
    const aco = state[9];
    const oah = state[10];
    const S1 = state[11];
    const A3m = state[12];
    var A2c = internal.Ac - A3c;
    var A2m = internal.Am - A3m;
    dstatedt[2] = 0 + 1 * internal.c1 * internal.k2 * sul * A3c - 1 * internal.c1 * internal.k3 * aps * A3c;
    dstatedt[7] = 0 + 1 * internal.c1 * internal.k5 * hyd * oah - 1 * internal.c1 * internal.k6 * cys;
    dstatedt[6] = 0 + 1 * internal.c1 * internal.k4 * pap * N2 - 1 * internal.c1 * internal.k5 * hyd * oah - 1 * internal.c1 * internal.k17 * hyd;
    dstatedt[10] = 0 - 1 * internal.c1 * internal.k5 * hyd * oah + 1 * internal.c1 * internal.k15 * aco - 1 * internal.c1 * internal.k18 * oah;
    dstatedt[0] = 0 + 1 * internal.c0 * internal.k_v10 - 1 * internal.c2 * internal.k14 * oxy - 1 * internal.c2 * internal.k11 * N2 * oxy / ((internal.a * N2 + oxy) * (1 + Math.pow((hyd / internal.Kh), (internal.m))));
    dstatedt[3] = 0 + 1 * internal.c1 * internal.k3 * aps * A3c - 1 * internal.c1 * internal.k4 * pap * N2;
    dstatedt[4] = 0 + 1 * internal.c0 * internal.k_v0 / (1 + Math.pow((cys / internal.Kc), (internal.n))) - 1 * internal.c1 * internal.k2 * sul * A3c;
    var N1 = internal.N - N2;
    var S2 = internal.S - S1;
    dstatedt[1] = 0 - 1 * internal.c1 * internal.k2 * sul * A3c - 1 * internal.c1 * internal.k3 * aps * A3c + 1 * internal.c2 * internal.k16 * A3m * A2c - 1 * internal.c1 * internal.k12 * A3c;
    dstatedt[12] = 0 - 1 * internal.c2 * internal.k16 * A3m * A2c + 1 * internal.c2 * 3 * internal.k11 * N2 * oxy / ((internal.a * N2 + oxy) * (1 + Math.pow((hyd / internal.Kh), (internal.m)))) * A2m / (internal.Ka + A2m);
    dstatedt[9] = 0 + 1 * internal.c1 * internal.k7 * eth * N1 - 1 * internal.c1 * internal.k15 * aco - 1 * internal.c2 * internal.k8 * aco * S2;
    dstatedt[5] = 0 + 1 * internal.c0 * internal.k_v13 - 1 * internal.c1 * internal.k7 * eth * N1;
    dstatedt[8] = 0 - 3 * internal.c1 * internal.k4 * pap * N2 + 2 * internal.c1 * internal.k7 * eth * N1 + 4 * internal.c2 * internal.k9 * S1 * N1 - 1 * internal.c2 * internal.k11 * N2 * oxy / ((internal.a * N2 + oxy) * (1 + Math.pow((hyd / internal.Kh), (internal.m))));
    dstatedt[11] = 0 + 1 * internal.c2 * internal.k8 * aco * S2 - 1 * internal.c2 * internal.k9 * S1 * N1;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "oxy", "A3c", "aps", "pap", "sul", "eth", "hyd", "cys", "N2", "aco", "oah", "S1", "A3m"];
    this.metadata.internalOrder = {a: null, A3c_init: null, A3m_init: null, Ac: null, aco_init: null, Am: null, aps_init: null, c0: null, c1: null, C1: null, c2: null, C2: null, cys_init: null, eth_ex: null, eth_init: null, H2O: null, Hm: null, Ho: null, hyd_init: null, initial_A3c: null, initial_A3m: null, initial_aco: null, initial_aps: null, initial_cys: null, initial_eth: null, initial_hyd: null, initial_N2: null, initial_oah: null, initial_oxy: null, initial_pap: null, initial_S1: null, initial_sul: null, k_v0: null, k_v10: null, k_v13: null, k11: null, k12: null, k14: null, k15: null, k16: null, k17: null, k18: null, k2: null, k3: null, k4: null, k5: null, k6: null, k7: null, k8: null, k9: null, Ka: null, Kc: null, Kh: null, m: null, n: null, N: null, N2_init: null, oah_init: null, oxy_ex: null, oxy_init: null, pap_init: null, PPi: null, S: null, S1_init: null, sul_ex: null, sul_init: null};
    this.metadata.variableOrder = {oxy: null, A3c: null, aps: null, pap: null, sul: null, eth: null, hyd: null, cys: null, N2: null, aco: null, oah: null, S1: null, A3m: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
