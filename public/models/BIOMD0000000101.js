export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Endosome = 1;
    internal.PM = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(6).fill(0);
    state[0] = internal.initial_RI;
    state[1] = internal.initial_RII;
    state[2] = internal.initial_lRIRII;
    state[3] = internal.initial_lRIRII_endo;
    state[4] = internal.initial_RI_endo;
    state[5] = internal.initial_RII_endo;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "ka", "kcd", "ki", "klid", "kr", "lRIRII_endo_init", "lRIRII_init", "pRI", "pRII", "RI_endo_init", "RI_init", "RII_endo_init", "RII_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ka", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kcd", internal, 0.0277777778, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ki", internal, 0.33333333333330001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "klid", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kr", internal, 0.033333333333333298, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lRIRII_endo_init", internal, 40, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lRIRII_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pRI", internal, 8, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "pRII", internal, 4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RI_endo_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RI_init", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RII_endo_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "RII_init", internal, 20, -Infinity, Infinity, false);
    internal.initial_lRIRII = internal.lRIRII_init;
    internal.initial_lRIRII_endo = internal.lRIRII_endo_init;
    internal.initial_RI = internal.RI_init;
    internal.initial_RI_endo = internal.RI_endo_init;
    internal.initial_RII = internal.RII_init;
    internal.initial_RII_endo = internal.RII_endo_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const RI = state[0];
    const RII = state[1];
    const lRIRII = state[2];
    const lRIRII_endo = state[3];
    const RI_endo = state[4];
    const RII_endo = state[5];
    dstatedt[3] = 0 + 1 * internal.ki * lRIRII - 1 * internal.kr * lRIRII_endo;
    dstatedt[4] = 0 + 1 * internal.ki * RI - 1 * internal.kr * RI_endo;
    dstatedt[5] = 0 + 1 * internal.ki * RII - 1 * internal.kr * RII_endo;
    var ligand = (t >= 2500 ? 0.01 : 3.0000000000000001e-05);
    dstatedt[2] = 0 + 1 * internal.ka * ligand * RI * RII - 1 * internal.kcd * lRIRII - 1 * internal.klid * lRIRII - 1 * internal.ki * lRIRII;
    dstatedt[0] = 0 - 1 * internal.ka * ligand * RI * RII + 1 * internal.pRI - 1 * internal.kcd * RI - 1 * internal.ki * RI + 1 * internal.kr * RI_endo + 1 * internal.kr * lRIRII_endo;
    dstatedt[1] = 0 - 1 * internal.ka * ligand * RI * RII + 1 * internal.kr * lRIRII_endo + 1 * internal.pRII - 1 * internal.kcd * RII - 1 * internal.ki * RII + 1 * internal.kr * RII_endo;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "RI", "RII", "lRIRII", "lRIRII_endo", "RI_endo", "RII_endo"];
    this.metadata.internalOrder = {alpha: null, Endosome: null, initial_lRIRII: null, initial_lRIRII_endo: null, initial_RI: null, initial_RI_endo: null, initial_RII: null, initial_RII_endo: null, ka: null, kcd: null, ki: null, klid: null, kr: null, lRIRII_endo_init: null, lRIRII_init: null, PM: null, pRI: null, pRII: null, RI_endo_init: null, RI_init: null, RII_endo_init: null, RII_init: null};
    this.metadata.variableOrder = {RI: null, RII: null, lRIRII: null, lRIRII_endo: null, RI_endo: null, RII_endo: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
