export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Bone_marrow = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(3).fill(0);
    state[0] = internal.initial_C1;
    state[1] = internal.initial_C2;
    state[2] = internal.initial_C3;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha1", "alpha2", "alpha3", "C1_init", "C2_init", "C3_init", "kxk", "ModelValue_39", "rho1", "rho2"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha1", internal, 0.0080000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha2", internal, 0.0060000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha3", internal, 0.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C1_init", internal, 1000000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kxk", internal, 1e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ModelValue_39", internal, 1e-10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho1", internal, 0.028899999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "rho2", internal, 0.019300000000000001, -Infinity, Infinity, false);
    internal.initial_C1 = internal.C1_init;
    internal.initial_C2 = internal.C2_init;
    internal.initial_C3 = internal.C3_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const C1 = state[0];
    const C2 = state[1];
    const C3 = state[2];
    dstatedt[2] = 0 + 1 * internal.Bone_marrow * internal.alpha2 * C2 - 1 * internal.Bone_marrow * internal.alpha3 * C3;
    var s2 = 1 / (1 + internal.ModelValue_39 * (C1 + C2 + C3));
    dstatedt[0] = 0 + 1 * internal.Bone_marrow * (s2 * internal.rho1 * C1) - 1 * internal.Bone_marrow * internal.alpha1 * C1;
    dstatedt[1] = 0 + 1 * internal.Bone_marrow * internal.alpha1 * C1 + 1 * internal.Bone_marrow * (s2 * internal.rho2 * C2) - 1 * internal.Bone_marrow * internal.alpha2 * C2;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "C1", "C2", "C3"];
    this.metadata.internalOrder = {alpha1: null, alpha2: null, alpha3: null, Bone_marrow: null, C1_init: null, C2_init: null, C3_init: null, initial_C1: null, initial_C2: null, initial_C3: null, kxk: null, ModelValue_39: null, rho1: null, rho2: null};
    this.metadata.variableOrder = {C1: null, C2: null, C3: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
