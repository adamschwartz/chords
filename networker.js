!function() {
    "use strict";
    var he, e = (he = "undefined" != typeof document && document.currentScript ? document.currentScript.src : undefined,
    function(e) {
        var n, p = void 0 !== (e = e || {}) ? e : {}, r = {};
        for (n in p)
            p.hasOwnProperty(n) && (r[n] = p[n]);
        p.arguments = [],
        p.thisProgram = "./this.program",
        p.quit = function(e, n) {
            throw n
        }
        ,
        p.preRun = [];
        var m, t, a, d = p.postRun = [];
        d = "object" == typeof window,
        m = "function" == typeof importScripts,
        t = "object" == typeof process && "function" == typeof require && !d && !m,
        a = !d && !t && !m;
        var u, o, i = "";
        function y(e) {
            return p.locateFile ? p.locateFile(e, i) : i + e
        }
        t ? (i = __dirname + "/",
        p.read = function(e, n) {
            var r;
            return u || (u = require("fs")),
            o || (o = require("path")),
            e = o.normalize(e),
            r = u.readFileSync(e),
            n ? r : r.toString()
        }
        ,
        p.readBinary = function(e) {
            var n = p.read(e, !0);
            return n.buffer || (n = new Uint8Array(n)),
            F(n.buffer),
            n
        }
        ,
        1 < process.argv.length && (p.thisProgram = process.argv[1].replace(/\\/g, "/")),
        p.arguments = process.argv.slice(2),
        process.on("uncaughtException", function(e) {
            if (!(e instanceof re))
                throw e
        }),
        process.on("unhandledRejection", function(e, n) {
            process.exit(1)
        }),
        p.quit = function(e) {
            process.exit(e)
        }
        ,
        p.inspect = function() {
            return "[Emscripten Module object]"
        }
        ) : a ? ("undefined" != typeof read && (p.read = function(e) {
            return read(e)
        }
        ),
        p.readBinary = function(e) {
            var n;
            return "function" == typeof readbuffer ? new Uint8Array(readbuffer(e)) : (F("object" == typeof (n = read(e, "binary"))),
            n)
        }
        ,
        "undefined" != typeof scriptArgs ? p.arguments = scriptArgs : void 0 !== arguments && (p.arguments = arguments),
        "function" == typeof quit && (p.quit = function(e) {
            quit(e)
        }
        )) : (d || m) && (d ? document.currentScript && (i = document.currentScript.src) : i = self.location.href,
        he && (i = he),
        i = 0 !== i.indexOf("blob:") ? i.split("/").slice(0, -1).join("/") + "/" : "",
        p.read = function(e) {
            var n = new XMLHttpRequest;
            return n.open("GET", e, !1),
            n.send(null),
            n.responseText
        }
        ,
        m && (p.readBinary = function(e) {
            var n = new XMLHttpRequest;
            return n.open("GET", e, !1),
            n.responseType = "arraybuffer",
            n.send(null),
            new Uint8Array(n.response)
        }
        ),
        p.readAsync = function(e, n, r) {
            var t = new XMLHttpRequest;
            t.open("GET", e, !0),
            t.responseType = "arraybuffer",
            t.onload = function() {
                200 == t.status || 0 == t.status && t.response ? n(t.response) : r()
            }
            ,
            t.onerror = r,
            t.send(null)
        }
        ,
        p.setWindowTitle = function(e) {
            document.title = e
        }
        );
        var s = p.print || ("undefined" != typeof console ? console.log.bind(console) : "undefined" != typeof print ? print : null)
          , T = p.printErr || ("undefined" != typeof printErr ? printErr : "undefined" != typeof console && console.warn.bind(console) || s);
        for (n in r)
            r.hasOwnProperty(n) && (p[n] = r[n]);
        function l(e, n) {
            return n || (n = 16),
            e = Math.ceil(e / n) * n
        }
        r = undefined;
        var b = {
            "f64-rem": function(e, n) {
                return e % n
            },
            "debugger": function() {}
        }
          , f = 0;
        function F(e, n) {
            e || ae("Assertion failed: " + n)
        }
        function h(e) {
            var n = p["_" + e];
            return F(n, "Cannot call unknown function " + e + ", make sure it is exported"),
            n
        }
        var c = {
            stackSave: function() {
                ne()
            },
            stackRestore: function() {
                ee()
            },
            arrayToC: function(e) {
                var n = $(e.length);
                return function r(e, n) {
                    R.set(e, n)
                }(e, n),
                n
            },
            stringToC: function(e) {
                var n = 0;
                if (null !== e && e !== undefined && 0 !== e) {
                    var r = 1 + (e.length << 2);
                    !function t(e, n, r) {
                        return function l(e, n, r, t) {
                            if (!(0 < t))
                                return 0;
                            for (var a = r, u = r + t - 1, o = 0; o < e.length; ++o) {
                                var i = e.charCodeAt(o);
                                if (55296 <= i && i <= 57343) {
                                    var s = e.charCodeAt(++o);
                                    i = 65536 + ((1023 & i) << 10) | 1023 & s
                                }
                                if (i <= 127) {
                                    if (u <= r)
                                        break;
                                    n[r++] = i
                                } else if (i <= 2047) {
                                    if (u <= r + 1)
                                        break;
                                    n[r++] = 192 | i >> 6,
                                    n[r++] = 128 | 63 & i
                                } else if (i <= 65535) {
                                    if (u <= r + 2)
                                        break;
                                    n[r++] = 224 | i >> 12,
                                    n[r++] = 128 | i >> 6 & 63,
                                    n[r++] = 128 | 63 & i
                                } else if (i <= 2097151) {
                                    if (u <= r + 3)
                                        break;
                                    n[r++] = 240 | i >> 18,
                                    n[r++] = 128 | i >> 12 & 63,
                                    n[r++] = 128 | i >> 6 & 63,
                                    n[r++] = 128 | 63 & i
                                } else if (i <= 67108863) {
                                    if (u <= r + 4)
                                        break;
                                    n[r++] = 248 | i >> 24,
                                    n[r++] = 128 | i >> 18 & 63,
                                    n[r++] = 128 | i >> 12 & 63,
                                    n[r++] = 128 | i >> 6 & 63,
                                    n[r++] = 128 | 63 & i
                                } else {
                                    if (u <= r + 5)
                                        break;
                                    n[r++] = 252 | i >> 30,
                                    n[r++] = 128 | i >> 24 & 63,
                                    n[r++] = 128 | i >> 18 & 63,
                                    n[r++] = 128 | i >> 12 & 63,
                                    n[r++] = 128 | i >> 6 & 63,
                                    n[r++] = 128 | 63 & i
                                }
                            }
                            return n[r] = 0,
                            r - a
                        }(e, S, n, r)
                    }(e, n = $(r), r)
                }
                return n
            }
        }
          , g = {
            string: c.stringToC,
            array: c.arrayToC
        };
        function w(e, n, r, t, a) {
            var u = h(e)
              , o = []
              , i = 0;
            if (t)
                for (var s = 0; s < t.length; s++) {
                    var l = g[r[s]];
                    o[s] = l ? (0 === i && (i = ne()),
                    l(t[s])) : t[s]
                }
            var f = u.apply(null, o);
            return f = function c(e) {
                return "string" === n ? v(e) : "boolean" === n ? Boolean(e) : e
            }(f),
            0 !== i && ee(i),
            f
        }
        function v(e, n) {
            if (0 === n || !e)
                return "";
            for (var r, t = 0, a = 0; t |= r = S[e + a >> 0],
            (0 != r || n) && (a++,
            !n || a != n); )
                ;
            n || (n = a);
            var u = "";
            if (t < 128) {
                for (var o; 0 < n; )
                    o = String.fromCharCode.apply(String, S.subarray(e, e + Math.min(n, 1024))),
                    u = u ? u + o : o,
                    e += 1024,
                    n -= 1024;
                return u
            }
            return function i(e) {
                return function c(e, n) {
                    for (var r = n; e[r]; )
                        ++r;
                    if (16 < r - n && e.subarray && A)
                        return A.decode(e.subarray(n, r));
                    for (var t, a, u, o, i, s, l = ""; ; ) {
                        if (!(t = e[n++]))
                            return l;
                        if (128 & t)
                            if (a = 63 & e[n++],
                            192 != (224 & t))
                                if (u = 63 & e[n++],
                                (t = 224 == (240 & t) ? (15 & t) << 12 | a << 6 | u : (o = 63 & e[n++],
                                240 == (248 & t) ? (7 & t) << 18 | a << 12 | u << 6 | o : (i = 63 & e[n++],
                                248 == (252 & t) ? (3 & t) << 24 | a << 18 | u << 12 | o << 6 | i : (s = 63 & e[n++],
                                (1 & t) << 30 | a << 24 | u << 18 | o << 12 | i << 6 | s)))) < 65536)
                                    l += String.fromCharCode(t);
                                else {
                                    var f = t - 65536;
                                    l += String.fromCharCode(55296 | f >> 10, 56320 | 1023 & f)
                                }
                            else
                                l += String.fromCharCode((31 & t) << 6 | a);
                        else
                            l += String.fromCharCode(t)
                    }
                }(S, e)
            }(e)
        }
        var A = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : undefined;
        "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : undefined;
        var _, R, S, M, C, E, B, I, P = 65536, O = 16777216;
        function x(e, n) {
            return 0 < e % n && (e += n - e % n),
            e
        }
        function U(e) {
            p.buffer = _ = e
        }
        function L() {
            p.HEAP8 = R = new Int8Array(_),
            p.HEAP16 = new Int16Array(_),
            p.HEAP32 = M = new Int32Array(_),
            p.HEAPU8 = S = new Uint8Array(_),
            p.HEAPU16 = new Uint16Array(_),
            p.HEAPU32 = new Uint32Array(_),
            p.HEAPF32 = new Float32Array(_),
            p.HEAPF64 = new Float64Array(_)
        }
        C = 0,
        p.reallocBuffer || (p.reallocBuffer = function(e) {
            var n;
            try {
                if (ArrayBuffer.transfer)
                    n = ArrayBuffer.transfer(_, e);
                else {
                    var r = R;
                    n = new ArrayBuffer(e),
                    new Int8Array(n).set(r)
                }
            } catch (t) {
                return !1
            }
            return !!V(n) && n
        }
        );
        try {
            Function.prototype.call.bind(Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength").get)(new ArrayBuffer(4))
        } catch (ue) {}
        var W = p.TOTAL_STACK || 5242880
          , k = p.TOTAL_MEMORY || 16777216;
        function D(e) {
            for (; 0 < e.length; ) {
                var n = e.shift();
                if ("function" != typeof n) {
                    var r = n.func;
                    "number" == typeof r ? n.arg === undefined ? p.dynCall_v(r) : p.dynCall_vi(r, n.arg) : r(n.arg === undefined ? null : n.arg)
                } else
                    n()
            }
        }
        k < W && T("TOTAL_MEMORY should be larger than TOTAL_STACK, was " + k + "! (TOTAL_STACK=" + W + ")"),
        p.buffer ? _ = p.buffer : (_ = "object" == typeof WebAssembly && "function" == typeof WebAssembly.Memory ? (p.wasmMemory = new WebAssembly.Memory({
            initial: k / P
        }),
        p.wasmMemory.buffer) : new ArrayBuffer(k),
        p.buffer = _),
        L();
        var z = []
          , N = []
          , H = []
          , j = []
          , q = !1
          , G = 0
          , X = null
          , Q = null;
        p.preloadedImages = {},
        p.preloadedAudios = {};
        var Y = "data:application/octet-stream;base64,";
        function K(e) {
            return String.prototype.startsWith ? e.startsWith(Y) : 0 === e.indexOf(Y)
        }
        !function oe() {
            var e = "netmodule.wast"
              , i = "netmodule.wasm"
              , n = "netmodule.temp.asm.js";
            K(e) || (e = y(e)),
            K(i) || (i = y(i)),
            K(n) || (n = y(n));
            var s = {
                global: null,
                env: null,
                asm2wasm: b,
                parent: p
            }
              , l = null;
            function f() {
                try {
                    if (p.wasmBinary)
                        return new Uint8Array(p.wasmBinary);
                    if (p.readBinary)
                        return p.readBinary(i);
                    throw "both async and sync fetching of the wasm failed"
                } catch (T) {
                    ae(T)
                }
            }
            function c(e, n, r) {
                if ("object" != typeof WebAssembly)
                    return T("no native wasm support detected"),
                    !1;
                if (!(p.wasmMemory instanceof WebAssembly.Memory))
                    return T("no native wasm Memory in use"),
                    !1;
                function t(e, n) {
                    (l = e.exports).memory && function t(e) {
                        var n = p.buffer;
                        e.byteLength < n.byteLength && T("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");
                        var r = new Int8Array(n);
                        new Int8Array(e).set(r),
                        U(e),
                        L()
                    }(l.memory),
                    p.asm = l,
                    p.usingWasm = !0,
                    function r(e) {
                        if (G--,
                        p.monitorRunDependencies && p.monitorRunDependencies(G),
                        0 == G && (null !== X && (clearInterval(X),
                        X = null),
                        Q)) {
                            var n = Q;
                            Q = null,
                            n()
                        }
                    }()
                }
                if (n.memory = p.wasmMemory,
                s.global = {
                    NaN: NaN,
                    Infinity: Infinity
                },
                s["global.Math"] = Math,
                s.env = n,
                function o(e) {
                    G++,
                    p.monitorRunDependencies && p.monitorRunDependencies(G)
                }(),
                p.instantiateWasm)
                    try {
                        return p.instantiateWasm(s, t)
                    } catch (ue) {
                        return T("Module.instantiateWasm callback failed with error: " + ue),
                        !1
                    }
                function a(e) {
                    t(e.instance, e.module)
                }
                function u(e) {
                    (function n() {
                        return p.wasmBinary || !d && !m || "function" != typeof fetch ? new Promise(function(e, n) {
                            e(f())
                        }
                        ) : fetch(i, {
                            credentials: "same-origin"
                        }).then(function(e) {
                            if (!e.ok)
                                throw "failed to load wasm binary file at '" + i + "'";
                            return e.arrayBuffer()
                        })["catch"](function() {
                            return f()
                        })
                    }
                    )().then(function(e) {
                        return WebAssembly.instantiate(e, s)
                    }).then(e)["catch"](function(e) {
                        T("failed to asynchronously prepare wasm: " + e),
                        ae(e)
                    })
                }
                return p.wasmBinary || "function" != typeof WebAssembly.instantiateStreaming || K(i) || "function" != typeof fetch ? u(a) : WebAssembly.instantiateStreaming(fetch(i, {
                    credentials: "same-origin"
                }), s).then(a)["catch"](function(e) {
                    T("wasm streaming compile failed: " + e),
                    T("falling back to ArrayBuffer instantiation"),
                    u(a)
                }),
                {}
            }
            p.asmPreload = p.asm,
            p.reallocBuffer,
            p.reallocBuffer = function(e) {
                return function(e) {
                    e = x(e, p.usingWasm ? P : O);
                    var n = p.buffer.byteLength;
                    if (p.usingWasm)
                        try {
                            return -1 !== p.wasmMemory.grow((e - n) / 65536) ? p.buffer = p.wasmMemory.buffer : null
                        } catch (ue) {
                            return null
                        }
                }(e)
            }
            ,
            p.asm = function(e, n, r) {
                if (!(n = function o(e) {
                    return e
                }(n)).table) {
                    var t = p.wasmTableSize;
                    t === undefined && (t = 1024);
                    var a = p.wasmMaxTableSize;
                    "object" == typeof WebAssembly && "function" == typeof WebAssembly.Table ? a !== undefined ? n.table = new WebAssembly.Table({
                        initial: t,
                        maximum: a,
                        element: "anyfunc"
                    }) : n.table = new WebAssembly.Table({
                        initial: t,
                        element: "anyfunc"
                    }) : n.table = new Array(t),
                    p.wasmTable = n.table
                }
                var u;
                return n.memoryBase || (n.memoryBase = p.STATIC_BASE),
                n.tableBase || (n.tableBase = 0),
                F(u = c(0, n), "no binaryen method succeeded."),
                u
            }
        }(),
        C = 5248,
        N.push(),
        p.STATIC_BASE = 1024,
        p.STATIC_BUMP = 4224,
        C += 16,
        I = function ie(e) {
            var n = C;
            return C = C + e + 15 & -16,
            n
        }(4),
        B = l((E = l(C)) + W),
        M[I >> 2] = B,
        p.wasmTableSize = 39,
        p.wasmMaxTableSize = 39,
        p.asmGlobalArg = {},
        p.asmLibraryArg = {
            abort: ae,
            enlargeMemory: function se() {
                var e = p.usingWasm ? P : O
                  , n = 2147483648 - e;
                if (M[I >> 2] > n)
                    return !1;
                var r = k;
                for (k = Math.max(k, 16777216); k < M[I >> 2]; )
                    k = k <= 536870912 ? x(2 * k, e) : Math.min(x((3 * k + 2147483648) / 4, e), n);
                var t = p.reallocBuffer(k);
                return t && t.byteLength == k ? (U(t),
                L(),
                !0) : (k = r,
                !1)
            },
            getTotalMemory: function le() {
                return k
            },
            abortOnCannotGrowMemory: function fe() {
                ae("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value " + k + ", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")
            },
            ___assert_fail: function ce(e, n, r, t) {
                ae("Assertion failed: " + v(e) + ", at: " + [n ? v(n) : "unknown filename", r, t ? v(t) : "unknown function"])
            },
            ___cxa_allocate_exception: function pe(e) {
                return Z(e)
            },
            ___cxa_throw: function me(e, n, r) {
                throw e + " - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch."
            },
            ___setErrNo: function de(e) {
                return p.___errno_location && (M[p.___errno_location() >> 2] = e),
                e
            },
            _abort: function ye() {
                p.abort()
            },
            _emscripten_memcpy_big: function Te(e, n, r) {
                return S.set(S.subarray(n, n + r), e),
                e
            },
            DYNAMICTOP_PTR: I,
            STACKTOP: E
        };
        var J = p.asm(p.asmGlobalArg, p.asmLibraryArg, _);
        p.asm = J,
        p.___errno_location = function() {
            return p.asm.___errno_location.apply(null, arguments)
        }
        ;
        var V = p._emscripten_replace_memory = function() {
            return p.asm._emscripten_replace_memory.apply(null, arguments)
        }
          , Z = (p._getOutputPointer = function() {
            return p.asm._getOutputPointer.apply(null, arguments)
        }
        ,
        p._getQuantizedUploadPointer = function() {
            return p.asm._getQuantizedUploadPointer.apply(null, arguments)
        }
        ,
        p._getUploadPointer = function() {
            return p.asm._getUploadPointer.apply(null, arguments)
        }
        ,
        p._initialize = function() {
            return p.asm._initialize.apply(null, arguments)
        }
        ,
        p._malloc = function() {
            return p.asm._malloc.apply(null, arguments)
        }
        )
          , $ = (p._step = function() {
            return p.asm._step.apply(null, arguments)
        }
        ,
        p._useUploadedData = function() {
            return p.asm._useUploadedData.apply(null, arguments)
        }
        ,
        p._useUploadedQuantizedData = function() {
            return p.asm._useUploadedQuantizedData.apply(null, arguments)
        }
        ,
        p.stackAlloc = function() {
            return p.asm.stackAlloc.apply(null, arguments)
        }
        )
          , ee = p.stackRestore = function() {
            return p.asm.stackRestore.apply(null, arguments)
        }
          , ne = p.stackSave = function() {
            return p.asm.stackSave.apply(null, arguments)
        }
        ;
        function re(e) {
            this.name = "ExitStatus",
            this.message = "Program terminated with exit(" + e + ")",
            this.status = e
        }
        function te(e) {
            function n() {
                p.calledRun || (p.calledRun = !0,
                f || (function e() {
                    q || (q = !0,
                    D(N))
                }(),
                function n() {
                    D(H)
                }(),
                p.onRuntimeInitialized && p.onRuntimeInitialized(),
                function r() {
                    if (p.postRun)
                        for ("function" == typeof p.postRun && (p.postRun = [p.postRun]); p.postRun.length; )
                            e = p.postRun.shift(),
                            j.unshift(e);
                    var e;
                    D(j)
                }()))
            }
            e = e || p.arguments,
            0 < G || (function r() {
                if (p.preRun)
                    for ("function" == typeof p.preRun && (p.preRun = [p.preRun]); p.preRun.length; )
                        e = p.preRun.shift(),
                        z.unshift(e);
                var e;
                D(z)
            }(),
            0 < G || p.calledRun || (p.setStatus ? (p.setStatus("Running..."),
            setTimeout(function() {
                setTimeout(function() {
                    p.setStatus("")
                }, 1),
                n()
            }, 1)) : n()))
        }
        function ae(e) {
            throw p.onAbort && p.onAbort(e),
            e = e !== undefined ? (s(e),
            T(e),
            JSON.stringify(e)) : "",
            f = !0,
            "abort(" + e + "). Build with -s ASSERTIONS=1 for more info."
        }
        if (p.dynCall_v = function() {
            return p.asm.dynCall_v.apply(null, arguments)
        }
        ,
        p.dynCall_vi = function() {
            return p.asm.dynCall_vi.apply(null, arguments)
        }
        ,
        p.asm = J,
        p.ccall = w,
        p.cwrap = function be(e, n, r, t) {
            var a = (r = r || []).every(function(e) {
                return "number" === e
            });
            return "string" !== n && a && !t ? h(e) : function() {
                return w(e, n, r, arguments)
            }
        }
        ,
        p.then = function(e) {
            if (p.calledRun)
                e(p);
            else {
                var n = p.onRuntimeInitialized;
                p.onRuntimeInitialized = function() {
                    n && n(),
                    e(p)
                }
            }
            return p
        }
        ,
        (re.prototype = new Error).constructor = re,
        Q = function Fe() {
            p.calledRun || te(),
            p.calledRun || (Q = Fe)
        }
        ,
        p.run = te,
        p.abort = ae,
        p.preInit)
            for ("function" == typeof p.preInit && (p.preInit = [p.preInit]); 0 < p.preInit.length; )
                p.preInit.pop()();
        return p.noExitRuntime = !0,
        te(),
        e
    }
    );
    "object" == typeof exports && "object" == typeof module ? module.exports = e : "function" == typeof define && define.amd ? define([], function() {
        return e
    }) : "object" == typeof exports && (exports.NetModule = e);
    var o = {
        0: "|",
        1: "(64,True)",
        2: "(67,True)",
        3: "(60,True)",
        4: "(69,True)",
        5: "(72,True)",
        6: "(62,True)",
        7: "(55,True)",
        8: "(57,True)",
        9: "(52,True)",
        10: "(59,True)",
        11: "(71,True)",
        12: "(74,True)",
        13: "(48,True)",
        14: "(76,True)",
        15: "(65,True)",
        16: "(64,False)",
        17: "(60,False)",
        18: "(67,False)",
        19: "(50,True)",
        20: "(53,True)",
        21: "(62,False)",
        22: "(69,False)",
        23: "(45,True)",
        24: "(57,False)",
        25: "(55,False)",
        26: "(72,False)",
        27: "(59,False)",
        28: "(52,False)",
        29: "(71,False)",
        30: "(65,False)",
        31: "(43,True)",
        32: "(68,True)",
        33: "(74,False)",
        34: "(48,False)",
        35: "(50,False)",
        36: "(53,False)",
        37: "(77,True)",
        38: "(76,False)",
        39: "(79,True)",
        40: "(56,True)",
        41: "(47,True)",
        42: "(66,True)",
        43: "(61,True)",
        44: "(45,False)",
        45: "(54,True)",
        46: "(47,False)",
        47: "(40,True)",
        48: "(43,False)",
        49: "(68,False)",
        50: "(66,False)",
        51: "(77,False)",
        52: "(56,False)",
        53: "(41,True)",
        54: "(36,True)",
        55: "(81,True)",
        56: "(54,False)",
        57: "(79,False)",
        58: "(58,True)",
        59: "(49,True)",
        60: "(70,True)",
        61: "(61,False)",
        62: "(40,False)",
        63: "(44,True)",
        64: "(38,True)",
        65: "(51,True)",
        66: "START",
        67: "END",
        68: "(58,False)",
        69: "(41,False)",
        70: "(63,True)",
        71: "(78,True)",
        72: "(73,True)",
        73: "(70,False)",
        74: "(49,False)",
        75: "(81,False)",
        76: "(42,True)",
        77: "(33,True)",
        78: "(38,False)",
        79: "(44,False)",
        80: "(51,False)",
        81: "(63,False)",
        82: "(36,False)",
        83: "(46,True)",
        84: "(83,True)",
        85: "(78,False)",
        86: "(73,False)",
        87: "(75,True)",
        88: "(42,False)",
        89: "(84,True)",
        90: "(46,False)",
        91: "(80,True)",
        92: "(83,False)",
        93: "(35,True)",
        94: "(33,False)",
        95: "(75,False)",
        96: "(39,True)",
        97: "(84,False)",
        98: "(31,True)",
        99: "(35,False)",
        100: "(37,True)",
        101: "(80,False)",
        102: "(39,False)",
        103: "(37,False)",
        104: "(82,True)",
        105: "(31,False)",
        106: "(82,False)"
    }
      , i = {
        "|": 0,
        "(64,True)": 1,
        "(67,True)": 2,
        "(60,True)": 3,
        "(69,True)": 4,
        "(72,True)": 5,
        "(62,True)": 6,
        "(55,True)": 7,
        "(57,True)": 8,
        "(52,True)": 9,
        "(59,True)": 10,
        "(71,True)": 11,
        "(74,True)": 12,
        "(48,True)": 13,
        "(76,True)": 14,
        "(65,True)": 15,
        "(64,False)": 16,
        "(60,False)": 17,
        "(67,False)": 18,
        "(50,True)": 19,
        "(53,True)": 20,
        "(62,False)": 21,
        "(69,False)": 22,
        "(45,True)": 23,
        "(57,False)": 24,
        "(55,False)": 25,
        "(72,False)": 26,
        "(59,False)": 27,
        "(52,False)": 28,
        "(71,False)": 29,
        "(65,False)": 30,
        "(43,True)": 31,
        "(68,True)": 32,
        "(74,False)": 33,
        "(48,False)": 34,
        "(50,False)": 35,
        "(53,False)": 36,
        "(77,True)": 37,
        "(76,False)": 38,
        "(79,True)": 39,
        "(56,True)": 40,
        "(47,True)": 41,
        "(66,True)": 42,
        "(61,True)": 43,
        "(45,False)": 44,
        "(54,True)": 45,
        "(47,False)": 46,
        "(40,True)": 47,
        "(43,False)": 48,
        "(68,False)": 49,
        "(66,False)": 50,
        "(77,False)": 51,
        "(56,False)": 52,
        "(41,True)": 53,
        "(36,True)": 54,
        "(81,True)": 55,
        "(54,False)": 56,
        "(79,False)": 57,
        "(58,True)": 58,
        "(49,True)": 59,
        "(70,True)": 60,
        "(61,False)": 61,
        "(40,False)": 62,
        "(44,True)": 63,
        "(38,True)": 64,
        "(51,True)": 65,
        START: 66,
        END: 67,
        "(58,False)": 68,
        "(41,False)": 69,
        "(63,True)": 70,
        "(78,True)": 71,
        "(73,True)": 72,
        "(70,False)": 73,
        "(49,False)": 74,
        "(81,False)": 75,
        "(42,True)": 76,
        "(33,True)": 77,
        "(38,False)": 78,
        "(44,False)": 79,
        "(51,False)": 80,
        "(63,False)": 81,
        "(36,False)": 82,
        "(46,True)": 83,
        "(83,True)": 84,
        "(78,False)": 85,
        "(73,False)": 86,
        "(75,True)": 87,
        "(42,False)": 88,
        "(84,True)": 89,
        "(46,False)": 90,
        "(80,True)": 91,
        "(83,False)": 92,
        "(35,True)": 93,
        "(33,False)": 94,
        "(75,False)": 95,
        "(39,True)": 96,
        "(84,False)": 97,
        "(31,True)": 98,
        "(35,False)": 99,
        "(37,True)": 100,
        "(80,False)": 101,
        "(39,False)": 102,
        "(37,False)": 103,
        "(82,True)": 104,
        "(31,False)": 105,
        "(82,False)": 106
    };
    function s(e) {
        for (var n = -99999999, r = -1, t = 0; t < e.length; ++t)
            e[t] > n && (n = e[t],
            r = t);
        return r
    }
    var l = null
      , f = null
      , c = new Float32Array(107)
      , n = !1
      , r = !1
      , p = null;
    function t() {
        l.ccall("initialize", null, ["number", "number", "number"], [107, 32, 256]);
        l.cwrap("getUploadPointer", "number", []),
        l.cwrap("useUploadedData", null, []);
        var e = l.cwrap("getQuantizedUploadPointer", "number", ["number"])
          , n = l.cwrap("useUploadedQuantizedData", null, [])
          , r = l.cwrap("getOutputPointer", "number", []);
        f = function(e) {
            l.ccall("step", null, ["number"], [e]),
            c = l.HEAPF32.subarray(r() >> 2, 107 + (r() >> 2))
        }
        ;
        for (var t = e(p.length), a = l.HEAPU8.subarray(t, t + p.length), u = 0; u < p.length; ++u)
            a[u] = p[u];
        n(),
        f(i.START),
        postMessage({
            type: "loaded",
            data: null
        })
    }
    function a() {
        for (var e, n = [], r = 0; r < 3; ++r) {
            var t = new Float32Array(c);
            t[0] = -999999,
            t[i.START] = -99999999,
            t[i.END] = -99999999;
            var a = s(t);
            f(a);
            var u = (e = o[a],
            [parseInt(e.split(",")[0].substring(1), 10), "True" === e.split(",")[1].slice(0, -1)]);
            n.push(u)
        }
        return f(i["|"]),
        n
    }
    !function u(e, r) {
        var t = new XMLHttpRequest;
        t.open("GET", e, !0),
        t.responseType = "arraybuffer",
        t.onload = function(e) {
            var n = t.response;
            n && r(n)
        }
        ,
        t.send(null)
    }("weights.bin", function(e) {
        p = new Uint8Array(e),
        r = !0,
        n && t()
    }),
    e().then(function(e) {
        l = e,
        n = !0,
        r && t()
    }),
    onmessage = function(e) {
        var n = e.data;
        f(i["(" + n + ",False)"]);
        var r = a();
        postMessage({
            type: "notes",
            data: r
        }),
        f(i["(" + n + ",True)"]),
        a(),
        f(i["(" + n + ",True)"]),
        a(),
        f(i["(" + n + ",True)"]),
        a()
    }
}();
