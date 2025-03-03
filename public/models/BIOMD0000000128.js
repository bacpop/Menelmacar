export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell = 1;
    internal.initial_h = 0;
    internal.initial_inh = 1;
    internal.initial_n = 0;
    internal.initial_V = - 60;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(7).fill(0);
    state[0] = internal.initial_c;
    state[1] = internal.initial_cer;
    state[2] = internal.initial_cAMP;
    state[3] = internal.initial_h;
    state[4] = internal.initial_inh;
    state[5] = internal.initial_V;
    state[6] = internal.initial_n;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "c_init", "cAMP_init", "cAMPlow", "cer_init", "cm", "dact", "dinh", "dip3", "f", "fer", "gca", "gk", "kc", "ki", "kserca", "lambda", "perl", "sh", "sigmav", "sm", "sn", "taudir", "tauh", "taun", "vca", "vh", "vk", "vm", "vn"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 4.5000000000000001e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c_init", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cAMP_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cAMPlow", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cer_init", internal, 260, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cm", internal, 5300, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dact", internal, 0.34999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dinh", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dip3", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "fer", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gca", internal, 2000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gk", internal, 3500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kc", internal, 0.14999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ki", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kserca", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda", internal, 1.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "perl", internal, 0.00050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sh", internal, 70, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigmav", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sm", internal, 12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sn", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "taudir", internal, 20000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tauh", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "taun", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vca", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vh", internal, - 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vk", internal, - 75, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vm", internal, - 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vn", internal, - 16, -Infinity, Infinity, false);
    internal.initial_c = internal.c_init;
    internal.initial_cAMP = internal.cAMP_init;
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
    const cAMP = state[2];
    const h = state[3];
    const inh = state[4];
    const V = state[5];
    const n = state[6];
    var ainf = 1 / (1 + internal.dact / c);
    var ETswitch = (t > 60000 ? 1 : 0);
    var girk = (t > 60000 ? 3000 : 1000);
    var hinf = 1 / (1 + Math.exp((internal.vh - V) / internal.sh));
    var hinfer = 1 / (1 + c / internal.dinh);
    var ik = internal.gk * n * (V - internal.vk);
    var IP3 = (t > 60000 ? 0.29999999999999999 : 0);
    var jerleak = internal.perl * (cer - c);
    var jerp = internal.kserca * c;
    var minf = 1 / (1 + Math.exp((internal.vm - V) / internal.sm));
    var ninf = 1 / (1 + Math.exp((internal.vn - V) / internal.sn));
    var binf = IP3 / (IP3 + internal.dip3);
    dstatedt[2] = 0 + 1 * internal.cell * ETswitch * ((internal.cAMPlow - cAMP) / internal.taudir);
    dstatedt[3] = (hinf - h) / internal.tauh;
    dstatedt[4] = ETswitch * ((0.20000000000000001 - inh) / internal.taudir);
    dstatedt[6] = internal.lambda * (ninf - n) / internal.taun;
    var ica = internal.gca * minf * (V - internal.vca);
    var igirk = girk * h * (V - internal.vk);
    dstatedt[5] = (- ica - ik - igirk) / internal.cm;
    var jmemtot = - (internal.alpha * ica + internal.kc * c);
    var o = Math.pow((ainf), (3)) * Math.pow((binf), (3)) * Math.pow((hinfer), (3));
    var jerip3 = o * (cer - c);
    var jertot = jerleak + jerip3 - jerp;
    dstatedt[0] = 0 + 1 * internal.cell * internal.f * (jertot + jmemtot);
    dstatedt[1] = 0 + 1 * - internal.fer * internal.sigmav * jertot * internal.cell;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "c", "cer", "cAMP", "h", "inh", "V", "n"];
    this.metadata.internalOrder = {alpha: null, c_init: null, cAMP_init: null, cAMPlow: null, cell: null, cer_init: null, cm: null, dact: null, dinh: null, dip3: null, f: null, fer: null, gca: null, gk: null, initial_c: null, initial_cAMP: null, initial_cer: null, initial_h: null, initial_inh: null, initial_n: null, initial_V: null, kc: null, ki: null, kserca: null, lambda: null, perl: null, sh: null, sigmav: null, sm: null, sn: null, taudir: null, tauh: null, taun: null, vca: null, vh: null, vk: null, vm: null, vn: null};
    this.metadata.variableOrder = {c: null, cer: null, cAMP: null, h: null, inh: null, V: null, n: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
