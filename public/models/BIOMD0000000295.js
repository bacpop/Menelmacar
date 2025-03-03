export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cytoplasm = 1;
    internal.nucleus = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(5).fill(0);
    state[0] = internal.initial_FC;
    state[1] = internal.initial_FCp;
    state[2] = internal.initial_FN;
    state[3] = internal.initial_FNp;
    state[4] = internal.initial_MF;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["amp", "dawn", "dusk", "FC_init", "FCp_init", "FN_init", "FNp_init", "k1n", "k1np", "k2n", "k2np", "ki", "km", "ks", "ksp", "MF_init", "n", "vd", "vdp", "vm", "vs"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "amp", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dawn", internal, 6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dusk", internal, 18, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FC_init", internal, 2.4624633420477098, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FCp_init", internal, 2.7123114824279, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FN_init", internal, 1.84400040515923, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "FNp_init", internal, 2.7422495150079098, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1n", internal, 0.222636680929471, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1np", internal, 0.27230646400646402, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2n", internal, 0.33148450320968598, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2np", internal, 0.29542074952581299, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ki", internal, 5.0454334693934602, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "km", internal, 0.084600409648989405, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ks", internal, 0.31384647699824397, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ksp", internal, 0.29484016914996503, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "MF_init", internal, 0.72557930853790897, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 6.3958000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vd", internal, 0.16111148736227501, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vdp", internal, 0.13975031397927201, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vm", internal, 0.88537632673954403, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vs", internal, 1.2236333742523999, -Infinity, Infinity, false);
    internal.initial_FC = internal.FC_init;
    internal.initial_FCp = internal.FCp_init;
    internal.initial_FN = internal.FN_init;
    internal.initial_FNp = internal.FNp_init;
    internal.initial_MF = internal.MF_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const FC = state[0];
    const FCp = state[1];
    const FN = state[2];
    const FNp = state[3];
    const MF = state[4];
    dstatedt[0] = 0 + 1 * internal.ks * MF - 1 * internal.vd * FC - 1 * internal.k1n * FC - internal.k2n * FN;
    dstatedt[1] = 0 + 1 * internal.ksp * MF - 1 * internal.vdp * FCp - 1 * internal.k1np * FCp - internal.k2np * FNp;
    dstatedt[2] = 0 + 1 * internal.k1n * FC - internal.k2n * FN;
    dstatedt[3] = 0 + 1 * internal.k1np * FCp - internal.k2np * FNp;
    dstatedt[4] = 0 + 1 * (internal.vs + internal.amp * ((1 + Math.tanh(2 * (t - 24 * Math.floor(t / 24) - internal.dawn))) * (1 - Math.tanh(2 * (t - 24 * Math.floor(t / 24) - internal.dusk))) / 4)) * Math.pow((internal.ki), (internal.n)) / (Math.pow((internal.ki), (internal.n)) + Math.pow((FN + FNp), (internal.n))) - 1 * internal.vm * MF / (internal.km + MF);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "FC", "FCp", "FN", "FNp", "MF"];
    this.metadata.internalOrder = {amp: null, cytoplasm: null, dawn: null, dusk: null, FC_init: null, FCp_init: null, FN_init: null, FNp_init: null, initial_FC: null, initial_FCp: null, initial_FN: null, initial_FNp: null, initial_MF: null, k1n: null, k1np: null, k2n: null, k2np: null, ki: null, km: null, ks: null, ksp: null, MF_init: null, n: null, nucleus: null, vd: null, vdp: null, vm: null, vs: null};
    this.metadata.variableOrder = {FC: null, FCp: null, FN: null, FNp: null, MF: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
