export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.k1 = 3.0000000000000001e-06;
    internal.k10 = 1.8;
    internal.k11 = 0.10000000000000001;
    internal.k12 = 0.080000000000000002;
    internal.k13b = 0.0060000000000000001;
    internal.k13f = 0.0060000000000000001;
    internal.k14 = 0.69999999999999996;
    internal.k2 = 18;
    internal.k3 = 0.14999999999999999;
    internal.k4 = 0.0051999999999999998;
    internal.k5 = 20;
    internal.k6 = 17;
    internal.k7 = 20;
    internal.k8 = 40;
    internal.k9 = 60;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(16).fill(0);
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
    state[12] = internal.initial_NAD2;
    state[13] = internal.initial_NAD;
    state[14] = internal.initial_O2g;
    state[15] = internal.initial_NADHres;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Ar_init", "ArH_init", "coI_init", "coII_init", "coIII_init", "H2O2_init", "NAD_init", "NAD2_init", "NADH_init", "NADHres_init", "NADrad_init", "O2_init", "O2g_init", "per2_init", "per3_init", "super_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Ar_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ArH_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "coI_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "coII_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "coIII_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H2O2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NAD_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NAD2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NADH_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NADHres_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NADrad_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "O2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "O2g_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "per2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "per3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "super_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_Ar = internal.Ar_init;
    internal.initial_ArH = internal.ArH_init;
    internal.initial_coI = internal.coI_init;
    internal.initial_coII = internal.coII_init;
    internal.initial_coIII = internal.coIII_init;
    internal.initial_H2O2 = internal.H2O2_init;
    internal.initial_NAD = internal.NAD_init;
    internal.initial_NAD2 = internal.NAD2_init;
    internal.initial_NADH = internal.NADH_init;
    internal.initial_NADHres = internal.NADHres_init;
    internal.initial_NADrad = internal.NADrad_init;
    internal.initial_O2 = internal.O2_init;
    internal.initial_O2g = internal.O2g_init;
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
    const O2g = state[14];
    dstatedt[13] = 0;
    dstatedt[12] = 0;
    dstatedt[15] = 0;
    dstatedt[14] = 0;
    dstatedt[7] = 0 + 1 * internal.compartment * internal.k3 * coI * ArH + 1 * internal.compartment * internal.k4 * coII * ArH - 1 * internal.compartment * internal.k14 * Ar * NADH;
    dstatedt[5] = 0 - 1 * internal.compartment * internal.k3 * coI * ArH - 1 * internal.compartment * internal.k4 * coII * ArH + 1 * internal.compartment * internal.k14 * Ar * NADH;
    dstatedt[4] = 0 + 1 * internal.compartment * internal.k2 * H2O2 * per3 - 1 * internal.compartment * internal.k3 * coI * ArH + 1 * internal.compartment * internal.k8 * coIII * NADrad;
    dstatedt[6] = 0 + 1 * internal.compartment * internal.k3 * coI * ArH - 1 * internal.compartment * internal.k4 * coII * ArH;
    dstatedt[10] = 0 + 1 * internal.compartment * internal.k6 * super * per3 - 1 * internal.compartment * internal.k8 * coIII * NADrad + 1 * internal.compartment * internal.k11 * per2 * O2;
    dstatedt[2] = 0 + 1 * internal.compartment * internal.k1 * NADH * O2 - 1 * internal.compartment * internal.k2 * H2O2 * per3 + 1 * internal.compartment * internal.k7 * super * super;
    dstatedt[0] = 0 - 1 * internal.compartment * internal.k1 * NADH * O2 + 1 * internal.compartment * internal.k12 - 1 * internal.compartment * internal.k14 * Ar * NADH;
    dstatedt[8] = 0 - 1 * internal.compartment * internal.k5 * NADrad * O2 - 1 * internal.compartment * internal.k8 * coIII * NADrad - 2 * internal.compartment * internal.k9 * NADrad * NADrad - 1 * internal.compartment * internal.k10 * per3 * NADrad + 1 * internal.compartment * internal.k14 * Ar * NADH;
    dstatedt[1] = 0 - 1 * internal.compartment * internal.k1 * NADH * O2 - 1 * internal.compartment * internal.k5 * NADrad * O2 + 1 * internal.compartment * internal.k7 * super * super - 1 * internal.compartment * internal.k11 * per2 * O2 + 1 * internal.compartment * internal.k13f * O2g - 1 * internal.compartment * internal.k13b * O2;
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
    this.metadata.ynames = ["t", "NADH", "O2", "H2O2", "per3", "coI", "ArH", "coII", "Ar", "NADrad", "super", "coIII", "per2", "NAD2", "NAD", "O2g", "NADHres"];
    this.metadata.internalOrder = {Ar_init: null, ArH_init: null, coI_init: null, coII_init: null, coIII_init: null, compartment: null, H2O2_init: null, initial_Ar: null, initial_ArH: null, initial_coI: null, initial_coII: null, initial_coIII: null, initial_H2O2: null, initial_NAD: null, initial_NAD2: null, initial_NADH: null, initial_NADHres: null, initial_NADrad: null, initial_O2: null, initial_O2g: null, initial_per2: null, initial_per3: null, initial_super: null, k1: null, k10: null, k11: null, k12: null, k13b: null, k13f: null, k14: null, k2: null, k3: null, k4: null, k5: null, k6: null, k7: null, k8: null, k9: null, NAD_init: null, NAD2_init: null, NADH_init: null, NADHres_init: null, NADrad_init: null, O2_init: null, O2g_init: null, per2_init: null, per3_init: null, super_init: null};
    this.metadata.variableOrder = {NADH: null, O2: null, H2O2: null, per3: null, coI: null, ArH: null, coII: null, Ar: null, NADrad: null, super: null, coIII: null, per2: null, NAD2: null, NAD: null, O2g: null, NADHres: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
