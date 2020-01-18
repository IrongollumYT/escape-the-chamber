namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    tiles.setTilemap(tiles.createTilemap(
            hex`100010001206060606060606060606060606061105090909090909090909090a0a0a0a0705090c0c0c0c0c0c0c0c0c0c0c0c0a0705090c0c0c0c0c0c0c0c0c0c0c0c0c0c05090c0c0a090a0909090a0a0c0c0c1900090c0c0a0c0c0c0c0c0c0a0c0c0c1905090c0c090c0c0c0c0c0c090c0c180c05090c0c090c0c090a0c0c0a0c0c090705090c0c090c0c0a0a0c0c090c0c090705090c0c090c0c0c0c0c0c090c0c090705090c0c090c0c0c0c0c0c090c0c0907050a0c0c090909090a0a0a090c0c090705090c0c0c0c0c0c0c0c0c0c0c0c090705090c0c0c0c0c0c0c0c0c0c0c0c0a070509090909090916170909090909090713080808080808080808080808080810`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.hazardLava1,sprites.dungeon.hazardLava0,sprites.dungeon.hazardWater,sprites.dungeon.floorLight0,sprites.dungeon.stairSouth,sprites.dungeon.stairNorth,sprites.dungeon.stairLarge,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthEast,sprites.vehicle.roadVertical,sprites.dungeon.floorLight1,sprites.dungeon.floorLight5,sprites.dungeon.floorLight4,sprites.dungeon.floorLight3,sprites.dungeon.stairWest],
            TileScale.Sixteen
        ))
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    game.over(true, effects.confetti)
})
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . d d d d d . . . . . 
. . . . . . d 1 d 1 d . . . . . 
. . . . . d 1 9 1 9 1 d . . . . 
. . . . . . d 1 d 1 d . . . . . 
. . . . . . 3 d d d 3 . . . . . 
. . . . 9 9 9 9 d 9 9 9 9 . . . 
. . . 9 6 6 6 9 9 9 6 6 6 9 . . 
. . . 9 6 . 6 6 6 6 6 . 6 9 . . 
. . . d . . 8 8 . 8 8 . d d . . 
. . . . . . 8 8 . 8 8 . . . . . 
. . . . . . f f . f f . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
info.startCountdown(30)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tiles.createTilemap(
            hex`10001000212222222222222222222222222222201109090909090909090909090909091c1109090909090909090909090909091c1109090909090909090909090909091c1109030c070505050505050b0c03091c11090909041a090909091a020909091c110909090409091a1a0909020909091c110909090409091a1a0909020909091c11090909041a090909091a020909091c11090909060808080808080a0909091c1109090c09090909090909090c09091c1109090909090909090909090909091c1109090909090909090909090909091c1109090909090909090909090909091c1109090909090909090909090909141c0f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1d`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tilePath5,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.chestClosed,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.chestOpen,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenOuterWest1,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.stairLarge,sprites.dungeon.purpleSwitchUp,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenOuterNorth2,sprites.dungeon.collectibleInsignia,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.doorOpenWest,sprites.dungeon.floorLight2],
            TileScale.Sixteen
        ))
tiles.placeOnRandomTile(mySprite, myTiles.tile0)
scene.cameraFollowSprite(mySprite)
mySprite.say("help me escape this place", 2000)
