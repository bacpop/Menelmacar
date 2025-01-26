export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.A1 = 0.0047800000000000004;
    internal.A2 = 0.17999999999999999;
    internal.e1 = 2;
    internal.e2 = 0.092308585205371996;
    internal.Epithelium = 4;
    internal.K = 2.35932924820229e-07;
    internal.k1 = 0.50698869999999996;
    internal.k2 = 2.3381277077343999e-06;
    internal.k3 = 62.591164760298199;
    internal.kxk = 0.55000000000000004;
    internal.LP = 0.070000000000000007;
    internal.Lumen = 1;
    internal.m2 = 594.89654641515904;
    internal.m3 = 0.10270250378151501;
    internal.MLN = 1;
    internal.pi = 3.1415929999999999;
    internal.v = 1.5992067315017599e-06;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(23).fill(0);
    state[0] = internal.initial_Cdiff;
    state[1] = internal.initial_Commensal_Beneficial;
    state[2] = internal.initial_Commensal_Dead;
    state[3] = internal.initial_tDC_LP;
    state[4] = internal.initial_tDC_MLN;
    state[5] = internal.initial_Commensal_Harmful;
    state[6] = internal.initial_N_Lum;
    state[7] = internal.initial_E;
    state[8] = internal.initial_E_d;
    state[9] = internal.initial_iDC_E;
    state[10] = internal.initial_E_i;
    state[11] = internal.initial_M_LP;
    state[12] = internal.initial_eDC_LP;
    state[13] = internal.initial_M0;
    state[14] = internal.initial_N_LP;
    state[15] = internal.initial_Th17_LP;
    state[16] = internal.initial_Th1_LP;
    state[17] = internal.initial_iTreg_LP;
    state[18] = internal.initial_eDC_MLN;
    state[19] = internal.initial_iTreg_MLN;
    state[20] = internal.initial_nT;
    state[21] = internal.initial_Th17_MLN;
    state[22] = internal.initial_Th1_MLN;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Cdiff_init", "Commensal_Beneficial_init", "Commensal_Dead_init", "Commensal_Harmful_init", "E_d_init", "E_i_init", "E_init", "eDC_LP_init", "eDC_MLN_init", "iDC_E_init", "iTreg_LP_init", "iTreg_MLN_init", "M_LP_init", "M0_init", "N_LP_init", "N_Lum_init", "nT_init", "tDC_LP_init", "tDC_MLN_init", "Th1_LP_init", "Th1_MLN_init", "Th17_LP_init", "Th17_MLN_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Cdiff_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Commensal_Beneficial_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Commensal_Dead_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Commensal_Harmful_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_d_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_i_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "eDC_LP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "eDC_MLN_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "iDC_E_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "iTreg_LP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "iTreg_MLN_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_LP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N_LP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N_Lum_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nT_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tDC_LP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tDC_MLN_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Th1_LP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Th1_MLN_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Th17_LP_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Th17_MLN_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_Cdiff = internal.Cdiff_init;
    internal.initial_Commensal_Beneficial = internal.Commensal_Beneficial_init;
    internal.initial_Commensal_Dead = internal.Commensal_Dead_init;
    internal.initial_Commensal_Harmful = internal.Commensal_Harmful_init;
    internal.initial_E = internal.E_init;
    internal.initial_E_d = internal.E_d_init;
    internal.initial_E_i = internal.E_i_init;
    internal.initial_eDC_LP = internal.eDC_LP_init;
    internal.initial_eDC_MLN = internal.eDC_MLN_init;
    internal.initial_iDC_E = internal.iDC_E_init;
    internal.initial_iTreg_LP = internal.iTreg_LP_init;
    internal.initial_iTreg_MLN = internal.iTreg_MLN_init;
    internal.initial_M_LP = internal.M_LP_init;
    internal.initial_M0 = internal.M0_init;
    internal.initial_N_LP = internal.N_LP_init;
    internal.initial_N_Lum = internal.N_Lum_init;
    internal.initial_nT = internal.nT_init;
    internal.initial_tDC_LP = internal.tDC_LP_init;
    internal.initial_tDC_MLN = internal.tDC_MLN_init;
    internal.initial_Th1_LP = internal.Th1_LP_init;
    internal.initial_Th1_MLN = internal.Th1_MLN_init;
    internal.initial_Th17_LP = internal.Th17_LP_init;
    internal.initial_Th17_MLN = internal.Th17_MLN_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Cdiff = state[0];
    const Commensal_Beneficial = state[1];
    const Commensal_Dead = state[2];
    const tDC_LP = state[3];
    const tDC_MLN = state[4];
    const Commensal_Harmful = state[5];
    const N_Lum = state[6];
    const E = state[7];
    const E_d = state[8];
    const E_i = state[10];
    const M_LP = state[11];
    const eDC_LP = state[12];
    const M0 = state[13];
    const N_LP = state[14];
    const Th17_LP = state[15];
    const Th1_LP = state[16];
    const iTreg_LP = state[17];
    const eDC_MLN = state[18];
    const iTreg_MLN = state[19];
    const Th17_MLN = state[21];
    const Th1_MLN = state[22];
    dstatedt[9] = 0;
    dstatedt[13] = 0;
    dstatedt[14] = 0;
    dstatedt[20] = 0;
    dstatedt[0] = 0 - 1 * (internal.kxk * Cdiff) - 1 * internal.Lumen * (internal.K * Cdiff * (M_LP + internal.m2 * N_Lum - internal.m3 * Commensal_Harmful)) + 2 * internal.Lumen * (internal.K * Cdiff * Commensal_Harmful) - 1 * internal.Lumen * (internal.K * Cdiff * Commensal_Harmful) - 1 * (internal.K * Cdiff * (internal.k1 * Commensal_Beneficial / Commensal_Dead + internal.k2 * E / (E_i + 100)));
    dstatedt[1] = 0 - 1 * internal.Lumen * (internal.k1 * Commensal_Beneficial * N_Lum * E_i - internal.k2 * Commensal_Dead);
    dstatedt[2] = 0 + 1 * internal.Lumen * (internal.k1 * Commensal_Beneficial * N_Lum * E_i - internal.k2 * Commensal_Dead) - 1 * internal.Lumen * internal.k1 * Commensal_Dead;
    dstatedt[5] = 0 - 1 * internal.Lumen * (internal.K * Commensal_Harmful * (N_LP * internal.A1 + E_i * internal.A2));
    dstatedt[7] = 0 - 1 * internal.Epithelium * (internal.v * E * (internal.k1 * N_Lum + internal.k2 * Th17_LP + internal.k3 * M_LP)) - 1 * internal.Epithelium * (internal.K * E * Cdiff) + 1 * internal.Epithelium * internal.k1 * E_d;
    dstatedt[8] = 0 + 1 * internal.Epithelium * (internal.v * E * (internal.k1 * N_Lum + internal.k2 * Th17_LP + internal.k3 * M_LP)) + 1 * internal.Epithelium * (internal.v * E_i * (internal.k1 * N_Lum + internal.k2 * Th17_LP + internal.k3 * M_LP)) - 1 * internal.Epithelium * internal.k1 * E_d + 1 * internal.Epithelium * internal.k1 * E_i;
    dstatedt[10] = 0 + 1 * internal.Epithelium * (internal.K * E * Cdiff) - 1 * internal.Epithelium * (internal.v * E_i * (internal.k1 * N_Lum + internal.k2 * Th17_LP + internal.k3 * M_LP)) - 1 * internal.Epithelium * internal.k1 * E_i;
    dstatedt[12] = 0 - 1 * internal.k1 * eDC_LP + 1 * (internal.kxk * Cdiff);
    dstatedt[18] = 0 - 1 * internal.MLN * internal.k1 * eDC_MLN + 1 * internal.k1 * eDC_LP - 1 * internal.MLN * internal.k1 * eDC_MLN - 1 * internal.MLN * (internal.K * eDC_MLN * Commensal_Dead / (internal.k1 * Commensal_Beneficial + internal.k2 * E));
    dstatedt[17] = 0 - 1 * internal.LP * internal.k1 * iTreg_LP + 1 * internal.k1 * iTreg_MLN + 1 * internal.LP * (internal.k1 * Th17_LP - internal.k2 * Cdiff * iTreg_LP);
    dstatedt[19] = 0 - 1 * internal.k1 * iTreg_MLN + 1 * internal.k1 * tDC_MLN;
    dstatedt[11] = 0 + 1 * (internal.K * M0 * (internal.e1 * Th17_LP + Cdiff - internal.e2 * iTreg_LP)) - 1 * internal.Epithelium * internal.k1 * M_LP;
    dstatedt[6] = 0 - 1 * internal.Lumen * (internal.K * N_Lum * Commensal_Beneficial) + 1 * (internal.v * N_LP * (Cdiff * (internal.k1 * E_d + internal.k2 * Th17_LP) - internal.k3 * iTreg_LP));
    dstatedt[3] = 0 + 1 * (internal.K * Cdiff * (internal.k1 * Commensal_Beneficial / Commensal_Dead + internal.k2 * E / (E_i + 100))) - 1 * internal.Lumen * internal.k1 * tDC_LP;
    dstatedt[4] = 0 + 1 * internal.Lumen * internal.k1 * tDC_LP - 1 * internal.Lumen * (internal.kxk * tDC_MLN) - 1 * internal.k1 * tDC_MLN;
    dstatedt[16] = 0 - 1 * internal.LP * internal.k1 * Th1_LP + 1 * internal.k1 * Th1_MLN;
    dstatedt[22] = 0 - 1 * internal.k1 * Th1_MLN + 1 * internal.MLN * (internal.K * eDC_MLN * Commensal_Dead / (internal.k1 * Commensal_Beneficial + internal.k2 * E));
    dstatedt[15] = 0 - 1 * internal.LP * internal.k1 * Th17_LP - 1 * internal.LP * (internal.k1 * Th17_LP - internal.k2 * Cdiff * iTreg_LP) + 1 * internal.k1 * Th17_MLN;
    dstatedt[21] = 0 - 1 * internal.k1 * Th17_MLN + 1 * internal.MLN * internal.k1 * eDC_MLN;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Cdiff", "Commensal_Beneficial", "Commensal_Dead", "tDC_LP", "tDC_MLN", "Commensal_Harmful", "N_Lum", "E", "E_d", "iDC_E", "E_i", "M_LP", "eDC_LP", "M0", "N_LP", "Th17_LP", "Th1_LP", "iTreg_LP", "eDC_MLN", "iTreg_MLN", "nT", "Th17_MLN", "Th1_MLN"];
    this.metadata.internalOrder = {A1: null, A2: null, Cdiff_init: null, Commensal_Beneficial_init: null, Commensal_Dead_init: null, Commensal_Harmful_init: null, E_d_init: null, E_i_init: null, E_init: null, e1: null, e2: null, eDC_LP_init: null, eDC_MLN_init: null, Epithelium: null, iDC_E_init: null, initial_Cdiff: null, initial_Commensal_Beneficial: null, initial_Commensal_Dead: null, initial_Commensal_Harmful: null, initial_E: null, initial_E_d: null, initial_E_i: null, initial_eDC_LP: null, initial_eDC_MLN: null, initial_iDC_E: null, initial_iTreg_LP: null, initial_iTreg_MLN: null, initial_M_LP: null, initial_M0: null, initial_N_LP: null, initial_N_Lum: null, initial_nT: null, initial_tDC_LP: null, initial_tDC_MLN: null, initial_Th1_LP: null, initial_Th1_MLN: null, initial_Th17_LP: null, initial_Th17_MLN: null, iTreg_LP_init: null, iTreg_MLN_init: null, K: null, k1: null, k2: null, k3: null, kxk: null, LP: null, Lumen: null, M_LP_init: null, M0_init: null, m2: null, m3: null, MLN: null, N_LP_init: null, N_Lum_init: null, nT_init: null, pi: null, tDC_LP_init: null, tDC_MLN_init: null, Th1_LP_init: null, Th1_MLN_init: null, Th17_LP_init: null, Th17_MLN_init: null, v: null};
    this.metadata.variableOrder = {Cdiff: null, Commensal_Beneficial: null, Commensal_Dead: null, tDC_LP: null, tDC_MLN: null, Commensal_Harmful: null, N_Lum: null, E: null, E_d: null, iDC_E: null, E_i: null, M_LP: null, eDC_LP: null, M0: null, N_LP: null, Th17_LP: null, Th1_LP: null, iTreg_LP: null, eDC_MLN: null, iTreg_MLN: null, nT: null, Th17_MLN: null, Th1_MLN: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
