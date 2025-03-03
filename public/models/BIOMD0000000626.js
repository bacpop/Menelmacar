export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.pi = 3.1415929999999999;
    internal.V = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(6).fill(0);
    state[0] = internal.initial_Rim11;
    state[1] = internal.initial_pUme6;
    state[2] = internal.initial_pSok2;
    state[3] = internal.initial_Ime1;
    state[4] = internal.initial_pIme1;
    state[5] = internal.initial_Ime2;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["c_1", "c_2", "c_3", "cime_1", "csok_2", "dime_1", "dime_2", "dpime_1", "dprimeime_1", "Ime1_init", "Ime2_init", "pime_1", "pIme1_init", "prim_11", "psok_2", "pSok2_init", "pume_6", "pUme6_init", "Rim11_init", "sime_1", "sime_2", "sprimeime_2", "urim_11", "usok_2", "uume_6"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "c_1", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c_2", internal, 1.3999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c_3", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "cime_1", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "csok_2", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dime_1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dime_2", internal, 8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dpime_1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dprimeime_1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ime1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ime2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pime_1", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pIme1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "prim_11", internal, 0.01, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "psok_2", internal, 0.69999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pSok2_init", internal, 0.99999999999997102, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pume_6", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pUme6_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rim11_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sime_1", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sime_2", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "sprimeime_2", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "urim_11", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "usok_2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "uume_6", internal, 0.01, -Infinity, Infinity, false);
    internal.initial_Ime1 = internal.Ime1_init;
    internal.initial_Ime2 = internal.Ime2_init;
    internal.initial_pIme1 = internal.pIme1_init;
    internal.initial_pSok2 = internal.pSok2_init;
    internal.initial_pUme6 = internal.pUme6_init;
    internal.initial_Rim11 = internal.Rim11_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Rim11 = state[0];
    const pUme6 = state[1];
    const pSok2 = state[2];
    const Ime1 = state[3];
    const pIme1 = state[4];
    const Ime2 = state[5];
    dstatedt[3] = 0 + 1 * internal.V * (internal.cime_1 / (internal.cime_1 + pSok2) * internal.sime_1 - (internal.pime_1 * Ime1 * Rim11 + internal.dime_1 * Ime1 + internal.dprimeime_1 * Ime2 * (Ime1 / (internal.c_1 + Ime1))));
    dstatedt[5] = 0 + 1 * internal.V * (internal.sime_2 * pUme6 * pIme1 + internal.sprimeime_2 * Math.pow((Ime2), (5)) / (Math.pow((internal.c_2), (5)) + Math.pow((Ime2), (5))) - internal.dime_2 * Ime2 / (internal.c_3 + Ime2));
    dstatedt[4] = 0 + 1 * internal.V * (internal.pime_1 * Ime1 * Rim11 - internal.dpime_1 * pIme1);
    dstatedt[2] = 0 + 1 * internal.V * (internal.csok_2 / (internal.csok_2 + Ime1) * (1 - pSok2) * internal.psok_2 - internal.usok_2 * pSok2);
    dstatedt[1] = 0 + 1 * internal.V * ((1 - pUme6) * internal.pume_6 * Rim11 - internal.uume_6 * pUme6);
    dstatedt[0] = 0 + 1 * internal.V * (internal.urim_11 * (1 - Rim11) - internal.prim_11 * Rim11);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Rim11", "pUme6", "pSok2", "Ime1", "pIme1", "Ime2"];
    this.metadata.internalOrder = {c_1: null, c_2: null, c_3: null, cime_1: null, csok_2: null, dime_1: null, dime_2: null, dpime_1: null, dprimeime_1: null, Ime1_init: null, Ime2_init: null, initial_Ime1: null, initial_Ime2: null, initial_pIme1: null, initial_pSok2: null, initial_pUme6: null, initial_Rim11: null, pi: null, pime_1: null, pIme1_init: null, prim_11: null, psok_2: null, pSok2_init: null, pume_6: null, pUme6_init: null, Rim11_init: null, sime_1: null, sime_2: null, sprimeime_2: null, urim_11: null, usok_2: null, uume_6: null, V: null};
    this.metadata.variableOrder = {Rim11: null, pUme6: null, pSok2: null, Ime1: null, pIme1: null, Ime2: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
