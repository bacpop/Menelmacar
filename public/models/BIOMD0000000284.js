export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(9).fill(0);
    state[0] = internal.initial_A;
    state[1] = internal.initial_B;
    state[2] = internal.initial_C;
    state[3] = internal.initial_D;
    state[4] = internal.initial_E;
    state[5] = internal.initial_F;
    state[6] = internal.initial_X;
    state[7] = internal.initial_Y;
    state[8] = internal.initial_Z;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A_init", "B_init", "C_init", "D_init", "E_init", "F_init", "X_init", "Y_init", "Z_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "D_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "F_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Y_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Z_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_A = internal.A_init;
    internal.initial_B = internal.B_init;
    internal.initial_C = internal.C_init;
    internal.initial_D = internal.D_init;
    internal.initial_E = internal.E_init;
    internal.initial_F = internal.F_init;
    internal.initial_X = internal.X_init;
    internal.initial_Y = internal.Y_init;
    internal.initial_Z = internal.Z_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const A = state[0];
    const B = state[1];
    const C = state[2];
    const D = state[3];
    const E = state[4];
    const F = state[5];
    const X = state[6];
    const Y = state[7];
    const Z = state[8];
    dstatedt[6] = 0;
    dstatedt[7] = 0;
    dstatedt[8] = 0;
    dstatedt[0] = 0 + 1 * internal.cell * ((10 * X - A) / (1 + X + A + Math.pow((B), (2)))) - 1 * internal.cell * ((2 * A - B) / (1 + A + B));
    dstatedt[1] = 0 + 1 * internal.cell * ((2 * A - B) / (1 + A + B)) - 1 * internal.cell * ((B - C) / (1 + B + C + Math.pow((D), (2)))) - 1 * internal.cell * ((B - E) / (1 + B + E + Math.pow((F), (2))));
    dstatedt[2] = 0 + 1 * internal.cell * ((B - C) / (1 + B + C + Math.pow((D), (2)))) - 1 * internal.cell * ((5 * C - D) / (1 + C + D));
    dstatedt[3] = 0 + 1 * internal.cell * ((5 * C - D) / (1 + C + D)) - 1 * internal.cell * ((10 * D - Y) / (1 + D + Y));
    dstatedt[4] = 0 + 1 * internal.cell * ((B - E) / (1 + B + E + Math.pow((F), (2)))) - 1 * internal.cell * ((5 * E - F) / (1 + E + F));
    dstatedt[5] = 0 + 1 * internal.cell * ((5 * E - F) / (1 + E + F)) - 1 * internal.cell * ((10 * F - Z) / (1 + F + Z));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "A", "B", "C", "D", "E", "F", "X", "Y", "Z"];
    this.metadata.internalOrder = {A_init: null, B_init: null, C_init: null, cell: null, D_init: null, E_init: null, F_init: null, initial_A: null, initial_B: null, initial_C: null, initial_D: null, initial_E: null, initial_F: null, initial_X: null, initial_Y: null, initial_Z: null, X_init: null, Y_init: null, Z_init: null};
    this.metadata.variableOrder = {A: null, B: null, C: null, D: null, E: null, F: null, X: null, Y: null, Z: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
