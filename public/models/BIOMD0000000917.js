export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.COMpartment = 1;
    internal.pi = 3.1415929999999999;
    internal.omega = 2 * internal.pi / 24;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_Monoaminergic__MA__voltage;
    state[1] = internal.initial_Ventrolateral_preopticarea__VLPO__voltage;
    state[2] = internal.initial_Somnogen_level_H;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["c0", "chi", "Monoaminergic__MA__voltage_init", "mu", "Qmax", "sigma", "Somnogen_level_H_init", "tau_m", "tau_v", "theta", "v_maQao", "v_mv", "v_vc", "v_vh", "v_vm", "Vao", "Ventrolateral_preopticarea__VLPO__voltage_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "c0", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "chi", internal, 10.800000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Monoaminergic__MA__voltage_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu", internal, 3.6000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Qmax", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sigma", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Somnogen_level_H_init", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau_m", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau_v", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "theta", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v_maQao", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v_mv", internal, - 1.8999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v_vc", internal, - 6.2999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v_vh", internal, 0.19, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v_vm", internal, - 1.8999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vao", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ventrolateral_preopticarea__VLPO__voltage_init", internal, - 10, -Infinity, Infinity, false);
    internal.initial_Monoaminergic__MA__voltage = internal.Monoaminergic__MA__voltage_init;
    internal.initial_Somnogen_level_H = internal.Somnogen_level_H_init;
    internal.initial_Ventrolateral_preopticarea__VLPO__voltage = internal.Ventrolateral_preopticarea__VLPO__voltage_init;
    internal.Va = internal.Vao;
    internal.Qa = internal.Qmax / (1 + Math.exp(- (internal.Va - internal.theta) / internal.sigma));
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Monoaminergic__MA__voltage = state[0];
    const Ventrolateral_preopticarea__VLPO__voltage = state[1];
    const Somnogen_level_H = state[2];
    var Qm = internal.Qmax / (1 + Math.exp(- (Monoaminergic__MA__voltage - internal.theta) / internal.sigma));
    var Qv = internal.Qmax / (1 + Math.exp(- (Ventrolateral_preopticarea__VLPO__voltage - internal.theta) / internal.sigma));
    var C = internal.c0 + Math.cos(internal.omega * t);
    dstatedt[0] = 0 + 1 * internal.COMpartment * ((internal.v_maQao + internal.v_mv * Qv - Monoaminergic__MA__voltage) / (internal.tau_m / 3600));
    dstatedt[2] = 0 + 1 * internal.COMpartment * ((internal.mu * Qm - Somnogen_level_H) / internal.chi);
    var D = internal.v_vc * C + internal.v_vh * Somnogen_level_H;
    dstatedt[1] = 0 + 1 * internal.COMpartment * ((internal.v_vm * Qm + D - Ventrolateral_preopticarea__VLPO__voltage) / (internal.tau_v / 3600));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Monoaminergic__MA__voltage", "Ventrolateral_preopticarea__VLPO__voltage", "Somnogen_level_H"];
    this.metadata.internalOrder = {c0: null, chi: null, COMpartment: null, initial_Monoaminergic__MA__voltage: null, initial_Somnogen_level_H: null, initial_Ventrolateral_preopticarea__VLPO__voltage: null, Monoaminergic__MA__voltage_init: null, mu: null, omega: null, pi: null, Qa: null, Qmax: null, sigma: null, Somnogen_level_H_init: null, tau_m: null, tau_v: null, theta: null, v_maQao: null, v_mv: null, v_vc: null, v_vh: null, v_vm: null, Va: null, Vao: null, Ventrolateral_preopticarea__VLPO__voltage_init: null};
    this.metadata.variableOrder = {Monoaminergic__MA__voltage: null, Ventrolateral_preopticarea__VLPO__voltage: null, Somnogen_level_H: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
