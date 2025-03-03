export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cell = 1;
    internal.p3g = 2.3599999999999999;
    internal.ser = 4.9000000000000004;
    internal.serA = 1.1499999999999999;
    internal.serB = 0.25;
    internal.serC = 0.10000000000000001;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(2).fill(0);
    state[0] = internal.initial_php;
    state[1] = internal.initial_pser;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["KAp3g", "KAphp", "KBpser", "KBser", "kcatA", "kcatB", "kcatC", "KCphp", "KCpser", "KiAser", "php_init", "pser_init"], unusedUserAction);
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
    this.base.user.setUserScalar(user, "php_init", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pser_init", internal, 0.089999999999999997, -Infinity, Infinity, false);
    internal.initial_php = internal.php_init;
    internal.initial_pser = internal.pser_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const php = state[0];
    const pser = state[1];
    dstatedt[0] = 0 + 1 * internal.cell * internal.serA * internal.kcatA * (internal.p3g / internal.KAp3g) / (1 + internal.p3g / internal.KAp3g + php / internal.KAphp) / (1 + internal.ser / internal.KiAser) - 1 * internal.cell * internal.serC * internal.kcatC * (php / internal.KCphp) / (1 + php / internal.KCphp + pser / internal.KCpser);
    dstatedt[1] = 0 + 1 * internal.cell * internal.serC * internal.kcatC * (php / internal.KCphp) / (1 + php / internal.KCphp + pser / internal.KCpser) - 1 * internal.cell * internal.serB * internal.kcatB * (pser / internal.KBpser) / (1 + pser / internal.KBpser + internal.ser / internal.KBser);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "php", "pser"];
    this.metadata.internalOrder = {cell: null, initial_php: null, initial_pser: null, KAp3g: null, KAphp: null, KBpser: null, KBser: null, kcatA: null, kcatB: null, kcatC: null, KCphp: null, KCpser: null, KiAser: null, p3g: null, php_init: null, pser_init: null, ser: null, serA: null, serB: null, serC: null};
    this.metadata.variableOrder = {php: null, pser: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
