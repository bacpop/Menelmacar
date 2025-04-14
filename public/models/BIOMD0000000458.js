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
    var state = Array(7).fill(0);
    state[0] = internal.initial_php;
    state[1] = internal.initial_pser;
    state[2] = internal.initial_p3g;
    state[3] = internal.initial_ser;
    state[4] = internal.initial_serA;
    state[5] = internal.initial_serC;
    state[6] = internal.initial_serB;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["KAp3g", "KAphp", "KBpser", "KBser", "kcatA", "kcatB", "kcatC", "KCphp", "KCpser", "KiAser", "p3g_init", "php_init", "pser_init", "ser_init", "serA_init", "serB_init", "serC_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "KAp3g", internal, 1.2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KAphp", internal, 0.0032000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KBpser", internal, 0.0015, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KBser", internal, 0.14999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcatA", internal, 0.55000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcatB", internal, 1.4299999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcatC", internal, 1.75, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KCphp", internal, 0.0015, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KCpser", internal, 0.0016999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "KiAser", internal, 0.0038, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p3g_init", internal, 2.3599999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "php_init", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pser_init", internal, 0.089999999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ser_init", internal, 4.9000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "serA_init", internal, 1.1499999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "serB_init", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "serC_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
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
    const php = state[0];
    const pser = state[1];
    const p3g = state[2];
    const ser = state[3];
    const serA = state[4];
    const serC = state[5];
    const serB = state[6];
    dstatedt[2] = 0;
    dstatedt[3] = 0;
    dstatedt[4] = 0;
    dstatedt[6] = 0;
    dstatedt[5] = 0;
    dstatedt[0] = 0 + 1 * internal.cell * serA * internal.kcatA * (p3g / internal.KAp3g) / (1 + p3g / internal.KAp3g + php / internal.KAphp) / (1 + ser / internal.KiAser) - 1 * internal.cell * serC * internal.kcatC * (php / internal.KCphp) / (1 + php / internal.KCphp + pser / internal.KCpser);
    dstatedt[1] = 0 + 1 * internal.cell * serC * internal.kcatC * (php / internal.KCphp) / (1 + php / internal.KCphp + pser / internal.KCpser) - 1 * internal.cell * serB * internal.kcatB * (pser / internal.KBpser) / (1 + pser / internal.KBpser + ser / internal.KBser);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "php", "pser", "p3g", "ser", "serA", "serC", "serB"];
    this.metadata.internalOrder = {cell: null, initial_p3g: null, initial_php: null, initial_pser: null, initial_ser: null, initial_serA: null, initial_serB: null, initial_serC: null, KAp3g: null, KAphp: null, KBpser: null, KBser: null, kcatA: null, kcatB: null, kcatC: null, KCphp: null, KCpser: null, KiAser: null, p3g_init: null, php_init: null, pser_init: null, ser_init: null, serA_init: null, serB_init: null, serC_init: null};
    this.metadata.variableOrder = {php: null, pser: null, p3g: null, ser: null, serA: null, serC: null, serB: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
