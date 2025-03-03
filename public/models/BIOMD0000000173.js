export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cytosol = 2.2699999999999998e-12;
    internal.nucleus = 9.9999999999999998e-13;
    internal.PPase = 1;
    internal.TGFb_c = 0.065999982478023203;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(23).fill(0);
    state[0] = internal.initial_S2_n;
    state[1] = internal.initial_pS2_n;
    state[2] = internal.initial_G_n;
    state[3] = internal.initial_pG_n;
    state[4] = internal.initial_S22_n;
    state[5] = internal.initial_S24_n;
    state[6] = internal.initial_S4_n;
    state[7] = internal.initial_G2_n;
    state[8] = internal.initial_G4_n;
    state[9] = internal.initial_GG_n;
    state[10] = internal.initial_S22_c;
    state[11] = internal.initial_S24_c;
    state[12] = internal.initial_S4_c;
    state[13] = internal.initial_S2_c;
    state[14] = internal.initial_pS2_c;
    state[15] = internal.initial_G_c;
    state[16] = internal.initial_pG_c;
    state[17] = internal.initial_G2_c;
    state[18] = internal.initial_G4_c;
    state[19] = internal.initial_GG_c;
    state[20] = internal.initial_R_act;
    state[21] = internal.initial_R;
    state[22] = internal.initial_R_inact;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["G_c_init", "G_n_init", "G2_c_init", "G2_n_init", "G4_c_init", "G4_n_init", "GG_c_init", "GG_n_init", "k_TGFb", "kdephos", "kex", "kin", "kin_CIF", "koff", "koff_SB", "kon", "kon_SB", "kphos", "ntoN", "pG_c_init", "pG_n_init", "pS2_c_init", "pS2_n_init", "R_act_init", "R_inact_init", "R_init", "S2_c_init", "S2_n_init", "S22_c_init", "S22_n_init", "S24_c_init", "S24_n_init", "S4_c_init", "S4_n_init", "SB_0", "SB_add", "t_SB"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "G_c_init", internal, 60.5899176013587, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G_n_init", internal, 28.514773357616999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G2_c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G2_n_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G4_c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G4_n_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GG_c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GG_n_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_TGFb", internal, 0.074235550202880002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kdephos", internal, 0.0065663900000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kex", internal, 1.26e-14, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kin", internal, 5.9299999999999997e-15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kin_CIF", internal, 3.3634782099999998e-14, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "koff", internal, 0.016, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "koff_SB", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kon", internal, 0.00183925592901392, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kon_SB", internal, 0.14642231710388401, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kphos", internal, 0.00040370816739840001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ntoN", internal, 602214150000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pG_c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pG_n_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pS2_c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pS2_n_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_act_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_inact_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S2_c_init", internal, 60.5899176013587, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S2_n_init", internal, 28.514773357616999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S22_c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S22_n_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S24_c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S24_n_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S4_c_init", internal, 50.781034069999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S4_n_init", internal, 50.780938970000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SB_0", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "SB_add", internal, 10000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t_SB", internal, 2700, -Infinity, Infinity, false);
    internal.CIF = internal.kin_CIF / internal.kin;
    internal.initial_G_c = internal.G_c_init;
    internal.initial_G_n = internal.G_n_init;
    internal.initial_G2_c = internal.G2_c_init;
    internal.initial_G2_n = internal.G2_n_init;
    internal.initial_G4_c = internal.G4_c_init;
    internal.initial_G4_n = internal.G4_n_init;
    internal.initial_GG_c = internal.GG_c_init;
    internal.initial_GG_n = internal.GG_n_init;
    internal.initial_pG_c = internal.pG_c_init;
    internal.initial_pG_n = internal.pG_n_init;
    internal.initial_pS2_c = internal.pS2_c_init;
    internal.initial_pS2_n = internal.pS2_n_init;
    internal.initial_R = internal.R_init;
    internal.initial_R_act = internal.R_act_init;
    internal.initial_R_inact = internal.R_inact_init;
    internal.initial_S2_c = internal.S2_c_init;
    internal.initial_S2_n = internal.S2_n_init;
    internal.initial_S22_c = internal.S22_c_init;
    internal.initial_S22_n = internal.S22_n_init;
    internal.initial_S24_c = internal.S24_c_init;
    internal.initial_S24_n = internal.S24_n_init;
    internal.initial_S4_c = internal.S4_c_init;
    internal.initial_S4_n = internal.S4_n_init;
    internal.K_diss = internal.koff / internal.kon;
    internal.K_dissSB = internal.koff_SB / internal.kon_SB;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const S2_n = state[0];
    const pS2_n = state[1];
    const G_n = state[2];
    const pG_n = state[3];
    const S22_n = state[4];
    const S24_n = state[5];
    const S4_n = state[6];
    const G2_n = state[7];
    const G4_n = state[8];
    const GG_n = state[9];
    const S22_c = state[10];
    const S24_c = state[11];
    const S4_c = state[12];
    const S2_c = state[13];
    const pS2_c = state[14];
    const G_c = state[15];
    const pG_c = state[16];
    const G2_c = state[17];
    const G4_c = state[18];
    const GG_c = state[19];
    const R_act = state[20];
    const R = state[21];
    const R_inact = state[22];
    dstatedt[15] = 0 - 1 * internal.cytosol * internal.kphos * G_c * R_act - 1 * internal.kin * G_c - internal.kex * G_n;
    dstatedt[2] = 0 + 1 * internal.nucleus * internal.kdephos * pG_n * internal.PPase + 1 * internal.kin * G_c - internal.kex * G_n;
    dstatedt[17] = 0 + 1 * internal.cytosol * (internal.kon * pS2_c * pG_c - internal.koff * G2_c) - 1 * internal.kin_CIF * G2_c;
    dstatedt[7] = 0 + 1 * internal.nucleus * (internal.kon * pS2_n * pG_n - internal.koff * G2_n) + 1 * internal.kin_CIF * G2_c;
    dstatedt[18] = 0 + 1 * internal.cytosol * (internal.kon * pG_c * S4_c - internal.koff * G4_c) - 1 * internal.kin_CIF * G4_c;
    dstatedt[8] = 0 + 1 * internal.nucleus * (internal.kon * pG_n * S4_n - internal.koff * G4_n) + 1 * internal.kin_CIF * G4_c;
    dstatedt[19] = 0 + 1 * internal.cytosol * (internal.kon * pG_c * pG_c - internal.koff * GG_c) - 1 * internal.kin_CIF * GG_c;
    dstatedt[9] = 0 + 1 * internal.nucleus * (internal.kon * pG_n * pG_n - internal.koff * GG_n) + 1 * internal.kin_CIF * GG_c;
    dstatedt[16] = 0 + 1 * internal.cytosol * internal.kphos * G_c * R_act - 1 * internal.kin * pG_c - internal.kex * pG_n - 2 * internal.cytosol * (internal.kon * pG_c * pG_c - internal.koff * GG_c) - 1 * internal.cytosol * (internal.kon * pS2_c * pG_c - internal.koff * G2_c) - 1 * internal.cytosol * (internal.kon * pG_c * S4_c - internal.koff * G4_c);
    dstatedt[3] = 0 - 1 * internal.nucleus * internal.kdephos * pG_n * internal.PPase + 1 * internal.kin * pG_c - internal.kex * pG_n - 2 * internal.nucleus * (internal.kon * pG_n * pG_n - internal.koff * GG_n) - 1 * internal.nucleus * (internal.kon * pS2_n * pG_n - internal.koff * G2_n) - 1 * internal.nucleus * (internal.kon * pG_n * S4_n - internal.koff * G4_n);
    dstatedt[14] = 0 - 1 * internal.kin * pS2_c - internal.kex * pS2_n + 1 * internal.cytosol * internal.kphos * R_act * S2_c - 1 * internal.cytosol * (internal.kon * pS2_c * S4_c - internal.koff * S24_c) - 2 * internal.cytosol * (internal.kon * pS2_c * pS2_c - internal.koff * S22_c) - 1 * internal.cytosol * (internal.kon * pS2_c * pG_c - internal.koff * G2_c);
    dstatedt[1] = 0 + 1 * internal.kin * pS2_c - internal.kex * pS2_n - 1 * internal.nucleus * (internal.kon * pS2_n * S4_n - internal.koff * S24_n) - 2 * internal.nucleus * (internal.kon * pS2_n * pS2_n - internal.koff * S22_n) - 1 * internal.nucleus * internal.kdephos * pS2_n * internal.PPase - 1 * internal.nucleus * (internal.kon * pS2_n * pG_n - internal.koff * G2_n);
    dstatedt[21] = 0 - 1 * internal.cytosol * internal.k_TGFb * R * internal.TGFb_c;
    dstatedt[13] = 0 - 1 * internal.kin * S2_c - internal.kex * S2_n - 1 * internal.cytosol * internal.kphos * R_act * S2_c;
    dstatedt[0] = 0 + 1 * internal.kin * S2_c - internal.kex * S2_n + 1 * internal.nucleus * internal.kdephos * pS2_n * internal.PPase;
    dstatedt[10] = 0 - 1 * internal.kin_CIF * S22_c + 1 * internal.cytosol * (internal.kon * pS2_c * pS2_c - internal.koff * S22_c);
    dstatedt[4] = 0 + 1 * internal.kin_CIF * S22_c + 1 * internal.nucleus * (internal.kon * pS2_n * pS2_n - internal.koff * S22_n);
    dstatedt[11] = 0 + 1 * internal.cytosol * (internal.kon * pS2_c * S4_c - internal.koff * S24_c) - 1 * internal.kin_CIF * S24_c;
    dstatedt[5] = 0 + 1 * internal.nucleus * (internal.kon * pS2_n * S4_n - internal.koff * S24_n) + 1 * internal.kin_CIF * S24_c;
    dstatedt[12] = 0 - 1 * internal.kin * S4_c - internal.kin * S4_n - 1 * internal.cytosol * (internal.kon * pS2_c * S4_c - internal.koff * S24_c) - 1 * internal.cytosol * (internal.kon * pG_c * S4_c - internal.koff * G4_c);
    dstatedt[6] = 0 + 1 * internal.kin * S4_c - internal.kin * S4_n - 1 * internal.nucleus * (internal.kon * pS2_n * S4_n - internal.koff * S24_n) - 1 * internal.nucleus * (internal.kon * pG_n * S4_n - internal.koff * G4_n);
    var SB = ((t > internal.t_SB ? internal.SB_add : internal.SB_0));
    dstatedt[20] = 0 - 1 * internal.cytosol * internal.kphos * R_act * S2_c + 1 * internal.cytosol * internal.kphos * R_act * S2_c + 1 * internal.cytosol * internal.k_TGFb * R * internal.TGFb_c - 1 * internal.cytosol * (internal.kon_SB * R_act * SB - internal.koff_SB * R_inact) - 1 * internal.cytosol * internal.kphos * G_c * R_act + 1 * internal.cytosol * internal.kphos * G_c * R_act;
    dstatedt[22] = 0 + 1 * internal.cytosol * (internal.kon_SB * R_act * SB - internal.koff_SB * R_inact);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "S2_n", "pS2_n", "G_n", "pG_n", "S22_n", "S24_n", "S4_n", "G2_n", "G4_n", "GG_n", "S22_c", "S24_c", "S4_c", "S2_c", "pS2_c", "G_c", "pG_c", "G2_c", "G4_c", "GG_c", "R_act", "R", "R_inact"];
    this.metadata.internalOrder = {CIF: null, cytosol: null, G_c_init: null, G_n_init: null, G2_c_init: null, G2_n_init: null, G4_c_init: null, G4_n_init: null, GG_c_init: null, GG_n_init: null, initial_G_c: null, initial_G_n: null, initial_G2_c: null, initial_G2_n: null, initial_G4_c: null, initial_G4_n: null, initial_GG_c: null, initial_GG_n: null, initial_pG_c: null, initial_pG_n: null, initial_pS2_c: null, initial_pS2_n: null, initial_R: null, initial_R_act: null, initial_R_inact: null, initial_S2_c: null, initial_S2_n: null, initial_S22_c: null, initial_S22_n: null, initial_S24_c: null, initial_S24_n: null, initial_S4_c: null, initial_S4_n: null, K_diss: null, K_dissSB: null, k_TGFb: null, kdephos: null, kex: null, kin: null, kin_CIF: null, koff: null, koff_SB: null, kon: null, kon_SB: null, kphos: null, ntoN: null, nucleus: null, pG_c_init: null, pG_n_init: null, PPase: null, pS2_c_init: null, pS2_n_init: null, R_act_init: null, R_inact_init: null, R_init: null, S2_c_init: null, S2_n_init: null, S22_c_init: null, S22_n_init: null, S24_c_init: null, S24_n_init: null, S4_c_init: null, S4_n_init: null, SB_0: null, SB_add: null, t_SB: null, TGFb_c: null};
    this.metadata.variableOrder = {S2_n: null, pS2_n: null, G_n: null, pG_n: null, S22_n: null, S24_n: null, S4_n: null, G2_n: null, G4_n: null, GG_n: null, S22_c: null, S24_c: null, S4_c: null, S2_c: null, pS2_c: null, G_c: null, pG_c: null, G2_c: null, G4_c: null, GG_c: null, R_act: null, R: null, R_inact: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
