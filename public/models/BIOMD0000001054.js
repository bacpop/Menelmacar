export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Endothelium = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(7).fill(0);
    state[0] = internal.initial_Fbna;
    state[1] = internal.initial_FM;
    state[2] = internal.initial_Thb;
    state[3] = internal.initial_Fbni;
    state[4] = internal.initial_C0;
    state[5] = internal.initial_C1;
    state[6] = internal.initial_C2;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["C0_init", "C1_init", "C2_init", "Fbna_init", "Fbni_init", "FM_init", "k_0", "k_1", "k1", "k1_0", "k2", "k2_0", "k3", "k3_0", "k4", "k4_0", "kxk", "Thb_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "C0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Fbna_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Fbni_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FM_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_0", internal, 0.031, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_1", internal, 366, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.48999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1_0", internal, 250, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 298, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2_0", internal, 0.26000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 2.6600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3_0", internal, 26.899999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 15.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4_0", internal, 375, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 1931, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Thb_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_C0 = internal.C0_init;
    internal.initial_C1 = internal.C1_init;
    internal.initial_C2 = internal.C2_init;
    internal.initial_Fbna = internal.Fbna_init;
    internal.initial_Fbni = internal.Fbni_init;
    internal.initial_FM = internal.FM_init;
    internal.initial_Thb = internal.Thb_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Fbna = state[0];
    const FM = state[1];
    const Thb = state[2];
    const Fbni = state[3];
    const C0 = state[4];
    const C1 = state[5];
    const C2 = state[6];
    dstatedt[4] = 0 - 1 * internal.Endothelium * internal.kxk * C0 + 1 * internal.Endothelium * internal.k_0 * Thb * Fbni - 1 * internal.Endothelium * internal.k_1 * C0;
    dstatedt[5] = 0 + 1 * internal.Endothelium * internal.k1 * Fbna * Thb - 1 * internal.Endothelium * internal.k1_0 * C1 - 1 * internal.Endothelium * internal.k3 * C1 * Fbna + 1 * internal.Endothelium * internal.k3_0 * C2 - 1 * internal.Endothelium * internal.k2 * C1 + 1 * internal.Endothelium * internal.k2_0 * FM * Thb + 1 * internal.Endothelium * internal.k4 * C2 - 1 * internal.Endothelium * internal.k4_0 * FM * C1;
    dstatedt[6] = 0 + 1 * internal.Endothelium * internal.k3 * C1 * Fbna - 1 * internal.Endothelium * internal.k3_0 * C2 - 1 * internal.Endothelium * internal.k4 * C2 + 1 * internal.Endothelium * internal.k4_0 * FM * C1;
    dstatedt[0] = 0 - 1 * internal.Endothelium * internal.k1 * Fbna * Thb + 1 * internal.Endothelium * internal.k1_0 * C1 - 1 * internal.Endothelium * internal.k3 * C1 * Fbna + 1 * internal.Endothelium * internal.k3_0 * C2 + 1 * internal.Endothelium * internal.kxk * C0;
    dstatedt[3] = 0 - 1 * internal.Endothelium * internal.k_0 * Thb * Fbni + 1 * internal.Endothelium * internal.k_1 * C0;
    dstatedt[1] = 0 + 1 * internal.Endothelium * internal.k2 * C1 - 1 * internal.Endothelium * internal.k2_0 * FM * Thb + 1 * internal.Endothelium * internal.k4 * C2 - 1 * internal.Endothelium * internal.k4_0 * FM * C1;
    dstatedt[2] = 0 - 1 * internal.Endothelium * internal.k1 * Fbna * Thb + 1 * internal.Endothelium * internal.k1_0 * C1 + 1 * internal.Endothelium * internal.kxk * C0 + 1 * internal.Endothelium * internal.k2 * C1 - 1 * internal.Endothelium * internal.k2_0 * FM * Thb - 1 * internal.Endothelium * internal.k_0 * Thb * Fbni + 1 * internal.Endothelium * internal.k_1 * C0;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Fbna", "FM", "Thb", "Fbni", "C0", "C1", "C2"];
    this.metadata.internalOrder = {C0_init: null, C1_init: null, C2_init: null, Endothelium: null, Fbna_init: null, Fbni_init: null, FM_init: null, initial_C0: null, initial_C1: null, initial_C2: null, initial_Fbna: null, initial_Fbni: null, initial_FM: null, initial_Thb: null, k_0: null, k_1: null, k1: null, k1_0: null, k2: null, k2_0: null, k3: null, k3_0: null, k4: null, k4_0: null, kxk: null, Thb_init: null};
    this.metadata.variableOrder = {Fbna: null, FM: null, Thb: null, Fbni: null, C0: null, C1: null, C2: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
