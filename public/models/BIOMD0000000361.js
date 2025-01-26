export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.compartment = 1;
    internal.k1 = 5;
    internal.k2 = 770;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(8).fill(0);
    state[0] = internal.initial_VIIa_TF;
    state[1] = internal.initial_X;
    state[2] = internal.initial_VIIa_TF_X;
    state[3] = internal.initial_VIIa_TF_Xa;
    state[4] = internal.initial_Xa;
    state[5] = internal.initial_TFPI;
    state[6] = internal.initial_Xa_TFPI;
    state[7] = internal.initial_Xa_TFPI_VIIa_TF;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["TFPI_init", "VIIa_TF_init", "VIIa_TF_X_init", "VIIa_TF_Xa_init", "X_init", "Xa_init", "Xa_TFPI_init", "Xa_TFPI_VIIa_TF_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "TFPI_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VIIa_TF_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VIIa_TF_X_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "VIIa_TF_Xa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "X_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Xa_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Xa_TFPI_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Xa_TFPI_VIIa_TF_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_TFPI = internal.TFPI_init;
    internal.initial_VIIa_TF = internal.VIIa_TF_init;
    internal.initial_VIIa_TF_X = internal.VIIa_TF_X_init;
    internal.initial_VIIa_TF_Xa = internal.VIIa_TF_Xa_init;
    internal.initial_X = internal.X_init;
    internal.initial_Xa = internal.Xa_init;
    internal.initial_Xa_TFPI = internal.Xa_TFPI_init;
    internal.initial_Xa_TFPI_VIIa_TF = internal.Xa_TFPI_VIIa_TF_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const VIIa_TF = state[0];
    const X = state[1];
    const VIIa_TF_X = state[2];
    const VIIa_TF_Xa = state[3];
    const Xa = state[4];
    const TFPI = state[5];
    const Xa_TFPI = state[6];
    const Xa_TFPI_VIIa_TF = state[7];
    dstatedt[5] = 0 - 1 * internal.compartment * (internal.k1 * Xa * TFPI - internal.k2 * Xa_TFPI);
    dstatedt[0] = 0 - 1 * internal.compartment * (internal.k1 * X * VIIa_TF - internal.k2 * VIIa_TF_X) + 1 * internal.compartment * (internal.k1 * VIIa_TF_Xa - internal.k2 * Xa * VIIa_TF) - 1 * internal.compartment * (internal.k1 * VIIa_TF * Xa_TFPI - internal.k2 * Xa_TFPI_VIIa_TF);
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.k1 * X * VIIa_TF - internal.k2 * VIIa_TF_X) - 1 * internal.compartment * internal.k1 * VIIa_TF_X;
    dstatedt[3] = 0 + 1 * internal.compartment * internal.k1 * VIIa_TF_X - 1 * internal.compartment * (internal.k1 * VIIa_TF_Xa - internal.k2 * Xa * VIIa_TF);
    dstatedt[1] = 0 - 1 * internal.compartment * (internal.k1 * X * VIIa_TF - internal.k2 * VIIa_TF_X);
    dstatedt[4] = 0 + 1 * internal.compartment * (internal.k1 * VIIa_TF_Xa - internal.k2 * Xa * VIIa_TF) - 1 * internal.compartment * (internal.k1 * Xa * TFPI - internal.k2 * Xa_TFPI);
    dstatedt[6] = 0 + 1 * internal.compartment * (internal.k1 * Xa * TFPI - internal.k2 * Xa_TFPI) - 1 * internal.compartment * (internal.k1 * VIIa_TF * Xa_TFPI - internal.k2 * Xa_TFPI_VIIa_TF);
    dstatedt[7] = 0 + 1 * internal.compartment * (internal.k1 * VIIa_TF * Xa_TFPI - internal.k2 * Xa_TFPI_VIIa_TF);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "VIIa_TF", "X", "VIIa_TF_X", "VIIa_TF_Xa", "Xa", "TFPI", "Xa_TFPI", "Xa_TFPI_VIIa_TF"];
    this.metadata.internalOrder = {compartment: null, initial_TFPI: null, initial_VIIa_TF: null, initial_VIIa_TF_X: null, initial_VIIa_TF_Xa: null, initial_X: null, initial_Xa: null, initial_Xa_TFPI: null, initial_Xa_TFPI_VIIa_TF: null, k1: null, k2: null, TFPI_init: null, VIIa_TF_init: null, VIIa_TF_X_init: null, VIIa_TF_Xa_init: null, X_init: null, Xa_init: null, Xa_TFPI_init: null, Xa_TFPI_VIIa_TF_init: null};
    this.metadata.variableOrder = {VIIa_TF: null, X: null, VIIa_TF_X: null, VIIa_TF_Xa: null, Xa: null, TFPI: null, Xa_TFPI: null, Xa_TFPI_VIIa_TF: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
