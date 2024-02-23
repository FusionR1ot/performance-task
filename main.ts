function position (stabber: Sprite) {
    stabber.setKind(SpriteKind.Enemy)
}
game.splash("\"you can't do anything\"")
game.splash("\"you're worthless\"")
let mySprite = Render.getRenderSpriteVariable()
game.splash("I'll prove them wrong ")
tiles.setCurrentTilemap(tilemap`level`)
let stabber = sprites.create(assets.image`stabby`, SpriteKind.Enemy)
Render.setSpriteAttribute(Render.getRenderSpriteVariable(), RCSpriteAttribute.ZVelocity, 3)
