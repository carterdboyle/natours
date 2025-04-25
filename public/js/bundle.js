
      var $parcel$global =
        typeof globalThis !== 'undefined'
          ? globalThis
          : typeof self !== 'undefined'
          ? self
          : typeof window !== 'undefined'
          ? window
          : typeof global !== 'undefined'
          ? global
          : {};
  
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
/* eslint-disable */ // import '@babel/polyfill';
/* eslint-disable */ const $6b28cffc2b36340e$export$4c5dd147b21b9176 = (locations)=>{
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2FydGVyZGJveWxlIiwiYSI6ImNtOWxpNjhibjA1NDUyanFlMDE3MnR2OXMifQ.qt3yRLYemxK8UsYfD0H7yw';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/carterdboyle/cm9lk0d0s007a01rzfeva1ai3',
        scrollZoom: false
    });
    const bounds = new mapboxgl.LngLatBounds();
    locations.forEach((loc)=>{
        // Create marker
        const el = document.createElement('div');
        el.className = 'marker';
        // Add the marker
        new mapboxgl.Marker({
            element: el,
            anchor: 'bottom'
        }).setLngLat(loc.coordinates).addTo(map);
        // Add popup
        new mapboxgl.Popup({
            offset: 30
        }).setLngLat(loc.coordinates).setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`).addTo(map);
        // Extend map bounds to include current location
        bounds.extend(loc.coordinates);
    });
    map.fitBounds(bounds, {
        padding: {
            top: 200,
            bottom: 150,
            left: 100,
            right: 100
        }
    });
};


/* eslint-disable */ 'use strict';
function $ef01d542854d5895$export$2e2bcd8739ae039(fn, thisArg) {
    return function wrap() {
        return fn.apply(thisArg, arguments);
    };
}


'use strict';
// utils is a library of generic helper functions non-specific to axios
const { toString: $389ced5518462582$var$toString } = Object.prototype;
const { getPrototypeOf: $389ced5518462582$var$getPrototypeOf } = Object;
const $389ced5518462582$var$kindOf = ((cache)=>(thing)=>{
        const str = $389ced5518462582$var$toString.call(thing);
        return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
    })(Object.create(null));
const $389ced5518462582$var$kindOfTest = (type)=>{
    type = type.toLowerCase();
    return (thing)=>$389ced5518462582$var$kindOf(thing) === type;
};
const $389ced5518462582$var$typeOfTest = (type)=>(thing)=>typeof thing === type;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */ const { isArray: $389ced5518462582$var$isArray } = Array;
/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */ const $389ced5518462582$var$isUndefined = $389ced5518462582$var$typeOfTest('undefined');
/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */ function $389ced5518462582$var$isBuffer(val) {
    return val !== null && !$389ced5518462582$var$isUndefined(val) && val.constructor !== null && !$389ced5518462582$var$isUndefined(val.constructor) && $389ced5518462582$var$isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */ const $389ced5518462582$var$isArrayBuffer = $389ced5518462582$var$kindOfTest('ArrayBuffer');
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */ function $389ced5518462582$var$isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) result = ArrayBuffer.isView(val);
    else result = val && val.buffer && $389ced5518462582$var$isArrayBuffer(val.buffer);
    return result;
}
/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */ const $389ced5518462582$var$isString = $389ced5518462582$var$typeOfTest('string');
/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */ const $389ced5518462582$var$isFunction = $389ced5518462582$var$typeOfTest('function');
/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */ const $389ced5518462582$var$isNumber = $389ced5518462582$var$typeOfTest('number');
/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */ const $389ced5518462582$var$isObject = (thing)=>thing !== null && typeof thing === 'object';
/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */ const $389ced5518462582$var$isBoolean = (thing)=>thing === true || thing === false;
/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */ const $389ced5518462582$var$isPlainObject = (val)=>{
    if ($389ced5518462582$var$kindOf(val) !== 'object') return false;
    const prototype = $389ced5518462582$var$getPrototypeOf(val);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};
/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */ const $389ced5518462582$var$isDate = $389ced5518462582$var$kindOfTest('Date');
/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const $389ced5518462582$var$isFile = $389ced5518462582$var$kindOfTest('File');
/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */ const $389ced5518462582$var$isBlob = $389ced5518462582$var$kindOfTest('Blob');
/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const $389ced5518462582$var$isFileList = $389ced5518462582$var$kindOfTest('FileList');
/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */ const $389ced5518462582$var$isStream = (val)=>$389ced5518462582$var$isObject(val) && $389ced5518462582$var$isFunction(val.pipe);
/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */ const $389ced5518462582$var$isFormData = (thing)=>{
    let kind;
    return thing && (typeof FormData === 'function' && thing instanceof FormData || $389ced5518462582$var$isFunction(thing.append) && ((kind = $389ced5518462582$var$kindOf(thing)) === 'formdata' || // detect form-data instance
    kind === 'object' && $389ced5518462582$var$isFunction(thing.toString) && thing.toString() === '[object FormData]'));
};
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */ const $389ced5518462582$var$isURLSearchParams = $389ced5518462582$var$kindOfTest('URLSearchParams');
const [$389ced5518462582$var$isReadableStream, $389ced5518462582$var$isRequest, $389ced5518462582$var$isResponse, $389ced5518462582$var$isHeaders] = [
    'ReadableStream',
    'Request',
    'Response',
    'Headers'
].map($389ced5518462582$var$kindOfTest);
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */ const $389ced5518462582$var$trim = (str)=>str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */ function $389ced5518462582$var$forEach(obj, fn, { allOwnKeys: allOwnKeys = false } = {}) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === 'undefined') return;
    let i;
    let l;
    // Force an array if not already something iterable
    if (typeof obj !== 'object') /*eslint no-param-reassign:0*/ obj = [
        obj
    ];
    if ($389ced5518462582$var$isArray(obj)) // Iterate over array values
    for(i = 0, l = obj.length; i < l; i++)fn.call(null, obj[i], i, obj);
    else {
        // Iterate over object keys
        const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
        const len = keys.length;
        let key;
        for(i = 0; i < len; i++){
            key = keys[i];
            fn.call(null, obj[key], key, obj);
        }
    }
}
function $389ced5518462582$var$findKey(obj, key) {
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i = keys.length;
    let _key;
    while(i-- > 0){
        _key = keys[i];
        if (key === _key.toLowerCase()) return _key;
    }
    return null;
}
const $389ced5518462582$var$_global = (()=>{
    /*eslint no-undef:0*/ if (typeof globalThis !== "undefined") return globalThis;
    return typeof self !== "undefined" ? self : typeof window !== 'undefined' ? window : $parcel$global;
})();
const $389ced5518462582$var$isContextDefined = (context)=>!$389ced5518462582$var$isUndefined(context) && context !== $389ced5518462582$var$_global;
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */ function $389ced5518462582$var$merge() {
    const { caseless: caseless } = $389ced5518462582$var$isContextDefined(this) && this || {};
    const result = {};
    const assignValue = (val, key)=>{
        const targetKey = caseless && $389ced5518462582$var$findKey(result, key) || key;
        if ($389ced5518462582$var$isPlainObject(result[targetKey]) && $389ced5518462582$var$isPlainObject(val)) result[targetKey] = $389ced5518462582$var$merge(result[targetKey], val);
        else if ($389ced5518462582$var$isPlainObject(val)) result[targetKey] = $389ced5518462582$var$merge({}, val);
        else if ($389ced5518462582$var$isArray(val)) result[targetKey] = val.slice();
        else result[targetKey] = val;
    };
    for(let i = 0, l = arguments.length; i < l; i++)arguments[i] && $389ced5518462582$var$forEach(arguments[i], assignValue);
    return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */ const $389ced5518462582$var$extend = (a, b, thisArg, { allOwnKeys: allOwnKeys } = {})=>{
    $389ced5518462582$var$forEach(b, (val, key)=>{
        if (thisArg && $389ced5518462582$var$isFunction(val)) a[key] = (0, $ef01d542854d5895$export$2e2bcd8739ae039)(val, thisArg);
        else a[key] = val;
    }, {
        allOwnKeys: allOwnKeys
    });
    return a;
};
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */ const $389ced5518462582$var$stripBOM = (content)=>{
    if (content.charCodeAt(0) === 0xFEFF) content = content.slice(1);
    return content;
};
/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */ const $389ced5518462582$var$inherits = (constructor, superConstructor, props, descriptors)=>{
    constructor.prototype = Object.create(superConstructor.prototype, descriptors);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, 'super', {
        value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
};
/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */ const $389ced5518462582$var$toFlatObject = (sourceObj, destObj, filter, propFilter)=>{
    let props;
    let i;
    let prop;
    const merged = {};
    destObj = destObj || {};
    // eslint-disable-next-line no-eq-null,eqeqeq
    if (sourceObj == null) return destObj;
    do {
        props = Object.getOwnPropertyNames(sourceObj);
        i = props.length;
        while(i-- > 0){
            prop = props[i];
            if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
                destObj[prop] = sourceObj[prop];
                merged[prop] = true;
            }
        }
        sourceObj = filter !== false && $389ced5518462582$var$getPrototypeOf(sourceObj);
    }while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
};
/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */ const $389ced5518462582$var$endsWith = (str, searchString, position)=>{
    str = String(str);
    if (position === undefined || position > str.length) position = str.length;
    position -= searchString.length;
    const lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
};
/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */ const $389ced5518462582$var$toArray = (thing)=>{
    if (!thing) return null;
    if ($389ced5518462582$var$isArray(thing)) return thing;
    let i = thing.length;
    if (!$389ced5518462582$var$isNumber(i)) return null;
    const arr = new Array(i);
    while(i-- > 0)arr[i] = thing[i];
    return arr;
};
/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */ // eslint-disable-next-line func-names
const $389ced5518462582$var$isTypedArray = ((TypedArray)=>{
    // eslint-disable-next-line func-names
    return (thing)=>{
        return TypedArray && thing instanceof TypedArray;
    };
})(typeof Uint8Array !== 'undefined' && $389ced5518462582$var$getPrototypeOf(Uint8Array));
/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */ const $389ced5518462582$var$forEachEntry = (obj, fn)=>{
    const generator = obj && obj[Symbol.iterator];
    const iterator = generator.call(obj);
    let result;
    while((result = iterator.next()) && !result.done){
        const pair = result.value;
        fn.call(obj, pair[0], pair[1]);
    }
};
/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */ const $389ced5518462582$var$matchAll = (regExp, str)=>{
    let matches;
    const arr = [];
    while((matches = regExp.exec(str)) !== null)arr.push(matches);
    return arr;
};
/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */ const $389ced5518462582$var$isHTMLForm = $389ced5518462582$var$kindOfTest('HTMLFormElement');
const $389ced5518462582$var$toCamelCase = (str)=>{
    return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
        return p1.toUpperCase() + p2;
    });
};
/* Creating a function that will check if an object has a property. */ const $389ced5518462582$var$hasOwnProperty = (({ hasOwnProperty: hasOwnProperty })=>(obj, prop)=>hasOwnProperty.call(obj, prop))(Object.prototype);
/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */ const $389ced5518462582$var$isRegExp = $389ced5518462582$var$kindOfTest('RegExp');
const $389ced5518462582$var$reduceDescriptors = (obj, reducer)=>{
    const descriptors = Object.getOwnPropertyDescriptors(obj);
    const reducedDescriptors = {};
    $389ced5518462582$var$forEach(descriptors, (descriptor, name)=>{
        let ret;
        if ((ret = reducer(descriptor, name, obj)) !== false) reducedDescriptors[name] = ret || descriptor;
    });
    Object.defineProperties(obj, reducedDescriptors);
};
/**
 * Makes all methods read-only
 * @param {Object} obj
 */ const $389ced5518462582$var$freezeMethods = (obj)=>{
    $389ced5518462582$var$reduceDescriptors(obj, (descriptor, name)=>{
        // skip restricted props in strict mode
        if ($389ced5518462582$var$isFunction(obj) && [
            'arguments',
            'caller',
            'callee'
        ].indexOf(name) !== -1) return false;
        const value = obj[name];
        if (!$389ced5518462582$var$isFunction(value)) return;
        descriptor.enumerable = false;
        if ('writable' in descriptor) {
            descriptor.writable = false;
            return;
        }
        if (!descriptor.set) descriptor.set = ()=>{
            throw Error('Can not rewrite read-only method \'' + name + '\'');
        };
    });
};
const $389ced5518462582$var$toObjectSet = (arrayOrString, delimiter)=>{
    const obj = {};
    const define = (arr)=>{
        arr.forEach((value)=>{
            obj[value] = true;
        });
    };
    $389ced5518462582$var$isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
    return obj;
};
const $389ced5518462582$var$noop = ()=>{};
const $389ced5518462582$var$toFiniteNumber = (value, defaultValue)=>{
    return value != null && Number.isFinite(value = +value) ? value : defaultValue;
};
/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */ function $389ced5518462582$var$isSpecCompliantForm(thing) {
    return !!(thing && $389ced5518462582$var$isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
}
const $389ced5518462582$var$toJSONObject = (obj)=>{
    const stack = new Array(10);
    const visit = (source, i)=>{
        if ($389ced5518462582$var$isObject(source)) {
            if (stack.indexOf(source) >= 0) return;
            if (!('toJSON' in source)) {
                stack[i] = source;
                const target = $389ced5518462582$var$isArray(source) ? [] : {};
                $389ced5518462582$var$forEach(source, (value, key)=>{
                    const reducedValue = visit(value, i + 1);
                    !$389ced5518462582$var$isUndefined(reducedValue) && (target[key] = reducedValue);
                });
                stack[i] = undefined;
                return target;
            }
        }
        return source;
    };
    return visit(obj, 0);
};
const $389ced5518462582$var$isAsyncFn = $389ced5518462582$var$kindOfTest('AsyncFunction');
const $389ced5518462582$var$isThenable = (thing)=>thing && ($389ced5518462582$var$isObject(thing) || $389ced5518462582$var$isFunction(thing)) && $389ced5518462582$var$isFunction(thing.then) && $389ced5518462582$var$isFunction(thing.catch);
// original code
// https://github.com/DigitalBrainJS/AxiosPromise/blob/16deab13710ec09779922131f3fa5954320f83ab/lib/utils.js#L11-L34
const $389ced5518462582$var$_setImmediate = ((setImmediateSupported, postMessageSupported)=>{
    if (setImmediateSupported) return setImmediate;
    return postMessageSupported ? ((token, callbacks)=>{
        $389ced5518462582$var$_global.addEventListener("message", ({ source: source, data: data })=>{
            if (source === $389ced5518462582$var$_global && data === token) callbacks.length && callbacks.shift()();
        }, false);
        return (cb)=>{
            callbacks.push(cb);
            $389ced5518462582$var$_global.postMessage(token, "*");
        };
    })(`axios@${Math.random()}`, []) : (cb)=>setTimeout(cb);
})(typeof setImmediate === 'function', $389ced5518462582$var$isFunction($389ced5518462582$var$_global.postMessage));
const $389ced5518462582$var$asap = typeof queueMicrotask !== 'undefined' ? queueMicrotask.bind($389ced5518462582$var$_global) : $389ced5518462582$var$_setImmediate;
var // *********************
$389ced5518462582$export$2e2bcd8739ae039 = {
    isArray: $389ced5518462582$var$isArray,
    isArrayBuffer: $389ced5518462582$var$isArrayBuffer,
    isBuffer: $389ced5518462582$var$isBuffer,
    isFormData: $389ced5518462582$var$isFormData,
    isArrayBufferView: $389ced5518462582$var$isArrayBufferView,
    isString: $389ced5518462582$var$isString,
    isNumber: $389ced5518462582$var$isNumber,
    isBoolean: $389ced5518462582$var$isBoolean,
    isObject: $389ced5518462582$var$isObject,
    isPlainObject: $389ced5518462582$var$isPlainObject,
    isReadableStream: $389ced5518462582$var$isReadableStream,
    isRequest: $389ced5518462582$var$isRequest,
    isResponse: $389ced5518462582$var$isResponse,
    isHeaders: $389ced5518462582$var$isHeaders,
    isUndefined: $389ced5518462582$var$isUndefined,
    isDate: $389ced5518462582$var$isDate,
    isFile: $389ced5518462582$var$isFile,
    isBlob: $389ced5518462582$var$isBlob,
    isRegExp: $389ced5518462582$var$isRegExp,
    isFunction: $389ced5518462582$var$isFunction,
    isStream: $389ced5518462582$var$isStream,
    isURLSearchParams: $389ced5518462582$var$isURLSearchParams,
    isTypedArray: $389ced5518462582$var$isTypedArray,
    isFileList: $389ced5518462582$var$isFileList,
    forEach: $389ced5518462582$var$forEach,
    merge: $389ced5518462582$var$merge,
    extend: $389ced5518462582$var$extend,
    trim: $389ced5518462582$var$trim,
    stripBOM: $389ced5518462582$var$stripBOM,
    inherits: $389ced5518462582$var$inherits,
    toFlatObject: $389ced5518462582$var$toFlatObject,
    kindOf: $389ced5518462582$var$kindOf,
    kindOfTest: $389ced5518462582$var$kindOfTest,
    endsWith: $389ced5518462582$var$endsWith,
    toArray: $389ced5518462582$var$toArray,
    forEachEntry: $389ced5518462582$var$forEachEntry,
    matchAll: $389ced5518462582$var$matchAll,
    isHTMLForm: $389ced5518462582$var$isHTMLForm,
    hasOwnProperty: $389ced5518462582$var$hasOwnProperty,
    hasOwnProp: $389ced5518462582$var$hasOwnProperty,
    reduceDescriptors: $389ced5518462582$var$reduceDescriptors,
    freezeMethods: $389ced5518462582$var$freezeMethods,
    toObjectSet: $389ced5518462582$var$toObjectSet,
    toCamelCase: $389ced5518462582$var$toCamelCase,
    noop: $389ced5518462582$var$noop,
    toFiniteNumber: $389ced5518462582$var$toFiniteNumber,
    findKey: $389ced5518462582$var$findKey,
    global: $389ced5518462582$var$_global,
    isContextDefined: $389ced5518462582$var$isContextDefined,
    isSpecCompliantForm: $389ced5518462582$var$isSpecCompliantForm,
    toJSONObject: $389ced5518462582$var$toJSONObject,
    isAsyncFn: $389ced5518462582$var$isAsyncFn,
    isThenable: $389ced5518462582$var$isThenable,
    setImmediate: $389ced5518462582$var$_setImmediate,
    asap: $389ced5518462582$var$asap
};







'use strict';
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */ function $cbaf397e9563bd8e$var$AxiosError(message, code, config, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
    else this.stack = new Error().stack;
    this.message = message;
    this.name = 'AxiosError';
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    if (response) {
        this.response = response;
        this.status = response.status ? response.status : null;
    }
}
(0, $389ced5518462582$export$2e2bcd8739ae039).inherits($cbaf397e9563bd8e$var$AxiosError, Error, {
    toJSON: function toJSON() {
        return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: (0, $389ced5518462582$export$2e2bcd8739ae039).toJSONObject(this.config),
            code: this.code,
            status: this.status
        };
    }
});
const $cbaf397e9563bd8e$var$prototype = $cbaf397e9563bd8e$var$AxiosError.prototype;
const $cbaf397e9563bd8e$var$descriptors = {};
[
    'ERR_BAD_OPTION_VALUE',
    'ERR_BAD_OPTION',
    'ECONNABORTED',
    'ETIMEDOUT',
    'ERR_NETWORK',
    'ERR_FR_TOO_MANY_REDIRECTS',
    'ERR_DEPRECATED',
    'ERR_BAD_RESPONSE',
    'ERR_BAD_REQUEST',
    'ERR_CANCELED',
    'ERR_NOT_SUPPORT',
    'ERR_INVALID_URL'
].forEach((code)=>{
    $cbaf397e9563bd8e$var$descriptors[code] = {
        value: code
    };
});
Object.defineProperties($cbaf397e9563bd8e$var$AxiosError, $cbaf397e9563bd8e$var$descriptors);
Object.defineProperty($cbaf397e9563bd8e$var$prototype, 'isAxiosError', {
    value: true
});
// eslint-disable-next-line func-names
$cbaf397e9563bd8e$var$AxiosError.from = (error, code, config, request, response, customProps)=>{
    const axiosError = Object.create($cbaf397e9563bd8e$var$prototype);
    (0, $389ced5518462582$export$2e2bcd8739ae039).toFlatObject(error, axiosError, function filter(obj) {
        return obj !== Error.prototype;
    }, (prop)=>{
        return prop !== 'isAxiosError';
    });
    $cbaf397e9563bd8e$var$AxiosError.call(axiosError, error.message, code, config, request, response);
    axiosError.cause = error;
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
};
var $cbaf397e9563bd8e$export$2e2bcd8739ae039 = $cbaf397e9563bd8e$var$AxiosError;


// eslint-disable-next-line strict
var $852d221994d8f2e9$export$2e2bcd8739ae039 = null;


'use strict';
/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */ function $bdfaca7eaa78d30d$var$isVisitable(thing) {
    return (0, $389ced5518462582$export$2e2bcd8739ae039).isPlainObject(thing) || (0, $389ced5518462582$export$2e2bcd8739ae039).isArray(thing);
}
/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */ function $bdfaca7eaa78d30d$var$removeBrackets(key) {
    return (0, $389ced5518462582$export$2e2bcd8739ae039).endsWith(key, '[]') ? key.slice(0, -2) : key;
}
/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */ function $bdfaca7eaa78d30d$var$renderKey(path, key, dots) {
    if (!path) return key;
    return path.concat(key).map(function each(token, i) {
        // eslint-disable-next-line no-param-reassign
        token = $bdfaca7eaa78d30d$var$removeBrackets(token);
        return !dots && i ? '[' + token + ']' : token;
    }).join(dots ? '.' : '');
}
/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */ function $bdfaca7eaa78d30d$var$isFlatArray(arr) {
    return (0, $389ced5518462582$export$2e2bcd8739ae039).isArray(arr) && !arr.some($bdfaca7eaa78d30d$var$isVisitable);
}
const $bdfaca7eaa78d30d$var$predicates = (0, $389ced5518462582$export$2e2bcd8739ae039).toFlatObject((0, $389ced5518462582$export$2e2bcd8739ae039), {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
});
/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/ /**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */ function $bdfaca7eaa78d30d$var$toFormData(obj, formData, options) {
    if (!(0, $389ced5518462582$export$2e2bcd8739ae039).isObject(obj)) throw new TypeError('target must be an object');
    // eslint-disable-next-line no-param-reassign
    formData = formData || new ((0, $852d221994d8f2e9$export$2e2bcd8739ae039) || FormData)();
    // eslint-disable-next-line no-param-reassign
    options = (0, $389ced5518462582$export$2e2bcd8739ae039).toFlatObject(options, {
        metaTokens: true,
        dots: false,
        indexes: false
    }, false, function defined(option, source) {
        // eslint-disable-next-line no-eq-null,eqeqeq
        return !(0, $389ced5518462582$export$2e2bcd8739ae039).isUndefined(source[option]);
    });
    const metaTokens = options.metaTokens;
    // eslint-disable-next-line no-use-before-define
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
    const useBlob = _Blob && (0, $389ced5518462582$export$2e2bcd8739ae039).isSpecCompliantForm(formData);
    if (!(0, $389ced5518462582$export$2e2bcd8739ae039).isFunction(visitor)) throw new TypeError('visitor must be a function');
    function convertValue(value) {
        if (value === null) return '';
        if ((0, $389ced5518462582$export$2e2bcd8739ae039).isDate(value)) return value.toISOString();
        if (!useBlob && (0, $389ced5518462582$export$2e2bcd8739ae039).isBlob(value)) throw new (0, $cbaf397e9563bd8e$export$2e2bcd8739ae039)('Blob is not supported. Use a Buffer instead.');
        if ((0, $389ced5518462582$export$2e2bcd8739ae039).isArrayBuffer(value) || (0, $389ced5518462582$export$2e2bcd8739ae039).isTypedArray(value)) return useBlob && typeof Blob === 'function' ? new Blob([
            value
        ]) : Buffer.from(value);
        return value;
    }
    /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */ function defaultVisitor(value, key, path) {
        let arr = value;
        if (value && !path && typeof value === 'object') {
            if ((0, $389ced5518462582$export$2e2bcd8739ae039).endsWith(key, '{}')) {
                // eslint-disable-next-line no-param-reassign
                key = metaTokens ? key : key.slice(0, -2);
                // eslint-disable-next-line no-param-reassign
                value = JSON.stringify(value);
            } else if ((0, $389ced5518462582$export$2e2bcd8739ae039).isArray(value) && $bdfaca7eaa78d30d$var$isFlatArray(value) || ((0, $389ced5518462582$export$2e2bcd8739ae039).isFileList(value) || (0, $389ced5518462582$export$2e2bcd8739ae039).endsWith(key, '[]')) && (arr = (0, $389ced5518462582$export$2e2bcd8739ae039).toArray(value))) {
                // eslint-disable-next-line no-param-reassign
                key = $bdfaca7eaa78d30d$var$removeBrackets(key);
                arr.forEach(function each(el, index) {
                    !((0, $389ced5518462582$export$2e2bcd8739ae039).isUndefined(el) || el === null) && formData.append(// eslint-disable-next-line no-nested-ternary
                    indexes === true ? $bdfaca7eaa78d30d$var$renderKey([
                        key
                    ], index, dots) : indexes === null ? key : key + '[]', convertValue(el));
                });
                return false;
            }
        }
        if ($bdfaca7eaa78d30d$var$isVisitable(value)) return true;
        formData.append($bdfaca7eaa78d30d$var$renderKey(path, key, dots), convertValue(value));
        return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign($bdfaca7eaa78d30d$var$predicates, {
        defaultVisitor: defaultVisitor,
        convertValue: convertValue,
        isVisitable: $bdfaca7eaa78d30d$var$isVisitable
    });
    function build(value, path) {
        if ((0, $389ced5518462582$export$2e2bcd8739ae039).isUndefined(value)) return;
        if (stack.indexOf(value) !== -1) throw Error('Circular reference detected in ' + path.join('.'));
        stack.push(value);
        (0, $389ced5518462582$export$2e2bcd8739ae039).forEach(value, function each(el, key) {
            const result = !((0, $389ced5518462582$export$2e2bcd8739ae039).isUndefined(el) || el === null) && visitor.call(formData, el, (0, $389ced5518462582$export$2e2bcd8739ae039).isString(key) ? key.trim() : key, path, exposedHelpers);
            if (result === true) build(el, path ? path.concat(key) : [
                key
            ]);
        });
        stack.pop();
    }
    if (!(0, $389ced5518462582$export$2e2bcd8739ae039).isObject(obj)) throw new TypeError('data must be an object');
    build(obj);
    return formData;
}
var $bdfaca7eaa78d30d$export$2e2bcd8739ae039 = $bdfaca7eaa78d30d$var$toFormData;


'use strict';
/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */ function $8901267a7c8dcfcb$var$encode(str) {
    const charMap = {
        '!': '%21',
        "'": '%27',
        '(': '%28',
        ')': '%29',
        '~': '%7E',
        '%20': '+',
        '%00': '\x00'
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
        return charMap[match];
    });
}
/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */ function $8901267a7c8dcfcb$var$AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && (0, $bdfaca7eaa78d30d$export$2e2bcd8739ae039)(params, this, options);
}
const $8901267a7c8dcfcb$var$prototype = $8901267a7c8dcfcb$var$AxiosURLSearchParams.prototype;
$8901267a7c8dcfcb$var$prototype.append = function append(name, value) {
    this._pairs.push([
        name,
        value
    ]);
};
$8901267a7c8dcfcb$var$prototype.toString = function toString(encoder) {
    const _encode = encoder ? function(value) {
        return encoder.call(this, value, $8901267a7c8dcfcb$var$encode);
    } : $8901267a7c8dcfcb$var$encode;
    return this._pairs.map(function each(pair) {
        return _encode(pair[0]) + '=' + _encode(pair[1]);
    }, '').join('&');
};
var $8901267a7c8dcfcb$export$2e2bcd8739ae039 = $8901267a7c8dcfcb$var$AxiosURLSearchParams;


'use strict';
/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */ function $dfa6cb56d604df07$var$encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}
function $dfa6cb56d604df07$export$2e2bcd8739ae039(url, params, options) {
    /*eslint no-param-reassign:0*/ if (!params) return url;
    const _encode = options && options.encode || $dfa6cb56d604df07$var$encode;
    if ((0, $389ced5518462582$export$2e2bcd8739ae039).isFunction(options)) options = {
        serialize: options
    };
    const serializeFn = options && options.serialize;
    let serializedParams;
    if (serializeFn) serializedParams = serializeFn(params, options);
    else serializedParams = (0, $389ced5518462582$export$2e2bcd8739ae039).isURLSearchParams(params) ? params.toString() : new (0, $8901267a7c8dcfcb$export$2e2bcd8739ae039)(params, options).toString(_encode);
    if (serializedParams) {
        const hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) url = url.slice(0, hashmarkIndex);
        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }
    return url;
}



'use strict';
class $437d2da92ff8f755$var$InterceptorManager {
    constructor(){
        this.handlers = [];
    }
    /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */ use(fulfilled, rejected, options) {
        this.handlers.push({
            fulfilled: fulfilled,
            rejected: rejected,
            synchronous: options ? options.synchronous : false,
            runWhen: options ? options.runWhen : null
        });
        return this.handlers.length - 1;
    }
    /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */ eject(id) {
        if (this.handlers[id]) this.handlers[id] = null;
    }
    /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */ clear() {
        if (this.handlers) this.handlers = [];
    }
    /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */ forEach(fn) {
        (0, $389ced5518462582$export$2e2bcd8739ae039).forEach(this.handlers, function forEachHandler(h) {
            if (h !== null) fn(h);
        });
    }
}
var $437d2da92ff8f755$export$2e2bcd8739ae039 = $437d2da92ff8f755$var$InterceptorManager;





'use strict';
var $b4f385c9d2828988$export$2e2bcd8739ae039 = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
};






'use strict';
var $794467bfb2e24dae$export$2e2bcd8739ae039 = typeof URLSearchParams !== 'undefined' ? URLSearchParams : (0, $8901267a7c8dcfcb$export$2e2bcd8739ae039);


'use strict';
var $9a2a25191455bfa8$export$2e2bcd8739ae039 = typeof FormData !== 'undefined' ? FormData : null;


'use strict';
var $a0be37115e478365$export$2e2bcd8739ae039 = typeof Blob !== 'undefined' ? Blob : null;


var $22bb24c9d101b575$export$2e2bcd8739ae039 = {
    isBrowser: true,
    classes: {
        URLSearchParams: $794467bfb2e24dae$export$2e2bcd8739ae039,
        FormData: $9a2a25191455bfa8$export$2e2bcd8739ae039,
        Blob: $a0be37115e478365$export$2e2bcd8739ae039
    },
    protocols: [
        'http',
        'https',
        'file',
        'blob',
        'url',
        'data'
    ]
};


var $b214e0991a5e9533$exports = {};

$parcel$export($b214e0991a5e9533$exports, "hasBrowserEnv", function () { return $b214e0991a5e9533$export$c4996c4b7b93b0bf; });
$parcel$export($b214e0991a5e9533$exports, "navigator", function () { return $b214e0991a5e9533$export$ec7c8efa7f5790ae; });
$parcel$export($b214e0991a5e9533$exports, "hasStandardBrowserEnv", function () { return $b214e0991a5e9533$export$c0bcc9250309d66; });
$parcel$export($b214e0991a5e9533$exports, "hasStandardBrowserWebWorkerEnv", function () { return $b214e0991a5e9533$export$c81692cf5af97dac; });
$parcel$export($b214e0991a5e9533$exports, "origin", function () { return $b214e0991a5e9533$export$f710a83a91838a36; });
const $b214e0991a5e9533$export$c4996c4b7b93b0bf = typeof window !== 'undefined' && typeof document !== 'undefined';
const $b214e0991a5e9533$export$ec7c8efa7f5790ae = typeof navigator === 'object' && navigator || undefined;
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */ const $b214e0991a5e9533$export$c0bcc9250309d66 = $b214e0991a5e9533$export$c4996c4b7b93b0bf && (!$b214e0991a5e9533$export$ec7c8efa7f5790ae || [
    'ReactNative',
    'NativeScript',
    'NS'
].indexOf($b214e0991a5e9533$export$ec7c8efa7f5790ae.product) < 0);
/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */ const $b214e0991a5e9533$export$c81692cf5af97dac = (()=>{
    return typeof WorkerGlobalScope !== 'undefined' && // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope && typeof self.importScripts === 'function';
})();
const $b214e0991a5e9533$export$f710a83a91838a36 = $b214e0991a5e9533$export$c4996c4b7b93b0bf && window.location.href || 'http://localhost';


var $67db84fabd20f98c$export$2e2bcd8739ae039 = {
    ...$b214e0991a5e9533$exports,
    ...(0, $22bb24c9d101b575$export$2e2bcd8739ae039)
};


'use strict';
function $39cf6a8402920304$export$2e2bcd8739ae039(data, options) {
    return (0, $bdfaca7eaa78d30d$export$2e2bcd8739ae039)(data, new (0, $67db84fabd20f98c$export$2e2bcd8739ae039).classes.URLSearchParams(), Object.assign({
        visitor: function(value, key, path, helpers) {
            if ((0, $67db84fabd20f98c$export$2e2bcd8739ae039).isNode && (0, $389ced5518462582$export$2e2bcd8739ae039).isBuffer(value)) {
                this.append(key, value.toString('base64'));
                return false;
            }
            return helpers.defaultVisitor.apply(this, arguments);
        }
    }, options));
}




'use strict';
/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */ function $9e09895677c225d8$var$parsePropPath(name) {
    // foo[x][y][z]
    // foo.x.y.z
    // foo-x-y-z
    // foo x y z
    return (0, $389ced5518462582$export$2e2bcd8739ae039).matchAll(/\w+|\[(\w*)]/g, name).map((match)=>{
        return match[0] === '[]' ? '' : match[1] || match[0];
    });
}
/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */ function $9e09895677c225d8$var$arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i;
    const len = keys.length;
    let key;
    for(i = 0; i < len; i++){
        key = keys[i];
        obj[key] = arr[key];
    }
    return obj;
}
/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */ function $9e09895677c225d8$var$formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
        let name = path[index++];
        if (name === '__proto__') return true;
        const isNumericKey = Number.isFinite(+name);
        const isLast = index >= path.length;
        name = !name && (0, $389ced5518462582$export$2e2bcd8739ae039).isArray(target) ? target.length : name;
        if (isLast) {
            if ((0, $389ced5518462582$export$2e2bcd8739ae039).hasOwnProp(target, name)) target[name] = [
                target[name],
                value
            ];
            else target[name] = value;
            return !isNumericKey;
        }
        if (!target[name] || !(0, $389ced5518462582$export$2e2bcd8739ae039).isObject(target[name])) target[name] = [];
        const result = buildPath(path, value, target[name], index);
        if (result && (0, $389ced5518462582$export$2e2bcd8739ae039).isArray(target[name])) target[name] = $9e09895677c225d8$var$arrayToObject(target[name]);
        return !isNumericKey;
    }
    if ((0, $389ced5518462582$export$2e2bcd8739ae039).isFormData(formData) && (0, $389ced5518462582$export$2e2bcd8739ae039).isFunction(formData.entries)) {
        const obj = {};
        (0, $389ced5518462582$export$2e2bcd8739ae039).forEachEntry(formData, (name, value)=>{
            buildPath($9e09895677c225d8$var$parsePropPath(name), value, obj, 0);
        });
        return obj;
    }
    return null;
}
var $9e09895677c225d8$export$2e2bcd8739ae039 = $9e09895677c225d8$var$formDataToJSON;


'use strict';
/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */ function $791f6327ca1e363f$var$stringifySafely(rawValue, parser, encoder) {
    if ((0, $389ced5518462582$export$2e2bcd8739ae039).isString(rawValue)) try {
        (parser || JSON.parse)(rawValue);
        return (0, $389ced5518462582$export$2e2bcd8739ae039).trim(rawValue);
    } catch (e) {
        if (e.name !== 'SyntaxError') throw e;
    }
    return (encoder || JSON.stringify)(rawValue);
}
const $791f6327ca1e363f$var$defaults = {
    transitional: (0, $b4f385c9d2828988$export$2e2bcd8739ae039),
    adapter: [
        'xhr',
        'http',
        'fetch'
    ],
    transformRequest: [
        function transformRequest(data, headers) {
            const contentType = headers.getContentType() || '';
            const hasJSONContentType = contentType.indexOf('application/json') > -1;
            const isObjectPayload = (0, $389ced5518462582$export$2e2bcd8739ae039).isObject(data);
            if (isObjectPayload && (0, $389ced5518462582$export$2e2bcd8739ae039).isHTMLForm(data)) data = new FormData(data);
            const isFormData = (0, $389ced5518462582$export$2e2bcd8739ae039).isFormData(data);
            if (isFormData) return hasJSONContentType ? JSON.stringify((0, $9e09895677c225d8$export$2e2bcd8739ae039)(data)) : data;
            if ((0, $389ced5518462582$export$2e2bcd8739ae039).isArrayBuffer(data) || (0, $389ced5518462582$export$2e2bcd8739ae039).isBuffer(data) || (0, $389ced5518462582$export$2e2bcd8739ae039).isStream(data) || (0, $389ced5518462582$export$2e2bcd8739ae039).isFile(data) || (0, $389ced5518462582$export$2e2bcd8739ae039).isBlob(data) || (0, $389ced5518462582$export$2e2bcd8739ae039).isReadableStream(data)) return data;
            if ((0, $389ced5518462582$export$2e2bcd8739ae039).isArrayBufferView(data)) return data.buffer;
            if ((0, $389ced5518462582$export$2e2bcd8739ae039).isURLSearchParams(data)) {
                headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
                return data.toString();
            }
            let isFileList;
            if (isObjectPayload) {
                if (contentType.indexOf('application/x-www-form-urlencoded') > -1) return (0, $39cf6a8402920304$export$2e2bcd8739ae039)(data, this.formSerializer).toString();
                if ((isFileList = (0, $389ced5518462582$export$2e2bcd8739ae039).isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
                    const _FormData = this.env && this.env.FormData;
                    return (0, $bdfaca7eaa78d30d$export$2e2bcd8739ae039)(isFileList ? {
                        'files[]': data
                    } : data, _FormData && new _FormData(), this.formSerializer);
                }
            }
            if (isObjectPayload || hasJSONContentType) {
                headers.setContentType('application/json', false);
                return $791f6327ca1e363f$var$stringifySafely(data);
            }
            return data;
        }
    ],
    transformResponse: [
        function transformResponse(data) {
            const transitional = this.transitional || $791f6327ca1e363f$var$defaults.transitional;
            const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
            const JSONRequested = this.responseType === 'json';
            if ((0, $389ced5518462582$export$2e2bcd8739ae039).isResponse(data) || (0, $389ced5518462582$export$2e2bcd8739ae039).isReadableStream(data)) return data;
            if (data && (0, $389ced5518462582$export$2e2bcd8739ae039).isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
                const silentJSONParsing = transitional && transitional.silentJSONParsing;
                const strictJSONParsing = !silentJSONParsing && JSONRequested;
                try {
                    return JSON.parse(data);
                } catch (e) {
                    if (strictJSONParsing) {
                        if (e.name === 'SyntaxError') throw (0, $cbaf397e9563bd8e$export$2e2bcd8739ae039).from(e, (0, $cbaf397e9563bd8e$export$2e2bcd8739ae039).ERR_BAD_RESPONSE, this, null, this.response);
                        throw e;
                    }
                }
            }
            return data;
        }
    ],
    /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */ timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: (0, $67db84fabd20f98c$export$2e2bcd8739ae039).classes.FormData,
        Blob: (0, $67db84fabd20f98c$export$2e2bcd8739ae039).classes.Blob
    },
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    },
    headers: {
        common: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': undefined
        }
    }
};
(0, $389ced5518462582$export$2e2bcd8739ae039).forEach([
    'delete',
    'get',
    'head',
    'post',
    'put',
    'patch'
], (method)=>{
    $791f6327ca1e363f$var$defaults.headers[method] = {};
});
var $791f6327ca1e363f$export$2e2bcd8739ae039 = $791f6327ca1e363f$var$defaults;




'use strict';
// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const $797d30777e5ed4b3$var$ignoreDuplicateOf = (0, $389ced5518462582$export$2e2bcd8739ae039).toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent'
]);
var /**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */ $797d30777e5ed4b3$export$2e2bcd8739ae039 = (rawHeaders)=>{
    const parsed = {};
    let key;
    let val;
    let i;
    rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
        i = line.indexOf(':');
        key = line.substring(0, i).trim().toLowerCase();
        val = line.substring(i + 1).trim();
        if (!key || parsed[key] && $797d30777e5ed4b3$var$ignoreDuplicateOf[key]) return;
        if (key === 'set-cookie') {
            if (parsed[key]) parsed[key].push(val);
            else parsed[key] = [
                val
            ];
        } else parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    });
    return parsed;
};


'use strict';
const $d6a2466502569559$var$$internals = Symbol('internals');
function $d6a2466502569559$var$normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
}
function $d6a2466502569559$var$normalizeValue(value) {
    if (value === false || value == null) return value;
    return (0, $389ced5518462582$export$2e2bcd8739ae039).isArray(value) ? value.map($d6a2466502569559$var$normalizeValue) : String(value);
}
function $d6a2466502569559$var$parseTokens(str) {
    const tokens = Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while(match = tokensRE.exec(str))tokens[match[1]] = match[2];
    return tokens;
}
const $d6a2466502569559$var$isValidHeaderName = (str)=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function $d6a2466502569559$var$matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
    if ((0, $389ced5518462582$export$2e2bcd8739ae039).isFunction(filter)) return filter.call(this, value, header);
    if (isHeaderNameFilter) value = header;
    if (!(0, $389ced5518462582$export$2e2bcd8739ae039).isString(value)) return;
    if ((0, $389ced5518462582$export$2e2bcd8739ae039).isString(filter)) return value.indexOf(filter) !== -1;
    if ((0, $389ced5518462582$export$2e2bcd8739ae039).isRegExp(filter)) return filter.test(value);
}
function $d6a2466502569559$var$formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str)=>{
        return char.toUpperCase() + str;
    });
}
function $d6a2466502569559$var$buildAccessors(obj, header) {
    const accessorName = (0, $389ced5518462582$export$2e2bcd8739ae039).toCamelCase(' ' + header);
    [
        'get',
        'set',
        'has'
    ].forEach((methodName)=>{
        Object.defineProperty(obj, methodName + accessorName, {
            value: function(arg1, arg2, arg3) {
                return this[methodName].call(this, header, arg1, arg2, arg3);
            },
            configurable: true
        });
    });
}
class $d6a2466502569559$var$AxiosHeaders {
    constructor(headers){
        headers && this.set(headers);
    }
    set(header, valueOrRewrite, rewrite) {
        const self = this;
        function setHeader(_value, _header, _rewrite) {
            const lHeader = $d6a2466502569559$var$normalizeHeader(_header);
            if (!lHeader) throw new Error('header name must be a non-empty string');
            const key = (0, $389ced5518462582$export$2e2bcd8739ae039).findKey(self, lHeader);
            if (!key || self[key] === undefined || _rewrite === true || _rewrite === undefined && self[key] !== false) self[key || _header] = $d6a2466502569559$var$normalizeValue(_value);
        }
        const setHeaders = (headers, _rewrite)=>(0, $389ced5518462582$export$2e2bcd8739ae039).forEach(headers, (_value, _header)=>setHeader(_value, _header, _rewrite));
        if ((0, $389ced5518462582$export$2e2bcd8739ae039).isPlainObject(header) || header instanceof this.constructor) setHeaders(header, valueOrRewrite);
        else if ((0, $389ced5518462582$export$2e2bcd8739ae039).isString(header) && (header = header.trim()) && !$d6a2466502569559$var$isValidHeaderName(header)) setHeaders((0, $797d30777e5ed4b3$export$2e2bcd8739ae039)(header), valueOrRewrite);
        else if ((0, $389ced5518462582$export$2e2bcd8739ae039).isHeaders(header)) for (const [key, value] of header.entries())setHeader(value, key, rewrite);
        else header != null && setHeader(valueOrRewrite, header, rewrite);
        return this;
    }
    get(header, parser) {
        header = $d6a2466502569559$var$normalizeHeader(header);
        if (header) {
            const key = (0, $389ced5518462582$export$2e2bcd8739ae039).findKey(this, header);
            if (key) {
                const value = this[key];
                if (!parser) return value;
                if (parser === true) return $d6a2466502569559$var$parseTokens(value);
                if ((0, $389ced5518462582$export$2e2bcd8739ae039).isFunction(parser)) return parser.call(this, value, key);
                if ((0, $389ced5518462582$export$2e2bcd8739ae039).isRegExp(parser)) return parser.exec(value);
                throw new TypeError('parser must be boolean|regexp|function');
            }
        }
    }
    has(header, matcher) {
        header = $d6a2466502569559$var$normalizeHeader(header);
        if (header) {
            const key = (0, $389ced5518462582$export$2e2bcd8739ae039).findKey(this, header);
            return !!(key && this[key] !== undefined && (!matcher || $d6a2466502569559$var$matchHeaderValue(this, this[key], key, matcher)));
        }
        return false;
    }
    delete(header, matcher) {
        const self = this;
        let deleted = false;
        function deleteHeader(_header) {
            _header = $d6a2466502569559$var$normalizeHeader(_header);
            if (_header) {
                const key = (0, $389ced5518462582$export$2e2bcd8739ae039).findKey(self, _header);
                if (key && (!matcher || $d6a2466502569559$var$matchHeaderValue(self, self[key], key, matcher))) {
                    delete self[key];
                    deleted = true;
                }
            }
        }
        if ((0, $389ced5518462582$export$2e2bcd8739ae039).isArray(header)) header.forEach(deleteHeader);
        else deleteHeader(header);
        return deleted;
    }
    clear(matcher) {
        const keys = Object.keys(this);
        let i = keys.length;
        let deleted = false;
        while(i--){
            const key = keys[i];
            if (!matcher || $d6a2466502569559$var$matchHeaderValue(this, this[key], key, matcher, true)) {
                delete this[key];
                deleted = true;
            }
        }
        return deleted;
    }
    normalize(format) {
        const self = this;
        const headers = {};
        (0, $389ced5518462582$export$2e2bcd8739ae039).forEach(this, (value, header)=>{
            const key = (0, $389ced5518462582$export$2e2bcd8739ae039).findKey(headers, header);
            if (key) {
                self[key] = $d6a2466502569559$var$normalizeValue(value);
                delete self[header];
                return;
            }
            const normalized = format ? $d6a2466502569559$var$formatHeader(header) : String(header).trim();
            if (normalized !== header) delete self[header];
            self[normalized] = $d6a2466502569559$var$normalizeValue(value);
            headers[normalized] = true;
        });
        return this;
    }
    concat(...targets) {
        return this.constructor.concat(this, ...targets);
    }
    toJSON(asStrings) {
        const obj = Object.create(null);
        (0, $389ced5518462582$export$2e2bcd8739ae039).forEach(this, (value, header)=>{
            value != null && value !== false && (obj[header] = asStrings && (0, $389ced5518462582$export$2e2bcd8739ae039).isArray(value) ? value.join(', ') : value);
        });
        return obj;
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
        return Object.entries(this.toJSON()).map(([header, value])=>header + ': ' + value).join('\n');
    }
    get [Symbol.toStringTag]() {
        return 'AxiosHeaders';
    }
    static from(thing) {
        return thing instanceof this ? thing : new this(thing);
    }
    static concat(first, ...targets) {
        const computed = new this(first);
        targets.forEach((target)=>computed.set(target));
        return computed;
    }
    static accessor(header) {
        const internals = this[$d6a2466502569559$var$$internals] = this[$d6a2466502569559$var$$internals] = {
            accessors: {}
        };
        const accessors = internals.accessors;
        const prototype = this.prototype;
        function defineAccessor(_header) {
            const lHeader = $d6a2466502569559$var$normalizeHeader(_header);
            if (!accessors[lHeader]) {
                $d6a2466502569559$var$buildAccessors(prototype, _header);
                accessors[lHeader] = true;
            }
        }
        (0, $389ced5518462582$export$2e2bcd8739ae039).isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
        return this;
    }
}
$d6a2466502569559$var$AxiosHeaders.accessor([
    'Content-Type',
    'Content-Length',
    'Accept',
    'Accept-Encoding',
    'User-Agent',
    'Authorization'
]);
// reserved names hotfix
(0, $389ced5518462582$export$2e2bcd8739ae039).reduceDescriptors($d6a2466502569559$var$AxiosHeaders.prototype, ({ value: value }, key)=>{
    let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
    return {
        get: ()=>value,
        set (headerValue) {
            this[mapped] = headerValue;
        }
    };
});
(0, $389ced5518462582$export$2e2bcd8739ae039).freezeMethods($d6a2466502569559$var$AxiosHeaders);
var $d6a2466502569559$export$2e2bcd8739ae039 = $d6a2466502569559$var$AxiosHeaders;


'use strict';
function $9a58eff145ca0c29$export$2e2bcd8739ae039(fns, response) {
    const config = this || (0, $791f6327ca1e363f$export$2e2bcd8739ae039);
    const context = response || config;
    const headers = (0, $d6a2466502569559$export$2e2bcd8739ae039).from(context.headers);
    let data = context.data;
    (0, $389ced5518462582$export$2e2bcd8739ae039).forEach(fns, function transform(fn) {
        data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
    });
    headers.normalize();
    return data;
}


'use strict';
function $dbc8449a3ffe1cb5$export$2e2bcd8739ae039(value) {
    return !!(value && value.__CANCEL__);
}





'use strict';
/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */ function $958fb1d64bfa0a65$var$CanceledError(message, config, request) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    (0, $cbaf397e9563bd8e$export$2e2bcd8739ae039).call(this, message == null ? 'canceled' : message, (0, $cbaf397e9563bd8e$export$2e2bcd8739ae039).ERR_CANCELED, config, request);
    this.name = 'CanceledError';
}
(0, $389ced5518462582$export$2e2bcd8739ae039).inherits($958fb1d64bfa0a65$var$CanceledError, (0, $cbaf397e9563bd8e$export$2e2bcd8739ae039), {
    __CANCEL__: true
});
var $958fb1d64bfa0a65$export$2e2bcd8739ae039 = $958fb1d64bfa0a65$var$CanceledError;







'use strict';
function $92ea66f04f33e467$export$2e2bcd8739ae039(resolve, reject, response) {
    const validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) resolve(response);
    else reject(new (0, $cbaf397e9563bd8e$export$2e2bcd8739ae039)('Request failed with status code ' + response.status, [
        (0, $cbaf397e9563bd8e$export$2e2bcd8739ae039).ERR_BAD_REQUEST,
        (0, $cbaf397e9563bd8e$export$2e2bcd8739ae039).ERR_BAD_RESPONSE
    ][Math.floor(response.status / 100) - 4], response.config, response.request, response));
}





'use strict';
function $5430a52d08234733$export$2e2bcd8739ae039(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || '';
}




'use strict';
/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */ function $d5f0e3ee633b16e7$var$speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min = min !== undefined ? min : 1000;
    return function push(chunkLength) {
        const now = Date.now();
        const startedAt = timestamps[tail];
        if (!firstSampleTS) firstSampleTS = now;
        bytes[head] = chunkLength;
        timestamps[head] = now;
        let i = tail;
        let bytesCount = 0;
        while(i !== head){
            bytesCount += bytes[i++];
            i = i % samplesCount;
        }
        head = (head + 1) % samplesCount;
        if (head === tail) tail = (tail + 1) % samplesCount;
        if (now - firstSampleTS < min) return;
        const passed = startedAt && now - startedAt;
        return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
    };
}
var $d5f0e3ee633b16e7$export$2e2bcd8739ae039 = $d5f0e3ee633b16e7$var$speedometer;


/**
 * Throttle decorator
 * @param {Function} fn
 * @param {Number} freq
 * @return {Function}
 */ function $5d905829b841e0f6$var$throttle(fn, freq) {
    let timestamp = 0;
    let threshold = 1000 / freq;
    let lastArgs;
    let timer;
    const invoke = (args, now = Date.now())=>{
        timestamp = now;
        lastArgs = null;
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        fn.apply(null, args);
    };
    const throttled = (...args)=>{
        const now = Date.now();
        const passed = now - timestamp;
        if (passed >= threshold) invoke(args, now);
        else {
            lastArgs = args;
            if (!timer) timer = setTimeout(()=>{
                timer = null;
                invoke(lastArgs);
            }, threshold - passed);
        }
    };
    const flush = ()=>lastArgs && invoke(lastArgs);
    return [
        throttled,
        flush
    ];
}
var $5d905829b841e0f6$export$2e2bcd8739ae039 = $5d905829b841e0f6$var$throttle;



const $0baa18157e6a1999$export$c1b28109d46c3592 = (listener, isDownloadStream, freq = 3)=>{
    let bytesNotified = 0;
    const _speedometer = (0, $d5f0e3ee633b16e7$export$2e2bcd8739ae039)(50, 250);
    return (0, $5d905829b841e0f6$export$2e2bcd8739ae039)((e)=>{
        const loaded = e.loaded;
        const total = e.lengthComputable ? e.total : undefined;
        const progressBytes = loaded - bytesNotified;
        const rate = _speedometer(progressBytes);
        const inRange = loaded <= total;
        bytesNotified = loaded;
        const data = {
            loaded: loaded,
            total: total,
            progress: total ? loaded / total : undefined,
            bytes: progressBytes,
            rate: rate ? rate : undefined,
            estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
            event: e,
            lengthComputable: total != null,
            [isDownloadStream ? 'download' : 'upload']: true
        };
        listener(data);
    }, freq);
};
const $0baa18157e6a1999$export$d9fadd12586c18d6 = (total, throttled)=>{
    const lengthComputable = total != null;
    return [
        (loaded)=>throttled[0]({
                lengthComputable: lengthComputable,
                total: total,
                loaded: loaded
            }),
        throttled[1]
    ];
};
const $0baa18157e6a1999$export$5d35863c355a22a9 = (fn)=>(...args)=>(0, $389ced5518462582$export$2e2bcd8739ae039).asap(()=>fn(...args));





var $41cc1b6ae7d9c092$export$2e2bcd8739ae039 = (0, $67db84fabd20f98c$export$2e2bcd8739ae039).hasStandardBrowserEnv ? ((origin, isMSIE)=>(url)=>{
        url = new URL(url, (0, $67db84fabd20f98c$export$2e2bcd8739ae039).origin);
        return origin.protocol === url.protocol && origin.host === url.host && (isMSIE || origin.port === url.port);
    })(new URL((0, $67db84fabd20f98c$export$2e2bcd8739ae039).origin), (0, $67db84fabd20f98c$export$2e2bcd8739ae039).navigator && /(msie|trident)/i.test((0, $67db84fabd20f98c$export$2e2bcd8739ae039).navigator.userAgent)) : ()=>true;




var $b8677e2d0231fef4$export$2e2bcd8739ae039 = (0, $67db84fabd20f98c$export$2e2bcd8739ae039).hasStandardBrowserEnv ? // Standard browser envs support document.cookie
{
    write (name, value, expires, path, domain, secure) {
        const cookie = [
            name + '=' + encodeURIComponent(value)
        ];
        (0, $389ced5518462582$export$2e2bcd8739ae039).isNumber(expires) && cookie.push('expires=' + new Date(expires).toGMTString());
        (0, $389ced5518462582$export$2e2bcd8739ae039).isString(path) && cookie.push('path=' + path);
        (0, $389ced5518462582$export$2e2bcd8739ae039).isString(domain) && cookie.push('domain=' + domain);
        secure === true && cookie.push('secure');
        document.cookie = cookie.join('; ');
    },
    read (name) {
        const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return match ? decodeURIComponent(match[3]) : null;
    },
    remove (name) {
        this.write(name, '', Date.now() - 86400000);
    }
} : // Non-standard browser env (web workers, react-native) lack needed support.
{
    write () {},
    read () {
        return null;
    },
    remove () {}
};


'use strict';
function $e72b9f2e76207020$export$2e2bcd8739ae039(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}


'use strict';
function $2608ba34036a1979$export$2e2bcd8739ae039(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
}


'use strict';
function $de4a0373d5e80065$export$2e2bcd8739ae039(baseURL, requestedURL, allowAbsoluteUrls) {
    let isRelativeUrl = !(0, $e72b9f2e76207020$export$2e2bcd8739ae039)(requestedURL);
    if (baseURL && (isRelativeUrl || allowAbsoluteUrls == false)) return (0, $2608ba34036a1979$export$2e2bcd8739ae039)(baseURL, requestedURL);
    return requestedURL;
}




'use strict';
const $f545ece393ad4452$var$headersToObject = (thing)=>thing instanceof (0, $d6a2466502569559$export$2e2bcd8739ae039) ? {
        ...thing
    } : thing;
function $f545ece393ad4452$export$2e2bcd8739ae039(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    const config = {};
    function getMergedValue(target, source, prop, caseless) {
        if ((0, $389ced5518462582$export$2e2bcd8739ae039).isPlainObject(target) && (0, $389ced5518462582$export$2e2bcd8739ae039).isPlainObject(source)) return (0, $389ced5518462582$export$2e2bcd8739ae039).merge.call({
            caseless: caseless
        }, target, source);
        else if ((0, $389ced5518462582$export$2e2bcd8739ae039).isPlainObject(source)) return (0, $389ced5518462582$export$2e2bcd8739ae039).merge({}, source);
        else if ((0, $389ced5518462582$export$2e2bcd8739ae039).isArray(source)) return source.slice();
        return source;
    }
    // eslint-disable-next-line consistent-return
    function mergeDeepProperties(a, b, prop, caseless) {
        if (!(0, $389ced5518462582$export$2e2bcd8739ae039).isUndefined(b)) return getMergedValue(a, b, prop, caseless);
        else if (!(0, $389ced5518462582$export$2e2bcd8739ae039).isUndefined(a)) return getMergedValue(undefined, a, prop, caseless);
    }
    // eslint-disable-next-line consistent-return
    function valueFromConfig2(a, b) {
        if (!(0, $389ced5518462582$export$2e2bcd8739ae039).isUndefined(b)) return getMergedValue(undefined, b);
    }
    // eslint-disable-next-line consistent-return
    function defaultToConfig2(a, b) {
        if (!(0, $389ced5518462582$export$2e2bcd8739ae039).isUndefined(b)) return getMergedValue(undefined, b);
        else if (!(0, $389ced5518462582$export$2e2bcd8739ae039).isUndefined(a)) return getMergedValue(undefined, a);
    }
    // eslint-disable-next-line consistent-return
    function mergeDirectKeys(a, b, prop) {
        if (prop in config2) return getMergedValue(a, b);
        else if (prop in config1) return getMergedValue(undefined, a);
    }
    const mergeMap = {
        url: valueFromConfig2,
        method: valueFromConfig2,
        data: valueFromConfig2,
        baseURL: defaultToConfig2,
        transformRequest: defaultToConfig2,
        transformResponse: defaultToConfig2,
        paramsSerializer: defaultToConfig2,
        timeout: defaultToConfig2,
        timeoutMessage: defaultToConfig2,
        withCredentials: defaultToConfig2,
        withXSRFToken: defaultToConfig2,
        adapter: defaultToConfig2,
        responseType: defaultToConfig2,
        xsrfCookieName: defaultToConfig2,
        xsrfHeaderName: defaultToConfig2,
        onUploadProgress: defaultToConfig2,
        onDownloadProgress: defaultToConfig2,
        decompress: defaultToConfig2,
        maxContentLength: defaultToConfig2,
        maxBodyLength: defaultToConfig2,
        beforeRedirect: defaultToConfig2,
        transport: defaultToConfig2,
        httpAgent: defaultToConfig2,
        httpsAgent: defaultToConfig2,
        cancelToken: defaultToConfig2,
        socketPath: defaultToConfig2,
        responseEncoding: defaultToConfig2,
        validateStatus: mergeDirectKeys,
        headers: (a, b, prop)=>mergeDeepProperties($f545ece393ad4452$var$headersToObject(a), $f545ece393ad4452$var$headersToObject(b), prop, true)
    };
    (0, $389ced5518462582$export$2e2bcd8739ae039).forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
        const merge = mergeMap[prop] || mergeDeepProperties;
        const configValue = merge(config1[prop], config2[prop], prop);
        (0, $389ced5518462582$export$2e2bcd8739ae039).isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
}




var $00a26f589d0bb07b$export$2e2bcd8739ae039 = (config)=>{
    const newConfig = (0, $f545ece393ad4452$export$2e2bcd8739ae039)({}, config);
    let { data: data, withXSRFToken: withXSRFToken, xsrfHeaderName: xsrfHeaderName, xsrfCookieName: xsrfCookieName, headers: headers, auth: auth } = newConfig;
    newConfig.headers = headers = (0, $d6a2466502569559$export$2e2bcd8739ae039).from(headers);
    newConfig.url = (0, $dfa6cb56d604df07$export$2e2bcd8739ae039)((0, $de4a0373d5e80065$export$2e2bcd8739ae039)(newConfig.baseURL, newConfig.url, newConfig.allowAbsoluteUrls), config.params, config.paramsSerializer);
    // HTTP basic authentication
    if (auth) headers.set('Authorization', 'Basic ' + btoa((auth.username || '') + ':' + (auth.password ? unescape(encodeURIComponent(auth.password)) : '')));
    let contentType;
    if ((0, $389ced5518462582$export$2e2bcd8739ae039).isFormData(data)) {
        if ((0, $67db84fabd20f98c$export$2e2bcd8739ae039).hasStandardBrowserEnv || (0, $67db84fabd20f98c$export$2e2bcd8739ae039).hasStandardBrowserWebWorkerEnv) headers.setContentType(undefined); // Let the browser set it
        else if ((contentType = headers.getContentType()) !== false) {
            // fix semicolon duplication issue for ReactNative FormData implementation
            const [type, ...tokens] = contentType ? contentType.split(';').map((token)=>token.trim()).filter(Boolean) : [];
            headers.setContentType([
                type || 'multipart/form-data',
                ...tokens
            ].join('; '));
        }
    }
    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if ((0, $67db84fabd20f98c$export$2e2bcd8739ae039).hasStandardBrowserEnv) {
        withXSRFToken && (0, $389ced5518462582$export$2e2bcd8739ae039).isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));
        if (withXSRFToken || withXSRFToken !== false && (0, $41cc1b6ae7d9c092$export$2e2bcd8739ae039)(newConfig.url)) {
            // Add xsrf header
            const xsrfValue = xsrfHeaderName && xsrfCookieName && (0, $b8677e2d0231fef4$export$2e2bcd8739ae039).read(xsrfCookieName);
            if (xsrfValue) headers.set(xsrfHeaderName, xsrfValue);
        }
    }
    return newConfig;
};


const $a18c655b0691bfd0$var$isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';
var $a18c655b0691bfd0$export$2e2bcd8739ae039 = $a18c655b0691bfd0$var$isXHRAdapterSupported && function(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        const _config = (0, $00a26f589d0bb07b$export$2e2bcd8739ae039)(config);
        let requestData = _config.data;
        const requestHeaders = (0, $d6a2466502569559$export$2e2bcd8739ae039).from(_config.headers).normalize();
        let { responseType: responseType, onUploadProgress: onUploadProgress, onDownloadProgress: onDownloadProgress } = _config;
        let onCanceled;
        let uploadThrottled, downloadThrottled;
        let flushUpload, flushDownload;
        function done() {
            flushUpload && flushUpload(); // flush events
            flushDownload && flushDownload(); // flush events
            _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
            _config.signal && _config.signal.removeEventListener('abort', onCanceled);
        }
        let request = new XMLHttpRequest();
        request.open(_config.method.toUpperCase(), _config.url, true);
        // Set the request timeout in MS
        request.timeout = _config.timeout;
        function onloadend() {
            if (!request) return;
            // Prepare the response
            const responseHeaders = (0, $d6a2466502569559$export$2e2bcd8739ae039).from('getAllResponseHeaders' in request && request.getAllResponseHeaders());
            const responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
            const response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config: config,
                request: request
            };
            (0, $92ea66f04f33e467$export$2e2bcd8739ae039)(function _resolve(value) {
                resolve(value);
                done();
            }, function _reject(err) {
                reject(err);
                done();
            }, response);
            // Clean up request
            request = null;
        }
        if ('onloadend' in request) // Use onloadend if available
        request.onloadend = onloadend;
        else // Listen for ready state to emulate onloadend
        request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) return;
            // The request errored out and we didn't get a response, this will be
            // handled by onerror instead
            // With one exception: request that using file: protocol, most browsers
            // will return status as 0 even though it's a successful request
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) return;
            // readystate handler is calling before onerror or ontimeout handlers,
            // so we should call onloadend on the next 'tick'
            setTimeout(onloadend);
        };
        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
            if (!request) return;
            reject(new (0, $cbaf397e9563bd8e$export$2e2bcd8739ae039)('Request aborted', (0, $cbaf397e9563bd8e$export$2e2bcd8739ae039).ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Handle low level network errors
        request.onerror = function handleError() {
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            reject(new (0, $cbaf397e9563bd8e$export$2e2bcd8739ae039)('Network Error', (0, $cbaf397e9563bd8e$export$2e2bcd8739ae039).ERR_NETWORK, config, request));
            // Clean up request
            request = null;
        };
        // Handle timeout
        request.ontimeout = function handleTimeout() {
            let timeoutErrorMessage = _config.timeout ? 'timeout of ' + _config.timeout + 'ms exceeded' : 'timeout exceeded';
            const transitional = _config.transitional || (0, $b4f385c9d2828988$export$2e2bcd8739ae039);
            if (_config.timeoutErrorMessage) timeoutErrorMessage = _config.timeoutErrorMessage;
            reject(new (0, $cbaf397e9563bd8e$export$2e2bcd8739ae039)(timeoutErrorMessage, transitional.clarifyTimeoutError ? (0, $cbaf397e9563bd8e$export$2e2bcd8739ae039).ETIMEDOUT : (0, $cbaf397e9563bd8e$export$2e2bcd8739ae039).ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Remove Content-Type if data is undefined
        requestData === undefined && requestHeaders.setContentType(null);
        // Add headers to the request
        if ('setRequestHeader' in request) (0, $389ced5518462582$export$2e2bcd8739ae039).forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
            request.setRequestHeader(key, val);
        });
        // Add withCredentials to request if needed
        if (!(0, $389ced5518462582$export$2e2bcd8739ae039).isUndefined(_config.withCredentials)) request.withCredentials = !!_config.withCredentials;
        // Add responseType to request if needed
        if (responseType && responseType !== 'json') request.responseType = _config.responseType;
        // Handle progress if needed
        if (onDownloadProgress) {
            [downloadThrottled, flushDownload] = (0, $0baa18157e6a1999$export$c1b28109d46c3592)(onDownloadProgress, true);
            request.addEventListener('progress', downloadThrottled);
        }
        // Not all browsers support upload events
        if (onUploadProgress && request.upload) {
            [uploadThrottled, flushUpload] = (0, $0baa18157e6a1999$export$c1b28109d46c3592)(onUploadProgress);
            request.upload.addEventListener('progress', uploadThrottled);
            request.upload.addEventListener('loadend', flushUpload);
        }
        if (_config.cancelToken || _config.signal) {
            // Handle cancellation
            // eslint-disable-next-line func-names
            onCanceled = (cancel)=>{
                if (!request) return;
                reject(!cancel || cancel.type ? new (0, $958fb1d64bfa0a65$export$2e2bcd8739ae039)(null, config, request) : cancel);
                request.abort();
                request = null;
            };
            _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
            if (_config.signal) _config.signal.aborted ? onCanceled() : _config.signal.addEventListener('abort', onCanceled);
        }
        const protocol = (0, $5430a52d08234733$export$2e2bcd8739ae039)(_config.url);
        if (protocol && (0, $67db84fabd20f98c$export$2e2bcd8739ae039).protocols.indexOf(protocol) === -1) {
            reject(new (0, $cbaf397e9563bd8e$export$2e2bcd8739ae039)('Unsupported protocol ' + protocol + ':', (0, $cbaf397e9563bd8e$export$2e2bcd8739ae039).ERR_BAD_REQUEST, config));
            return;
        }
        // Send the request
        request.send(requestData || null);
    });
};








const $69fe51a4c6d2a2a2$var$composeSignals = (signals, timeout)=>{
    const { length: length } = signals = signals ? signals.filter(Boolean) : [];
    if (timeout || length) {
        let controller = new AbortController();
        let aborted;
        const onabort = function(reason) {
            if (!aborted) {
                aborted = true;
                unsubscribe();
                const err = reason instanceof Error ? reason : this.reason;
                controller.abort(err instanceof (0, $cbaf397e9563bd8e$export$2e2bcd8739ae039) ? err : new (0, $958fb1d64bfa0a65$export$2e2bcd8739ae039)(err instanceof Error ? err.message : err));
            }
        };
        let timer = timeout && setTimeout(()=>{
            timer = null;
            onabort(new (0, $cbaf397e9563bd8e$export$2e2bcd8739ae039)(`timeout ${timeout} of ms exceeded`, (0, $cbaf397e9563bd8e$export$2e2bcd8739ae039).ETIMEDOUT));
        }, timeout);
        const unsubscribe = ()=>{
            if (signals) {
                timer && clearTimeout(timer);
                timer = null;
                signals.forEach((signal)=>{
                    signal.unsubscribe ? signal.unsubscribe(onabort) : signal.removeEventListener('abort', onabort);
                });
                signals = null;
            }
        };
        signals.forEach((signal)=>signal.addEventListener('abort', onabort));
        const { signal: signal } = controller;
        signal.unsubscribe = ()=>(0, $389ced5518462582$export$2e2bcd8739ae039).asap(unsubscribe);
        return signal;
    }
};
var $69fe51a4c6d2a2a2$export$2e2bcd8739ae039 = $69fe51a4c6d2a2a2$var$composeSignals;


const $624a43c3e174cb48$export$71b051935044bd5d = function*(chunk, chunkSize) {
    let len = chunk.byteLength;
    if (!chunkSize || len < chunkSize) {
        yield chunk;
        return;
    }
    let pos = 0;
    let end;
    while(pos < len){
        end = pos + chunkSize;
        yield chunk.slice(pos, end);
        pos = end;
    }
};
const $624a43c3e174cb48$export$f9f241124ee3198e = async function*(iterable, chunkSize) {
    for await (const chunk of $624a43c3e174cb48$var$readStream(iterable))yield* $624a43c3e174cb48$export$71b051935044bd5d(chunk, chunkSize);
};
const $624a43c3e174cb48$var$readStream = async function*(stream) {
    if (stream[Symbol.asyncIterator]) {
        yield* stream;
        return;
    }
    const reader = stream.getReader();
    try {
        for(;;){
            const { done: done, value: value } = await reader.read();
            if (done) break;
            yield value;
        }
    } finally{
        await reader.cancel();
    }
};
const $624a43c3e174cb48$export$b0119225647bd83 = (stream, chunkSize, onProgress, onFinish)=>{
    const iterator = $624a43c3e174cb48$export$f9f241124ee3198e(stream, chunkSize);
    let bytes = 0;
    let done;
    let _onFinish = (e)=>{
        if (!done) {
            done = true;
            onFinish && onFinish(e);
        }
    };
    return new ReadableStream({
        async pull (controller) {
            try {
                const { done: done, value: value } = await iterator.next();
                if (done) {
                    _onFinish();
                    controller.close();
                    return;
                }
                let len = value.byteLength;
                if (onProgress) {
                    let loadedBytes = bytes += len;
                    onProgress(loadedBytes);
                }
                controller.enqueue(new Uint8Array(value));
            } catch (err) {
                _onFinish(err);
                throw err;
            }
        },
        cancel (reason) {
            _onFinish(reason);
            return iterator.return();
        }
    }, {
        highWaterMark: 2
    });
};






const $ab1dceee4ab4c9a4$var$isFetchSupported = typeof fetch === 'function' && typeof Request === 'function' && typeof Response === 'function';
const $ab1dceee4ab4c9a4$var$isReadableStreamSupported = $ab1dceee4ab4c9a4$var$isFetchSupported && typeof ReadableStream === 'function';
// used only inside the fetch adapter
const $ab1dceee4ab4c9a4$var$encodeText = $ab1dceee4ab4c9a4$var$isFetchSupported && (typeof TextEncoder === 'function' ? ((encoder)=>(str)=>encoder.encode(str))(new TextEncoder()) : async (str)=>new Uint8Array(await new Response(str).arrayBuffer()));
const $ab1dceee4ab4c9a4$var$test = (fn, ...args)=>{
    try {
        return !!fn(...args);
    } catch (e) {
        return false;
    }
};
const $ab1dceee4ab4c9a4$var$supportsRequestStream = $ab1dceee4ab4c9a4$var$isReadableStreamSupported && $ab1dceee4ab4c9a4$var$test(()=>{
    let duplexAccessed = false;
    const hasContentType = new Request((0, $67db84fabd20f98c$export$2e2bcd8739ae039).origin, {
        body: new ReadableStream(),
        method: 'POST',
        get duplex () {
            duplexAccessed = true;
            return 'half';
        }
    }).headers.has('Content-Type');
    return duplexAccessed && !hasContentType;
});
const $ab1dceee4ab4c9a4$var$DEFAULT_CHUNK_SIZE = 65536;
const $ab1dceee4ab4c9a4$var$supportsResponseStream = $ab1dceee4ab4c9a4$var$isReadableStreamSupported && $ab1dceee4ab4c9a4$var$test(()=>(0, $389ced5518462582$export$2e2bcd8739ae039).isReadableStream(new Response('').body));
const $ab1dceee4ab4c9a4$var$resolvers = {
    stream: $ab1dceee4ab4c9a4$var$supportsResponseStream && ((res)=>res.body)
};
$ab1dceee4ab4c9a4$var$isFetchSupported && ((res)=>{
    [
        'text',
        'arrayBuffer',
        'blob',
        'formData',
        'stream'
    ].forEach((type)=>{
        !$ab1dceee4ab4c9a4$var$resolvers[type] && ($ab1dceee4ab4c9a4$var$resolvers[type] = (0, $389ced5518462582$export$2e2bcd8739ae039).isFunction(res[type]) ? (res)=>res[type]() : (_, config)=>{
            throw new (0, $cbaf397e9563bd8e$export$2e2bcd8739ae039)(`Response type '${type}' is not supported`, (0, $cbaf397e9563bd8e$export$2e2bcd8739ae039).ERR_NOT_SUPPORT, config);
        });
    });
})(new Response);
const $ab1dceee4ab4c9a4$var$getBodyLength = async (body)=>{
    if (body == null) return 0;
    if ((0, $389ced5518462582$export$2e2bcd8739ae039).isBlob(body)) return body.size;
    if ((0, $389ced5518462582$export$2e2bcd8739ae039).isSpecCompliantForm(body)) {
        const _request = new Request((0, $67db84fabd20f98c$export$2e2bcd8739ae039).origin, {
            method: 'POST',
            body: body
        });
        return (await _request.arrayBuffer()).byteLength;
    }
    if ((0, $389ced5518462582$export$2e2bcd8739ae039).isArrayBufferView(body) || (0, $389ced5518462582$export$2e2bcd8739ae039).isArrayBuffer(body)) return body.byteLength;
    if ((0, $389ced5518462582$export$2e2bcd8739ae039).isURLSearchParams(body)) body = body + '';
    if ((0, $389ced5518462582$export$2e2bcd8739ae039).isString(body)) return (await $ab1dceee4ab4c9a4$var$encodeText(body)).byteLength;
};
const $ab1dceee4ab4c9a4$var$resolveBodyLength = async (headers, body)=>{
    const length = (0, $389ced5518462582$export$2e2bcd8739ae039).toFiniteNumber(headers.getContentLength());
    return length == null ? $ab1dceee4ab4c9a4$var$getBodyLength(body) : length;
};
var $ab1dceee4ab4c9a4$export$2e2bcd8739ae039 = $ab1dceee4ab4c9a4$var$isFetchSupported && (async (config)=>{
    let { url: url, method: method, data: data, signal: signal, cancelToken: cancelToken, timeout: timeout, onDownloadProgress: onDownloadProgress, onUploadProgress: onUploadProgress, responseType: responseType, headers: headers, withCredentials: withCredentials = 'same-origin', fetchOptions: fetchOptions } = (0, $00a26f589d0bb07b$export$2e2bcd8739ae039)(config);
    responseType = responseType ? (responseType + '').toLowerCase() : 'text';
    let composedSignal = (0, $69fe51a4c6d2a2a2$export$2e2bcd8739ae039)([
        signal,
        cancelToken && cancelToken.toAbortSignal()
    ], timeout);
    let request;
    const unsubscribe = composedSignal && composedSignal.unsubscribe && (()=>{
        composedSignal.unsubscribe();
    });
    let requestContentLength;
    try {
        if (onUploadProgress && $ab1dceee4ab4c9a4$var$supportsRequestStream && method !== 'get' && method !== 'head' && (requestContentLength = await $ab1dceee4ab4c9a4$var$resolveBodyLength(headers, data)) !== 0) {
            let _request = new Request(url, {
                method: 'POST',
                body: data,
                duplex: "half"
            });
            let contentTypeHeader;
            if ((0, $389ced5518462582$export$2e2bcd8739ae039).isFormData(data) && (contentTypeHeader = _request.headers.get('content-type'))) headers.setContentType(contentTypeHeader);
            if (_request.body) {
                const [onProgress, flush] = (0, $0baa18157e6a1999$export$d9fadd12586c18d6)(requestContentLength, (0, $0baa18157e6a1999$export$c1b28109d46c3592)((0, $0baa18157e6a1999$export$5d35863c355a22a9)(onUploadProgress)));
                data = (0, $624a43c3e174cb48$export$b0119225647bd83)(_request.body, $ab1dceee4ab4c9a4$var$DEFAULT_CHUNK_SIZE, onProgress, flush);
            }
        }
        if (!(0, $389ced5518462582$export$2e2bcd8739ae039).isString(withCredentials)) withCredentials = withCredentials ? 'include' : 'omit';
        // Cloudflare Workers throws when credentials are defined
        // see https://github.com/cloudflare/workerd/issues/902
        const isCredentialsSupported = "credentials" in Request.prototype;
        request = new Request(url, {
            ...fetchOptions,
            signal: composedSignal,
            method: method.toUpperCase(),
            headers: headers.normalize().toJSON(),
            body: data,
            duplex: "half",
            credentials: isCredentialsSupported ? withCredentials : undefined
        });
        let response = await fetch(request);
        const isStreamResponse = $ab1dceee4ab4c9a4$var$supportsResponseStream && (responseType === 'stream' || responseType === 'response');
        if ($ab1dceee4ab4c9a4$var$supportsResponseStream && (onDownloadProgress || isStreamResponse && unsubscribe)) {
            const options = {};
            [
                'status',
                'statusText',
                'headers'
            ].forEach((prop)=>{
                options[prop] = response[prop];
            });
            const responseContentLength = (0, $389ced5518462582$export$2e2bcd8739ae039).toFiniteNumber(response.headers.get('content-length'));
            const [onProgress, flush] = onDownloadProgress && (0, $0baa18157e6a1999$export$d9fadd12586c18d6)(responseContentLength, (0, $0baa18157e6a1999$export$c1b28109d46c3592)((0, $0baa18157e6a1999$export$5d35863c355a22a9)(onDownloadProgress), true)) || [];
            response = new Response((0, $624a43c3e174cb48$export$b0119225647bd83)(response.body, $ab1dceee4ab4c9a4$var$DEFAULT_CHUNK_SIZE, onProgress, ()=>{
                flush && flush();
                unsubscribe && unsubscribe();
            }), options);
        }
        responseType = responseType || 'text';
        let responseData = await $ab1dceee4ab4c9a4$var$resolvers[(0, $389ced5518462582$export$2e2bcd8739ae039).findKey($ab1dceee4ab4c9a4$var$resolvers, responseType) || 'text'](response, config);
        !isStreamResponse && unsubscribe && unsubscribe();
        return await new Promise((resolve, reject)=>{
            (0, $92ea66f04f33e467$export$2e2bcd8739ae039)(resolve, reject, {
                data: responseData,
                headers: (0, $d6a2466502569559$export$2e2bcd8739ae039).from(response.headers),
                status: response.status,
                statusText: response.statusText,
                config: config,
                request: request
            });
        });
    } catch (err) {
        unsubscribe && unsubscribe();
        if (err && err.name === 'TypeError' && /fetch/i.test(err.message)) throw Object.assign(new (0, $cbaf397e9563bd8e$export$2e2bcd8739ae039)('Network Error', (0, $cbaf397e9563bd8e$export$2e2bcd8739ae039).ERR_NETWORK, config, request), {
            cause: err.cause || err
        });
        throw (0, $cbaf397e9563bd8e$export$2e2bcd8739ae039).from(err, err && err.code, config, request);
    }
});



const $1efc49830494d148$var$knownAdapters = {
    http: (0, $852d221994d8f2e9$export$2e2bcd8739ae039),
    xhr: (0, $a18c655b0691bfd0$export$2e2bcd8739ae039),
    fetch: (0, $ab1dceee4ab4c9a4$export$2e2bcd8739ae039)
};
(0, $389ced5518462582$export$2e2bcd8739ae039).forEach($1efc49830494d148$var$knownAdapters, (fn, value)=>{
    if (fn) {
        try {
            Object.defineProperty(fn, 'name', {
                value: value
            });
        } catch (e) {
        // eslint-disable-next-line no-empty
        }
        Object.defineProperty(fn, 'adapterName', {
            value: value
        });
    }
});
const $1efc49830494d148$var$renderReason = (reason)=>`- ${reason}`;
const $1efc49830494d148$var$isResolvedHandle = (adapter)=>(0, $389ced5518462582$export$2e2bcd8739ae039).isFunction(adapter) || adapter === null || adapter === false;
var $1efc49830494d148$export$2e2bcd8739ae039 = {
    getAdapter: (adapters)=>{
        adapters = (0, $389ced5518462582$export$2e2bcd8739ae039).isArray(adapters) ? adapters : [
            adapters
        ];
        const { length: length } = adapters;
        let nameOrAdapter;
        let adapter;
        const rejectedReasons = {};
        for(let i = 0; i < length; i++){
            nameOrAdapter = adapters[i];
            let id;
            adapter = nameOrAdapter;
            if (!$1efc49830494d148$var$isResolvedHandle(nameOrAdapter)) {
                adapter = $1efc49830494d148$var$knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
                if (adapter === undefined) throw new (0, $cbaf397e9563bd8e$export$2e2bcd8739ae039)(`Unknown adapter '${id}'`);
            }
            if (adapter) break;
            rejectedReasons[id || '#' + i] = adapter;
        }
        if (!adapter) {
            const reasons = Object.entries(rejectedReasons).map(([id, state])=>`adapter ${id} ` + (state === false ? 'is not supported by the environment' : 'is not available in the build'));
            let s = length ? reasons.length > 1 ? 'since :\n' + reasons.map($1efc49830494d148$var$renderReason).join('\n') : ' ' + $1efc49830494d148$var$renderReason(reasons[0]) : 'as no adapter specified';
            throw new (0, $cbaf397e9563bd8e$export$2e2bcd8739ae039)(`There is no suitable adapter to dispatch the request ` + s, 'ERR_NOT_SUPPORT');
        }
        return adapter;
    },
    adapters: $1efc49830494d148$var$knownAdapters
};


'use strict';
/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */ function $5357c4b1bebd14ca$var$throwIfCancellationRequested(config) {
    if (config.cancelToken) config.cancelToken.throwIfRequested();
    if (config.signal && config.signal.aborted) throw new (0, $958fb1d64bfa0a65$export$2e2bcd8739ae039)(null, config);
}
function $5357c4b1bebd14ca$export$2e2bcd8739ae039(config) {
    $5357c4b1bebd14ca$var$throwIfCancellationRequested(config);
    config.headers = (0, $d6a2466502569559$export$2e2bcd8739ae039).from(config.headers);
    // Transform request data
    config.data = (0, $9a58eff145ca0c29$export$2e2bcd8739ae039).call(config, config.transformRequest);
    if ([
        'post',
        'put',
        'patch'
    ].indexOf(config.method) !== -1) config.headers.setContentType('application/x-www-form-urlencoded', false);
    const adapter = (0, $1efc49830494d148$export$2e2bcd8739ae039).getAdapter(config.adapter || (0, $791f6327ca1e363f$export$2e2bcd8739ae039).adapter);
    return adapter(config).then(function onAdapterResolution(response) {
        $5357c4b1bebd14ca$var$throwIfCancellationRequested(config);
        // Transform response data
        response.data = (0, $9a58eff145ca0c29$export$2e2bcd8739ae039).call(config, config.transformResponse, response);
        response.headers = (0, $d6a2466502569559$export$2e2bcd8739ae039).from(response.headers);
        return response;
    }, function onAdapterRejection(reason) {
        if (!(0, $dbc8449a3ffe1cb5$export$2e2bcd8739ae039)(reason)) {
            $5357c4b1bebd14ca$var$throwIfCancellationRequested(config);
            // Transform response data
            if (reason && reason.response) {
                reason.response.data = (0, $9a58eff145ca0c29$export$2e2bcd8739ae039).call(config, config.transformResponse, reason.response);
                reason.response.headers = (0, $d6a2466502569559$export$2e2bcd8739ae039).from(reason.response.headers);
            }
        }
        return Promise.reject(reason);
    });
}




const $63af1c0961de8bfb$export$a4ad2735b021c132 = "1.8.4";



'use strict';
const $e487665792690f53$var$validators = {};
// eslint-disable-next-line func-names
[
    'object',
    'boolean',
    'number',
    'function',
    'string',
    'symbol'
].forEach((type, i)=>{
    $e487665792690f53$var$validators[type] = function validator(thing) {
        return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
    };
});
const $e487665792690f53$var$deprecatedWarnings = {};
/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */ $e487665792690f53$var$validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
        return '[Axios v' + (0, $63af1c0961de8bfb$export$a4ad2735b021c132) + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
    }
    // eslint-disable-next-line func-names
    return (value, opt, opts)=>{
        if (validator === false) throw new (0, $cbaf397e9563bd8e$export$2e2bcd8739ae039)(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')), (0, $cbaf397e9563bd8e$export$2e2bcd8739ae039).ERR_DEPRECATED);
        if (version && !$e487665792690f53$var$deprecatedWarnings[opt]) {
            $e487665792690f53$var$deprecatedWarnings[opt] = true;
            // eslint-disable-next-line no-console
            console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
        }
        return validator ? validator(value, opt, opts) : true;
    };
};
$e487665792690f53$var$validators.spelling = function spelling(correctSpelling) {
    return (value, opt)=>{
        // eslint-disable-next-line no-console
        console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
        return true;
    };
};
/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */ function $e487665792690f53$var$assertOptions(options, schema, allowUnknown) {
    if (typeof options !== 'object') throw new (0, $cbaf397e9563bd8e$export$2e2bcd8739ae039)('options must be an object', (0, $cbaf397e9563bd8e$export$2e2bcd8739ae039).ERR_BAD_OPTION_VALUE);
    const keys = Object.keys(options);
    let i = keys.length;
    while(i-- > 0){
        const opt = keys[i];
        const validator = schema[opt];
        if (validator) {
            const value = options[opt];
            const result = value === undefined || validator(value, opt, options);
            if (result !== true) throw new (0, $cbaf397e9563bd8e$export$2e2bcd8739ae039)('option ' + opt + ' must be ' + result, (0, $cbaf397e9563bd8e$export$2e2bcd8739ae039).ERR_BAD_OPTION_VALUE);
            continue;
        }
        if (allowUnknown !== true) throw new (0, $cbaf397e9563bd8e$export$2e2bcd8739ae039)('Unknown option ' + opt, (0, $cbaf397e9563bd8e$export$2e2bcd8739ae039).ERR_BAD_OPTION);
    }
}
var $e487665792690f53$export$2e2bcd8739ae039 = {
    assertOptions: $e487665792690f53$var$assertOptions,
    validators: $e487665792690f53$var$validators
};



'use strict';
const $1eaa576326a81b66$var$validators = (0, $e487665792690f53$export$2e2bcd8739ae039).validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */ class $1eaa576326a81b66$var$Axios {
    constructor(instanceConfig){
        this.defaults = instanceConfig;
        this.interceptors = {
            request: new (0, $437d2da92ff8f755$export$2e2bcd8739ae039)(),
            response: new (0, $437d2da92ff8f755$export$2e2bcd8739ae039)()
        };
    }
    /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */ async request(configOrUrl, config) {
        try {
            return await this._request(configOrUrl, config);
        } catch (err) {
            if (err instanceof Error) {
                let dummy = {};
                Error.captureStackTrace ? Error.captureStackTrace(dummy) : dummy = new Error();
                // slice off the Error: ... line
                const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, '') : '';
                try {
                    if (!err.stack) err.stack = stack;
                    else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ''))) err.stack += '\n' + stack;
                } catch (e) {
                // ignore the case where "stack" is an un-writable property
                }
            }
            throw err;
        }
    }
    _request(configOrUrl, config) {
        /*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
        if (typeof configOrUrl === 'string') {
            config = config || {};
            config.url = configOrUrl;
        } else config = configOrUrl || {};
        config = (0, $f545ece393ad4452$export$2e2bcd8739ae039)(this.defaults, config);
        const { transitional: transitional, paramsSerializer: paramsSerializer, headers: headers } = config;
        if (transitional !== undefined) (0, $e487665792690f53$export$2e2bcd8739ae039).assertOptions(transitional, {
            silentJSONParsing: $1eaa576326a81b66$var$validators.transitional($1eaa576326a81b66$var$validators.boolean),
            forcedJSONParsing: $1eaa576326a81b66$var$validators.transitional($1eaa576326a81b66$var$validators.boolean),
            clarifyTimeoutError: $1eaa576326a81b66$var$validators.transitional($1eaa576326a81b66$var$validators.boolean)
        }, false);
        if (paramsSerializer != null) {
            if ((0, $389ced5518462582$export$2e2bcd8739ae039).isFunction(paramsSerializer)) config.paramsSerializer = {
                serialize: paramsSerializer
            };
            else (0, $e487665792690f53$export$2e2bcd8739ae039).assertOptions(paramsSerializer, {
                encode: $1eaa576326a81b66$var$validators.function,
                serialize: $1eaa576326a81b66$var$validators.function
            }, true);
        }
        // Set config.allowAbsoluteUrls
        if (config.allowAbsoluteUrls !== undefined) ;
        else if (this.defaults.allowAbsoluteUrls !== undefined) config.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
        else config.allowAbsoluteUrls = true;
        (0, $e487665792690f53$export$2e2bcd8739ae039).assertOptions(config, {
            baseUrl: $1eaa576326a81b66$var$validators.spelling('baseURL'),
            withXsrfToken: $1eaa576326a81b66$var$validators.spelling('withXSRFToken')
        }, true);
        // Set config.method
        config.method = (config.method || this.defaults.method || 'get').toLowerCase();
        // Flatten headers
        let contextHeaders = headers && (0, $389ced5518462582$export$2e2bcd8739ae039).merge(headers.common, headers[config.method]);
        headers && (0, $389ced5518462582$export$2e2bcd8739ae039).forEach([
            'delete',
            'get',
            'head',
            'post',
            'put',
            'patch',
            'common'
        ], (method)=>{
            delete headers[method];
        });
        config.headers = (0, $d6a2466502569559$export$2e2bcd8739ae039).concat(contextHeaders, headers);
        // filter out skipped interceptors
        const requestInterceptorChain = [];
        let synchronousRequestInterceptors = true;
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
            if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) return;
            synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
            requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
        });
        const responseInterceptorChain = [];
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
            responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
        });
        let promise;
        let i = 0;
        let len;
        if (!synchronousRequestInterceptors) {
            const chain = [
                (0, $5357c4b1bebd14ca$export$2e2bcd8739ae039).bind(this),
                undefined
            ];
            chain.unshift.apply(chain, requestInterceptorChain);
            chain.push.apply(chain, responseInterceptorChain);
            len = chain.length;
            promise = Promise.resolve(config);
            while(i < len)promise = promise.then(chain[i++], chain[i++]);
            return promise;
        }
        len = requestInterceptorChain.length;
        let newConfig = config;
        i = 0;
        while(i < len){
            const onFulfilled = requestInterceptorChain[i++];
            const onRejected = requestInterceptorChain[i++];
            try {
                newConfig = onFulfilled(newConfig);
            } catch (error) {
                onRejected.call(this, error);
                break;
            }
        }
        try {
            promise = (0, $5357c4b1bebd14ca$export$2e2bcd8739ae039).call(this, newConfig);
        } catch (error) {
            return Promise.reject(error);
        }
        i = 0;
        len = responseInterceptorChain.length;
        while(i < len)promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
        return promise;
    }
    getUri(config) {
        config = (0, $f545ece393ad4452$export$2e2bcd8739ae039)(this.defaults, config);
        const fullPath = (0, $de4a0373d5e80065$export$2e2bcd8739ae039)(config.baseURL, config.url, config.allowAbsoluteUrls);
        return (0, $dfa6cb56d604df07$export$2e2bcd8739ae039)(fullPath, config.params, config.paramsSerializer);
    }
}
// Provide aliases for supported request methods
(0, $389ced5518462582$export$2e2bcd8739ae039).forEach([
    'delete',
    'get',
    'head',
    'options'
], function forEachMethodNoData(method) {
    /*eslint func-names:0*/ $1eaa576326a81b66$var$Axios.prototype[method] = function(url, config) {
        return this.request((0, $f545ece393ad4452$export$2e2bcd8739ae039)(config || {}, {
            method: method,
            url: url,
            data: (config || {}).data
        }));
    };
});
(0, $389ced5518462582$export$2e2bcd8739ae039).forEach([
    'post',
    'put',
    'patch'
], function forEachMethodWithData(method) {
    /*eslint func-names:0*/ function generateHTTPMethod(isForm) {
        return function httpMethod(url, data, config) {
            return this.request((0, $f545ece393ad4452$export$2e2bcd8739ae039)(config || {}, {
                method: method,
                headers: isForm ? {
                    'Content-Type': 'multipart/form-data'
                } : {},
                url: url,
                data: data
            }));
        };
    }
    $1eaa576326a81b66$var$Axios.prototype[method] = generateHTTPMethod();
    $1eaa576326a81b66$var$Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});
var $1eaa576326a81b66$export$2e2bcd8739ae039 = $1eaa576326a81b66$var$Axios;







'use strict';
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */ class $fedcf95114720b90$var$CancelToken {
    constructor(executor){
        if (typeof executor !== 'function') throw new TypeError('executor must be a function.');
        let resolvePromise;
        this.promise = new Promise(function promiseExecutor(resolve) {
            resolvePromise = resolve;
        });
        const token = this;
        // eslint-disable-next-line func-names
        this.promise.then((cancel)=>{
            if (!token._listeners) return;
            let i = token._listeners.length;
            while(i-- > 0)token._listeners[i](cancel);
            token._listeners = null;
        });
        // eslint-disable-next-line func-names
        this.promise.then = (onfulfilled)=>{
            let _resolve;
            // eslint-disable-next-line func-names
            const promise = new Promise((resolve)=>{
                token.subscribe(resolve);
                _resolve = resolve;
            }).then(onfulfilled);
            promise.cancel = function reject() {
                token.unsubscribe(_resolve);
            };
            return promise;
        };
        executor(function cancel(message, config, request) {
            if (token.reason) // Cancellation has already been requested
            return;
            token.reason = new (0, $958fb1d64bfa0a65$export$2e2bcd8739ae039)(message, config, request);
            resolvePromise(token.reason);
        });
    }
    /**
   * Throws a `CanceledError` if cancellation has been requested.
   */ throwIfRequested() {
        if (this.reason) throw this.reason;
    }
    /**
   * Subscribe to the cancel signal
   */ subscribe(listener) {
        if (this.reason) {
            listener(this.reason);
            return;
        }
        if (this._listeners) this._listeners.push(listener);
        else this._listeners = [
            listener
        ];
    }
    /**
   * Unsubscribe from the cancel signal
   */ unsubscribe(listener) {
        if (!this._listeners) return;
        const index = this._listeners.indexOf(listener);
        if (index !== -1) this._listeners.splice(index, 1);
    }
    toAbortSignal() {
        const controller = new AbortController();
        const abort = (err)=>{
            controller.abort(err);
        };
        this.subscribe(abort);
        controller.signal.unsubscribe = ()=>this.unsubscribe(abort);
        return controller.signal;
    }
    /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */ static source() {
        let cancel;
        const token = new $fedcf95114720b90$var$CancelToken(function executor(c) {
            cancel = c;
        });
        return {
            token: token,
            cancel: cancel
        };
    }
}
var $fedcf95114720b90$export$2e2bcd8739ae039 = $fedcf95114720b90$var$CancelToken;






'use strict';
function $5dfa6e2cb361348e$export$2e2bcd8739ae039(callback) {
    return function wrap(arr) {
        return callback.apply(null, arr);
    };
}



'use strict';
function $89a4e75fd05244cf$export$2e2bcd8739ae039(payload) {
    return (0, $389ced5518462582$export$2e2bcd8739ae039).isObject(payload) && payload.isAxiosError === true;
}




const $e46003c0f80e0afd$var$HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries($e46003c0f80e0afd$var$HttpStatusCode).forEach(([key, value])=>{
    $e46003c0f80e0afd$var$HttpStatusCode[value] = key;
});
var $e46003c0f80e0afd$export$2e2bcd8739ae039 = $e46003c0f80e0afd$var$HttpStatusCode;


'use strict';
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */ function $0ca3db0dd477a5f6$var$createInstance(defaultConfig) {
    const context = new (0, $1eaa576326a81b66$export$2e2bcd8739ae039)(defaultConfig);
    const instance = (0, $ef01d542854d5895$export$2e2bcd8739ae039)((0, $1eaa576326a81b66$export$2e2bcd8739ae039).prototype.request, context);
    // Copy axios.prototype to instance
    (0, $389ced5518462582$export$2e2bcd8739ae039).extend(instance, (0, $1eaa576326a81b66$export$2e2bcd8739ae039).prototype, context, {
        allOwnKeys: true
    });
    // Copy context to instance
    (0, $389ced5518462582$export$2e2bcd8739ae039).extend(instance, context, null, {
        allOwnKeys: true
    });
    // Factory for creating new instances
    instance.create = function create(instanceConfig) {
        return $0ca3db0dd477a5f6$var$createInstance((0, $f545ece393ad4452$export$2e2bcd8739ae039)(defaultConfig, instanceConfig));
    };
    return instance;
}
// Create the default instance to be exported
const $0ca3db0dd477a5f6$var$axios = $0ca3db0dd477a5f6$var$createInstance((0, $791f6327ca1e363f$export$2e2bcd8739ae039));
// Expose Axios class to allow class inheritance
$0ca3db0dd477a5f6$var$axios.Axios = (0, $1eaa576326a81b66$export$2e2bcd8739ae039);
// Expose Cancel & CancelToken
$0ca3db0dd477a5f6$var$axios.CanceledError = (0, $958fb1d64bfa0a65$export$2e2bcd8739ae039);
$0ca3db0dd477a5f6$var$axios.CancelToken = (0, $fedcf95114720b90$export$2e2bcd8739ae039);
$0ca3db0dd477a5f6$var$axios.isCancel = (0, $dbc8449a3ffe1cb5$export$2e2bcd8739ae039);
$0ca3db0dd477a5f6$var$axios.VERSION = (0, $63af1c0961de8bfb$export$a4ad2735b021c132);
$0ca3db0dd477a5f6$var$axios.toFormData = (0, $bdfaca7eaa78d30d$export$2e2bcd8739ae039);
// Expose AxiosError class
$0ca3db0dd477a5f6$var$axios.AxiosError = (0, $cbaf397e9563bd8e$export$2e2bcd8739ae039);
// alias for CanceledError for backward compatibility
$0ca3db0dd477a5f6$var$axios.Cancel = $0ca3db0dd477a5f6$var$axios.CanceledError;
// Expose all/spread
$0ca3db0dd477a5f6$var$axios.all = function all(promises) {
    return Promise.all(promises);
};
$0ca3db0dd477a5f6$var$axios.spread = (0, $5dfa6e2cb361348e$export$2e2bcd8739ae039);
// Expose isAxiosError
$0ca3db0dd477a5f6$var$axios.isAxiosError = (0, $89a4e75fd05244cf$export$2e2bcd8739ae039);
// Expose mergeConfig
$0ca3db0dd477a5f6$var$axios.mergeConfig = (0, $f545ece393ad4452$export$2e2bcd8739ae039);
$0ca3db0dd477a5f6$var$axios.AxiosHeaders = (0, $d6a2466502569559$export$2e2bcd8739ae039);
$0ca3db0dd477a5f6$var$axios.formToJSON = (thing)=>(0, $9e09895677c225d8$export$2e2bcd8739ae039)((0, $389ced5518462582$export$2e2bcd8739ae039).isHTMLForm(thing) ? new FormData(thing) : thing);
$0ca3db0dd477a5f6$var$axios.getAdapter = (0, $1efc49830494d148$export$2e2bcd8739ae039).getAdapter;
$0ca3db0dd477a5f6$var$axios.HttpStatusCode = (0, $e46003c0f80e0afd$export$2e2bcd8739ae039);
$0ca3db0dd477a5f6$var$axios.default = $0ca3db0dd477a5f6$var$axios;
var // this module should only have a default export
$0ca3db0dd477a5f6$export$2e2bcd8739ae039 = $0ca3db0dd477a5f6$var$axios;


// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const { Axios: $5b1e7ddf532f6b9c$export$1c00760e9e5a4e95, AxiosError: $5b1e7ddf532f6b9c$export$c1fbed17c2f6a328, CanceledError: $5b1e7ddf532f6b9c$export$1ab0c6b20d94fa14, isCancel: $5b1e7ddf532f6b9c$export$3b22524397b493c6, CancelToken: $5b1e7ddf532f6b9c$export$fd08e3cb425f0d61, VERSION: $5b1e7ddf532f6b9c$export$a4ad2735b021c132, all: $5b1e7ddf532f6b9c$export$84bf76cd7afc7469, Cancel: $5b1e7ddf532f6b9c$export$848c9b7ead0df967, isAxiosError: $5b1e7ddf532f6b9c$export$fbafdbe06a5b5a9a, spread: $5b1e7ddf532f6b9c$export$3ae0fd4797ed47c8, toFormData: $5b1e7ddf532f6b9c$export$10ae0d317ea97f8b, AxiosHeaders: $5b1e7ddf532f6b9c$export$4e7d6ff0f3e6520, HttpStatusCode: $5b1e7ddf532f6b9c$export$a972f69c851492b3, formToJSON: $5b1e7ddf532f6b9c$export$86d7c59254d6a2c9, getAdapter: $5b1e7ddf532f6b9c$export$17ddc20a97d669e2, mergeConfig: $5b1e7ddf532f6b9c$export$7ec1ebcfa9d8bd6a } = (0, $0ca3db0dd477a5f6$export$2e2bcd8739ae039);


/* eslint-disable */ const $8041b789449142c7$export$516836c6a9dfc573 = ()=>{
    const el = document.querySelector('.alert');
    if (el) el.parentElement.removeChild(el);
};
const $8041b789449142c7$export$de026b00723010c1 = (type, msg)=>{
    $8041b789449142c7$export$516836c6a9dfc573();
    const markup = `<div class="alert alert--${type}">${msg}</div>`;
    document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
    window.setTimeout($8041b789449142c7$export$516836c6a9dfc573, 5000);
};


const $1eb2f20fd1741841$export$596d806903d1f59e = async (email, password)=>{
    try {
        const res = await (0, $0ca3db0dd477a5f6$export$2e2bcd8739ae039)({
            method: 'POST',
            url: 'http://127.0.0.1:3000/api/v1/users/login',
            data: {
                email: email,
                password: password
            }
        });
        if (res.data.status === 'success') {
            (0, $8041b789449142c7$export$de026b00723010c1)('success', 'Logged in successfully!');
            window.setTimeout(()=>{
                location.assign('/');
            }, 1500);
        }
    } catch (err) {
        (0, $8041b789449142c7$export$de026b00723010c1)('error', err.response.data.message);
    }
};
const $1eb2f20fd1741841$export$a0973bcfe11b05c9 = async ()=>{
    try {
        const res = await (0, $0ca3db0dd477a5f6$export$2e2bcd8739ae039)({
            method: 'GET',
            url: 'http://127.0.0.1:3000/api/v1/users/logout'
        });
        if (res.data.status === 'success') {
            if (location.pathname === '/me') return location.assign('/');
            location.reload(true);
        }
    } catch (err) {
        (0, $8041b789449142c7$export$de026b00723010c1)('error', 'Error logging out! Try again!');
    }
};


//updateData


const $eb7f13463bc34e60$export$3bf0495508a61ee = async (data, type)=>{
    try {
        const url = type === 'password' ? 'http://127.0.0.1:3000/api/v1/users/updateMyPassword' : 'http://127.0.0.1:3000/api/v1/users/updateMe';
        const res = await (0, $0ca3db0dd477a5f6$export$2e2bcd8739ae039)({
            method: 'PATCH',
            url: url,
            data: data
        });
        if (res.data.status === 'success') (0, $8041b789449142c7$export$de026b00723010c1)('success', `${type.charAt(0).toUpperCase() + type.slice(1)} successfully updated!`);
    } catch (err) {
        (0, $8041b789449142c7$export$de026b00723010c1)('error', err.response.data.message);
    }
};


// DOM ELEMENTS
const $cd847052aee7f446$var$mapBox = document.getElementById('map');
const $cd847052aee7f446$var$loginForm = document.querySelector('.form--login');
const $cd847052aee7f446$var$logoutBtn = document.querySelector('.nav__el--logout');
const $cd847052aee7f446$var$userDataForm = document.querySelector('.form-user-data');
const $cd847052aee7f446$var$userPasswordForm = document.querySelector('.form-user-password');
//DELEGATION
if ($cd847052aee7f446$var$mapBox) {
    const locations = JSON.parse(document.getElementById('map').dataset.locations);
    (0, $6b28cffc2b36340e$export$4c5dd147b21b9176)(locations);
}
if ($cd847052aee7f446$var$loginForm) $cd847052aee7f446$var$loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    (0, $1eb2f20fd1741841$export$596d806903d1f59e)(email, password);
});
if ($cd847052aee7f446$var$userDataForm) $cd847052aee7f446$var$userDataForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    (0, $eb7f13463bc34e60$export$3bf0495508a61ee)({
        name: name,
        email: email
    }, 'user data');
});
if ($cd847052aee7f446$var$userPasswordForm) $cd847052aee7f446$var$userPasswordForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    document.querySelector('.btn--save-password').textContent = 'Updating...';
    const passwordCurrent = document.getElementById('password-current').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    await (0, $eb7f13463bc34e60$export$3bf0495508a61ee)({
        passwordConfirm: passwordConfirm,
        password: password,
        passwordCurrent: passwordCurrent
    }, 'password');
    document.querySelector('.btn--save-password').textContent = 'Save password';
    document.getElementById('password').value = '';
    document.getElementById('password-current').value = '';
    document.getElementById('password-confirm').value = '';
});
if ($cd847052aee7f446$var$logoutBtn) $cd847052aee7f446$var$logoutBtn.addEventListener('click', (0, $1eb2f20fd1741841$export$a0973bcfe11b05c9));


//# sourceMappingURL=bundle.js.map
