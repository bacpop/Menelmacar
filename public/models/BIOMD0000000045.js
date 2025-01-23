export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cytosol = 1;
    internal.extracellular = 1;
    internal.intravesicular1 = 1;
    internal.intravesicular2 = 1;
    internal.K = 1;
    internal.K2i = 0.0050000000000000001;
    internal.K2s = 0.026499999999999999;
    internal.K3s = 0.10000000000000001;
    internal.K3y = 0.065000000000000002;
    internal.K3z = 0.021999999999999999;
    internal.Kf = 0.5;
    internal.v0 = 0.014999999999999999;
    internal.v1 = 0.012;
    internal.Vm2i = 3.1000000000000001;
    internal.Vm2s = 1.5;
    internal.Vm3i = 25;
    internal.Vm3s = 0.16900000000000001;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_EC;
    state[1] = internal.initial_Z;
    state[2] = internal.initial_Y;
    state[3] = internal.initial_X;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["beta", "EC_init", "X_init", "Y_init", "Z_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "beta", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EC_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Y_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Z_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_EC = internal.EC_init;
    internal.initial_X = internal.X_init;
    internal.initial_Y = internal.Y_init;
    internal.initial_Z = internal.Z_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Z = state[1];
    const Y = state[2];
    const X = state[3];
    dstatedt[0] = 0 - 1 * internal.cytosol * (internal.v0 + internal.v1 * internal.beta) + 1 * internal.extracellular * internal.K * Z;
    dstatedt[3] = 0 - 1 * internal.cytosol * internal.Kf * X + 1 * internal.intravesicular1 * internal.Vm2s * Math.pow((Z), (2)) / (Math.pow((internal.K2s), (2)) + Math.pow((Z), (2))) - 1 * internal.cytosol * internal.beta * internal.Vm3s * Math.pow((X), (2)) / (Math.pow((internal.K3s), (2)) + Math.pow((X), (2)));
    dstatedt[2] = 0 + 1 * internal.intravesicular2 * internal.Vm2i * Math.pow((Z), (2)) / (Math.pow((internal.K2i), (2)) + Math.pow((Z), (2))) - 1 * internal.cytosol * internal.Vm3i * Math.pow((Y), (2)) * Math.pow((Z), (2)) / ((Math.pow((internal.K3y), (2)) + Math.pow((Y), (2))) * (Math.pow((internal.K3z), (2)) + Math.pow((Z), (2)))) - 1 * internal.cytosol * internal.Kf * Y;
    dstatedt[1] = 0 + 1 * internal.cytosol * (internal.v0 + internal.v1 * internal.beta) - 1 * internal.intravesicular2 * internal.Vm2i * Math.pow((Z), (2)) / (Math.pow((internal.K2i), (2)) + Math.pow((Z), (2))) + 1 * internal.cytosol * internal.Vm3i * Math.pow((Y), (2)) * Math.pow((Z), (2)) / ((Math.pow((internal.K3y), (2)) + Math.pow((Y), (2))) * (Math.pow((internal.K3z), (2)) + Math.pow((Z), (2)))) + 1 * internal.cytosol * internal.Kf * Y - 1 * internal.extracellular * internal.K * Z + 1 * internal.cytosol * internal.Kf * X - 1 * internal.intravesicular1 * internal.Vm2s * Math.pow((Z), (2)) / (Math.pow((internal.K2s), (2)) + Math.pow((Z), (2))) + 1 * internal.cytosol * internal.beta * internal.Vm3s * Math.pow((X), (2)) / (Math.pow((internal.K3s), (2)) + Math.pow((X), (2)));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "EC", "Z", "Y", "X"];
    this.metadata.internalOrder = {beta: null, cytosol: null, EC_init: null, extracellular: null, initial_EC: null, initial_X: null, initial_Y: null, initial_Z: null, intravesicular1: null, intravesicular2: null, K: null, K2i: null, K2s: null, K3s: null, K3y: null, K3z: null, Kf: null, v0: null, v1: null, Vm2i: null, Vm2s: null, Vm3i: null, Vm3s: null, X_init: null, Y_init: null, Z_init: null};
    this.metadata.variableOrder = {EC: null, Z: null, Y: null, X: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
