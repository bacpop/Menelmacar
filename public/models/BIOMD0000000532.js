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
    var state = Array(4).fill(0);
    state[0] = internal.initial_X;
    state[1] = internal.initial_Xm;
    state[2] = internal.initial_Vm;
    state[3] = internal.initial_Lambda;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alambda", "av", "ax", "C", "klambda", "kv", "kx", "lambda", "Lambda_init", "mlambda", "mv", "mx", "vm", "Vm_init", "X_init", "xm", "Xm_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alambda", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "av", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ax", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "klambda", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kv", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kx", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Lambda_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mlambda", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mv", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mx", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vm", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vm_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "xm", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Xm_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_Lambda = internal.Lambda_init;
    internal.initial_Vm = internal.Vm_init;
    internal.initial_X = internal.X_init;
    internal.initial_Xm = internal.Xm_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    dstatedt[3] = 0;
    dstatedt[2] = 0;
    dstatedt[0] = 0;
    dstatedt[1] = 0;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "X", "Xm", "Vm", "Lambda"];
    this.metadata.internalOrder = {alambda: null, av: null, ax: null, C: null, cell: null, initial_Lambda: null, initial_Vm: null, initial_X: null, initial_Xm: null, klambda: null, kv: null, kx: null, lambda: null, Lambda_init: null, mlambda: null, mv: null, mx: null, vm: null, Vm_init: null, X_init: null, xm: null, Xm_init: null};
    this.metadata.variableOrder = {X: null, Xm: null, Vm: null, Lambda: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
