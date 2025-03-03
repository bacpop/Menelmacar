export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.COMpartment = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(6).fill(0);
    state[0] = internal.initial_x1;
    state[1] = internal.initial_x2;
    state[2] = internal.initial_x3;
    state[3] = internal.initial_G;
    state[4] = internal.initial_Ii;
    state[5] = internal.initial_Ip;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["a1", "alpha", "beta", "C1", "C2", "C3", "C4", "C5", "E", "G_init", "Gin", "Ii_init", "Ip_init", "Rg", "Rm", "td", "ti", "tp", "U0", "Ub", "Um", "Vg", "Vi", "Vp", "x1_init", "x2_init", "x3_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "a1", internal, 300, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "alpha", internal, 0.28999999999999998, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "beta", internal, 1.77, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C1", internal, 2000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C2", internal, 144, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C3", internal, 1000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C4", internal, 80, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "C5", internal, 26, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "E", internal, 0.20000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "G_init", internal, 12342.61665, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Gin", internal, 216, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ii_init", internal, 243.28651830000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ip_init", internal, 93.364416989999995, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rg", internal, 180, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Rm", internal, 210, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "td", internal, 36, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ti", internal, 100, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tp", internal, 6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "U0", internal, 40, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ub", internal, 72, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Um", internal, 940, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vg", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vi", internal, 11, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Vp", internal, 3, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x1_init", internal, 110.420253, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x2_init", internal, 112.7601171, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "x3_init", internal, 104.58787049999999, -Infinity, Infinity, false);
    internal.initial_G = internal.G_init;
    internal.initial_Ii = internal.Ii_init;
    internal.initial_Ip = internal.Ip_init;
    internal.initial_x1 = internal.x1_init;
    internal.initial_x2 = internal.x2_init;
    internal.initial_x3 = internal.x3_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    dstatedt[3] = 0;
    dstatedt[4] = 0;
    dstatedt[5] = 0;
    dstatedt[0] = 0;
    dstatedt[1] = 0;
    dstatedt[2] = 0;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "x1", "x2", "x3", "G", "Ii", "Ip"];
    this.metadata.internalOrder = {a1: null, alpha: null, beta: null, C1: null, C2: null, C3: null, C4: null, C5: null, COMpartment: null, E: null, G_init: null, Gin: null, Ii_init: null, initial_G: null, initial_Ii: null, initial_Ip: null, initial_x1: null, initial_x2: null, initial_x3: null, Ip_init: null, Rg: null, Rm: null, td: null, ti: null, tp: null, U0: null, Ub: null, Um: null, Vg: null, Vi: null, Vp: null, x1_init: null, x2_init: null, x3_init: null};
    this.metadata.variableOrder = {x1: null, x2: null, x3: null, G: null, Ii: null, Ip: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
