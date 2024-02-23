function enemy (myImage: Image) {
    stabber = sprites.create(myImage, SpriteKind.Enemy)
    return stabber
}
function spawn () {
    let myImage: Image = null
    enemy(myImage)
}
let stabber: Sprite = null
game.splash("\"you can't do anything\"")
game.splash("\"you're worthless\"")
game.splash("I'll prove them wrong ")
tiles.setCurrentTilemap(tilemap`level`)
let mySprite = sprites.create(assets.image`joel`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
stabber = sprites.create(assets.image`stabby`, SpriteKind.Enemy)
