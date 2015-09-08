.. _js_hash:

**********
score.hash
**********

This micro-library consists of a single function for comparing values
semantically. The main use case is to compare javascript objects while
ignoring the ordering of the properties::

    require(['lib/score/hash'], function(hash) {
        console.log(hash(1));
    });
    // 1

    require(['lib/score/hash'], function(hash) {
        console.log(hash([1]));
    });
    // ['__list_hash__', 1]

    require(['lib/score/hash'], function(hash) {
        console.log(hash({a: 1}));
    });
    // ["__dict_hash__", ["__list_hash__", "a"], ["__list_hash__", 1]]

The output may vary by browser, but is guaranteed to create the same hash for
the same value. Comparison using this mechanism is implemented as another
helper function::

    require(['lib/score/hash'], function(hash) {
        hash.equals(1, 1);
    });
    // true

    require(['lib/score/hash'], function(hash) {
        hash.equals({a: 1}, {a: 1});
    });
    // true

    require(['lib/score/hash'], function(hash) {
        hash.equals({a: 1, b: 2}, {b: 2, a: 1});
    });
    // true

