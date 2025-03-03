export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(8).fill(0);
    state[0] = internal.initial_R1;
    state[1] = internal.initial_P1;
    state[2] = internal.initial_P1_prime;
    state[3] = internal.initial_R2;
    state[4] = internal.initial_P2;
    state[5] = internal.initial_P2_prime;
    state[6] = internal.initial_P3_prime;
    state[7] = internal.initial_P4_prime;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["d_P1", "d_P1_prime", "d_P2", "d_P2_prime", "d_P3_prime", "d_P4_prime", "d_R1", "d_R2", "n", "P1_init", "P1_prime_init", "P2_init", "P2_prime_init", "P3_prime_init", "P4_prime_init", "R1_init", "R2_init", "s1", "s2", "s3", "sP1_prime_P1", "sP1R1", "sP2_prime_P2", "sP2R2", "sP3_prime_P2_prime", "sP4_prime_P1_prime"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "d_P1", internal, 0.22367000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_P1_prime", internal, 0.37047999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_P2", internal, 0.22367000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_P2_prime", internal, 0.37047999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_P3_prime", internal, 0.37047999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_P4_prime", internal, 0.37047999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_R1", internal, 0.23521, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "d_R2", internal, 0.23521, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n", internal, 9, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P1_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P1_prime_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P2_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P2_prime_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P3_prime_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "P4_prime_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R1_init", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "R2_init", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s1", internal, 0.40000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s2", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "s3", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sP1_prime_P1", internal, 0.28687000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sP1R1", internal, 0.47305000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sP2_prime_P2", internal, 0.28687000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sP2R2", internal, 0.47305000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sP3_prime_P2_prime", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sP4_prime_P1_prime", internal, 0.5, -Infinity, Infinity, false);
    internal.initial_P1 = internal.P1_init;
    internal.initial_P1_prime = internal.P1_prime_init;
    internal.initial_P2 = internal.P2_init;
    internal.initial_P2_prime = internal.P2_prime_init;
    internal.initial_P3_prime = internal.P3_prime_init;
    internal.initial_P4_prime = internal.P4_prime_init;
    internal.initial_R1 = internal.R1_init;
    internal.initial_R2 = internal.R2_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const R1 = state[0];
    const P1 = state[1];
    const P1_prime = state[2];
    const R2 = state[3];
    const P2 = state[4];
    const P2_prime = state[5];
    const P3_prime = state[6];
    const P4_prime = state[7];
    dstatedt[1] = 0 + 1 * internal.sP1R1 * R1 - 1 * internal.d_P1 * P1;
    dstatedt[2] = 0 + 1 * internal.sP1_prime_P1 * P1 + 1 * internal.s1 / (1 + Math.pow((P2_prime), (internal.n))) + 1 * internal.s3 / (1 + Math.pow((P3_prime), (internal.n))) - 1 * internal.d_P1_prime * P1_prime;
    dstatedt[4] = 0 + 1 * internal.sP2R2 * R2 - 1 * internal.d_P2 * P2;
    dstatedt[5] = 0 + 1 * internal.sP2_prime_P2 * P2 + 1 * internal.s2 / (1 + Math.pow((P1_prime), (internal.n))) - 1 * internal.d_P2_prime * P2_prime + 1 * internal.s3 / (1 + Math.pow((P4_prime), (internal.n)));
    dstatedt[6] = 0 + 1 * internal.sP3_prime_P2_prime * (Math.pow((P2_prime), (internal.n)) / (1 + Math.pow((P2_prime), (internal.n)))) - 1 * internal.d_P3_prime * P3_prime;
    dstatedt[7] = 0 + 1 * internal.sP4_prime_P1_prime * (Math.pow((P1_prime), (internal.n)) / (1 + Math.pow((P1_prime), (internal.n)))) - 1 * internal.d_P4_prime * P4_prime;
    var i1 = (((t >= 50 && t <= 100) ? 1 : 0));
    var i2 = (((t >= 175 && t <= 225) ? 1 : 0));
    dstatedt[0] = 0 + 1 * i1 - 1 * internal.d_R1 * R1;
    dstatedt[3] = 0 + 1 * i2 - 1 * internal.d_R2 * R2;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "R1", "P1", "P1_prime", "R2", "P2", "P2_prime", "P3_prime", "P4_prime"];
    this.metadata.internalOrder = {compartment: null, d_P1: null, d_P1_prime: null, d_P2: null, d_P2_prime: null, d_P3_prime: null, d_P4_prime: null, d_R1: null, d_R2: null, initial_P1: null, initial_P1_prime: null, initial_P2: null, initial_P2_prime: null, initial_P3_prime: null, initial_P4_prime: null, initial_R1: null, initial_R2: null, n: null, P1_init: null, P1_prime_init: null, P2_init: null, P2_prime_init: null, P3_prime_init: null, P4_prime_init: null, R1_init: null, R2_init: null, s1: null, s2: null, s3: null, sP1_prime_P1: null, sP1R1: null, sP2_prime_P2: null, sP2R2: null, sP3_prime_P2_prime: null, sP4_prime_P1_prime: null};
    this.metadata.variableOrder = {R1: null, P1: null, P1_prime: null, R2: null, P2: null, P2_prime: null, P3_prime: null, P4_prime: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
