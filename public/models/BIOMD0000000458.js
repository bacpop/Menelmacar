export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell = 1;
    internal.KAp3g = 1.2;
    internal.KAphp = 0.0032000000000000002;
    internal.KBpser = 0.0015;
    internal.KBser = 0.14999999999999999;
    internal.kcatA = 0.55000000000000004;
    internal.kcatB = 1.4299999999999999;
    internal.kcatC = 1.75;
    internal.KCphp = 0.0015;
    internal.KCpser = 0.0016999999999999999;
    internal.KiAser = 0.0038;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(7).fill(0);
    state[0] = internal.initial_p3g;
    state[1] = internal.initial_php;
    state[2] = internal.initial_pser;
    state[3] = internal.initial_ser;
    state[4] = internal.initial_serA;
    state[5] = internal.initial_serC;
    state[6] = internal.initial_serB;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["p3g_init", "php_init", "pser_init", "ser_init", "serA_init", "serB_init", "serC_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "p3g_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "php_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pser_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ser_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "serA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "serB_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "serC_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_p3g = internal.p3g_init;
    internal.initial_php = internal.php_init;
    internal.initial_pser = internal.pser_init;
    internal.initial_ser = internal.ser_init;
    internal.initial_serA = internal.serA_init;
    internal.initial_serB = internal.serB_init;
    internal.initial_serC = internal.serC_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const p3g = state[0];
    const php = state[1];
    const pser = state[2];
    const ser = state[3];
    const serA = state[4];
    const serC = state[5];
    const serB = state[6];
    dstatedt[0] = 0;
    dstatedt[3] = 0;
    dstatedt[4] = 0;
    dstatedt[6] = 0;
    dstatedt[5] = 0;
    dstatedt[1] = 0 + 1 * internal.cell * serA * internal.kcatA * (p3g / internal.KAp3g) / (1 + p3g / internal.KAp3g + php / internal.KAphp) / (1 + ser / internal.KiAser) - 1 * internal.cell * serC * internal.kcatC * (php / internal.KCphp) / (1 + php / internal.KCphp + pser / internal.KCpser);
    dstatedt[2] = 0 + 1 * internal.cell * serC * internal.kcatC * (php / internal.KCphp) / (1 + php / internal.KCphp + pser / internal.KCpser) - 1 * internal.cell * serB * internal.kcatB * (pser / internal.KBpser) / (1 + pser / internal.KBpser + ser / internal.KBser);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "p3g", "php", "pser", "ser", "serA", "serC", "serB"];
    this.metadata.internalOrder = {cell: null, initial_p3g: null, initial_php: null, initial_pser: null, initial_ser: null, initial_serA: null, initial_serB: null, initial_serC: null, KAp3g: null, KAphp: null, KBpser: null, KBser: null, kcatA: null, kcatB: null, kcatC: null, KCphp: null, KCpser: null, KiAser: null, p3g_init: null, php_init: null, pser_init: null, ser_init: null, serA_init: null, serB_init: null, serC_init: null};
    this.metadata.variableOrder = {p3g: null, php: null, pser: null, ser: null, serA: null, serC: null, serB: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
