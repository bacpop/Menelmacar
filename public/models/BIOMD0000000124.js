export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell = 1;
    internal.initial_a = 0.46000000000000002;
    internal.initial_n = 0.01;
    internal.initial_nIR = 0.0080000000000000002;
    internal.initial_rIR = 0.28199999999999997;
    internal.initial_V = - 60;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(7).fill(0);
    state[0] = internal.initial_c;
    state[1] = internal.initial_cer;
    state[2] = internal.initial_V;
    state[3] = internal.initial_n;
    state[4] = internal.initial_a;
    state[5] = internal.initial_nIR;
    state[6] = internal.initial_rIR;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "c_init", "cer_init", "cm", "dact", "dinact", "dip3", "fcyt", "fer", "gca", "gir", "gk", "gkca", "ip3", "kd", "kpmca", "kserca", "pleak", "r", "sa", "sm", "sn", "taua", "taun", "vca", "vcytver", "vir", "vk", "vm", "vn"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 4.5000000000000001e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cer_init", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cm", internal, 5300, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dact", internal, 0.34999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dinact", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dip3", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "fcyt", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "fer", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gca", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gir", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gk", internal, 1400, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gkca", internal, 900, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ip3", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kpmca", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kserca", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pleak", internal, 0.00050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 0.14000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sa", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sm", internal, 12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sn", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "taua", internal, 300000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "taun", internal, 16, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vca", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vcytver", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vir", internal, - 75, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vk", internal, - 75, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vm", internal, - 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vn", internal, - 16, -Infinity, Infinity, false);
    internal.initial_c = internal.c_init;
    internal.initial_cer = internal.cer_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const c = state[0];
    const cer = state[1];
    const V = state[2];
    const n = state[3];
    const a = state[4];
    const nIR = state[5];
    const rIR = state[6];
    var ainf = 1 / (1 + Math.exp((internal.r - c) / internal.sa));
    var alphaIRn = 0.089999999999999997 / (1 + Math.exp(0.11 * (V + 100)));
    var alphaIRr = 30 / (1 + Math.exp(0.040000000000000001 * (V + 230)));
    var betaIRn = 0.00035 * Math.exp(0.070000000000000007 * (V + 25));
    var betaIRr = 0.14999999999999999 / (1 + Math.exp(- 0.050000000000000003 * (V + 120)));
    var gkatp = (t > 30000 ? 530 : 500);
    var iir = internal.gir * nIR * rIR * (V - internal.vir);
    var ik = internal.gk * n * (V - internal.vk);
    var jleak = internal.pleak * (cer - c);
    var jserca = internal.kserca * c;
    var minf = 1 / (1 + Math.exp((internal.vm - V) / internal.sm));
    var ninf = 1 / (1 + Math.exp((internal.vn - V) / internal.sn));
    var oinf = c / (internal.dact + c) * (internal.ip3 / (internal.dip3 + internal.ip3)) * (internal.dinact / (internal.dinact + c));
    var w = Math.pow((c), (5)) / (Math.pow((c), (5)) + Math.pow((internal.kd), (5)));
    dstatedt[4] = (ainf - a) / internal.taua;
    dstatedt[3] = (ninf - n) / internal.taun;
    var ica = internal.gca * minf * (V - internal.vca);
    var ikatp = gkatp * a * (V - internal.vk);
    var ikca = internal.gkca * w * (V - internal.vk);
    var jip3 = oinf * (cer - c);
    var nIRinf = 1 / (1 + betaIRn / alphaIRn);
    var rIRinf = 1 / (1 + betaIRr / alphaIRr);
    var tauIRn = 1 / (alphaIRn + betaIRn);
    var tauIRr = 1 / (alphaIRr + betaIRr);
    dstatedt[5] = (nIRinf - nIR) / tauIRn;
    dstatedt[6] = (rIRinf - rIR) / tauIRr;
    dstatedt[2] = - (ica + ik + ikca + ikatp + iir) / internal.cm;
    var jer = jleak + jip3 - jserca;
    var jmem = - (internal.alpha * ica + internal.kpmca * c);
    dstatedt[0] = 0 + 1 * internal.cell * internal.fcyt * (jmem + jer);
    dstatedt[1] = 0 + 1 * - internal.fer * internal.vcytver * jer * internal.cell;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "c", "cer", "V", "n", "a", "nIR", "rIR"];
    this.metadata.internalOrder = {alpha: null, c_init: null, cell: null, cer_init: null, cm: null, dact: null, dinact: null, dip3: null, fcyt: null, fer: null, gca: null, gir: null, gk: null, gkca: null, initial_a: null, initial_c: null, initial_cer: null, initial_n: null, initial_nIR: null, initial_rIR: null, initial_V: null, ip3: null, kd: null, kpmca: null, kserca: null, pleak: null, r: null, sa: null, sm: null, sn: null, taua: null, taun: null, vca: null, vcytver: null, vir: null, vk: null, vm: null, vn: null};
    this.metadata.variableOrder = {c: null, cer: null, V: null, n: null, a: null, nIR: null, rIR: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
