.. image:: https://raw.githubusercontent.com/score-framework/py.doc/master/docs/score-banner.png
    :target: http://score-framework.org

`The SCORE Framework`_ is a collection of harmonized python and javascript
libraries for the development of large scale web projects. Powered by strg.at_.

.. _The SCORE Framework: http://score-framework.org
.. _strg.at: http://strg.at


**********
score.hash
**********

.. _js_hash:

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

License
=======

Copyright © 2015 STRG.AT GmbH, Vienna, Austria

All files in and beneath this directory are part of The SCORE Framework.
The SCORE Framework and all its parts are free software: you can redistribute
them and/or modify them under the terms of the GNU Lesser General Public
License version 3 as published by the Free Software Foundation which is in the
file named COPYING.LESSER.txt.

The SCORE Framework and all its parts are distributed without any WARRANTY;
without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
PARTICULAR PURPOSE. For more details see the GNU Lesser General Public License.

If you have not received a copy of the GNU Lesser General Public License see
http://www.gnu.org/licenses/.

The License-Agreement realised between you as Licensee and STRG.AT GmbH as
Licenser including the issue of its valid conclusion and its pre- and
post-contractual effects is governed by the laws of Austria. Any disputes
concerning this License-Agreement including the issue of its valid conclusion
and its pre- and post-contractual effects are exclusively decided by the
competent court, in whose district STRG.AT GmbH has its registered seat, at the
discretion of STRG.AT GmbH also the competent court, in whose district the
Licensee has his registered seat, an establishment or assets.
