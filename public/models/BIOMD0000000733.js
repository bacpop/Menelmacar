export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.TumorMicroenvr = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_naive_Tcells;
    state[1] = internal.initial_eff_Tcells;
    state[2] = internal.initial_tumor_cells;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Ae", "An", "Cmax", "Dc", "De", "Dn", "eff_Tcells_init", "gamma_C", "gamma_E", "Kn", "n", "naive_Tcells_init", "Rc", "Sn", "tumor_cells_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Ae", internal, 0.97999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "An", internal, 0.14000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cmax", internal, 230000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Dc", internal, 0.024, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "De", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Dn", internal, 0.23000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "eff_Tcells_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_C", internal, 0.0033999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_E", internal, 0.057000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kn", internal, 0.062, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 720, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "naive_Tcells_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rc", internal, 0.0057000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Sn", internal, 0.37, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tumor_cells_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_eff_Tcells = internal.eff_Tcells_init;
    internal.initial_naive_Tcells = internal.naive_Tcells_init;
    internal.initial_tumor_cells = internal.tumor_cells_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const naive_Tcells = state[0];
    const eff_Tcells = state[1];
    const tumor_cells = state[2];
    dstatedt[1] = 0 + 1 * internal.TumorMicroenvr * (internal.An * internal.Kn * naive_Tcells * (tumor_cells / (tumor_cells + internal.n)) + internal.Ae * eff_Tcells * (tumor_cells / (tumor_cells + internal.n))) - 1 * internal.TumorMicroenvr * (internal.De * eff_Tcells + internal.gamma_E * tumor_cells * eff_Tcells);
    dstatedt[0] = 0 + 1 * internal.TumorMicroenvr * (internal.Sn) - 1 * internal.TumorMicroenvr * (internal.Dn * naive_Tcells + internal.Kn * naive_Tcells * (tumor_cells / (tumor_cells + internal.n)));
    dstatedt[2] = 0 + 1 * internal.TumorMicroenvr * (internal.Rc * tumor_cells * Math.log(internal.Cmax / tumor_cells)) - 1 * internal.TumorMicroenvr * (internal.Dc * tumor_cells - internal.gamma_C * tumor_cells * eff_Tcells);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "naive_Tcells", "eff_Tcells", "tumor_cells"];
    this.metadata.internalOrder = {Ae: null, An: null, Cmax: null, Dc: null, De: null, Dn: null, eff_Tcells_init: null, gamma_C: null, gamma_E: null, initial_eff_Tcells: null, initial_naive_Tcells: null, initial_tumor_cells: null, Kn: null, n: null, naive_Tcells_init: null, Rc: null, Sn: null, tumor_cells_init: null, TumorMicroenvr: null};
    this.metadata.variableOrder = {naive_Tcells: null, eff_Tcells: null, tumor_cells: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
