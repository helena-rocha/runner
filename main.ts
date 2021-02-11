controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardWater, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight4, function (sprite, location) {
    game.over(true)
})
let mySprite: Sprite = null
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f e f . . . 
    . . . f f e e e e e e e e f . . 
    . . . f e e e e e e e e e f . . 
    . . . f e e e e e e e e e e f . 
    . . . f e e e e e e e e e e f . 
    . . f f e e e f f f f f f e f . 
    . . f f e e e f 1 f d d f e f . 
    . f f e e e e f f f d d f f . . 
    . f e e e e f f d d d 2 f . . . 
    f f e e e f 3 3 3 3 3 3 f . . . 
    f e e e f f 3 3 3 3 3 3 f . . . 
    f e e f f f 3 3 3 3 3 3 f f . . 
    f e f f . f f f f f f f f f . . 
    f f f . . f f . . . f f f . . . 
    `, SpriteKind.Player)
mySprite.ay = 400
mySprite.vx = 100
scene.cameraFollowSprite(mySprite)
