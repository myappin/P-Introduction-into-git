user = (function () {
    let name = 'Martin Lonský',
        i = 0;

    this.getName = function () {
        return name + ' => Number of called:' + (++i);
    };

    return this;
})();
module.exports = user;