export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.COMpartment = 1;
    internal.initial_H1 = 0.050000000000000003;
    internal.initial_H2 = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(2).fill(0);
    state[0] = internal.initial_H1;
    state[1] = internal.initial_H2;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A_max", "t_off", "t_on", "tau_alpha", "tau_C", "tau_I", "tau_lamda"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A_max", internal, 6.5099999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t_off", internal, 1794, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t_on", internal, 1316, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau_alpha", internal, 25.920000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau_C", internal, 23.670000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau_I", internal, 2.8199999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tau_lamda", internal, 24.039999999999999, -Infinity, Infinity, false);
    internal.alpha = Math.log(2) / internal.tau_alpha;
    internal.beta_C = Math.log(2) / internal.tau_C;
    internal.beta_I = Math.log(2) / internal.tau_I;
    internal.lamda = Math.log(2) / internal.tau_lamda;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const H1 = state[0];
    const H2 = state[1];
    var A = (((t < internal.t_off && t >= internal.t_on) ? internal.A_max * ((1 - Math.exp(- internal.lamda * (t - internal.t_on))) / (1 - Math.exp(- internal.lamda * (internal.t_off - internal.t_on)))) : ((t >= internal.t_off ? internal.A_max * Math.exp(- internal.alpha * (t - internal.t_off)) : 0))));
    dstatedt[1] = internal.beta_I * H1 - internal.beta_C * H2;
    dstatedt[0] = - (internal.beta_I * H1) + A;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "H1", "H2"];
    this.metadata.internalOrder = {A_max: null, alpha: null, beta_C: null, beta_I: null, COMpartment: null, initial_H1: null, initial_H2: null, lamda: null, t_off: null, t_on: null, tau_alpha: null, tau_C: null, tau_I: null, tau_lamda: null};
    this.metadata.variableOrder = {H1: null, H2: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
