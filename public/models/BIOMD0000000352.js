export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment_0000001 = 1;
    internal.pi = 3.1415929999999999;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var aux_init = 1.1100000000000001 * Math.sin(2 * 3.1415999999999999 / 800 * (t - 200)) + 1.1100000000000001;
    internal.initial_aux = aux_init;
    var state = Array(6).fill(0);
    state[0] = internal.initial_I;
    state[1] = internal.initial_A;
    state[2] = internal.initial_D_II;
    state[3] = internal.initial_D_IA;
    state[4] = internal.initial_R;
    state[5] = internal.initial_aux;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["A_init", "B_d", "d_A", "d_I", "d_IA", "D_IA_init", "d_II", "D_II_init", "d_r", "f_A", "f_c", "gamma_I", "I_init", "k_Am", "K_aux", "k_IA", "K_IA", "k_II", "K_II", "pi_A", "pi_I", "R_init", "w_A", "w_D", "w_I"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "A_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B_d", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_A", internal, 0.0030000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_I", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_IA", internal, 0.0030000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "D_IA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_II", internal, 0.0030000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "D_II_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_r", internal, 0.0070000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f_A", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f_c", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma_I", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_Am", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_aux", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_IA", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_IA", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_II", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K_II", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pi_A", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pi_I", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "w_A", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "w_D", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "w_I", internal, 10, -Infinity, Infinity, false);
    internal.aux_basal = 1 / (internal.K_aux * (internal.gamma_I - 1));
    internal.initial_A = internal.A_init;
    internal.initial_D_IA = internal.D_IA_init;
    internal.initial_D_II = internal.D_II_init;
    internal.initial_I = internal.I_init;
    internal.initial_R = internal.R_init;
    internal.kprime_IA = internal.K_IA * internal.k_IA;
    internal.kprime_II = internal.K_II * internal.k_II;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const I = state[0];
    const A = state[1];
    const D_II = state[2];
    const D_IA = state[3];
    const R = state[4];
    const aux = state[5];
    dstatedt[5] = 0 + 0;
    dstatedt[4] = 0 - 1 * internal.d_r * R + 1 * (1 + internal.f_c / internal.B_d * A * (1 + internal.w_A * internal.f_A * A / internal.B_d)) / (1 + A / internal.B_d * (1 + internal.w_A * A / internal.B_d) + internal.w_I * A * I / (internal.K_IA * internal.B_d) + internal.w_D * D_IA / internal.B_d + internal.k_Am);
    dstatedt[1] = 0 - 1 * internal.k_IA * I * A - internal.kprime_IA * D_IA - 1 * internal.d_A * A + 1 * internal.gamma_I * internal.d_I * internal.K_aux * aux / (internal.K_aux * aux + 1) * D_IA + 1 * internal.pi_A;
    dstatedt[3] = 0 + 1 * internal.k_IA * I * A - internal.kprime_IA * D_IA - 1 * internal.d_IA * D_IA - 1 * internal.gamma_I * internal.d_I * internal.K_aux * aux / (internal.K_aux * aux + 1) * D_IA;
    dstatedt[2] = 0 + 1 * internal.k_II * I * I - internal.kprime_II * D_II - 1 * internal.d_II * D_II - 1 * internal.gamma_I * internal.d_I * internal.K_aux * aux / (internal.K_aux * aux + 1) * D_II;
    dstatedt[0] = 0 - 1 * internal.k_IA * I * A - internal.kprime_IA * D_IA - 1 * internal.k_II * I * I - internal.kprime_II * D_II - 1 * internal.k_II * I * I - internal.kprime_II * D_II - 1 * internal.gamma_I * internal.d_I * internal.K_aux * aux / (internal.K_aux * aux + 1) * I + 1 * internal.gamma_I * internal.d_I * internal.K_aux * aux / (internal.K_aux * aux + 1) * D_II + 1 * internal.pi_I * R;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "I", "A", "D_II", "D_IA", "R", "aux"];
    this.metadata.internalOrder = {A_init: null, aux_basal: null, B_d: null, compartment_0000001: null, d_A: null, d_I: null, d_IA: null, D_IA_init: null, d_II: null, D_II_init: null, d_r: null, f_A: null, f_c: null, gamma_I: null, I_init: null, initial_A: null, initial_aux: null, initial_D_IA: null, initial_D_II: null, initial_I: null, initial_R: null, k_Am: null, K_aux: null, k_IA: null, K_IA: null, k_II: null, K_II: null, kprime_IA: null, kprime_II: null, pi: null, pi_A: null, pi_I: null, R_init: null, w_A: null, w_D: null, w_I: null};
    this.metadata.variableOrder = {I: null, A: null, D_II: null, D_IA: null, R: null, aux: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
