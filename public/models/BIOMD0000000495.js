export class model {
  constructor(base, user, unusedUserAction) {
    this.base = base;
    this.internal = {};
    var internal = this.internal;
    internal.mw08818dfe_fb12_45cc_8c1d_d965f142d0ce = 0;
    internal.mw73259e20_240e_4f3a_b2e0_9ca248658898 = 0.0001;
    internal.mw81b30d38_6ef3_4391_b826_e6c3cc210196 = 1;
    internal.mw919f8a86_e702_4b24_9cd7_adad694fcf9b = 5.0000000000000002e-05;
    this.setUser(user, unusedUserAction);
  }
  initial(t) {
    var internal = this.internal;
    var state = Array(8).fill(0);
    state[0] = internal.initial_mw15abaa48_d7d0_4845_ae04_c573d289d495;
    state[1] = internal.initial_mwfcfaf604_14d4_47a6_b021_226d1fb5497c;
    state[2] = internal.initial_mw8796c919_9251_4970_8f87_0bca9ecfeb5c;
    state[3] = internal.initial_mw849ed3fd_87d9_44d2_9f3e_4d631b900d41;
    state[4] = internal.initial_mwcb834e43_dc57_45ae_9452_f4c10955caf1;
    state[5] = internal.initial_mwf166ad55_4ff0_49fb_95d2_b657ad7653d5;
    state[6] = internal.initial_mwee54b5b4_b8c0_41df_8dda_5b160c5e10a5;
    state[7] = internal.initial_mw812f63db_4cb0_40ad_b92b_9874be969dfe;
    return state;
  }
  setUser(user, unusedUserAction) {
    this.base.user.checkUser(user, ["mw15abaa48_d7d0_4845_ae04_c573d289d495_init", "mw15ba24b5_7a87_479e_9be7_261b12cbdb63", "mw18bbabcb_d229_4d91_99f1_484f2ba8f020", "mw1a53a2cb_a3a7_40d7_ae07_4d93ad1123a3", "mw231a5907_d1ee_4a43_83ab_abb72f19502c", "mw2439178f_a48f_4425_82f9_13267b917b85", "mw27f524cb_75b3_401c_8533_99d6f27af654", "mw284c519a_cc2b_4a98_99ce_5a4471af99e1", "mw2cd81e51_eb11_4e2c_b609_b2f802438a6b", "mw3046ca21_42a2_4a4b_89c4_9d6ca3d927c5", "mw371071cd_ec20_4517_acc1_08dfdc871e87", "mw4035a2c9_3cda_467c_83cc_8f9c2902abaf", "mw5b225cdc_783f_4a15_93db_e960a2398b8e", "mw5c4edb54_cfd9_43af_b70b_e9ff1b44dc55", "mw5ffad843_5f02_419d_ba99_6e1f9b7e6b7b", "mw798d0b02_925e_471b_a372_526d681cc370", "mw7ce1b6a3_e65e_4aaa_9c32_aeefb420f0ea", "mw7d57aa6b_1bfb_4472_b555_919263d9eaf9", "mw812f63db_4cb0_40ad_b92b_9874be969dfe_init", "mw849ed3fd_87d9_44d2_9f3e_4d631b900d41_init", "mw85485398_9f97_408c_bca6_90f0a8377eae", "mw8796c919_9251_4970_8f87_0bca9ecfeb5c_init", "mw87bb1238_3292_467e_bfe3_ff7f1e64a351", "mw8f20c25d_9700_4822_b5f9_fe243e001091", "mw91e15e1e_c73e_4866_ab2b_8225a32b7610", "mw961dacfa_f443_4814_ad6c_a27c04e74268", "mw9f56ecc5_c22b_4f8c_8b82_90e2a6d9e364", "mwaf289d12_4291_4651_8bd1_82e321e476a4", "mwba0debe9_c575_4f5a_a980_e2b6857ff053", "mwbf296afc_5e4f_4819_8028_06b20d7af7ca", "mwc623d82f_a94e_4460_9aed_444597a728c2", "mwcb834e43_dc57_45ae_9452_f4c10955caf1_init", "mwd3807289_133c_4621_8087_366621f553d3", "mwee07eca4_0806_4cc3_a6ab_9226ee79be6c", "mwee54b5b4_b8c0_41df_8dda_5b160c5e10a5_init", "mwf166ad55_4ff0_49fb_95d2_b657ad7653d5_init", "mwf5cecb8f_89f8_4fba_b39b_b517d0bef2ce", "mwf7d1ff9f_1734_4232_9a96_037b31b193b0", "mwfcfaf604_14d4_47a6_b021_226d1fb5497c_init", "mwff26437c_166b_4946_ad35_f13df6145780", "mwff99ad6c_8951_4d58_a836_cf2d3d08ac86", "mwffba86ff_a560_401a_93d6_c0e30bf42c87"], unusedUserAction);
    var internal = this.internal;
    this.base.user.setUserScalar(user, "mw15abaa48_d7d0_4845_ae04_c573d289d495_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mw15ba24b5_7a87_479e_9be7_261b12cbdb63", internal, 0.000122223738254533, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mw18bbabcb_d229_4d91_99f1_484f2ba8f020", internal, 0.000203868171233541, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mw1a53a2cb_a3a7_40d7_ae07_4d93ad1123a3", internal, 0.00141678261342411, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mw231a5907_d1ee_4a43_83ab_abb72f19502c", internal, 4.1278840404602498e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mw2439178f_a48f_4425_82f9_13267b917b85", internal, 8.6208301529404207e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mw27f524cb_75b3_401c_8533_99d6f27af654", internal, 0.000203777063277265, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mw284c519a_cc2b_4a98_99ce_5a4471af99e1", internal, 3.04072645117622e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mw2cd81e51_eb11_4e2c_b609_b2f802438a6b", internal, 0.00050000000000000001, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mw3046ca21_42a2_4a4b_89c4_9d6ca3d927c5", internal, 0.17112297405395599, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mw371071cd_ec20_4517_acc1_08dfdc871e87", internal, 2.4130839216781901e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mw4035a2c9_3cda_467c_83cc_8f9c2902abaf", internal, 0.32112543279997602, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mw5b225cdc_783f_4a15_93db_e960a2398b8e", internal, 1.5375422413635299e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mw5c4edb54_cfd9_43af_b70b_e9ff1b44dc55", internal, 0.00010860849286769499, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mw5ffad843_5f02_419d_ba99_6e1f9b7e6b7b", internal, 8.9905470965988499e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mw798d0b02_925e_471b_a372_526d681cc370", internal, 2.6203899559530002e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mw7ce1b6a3_e65e_4aaa_9c32_aeefb420f0ea", internal, 1.30568052867489e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mw7d57aa6b_1bfb_4472_b555_919263d9eaf9", internal, 3.7608519020990102e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mw812f63db_4cb0_40ad_b92b_9874be969dfe_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mw849ed3fd_87d9_44d2_9f3e_4d631b900d41_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mw85485398_9f97_408c_bca6_90f0a8377eae", internal, 0.00079672253377037104, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mw8796c919_9251_4970_8f87_0bca9ecfeb5c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mw87bb1238_3292_467e_bfe3_ff7f1e64a351", internal, 1.5662833197895e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mw8f20c25d_9700_4822_b5f9_fe243e001091", internal, 0.00036289425875234702, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mw91e15e1e_c73e_4866_ab2b_8225a32b7610", internal, 2.3243274113454601e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mw961dacfa_f443_4814_ad6c_a27c04e74268", internal, 1.0780611108132999e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mw9f56ecc5_c22b_4f8c_8b82_90e2a6d9e364", internal, 2.2451852168257202e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mwaf289d12_4291_4651_8bd1_82e321e476a4", internal, 3.10498877738431e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mwba0debe9_c575_4f5a_a980_e2b6857ff053", internal, 5.61352652271706e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mwbf296afc_5e4f_4819_8028_06b20d7af7ca", internal, 0.155164586398126, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mwc623d82f_a94e_4460_9aed_444597a728c2", internal, 0.00077375270429581996, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mwcb834e43_dc57_45ae_9452_f4c10955caf1_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mwd3807289_133c_4621_8087_366621f553d3", internal, 2.3959124510538499e-05, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mwee07eca4_0806_4cc3_a6ab_9226ee79be6c", internal, 3.4093649073896599e-06, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mwee54b5b4_b8c0_41df_8dda_5b160c5e10a5_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mwf166ad55_4ff0_49fb_95d2_b657ad7653d5_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mwf5cecb8f_89f8_4fba_b39b_b517d0bef2ce", internal, 0.000102326862282225, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mwf7d1ff9f_1734_4232_9a96_037b31b193b0", internal, 6.9733302965160099e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mwfcfaf604_14d4_47a6_b021_226d1fb5497c_init", internal, 0, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mwff26437c_166b_4946_ad35_f13df6145780", internal, 5.5565841000043097e-07, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mwff99ad6c_8951_4d58_a836_cf2d3d08ac86", internal, 0.000132810241970949, -Infinity, Infinity, false);
    this.base.user.setUserScalar(user, "mwffba86ff_a560_401a_93d6_c0e30bf42c87", internal, 0.000227368268903121, -Infinity, Infinity, false);
    internal.initial_mw15abaa48_d7d0_4845_ae04_c573d289d495 = internal.mw15abaa48_d7d0_4845_ae04_c573d289d495_init;
    internal.initial_mw812f63db_4cb0_40ad_b92b_9874be969dfe = internal.mw812f63db_4cb0_40ad_b92b_9874be969dfe_init;
    internal.initial_mw849ed3fd_87d9_44d2_9f3e_4d631b900d41 = internal.mw849ed3fd_87d9_44d2_9f3e_4d631b900d41_init;
    internal.initial_mw8796c919_9251_4970_8f87_0bca9ecfeb5c = internal.mw8796c919_9251_4970_8f87_0bca9ecfeb5c_init;
    internal.initial_mwcb834e43_dc57_45ae_9452_f4c10955caf1 = internal.mwcb834e43_dc57_45ae_9452_f4c10955caf1_init;
    internal.initial_mwee54b5b4_b8c0_41df_8dda_5b160c5e10a5 = internal.mwee54b5b4_b8c0_41df_8dda_5b160c5e10a5_init;
    internal.initial_mwf166ad55_4ff0_49fb_95d2_b657ad7653d5 = internal.mwf166ad55_4ff0_49fb_95d2_b657ad7653d5_init;
    internal.initial_mwfcfaf604_14d4_47a6_b021_226d1fb5497c = internal.mwfcfaf604_14d4_47a6_b021_226d1fb5497c_init;
    this.updateMetadata();
  }
  getInternal() {
    return this.internal;
  }
  rhs(t, state, dstatedt) {
    var internal = this.internal;
    const mw15abaa48_d7d0_4845_ae04_c573d289d495 = state[0];
    const mwfcfaf604_14d4_47a6_b021_226d1fb5497c = state[1];
    const mw8796c919_9251_4970_8f87_0bca9ecfeb5c = state[2];
    const mw849ed3fd_87d9_44d2_9f3e_4d631b900d41 = state[3];
    const mwcb834e43_dc57_45ae_9452_f4c10955caf1 = state[4];
    const mwf166ad55_4ff0_49fb_95d2_b657ad7653d5 = state[5];
    const mwee54b5b4_b8c0_41df_8dda_5b160c5e10a5 = state[6];
    const mw812f63db_4cb0_40ad_b92b_9874be969dfe = state[7];
    dstatedt[0] = 0 + 1 * internal.mwee07eca4_0806_4cc3_a6ab_9226ee79be6c * internal.mw73259e20_240e_4f3a_b2e0_9ca248658898 / (internal.mw8f20c25d_9700_4822_b5f9_fe243e001091 + internal.mw73259e20_240e_4f3a_b2e0_9ca248658898) - 1 * internal.mw7ce1b6a3_e65e_4aaa_9c32_aeefb420f0ea * mw15abaa48_d7d0_4845_ae04_c573d289d495 / (internal.mw85485398_9f97_408c_bca6_90f0a8377eae + mw15abaa48_d7d0_4845_ae04_c573d289d495) - 1 * internal.mw798d0b02_925e_471b_a372_526d681cc370 * mw15abaa48_d7d0_4845_ae04_c573d289d495 / (internal.mwd3807289_133c_4621_8087_366621f553d3 + mw15abaa48_d7d0_4845_ae04_c573d289d495);
    dstatedt[7] = 0 + 1 * internal.mw91e15e1e_c73e_4866_ab2b_8225a32b7610 * internal.mw919f8a86_e702_4b24_9cd7_adad694fcf9b / (internal.mwf5cecb8f_89f8_4fba_b39b_b517d0bef2ce + internal.mw919f8a86_e702_4b24_9cd7_adad694fcf9b) - 1 * internal.mwff26437c_166b_4946_ad35_f13df6145780 * mw812f63db_4cb0_40ad_b92b_9874be969dfe / (internal.mw284c519a_cc2b_4a98_99ce_5a4471af99e1 + mw812f63db_4cb0_40ad_b92b_9874be969dfe);
    dstatedt[3] = 0 + 1 * internal.mw2439178f_a48f_4425_82f9_13267b917b85 * mw8796c919_9251_4970_8f87_0bca9ecfeb5c / (internal.mw5c4edb54_cfd9_43af_b70b_e9ff1b44dc55 + mw8796c919_9251_4970_8f87_0bca9ecfeb5c) - 1 * internal.mw961dacfa_f443_4814_ad6c_a27c04e74268 * mw849ed3fd_87d9_44d2_9f3e_4d631b900d41 / (internal.mw15ba24b5_7a87_479e_9be7_261b12cbdb63 + mw849ed3fd_87d9_44d2_9f3e_4d631b900d41) - 1 * internal.mwba0debe9_c575_4f5a_a980_e2b6857ff053 * mw849ed3fd_87d9_44d2_9f3e_4d631b900d41 / (internal.mwffba86ff_a560_401a_93d6_c0e30bf42c87 + mw849ed3fd_87d9_44d2_9f3e_4d631b900d41);
    dstatedt[2] = 0 + 1 * internal.mw798d0b02_925e_471b_a372_526d681cc370 * mw15abaa48_d7d0_4845_ae04_c573d289d495 / (internal.mwd3807289_133c_4621_8087_366621f553d3 + mw15abaa48_d7d0_4845_ae04_c573d289d495) - 1 * internal.mw2439178f_a48f_4425_82f9_13267b917b85 * mw8796c919_9251_4970_8f87_0bca9ecfeb5c / (internal.mw5c4edb54_cfd9_43af_b70b_e9ff1b44dc55 + mw8796c919_9251_4970_8f87_0bca9ecfeb5c) + 1 * internal.mw2cd81e51_eb11_4e2c_b609_b2f802438a6b * internal.mw08818dfe_fb12_45cc_8c1d_d965f142d0ce - internal.mwff99ad6c_8951_4d58_a836_cf2d3d08ac86 * mw8796c919_9251_4970_8f87_0bca9ecfeb5c;
    dstatedt[4] = 0 + 1 * internal.mw961dacfa_f443_4814_ad6c_a27c04e74268 * mw849ed3fd_87d9_44d2_9f3e_4d631b900d41 / (internal.mw15ba24b5_7a87_479e_9be7_261b12cbdb63 + mw849ed3fd_87d9_44d2_9f3e_4d631b900d41) - 1 * internal.mw231a5907_d1ee_4a43_83ab_abb72f19502c * mwcb834e43_dc57_45ae_9452_f4c10955caf1 / (internal.mwaf289d12_4291_4651_8bd1_82e321e476a4 + mwcb834e43_dc57_45ae_9452_f4c10955caf1) + 1 * internal.mwff26437c_166b_4946_ad35_f13df6145780 * mw812f63db_4cb0_40ad_b92b_9874be969dfe / (internal.mw284c519a_cc2b_4a98_99ce_5a4471af99e1 + mw812f63db_4cb0_40ad_b92b_9874be969dfe);
    dstatedt[6] = 0 + 1 * internal.mw231a5907_d1ee_4a43_83ab_abb72f19502c * mwcb834e43_dc57_45ae_9452_f4c10955caf1 / (internal.mwaf289d12_4291_4651_8bd1_82e321e476a4 + mwcb834e43_dc57_45ae_9452_f4c10955caf1) + 1 * internal.mw1a53a2cb_a3a7_40d7_ae07_4d93ad1123a3 * mwf166ad55_4ff0_49fb_95d2_b657ad7653d5 / (internal.mw4035a2c9_3cda_467c_83cc_8f9c2902abaf + mwf166ad55_4ff0_49fb_95d2_b657ad7653d5) - 1 * internal.mwf7d1ff9f_1734_4232_9a96_037b31b193b0 * mwee54b5b4_b8c0_41df_8dda_5b160c5e10a5 / (internal.mw7d57aa6b_1bfb_4472_b555_919263d9eaf9 + mwee54b5b4_b8c0_41df_8dda_5b160c5e10a5) - 1 * internal.mw87bb1238_3292_467e_bfe3_ff7f1e64a351 * mwee54b5b4_b8c0_41df_8dda_5b160c5e10a5 / (internal.mw371071cd_ec20_4517_acc1_08dfdc871e87 + mwee54b5b4_b8c0_41df_8dda_5b160c5e10a5);
    dstatedt[5] = 0 + 1 * internal.mw9f56ecc5_c22b_4f8c_8b82_90e2a6d9e364 * mwfcfaf604_14d4_47a6_b021_226d1fb5497c / (internal.mw18bbabcb_d229_4d91_99f1_484f2ba8f020 + mwfcfaf604_14d4_47a6_b021_226d1fb5497c) + 1 * internal.mwba0debe9_c575_4f5a_a980_e2b6857ff053 * mw849ed3fd_87d9_44d2_9f3e_4d631b900d41 / (internal.mwffba86ff_a560_401a_93d6_c0e30bf42c87 + mw849ed3fd_87d9_44d2_9f3e_4d631b900d41) - 1 * internal.mw1a53a2cb_a3a7_40d7_ae07_4d93ad1123a3 * mwf166ad55_4ff0_49fb_95d2_b657ad7653d5 / (internal.mw4035a2c9_3cda_467c_83cc_8f9c2902abaf + mwf166ad55_4ff0_49fb_95d2_b657ad7653d5) - 1 * internal.mw5ffad843_5f02_419d_ba99_6e1f9b7e6b7b * mwf166ad55_4ff0_49fb_95d2_b657ad7653d5 / (internal.mw3046ca21_42a2_4a4b_89c4_9d6ca3d927c5 + mwf166ad55_4ff0_49fb_95d2_b657ad7653d5) - 1 * internal.mwc623d82f_a94e_4460_9aed_444597a728c2 * mwfcfaf604_14d4_47a6_b021_226d1fb5497c / (internal.mwbf296afc_5e4f_4819_8028_06b20d7af7ca + mwfcfaf604_14d4_47a6_b021_226d1fb5497c);
    dstatedt[1] = 0 + 1 * internal.mw7ce1b6a3_e65e_4aaa_9c32_aeefb420f0ea * mw15abaa48_d7d0_4845_ae04_c573d289d495 / (internal.mw85485398_9f97_408c_bca6_90f0a8377eae + mw15abaa48_d7d0_4845_ae04_c573d289d495) - 1 * internal.mw9f56ecc5_c22b_4f8c_8b82_90e2a6d9e364 * mwfcfaf604_14d4_47a6_b021_226d1fb5497c / (internal.mw18bbabcb_d229_4d91_99f1_484f2ba8f020 + mwfcfaf604_14d4_47a6_b021_226d1fb5497c) + 1 * internal.mwf7d1ff9f_1734_4232_9a96_037b31b193b0 * mwee54b5b4_b8c0_41df_8dda_5b160c5e10a5 / (internal.mw7d57aa6b_1bfb_4472_b555_919263d9eaf9 + mwee54b5b4_b8c0_41df_8dda_5b160c5e10a5) + 1 * internal.mw5ffad843_5f02_419d_ba99_6e1f9b7e6b7b * mwf166ad55_4ff0_49fb_95d2_b657ad7653d5 / (internal.mw3046ca21_42a2_4a4b_89c4_9d6ca3d927c5 + mwf166ad55_4ff0_49fb_95d2_b657ad7653d5) - 1 * internal.mw5b225cdc_783f_4a15_93db_e960a2398b8e * mwfcfaf604_14d4_47a6_b021_226d1fb5497c / (internal.mw27f524cb_75b3_401c_8533_99d6f27af654 + mwfcfaf604_14d4_47a6_b021_226d1fb5497c);
  }
  names() {
    return this.metadata.ynames.slice(1);
  }
  updateMetadata() {
    this.metadata = {};
    var internal = this.internal;
    this.metadata.ynames = ["t", "mw15abaa48_d7d0_4845_ae04_c573d289d495", "mwfcfaf604_14d4_47a6_b021_226d1fb5497c", "mw8796c919_9251_4970_8f87_0bca9ecfeb5c", "mw849ed3fd_87d9_44d2_9f3e_4d631b900d41", "mwcb834e43_dc57_45ae_9452_f4c10955caf1", "mwf166ad55_4ff0_49fb_95d2_b657ad7653d5", "mwee54b5b4_b8c0_41df_8dda_5b160c5e10a5", "mw812f63db_4cb0_40ad_b92b_9874be969dfe"];
    this.metadata.internalOrder = {initial_mw15abaa48_d7d0_4845_ae04_c573d289d495: null, initial_mw812f63db_4cb0_40ad_b92b_9874be969dfe: null, initial_mw849ed3fd_87d9_44d2_9f3e_4d631b900d41: null, initial_mw8796c919_9251_4970_8f87_0bca9ecfeb5c: null, initial_mwcb834e43_dc57_45ae_9452_f4c10955caf1: null, initial_mwee54b5b4_b8c0_41df_8dda_5b160c5e10a5: null, initial_mwf166ad55_4ff0_49fb_95d2_b657ad7653d5: null, initial_mwfcfaf604_14d4_47a6_b021_226d1fb5497c: null, mw08818dfe_fb12_45cc_8c1d_d965f142d0ce: null, mw15abaa48_d7d0_4845_ae04_c573d289d495_init: null, mw15ba24b5_7a87_479e_9be7_261b12cbdb63: null, mw18bbabcb_d229_4d91_99f1_484f2ba8f020: null, mw1a53a2cb_a3a7_40d7_ae07_4d93ad1123a3: null, mw231a5907_d1ee_4a43_83ab_abb72f19502c: null, mw2439178f_a48f_4425_82f9_13267b917b85: null, mw27f524cb_75b3_401c_8533_99d6f27af654: null, mw284c519a_cc2b_4a98_99ce_5a4471af99e1: null, mw2cd81e51_eb11_4e2c_b609_b2f802438a6b: null, mw3046ca21_42a2_4a4b_89c4_9d6ca3d927c5: null, mw371071cd_ec20_4517_acc1_08dfdc871e87: null, mw4035a2c9_3cda_467c_83cc_8f9c2902abaf: null, mw5b225cdc_783f_4a15_93db_e960a2398b8e: null, mw5c4edb54_cfd9_43af_b70b_e9ff1b44dc55: null, mw5ffad843_5f02_419d_ba99_6e1f9b7e6b7b: null, mw73259e20_240e_4f3a_b2e0_9ca248658898: null, mw798d0b02_925e_471b_a372_526d681cc370: null, mw7ce1b6a3_e65e_4aaa_9c32_aeefb420f0ea: null, mw7d57aa6b_1bfb_4472_b555_919263d9eaf9: null, mw812f63db_4cb0_40ad_b92b_9874be969dfe_init: null, mw81b30d38_6ef3_4391_b826_e6c3cc210196: null, mw849ed3fd_87d9_44d2_9f3e_4d631b900d41_init: null, mw85485398_9f97_408c_bca6_90f0a8377eae: null, mw8796c919_9251_4970_8f87_0bca9ecfeb5c_init: null, mw87bb1238_3292_467e_bfe3_ff7f1e64a351: null, mw8f20c25d_9700_4822_b5f9_fe243e001091: null, mw919f8a86_e702_4b24_9cd7_adad694fcf9b: null, mw91e15e1e_c73e_4866_ab2b_8225a32b7610: null, mw961dacfa_f443_4814_ad6c_a27c04e74268: null, mw9f56ecc5_c22b_4f8c_8b82_90e2a6d9e364: null, mwaf289d12_4291_4651_8bd1_82e321e476a4: null, mwba0debe9_c575_4f5a_a980_e2b6857ff053: null, mwbf296afc_5e4f_4819_8028_06b20d7af7ca: null, mwc623d82f_a94e_4460_9aed_444597a728c2: null, mwcb834e43_dc57_45ae_9452_f4c10955caf1_init: null, mwd3807289_133c_4621_8087_366621f553d3: null, mwee07eca4_0806_4cc3_a6ab_9226ee79be6c: null, mwee54b5b4_b8c0_41df_8dda_5b160c5e10a5_init: null, mwf166ad55_4ff0_49fb_95d2_b657ad7653d5_init: null, mwf5cecb8f_89f8_4fba_b39b_b517d0bef2ce: null, mwf7d1ff9f_1734_4232_9a96_037b31b193b0: null, mwfcfaf604_14d4_47a6_b021_226d1fb5497c_init: null, mwff26437c_166b_4946_ad35_f13df6145780: null, mwff99ad6c_8951_4d58_a836_cf2d3d08ac86: null, mwffba86ff_a560_401a_93d6_c0e30bf42c87: null};
    this.metadata.variableOrder = {mw15abaa48_d7d0_4845_ae04_c573d289d495: null, mwfcfaf604_14d4_47a6_b021_226d1fb5497c: null, mw8796c919_9251_4970_8f87_0bca9ecfeb5c: null, mw849ed3fd_87d9_44d2_9f3e_4d631b900d41: null, mwcb834e43_dc57_45ae_9452_f4c10955caf1: null, mwf166ad55_4ff0_49fb_95d2_b657ad7653d5: null, mwee54b5b4_b8c0_41df_8dda_5b160c5e10a5: null, mw812f63db_4cb0_40ad_b92b_9874be969dfe: null};
    this.metadata.outputOrder = null;
  }
  getMetadata() {
    return this.metadata;
  }
}
