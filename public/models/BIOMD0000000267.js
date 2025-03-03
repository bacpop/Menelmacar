export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.endosome = 1;
    internal.extracellular = 1;
    internal.neuroplasm = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_free;
    state[1] = internal.initial_bound;
    state[2] = internal.initial_translocate;
    state[3] = internal.initial_lytic;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["bound_init", "free_init", "kB", "kL", "kT", "lytic_init", "translocate_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "bound_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "free_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kB", internal, 0.058000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kL", internal, 0.012999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kT", internal, 0.14099999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lytic_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "translocate_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_bound = internal.bound_init;
    internal.initial_free = internal.free_init;
    internal.initial_lytic = internal.lytic_init;
    internal.initial_translocate = internal.translocate_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const free = state[0];
    const bound = state[1];
    const translocate = state[2];
    dstatedt[1] = 0 - 1 * internal.kT * bound * internal.extracellular + 1 * internal.kB * free * internal.extracellular;
    dstatedt[0] = 0 - 1 * internal.kB * free * internal.extracellular;
    dstatedt[3] = 0 + 1 * internal.kL * translocate * internal.endosome;
    dstatedt[2] = 0 + 1 * internal.kT * bound * internal.extracellular - 1 * internal.kL * translocate * internal.endosome;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "free", "bound", "translocate", "lytic"];
    this.metadata.internalOrder = {bound_init: null, endosome: null, extracellular: null, free_init: null, initial_bound: null, initial_free: null, initial_lytic: null, initial_translocate: null, kB: null, kL: null, kT: null, lytic_init: null, neuroplasm: null, translocate_init: null};
    this.metadata.variableOrder = {free: null, bound: null, translocate: null, lytic: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
