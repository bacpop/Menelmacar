export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.endosome = 1;
    internal.extracellular = 1;
    internal.kB = 0.058000000000000003;
    internal.kL = 0.012999999999999999;
    internal.kS = 0.00014999999999999999;
    internal.kT = 0.14099999999999999;
    internal.neuroplasm = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var BoNT_init = internal.initial_bulk + internal.initial_free;
    internal.initial_BoNT = BoNT_init;
    var state = Array(6).fill(0);
    state[0] = internal.initial_BoNT;
    state[1] = internal.initial_bulk;
    state[2] = internal.initial_free;
    state[3] = internal.initial_bound;
    state[4] = internal.initial_translocate;
    state[5] = internal.initial_lytic;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["bound_init", "bulk_init", "free_init", "lytic_init", "translocate_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "bound_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "bulk_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "free_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lytic_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "translocate_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_bound = internal.bound_init;
    internal.initial_bulk = internal.bulk_init;
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
    const bulk = state[1];
    const free = state[2];
    const bound = state[3];
    const translocate = state[4];
    dstatedt[0] = 0 + 0;
    dstatedt[3] = 0 - 1 * internal.kT * bound * internal.extracellular + 1 * internal.kB * free * internal.extracellular;
    dstatedt[1] = 0 - 1 * internal.kS * bulk * internal.extracellular;
    dstatedt[2] = 0 - 1 * internal.kB * free * internal.extracellular + 1 * internal.kS * bulk * internal.extracellular;
    dstatedt[5] = 0 + 1 * internal.kL * translocate * internal.endosome;
    dstatedt[4] = 0 + 1 * internal.kT * bound * internal.extracellular - 1 * internal.kL * translocate * internal.endosome;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "BoNT", "bulk", "free", "bound", "translocate", "lytic"];
    this.metadata.internalOrder = {bound_init: null, bulk_init: null, endosome: null, extracellular: null, free_init: null, initial_BoNT: null, initial_bound: null, initial_bulk: null, initial_free: null, initial_lytic: null, initial_translocate: null, kB: null, kL: null, kS: null, kT: null, lytic_init: null, neuroplasm: null, translocate_init: null};
    this.metadata.variableOrder = {BoNT: null, bulk: null, free: null, bound: null, translocate: null, lytic: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
