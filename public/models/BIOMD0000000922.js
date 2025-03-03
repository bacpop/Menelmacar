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
    var state = Array(3).fill(0);
    state[0] = internal.initial_Population_of_Eggs;
    state[1] = internal.initial_Population_of_Larvae;
    state[2] = internal.initial_Population_of_Pupae;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Ar", "ep", "K0", "Me", "Ml", "Mp", "Population_of_Eggs_init", "Population_of_Larvae_init", "Population_of_Pupae_init", "Te", "Tl", "Tp"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Ar", internal, 20, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ep", internal, 30, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K0", internal, 0.00020000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Me", internal, 0.050000000000000003, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Ml", internal, 0.050099999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Mp", internal, 0.0025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Population_of_Eggs_init", internal, 10000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Population_of_Larvae_init", internal, 5000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Population_of_Pupae_init", internal, 3000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Te", internal, 0.36099999999999999, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tl", internal, 0.13400000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Tp", internal, 0.34200000000000003, -Infinity, Infinity, false);
    internal.initial_Population_of_Eggs = internal.Population_of_Eggs_init;
    internal.initial_Population_of_Larvae = internal.Population_of_Larvae_init;
    internal.initial_Population_of_Pupae = internal.Population_of_Pupae_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Population_of_Eggs = state[0];
    const Population_of_Larvae = state[1];
    const Population_of_Pupae = state[2];
    dstatedt[0] = 0 + 1 * internal.compartment * (internal.Ar * internal.ep - Population_of_Eggs * (internal.Te + internal.Me));
    dstatedt[1] = 0 + 1 * internal.compartment * (Population_of_Eggs * internal.Te - Population_of_Larvae * (internal.Tl + internal.Ml) - internal.K0 * Math.pow((Population_of_Larvae), (2)));
    dstatedt[2] = 0 + 1 * internal.compartment * (Population_of_Larvae * internal.Tl - Population_of_Pupae * (internal.Tp + internal.Mp));
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Population_of_Eggs", "Population_of_Larvae", "Population_of_Pupae"];
    this.metadata.internalOrder = {Ar: null, compartment: null, ep: null, initial_Population_of_Eggs: null, initial_Population_of_Larvae: null, initial_Population_of_Pupae: null, K0: null, Me: null, Ml: null, Mp: null, Population_of_Eggs_init: null, Population_of_Larvae_init: null, Population_of_Pupae_init: null, Te: null, Tl: null, Tp: null};
    this.metadata.variableOrder = {Population_of_Eggs: null, Population_of_Larvae: null, Population_of_Pupae: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
