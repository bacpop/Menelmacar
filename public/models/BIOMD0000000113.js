export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cytosol = 1;
    internal.store = 1;
    internal.vMK = 20;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_Z;
    state[1] = internal.initial_Y;
    state[2] = internal.initial_Wt;
    state[3] = internal.initial_W_star;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["K_A", "K1", "K2", "Ka", "kf", "Kp", "Kr", "kxk", "m", "n", "p", "q", "v0", "v1_beta", "Vm2", "Vm3", "vp", "W_star_init", "Wt_init", "Y_init", "Z_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "K_A", internal, 0.90000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ka", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kp", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kr", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "q", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v0", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v1_beta", internal, 2.7000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vm2", internal, 65, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vm3", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vp", internal, 2.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "W_star_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Wt_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Y_init", internal, 1.6000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Z_init", internal, 0.14999999999999999, -Infinity, Infinity, false);
    internal.initial_W_star = internal.W_star_init;
    internal.initial_Wt = internal.Wt_init;
    internal.initial_Y = internal.Y_init;
    internal.initial_Z = internal.Z_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Z = state[0];
    const Y = state[1];
    const Wt = state[2];
    const W_star = state[3];
    dstatedt[2] = 0;
    dstatedt[1] = 0 + 1 * internal.cytosol * (internal.Vm2 * Math.pow((Z), (internal.n)) / (Math.pow((internal.Kp), (internal.n)) + Math.pow((Z), (internal.n)))) - 1 * internal.store * (internal.Vm3 * Math.pow((Y), (internal.m)) * Math.pow((Z), (internal.p)) / ((Math.pow((internal.Kr), (internal.m)) + Math.pow((Y), (internal.m))) * (Math.pow((internal.K_A), (internal.p)) + Math.pow((Z), (internal.p))))) - 1 * internal.store * internal.kf * Y;
    dstatedt[0] = 0 + 1 * internal.cytosol * internal.v0 + 1 * internal.cytosol * internal.v1_beta - 1 * internal.cytosol * (internal.Vm2 * Math.pow((Z), (internal.n)) / (Math.pow((internal.Kp), (internal.n)) + Math.pow((Z), (internal.n)))) + 1 * internal.store * (internal.Vm3 * Math.pow((Y), (internal.m)) * Math.pow((Z), (internal.p)) / ((Math.pow((internal.Kr), (internal.m)) + Math.pow((Y), (internal.m))) * (Math.pow((internal.K_A), (internal.p)) + Math.pow((Z), (internal.p))))) + 1 * internal.store * internal.kf * Y - 1 * internal.cytosol * internal.kxk * Z;
    var vk = internal.vMK * Math.pow((Z), (internal.q)) / (Math.pow((internal.Ka), (internal.q)) + Math.pow((Z), (internal.q)));
    dstatedt[3] = 0 + 1 * internal.cytosol * (internal.vp / Wt) * (vk / internal.vp * ((1 - W_star) / (internal.K1 + 1 - W_star)) - W_star / (internal.K2 + W_star));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Z", "Y", "Wt", "W_star"];
    this.metadata.internalOrder = {cytosol: null, initial_W_star: null, initial_Wt: null, initial_Y: null, initial_Z: null, K_A: null, K1: null, K2: null, Ka: null, kf: null, Kp: null, Kr: null, kxk: null, m: null, n: null, p: null, q: null, store: null, v0: null, v1_beta: null, Vm2: null, Vm3: null, vMK: null, vp: null, W_star_init: null, Wt_init: null, Y_init: null, Z_init: null};
    this.metadata.variableOrder = {Z: null, Y: null, Wt: null, W_star: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
