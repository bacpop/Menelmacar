export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell = 1;
    internal.X = 10;
    internal.Y = 2;
    internal.Z = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(6).fill(0);
    state[0] = internal.initial_A;
    state[1] = internal.initial_B;
    state[2] = internal.initial_C;
    state[3] = internal.initial_D;
    state[4] = internal.initial_E;
    state[5] = internal.initial_F;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A_init", "B_init", "C_init", "D_init", "E_init", "F_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "D_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "F_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_A = internal.A_init;
    internal.initial_B = internal.B_init;
    internal.initial_C = internal.C_init;
    internal.initial_D = internal.D_init;
    internal.initial_E = internal.E_init;
    internal.initial_F = internal.F_init;
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
    dstatedt[0] = 0 + 1 * internal.cell * ((10 * internal.X - A) / (1 + internal.X + A + Math.pow((B), (2)))) - 1 * internal.cell * ((2 * A - B) / (1 + A + B));
    dstatedt[1] = 0 + 1 * internal.cell * ((2 * A - B) / (1 + A + B)) - 1 * internal.cell * ((B - C) / (1 + B + C + Math.pow((D), (2)))) - 1 * internal.cell * ((B - E) / (1 + B + E + Math.pow((F), (2))));
    dstatedt[2] = 0 + 1 * internal.cell * ((B - C) / (1 + B + C + Math.pow((D), (2)))) - 1 * internal.cell * ((5 * C - D) / (1 + C + D));
    dstatedt[3] = 0 + 1 * internal.cell * ((5 * C - D) / (1 + C + D)) - 1 * internal.cell * ((10 * D - internal.Y) / (1 + D + internal.Y));
    dstatedt[4] = 0 + 1 * internal.cell * ((B - E) / (1 + B + E + Math.pow((F), (2)))) - 1 * internal.cell * ((5 * E - F) / (1 + E + F));
    dstatedt[5] = 0 + 1 * internal.cell * ((5 * E - F) / (1 + E + F)) - 1 * internal.cell * ((10 * F - internal.Z) / (1 + F + internal.Z));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "A", "B", "C", "D", "E", "F"];
    this.metadata.internalOrder = {A_init: null, B_init: null, C_init: null, cell: null, D_init: null, E_init: null, F_init: null, initial_A: null, initial_B: null, initial_C: null, initial_D: null, initial_E: null, initial_F: null, X: null, Y: null, Z: null};
    this.metadata.variableOrder = {A: null, B: null, C: null, D: null, E: null, F: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
