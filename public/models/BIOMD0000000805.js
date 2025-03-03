export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.k1 = 1;
    internal.pi = 3.1415929999999999;
    internal.tme = 1;
    internal.v = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(4).fill(0);
    state[0] = internal.initial_Hi;
    state[1] = internal.initial_He;
    state[2] = internal.initial_Li;
    state[3] = internal.initial_Le;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["d1", "f1", "fg", "He_init", "Hi_init", "k3", "Le_init", "lh", "Li_init", "p", "p1", "p2", "vv"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "d1", internal, 7999.6000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "f1", internal, 17174, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "fg", internal, 0.2823, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "He_init", internal, Math.pow((10), (0)), -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Hi_init", internal, Math.pow((10), (- 0.29999999999999999)), -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 5.4316000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Le_init", internal, 0.00125, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lh", internal, 0.017173999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Li_init", internal, 0.00125, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p", internal, 14000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p1", internal, 20095, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p2", internal, 0.28570000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "vv", internal, 0.5, -Infinity, Infinity, false);
    internal.initial_He = internal.He_init;
    internal.initial_Hi = internal.Hi_init;
    internal.initial_Le = internal.Le_init;
    internal.initial_Li = internal.Li_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Hi = state[0];
    const He = state[1];
    const Li = state[2];
    const Le = state[3];
    dstatedt[1] = 0 - 1 * internal.tme * (internal.lh * He - internal.lh * Hi) + 1 * internal.tme * (internal.f1 * (Hi - He) * ((Hi > He ? 1 : 0))) + 1 * internal.tme * (internal.k3 * internal.p * (Hi * Li - He * Le)) - 1 * internal.tme * (internal.p1 * internal.v * He);
    dstatedt[0] = 0 + 1 * internal.tme * (internal.lh * He - internal.lh * Hi) - 1 * internal.tme * (internal.f1 * (Hi - He) * ((Hi > He ? 1 : 0))) - 1 * internal.tme * (internal.k3 * internal.p * (Hi * Li - He * Le)) + 1 * internal.tme * (internal.p * (2 * internal.fg / (Hi + 1)) * ((internal.v > internal.vv ? 1 : 0))) + 1 * internal.tme * (internal.d1);
    dstatedt[3] = 0 + 1 * internal.tme * (internal.k3 * internal.p * (Hi * Li - He * Le)) - 1 * internal.tme * (internal.p2 * internal.v * Le);
    dstatedt[2] = 0 - 1 * internal.tme * (internal.k3 * internal.p * (Hi * Li - He * Le)) + 1 * internal.tme * (internal.v) - 1 * internal.tme * internal.k1 * Li + 1 * internal.tme * (2 * internal.fg / (Hi + 1) * ((internal.v > internal.vv ? 1 : 0)));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Hi", "He", "Li", "Le"];
    this.metadata.internalOrder = {d1: null, f1: null, fg: null, He_init: null, Hi_init: null, initial_He: null, initial_Hi: null, initial_Le: null, initial_Li: null, k1: null, k3: null, Le_init: null, lh: null, Li_init: null, p: null, p1: null, p2: null, pi: null, tme: null, v: null, vv: null};
    this.metadata.variableOrder = {Hi: null, He: null, Li: null, Le: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
