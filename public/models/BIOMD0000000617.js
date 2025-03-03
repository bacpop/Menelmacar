export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Compartment_ = 1;
    internal.default_compartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(1).fill(0);
    state[0] = internal.initial_v;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["H1", "H2", "Hx1", "Hx2", "Hxx", "Ii", "K1", "K1ii", "K1is", "K2", "K2i", "K3s", "Kx1", "Kx2", "Kxx1", "S", "v_init", "V1", "V1ii", "V1is", "V2", "V2i", "V3"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "H1", internal, 1.71, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "H2", internal, 2.6899999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Hx1", internal, 1.02, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Hx2", internal, 2.6899999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Hxx", internal, 0.95999999999999996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ii", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1", internal, 177.75999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1ii", internal, 34.049999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1is", internal, 29.52, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2", internal, 225.49000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2i", internal, 118.41, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K3s", internal, 605.00999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kx1", internal, 30.18, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kx2", internal, 553.63999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Kxx1", internal, 70.930000000000007, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S", internal, 61, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "v_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V1", internal, 20.059999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V1ii", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V1is", internal, 451.77999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V2", internal, 443.68000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V2i", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "V3", internal, 0, -Infinity, Infinity, false);
    internal.initial_v = internal.v_init;
    internal.K1s = internal.K1 - (internal.K1 - internal.K1is) * (Math.pow((internal.Ii), (internal.Hx1)) / (Math.pow((internal.Ii), (internal.Hx1)) + Math.pow((internal.Kx1), (internal.Hx1)))) + (internal.K1 - internal.K1is) * (Math.pow((internal.Ii), (internal.Hx2)) / (Math.pow((internal.Ii), (internal.Hx2)) + Math.pow((internal.Kx2), (internal.Hx2)))) - (internal.K1 - internal.K1ii) * (Math.pow((internal.Ii), (internal.Hx2)) / (Math.pow((internal.Ii), (internal.Hx2)) + Math.pow((internal.Kx2), (internal.Hx2))));
    internal.K2s = internal.K2 - (internal.K2 - internal.K2i) * (Math.pow((internal.Ii), (internal.Hxx)) / (Math.pow((internal.Ii), (internal.Hxx)) + Math.pow((internal.Kxx1), (internal.Hxx))));
    internal.V1s = internal.V1 - (internal.V1 - internal.V1is) * (Math.pow((internal.Ii), (internal.Hx1)) / (Math.pow((internal.Ii), (internal.Hx1)) + Math.pow((internal.Kx1), (internal.Hx1)))) + (internal.V1 - internal.V1is) * (Math.pow((internal.Ii), (internal.Hx2)) / (Math.pow((internal.Ii), (internal.Hx2)) + Math.pow((internal.Kx2), (internal.Hx2)))) - (internal.V1 - internal.V1ii) * (Math.pow((internal.Ii), (internal.Hx2)) / (Math.pow((internal.Ii), (internal.Hx2)) + Math.pow((internal.Kx2), (internal.Hx2))));
    internal.V2s = internal.V2 - (internal.V2 - internal.V2i) * (Math.pow((internal.Ii), (internal.Hxx)) / (Math.pow((internal.Ii), (internal.Hxx)) + Math.pow((internal.Kxx1), (internal.Hxx))));
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    dstatedt[0] = 0 + 1 * internal.default_compartment * (internal.Compartment_ * internal.V1s * (internal.S / (internal.S + internal.K1s))) + 1 * internal.default_compartment * (internal.Compartment_ * internal.V2s * (Math.pow((internal.S), (internal.H1)) / (Math.pow((internal.S), (internal.H1)) + Math.pow((internal.K2s), (internal.H1))))) - 1 * internal.default_compartment * (internal.Compartment_ * internal.V1s * (Math.pow((internal.S), (internal.H1)) / (Math.pow((internal.S), (internal.H1)) + Math.pow((internal.K2s), (internal.H1))))) - 1 * internal.default_compartment * (internal.Compartment_ * internal.V2s * (Math.pow((internal.S), (internal.H2)) / (Math.pow((internal.S), (internal.H2)) + Math.pow((internal.K3s), (internal.H2)))));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "v"];
    this.metadata.internalOrder = {Compartment_: null, default_compartment: null, H1: null, H2: null, Hx1: null, Hx2: null, Hxx: null, Ii: null, initial_v: null, K1: null, K1ii: null, K1is: null, K1s: null, K2: null, K2i: null, K2s: null, K3s: null, Kx1: null, Kx2: null, Kxx1: null, S: null, v_init: null, V1: null, V1ii: null, V1is: null, V1s: null, V2: null, V2i: null, V2s: null, V3: null};
    this.metadata.variableOrder = {v: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
