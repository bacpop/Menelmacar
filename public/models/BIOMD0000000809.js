export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.initial_R = 0.80000000000000004;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(5).fill(0);
    state[0] = internal.initial_x;
    state[1] = internal.initial_y;
    state[2] = internal.initial_u;
    state[3] = internal.initial_ystar;
    state[4] = internal.initial_R;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["delta", "gamma", "myu_1", "myu_2", "nu_1", "nu_2", "nu_3", "phi_1", "phi_2", "rho", "sigma_1", "sigma_2", "u_init", "x_init", "y_init", "ystar_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "delta", internal, 3.0217999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 2.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "myu_1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "myu_2", internal, 0.23999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nu_1", internal, 0.0021800000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nu_2", internal, 0.72789999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "nu_3", internal, 300, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "phi_1", internal, 1.3398000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "phi_2", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigma_1", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigma_2", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "u_init", internal, 9.9999999999999995e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_init", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y_init", internal, 0.80000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ystar_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    internal.initial_u = internal.u_init;
    internal.initial_x = internal.x_init;
    internal.initial_y = internal.y_init;
    internal.initial_ystar = internal.ystar_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const x = state[0];
    const y = state[1];
    const u = state[2];
    const ystar = state[3];
    const R = state[4];
    dstatedt[4] = R * ((internal.sigma_1 * y * (1 - internal.sigma_2 * y) - internal.myu_2 * ystar) / (y + ystar - 1)) / 3;
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.nu_3 * x * y) - 1 * internal.compartment * (internal.myu_1 * u);
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.phi_1 * x * (1 - internal.phi_2 * x)) + 1 * internal.compartment * (internal.delta * x * y / (internal.gamma + x)) - 1 * internal.compartment * (internal.nu_1 * x * y);
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.sigma_1 * y * (1 - internal.sigma_2 * y)) - 1 * internal.compartment * (internal.nu_2 * x * y);
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.rho * x * y) - 1 * internal.compartment * (internal.myu_2 * ystar);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "x", "y", "u", "ystar", "R"];
    this.metadata.internalOrder = {compartment: null, delta: null, gamma: null, initial_R: null, initial_u: null, initial_x: null, initial_y: null, initial_ystar: null, myu_1: null, myu_2: null, nu_1: null, nu_2: null, nu_3: null, phi_1: null, phi_2: null, rho: null, sigma_1: null, sigma_2: null, u_init: null, x_init: null, y_init: null, ystar_init: null};
    this.metadata.variableOrder = {x: null, y: null, u: null, ystar: null, R: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
