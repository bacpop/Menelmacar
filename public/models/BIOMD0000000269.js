export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.ACC = 0;
    internal.CK_ex = 0;
    internal.compartment_1 = 1;
    internal.CTR1T = 0.29999999999999999;
    internal.extra = 1;
    internal.IAA = 0;
    internal.RaT = 1;
    internal.ReT = 0.29999999999999999;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(9).fill(0);
    state[0] = internal.initial_Auxin;
    state[1] = internal.initial_X;
    state[2] = internal.initial_PLSp;
    state[3] = internal.initial_Ra_star;
    state[4] = internal.initial_CK;
    state[5] = internal.initial_ET;
    state[6] = internal.initial_PLSm;
    state[7] = internal.initial_Re_star;
    state[8] = internal.initial_CTR1_star;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Auxin_init", "CK_init", "CTR1_star_init", "ET_init", "k_auxin", "k_cytokinin", "k_ethylene", "k1", "k10", "k10a", "k11", "k12", "k12a", "k13", "k14", "k15", "k16", "k16a", "k17", "k18", "k18a", "k19", "k1a", "k2", "k2a", "k2b", "k2c", "k3", "k3a", "k4", "k5", "k6", "k6a", "k7", "k8", "k9", "PLSm_init", "PLSp_init", "Ra_star_init", "Re_star_init", "X_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Auxin_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CK_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CTR1_star_init", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ET_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_auxin", internal, 70, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_cytokinin", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_ethylene", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 0.00029999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10a", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k12", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k12a", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k13", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k14", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k15", internal, 0.085000000000000006, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k16", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k16a", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k17", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k18", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k18a", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k19", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1a", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2a", internal, 2.7999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2b", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2c", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3a", internal, 0.45000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6a", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PLSm_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "PLSp_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ra_star_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Re_star_init", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    internal.initial_Auxin = internal.Auxin_init;
    internal.initial_CK = internal.CK_init;
    internal.initial_CTR1_star = internal.CTR1_star_init;
    internal.initial_ET = internal.ET_init;
    internal.initial_PLSm = internal.PLSm_init;
    internal.initial_PLSp = internal.PLSp_init;
    internal.initial_Ra_star = internal.Ra_star_init;
    internal.initial_Re_star = internal.Re_star_init;
    internal.initial_X = internal.X_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Auxin = state[0];
    const X = state[1];
    const PLSp = state[2];
    const Ra_star = state[3];
    const CK = state[4];
    const ET = state[5];
    const PLSm = state[6];
    const Re_star = state[7];
    const CTR1_star = state[8];
    var CTR1 = internal.CTR1T - CTR1_star;
    dstatedt[0] = 0 + 1 * internal.compartment_1 * (internal.k1a / (1 + X / internal.k1)) + 1 * internal.compartment_1 * (internal.k2 + internal.k2a * (ET / (1 + CK / internal.k2b)) * (PLSp / (internal.k2c + PLSp))) - 1 * internal.compartment_1 * ((internal.k3 + internal.k3a * X) * Auxin) + 1 * internal.compartment_1 * internal.k_auxin * internal.IAA;
    dstatedt[4] = 0 + 1 * internal.compartment_1 * (internal.k18a / (1 + Auxin / internal.k18)) - 1 * internal.compartment_1 * (internal.k19 * CK) + 1 * internal.compartment_1 * internal.k_cytokinin * internal.CK_ex;
    dstatedt[5] = 0 + 1 * internal.compartment_1 * (internal.k12 + internal.k12a * Auxin * CK) - 1 * internal.compartment_1 * (internal.k13 * ET) + 1 * internal.compartment_1 * internal.k_ethylene * internal.ACC;
    dstatedt[6] = 0 + 1 * internal.compartment_1 * (internal.k6 * Ra_star / (1 + ET / internal.k6a)) - 1 * internal.compartment_1 * (internal.k7 * PLSm);
    dstatedt[2] = 0 + 1 * internal.compartment_1 * (internal.k8 * PLSm) - 1 * internal.compartment_1 * (internal.k9 * PLSp);
    dstatedt[1] = 0 + 1 * internal.compartment_1 * (internal.k16 - internal.k16a * CTR1_star) - 1 * internal.compartment_1 * (internal.k17 * X);
    var Ra = internal.RaT - Ra_star;
    var Re = internal.ReT - Re_star;
    dstatedt[8] = 0 + 1 * internal.compartment_1 * (internal.k14 * Re_star * CTR1) - 1 * internal.compartment_1 * (internal.k15 * CTR1_star);
    dstatedt[3] = 0 + 1 * internal.compartment_1 * (internal.k4 * Auxin * Ra) - 1 * internal.compartment_1 * internal.k5 * Ra_star;
    dstatedt[7] = 0 + 1 * internal.compartment_1 * ((internal.k10 + internal.k10a * PLSp) * Re) - 1 * internal.compartment_1 * (internal.k11 * Re_star * ET);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Auxin", "X", "PLSp", "Ra_star", "CK", "ET", "PLSm", "Re_star", "CTR1_star"];
    this.metadata.internalOrder = {ACC: null, Auxin_init: null, CK_ex: null, CK_init: null, compartment_1: null, CTR1_star_init: null, CTR1T: null, ET_init: null, extra: null, IAA: null, initial_Auxin: null, initial_CK: null, initial_CTR1_star: null, initial_ET: null, initial_PLSm: null, initial_PLSp: null, initial_Ra_star: null, initial_Re_star: null, initial_X: null, k_auxin: null, k_cytokinin: null, k_ethylene: null, k1: null, k10: null, k10a: null, k11: null, k12: null, k12a: null, k13: null, k14: null, k15: null, k16: null, k16a: null, k17: null, k18: null, k18a: null, k19: null, k1a: null, k2: null, k2a: null, k2b: null, k2c: null, k3: null, k3a: null, k4: null, k5: null, k6: null, k6a: null, k7: null, k8: null, k9: null, PLSm_init: null, PLSp_init: null, Ra_star_init: null, RaT: null, Re_star_init: null, ReT: null, X_init: null};
    this.metadata.variableOrder = {Auxin: null, X: null, PLSp: null, Ra_star: null, CK: null, ET: null, PLSm: null, Re_star: null, CTR1_star: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
