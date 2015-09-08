define('lib/score/hash', [], function() {

    var hash = function(value, visited) {
        if (typeof visited === 'undefined') {
            visited = [];
        }
        var index = visited.indexOf(value);
        if (index >= 0) {
            return '__visited__[' + index + ']';
        }
        visited.push(value);
        if (value instanceof Array) {
            value = value.slice(0);
            value.unshift('__list_hash__');
        } else if (typeof value === 'object') {
            var keys = [];
            var values = [];
            for (var k in value) {
                if (value.hasOwnProperty(k)) {
                    keys.push(k);
                }
            }
            keys.sort();
            for (var i = 0; i < keys.length; i++) {
                values.push(hash(value[keys[i]], visited));
            }
            value = ['__dict_hash__', keys, values];
        }
        if (arguments[1]) {
            return value;
        }
        return JSON.stringify(value);
    };

    hash.equals = function(a, b) {
        return hash(a) === hash(b);
    };

    return hash;

});

