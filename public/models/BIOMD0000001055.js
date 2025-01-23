export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.Cytoplasm = 1;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(19).fill(0);
    state[0] = internal.initial_Glucose;
    state[1] = internal.initial_Fructose_6_Phosphate;
    state[2] = internal.initial_Fructose_1_6_Bisphosphate;
    state[3] = internal.initial_p_3_Phosphoglycerate;
    state[4] = internal.initial_Phosphoenolpyruvate;
    state[5] = internal.initial_Pyruvate;
    state[6] = internal.initial_Oxaloacetate;
    state[7] = internal.initial_Metabolic_outcome_of_Pentose_Phosphate_Shunt;
    state[8] = internal.initial_Metabolic_outcome_of_Serine_Biosynthesis_Flux;
    state[9] = internal.initial_Metabolic_outcome_of_Glycolytic_Flux;
    state[10] = internal.initial_Phosphofructokinase_1;
    state[11] = internal.initial_Fructose_1_6_Bisphosphatase;
    state[12] = internal.initial_Large_sized_enzyme_clusters;
    state[13] = internal.initial_Medium_sized_enzyme_clusters;
    state[14] = internal.initial_Small_sized_enzyme_clusters;
    state[15] = internal.initial_Pyruvate_Kinase_M2_dimers;
    state[16] = internal.initial_Phosphoenolpyruvate_Carboxykinase_1;
    state[17] = internal.initial_Glycosylated_Phosphofructokinase;
    state[18] = internal.initial_Pyruvate_Kinase_M2_tetramers;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["alpha", "c_2", "c_6", "c_d", "c2", "delta_f", "delta_p", "delta_s", "e_2", "e_6", "e_d", "e2", "Fructose_1_6_Bisphosphatase_init", "Fructose_1_6_Bisphosphate_init", "Fructose_6_Phosphate_init", "Glucose_init", "Glycosylated_Phosphofructokinase_init", "k_1", "k_2", "k_3", "k_4", "k_5", "k_6", "k_al", "k_am", "k_as", "k_d", "k_g", "k0", "k1", "K1", "k2", "K2", "k3", "K3", "k4", "k5", "kal", "kam", "kas", "kd", "kf", "kg", "kp", "ks", "Large_sized_enzyme_clusters_init", "Medium_sized_enzyme_clusters_init", "Metabolic_outcome_of_Glycolytic_Flux_init", "Metabolic_outcome_of_Pentose_Phosphate_Shunt_init", "Metabolic_outcome_of_Serine_Biosynthesis_Flux_init", "Oxaloacetate_init", "p_3_Phosphoglycerate_init", "Phosphoenolpyruvate_Carboxykinase_1_init", "Phosphoenolpyruvate_init", "Phosphofructokinase_1_init", "Pyruvate_init", "Pyruvate_Kinase_M2_dimers_init", "Pyruvate_Kinase_M2_tetramers_init", "Small_sized_enzyme_clusters_init"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "alpha", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c_2", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c_6", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c_d", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "c2", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_f", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_p", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "delta_s", internal, 0.5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e_2", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e_6", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e_d", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "e2", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Fructose_1_6_Bisphosphatase_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Fructose_1_6_Bisphosphate_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Fructose_6_Phosphate_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Glucose_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Glycosylated_Phosphofructokinase_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_1", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_2", internal, 7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_3", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_4", internal, 7, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_5", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_6", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_al", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_am", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_as", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_d", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k_g", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k0", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k1", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K1", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k2", internal, 40, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K2", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k3", internal, 10, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "K3", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k4", internal, 14, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "k5", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kal", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kam", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kas", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kd", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kf", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kg", internal, 1, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "kp", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "ks", internal, 5, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Large_sized_enzyme_clusters_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Medium_sized_enzyme_clusters_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Metabolic_outcome_of_Glycolytic_Flux_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Metabolic_outcome_of_Pentose_Phosphate_Shunt_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Metabolic_outcome_of_Serine_Biosynthesis_Flux_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Oxaloacetate_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "p_3_Phosphoglycerate_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Phosphoenolpyruvate_Carboxykinase_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Phosphoenolpyruvate_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Phosphofructokinase_1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pyruvate_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pyruvate_Kinase_M2_dimers_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Pyruvate_Kinase_M2_tetramers_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "Small_sized_enzyme_clusters_init", internal, 0, -Infinity, Infinity, false);
    internal.initial_Fructose_1_6_Bisphosphatase = internal.Fructose_1_6_Bisphosphatase_init;
    internal.initial_Fructose_1_6_Bisphosphate = internal.Fructose_1_6_Bisphosphate_init;
    internal.initial_Fructose_6_Phosphate = internal.Fructose_6_Phosphate_init;
    internal.initial_Glucose = internal.Glucose_init;
    internal.initial_Glycosylated_Phosphofructokinase = internal.Glycosylated_Phosphofructokinase_init;
    internal.initial_Large_sized_enzyme_clusters = internal.Large_sized_enzyme_clusters_init;
    internal.initial_Medium_sized_enzyme_clusters = internal.Medium_sized_enzyme_clusters_init;
    internal.initial_Metabolic_outcome_of_Glycolytic_Flux = internal.Metabolic_outcome_of_Glycolytic_Flux_init;
    internal.initial_Metabolic_outcome_of_Pentose_Phosphate_Shunt = internal.Metabolic_outcome_of_Pentose_Phosphate_Shunt_init;
    internal.initial_Metabolic_outcome_of_Serine_Biosynthesis_Flux = internal.Metabolic_outcome_of_Serine_Biosynthesis_Flux_init;
    internal.initial_Oxaloacetate = internal.Oxaloacetate_init;
    internal.initial_p_3_Phosphoglycerate = internal.p_3_Phosphoglycerate_init;
    internal.initial_Phosphoenolpyruvate = internal.Phosphoenolpyruvate_init;
    internal.initial_Phosphoenolpyruvate_Carboxykinase_1 = internal.Phosphoenolpyruvate_Carboxykinase_1_init;
    internal.initial_Phosphofructokinase_1 = internal.Phosphofructokinase_1_init;
    internal.initial_Pyruvate = internal.Pyruvate_init;
    internal.initial_Pyruvate_Kinase_M2_dimers = internal.Pyruvate_Kinase_M2_dimers_init;
    internal.initial_Pyruvate_Kinase_M2_tetramers = internal.Pyruvate_Kinase_M2_tetramers_init;
    internal.initial_Small_sized_enzyme_clusters = internal.Small_sized_enzyme_clusters_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const Glucose = state[0];
    const Fructose_6_Phosphate = state[1];
    const Fructose_1_6_Bisphosphate = state[2];
    const p_3_Phosphoglycerate = state[3];
    const Phosphoenolpyruvate = state[4];
    const Pyruvate = state[5];
    const Oxaloacetate = state[6];
    const Metabolic_outcome_of_Pentose_Phosphate_Shunt = state[7];
    const Metabolic_outcome_of_Serine_Biosynthesis_Flux = state[8];
    const Metabolic_outcome_of_Glycolytic_Flux = state[9];
    const Phosphofructokinase_1 = state[10];
    const Fructose_1_6_Bisphosphatase = state[11];
    const Large_sized_enzyme_clusters = state[12];
    const Medium_sized_enzyme_clusters = state[13];
    const Small_sized_enzyme_clusters = state[14];
    const Pyruvate_Kinase_M2_dimers = state[15];
    const Phosphoenolpyruvate_Carboxykinase_1 = state[16];
    const Glycosylated_Phosphofructokinase = state[17];
    const Pyruvate_Kinase_M2_tetramers = state[18];
    dstatedt[11] = 0 - 1 * internal.Cytoplasm * internal.kam * Small_sized_enzyme_clusters * Fructose_1_6_Bisphosphatase * Pyruvate_Kinase_M2_dimers * Phosphoenolpyruvate_Carboxykinase_1 + 1 * internal.Cytoplasm * internal.k_am * Medium_sized_enzyme_clusters;
    dstatedt[2] = 0 + 1 * internal.Cytoplasm * (internal.k2 * (Phosphofructokinase_1 + Small_sized_enzyme_clusters + internal.c2 * Medium_sized_enzyme_clusters + internal.e2 * Large_sized_enzyme_clusters) * Fructose_6_Phosphate * internal.K1 / (internal.K1 + Fructose_1_6_Bisphosphate)) - 1 * internal.Cytoplasm * (internal.k_2 * (Fructose_1_6_Bisphosphatase + internal.c_2 * Medium_sized_enzyme_clusters + internal.e_2 * Large_sized_enzyme_clusters) * Fructose_1_6_Bisphosphate * internal.K2 / (internal.K2 + Fructose_6_Phosphate)) - 1 * internal.Cytoplasm * internal.k3 * Fructose_1_6_Bisphosphate + 1 * internal.Cytoplasm * internal.k_3 * p_3_Phosphoglycerate;
    dstatedt[1] = 0 + 1 * internal.Cytoplasm * internal.k1 * Glucose - 1 * internal.Cytoplasm * internal.k_1 * Fructose_6_Phosphate - 1 * internal.Cytoplasm * (internal.k2 * (Phosphofructokinase_1 + Small_sized_enzyme_clusters + internal.c2 * Medium_sized_enzyme_clusters + internal.e2 * Large_sized_enzyme_clusters) * Fructose_6_Phosphate * internal.K1 / (internal.K1 + Fructose_1_6_Bisphosphate)) + 1 * internal.Cytoplasm * (internal.k_2 * (Fructose_1_6_Bisphosphatase + internal.c_2 * Medium_sized_enzyme_clusters + internal.e_2 * Large_sized_enzyme_clusters) * Fructose_1_6_Bisphosphate * internal.K2 / (internal.K2 + Fructose_6_Phosphate)) - 1 * internal.Cytoplasm * internal.kp * Fructose_6_Phosphate;
    dstatedt[0] = 0 + 1 * internal.Cytoplasm * (internal.k0) - 1 * internal.Cytoplasm * internal.k1 * Glucose + 1 * internal.Cytoplasm * internal.k_1 * Fructose_6_Phosphate;
    dstatedt[17] = 0 + 1 * internal.Cytoplasm * internal.kg * Phosphofructokinase_1 - 1 * internal.Cytoplasm * internal.k_g * Glycosylated_Phosphofructokinase;
    dstatedt[12] = 0 + 1 * internal.Cytoplasm * (internal.kal * Math.pow((Medium_sized_enzyme_clusters), (11))) - 1 * internal.Cytoplasm * internal.k_al * Large_sized_enzyme_clusters;
    dstatedt[13] = 0 + 1 * internal.Cytoplasm * internal.kam * Small_sized_enzyme_clusters * Fructose_1_6_Bisphosphatase * Pyruvate_Kinase_M2_dimers * Phosphoenolpyruvate_Carboxykinase_1 - 1 * internal.Cytoplasm * internal.k_am * Medium_sized_enzyme_clusters - 1 * internal.Cytoplasm * (11 * internal.kal * Math.pow((Medium_sized_enzyme_clusters), (11))) + 1 * internal.Cytoplasm * (11 * internal.k_al * Large_sized_enzyme_clusters);
    dstatedt[9] = 0 + 1 * internal.Cytoplasm * internal.kf * Pyruvate - 1 * internal.Cytoplasm * internal.delta_f * Metabolic_outcome_of_Glycolytic_Flux;
    dstatedt[7] = 0 + 1 * internal.Cytoplasm * internal.kp * Fructose_6_Phosphate - 1 * internal.Cytoplasm * internal.delta_p * Metabolic_outcome_of_Pentose_Phosphate_Shunt;
    dstatedt[8] = 0 + 1 * internal.Cytoplasm * internal.ks * p_3_Phosphoglycerate - 1 * internal.Cytoplasm * internal.delta_s * Metabolic_outcome_of_Serine_Biosynthesis_Flux;
    dstatedt[6] = 0 + 1 * internal.Cytoplasm * internal.k_5 * Pyruvate - 1 * internal.Cytoplasm * (internal.k_6 * (Phosphoenolpyruvate_Carboxykinase_1 + internal.c_6 * Medium_sized_enzyme_clusters + internal.e_6 * Large_sized_enzyme_clusters) * Oxaloacetate);
    dstatedt[3] = 0 + 1 * internal.Cytoplasm * internal.k3 * Fructose_1_6_Bisphosphate - 1 * internal.Cytoplasm * internal.k_3 * p_3_Phosphoglycerate - 1 * internal.Cytoplasm * internal.k4 * p_3_Phosphoglycerate + 1 * internal.Cytoplasm * internal.k_4 * Phosphoenolpyruvate - 1 * internal.Cytoplasm * internal.ks * p_3_Phosphoglycerate;
    dstatedt[4] = 0 + 1 * internal.Cytoplasm * internal.k4 * p_3_Phosphoglycerate - 1 * internal.Cytoplasm * internal.k_4 * Phosphoenolpyruvate - 1 * internal.Cytoplasm * (internal.k5 * Pyruvate_Kinase_M2_tetramers * Phosphoenolpyruvate) + 1 * internal.Cytoplasm * (internal.k_6 * (Phosphoenolpyruvate_Carboxykinase_1 + internal.c_6 * Medium_sized_enzyme_clusters + internal.e_6 * Large_sized_enzyme_clusters) * Oxaloacetate);
    dstatedt[16] = 0 - 1 * internal.Cytoplasm * internal.kam * Small_sized_enzyme_clusters * Fructose_1_6_Bisphosphatase * Pyruvate_Kinase_M2_dimers * Phosphoenolpyruvate_Carboxykinase_1 + 1 * internal.Cytoplasm * internal.k_am * Medium_sized_enzyme_clusters;
    dstatedt[10] = 0 - 1 * internal.Cytoplasm * internal.kas * Phosphofructokinase_1 + 1 * internal.Cytoplasm * internal.k_as * Small_sized_enzyme_clusters - 1 * internal.Cytoplasm * internal.kg * Phosphofructokinase_1 + 1 * internal.Cytoplasm * internal.k_g * Glycosylated_Phosphofructokinase;
    dstatedt[5] = 0 + 1 * internal.Cytoplasm * (internal.k5 * Pyruvate_Kinase_M2_tetramers * Phosphoenolpyruvate) - 1 * internal.Cytoplasm * internal.k_5 * Pyruvate - 1 * internal.Cytoplasm * internal.kf * Pyruvate;
    dstatedt[15] = 0 - 1 * internal.Cytoplasm * internal.kam * Small_sized_enzyme_clusters * Fructose_1_6_Bisphosphatase * Pyruvate_Kinase_M2_dimers * Phosphoenolpyruvate_Carboxykinase_1 + 1 * internal.Cytoplasm * internal.k_am * Medium_sized_enzyme_clusters + 1 * internal.Cytoplasm * internal.kd * Pyruvate_Kinase_M2_tetramers - 1 * internal.Cytoplasm * (internal.k_d * (Pyruvate_Kinase_M2_dimers + internal.c_d * Medium_sized_enzyme_clusters + internal.e_d * Large_sized_enzyme_clusters) * (1 + internal.alpha * Fructose_1_6_Bisphosphate / (Fructose_1_6_Bisphosphate + internal.K3)));
    dstatedt[18] = 0 - 1 * internal.Cytoplasm * internal.kd * Pyruvate_Kinase_M2_tetramers + 1 * internal.Cytoplasm * (internal.k_d * (Pyruvate_Kinase_M2_dimers + internal.c_d * Medium_sized_enzyme_clusters + internal.e_d * Large_sized_enzyme_clusters) * (1 + internal.alpha * Fructose_1_6_Bisphosphate / (Fructose_1_6_Bisphosphate + internal.K3)));
    dstatedt[14] = 0 + 1 * internal.Cytoplasm * internal.kas * Phosphofructokinase_1 - 1 * internal.Cytoplasm * internal.k_as * Small_sized_enzyme_clusters - 1 * internal.Cytoplasm * internal.kam * Small_sized_enzyme_clusters * Fructose_1_6_Bisphosphatase * Pyruvate_Kinase_M2_dimers * Phosphoenolpyruvate_Carboxykinase_1 + 1 * internal.Cytoplasm * internal.k_am * Medium_sized_enzyme_clusters;
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "Glucose", "Fructose_6_Phosphate", "Fructose_1_6_Bisphosphate", "p_3_Phosphoglycerate", "Phosphoenolpyruvate", "Pyruvate", "Oxaloacetate", "Metabolic_outcome_of_Pentose_Phosphate_Shunt", "Metabolic_outcome_of_Serine_Biosynthesis_Flux", "Metabolic_outcome_of_Glycolytic_Flux", "Phosphofructokinase_1", "Fructose_1_6_Bisphosphatase", "Large_sized_enzyme_clusters", "Medium_sized_enzyme_clusters", "Small_sized_enzyme_clusters", "Pyruvate_Kinase_M2_dimers", "Phosphoenolpyruvate_Carboxykinase_1", "Glycosylated_Phosphofructokinase", "Pyruvate_Kinase_M2_tetramers"];
    this.metadata.internalOrder = {alpha: null, c_2: null, c_6: null, c_d: null, c2: null, Cytoplasm: null, delta_f: null, delta_p: null, delta_s: null, e_2: null, e_6: null, e_d: null, e2: null, Fructose_1_6_Bisphosphatase_init: null, Fructose_1_6_Bisphosphate_init: null, Fructose_6_Phosphate_init: null, Glucose_init: null, Glycosylated_Phosphofructokinase_init: null, initial_Fructose_1_6_Bisphosphatase: null, initial_Fructose_1_6_Bisphosphate: null, initial_Fructose_6_Phosphate: null, initial_Glucose: null, initial_Glycosylated_Phosphofructokinase: null, initial_Large_sized_enzyme_clusters: null, initial_Medium_sized_enzyme_clusters: null, initial_Metabolic_outcome_of_Glycolytic_Flux: null, initial_Metabolic_outcome_of_Pentose_Phosphate_Shunt: null, initial_Metabolic_outcome_of_Serine_Biosynthesis_Flux: null, initial_Oxaloacetate: null, initial_p_3_Phosphoglycerate: null, initial_Phosphoenolpyruvate: null, initial_Phosphoenolpyruvate_Carboxykinase_1: null, initial_Phosphofructokinase_1: null, initial_Pyruvate: null, initial_Pyruvate_Kinase_M2_dimers: null, initial_Pyruvate_Kinase_M2_tetramers: null, initial_Small_sized_enzyme_clusters: null, k_1: null, k_2: null, k_3: null, k_4: null, k_5: null, k_6: null, k_al: null, k_am: null, k_as: null, k_d: null, k_g: null, k0: null, k1: null, K1: null, k2: null, K2: null, k3: null, K3: null, k4: null, k5: null, kal: null, kam: null, kas: null, kd: null, kf: null, kg: null, kp: null, ks: null, Large_sized_enzyme_clusters_init: null, Medium_sized_enzyme_clusters_init: null, Metabolic_outcome_of_Glycolytic_Flux_init: null, Metabolic_outcome_of_Pentose_Phosphate_Shunt_init: null, Metabolic_outcome_of_Serine_Biosynthesis_Flux_init: null, Oxaloacetate_init: null, p_3_Phosphoglycerate_init: null, Phosphoenolpyruvate_Carboxykinase_1_init: null, Phosphoenolpyruvate_init: null, Phosphofructokinase_1_init: null, Pyruvate_init: null, Pyruvate_Kinase_M2_dimers_init: null, Pyruvate_Kinase_M2_tetramers_init: null, Small_sized_enzyme_clusters_init: null};
    this.metadata.variableOrder = {Glucose: null, Fructose_6_Phosphate: null, Fructose_1_6_Bisphosphate: null, p_3_Phosphoglycerate: null, Phosphoenolpyruvate: null, Pyruvate: null, Oxaloacetate: null, Metabolic_outcome_of_Pentose_Phosphate_Shunt: null, Metabolic_outcome_of_Serine_Biosynthesis_Flux: null, Metabolic_outcome_of_Glycolytic_Flux: null, Phosphofructokinase_1: null, Fructose_1_6_Bisphosphatase: null, Large_sized_enzyme_clusters: null, Medium_sized_enzyme_clusters: null, Small_sized_enzyme_clusters: null, Pyruvate_Kinase_M2_dimers: null, Phosphoenolpyruvate_Carboxykinase_1: null, Glycosylated_Phosphofructokinase: null, Pyruvate_Kinase_M2_tetramers: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
