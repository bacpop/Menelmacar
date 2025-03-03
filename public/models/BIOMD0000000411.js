export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.default1 = 1;
    internal.parameter_6 = 50000;
    internal.parameter_7 = 84000;
    internal.pi = 3.1415929999999999;
    internal.s13 = 1;
    internal.s2 = 1;
    internal.species_2 = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(7).fill(0);
    state[0] = internal.initial_s9;
    state[1] = internal.initial_s10;
    state[2] = internal.initial_s11;
    state[3] = internal.initial_species_1;
    state[4] = internal.initial_species_3;
    state[5] = internal.initial_species_4;
    state[6] = internal.initial_species_12;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "E", "h", "Km", "kxk", "parameter_1", "parameter_10", "parameter_2", "parameter_3", "parameter_4", "parameter_5", "parameter_8", "parameter_9", "s10_init", "s11_init", "s9_init", "species_1_init", "species_12_init", "species_3_init", "species_4_init", "T", "v"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E", internal, 67000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "h", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Km", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_10", internal, 67000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_2", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_3", internal, 8.31447, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_4", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_5", internal, 24, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_8", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "parameter_9", internal, 60000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s10_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s11_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s9_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_1_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_12_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_3_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "species_4_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T", internal, 291, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v", internal, 20, -Infinity, Infinity, false);
    internal.initial_s10 = internal.s10_init;
    internal.initial_s11 = internal.s11_init;
    internal.initial_s9 = internal.s9_init;
    internal.initial_species_1 = internal.species_1_init;
    internal.initial_species_12 = internal.species_12_init;
    internal.initial_species_3 = internal.species_3_init;
    internal.initial_species_4 = internal.species_4_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const s9 = state[0];
    const s10 = state[1];
    const s11 = state[2];
    const species_1 = state[3];
    const species_3 = state[4];
    const species_4 = state[5];
    var T2 = 296 + internal.parameter_4 / 2 * Math.sin(2 * internal.pi * t / internal.parameter_5);
    dstatedt[1] = 0 - 1 * internal.default1 * (internal.v * Math.exp(internal.parameter_6 / internal.parameter_3 * (T2 - internal.T) / (internal.T * T2)) * s10) - 1 * internal.default1 * (internal.v * Math.exp(internal.parameter_6 / internal.parameter_3 * (T2 - internal.T) / (internal.T * T2)) * s10 / (internal.Km + s10)) + 1 * internal.default1 * (internal.v * Math.exp(internal.parameter_7 / internal.parameter_3 * (T2 - internal.T) / (internal.T * T2)) * s9);
    dstatedt[2] = 0 + 1 * internal.default1 * (internal.v * Math.exp(internal.parameter_6 / internal.parameter_3 * (T2 - internal.T) / (internal.T * T2)) * s10) - 1 * internal.default1 * (internal.v * Math.exp(internal.parameter_6 / internal.parameter_3 * (T2 - internal.T) / (internal.T * T2)) * s11 / (internal.Km + s11)) - 1 * internal.default1 * (internal.v * Math.exp(internal.parameter_7 / internal.parameter_3 * (T2 - internal.T) / (internal.T * T2)) * species_3 * Math.pow((s11), (internal.a)));
    dstatedt[0] = 0 + 1 * internal.default1 * (internal.v * Math.exp(internal.parameter_7 / internal.parameter_3 * (T2 - internal.T) / (internal.T * T2)) / (internal.kxk + Math.pow((s11), (internal.h)))) - 1 * internal.default1 * (internal.v * Math.exp(internal.parameter_6 / internal.parameter_3 * (T2 - internal.T) / (internal.T * T2)) * s9 / (internal.Km + s9));
    dstatedt[3] = 0 + 1 * internal.default1 * (internal.v * Math.exp(internal.E / internal.parameter_3 * (T2 - internal.T) / (internal.T * T2)) * internal.species_2) - 1 * internal.default1 * (internal.parameter_1 * Math.exp(internal.parameter_9 / internal.parameter_3 * (T2 - internal.T) / (internal.T * T2)) * species_1) - 1 * internal.default1 * (internal.v * Math.exp(internal.E / internal.parameter_3 * (T2 - internal.T) / (internal.T * T2)) * species_1 / (internal.Km + species_1)) + 1 * internal.default1 * (internal.parameter_2 * Math.exp(internal.parameter_10 / internal.parameter_3 * (T2 - internal.T) / (internal.T * T2)) * species_3);
    dstatedt[6] = 0 + 1 * internal.default1 * (internal.v * Math.exp(internal.parameter_6 / internal.parameter_3 * (T2 - internal.T) / (internal.T * T2)) * s9 / (internal.Km + s9)) + 1 * internal.default1 * (internal.v * Math.exp(internal.parameter_6 / internal.parameter_3 * (T2 - internal.T) / (internal.T * T2)) * s10 / (internal.Km + s10)) + 1 * internal.default1 * (internal.v * Math.exp(internal.parameter_6 / internal.parameter_3 * (T2 - internal.T) / (internal.T * T2)) * s11 / (internal.Km + s11)) + 1 * internal.default1 * (internal.v * Math.exp(internal.E / internal.parameter_3 * (T2 - internal.T) / (internal.T * T2)) * species_1 / (internal.Km + species_1)) + 1 * internal.default1 * (internal.v * Math.exp(internal.E / internal.parameter_3 * (T2 - internal.T) / (internal.T * T2)) * species_4 / (internal.Km + species_4)) + 1 * internal.default1 * (internal.parameter_8 * Math.exp(internal.E / internal.parameter_3 * (T2 - internal.T) / (internal.T * T2)) * species_3 / (internal.Km + species_3));
    dstatedt[4] = 0 - 1 * internal.default1 * (internal.v * Math.exp(internal.parameter_7 / internal.parameter_3 * (T2 - internal.T) / (internal.T * T2)) * species_3 * Math.pow((s11), (internal.a))) + 1 * internal.default1 * (internal.parameter_1 * Math.exp(internal.parameter_9 / internal.parameter_3 * (T2 - internal.T) / (internal.T * T2)) * species_1) - 1 * internal.default1 * (internal.parameter_2 * Math.exp(internal.parameter_10 / internal.parameter_3 * (T2 - internal.T) / (internal.T * T2)) * species_3) - 1 * internal.default1 * (internal.parameter_8 * Math.exp(internal.E / internal.parameter_3 * (T2 - internal.T) / (internal.T * T2)) * species_3 / (internal.Km + species_3));
    dstatedt[5] = 0 + 1 * internal.default1 * (internal.v * Math.exp(internal.parameter_7 / internal.parameter_3 * (T2 - internal.T) / (internal.T * T2)) * species_3 * Math.pow((s11), (internal.a))) - 1 * internal.default1 * (internal.v * Math.exp(internal.E / internal.parameter_3 * (T2 - internal.T) / (internal.T * T2)) * species_4 / (internal.Km + species_4));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "s9", "s10", "s11", "species_1", "species_3", "species_4", "species_12"];
    this.metadata.internalOrder = {a: null, default1: null, E: null, h: null, initial_s10: null, initial_s11: null, initial_s9: null, initial_species_1: null, initial_species_12: null, initial_species_3: null, initial_species_4: null, Km: null, kxk: null, parameter_1: null, parameter_10: null, parameter_2: null, parameter_3: null, parameter_4: null, parameter_5: null, parameter_6: null, parameter_7: null, parameter_8: null, parameter_9: null, pi: null, s10_init: null, s11_init: null, s13: null, s2: null, s9_init: null, species_1_init: null, species_12_init: null, species_2: null, species_3_init: null, species_4_init: null, T: null, v: null};
    this.metadata.variableOrder = {s9: null, s10: null, s11: null, species_1: null, species_3: null, species_4: null, species_12: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
