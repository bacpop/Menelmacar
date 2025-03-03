export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell = 1;
    internal.initial_h = 0.10000000000000001;
    internal.initial_n = 0.10000000000000001;
    internal.initial_V = - 60;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_c;
    state[1] = internal.initial_n;
    state[2] = internal.initial_h;
    state[3] = internal.initial_V;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "c_init", "Cm", "ff", "ga", "gcal", "gf", "gk", "gsk", "kc", "ks", "lambda", "sa", "sf", "sh", "sm", "sn", "tauh", "taun", "va", "vca", "vf", "vh", "vk", "vm", "vn"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 0.0015, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c_init", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cm", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ff", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ga", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gcal", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gf", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gk", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gsk", internal, 1.7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kc", internal, 0.16, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ks", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sa", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sf", internal, 5.5999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sh", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sm", internal, 12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sn", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tauh", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "taun", internal, 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "va", internal, - 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vca", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vf", internal, - 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vh", internal, - 60, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vk", internal, - 75, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vm", internal, - 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vn", internal, - 5, -Infinity, Infinity, false);
    internal.initial_c = internal.c_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const c = state[0];
    const n = state[1];
    const h = state[2];
    const V = state[3];
    var cinf = Math.pow((c), (2)) / (Math.pow((c), (2)) + Math.pow((internal.ks), (2)));
    var ikdr = internal.gk * n * (V - internal.vk);
    var phia = 1 / (1 + Math.exp((internal.va - V) / internal.sa));
    var phical = 1 / (1 + Math.exp((internal.vm - V) / internal.sm));
    var phif = 1 / (1 + Math.exp((internal.vf - V) / internal.sf));
    var phih = 1 / (1 + Math.exp((V - internal.vh) / internal.sh));
    var phik = 1 / (1 + Math.exp((internal.vn - V) / internal.sn));
    dstatedt[2] = (phih - h) / internal.tauh;
    dstatedt[1] = internal.lambda * (phik - n) / internal.taun;
    var ia = internal.ga * phia * h * (V - internal.vk);
    var ibk = internal.gf * phif * (V - internal.vk);
    var ica = internal.gcal * phical * (V - internal.vca);
    var isk = internal.gsk * cinf * (V - internal.vk);
    dstatedt[0] = 0 + 1 * - internal.ff * (internal.alpha * ica + internal.kc * c) * internal.cell;
    var ik = isk + ibk + ikdr + ia;
    dstatedt[3] = - (ica + ik) / internal.Cm;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "c", "n", "h", "V"];
    this.metadata.internalOrder = {alpha: null, c_init: null, cell: null, Cm: null, ff: null, ga: null, gcal: null, gf: null, gk: null, gsk: null, initial_c: null, initial_h: null, initial_n: null, initial_V: null, kc: null, ks: null, lambda: null, sa: null, sf: null, sh: null, sm: null, sn: null, tauh: null, taun: null, va: null, vca: null, vf: null, vh: null, vk: null, vm: null, vn: null};
    this.metadata.variableOrder = {c: null, n: null, h: null, V: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
