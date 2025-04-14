export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.COMpartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(5).fill(0);
    state[0] = internal.initial_CML;
    state[1] = internal.initial_T_cell_naive;
    state[2] = internal.initial_T_cell_effector;
    state[3] = internal.initial_Source;
    state[4] = internal.initial_Sink;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha_e", "alpha_n", "Cmax", "CML_init", "dc", "de", "dn", "eta", "gamma_c", "gamma_e", "kn", "rc", "Sink_init", "sn", "Source_init", "T_cell_effector_init", "T_cell_naive_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha_e", internal, 0.53000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha_n", internal, 0.56000000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Cmax", internal, 190000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "CML_init", internal, 10000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dc", internal, 0.68000000000000005, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "de", internal, 0.12, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dn", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "eta", internal, 43, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_c", internal, 0.047, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_e", internal, 0.0077000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kn", internal, 0.063, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rc", internal, 0.23000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Sink_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sn", internal, 0.070999999999999994, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Source_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_cell_effector_init", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "T_cell_naive_init", internal, 1510, -Infinity, Infinity, false);
    internal.initial_CML = internal.CML_init;
    internal.initial_Sink = internal.Sink_init;
    internal.initial_Source = internal.Source_init;
    internal.initial_T_cell_effector = internal.T_cell_effector_init;
    internal.initial_T_cell_naive = internal.T_cell_naive_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const CML = state[0];
    const T_cell_naive = state[1];
    const T_cell_effector = state[2];
    const Source = state[3];
    dstatedt[4] = 0;
    dstatedt[3] = 0;
    dstatedt[0] = 0 + 1 * internal.COMpartment * (internal.rc * CML * Math.log(internal.Cmax / CML)) - 1 * internal.COMpartment * (internal.gamma_c * T_cell_effector * CML) - 1 * internal.COMpartment * internal.dc * CML;
    dstatedt[2] = 0 + 1 * internal.COMpartment * (internal.alpha_e * T_cell_effector * (CML / (CML + internal.eta))) - 1 * internal.COMpartment * internal.de * T_cell_effector - 1 * internal.COMpartment * (internal.gamma_e * CML * T_cell_effector) + 1 * internal.COMpartment * (internal.alpha_n * internal.kn * T_cell_naive * (CML / (CML + internal.eta)));
    dstatedt[1] = 0 + 1 * internal.COMpartment * internal.sn * Source - 1 * internal.COMpartment * internal.dn * T_cell_naive - 1 * internal.COMpartment * (internal.kn * T_cell_naive * (CML / (CML + internal.eta)));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "CML", "T_cell_naive", "T_cell_effector", "Source", "Sink"];
    this.metadata.internalOrder = {alpha_e: null, alpha_n: null, Cmax: null, CML_init: null, COMpartment: null, dc: null, de: null, dn: null, eta: null, gamma_c: null, gamma_e: null, initial_CML: null, initial_Sink: null, initial_Source: null, initial_T_cell_effector: null, initial_T_cell_naive: null, kn: null, rc: null, Sink_init: null, sn: null, Source_init: null, T_cell_effector_init: null, T_cell_naive_init: null};
    this.metadata.variableOrder = {CML: null, T_cell_naive: null, T_cell_effector: null, Source: null, Sink: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
