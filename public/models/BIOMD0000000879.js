export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.Infusion_Duration = 1 / 8;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_N;
    state[1] = internal.initial_I;
    state[2] = internal.initial_Q;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "b", "c_1", "c_2", "d", "delta", "gamma", "I_init", "Immunotherapy_Input", "Infusion_Dose", "kxk", "lambda", "mu", "N_init", "Q_init", "r", "rho", "s_0"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 2000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 5000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c_1", internal, 5.0000000000000002e-11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c_2", internal, 1e-13, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta", internal, 10000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "gamma", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "I_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Immunotherapy_Input", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Infusion_Dose", internal, 1080, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 1000000000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lambda", internal, 4.1600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mu", internal, 8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Q_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "r", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho", internal, 9.9999999999999998e-13, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s_0", internal, 700000, -Infinity, Infinity, false);
    internal.Infusion_Rate = internal.Infusion_Dose / internal.Infusion_Duration;
    internal.initial_I = internal.I_init;
    internal.initial_N = internal.N_init;
    internal.initial_Q = internal.Q_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const N = state[0];
    const I = state[1];
    const Q = state[2];
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.s_0) - 1 * internal.compartment * internal.d * I + 1 * internal.compartment * (internal.rho * N * I / (internal.gamma + N)) - 1 * internal.compartment * (internal.c_2 * N * I) - 1 * internal.compartment * (internal.delta * I * Q / (internal.b + Q)) + 1 * internal.compartment * (internal.Immunotherapy_Input);
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.r * N * (1 - N / internal.kxk)) - 1 * internal.compartment * (internal.c_1 * N * I) - 1 * internal.compartment * (internal.mu * N * Q / (internal.a + Q));
    var Chemotherapy_Input = ((t <= internal.Infusion_Duration ? internal.Infusion_Rate : (((t >= 21 && t <= 21 + internal.Infusion_Duration) ? internal.Infusion_Rate : (((t >= 42 && t <= 42 + internal.Infusion_Duration) ? internal.Infusion_Rate : (((t >= 63 && t <= 63 + internal.Infusion_Duration) ? internal.Infusion_Rate : (((t >= 84 && t <= 84 + internal.Infusion_Duration) ? internal.Infusion_Rate : (((t >= 105 && t <= 105 + internal.Infusion_Duration) ? internal.Infusion_Rate : (((t >= 126 && t <= 126 + internal.Infusion_Duration) ? internal.Infusion_Rate : 0))))))))))))));
    dstatedt[2] = 0 - 1 * internal.compartment * internal.lambda * Q + 1 * internal.compartment * (Chemotherapy_Input);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "N", "I", "Q"];
    this.metadata.internalOrder = {a: null, b: null, c_1: null, c_2: null, compartment: null, d: null, delta: null, gamma: null, I_init: null, Immunotherapy_Input: null, Infusion_Dose: null, Infusion_Duration: null, Infusion_Rate: null, initial_I: null, initial_N: null, initial_Q: null, kxk: null, lambda: null, mu: null, N_init: null, Q_init: null, r: null, rho: null, s_0: null};
    this.metadata.variableOrder = {N: null, I: null, Q: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
