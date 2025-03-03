export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Neuron = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(2).fill(0);
    state[0] = internal.initial_ROS;
    state[1] = internal.initial_alpha_syn;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha_syn_init", "dalphasyn", "k1", "k2", "k3", "k4", "kalphasyn", "ROS_init", "S2_4"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha_syn_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dalphasyn", internal, 15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 17280, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 17280, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 0.16800000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 0.16800000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kalphasyn", internal, 8.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ROS_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "S2_4", internal, 1, -Infinity, Infinity, false);
    internal.initial_alpha_syn = internal.alpha_syn_init;
    internal.initial_ROS = internal.ROS_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const ROS = state[0];
    const alpha_syn = state[1];
    dstatedt[1] = 0 + 1 * internal.Neuron * (internal.k3 * ROS * internal.S2_4) - 1 * internal.Neuron * (internal.k4 * alpha_syn * internal.S2_4);
    var S1 = (((t > 10 && t < 150) ? 2.6000000000000001 : 0));
    dstatedt[0] = 0 + 1 * internal.Neuron * (internal.k1 * (1 + S1 + internal.dalphasyn * (Math.pow((alpha_syn / internal.kalphasyn), (4)) / (1 + Math.pow((alpha_syn / internal.kalphasyn), (4)))))) - 1 * internal.Neuron * (internal.k2 * ROS * internal.S2_4);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "ROS", "alpha_syn"];
    this.metadata.internalOrder = {alpha_syn_init: null, dalphasyn: null, initial_alpha_syn: null, initial_ROS: null, k1: null, k2: null, k3: null, k4: null, kalphasyn: null, Neuron: null, ROS_init: null, S2_4: null};
    this.metadata.variableOrder = {ROS: null, alpha_syn: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
