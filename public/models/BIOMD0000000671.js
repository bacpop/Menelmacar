export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.tumour = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(7).fill(0);
    state[0] = internal.initial_V_exp;
    state[1] = internal.initial_V_mend;
    state[2] = internal.initial_V_log;
    state[3] = internal.initial_V_lin;
    state[4] = internal.initial_V_surf;
    state[5] = internal.initial_V_gomp;
    state[6] = internal.initial_V_bert;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a_bert", "a_exp", "a_gomp", "a_lin", "a_log", "a_mend", "a_surf", "b_bert", "b_gomp", "b_lin", "b_log", "b_mend", "b_surf", "c_gomp", "V_bert_init", "V_exp_init", "V_gomp_init", "V_lin_init", "V_log_init", "V_mend_init", "V_surf_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a_bert", internal, 0.2344, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_exp", internal, 0.0246, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_gomp", internal, 0.091899999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_lin", internal, 132, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_log", internal, 0.029499999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_mend", internal, 0.105, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "a_surf", internal, 0.29099999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_bert", internal, 3.4599999999999998e-19, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_gomp", internal, 15500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_lin", internal, 4300, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_log", internal, 6920, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_mend", internal, 0.78500000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b_surf", internal, 708, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c_gomp", internal, 10700, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_bert_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_exp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_gomp_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_lin_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_log_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_mend_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V_surf_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_V_bert = internal.V_bert_init;
    internal.initial_V_exp = internal.V_exp_init;
    internal.initial_V_gomp = internal.V_gomp_init;
    internal.initial_V_lin = internal.V_lin_init;
    internal.initial_V_log = internal.V_log_init;
    internal.initial_V_mend = internal.V_mend_init;
    internal.initial_V_surf = internal.V_surf_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const V_exp = state[0];
    const V_mend = state[1];
    const V_log = state[2];
    const V_lin = state[3];
    const V_surf = state[4];
    const V_gomp = state[5];
    const V_bert = state[6];
    dstatedt[6] = 0 + internal.a_bert * Math.pow((V_bert), (2 / 3)) - internal.b_bert * V_bert;
    dstatedt[0] = 0 + internal.a_exp * V_exp;
    dstatedt[5] = 0 + internal.a_gomp * V_gomp * Math.log(internal.b_gomp / (V_gomp + internal.c_gomp));
    dstatedt[3] = 0 + internal.a_lin * V_lin / (V_lin + internal.b_lin);
    dstatedt[2] = 0 + internal.a_log * V_log * (1 - V_log / internal.b_log);
    dstatedt[1] = 0 + internal.a_mend * Math.pow((V_mend), (internal.b_mend));
    dstatedt[4] = 0 + internal.a_surf * V_surf / Math.pow((V_surf + internal.b_surf), (1 / 3));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "V_exp", "V_mend", "V_log", "V_lin", "V_surf", "V_gomp", "V_bert"];
    this.metadata.internalOrder = {a_bert: null, a_exp: null, a_gomp: null, a_lin: null, a_log: null, a_mend: null, a_surf: null, b_bert: null, b_gomp: null, b_lin: null, b_log: null, b_mend: null, b_surf: null, c_gomp: null, initial_V_bert: null, initial_V_exp: null, initial_V_gomp: null, initial_V_lin: null, initial_V_log: null, initial_V_mend: null, initial_V_surf: null, tumour: null, V_bert_init: null, V_exp_init: null, V_gomp_init: null, V_lin_init: null, V_log_init: null, V_mend_init: null, V_surf_init: null};
    this.metadata.variableOrder = {V_exp: null, V_mend: null, V_log: null, V_lin: null, V_surf: null, V_gomp: null, V_bert: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
