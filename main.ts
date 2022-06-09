controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 1 1 1 1 2 . . . . . 
        . . . . 2 1 1 1 1 1 1 2 . . . . 
        . . . . 2 1 1 1 1 1 1 2 . . . . 
        . . . . 2 1 1 1 1 1 1 2 . . . . 
        . . . . 2 1 1 1 1 1 1 2 . . . . 
        . . . . . 2 1 1 1 1 3 . . . . . 
        . . . . . 2 3 1 1 1 2 . . . . . 
        . . . . . . 3 1 1 3 2 . . . . . 
        . . . . . . 2 3 1 2 . . . . . . 
        . . . . . . 2 3 1 2 . . . . . . 
        . . . . . . . 3 1 3 . . . . . . 
        . . . . . . . 3 1 3 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 0, -50)
    music.footstep.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    asteroid.destroy()
    otherSprite.destroy(effects.confetti, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.fire, 500)
    scene.cameraShake(4, 500)
})
let asteroid: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
game.splash("BONVINGUTS A PEPICLANDIA", "APRETA A PER CONEMÇAR I B PER DISPARAR")
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ..........fffff.
    ...ccc...ff1bbbf
    ..c1cccccccc1bbf
    ..c113333c1c11bf
    .c11333333cc11bf
    .c11c133331c11bf
    .c111cccc3c11bbf
    .f111111111ffbbf
    .ffcc11bbbbffbf.
    .fbbbbbbbbbbbbf.
    fbdbbbbbbbcbbbc.
    fdbbbbbbccbbbfbc
    fbbfcbbbbbcbbfbc
    fbfdccbbccbbfbbf
    ffddcccbbbccffbf
    .cddcccccccf..ff
    .cddcccccccf....
    ..cdbcccccf.....
    ...cbccccf......
    ....cfccf.......
    ...ffbbdc.......
    ..fbccbddc......
    .fbbcccbdc......
    fbbcffccbc......
    fbff...cb.......
    ff......cc......
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
info.setLife(5)
game.onUpdateInterval(1000, function () {
    asteroid = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . 3 3 3 3 4 4 4 4 4 4 . . . 
        . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
        . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
        . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
        . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
        . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
        . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
        . . . 4 2 2 2 2 2 2 2 2 4 . . . 
        . . . . 4 4 2 2 2 2 4 4 . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 0, 50)
    asteroid.x += randint(0, scene.screenWidth())
    asteroid.setKind(SpriteKind.Enemy)
})
