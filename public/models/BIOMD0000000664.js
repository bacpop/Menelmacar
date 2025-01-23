export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Compartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var g1 = (((t >= 0 && t < 5) ? 0 : (((t >= 5 && t < 10) ? 1 : 0))));
    var g2 = (((t >= 0 && t < 5) ? 1 : 0));
    var g1_0_init = g1;
    var g2_0_init = g2;
    internal.initial_g1_0 = g1_0_init;
    internal.initial_g2_0 = g2_0_init;
    var state = Array(8).fill(0);
    state[0] = internal.initial_FGFR;
    state[1] = internal.initial_MSH;
    state[2] = internal.initial_B_Raf;
    state[3] = internal.initial_MAPK;
    state[4] = internal.initial_C_Raf_inactive;
    state[5] = internal.initial_g2_0;
    state[6] = internal.initial_C_Raf;
    state[7] = internal.initial_g1_0;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a1", "a2", "B_Raf_init", "b1", "b2", "C_Raf_inactive_init", "C_Raf_init", "d1", "d2", "d3", "d4", "d5", "d6", "E", "f13", "f14", "f24", "f35", "f45", "f53", "FGFR_init", "h36_y3", "MAPK_init", "MSH_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a1", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a2", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B_Raf_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b1", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b2", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_Raf_inactive_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_Raf_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d1", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d4", internal, 1.1000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d5", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d6", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f13", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f14", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f24", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f35", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f45", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f53", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FGFR_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h36_y3", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MAPK_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MSH_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_B_Raf = internal.B_Raf_init;
    internal.initial_C_Raf = internal.C_Raf_init;
    internal.initial_C_Raf_inactive = internal.C_Raf_inactive_init;
    internal.initial_FGFR = internal.FGFR_init;
    internal.initial_MAPK = internal.MAPK_init;
    internal.initial_MSH = internal.MSH_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const FGFR = state[0];
    const MSH = state[1];
    const B_Raf = state[2];
    const MAPK = state[3];
    const C_Raf_inactive = state[4];
    const C_Raf = state[6];
    dstatedt[7] = 0 + 0;
    dstatedt[5] = 0 + 0;
    dstatedt[2] = 0 + 1 * internal.Compartment * (internal.f14 * FGFR) + 1 * internal.Compartment * (internal.f24 * MSH) - 1 * internal.Compartment * internal.d4 * B_Raf;
    dstatedt[6] = 0 + 1 * internal.Compartment * (internal.f13 * (internal.E - C_Raf - C_Raf_inactive) * FGFR) + 1 * internal.Compartment * (internal.f53 * (internal.E - C_Raf - C_Raf_inactive) * MAPK) - 1 * internal.Compartment * internal.d3 * C_Raf - 1 * internal.Compartment * (internal.h36_y3 * MSH * C_Raf);
    dstatedt[4] = 0 + 1 * internal.Compartment * (internal.h36_y3 * MSH * C_Raf) - 1 * internal.Compartment * internal.d6 * C_Raf_inactive;
    dstatedt[3] = 0 + 1 * internal.Compartment * (internal.f35 * C_Raf) + 1 * internal.Compartment * (internal.f45 * B_Raf) - 1 * internal.Compartment * internal.d5 * MAPK;
    var g1 = (((t >= 0 && t < 5) ? 0 : (((t >= 5 && t < 10) ? 1 : 0))));
    var g2 = (((t >= 0 && t < 5) ? 1 : 0));
    dstatedt[0] = 0 + 1 * internal.Compartment * (internal.a1 * (g1 / (internal.b1 + g1))) - 1 * internal.Compartment * internal.d1 * FGFR;
    dstatedt[1] = 0 + 1 * internal.Compartment * (internal.a2 * (g2 / (internal.b2 + g2))) - 1 * internal.Compartment * internal.d2 * MSH;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "FGFR", "MSH", "B_Raf", "MAPK", "C_Raf_inactive", "g2_0", "C_Raf", "g1_0"];
    this.metadata.internalOrder = {a1: null, a2: null, B_Raf_init: null, b1: null, b2: null, C_Raf_inactive_init: null, C_Raf_init: null, Compartment: null, d1: null, d2: null, d3: null, d4: null, d5: null, d6: null, E: null, f13: null, f14: null, f24: null, f35: null, f45: null, f53: null, FGFR_init: null, h36_y3: null, initial_B_Raf: null, initial_C_Raf: null, initial_C_Raf_inactive: null, initial_FGFR: null, initial_g1_0: null, initial_g2_0: null, initial_MAPK: null, initial_MSH: null, MAPK_init: null, MSH_init: null};
    this.metadata.variableOrder = {FGFR: null, MSH: null, B_Raf: null, MAPK: null, C_Raf_inactive: null, g2_0: null, C_Raf: null, g1_0: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
