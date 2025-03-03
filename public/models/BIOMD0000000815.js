export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.a = 1 / 16;
    internal.b = 1 / 8;
    internal.c = 1 / 32;
    internal.compartment = 1;
    internal.d = 1 / 32;
    internal.e = 275 / 3200;
    internal.f = 1 / 32;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(2).fill(0);
    state[0] = internal.initial_x_Cancer;
    state[1] = internal.initial_y_Immune_System;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["x_Cancer_init", "y_Immune_System_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "x_Cancer_init", internal, 0.00050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y_Immune_System_init", internal, 0.01, -Infinity, Infinity, false);
    internal.initial_x_Cancer = internal.x_Cancer_init;
    internal.initial_y_Immune_System = internal.y_Immune_System_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const x_Cancer = state[0];
    const y_Immune_System = state[1];
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.a * x_Cancer) - 1 * internal.compartment * (internal.b * x_Cancer * y_Immune_System) - 1 * internal.compartment * (internal.c * Math.pow((x_Cancer), (2)));
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.d * y_Immune_System) - 1 * internal.compartment * (internal.e * x_Cancer * y_Immune_System) - 1 * internal.compartment * (internal.f * Math.pow((y_Immune_System), (2)));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "x_Cancer", "y_Immune_System"];
    this.metadata.internalOrder = {a: null, b: null, c: null, compartment: null, d: null, e: null, f: null, initial_x_Cancer: null, initial_y_Immune_System: null, x_Cancer_init: null, y_Immune_System_init: null};
    this.metadata.variableOrder = {x_Cancer: null, y_Immune_System: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
