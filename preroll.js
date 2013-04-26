;(function ($, window, document, undefined) {
    var pluginName = 'preRoll',
        defaults = {
            pre: 'PreRoll HTML Code',
            post: 'PostRoll HTML Code',
            timer: 15
        };
    function Plugin(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }
    Plugin.prototype = {
        init: function() {
            var player = $(this.element),
                message = player.text().split(/\[(.+)\]/),
                timer = this.options.timer,
                pre = this.options.pre,
                post = this.options.post;
            if (message[1] !== 'x')
            {
                timer = message[1];
            }
            player.html('<div id="preRoll_timer">' + message[0] + timer + message[2] + '</div>' + pre);
            setTimeout(function() {
                player.html(function() {
                    return post;
                });
            }, (timer * 1000));
            setInterval(function() {
                timer = (timer - 1);
                $('div#preRoll_timer').html(message[0] + timer + message[2]);
            }, 1000);
        },
    };
    $.fn[pluginName] = function(options) {
        return this.each(function() {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });
    };
})(jQuery, window, document);