export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.USP7tot = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(10).fill(0);
    state[0] = internal.initial_Bmi1;
    state[1] = internal.initial_Bmi1ubd;
    state[2] = internal.initial_R1B;
    state[3] = internal.initial_R1Bubd;
    state[4] = internal.initial_Z;
    state[5] = internal.initial_Zub;
    state[6] = internal.initial_R1Buba;
    state[7] = internal.initial_R1Bub;
    state[8] = internal.initial_H2A;
    state[9] = internal.initial_H2Auba;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Bmi1_init", "Bmi1ubd_init", "H2A_init", "H2Auba_init", "k1", "k2", "k3", "kc", "Km", "kxk", "R1B_init", "R1Bub_init", "R1Buba_init", "R1Bubd_init", "v", "Z_init", "Zub_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Bmi1_init", internal, 1.1000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Bmi1ubd_init", internal, 1.0800000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H2A_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H2Auba_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 3.0000000000000001e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kc", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km", internal, 0.0025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R1B_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R1Bub_init", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R1Buba_init", internal, 0.44, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R1Bubd_init", internal, 0.12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v", internal, 7.5000000000000002e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Z_init", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Zub_init", internal, 0.12, -Infinity, Infinity, false);
    internal.initial_Bmi1 = internal.Bmi1_init;
    internal.initial_Bmi1ubd = internal.Bmi1ubd_init;
    internal.initial_H2A = internal.H2A_init;
    internal.initial_H2Auba = internal.H2Auba_init;
    internal.initial_R1B = internal.R1B_init;
    internal.initial_R1Bub = internal.R1Bub_init;
    internal.initial_R1Buba = internal.R1Buba_init;
    internal.initial_R1Bubd = internal.R1Bubd_init;
    internal.initial_Z = internal.Z_init;
    internal.initial_Zub = internal.Zub_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Bmi1 = state[0];
    const Bmi1ubd = state[1];
    const R1B = state[2];
    const R1Bubd = state[3];
    const Z = state[4];
    const Zub = state[5];
    const R1Buba = state[6];
    const R1Bub = state[7];
    const H2A = state[8];
    const H2Auba = state[9];
    dstatedt[0] = 0 - 1 * internal.compartment * internal.k1 * Bmi1 + 1 * internal.compartment * internal.k1 * Bmi1ubd - 1 * internal.compartment * (internal.k1 * Bmi1 * R1B - internal.k2 * Z) + 1 * internal.compartment * (internal.k1 * Zub - internal.k2 * R1Buba * Bmi1) + 1 * internal.compartment * (internal.v);
    dstatedt[1] = 0 + 1 * internal.compartment * internal.k1 * Bmi1 - 1 * internal.compartment * internal.k1 * Bmi1ubd - 1 * internal.compartment * internal.k1 * Bmi1ubd;
    dstatedt[8] = 0 - 1 * internal.compartment * (H2A * (internal.k1 * R1Bub + internal.k2 * Zub + internal.k3 * R1Buba)) + 1 * internal.compartment * internal.k1 * H2Auba;
    dstatedt[9] = 0 + 1 * internal.compartment * (H2A * (internal.k1 * R1Bub + internal.k2 * Zub + internal.k3 * R1Buba)) - 1 * internal.compartment * internal.k1 * H2Auba;
    dstatedt[2] = 0 - 1 * internal.compartment * internal.k1 * R1B + 1 * internal.compartment * (internal.kxk * internal.USP7tot * R1Bubd) - 1 * internal.compartment * (internal.k1 * Bmi1 * R1B - internal.k2 * Z) - 1 * internal.compartment * (R1B * (internal.k1 * R1B + internal.k2 * R1Bub)) + 1 * internal.compartment * (internal.kxk * internal.USP7tot * R1Bub) + 1 * internal.compartment * (internal.kxk * internal.USP7tot * R1Buba) + 1 * internal.compartment * (internal.v);
    dstatedt[7] = 0 + 1 * internal.compartment * (R1B * (internal.k1 * R1B + internal.k2 * R1Bub)) - 1 * internal.compartment * (internal.kxk * internal.USP7tot * R1Bub);
    dstatedt[6] = 0 + 1 * internal.compartment * (internal.k1 * Zub - internal.k2 * R1Buba * Bmi1) - 1 * internal.compartment * (internal.kxk * internal.USP7tot * R1Buba);
    dstatedt[3] = 0 + 1 * internal.compartment * internal.k1 * R1B - 1 * internal.compartment * (internal.kxk * internal.USP7tot * R1Bubd) - 1 * internal.compartment * internal.k1 * R1Bubd;
    dstatedt[4] = 0 + 1 * internal.compartment * (internal.k1 * Bmi1 * R1B - internal.k2 * Z) - 1 * internal.compartment * (Z * (internal.k1 * Z + internal.k2 * Zub)) + 1 * internal.compartment * (internal.kc * internal.USP7tot * Zub / (internal.Km + Zub));
    dstatedt[5] = 0 + 1 * internal.compartment * (Z * (internal.k1 * Z + internal.k2 * Zub)) - 1 * internal.compartment * (internal.kc * internal.USP7tot * Zub / (internal.Km + Zub)) - 1 * internal.compartment * (internal.k1 * Zub - internal.k2 * R1Buba * Bmi1);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Bmi1", "Bmi1ubd", "R1B", "R1Bubd", "Z", "Zub", "R1Buba", "R1Bub", "H2A", "H2Auba"];
    this.metadata.internalOrder = {Bmi1_init: null, Bmi1ubd_init: null, compartment: null, H2A_init: null, H2Auba_init: null, initial_Bmi1: null, initial_Bmi1ubd: null, initial_H2A: null, initial_H2Auba: null, initial_R1B: null, initial_R1Bub: null, initial_R1Buba: null, initial_R1Bubd: null, initial_Z: null, initial_Zub: null, k1: null, k2: null, k3: null, kc: null, Km: null, kxk: null, R1B_init: null, R1Bub_init: null, R1Buba_init: null, R1Bubd_init: null, USP7tot: null, v: null, Z_init: null, Zub_init: null};
    this.metadata.variableOrder = {Bmi1: null, Bmi1ubd: null, R1B: null, R1Bubd: null, Z: null, Zub: null, R1Buba: null, R1Bub: null, H2A: null, H2Auba: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
