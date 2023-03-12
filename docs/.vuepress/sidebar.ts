import type { SidebarConfig } from '@vuepress/theme-default'

const sidebar: SidebarConfig = {
  '/': [
    {
      text: '語言選擇',
      children: [
        '/zh_tw',
        '/ja_jp',
        '/en_us',
        '/ko_kr'
      ]
    }
  ],
  '/zh_tw': [
    {
      text: '語言選擇',
      children: [
        '/zh_tw',
        '/ja_jp',
        '/en_us',
        '/ko_kr'
      ]
    },
    {
      text: '裝飾',
      children: [
        '/zh_tw/decor/alien_antenna.md',
        '/zh_tw/decor/angel_circle.md',
        '/zh_tw/decor/cat_ear.md',
        '/zh_tw/decor/cat_hat.md',
        '/zh_tw/decor/christmas_hat.md',
        '/zh_tw/decor/christmas_tree.md',
        '/zh_tw/decor/deer_horn.md',
        '/zh_tw/decor/demon_corner.md',
        '/zh_tw/decor/firework_star.md',
        '/zh_tw/decor/headband_headset.md',
        '/zh_tw/decor/lucky_money.md',
        '/zh_tw/decor/rabbit_ear.md',
        '/zh_tw/decor/witch_hat.md',
      ]
    },
    {
      text: '特性',
      children: [
        '/zh_tw/feature/anniversary.md',
        '/zh_tw/feature/auto_backpack_sort.md',
        '/zh_tw/feature/cat_bowl.md',
        '/zh_tw/feature/cat_day.md',
        '/zh_tw/feature/daily_signin.md',
        '/zh_tw/feature/discord_server.md',
        '/zh_tw/feature/dispenser_industry.md',
        '/zh_tw/feature/drop_limit.md',
        '/zh_tw/feature/edit_sign.md',
        '/zh_tw/feature/enhanced_armor_stand.md',
        '/zh_tw/feature/enhanced_dragon.md',
        '/zh_tw/feature/enhanced_wandering_trader.md',
        '/zh_tw/feature/enhanced_warden.md',
        '/zh_tw/feature/enhanced_wither.md',
        '/zh_tw/feature/entity_glowing.md',
        '/zh_tw/feature/entity_limit.md',
        '/zh_tw/feature/entity_summon.md',
        '/zh_tw/feature/full_map.md',
        '/zh_tw/feature/hopper_limit.md',
        '/zh_tw/feature/invisible_item_frame.md',
        '/zh_tw/feature/item_placement.md',
        '/zh_tw/feature/living_ore.md',
        '/zh_tw/feature/ore_glowing.md',
        '/zh_tw/feature/redstone_limit.md',
        '/zh_tw/feature/removal_mechanism.md',
        '/zh_tw/feature/soul_link.md',
        '/zh_tw/feature/spawn_elder_guardian.md',
      ]
    },
    {
      text: '食物',
      children: [
        '/zh_tw/food/beef_cheese_sandwich.md',
        '/zh_tw/food/beef_jerky.md',
        '/zh_tw/food/candy_cane.md',
        '/zh_tw/food/cheese.md',
        '/zh_tw/food/cheese_puff.md',
        '/zh_tw/food/chocolate.md',
        '/zh_tw/food/chocolate_bone.md',
        '/zh_tw/food/chocolate_bread.md',
        '/zh_tw/food/chocolate_cake.md',
        '/zh_tw/food/chocolate_cookie.md',
        '/zh_tw/food/ice_cream_cone.md',
        '/zh_tw/food/mouldy_bread.md',
      ]
    },
    {
      text: '道具',
      children: [
        '/zh_tw/item/advanced_tnt.md',
        '/zh_tw/item/axe.md',
        '/zh_tw/item/back.md',
        '/zh_tw/item/barter_menu.md',
        '/zh_tw/item/barter_sell_block.md',
        '/zh_tw/item/boots.md',
        '/zh_tw/item/bow.md',
        '/zh_tw/item/builder_model_device.md',
        '/zh_tw/item/build_blueprint.md',
        '/zh_tw/item/build_replicator_block.md',
        '/zh_tw/item/canned_cat.md',
        '/zh_tw/item/cat_amulet.md',
        '/zh_tw/item/cat_hair.md',
        '/zh_tw/item/cat_hair_brush.md',
        '/zh_tw/item/cat_palm.md',
        '/zh_tw/item/chestplate.md',
        '/zh_tw/item/coin.md',
        '/zh_tw/item/crossbow.md',
        '/zh_tw/item/currency_converter.md',
        '/zh_tw/item/dragon_blood_tooth.md',
        '/zh_tw/item/dragon_hammer.md',
        '/zh_tw/item/dragon_tooth.md',
        '/zh_tw/item/draw_map.md',
        '/zh_tw/item/elytra_of_chestplate.md',
        '/zh_tw/item/ender_dragon_queue.md',
        '/zh_tw/item/energy_laser_crystal.md',
        '/zh_tw/item/entity_exterior_tag.md',
        '/zh_tw/item/exchange_record_gemstone.md',
        '/zh_tw/item/explosive_starlight_water.md',
        '/zh_tw/item/fast_break_magic_wand.md',
        '/zh_tw/item/fast_fill_magic_wand.md',
        '/zh_tw/item/helmet.md',
        '/zh_tw/item/hoe.md',
        '/zh_tw/item/internet_controller.md',
        '/zh_tw/item/invisible_light.md',
        '/zh_tw/item/invite_transfer_gemstone.md',
        '/zh_tw/item/land_block.md',
        '/zh_tw/item/land_book.md',
        '/zh_tw/item/land_energy.md',
        '/zh_tw/item/land_flying_device.md',
        '/zh_tw/item/laser_crystal.md',
        '/zh_tw/item/leggings.md',
        '/zh_tw/item/logger_menu.md',
        '/zh_tw/item/lottery_ticket.md',
        '/zh_tw/item/magic_nether_star.md',
        '/zh_tw/item/music_box.md',
        '/zh_tw/item/newcomer_bag.md',
        '/zh_tw/item/nightmare_crystal.md',
        '/zh_tw/item/notification_block.md',
        '/zh_tw/item/palette.md',
        '/zh_tw/item/particle_block.md',
        '/zh_tw/item/peaceful_block.md',
        '/zh_tw/item/peaceful_proof.md',
        '/zh_tw/item/pen.md',
        '/zh_tw/item/pickaxe.md',
        '/zh_tw/item/piggy_bank.md',
        '/zh_tw/item/pitch_change_pen.md',
        '/zh_tw/item/powerful_ejector_block.md',
        '/zh_tw/item/premium_hopper.md',
        '/zh_tw/item/railway_block.md',
        '/zh_tw/item/random_transfer.md',
        '/zh_tw/item/record_point_banner.md',
        '/zh_tw/item/record_point_gemstone.md',
        '/zh_tw/item/restricted_crafting_table.md',
        '/zh_tw/item/reward_card.md',
        '/zh_tw/item/rope.md',
        '/zh_tw/item/rotten_flesh_block.md',
        '/zh_tw/item/shovel.md',
        '/zh_tw/item/simple_elevator.md',
        '/zh_tw/item/slime_chunk_probe.md',
        '/zh_tw/item/soul_core.md',
        '/zh_tw/item/sound_bell.md',
        '/zh_tw/item/super_fish_cracker.md',
        '/zh_tw/item/sword.md',
        '/zh_tw/item/title_block.md',
        '/zh_tw/item/transfer.md',
        '/zh_tw/item/transfer_book.md',
        '/zh_tw/item/wither_bone_meal.md',
        '/zh_tw/item/world_map_capture.md',
        '/zh_tw/item/world_map_icon.md',
        '/zh_tw/item/world_map_view.md',
      ]
    },
    {
      text: '特殊',
      children: [
        '/zh_tw/special/barrier.md',
        '/zh_tw/special/brown_mushroom.md',
        '/zh_tw/special/cobweb.md',
        '/zh_tw/special/elytra.md',
        '/zh_tw/special/red_mushroom.md',
        '/zh_tw/special/wandering_trader_spawn_egg.md',
      ]
    }
  ],
  '/ja_jp': [
    {
      text: '言語の選択',
      children: [
        '/zh_tw',
        '/ja_jp',
        '/en_us',
        '/ko_kr'
      ]
    },
    {
      text: '装飾品',
      children: [
        '/ja_jp/decor/alien_antenna.md',
        '/ja_jp/decor/angel_circle.md',
        '/ja_jp/decor/cat_ear.md',
        '/ja_jp/decor/cat_hat.md',
        '/ja_jp/decor/christmas_hat.md',
        '/ja_jp/decor/christmas_tree.md',
        '/ja_jp/decor/deer_horn.md',
        '/ja_jp/decor/demon_corner.md',
        '/ja_jp/decor/firework_star.md',
        '/ja_jp/decor/headband_headset.md',
        '/ja_jp/decor/lucky_money.md',
        '/ja_jp/decor/rabbit_ear.md',
        '/ja_jp/decor/witch_hat.md',
      ]
    },
    {
      text: '特性',
      children: [
        '/ja_jp/feature/anniversary.md',
        '/ja_jp/feature/auto_backpack_sort.md',
        '/ja_jp/feature/cat_bowl.md',
        '/ja_jp/feature/cat_day.md',
        '/ja_jp/feature/daily_signin.md',
        '/ja_jp/feature/discord_server.md',
        '/ja_jp/feature/dispenser_industry.md',
        '/ja_jp/feature/drop_limit.md',
        '/ja_jp/feature/edit_sign.md',
        '/ja_jp/feature/enhanced_armor_stand.md',
        '/ja_jp/feature/enhanced_dragon.md',
        '/ja_jp/feature/enhanced_wandering_trader.md',
        '/ja_jp/feature/enhanced_warden.md',
        '/ja_jp/feature/enhanced_wither.md',
        '/ja_jp/feature/entity_glowing.md',
        '/ja_jp/feature/entity_limit.md',
        '/ja_jp/feature/entity_summon.md',
        '/ja_jp/feature/full_map.md',
        '/ja_jp/feature/hopper_limit.md',
        '/ja_jp/feature/invisible_item_frame.md',
        '/ja_jp/feature/item_placement.md',
        '/ja_jp/feature/living_ore.md',
        '/ja_jp/feature/ore_glowing.md',
        '/ja_jp/feature/redstone_limit.md',
        '/ja_jp/feature/removal_mechanism.md',
        '/ja_jp/feature/soul_link.md',
        '/ja_jp/feature/spawn_elder_guardian.md',
      ]
    },
    {
      text: '食べ物',
      children: [
        '/ja_jp/food/beef_cheese_sandwich.md',
        '/ja_jp/food/beef_jerky.md',
        '/ja_jp/food/candy_cane.md',
        '/ja_jp/food/cheese.md',
        '/ja_jp/food/cheese_puff.md',
        '/ja_jp/food/chocolate.md',
        '/ja_jp/food/chocolate_bone.md',
        '/ja_jp/food/chocolate_bread.md',
        '/ja_jp/food/chocolate_cake.md',
        '/ja_jp/food/chocolate_cookie.md',
        '/ja_jp/food/ice_cream_cone.md',
        '/ja_jp/food/mouldy_bread.md',
      ]
    },
    {
      text: 'おもちゃ',
      children: [
        '/ja_jp/item/advanced_tnt.md',
        '/ja_jp/item/axe.md',
        '/ja_jp/item/back.md',
        '/ja_jp/item/barter_menu.md',
        '/ja_jp/item/barter_sell_block.md',
        '/ja_jp/item/boots.md',
        '/ja_jp/item/bow.md',
        '/ja_jp/item/builder_model_device.md',
        '/ja_jp/item/build_blueprint.md',
        '/ja_jp/item/build_replicator_block.md',
        '/ja_jp/item/canned_cat.md',
        '/ja_jp/item/cat_amulet.md',
        '/ja_jp/item/cat_hair.md',
        '/ja_jp/item/cat_hair_brush.md',
        '/ja_jp/item/cat_palm.md',
        '/ja_jp/item/chestplate.md',
        '/ja_jp/item/coin.md',
        '/ja_jp/item/crossbow.md',
        '/ja_jp/item/currency_converter.md',
        '/ja_jp/item/dragon_blood_tooth.md',
        '/ja_jp/item/dragon_hammer.md',
        '/ja_jp/item/dragon_tooth.md',
        '/ja_jp/item/draw_map.md',
        '/ja_jp/item/elytra_of_chestplate.md',
        '/ja_jp/item/ender_dragon_queue.md',
        '/ja_jp/item/energy_laser_crystal.md',
        '/ja_jp/item/entity_exterior_tag.md',
        '/ja_jp/item/exchange_record_gemstone.md',
        '/ja_jp/item/explosive_starlight_water.md',
        '/ja_jp/item/fast_break_magic_wand.md',
        '/ja_jp/item/fast_fill_magic_wand.md',
        '/ja_jp/item/helmet.md',
        '/ja_jp/item/hoe.md',
        '/ja_jp/item/internet_controller.md',
        '/ja_jp/item/invisible_light.md',
        '/ja_jp/item/invite_transfer_gemstone.md',
        '/ja_jp/item/land_block.md',
        '/ja_jp/item/land_book.md',
        '/ja_jp/item/land_energy.md',
        '/ja_jp/item/land_flying_device.md',
        '/ja_jp/item/laser_crystal.md',
        '/ja_jp/item/leggings.md',
        '/ja_jp/item/logger_menu.md',
        '/ja_jp/item/lottery_ticket.md',
        '/ja_jp/item/magic_nether_star.md',
        '/ja_jp/item/music_box.md',
        '/ja_jp/item/newcomer_bag.md',
        '/ja_jp/item/nightmare_crystal.md',
        '/ja_jp/item/notification_block.md',
        '/ja_jp/item/palette.md',
        '/ja_jp/item/particle_block.md',
        '/ja_jp/item/peaceful_block.md',
        '/ja_jp/item/peaceful_proof.md',
        '/ja_jp/item/pen.md',
        '/ja_jp/item/pickaxe.md',
        '/ja_jp/item/piggy_bank.md',
        '/ja_jp/item/pitch_change_pen.md',
        '/ja_jp/item/powerful_ejector_block.md',
        '/ja_jp/item/premium_hopper.md',
        '/ja_jp/item/railway_block.md',
        '/ja_jp/item/random_transfer.md',
        '/ja_jp/item/record_point_banner.md',
        '/ja_jp/item/record_point_gemstone.md',
        '/ja_jp/item/restricted_crafting_table.md',
        '/ja_jp/item/reward_card.md',
        '/ja_jp/item/rope.md',
        '/ja_jp/item/rotten_flesh_block.md',
        '/ja_jp/item/shovel.md',
        '/ja_jp/item/simple_elevator.md',
        '/ja_jp/item/slime_chunk_probe.md',
        '/ja_jp/item/soul_core.md',
        '/ja_jp/item/sound_bell.md',
        '/ja_jp/item/super_fish_cracker.md',
        '/ja_jp/item/sword.md',
        '/ja_jp/item/title_block.md',
        '/ja_jp/item/transfer.md',
        '/ja_jp/item/transfer_book.md',
        '/ja_jp/item/wither_bone_meal.md',
        '/ja_jp/item/world_map_capture.md',
        '/ja_jp/item/world_map_icon.md',
        '/ja_jp/item/world_map_view.md',
      ]
    },
    {
      text: '特殊品',
      children: [
        '/ja_jp/special/barrier.md',
        '/ja_jp/special/brown_mushroom.md',
        '/ja_jp/special/cobweb.md',
        '/ja_jp/special/elytra.md',
        '/ja_jp/special/red_mushroom.md',
        '/ja_jp/special/wandering_trader_spawn_egg.md',
      ]
    }
  ],
  '/en_us': [
    {
      text: 'Language Select',
      children: [
        '/zh_tw',
        '/ja_jp',
        '/en_us',
        '/ko_kr'
      ]
    },
    {
      text: 'Decoration',
      children: [
        '/en_us/decor/alien_antenna.md',
        '/en_us/decor/angel_circle.md',
        '/en_us/decor/cat_ear.md',
        '/en_us/decor/cat_hat.md',
        '/en_us/decor/christmas_hat.md',
        '/en_us/decor/christmas_tree.md',
        '/en_us/decor/deer_horn.md',
        '/en_us/decor/demon_corner.md',
        '/en_us/decor/firework_star.md',
        '/en_us/decor/headband_headset.md',
        '/en_us/decor/lucky_money.md',
        '/en_us/decor/rabbit_ear.md',
        '/en_us/decor/witch_hat.md',
      ]
    },
    {
      text: 'Special',
      children: [
        '/en_us/feature/anniversary.md',
        '/en_us/feature/auto_backpack_sort.md',
        '/en_us/feature/cat_bowl.md',
        '/en_us/feature/cat_day.md',
        '/en_us/feature/daily_signin.md',
        '/en_us/feature/discord_server.md',
        '/en_us/feature/dispenser_industry.md',
        '/en_us/feature/drop_limit.md',
        '/en_us/feature/edit_sign.md',
        '/en_us/feature/enhanced_armor_stand.md',
        '/en_us/feature/enhanced_dragon.md',
        '/en_us/feature/enhanced_wandering_trader.md',
        '/en_us/feature/enhanced_warden.md',
        '/en_us/feature/enhanced_wither.md',
        '/en_us/feature/entity_glowing.md',
        '/en_us/feature/entity_limit.md',
        '/en_us/feature/entity_summon.md',
        '/en_us/feature/full_map.md',
        '/en_us/feature/hopper_limit.md',
        '/en_us/feature/invisible_item_frame.md',
        '/en_us/feature/item_placement.md',
        '/en_us/feature/living_ore.md',
        '/en_us/feature/ore_glowing.md',
        '/en_us/feature/redstone_limit.md',
        '/en_us/feature/removal_mechanism.md',
        '/en_us/feature/soul_link.md',
        '/en_us/feature/spawn_elder_guardian.md',
      ]
    },
    {
      text: 'Food',
      children: [
        '/en_us/food/beef_cheese_sandwich.md',
        '/en_us/food/beef_jerky.md',
        '/en_us/food/candy_cane.md',
        '/en_us/food/cheese.md',
        '/en_us/food/cheese_puff.md',
        '/en_us/food/chocolate.md',
        '/en_us/food/chocolate_bone.md',
        '/en_us/food/chocolate_bread.md',
        '/en_us/food/chocolate_cake.md',
        '/en_us/food/chocolate_cookie.md',
        '/en_us/food/ice_cream_cone.md',
        '/en_us/food/mouldy_bread.md',
      ]
    },
    {
      text: 'Items',
      children: [
        '/en_us/item/advanced_tnt.md',
        '/en_us/item/axe.md',
        '/en_us/item/back.md',
        '/en_us/item/barter_menu.md',
        '/en_us/item/barter_sell_block.md',
        '/en_us/item/boots.md',
        '/en_us/item/bow.md',
        '/en_us/item/builder_model_device.md',
        '/en_us/item/build_blueprint.md',
        '/en_us/item/build_replicator_block.md',
        '/en_us/item/canned_cat.md',
        '/en_us/item/cat_amulet.md',
        '/en_us/item/cat_hair.md',
        '/en_us/item/cat_hair_brush.md',
        '/en_us/item/cat_palm.md',
        '/en_us/item/chestplate.md',
        '/en_us/item/coin.md',
        '/en_us/item/crossbow.md',
        '/en_us/item/currency_converter.md',
        '/en_us/item/dragon_blood_tooth.md',
        '/en_us/item/dragon_hammer.md',
        '/en_us/item/dragon_tooth.md',
        '/en_us/item/draw_map.md',
        '/en_us/item/elytra_of_chestplate.md',
        '/en_us/item/ender_dragon_queue.md',
        '/en_us/item/energy_laser_crystal.md',
        '/en_us/item/entity_exterior_tag.md',
        '/en_us/item/exchange_record_gemstone.md',
        '/en_us/item/explosive_starlight_water.md',
        '/en_us/item/fast_break_magic_wand.md',
        '/en_us/item/fast_fill_magic_wand.md',
        '/en_us/item/helmet.md',
        '/en_us/item/hoe.md',
        '/en_us/item/internet_controller.md',
        '/en_us/item/invisible_light.md',
        '/en_us/item/invite_transfer_gemstone.md',
        '/en_us/item/land_block.md',
        '/en_us/item/land_book.md',
        '/en_us/item/land_energy.md',
        '/en_us/item/land_flying_device.md',
        '/en_us/item/laser_crystal.md',
        '/en_us/item/leggings.md',
        '/en_us/item/logger_menu.md',
        '/en_us/item/lottery_ticket.md',
        '/en_us/item/magic_nether_star.md',
        '/en_us/item/music_box.md',
        '/en_us/item/newcomer_bag.md',
        '/en_us/item/nightmare_crystal.md',
        '/en_us/item/notification_block.md',
        '/en_us/item/palette.md',
        '/en_us/item/particle_block.md',
        '/en_us/item/peaceful_block.md',
        '/en_us/item/peaceful_proof.md',
        '/en_us/item/pen.md',
        '/en_us/item/pickaxe.md',
        '/en_us/item/piggy_bank.md',
        '/en_us/item/pitch_change_pen.md',
        '/en_us/item/powerful_ejector_block.md',
        '/en_us/item/premium_hopper.md',
        '/en_us/item/railway_block.md',
        '/en_us/item/random_transfer.md',
        '/en_us/item/record_point_banner.md',
        '/en_us/item/record_point_gemstone.md',
        '/en_us/item/restricted_crafting_table.md',
        '/en_us/item/reward_card.md',
        '/en_us/item/rope.md',
        '/en_us/item/rotten_flesh_block.md',
        '/en_us/item/shovel.md',
        '/en_us/item/simple_elevator.md',
        '/en_us/item/slime_chunk_probe.md',
        '/en_us/item/soul_core.md',
        '/en_us/item/sound_bell.md',
        '/en_us/item/super_fish_cracker.md',
        '/en_us/item/sword.md',
        '/en_us/item/title_block.md',
        '/en_us/item/transfer.md',
        '/en_us/item/transfer_book.md',
        '/en_us/item/wither_bone_meal.md',
        '/en_us/item/world_map_capture.md',
        '/en_us/item/world_map_icon.md',
        '/en_us/item/world_map_view.md',
      ]
    },
    {
      text: 'Features',
      children: [
        '/en_us/special/barrier.md',
        '/en_us/special/brown_mushroom.md',
        '/en_us/special/cobweb.md',
        '/en_us/special/elytra.md',
        '/en_us/special/red_mushroom.md',
        '/en_us/special/wandering_trader_spawn_egg.md',
      ]
    }
  ],
  '/ko_kr': [
    {
      text: '언어 선택',
      children: [
        '/zh_tw',
        '/ja_jp',
        '/en_us',
        '/ko_kr'
      ]
    },
    {
      text: '장식',
      children: [
        '/ko_kr/decor/alien_antenna.md',
        '/ko_kr/decor/angel_circle.md',
        '/ko_kr/decor/cat_ear.md',
        '/ko_kr/decor/cat_hat.md',
        '/ko_kr/decor/christmas_hat.md',
        '/ko_kr/decor/christmas_tree.md',
        '/ko_kr/decor/deer_horn.md',
        '/ko_kr/decor/demon_corner.md',
        '/ko_kr/decor/firework_star.md',
        '/ko_kr/decor/headband_headset.md',
        '/ko_kr/decor/lucky_money.md',
        '/ko_kr/decor/rabbit_ear.md',
        '/ko_kr/decor/witch_hat.md',
      ]
    },
    {
      text: '특별',
      children: [
        '/ko_kr/feature/anniversary.md',
        '/ko_kr/feature/auto_backpack_sort.md',
        '/ko_kr/feature/cat_bowl.md',
        '/ko_kr/feature/cat_day.md',
        '/ko_kr/feature/daily_signin.md',
        '/ko_kr/feature/discord_server.md',
        '/ko_kr/feature/dispenser_industry.md',
        '/ko_kr/feature/drop_limit.md',
        '/ko_kr/feature/edit_sign.md',
        '/ko_kr/feature/enhanced_armor_stand.md',
        '/ko_kr/feature/enhanced_dragon.md',
        '/ko_kr/feature/enhanced_wandering_trader.md',
        '/ko_kr/feature/enhanced_warden.md',
        '/ko_kr/feature/enhanced_wither.md',
        '/ko_kr/feature/entity_glowing.md',
        '/ko_kr/feature/entity_limit.md',
        '/ko_kr/feature/entity_summon.md',
        '/ko_kr/feature/full_map.md',
        '/ko_kr/feature/hopper_limit.md',
        '/ko_kr/feature/invisible_item_frame.md',
        '/ko_kr/feature/item_placement.md',
        '/ko_kr/feature/living_ore.md',
        '/ko_kr/feature/ore_glowing.md',
        '/ko_kr/feature/redstone_limit.md',
        '/ko_kr/feature/removal_mechanism.md',
        '/ko_kr/feature/soul_link.md',
        '/ko_kr/feature/spawn_elder_guardian.md',
      ]
    },
    {
      text: '음식',
      children: [
        '/ko_kr/food/beef_cheese_sandwich.md',
        '/ko_kr/food/beef_jerky.md',
        '/ko_kr/food/candy_cane.md',
        '/ko_kr/food/cheese.md',
        '/ko_kr/food/cheese_puff.md',
        '/ko_kr/food/chocolate.md',
        '/ko_kr/food/chocolate_bone.md',
        '/ko_kr/food/chocolate_bread.md',
        '/ko_kr/food/chocolate_cake.md',
        '/ko_kr/food/chocolate_cookie.md',
        '/ko_kr/food/ice_cream_cone.md',
        '/ko_kr/food/mouldy_bread.md',
      ]
    },
    {
      text: '아이템',
      children: [
        '/ko_kr/item/advanced_tnt.md',
        '/ko_kr/item/axe.md',
        '/ko_kr/item/back.md',
        '/ko_kr/item/barter_menu.md',
        '/ko_kr/item/barter_sell_block.md',
        '/ko_kr/item/boots.md',
        '/ko_kr/item/bow.md',
        '/ko_kr/item/builder_model_device.md',
        '/ko_kr/item/build_blueprint.md',
        '/ko_kr/item/build_replicator_block.md',
        '/ko_kr/item/canned_cat.md',
        '/ko_kr/item/cat_amulet.md',
        '/ko_kr/item/cat_hair.md',
        '/ko_kr/item/cat_hair_brush.md',
        '/ko_kr/item/cat_palm.md',
        '/ko_kr/item/chestplate.md',
        '/ko_kr/item/coin.md',
        '/ko_kr/item/crossbow.md',
        '/ko_kr/item/currency_converter.md',
        '/ko_kr/item/dragon_blood_tooth.md',
        '/ko_kr/item/dragon_hammer.md',
        '/ko_kr/item/dragon_tooth.md',
        '/ko_kr/item/draw_map.md',
        '/ko_kr/item/elytra_of_chestplate.md',
        '/ko_kr/item/ender_dragon_queue.md',
        '/ko_kr/item/energy_laser_crystal.md',
        '/ko_kr/item/entity_exterior_tag.md',
        '/ko_kr/item/exchange_record_gemstone.md',
        '/ko_kr/item/explosive_starlight_water.md',
        '/ko_kr/item/fast_break_magic_wand.md',
        '/ko_kr/item/fast_fill_magic_wand.md',
        '/ko_kr/item/helmet.md',
        '/ko_kr/item/hoe.md',
        '/ko_kr/item/internet_controller.md',
        '/ko_kr/item/invisible_light.md',
        '/ko_kr/item/invite_transfer_gemstone.md',
        '/ko_kr/item/land_block.md',
        '/ko_kr/item/land_book.md',
        '/ko_kr/item/land_energy.md',
        '/ko_kr/item/land_flying_device.md',
        '/ko_kr/item/laser_crystal.md',
        '/ko_kr/item/leggings.md',
        '/ko_kr/item/logger_menu.md',
        '/ko_kr/item/lottery_ticket.md',
        '/ko_kr/item/magic_nether_star.md',
        '/ko_kr/item/music_box.md',
        '/ko_kr/item/newcomer_bag.md',
        '/ko_kr/item/nightmare_crystal.md',
        '/ko_kr/item/notification_block.md',
        '/ko_kr/item/palette.md',
        '/ko_kr/item/particle_block.md',
        '/ko_kr/item/peaceful_block.md',
        '/ko_kr/item/peaceful_proof.md',
        '/ko_kr/item/pen.md',
        '/ko_kr/item/pickaxe.md',
        '/ko_kr/item/piggy_bank.md',
        '/ko_kr/item/pitch_change_pen.md',
        '/ko_kr/item/powerful_ejector_block.md',
        '/ko_kr/item/premium_hopper.md',
        '/ko_kr/item/railway_block.md',
        '/ko_kr/item/random_transfer.md',
        '/ko_kr/item/record_point_banner.md',
        '/ko_kr/item/record_point_gemstone.md',
        '/ko_kr/item/restricted_crafting_table.md',
        '/ko_kr/item/reward_card.md',
        '/ko_kr/item/rope.md',
        '/ko_kr/item/rotten_flesh_block.md',
        '/ko_kr/item/shovel.md',
        '/ko_kr/item/simple_elevator.md',
        '/ko_kr/item/slime_chunk_probe.md',
        '/ko_kr/item/soul_core.md',
        '/ko_kr/item/sound_bell.md',
        '/ko_kr/item/super_fish_cracker.md',
        '/ko_kr/item/sword.md',
        '/ko_kr/item/title_block.md',
        '/ko_kr/item/transfer.md',
        '/ko_kr/item/transfer_book.md',
        '/ko_kr/item/wither_bone_meal.md',
        '/ko_kr/item/world_map_capture.md',
        '/ko_kr/item/world_map_icon.md',
        '/ko_kr/item/world_map_view.md',
      ]
    },
    {
      text: '특성',
      children: [
        '/ko_kr/special/barrier.md',
        '/ko_kr/special/brown_mushroom.md',
        '/ko_kr/special/cobweb.md',
        '/ko_kr/special/elytra.md',
        '/ko_kr/special/red_mushroom.md',
        '/ko_kr/special/wandering_trader_spawn_egg.md',
      ]
    }
  ]
}

export default sidebar