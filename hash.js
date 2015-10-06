/**
 * Copyright © 2015 STRG.AT GmbH, Vienna, Austria
 *
 * This file is part of the The SCORE Framework.
 *
 * The SCORE Framework and all its parts are free software: you can redistribute
 * them and/or modify them under the terms of the GNU Lesser General Public
 * License version 3 as published by the Free Software Foundation which is in the
 * file named COPYING.LESSER.txt.
 *
 * The SCORE Framework and all its parts are distributed without any WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
 * PARTICULAR PURPOSE. For more details see the GNU Lesser General Public
 * License.
 *
 * If you have not received a copy of the GNU Lesser General Public License see
 * http://www.gnu.org/licenses/.
 *
 * The License-Agreement realised between you as Licensee and STRG.AT GmbH as
 * Licenser including the issue of its valid conclusion and its pre- and
 * post-contractual effects is governed by the laws of Austria. Any disputes
 * concerning this License-Agreement including the issue of its valid conclusion
 * and its pre- and post-contractual effects are exclusively decided by the
 * competent court, in whose district STRG.AT GmbH has its registered seat, at
 * the discretion of STRG.AT GmbH also the competent court, in whose district the
 * Licensee has his registered seat, an establishment or assets.
 */

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

