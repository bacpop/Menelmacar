export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cytosol = 1;
    internal.epsilon = 0.10000000000000001;
    internal.extracellular = 1;
    internal.intravesicular = 1;
    internal.K = 10;
    internal.K2 = 0.10000000000000001;
    internal.Ka = 0.20000000000000001;
    internal.Kd = 0.40000000000000002;
    internal.Kf = 1;
    internal.Kp = 1;
    internal.Ky = 0.20000000000000001;
    internal.Kz = 0.29999999999999999;
    internal.n = 4;
    internal.v0 = 2;
    internal.v1 = 1;
    internal.Vd = 80;
    internal.Vm2 = 6.5;
    internal.Vm3 = 19.5;
    internal.Vp = 2.5;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_EC;
    state[1] = internal.initial_Z;
    state[2] = internal.initial_A;
    state[3] = internal.initial_Y;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A_init", "beta", "EC_init", "Y_init", "Z_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EC_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Y_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Z_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_A = internal.A_init;
    internal.initial_EC = internal.EC_init;
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
    const A = state[2];
    const Y = state[3];
    dstatedt[2] = 0 + 1 * internal.cytosol * internal.beta * internal.Vp - 1 * internal.cytosol * internal.Vd * Math.pow((A), (2)) * Math.pow((Z), (internal.n)) / ((Math.pow((internal.Kp), (2)) + Math.pow((A), (2))) * (Math.pow((internal.Kd), (internal.n)) + Math.pow((Z), (internal.n)))) - 1 * internal.cytosol * internal.epsilon * A;
    dstatedt[0] = 0 - 1 * internal.cytosol * (internal.v0 + internal.v1 * internal.beta) + 1 * internal.extracellular * internal.K * Z;
    dstatedt[3] = 0 + 1 * internal.intravesicular * (internal.Vm2 * Math.pow((Z), (2)) / (Math.pow((internal.K2), (2)) + Math.pow((Z), (2)))) - 1 * internal.cytosol * internal.Vm3 * Math.pow((A), (4)) * Math.pow((Y), (2)) * Math.pow((Z), (4)) / ((Math.pow((internal.Ka), (4)) + Math.pow((A), (4))) * (Math.pow((internal.Ky), (2)) + Math.pow((Y), (2))) * (Math.pow((internal.Kz), (4)) + Math.pow((Z), (4)))) - 1 * internal.cytosol * internal.Kf * Y;
    dstatedt[1] = 0 + 1 * internal.cytosol * (internal.v0 + internal.v1 * internal.beta) - 1 * internal.intravesicular * (internal.Vm2 * Math.pow((Z), (2)) / (Math.pow((internal.K2), (2)) + Math.pow((Z), (2)))) + 1 * internal.cytosol * internal.Vm3 * Math.pow((A), (4)) * Math.pow((Y), (2)) * Math.pow((Z), (4)) / ((Math.pow((internal.Ka), (4)) + Math.pow((A), (4))) * (Math.pow((internal.Ky), (2)) + Math.pow((Y), (2))) * (Math.pow((internal.Kz), (4)) + Math.pow((Z), (4)))) + 1 * internal.cytosol * internal.Kf * Y - 1 * internal.extracellular * internal.K * Z;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "EC", "Z", "A", "Y"];
    this.metadata.internalOrder = {A_init: null, beta: null, cytosol: null, EC_init: null, epsilon: null, extracellular: null, initial_A: null, initial_EC: null, initial_Y: null, initial_Z: null, intravesicular: null, K: null, K2: null, Ka: null, Kd: null, Kf: null, Kp: null, Ky: null, Kz: null, n: null, v0: null, v1: null, Vd: null, Vm2: null, Vm3: null, Vp: null, Y_init: null, Z_init: null};
    this.metadata.variableOrder = {EC: null, Z: null, A: null, Y: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
