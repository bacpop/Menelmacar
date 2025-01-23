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
    var state = Array(2).fill(0);
    state[0] = internal.initial_x_Normal_Hematopoietic_Stem_Cell;
    state[1] = internal.initial_y_Leukemic_Cell;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a", "A", "b", "B", "c", "C", "x_Normal_Hematopoietic_Stem_Cell_init", "y_Leukemic_Cell_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "A", internal, 0.29999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "b", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "B", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x_Normal_Hematopoietic_Stem_Cell_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "y_Leukemic_Cell_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_x_Normal_Hematopoietic_Stem_Cell = internal.x_Normal_Hematopoietic_Stem_Cell_init;
    internal.initial_y_Leukemic_Cell = internal.y_Leukemic_Cell_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const x_Normal_Hematopoietic_Stem_Cell = state[0];
    const y_Leukemic_Cell = state[1];
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.a * x_Normal_Hematopoietic_Stem_Cell / (1 + internal.b * (x_Normal_Hematopoietic_Stem_Cell + y_Leukemic_Cell))) - 1 * internal.compartment * internal.c * x_Normal_Hematopoietic_Stem_Cell;
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.A * y_Leukemic_Cell / (1 + internal.B * (x_Normal_Hematopoietic_Stem_Cell + y_Leukemic_Cell))) - 1 * internal.compartment * internal.C * y_Leukemic_Cell;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "x_Normal_Hematopoietic_Stem_Cell", "y_Leukemic_Cell"];
    this.metadata.internalOrder = {a: null, A: null, b: null, B: null, c: null, C: null, compartment: null, initial_x_Normal_Hematopoietic_Stem_Cell: null, initial_y_Leukemic_Cell: null, x_Normal_Hematopoietic_Stem_Cell_init: null, y_Leukemic_Cell_init: null};
    this.metadata.variableOrder = {x_Normal_Hematopoietic_Stem_Cell: null, y_Leukemic_Cell: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
