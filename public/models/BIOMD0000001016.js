export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Fluid_phase = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(8).fill(0);
    state[0] = internal.initial_C3;
    state[1] = internal.initial_C3b;
    state[2] = internal.initial_C3bB_closed;
    state[3] = internal.initial_C3bB_open;
    state[4] = internal.initial_C3bBb;
    state[5] = internal.initial_Bb;
    state[6] = internal.initial_Factor_B;
    state[7] = internal.initial_Factor_D;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Bb_init", "C3_init", "C3b_init", "C3bB_closed_init", "C3bB_open_init", "C3bBb_init", "d1", "d2", "Factor_B_init", "Factor_D_init", "k1", "k10", "k2", "k3", "k4", "k5", "k6", "k7", "k8", "k9", "ks1", "ks2"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Bb_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C3_init", internal, 6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C3b_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C3bB_closed_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C3bB_open_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C3bBb_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d1", internal, 0.00039199999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d2", internal, 0.00033300000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Factor_B_init", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Factor_D_init", internal, 0.080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.0001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 0.10680000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 107, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 5.8600000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0.81599999999999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 6.9000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 0.46000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 130, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 0.71999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 0.33000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ks1", internal, 0.00316, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ks2", internal, 0.00078899999999999999, -Infinity, Infinity, false);
    internal.initial_Bb = internal.Bb_init;
    internal.initial_C3 = internal.C3_init;
    internal.initial_C3b = internal.C3b_init;
    internal.initial_C3bB_closed = internal.C3bB_closed_init;
    internal.initial_C3bB_open = internal.C3bB_open_init;
    internal.initial_C3bBb = internal.C3bBb_init;
    internal.initial_Factor_B = internal.Factor_B_init;
    internal.initial_Factor_D = internal.Factor_D_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const C3 = state[0];
    const C3b = state[1];
    const C3bB_closed = state[2];
    const C3bB_open = state[3];
    const C3bBb = state[4];
    const Factor_B = state[6];
    const Factor_D = state[7];
    dstatedt[7] = 0;
    dstatedt[5] = 0 + 1 * internal.Fluid_phase * internal.k6 * C3bBb;
    dstatedt[0] = 0 - 1 * internal.Fluid_phase * (internal.k1 * C3 + internal.k2 * C3bBb * C3 / (internal.k3 + C3)) + 1 * internal.Fluid_phase * (internal.ks1) - 1 * internal.Fluid_phase * internal.d1 * C3;
    dstatedt[1] = 0 + 1 * internal.Fluid_phase * (internal.k1 * C3 + internal.k2 * C3bBb * C3 / (internal.k3 + C3)) - 1 * internal.Fluid_phase * (internal.k4 * C3b * Factor_B - internal.k5 * C3bB_closed) + 1 * internal.Fluid_phase * internal.k6 * C3bBb;
    dstatedt[2] = 0 + 1 * internal.Fluid_phase * (internal.k4 * C3b * Factor_B - internal.k5 * C3bB_closed) - 1 * internal.Fluid_phase * (internal.k9 * C3bB_closed - internal.k10 * C3bB_open);
    dstatedt[3] = 0 + 1 * internal.Fluid_phase * (internal.k9 * C3bB_closed - internal.k10 * C3bB_open) - 1 * internal.Fluid_phase * (internal.k7 * Factor_D * C3bB_open / (internal.k8 + C3bB_open));
    dstatedt[4] = 0 + 1 * internal.Fluid_phase * (internal.k7 * Factor_D * C3bB_open / (internal.k8 + C3bB_open)) - 1 * internal.Fluid_phase * internal.k6 * C3bBb;
    dstatedt[6] = 0 - 1 * internal.Fluid_phase * (internal.k4 * C3b * Factor_B - internal.k5 * C3bB_closed) + 1 * internal.Fluid_phase * (internal.ks2) - 1 * internal.Fluid_phase * internal.d2 * Factor_B;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "C3", "C3b", "C3bB_closed", "C3bB_open", "C3bBb", "Bb", "Factor_B", "Factor_D"];
    this.metadata.internalOrder = {Bb_init: null, C3_init: null, C3b_init: null, C3bB_closed_init: null, C3bB_open_init: null, C3bBb_init: null, d1: null, d2: null, Factor_B_init: null, Factor_D_init: null, Fluid_phase: null, initial_Bb: null, initial_C3: null, initial_C3b: null, initial_C3bB_closed: null, initial_C3bB_open: null, initial_C3bBb: null, initial_Factor_B: null, initial_Factor_D: null, k1: null, k10: null, k2: null, k3: null, k4: null, k5: null, k6: null, k7: null, k8: null, k9: null, ks1: null, ks2: null};
    this.metadata.variableOrder = {C3: null, C3b: null, C3bB_closed: null, C3bB_open: null, C3bBb: null, Bb: null, Factor_B: null, Factor_D: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
