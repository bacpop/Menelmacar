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
    var c_init = (internal.initial_c0 - (internal.initial_x + internal.initial_x1 + internal.initial_ix + internal.initial_ixp)) / (internal.initial_c0 * internal.cell);
    var totalCyclin_init = internal.initial_x + internal.initial_x1 + internal.initial_y;
    internal.initial_c = c_init;
    internal.initial_totalCyclin = totalCyclin_init;
    var state = Array(15).fill(0);
    state[0] = internal.initial_x1;
    state[1] = internal.initial_x;
    state[2] = internal.initial_c0;
    state[3] = internal.initial_c;
    state[4] = internal.initial_z0;
    state[5] = internal.initial_z1;
    state[6] = internal.initial_z2;
    state[7] = internal.initial_w0;
    state[8] = internal.initial_w1;
    state[9] = internal.initial_u;
    state[10] = internal.initial_ixi;
    state[11] = internal.initial_ix;
    state[12] = internal.initial_ixp;
    state[13] = internal.initial_y;
    state[14] = internal.initial_totalCyclin;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "ai", "aw", "az", "bi", "bw", "bz", "c0_init", "ci", "cw", "cz", "ix_init", "ixi_init", "ixp_init", "k1", "k10", "k11", "k12", "k13", "k14", "k15", "k16", "k16u", "k2", "k2u", "k3", "k4", "k5", "k6", "k7", "k7u", "k8", "k9", "Tau", "u_init", "w0_init", "w1_init", "x_init", "x1_init", "y_init", "z0_init", "z1_init", "z2_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ai", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "aw", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "az", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "bi", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "bw", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "bz", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ci", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cw", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cz", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ix_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ixi_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ixp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 300, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k12", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k13", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k14", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k15", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k16", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k16u", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2u", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7u", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tau", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "w0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "w1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "z0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "z1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "z2_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_c0 = internal.c0_init;
    internal.initial_ix = internal.ix_init;
    internal.initial_ixi = internal.ixi_init;
    internal.initial_ixp = internal.ixp_init;
    internal.initial_u = internal.u_init;
    internal.initial_w0 = internal.w0_init;
    internal.initial_w1 = internal.w1_init;
    internal.initial_x = internal.x_init;
    internal.initial_x1 = internal.x1_init;
    internal.initial_y = internal.y_init;
    internal.initial_z0 = internal.z0_init;
    internal.initial_z1 = internal.z1_init;
    internal.initial_z2 = internal.z2_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const x1 = state[0];
    const x = state[1];
    const c = state[3];
    const z0 = state[4];
    const z1 = state[5];
    const z2 = state[6];
    const w0 = state[7];
    const w1 = state[8];
    const u = state[9];
    const ixi = state[10];
    const ix = state[11];
    const ixp = state[12];
    const y = state[13];
    dstatedt[3] = 0 + 0;
    dstatedt[2] = 0;
    dstatedt[14] = 0 + 0;
    dstatedt[11] = 0 + 1 * (internal.k14 * x * ixi - internal.k15 * ix) * internal.cell - 1 * internal.cell * ((internal.bi + internal.ci * x) * ix - internal.ai * ixp);
    dstatedt[10] = 0 + 1 * internal.k12 * internal.cell - 1 * (internal.k14 * x * ixi - internal.k15 * ix) * internal.cell - 1 * internal.cell * internal.k13 * ixi;
    dstatedt[12] = 0 + 1 * internal.cell * ((internal.bi + internal.ci * x) * ix - internal.ai * ixp) - 1 * internal.cell * internal.k16 * internal.k16u * ixp;
    dstatedt[9] = 0 + 1 * internal.cell * Math.pow((x), (2)) / (Math.pow((internal.a), (2)) + Math.pow((x), (2))) / internal.Tau - 1 * internal.cell * u / internal.Tau;
    dstatedt[7] = 0 + 1 * internal.k10 * internal.cell - 1 * internal.cell * ((internal.bw + internal.cw * x) * w0 - internal.aw * w1) - 1 * internal.cell * w0 * internal.k11;
    dstatedt[8] = 0 + 1 * internal.cell * ((internal.bw + internal.cw * x) * w0 - internal.aw * w1) - 1 * internal.cell * internal.k11 * w1;
    dstatedt[1] = 0 - 1 * internal.cell * ((internal.k6 + w0) * x - (internal.k5 + z2) * x1) - 1 * (internal.k14 * x * ixi - internal.k15 * ix) * internal.cell + 1 * internal.cell * internal.k16 * internal.k16u * ixp - 1 * internal.cell * (internal.k7 + internal.k7u * u) * x;
    dstatedt[0] = 0 + 1 * internal.cell * (internal.k3 * c * y - x1 * internal.k4) + 1 * internal.cell * ((internal.k6 + w0) * x - (internal.k5 + z2) * x1);
    dstatedt[13] = 0 + 1 * internal.k1 * internal.cell - 1 * internal.cell * (internal.k3 * c * y - x1 * internal.k4) - 1 * internal.cell * (internal.k2 + internal.k2u * u) * y;
    dstatedt[4] = 0 - 1 * internal.cell * ((internal.bz + internal.cz * x) * z0 - z1 * internal.az) - 1 * internal.cell * internal.k9 * z0 + 1 * internal.cell * internal.k8;
    dstatedt[5] = 0 + 1 * internal.cell * ((internal.bz + internal.cz * x) * z0 - z1 * internal.az) - 1 * internal.cell * ((internal.bz + internal.cz * x) * z1 - internal.az * z2) - 1 * internal.cell * internal.k9 * z1;
    dstatedt[6] = 0 + 1 * internal.cell * ((internal.bz + internal.cz * x) * z1 - internal.az * z2) - 1 * internal.cell * internal.k9 * z2;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "x1", "x", "c0", "c", "z0", "z1", "z2", "w0", "w1", "u", "ixi", "ix", "ixp", "y", "totalCyclin"];
    this.metadata.internalOrder = {a: null, ai: null, aw: null, az: null, bi: null, bw: null, bz: null, c0_init: null, cell: null, ci: null, cw: null, cz: null, initial_c: null, initial_c0: null, initial_ix: null, initial_ixi: null, initial_ixp: null, initial_totalCyclin: null, initial_u: null, initial_w0: null, initial_w1: null, initial_x: null, initial_x1: null, initial_y: null, initial_z0: null, initial_z1: null, initial_z2: null, ix_init: null, ixi_init: null, ixp_init: null, k1: null, k10: null, k11: null, k12: null, k13: null, k14: null, k15: null, k16: null, k16u: null, k2: null, k2u: null, k3: null, k4: null, k5: null, k6: null, k7: null, k7u: null, k8: null, k9: null, Tau: null, u_init: null, w0_init: null, w1_init: null, x_init: null, x1_init: null, y_init: null, z0_init: null, z1_init: null, z2_init: null};
    this.metadata.variableOrder = {x1: null, x: null, c0: null, c: null, z0: null, z1: null, z2: null, w0: null, w1: null, u: null, ixi: null, ix: null, ixp: null, y: null, totalCyclin: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
