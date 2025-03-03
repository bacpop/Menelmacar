export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.default1 = 1;
    internal.pi = 3.1415929999999999;
    internal.susceptible_0 = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(11).fill(0);
    state[0] = internal.initial_infected_nontested_0;
    state[1] = internal.initial_infected_tested_0;
    state[2] = internal.initial_uninfected_nontested_0;
    state[3] = internal.initial_uninfected_tested_0;
    state[4] = internal.initial_symptoms_tested_0;
    state[5] = internal.initial_symptoms_nontested_0;
    state[6] = internal.initial_recovered_tested_0;
    state[7] = internal.initial_recovered_nontested_0;
    state[8] = internal.initial_dead_corona_tested_0;
    state[9] = internal.initial_dead_corona_nontested_0;
    state[10] = internal.initial_dead_noncorona_0;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["Birth_rate", "Corona_death_rate_constant", "Corona_recover", "dead_corona_nontested_0_init", "dead_corona_tested_0_init", "dead_noncorona_0_init", "governmentResponseFactorToDiagnosedInfected_0", "infected_nontested_0_init", "infected_tested_0_init", "Infection_from_non_tested_no_symptoms_0", "Infection_from_non_tested_symptoms", "Infection_from_tested_no_symptoms_0", "Infection_from_tested_symptoms", "lockdown_duration", "lockdownPause_duration_0", "n_pauses", "Normal_death_rate_constant_0", "number_cutoff", "recovered_nontested_0_init", "recovered_tested_0_init", "Social_Distance_base", "social_distancing_factor", "symptomatic_numberTolerance_0", "Symptoms_appear", "symptoms_nontested_0_init", "symptoms_tested_0_init", "t_government_action_0", "Testing_for_Symptoms", "Testing_Randome", "tFraction_lockdown_0", "uninfected_nontested_0_init", "uninfected_tested_0_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "Birth_rate", internal, 3.29e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Corona_death_rate_constant", internal, 0.002, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Corona_recover", internal, 0.067000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dead_corona_nontested_0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dead_corona_tested_0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "dead_noncorona_0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "governmentResponseFactorToDiagnosedInfected_0", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "infected_nontested_0_init", internal, 2, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "infected_tested_0_init", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Infection_from_non_tested_no_symptoms_0", internal, 0.50800000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Infection_from_non_tested_symptoms", internal, 0.25, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Infection_from_tested_no_symptoms_0", internal, 0.025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Infection_from_tested_symptoms", internal, 0.025000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lockdown_duration", internal, 7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "lockdownPause_duration_0", internal, 7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "n_pauses", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Normal_death_rate_constant_0", internal, 3.29e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "number_cutoff", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "recovered_nontested_0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "recovered_tested_0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Social_Distance_base", internal, 534700, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "social_distancing_factor", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "symptomatic_numberTolerance_0", internal, 141, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Symptoms_appear", internal, 0.30164999999999997, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "symptoms_nontested_0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "symptoms_tested_0_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "t_government_action_0", internal, 15, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Testing_for_Symptoms", internal, 500, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Testing_Randome", internal, 0.00080000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "tFraction_lockdown_0", internal, 0.55000000000000004, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "uninfected_nontested_0_init", internal, 630000, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "uninfected_tested_0_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_dead_corona_nontested_0 = internal.dead_corona_nontested_0_init;
    internal.initial_dead_corona_tested_0 = internal.dead_corona_tested_0_init;
    internal.initial_dead_noncorona_0 = internal.dead_noncorona_0_init;
    internal.initial_infected_nontested_0 = internal.infected_nontested_0_init;
    internal.initial_infected_tested_0 = internal.infected_tested_0_init;
    internal.initial_recovered_nontested_0 = internal.recovered_nontested_0_init;
    internal.initial_recovered_tested_0 = internal.recovered_tested_0_init;
    internal.initial_symptoms_nontested_0 = internal.symptoms_nontested_0_init;
    internal.initial_symptoms_tested_0 = internal.symptoms_tested_0_init;
    internal.initial_uninfected_nontested_0 = internal.uninfected_nontested_0_init;
    internal.initial_uninfected_tested_0 = internal.uninfected_tested_0_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const infected_nontested_0 = state[0];
    const infected_tested_0 = state[1];
    const uninfected_nontested_0 = state[2];
    const uninfected_tested_0 = state[3];
    const symptoms_tested_0 = state[4];
    const symptoms_nontested_0 = state[5];
    const recovered_tested_0 = state[6];
    const recovered_nontested_0 = state[7];
    dstatedt[9] = 0 + 1 * internal.default1 * internal.Corona_death_rate_constant * infected_nontested_0 + 1 * internal.default1 * internal.Corona_death_rate_constant * symptoms_nontested_0;
    dstatedt[8] = 0 + 1 * internal.default1 * internal.Corona_death_rate_constant * symptoms_tested_0 + 1 * internal.default1 * internal.Corona_death_rate_constant * infected_tested_0;
    dstatedt[10] = 0 + 1 * internal.default1 * internal.Normal_death_rate_constant_0 * uninfected_nontested_0 + 1 * internal.default1 * internal.Normal_death_rate_constant_0 * recovered_tested_0 + 1 * internal.default1 * internal.Normal_death_rate_constant_0 * recovered_nontested_0 + 1 * internal.default1 * internal.Normal_death_rate_constant_0 * uninfected_tested_0;
    dstatedt[1] = 0 + 1 * internal.default1 * internal.Testing_Randome * infected_nontested_0 - 1 * internal.default1 * internal.Symptoms_appear * infected_tested_0 - 1 * internal.default1 * internal.Corona_death_rate_constant * infected_tested_0;
    dstatedt[7] = 0 + 1 * internal.default1 * internal.Corona_recover * symptoms_nontested_0 - 1 * internal.default1 * internal.Normal_death_rate_constant_0 * recovered_nontested_0;
    dstatedt[6] = 0 + 1 * internal.default1 * internal.Corona_recover * symptoms_tested_0 - 1 * internal.default1 * internal.Normal_death_rate_constant_0 * recovered_tested_0;
    dstatedt[5] = 0 + 1 * internal.default1 * internal.Symptoms_appear * infected_nontested_0 - 1 * internal.default1 * internal.Testing_for_Symptoms * symptoms_nontested_0 - 1 * internal.default1 * internal.Corona_recover * symptoms_nontested_0 - 1 * internal.default1 * internal.Corona_death_rate_constant * symptoms_nontested_0;
    dstatedt[4] = 0 + 1 * internal.default1 * internal.Symptoms_appear * infected_tested_0 + 1 * internal.default1 * internal.Testing_for_Symptoms * symptoms_nontested_0 - 1 * internal.default1 * internal.Corona_death_rate_constant * symptoms_tested_0 - 1 * internal.default1 * internal.Corona_recover * symptoms_tested_0;
    var epidemic_extinguished_bool_0 = ((infected_nontested_0 + infected_tested_0 + symptoms_nontested_0 + symptoms_tested_0 < internal.number_cutoff ? 1 : 0));
    var Government_induced_isolation_factor_0 = internal.social_distancing_factor * (1 + 2.5 * symptoms_tested_0 / internal.symptomatic_numberTolerance_0 * ((t < internal.t_government_action_0 ? 0 : internal.governmentResponseFactorToDiagnosedInfected_0)));
    var n_lockdowns = ((t - internal.t_government_action_0 > 0 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 1 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 2 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 3 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 4 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 5 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 6 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 7 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 8 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 9 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 10 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 11 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 12 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 13 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 14 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 15 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 16 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 17 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 18 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 19 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 20 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 21 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 22 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 23 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 24 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 25 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 26 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 27 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 28 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 29 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 30 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 31 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 32 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 33 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 34 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 35 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 36 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 37 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 38 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 39 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 40 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 41 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 42 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 43 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 44 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 45 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 46 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 47 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 48 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 49 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 50 * internal.lockdown_duration ? 1 : 0)) + ((t - internal.t_government_action_0 > 51 * internal.lockdown_duration ? 1 : 0));
    var total_population_0 = infected_nontested_0 + infected_tested_0 + uninfected_nontested_0 + uninfected_tested_0 + recovered_nontested_0 + recovered_tested_0 + symptoms_nontested_0 + symptoms_tested_0;
    var intermittent_t = t - n_lockdowns * internal.lockdown_duration - internal.n_pauses * internal.lockdownPause_duration_0;
    var Social_Distance = (((t > internal.t_government_action_0 && intermittent_t < internal.t_government_action_0 - internal.lockdown_duration * (1 - internal.tFraction_lockdown_0)) ? internal.Social_Distance_base * Government_induced_isolation_factor_0 : internal.Social_Distance_base));
    var Total_Infection_coefficient = (infected_nontested_0 * internal.Infection_from_non_tested_no_symptoms_0 + symptoms_nontested_0 * internal.Infection_from_non_tested_symptoms + infected_tested_0 * internal.Infection_from_tested_no_symptoms_0 + symptoms_tested_0 * internal.Infection_from_tested_symptoms) * (1 - epidemic_extinguished_bool_0) / Social_Distance;
    dstatedt[0] = 0 + 1 * internal.default1 * Total_Infection_coefficient * uninfected_nontested_0 + 1 * internal.default1 * Total_Infection_coefficient * uninfected_tested_0 - 1 * internal.default1 * internal.Testing_Randome * infected_nontested_0 - 1 * internal.default1 * internal.Symptoms_appear * infected_nontested_0 - 1 * internal.default1 * internal.Corona_death_rate_constant * infected_nontested_0;
    dstatedt[2] = 0 - 1 * internal.default1 * Total_Infection_coefficient * uninfected_nontested_0 - 1 * internal.default1 * internal.Testing_Randome * uninfected_nontested_0 + 1 * internal.default1 * (internal.susceptible_0 * total_population_0 * internal.Birth_rate) - 1 * internal.default1 * internal.Normal_death_rate_constant_0 * uninfected_nontested_0;
    dstatedt[3] = 0 + 1 * internal.default1 * internal.Testing_Randome * uninfected_nontested_0 - 1 * internal.default1 * Total_Infection_coefficient * uninfected_tested_0 - 1 * internal.default1 * internal.Normal_death_rate_constant_0 * uninfected_tested_0;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "infected_nontested_0", "infected_tested_0", "uninfected_nontested_0", "uninfected_tested_0", "symptoms_tested_0", "symptoms_nontested_0", "recovered_tested_0", "recovered_nontested_0", "dead_corona_tested_0", "dead_corona_nontested_0", "dead_noncorona_0"];
    this.metadata.internalOrder = {Birth_rate: null, Corona_death_rate_constant: null, Corona_recover: null, dead_corona_nontested_0_init: null, dead_corona_tested_0_init: null, dead_noncorona_0_init: null, default1: null, governmentResponseFactorToDiagnosedInfected_0: null, infected_nontested_0_init: null, infected_tested_0_init: null, Infection_from_non_tested_no_symptoms_0: null, Infection_from_non_tested_symptoms: null, Infection_from_tested_no_symptoms_0: null, Infection_from_tested_symptoms: null, initial_dead_corona_nontested_0: null, initial_dead_corona_tested_0: null, initial_dead_noncorona_0: null, initial_infected_nontested_0: null, initial_infected_tested_0: null, initial_recovered_nontested_0: null, initial_recovered_tested_0: null, initial_symptoms_nontested_0: null, initial_symptoms_tested_0: null, initial_uninfected_nontested_0: null, initial_uninfected_tested_0: null, lockdown_duration: null, lockdownPause_duration_0: null, n_pauses: null, Normal_death_rate_constant_0: null, number_cutoff: null, pi: null, recovered_nontested_0_init: null, recovered_tested_0_init: null, Social_Distance_base: null, social_distancing_factor: null, susceptible_0: null, symptomatic_numberTolerance_0: null, Symptoms_appear: null, symptoms_nontested_0_init: null, symptoms_tested_0_init: null, t_government_action_0: null, Testing_for_Symptoms: null, Testing_Randome: null, tFraction_lockdown_0: null, uninfected_nontested_0_init: null, uninfected_tested_0_init: null};
    this.metadata.variableOrder = {infected_nontested_0: null, infected_tested_0: null, uninfected_nontested_0: null, uninfected_tested_0: null, symptoms_tested_0: null, symptoms_nontested_0: null, recovered_tested_0: null, recovered_nontested_0: null, dead_corona_tested_0: null, dead_corona_nontested_0: null, dead_noncorona_0: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
