export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cytosol = 1;
    internal.extracellular = 1;
    internal.intravesicular1 = 1;
    internal.intravesicular2 = 1;
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
    this.base.user.checkUser(user, ["beta", "EC_init", "K", "K2i", "K2s", "K3s", "K3y", "K3z", "Kf", "v0", "v1", "Vm2i", "Vm2s", "Vm3i", "Vm3s", "X_init", "Y_init", "Z_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "beta", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EC_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2i", internal, 0.0050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2s", internal, 0.026499999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K3s", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K3y", internal, 0.065000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K3z", internal, 0.021999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kf", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v0", internal, 0.014999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v1", internal, 0.012, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vm2i", internal, 3.1000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vm2s", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vm3i", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vm3s", internal, 0.16900000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_init", internal, 0.5, -Infinity, Infinity, false);
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
