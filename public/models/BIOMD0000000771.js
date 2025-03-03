export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_y_Tumor_Cell;
    state[1] = internal.initial_v_Virus;
    state[2] = internal.initial_x_Infected_Cell;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "delta", "epsilon", "K", "kappa", "omega", "r", "rho", "v_Virus_init", "x_Infected_Cell_init", "y_Tumor_Cell_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta", internal, 0.309, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "epsilon", internal, 1.648773, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K", internal, 2139.2579999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kappa", internal, 0.00044799999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "omega", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 0.20621339999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho", internal, 0.60799999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v_Virus_init", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_Infected_Cell_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y_Tumor_Cell_init", internal, 126.23699999999999, -Infinity, Infinity, false);
    internal.initial_v_Virus = internal.v_Virus_init;
    internal.initial_x_Infected_Cell = internal.x_Infected_Cell_init;
    internal.initial_y_Tumor_Cell = internal.y_Tumor_Cell_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const y_Tumor_Cell = state[0];
    const v_Virus = state[1];
    const x_Infected_Cell = state[2];
    dstatedt[1] = 0 - 1 * internal.compartment * internal.kappa * y_Tumor_Cell * v_Virus + 1 * internal.compartment * (internal.alpha * x_Infected_Cell) - 1 * internal.compartment * internal.omega * v_Virus;
    dstatedt[2] = 0 + 1 * internal.compartment * internal.kappa * y_Tumor_Cell * v_Virus - 1 * internal.compartment * internal.delta * x_Infected_Cell;
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.r * y_Tumor_Cell * (1 - Math.pow((y_Tumor_Cell + x_Infected_Cell), (internal.epsilon)) / Math.pow((internal.K), (internal.epsilon)))) - 1 * internal.compartment * internal.kappa * y_Tumor_Cell * v_Virus - 1 * internal.compartment * (internal.rho * x_Infected_Cell * y_Tumor_Cell);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "y_Tumor_Cell", "v_Virus", "x_Infected_Cell"];
    this.metadata.internalOrder = {alpha: null, compartment: null, delta: null, epsilon: null, initial_v_Virus: null, initial_x_Infected_Cell: null, initial_y_Tumor_Cell: null, K: null, kappa: null, omega: null, r: null, rho: null, v_Virus_init: null, x_Infected_Cell_init: null, y_Tumor_Cell_init: null};
    this.metadata.variableOrder = {y_Tumor_Cell: null, v_Virus: null, x_Infected_Cell: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
