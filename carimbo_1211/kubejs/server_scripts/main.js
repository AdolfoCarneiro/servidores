ServerEvents.recipes(event => {
  event.remove({ output: 'createaddition:alternator' })
  event.remove({ output: 'createaddition:electric_motor' })
  event.remove({ id: 'cobblemon:great_ball' })
  event.remove({ id: 'cobblemon:ultra_ball' })
  event.remove({ id: 'cobblemon:safari_ball' })
  event.remove({ id: 'cobblemon:fast_ball' })
  event.remove({ id: 'cobblemon:level_ball' })
  event.remove({ id: 'cobblemon:lure_ball' })
  event.remove({ id: 'cobblemon:heavy_ball' })
  event.remove({ id: 'cobblemon:love_ball' })
  event.remove({ id: 'cobblemon:friend_ball' })
  event.remove({ id: 'cobblemon:moon_ball' })
  event.remove({ id: 'cobblemon:sport_ball' })
  event.remove({ id: 'cobblemon:park_ball' })
  event.remove({ id: 'cobblemon:net_ball' })
  event.remove({ id: 'cobblemon:dive_ball' })
  event.remove({ id: 'cobblemon:nest_ball' })
  event.remove({ id: 'cobblemon:repeat_ball' })
  event.remove({ id: 'cobblemon:timer_ball' })
  event.remove({ id: 'cobblemon:luxury_ball' })
  event.remove({ id: 'cobblemon:dusk_ball' })
  event.remove({ id: 'cobblemon:heal_ball' })
  event.remove({ id: 'cobblemon:quick_ball' })
  event.remove({ id: 'cobblemon:dream_ball' })
  event.remove({ id: 'cobblemon:beast_ball' })
  event.remove({ id: 'cobblemon:master_ball' })
  event.remove({ id: 'cobblemon:timer_ball' })
  event.remove({ id: 'cobblemon:ancient_great_ball' })
  event.remove({ id: 'cobblemon:ancient_ultra_ball' })
  event.remove({ id: 'cobblemon:ancient_leaden_ball' })
  event.remove({ id: 'cobblemon:ancient_wing_ball' })
  event.remove({ id: 'cobblemon:ancient_jet_ball' })
  event.remove({ id: 'cobblemon:ancient_gigaton_ball' })
  event.remove({ id: 'cobblemon:ancient_origin_ball' })
  event.remove({ id: 'apothic_enchanting:treasure_shelf' })
  event.remove({ id: 'cobblemon_industries:quickballrec' })
  
  event.recipes.create.mixing(
    'cobblemon:quick_ball',
    [
      Fluid.of('create:potion', 250, { Potion: 'minecraft:strong_swiftness' }),
      'cobblemore_lib:quick_ball_lid',
      'cobblemore_lib:poke_ball_base'
    ]
  ).heated()
})