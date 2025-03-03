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
    var state = Array(5).fill(0);
    state[0] = internal.initial_The_FOD_in_the_circulation__X1;
    state[1] = internal.initial_The_FOD_in_the_metabolizing_tissues__X4;
    state[2] = internal.initial_The_cumulative_FOD_excreted_in_the_non_urinary_pool__X3;
    state[3] = internal.initial_The_FOD_in_the_gallbladder___intestinal_lumen__X5;
    state[4] = internal.initial_The_cumulative_FOD_excreted_in_the_urine__X2;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["K1", "K2", "K3", "K4", "K5", "The_cumulative_FOD_excreted_in_the_non_urinary_pool__X3_init", "The_cumulative_FOD_excreted_in_the_urine__X2_init", "The_FOD_in_the_circulation__X1_init", "The_FOD_in_the_gallbladder___intestinal_lumen__X5_init", "The_FOD_in_the_metabolizing_tissues__X4_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "K1", internal, 3.6000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2", internal, 1.2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K3", internal, 26.600000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K4", internal, 1.2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K5", internal, 1.2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "The_cumulative_FOD_excreted_in_the_non_urinary_pool__X3_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "The_cumulative_FOD_excreted_in_the_urine__X2_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "The_FOD_in_the_circulation__X1_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "The_FOD_in_the_gallbladder___intestinal_lumen__X5_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "The_FOD_in_the_metabolizing_tissues__X4_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_The_cumulative_FOD_excreted_in_the_non_urinary_pool__X3 = internal.The_cumulative_FOD_excreted_in_the_non_urinary_pool__X3_init;
    internal.initial_The_cumulative_FOD_excreted_in_the_urine__X2 = internal.The_cumulative_FOD_excreted_in_the_urine__X2_init;
    internal.initial_The_FOD_in_the_circulation__X1 = internal.The_FOD_in_the_circulation__X1_init;
    internal.initial_The_FOD_in_the_gallbladder___intestinal_lumen__X5 = internal.The_FOD_in_the_gallbladder___intestinal_lumen__X5_init;
    internal.initial_The_FOD_in_the_metabolizing_tissues__X4 = internal.The_FOD_in_the_metabolizing_tissues__X4_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const The_FOD_in_the_circulation__X1 = state[0];
    const The_FOD_in_the_metabolizing_tissues__X4 = state[1];
    const The_FOD_in_the_gallbladder___intestinal_lumen__X5 = state[3];
    dstatedt[2] = 0 + 1 * internal.compartment * (internal.K2 * The_FOD_in_the_gallbladder___intestinal_lumen__X5);
    dstatedt[4] = 0 + 1 * internal.compartment * (internal.K1 * The_FOD_in_the_metabolizing_tissues__X4);
    dstatedt[0] = 0 - 1 * internal.compartment * (internal.K3 * The_FOD_in_the_circulation__X1);
    dstatedt[3] = 0 + 1 * internal.compartment * (internal.K4 * The_FOD_in_the_metabolizing_tissues__X4 - internal.K5 * The_FOD_in_the_gallbladder___intestinal_lumen__X5) - 1 * internal.compartment * (internal.K2 * The_FOD_in_the_gallbladder___intestinal_lumen__X5);
    dstatedt[1] = 0 + 1 * internal.compartment * (internal.K3 * The_FOD_in_the_circulation__X1) - 1 * internal.compartment * (internal.K4 * The_FOD_in_the_metabolizing_tissues__X4 - internal.K5 * The_FOD_in_the_gallbladder___intestinal_lumen__X5) - 1 * internal.compartment * (internal.K1 * The_FOD_in_the_metabolizing_tissues__X4);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "The_FOD_in_the_circulation__X1", "The_FOD_in_the_metabolizing_tissues__X4", "The_cumulative_FOD_excreted_in_the_non_urinary_pool__X3", "The_FOD_in_the_gallbladder___intestinal_lumen__X5", "The_cumulative_FOD_excreted_in_the_urine__X2"];
    this.metadata.internalOrder = {compartment: null, initial_The_cumulative_FOD_excreted_in_the_non_urinary_pool__X3: null, initial_The_cumulative_FOD_excreted_in_the_urine__X2: null, initial_The_FOD_in_the_circulation__X1: null, initial_The_FOD_in_the_gallbladder___intestinal_lumen__X5: null, initial_The_FOD_in_the_metabolizing_tissues__X4: null, K1: null, K2: null, K3: null, K4: null, K5: null, The_cumulative_FOD_excreted_in_the_non_urinary_pool__X3_init: null, The_cumulative_FOD_excreted_in_the_urine__X2_init: null, The_FOD_in_the_circulation__X1_init: null, The_FOD_in_the_gallbladder___intestinal_lumen__X5_init: null, The_FOD_in_the_metabolizing_tissues__X4_init: null};
    this.metadata.variableOrder = {The_FOD_in_the_circulation__X1: null, The_FOD_in_the_metabolizing_tissues__X4: null, The_cumulative_FOD_excreted_in_the_non_urinary_pool__X3: null, The_FOD_in_the_gallbladder___intestinal_lumen__X5: null, The_cumulative_FOD_excreted_in_the_urine__X2: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
