export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.cytosol = 1;
    internal.extracellular = 1;
    internal.intravesicular = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(5).fill(0);
    state[0] = internal.initial_EC;
    state[1] = internal.initial_Z;
    state[2] = internal.initial_Rho;
    state[3] = internal.initial_Y;
    state[4] = internal.initial_Fraction_Inactive_Channels;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "beta", "d", "EC_init", "Fraction_Inactive_Channels_init", "K", "K2", "Kd", "Kf", "Kr", "Ky", "Rho_init", "v0", "v1", "Vm2", "Vm3", "Y_init", "Z_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 40000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "EC_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Fraction_Inactive_Channels_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kd", internal, 5000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kf", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kr", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ky", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rho_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v0", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vm2", internal, 6.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vm3", internal, 50, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Y_init", internal, 0.35999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Z_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_EC = internal.EC_init;
    internal.initial_Fraction_Inactive_Channels = internal.Fraction_Inactive_Channels_init;
    internal.initial_Rho = internal.Rho_init;
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
    const Rho = state[2];
    const Y = state[3];
    dstatedt[0] = 0 - 1 * internal.cytosol * (internal.v0 + internal.v1 * internal.beta) + 1 * internal.extracellular * internal.K * Z;
    dstatedt[4] = 0 + 1 * internal.cytosol * internal.Kd * Math.pow((Z), (4)) * Rho - 1 * internal.cytosol * internal.Kr * (1 - Rho);
    dstatedt[2] = 0 - 1 * internal.cytosol * internal.Kd * Math.pow((Z), (4)) * Rho + 1 * internal.cytosol * internal.Kr * (1 - Rho);
    dstatedt[3] = 0 + 1 * internal.intravesicular * (internal.Vm2 * Math.pow((Z), (2)) / (Math.pow((internal.K2), (2)) + Math.pow((Z), (2)))) - 1 * internal.cytosol * (internal.beta * (Rho * (internal.a / internal.d) * Math.pow((Z), (4)) / (1 + internal.a / internal.d * Math.pow((Z), (4)))) * internal.Vm3 * Math.pow((Y), (2)) / (Math.pow((internal.Ky), (2)) + Math.pow((Y), (2)))) - 1 * internal.cytosol * internal.Kf * Y;
    dstatedt[1] = 0 + 1 * internal.cytosol * (internal.v0 + internal.v1 * internal.beta) - 1 * internal.intravesicular * (internal.Vm2 * Math.pow((Z), (2)) / (Math.pow((internal.K2), (2)) + Math.pow((Z), (2)))) + 1 * internal.cytosol * (internal.beta * (Rho * (internal.a / internal.d) * Math.pow((Z), (4)) / (1 + internal.a / internal.d * Math.pow((Z), (4)))) * internal.Vm3 * Math.pow((Y), (2)) / (Math.pow((internal.Ky), (2)) + Math.pow((Y), (2)))) + 1 * internal.cytosol * internal.Kf * Y - 1 * internal.extracellular * internal.K * Z;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "EC", "Z", "Rho", "Y", "Fraction_Inactive_Channels"];
    this.metadata.internalOrder = {a: null, beta: null, cytosol: null, d: null, EC_init: null, extracellular: null, Fraction_Inactive_Channels_init: null, initial_EC: null, initial_Fraction_Inactive_Channels: null, initial_Rho: null, initial_Y: null, initial_Z: null, intravesicular: null, K: null, K2: null, Kd: null, Kf: null, Kr: null, Ky: null, Rho_init: null, v0: null, v1: null, Vm2: null, Vm3: null, Y_init: null, Z_init: null};
    this.metadata.variableOrder = {EC: null, Z: null, Rho: null, Y: null, Fraction_Inactive_Channels: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
