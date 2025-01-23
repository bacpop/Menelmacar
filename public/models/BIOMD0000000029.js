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
    var state = Array(6).fill(0);
    state[0] = internal.initial_M;
    state[1] = internal.initial_MpY;
    state[2] = internal.initial_MpT;
    state[3] = internal.initial_Mpp;
    state[4] = internal.initial_MEK;
    state[5] = internal.initial_MKP3;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["kcat1", "kcat2", "kcat3", "kcat4", "kcat5", "kcat6", "kcat7", "Km1", "Km2", "Km3", "Km4", "Km5", "Km6", "Km7", "Km8", "M_init", "MEK_init", "MKP3_init", "Mpp_init", "MpT_init", "MpY_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "kcat1", internal, 1.0800000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcat2", internal, 0.0070000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcat3", internal, 0.0080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcat4", internal, 0.45000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcat5", internal, 0.084000000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcat6", internal, 0.059999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcat7", internal, 0.108, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km1", internal, 410, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km2", internal, 40, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km3", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km4", internal, 300, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km5", internal, 22, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km6", internal, 18, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km7", internal, 34, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km8", internal, 40, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MEK_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MKP3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Mpp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MpT_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MpY_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_M = internal.M_init;
    internal.initial_MEK = internal.MEK_init;
    internal.initial_MKP3 = internal.MKP3_init;
    internal.initial_Mpp = internal.Mpp_init;
    internal.initial_MpT = internal.MpT_init;
    internal.initial_MpY = internal.MpY_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const M = state[0];
    const MpY = state[1];
    const MpT = state[2];
    const Mpp = state[3];
    const MEK = state[4];
    const MKP3 = state[5];
    dstatedt[4] = 0;
    dstatedt[5] = 0;
    dstatedt[0] = 0 - 1 * internal.cell * (internal.kcat1 * MEK * M / internal.Km1 / (1 + M * ((internal.Km1 + internal.Km3) / (internal.Km1 * internal.Km3)) + MpY / internal.Km2 + MpT / internal.Km4)) - 1 * internal.cell * (internal.kcat3 * MEK * M / internal.Km3 / (1 + M * ((internal.Km1 + internal.Km3) / (internal.Km1 * internal.Km3)) + MpY / internal.Km2 + MpT / internal.Km4)) + 1 * internal.cell * (internal.kcat6 * MKP3 * MpT / internal.Km6 / (1 + Mpp / internal.Km5 + MpT / internal.Km6 + MpY / internal.Km7 + M / internal.Km8)) + 1 * internal.cell * (internal.kcat7 * MKP3 * MpY / internal.Km7 / (1 + Mpp / internal.Km5 + MpT / internal.Km6 + MpY / internal.Km7 + M / internal.Km8));
    dstatedt[3] = 0 + 1 * internal.cell * (internal.kcat2 * MEK * MpY / internal.Km2 / (1 + M * ((internal.Km1 + internal.Km3) / (internal.Km1 * internal.Km3)) + MpY / internal.Km2 + MpT / internal.Km4)) + 1 * internal.cell * (internal.kcat4 * MEK * MpT / internal.Km4 / (1 + M * ((internal.Km1 + internal.Km3) / (internal.Km1 * internal.Km3)) + MpY / internal.Km2 + MpT / internal.Km4)) - 1 * internal.cell * (internal.kcat5 * MKP3 * Mpp / internal.Km5 / (1 + Mpp / internal.Km5 + MpT / internal.Km6 + MpY / internal.Km7 + M / internal.Km8));
    dstatedt[2] = 0 + 1 * internal.cell * (internal.kcat3 * MEK * M / internal.Km3 / (1 + M * ((internal.Km1 + internal.Km3) / (internal.Km1 * internal.Km3)) + MpY / internal.Km2 + MpT / internal.Km4)) - 1 * internal.cell * (internal.kcat4 * MEK * MpT / internal.Km4 / (1 + M * ((internal.Km1 + internal.Km3) / (internal.Km1 * internal.Km3)) + MpY / internal.Km2 + MpT / internal.Km4)) + 1 * internal.cell * (internal.kcat5 * MKP3 * Mpp / internal.Km5 / (1 + Mpp / internal.Km5 + MpT / internal.Km6 + MpY / internal.Km7 + M / internal.Km8)) - 1 * internal.cell * (internal.kcat6 * MKP3 * MpT / internal.Km6 / (1 + Mpp / internal.Km5 + MpT / internal.Km6 + MpY / internal.Km7 + M / internal.Km8));
    dstatedt[1] = 0 + 1 * internal.cell * (internal.kcat1 * MEK * M / internal.Km1 / (1 + M * ((internal.Km1 + internal.Km3) / (internal.Km1 * internal.Km3)) + MpY / internal.Km2 + MpT / internal.Km4)) - 1 * internal.cell * (internal.kcat2 * MEK * MpY / internal.Km2 / (1 + M * ((internal.Km1 + internal.Km3) / (internal.Km1 * internal.Km3)) + MpY / internal.Km2 + MpT / internal.Km4)) - 1 * internal.cell * (internal.kcat7 * MKP3 * MpY / internal.Km7 / (1 + Mpp / internal.Km5 + MpT / internal.Km6 + MpY / internal.Km7 + M / internal.Km8));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "M", "MpY", "MpT", "Mpp", "MEK", "MKP3"];
    this.metadata.internalOrder = {cell: null, initial_M: null, initial_MEK: null, initial_MKP3: null, initial_Mpp: null, initial_MpT: null, initial_MpY: null, kcat1: null, kcat2: null, kcat3: null, kcat4: null, kcat5: null, kcat6: null, kcat7: null, Km1: null, Km2: null, Km3: null, Km4: null, Km5: null, Km6: null, Km7: null, Km8: null, M_init: null, MEK_init: null, MKP3_init: null, Mpp_init: null, MpT_init: null, MpY_init: null};
    this.metadata.variableOrder = {M: null, MpY: null, MpT: null, Mpp: null, MEK: null, MKP3: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
