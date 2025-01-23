export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.tme = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(5).fill(0);
    state[0] = internal.initial_Th;
    state[1] = internal.initial_T;
    state[2] = internal.initial_Cs;
    state[3] = internal.initial_Cp;
    state[4] = internal.initial_C;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["ath", "atum", "bth", "c", "C_init", "Cp_init", "Cs_init", "cth", "dth", "gtum", "h0", "h1", "h2", "i11", "i21", "i31", "i3t", "j0", "jtp", "jts", "k1", "kp", "ks", "kth", "ktum", "T_init", "Th_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "ath", internal, 0.0080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "atum", internal, 0.51400000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "bth", internal, 0.089999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cs_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cth", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dth", internal, 9.9999999999999995e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gtum", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h0", internal, 100000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h1", internal, 1000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h2", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "i11", internal, 5.4000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "i21", internal, 8.5999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "i31", internal, 0.00038000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "i3t", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "j0", internal, 34, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "jtp", internal, 34, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "jts", internal, 34, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 1e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kp", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ks", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kth", internal, 1e-08, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ktum", internal, 1.02e-09, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_init", internal, 100000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Th_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_C = internal.C_init;
    internal.initial_Cp = internal.Cp_init;
    internal.initial_Cs = internal.Cs_init;
    internal.initial_T = internal.T_init;
    internal.initial_Th = internal.Th_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Th = state[0];
    const T = state[1];
    const Cs = state[2];
    const Cp = state[3];
    const C = state[4];
    dstatedt[4] = 0 - 1 * internal.tme * internal.j0 * C + 1 * internal.tme * ((internal.i11 * Th + internal.c) * T / ((internal.h2 + T) * (1 + internal.kp * Cp)));
    dstatedt[3] = 0 - 1 * internal.tme * internal.jtp * Cp + 1 * internal.tme * ((internal.i31 * Th + internal.c) * T / (internal.h2 + T)) + 1 * internal.tme * (internal.i3t * Math.pow((T), (2)) / (Math.pow((internal.h1), (2)) + Math.pow((T), (2))));
    dstatedt[2] = 0 - 1 * internal.tme * internal.jts * Cs + 1 * internal.tme * ((internal.i21 * Th + internal.c) * T / ((internal.h2 + T) * (1 + internal.kp * Cp)));
    dstatedt[1] = 0 + 1 * internal.tme * (internal.atum * T * (1 + internal.kp * Cp) * (1 - internal.ktum * T) / (1 + internal.ks * Cs)) - 1 * internal.tme * (internal.gtum * Cs * T / (internal.h0 + T));
    var f = Th;
    dstatedt[0] = 0 + 1 * internal.tme * (internal.ath * C * T / ((internal.h2 + T) * (1 + internal.kp * Cp))) + 1 * internal.tme * (internal.bth * Th * (1 - internal.kth * Th) / (1 + internal.kp * Cp)) - 1 * internal.tme * (internal.cth * f) - 1 * internal.tme * (internal.dth * T * Th);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Th", "T", "Cs", "Cp", "C"];
    this.metadata.internalOrder = {ath: null, atum: null, bth: null, c: null, C_init: null, Cp_init: null, Cs_init: null, cth: null, dth: null, gtum: null, h0: null, h1: null, h2: null, i11: null, i21: null, i31: null, i3t: null, initial_C: null, initial_Cp: null, initial_Cs: null, initial_T: null, initial_Th: null, j0: null, jtp: null, jts: null, k1: null, kp: null, ks: null, kth: null, ktum: null, T_init: null, Th_init: null, tme: null};
    this.metadata.variableOrder = {Th: null, T: null, Cs: null, Cp: null, C: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
