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
    var state = Array(4).fill(0);
    state[0] = internal.initial_M;
    state[1] = internal.initial_Tc;
    state[2] = internal.initial_N;
    state[3] = internal.initial_Tr;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["acm", "acn", "acnm", "amc", "amm", "amr", "anc", "anm", "arm", "bcm", "bcn", "bmc", "bmm", "bmr", "bnc", "bnm", "brm", "dc", "dm", "dn", "dr", "kc", "km", "kn", "kr", "M_init", "N_init", "rc", "rm", "rn", "rr", "sm", "sn", "Tc_init", "Tr_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "acm", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "acn", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "acnm", internal, 8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "amc", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "amm", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "amr", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "anc", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "anm", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "arm", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "bcm", internal, 375, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "bcn", internal, 375, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "bmc", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "bmm", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "bmr", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "bnc", internal, 150, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "bnm", internal, 150, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "brm", internal, 25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dc", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dm", internal, 0.002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dn", internal, 0.025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dr", internal, 0.075700000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kc", internal, 800, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "km", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kn", internal, 450, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kr", internal, 80, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "M_init", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "N_init", internal, 227, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rc", internal, 0.012999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rm", internal, 0.017500000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rn", internal, 0.040000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rr", internal, 0.083099999999999993, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sm", internal, 0.001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sn", internal, 0.029999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tc_init", internal, 464, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tr_init", internal, 42, -Infinity, Infinity, false);
    internal.initial_M = internal.M_init;
    internal.initial_N = internal.N_init;
    internal.initial_Tc = internal.Tc_init;
    internal.initial_Tr = internal.Tr_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const M = state[0];
    const Tc = state[1];
    const N = state[2];
    const Tr = state[3];
    dstatedt[0] = 0 - 1 * internal.compartment * (M * (internal.anm * N / (internal.bnm + N) + internal.acm * Tc / (internal.bcm + Tc) + internal.acnm * N * Tc / ((internal.bnm + N) * (internal.bcm + Tc))) * (1 - internal.amm * M / (internal.bmm + M) - internal.arm * Tr / (internal.brm + Tr)) * internal.dm) - 1 * internal.compartment * (M * internal.dm) + 1 * internal.compartment * (internal.sm) + 1 * internal.compartment * (internal.rm * (1 - M / internal.km) * M);
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.sn) + 1 * internal.compartment * (internal.rn * (1 - N / internal.kn) * N) + 1 * internal.compartment * (internal.rn * (1 - N / internal.kn) * internal.acn * Tc / (internal.bcn + Tc) * N) - 1 * internal.compartment * (internal.dn * N);
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.rc * (1 - Tc / internal.kc) * Tc) - 1 * internal.compartment * (internal.dc * Tc) + 1 * internal.compartment * (internal.rc * (1 - Tc / internal.kc) * (internal.amc * M / (internal.bmc + M) + internal.anc * M / (internal.bnc + M)) * Tc);
    dstatedt[3] = 0 - 1 * internal.compartment * (internal.dr * Tr) + 1 * internal.compartment * (internal.rr * (1 - Tr / internal.kr) * Tr) + 1 * internal.compartment * (internal.rr * (1 - Tr / internal.kr) * internal.amr * M / (internal.bmr + M) * Tr);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "M", "Tc", "N", "Tr"];
    this.metadata.internalOrder = {acm: null, acn: null, acnm: null, amc: null, amm: null, amr: null, anc: null, anm: null, arm: null, bcm: null, bcn: null, bmc: null, bmm: null, bmr: null, bnc: null, bnm: null, brm: null, compartment: null, dc: null, dm: null, dn: null, dr: null, initial_M: null, initial_N: null, initial_Tc: null, initial_Tr: null, kc: null, km: null, kn: null, kr: null, M_init: null, N_init: null, rc: null, rm: null, rn: null, rr: null, sm: null, sn: null, Tc_init: null, Tr_init: null};
    this.metadata.variableOrder = {M: null, Tc: null, N: null, Tr: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
