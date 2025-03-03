export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Arg = 100;
    internal.Endothelium = 1;
    internal.O2 = 150;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(13).fill(0);
    state[0] = internal.initial_Fe3__enos;
    state[1] = internal.initial_Fe3__Arg;
    state[2] = internal.initial_Fe2;
    state[3] = internal.initial_Fe2__Arg;
    state[4] = internal.initial_Fe3__NO;
    state[5] = internal.initial_NO;
    state[6] = internal.initial_Fe2__NO;
    state[7] = internal.initial_Fe3__NOHA;
    state[8] = internal.initial_NOHA;
    state[9] = internal.initial_Fe2__NOHA;
    state[10] = internal.initial_Fe3__O2__Arg;
    state[11] = internal.initial_Fe3__O2__NOHA;
    state[12] = internal.initial_Citrulline;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Citrulline_init", "Fe2__Arg_init", "Fe2__NO_init", "Fe2__NOHA_init", "Fe2_init", "Fe3__Arg_init", "Fe3__enos_init", "Fe3__NO_init", "Fe3__NOHA_init", "Fe3__O2__Arg_init", "Fe3__O2__NOHA_init", "k1", "k1_prime", "k10", "k10_prime", "k11", "k12", "k13", "k14", "k2", "k3", "k4", "k4_prime", "k5", "k5_prime", "k6", "k7", "k8", "k8_prime", "k9", "k9_prime", "NO_init", "NOHA_init", "S"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Citrulline_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Fe2__Arg_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Fe2__NO_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Fe2__NOHA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Fe2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Fe3__Arg_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Fe3__enos_init", internal, 0.014999999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Fe3__NO_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Fe3__NOHA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Fe3__O2__Arg_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Fe3__O2__NOHA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1_prime", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10", internal, 3.3300000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k10_prime", internal, 89.900000000000006, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k11", internal, 29.399999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k12", internal, 0.91000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k13", internal, 0.033000000000000002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k14", internal, 53.899999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 0.91000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.91000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 1.8899999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4_prime", internal, 11.4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 2.5800000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5_prime", internal, 98, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k6", internal, 12.6, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k7", internal, 0.91000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k8_prime", internal, 0.10000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9", internal, 11.4, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k9_prime", internal, 1.8899999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NO_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "NOHA_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S", internal, 0, -Infinity, Infinity, false);
    internal.initial_Citrulline = internal.Citrulline_init;
    internal.initial_Fe2 = internal.Fe2_init;
    internal.initial_Fe2__Arg = internal.Fe2__Arg_init;
    internal.initial_Fe2__NO = internal.Fe2__NO_init;
    internal.initial_Fe2__NOHA = internal.Fe2__NOHA_init;
    internal.initial_Fe3__Arg = internal.Fe3__Arg_init;
    internal.initial_Fe3__enos = internal.Fe3__enos_init;
    internal.initial_Fe3__NO = internal.Fe3__NO_init;
    internal.initial_Fe3__NOHA = internal.Fe3__NOHA_init;
    internal.initial_Fe3__O2__Arg = internal.Fe3__O2__Arg_init;
    internal.initial_Fe3__O2__NOHA = internal.Fe3__O2__NOHA_init;
    internal.initial_NO = internal.NO_init;
    internal.initial_NOHA = internal.NOHA_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Fe3__enos = state[0];
    const Fe3__Arg = state[1];
    const Fe2 = state[2];
    const Fe2__Arg = state[3];
    const Fe3__NO = state[4];
    const Fe2__NO = state[6];
    const Fe3__NOHA = state[7];
    const NOHA = state[8];
    const Fe2__NOHA = state[9];
    const Fe3__O2__Arg = state[10];
    const Fe3__O2__NOHA = state[11];
    dstatedt[12] = 0 + 1 * internal.Endothelium * internal.k11 * Fe3__O2__NOHA;
    dstatedt[2] = 0 - 1 * internal.Endothelium * (internal.k4 * internal.Arg * Fe2 - internal.k4_prime * Fe2__Arg) + 1 * internal.Endothelium * internal.k2 * Fe3__enos + 1 * internal.Endothelium * (internal.k9 * Fe2__NOHA - internal.k9_prime * Fe2 * NOHA);
    dstatedt[3] = 0 + 1 * internal.Endothelium * (internal.k4 * internal.Arg * Fe2 - internal.k4_prime * Fe2__Arg) + 1 * internal.Endothelium * internal.k3 * Fe3__Arg - 1 * internal.Endothelium * (internal.k5 * internal.O2 * Fe2__Arg) + 1 * internal.Endothelium * internal.k5_prime * Fe3__O2__Arg;
    dstatedt[6] = 0 - 1 * internal.Endothelium * (internal.k13 * internal.O2 * Fe2__NO) + 1 * internal.Endothelium * internal.k12 * Fe3__NO;
    dstatedt[9] = 0 - 1 * internal.Endothelium * (internal.k9 * Fe2__NOHA - internal.k9_prime * Fe2 * NOHA) + 1 * internal.Endothelium * internal.k7 * Fe3__NOHA - 1 * internal.Endothelium * (internal.k10 * internal.O2 * Fe2__NOHA) + 1 * internal.Endothelium * internal.k10_prime * Fe3__O2__NOHA;
    dstatedt[1] = 0 + 1 * internal.Endothelium * (internal.k1 * internal.Arg * Fe3__enos - internal.k1_prime * Fe3__Arg) - 1 * internal.Endothelium * internal.k3 * Fe3__Arg;
    dstatedt[0] = 0 - 1 * internal.Endothelium * (internal.k1 * internal.Arg * Fe3__enos - internal.k1_prime * Fe3__Arg) - 1 * internal.Endothelium * internal.k2 * Fe3__enos + 1 * internal.Endothelium * internal.k14 * Fe3__NO + 1 * internal.Endothelium * (internal.k13 * internal.O2 * Fe2__NO) + 1 * internal.Endothelium * (internal.k8 * Fe3__NOHA - internal.k8_prime * Fe3__enos * NOHA);
    dstatedt[4] = 0 - 1 * internal.Endothelium * internal.k14 * Fe3__NO + 1 * internal.Endothelium * internal.k11 * Fe3__O2__NOHA - 1 * internal.Endothelium * internal.k12 * Fe3__NO;
    dstatedt[7] = 0 - 1 * internal.Endothelium * (internal.k8 * Fe3__NOHA - internal.k8_prime * Fe3__enos * NOHA) + 1 * internal.Endothelium * internal.k6 * Fe3__O2__Arg - 1 * internal.Endothelium * internal.k7 * Fe3__NOHA;
    dstatedt[10] = 0 + 1 * internal.Endothelium * (internal.k5 * internal.O2 * Fe2__Arg) - 1 * internal.Endothelium * internal.k5_prime * Fe3__O2__Arg - 1 * internal.Endothelium * internal.k6 * Fe3__O2__Arg;
    dstatedt[11] = 0 + 1 * internal.Endothelium * (internal.k10 * internal.O2 * Fe2__NOHA) - 1 * internal.Endothelium * internal.k11 * Fe3__O2__NOHA - 1 * internal.Endothelium * internal.k10_prime * Fe3__O2__NOHA;
    dstatedt[5] = 0 + 1 * internal.Endothelium * internal.k14 * Fe3__NO;
    dstatedt[8] = 0 + 1 * internal.Endothelium * (internal.k8 * Fe3__NOHA - internal.k8_prime * Fe3__enos * NOHA) + 1 * internal.Endothelium * (internal.k9 * Fe2__NOHA - internal.k9_prime * Fe2 * NOHA);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Fe3__enos", "Fe3__Arg", "Fe2", "Fe2__Arg", "Fe3__NO", "NO", "Fe2__NO", "Fe3__NOHA", "NOHA", "Fe2__NOHA", "Fe3__O2__Arg", "Fe3__O2__NOHA", "Citrulline"];
    this.metadata.internalOrder = {Arg: null, Citrulline_init: null, Endothelium: null, Fe2__Arg_init: null, Fe2__NO_init: null, Fe2__NOHA_init: null, Fe2_init: null, Fe3__Arg_init: null, Fe3__enos_init: null, Fe3__NO_init: null, Fe3__NOHA_init: null, Fe3__O2__Arg_init: null, Fe3__O2__NOHA_init: null, initial_Citrulline: null, initial_Fe2: null, initial_Fe2__Arg: null, initial_Fe2__NO: null, initial_Fe2__NOHA: null, initial_Fe3__Arg: null, initial_Fe3__enos: null, initial_Fe3__NO: null, initial_Fe3__NOHA: null, initial_Fe3__O2__Arg: null, initial_Fe3__O2__NOHA: null, initial_NO: null, initial_NOHA: null, k1: null, k1_prime: null, k10: null, k10_prime: null, k11: null, k12: null, k13: null, k14: null, k2: null, k3: null, k4: null, k4_prime: null, k5: null, k5_prime: null, k6: null, k7: null, k8: null, k8_prime: null, k9: null, k9_prime: null, NO_init: null, NOHA_init: null, O2: null, S: null};
    this.metadata.variableOrder = {Fe3__enos: null, Fe3__Arg: null, Fe2: null, Fe2__Arg: null, Fe3__NO: null, NO: null, Fe2__NO: null, Fe3__NOHA: null, NOHA: null, Fe2__NOHA: null, Fe3__O2__Arg: null, Fe3__O2__NOHA: null, Citrulline: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
