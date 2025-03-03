export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cytosol = 1;
    internal.EC = 1000;
    internal.extracellular = 1;
    internal.intravesicular = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_Z;
    state[1] = internal.initial_A;
    state[2] = internal.initial_Y;
    state[3] = internal.initial_GP;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A_init", "alpha", "beta", "epsilon", "G", "gamma", "GP_init", "K", "K1", "K2", "K5", "Ka", "Ka1", "Ka2", "Ka5", "Ka6", "Kd", "Kf", "Kp2", "Ky", "Kz", "m", "n", "p", "v0", "v1", "V4", "Vm2", "Vm3", "Vm5", "Vpm1", "Vpm2", "Y_init", "Z_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A_init", internal, 0.45000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha", internal, 9, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "epsilon", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G", internal, 10000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 9, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "GP_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K5", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ka", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ka1", internal, 10000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ka2", internal, 10000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ka5", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ka6", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kd", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kf", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kp2", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ky", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kz", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "m", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v0", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v1", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V4", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vm2", internal, 6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vm3", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vm5", internal, 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vpm1", internal, 1.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vpm2", internal, 0.59999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Y_init", internal, 0.35999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Z_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_A = internal.A_init;
    internal.initial_GP = internal.GP_init;
    internal.initial_Y = internal.Y_init;
    internal.initial_Z = internal.Z_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Z = state[0];
    const A = state[1];
    const Y = state[2];
    const GP = state[3];
    dstatedt[1] = 0 + 1 * internal.cytosol * internal.beta * internal.V4 - 1 * internal.cytosol * internal.Vm5 * Math.pow((A), (internal.p)) * Math.pow((Z), (internal.n)) / ((Math.pow((internal.K5), (internal.p)) + Math.pow((A), (internal.p))) * (Math.pow((internal.Kd), (internal.n)) + Math.pow((Z), (internal.n)))) - 1 * internal.cytosol * internal.epsilon * A;
    dstatedt[3] = 0 + 1 * internal.cytosol * (internal.Vpm1 * (1 + internal.gamma * Math.pow((Z), (4)) / (Math.pow((internal.Ka5), (4)) + Math.pow((Z), (4)))) * (1 - GP) / (internal.K1 / (1 + Math.pow((Z), (4)) / Math.pow((internal.Ka6), (4))) + 1 - GP)) - 1 * internal.cytosol * (internal.Vpm2 * (1 + internal.alpha * internal.G / (internal.Ka1 + internal.G)) * GP / (internal.Kp2 / (1 + internal.G / internal.Ka2) + GP));
    dstatedt[2] = 0 + 1 * internal.cytosol * (internal.Vm2 * Math.pow((Z), (2)) / (Math.pow((internal.K2), (2)) + Math.pow((Z), (2)))) - 1 * internal.intravesicular * internal.Vm3 * Math.pow((A), (4)) * Math.pow((Y), (2)) * Math.pow((Z), (internal.m)) / ((Math.pow((internal.Ka), (4)) + Math.pow((A), (4))) * (Math.pow((internal.Ky), (2)) + Math.pow((Y), (2))) * (Math.pow((internal.Kz), (internal.m)) + Math.pow((Z), (internal.m)))) - 1 * internal.intravesicular * internal.Kf * Y;
    dstatedt[0] = 0 + 1 * internal.extracellular * (internal.v0 + internal.v1 * internal.beta) - 1 * internal.cytosol * (internal.Vm2 * Math.pow((Z), (2)) / (Math.pow((internal.K2), (2)) + Math.pow((Z), (2)))) + 1 * internal.intravesicular * internal.Vm3 * Math.pow((A), (4)) * Math.pow((Y), (2)) * Math.pow((Z), (internal.m)) / ((Math.pow((internal.Ka), (4)) + Math.pow((A), (4))) * (Math.pow((internal.Ky), (2)) + Math.pow((Y), (2))) * (Math.pow((internal.Kz), (internal.m)) + Math.pow((Z), (internal.m)))) + 1 * internal.intravesicular * internal.Kf * Y - 1 * internal.cytosol * internal.K * Z;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Z", "A", "Y", "GP"];
    this.metadata.internalOrder = {A_init: null, alpha: null, beta: null, cytosol: null, EC: null, epsilon: null, extracellular: null, G: null, gamma: null, GP_init: null, initial_A: null, initial_GP: null, initial_Y: null, initial_Z: null, intravesicular: null, K: null, K1: null, K2: null, K5: null, Ka: null, Ka1: null, Ka2: null, Ka5: null, Ka6: null, Kd: null, Kf: null, Kp2: null, Ky: null, Kz: null, m: null, n: null, p: null, v0: null, v1: null, V4: null, Vm2: null, Vm3: null, Vm5: null, Vpm1: null, Vpm2: null, Y_init: null, Z_init: null};
    this.metadata.variableOrder = {Z: null, A: null, Y: null, GP: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
