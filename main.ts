namespace SpriteKind {
    export const weapon = SpriteKind.create()
}
function enemy (myImage: Image) {
    stabber = sprites.create(myImage, SpriteKind.Enemy)
    return stabber
}
function spawn () {
    enemy(assets.image`stabby`)
    Render.move(stabber, 60)
}
let stabber: Sprite = null
game.splash("\"you can't do anything\"")
game.splash("\"you're worthless\"")
game.splash("I'll prove them wrong ")
tiles.setCurrentTilemap(tilemap`level`)
Render.setViewMode(ViewMode.raycastingView)
let joel = Render.getRenderSpriteVariable()
Render.moveWithController(3, 5, 0)
let sword = sprites.create(assets.image`sword`, SpriteKind.weapon)
sword.setFlag(SpriteFlag.RelativeToCamera, true)
sword.setPosition(114, 85)
stabber = sprites.create(assets.image`stabby`, SpriteKind.Enemy)
