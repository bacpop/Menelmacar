export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.NAD = 0;
    internal.NAD2 = 0;
    internal.NADHres = 0;
    internal.O2g = 12;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(12).fill(0);
    state[0] = internal.initial_NADH;
    state[1] = internal.initial_O2;
    state[2] = internal.initial_H2O2;
    state[3] = internal.initial_per3;
    state[4] = internal.initial_coI;
    state[5] = internal.initial_ArH;
    state[6] = internal.initial_coII;
    state[7] = internal.initial_Ar;
    state[8] = internal.initial_NADrad;
    state[9] = internal.initial_super;
    state[10] = internal.initial_coIII;
    state[11] = internal.initial_per2;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Ar_init", "ArH_init", "coI_init", "coII_init", "coIII_init", "H2O2_init", "k1", "k10", "k11", "k12", "k13b", "k13f", "k14", "k2", "k3", "k4", "k5", "k6", "k7", "k8", "k9", "NADH_init", "NADrad_init", "O2_init", "per2_init", "per3_init", "super_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Ar_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ArH_init", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "coI_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "coII_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "coIII_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H2O2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 3.0000000000000001e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 1.8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k12", internal, 0.080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k13b", internal, 0.0060000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k13f", internal, 0.0060000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k14", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 18, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.14999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0.0051999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 17, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 40, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 60, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NADH_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NADrad_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "O2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "per2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "per3_init", internal, 1.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "super_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_Ar = internal.Ar_init;
    internal.initial_ArH = internal.ArH_init;
    internal.initial_coI = internal.coI_init;
    internal.initial_coII = internal.coII_init;
    internal.initial_coIII = internal.coIII_init;
    internal.initial_H2O2 = internal.H2O2_init;
    internal.initial_NADH = internal.NADH_init;
    internal.initial_NADrad = internal.NADrad_init;
    internal.initial_O2 = internal.O2_init;
    internal.initial_per2 = internal.per2_init;
    internal.initial_per3 = internal.per3_init;
    internal.initial_super = internal.super_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const NADH = state[0];
    const O2 = state[1];
    const H2O2 = state[2];
    const per3 = state[3];
    const coI = state[4];
    const ArH = state[5];
    const coII = state[6];
    const Ar = state[7];
    const NADrad = state[8];
    const super = state[9];
    const coIII = state[10];
    const per2 = state[11];
    dstatedt[7] = 0 + 1 * internal.compartment * internal.k3 * coI * ArH + 1 * internal.compartment * internal.k4 * coII * ArH - 1 * internal.compartment * internal.k14 * Ar * NADH;
    dstatedt[5] = 0 - 1 * internal.compartment * internal.k3 * coI * ArH - 1 * internal.compartment * internal.k4 * coII * ArH + 1 * internal.compartment * internal.k14 * Ar * NADH;
    dstatedt[4] = 0 + 1 * internal.compartment * internal.k2 * H2O2 * per3 - 1 * internal.compartment * internal.k3 * coI * ArH + 1 * internal.compartment * internal.k8 * coIII * NADrad;
    dstatedt[6] = 0 + 1 * internal.compartment * internal.k3 * coI * ArH - 1 * internal.compartment * internal.k4 * coII * ArH;
    dstatedt[10] = 0 + 1 * internal.compartment * internal.k6 * super * per3 - 1 * internal.compartment * internal.k8 * coIII * NADrad + 1 * internal.compartment * internal.k11 * per2 * O2;
    dstatedt[2] = 0 + 1 * internal.compartment * internal.k1 * NADH * O2 - 1 * internal.compartment * internal.k2 * H2O2 * per3 + 1 * internal.compartment * internal.k7 * super * super;
    dstatedt[0] = 0 - 1 * internal.compartment * internal.k1 * NADH * O2 + 1 * internal.compartment * internal.k12 - 1 * internal.compartment * internal.k14 * Ar * NADH;
    dstatedt[8] = 0 - 1 * internal.compartment * internal.k5 * NADrad * O2 - 1 * internal.compartment * internal.k8 * coIII * NADrad - 2 * internal.compartment * internal.k9 * NADrad * NADrad - 1 * internal.compartment * internal.k10 * per3 * NADrad + 1 * internal.compartment * internal.k14 * Ar * NADH;
    dstatedt[1] = 0 - 1 * internal.compartment * internal.k1 * NADH * O2 - 1 * internal.compartment * internal.k5 * NADrad * O2 + 1 * internal.compartment * internal.k7 * super * super - 1 * internal.compartment * internal.k11 * per2 * O2 + 1 * internal.compartment * internal.k13f * internal.O2g - 1 * internal.compartment * internal.k13b * O2;
    dstatedt[11] = 0 + 1 * internal.compartment * internal.k10 * per3 * NADrad - 1 * internal.compartment * internal.k11 * per2 * O2;
    dstatedt[3] = 0 - 1 * internal.compartment * internal.k2 * H2O2 * per3 + 1 * internal.compartment * internal.k4 * coII * ArH - 1 * internal.compartment * internal.k6 * super * per3 - 1 * internal.compartment * internal.k10 * per3 * NADrad;
    dstatedt[9] = 0 + 1 * internal.compartment * internal.k5 * NADrad * O2 - 1 * internal.compartment * internal.k6 * super * per3 - 2 * internal.compartment * internal.k7 * super * super;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "NADH", "O2", "H2O2", "per3", "coI", "ArH", "coII", "Ar", "NADrad", "super", "coIII", "per2"];
    this.metadata.internalOrder = {Ar_init: null, ArH_init: null, coI_init: null, coII_init: null, coIII_init: null, compartment: null, H2O2_init: null, initial_Ar: null, initial_ArH: null, initial_coI: null, initial_coII: null, initial_coIII: null, initial_H2O2: null, initial_NADH: null, initial_NADrad: null, initial_O2: null, initial_per2: null, initial_per3: null, initial_super: null, k1: null, k10: null, k11: null, k12: null, k13b: null, k13f: null, k14: null, k2: null, k3: null, k4: null, k5: null, k6: null, k7: null, k8: null, k9: null, NAD: null, NAD2: null, NADH_init: null, NADHres: null, NADrad_init: null, O2_init: null, O2g: null, per2_init: null, per3_init: null, super_init: null};
    this.metadata.variableOrder = {NADH: null, O2: null, H2O2: null, per3: null, coI: null, ArH: null, coII: null, Ar: null, NADrad: null, super: null, coIII: null, per2: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
