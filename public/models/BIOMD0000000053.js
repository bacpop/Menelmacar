export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.k1a = 0.089999999999999997;
    internal.k1b = 0.35999999999999999;
    internal.k2a = 0.033000000000000002;
    internal.k2b = 0.0011999999999999999;
    internal.k3 = 7.92e-07;
    internal.k4 = 8.6000000000000003e-05;
    internal.k5 = 0.019;
    internal.k5b = 0.0016999999999999999;
    internal.ox = 1;
    internal.p1 = 0.115;
    internal.p2 = 0.75;
    internal.p3 = 1;
    internal.p4 = 1;
    internal.p5 = 1;
    internal.p6 = 2.7000000000000002;
    internal.p7 = 60;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(6).fill(0);
    state[0] = internal.initial_Glucose;
    state[1] = internal.initial_Lysine;
    state[2] = internal.initial_Schiff;
    state[3] = internal.initial_Amadori;
    state[4] = internal.initial_Glyoxal;
    state[5] = internal.initial_CML;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Amadori_init", "CML_init", "Glucose_init", "Glyoxal_init", "Lysine_init", "Schiff_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Amadori_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CML_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Glucose_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Glyoxal_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Lysine_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Schiff_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_Amadori = internal.Amadori_init;
    internal.initial_CML = internal.CML_init;
    internal.initial_Glucose = internal.Glucose_init;
    internal.initial_Glyoxal = internal.Glyoxal_init;
    internal.initial_Lysine = internal.Lysine_init;
    internal.initial_Schiff = internal.Schiff_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Glucose = state[0];
    const Lysine = state[1];
    const Schiff = state[2];
    const Amadori = state[3];
    const Glyoxal = state[4];
    dstatedt[3] = 0 + 1 * internal.compartment * internal.p2 * internal.k2a * Schiff - 1 * internal.compartment * internal.p2 * internal.k2b * Amadori - 1 * internal.compartment * internal.ox * internal.p4 * internal.k4 * Amadori;
    dstatedt[5] = 0 + 1 * internal.compartment * internal.ox * internal.p4 * internal.k4 * Amadori + 1 * internal.compartment * internal.ox * internal.p5 * internal.k5 * Glyoxal * Lysine + 1 * internal.compartment * internal.ox * internal.p6 * internal.k3 * Math.pow((Schiff / 0.25), (0.35999999999999999));
    dstatedt[0] = 0 - 1 * internal.compartment * internal.p1 * internal.k1a * Glucose * Lysine + 1 * internal.compartment * internal.k1b * Schiff - 1 * internal.compartment * internal.ox * internal.p3 * internal.k3 * Math.pow((Glucose / 0.25), (0.35999999999999999));
    dstatedt[4] = 0 + 1 * internal.compartment * internal.ox * internal.p3 * internal.k3 * Math.pow((Glucose / 0.25), (0.35999999999999999)) - 1 * internal.compartment * internal.ox * internal.p5 * internal.k5 * Glyoxal * Lysine - 1 * internal.compartment * internal.k5b * Glyoxal + 1 * internal.compartment * 0.0050000000000000001 * internal.ox * internal.p7 * internal.k3 * Math.pow((Schiff / 0.25), (0.35999999999999999));
    dstatedt[1] = 0 - 1 * internal.compartment * internal.p1 * internal.k1a * Glucose * Lysine + 1 * internal.compartment * internal.k1b * Schiff - 1 * internal.compartment * internal.ox * internal.p5 * internal.k5 * Glyoxal * Lysine + 1 * internal.compartment * 0.050000000000000003 * internal.ox * internal.p7 * internal.k3 * Math.pow((Schiff / 0.25), (0.35999999999999999));
    dstatedt[2] = 0 + 1 * internal.compartment * internal.p1 * internal.k1a * Glucose * Lysine - 1 * internal.compartment * internal.k1b * Schiff - 1 * internal.compartment * internal.p2 * internal.k2a * Schiff + 1 * internal.compartment * internal.p2 * internal.k2b * Amadori - 1 * internal.compartment * internal.ox * internal.p6 * internal.k3 * Math.pow((Schiff / 0.25), (0.35999999999999999)) - 1 * internal.compartment * internal.ox * internal.p7 * internal.k3 * Math.pow((Schiff / 0.25), (0.35999999999999999));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Glucose", "Lysine", "Schiff", "Amadori", "Glyoxal", "CML"];
    this.metadata.internalOrder = {Amadori_init: null, CML_init: null, compartment: null, Glucose_init: null, Glyoxal_init: null, initial_Amadori: null, initial_CML: null, initial_Glucose: null, initial_Glyoxal: null, initial_Lysine: null, initial_Schiff: null, k1a: null, k1b: null, k2a: null, k2b: null, k3: null, k4: null, k5: null, k5b: null, Lysine_init: null, ox: null, p1: null, p2: null, p3: null, p4: null, p5: null, p6: null, p7: null, Schiff_init: null};
    this.metadata.variableOrder = {Glucose: null, Lysine: null, Schiff: null, Amadori: null, Glyoxal: null, CML: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
