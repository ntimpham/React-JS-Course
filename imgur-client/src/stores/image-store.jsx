var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');

module.exports = Reflux.createStore({
    listenables: [Actions],

    getImages: function (topicId) {
        Api.get('topics' + topicsId)
            .then(function (json) {
                this.images = json.data;
                this.triggerChange();
            }.bind(this));
    },

    triggerChange: function () {
        this.trigger('change', this.images);
    }
});
