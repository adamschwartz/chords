!function() {
    "use strict";
    var St, c = function() {
        var r = ["ACTIVE_ATTRIBUTES", "ACTIVE_ATTRIBUTE_MAX_LENGTH", "ACTIVE_TEXTURE", "ACTIVE_UNIFORMS", "ACTIVE_UNIFORM_MAX_LENGTH", "ALIASED_LINE_WIDTH_RANGE", "ALIASED_POINT_SIZE_RANGE", "ALPHA", "ALPHA_BITS", "ALWAYS", "ARRAY_BUFFER", "ARRAY_BUFFER_BINDING", "ATTACHED_SHADERS", "BACK", "BLEND", "BLEND_COLOR", "BLEND_DST_ALPHA", "BLEND_DST_RGB", "BLEND_EQUATION", "BLEND_EQUATION_ALPHA", "BLEND_EQUATION_RGB", "BLEND_SRC_ALPHA", "BLEND_SRC_RGB", "BLUE_BITS", "BOOL", "BOOL_VEC2", "BOOL_VEC3", "BOOL_VEC4", "BROWSER_DEFAULT_WEBGL", "BUFFER_SIZE", "BUFFER_USAGE", "BYTE", "CCW", "CLAMP_TO_EDGE", "COLOR_ATTACHMENT0", "COLOR_BUFFER_BIT", "COLOR_CLEAR_VALUE", "COLOR_WRITEMASK", "COMPILE_STATUS", "COMPRESSED_TEXTURE_FORMATS", "CONSTANT_ALPHA", "CONSTANT_COLOR", "CONTEXT_LOST_WEBGL", "CULL_FACE", "CULL_FACE_MODE", "CURRENT_PROGRAM", "CURRENT_VERTEX_ATTRIB", "CW", "DECR", "DECR_WRAP", "DELETE_STATUS", "DEPTH_ATTACHMENT", "DEPTH_BITS", "DEPTH_BUFFER_BIT", "DEPTH_CLEAR_VALUE", "DEPTH_COMPONENT", "DEPTH_COMPONENT16", "DEPTH_FUNC", "DEPTH_RANGE", "DEPTH_STENCIL", "DEPTH_STENCIL_ATTACHMENT", "DEPTH_TEST", "DEPTH_WRITEMASK", "DITHER", "DONT_CARE", "DST_ALPHA", "DST_COLOR", "DYNAMIC_DRAW", "ELEMENT_ARRAY_BUFFER", "ELEMENT_ARRAY_BUFFER_BINDING", "EQUAL", "FASTEST", "FLOAT", "FLOAT_MAT2", "FLOAT_MAT3", "FLOAT_MAT4", "FLOAT_VEC2", "FLOAT_VEC3", "FLOAT_VEC4", "FRAGMENT_SHADER", "FRAMEBUFFER", "FRAMEBUFFER_ATTACHMENT_OBJECT_NAME", "FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE", "FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE", "FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL", "FRAMEBUFFER_BINDING", "FRAMEBUFFER_COMPLETE", "FRAMEBUFFER_INCOMPLETE_ATTACHMENT", "FRAMEBUFFER_INCOMPLETE_DIMENSIONS", "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT", "FRAMEBUFFER_UNSUPPORTED", "FRONT", "FRONT_AND_BACK", "FRONT_FACE", "FUNC_ADD", "FUNC_REVERSE_SUBTRACT", "FUNC_SUBTRACT", "GENERATE_MIPMAP_HINT", "GEQUAL", "GREATER", "GREEN_BITS", "HIGH_FLOAT", "HIGH_INT", "INCR", "INCR_WRAP", "INFO_LOG_LENGTH", "INT", "INT_VEC2", "INT_VEC3", "INT_VEC4", "INVALID_ENUM", "INVALID_FRAMEBUFFER_OPERATION", "INVALID_OPERATION", "INVALID_VALUE", "INVERT", "KEEP", "LEQUAL", "LESS", "LINEAR", "LINEAR_MIPMAP_LINEAR", "LINEAR_MIPMAP_NEAREST", "LINES", "LINE_LOOP", "LINE_STRIP", "LINE_WIDTH", "LINK_STATUS", "LOW_FLOAT", "LOW_INT", "LUMINANCE", "LUMINANCE_ALPHA", "MAX_COMBINED_TEXTURE_IMAGE_UNITS", "MAX_CUBE_MAP_TEXTURE_SIZE", "MAX_FRAGMENT_UNIFORM_VECTORS", "MAX_RENDERBUFFER_SIZE", "MAX_TEXTURE_IMAGE_UNITS", "MAX_TEXTURE_SIZE", "MAX_VARYING_VECTORS", "MAX_VERTEX_ATTRIBS", "MAX_VERTEX_TEXTURE_IMAGE_UNITS", "MAX_VERTEX_UNIFORM_VECTORS", "MAX_VIEWPORT_DIMS", "MEDIUM_FLOAT", "MEDIUM_INT", "MIRRORED_REPEAT", "NEAREST", "NEAREST_MIPMAP_LINEAR", "NEAREST_MIPMAP_NEAREST", "NEVER", "NICEST", "NONE", "NOTEQUAL", "NO_ERROR", "NUM_COMPRESSED_TEXTURE_FORMATS", "ONE", "ONE_MINUS_CONSTANT_ALPHA", "ONE_MINUS_CONSTANT_COLOR", "ONE_MINUS_DST_ALPHA", "ONE_MINUS_DST_COLOR", "ONE_MINUS_SRC_ALPHA", "ONE_MINUS_SRC_COLOR", "OUT_OF_MEMORY", "PACK_ALIGNMENT", "POINTS", "POLYGON_OFFSET_FACTOR", "POLYGON_OFFSET_FILL", "POLYGON_OFFSET_UNITS", "RED_BITS", "RENDERBUFFER", "RENDERBUFFER_ALPHA_SIZE", "RENDERBUFFER_BINDING", "RENDERBUFFER_BLUE_SIZE", "RENDERBUFFER_DEPTH_SIZE", "RENDERBUFFER_GREEN_SIZE", "RENDERBUFFER_HEIGHT", "RENDERBUFFER_INTERNAL_FORMAT", "RENDERBUFFER_RED_SIZE", "RENDERBUFFER_STENCIL_SIZE", "RENDERBUFFER_WIDTH", "RENDERER", "REPEAT", "REPLACE", "RGB", "RGB5_A1", "RGB565", "RGBA", "RGBA4", "SAMPLER_2D", "SAMPLER_CUBE", "SAMPLES", "SAMPLE_ALPHA_TO_COVERAGE", "SAMPLE_BUFFERS", "SAMPLE_COVERAGE", "SAMPLE_COVERAGE_INVERT", "SAMPLE_COVERAGE_VALUE", "SCISSOR_BOX", "SCISSOR_TEST", "SHADER_COMPILER", "SHADER_SOURCE_LENGTH", "SHADER_TYPE", "SHADING_LANGUAGE_VERSION", "SHORT", "SRC_ALPHA", "SRC_ALPHA_SATURATE", "SRC_COLOR", "STATIC_DRAW", "STENCIL_ATTACHMENT", "STENCIL_BACK_FAIL", "STENCIL_BACK_FUNC", "STENCIL_BACK_PASS_DEPTH_FAIL", "STENCIL_BACK_PASS_DEPTH_PASS", "STENCIL_BACK_REF", "STENCIL_BACK_VALUE_MASK", "STENCIL_BACK_WRITEMASK", "STENCIL_BITS", "STENCIL_BUFFER_BIT", "STENCIL_CLEAR_VALUE", "STENCIL_FAIL", "STENCIL_FUNC", "STENCIL_INDEX", "STENCIL_INDEX8", "STENCIL_PASS_DEPTH_FAIL", "STENCIL_PASS_DEPTH_PASS", "STENCIL_REF", "STENCIL_TEST", "STENCIL_VALUE_MASK", "STENCIL_WRITEMASK", "STREAM_DRAW", "SUBPIXEL_BITS", "TEXTURE", "TEXTURE0", "TEXTURE1", "TEXTURE2", "TEXTURE3", "TEXTURE4", "TEXTURE5", "TEXTURE6", "TEXTURE7", "TEXTURE8", "TEXTURE9", "TEXTURE10", "TEXTURE11", "TEXTURE12", "TEXTURE13", "TEXTURE14", "TEXTURE15", "TEXTURE16", "TEXTURE17", "TEXTURE18", "TEXTURE19", "TEXTURE20", "TEXTURE21", "TEXTURE22", "TEXTURE23", "TEXTURE24", "TEXTURE25", "TEXTURE26", "TEXTURE27", "TEXTURE28", "TEXTURE29", "TEXTURE30", "TEXTURE31", "TEXTURE_2D", "TEXTURE_BINDING_2D", "TEXTURE_BINDING_CUBE_MAP", "TEXTURE_CUBE_MAP", "TEXTURE_CUBE_MAP_NEGATIVE_X", "TEXTURE_CUBE_MAP_NEGATIVE_Y", "TEXTURE_CUBE_MAP_NEGATIVE_Z", "TEXTURE_CUBE_MAP_POSITIVE_X", "TEXTURE_CUBE_MAP_POSITIVE_Y", "TEXTURE_CUBE_MAP_POSITIVE_Z", "TEXTURE_MAG_FILTER", "TEXTURE_MIN_FILTER", "TEXTURE_WRAP_S", "TEXTURE_WRAP_T", "TRIANGLES", "TRIANGLE_FAN", "TRIANGLE_STRIP", "UNPACK_ALIGNMENT", "UNPACK_COLORSPACE_CONVERSION_WEBGL", "UNPACK_FLIP_Y_WEBGL", "UNPACK_PREMULTIPLY_ALPHA_WEBGL", "UNSIGNED_BYTE", "UNSIGNED_INT", "UNSIGNED_SHORT", "UNSIGNED_SHORT_4_4_4_4", "UNSIGNED_SHORT_5_5_5_1", "UNSIGNED_SHORT_5_6_5", "VALIDATE_STATUS", "VENDOR", "VERSION", "VERTEX_ATTRIB_ARRAY_BUFFER_BINDING", "VERTEX_ATTRIB_ARRAY_ENABLED", "VERTEX_ATTRIB_ARRAY_NORMALIZED", "VERTEX_ATTRIB_ARRAY_POINTER", "VERTEX_ATTRIB_ARRAY_SIZE", "VERTEX_ATTRIB_ARRAY_STRIDE", "VERTEX_ATTRIB_ARRAY_TYPE", "VERTEX_SHADER", "VIEWPORT", "ZERO"];
        function i(t) {
            this.gl = t;
            for (var e = 0; e < r.length; e += 1)
                this[r[e]] = t[r[e]]
        }
        function p(t, e, r) {
            var n = t.createShader(e);
            return t.shaderSource(n, r),
            t.compileShader(n),
            t.getShaderParameter(n, t.COMPILE_STATUS) || console.log(t.getShaderInfoLog(n)),
            n
        }
        function n(t, e, r, n) {
            this.uniformLocations = {},
            this.uniforms = {};
            var i = t.gl
              , o = p(i, i.VERTEX_SHADER, e)
              , a = p(i, i.FRAGMENT_SHADER, r)
              , s = this.program = i.createProgram();
            if (i.attachShader(s, o),
            i.attachShader(s, a),
            n !== undefined)
                for (var u in n)
                    i.bindAttribLocation(s, n[u], u);
            i.linkProgram(s),
            this.attributeLocations = {};
            for (var l = i.getProgramParameter(s, i.ACTIVE_ATTRIBUTES), h = 0; h < l; ++h) {
                u = i.getActiveAttrib(s, h).name;
                this.attributeLocations[u] = i.getAttribLocation(s, u)
            }
            var c = this.uniformLocations = {}
              , f = i.getProgramParameter(s, i.ACTIVE_UNIFORMS);
            for (h = 0; h < f; h += 1) {
                var m = i.getActiveUniform(s, h)
                  , d = i.getUniformLocation(s, m.name);
                c[m.name] = d
            }
        }
        return i.create = function(t, e) {
            var r = null;
            try {
                r = t.getContext("webgl", e) || t.getContext("experimental-webgl", e)
            } catch (n) {
                return null
            }
            return null === r ? null : new i(r)
        }
        ,
        i.checkWebGLSupport = function(t, r) {
            i.checkWebGLSupportWithExtensions([], t, function(t, e) {
                r()
            })
        }
        ,
        i.checkWebGLSupportWithExtensions = function(t, e, r) {
            var n = document.createElement("canvas")
              , i = null;
            try {
                i = n.getContext("webgl") || n.getContext("experimental-webgl")
            } catch (s) {
                return void r(!1, [])
            }
            if (null !== i) {
                for (var o = [], a = 0; a < t.length; ++a)
                    null === i.getExtension(t[a]) && o.push(t[a]);
                0 < o.length ? r(!0, o) : e()
            } else
                r(!1, [])
        }
        ,
        i.prototype.getSupportedExtensions = function() {
            return this.gl.getSupportedExtensions()
        }
        ,
        i.prototype.getExtension = function(t) {
            return this.gl.getExtension(t)
        }
        ,
        i.prototype.getParameter = function(t) {
            return this.gl.getParameter(t)
        }
        ,
        i.prototype.canRenderToTexture = function(t) {
            var e = this.gl
              , r = this.createFramebuffer()
              , n = this.buildTexture(e.RGBA, t, 1, 1, null, e.CLAMP_TO_EDGE, e.CLAMP_TO_EDGE, e.NEAREST, e.NEAREST);
            this.framebufferTexture2D(r, e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, n, 0);
            var i = this.checkFramebufferStatus(r) === e.FRAMEBUFFER_COMPLETE;
            return this.deleteFramebuffer(r),
            this.deleteTexture(n),
            i
        }
        ,
        i.prototype.checkFramebufferStatus = function(t) {
            return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, t),
            this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER)
        }
        ,
        i.prototype.getShaderPrecisionFormat = function(t, e) {
            return this.gl.getShaderPrecisionFormat(t, e)
        }
        ,
        i.prototype.hasHalfFloatTextureSupport = function() {
            var t = this.getExtension("OES_texture_half_float");
            return null !== t && (null !== this.getExtension("OES_texture_half_float_linear") && !!this.canRenderToTexture(t.HALF_FLOAT_OES))
        }
        ,
        i.prototype.hasFloatTextureSupport = function() {
            return null !== this.getExtension("OES_texture_float") && null !== this.getExtension("OES_texture_float_linear") && !!this.canRenderToTexture(this.FLOAT)
        }
        ,
        i.prototype.finish = function() {
            return this.gl.finish(),
            this
        }
        ,
        i.prototype.flush = function() {
            return this.gl.flush(),
            this
        }
        ,
        i.prototype.getError = function() {
            return this.gl.getError()
        }
        ,
        i.prototype.createFramebuffer = function() {
            return this.gl.createFramebuffer()
        }
        ,
        i.prototype.framebufferTexture2D = function(t, e, r, n, i, o) {
            return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, t),
            this.gl.framebufferTexture2D(e, r, n, i, o),
            this
        }
        ,
        i.prototype.framebufferRenderbuffer = function(t, e, r, n, i) {
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, t),
            this.gl.framebufferRenderbuffer(e, r, n, i)
        }
        ,
        i.prototype.drawBuffers = function(t, e) {
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, t),
            this.drawExt.drawBuffersWEBGL(e)
        }
        ,
        i.prototype.createTexture = function() {
            return this.gl.createTexture()
        }
        ,
        i.prototype.bindTextureForEditing = function(t, e) {
            this.gl.activeTexture(this.gl.TEXTURE0),
            this.gl.bindTexture(t, e)
        }
        ,
        i.prototype.texImage2D = function(t, e) {
            var r = Array.prototype.slice.call(arguments, 2);
            return r.unshift(t),
            this.bindTextureForEditing(t, e),
            this.gl.texImage2D.apply(this.gl, r),
            this
        }
        ,
        i.prototype.texSubImage2D = function(t, e) {
            var r = Array.prototype.slice.call(arguments, 2);
            return r.unshift(t),
            this.bindTextureForEditing(t, e),
            this.gl.texSubImage2D.apply(this.gl, r),
            this
        }
        ,
        i.prototype.texParameteri = function(t, e, r, n) {
            return this.bindTextureForEditing(t, e),
            this.gl.texParameteri(t, r, n),
            this
        }
        ,
        i.prototype.texParameterf = function(t, e, r, n) {
            return this.bindTextureForEditing(t, e),
            this.gl.texParameterf(t, r, n),
            this
        }
        ,
        i.prototype.pixelStorei = function(t, e, r, n) {
            return this.bindTextureForEditing(t, e),
            this.gl.pixelStorei(r, n),
            this
        }
        ,
        i.prototype.setTextureFiltering = function(t, e, r, n, i, o) {
            var a = this.gl;
            return this.bindTextureForEditing(t, e),
            a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, r),
            a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, n),
            a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, i),
            a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, o),
            this
        }
        ,
        i.prototype.generateMipmap = function(t, e) {
            return this.bindTextureForEditing(t, e),
            this.gl.generateMipmap(t),
            this
        }
        ,
        i.prototype.buildTexture = function(t, e, r, n, i, o, a, s, u) {
            var l = this.createTexture();
            return this.rebuildTexture(l, t, e, r, n, i, o, a, s, u),
            l
        }
        ,
        i.prototype.rebuildTexture = function(t, e, r, n, i, o, a, s, u, l) {
            return this.texImage2D(this.TEXTURE_2D, t, 0, e, n, i, 0, e, r, o).setTextureFiltering(this.TEXTURE_2D, t, a, s, u, l),
            this
        }
        ,
        i.prototype.createRenderbuffer = function() {
            return this.gl.createRenderbuffer()
        }
        ,
        i.prototype.renderbufferStorage = function(t, e, r, n, i) {
            return this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, t),
            this.gl.renderbufferStorage(e, r, n, i),
            this
        }
        ,
        i.prototype.createBuffer = function() {
            return this.gl.createBuffer()
        }
        ,
        i.prototype.bufferData = function(t, e, r, n) {
            var i = this.gl;
            i.bindBuffer(e, t),
            i.bufferData(e, r, n)
        }
        ,
        i.prototype.buildBuffer = function(t, e, r) {
            var n = this.createBuffer();
            return this.bufferData(n, t, e, r),
            n
        }
        ,
        i.prototype.bufferSubData = function(t, e, r, n) {
            var i = this.gl;
            i.bindBuffer(e, t),
            i.bufferSubData(e, r, n)
        }
        ,
        i.prototype.createProgram = function(t, e, r) {
            return new n(this,t,e,r)
        }
        ,
        i.loadTextFiles = function(n, i) {
            for (var o = 0, a = {}, t = 0; t < n.length; ++t) {
                var s = n[t];
                !function() {
                    var e = s
                      , r = new XMLHttpRequest;
                    r.onreadystatechange = function() {
                        if (4 === r.readyState) {
                            var t = r.responseText;
                            a[e] = t,
                            (o += 1) === n.length && i(a)
                        }
                    }
                    ,
                    r.open("GET", e, !0),
                    r.send()
                }()
            }
        }
        ,
        n.prototype.getAttribLocation = function(t) {
            return this.attributeLocations[t]
        }
        ,
        i
    }(), t = (St = "undefined" != typeof document && document.currentScript ? document.currentScript.src : undefined,
    function(t) {
        var e, f = void 0 !== (t = t || {}) ? t : {}, r = {};
        for (e in f)
            f.hasOwnProperty(e) && (r[e] = f[e]);
        f.arguments = [],
        f.thisProgram = "./this.program",
        f.quit = function(t, e) {
            throw e
        }
        ,
        f.preRun = [];
        var m, n, i, d = f.postRun = [];
        d = "object" == typeof window,
        m = "function" == typeof importScripts,
        n = "object" == typeof process && "function" == typeof require && !d && !m,
        i = !d && !n && !m;
        var o, a, s = "";
        function p(t) {
            return f.locateFile ? f.locateFile(t, s) : s + t
        }
        n ? (s = __dirname + "/",
        f.read = function(t, e) {
            var r;
            return o || (o = require("fs")),
            a || (a = require("path")),
            t = a.normalize(t),
            r = o.readFileSync(t),
            e ? r : r.toString()
        }
        ,
        f.readBinary = function(t) {
            var e = f.read(t, !0);
            return e.buffer || (e = new Uint8Array(e)),
            T(e.buffer),
            e
        }
        ,
        1 < process.argv.length && (f.thisProgram = process.argv[1].replace(/\\/g, "/")),
        f.arguments = process.argv.slice(2),
        process.on("uncaughtException", function(t) {
            if (!(t instanceof nt))
                throw t
        }),
        process.on("unhandledRejection", function(t, e) {
            process.exit(1)
        }),
        f.quit = function(t) {
            process.exit(t)
        }
        ,
        f.inspect = function() {
            return "[Emscripten Module object]"
        }
        ) : i ? ("undefined" != typeof read && (f.read = function(t) {
            return read(t)
        }
        ),
        f.readBinary = function(t) {
            var e;
            return "function" == typeof readbuffer ? new Uint8Array(readbuffer(t)) : (T("object" == typeof (e = read(t, "binary"))),
            e)
        }
        ,
        "undefined" != typeof scriptArgs ? f.arguments = scriptArgs : void 0 !== arguments && (f.arguments = arguments),
        "function" == typeof quit && (f.quit = function(t) {
            quit(t)
        }
        )) : (d || m) && (d ? document.currentScript && (s = document.currentScript.src) : s = self.location.href,
        St && (s = St),
        s = 0 !== s.indexOf("blob:") ? s.split("/").slice(0, -1).join("/") + "/" : "",
        f.read = function(t) {
            var e = new XMLHttpRequest;
            return e.open("GET", t, !1),
            e.send(null),
            e.responseText
        }
        ,
        m && (f.readBinary = function(t) {
            var e = new XMLHttpRequest;
            return e.open("GET", t, !1),
            e.responseType = "arraybuffer",
            e.send(null),
            new Uint8Array(e.response)
        }
        ),
        f.readAsync = function(t, e, r) {
            var n = new XMLHttpRequest;
            n.open("GET", t, !0),
            n.responseType = "arraybuffer",
            n.onload = function() {
                200 == n.status || 0 == n.status && n.response ? e(n.response) : r()
            }
            ,
            n.onerror = r,
            n.send(null)
        }
        ,
        f.setWindowTitle = function(t) {
            document.title = t
        }
        );
        var h = f.print || ("undefined" != typeof console ? console.log.bind(console) : "undefined" != typeof print ? print : null)
          , g = f.printErr || ("undefined" != typeof printErr ? printErr : "undefined" != typeof console && console.warn.bind(console) || h);
        for (e in r)
            r.hasOwnProperty(e) && (f[e] = r[e]);
        function u(t, e) {
            return e || (e = 16),
            t = Math.ceil(t / e) * e
        }
        r = undefined;
        var _ = {
            "f64-rem": function(t, e) {
                return t % e
            },
            "debugger": function() {}
        }
          , l = 0;
        function T(t, e) {
            t || ot("Assertion failed: " + e)
        }
        function E(t) {
            var e = f["_" + t];
            return T(e, "Cannot call unknown function " + t + ", make sure it is exported"),
            e
        }
        var c = {
            stackSave: function() {
                rt()
            },
            stackRestore: function() {
                et()
            },
            arrayToC: function(t) {
                var e = tt(t.length);
                return function r(t, e) {
                    y.set(t, e)
                }(t, e),
                e
            },
            stringToC: function(t) {
                var e = 0;
                if (null !== t && t !== undefined && 0 !== t) {
                    var r = 1 + (t.length << 2);
                    !function n(t, e, r) {
                        return function l(t, e, r, n) {
                            if (!(0 < n))
                                return 0;
                            for (var i = r, o = r + n - 1, a = 0; a < t.length; ++a) {
                                var s = t.charCodeAt(a);
                                if (55296 <= s && s <= 57343) {
                                    var u = t.charCodeAt(++a);
                                    s = 65536 + ((1023 & s) << 10) | 1023 & u
                                }
                                if (s <= 127) {
                                    if (o <= r)
                                        break;
                                    e[r++] = s
                                } else if (s <= 2047) {
                                    if (o <= r + 1)
                                        break;
                                    e[r++] = 192 | s >> 6,
                                    e[r++] = 128 | 63 & s
                                } else if (s <= 65535) {
                                    if (o <= r + 2)
                                        break;
                                    e[r++] = 224 | s >> 12,
                                    e[r++] = 128 | s >> 6 & 63,
                                    e[r++] = 128 | 63 & s
                                } else if (s <= 2097151) {
                                    if (o <= r + 3)
                                        break;
                                    e[r++] = 240 | s >> 18,
                                    e[r++] = 128 | s >> 12 & 63,
                                    e[r++] = 128 | s >> 6 & 63,
                                    e[r++] = 128 | 63 & s
                                } else if (s <= 67108863) {
                                    if (o <= r + 4)
                                        break;
                                    e[r++] = 248 | s >> 24,
                                    e[r++] = 128 | s >> 18 & 63,
                                    e[r++] = 128 | s >> 12 & 63,
                                    e[r++] = 128 | s >> 6 & 63,
                                    e[r++] = 128 | 63 & s
                                } else {
                                    if (o <= r + 5)
                                        break;
                                    e[r++] = 252 | s >> 30,
                                    e[r++] = 128 | s >> 24 & 63,
                                    e[r++] = 128 | s >> 18 & 63,
                                    e[r++] = 128 | s >> 12 & 63,
                                    e[r++] = 128 | s >> 6 & 63,
                                    e[r++] = 128 | 63 & s
                                }
                            }
                            return e[r] = 0,
                            r - i
                        }(t, R, e, r)
                    }(t, e = tt(r), r)
                }
                return e
            }
        }
          , v = {
            string: c.stringToC,
            array: c.arrayToC
        };
        function x(t, e, r, n, i) {
            var o = E(t)
              , a = []
              , s = 0;
            if (n)
                for (var u = 0; u < n.length; u++) {
                    var l = v[r[u]];
                    a[u] = l ? (0 === s && (s = rt()),
                    l(n[u])) : n[u]
                }
            var h = o.apply(null, a);
            return h = function c(t) {
                return "string" === e ? A(t) : "boolean" === e ? Boolean(t) : t
            }(h),
            0 !== s && et(s),
            h
        }
        function A(t, e) {
            if (0 === e || !t)
                return "";
            for (var r, n = 0, i = 0; n |= r = R[t + i >> 0],
            (0 != r || e) && (i++,
            !e || i != e); )
                ;
            e || (e = i);
            var o = "";
            if (n < 128) {
                for (var a; 0 < e; )
                    a = String.fromCharCode.apply(String, R.subarray(t, t + Math.min(e, 1024))),
                    o = o ? o + a : a,
                    t += 1024,
                    e -= 1024;
                return o
            }
            return function s(t) {
                return F(R, t)
            }(t)
        }
        var b, y, R, w, D, M, P, C, S = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : undefined;
        function F(t, e) {
            for (var r = e; t[r]; )
                ++r;
            if (16 < r - e && t.subarray && S)
                return S.decode(t.subarray(e, r));
            for (var n, i, o, a, s, u = ""; ; ) {
                if (!(n = t[e++]))
                    return u;
                if (128 & n)
                    if (i = 63 & t[e++],
                    192 != (224 & n))
                        if (o = 63 & t[e++],
                        (n = 224 == (240 & n) ? (15 & n) << 12 | i << 6 | o : (a = 63 & t[e++],
                        240 == (248 & n) ? (7 & n) << 18 | i << 12 | o << 6 | a : (s = 63 & t[e++],
                        248 == (252 & n) ? (3 & n) << 24 | i << 18 | o << 12 | a << 6 | s : (1 & n) << 30 | i << 24 | o << 18 | a << 12 | s << 6 | 63 & t[e++]))) < 65536)
                            u += String.fromCharCode(n);
                        else {
                            var l = n - 65536;
                            u += String.fromCharCode(55296 | l >> 10, 56320 | 1023 & l)
                        }
                    else
                        u += String.fromCharCode((31 & n) << 6 | i);
                else
                    u += String.fromCharCode(n)
            }
        }
        function I(t, e) {
            return 0 < t % e && (t += e - t % e),
            t
        }
        function L(t) {
            f.buffer = b = t
        }
        function B() {
            f.HEAP8 = y = new Int8Array(b),
            f.HEAP16 = new Int16Array(b),
            f.HEAP32 = w = new Int32Array(b),
            f.HEAPU8 = R = new Uint8Array(b),
            f.HEAPU16 = new Uint16Array(b),
            f.HEAPU32 = new Uint32Array(b),
            f.HEAPF32 = new Float32Array(b),
            f.HEAPF64 = new Float64Array(b)
        }
        "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : undefined,
        D = 0,
        f.reallocBuffer || (f.reallocBuffer = function(t) {
            var e;
            try {
                if (ArrayBuffer.transfer)
                    e = ArrayBuffer.transfer(b, t);
                else {
                    var r = y;
                    e = new ArrayBuffer(t),
                    new Int8Array(e).set(r)
                }
            } catch (n) {
                return !1
            }
            return !!J(e) && e
        }
        );
        try {
            Function.prototype.call.bind(Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength").get)(new ArrayBuffer(4))
        } catch (at) {}
        var N = f.TOTAL_STACK || 5242880
          , U = f.TOTAL_MEMORY || 16777216;
        function O(t) {
            for (; 0 < t.length; ) {
                var e = t.shift();
                if ("function" != typeof e) {
                    var r = e.func;
                    "number" == typeof r ? e.arg === undefined ? f.dynCall_v(r) : f.dynCall_vi(r, e.arg) : r(e.arg === undefined ? null : e.arg)
                } else
                    e()
            }
        }
        U < N && g("TOTAL_MEMORY should be larger than TOTAL_STACK, was " + U + "! (TOTAL_STACK=" + N + ")"),
        f.buffer ? b = f.buffer : (b = "object" == typeof WebAssembly && "function" == typeof WebAssembly.Memory ? (f.wasmMemory = new WebAssembly.Memory({
            initial: U / 65536
        }),
        f.wasmMemory.buffer) : new ArrayBuffer(U),
        f.buffer = b),
        B();
        var V = []
          , k = []
          , H = []
          , X = []
          , G = !1
          , W = 0
          , Y = null
          , z = null;
        f.preloadedImages = {},
        f.preloadedAudios = {};
        var j = "data:application/octet-stream;base64,";
        function q(t) {
            return String.prototype.startsWith ? t.startsWith(j) : 0 === t.indexOf(j)
        }
        D = 1059392,
        k.push(),
        f.STATIC_BASE = 1024,
        f.STATIC_BUMP = 1058368,
        D += 16;
        var K = {
            varargs: 0,
            get: function(t) {
                return K.varargs += 4,
                w[K.varargs - 4 >> 2]
            },
            getStr: function() {
                return A(K.get())
            },
            get64: function() {
                var t = K.get()
                  , e = K.get();
                return T(0 <= t ? 0 === e : -1 === e),
                t
            },
            getZero: function() {
                T(0 === K.get())
            }
        };
        function Z(t, e) {
            throw f.setThrew(t, e || 1),
            "longjmp"
        }
        C = function ut(t) {
            var e = D;
            return D = D + t + 15 & -16,
            e
        }(4),
        P = u((M = u(D)) + N),
        w[C >> 2] = P,
        f.wasmTableSize = 59,
        f.wasmMaxTableSize = 59,
        f.asmGlobalArg = {},
        f.asmLibraryArg = {
            abort: ot,
            enlargeMemory: function lt() {
                var t = f.usingWasm ? 65536 : 16777216
                  , e = 2147483648 - t;
                if (w[C >> 2] > e)
                    return !1;
                var r = U;
                for (U = Math.max(U, 16777216); U < w[C >> 2]; )
                    U = U <= 536870912 ? I(2 * U, t) : Math.min(I((3 * U + 2147483648) / 4, t), e);
                var n = f.reallocBuffer(U);
                return n && n.byteLength == U ? (L(n),
                B(),
                !0) : (U = r,
                !1)
            },
            getTotalMemory: function ht() {
                return U
            },
            abortOnCannotGrowMemory: function ct() {
                ot("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value " + U + ", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")
            },
            invoke_ii: function ft(t, e) {
                var r = rt();
                try {
                    return f.dynCall_ii(t, e)
                } catch (at) {
                    if (et(r),
                    "number" != typeof at && "longjmp" !== at)
                        throw at;
                    f.setThrew(1, 0)
                }
            },
            invoke_iii: function mt(t, e, r) {
                var n = rt();
                try {
                    return f.dynCall_iii(t, e, r)
                } catch (at) {
                    if (et(n),
                    "number" != typeof at && "longjmp" !== at)
                        throw at;
                    f.setThrew(1, 0)
                }
            },
            invoke_vi: function dt(t, e) {
                var r = rt();
                try {
                    f.dynCall_vi(t, e)
                } catch (at) {
                    if (et(r),
                    "number" != typeof at && "longjmp" !== at)
                        throw at;
                    f.setThrew(1, 0)
                }
            },
            invoke_vii: function pt(t, e, r) {
                var n = rt();
                try {
                    f.dynCall_vii(t, e, r)
                } catch (at) {
                    if (et(n),
                    "number" != typeof at && "longjmp" !== at)
                        throw at;
                    f.setThrew(1, 0)
                }
            },
            invoke_viii: function gt(t, e, r, n) {
                var i = rt();
                try {
                    f.dynCall_viii(t, e, r, n)
                } catch (at) {
                    if (et(i),
                    "number" != typeof at && "longjmp" !== at)
                        throw at;
                    f.setThrew(1, 0)
                }
            },
            invoke_viiiii: function _t(t, e, r, n, i, o) {
                var a = rt();
                try {
                    f.dynCall_viiiii(t, e, r, n, i, o)
                } catch (at) {
                    if (et(a),
                    "number" != typeof at && "longjmp" !== at)
                        throw at;
                    f.setThrew(1, 0)
                }
            },
            ___assert_fail: function Tt(t, e, r, n) {
                ot("Assertion failed: " + A(t) + ", at: " + [e ? A(e) : "unknown filename", r, n ? A(n) : "unknown function"])
            },
            ___cxa_allocate_exception: function Et(t) {
                return $(t)
            },
            ___cxa_throw: function vt(t, e, r) {
                throw t + " - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch."
            },
            ___setErrNo: function xt(t) {
                return f.___errno_location && (w[f.___errno_location() >> 2] = t),
                t
            },
            ___syscall140: function At(t, e) {
                K.varargs = e;
                try {
                    var r = K.getStreamFromFD()
                      , n = (K.get(),
                    K.get())
                      , i = K.get()
                      , o = K.get()
                      , a = n;
                    return FS.llseek(r, a, o),
                    w[i >> 2] = r.position,
                    r.getdents && 0 === a && 0 === o && (r.getdents = null),
                    0
                } catch (at) {
                    return "undefined" != typeof FS && at instanceof FS.ErrnoError || ot(at),
                    -at.errno
                }
            },
            ___syscall146: function bt(t, e) {
                K.varargs = e;
                try {
                    var r = K.get()
                      , n = K.get()
                      , i = K.get()
                      , o = 0;
                    bt.buffers || (bt.buffers = [null, [], []],
                    bt.printChar = function(t, e) {
                        var r = bt.buffers[t];
                        T(r),
                        0 === e || 10 === e ? ((1 === t ? h : g)(F(r, 0)),
                        r.length = 0) : r.push(e)
                    }
                    );
                    for (var a = 0; a < i; a++) {
                        for (var s = w[n + 8 * a >> 2], u = w[n + (8 * a + 4) >> 2], l = 0; l < u; l++)
                            bt.printChar(r, R[s + l]);
                        o += u
                    }
                    return o
                } catch (at) {
                    return "undefined" != typeof FS && at instanceof FS.ErrnoError || ot(at),
                    -at.errno
                }
            },
            ___syscall54: function yt(t, e) {
                K.varargs = e;
                try {
                    return 0
                } catch (at) {
                    return "undefined" != typeof FS && at instanceof FS.ErrnoError || ot(at),
                    -at.errno
                }
            },
            ___syscall6: function Rt(t, e) {
                K.varargs = e;
                try {
                    var r = K.getStreamFromFD();
                    return FS.close(r),
                    0
                } catch (at) {
                    return "undefined" != typeof FS && at instanceof FS.ErrnoError || ot(at),
                    -at.errno
                }
            },
            _abort: function wt() {
                f.abort()
            },
            _emscripten_longjmp: function Dt(t, e) {
                Z(t, e)
            },
            _emscripten_memcpy_big: function Mt(t, e, r) {
                return R.set(R.subarray(e, e + r), t),
                t
            },
            _longjmp: Z,
            DYNAMICTOP_PTR: C,
            STACKTOP: M
        };
        var Q = f.asm(f.asmGlobalArg, f.asmLibraryArg, b);
        f.asm = Q,
        f.___errno_location = function() {
            return f.asm.___errno_location.apply(null, arguments)
        }
        ,
        f._createMouth = function() {
            return f.asm._createMouth.apply(null, arguments)
        }
        ;
        var J = f._emscripten_replace_memory = function() {
            return f.asm._emscripten_replace_memory.apply(null, arguments)
        }
          , $ = (f._getBasePositionData = function() {
            return f.asm._getBasePositionData.apply(null, arguments)
        }
        ,
        f._getBaseVertexCount = function() {
            return f.asm._getBaseVertexCount.apply(null, arguments)
        }
        ,
        f._getDropletCount = function() {
            return f.asm._getDropletCount.apply(null, arguments)
        }
        ,
        f._getDropletPositionData = function() {
            return f.asm._getDropletPositionData.apply(null, arguments)
        }
        ,
        f._getEmbeddingCoordinatesData = function() {
            return f.asm._getEmbeddingCoordinatesData.apply(null, arguments)
        }
        ,
        f._getEmbeddingCount = function() {
            return f.asm._getEmbeddingCount.apply(null, arguments)
        }
        ,
        f._getEmbeddingIndexData = function() {
            return f.asm._getEmbeddingIndexData.apply(null, arguments)
        }
        ,
        f._getEmbeddingNeighboursData = function() {
            return f.asm._getEmbeddingNeighboursData.apply(null, arguments)
        }
        ,
        f._getEmbeddingOppositesData = function() {
            return f.asm._getEmbeddingOppositesData.apply(null, arguments)
        }
        ,
        f._getEmbeddingRenderingIndexCount = function() {
            return f.asm._getEmbeddingRenderingIndexCount.apply(null, arguments)
        }
        ,
        f._getEmbeddingRenderingIndexData = function() {
            return f.asm._getEmbeddingRenderingIndexData.apply(null, arguments)
        }
        ,
        f._getEmbeddingWrinkleStrengthsData = function() {
            return f.asm._getEmbeddingWrinkleStrengthsData.apply(null, arguments)
        }
        ,
        f._getEyeIndexCount = function() {
            return f.asm._getEyeIndexCount.apply(null, arguments)
        }
        ,
        f._getEyeIndexData = function() {
            return f.asm._getEyeIndexData.apply(null, arguments)
        }
        ,
        f._getEyeModelMatrix = function() {
            return f.asm._getEyeModelMatrix.apply(null, arguments)
        }
        ,
        f._getEyeNormalData = function() {
            return f.asm._getEyeNormalData.apply(null, arguments)
        }
        ,
        f._getEyeNormalMatrix = function() {
            return f.asm._getEyeNormalMatrix.apply(null, arguments)
        }
        ,
        f._getEyePosition = function() {
            return f.asm._getEyePosition.apply(null, arguments)
        }
        ,
        f._getEyePositionData = function() {
            return f.asm._getEyePositionData.apply(null, arguments)
        }
        ,
        f._getEyeVertexCount = function() {
            return f.asm._getEyeVertexCount.apply(null, arguments)
        }
        ,
        f._getInsideIndexCount = function() {
            return f.asm._getInsideIndexCount.apply(null, arguments)
        }
        ,
        f._getInsideIndexData = function() {
            return f.asm._getInsideIndexData.apply(null, arguments)
        }
        ,
        f._getInsideNormalData = function() {
            return f.asm._getInsideNormalData.apply(null, arguments)
        }
        ,
        f._getInsidePositionData = function() {
            return f.asm._getInsidePositionData.apply(null, arguments)
        }
        ,
        f._getInsideVertexCount = function() {
            return f.asm._getInsideVertexCount.apply(null, arguments)
        }
        ,
        f._getMaxSpitCount = function() {
            return f.asm._getMaxSpitCount.apply(null, arguments)
        }
        ,
        f._getMouthArea = function() {
            return f.asm._getMouthArea.apply(null, arguments)
        }
        ,
        f._getMouthAverageDistance = function() {
            return f.asm._getMouthAverageDistance.apply(null, arguments)
        }
        ,
        f._getMouthClosedUnclosedRatio = function() {
            return f.asm._getMouthClosedUnclosedRatio.apply(null, arguments)
        }
        ,
        f._getMouthDistanceCentroid = function() {
            return f.asm._getMouthDistanceCentroid.apply(null, arguments)
        }
        ,
        f._getMouthDragX = function() {
            return f.asm._getMouthDragX.apply(null, arguments)
        }
        ,
        f._getMouthIndexCount = function() {
            return f.asm._getMouthIndexCount.apply(null, arguments)
        }
        ,
        f._getMouthIndexData = function() {
            return f.asm._getMouthIndexData.apply(null, arguments)
        }
        ,
        f._getMouthIsDragging = function() {
            return f.asm._getMouthIsDragging.apply(null, arguments)
        }
        ,
        f._getMouthMaxStretch = function() {
            return f.asm._getMouthMaxStretch.apply(null, arguments)
        }
        ,
        f._getMouthMaxStretchPosition = function() {
            return f.asm._getMouthMaxStretchPosition.apply(null, arguments)
        }
        ,
        f._getMouthMinY = function() {
            return f.asm._getMouthMinY.apply(null, arguments)
        }
        ,
        f._getMouthNormalData = function() {
            return f.asm._getMouthNormalData.apply(null, arguments)
        }
        ,
        f._getMouthPositionData = function() {
            return f.asm._getMouthPositionData.apply(null, arguments)
        }
        ,
        f._getMouthVertexCount = function() {
            return f.asm._getMouthVertexCount.apply(null, arguments)
        }
        ,
        f._getOpeningCenter = function() {
            return f.asm._getOpeningCenter.apply(null, arguments)
        }
        ,
        f._getOpeningIndexCount = function() {
            return f.asm._getOpeningIndexCount.apply(null, arguments)
        }
        ,
        f._getOpeningIndexData = function() {
            return f.asm._getOpeningIndexData.apply(null, arguments)
        }
        ,
        f._getOpeningPositionData = function() {
            return f.asm._getOpeningPositionData.apply(null, arguments)
        }
        ,
        f._getOpeningVertexCount = function() {
            return f.asm._getOpeningVertexCount.apply(null, arguments)
        }
        ,
        f._getSpitCount = function() {
            return f.asm._getSpitCount.apply(null, arguments)
        }
        ,
        f._getSpitProjectionViewMatrix = function() {
            return f.asm._getSpitProjectionViewMatrix.apply(null, arguments)
        }
        ,
        f._getSpitRenderingData = function() {
            return f.asm._getSpitRenderingData.apply(null, arguments)
        }
        ,
        f._getTeethCount = function() {
            return f.asm._getTeethCount.apply(null, arguments)
        }
        ,
        f._getTongueIndexCount = function() {
            return f.asm._getTongueIndexCount.apply(null, arguments)
        }
        ,
        f._getTongueIndexData = function() {
            return f.asm._getTongueIndexData.apply(null, arguments)
        }
        ,
        f._getTongueNormalData = function() {
            return f.asm._getTongueNormalData.apply(null, arguments)
        }
        ,
        f._getTonguePositionData = function() {
            return f.asm._getTonguePositionData.apply(null, arguments)
        }
        ,
        f._getTongueVertexCount = function() {
            return f.asm._getTongueVertexCount.apply(null, arguments)
        }
        ,
        f._getToothIndexCount = function() {
            return f.asm._getToothIndexCount.apply(null, arguments)
        }
        ,
        f._getToothIndexData = function() {
            return f.asm._getToothIndexData.apply(null, arguments)
        }
        ,
        f._getToothModelMatrix = function() {
            return f.asm._getToothModelMatrix.apply(null, arguments)
        }
        ,
        f._getToothNormalData = function() {
            return f.asm._getToothNormalData.apply(null, arguments)
        }
        ,
        f._getToothPositionData = function() {
            return f.asm._getToothPositionData.apply(null, arguments)
        }
        ,
        f._getToothVertexCount = function() {
            return f.asm._getToothVertexCount.apply(null, arguments)
        }
        ,
        f._initialize = function() {
            return f.asm._initialize.apply(null, arguments)
        }
        ,
        f._malloc = function() {
            return f.asm._malloc.apply(null, arguments)
        }
        )
          , tt = (f._setMouthAutoDrag = function() {
            return f.asm._setMouthAutoDrag.apply(null, arguments)
        }
        ,
        f._spawnSpitFromMouth = function() {
            return f.asm._spawnSpitFromMouth.apply(null, arguments)
        }
        ,
        f._startDrag = function() {
            return f.asm._startDrag.apply(null, arguments)
        }
        ,
        f._step = function() {
            return f.asm._step.apply(null, arguments)
        }
        ,
        f._stepSpit = function() {
            return f.asm._stepSpit.apply(null, arguments)
        }
        ,
        f._stopDrag = function() {
            return f.asm._stopDrag.apply(null, arguments)
        }
        ,
        f._wouldDrag = function() {
            return f.asm._wouldDrag.apply(null, arguments)
        }
        ,
        f.setThrew = function() {
            return f.asm.setThrew.apply(null, arguments)
        }
        ,
        f.stackAlloc = function() {
            return f.asm.stackAlloc.apply(null, arguments)
        }
        )
          , et = f.stackRestore = function() {
            return f.asm.stackRestore.apply(null, arguments)
        }
          , rt = f.stackSave = function() {
            return f.asm.stackSave.apply(null, arguments)
        }
        ;
        function nt(t) {
            this.name = "ExitStatus",
            this.message = "Program terminated with exit(" + t + ")",
            this.status = t
        }
        function it(t) {
            function e() {
                f.calledRun || (f.calledRun = !0,
                l || (function t() {
                    G || (G = !0,
                    O(k))
                }(),
                function e() {
                    O(H)
                }(),
                f.onRuntimeInitialized && f.onRuntimeInitialized(),
                function r() {
                    if (f.postRun)
                        for ("function" == typeof f.postRun && (f.postRun = [f.postRun]); f.postRun.length; )
                            t = f.postRun.shift(),
                            X.unshift(t);
                    var t;
                    O(X)
                }()))
            }
            t = t || f.arguments,
            0 < W || (function r() {
                if (f.preRun)
                    for ("function" == typeof f.preRun && (f.preRun = [f.preRun]); f.preRun.length; )
                        t = f.preRun.shift(),
                        V.unshift(t);
                var t;
                O(V)
            }(),
            0 < W || f.calledRun || (f.setStatus ? (f.setStatus("Running..."),
            setTimeout(function() {
                setTimeout(function() {
                    f.setStatus("")
                }, 1),
                e()
            }, 1)) : e()))
        }
        function ot(t) {
            throw f.onAbort && f.onAbort(t),
            t = t !== undefined ? (h(t),
            g(t),
            JSON.stringify(t)) : "",
            l = !0,
            "abort(" + t + "). Build with -s ASSERTIONS=1 for more info."
        }
        if (f.dynCall_ii = function() {
            return f.asm.dynCall_ii.apply(null, arguments)
        }
        ,
        f.dynCall_iii = function() {
            return f.asm.dynCall_iii.apply(null, arguments)
        }
        ,
        f.dynCall_v = function() {
            return f.asm.dynCall_v.apply(null, arguments)
        }
        ,
        f.dynCall_vi = function() {
            return f.asm.dynCall_vi.apply(null, arguments)
        }
        ,
        f.dynCall_vii = function() {
            return f.asm.dynCall_vii.apply(null, arguments)
        }
        ,
        f.dynCall_viii = function() {
            return f.asm.dynCall_viii.apply(null, arguments)
        }
        ,
        f.dynCall_viiiii = function() {
            return f.asm.dynCall_viiiii.apply(null, arguments)
        }
        ,
        f.asm = Q,
        f.ccall = x,
        f.cwrap = function Pt(t, e, r, n) {
            var i = (r = r || []).every(function(t) {
                return "number" === t
            });
            return "string" !== e && i && !n ? E(t) : function() {
                return x(t, e, r, arguments)
            }
        }
        ,
        f.then = function(t) {
            if (f.calledRun)
                t(f);
            else {
                var e = f.onRuntimeInitialized;
                f.onRuntimeInitialized = function() {
                    e && e(),
                    t(f)
                }
            }
            return f
        }
        ,
        (nt.prototype = new Error).constructor = nt,
        z = function Ct() {
            f.calledRun || it(),
            f.calledRun || (z = Ct)
        }
        ,
        f.run = it,
        f.abort = ot,
        f.preInit)
            for ("function" == typeof f.preInit && (f.preInit = [f.preInit]); 0 < f.preInit.length; )
                f.preInit.pop()();
        return f.noExitRuntime = !0,
        it(),
        t
    }
    );
    "object" == typeof exports && "object" == typeof module ? module.exports = t : "function" == typeof define && define.amd ? define([], function() {
        return t
    }) : "object" == typeof exports && (exports.MouthModule = t);
    var g = {
        mix: function(t, e, r) {
            return (1 - r) * t + r * e
        },
        clamp: function(t, e, r) {
            return Math.max(e, Math.min(r, t))
        },
        linearstep: function(t, e, r) {
            return g.clamp((r - t) / (e - t), 0, 1)
        },
        smoothstep: function(t, e, r) {
            return (r = g.clamp((r - t) / (e - t), 0, 1)) * r * (3 - 2 * r)
        },
        smootherstep: function(t, e, r) {
            return (r = g.clamp((r - t) / (e - t), 0, 1)) * r * r * (r * (6 * r - 15) + 10)
        },
        remap: function(t, e, r, n, i) {
            return g.mix(r, n, (i - t) / (e - t))
        }
    };
    function _(t) {
        this.fromValue = t,
        this.targetValue = t,
        this.tweenDuration = 1,
        this.tweenStartTime = -99999
    }
    _.prototype.change = function(t, e) {
        t !== this.targetValue && (this.fromValue = this.evaluate(),
        this.targetValue = t,
        this.tweenDuration = 1e3 * e,
        this.tweenStartTime = Date.now())
    }
    ,
    _.prototype.evaluate = function() {
        if (0 === this.tweenDuration)
            return this.targetValue;
        var t = g.linearstep(this.tweenStartTime, this.tweenStartTime + this.tweenDuration, Date.now());
        return g.mix(this.fromValue, this.targetValue, t)
    }
    ;
    var l = {
        indicator: {
            x: 0,
            y: 95,
            width: 24,
            height: 24
        },
        pixel: {
            x: 24,
            y: 118,
            width: 1,
            height: 1
        },
        prompt: {
            x: 25,
            y: 0,
            width: 223,
            height: 119
        }
    };
    function r(t, e, r) {
        this.loaded = !1;
        var n = new Image;
        n.onload = function() {
            r()
        }
        .bind(this),
        n.src = e
    }
    function n(t, e) {
        this.wgl = t,
        this.clear(),
        this.spritesImage = new r(this.wgl,"sprites.png",e)
    }
    function i(t) {
        this.wgl = t,
        this.clear()
    }
    function f(t, e) {
        this.wgl = t,
        this.lines = new i(t),
        this.promptAlpha = new _(1),
        this.notSingingTimeout = 0,
        this.scaleAlpha = new _(0),
        this.indicatorY = new _(0),
        this.spriteRenderer = new n(t,e)
    }
    n.prototype.clear = function() {
        this.positionsData = [],
        this.uvsData = [],
        this.colorsData = [],
        this.indices = [],
        this.vertexCount = 0,
        this.indicesCount = 0
    }
    ,
    n.prototype.getSprite = function(t) {
        return l[t]
    }
    ,
    n.prototype.drawSprite = function(t, e, r, n) {
        var i = l[t];
        this.positionsData.push(e),
        this.positionsData.push(r),
        this.positionsData.push(e + i.width),
        this.positionsData.push(r),
        this.positionsData.push(e + i.width),
        this.positionsData.push(r + i.height),
        this.positionsData.push(e),
        this.positionsData.push(r + i.height),
        this.uvsData.push(i.x / this.spritesImage.width),
        this.uvsData.push(i.y / this.spritesImage.height),
        this.uvsData.push((i.x + i.width) / this.spritesImage.width),
        this.uvsData.push(i.y / this.spritesImage.height),
        this.uvsData.push((i.x + i.width) / this.spritesImage.width),
        this.uvsData.push((i.y + i.height) / this.spritesImage.height),
        this.uvsData.push(i.x / this.spritesImage.width),
        this.uvsData.push((i.y + i.height) / this.spritesImage.height);
        for (var o = 0; o < 4; ++o)
            for (var a = 0; a < 4; ++a)
                this.colorsData.push(n[a]);
        var s = this.vertexCount;
        this.indices.push(s + 0),
        this.indices.push(s + 1),
        this.indices.push(s + 2),
        this.indices.push(s + 2),
        this.indices.push(s + 3),
        this.indices.push(s + 0),
        this.vertexCount += 4,
        this.indicesCount += 6
    }
    ,
    n.prototype.drawRect = function(t, e, r, n, i) {
        var o = l.pixel;
        this.positionsData.push(t),
        this.positionsData.push(e),
        this.positionsData.push(t + r),
        this.positionsData.push(e),
        this.positionsData.push(t + r),
        this.positionsData.push(e + n),
        this.positionsData.push(t),
        this.positionsData.push(e + n);
        for (var a = 0; a < 4; ++a) {
            this.uvsData.push((o.x + .5) / this.spritesImage.width),
            this.uvsData.push((o.y + .5) / this.spritesImage.height);
            for (var s = 0; s < 4; ++s)
                this.colorsData.push(i[s])
        }
        var u = this.vertexCount;
        this.indices.push(u + 0),
        this.indices.push(u + 1),
        this.indices.push(u + 2),
        this.indices.push(u + 2),
        this.indices.push(u + 3),
        this.indices.push(u + 0),
        this.vertexCount += 4,
        this.indicesCount += 6
    }
    ,
    n.prototype.commit = function() {
        var t = this.wgl;
        0 < this.vertexCount && (t.bufferData(this.positionsBuffer, t.ARRAY_BUFFER, new Float32Array(this.positionsData), t.DYNAMIC_DRAW),
        t.bufferData(this.uvsBuffer, t.ARRAY_BUFFER, new Float32Array(this.uvsData), t.DYNAMIC_DRAW),
        t.bufferData(this.colorsBuffer, t.ARRAY_BUFFER, new Float32Array(this.colorsData), t.DYNAMIC_DRAW),
        t.bufferData(this.indexBuffer, t.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indices), t.DYNAMIC_DRAW))
    }
    ,
    i.prototype.clear = function() {
        this.positionsData = [],
        this.colorsData = [],
        this.vertexCount = 0
    }
    ,
    i.prototype.addLine = function(t, e, r, n, i) {
        this.positionsData.push(t),
        this.positionsData.push(r),
        this.positionsData.push(e),
        this.positionsData.push(r);
        for (var o = 0; o < 4; ++o)
            this.colorsData.push(n[o]);
        for (o = 0; o < 4; ++o)
            this.colorsData.push(i[o]);
        this.vertexCount += 2
    }
    ,
    i.prototype.commit = function() {
        var t = this.wgl;
        t.bufferData(this.positionsBuffer, t.ARRAY_BUFFER, new Float32Array(this.positionsData), t.DYNAMIC_DRAW),
        t.bufferData(this.colorsBuffer, t.ARRAY_BUFFER, new Float32Array(this.colorsData), t.DYNAMIC_DRAW)
    }
    ,
    f.prototype.update = function(t, e, r) {
        this.wgl;
        if (this.scaleAlphas === undefined) {
            this.scaleAlphas = [],
            this.scaleGrays = [];
            for (var n = 0; n < r.getScaleLength(); ++n)
                this.scaleAlphas.push(new _(0))
        }
        r.isSinging ? (0 !== this.promptAlpha.targetValue && this.promptAlpha.change(0, .5),
        this.notSingingTimeout = 0) : (this.notSingingTimeout += t,
        2 < this.notSingingTimeout && 1 !== this.promptAlpha.targetValue && this.promptAlpha.change(1, 1)),
        r.isSinging && true ? this.scaleAlpha.change(1, .25) : this.scaleAlpha.change(0, .6);
        var i = r.isSinging && true ? r.getCurrentScaleIndex() : -1;
        for (n = 0; n < this.scaleAlphas.length; ++n)
            n === i ? this.scaleAlphas[n].change(1, r.getTimeToHarmonise()) : this.scaleAlphas[n].change(0, .15);
        if (this.spriteRenderer.clear(),
        this.lines.clear(),
        0 < this.scaleAlpha.evaluate()) {
            var o = Math.abs(-2) / 11
              , a = .035 * e.getEffectiveHeight()
              , s = e.worldToCanvasSpace([.76, 0, 0])[0];
            r.mouths[0].getMinY();
            this.indicatorY.change((-r.getCurrentScaleIndex() - .5) * o, .08);
            var u = [0, this.indicatorY.evaluate(), 0];
            this.spriteRenderer.drawSprite("indicator", s - this.spriteRenderer.getSprite("indicator").width - 5, e.worldToCanvasSpace(u)[1] - this.spriteRenderer.getSprite("indicator").height / 2, [.2, .2, .2, .4 * this.scaleAlpha.evaluate()]);
            for (n = 3; n <= 11; ++n) {
                var l = [.76, g.mix(0, -2, n / 11), 0]
                  , h = e.worldToCanvasSpace(l);
                this.lines.addLine(s, s + a, h[1], [.1, .1, .1, .6 * this.scaleAlpha.evaluate()], [.1, .1, .1, .6 * this.scaleAlpha.evaluate()])
            }
            for (n = 0; n < this.scaleAlphas.length; ++n)
                if (0 < this.scaleAlphas[n].evaluate()) {
                    var c = e.worldToCanvasSpace([0, -n * o, 0])[1]
                      , f = e.worldToCanvasSpace([0, (-n - 1) * o, 0])[1]
                      , m = (e.worldToCanvasSpace([.76, 0, 0])[0],
                    Math.pow(this.scaleAlphas[n].evaluate(), 1.4));
                    this.spriteRenderer.drawRect(s, c, a, f - c, [m, m, m, .7 * Math.pow(this.scaleAlphas[n].evaluate(), 1.5) * this.scaleAlpha.evaluate()])
                }
        }
        if (this.lines.commit(),
        0 < this.promptAlpha.evaluate()) {
            var d = e.worldToCanvasSpace([0, -.2, 0])[1] - this.spriteRenderer.getSprite("prompt").height - 10
              , p = Math.floor(e.canvas.width / 2 - this.spriteRenderer.getSprite("prompt").width / 2);
            this.spriteRenderer.drawSprite("prompt", p, d, [1, 1, 1, this.promptAlpha.evaluate()])
        }
        this.spriteRenderer.commit()
    }
    ,
    f.prototype.getScaleAlpha = function() {
        return this.scaleAlpha.evaluate()
    }
    ;
    var Ft, m = (Ft = "undefined" != typeof document && document.currentScript ? document.currentScript.src : undefined,
    function(t) {
        var e, f = void 0 !== (t = t || {}) ? t : {}, r = {};
        for (e in f)
            f.hasOwnProperty(e) && (r[e] = f[e]);
        f.arguments = [],
        f.thisProgram = "./this.program",
        f.quit = function(t, e) {
            throw e
        }
        ,
        f.preRun = [];
        var m, n, i, d = f.postRun = [];
        d = "object" == typeof window,
        m = "function" == typeof importScripts,
        n = "object" == typeof process && "function" == typeof require && !d && !m,
        i = !d && !n && !m;
        var o, a, s = "";
        function p(t) {
            return f.locateFile ? f.locateFile(t, s) : s + t
        }
        n ? (s = __dirname + "/",
        f.read = function(t, e) {
            var r;
            return o || (o = require("fs")),
            a || (a = require("path")),
            t = a.normalize(t),
            r = o.readFileSync(t),
            e ? r : r.toString()
        }
        ,
        f.readBinary = function(t) {
            var e = f.read(t, !0);
            return e.buffer || (e = new Uint8Array(e)),
            T(e.buffer),
            e
        }
        ,
        1 < process.argv.length && (f.thisProgram = process.argv[1].replace(/\\/g, "/")),
        f.arguments = process.argv.slice(2),
        process.on("uncaughtException", function(t) {
            if (!(t instanceof nt))
                throw t
        }),
        process.on("unhandledRejection", function(t, e) {
            process.exit(1)
        }),
        f.quit = function(t) {
            process.exit(t)
        }
        ,
        f.inspect = function() {
            return "[Emscripten Module object]"
        }
        ) : i ? ("undefined" != typeof read && (f.read = function(t) {
            return read(t)
        }
        ),
        f.readBinary = function(t) {
            var e;
            return "function" == typeof readbuffer ? new Uint8Array(readbuffer(t)) : (T("object" == typeof (e = read(t, "binary"))),
            e)
        }
        ,
        "undefined" != typeof scriptArgs ? f.arguments = scriptArgs : void 0 !== arguments && (f.arguments = arguments),
        "function" == typeof quit && (f.quit = function(t) {
            quit(t)
        }
        )) : (d || m) && (d ? document.currentScript && (s = document.currentScript.src) : s = self.location.href,
        Ft && (s = Ft),
        s = 0 !== s.indexOf("blob:") ? s.split("/").slice(0, -1).join("/") + "/" : "",
        f.read = function(t) {
            var e = new XMLHttpRequest;
            return e.open("GET", t, !1),
            e.send(null),
            e.responseText
        }
        ,
        m && (f.readBinary = function(t) {
            var e = new XMLHttpRequest;
            return e.open("GET", t, !1),
            e.responseType = "arraybuffer",
            e.send(null),
            new Uint8Array(e.response)
        }
        ),
        f.readAsync = function(t, e, r) {
            var n = new XMLHttpRequest;
            n.open("GET", t, !0),
            n.responseType = "arraybuffer",
            n.onload = function() {
                200 == n.status || 0 == n.status && n.response ? e(n.response) : r()
            }
            ,
            n.onerror = r,
            n.send(null)
        }
        ,
        f.setWindowTitle = function(t) {
            document.title = t
        }
        );
        var h = f.print || ("undefined" != typeof console ? console.log.bind(console) : "undefined" != typeof print ? print : null)
          , g = f.printErr || ("undefined" != typeof printErr ? printErr : "undefined" != typeof console && console.warn.bind(console) || h);
        for (e in r)
            r.hasOwnProperty(e) && (f[e] = r[e]);
        function u(t, e) {
            return e || (e = 16),
            t = Math.ceil(t / e) * e
        }
        r = undefined;
        var _ = {
            "f64-rem": function(t, e) {
                return t % e
            },
            "debugger": function() {}
        }
          , l = 0;
        function T(t, e) {
            t || ot("Assertion failed: " + e)
        }
        function E(t) {
            var e = f["_" + t];
            return T(e, "Cannot call unknown function " + t + ", make sure it is exported"),
            e
        }
        var c = {
            stackSave: function() {
                rt()
            },
            stackRestore: function() {
                et()
            },
            arrayToC: function(t) {
                var e = tt(t.length);
                return function r(t, e) {
                    y.set(t, e)
                }(t, e),
                e
            },
            stringToC: function(t) {
                var e = 0;
                if (null !== t && t !== undefined && 0 !== t) {
                    var r = 1 + (t.length << 2);
                    !function n(t, e, r) {
                        return function l(t, e, r, n) {
                            if (!(0 < n))
                                return 0;
                            for (var i = r, o = r + n - 1, a = 0; a < t.length; ++a) {
                                var s = t.charCodeAt(a);
                                if (55296 <= s && s <= 57343) {
                                    var u = t.charCodeAt(++a);
                                    s = 65536 + ((1023 & s) << 10) | 1023 & u
                                }
                                if (s <= 127) {
                                    if (o <= r)
                                        break;
                                    e[r++] = s
                                } else if (s <= 2047) {
                                    if (o <= r + 1)
                                        break;
                                    e[r++] = 192 | s >> 6,
                                    e[r++] = 128 | 63 & s
                                } else if (s <= 65535) {
                                    if (o <= r + 2)
                                        break;
                                    e[r++] = 224 | s >> 12,
                                    e[r++] = 128 | s >> 6 & 63,
                                    e[r++] = 128 | 63 & s
                                } else if (s <= 2097151) {
                                    if (o <= r + 3)
                                        break;
                                    e[r++] = 240 | s >> 18,
                                    e[r++] = 128 | s >> 12 & 63,
                                    e[r++] = 128 | s >> 6 & 63,
                                    e[r++] = 128 | 63 & s
                                } else if (s <= 67108863) {
                                    if (o <= r + 4)
                                        break;
                                    e[r++] = 248 | s >> 24,
                                    e[r++] = 128 | s >> 18 & 63,
                                    e[r++] = 128 | s >> 12 & 63,
                                    e[r++] = 128 | s >> 6 & 63,
                                    e[r++] = 128 | 63 & s
                                } else {
                                    if (o <= r + 5)
                                        break;
                                    e[r++] = 252 | s >> 30,
                                    e[r++] = 128 | s >> 24 & 63,
                                    e[r++] = 128 | s >> 18 & 63,
                                    e[r++] = 128 | s >> 12 & 63,
                                    e[r++] = 128 | s >> 6 & 63,
                                    e[r++] = 128 | 63 & s
                                }
                            }
                            return e[r] = 0,
                            r - i
                        }(t, R, e, r)
                    }(t, e = tt(r), r)
                }
                return e
            }
        }
          , v = {
            string: c.stringToC,
            array: c.arrayToC
        };
        function x(t, e, r, n, i) {
            var o = E(t)
              , a = []
              , s = 0;
            if (n)
                for (var u = 0; u < n.length; u++) {
                    var l = v[r[u]];
                    a[u] = l ? (0 === s && (s = rt()),
                    l(n[u])) : n[u]
                }
            var h = o.apply(null, a);
            return h = function c(t) {
                return "string" === e ? A(t) : "boolean" === e ? Boolean(t) : t
            }(h),
            0 !== s && et(s),
            h
        }
        function A(t, e) {
            if (0 === e || !t)
                return "";
            for (var r, n = 0, i = 0; n |= r = R[t + i >> 0],
            (0 != r || e) && (i++,
            !e || i != e); )
                ;
            e || (e = i);
            var o = "";
            if (n < 128) {
                for (var a; 0 < e; )
                    a = String.fromCharCode.apply(String, R.subarray(t, t + Math.min(e, 1024))),
                    o = o ? o + a : a,
                    t += 1024,
                    e -= 1024;
                return o
            }
            return function s(t) {
                return F(R, t)
            }(t)
        }
        var b, y, R, w, D, M, P, C, S = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : undefined;
        function F(t, e) {
            for (var r = e; t[r]; )
                ++r;
            if (16 < r - e && t.subarray && S)
                return S.decode(t.subarray(e, r));
            for (var n, i, o, a, s, u = ""; ; ) {
                if (!(n = t[e++]))
                    return u;
                if (128 & n)
                    if (i = 63 & t[e++],
                    192 != (224 & n))
                        if (o = 63 & t[e++],
                        (n = 224 == (240 & n) ? (15 & n) << 12 | i << 6 | o : (a = 63 & t[e++],
                        240 == (248 & n) ? (7 & n) << 18 | i << 12 | o << 6 | a : (s = 63 & t[e++],
                        248 == (252 & n) ? (3 & n) << 24 | i << 18 | o << 12 | a << 6 | s : (1 & n) << 30 | i << 24 | o << 18 | a << 12 | s << 6 | 63 & t[e++]))) < 65536)
                            u += String.fromCharCode(n);
                        else {
                            var l = n - 65536;
                            u += String.fromCharCode(55296 | l >> 10, 56320 | 1023 & l)
                        }
                    else
                        u += String.fromCharCode((31 & n) << 6 | i);
                else
                    u += String.fromCharCode(n)
            }
        }
        function I(t, e) {
            return 0 < t % e && (t += e - t % e),
            t
        }
        function L(t) {
            f.buffer = b = t
        }
        function B() {
            f.HEAP8 = y = new Int8Array(b),
            f.HEAP16 = new Int16Array(b),
            f.HEAP32 = w = new Int32Array(b),
            f.HEAPU8 = R = new Uint8Array(b),
            f.HEAPU16 = new Uint16Array(b),
            f.HEAPU32 = new Uint32Array(b),
            f.HEAPF32 = new Float32Array(b),
            f.HEAPF64 = new Float64Array(b)
        }
        "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : undefined,
        D = 0,
        f.reallocBuffer || (f.reallocBuffer = function(t) {
            var e;
            try {
                if (ArrayBuffer.transfer)
                    e = ArrayBuffer.transfer(b, t);
                else {
                    var r = y;
                    e = new ArrayBuffer(t),
                    new Int8Array(e).set(r)
                }
            } catch (n) {
                return !1
            }
            return !!J(e) && e
        }
        );
        try {
            Function.prototype.call.bind(Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength").get)(new ArrayBuffer(4))
        } catch (at) {}
        var N = f.TOTAL_STACK || 5242880
          , U = f.TOTAL_MEMORY || 16777216;
        function O(t) {
            for (; 0 < t.length; ) {
                var e = t.shift();
                if ("function" != typeof e) {
                    var r = e.func;
                    "number" == typeof r ? e.arg === undefined ? f.dynCall_v(r) : f.dynCall_vi(r, e.arg) : r(e.arg === undefined ? null : e.arg)
                } else
                    e()
            }
        }
        U < N && g("TOTAL_MEMORY should be larger than TOTAL_STACK, was " + U + "! (TOTAL_STACK=" + N + ")"),
        f.buffer ? b = f.buffer : (b = "object" == typeof WebAssembly && "function" == typeof WebAssembly.Memory ? (f.wasmMemory = new WebAssembly.Memory({
            initial: U / 65536
        }),
        f.wasmMemory.buffer) : new ArrayBuffer(U),
        f.buffer = b),
        B();
        var V = []
          , k = []
          , H = []
          , X = []
          , G = !1
          , W = 0
          , Y = null
          , z = null;
        f.preloadedImages = {},
        f.preloadedAudios = {};
        var j = "data:application/octet-stream;base64,";
        function q(t) {
            return String.prototype.startsWith ? t.startsWith(j) : 0 === t.indexOf(j)
        }
        !function st() {
            var t = "choirmodule.wast"
              , s = "choirmodule.wasm"
              , e = "choirmodule.temp.asm.js";
            q(t) || (t = p(t)),
            q(s) || (s = p(s)),
            q(e) || (e = p(e));
            var u = {
                global: null,
                env: null,
                asm2wasm: _,
                parent: f
            }
              , l = null;
            function h() {
                try {
                    if (f.wasmBinary)
                        return new Uint8Array(f.wasmBinary);
                    if (f.readBinary)
                        return f.readBinary(s);
                    throw "both async and sync fetching of the wasm failed"
                } catch (g) {
                    ot(g)
                }
            }
            function c(t, e, r) {
                if ("object" != typeof WebAssembly)
                    return g("no native wasm support detected"),
                    !1;
                if (!(f.wasmMemory instanceof WebAssembly.Memory))
                    return g("no native wasm Memory in use"),
                    !1;
                function n(t, e) {
                    (l = t.exports).memory && function n(t) {
                        var e = f.buffer;
                        t.byteLength < e.byteLength && g("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");
                        var r = new Int8Array(e);
                        new Int8Array(t).set(r),
                        L(t),
                        B()
                    }(l.memory),
                    f.asm = l,
                    f.usingWasm = !0,
                    function r(t) {
                        if (W--,
                        f.monitorRunDependencies && f.monitorRunDependencies(W),
                        0 == W && (null !== Y && (clearInterval(Y),
                        Y = null),
                        z)) {
                            var e = z;
                            z = null,
                            e()
                        }
                    }()
                }
                if (e.memory = f.wasmMemory,
                u.global = {
                    NaN: NaN,
                    Infinity: Infinity
                },
                u["global.Math"] = Math,
                u.env = e,
                function a(t) {
                    W++,
                    f.monitorRunDependencies && f.monitorRunDependencies(W)
                }(),
                f.instantiateWasm)
                    try {
                        return f.instantiateWasm(u, n)
                    } catch (at) {
                        return g("Module.instantiateWasm callback failed with error: " + at),
                        !1
                    }
                function i(t) {
                    n(t.instance, t.module)
                }
                function o(t) {
                    (function e() {
                        return f.wasmBinary || !d && !m || "function" != typeof fetch ? new Promise(function(t, e) {
                            t(h())
                        }
                        ) : fetch(s, {
                            credentials: "same-origin"
                        }).then(function(t) {
                            if (!t.ok)
                                throw "failed to load wasm binary file at '" + s + "'";
                            return t.arrayBuffer()
                        })["catch"](function() {
                            return h()
                        })
                    }
                    )().then(function(t) {
                        return WebAssembly.instantiate(t, u)
                    }).then(t)["catch"](function(t) {
                        g("failed to asynchronously prepare wasm: " + t),
                        ot(t)
                    })
                }
                return f.wasmBinary || "function" != typeof WebAssembly.instantiateStreaming || q(s) || "function" != typeof fetch ? o(i) : WebAssembly.instantiateStreaming(fetch(s, {
                    credentials: "same-origin"
                }), u).then(i)["catch"](function(t) {
                    g("wasm streaming compile failed: " + t),
                    g("falling back to ArrayBuffer instantiation"),
                    o(i)
                }),
                {}
            }
            f.asmPreload = f.asm,
            f.reallocBuffer,
            f.reallocBuffer = function(t) {
                return function(t) {
                    t = I(t, f.usingWasm ? 65536 : 16777216);
                    var e = f.buffer.byteLength;
                    if (f.usingWasm)
                        try {
                            return -1 !== f.wasmMemory.grow((t - e) / 65536) ? f.buffer = f.wasmMemory.buffer : null
                        } catch (at) {
                            return null
                        }
                }(t)
            }
            ,
            f.asm = function(t, e, r) {
                if (!(e = function a(t) {
                    return t
                }(e)).table) {
                    var n = f.wasmTableSize;
                    n === undefined && (n = 1024);
                    var i = f.wasmMaxTableSize;
                    "object" == typeof WebAssembly && "function" == typeof WebAssembly.Table ? i !== undefined ? e.table = new WebAssembly.Table({
                        initial: n,
                        maximum: i,
                        element: "anyfunc"
                    }) : e.table = new WebAssembly.Table({
                        initial: n,
                        element: "anyfunc"
                    }) : e.table = new Array(n),
                    f.wasmTable = e.table
                }
                var o;
                return e.memoryBase || (e.memoryBase = f.STATIC_BASE),
                e.tableBase || (e.tableBase = 0),
                T(o = c(0, e), "no binaryen method succeeded."),
                o
            }
        }(),
        D = 1084080,
        k.push(),
        f.STATIC_BASE = 1024,
        f.STATIC_BUMP = 1083056,
        D += 16;
        var K = {
            varargs: 0,
            get: function(t) {
                return K.varargs += 4,
                w[K.varargs - 4 >> 2]
            },
            getStr: function() {
                return A(K.get())
            },
            get64: function() {
                var t = K.get()
                  , e = K.get();
                return T(0 <= t ? 0 === e : -1 === e),
                t
            },
            getZero: function() {
                T(0 === K.get())
            }
        };
        function Z(t, e) {
            throw f.setThrew(t, e || 1),
            "longjmp"
        }
        C = function ut(t) {
            var e = D;
            return D = D + t + 15 & -16,
            e
        }(4),
        P = u((M = u(D)) + N),
        w[C >> 2] = P,
        f.wasmTableSize = 4254,
        f.wasmMaxTableSize = 4254,
        f.asmGlobalArg = {},
        f.asmLibraryArg = {
            abort: ot,
            enlargeMemory: function lt() {
                var t = f.usingWasm ? 65536 : 16777216
                  , e = 2147483648 - t;
                if (w[C >> 2] > e)
                    return !1;
                var r = U;
                for (U = Math.max(U, 16777216); U < w[C >> 2]; )
                    U = U <= 536870912 ? I(2 * U, t) : Math.min(I((3 * U + 2147483648) / 4, t), e);
                var n = f.reallocBuffer(U);
                return n && n.byteLength == U ? (L(n),
                B(),
                !0) : (U = r,
                !1)
            },
            getTotalMemory: function ht() {
                return U
            },
            abortOnCannotGrowMemory: function ct() {
                ot("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value " + U + ", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")
            },
            invoke_ii: function ft(t, e) {
                var r = rt();
                try {
                    return f.dynCall_ii(t, e)
                } catch (at) {
                    if (et(r),
                    "number" != typeof at && "longjmp" !== at)
                        throw at;
                    f.setThrew(1, 0)
                }
            },
            invoke_iii: function mt(t, e, r) {
                var n = rt();
                try {
                    return f.dynCall_iii(t, e, r)
                } catch (at) {
                    if (et(n),
                    "number" != typeof at && "longjmp" !== at)
                        throw at;
                    f.setThrew(1, 0)
                }
            },
            invoke_vi: function dt(t, e) {
                var r = rt();
                try {
                    f.dynCall_vi(t, e)
                } catch (at) {
                    if (et(r),
                    "number" != typeof at && "longjmp" !== at)
                        throw at;
                    f.setThrew(1, 0)
                }
            },
            invoke_vii: function pt(t, e, r) {
                var n = rt();
                try {
                    f.dynCall_vii(t, e, r)
                } catch (at) {
                    if (et(n),
                    "number" != typeof at && "longjmp" !== at)
                        throw at;
                    f.setThrew(1, 0)
                }
            },
            invoke_viii: function gt(t, e, r, n) {
                var i = rt();
                try {
                    f.dynCall_viii(t, e, r, n)
                } catch (at) {
                    if (et(i),
                    "number" != typeof at && "longjmp" !== at)
                        throw at;
                    f.setThrew(1, 0)
                }
            },
            invoke_viiiii: function _t(t, e, r, n, i, o) {
                var a = rt();
                try {
                    f.dynCall_viiiii(t, e, r, n, i, o)
                } catch (at) {
                    if (et(a),
                    "number" != typeof at && "longjmp" !== at)
                        throw at;
                    f.setThrew(1, 0)
                }
            },
            ___cxa_allocate_exception: function Tt(t) {
                return $(t)
            },
            ___cxa_pure_virtual: function Et() {
                throw l = !0,
                "Pure virtual function called!"
            },
            ___cxa_throw: function vt(t, e, r) {
                throw t + " - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch."
            },
            ___setErrNo: function xt(t) {
                return f.___errno_location && (w[f.___errno_location() >> 2] = t),
                t
            },
            ___syscall140: function At(t, e) {
                K.varargs = e;
                try {
                    var r = K.getStreamFromFD()
                      , n = (K.get(),
                    K.get())
                      , i = K.get()
                      , o = K.get()
                      , a = n;
                    return FS.llseek(r, a, o),
                    w[i >> 2] = r.position,
                    r.getdents && 0 === a && 0 === o && (r.getdents = null),
                    0
                } catch (at) {
                    return "undefined" != typeof FS && at instanceof FS.ErrnoError || ot(at),
                    -at.errno
                }
            },
            ___syscall146: function bt(t, e) {
                K.varargs = e;
                try {
                    var r = K.get()
                      , n = K.get()
                      , i = K.get()
                      , o = 0;
                    bt.buffers || (bt.buffers = [null, [], []],
                    bt.printChar = function(t, e) {
                        var r = bt.buffers[t];
                        T(r),
                        0 === e || 10 === e ? ((1 === t ? h : g)(F(r, 0)),
                        r.length = 0) : r.push(e)
                    }
                    );
                    for (var a = 0; a < i; a++) {
                        for (var s = w[n + 8 * a >> 2], u = w[n + (8 * a + 4) >> 2], l = 0; l < u; l++)
                            bt.printChar(r, R[s + l]);
                        o += u
                    }
                    return o
                } catch (at) {
                    return "undefined" != typeof FS && at instanceof FS.ErrnoError || ot(at),
                    -at.errno
                }
            },
            ___syscall54: function yt(t, e) {
                K.varargs = e;
                try {
                    return 0
                } catch (at) {
                    return "undefined" != typeof FS && at instanceof FS.ErrnoError || ot(at),
                    -at.errno
                }
            },
            ___syscall6: function Rt(t, e) {
                K.varargs = e;
                try {
                    var r = K.getStreamFromFD();
                    return FS.close(r),
                    0
                } catch (at) {
                    return "undefined" != typeof FS && at instanceof FS.ErrnoError || ot(at),
                    -at.errno
                }
            },
            _abort: function wt() {
                f.abort()
            },
            _emscripten_longjmp: function Dt(t, e) {
                Z(t, e)
            },
            _emscripten_memcpy_big: function Mt(t, e, r) {
                return R.set(R.subarray(e, e + r), t),
                t
            },
            _llvm_trap: function Pt() {
                ot("trap!")
            },
            _longjmp: Z,
            DYNAMICTOP_PTR: C,
            STACKTOP: M
        };
        var Q = f.asm(f.asmGlobalArg, f.asmLibraryArg, b);
        f.asm = Q,
        f.___errno_location = function() {
            return f.asm.___errno_location.apply(null, arguments)
        }
        ,
        f._createMouth = function() {
            return f.asm._createMouth.apply(null, arguments)
        }
        ;
        var J = f._emscripten_replace_memory = function() {
            return f.asm._emscripten_replace_memory.apply(null, arguments)
        }
          , $ = (f._getBasePositionData = function() {
            return f.asm._getBasePositionData.apply(null, arguments)
        }
        ,
        f._getBaseVertexCount = function() {
            return f.asm._getBaseVertexCount.apply(null, arguments)
        }
        ,
        f._getBuffer = function() {
            return f.asm._getBuffer.apply(null, arguments)
        }
        ,
        f._getDropletCount = function() {
            return f.asm._getDropletCount.apply(null, arguments)
        }
        ,
        f._getDropletPositionData = function() {
            return f.asm._getDropletPositionData.apply(null, arguments)
        }
        ,
        f._getEmbeddingCoordinatesData = function() {
            return f.asm._getEmbeddingCoordinatesData.apply(null, arguments)
        }
        ,
        f._getEmbeddingCount = function() {
            return f.asm._getEmbeddingCount.apply(null, arguments)
        }
        ,
        f._getEmbeddingIndexData = function() {
            return f.asm._getEmbeddingIndexData.apply(null, arguments)
        }
        ,
        f._getEmbeddingNeighboursData = function() {
            return f.asm._getEmbeddingNeighboursData.apply(null, arguments)
        }
        ,
        f._getEmbeddingOppositesData = function() {
            return f.asm._getEmbeddingOppositesData.apply(null, arguments)
        }
        ,
        f._getEmbeddingRenderingIndexCount = function() {
            return f.asm._getEmbeddingRenderingIndexCount.apply(null, arguments)
        }
        ,
        f._getEmbeddingRenderingIndexData = function() {
            return f.asm._getEmbeddingRenderingIndexData.apply(null, arguments)
        }
        ,
        f._getEmbeddingWrinkleStrengthsData = function() {
            return f.asm._getEmbeddingWrinkleStrengthsData.apply(null, arguments)
        }
        ,
        f._getEyeIndexCount = function() {
            return f.asm._getEyeIndexCount.apply(null, arguments)
        }
        ,
        f._getEyeIndexData = function() {
            return f.asm._getEyeIndexData.apply(null, arguments)
        }
        ,
        f._getEyeModelMatrix = function() {
            return f.asm._getEyeModelMatrix.apply(null, arguments)
        }
        ,
        f._getEyeNormalData = function() {
            return f.asm._getEyeNormalData.apply(null, arguments)
        }
        ,
        f._getEyeNormalMatrix = function() {
            return f.asm._getEyeNormalMatrix.apply(null, arguments)
        }
        ,
        f._getEyePosition = function() {
            return f.asm._getEyePosition.apply(null, arguments)
        }
        ,
        f._getEyePositionData = function() {
            return f.asm._getEyePositionData.apply(null, arguments)
        }
        ,
        f._getEyeVertexCount = function() {
            return f.asm._getEyeVertexCount.apply(null, arguments)
        }
        ,
        f._getGurgliness = function() {
            return f.asm._getGurgliness.apply(null, arguments)
        }
        ,
        f._getInsideIndexCount = function() {
            return f.asm._getInsideIndexCount.apply(null, arguments)
        }
        ,
        f._getInsideIndexData = function() {
            return f.asm._getInsideIndexData.apply(null, arguments)
        }
        ,
        f._getInsideNormalData = function() {
            return f.asm._getInsideNormalData.apply(null, arguments)
        }
        ,
        f._getInsidePositionData = function() {
            return f.asm._getInsidePositionData.apply(null, arguments)
        }
        ,
        f._getInsideVertexCount = function() {
            return f.asm._getInsideVertexCount.apply(null, arguments)
        }
        ,
        f._getLoudness = function() {
            return f.asm._getLoudness.apply(null, arguments)
        }
        ,
        f._getMaxSpitCount = function() {
            return f.asm._getMaxSpitCount.apply(null, arguments)
        }
        ,
        f._getMouthArea = function() {
            return f.asm._getMouthArea.apply(null, arguments)
        }
        ,
        f._getMouthAverageDistance = function() {
            return f.asm._getMouthAverageDistance.apply(null, arguments)
        }
        ,
        f._getMouthClosedUnclosedRatio = function() {
            return f.asm._getMouthClosedUnclosedRatio.apply(null, arguments)
        }
        ,
        f._getMouthDistanceCentroid = function() {
            return f.asm._getMouthDistanceCentroid.apply(null, arguments)
        }
        ,
        f._getMouthDragX = function() {
            return f.asm._getMouthDragX.apply(null, arguments)
        }
        ,
        f._getMouthIndexCount = function() {
            return f.asm._getMouthIndexCount.apply(null, arguments)
        }
        ,
        f._getMouthIndexData = function() {
            return f.asm._getMouthIndexData.apply(null, arguments)
        }
        ,
        f._getMouthIsDragging = function() {
            return f.asm._getMouthIsDragging.apply(null, arguments)
        }
        ,
        f._getMouthMaxStretch = function() {
            return f.asm._getMouthMaxStretch.apply(null, arguments)
        }
        ,
        f._getMouthMaxStretchPosition = function() {
            return f.asm._getMouthMaxStretchPosition.apply(null, arguments)
        }
        ,
        f._getMouthMinY = function() {
            return f.asm._getMouthMinY.apply(null, arguments)
        }
        ,
        f._getMouthNormalData = function() {
            return f.asm._getMouthNormalData.apply(null, arguments)
        }
        ,
        f._getMouthPositionData = function() {
            return f.asm._getMouthPositionData.apply(null, arguments)
        }
        ,
        f._getMouthVertexCount = function() {
            return f.asm._getMouthVertexCount.apply(null, arguments)
        }
        ,
        f._getOpeningCenter = function() {
            return f.asm._getOpeningCenter.apply(null, arguments)
        }
        ,
        f._getOpeningIndexCount = function() {
            return f.asm._getOpeningIndexCount.apply(null, arguments)
        }
        ,
        f._getOpeningIndexData = function() {
            return f.asm._getOpeningIndexData.apply(null, arguments)
        }
        ,
        f._getOpeningPositionData = function() {
            return f.asm._getOpeningPositionData.apply(null, arguments)
        }
        ,
        f._getOpeningVertexCount = function() {
            return f.asm._getOpeningVertexCount.apply(null, arguments)
        }
        ,
        f._getRMS = function() {
            return f.asm._getRMS.apply(null, arguments)
        }
        ,
        f._getSpitCount = function() {
            return f.asm._getSpitCount.apply(null, arguments)
        }
        ,
        f._getSpitProjectionViewMatrix = function() {
            return f.asm._getSpitProjectionViewMatrix.apply(null, arguments)
        }
        ,
        f._getSpitRenderingData = function() {
            return f.asm._getSpitRenderingData.apply(null, arguments)
        }
        ,
        f._getTeethCount = function() {
            return f.asm._getTeethCount.apply(null, arguments)
        }
        ,
        f._getTongueIndexCount = function() {
            return f.asm._getTongueIndexCount.apply(null, arguments)
        }
        ,
        f._getTongueIndexData = function() {
            return f.asm._getTongueIndexData.apply(null, arguments)
        }
        ,
        f._getTongueNormalData = function() {
            return f.asm._getTongueNormalData.apply(null, arguments)
        }
        ,
        f._getTonguePositionData = function() {
            return f.asm._getTonguePositionData.apply(null, arguments)
        }
        ,
        f._getTongueVertexCount = function() {
            return f.asm._getTongueVertexCount.apply(null, arguments)
        }
        ,
        f._getToothIndexCount = function() {
            return f.asm._getToothIndexCount.apply(null, arguments)
        }
        ,
        f._getToothIndexData = function() {
            return f.asm._getToothIndexData.apply(null, arguments)
        }
        ,
        f._getToothModelMatrix = function() {
            return f.asm._getToothModelMatrix.apply(null, arguments)
        }
        ,
        f._getToothNormalData = function() {
            return f.asm._getToothNormalData.apply(null, arguments)
        }
        ,
        f._getToothPositionData = function() {
            return f.asm._getToothPositionData.apply(null, arguments)
        }
        ,
        f._getToothVertexCount = function() {
            return f.asm._getToothVertexCount.apply(null, arguments)
        }
        ,
        f._getTotalOutput = function() {
            return f.asm._getTotalOutput.apply(null, arguments)
        }
        ,
        f._getVibratoAmplitude = function() {
            return f.asm._getVibratoAmplitude.apply(null, arguments)
        }
        ,
        f._getVibratoFrequency = function() {
            return f.asm._getVibratoFrequency.apply(null, arguments)
        }
        ,
        f._hash = function() {
            return f.asm._hash.apply(null, arguments)
        }
        ,
        f._initialize = function() {
            return f.asm._initialize.apply(null, arguments)
        }
        ,
        f._initializeAudio = function() {
            return f.asm._initializeAudio.apply(null, arguments)
        }
        ,
        f._malloc = function() {
            return f.asm._malloc.apply(null, arguments)
        }
        )
          , tt = (f._process = function() {
            return f.asm._process.apply(null, arguments)
        }
        ,
        f._sendMessage = function() {
            return f.asm._sendMessage.apply(null, arguments)
        }
        ,
        f._setMouthAutoDrag = function() {
            return f.asm._setMouthAutoDrag.apply(null, arguments)
        }
        ,
        f._spawnSpitFromMouth = function() {
            return f.asm._spawnSpitFromMouth.apply(null, arguments)
        }
        ,
        f._startDrag = function() {
            return f.asm._startDrag.apply(null, arguments)
        }
        ,
        f._step = function() {
            return f.asm._step.apply(null, arguments)
        }
        ,
        f._stepSpit = function() {
            return f.asm._stepSpit.apply(null, arguments)
        }
        ,
        f._stopDrag = function() {
            return f.asm._stopDrag.apply(null, arguments)
        }
        ,
        f._wouldDrag = function() {
            return f.asm._wouldDrag.apply(null, arguments)
        }
        ,
        f.setThrew = function() {
            return f.asm.setThrew.apply(null, arguments)
        }
        ,
        f.stackAlloc = function() {
            return f.asm.stackAlloc.apply(null, arguments)
        }
        )
          , et = f.stackRestore = function() {
            return f.asm.stackRestore.apply(null, arguments)
        }
          , rt = f.stackSave = function() {
            return f.asm.stackSave.apply(null, arguments)
        }
        ;
        function nt(t) {
            this.name = "ExitStatus",
            this.message = "Program terminated with exit(" + t + ")",
            this.status = t
        }
        function it(t) {
            function e() {
                f.calledRun || (f.calledRun = !0,
                l || (function t() {
                    G || (G = !0,
                    O(k))
                }(),
                function e() {
                    O(H)
                }(),
                f.onRuntimeInitialized && f.onRuntimeInitialized(),
                function r() {
                    if (f.postRun)
                        for ("function" == typeof f.postRun && (f.postRun = [f.postRun]); f.postRun.length; )
                            t = f.postRun.shift(),
                            X.unshift(t);
                    var t;
                    O(X)
                }()))
            }
            t = t || f.arguments,
            0 < W || (function r() {
                if (f.preRun)
                    for ("function" == typeof f.preRun && (f.preRun = [f.preRun]); f.preRun.length; )
                        t = f.preRun.shift(),
                        V.unshift(t);
                var t;
                O(V)
            }(),
            0 < W || f.calledRun || (f.setStatus ? (f.setStatus("Running..."),
            setTimeout(function() {
                setTimeout(function() {
                    f.setStatus("")
                }, 1),
                e()
            }, 1)) : e()))
        }
        function ot(t) {
            throw f.onAbort && f.onAbort(t),
            t = t !== undefined ? (h(t),
            g(t),
            JSON.stringify(t)) : "",
            l = !0,
            "abort(" + t + "). Build with -s ASSERTIONS=1 for more info."
        }
        if (f.dynCall_ii = function() {
            return f.asm.dynCall_ii.apply(null, arguments)
        }
        ,
        f.dynCall_iii = function() {
            return f.asm.dynCall_iii.apply(null, arguments)
        }
        ,
        f.dynCall_v = function() {
            return f.asm.dynCall_v.apply(null, arguments)
        }
        ,
        f.dynCall_vi = function() {
            return f.asm.dynCall_vi.apply(null, arguments)
        }
        ,
        f.dynCall_vii = function() {
            return f.asm.dynCall_vii.apply(null, arguments)
        }
        ,
        f.dynCall_viii = function() {
            return f.asm.dynCall_viii.apply(null, arguments)
        }
        ,
        f.dynCall_viiiii = function() {
            return f.asm.dynCall_viiiii.apply(null, arguments)
        }
        ,
        f.asm = Q,
        f.ccall = x,
        f.cwrap = function Ct(t, e, r, n) {
            var i = (r = r || []).every(function(t) {
                return "number" === t
            });
            return "string" !== e && i && !n ? E(t) : function() {
                return x(t, e, r, arguments)
            }
        }
        ,
        f.then = function(t) {
            if (f.calledRun)
                t(f);
            else {
                var e = f.onRuntimeInitialized;
                f.onRuntimeInitialized = function() {
                    e && e(),
                    t(f)
                }
            }
            return f
        }
        ,
        (nt.prototype = new Error).constructor = nt,
        z = function St() {
            f.calledRun || it(),
            f.calledRun || (z = St)
        }
        ,
        f.run = it,
        f.abort = ot,
        f.preInit)
            for ("function" == typeof f.preInit && (f.preInit = [f.preInit]); 0 < f.preInit.length; )
                f.preInit.pop()();
        return f.noExitRuntime = !0,
        it(),
        t
    }
    );
    function d(t, e, r, n, i) {
        for (var o = [], a = 0; a < n.length; ++a)
            a < i.length ? o.push(i[a]) : o.push(null);
        var s = t.cwrap(e, r, n);
        return function() {
            for (var t = i.length; t < n.length; ++t)
                o[t] = arguments[t - i.length];
            return s.apply(null, o)
        }
    }
    function p(t) {
        for (var e = 0, r = 0; r < t.length; ++r)
            1 === t[r] && (e |= 1 << r);
        return e
    }
    function o(t, e, r) {
        this.name = t,
        this.value = e,
        this.delay = r
    }
    function a(t) {
        this.array = [],
        this.count = 0
    }
    function T(t) {
        this.hash = t.cwrap("hash", "number", ["string"]),
        this.hashes = {}
    }
    function s(t, e, r, n, i) {
        this.hasher = t,
        this.lastParameterValuesSent = {},
        this.parametersToSendThisProcess = new a,
        this.sendParameter = e,
        this.getTotalOutput = r,
        this.parametersLeaveInSilence = n,
        this.parametersWillCauseNoise = i
    }
    function E(t, e, r) {
        s.call(this, t, e, r, function(t) {
            return t.hasOwnProperty("open_ratio") && t.open_ratio <= 0
        }, function(t) {
            for (var e = 0; e < t.count; ++e)
                if ("open_ratio" === t.get(e).name && 0 < t.get(e).value)
                    return !0;
            return !1
        })
    }
    function v(t, e, r) {
        s.call(this, t, e, r, function(t) {
            return t.hasOwnProperty("open_ratio") && (t.open_ratio <= 0 || 1 <= t.open_ratio)
        }, function(t) {
            for (var e = 0; e < t.count; ++e)
                if ("open_ratio" === t.get(e).name && 0 < t.get(e).value && t.get(e).value < 1)
                    return !0;
            return !1
        })
    }

    function HarmonizeNeuralNetwork(n) {
        this.onNotesCallbacks = [];
        this.worker = new Worker("networker.js");
        this.worker.onmessage = function(t) {
            var e = t.data;
            if ("loaded" === e.type)
                n();
            else if ("notes" === e.type)
                for (var r = 0; r < this.onNotesCallbacks.length; ++r)
                    this.onNotesCallbacks[r](e.data)
        }
        .bind(this)
    }

    "object" == typeof exports && "object" == typeof module ? module.exports = m : "function" == typeof define && define.amd ? define([], function() {
        return m
    }) : "object" == typeof exports && (exports.ChoirModule = m),
    a.prototype.get = function(t) {
        return this.array[t]
    }
    ,
    a.prototype.emplace = function(t, e, r) {
        this.count < this.array.length ? (this.array[this.count].name = t,
        this.array[this.count].value = e,
        this.array[this.count].delay = r) : this.array.push(new o(t,e,r)),
        this.count += 1
    }
    ,
    a.prototype.clear = function() {
        this.count = 0
    }
    ,
    T.prototype.addHash = function(t) {
        var e = this.hash(t);
        return this.hashes[t] = e
    }
    ,
    T.prototype.getHash = function(t) {
        return this.hashes[t] || this.addHash(t)
    }
    ,
    s.prototype.setParameter = function(t, e, r) {
        this.parametersToSendThisProcess.emplace(t, e, r)
    }
    ,
    s.prototype.step = function(t) {
        var e = !0;
        if (this.getTotalOutput() < .1 && this.parametersLeaveInSilence(this.lastParameterValuesSent) && (e = !1),
        this.parametersWillCauseNoise(this.parametersToSendThisProcess) && (e = !0),
        e || t)
            for (var r = 0; r < this.parametersToSendThisProcess.count; ++r) {
                var n = this.parametersToSendThisProcess.get(r);
                this.sendParameter(this.hasher.getHash(n.name), n.value, n.delay),
                this.lastParameterValuesSent[n.name] = n.value
            }
        return this.parametersToSendThisProcess.clear(),
        e
    }
    ,
    (E.prototype = Object.create(s.prototype)).constructor = s,
    (v.prototype = Object.create(s.prototype)).constructor = s;

    HarmonizeNeuralNetwork.prototype.addOnNotesCallback = function(t) {
        this.onNotesCallbacks.push(t)
    }
    ,
    HarmonizeNeuralNetwork.prototype.harmonize = function(t) {
        this.worker.postMessage(t)
    }
    ;
    var u = function(t, e, r) {
        return Math.max(e, Math.min(r, t))
    }
      , h = function(t, e) {
        var r = e.getBoundingClientRect();
        return {
            x: t.clientX - r.left,
            y: t.clientY - r.top
        }
    };
    function b(t, e, r, n, i, o, a, s) {
        this.module = t,
        this.wgl = e,
        this.dimension = r,
        this.getPositionData = n,
        this.getNormalData = i,
        this.getVertexCount = o,
        this.getIndices = a,
        this.getIndexCount = s,
        this.indices = this.module.HEAPU16.subarray(this.getIndices() >> 1, (this.getIndices() >> 1) + this.getIndexCount()),
        this.vertices = this.module.HEAPF32.subarray(this.getPositionData() >> 2, (this.getPositionData() >> 2) + this.getIndexCount() * this.dimension),
        this.positionsBuffer = e.buildBuffer(e.ARRAY_BUFFER, new Float32Array(this.vertices), e.DYNAMIC_DRAW),
        this.getNormalData && (this.normals = this.module.HEAPF32.subarray(this.getNormalData() >> 2, (this.getNormalData() >> 2) + this.getIndexCount() * this.dimension),
        this.normalsBuffer = e.buildBuffer(e.ARRAY_BUFFER, new Float32Array(this.normals), e.DYNAMIC_DRAW)),
        this.indexBuffer = e.buildBuffer(e.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indices), e.STATIC_DRAW),
        this.indicesCount = this.indices.length
    }
    function y(t, e, r) {
        b.call(this, t, e, 3, d(t, "getMouthPositionData", "number", ["number"], [r]), d(t, "getMouthNormalData", "number", ["number"], [r]), d(t, "getMouthVertexCount", "number", ["number"], [r]), d(t, "getMouthIndexData", "number", ["number"], [r]), d(t, "getMouthIndexCount", "number", ["number"], [r]))
    }
    b.prototype.update = function() {
        var t = this.wgl;
        t.bufferData(this.positionsBuffer, t.ARRAY_BUFFER, this.vertices, t.DYNAMIC_DRAW),
        this.getNormalData && t.bufferData(this.normalsBuffer, t.ARRAY_BUFFER, this.normals, t.DYNAMIC_DRAW)
    }
    ,
    (y.prototype = Object.create(b.prototype)).constructor = b;
    var D = {
        "absolutecopy.frag": "precision highp float;\r\n\r\nvarying vec2 v_coordinates;\r\n\r\nuniform sampler2D u_texture;\r\nuniform vec2 u_resolution;\r\n\r\nvoid main () {\r\n    gl_FragColor = texture2D(u_texture, gl_FragCoord.xy / u_resolution);\r\n}\r\n",
        "attachmentconstraint.frag": "precision highp float;\r\n\r\nvarying vec2 v_coordinates;\r\n\r\nuniform vec2 u_resolution;\r\nuniform sampler2D u_positionsTexture;\r\nuniform sampler2D u_attachmentPositionsTexture;\r\nuniform sampler2D u_strengthsTexture;\r\n\r\nvoid main () {\r\n    vec2 coordinates = gl_FragCoord.xy / u_resolution; \r\n\r\n    vec3 position = texture2D(u_positionsTexture, coordinates).rgb;\r\n    vec3 attachmentPosition = texture2D(u_attachmentPositionsTexture, coordinates).rgb;\r\n    float strength = texture2D(u_strengthsTexture, coordinates).r;\r\n\r\n    float RADIUS = 0.005 * strength;\r\n\r\n    float dist = distance(position, attachmentPosition);\r\n\r\n    if (dist > RADIUS) {\r\n        position = position + ((dist - RADIUS) * (attachmentPosition - position) / dist);\r\n    }\r\n\r\n    gl_FragColor = vec4(position, 0.0);\r\n}\r\n",
        "background.frag": "precision highp float;\r\n\r\nvarying vec2 v_position;\r\n\r\nuniform sampler2D u_texture;\r\n\r\nuniform vec2 u_scale;\r\nuniform float u_boost;\r\n\r\nvec3 hsv2rgb(vec3 c) {\r\n    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\r\n    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\r\n    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\r\n}\r\n\r\nfloat powCos(float x, float exponent) {\r\n    float value = cos(x);\r\n    return pow(abs(value), exponent) * sign(value);\r\n}\r\n\r\nvoid main () {\r\n    vec4 sample = texture2D(u_texture, v_position * 0.5 + 0.5);\r\n\r\n    float phase = sample.r;\r\n    float intensity = pow(sample.g, 1.4);\r\n\r\n    float waveStrength = powCos(phase * 3.14159265 * 2.0, mix(1.0, 0.7, intensity));\r\n\r\n    waveStrength *= sample.b * pow(sample.a, 2.0);\r\n\r\n    vec3 direction = normalize(vec3(\r\n        v_position * u_scale,\r\n        -1.0\r\n    ));\r\n\r\n    direction.z += waveStrength * 0.155 * mix(1.0, 8.0, intensity);\r\n    direction = normalize(direction);\r\n\r\n    float factor = 1.0 - pow(max(-direction.z, 0.0), 0.4 + u_boost * 1.0);\r\n\r\n    vec3 baseColor = hsv2rgb(vec3(\r\n        fract(0.6 + sample.g * 0.4),\r\n        mix(0.3, 0.5, intensity), \r\n        mix(0.6, 0.8, intensity)));\r\n\r\n    vec3 color = max(baseColor - factor, vec3(0.0, 0.0, 0.0));\r\n\r\n    gl_FragColor = vec4(color, 1.0);\r\n}\r\n",
        "background.vert": "precision highp float;\r\n\r\nattribute vec2 a_position;\r\n\r\nvarying vec2 v_position;\r\n\r\nvoid main () {\r\n\tv_position = a_position;\r\n    gl_Position = vec4(a_position, 0.999, 1.0);\r\n}\r\n",
        "composite.frag": "precision highp float;\r\n\r\nvarying vec2 v_coordinates;\r\n\r\nuniform sampler2D u_colorTexture;\r\nuniform sampler2D u_colorTexture2;\r\n\r\nuniform vec4 u_fadeFromColor;\r\nuniform float u_fadeFraction;\r\n\r\nvoid main () {\r\n    vec4 base = texture2D(u_colorTexture, v_coordinates);\r\n    vec4 overlay = texture2D(u_colorTexture2, v_coordinates);\r\n\r\n    base.rgb = mix(base.rgb, overlay.rgb, overlay.a);\r\n\r\n    gl_FragColor = mix(u_fadeFromColor, vec4(base.rgb, 1.0), u_fadeFraction);\r\n}\r\n",
        "computeattachmentpositions.frag": "//this shader computes the attachment location for each wrinkle mesh point\r\n\r\nprecision highp float;\r\n\r\nvarying vec2 v_coordinates;\r\n\r\nuniform sampler2D u_basePositionsTexture;\r\nuniform vec2 u_baseTextureResolution;\r\n\r\nuniform sampler2D u_embeddingIndicesTexture;\r\nuniform sampler2D u_embeddingCoordinatesTexture;\r\n\r\n//use slight offsets to compensate for floating point inaccuracy\r\nvec2 getBaseTextureCoordinates (float index) {\r\n    return (vec2(floor(mod((index + 0.5), u_baseTextureResolution.x)), floor((index + 0.5) / u_baseTextureResolution.x)) + 0.5) / u_baseTextureResolution;\r\n}\r\n\r\nvoid main () {\r\n    vec3 indices = texture2D(u_embeddingIndicesTexture, v_coordinates).rgb;\r\n    vec4 embeddingCoordinates = texture2D(u_embeddingCoordinatesTexture, v_coordinates);\r\n\r\n    vec3 a = texture2D(u_basePositionsTexture, getBaseTextureCoordinates(indices.x)).rgb;\r\n    vec3 b = texture2D(u_basePositionsTexture, getBaseTextureCoordinates(indices.y)).rgb;\r\n    vec3 c = texture2D(u_basePositionsTexture, getBaseTextureCoordinates(indices.z)).rgb;\r\n\r\n    vec3 position = a * embeddingCoordinates.x + b * embeddingCoordinates.y + c * embeddingCoordinates.z;\r\n    position.z += embeddingCoordinates.w;\r\n\r\n    //position.y += pow(abs(position.x), 2.0) * 0.15;\r\n\r\n    //position.x += sin(position.y * 25.0) * 0.02;\r\n\r\n    gl_FragColor = vec4(position, 0.0);\r\n}\r\n",
        "computenormals.frag": "//computes the normal for a point on the wrinkle mesh using neighbouring positions\r\n\r\nprecision highp float;\r\n\r\nvarying vec2 v_coordinates;\r\n\r\nuniform sampler2D u_positionsTexture;\r\nuniform vec2 u_resolution;\r\nuniform vec2 u_connectionResolution;\r\n\r\nuniform sampler2D u_neighboursTextureA;\r\nuniform sampler2D u_neighboursTextureB;\r\n\r\n//use slight offsets to compensate for floating point inaccuracy\r\nvec2 getBaseTextureCoordinates (float index) {\r\n    return (vec2(floor(mod((index + 0.5), u_resolution.x)), floor((index + 0.5) / u_resolution.x)) + 0.5) / u_resolution;\r\n}\r\n\r\nvoid main () {\r\n    vec3 center = texture2D(u_positionsTexture, v_coordinates).rgb;\r\n\r\n    vec4 neighboursA = texture2D(u_neighboursTextureA, gl_FragCoord.xy / u_connectionResolution).rgba;\r\n    vec4 neighboursB = texture2D(u_neighboursTextureB, gl_FragCoord.xy / u_connectionResolution).rgba;\r\n\r\n    vec3 a = texture2D(u_positionsTexture, getBaseTextureCoordinates(neighboursA.x)).rgb;\r\n    vec3 b = texture2D(u_positionsTexture, getBaseTextureCoordinates(neighboursA.y)).rgb;\r\n    vec3 c = texture2D(u_positionsTexture, getBaseTextureCoordinates(neighboursA.z)).rgb;\r\n    vec3 d = texture2D(u_positionsTexture, getBaseTextureCoordinates(neighboursA.w)).rgb;\r\n    vec3 e = texture2D(u_positionsTexture, getBaseTextureCoordinates(neighboursB.x)).rgb;\r\n    vec3 f = texture2D(u_positionsTexture, getBaseTextureCoordinates(neighboursB.y)).rgb;\r\n\r\n    vec3 normal = vec3(0.0);\r\n\r\n    normal += cross(a - center, b - center);\r\n    normal += cross(b - center, c - center);\r\n    normal += cross(c - center, d - center);\r\n    normal += cross(d - center, e - center);\r\n    normal += cross(e - center, f - center);\r\n    normal += cross(f - center, a - center);\r\n    \r\n    normal = normalize(normal);\r\n\r\n    gl_FragColor = vec4(normal, 0.0);\r\n}\r\n",
        "constraintdistance.frag": "precision highp float;\r\n\r\nvarying vec2 v_coordinates;\r\n\r\nuniform sampler2D u_positionsTexture;\r\nuniform vec2 u_resolution;\r\n\r\nuniform sampler2D u_connectionsTexture;\r\n\r\n//use slight offsets to compensate for floating point inaccuracy\r\nvec2 getBaseTextureCoordinates (float index) {\r\n    return (vec2(floor(mod((index + 0.5), u_resolution.x)), floor((index + 0.5) / u_resolution.x)) + 0.5) / u_resolution;\r\n}\r\n\r\nvoid main () {\r\n    vec3 center = texture2D(u_positionsTexture, vec2(gl_FragCoord.x, mod(gl_FragCoord.y, u_resolution.y)) / u_resolution).rgb;\r\n    vec4 connections = texture2D(u_connectionsTexture, v_coordinates).rgba;\r\n\r\n    vec3 a = texture2D(u_positionsTexture, getBaseTextureCoordinates(connections.x)).rgb;\r\n    vec3 b = texture2D(u_positionsTexture, getBaseTextureCoordinates(connections.y)).rgb;\r\n    vec3 c = texture2D(u_positionsTexture, getBaseTextureCoordinates(connections.z)).rgb;\r\n    vec3 d = texture2D(u_positionsTexture, getBaseTextureCoordinates(connections.w)).rgb;\r\n\r\n    float aL = distance(center, a);\r\n    float bL = distance(center, b);\r\n    float cL = distance(center, c);\r\n    float dL = distance(center, d);\r\n\r\n    gl_FragColor = vec4(aL, bL, cL, dL);\r\n}\r\n",
        "distanceconstraint.frag": "//computes the distance between the vertex and those it's connected to\r\n\r\nprecision highp float;\r\n\r\nvarying vec2 v_coordinates;\r\n\r\nuniform sampler2D u_positionsTexture;\r\nuniform vec2 u_resolution;\r\nuniform vec2 u_connectionResolution;\r\nuniform float u_connectionOffset;\r\n\r\nuniform sampler2D u_neighboursTextureA;\r\nuniform sampler2D u_neighboursTextureB;\r\n\r\nuniform sampler2D u_distancesTextureA;\r\nuniform sampler2D u_distancesTextureB;\r\n\r\n//uniform sampler2D u_fixedTexture;\r\n\r\nuniform sampler2D u_strengthsTexture;\r\n\r\n//uniform int u_respectFixed;\r\n\r\n//use slight offsets to compensate for floating point inaccuracy\r\nvec2 getBaseTextureCoordinates (float index) {\r\n    return (vec2(floor(mod((index + 0.5), u_resolution.x)), floor((index + 0.5) / u_resolution.x)) + 0.5) / u_resolution;\r\n}\r\n\r\nvec3 getDelta (vec3 center, vec3 other, float restLength) {\r\n    restLength *= 1.0;\r\n\r\n    float dist = distance(center, other);\r\n    dist = max(dist, 0.000001);\r\n\r\n    vec3 delta = 1.5 * (dist - restLength) * (other - center) / dist;\r\n\r\n    return delta;\r\n}\r\n\r\nvoid main () {\r\n    vec2 coordinates = gl_FragCoord.xy / u_resolution;\r\n\r\n    vec3 center = texture2D(u_positionsTexture, coordinates).rgb;\r\n\r\n    vec2 connectionCoordinates = (gl_FragCoord.xy + vec2(0.0, u_connectionOffset)) / u_connectionResolution;\r\n\r\n    vec4 neighboursA = texture2D(u_neighboursTextureA, connectionCoordinates).rgba;\r\n    vec4 neighboursB = texture2D(u_neighboursTextureB, connectionCoordinates).rgba;\r\n\r\n    vec4 distancesA = texture2D(u_distancesTextureA, connectionCoordinates).rgba;\r\n    vec4 distancesB = texture2D(u_distancesTextureB, connectionCoordinates).rgba;\r\n\r\n    vec3 a = texture2D(u_positionsTexture, getBaseTextureCoordinates(neighboursA.x)).rgb;\r\n    vec3 b = texture2D(u_positionsTexture, getBaseTextureCoordinates(neighboursA.y)).rgb;\r\n    vec3 c = texture2D(u_positionsTexture, getBaseTextureCoordinates(neighboursA.z)).rgb;\r\n    vec3 d = texture2D(u_positionsTexture, getBaseTextureCoordinates(neighboursA.w)).rgb;\r\n    vec3 e = texture2D(u_positionsTexture, getBaseTextureCoordinates(neighboursB.x)).rgb;\r\n    vec3 f = texture2D(u_positionsTexture, getBaseTextureCoordinates(neighboursB.y)).rgb;\r\n\r\n\r\n    float aL = distancesA.x;\r\n    float bL = distancesA.y;\r\n    float cL = distancesA.z;\r\n    float dL = distancesA.w;\r\n    float eL = distancesB.x;\r\n    float fL = distancesB.y;\r\n\r\n\r\n    vec3 offset = vec3(0.0);\r\n\r\n    offset += getDelta(center, a, aL);\r\n    offset += getDelta(center, b, bL);\r\n    offset += getDelta(center, c, cL);\r\n    offset += getDelta(center, d, dL);\r\n    offset += getDelta(center, e, eL);\r\n    offset += getDelta(center, f, fL);\r\n\r\n    float strength = texture2D(u_strengthsTexture, coordinates).r;\r\n\r\n    gl_FragColor = vec4(center + strength * offset / 6.0, 0.0);\r\n\r\n    //if (isFixed > 0.5 && u_respectFixed == 1) gl_FragColor = vec4(center, 0.0); \r\n\r\n}\r\n\r\n",
        "droplet.frag": "precision highp float;\r\n\r\nuniform sampler2D u_image;\r\nuniform vec2 u_resolution;\r\n\r\nvoid main () {\r\n\tvec2 uv = gl_PointCoord.xy * 2.0 - 1.0;\t\r\n\r\n\tfloat r2 = dot(uv, uv);\r\n\r\n\tif (r2 > 1.0) discard;\r\n\r\n\tvec3 normal = vec3(\r\n\t\tuv.x,\r\n\t\tuv.y,\r\n\t\t1.0 - sqrt(1.0 - r2)\r\n\t);\r\n\r\n\tvec2 coordinates = gl_FragCoord.xy / u_resolution;\r\n\r\n\tvec3 color = texture2D(u_image, coordinates + normal.xy * vec2(1.0, -1.0) * 0.04, 1.0).rgb;\r\n\r\n\tfloat alpha = smoothstep(1.0, 0.9, r2);\r\n\r\n\tgl_FragColor = vec4(color, alpha * 0.8);\r\n}",
        "droplet.vert": "precision highp float;\r\n\r\nattribute vec3 a_position;\r\n\r\nuniform vec2 u_resolution;\r\nuniform float u_effectiveHeight;\r\nuniform mat4 u_projectionViewMatrix;\r\n\r\nvoid main () {\r\n\tgl_PointSize = 0.025 * u_effectiveHeight;\r\n\r\n\tgl_Position = u_projectionViewMatrix * vec4(a_position, 1.0);\r\n}",
        "eye.frag": "uniform vec3 u_eyePosition;\r\nuniform vec3 u_lookDirection;\r\n\r\nvec3 closestPointOnAxis (vec3 base, vec3 direction, vec3 point) {\r\n    return base + dot(point - base, direction) * direction;\r\n}\r\n\r\nfloat distanceFromAxis (vec3 base, vec3 direction, vec3 point) {\r\n    return distance(point, closestPointOnAxis(base, direction, point));\r\n}\r\n\r\nvoid main () {\r\n    vec3 normal = normalize(v_normal);\r\n\r\n    vec3 albedo = vec3(0.0);\r\n    float roughness = 0.05;\r\n    float F0 = 0.05;\r\n\r\n    vec3 color = shadeSurfaceWithLights(v_worldPosition, normal, albedo, roughness, F0);\r\n\r\n    gl_FragColor = vec4(color, 1.0);\r\n}",
        "eye.vert": "precision highp float;\r\n\r\nattribute vec3 a_position;\r\nattribute vec3 a_normal;\r\n\r\nvarying vec3 v_normal;\r\nvarying vec3 v_worldPosition;\r\n\r\nuniform mat4 u_modelMatrix;\r\nuniform mat4 u_normalMatrix;\r\nuniform mat4 u_projectionViewMatrix;\r\n\r\nvoid main () {\r\n\tv_normal = (u_normalMatrix * vec4(a_normal.xyz, 0.0)).xyz;\r\n\tv_worldPosition = (u_modelMatrix * vec4(a_position.xyz, 1.0)).xyz;\r\n\r\n\tgl_Position = u_projectionViewMatrix * vec4(v_worldPosition, 1.0);\r\n}",
        "feedback.frag": "precision highp float;\r\nprecision highp sampler2D;\r\n\r\nuniform sampler2D u_texture;\r\nuniform vec2 u_origin;\r\nuniform float u_frame;\r\n\r\nvarying vec2 v_coordinates;\r\n\r\n//\r\n// Description : Array and textureless GLSL 2D simplex noise function.\r\n//      Author : Ian McEwan, Ashima Arts.\r\n//  Maintainer : stegu\r\n//     Lastmod : 20110822 (ijm)\r\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\r\n//               Distributed under the MIT License. See LICENSE file.\r\n//               https://github.com/ashima/webgl-noise\r\n//               https://github.com/stegu/webgl-noise\r\n// \r\n\r\nvec3 mod289(vec3 x) {\r\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\r\n}\r\n\r\nvec2 mod289(vec2 x) {\r\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\r\n}\r\n\r\nvec3 permute(vec3 x) {\r\n  return mod289(((x*34.0)+1.0)*x);\r\n}\r\n\r\nfloat snoise(vec2 v)\r\n  {\r\n  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\r\n                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\r\n                     -0.577350269189626,  // -1.0 + 2.0 * C.x\r\n                      0.024390243902439); // 1.0 / 41.0\r\n// First corner\r\n  vec2 i  = floor(v + dot(v, C.yy) );\r\n  vec2 x0 = v -   i + dot(i, C.xx);\r\n\r\n// Other corners\r\n  vec2 i1;\r\n  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0\r\n  //i1.y = 1.0 - i1.x;\r\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\r\n  // x0 = x0 - 0.0 + 0.0 * C.xx ;\r\n  // x1 = x0 - i1 + 1.0 * C.xx ;\r\n  // x2 = x0 - 1.0 + 2.0 * C.xx ;\r\n  vec4 x12 = x0.xyxy + C.xxzz;\r\n  x12.xy -= i1;\r\n\r\n// Permutations\r\n  i = mod289(i); // Avoid truncation effects in permutation\r\n  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\r\n\t\t+ i.x + vec3(0.0, i1.x, 1.0 ));\r\n\r\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\r\n  m = m*m ;\r\n  m = m*m ;\r\n\r\n// Gradients: 41 points uniformly over a line, mapped onto a diamond.\r\n// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)\r\n\r\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\r\n  vec3 h = abs(x) - 0.5;\r\n  vec3 ox = floor(x + 0.5);\r\n  vec3 a0 = x - ox;\r\n\r\n// Normalise gradients implicitly by scaling m\r\n// Approximation of: m *= inversesqrt( a0*a0 + h*h );\r\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\r\n\r\n// Compute final noise value at P\r\n  vec3 g;\r\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\r\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\r\n  return 130.0 * dot(m, g);\r\n}\r\n\r\nvoid main () {\r\n\tvec2 velocity = normalize((v_coordinates * 2.0 - 1.0) - u_origin) * 0.005;\r\n\r\n\t//velocity *= (1.0 + snoise(v_coordinates * 5.0 + u_frame * 0.01) * 0.4);\r\n\t//velocity *= (1.0 + snoise(v_coordinates * 5.0 + u_frame * 0.0) * 0.2);\r\n\r\n\t//velocity *= (0.5 + pow(length(v_coordinates * 2.0 - 1.0), 3.0) * 2.0);\r\n\r\n\tvec4 sample = texture2D(u_texture, v_coordinates - velocity);\r\n\r\n  //velocity *= (0.5 + pow(length(v_coordinates * 2.0 - 1.0), 3.0) * 2.0);\r\n\r\n  sample.a += 0.01 + snoise(v_coordinates * 2.0 + u_frame * 0.01) * 0.01;\r\n\tgl_FragColor = sample;\r\n}\r\n",
        "fullscreen.vert": "precision highp float;\r\n\r\nattribute vec2 a_position;\r\n\r\nvarying vec2 v_coordinates;\r\n\r\nvoid main () {\r\n    v_coordinates = a_position * 0.5 + 0.5;\r\n\r\n    gl_Position = vec4(a_position, 0.0, 1.0);\r\n}\r\n",
        "fxaa.frag": "precision highp float;\r\n\r\nvarying vec2 v_coordinates;\r\n\r\nuniform sampler2D u_input;\r\n\r\nuniform vec2 u_resolution;\r\nuniform float u_gamma;\r\n\r\nconst float FXAA_SPAN_MAX = 8.0;\r\nconst float FXAA_REDUCE_MUL = 1.0 / 8.0;\r\nconst float FXAA_REDUCE_MIN = 1.0 / 128.0;\r\n \r\nvoid main () {\r\n    vec2 delta = 1.0 / u_resolution;\r\n\r\n    vec3 rgbNW = texture2D(u_input, v_coordinates + vec2(-1.0, -1.0) * delta).rgb;\r\n    vec3 rgbNE = texture2D(u_input, v_coordinates + vec2(1.0, -1.0) * delta).rgb;\r\n    vec3 rgbSW = texture2D(u_input, v_coordinates + vec2(-1.0, 1.0) * delta).rgb;\r\n    vec3 rgbSE = texture2D(u_input, v_coordinates + vec2(1.0, 1.0) * delta).rgb;\r\n    vec3 rgbM = texture2D(u_input, v_coordinates).rgb;\r\n\r\n    vec3 luma = vec3(0.299, 0.587, 0.114);\r\n    float lumaNW = dot(rgbNW, luma);\r\n    float lumaNE = dot(rgbNE, luma);\r\n    float lumaSW = dot(rgbSW, luma);\r\n    float lumaSE = dot(rgbSE, luma);\r\n    float lumaM  = dot(rgbM,  luma);\r\n\r\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\r\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\r\n\r\n    vec2 dir = vec2(\r\n        -((lumaNW + lumaNE) - (lumaSW + lumaSE)),\r\n        ((lumaNW + lumaSW) - (lumaNE + lumaSE)));\r\n\r\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) * (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\r\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\r\n    dir = min(vec2(FXAA_SPAN_MAX), max(vec2(-FXAA_SPAN_MAX), dir * rcpDirMin)) * delta.xy;\r\n\r\n    vec3 rgbA = 0.5 * (texture2D(u_input, v_coordinates.xy + dir * (1.0 / 3.0 - 0.5)).xyz + texture2D(u_input, v_coordinates.xy + dir * (2.0 / 3.0 - 0.5)).xyz);\r\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (texture2D(u_input, v_coordinates.xy + dir * -0.5).xyz + texture2D(u_input, v_coordinates.xy + dir * 0.5).xyz);\r\n    float lumaB = dot(rgbB, luma);\r\n\r\n    if (lumaB < lumaMin || lumaB > lumaMax) {\r\n        gl_FragColor = pow(vec4(rgbA, 1.0), vec4(1.0 / u_gamma));\r\n    } else {\r\n        gl_FragColor = pow(vec4(rgbB, 1.0), vec4(1.0 / u_gamma));\r\n    }\r\n\r\n}\r\n",
        "inside.frag": "void main () {\r\n\tvec3 normal = normalize(v_normal);\r\n\r\n    vec3 albedo = vec3(1.0, 0.0, 0.0);\r\n    float roughness = 0.1;\r\n    float F0 = 0.05;\r\n\r\n    vec3 color = shadeSurfaceWithLightsWithoutShadow(v_worldPosition, normal, albedo, roughness, F0);\r\n\r\n\tfloat fadeStart = -0.05;\r\n\tfloat fadeWidth = 0.20;\r\n\r\n\tfloat fade = pow(linearstep(-0.4, 0.1, v_worldPosition.z), 2.5);\r\n\r\n\tcolor *= fade;\r\n\r\n    gl_FragColor = vec4(color, 0.0);\r\n\r\n\t//gl_FragColor = vec4(v_normal * 0.5 + 0.5, 1.0);\r\n}",
        "inside.vert": "precision highp float;\r\n\r\nattribute vec3 a_position;\r\nattribute vec3 a_normal;\r\n\r\nvarying vec3 v_normal;\r\nvarying vec3 v_worldPosition;\r\n\r\nuniform mat4 u_modelMatrix;\r\nuniform mat4 u_projectionViewMatrix;\r\n\r\nvoid main () {\r\n\tv_normal = a_normal.xyz;\r\n\tv_worldPosition = (vec4(a_position.xyz, 1.0)).xyz;\r\n\tvec4 glPosition = u_projectionViewMatrix * u_modelMatrix * vec4(v_worldPosition.xyz, 1.0);\r\n\r\n    glPosition.z += 0.04;\r\n\r\n    gl_Position = glPosition;\r\n}",
        "lightingcommon.glsl": "precision highp float;\r\nprecision highp sampler2D;\r\n\r\nuniform vec3 u_cameraPosition;\r\n\r\nuniform vec3 u_lightPosition0;\r\nuniform mat4 u_lightProjectionViewMatrix0;\r\nuniform sampler2D u_shadowDepthTexture0;\r\nuniform vec2 u_shadowResolution0;\r\nuniform vec3 u_lightColor0;\r\nuniform float u_lightNear0;\r\nuniform float u_lightFar0;\r\n\r\nuniform vec3 u_lightPosition1;\r\nuniform mat4 u_lightProjectionViewMatrix1;\r\nuniform sampler2D u_shadowDepthTexture1;\r\nuniform vec2 u_shadowResolution1;\r\nuniform vec3 u_lightColor1;\r\nuniform float u_lightNear1;\r\nuniform float u_lightFar1;\r\n\r\nvarying vec3 v_normal;\r\nvarying vec3 v_worldPosition;\r\n\r\nconst float PI = 3.14159265;\r\n\r\nfloat square (float x) {\r\n    return x * x;\r\n}\r\n\r\nfloat fresnel (float F0, float lDotH) {\r\n    float f = pow(1.0 - lDotH, 5.0);\r\n\r\n    return (1.0 - F0) * f + F0;\r\n}\r\n\r\nfloat GGX (float alpha, float nDotH) {\r\n    float a2 = square(alpha);\r\n\r\n    return a2 / (PI * square(square(nDotH) * (a2 - 1.0) + 1.0));\r\n}\r\n\r\nfloat GGGX (float alpha, float nDotL, float nDotV) {\r\n    float a2 = square(alpha);\r\n\r\n    float gl = nDotL + sqrt(a2 + (1.0 - a2) * square(nDotL));\r\n    float gv = nDotV + sqrt(a2 + (1.0 - a2) * square(nDotV));\r\n\r\n    return 1.0 / (gl * gv);\r\n}\r\n\r\nfloat saturate (float x) {\r\n    return clamp(x, 0.0, 1.0);\r\n}\r\n\r\nfloat linearstep (float low, float high, float x) {\r\n    return clamp((x - low) / (high - low), 0.0, 1.0);\r\n}\r\n\r\nfloat specularBRDF (vec3 lightDirection, vec3 eyeDirection, vec3 normal, float roughness, float F0) {\r\n    vec3 halfVector = normalize(lightDirection + eyeDirection);\r\n\r\n    float nDotH = saturate(dot(normal, halfVector));\r\n    float nDotL = saturate(dot(normal, lightDirection));\r\n    float nDotV = saturate(dot(normal, eyeDirection));\r\n    float lDotH = saturate(dot(lightDirection, halfVector));\r\n\r\n    float D = GGX(roughness, nDotH);\r\n    float G = GGGX(roughness, nDotL, nDotV);\r\n    float F = fresnel(F0, lDotH);\r\n\r\n    return D * G * F;\r\n}\r\n\r\nconst float PackUpscale = 256.0 / 255.0;\r\nconst float UnpackDownscale = 255.0 / 256.0;\r\n\r\nconst vec3 PackFactors = vec3( 256.0 * 256.0 * 256.0, 256.0 * 256.0,  256.0);\r\nconst vec4 UnpackFactors = UnpackDownscale / vec4(PackFactors, 1.0);\r\n\r\nconst float ShiftRight8 = 1.0 / 256.0;\r\n\r\nfloat unpackRGBAToDepth(const in vec4 v) {\r\n    return dot(v, UnpackFactors);\r\n}\r\n\r\nfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\r\n    return step( compare, unpackRGBAToDepth(texture2D( depths, uv )));\r\n}\r\n\r\nfloat texture2DShadow( sampler2D depths, vec2 size, vec2 uv, float compare ) {\r\n    return texture2DCompare(depths, uv, compare);\r\n}\r\n\r\nfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\r\n    const vec2 offset = vec2(0.0, 1.0);\r\n\r\n    vec2 texelSize = vec2(1.0) / size;\r\n    vec2 centroidUV = floor(uv * size + 0.5) / size;\r\n\r\n    float lb = texture2DCompare(depths, centroidUV + texelSize * offset.xx, compare );\r\n    float lt = texture2DCompare(depths, centroidUV + texelSize * offset.xy, compare );\r\n    float rb = texture2DCompare(depths, centroidUV + texelSize * offset.yx, compare );\r\n    float rt = texture2DCompare(depths, centroidUV + texelSize * offset.yy, compare );\r\n\r\n    vec2 f = fract(uv * size + 0.5);\r\n\r\n    float a = mix(lb, lt, f.y);\r\n    float b = mix(rb, rt, f.y);\r\n    float c = mix(a, b, f.x);\r\n\r\n    return c;\r\n}\r\n\r\nfloat getShadow (vec3 worldPosition, mat4 projectionViewMatrix, sampler2D depthTexture, vec2 resolution) {\r\n    vec4 lightSpacePosition = projectionViewMatrix * vec4(worldPosition, 1.0);\r\n    lightSpacePosition /= lightSpacePosition.w;\r\n    lightSpacePosition = lightSpacePosition * 0.5 + 0.5;\r\n    vec2 lightSpaceCoordinates = lightSpacePosition.xy;\r\n\r\n    <shadow>\r\n}\r\n\r\nfloat linearizeDepth (float depth, float near, float far) {\r\n    return 2.0 * near * far / (far + near - (2.0 * depth - 1.0) * (far - near)); \r\n}\r\n\r\nvec3 getTransmittedColor (vec3 worldPosition, vec3 normal, vec3 lightDirection, vec3 lightColor, mat4 lightProjectionViewMatrix, sampler2D depthTexture, float lightNear, float lightFar) {\r\n    vec3 shrunkPosition = worldPosition - normal * 0.01;\r\n    vec4 lightSpacePosition2 = lightProjectionViewMatrix * vec4(shrunkPosition, 1.0);\r\n    lightSpacePosition2 /= lightSpacePosition2.w;\r\n    lightSpacePosition2 = lightSpacePosition2 * 0.5 + 0.5;\r\n    vec2 lightSpaceCoordinates2 = lightSpacePosition2.xy;\r\n\r\n    float lightSample = unpackRGBAToDepth(texture2D(depthTexture, lightSpaceCoordinates2));\r\n    float d = abs(linearizeDepth(lightSample, lightNear, lightFar) - linearizeDepth(lightSpacePosition2.z, lightNear, lightFar)) * 10.0;\r\n\r\n    float dd = -d * d;\r\n    vec3 profile = vec3(0.233, 0.455, 0.649) * exp(dd / 0.0064) +\r\n                     vec3(0.1,   0.336, 0.344) * exp(dd / 0.0484) +\r\n                     vec3(0.118, 0.198, 0.0)   * exp(dd / 0.187)  +\r\n                     vec3(0.113, 0.007, 0.007) * exp(dd / 0.567)  +\r\n                     vec3(0.358, 0.004, 0.0)   * exp(dd / 1.99)   +\r\n                     vec3(0.078, 0.0,   0.0)   * exp(dd / 7.41);\r\n\r\n    profile.b = profile.g;\r\n\r\n\r\n    return profile * 1.0 * saturate(0.6 + dot(lightDirection, -normal)) * lightColor;\r\n}\r\n\r\nvec3 shadeSurfaceWithLightWithoutShadow (vec3 worldPosition, vec3 normal, vec3 albedo, float roughness, float F0, vec3 lightPosition, vec3 lightColor) {\r\n    vec3 eyeDirection = normalize(u_cameraPosition - worldPosition);\r\n    vec3 lightDirection = normalize(lightPosition - worldPosition);\r\n\r\n    float diffuse = saturate(dot(lightDirection, normal));\r\n    float specular = specularBRDF(lightDirection, eyeDirection, normal, roughness, F0);\r\n\r\n    vec3 color = (diffuse * 1.0 * albedo + specular * 1.0) * lightColor;\r\n\r\n    return color;\r\n}\r\n\r\nvec3 shadeSurfaceWithLight (vec3 worldPosition, vec3 normal, vec3 albedo, float roughness, float F0, vec3 lightPosition, vec3 lightColor, mat4 projectionViewMatrix, sampler2D depthTexture, vec2 depthResolution) {\r\n    float shadow = getShadow(worldPosition, projectionViewMatrix, depthTexture, depthResolution);\r\n\r\n    vec3 color = shadeSurfaceWithLightWithoutShadow(worldPosition, normal, albedo, roughness, F0, lightPosition, lightColor) * shadow;\r\n\r\n    return color;\r\n}\r\n\r\nvec3 shadeSurfaceWithLights (vec3 worldPosition, vec3 normal, vec3 albedo, float roughness, float F0) {\r\n    vec3 total = shadeSurfaceWithLight(worldPosition, normal, albedo, roughness, F0, u_lightPosition0, u_lightColor0, u_lightProjectionViewMatrix0, u_shadowDepthTexture0, u_shadowResolution0);\r\n    total += shadeSurfaceWithLight(worldPosition, normal, albedo, roughness, F0, u_lightPosition1, u_lightColor1, u_lightProjectionViewMatrix1, u_shadowDepthTexture1, u_shadowResolution1);\r\n\r\n    return total;\r\n}\r\n\r\nvec3 shadeSurfaceWithLightsWithoutShadow (vec3 worldPosition, vec3 normal, vec3 albedo, float roughness, float F0) {\r\n    vec3 total = shadeSurfaceWithLightWithoutShadow(worldPosition, normal, albedo, roughness, F0, u_lightPosition0, u_lightColor0);\r\n    total += shadeSurfaceWithLightWithoutShadow(worldPosition, normal, albedo, roughness, F0, u_lightPosition1, u_lightColor1);\r\n\r\n    return total;\r\n}\r\n\r\nvec3 shadeSurfaceWithLightsWithTransmittance (vec3 worldPosition, vec3 normal, vec3 albedo, float roughness, float F0) {\r\n    vec3 total = shadeSurfaceWithLights(worldPosition, normal, albedo, roughness, F0);    \r\n\r\n    total += getTransmittedColor(worldPosition, normal, normalize(u_lightPosition0 - worldPosition), u_lightColor0, u_lightProjectionViewMatrix0, u_shadowDepthTexture0, u_lightNear0, u_lightFar0); \r\n    total += getTransmittedColor(worldPosition, normal, normalize(u_lightPosition1 - worldPosition), u_lightColor1, u_lightProjectionViewMatrix1, u_shadowDepthTexture1, u_lightNear1, u_lightFar1);\r\n\r\n    return total;\r\n}\r\n",
        "line.frag": "precision highp float;\r\n\r\nuniform float u_alpha;\r\n\r\nvarying vec4 v_color;\r\n\r\nvoid main () {\r\n    gl_FragColor = v_color * u_alpha; \r\n}",
        "line.vert": "precision highp float;\r\n\r\nattribute vec2 a_position;\r\nattribute vec4 a_color;\r\n\r\nvarying vec4 v_color;\r\n\r\nuniform vec2 u_resolution;\r\n\r\nvoid main () {\r\n    v_color = a_color;\r\n    gl_Position = vec4((a_position / u_resolution) * 2.0 - 1.0, 0.999, 1.0);\r\n}",
        "mouth.frag": "uniform vec3 u_albedo;\r\nuniform float u_roughness;\r\n\r\nvoid main () {\r\n    float F0 = 0.35;\r\n\r\n    vec3 color = shadeSurfaceWithLightsWithTransmittance(v_worldPosition, v_normal, u_albedo, u_roughness, F0);\r\n\r\n    gl_FragColor = vec4(color, 1.0);\r\n}",
        "mouth.vert": "precision highp float;\r\n\r\nattribute vec3 a_position;\r\nattribute vec3 a_normal;\r\n\r\nvarying vec3 v_normal;\r\nvarying vec3 v_worldPosition;\r\n\r\nuniform mat4 u_modelMatrix;\r\nuniform mat4 u_projectionViewMatrix;\r\n\r\nvoid main () {\r\n\tv_normal = a_normal.xyz;\r\n\tv_worldPosition = (u_modelMatrix * vec4(a_position.xyz, 1.0)).xyz;\r\n\r\n\tgl_Position = u_projectionViewMatrix * vec4(v_worldPosition, 1.0);\r\n}",
        "mouthdepth.frag": "precision highp float;\r\n\r\nvarying vec4 v_clipSpacePosition;\r\n\r\nconst float PackUpscale = 256.0 / 255.0;\r\nconst float UnpackDownscale = 255.0 / 256.0;\r\n\r\nconst vec3 PackFactors = vec3( 256.0 * 256.0 * 256.0, 256.0 * 256.0,  256.0);\r\nconst vec4 UnpackFactors = UnpackDownscale / vec4(PackFactors, 1.0);\r\n\r\nconst float ShiftRight8 = 1.0 / 256.0;\r\n\r\nvec4 packDepthToRGBA(const in float v) {\r\n    vec4 r = vec4(fract(v * PackFactors), v);\r\n    r.yzw -= r.xyz * ShiftRight8;\r\n    return r * PackUpscale;\r\n}\r\n\r\nvoid main () {\r\n\tfloat ndcDepth = v_clipSpacePosition.z / v_clipSpacePosition.w;\r\n\tgl_FragColor = packDepthToRGBA(ndcDepth * 0.5 + 0.5);\r\n}",
        "mouthdepth.vert": "precision highp float;\r\n\r\nattribute vec3 a_position;\r\n\r\nvarying vec4 v_clipSpacePosition;\r\n\r\nuniform mat4 u_projectionViewModelMatrix;\r\n\r\nvoid main () {\r\n\tv_clipSpacePosition = u_projectionViewModelMatrix * vec4(a_position, 1.0);\r\n\tgl_Position = v_clipSpacePosition;\r\n}",
        "opening.frag": "precision highp float;\r\n\r\nvoid main () {\r\n    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\r\n}",
        "opening.vert": "precision highp float;\r\n\r\nattribute vec2 a_position;\r\n\r\nuniform mat4 u_projectionViewModelMatrix;\r\n\r\nvoid main () {\r\n    float z = 0.0;\r\n    gl_Position = u_projectionViewModelMatrix * vec4(a_position, z, 1.0);\r\n}",
        "output.frag": "precision highp float;\r\n\r\nvarying vec2 v_coordinates;\r\n\r\nuniform sampler2D u_texture;\r\n\r\nvoid main () {\r\n    gl_FragColor = vec4(texture2D(u_texture, v_coordinates).rgb, 1.0);\r\n}\r\n",
        "spit.frag": "precision highp float;\r\n\r\nuniform sampler2D u_image;\r\nuniform vec2 u_resolution;\r\nuniform vec3 u_cameraPosition;\r\n\r\nvarying vec3 v_position;\r\nvarying vec3 v_up;\r\nvarying vec3 v_right;\r\nvarying vec2 v_offset;\r\nvarying vec3 v_dropPosition;\r\n\r\nfloat linearstep (float left, float right, float x) {\r\n    return clamp((x - left) / (right - left), 0.0, 1.0);\r\n}\r\n\r\nvoid main() {\r\n    float x = v_offset.x;\r\n    float z = sqrt(1.0 - x * x);\r\n\r\n    vec3 localNormal = vec3(x, 0.0, z);\r\n    vec3 forward = normalize(cross(v_up, v_right));\r\n    vec3 worldNormal = localNormal.x * v_right + localNormal.z * forward;\r\n\r\n    vec3 cameraToPoint = normalize(v_position - u_cameraPosition);\r\n    vec3 refractedRay = refract(cameraToPoint, worldNormal, 0.35);\r\n\r\n    float fresnel = 1.0 - pow(dot(-cameraToPoint, worldNormal), 5.0);\r\n\r\n    vec2 coordinates = gl_FragCoord.xy / u_resolution.xy;\r\n\r\n    float offset = 0.2;\r\n    float alpha = linearstep(1.0, 1.0 - offset, v_offset.x) * linearstep(-1.0, -1.0 + offset, v_offset.x) * linearstep(1.0, 1.0 - offset, v_offset.y) * linearstep(-1.0, -1.0 + offset, v_offset.y);\r\n\r\n\r\n    gl_FragColor = vec4(mix(vec3(0.9), texture2D(u_image, coordinates + refractedRay.xy * 0.002).rgb, 0.95 - fresnel * 0.03), 0.8 * alpha);\r\n\r\n    //gl_FragColor = vec4(worldNormal * 0.5 + 0.5, 1.0);\r\n}",
        "spit.vert": "precision highp float;\r\n\r\n//all vectors in world space\r\nattribute vec3 a_position;\r\nattribute vec3 a_velocity;\r\nattribute vec2 a_offset; //in [-1, 1]\r\n\r\nuniform mat4 u_projectionViewMatrix;\r\nuniform vec3 u_cameraPosition;\r\n\r\nvarying vec3 v_position;\r\nvarying vec3 v_up;\r\nvarying vec3 v_right;\r\nvarying vec2 v_offset;\r\nvarying vec3 v_dropPosition;\r\n\r\nvoid main () {\r\n    vec3 right = normalize(cross(u_cameraPosition - a_position, a_velocity)) * 0.0056;\r\n\r\n    float maxSpeed = 0.03;\r\n\r\n    vec3 velocity = a_velocity;\r\n    if (length(velocity) > maxSpeed) {\r\n        velocity *= maxSpeed / length(velocity);\r\n    }\r\n\r\n    vec3 position = a_position + velocity * 1.0 * a_offset.y + right * a_offset.x;\r\n\r\n    v_position = position;\r\n    v_dropPosition = a_position;\r\n    v_offset = a_offset;\r\n    v_up = normalize(velocity);\r\n    v_right = normalize(right);\r\n\r\n    gl_Position = u_projectionViewMatrix * vec4(position, 1.0);\r\n}\r\n",
        "splatopening.frag": "precision highp float;\r\n\r\nuniform float u_phase;\r\nuniform float u_index;\r\nuniform float u_on;\r\n\r\n//format: (phase, noteIndex, on, lifetime)\r\n\r\nvoid main () {\r\n    float scale = 1.0;\r\n    float lifetime = 0.0;\r\n    gl_FragColor = vec4(u_phase, u_index, u_on, lifetime);\r\n}\r\n",
        "splatopening.vert": "precision highp float;\r\n\r\nattribute vec2 a_position;\r\n\r\nuniform mat4 u_projectionViewModelMatrix;\r\n\r\nvoid main () {\r\n    float z = 0.0;\r\n    gl_Position = u_projectionViewModelMatrix * vec4(a_position, z, 1.0);\r\n}",
        "sprite.frag": "precision highp float;\r\n\r\nuniform sampler2D u_image;\r\n\r\nvarying vec2 v_uv;\r\nvarying vec4 v_color;\r\n\r\nvoid main () {\r\n    vec4 color = texture2D(u_image, v_uv);\r\n    float alpha = color.a * v_color.a;\r\n    gl_FragColor = vec4(color.rgb * v_color.rgb * alpha, alpha);\r\n}\r\n",
        "sprite.vert": "precision highp float;\r\n\r\nattribute vec2 a_position;\r\nattribute vec2 a_uv;\r\nattribute vec4 a_color;\r\n\r\nvarying vec2 v_uv;\r\nvarying vec4 v_color;\r\n\r\nuniform vec2 u_resolution;\r\n\r\nvoid main () {\r\n    v_uv = a_uv;\r\n    v_color = a_color;\r\n\r\n    gl_Position = vec4((a_position / u_resolution) * 2.0 - 1.0, 0.999, 1.0);\r\n}\r\n",
        "tongue.frag": "uniform vec3 u_albedo;\r\n\r\nvoid main () {\r\n\tvec3 normal = normalize(v_normal);\r\n\r\n    float roughness = 0.07;\r\n    float F0 = 0.25;\r\n\r\n    vec3 color = shadeSurfaceWithLightsWithoutShadow(v_worldPosition, normal, u_albedo, roughness, F0);\r\n\r\n\tfloat fade = pow(linearstep(-0.4, -0.3, v_worldPosition.z), 2.5);\r\n\r\n\tcolor *= fade;\r\n\r\n    gl_FragColor = vec4(color, fade);\r\n\r\n\t//gl_FragColor = vec4(normal * 0.5 + 0.5, 1.0);\r\n}",
        "tongue.vert": "precision highp float;\r\n\r\nattribute vec3 a_position;\r\nattribute vec3 a_normal;\r\n\r\nvarying vec3 v_normal;\r\nvarying vec3 v_worldPosition;\r\n\r\nuniform mat4 u_modelMatrix;\r\nuniform mat4 u_projectionViewMatrix;\r\n\r\nvoid main () {\r\n\tv_normal = a_normal.xyz;\r\n\tv_worldPosition = (vec4(a_position.xyz, 1.0)).xyz;\r\n\tgl_Position = u_projectionViewMatrix * u_modelMatrix * vec4(v_worldPosition.xyz, 1.0);\r\n}",
        "tooth.frag": "void main () {\r\n    vec3 normal = normalize(v_normal);\r\n\r\n    vec3 albedo = vec3(1.0);\r\n    float roughness = 0.01;\r\n    float F0 = 0.1;\r\n\r\n    vec3 color = shadeSurfaceWithLights(v_worldPosition, normal, albedo, roughness, F0);\r\n\r\n    gl_FragColor = vec4(color, 1.0);\r\n}",
        "tooth.vert": "precision highp float;\r\n\r\nattribute vec4 a_position;\r\nattribute vec4 a_normal;\r\n\r\nvarying vec3 v_normal;\r\nvarying vec3 v_worldPosition;\r\n\r\nuniform mat4 u_modelMatrix;\r\nuniform mat4 u_projectionViewMatrix;\r\n\r\nvoid main () {\r\n    v_normal = (u_modelMatrix * vec4(a_normal.xyz, 0.0)).xyz;\r\n    v_worldPosition = (u_modelMatrix * vec4(a_position.xyz, 1.0)).xyz;\r\n\r\n    gl_Position = u_projectionViewMatrix * vec4(v_worldPosition, 1.0);\r\n}",
        "wrinkle.vert": "precision highp float;\r\n\r\nattribute vec2 a_textureCoordinates;\r\n\r\nvarying vec3 v_normal;\r\nvarying vec3 v_worldPosition;\r\n\r\nuniform mat4 u_modelMatrix;\r\nuniform mat4 u_projectionViewMatrix;\r\n\r\nuniform sampler2D u_positionsTexture;\r\nuniform sampler2D u_normalsTexture;\r\n\r\nvoid main () {\r\n    vec3 position = texture2D(u_positionsTexture, a_textureCoordinates).rgb;\r\n    vec3 normal = texture2D(u_normalsTexture, a_textureCoordinates).rgb;\r\n\r\n    v_normal = normal;\r\n    v_worldPosition = (u_modelMatrix * vec4(position, 1.0)).xyz;\r\n\r\n    gl_Position = u_projectionViewMatrix * vec4(v_worldPosition, 1.0);\r\n}",
        "wrinkledepth.vert": "precision highp float;\r\n\r\nattribute vec2 a_textureCoordinates;\r\n\r\nuniform mat4 u_projectionViewModelMatrix;\r\nuniform sampler2D u_positionsTexture;\r\n\r\nvarying vec4 v_clipSpacePosition;\r\n\r\nvoid main () {\r\n    vec3 position = texture2D(u_positionsTexture, a_textureCoordinates).rgb;\r\n\r\n    v_clipSpacePosition = u_projectionViewModelMatrix * vec4(position, 1.0);\r\n    gl_Position = v_clipSpacePosition;\r\n}"
    };
    function R(t, e, r) {
        this.module = t,
        this.wgl = e,
        this.mouthIndex = r,
        this.framebuffer = e.createFramebuffer(),
        this.triangleVertexBuffer = e.buildBuffer(e.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), e.STATIC_DRAW),
        this.computeAttachmentPositionsProgram = e.createProgram(D["fullscreen.vert"], D["computeattachmentpositions.frag"], {
            a_position: 0
        }),
        this.computeNormalsProgram = e.createProgram(D["fullscreen.vert"], D["computenormals.frag"], {
            a_position: 0
        }),
        this.distanceConstraintProgram = e.createProgram(D["fullscreen.vert"], D["distanceconstraint.frag"], {
            a_position: 0
        }),
        this.attachmentConstraintProgram = e.createProgram(D["fullscreen.vert"], D["attachmentconstraint.frag"], {
            a_position: 0
        }),
        this.constraintDistanceProgram = e.createProgram(D["fullscreen.vert"], D["constraintdistance.frag"], {
            a_position: 0
        }),
        this.copyProgram = e.createProgram(D["fullscreen.vert"], D["absolutecopy.frag"], {
            a_position: 0
        }),
        this.baseVertexCount = this.module.ccall("getBaseVertexCount", "number", ["number"], [this.mouthIndex]),
        this.embeddedVertexCount = this.module.ccall("getEmbeddingCount", "number", ["number"], [this.mouthIndex]),
        this.getBasePositionData = this.module.cwrap("getBasePositionData", "number", ["number"]),
        this.baseTextureWidth = Math.ceil(Math.sqrt(this.baseVertexCount)),
        this.baseTextureHeight = this.baseTextureWidth,
        this.basePositionsData = new Float32Array(this.baseTextureWidth * this.baseTextureHeight * 4),
        this.basePositionsTexture = e.buildTexture(e.RGBA, e.FLOAT, this.baseTextureWidth, this.baseTextureHeight, null, e.CLAMP_TO_EDGE, e.CLAMP_TO_EDGE, e.NEAREST, e.NEAREST),
        this.wrinkleTextureWidth = Math.ceil(Math.sqrt(this.embeddedVertexCount)),
        this.wrinkleTextureHeight = this.wrinkleTextureWidth + 1,
        this.getEmbeddingWrinkleStrengthsData = this.module.cwrap("getEmbeddingWrinkleStrengthsData", "number", ["number"]);
        for (var n = this.module.HEAPF32.subarray(this.getEmbeddingWrinkleStrengthsData(this.mouthIndex) >> 2, (this.getEmbeddingWrinkleStrengthsData(this.mouthIndex) >> 2) + this.embeddedVertexCount), i = 0, o = 0; o < this.embeddedVertexCount; ++o)
            0 < n[o] && (i += 1);
        this.wrinkleTextureHeight += 1,
        this.wrinkledRows = Math.floor(i / this.wrinkleTextureWidth) + 1,
        this.originalToSeparatedIndices = [];
        var a = 0
          , s = this.wrinkledRows * this.wrinkleTextureWidth;
        for (o = 0; o < this.embeddedVertexCount; ++o)
            0 < n[o] ? (this.originalToSeparatedIndices.push(a),
            a += 1) : (this.originalToSeparatedIndices.push(s),
            s += 1);
        var u = [];
        for (o = 0; o < this.wrinkleTextureWidth * this.wrinkleTextureHeight; ++o) {
            var l = (o % this.wrinkleTextureWidth + .5) / this.wrinkleTextureWidth
              , h = (Math.floor(o / this.wrinkleTextureWidth) + .5) / this.wrinkleTextureHeight;
            u.push(l),
            u.push(h)
        }
        this.vertexBuffer = e.createBuffer(),
        e.bufferData(this.vertexBuffer, e.ARRAY_BUFFER, new Float32Array(u), e.STATIC_DRAW),
        this.getEmbeddingRenderingIndexData = this.module.cwrap("getEmbeddingRenderingIndexData", "number", []);
        var c = this.module.ccall("getEmbeddingRenderingIndexCount", "number", ["number"], [this.mouthIndex])
          , f = this.module.HEAPU16.subarray(this.getEmbeddingRenderingIndexData(this.mouthIndex) >> 1, (this.getEmbeddingRenderingIndexData(this.mouthIndex) >> 1) + c)
          , m = [];
        for (o = 0; o < c; ++o)
            m.push(this.originalToSeparatedIndices[f[o]]);
        this.indexBuffer = e.createBuffer(),
        e.bufferData(this.indexBuffer, e.ELEMENT_ARRAY_BUFFER, new Uint16Array(m), e.STATIC_DRAW),
        this.wrinkleIndexCount = f.length,
        this.getEmbeddingIndexData = this.module.cwrap("getEmbeddingIndexData", "number", ["number"]),
        this.getEmbeddingCoordinatesData = this.module.cwrap("getEmbeddingCoordinatesData", "number", ["number"]),
        this.getEmbeddingNeighboursData = this.module.cwrap("getEmbeddingNeighboursData", "number", ["number"]),
        this.getEmbeddingOppositesData = this.module.cwrap("getEmbeddingOppositesData", "number", ["number"]);
        var d = this.module.HEAP32.subarray(this.getEmbeddingIndexData(this.mouthIndex) >> 2, (this.getEmbeddingIndexData(this.mouthIndex) >> 2) + 3 * this.embeddedVertexCount)
          , p = this.module.HEAPF32.subarray(this.getEmbeddingCoordinatesData(this.mouthIndex) >> 2, (this.getEmbeddingCoordinatesData(this.mouthIndex) >> 2) + 4 * this.embeddedVertexCount)
          , g = this.module.HEAP32.subarray(this.getEmbeddingNeighboursData(this.mouthIndex) >> 2, (this.getEmbeddingNeighboursData(this.mouthIndex) >> 2) + 6 * this.embeddedVertexCount)
          , _ = this.module.HEAP32.subarray(this.getEmbeddingOppositesData(this.mouthIndex) >> 2, (this.getEmbeddingOppositesData(this.mouthIndex) >> 2) + 6 * this.embeddedVertexCount)
          , T = new Float32Array(this.wrinkleTextureWidth * this.wrinkleTextureHeight * 4)
          , E = new Float32Array(this.wrinkleTextureWidth * this.wrinkleTextureHeight * 4)
          , v = new Float32Array(this.wrinkleTextureWidth * this.wrinkleTextureHeight * 4)
          , x = new Float32Array(this.wrinkleTextureWidth * this.wrinkleTextureHeight * 4 * 2)
          , A = new Float32Array(this.wrinkleTextureWidth * this.wrinkleTextureHeight * 4 * 2);
        for (o = 0; o < this.embeddedVertexCount; ++o) {
            var b = this.originalToSeparatedIndices[o];
            T[4 * b + 0] = d[3 * o + 0],
            T[4 * b + 1] = d[3 * o + 1],
            T[4 * b + 2] = d[3 * o + 2],
            T[4 * b + 3] = -1;
            for (var y = 0; y < 4; ++y)
                E[4 * b + y] = p[4 * o + y];
            x[4 * b + 0] = this.originalToSeparatedIndices[g[6 * o + 0]],
            x[4 * b + 1] = this.originalToSeparatedIndices[g[6 * o + 1]],
            x[4 * b + 2] = this.originalToSeparatedIndices[g[6 * o + 2]],
            x[4 * b + 3] = this.originalToSeparatedIndices[g[6 * o + 3]],
            A[4 * b + 0] = this.originalToSeparatedIndices[g[6 * o + 4]],
            A[4 * b + 1] = this.originalToSeparatedIndices[g[6 * o + 5]];
            var R = this.wrinkleTextureWidth * this.wrinkleTextureHeight * 4;
            x[R + 4 * b + 0] = this.originalToSeparatedIndices[_[6 * o + 0]],
            x[R + 4 * b + 1] = this.originalToSeparatedIndices[_[6 * o + 1]],
            x[R + 4 * b + 2] = this.originalToSeparatedIndices[_[6 * o + 2]],
            x[R + 4 * b + 3] = this.originalToSeparatedIndices[_[6 * o + 3]],
            A[R + 4 * b + 0] = this.originalToSeparatedIndices[_[6 * o + 4]],
            A[R + 4 * b + 1] = this.originalToSeparatedIndices[_[6 * o + 5]];
            for (y = 0; y < 4; ++y)
                v[4 * b + y] = n[o]
        }
        function w(t) {
            return e.buildTexture(e.RGBA, e.FLOAT, this.wrinkleTextureWidth, this.wrinkleTextureHeight, t, e.CLAMP_TO_EDGE, e.CLAMP_TO_EDGE, e.NEAREST, e.NEAREST)
        }
        w = w.bind(this),
        this.embeddingIndicesTexture = w(T),
        this.embeddingCoordinatesTexture = w(E),
        this.wrinkleStrengthsTexture = w(v),
        this.connectionIndicesTextureA = e.buildTexture(e.RGBA, e.FLOAT, this.wrinkleTextureWidth, 2 * this.wrinkleTextureHeight, x, e.CLAMP_TO_EDGE, e.CLAMP_TO_EDGE, e.NEAREST, e.NEAREST),
        this.connectionIndicesTextureB = e.buildTexture(e.RGBA, e.FLOAT, this.wrinkleTextureWidth, 2 * this.wrinkleTextureHeight, A, e.CLAMP_TO_EDGE, e.CLAMP_TO_EDGE, e.NEAREST, e.NEAREST),
        this.connectionDistancesTextureA = e.buildTexture(e.RGBA, e.FLOAT, this.wrinkleTextureWidth, 2 * this.wrinkleTextureHeight, null, e.CLAMP_TO_EDGE, e.CLAMP_TO_EDGE, e.NEAREST, e.NEAREST),
        this.connectionDistancesTextureB = e.buildTexture(e.RGBA, e.FLOAT, this.wrinkleTextureWidth, 2 * this.wrinkleTextureHeight, null, e.CLAMP_TO_EDGE, e.CLAMP_TO_EDGE, e.NEAREST, e.NEAREST),
        this.wrinklePositionsTexture = w(null),
        this.wrinklePositionsTextureTemp = w(null),
        this.wrinkleNormalsTexture = w(null),
        this.attachmentPositionsTexture = w(null),
        this.update(!0)
    }
    function w(t, e, r) {
        var n = t[e];
        t[e] = t[r],
        t[r] = n
    }
    function M(t, e, r) {
        b.call(this, t, e, 3, d(t, "getInsidePositionData", "number", ["number"], [r]), d(t, "getInsideNormalData", "number", ["number"], [r]), d(t, "getInsideVertexCount", "number", ["number"], [r]), d(t, "getInsideIndexData", "number", ["number"], [r]), d(t, "getInsideIndexCount", "number", ["number"], [r]))
    }
    R.prototype.update = function(t) {
        for (var n = this.wgl.gl, e = this.module.HEAPF32.subarray(this.getBasePositionData(this.mouthIndex) >> 2, (this.getBasePositionData(this.mouthIndex) >> 2) + 2 * this.baseVertexCount), r = this.basePositionsData, i = 0; i < this.baseTextureWidth * this.baseTextureHeight; ++i)
            if (i < this.baseVertexCount)
                r[4 * i + 0] = e[2 * i + 0],
                r[4 * i + 1] = e[2 * i + 1],
                r[4 * i + 2] = 0,
                r[4 * i + 3] = 0;
            else
                for (var o = 0; o < 4; ++o)
                    r[4 * i + o] = 0;
        function a(t) {
            n.framebufferTexture2D(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, t, 0),
            n.useProgram(this.computeAttachmentPositionsProgram.program),
            n.viewport(0, 0, this.wrinkleTextureWidth, this.wrinkleTextureHeight),
            n.activeTexture(n.TEXTURE0),
            n.bindTexture(n.TEXTURE_2D, this.basePositionsTexture),
            n.uniform1i(this.computeAttachmentPositionsProgram.uniformLocations.u_basePositionsTexture, 0),
            n.activeTexture(n.TEXTURE1),
            n.bindTexture(n.TEXTURE_2D, this.embeddingIndicesTexture),
            n.uniform1i(this.computeAttachmentPositionsProgram.uniformLocations.u_embeddingIndicesTexture, 1),
            n.activeTexture(n.TEXTURE2),
            n.bindTexture(n.TEXTURE_2D, this.embeddingCoordinatesTexture),
            n.uniform1i(this.computeAttachmentPositionsProgram.uniformLocations.u_embeddingCoordinatesTexture, 2),
            n.uniform2f(this.computeAttachmentPositionsProgram.uniformLocations.u_baseTextureResolution, this.baseTextureWidth, this.baseTextureHeight),
            n.drawArrays(n.TRIANGLES, 0, 3)
        }
        function s(t, e, r) {
            n.framebufferTexture2D(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, r, 0),
            n.useProgram(this.constraintDistanceProgram.program),
            n.viewport(0, 0, this.wrinkleTextureWidth, 2 * this.wrinkleTextureHeight),
            n.activeTexture(n.TEXTURE0),
            n.bindTexture(n.TEXTURE_2D, t),
            n.uniform1i(this.constraintDistanceProgram.uniformLocations.u_positionsTexture, 0),
            n.activeTexture(n.TEXTURE1),
            n.bindTexture(n.TEXTURE_2D, e),
            n.uniform1i(this.constraintDistanceProgram.uniformLocations.u_connectionsTexture, 1),
            n.uniform2f(this.constraintDistanceProgram.uniformLocations.u_resolution, this.wrinkleTextureWidth, this.wrinkleTextureHeight),
            n.drawArrays(n.TRIANGLES, 0, 3)
        }
        n.activeTexture(n.TEXTURE0),
        n.bindTexture(n.TEXTURE_2D, this.basePositionsTexture),
        n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, this.baseTextureWidth, this.baseTextureHeight, 0, n.RGBA, n.FLOAT, r),
        n.bindFramebuffer(n.FRAMEBUFFER, this.framebuffer),
        n.enableVertexAttribArray(0),
        n.bindBuffer(n.ARRAY_BUFFER, this.triangleVertexBuffer),
        n.vertexAttribPointer(0, 2, n.FLOAT, !1, 0, 0),
        a = a.bind(this),
        s = s.bind(this),
        t && (a(this.wrinklePositionsTexture),
        a(this.attachmentPositionsTexture),
        s(this.wrinklePositionsTexture, this.connectionIndicesTextureA, this.connectionDistancesTextureA),
        s(this.wrinklePositionsTexture, this.connectionIndicesTextureB, this.connectionDistancesTextureB)),
        a(this.attachmentPositionsTexture),
        n.useProgram(this.copyProgram.program),
        n.viewport(0, this.wrinkledRows, this.wrinkleTextureWidth, this.wrinkleTextureHeight - this.wrinkledRows),
        n.enable(n.SCISSOR_TEST),
        n.scissor(0, this.wrinkledRows, this.wrinkleTextureWidth, this.wrinkleTextureHeight - this.wrinkledRows),
        n.activeTexture(n.TEXTURE0),
        n.bindTexture(n.TEXTURE_2D, this.attachmentPositionsTexture),
        n.uniform1i(this.copyProgram.uniformLocations.u_texture, 0),
        n.uniform2f(this.copyProgram.uniformLocations.u_resolution, this.wrinkleTextureWidth, this.wrinkleTextureHeight),
        n.framebufferTexture2D(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, this.wrinklePositionsTexture, 0),
        n.drawArrays(n.TRIANGLES, 0, 3),
        n.framebufferTexture2D(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, this.wrinklePositionsTextureTemp, 0),
        n.drawArrays(n.TRIANGLES, 0, 3),
        n.disable(n.SCISSOR_TEST),
        n.useProgram(this.distanceConstraintProgram.program),
        n.uniform2f(this.distanceConstraintProgram.uniformLocations.u_resolution, this.wrinkleTextureWidth, this.wrinkleTextureHeight),
        n.uniform1i(this.distanceConstraintProgram.uniformLocations.u_positionsTexture, 0),
        n.uniform1i(this.distanceConstraintProgram.uniformLocations.u_neighboursTextureA, 1),
        n.uniform1i(this.distanceConstraintProgram.uniformLocations.u_neighboursTextureB, 2),
        n.uniform1i(this.distanceConstraintProgram.uniformLocations.u_distancesTextureA, 3),
        n.uniform1i(this.distanceConstraintProgram.uniformLocations.u_distancesTextureB, 4),
        n.uniform1i(this.distanceConstraintProgram.uniformLocations.u_strengthsTexture, 5),
        n.uniform2f(this.distanceConstraintProgram.uniformLocations.u_connectionResolution, this.wrinkleTextureWidth, 2 * this.wrinkleTextureHeight),
        n.activeTexture(n.TEXTURE1),
        n.bindTexture(n.TEXTURE_2D, this.connectionIndicesTextureA),
        n.activeTexture(n.TEXTURE2),
        n.bindTexture(n.TEXTURE_2D, this.connectionIndicesTextureB),
        n.activeTexture(n.TEXTURE3),
        n.bindTexture(n.TEXTURE_2D, this.connectionDistancesTextureA),
        n.activeTexture(n.TEXTURE4),
        n.bindTexture(n.TEXTURE_2D, this.connectionDistancesTextureB),
        n.useProgram(this.attachmentConstraintProgram.program),
        n.uniform2f(this.attachmentConstraintProgram.uniformLocations.u_resolution, this.wrinkleTextureWidth, this.wrinkleTextureHeight),
        n.uniform1i(this.attachmentConstraintProgram.uniformLocations.u_positionsTexture, 0),
        n.uniform1i(this.attachmentConstraintProgram.uniformLocations.u_strengthsTexture, 5),
        n.uniform1i(this.attachmentConstraintProgram.uniformLocations.u_attachmentPositionsTexture, 6),
        n.activeTexture(n.TEXTURE5),
        n.bindTexture(n.TEXTURE_2D, this.wrinkleStrengthsTexture),
        n.activeTexture(n.TEXTURE6),
        n.bindTexture(n.TEXTURE_2D, this.attachmentPositionsTexture);
        n.viewport(0, 0, this.wrinkleTextureWidth, this.wrinkledRows),
        n.enable(n.SCISSOR_TEST),
        n.scissor(0, 0, this.wrinkleTextureWidth, this.wrinkledRows),
        n.activeTexture(n.TEXTURE0);
        for (i = 0; i < 6; ++i)
            n.useProgram(this.attachmentConstraintProgram.program),
            n.framebufferTexture2D(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, this.wrinklePositionsTextureTemp, 0),
            n.bindTexture(n.TEXTURE_2D, this.wrinklePositionsTexture),
            n.drawArrays(n.TRIANGLES, 0, 3),
            w(this, "wrinklePositionsTexture", "wrinklePositionsTextureTemp"),
            n.useProgram(this.distanceConstraintProgram.program),
            n.bindTexture(n.TEXTURE_2D, this.wrinklePositionsTexture),
            n.uniform1f(this.distanceConstraintProgram.uniformLocations.u_connectionOffset, 0),
            n.framebufferTexture2D(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, this.wrinklePositionsTextureTemp, 0),
            n.drawArrays(n.TRIANGLES, 0, 3),
            w(this, "wrinklePositionsTexture", "wrinklePositionsTextureTemp"),
            n.bindTexture(n.TEXTURE_2D, this.wrinklePositionsTexture),
            n.uniform1f(this.distanceConstraintProgram.uniformLocations.u_connectionOffset, this.wrinkleTextureHeight),
            n.framebufferTexture2D(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, this.wrinklePositionsTextureTemp, 0),
            n.drawArrays(n.TRIANGLES, 0, 3),
            w(this, "wrinklePositionsTexture", "wrinklePositionsTextureTemp");
        n.disable(n.SCISSOR_TEST),
        n.framebufferTexture2D(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, this.wrinkleNormalsTexture, 0),
        n.useProgram(this.computeNormalsProgram.program),
        n.viewport(0, 0, this.wrinkleTextureWidth, this.wrinkleTextureHeight),
        n.activeTexture(n.TEXTURE0),
        n.bindTexture(n.TEXTURE_2D, this.wrinklePositionsTexture),
        n.uniform1i(this.computeNormalsProgram.uniformLocations.u_positionsTexture, 0),
        n.activeTexture(n.TEXTURE1),
        n.bindTexture(n.TEXTURE_2D, this.connectionIndicesTextureA),
        n.uniform1i(this.computeNormalsProgram.uniformLocations.u_neighboursTextureA, 1),
        n.activeTexture(n.TEXTURE2),
        n.bindTexture(n.TEXTURE_2D, this.connectionIndicesTextureB),
        n.uniform1i(this.computeNormalsProgram.uniformLocations.u_neighboursTextureB, 2),
        n.uniform2f(this.computeNormalsProgram.uniformLocations.u_resolution, this.wrinkleTextureWidth, this.wrinkleTextureHeight),
        n.uniform2f(this.computeNormalsProgram.uniformLocations.u_connectionResolution, this.wrinkleTextureWidth, 2 * this.wrinkleTextureHeight),
        n.drawArrays(n.TRIANGLES, 0, 3),
        n.bindFramebuffer(n.FRAMEBUFFER, null)
    }
    ,
    (M.prototype = Object.create(b.prototype)).constructor = b;
    var P = {
        identity: function() {
            return [0, 0, 0, 1]
        },
        makeIdentity: function(t) {
            return t[0] = 0,
            t[1] = 0,
            t[2] = 0,
            t[3] = 1,
            t
        },
        length: function(t) {
            return t[0] * t[0] + t[1] * t[1] + t[2] * t[2] + t[3] * t[3]
        },
        invert: function(t, e) {
            var r = 1 / (e[0] * e[0] + e[1] * e[1] + e[2] * e[2] + e[3] * e[3]);
            return t[0] = -e[0] * r,
            t[1] = -e[1] * r,
            t[2] = -e[2] * r,
            t[3] = e[3] * r,
            t
        },
        multiply: function(t, e, r) {
            var n = e[0]
              , i = e[1]
              , o = e[2]
              , a = e[3]
              , s = r[0]
              , u = r[1]
              , l = r[2]
              , h = r[3];
            return t[0] = s * n - u * i - l * o - h * a,
            t[1] = s * i + u * n + l * a - h * o,
            t[2] = s * o - u * a + l * n + h * i,
            t[3] = s * a + u * o - l * i + h * n,
            t
        },
        normalize: function(t, e) {
            var r = 1 / Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2] + e[3] * e[3]);
            return t[0] = e[0] * r,
            t[1] = e[1] * r,
            t[2] = e[2] * r,
            t[3] = e[3] * r,
            t
        },
        fromAxisAngle: function(t, e, r) {
            return t[0] = e[0] * Math.sin(r / 2),
            t[1] = e[1] * Math.sin(r / 2),
            t[2] = e[2] * Math.sin(r / 2),
            t[3] = Math.cos(r / 2),
            t
        },
        slerp: function(t, e, r, n) {
            var i, o, a, s, u, l = e[0], h = e[1], c = e[2], f = e[3], m = r[0], d = r[1], p = r[2], g = r[3];
            return (o = l * m + h * d + c * p + f * g) < 0 && (o = -o,
            m = -m,
            d = -d,
            p = -p,
            g = -g),
            u = 1e-6 < 1 - o ? (i = Math.acos(o),
            a = Math.sin(i),
            s = Math.sin((1 - n) * i) / a,
            Math.sin(n * i) / a) : (s = 1 - n,
            n),
            t[0] = s * l + u * m,
            t[1] = s * h + u * d,
            t[2] = s * c + u * p,
            t[3] = s * f + u * g,
            P.normalize(t, t),
            t
        }
    }
      , C = {
        set: function(t, e, r, n) {
            return t[0] = e,
            t[1] = r,
            t[2] = n,
            t
        },
        copy: function(t, e) {
            return t[0] = e[0],
            t[1] = e[1],
            t[2] = e[2],
            t
        },
        clone: function(t) {
            return [t[0], t[1], t[2]]
        },
        dot: function(t, e) {
            return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
        },
        scaleAndAdd: function(t, e, r, n) {
            return t[0] = e[0] + r[0] * n,
            t[1] = e[1] + r[1] * n,
            t[2] = e[2] + r[2] * n,
            t
        },
        cross: function(t, e, r) {
            var n = e[0]
              , i = e[1]
              , o = e[2]
              , a = r[0]
              , s = r[1]
              , u = r[2];
            return t[0] = i * u - o * s,
            t[1] = o * a - n * u,
            t[2] = n * s - i * a,
            t
        },
        coneClamp: function(t, e, r, n) {
            if (C.dot(e, r) < -.9999)
                return t;
            var i = Math.acos(C.dot(e, r));
            if (n < i) {
                var o = C.normalize([], C.cross([], r, e))
                  , a = P.fromAxisAngle([], o, i - n);
                return C.multiplyByQuaternion(t, r, a),
                t
            }
            return t
        },
        rotateTowards: function(t, e, r, n) {
            var i = Math.acos(C.dot(e, r));
            i < n && (n = i);
            var o = C.normalize([], C.cross([], e, r))
              , a = P.fromAxisAngle([], o, n);
            return C.multiplyByQuaternion(t, e, a),
            t
        },
        add: function(t, e, r) {
            return t[0] = e[0] + r[0],
            t[1] = e[1] + r[1],
            t[2] = e[2] + r[2],
            t
        },
        multiply: function(t, e, r) {
            return t[0] = e[0] * r[0],
            t[1] = e[1] * r[1],
            t[2] = e[2] * r[2],
            t
        },
        addList: function(t, e) {
            t[0] = 0,
            t[1] = 0;
            for (var r = t[2] = 0; r < e.length; ++r)
                t[0] += e[r][0],
                t[1] += e[r][1],
                t[2] += e[r][2];
            return t
        },
        subtract: function(t, e, r) {
            return t[0] = e[0] - r[0],
            t[1] = e[1] - r[1],
            t[2] = e[2] - r[2],
            t
        },
        multiplyByScalar: function(t, e, r) {
            return t[0] = e[0] * r,
            t[1] = e[1] * r,
            t[2] = e[2] * r,
            t
        },
        multiplyByQuaternion: function(t, e, r) {
            var n = e[0]
              , i = e[1]
              , o = e[2]
              , a = r[3]
              , s = r[0]
              , u = r[1]
              , l = r[2]
              , h = a * n + u * o - l * i
              , c = a * i + l * n - s * o
              , f = a * o + s * i - u * n
              , m = -s * n - u * i - l * o;
            return t[0] = m * -s + h * a + c * -l - f * -u,
            t[1] = m * -u + c * a + f * -s - h * -l,
            t[2] = m * -l + f * a + h * -u - c * -s,
            t
        },
        normalize: function(t, e) {
            var r = e[0]
              , n = e[1]
              , i = e[2]
              , o = 1 / Math.sqrt(r * r + n * n + i * i);
            return t[0] = r * o,
            t[1] = n * o,
            t[2] = i * o,
            t
        },
        distance: function(t, e) {
            var r = e[0] - t[0]
              , n = e[1] - t[1]
              , i = e[2] - t[2];
            return Math.sqrt(r * r + n * n + i * i)
        },
        distance2: function(t, e) {
            var r = e[0] - t[0]
              , n = e[1] - t[1]
              , i = e[2] - t[2];
            return r * r + n * n + i * i
        },
        length: function(t) {
            return Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2])
        },
        slerp: function(t, e, r, n) {
            var i = C.dot(e, r);
            i = u(i, 0, 1);
            for (var o = Math.acos(i) * n, a = C.subtract([], r, C.multiplyByScalar([], e, i)), s = 0; s < 3; ++s)
                t[s] = e[s] * Math.cos(o) + a[s] * Math.sin(o);
            return t
        },
        pow: function(t, e, r) {
            return t[0] = Math.pow(e[0], r),
            t[1] = Math.pow(e[1], r),
            t[2] = Math.pow(e[2], r),
            t
        },
        hsvToRGB: function(t, e) {
            var r = e[0]
              , n = e[1]
              , i = e[2]
              , o = 6 * (r %= 1)
              , a = (e = i * n) * (1 - Math.abs(o % 2 - 1))
              , s = Math.floor(o)
              , u = [e, a, 0, 0, a, e][s]
              , l = [a, e, e, a, 0, 0][s]
              , h = [0, 0, a, e, e, a][s]
              , c = i - e;
            return u += c,
            l += c,
            h += c,
            t[0] = u,
            t[1] = l,
            t[2] = h,
            t
        },
        rgbToHSV: function(t, e) {
            var r, n, i, o, a, s = e[0], u = e[1], l = e[2], h = Math.max(s, u, l), c = h - Math.min(s, u, l), f = function(t) {
                return (h - t) / 6 / c + .5
            };
            return 0 == c ? o = a = 0 : (a = c / h,
            r = f(s),
            n = f(u),
            i = f(l),
            s === h ? o = i - n : u === h ? o = 1 / 3 + r - i : l === h && (o = 2 / 3 + n - r),
            o < 0 ? o += 1 : 1 < o && (o -= 1)),
            t[0] = o,
            t[1] = a,
            t[2] = h,
            t
        }
    }
      , S = {
        set: function(t, e, r, n, i, o, a, s, u, l, h, c, f, m, d, p, g) {
            t[0] = e,
            t[1] = r,
            t[2] = n,
            t[3] = i,
            t[4] = o,
            t[5] = a,
            t[6] = s,
            t[7] = u,
            t[8] = l,
            t[9] = h,
            t[10] = c,
            t[11] = f,
            t[12] = m,
            t[13] = d,
            t[14] = p,
            t[15] = g
        },
        copy: function(t, e) {
            for (var r = 0; r < 16; r++)
                t[r] = e[r]
        },
        makeIdentity: function(t) {
            return t[0] = 1,
            t[1] = 0,
            t[2] = 0,
            t[3] = 0,
            t[4] = 0,
            t[5] = 1,
            t[6] = 0,
            t[7] = 0,
            t[8] = 0,
            t[9] = 0,
            t[10] = 1,
            t[11] = 0,
            t[12] = 0,
            t[13] = 0,
            t[14] = 0,
            t[15] = 1,
            t
        },
        makeTranslation: function(t, e, r, n) {
            return S.makeIdentity(t),
            t[12] = e,
            t[13] = r,
            t[14] = n,
            t
        },
        makeScale: function(t, e, r, n) {
            return t[0] = e,
            t[1] = 0,
            t[2] = 0,
            t[3] = 0,
            t[4] = 0,
            t[5] = r,
            t[6] = 0,
            t[7] = 0,
            t[8] = 0,
            t[9] = 0,
            t[10] = n,
            t[11] = 0,
            t[12] = 0,
            t[13] = 0,
            t[14] = 0,
            t[15] = 1,
            t
        },
        makeXRotation: function(t, e) {
            return t[0] = 1,
            t[1] = 0,
            t[2] = 0,
            t[3] = 0,
            t[4] = 0,
            t[5] = Math.cos(e),
            t[6] = Math.sin(e),
            t[7] = 0,
            t[8] = 0,
            t[9] = -Math.sin(e),
            t[10] = Math.cos(e),
            t[11] = 0,
            t[12] = 0,
            t[13] = 0,
            t[14] = 0,
            t[15] = 1,
            t
        },
        makeYRotation: function(t, e) {
            return t[0] = Math.cos(e),
            t[1] = 0,
            t[2] = -Math.sin(e),
            t[3] = 0,
            t[4] = 0,
            t[5] = 1,
            t[6] = 0,
            t[7] = 0,
            t[8] = Math.sin(e),
            t[9] = 0,
            t[10] = Math.cos(e),
            t[11] = 0,
            t[12] = 0,
            t[13] = 0,
            t[14] = 0,
            t[15] = 1,
            t
        },
        transformPosition: function(t, e, r) {
            var n = e[0]
              , i = e[1]
              , o = e[2];
            return t[0] = r[0] * n + r[4] * i + r[8] * o + r[12],
            t[1] = r[1] * n + r[5] * i + r[9] * o + r[13],
            t[2] = r[2] * n + r[6] * i + r[10] * o + r[14],
            t[3] = r[3] * n + r[7] * i + r[11] * o + r[15],
            t
        },
        transformDirection: function(t, e, r) {
            var n = e[0]
              , i = e[1]
              , o = e[2];
            return t[0] = r[0] * n + r[4] * i + r[8] * o,
            t[1] = r[1] * n + r[5] * i + r[9] * o,
            t[2] = r[2] * n + r[6] * i + r[10] * o,
            t[3] = r[3] * n + r[7] * i + r[11] * o,
            t
        },
        multiplyVector: function(t, e, r) {
            var n = r[0]
              , i = r[1]
              , o = r[2]
              , a = r[3];
            return t[0] = e[0] * n + e[4] * i + e[8] * o + e[12] * a,
            t[1] = e[1] * n + e[5] * i + e[9] * o + e[13] * a,
            t[2] = e[2] * n + e[6] * i + e[10] * o + e[14] * a,
            t[3] = e[3] * n + e[7] * i + e[11] * o + e[15] * a,
            t
        },
        premultiply: function(t, e, r) {
            var n = r[0]
              , i = r[4]
              , o = r[8]
              , a = r[12]
              , s = r[1]
              , u = r[5]
              , l = r[9]
              , h = r[13]
              , c = r[2]
              , f = r[6]
              , m = r[10]
              , d = r[14]
              , p = r[3]
              , g = r[7]
              , _ = r[11]
              , T = r[15]
              , E = e[0]
              , v = e[1]
              , x = e[2]
              , A = e[3];
            return t[0] = n * E + i * v + o * x + a * A,
            t[1] = s * E + u * v + l * x + h * A,
            t[2] = c * E + f * v + m * x + d * A,
            t[3] = p * E + g * v + _ * x + T * A,
            E = e[4],
            v = e[5],
            x = e[6],
            A = e[7],
            t[4] = n * E + i * v + o * x + a * A,
            t[5] = s * E + u * v + l * x + h * A,
            t[6] = c * E + f * v + m * x + d * A,
            t[7] = p * E + g * v + _ * x + T * A,
            E = e[8],
            v = e[9],
            x = e[10],
            A = e[11],
            t[8] = n * E + i * v + o * x + a * A,
            t[9] = s * E + u * v + l * x + h * A,
            t[10] = c * E + f * v + m * x + d * A,
            t[11] = p * E + g * v + _ * x + T * A,
            E = e[12],
            v = e[13],
            x = e[14],
            A = e[15],
            t[12] = n * E + i * v + o * x + a * A,
            t[13] = s * E + u * v + l * x + h * A,
            t[14] = c * E + f * v + m * x + d * A,
            t[15] = p * E + g * v + _ * x + T * A,
            t
        },
        transpose: function(t, e) {
            if (t === e) {
                var r = e[1]
                  , n = e[2]
                  , i = e[3]
                  , o = e[6]
                  , a = e[7]
                  , s = e[11];
                e[1] = e[4],
                e[4] = r,
                e[2] = e[8],
                e[8] = n,
                e[3] = e[12],
                e[12] = i,
                e[6] = e[9],
                e[9] = o,
                e[7] = e[13],
                e[13] = a,
                e[11] = e[14],
                e[14] = s
            } else
                t[0] = e[0],
                t[1] = e[4],
                t[2] = e[8],
                t[3] = e[12],
                t[4] = e[1],
                t[5] = e[5],
                t[6] = e[9],
                t[7] = e[13],
                t[8] = e[2],
                t[9] = e[6],
                t[10] = e[10],
                t[11] = e[14],
                t[12] = e[3],
                t[13] = e[7],
                t[14] = e[11],
                t[15] = e[15]
        },
        invert: function(t, e) {
            var r = e[0]
              , n = e[4]
              , i = e[8]
              , o = e[12]
              , a = e[1]
              , s = e[5]
              , u = e[9]
              , l = e[13]
              , h = e[2]
              , c = e[6]
              , f = e[10]
              , m = e[14]
              , d = e[3]
              , p = e[7]
              , g = e[11]
              , _ = e[15]
              , T = f * _
              , E = m * g
              , v = c * _
              , x = m * p
              , A = c * g
              , b = f * p
              , y = h * _
              , R = m * d
              , w = h * g
              , D = f * d
              , M = h * p
              , P = c * d
              , C = i * l
              , S = o * u
              , F = n * l
              , I = o * s
              , L = n * u
              , B = i * s
              , N = r * l
              , U = o * a
              , O = r * u
              , V = i * a
              , k = r * s
              , H = n * a
              , X = T * s + x * u + A * l - (E * s + v * u + b * l)
              , G = E * a + y * u + D * l - (T * a + R * u + w * l)
              , W = v * a + R * s + M * l - (x * a + y * s + P * l)
              , Y = b * a + w * s + P * u - (A * a + D * s + M * u)
              , z = 1 / (r * X + n * G + i * W + o * Y);
            return t[0] = z * X,
            t[1] = z * G,
            t[2] = z * W,
            t[3] = z * Y,
            t[4] = z * (E * n + v * i + b * o - (T * n + x * i + A * o)),
            t[5] = z * (T * r + R * i + w * o - (E * r + y * i + D * o)),
            t[6] = z * (x * r + y * n + P * o - (v * r + R * n + M * o)),
            t[7] = z * (A * r + D * n + M * i - (b * r + w * n + P * i)),
            t[8] = z * (C * p + I * g + L * _ - (S * p + F * g + B * _)),
            t[9] = z * (S * d + N * g + V * _ - (C * d + U * g + O * _)),
            t[10] = z * (F * d + U * p + k * _ - (I * d + N * p + H * _)),
            t[11] = z * (B * d + O * p + H * g - (L * d + V * p + k * g)),
            t[12] = z * (F * f + B * m + S * c - (L * m + C * c + I * f)),
            t[13] = z * (O * m + C * h + U * f - (N * f + V * m + S * h)),
            t[14] = z * (N * c + H * m + I * h - (k * m + F * h + U * c)),
            t[15] = z * (k * f + L * h + V * c - (O * c + H * f + B * h)),
            t
        },
        fromQuaternion: function(t, e) {
            var r = e[3]
              , n = e[0]
              , i = e[1]
              , o = e[2];
            return t[0] = 1 - 2 * i * i - 2 * o * o,
            t[1] = 2 * n * i + 2 * r * o,
            t[2] = 2 * n * o - 2 * r * i,
            t[3] = 0,
            t[4] = 2 * n * i - 2 * r * o,
            t[5] = 1 - 2 * n * n - 2 * o * o,
            t[6] = 2 * i * o + 2 * r * n,
            t[7] = 0,
            t[8] = 2 * n * o + 2 * r * i,
            t[9] = 2 * i * o - 2 * r * n,
            t[10] = 1 - 2 * n * n - 2 * i * i,
            t[11] = 0,
            t[12] = 0,
            t[13] = 0,
            t[14] = 0,
            t[15] = 1,
            t
        },
        makePerspective: function(t, e, r, n, i) {
            var o = 1 / Math.tan(e / 2)
              , a = 1 / (n - i);
            return t[0] = o / r,
            t[1] = 0,
            t[2] = 0,
            t[3] = 0,
            t[4] = 0,
            t[5] = o,
            t[6] = 0,
            t[7] = 0,
            t[8] = 0,
            t[9] = 0,
            t[10] = (i + n) * a,
            t[11] = -1,
            t[12] = 0,
            t[13] = 0,
            t[14] = 2 * i * n * a,
            t[15] = 0,
            t
        },
        makePerspectiveHorizontal: function(t, e, r, n, i) {
            var o = 1 / Math.tan(e / 2)
              , a = 1 / (n - i);
            return t[0] = o,
            t[1] = 0,
            t[2] = 0,
            t[3] = 0,
            t[4] = 0,
            t[5] = o * r,
            t[6] = 0,
            t[7] = 0,
            t[8] = 0,
            t[9] = 0,
            t[10] = (i + n) * a,
            t[11] = -1,
            t[12] = 0,
            t[13] = 0,
            t[14] = 2 * i * n * a,
            t[15] = 0,
            t
        },
        makeLookAt: function(t, e, r, n) {
            var i = e[0] - r[0]
              , o = e[1] - r[1]
              , a = e[2] - r[2]
              , s = Math.sqrt(i * i + o * o + a * a);
            i /= s,
            o /= s,
            a /= s;
            var u = n[2] * o - n[1] * a
              , l = n[0] * a - n[2] * i
              , h = n[1] * i - n[0] * o
              , c = Math.sqrt(u * u + l * l + h * h)
              , f = o * (h /= c) - a * (l /= c)
              , m = a * (u /= c) - i * h
              , d = i * l - o * u
              , p = Math.sqrt(f * f + m * m + d * d);
            return f /= p,
            m /= p,
            d /= p,
            t[0] = u,
            t[1] = l,
            t[2] = h,
            t[3] = 0,
            t[4] = f,
            t[5] = m,
            t[6] = d,
            t[7] = 0,
            t[8] = i,
            t[9] = o,
            t[10] = a,
            t[11] = 0,
            t[12] = -(u * e[0] + l * e[1] + h * e[2]),
            t[13] = -(f * e[0] + m * e[1] + d * e[2]),
            t[14] = -(i * e[0] + o * e[1] + a * e[2]),
            t[15] = 1,
            t
        },
        makeOrthographic: function(t, e, r, n, i, o, a) {
            return t[0] = 2 / (r - e),
            t[1] = 0,
            t[2] = 0,
            t[3] = 0,
            t[4] = 0,
            t[5] = 2 / (i - n),
            t[6] = 0,
            t[7] = 0,
            t[8] = 0,
            t[9] = 0,
            t[10] = -2 / (a - o),
            t[11] = 0,
            t[12] = -(r + e) / (r - e),
            t[13] = -(i + n) / (i - n),
            t[14] = -(a + o) / (a - o),
            t[15] = 1,
            t
        }
    };
    function F(t, e, r, n, i) {
        this.azimuth = e,
        this.elevation = r,
        this.distance = n,
        this.brightness = i,
        this.wgl = t,
        this.near = .5,
        this.far = 50,
        this.recomputeViewMatrix(),
        this.projectionMatrix = S.makePerspective(new Float32Array(16), Math.PI / 4, 1, this.near, this.far),
        this.projectionViewMatrix = S.premultiply(new Float32Array(16), this.viewMatrix, this.projectionMatrix),
        this.shadowMapWidth = 512,
        this.depthColorTexture = t.buildTexture(t.RGBA, t.UNSIGNED_BYTE, this.shadowMapWidth, this.shadowMapWidth, null, t.CLAMP_TO_EDGE, t.CLAMP_TO_EDGE, t.LINEAR, t.LINEAR),
        this.depthRenderbuffer = t.createRenderbuffer(),
        t.renderbufferStorage(this.depthRenderbuffer, t.RENDERBUFFER, t.DEPTH_COMPONENT16, this.shadowMapWidth, this.shadowMapWidth),
        this.color = new Float32Array([i, i, i])
    }
    F.prototype.recomputeViewMatrix = function() {
        this.viewMatrix = S.makeIdentity(new Float32Array(16), new Float32Array(16));
        var t = S.makeXRotation(new Float32Array(16), this.elevation)
          , e = S.makeYRotation(new Float32Array(16), this.azimuth)
          , r = S.makeTranslation(new Float32Array(16), 0, 0, -this.distance);
        S.premultiply(this.viewMatrix, this.viewMatrix, e),
        S.premultiply(this.viewMatrix, this.viewMatrix, t),
        S.premultiply(this.viewMatrix, this.viewMatrix, r),
        this.position = new Float32Array([this.distance * Math.sin(Math.PI / 2 - this.elevation) * Math.sin(-this.azimuth), this.distance * Math.cos(Math.PI / 2 - this.elevation), this.distance * Math.sin(Math.PI / 2 - this.elevation) * Math.cos(-this.azimuth)])
    }
    ;
    var I = [1, .37, .3];
    function e(t, e) {
        for (var r = [], n = 0; n < 3; ++n) {
            var i = e / (.001 + I[n]);
            r[n] = Math.exp(-i * i / (2 * t)) / (2 * Math.PI * t)
        }
        return r
    }
    function L(t) {
        return C.addList([], [C.multiplyByScalar([], e(.0484, t), .1), C.multiplyByScalar([], e(.187, t), .118), C.multiplyByScalar([], e(.567, t), .113), C.multiplyByScalar([], e(1.99, t), .358), C.multiplyByScalar([], e(7.41, t), .078)])
    }
    function B(t) {
        var e = function f(t) {
            for (var e = 20 < t ? 3 : 2, r = [], n = 2 * e / (t - 1), i = 0; i < t; ++i) {
                var o = i * n - e
                  , a = o < 0 ? -1 : 1;
                r.push(e * a * Math.abs(Math.pow(o, 2)) / Math.pow(e, 2))
            }
            var s = [];
            for (i = 0; i < t; ++i) {
                var u = ((0 < i ? Math.abs(r[i] - r[i - 1]) : 0) + (i < t - 1 ? Math.abs(r[i] - r[i + 1]) : 0)) / 2;
                L(r[i]),
                (l = C.multiplyByScalar([], L(r[i]), u))[3] = r[i],
                s.push(l)
            }
            var l = s[Math.floor(t / 2)];
            for (i = Math.floor(t / 2); 0 < i; --i)
                s[i] = s[i - 1];
            s[0] = l;
            var h = C.addList([], s);
            for (i = 0; i < t; ++i)
                s[i][0] /= h[0],
                s[i][1] /= h[1],
                s[i][2] /= h[2];
            var c = [.58, .2, 0];
            for (s[0][0] = 1 * (1 - c[0]) + c[0] * s[0][0],
            s[0][1] = 1 * (1 - c[1]) + c[1] * s[0][1],
            s[0][2] = 1 * (1 - c[2]) + c[2] * s[0][2],
            i = 1; i < t; ++i)
                C.multiply(s[i], s[i], c);
            return s
        }(t)
          , r = ["precision highp float;", "varying vec2 v_coordinates;", "uniform sampler2D u_colorTexture;", "uniform vec2 u_direction;", "uniform vec2 u_resolution;", "uniform mat4 u_projectionMatrix;", "uniform float u_near;", "uniform float u_far;", "float linearizeDepth (float depth, float near, float far) {", "depth = 2.0 * depth - 1.0;", "return 2.0 * near * far / (far + near - depth * (far - near));", "}", "float rand(vec2 co){", "return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);", "}", "void main () {", "vec4 color = texture2D(u_colorTexture, v_coordinates);", "if (color.a == 0.0) discard;", "vec3 colorM = color.rgb;", "float z = 1.4;", "float width = 0.1;", "width *= (1.0 + rand(gl_FragCoord.xy) * 0.3);", "vec4 corner = vec4(width, width, z, 1.0);", "corner = u_projectionMatrix * corner;", "corner.xyz /= corner.w;", "corner.xy *= 0.5;", "corner.xy = abs(corner.xy);", "vec3 kernel0 = " + ("vec3(" + e[0][0].toFixed(10) + "," + e[0][1].toFixed(10) + "," + e[0][2].toFixed(10) + ")") + ";", "vec3 colorBlurred = colorM;", "colorBlurred *= kernel0;", "vec2 delta = u_direction * corner.xy;", "delta *= color.a;"].join("\n");
        r += "\n";
        for (var n = 1; n < e.length; ++n) {
            var i = e[n]
              , o = "sample" + n.toFixed(0);
            r += ["vec4 " + o + " = texture2D(u_colorTexture, v_coordinates + delta * " + i[3].toFixed(10) + ");", o + ".rgb = mix(colorM, " + o + ".rgb, step(0.01, " + o + ".a));", "colorBlurred.rgb += vec3(" + i[0].toFixed(10) + "," + i[1].toFixed(10) + "," + i[2].toFixed(10) + ") * " + o + ".rgb;"].join("\n"),
            r += "\n"
        }
        return r += ["gl_FragColor = vec4(colorBlurred, 1.0);", "}"].join("\n")
    }
    var N = 2.2;
    var O = .75;
    function V(t) {
        this.startValue = t,
        this.endValue = t,
        this.startGradient = 0,
        this.endGradient = 0,
        this.duration = 1,
        this.changeTime = -1
    }
    function k(t) {
        this.wgl = t,
        this.width = 256,
        this.height = 256,
        this.splatProgram = t.createProgram(D["splatopening.vert"], D["splatopening.frag"], {
            a_position: 0
        }),
        this.feedbackProgram = t.createProgram(D["fullscreen.vert"], D["feedback.frag"], {
            a_position: 0
        }),
        this.triangleVertexBuffer = t.buildBuffer(t.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), t.STATIC_DRAW),
        this.texture = t.buildTexture(t.RGBA, t.UNSIGNED_BYTE, this.width, this.height, null, t.CLAMP_TO_EDGE, t.CLAMP_TO_EDGE, t.LINEAR, t.LINEAR),
        this.textureTemp = t.buildTexture(t.RGBA, t.UNSIGNED_BYTE, this.width, this.height, null, t.CLAMP_TO_EDGE, t.CLAMP_TO_EDGE, t.LINEAR, t.LINEAR),
        this.framebuffer = t.createFramebuffer(),
        this.frame = 0,
        this.scale = new _(0),
        this.perNoteScale = 0,
        this.boost = new V(0),
        this.phase = 0,
        this.scaleT = 0
    }
    function H(t, e, r, n) {
        b.call(this, t, e, 3, d(t, "getEyePositionData", "number", ["number", "number"], [r, n]), d(t, "getEyeNormalData", "number", ["number", "number"], [r, n]), d(t, "getEyeVertexCount", "number", ["number", "number"], [r, n]), d(t, "getEyeIndexData", "number", ["number", "number"], [r, n]), d(t, "getEyeIndexCount", "number", ["number", "number"], [r, n])),
        this.getPosition = d(t, "getEyePosition", "number", ["number", "number"], [r, n]);
        var i = t._getEyeModelMatrix(r, n) >> 2;
        this.modelMatrix = t.HEAPF32.subarray(i, i + 16);
        var o = t._getEyeNormalMatrix(r, n) >> 2;
        this.normalMatrix = t.HEAPF32.subarray(o, o + 16)
    }
    function X(t, e, r, n) {
        b.call(this, t, e, 3, d(t, "getToothPositionData", "number", ["number", "number"], [r, n]), d(t, "getToothNormalData", "number", ["number", "number"], [r, n]), d(t, "getToothVertexCount", "number", ["number", "number"], [r, n]), d(t, "getToothIndexData", "number", ["number", "number"], [r, n]), d(t, "getToothIndexCount", "number", ["number", "number"], [r, n]));
        var i = t._getToothModelMatrix(r, n) >> 2;
        this.modelMatrix = t.HEAPF32.subarray(i, i + 16)
    }
    function G(t, e, r) {
        b.call(this, t, e, 3, d(t, "getTonguePositionData", "number", ["number"], [r]), d(t, "getTongueNormalData", "number", ["number"], [r]), d(t, "getTongueVertexCount", "number", ["number"], [r]), d(t, "getTongueIndexData", "number", ["number"], [r]), d(t, "getTongueIndexCount", "number", ["number"], [r]))
    }
    function W(t, e, r) {
        this.module = t,
        this.wgl = e,
        this.dimension = 2,
        this.getPositionData = d(t, "getOpeningPositionData", "number", ["number"], [r]),
        this.getVertexCount = d(t, "getOpeningVertexCount", "number", ["number"], [r]),
        this.getIndices = d(t, "getOpeningIndexData", "number", ["number"], [r]),
        this.getIndexCount = d(t, "getOpeningIndexCount", "number", ["number"], [r]),
        this.indices = this.module.HEAPU16.subarray(this.getIndices() >> 1, (this.getIndices() >> 1) + this.getIndexCount()),
        this.indicesCount = this.indices.length,
        this.vertices = this.module.HEAPF32.subarray(this.getPositionData() >> 2, (this.getPositionData() >> 2) + this.getVertexCount() * this.dimension),
        this.positionsBuffer = e.buildBuffer(e.ARRAY_BUFFER, new Float32Array(this.vertices), e.DYNAMIC_DRAW),
        this.indexBuffer = e.buildBuffer(e.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indices), e.DYNAMIC_DRAW)
    }
    function Y(t, e, r, n, i, o, a, s, u, l) {}
    V.prototype.computeT = function() {
        var t = Date.now() / 1e3;
        return g.linearstep(this.changeTime, this.changeTime + this.duration, t)
    }
    ,
    V.prototype.evaluate = function() {
        if (0 === this.duration)
            return this.endValue;
        var t = this.computeT();
        return t <= 0 ? this.startValue : 1 <= t ? this.endValue : function s(t, e, r, n, i) {
            var o = t * t
              , a = t * t * t;
            return (2 * a - 3 * o + 1) * e + (a - 2 * o + t) * n + (-2 * a + 3 * o) * r + (a - o) * i
        }(t, this.startValue, this.endValue, this.startGradient * this.duration, this.endGradient * this.duration)
    }
    ,
    V.prototype.evaluateGradient = function() {
        var t = this.computeT();
        return t <= 0 || 1 <= t ? 0 : function a(t, e, r, n, i) {
            var o = t * t;
            return (6 * o - 6 * t) * e + (3 * o - 4 * t + 1) * n + (-6 * o + 6 * t) * r + (3 * o - 2 * t) * i
        }(t, this.startValue, this.endValue, this.startGradient * this.duration, this.endGradient * this.duration) / this.duration
    }
    ,
    k.prototype.update = function(t, e, r) {
        var n = this.wgl.gl;
        this.frame += 1,
        r.isSinging ? this.scale.change(1, 5) : this.scale.change(0, 1),
        r.isSinging && r.getIsDragging() ? this.boost.change(1, 1, 0, 0) : this.boost.change(0, 2, 0, 0);
        var i = r.isSinging ? g.linearstep(0, .5, r.getSecondsOnCurrentNote()) : 0;
        this.perNoteScale = g.mix(this.perNoteScale, i, .5);
        var o = r.getCurrentScaleIndex() / (r.getScaleLength() - 1);
        this.scaleT = g.mix(this.scaleT, o, .03);
        var a = g.mix(.02, .26, Math.pow(o, 3))
          , s = this.perNoteScale;
        this.phase += a;
        var u = Math.floor(this.phase) % 2 == 0 ? this.phase % 1 : 1 - this.phase % 1;
        n.bindFramebuffer(n.FRAMEBUFFER, this.framebuffer),
        n.framebufferTexture2D(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, this.texture, 0),
        n.viewport(0, 0, this.width, this.height),
        n.useProgram(this.splatProgram.program),
        n.uniform1f(this.splatProgram.uniformLocations.u_phase, u),
        n.uniform1f(this.splatProgram.uniformLocations.u_index, Math.pow(this.scaleT, 3)),
        n.uniform1f(this.splatProgram.uniformLocations.u_on, this.scale.evaluate() * s),
        n.enableVertexAttribArray(0);
        for (var l = e.length - 1; 0 <= l; --l) {
            var h = e[l].opening
              , c = S.premultiply(new Float32Array(16), e[l].modelMatrix, t.projectionViewMatrix);
            n.uniformMatrix4fv(this.splatProgram.uniformLocations.u_projectionViewModelMatrix, !1, c),
            n.bindBuffer(n.ARRAY_BUFFER, h.positionsBuffer),
            n.vertexAttribPointer(0, 2, n.FLOAT, n.FALSE, 0, 0),
            n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, h.indexBuffer),
            n.drawElements(n.TRIANGLES, h.indicesCount, n.UNSIGNED_SHORT, 0)
        }
        n.disableVertexAttribArray(0);
        var f = e[0].getOpeningCenter()
          , m = t.worldToScreenSpace([f[0], f[1], 0]);
        n.enableVertexAttribArray(0),
        n.framebufferTexture2D(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, this.textureTemp, 0),
        n.useProgram(this.feedbackProgram.program),
        n.viewport(0, 0, this.width, this.height),
        n.activeTexture(n.TEXTURE0),
        n.bindTexture(n.TEXTURE_2D, this.texture),
        n.uniform1i(this.feedbackProgram.uniformLocations.texture, 0),
        n.uniform2f(this.feedbackProgram.uniformLocations.u_resolution, this.wrinkleTextureWidth, this.wrinkleTextureHeight),
        n.uniform2f(this.feedbackProgram.uniformLocations.u_origin, m[0], m[1]),
        n.uniform1f(this.feedbackProgram.uniformLocations.u_frame, this.frame),
        n.bindBuffer(n.ARRAY_BUFFER, this.triangleVertexBuffer),
        n.vertexAttribPointer(0, 2, n.FLOAT, !1, 0, 0),
        n.drawArrays(n.TRIANGLES, 0, 3),
        function d(t, e, r) {
            var n = t[e];
            t[e] = t[r],
            t[r] = n
        }(this, "texture", "textureTemp"),
        n.disableVertexAttribArray(0),
        n.bindFramebuffer(n.FRAMEBUFFER, null)
    }
    ,
    (H.prototype = Object.create(b.prototype)).constructor = b,
    (X.prototype = Object.create(b.prototype)).constructor = b,
    (G.prototype = Object.create(b.prototype)).constructor = b,
    W.prototype.update = function() {
        var t = this.wgl;
        this.indices = this.module.HEAPU16.subarray(this.getIndices() >> 1, (this.getIndices() >> 1) + this.getIndexCount()),
        t.bufferData(this.indexBuffer, t.ELEMENT_ARRAY_BUFFER, this.indices, t.DYNAMIC_DRAW),
        this.indicesCount = this.indices.length,
        this.vertices = this.module.HEAPF32.subarray(this.getPositionData() >> 2, (this.getPositionData() >> 2) + this.getVertexCount() * this.dimension),
        t.bufferData(this.positionsBuffer, t.ARRAY_BUFFER, this.vertices, t.DYNAMIC_DRAW)
    }
    ,
    Y.prototype.getIsDragging = function() {
        // return 1 === this.getMouthIsDragging(this.mouthIndex)
        return true // TODO
    }
    ;
    var z = [0, 0, 0]
      , j = [0, 0, 0];
    function q(t, e, r, n, i, o, a, s) {
        this.frame = 0,
        this.onDelay = n,
        this.offDelay = i,
        this.dragExponent = o,
        this.dragStiffnessScale = a,
        this.followFactor = s,
        this.mouth = t,
        this.minMidiNote = e,
        this.maxMidiNote = r,
        this.openness = new V(0),
        this.autoScale = new _(0),
        this.voice = new K(this.minMidiNote),
        this.vibratoPhase = 0,
        this.lastStartedHarmonisingTime = 0,
        this.actualMinNote = 999999,
        this.actualMaxNote = -999999,
        this.lastSeenNote = null,
        this.lastNotNullTime = Date.now(),
        this.lastNullTime = -999999,
        this.dragX = 0
    }
    function K(t) {
        this.midiNote = new _(t)
    }
    Y.prototype.step = function(t, e) {
        S.transformPosition(z, t, this.inverseModelMatrix),
        S.transformDirection(j, e, this.inverseModelMatrix),
        this.module._step(this.mouthIndex, z[0], z[1], z[2], j[0], j[1], j[2], this.oscillationScale)
    }
    ,
    Y.prototype.wouldDrag = function(t, e) {
        return S.transformPosition(z, t, this.inverseModelMatrix),
        S.transformDirection(j, e, this.inverseModelMatrix),
        Boolean(this.module._wouldDrag(this.mouthIndex, z[0], z[1], z[2], j[0], j[1], j[2]))
    }
    ,
    Y.prototype.startDrag = function(t, e) {
        return S.transformPosition(z, t, this.inverseModelMatrix),
        S.transformDirection(j, e, this.inverseModelMatrix),
        Boolean(this.module._startDrag(this.mouthIndex, z[0], z[1], z[2], j[0], j[1], j[2]))
    }
    ,
    Y.prototype.stopDrag = function() {
        this.module._stopDrag(this.mouthIndex)
    }
    ,
    Y.prototype.getPan = function() {
        return g.clamp(this.position[0], -1, 1)
    }
    ,
    Y.prototype.getOpeningCenter = function() {
        return this.module.HEAPF32.subarray(this.module._getOpeningCenter() >> 2, 2 + (this.module._getOpeningCenter() >> 2))
    }
    ,
    Y.prototype.update = function() {
        this.usesWrinkleMesh ? this.wrinkleMesh.update(!1) : this.embeddedMesh.update(),
        this.insideMesh.update(),
        this.opening.update(),
        this.tongue.update()
    }
    ,
    q.prototype.update = function(t, e, r, n, i, o) {
        this.frame += 1,
        this.vibratoPhase += r * t * 2 * Math.PI;
        var a = !1
          , s = 0
          , u = 0;
        if (null === e)
            null !== this.lastSeenNote && (this.lastNullTime = Date.now()),
            Date.now() - this.lastNullTime > 1e3 * this.offDelay && (s = this.openness.evaluate(),
            this.autoScale.change(0, .3),
            this.openness.change(Math.max(0, this.openness.evaluate() - .015), 0, 1, 0));
        else if (null === this.lastSeenNote && (this.lastNotNullTime = Date.now()),
        Date.now() - this.lastNotNullTime > 1e3 * this.onDelay) {
            a = !0,
            this.voice.setNote(e);
            var l = Math.max(0, g.remap(this.minMidiNote, this.maxMidiNote, 0, 1, e));
            l = g.remap(0, 1, .3, 1.1, l),
            this.actualMinNote = Math.min(this.actualMinNote, e),
            this.actualMaxNote = Math.max(this.actualMaxNote, e),
            this.openness.change(l, .3, 1, 0),
            u = Math.sin(this.vibratoPhase) * n * .07,
            this.autoScale.change(1, 1)
        }
        s = this.openness.evaluate() + u * this.autoScale.evaluate();
        if (a || 0 < this.mouth.getClosedUnclosedRatio()) {
            this.voice.setNote(Math.max(this.voice.getNote() - .2, this.minMidiNote)); // TODO
        }
        var h = 0
          , c = .01;
        i && (h = .5 * o,
        c = this.followFactor),
        this.dragX = g.mix(this.dragX, h, c);
        var f = 1.5 * -s;
        this.mouth.setAutoDrag(this.autoScale.evaluate(), 9, this.dragExponent, this.dragStiffnessScale, this.dragX, f),
        this.lastSeenNote = e
    }
    ,
    K.prototype.getNote = function() {
        return this.midiNote.targetValue
    }
    ,
    K.prototype.setNote = function(t) {
        this.midiNote.change(t, .32)
    }
    ;
    var Z = [67, 69, 71, 72, 74, 76, 77, 79, 81, 83, 84];
    function Q(t, e, r, n) {
        this.audio = t,
        this.neuralNet = e,
        this.mouths = r,
        this.transpose = n;

        // var delays = [
        //     .1,
        //     .6,
        //     1.1
        // ];
        var delays = [
            0,
            0,
            0
        ];

        this.harmonyMouthControllers = [
            new q(function(){},60,72,delays[0], 0  , 5  , .8 , .2 ),
            new q(function(){},50,66,delays[1],  .2, 2.5, .65, .15),
            new q(function(){},43,58,delays[2],  .4, 1  , .5 , .1 )
        ];

        var dontPlayFirstChord = true;
        this.neuralNet.addOnNotesCallback(function(t) {
            if (this.isSinging) {
                for (var e = [], r = 0; r < 3; ++r) {
                    var n = t[r][0];
                    e.push(n)
                }

                this.harmonyNotes = e;

                if (dontPlayFirstChord) {
                    dontPlayFirstChord = false;
                    return;
                }

                // TODO
                var notes = [this.currentNote, e[0], e[1], e[2]];
                for (var i = 0; i < notes.length; i += 1) {
                    var uiNote = document.querySelector('[data-midi-number="' + notes[i] + '"]');
                    if (uiNote) {
                        (function(uiNote){
                            uiNote.setAttribute('is-playing', '');
                            setTimeout(function(){
                                uiNote.removeAttribute('is-playing');
                            }, 300)
                        })(uiNote);
                    }

                    if (i >= 0) {
                        // CHORDS.synths[i].triggerAttackRelease(Tone.Frequency(notes[i] + this.transpose, 'midi').toNote(), '4n');
                    }
                }

                var n0 = Tone.Frequency(notes[0] + this.transpose, 'midi').toNote()
                var n1 = Tone.Frequency(notes[1] + this.transpose, 'midi').toNote()
                var n2 = Tone.Frequency(notes[2] + this.transpose, 'midi').toNote()
                var n3 = Tone.Frequency(notes[3] + this.transpose, 'midi').toNote()
                CHORDS.polysynth.triggerAttackRelease([n0, n1, n2, n3], '4n');
            }
        }.bind(this));

        this.currentNote = Z[0];
        this.timeCurrentNoteReached = Date.now();
        this.generatedHarmonisationForCurrentNote = false;
        this.harmonisedThisPull = false;
        // this.melodyMouth = this.mouths[0];
        this.melodyVoice = new K(Z[0]);
        this.harmonyNotes = null;
        this.frame = 0;
        this.isSinging = true;
    }
    function J(t, e) {
        return (t % e + e) % e
    }
    function $() {
        this.gradients = [];
        for (var t = 0; t < 1024; ++t)
            this.gradients.push(16 * Math.random() - 8)
    }

    function et(t, e, r, n) {
        this.simplified = t,
        this.onProgress = r,
        this.onLoaded = n;
        var i, o, a = !1, s = !1, u = [function(e) {
            m().then(function(t) {
                o = i = t,
                e()
            })
        }
        , function(t) {
            this.audio = function(){},
            t()
        }
        , function(t) {
            i._initialize(Math.floor(100 * Math.random())),
            t()
        }
        , function(t) {
            t()
        }
        , function(t) {
            this.ui = new f(this.wgl,t)
        }
        , function(t) {
            this.conductor = new Q(
                this.audio,
                this.neuralNet,
                this.mouths,
                4
            ),
            t()
        }
        , function(t) {
            this.mouseX = 0,
            this.mouseY = 0,
            this.mouseDown = !1,
            this.frame = 0,
            t()
        }
        ];
        this.neuralNet = new HarmonizeNeuralNetwork(function() {
            a = !0,
            s && window.setTimeout(function() {
                r(1),
                this.onLoaded()
            }
            .bind(this), 4)
        }
        .bind(this));
        var l = 0;
        function h() {
            r(l / (u.length + (a ? 0 : 1))),
            l < u.length ? (u[l].call(this, function() {
                window.setTimeout(h, 4)
            }),
            l += 1) : (s = !0,
            a && this.onLoaded())
        }
        (h = h.bind(this))()
    }
    function rt() {
        return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)
    }
    Q.prototype.update = function(t) {
        e = window.CHORDS.activeMelodyNote; // TODO

        if (e !== this.currentNote) {
            this.currentNote = e;
            this.timeCurrentNoteReached = Date.now();
            this.generatedHarmonisationForCurrentNote = false;
        }

        if (!this.isSinging) {
            if (this.melodyMouth.getClosedUnclosedRatio() === 1 && this.melodyMouth.getIsDragging()) {
                this.isSinging = true;
                this.harmonisedThisPull = false;
            }
        }

        this.melodyVoice.setNote(this.currentNote);

        this.isSinging = true; // TODO

        if (this.isSinging) {
            if (this.getSecondsOnCurrentNote() >= this.getTimeToHarmonise() && !this.generatedHarmonisationForCurrentNote) {
                this.generatedHarmonisationForCurrentNote = true;
                this.harmonisedThisPull = true;
                this.neuralNet.harmonize(this.currentNote);
            } else {
                this.harmonyNotes = null;
            }
        }

        var n = [this.melodyVoice, this.harmonyMouthControllers[0].voice, this.harmonyMouthControllers[1].voice, this.harmonyMouthControllers[2].voice];
    }
    ,
    Q.prototype.getTimeToHarmonise = function() {
        return this.harmonisedThisPull ? .22 : .1
    }
    ,
    Q.prototype.getScaleLength = function() {
        return Z.length
    }
    ,
    Q.prototype.getCurrentScaleIndex = function() {
        return Z.indexOf(this.currentNote)
    }
    ,
    Q.prototype.getIsDragging = function() {
        // return this.melodyMouth.getIsDragging()
        return true; // TODO
    }
    ,
    Q.prototype.getSecondsOnCurrentNote = function() {
        return (Date.now() - this.timeCurrentNoteReached) / 1e3
    }
    ,
    $.prototype.evaluate = function(t) {
        var e = Math.floor(t)
          , r = e + 1
          , n = t % 1;
        return .188 * function i(t, e, r) {
            return (1 - r) * t + r * e
        }(this.gradients[J(e, this.gradients.length)] * n, this.gradients[J(r, this.gradients.length)] * (n - 1), function o(t) {
            return t * t * t * (t * (6 * t - 15) + 10)
        }(n))
    }
    ,
    et.prototype.start = function() {
        // TODO
        var CHORDS = {};
        window.CHORDS = CHORDS;

        var melodyNote; // TODO
        CHORDS.activeMelodyNote = 67; // TODO

        CHORDS.synths = [
            new Tone.AMSynth().toMaster(),
            new Tone.AMSynth().toMaster(),
            new Tone.AMSynth().toMaster(),
            new Tone.AMSynth().toMaster()
        ]

        // CHORDS.polysynth = new Tone.PolySynth(4, Tone.Synth).toMaster();
        CHORDS.polysynth = new Tone.PolySynth(4, Tone.AMSynth).toMaster();
        // CHORDS.polysynth = new Tone.PolySynth(3, Tone.AMSynth).toMaster();

        var surface = document.querySelector('.Surface');

        var getNumber = function(el) {
            return parseInt(el.getAttribute('data-midi-number'), 10)
        };

        var isMouseDown = false;

        surface.addEventListener('mousedown', function(event){
            isMouseDown = true;
            CHORDS.activeMelodyNote = melodyNote = getNumber(event.target);
        });

        surface.addEventListener('mousemove', function(event){
            // if (event.target.getAttribute('data-midi-number') && isMouseDown) {
            if (event.target.getAttribute('data-midi-number')) {
                CHORDS.activeMelodyNote = melodyNote = getNumber(event.target);
            } else {
                melodyNote = false;
            }
        });

        surface.addEventListener('mouseup', function(event){
            isMouseDown = false;
            melodyNote = false;
        });

        var lastMelodyNote;
        var loop = function() {
            if (lastMelodyNote === melodyNote && melodyNote) {
                // CHORDS.synths[0].triggerAttack(Tone.Frequency(melodyNote + 4, 'midi').toNote());
            } else if (lastMelodyNote) {
                // CHORDS.synths[0].triggerRelease();
            }

            lastMelodyNote = melodyNote;

            requestAnimationFrame(function(){
                loop();
            })
        };

        loop();

        this.startTime = Date.now();
        var r = Date.now();
        function n(t) {
            var e = (t - r) / 1e3 || 0;
            r = t,
            this.update(e),
            requestAnimationFrame(n)
        }
        (n = n.bind(this))()
    }
    ,
    et.prototype.update = function(t) {
        this.conductor.update(t);
    }
    ;
    var nt = document.createElement("canvas")
      , it = c.create(nt);
    if (null !== it && function lt(t) {
        return 0 < t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).precision && 0 < t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).precision
    }(it) && function ht() {
        return "object" == typeof WebAssembly
    }() && function ct() {
        return window.AudioContext || window.webkitAudioContext
    }() && function ft() {
        return window.Worker
    }()) {
        document.getElementById("placeholder").outerHTML = document.getElementById("loading-template").innerHTML;
        var ot = rt() || null === it.getExtension("OES_texture_float")
          , at = rt() ? 3e4 : 5e4
          , st = rt();
        var ut = new et(ot,at,function(t) {
            document.getElementById("loading-fill").style.width = Math.round(100 * t).toFixed(0) + "%"
        }
        ,function() {
            function e() {
                document.getElementById("loading").className = "loading-hidden",
                window.setTimeout(function() {
                    document.getElementById("loading").outerHTML = document.getElementById("main-template").innerHTML,
                    ut.start()
                }, 200)
            }
            var r = !1;
            function t(t) {
                t.preventDefault(),
                r || (r = !0,
                ut.tryStartAudio(),
                e())
            }
            st ? (document.getElementById("loading-bar").className = "loading-button",
            document.getElementById("loading-bar").addEventListener("touchstart", function(t) {
                t.preventDefault()
            }),
            document.getElementById("loading-bar").addEventListener("touchend", t),
            document.getElementById("loading-bar").addEventListener("click", t)) : e()
        }
        )
    } else
        document.getElementById("placeholder").outerHTML = document.getElementById("no-support-template").innerHTML
}();
