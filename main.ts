controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.right.isPressed()) {
        hamshot = sprites.createProjectileFromSprite(img`
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . 2 2 3 3 3 3 2 e . . . . 
            . . . 2 3 d 1 1 d d 3 2 e . . . 
            . . 2 3 1 d 3 3 3 d d 3 e . . . 
            . 2 3 1 3 3 3 3 3 d 1 3 b e . . 
            . 2 1 d 3 3 3 3 d 3 3 1 3 b b . 
            2 3 1 d 3 3 1 1 3 3 3 1 3 4 b b 
            2 d 3 3 d 1 3 1 3 3 3 1 3 4 4 b 
            2 d 3 3 3 1 3 1 3 3 3 1 b 4 4 e 
            2 d 3 3 3 1 1 3 3 3 3 1 b 4 4 e 
            e d 3 3 3 3 d 3 3 3 d d b 4 4 e 
            e d d 3 3 3 d 3 3 3 1 3 b 4 b e 
            e 3 d 3 3 1 d d 3 d 1 b b e e . 
            . e 3 1 1 d d 1 1 1 b b e e e . 
            . . e 3 3 3 3 3 3 b e e e e . . 
            . . . e e e e e e e e e e . . . 
            `, mySprite, 200, 0)
    } else {
        if (controller.left.isPressed()) {
            hamshot = sprites.createProjectileFromSprite(img`
                . . . . . . 2 2 2 2 . . . . . . 
                . . . . 2 2 3 3 3 3 2 e . . . . 
                . . . 2 3 d 1 1 d d 3 2 e . . . 
                . . 2 3 1 d 3 3 3 d d 3 e . . . 
                . 2 3 1 3 3 3 3 3 d 1 3 b e . . 
                . 2 1 d 3 3 3 3 d 3 3 1 3 b b . 
                2 3 1 d 3 3 1 1 3 3 3 1 3 4 b b 
                2 d 3 3 d 1 3 1 3 3 3 1 3 4 4 b 
                2 d 3 3 3 1 3 1 3 3 3 1 b 4 4 e 
                2 d 3 3 3 1 1 3 3 3 3 1 b 4 4 e 
                e d 3 3 3 3 d 3 3 3 d d b 4 4 e 
                e d d 3 3 3 d 3 3 3 1 3 b 4 b e 
                e 3 d 3 3 1 d d 3 d 1 b b e e . 
                . e 3 1 1 d d 1 1 1 b b e e e . 
                . . e 3 3 3 3 3 3 b e e e e . . 
                . . . e e e e e e e e e e . . . 
                `, mySprite, -200, 0)
        } else {
            if (controller.down.isPressed()) {
                hamshot = sprites.createProjectileFromSprite(img`
                    . . . . . . 2 2 2 2 . . . . . . 
                    . . . . 2 2 3 3 3 3 2 e . . . . 
                    . . . 2 3 d 1 1 d d 3 2 e . . . 
                    . . 2 3 1 d 3 3 3 d d 3 e . . . 
                    . 2 3 1 3 3 3 3 3 d 1 3 b e . . 
                    . 2 1 d 3 3 3 3 d 3 3 1 3 b b . 
                    2 3 1 d 3 3 1 1 3 3 3 1 3 4 b b 
                    2 d 3 3 d 1 3 1 3 3 3 1 3 4 4 b 
                    2 d 3 3 3 1 3 1 3 3 3 1 b 4 4 e 
                    2 d 3 3 3 1 1 3 3 3 3 1 b 4 4 e 
                    e d 3 3 3 3 d 3 3 3 d d b 4 4 e 
                    e d d 3 3 3 d 3 3 3 1 3 b 4 b e 
                    e 3 d 3 3 1 d d 3 d 1 b b e e . 
                    . e 3 1 1 d d 1 1 1 b b e e e . 
                    . . e 3 3 3 3 3 3 b e e e e . . 
                    . . . e e e e e e e e e e . . . 
                    `, mySprite, 0, 200)
            } else {
                if (controller.up.isPressed()) {
                    hamshot = sprites.createProjectileFromSprite(img`
                        . . . . . . 2 2 2 2 . . . . . . 
                        . . . . 2 2 3 3 3 3 2 e . . . . 
                        . . . 2 3 d 1 1 d d 3 2 e . . . 
                        . . 2 3 1 d 3 3 3 d d 3 e . . . 
                        . 2 3 1 3 3 3 3 3 d 1 3 b e . . 
                        . 2 1 d 3 3 3 3 d 3 3 1 3 b b . 
                        2 3 1 d 3 3 1 1 3 3 3 1 3 4 b b 
                        2 d 3 3 d 1 3 1 3 3 3 1 3 4 4 b 
                        2 d 3 3 3 1 3 1 3 3 3 1 b 4 4 e 
                        2 d 3 3 3 1 1 3 3 3 3 1 b 4 4 e 
                        e d 3 3 3 3 d 3 3 3 d d b 4 4 e 
                        e d d 3 3 3 d 3 3 3 1 3 b 4 b e 
                        e 3 d 3 3 1 d d 3 d 1 b b e e . 
                        . e 3 1 1 d d 1 1 1 b b e e e . 
                        . . e 3 3 3 3 3 3 b e e e e . . 
                        . . . e e e e e e e e e e . . . 
                        `, mySprite, 0, -200)
                } else {
                    mySprite.startEffect(effects.ashes)
                }
            }
        }
    }
})
let hamshot: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
mySprite = sprites.create(img`
    .......fffff..........
    .....ffff11fff........
    .fffffff11111fff......
    fffffff1111111ffff....
    fffddfff111111ffff....
    fddddfffff11111ffcf...
    ffddddff8ff111fffcff..
    ffdddfff88fffff8fccf..
    ffffffff888ffff8fccf..
    ffffffff888f55f8fccf..
    .fcccfff888fffffffff..
    .fcccffff888888fffffff
    .fccccffff8888ffffbbbf
    .fcccccffffffffffbbbbf
    ..fccccfbbbbf88fffffff
    ...fffffbbbbf888f.....
    ......fffffff888f.....
    ......f888f.f888f.....
    ......f888f.f888f.....
    ......f888f.f888f.....
    .......ffff.ffff......
    .......fffffffffff....
    ........ffff.fffff....
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
let statusbar = statusbars.create(45, 6, StatusBarKind.Health)
statusbar.setPosition(25, 8)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . 2 2 2 5 5 2 2 2 . . . . 
    . . . f f f f 2 2 2 2 2 2 . . . 
    . . 2 f f f f 4 4 4 1 1 2 2 . . 
    . . f f f f f 4 4 4 1 1 5 2 . . 
    . 2 f f f f 4 4 4 4 4 5 5 2 2 . 
    . 2 f f f 4 4 4 2 2 2 2 5 2 2 . 
    . 2 2 f f 4 4 2 2 2 2 2 2 2 2 . 
    . 2 4 f f 4 4 2 2 2 2 2 2 2 2 . 
    . . 2 4 f f 4 2 2 2 2 2 4 2 . . 
    . . 2 4 4 f 4 4 2 2 2 4 2 2 . . 
    . . . 2 4 4 4 4 4 4 4 4 2 . . . 
    . . . . 2 2 4 4 4 4 2 2 . . . . 
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let statusbar2 = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.setLabel("HP")
statusbar2.attachToSprite(mySprite2)
tiles.placeOnRandomTile(mySprite2, sprites.dungeon.floorDarkDiamond)
scene.cameraFollowSprite(mySprite)
