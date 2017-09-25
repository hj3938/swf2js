/**
 * @constructor
 */
var Player = function ()
{
    this.stage      = null;
    this.stopFlag   = true;
    this.isLoad     = false;
    this.intervalId = 0;
    this.frameRate  = 0;
};

/**
 * extends
 */
Player.prototype = Object.create(Util.prototype);
Player.prototype.constructor = Player;


/**
 * play
 */
Player.prototype.play = function ()
{
    this.stopFlag = false;

    var enterFrame = function (player)
    {
        var animation = player.$requestAnimationFrame;
        return function ()
        {
            animation(function () {
                if (player.isLoad && !player.stopFlag) {
                    player.nextFrame();
                }
            }, 0);
        };
    };

    this.intervalId = this.$setInterval.call(
        null, enterFrame(this), this.getFrameRate()
    );
};

/**
 * stop
 */
Player.prototype.stop = function ()
{
    this.stopFlag = true;
    this.$clearInterval.call(null, this.intervalId);
};

/**
 * @returns {number}
 */
Player.prototype.getFrameRate = function ()
{
    return this.frameRate;
};

/**
 * @param fps
 */
Player.prototype.setFrameRate = function (fps)
{
    this.frameRate = (1000 / fps)|0;
};