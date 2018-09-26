/*!
 * licenses: MIT
 * version: 0.8.0
 * author: Toshiyuki Ienaga <ienaga@tvon.jp>
 * homepage: https://swf2js.wordpress.com/
 * copyright: (c) 2013 Toshiyuki Ienaga.
 */
/*jshint bitwise: false*/
if (!("swf2js" in window)) {
    (function(window) {

if (typeof Object.defineProperty !== "function") {
    Object.defineProperty = function (obj, prop, desc)
    {
        if ("value" in desc) {
            obj[prop] = desc.value;
        }

        if ("get" in desc) {
            obj.__defineGetter__(prop, desc.get);
        }

        if ("set" in desc) {
            obj.__defineSetter__(prop, desc.set);
        }

        return obj;
    };
}

if (typeof Object.defineProperties !== "function") {
    Object.defineProperties = function (obj, descs)
    {
        for (var prop in descs) {
            if (descs.hasOwnProperty(prop)) {
                Object.defineProperty(obj, prop, descs[prop]);
            }
        }
        return obj;
    };
}

if (typeof Object.getPrototypeOf !== "function") {
    Object.getPrototypeOf = function (obj)
    {
        return obj.__proto__;
    };
}

if (typeof Object.setPrototypeOf !== "function") {
    Object.setPrototypeOf = function (obj, proto)
    {
        obj.__proto__ = proto;
        return obj;
    };
}
/**
 * @constructor
 */
var CanvasToWebGL = function () {};

/**
 * enable
 */
CanvasToWebGL.prototype.enable = function ()
{
    /**
     * properties
     */
    Object.defineProperties(WebGLRenderingContext.prototype, {
        fillStyle: {
            get: function () {
                return this.getFillStyle();
            },
            set: function (fillStyle) {
                this.setFillStyle(fillStyle);
            }
        },
        strokeStyle: {
            get: function () {
                return this.getStrokeStyle();
            },
            set: function (strokeStyle) {
                this.setStrokeStyle(strokeStyle);
            }
        },
        lineWidth: {
            get: function () {
                return this.getLineWidth();
            },
            set: function (getLineWidth) {
                this.setLineWidth(getLineWidth);
            }
        },
        lineCap: {
            get: function () {
                return this.getLineCap();
            },
            set: function (lineCap) {
                this.setLineCap(lineCap);
            }
        },
        lineJoin: {
            get: function () {
                return this.getLineJoin();
            },
            set: function (lineJoin) {
                this.setLineJoin(lineJoin);
            }
        },
        miterLimit: {
            get: function () {
                return this.getMiterLimit();
            },
            set: function (miterLimit) {
                this.setMiterLimit(miterLimit);
            }
        }
    });

    /**
     * @returns {*}
     */
    WebGLRenderingContext.prototype.getFillStyle = function ()
    {
        return null;
    };

    /**
     * @param fillStyle
     */
    WebGLRenderingContext.prototype.setFillStyle = function (fillStyle)
    {

    };

    /**
     * @returns {*}
     */
    WebGLRenderingContext.prototype.getStrokeStyle = function ()
    {
        return null;
    };

    /**
     * @param strokeStyle
     */
    WebGLRenderingContext.prototype.setStrokeStyle = function (strokeStyle)
    {

    };

    /**
     * @returns {*}
     */
    WebGLRenderingContext.prototype.getLineWidth = function ()
    {
        return null;
    };

    /**
     * @param lineWidth
     */
    WebGLRenderingContext.prototype.setLineWidth = function (lineWidth)
    {

    };

    /**
     * @returns {*}
     */
    WebGLRenderingContext.prototype.getLineCap = function ()
    {
        return null;
    };

    /**
     * @param lineCap
     */
    WebGLRenderingContext.prototype.setLineCap = function (lineCap)
    {

    };

    /**
     * @returns {*}
     */
    WebGLRenderingContext.prototype.getLineJoin = function ()
    {
        return null;
    };

    /**
     * @param lineJoin
     */
    WebGLRenderingContext.prototype.setLineJoin = function (lineJoin)
    {

    };

    /**
     * @returns {*}
     */
    WebGLRenderingContext.prototype.getMiterLimit = function ()
    {
        return null;
    };

    /**
     * @param miterLimit
     */
    WebGLRenderingContext.prototype.setMiterLimit = function (miterLimit)
    {

    };

    /**
     * @param x
     * @param y
     */
    WebGLRenderingContext.prototype.moveTo = function (x, y)
    {

    };

    /**
     * @param x
     * @param y
     */
    WebGLRenderingContext.prototype.lineTo = function (x, y)
    {

    };

    /**
     * @param cpx
     * @param cpy
     * @param x
     * @param y
     */
    WebGLRenderingContext.prototype.quadraticCurveTo = function (cpx, cpy, x, y)
    {

    };

    /**
     * @param cpx1
     * @param cpy1
     * @param cpx2
     * @param cpy2
     * @param x
     * @param y
     */
    WebGLRenderingContext.prototype.bezierCurveTo = function (cpx1, cpy1, cpx2, cpy2, x, y)
    {

    };

    /**
     * @param x
     * @param y
     * @param radius
     * @param startAngle
     * @param endAngle
     * @param anticlockwise
     */
    WebGLRenderingContext.prototype.arc = function (x, y, radius, startAngle, endAngle, anticlockwise)
    {

    };

    /**
     * beginPath
     */
    WebGLRenderingContext.prototype.beginPath = function()
    {

    };


    /**
     * fill
     */
    WebGLRenderingContext.prototype.fill = function()
    {

    };

    /**
     * stroke
     */
    WebGLRenderingContext.prototype.stroke = function()
    {

    };

    /**
     * clip
     */
    WebGLRenderingContext.prototype.clip = function()
    {

    };

};
/**
 * @type {number}
 */
var graphicsId = 0;


/**
 * @constructor
 */
var Util = function () {};

// global parameters
Util.prototype.$stages      = [];
Util.prototype.$players     = [];
Util.prototype.$sounds      = [];
Util.prototype.$event       = null;
Util.prototype.$keyEvent    = null;

// OS
Util.prototype.$navigator   = window.navigator;
var ua                      = window.navigator.userAgent;
var isAndroid               = (ua.indexOf("Android") !== -1);
var isiOS                   = (ua.indexOf("iPhone") !== -1 || ua.indexOf("iPod") !== -1);
var isTouch                 = (isAndroid || isiOS);
Util.prototype.$isTouch     = isTouch;
Util.prototype.$isAndroid   = isAndroid;
Util.prototype.$isAndroid4x = (ua.indexOf("Android 4.") !== -1);
Util.prototype.$isChrome    = (ua.indexOf("Chrome") !== -1);

// event
Util.prototype.$startEvent = (isTouch) ? "touchstart" : "mousedown";
Util.prototype.$moveEvent  = (isTouch) ? "touchmove"  : "mousemove";
Util.prototype.$endEvent   = (isTouch) ? "touchend"   : "mouseup";

// Alpha Bug
var isAlphaBug   = isAndroid;
var chkCanvas    = window.document.createElement("canvas");
chkCanvas.width  = 1;
chkCanvas.height = 1;
var tmpContext   = chkCanvas.getContext("2d");
if (isAndroid) {
    var imageData  = tmpContext.createImageData(1, 1);
    var pixelArray = imageData.data;
    pixelArray[0]  = 128;
    pixelArray[3]  = 128;
    tmpContext.putImageData(imageData, 0, 0);

    imageData  = tmpContext.getImageData(0, 0, 1, 1);
    pixelArray = imageData.data;
    isAlphaBug = (pixelArray[0] === 255);
}
Util.prototype.$tmpContext = tmpContext;
Util.prototype.$isAlphaBug = isAlphaBug;

// shortcut
Util.prototype.$window             = window;
Util.prototype.$document           = window.document;
Util.prototype.$min                = Math.min;
Util.prototype.$max                = Math.max;
Util.prototype.$floor              = Math.floor;
Util.prototype.$ceil               = Math.ceil;
Util.prototype.$pow                = Math.pow;
Util.prototype.$random             = Math.random;
Util.prototype.$atan2              = Math.atan2;
Util.prototype.$sqrt               = Math.sqrt;
Util.prototype.$acos               = Math.acos;
Util.prototype.$sin                = Math.sin;
Util.prototype.$cos                = Math.cos;
Util.prototype.$tan                = Math.tan;
Util.prototype.$log                = Math.log;
Util.prototype.$abs                = Math.abs;
Util.prototype.$SQRT2              = Math.SQRT2;
Util.prototype.$LN2_2              = Math.LN2 / 2;
Util.prototype.$LOG1P              = 0.29756328478758615;
Util.prototype.$PI                 = Math.PI;
Util.prototype.$round              = Math.round;
Util.prototype.$parseFloat         = window.parseFloat;
Util.prototype.$Number             = window.Number;
Util.prototype.$fromCharCode       = window.String.fromCharCode;
Util.prototype.$isNaN              = window.isNaN;
Util.prototype.$setTimeout         = window.setTimeout;
Util.prototype.$clearTimeout       = window.clearTimeout;
Util.prototype.$setInterval        = window.setInterval;
Util.prototype.$clearInterval      = window.clearInterval;
Util.prototype.$parseInt           = window.parseInt;
Util.prototype.$Function           = window.Function;
Util.prototype.$encodeURIComponent = window.encodeURIComponent;
Util.prototype.$Date               = new Date();
Util.prototype.$canBtoa            = (typeof window.btoa !== "undefined");
Util.prototype.$canArrayBuffer     = (typeof window.ArrayBuffer !== "undefined");
Util.prototype.$devicePixelRatio   = window.devicePixelRatio || 1;

// check XMLHttpRequest2
Util.prototype.$canXHR2 = (function ()
{
    var xhr = new XMLHttpRequest();
    return (typeof xhr.responseType !== "undefined");
})();

// check WebGL
var canvas                  = window.document.createElement("canvas");
var canWebGL                = (typeof window.WebGLRenderingContext !== "undefined"
    && canvas.getContext("webgl") !== null);

Util.prototype.$canWebGL = false; // TODO canWebGL

if (canWebGL) {
    var ctw = new CanvasToWebGL();
    ctw.enable();
}

// check requestAnimationFrame
Util.prototype.$requestAnimationFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.setTimeout;

// JCT
Util.prototype.$JCT11280 = new window.Function('var a="zKV33~jZ4zN=~ji36XazM93y!{~k2y!o~k0ZlW6zN?3Wz3W?{EKzK[33[`y|;-~j^YOTz$!~kNy|L1$353~jV3zKk3~k-4P4zK_2+~jY4y!xYHR~jlz$_~jk4z$e3X5He<0y!wy|X3[:~l|VU[F3VZ056Hy!nz/m1XD61+1XY1E1=1y|bzKiz!H034zKj~mEz#c5ZA3-3X$1~mBz$$3~lyz#,4YN5~mEz#{ZKZ3V%7Y}!J3X-YEX_J(3~mAz =V;kE0/y|F3y!}~m>z/U~mI~j_2+~mA~jp2;~m@~k32;~m>V}2u~mEX#2x~mBy+x2242(~mBy,;2242(~may->2&XkG2;~mIy-_2&NXd2;~mGz,{4<6:.:B*B:XC4>6:.>B*BBXSA+A:X]E&E<~r#z+625z s2+zN=`HXI@YMXIAXZYUM8X4K/:Q!Z&33 3YWX[~mB`{zKt4z (zV/z 3zRw2%Wd39]S11z$PAXH5Xb;ZQWU1ZgWP%3~o@{Dgl#gd}T){Uo{y5_d{e@}C(} WU9|cB{w}bzvV|)[} H|zT}d||0~{]Q|(l{|x{iv{dw}(5}[Z|kuZ }cq{{y|ij}.I{idbof%cu^d}Rj^y|-M{ESYGYfYsZslS`?ZdYO__gLYRZ&fvb4oKfhSf^d<Yeasc1f&a=hnYG{QY{D`Bsa|u,}Dl|_Q{C%xK|Aq}C>|c#ryW=}eY{L+`)][YF_Ub^h4}[X|?r|u_ex}TL@YR]j{SrXgo*|Gv|rK}B#mu{R1}hs|dP{C7|^Qt3|@P{YVV |8&}#D}ef{e/{Rl|>Hni}R1{Z#{D[}CQlQ||E}[s{SG_+i8eplY[=[|ec[$YXn#`hcm}YR|{Ci(_[ql|?8p3]-}^t{wy}4la&pc|3e{Rp{LqiJ],] `kc(]@chYnrM`O^,ZLYhZB]ywyfGY~aex!_Qww{a!|)*lHrM{N+n&YYj~Z b c#e_[hZSon|rOt`}hBXa^i{lh|<0||r{KJ{kni)|x,|0auY{D!^Sce{w;|@S|cA}Xn{C1h${E]Z-XgZ*XPbp]^_qbH^e[`YM|a||+=]!Lc}]vdBc=j-YSZD]YmyYLYKZ9Z>Xcczc2{Yh}9Fc#Z.l{}(D{G{{mRhC|L3b#|xK[Bepj#ut`H[,{E9Yr}1b{[e]{ZFk7[ZYbZ0XL]}Ye[(`d}c!|*y`Dg=b;gR]Hm=hJho}R-[n}9;{N![7k_{UbmN]rf#pTe[x8}!Qcs_rs[m`|>N}^V})7{^r|/E}),}HH{OYe2{Skx)e<_.cj.cjoMhc^d}0uYZd!^J_@g,[[[?{i@][|3S}Yl3|!1|eZ|5IYw|1D}e7|Cv{OHbnx-`wvb[6[4} =g+k:{C:}ed{S]|2M]-}WZ|/q{LF|dYu^}Gs^c{Z=}h>|/i|{W]:|ip{N:|zt|S<{DH[p_tvD{N<[8Axo{X4a.^o^X>Yfa59`#ZBYgY~_t^9`jZHZn`>G[oajZ;X,i)Z.^~YJe ZiZF^{][[#Zt^|]Fjx]&_5dddW]P0C[-]}]d|y {C_jUql] |OpaA[Z{lp|rz}:Mu#]_Yf6{Ep?f5`$[6^D][^u[$[6^.Z8]]ePc2U/=]K^_+^M{q*|9tYuZ,s(dS{i=|bNbB{uG}0jZOa:[-]dYtu3]:]<{DJ_SZIqr_`l=Yt`gkTnXb3d@kiq0a`Z{|!B|}e}Ww{Sp,^Z|0>_Z}36|]A|-t}lt{R6pi|v8hPu#{C>YOZHYmg/Z4nicK[}hF_Bg|YRZ7c|crkzYZY}_iXcZ.|)U|L5{R~qi^Uga@Y[xb}&qdbd6h5|Btw[}c<{Ds53[Y7]?Z<|e0{L[ZK]mXKZ#Z2^tavf0`PE[OSOaP`4gi`qjdYMgys/?[nc,}EEb,eL]g[n{E_b/vcvgb.{kcwi`~v%|0:|iK{Jh_vf5lb}KL|(oi=LrzhhY_^@`zgf[~g)[J_0fk_V{T)}I_{D&_/d9W/|MU[)f$xW}?$xr4<{Lb{y4}&u{XJ|cm{Iu{jQ}CMkD{CX|7A}G~{kt)nB|d5|<-}WJ}@||d@|Iy}Ts|iL|/^|no|0;}L6{Pm]7}$zf:|r2}?C_k{R(}-w|`G{Gy[g]bVje=_0|PT{^Y^yjtT[[[l!Ye_`ZN]@[n_)j3nEgMa]YtYpZy].d-Y_cjb~Y~[nc~sCi3|zg}B0}do{O^{|$`_|D{}U&|0+{J3|8*]iayx{a{xJ_9|,c{Ee]QXlYb]$[%YMc*]w[aafe]aVYi[fZEii[xq2YQZHg]Y~h#|Y:thre^@^|_F^CbTbG_1^qf7{L-`VFx Zr|@EZ;gkZ@slgko`[e}T:{Cu^pddZ_`yav^Ea+[#ZBbSbO`elQfLui}.F|txYcbQ`XehcGe~fc^RlV{D_0ZAej[l&jShxG[ipB_=u:eU}3e8[=j|{D(}dO{Do[BYUZ0/]AYE]ALYhZcYlYP/^-^{Yt_1_-;YT`P4BZG=IOZ&]H[e]YYd[9^F[1YdZxZ?Z{Z<]Ba2[5Yb[0Z4l?]d_;_)a?YGEYiYv`_XmZs4ZjY^Zb]6gqGaX^9Y}dXZr[g|]Y}K aFZp^k^F]M`^{O1Ys]ZCgCv4|E>}8eb7}l`{L5[Z_faQ|c2}Fj}hw^#|Ng|B||w2|Sh{v+[G}aB|MY}A{|8o}X~{E8paZ:]i^Njq]new)`-Z>haounWhN}c#{DfZ|fK]KqGZ=:u|fqoqcv}2ssm}.r{]{nIfV{JW)[K|,Z{Uxc|]l_KdCb%]cfobya3`p}G^|LZiSC]U|(X|kBlVg[kNo({O:g:|-N|qT}9?{MBiL}Sq{`P|3a|u.{Uaq:{_o|^S}jX{Fob0`;|#y_@[V[K|cw[<_ }KU|0F}d3|et{Q7{LuZttsmf^kYZ`Af`}$x}U`|Ww}d]| >}K,r&|XI|*e{C/a-bmr1fId4[;b>tQ_:]hk{b-pMge]gfpo.|(w[jgV{EC1Z,YhaY^q,_G[c_g[J0YX]`[h^hYK^_Yib,` {i6vf@YM^hdOKZZn(jgZ>bzSDc^Z%[[o9[2=/YHZ(_/Gu_`*|8z{DUZxYt^vuvZjhi^lc&gUd4|<UiA`z]$b/Z?l}YI^jaHxe|;F}l${sQ}5g}hA|e4}?o{ih}Uz{C)jPe4]H^J[Eg[|AMZMlc}:,{iz}#*|gc{Iq|/:|zK{l&}#u|myd{{M&v~nV};L|(g|I]ogddb0xsd7^V})$uQ{HzazsgxtsO^l}F>ZB]r|{7{j@cU^{{CbiYoHlng]f+nQ[bkTn/}<-d9q {KXadZYo+n|l[|lc}V2{[a{S4Zam~Za^`{HH{xx_SvF|ak=c^[v^7_rYT`ld@]:_ub%[$[m](Shu}G2{E.ZU_L_R{tz`vj(f?^}hswz}GdZ}{S:h`aD|?W|`dgG|if{a8|J1{N,}-Ao3{H#{mfsP|[ bzn+}_Q{MT{u4kHcj_q`eZj[8o0jy{p7}C|[}l){MuYY{|Ff!Ykn3{rT|m,^R|,R}$~Ykgx{P!]>iXh6[l[/}Jgcg{JYZ.^qYfYIZl[gZ#Xj[Pc7YyZD^+Yt;4;`e8YyZVbQ7YzZxXja.7SYl[s]2^/Ha$[6ZGYrb%XiYdf2]H]kZkZ*ZQ[ZYS^HZXcCc%Z|[(bVZ]]:OJQ_DZCg<[,]%Zaa [g{C00HY[c%[ChyZ,Z_`PbXa+eh`^&jPi0a[ggvhlekL]w{Yp^v}[e{~;k%a&k^|nR_z_Qng}[E}*Wq:{k^{FJZpXRhmh3^p>de^=_7`|ZbaAZtdhZ?n4ZL]u`9ZNc3g%[6b=e.ZVfC[ZZ^^^hD{E(9c(kyZ=bb|Sq{k`|vmr>izlH[u|e`}49}Y%}FT{[z{Rk}Bz{TCc/lMiAqkf(m$hDc;qooi[}^o:c^|Qm}a_{mrZ(pA`,}<2sY| adf_%|}`}Y5U;}/4|D>|$X{jw{C<|F.hK|*A{MRZ8Zsm?imZm_?brYWZrYx`yVZc3a@f?aK^ojEd {bN}/3ZH]/$YZhm^&j 9|(S|b]mF}UI{q&aM]LcrZ5^.|[j`T_V_Gak}9J[ ZCZD|^h{N9{~&[6Zd{}B}2O|cv]K}3s}Uy|l,fihW{EG`j_QOp~Z$F^zexS`dcISfhZBXP|.vn|_HYQ|)9|cr]<`&Z6]m_(ZhPcSg>`Z]5`~1`0Xcb4k1{O!bz|CN_T{LR|a/gFcD|j<{Z._[f)mPc:1`WtIaT1cgYkZOaVZOYFrEe[}T$}Ch}mk{K-^@]fH{Hdi`c*Z&|Kt{if[C{Q;{xYB`dYIX:ZB[}]*[{{p9|4GYRh2ao{DS|V+[zd$`F[ZXKadb*A] Ys]Maif~a/Z2bmclb8{Jro_rz|x9cHojbZ{GzZx_)]:{wAayeDlx}<=`g{H1{l#}9i|)=|lP{Qq}.({La|!Y{i2EZfp=c*}Cc{EDvVB|;g}2t{W4av^Bn=]ri,|y?|3+}T*ckZ*{Ffr5e%|sB{lx^0]eZb]9[SgAjS_D|uHZx]dive[c.YPkcq/}db{EQh&hQ|eg}G!ljil|BO]X{Qr_GkGl~YiYWu=c3eb}29v3|D|}4i||.{Mv})V{SP1{FX}CZW6{cm|vO{pS|e#}A~|1i}81|Mw}es|5[}3w{C`h9aL]o{}p[G`>i%a1Z@`Ln2bD[$_h`}ZOjhdTrH{[j_:k~kv[Sdu]CtL}41{I |[[{]Zp$]XjxjHt_eThoa#h>sSt8|gK|TVi[Y{t=}Bs|b7Zpr%{gt|Yo{CS[/{iteva|cf^hgn}($_c^wmb^Wm+|55jrbF|{9^ q6{C&c+ZKdJkq_xOYqZYSYXYl`8]-cxZAq/b%b*_Vsa[/Ybjac/OaGZ4fza|a)gY{P?| I|Y |,pi1n7}9bm9ad|=d{aV|2@[(}B`d&|Uz}B}{`q|/H|!JkM{FU|CB|.{}Az}#P|lk}K{|2rk7{^8^?`/|k>|Ka{Sq}Gz}io{DxZh[yK_#}9<{TRdgc]`~Z>JYmYJ]|`!ZKZ]gUcx|^E[rZCd`f9oQ[NcD_$ZlZ;Zr}mX|=!|$6ZPZYtIo%fj}CpcN|B,{VDw~gb}@hZg`Q{LcmA[(bo`<|@$|o1|Ss}9Z_}tC|G`{F/|9nd}i=}V-{L8aaeST]daRbujh^xlpq8|}zs4bj[S`J|]?G{P#{rD{]I`OlH{Hm]VYuSYUbRc*6[j`8]pZ[bt_/^Jc*[<Z?YE|Xb|?_Z^Vcas]h{t9|Uwd)_(=0^6Zb{Nc} E[qZAeX[a]P^|_J>e8`W^j_Y}R{{Jp__]Ee#e:iWb9q_wKbujrbR}CY`,{mJ}gz{Q^{t~N|? gSga`V_||:#mi}3t|/I`X{N*|ct|2g{km}gi|{={jC}F;|E}{ZZjYf*frmu}8Tdroi{T[|+~}HG{cJ}DM{Lp{Ctd&}$hi3|FZ| m}Kr|38}^c|m_|Tr{Qv|36}?Up>|;S{DV{k_as}BK{P}}9p|t`jR{sAm4{D=b4pWa[}Xi{EjwEkI}3S|E?u=X0{jf} S|NM|JC{qo^3cm]-|JUx/{Cj{s>{Crt[UXuv|D~|j|d{YXZR}Aq}0r}(_{pJfi_z}0b|-vi)Z mFe,{f4|q`b{}^Z{HM{rbeHZ|^x_o|XM|L%|uFXm}@C_{{Hhp%a7|0p[Xp+^K}9U{bP}: tT}B|}+$|b2|[^|~h{FAby[`{}xgygrt~h1[li`c4vz|,7p~b(|mviN}^pg[{N/|g3|^0c,gE|f%|7N{q[|tc|TKA{LU}I@|AZp(}G-sz{F |qZ{}F|f-}RGn6{Z]_5})B}UJ{FFb2]4ZI@v=k,]t_Dg5Bj]Z-]L]vrpdvdGlk|gF}G]|IW}Y0[G| /bo|Te^,_B}#n^^{QHYI[?hxg{[`]D^IYRYTb&kJ[cri[g_9]Ud~^_]<p@_e_XdNm-^/|5)|h_{J;{kacVopf!q;asqd}n)|.m|bf{QW|U)}b+{tL|w``N|to{t ZO|T]jF}CB|0Q{e5Zw|k |We}5:{HO{tPwf_uajjBfX}-V_C_{{r~gg|Ude;s+}KNXH}! `K}eW{Upwbk%ogaW}9EYN}YY|&v|SL{C3[5s.]Y]I]u{M6{pYZ`^,`ZbCYR[1mNg>rsk0Ym[jrE]RYiZTr*YJ{Ge|%-lf|y(`=[t}E6{k!|3)}Zk} ][G{E~cF{u3U.rJ|a9p#o#ZE|?|{sYc#vv{E=|LC}cu{N8`/`3`9rt[4|He{cq|iSYxY`}V |(Q|t4{C?]k_Vlvk)BZ^r<{CL}#h}R+[<|i=}X|{KAo]|W<`K{NW|Zx}#;|fe{IMr<|K~tJ_x}AyLZ?{GvbLnRgN}X&{H7|x~}Jm{]-| GpNu0}.ok>|c4{PYisrDZ|fwh9|hfo@{H~XSbO]Odv]%`N]b1Y]]|eIZ}_-ZA]aj,>eFn+j[aQ_+]h[J_m_g]%_wf.`%k1e#Z?{CvYu_B^|gk`Xfh^M3`afGZ-Z|[m{L}|k3cp[it ^>YUi~d>{T*}YJ{Q5{Jxa$hg|%4`}|LAgvb }G}{P=|<;Ux{_skR{cV|-*|s-{Mp|XP|$G|_J}c6cM{_=_D|*9^$ec{V;|4S{qO|w_|.7}d0|/D}e}|0G{Dq]Kdp{}dfDi>}B%{Gd|nl}lf{C-{y}|ANZr}#={T~|-(}c&{pI|ft{lsVP}){|@u}!W|bcmB{d?|iW|:dxj{PSkO|Hl]Li:}VYk@|2={fnWt{M3`cZ6|)}|Xj}BYa?vo{e4|L7|B7{L7|1W|lvYO}W8nJ|$Vih|{T{d*_1|:-n2dblk``fT{Ky|-%}m!|Xy|-a{Pz}[l{kFjz|iH}9N{WE{x,|jz}R {P|{D)c=nX|Kq|si}Ge{sh|[X{RF{t`|jsr*fYf,rK|/9}$}}Nf{y!1|<Std}4Wez{W${Fd_/^O[ooqaw_z[L`Nbv[;l7V[ii3_PeM}.h^viqYjZ*j1}+3{bt{DR[;UG}3Og,rS{JO{qw{d<_zbAh<R[1_r`iZTbv^^a}c{iEgQZ<exZFg.^Rb+`Uj{a+{z<[~r!]`[[|rZYR|?F|qppp]L|-d|}K}YZUM|=Y|ktm*}F]{D;g{uI|7kg^}%?Z%ca{N[_<q4xC]i|PqZC]n}.bDrnh0Wq{tr|OMn6tM|!6|T`{O`|>!]ji+]_bTeU}Tq|ds}n|{Gm{z,f)}&s{DPYJ`%{CGd5v4tvb*hUh~bf]z`jajiFqAii]bfy^U{Or|m+{I)cS|.9k:e3`^|xN}@Dnlis`B|Qo{`W|>||kA}Y}{ERYuYx`%[exd`]|OyiHtb}HofUYbFo![5|+]gD{NIZR|Go}.T{rh^4]S|C9_}xO^i`vfQ}C)bK{TL}cQ|79iu}9a];sj{P.o!f[Y]pM``Jda^Wc9ZarteBZClxtM{LW}l9|a.mU}KX}4@{I+f1}37|8u}9c|v${xGlz}jP{Dd1}e:}31}%3X$|22i<v+r@~mf{sN{C67G97855F4YL5}8f{DT|xy{sO{DXB334@55J1)4.G9A#JDYtXTYM4, YQD9;XbXm9SX]IB^4UN=Xn<5(;(F3YW@XkH-X_VM[DYM:5XP!T&Y`6|,^{IS-*D.H>:LXjYQ0I3XhAF:9:(==.F*3F1189K/7163D,:@|e2{LS36D4hq{Lw/84443@4.933:0307::6D7}&l{Mx657;89;,K5678H&93D(H<&<>0B90X^I;}Ag1{P%3A+>><975}[S{PZE453?4|T2{Q+5187;>447:81{C=hL6{Me^:=7ii{R=.=F<81;48?|h8}Uh{SE|,VxL{ST,7?9Y_5Xk3A#:$%YSYdXeKXOD8+TXh7(@>(YdXYHXl9J6X_5IXaL0N?3YK7Xh!1?XgYz9YEXhXaYPXhC3X`-YLY_XfVf[EGXZ5L8BXL9YHX]SYTXjLXdJ: YcXbQXg1PX]Yx4|Jr{Ys4.8YU+XIY`0N,<H%-H;:0@,74/:8546I=9177154870UC]d<C3HXl7ALYzXFXWP<<?E!88E5@03YYXJ?YJ@6YxX-YdXhYG|9o{`iXjY_>YVXe>AYFX[/(I@0841?):-B=14337:8=|14{c&93788|di{cW-0>0<097/A;N{FqYpugAFT%X/Yo3Yn,#=XlCYHYNX[Xk3YN:YRT4?)-YH%A5XlYF3C1=NWyY}>:74-C673<69545v {iT85YED=64=.F4..9878/D4378?48B3:7:7/1VX[f4{D,{l<5E75{dAbRB-8-@+;DBF/$ZfW8S<4YhXA.(5@*11YV8./S95C/0R-A4AXQYI7?68167B95HA1*<M3?1/@;/=54XbYP36}lc{qzSS38:19?,/39193574/66878Yw1X-87E6=;964X`T734:>86>1/=0;(I-1::7ALYGXhF+Xk[@W%TYbX7)KXdYEXi,H-XhYMRXfYK?XgXj.9HX_SX]YL1XmYJ>Y}WwIXiI-3-GXcYyXUYJ$X`Vs[7;XnYEZ;XF! 3;%8;PXX(N3Y[)Xi1YE&/ :;74YQ6X`33C;-(>Xm0(TYF/!YGXg8 9L5P01YPXO-5%C|qd{{/K/E6,=0144:361:955;6443@?B7*7:F89&F35YaX-CYf,XiFYRXE_e{}sF 0*7XRYPYfXa5YXXY8Xf8Y~XmA[9VjYj*#YMXIYOXk,HHX40YxYMXU8OXe;YFXLYuPXP?EB[QV0CXfY{:9XV[FWE0D6X^YVP*$4%OXiYQ(|xp|%c3{}V`1>Y`XH00:8/M6XhQ1:;3414|TE|&o@1*=81G8<3}6<|(f6>>>5-5:8;093B^3U*+*^*UT30XgYU&7*O1953)5@E78--F7YF*B&0:%P68W9Zn5974J9::3}Vk|-,C)=)1AJ4+<3YGXfY[XQXmT1M-XcYTYZXCYZXEYXXMYN,17>XIG*SaS|/eYJXbI?XdNZ+WRYP<F:R PXf;0Xg`$|1GX9YdXjLYxWX!ZIXGYaXNYm6X9YMX?9EXmZ&XZ#XQ>YeXRXfAY[4 ;0X!Zz0XdN$XhYL XIY^XGNXUYS/1YFXhYk.TXn4DXjB{jg|4DEX]:XcZMW=A.+QYL<LKXc[vV$+&PX*Z3XMYIXUQ:ZvW< YSXFZ,XBYeXMM)?Xa XiZ4/EXcP3%}&-|6~:1(-+YT$@XIYRBC<}&,|7aJ6}bp|8)K1|Xg|8C}[T|8Q.89;-964I38361<=/;883651467<7:>?1:.}le|:Z=39;1Y^)?:J=?XfLXbXi=Q0YVYOXaXiLXmJXO5?.SFXiCYW}-;|=u&D-X`N0X^,YzYRXO(QX_YW9`I|>hZ:N&X)DQXP@YH#XmNXi$YWX^=!G6YbYdX>XjY|XlX^XdYkX>YnXUXPYF)FXT[EVTMYmYJXmYSXmNXi#GXmT3X8HOX[ZiXN]IU2>8YdX1YbX<YfWuZ8XSXcZU%0;1XnXkZ_WTG,XZYX5YSX Yp 05G?XcYW(IXg6K/XlYP4XnI @XnO1W4Zp-9C@%QDYX+OYeX9>--YSXkD.YR%Q/Yo YUX].Xi<HYEZ2WdCE6YMXa7F)=,D>-@9/8@5=?7164;35387?N<618=6>7D+C50<6B03J0{Hj|N9$D,9I-,.KB3}m |NzE0::/81YqXjMXl7YG; [.W=Z0X4XQY]:MXiR,XgM?9$9>:?E;YE77VS[Y564760391?14941:0=:8B:;/1DXjFA-564=0B3XlH1+D85:0Q!B#:-6&N/:9<-R3/7Xn<*3J4.H:+334B.=>30H.;3833/76464665755:/83H6633:=;.>5645}&E|Y)?1/YG-,93&N3AE@5 <L1-G/8A0D858/30>8<549=@B8] V0[uVQYlXeD(P#ID&7T&7;Xi0;7T-$YE)E=1:E1GR):--0YI7=E<}n9|aT6783A>D7&4YG7=391W;Zx<5+>F#J39}o/|cc;6=A050EQXg8A1-}D-|d^5548083563695D?-.YOXd37I$@LYLWeYlX<Yd+YR A$;3-4YQ-9XmA0!9/XLY_YT(=5XdDI>YJ5XP1ZAW{9>X_6R(XhYO65&J%DA)C-!B:97#A9;@?F;&;(9=11/=657/H,<8}bz|j^5446>.L+&Y^8Xb6?(CYOXb*YF(8X`FYR(XPYVXmPQ%&DD(XmZXW??YOXZXfCYJ79,O)XnYF7K0!QXmXi4IYFRXS,6<%-:YO(+:-3Q!1E1:W,Zo}Am|n~;3580534*?3Zc4=9334361693:30C<6/717:<1/;>59&:4}6!|rS36=1?75<8}[B|s809983579I.A.>84758=108564741H*9E{L{|u%YQ<%6XfH.YUXe4YL@,>N}Tv|ve*G0X)Z;/)3@A74(4P&A1X:YVH97;,754*A66:1 D739E3553545558E4?-?K17/770843XAYf838A7K%N!YW4.$T19Z`WJ*0XdYJXTYOXNZ 1XaN1A+I&Xi.Xk3Z3GB&5%WhZ1+5#Y[X<4YMXhQYoQXVXbYQ8XSYUX4YXBXWDMG0WxZA[8V+Z8X;D],Va$%YeX?FXfX[XeYf<X:Z[WsYz8X_Y]%XmQ(!7BXIZFX]&YE3F$(1XgYgYE& +[+W!<YMYFXc;+PXCYI9YrWxGXY9DY[!GXiI7::)OC;*$.>N*HA@{C|}&k=:<TB83X`3YL+G4XiK]i}(fYK<=5$.FYE%4*5*H*6XkCYL=*6Xi6!Yi1KXR4YHXbC8Xj,B9ZbWx/XbYON#5B}Ue}+QKXnF1&YV5XmYQ0!*3IXBYb71?1B75XmF;0B976;H/RXU:YZX;BG-NXj;XjI>A#D3B636N;,*%<D:0;YRXY973H5)-4FXOYf0:0;/7759774;7;:/855:543L43<?6=E,.A4:C=L)%4YV!1(YE/4YF+ F3%;S;&JC:%/?YEXJ4GXf/YS-EXEYW,9;E}X$}547EXiK=51-?71C%?57;5>463553Zg90;6447?<>4:9.7538XgN{|!}9K/E&3-:D+YE1)YE/3;37/:05}n<}:UX8Yj4Yt864@JYK..G=.(A Q3%6K>3(P3#AYE$-6H/456*C=.XHY[#S.<780191;057C)=6HXj?955B:K1 E>-B/9,;5.!L?:0>/.@//:;7833YZ56<4:YE=/:7Z_WGC%3I6>XkC*&NA16X=Yz2$X:Y^&J48<99k8}CyB-61<18K946YO4{|N}E)YIB9K0L>4=46<1K0+R;6-=1883:478;4,S+3YJX`GJXh.Yp+Xm6MXcYpX(>7Yo,/:X=Z;Xi0YTYHXjYmXiXj;*;I-8S6N#XgY}.3XfYGO3C/$XjL$*NYX,1 6;YH&<XkK9C#I74.>}Hd`A748X[T450[n75<4439:18A107>|ET}Rf<1;14876/Yb983E<5.YNXd4149>,S=/4E/<306443G/06}0&}UkYSXFYF=44=-5095=88;63844,9E6644{PL}WA8:>)7+>763>>0/B3A545CCnT}Xm|dv}Xq1L/YNXk/H8;;.R63351YY747@15YE4J8;46;.38.>4A369.=-83,;Ye3?:3@YE.4-+N353;/;@(X[YYD>@/05-I*@.:551741Yf5>6A443<3535;.58/86=D4753442$635D1>0359NQ @73:3:>><Xn?;43C14 ?Y|X611YG1&<+,4<*,YLXl<1/AIXjF*N89A4Z576K1XbJ5YF.ZOWN.YGXO/YQ01:4G38Xl1;KI0YFXB=R<7;D/,/4>;$I,YGXm94@O35Yz66695385.>:6A#5}W7n^4336:4157597434433<3|XA}m`>=D>:4A.337370?-6Q96{`E|4A}C`|Qs{Mk|J+~r>|o,wHv>Vw}!c{H!|Gb|*Ca5}J||,U{t+{CN[!M65YXOY_*B,Y[Z9XaX[QYJYLXPYuZ%XcZ8LY[SYPYKZM<LMYG9OYqSQYM~[e{UJXmQYyZM_)>YjN1~[f3{aXFY|Yk:48YdH^NZ0|T){jVFYTZNFY^YTYN~[h{nPYMYn3I]`EYUYsYIZEYJ7Yw)YnXPQYH+Z.ZAZY]^Z1Y`YSZFZyGYHXLYG 8Yd#4~[i|+)YH9D?Y^F~Y7|-eYxZ^WHYdYfZQ~[j|3>~[k|3oYmYqY^XYYO=Z*4[]Z/OYLXhZ1YLZIXgYIHYEYK,<Y`YEXIGZI[3YOYcB4SZ!YHZ*&Y{Xi3~[l|JSY`Zz?Z,~[m|O=Yi>??XnYWXmYS617YVYIHZ(Z4[~L4/=~[n|Yu{P)|];YOHHZ}~[o33|a>~[r|aE]DH~[s|e$Zz~[t|kZFY~XhYXZB[`Y}~[u|{SZ&OYkYQYuZ2Zf8D~[v}% ~[w3},Q[X]+YGYeYPIS~[y}4aZ!YN^!6PZ*~[z}?E~[{3}CnZ=~[}}EdDZz/9A3(3S<,YR8.D=*XgYPYcXN3Z5 4)~[~}JW=$Yu.XX~] }KDX`PXdZ4XfYpTJLY[F5]X~[2Yp}U+DZJ::<446[m@~]#3}]1~]%}^LZwZQ5Z`/OT<Yh^ -~]&}jx[ ~m<z!%2+~ly4VY-~o>}p62yz!%2+Xf2+~ly4VY-zQ`z (=] 2z~o2",C={" ":0,"!":1},c=34,i=2,p,s="",u=String.fromCharCode,t=u(12539);for(;++c<127;)C[u(c)]=c^39&&c^92?i++:0;i=0;for(;0<=(c=C[a.charAt(i++)]);)if(16===c)if((c=C[a.charAt(i++)])<87){if(86===c)c=1879;for(;c--;)s+=u(++p)}else s+=s.substr(8272,360);else if(c<86)s+=u(p+=c<51?c-16:(c-55)*92+C[a.charAt(i++)]);else if((c=((c-86)*92+C[a.charAt(i++)])*92+C[a.charAt(i++)])<49152)s+=u(p=c<40960?c:c|57344);else{c&=511;for(;c--;)s+=t;p=12539}return s')();

/**
 * @param  {Audio}  audio
 * @param  {object} soundInfo
 * @return void
 */
Util.prototype.$startSound = function (audio, soundInfo)
{
    if (soundInfo.SyncStop) {
        audio.pause();
    } else {
        if (soundInfo.HasLoops) {
            audio.loopCount = soundInfo.LoopCount;
            var loopSound = function ()
            {
                audio.loopCount--;
                if (!this.loopCount) {
                    audio.removeEventListener("ended", loopSound);
                } else {
                    audio.currentTime = 0;
                    if (soundInfo.HasInPoint) {
                        audio.currentTime = soundInfo.InPoint;
                    }
                    audio.play();
                }
            };
            audio.addEventListener("ended", loopSound);
        }

        if (soundInfo.HasInPoint) {
            audio.addEventListener("canplay", function ()
            {
                this.currentTime = soundInfo.InPoint;
            });
        }

        audio.play();
    }
};

/**
 * @return void
 */
Util.prototype.$resize = function ()
{
    this.$clearTimeout.call(null, this.$resizeId);
    this.$resizeId = this.$setTimeout.call(null, Util.prototype.$resizeExecute, 300);
};

/**
 * @return void
 */
Util.prototype.$resizeExecute = function ()
{
    var players = Util.prototype.$players;

    for (var idx in players) {

        if (!players.hasOwnProperty(idx)) {
            continue;
        }

        var player = players[idx];
        if (!player.isLoad) {
            continue;
        }

        player.resize();
    }
};

/**
 * @param   {array} a
 * @param   {array} b
 * @returns {array}
 */
Util.prototype.$multiplicationColor = function(a, b)
{
    return [
        +(a[0] * b[0]),
        +(a[1] * b[1]),
        +(a[2] * b[2]),
        +(a[3] * b[3]),
        +(a[0] * b[4] + a[4]),
        +(a[1] * b[5] + a[5]),
        +(a[2] * b[6] + a[6]),
        +(a[3] * b[7] + a[7])
    ];
};

/**
 * @param   {array} a
 * @param   {array} b
 * @returns {array}
 */
Util.prototype.$multiplicationMatrix = function(a, b)
{
    return [
        +(a[0] * b[0] + a[2] * b[1]),
        +(a[1] * b[0] + a[3] * b[1]),
        +(a[0] * b[2] + a[2] * b[3]),
        +(a[1] * b[2] + a[3] * b[3]),
        +(a[0] * b[4] + a[2] * b[5] + a[4]),
        +(a[1] * b[4] + a[3] * b[5] + a[5])
    ];
};

/**
 * @param   {{R: number, G: number, B: number, A: number}} color
 * @param   {array} data
 * @returns {{R: number, G: number, B: number, A: number}}
 */
Util.prototype.$generateColorTransform = function (color, data)
{
    return {
        R:   this.$max(0, this.$min((color.R * data[0]) + data[4], 255))|0,
        G:   this.$max(0, this.$min((color.G * data[1]) + data[5], 255))|0,
        B:   this.$max(0, this.$min((color.B * data[2]) + data[6], 255))|0,
        A: +(this.$max(0, this.$min((color.A * 255 * data[3]) + data[7], 255)) / 255)
    };
};

/**
 * @param   {number} int
 * @param   {number} alpha
 * @returns {{R: number, G: number, B: number, A: number}}
 */
Util.prototype.$intToRGBA = function (int, alpha)
{
    alpha = alpha || 100;

    return {
        R: (int & 0xff0000) >> 16,
        G: (int & 0x00ff00) >> 8,
        B: (int & 0x0000ff),
        A: (alpha / 100)
    };
};

/**
 * @param  {number} uint
 * @return {{A: number, R: number, G: number, B: number}}
 */
Util.prototype.$uintToARGB = function (uint)
{
    return {
        A: (uint >>> 24) / 255,
        R: (uint & 0xff0000) >> 16,
        G: (uint & 0x00ff00) >> 8,
        B: (uint & 0x0000ff)
    };
};

/**
 * @param   {number|string} rgb
 * @returns {number}
 */
Util.prototype.$toColorInt = function (rgb)
{
    return (typeof rgb === "number") ? rgb : this.$colorStringToInt(rgb);
};

/**
 * @param   {number} r
 * @param   {number} g
 * @param   {number} b
 * @returns {number}
 */
Util.prototype.$rgbToInt = function (r, g, b)
{
    return (r << 16) + (g << 8) + b;
};

/**
 * @param   {string} str
 * @returns {number}
 */
Util.prototype.$colorStringToInt = function(str)
{
    var canvas    = this.$cacheStore.getCanvas();
    var ctx       = canvas.getContext("2d");
    ctx.fillStyle = str;

    var color = "0x" + ctx.fillStyle.substr(1);

    // destroy
    this.$cacheStore.destroy(ctx);

    return color|0;
};

/**
 * @param  {number} r
 * @param  {number} g
 * @param  {number} b
 * @return {{H: number, S: number, L: number}}
 */
Util.prototype.$rgbToHSL = function (r, g, b)
{

    r = r / 255;
    g = g / 255;
    b = b / 255;

    var max = this.$max(r, g, b);
    var min = this.$min(r, g, b);

    // init
    var h, s, l = (max + min) / 2;

    switch (max === min) {

        case true:
            h = s = 0;
            break;

        default:

            var d = max - min;

            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

            switch (max) {

                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;

                case g:
                    h = (b - r) / d + 2;
                    break;

                case b:
                    h = (r - g) / d + 4;
                    break;
            }

            h = h / 6;

            break;
    }

    return {
        H: this.$round(h * 330),
        S: this.$round(s * 100),
        L: this.$round(l * 100)
    };
};

/**
 * @param   {array} matrix
 * @returns {array}
 */
Util.prototype.$linearGradientXY = function (matrix)
{
    var x0  = +(-16384 * matrix[0] - 16384 * matrix[2] + matrix[4]);
    var x1  = +( 16384 * matrix[0] - 16384 * matrix[2] + matrix[4]);
    var x2  = +(-16384 * matrix[0] + 16384 * matrix[2] + matrix[4]);
    var y0  = +(-16384 * matrix[1] - 16384 * matrix[3] + matrix[5]);
    var y1  = +( 16384 * matrix[1] - 16384 * matrix[3] + matrix[5]);
    var y2  = +(-16384 * matrix[1] + 16384 * matrix[3] + matrix[5]);
    var vx2 = +(x2 - x0);
    var vy2 = +(y2 - y0);
    var r1  = +this.$sqrt(vx2 * vx2 + vy2 * vy2);

    switch (true) {
        case (r1):
            vx2 = +(vx2 / r1);
            vy2 = +(vy2 / r1);
            break;
        default:
            vx2 = 0;
            vy2 = 0;
            break;
    }

    var r2  = +((x1 - x0) * vx2 + (y1 - y0) * vy2);
    return [
        +(x0 + r2 * vx2),
        +(y0 + r2 * vy2),
        x1,
        y1
    ];
};

/**
 * @param   {CanvasRenderingContext2D} ctx
 * @param   {array} color
 * @returns {CanvasRenderingContext2D}
 */
Util.prototype.$generateImageTransform = function (ctx, color)
{
    var canvas  = ctx.canvas;
    var width   = canvas.width|0;
    var height  = canvas.height|0;
    var imgData = ctx.getImageData(0, 0, width, height);
    var pxData  = imgData.data;

    var RedMultiTerm   = +color[0];
    var GreenMultiTerm = +color[1];
    var BlueMultiTerm  = +color[2];
    var AlphaMultiTerm = +color[3];
    var RedAddTerm     = +color[4];
    var GreenAddTerm   = +color[5];
    var BlueAddTerm    = +color[6];
    var AlphaAddTerm   = +color[7];

    var length = (width * height)|0;
    if (length > 0) {
        var i   = 0;
        var idx = 0;
        while (i < length) {
            var R = pxData[idx]|0;
            idx = (idx + 1)|0;

            var G = pxData[idx]|0;
            idx = (idx + 1)|0;

            var B = pxData[idx]|0;
            idx = (idx + 1)|0;

            var A = pxData[idx]|0;
            idx = (idx + 1)|0;

            pxData[idx - 4] =  this.$max(0, this.$min((R * RedMultiTerm)   + RedAddTerm,   255))|0;
            pxData[idx - 3] =  this.$max(0, this.$min((G * GreenMultiTerm) + GreenAddTerm, 255))|0;
            pxData[idx - 2] =  this.$max(0, this.$min((B * BlueMultiTerm)  + BlueAddTerm,  255))|0;
            pxData[idx - 1] = +this.$max(0, this.$min((A * AlphaMultiTerm) + AlphaAddTerm, 255));

            i = (i + 1)|0;
        }
    }

    ctx.putImageData(imgData, 0, 0);

    return ctx;
};

/**
 * @param {Event} event
 */
Util.prototype.$keyUpAction = function (event)
{
    // cache
    this.$keyEvent = event;

    // execute
    var keyClass = this.$keyClass;
    var onKeyUp  = keyClass.onKeyUp;
    if (typeof onKeyUp === "function") {
        onKeyUp.apply(keyClass, [event]);
    }
};

/**
 * @param {Event} event
 */
Util.prototype.$keyDownAction = function (event)
{
    var i, length, hIdx;

    this.$keyEvent = event;

    var keyClass = this.$keyClass;
    var keyCode  = keyClass.getCode()|0;

    var onKeyDown = keyClass.onKeyDown;
    if (typeof onKeyDown === "function") {
        onKeyDown.apply(keyClass, [event]);
    }

    var stages = this.$stages;
    for (var idx in stages) {
        if (!stages.hasOwnProperty(idx)) {
            continue;
        }

        var stage = stages[idx];

        // keyDownEvent
        var keyDownEventHits = stage.keyDownEventHits;

        length = keyDownEventHits.length|0;
        if (length) {
            i = 0;
            while (i < length) {
                var obj = keyDownEventHits[i];
                i = (i + 1)|0;

                stage.executeEventAction(obj.as, obj.mc);
            }
        }

        var buttonHits = stage.buttonHits;
        length = buttonHits.length;
        if (!length) {
            continue;
        }

        var isEnd = false;
        i = length;
        while (i) {
            hIdx = i - 1;
            if (!(hIdx in buttonHits)) {
                i = (i - 1)|0;
                continue;
            }

            var hitObj = buttonHits[hIdx];
            i = (i - 1)|0;

            if (!hitObj) {
                continue;
            }

            var button = hitObj.button;
            if (!button) {
                continue;
            }

            var actions = button.getActions();
            if (!actions) {
                continue;
            }

            var aLen = actions.length|0;
            if (!aLen) {
                continue;
            }

            for (var aIdx in actions) {
                if (!actions.hasOwnProperty(aIdx)) {
                    continue;
                }

                var cond         = actions[aIdx];
                var CondKeyPress = cond.CondKeyPress|0;
                switch (CondKeyPress) {
                    case 1: // left arrow
                        CondKeyPress = 37;
                        break;
                    case 2: // right arrow
                        CondKeyPress = 39;
                        break;
                    case 3: // home
                        CondKeyPress = 36;
                        break;
                    case 4: // end
                        CondKeyPress = 35;
                        break;
                    case 5: // insert
                        CondKeyPress = 45;
                        break;
                    case 6: // delete
                        CondKeyPress = 46;
                        break;
                    case 14: // up arrow
                        CondKeyPress = 38;
                        break;
                    case 15: // down arrow
                        CondKeyPress = 40;
                        break;
                    case 16: // page up
                        CondKeyPress = 33;
                        break;
                    case 17: // page down
                        CondKeyPress = 34;
                        break;
                    case 18: // tab
                        CondKeyPress = 9;
                        break;
                    case 19: // escape
                        CondKeyPress = 27;
                        break;
                }

                if (CondKeyPress !== keyCode) {
                    continue;
                }

                stage.buttonAction(hitObj.parent, cond.ActionScript);
                stage.touchRender();
                isEnd = true;
                break;
            }

            if (isEnd) {
                break;
            }
        }
    }
};

/**
 * resize event
 */
window.addEventListener("resize", function () { Util.prototype.$resize(); });

// TODO key event
if (!isTouch) {
//     window.addEventListener("keydown", Util.prototype.$keyDownAction);
//     window.addEventListener("keyup",   Util.prototype.$keyUpAction);
//     window.addEventListener("keyup",   function (event)
//     {
//         Util.prototype.$keyEvent = event;
//         self.touchEnd(event);
//     });
}

/**
 * @param {object} option
 */
Util.prototype.$ajax = function (option)
{
    if (!option) {
        option = {
            method: "GET"
        };
    }

    if (!option.method) {
        option.method = "GET";
    }

    // start
    var xmlHttpRequest = new XMLHttpRequest();

    if (option.mode === "binary") {
        if (this.$canXHR2) {
            xmlHttpRequest.responseType = "arraybuffer";
        } else {
            xmlHttpRequest.overrideMimeType("text/plain; charset=x-user-defined");
        }
    }

    var name;
    if (option.headers) {
        var headers = option.headers;
        for (name in headers) {
            if (!headers.hasOwnProperty(name)) {
                continue;
            }
            xmlHttpRequest.setRequestHeader(name, headers[name]);
        }
    }

    // Event Listener
    if (option.event) {
        var event = option.event;
        for (name in event) {
            if (!event.hasOwnProperty(name)) {
                continue;
            }
            xmlHttpRequest.addEventListener(name, event[name]);
        }
    }

    var value = null;
    if (option.data) {
        value = option.data;
    }

    xmlHttpRequest.open(option.method, option.url, true);
    xmlHttpRequest.send(value);
};

/**
 * @returns {string}
 */
Util.prototype.$encodeVars = function (source)
{
    var params = [];
    for (var name in source) {
        if (!source.hasOwnProperty(name)) {
            continue;
        }

        var value = source[name];
        params[params.length] = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    }

    return params.join("&").replace(/%20/g, "+");
};

/**
 * @param   {array} source
 * @returns {array}
 */
Util.prototype.$cloneArray = function (source)
{
    var result = [];
    for (var idx in source) {
        if (!source.hasOwnProperty(idx)) {
            continue;
        }

        result[idx] = source[idx];
    }

    return result;
};

/**
 * @param   {*} source
 * @returns {boolean}
 */
Util.prototype.$isArray = function (source)
{
    return Object.prototype.toString.call(source) === "[object Array]";
};

/**
 * @param  {{xMin: number, xMax: number, yMin: number, yMax: number}} bounds
 * @param  {array} matrix
 * @return {{xMin: number, xMax: number, yMin: number, yMax: number}}
 */
Util.prototype.$boundsMatrix = function (bounds, matrix)
{
    var no   = this.$Number.MAX_VALUE;
    var xMax = -no;
    var yMax = -no;
    var xMin = no;
    var yMin = no;

    var x0 = +(bounds.xMax * matrix[0] + bounds.yMax * matrix[2] + matrix[4]);
    var x1 = +(bounds.xMax * matrix[0] + bounds.yMin * matrix[2] + matrix[4]);
    var x2 = +(bounds.xMin * matrix[0] + bounds.yMax * matrix[2] + matrix[4]);
    var x3 = +(bounds.xMin * matrix[0] + bounds.yMin * matrix[2] + matrix[4]);
    var y0 = +(bounds.xMax * matrix[1] + bounds.yMax * matrix[3] + matrix[5]);
    var y1 = +(bounds.xMax * matrix[1] + bounds.yMin * matrix[3] + matrix[5]);
    var y2 = +(bounds.xMin * matrix[1] + bounds.yMax * matrix[3] + matrix[5]);
    var y3 = +(bounds.xMin * matrix[1] + bounds.yMin * matrix[3] + matrix[5]);

    xMax = +this.$max(this.$max(this.$max(this.$max(xMax, x0), x1), x2), x3);
    xMin = +this.$min(this.$min(this.$min(this.$min(xMin, x0), x1), x2), x3);
    yMax = +this.$max(this.$max(this.$max(this.$max(yMax, y0), y1), y2), y3);
    yMin = +this.$min(this.$min(this.$min(this.$min(yMin, y0), y1), y2), y3);

    return {
        xMin: xMin,
        xMax: xMax,
        yMin: yMin,
        yMax: yMax
    };
};

var Vector = function () {};
/**
 * @constructor
 */
var CustomActions = function () {};
/**
 * @constructor
 */
var XMLUI = function () {};
/**
 * @constructor
 */
var ViewSource = function () {};
/**
 * @constructor
 */
var AccImpl = function () {};
/**
 * @constructor
 */
var ButtonAccImpl = function () {};

/**
 * @param mc
 * @constructor
 */
var Color = function (mc)
{
    this.movieClip = mc;
    this.variables = {};
};

/**
 *
 * @param name
 * @returns {*}
 */
Color.prototype.getProperty = function (name)
{
    return this.variables[name];
};

/**
 * @param name
 * @param value
 */
Color.prototype.setProperty = function (name, value)
{
    this.variables[String(name)] = value;
};

/**
 * @param int
 * @param alpha
 * @returns {{R: number, G: number, B: number, A: number}}
 */
Color.prototype.intToRGBA = function (int, alpha)
{
    alpha = alpha || 100;
    return {
        R: (int & 0xff0000) >> 16,
        G: (int & 0x00ff00) >> 8,
        B: (int & 0x0000ff),
        A: (alpha / 100)
    };
};

/**
 * @param offset
 */
Color.prototype.setRGB = function (offset)
{
    var _this = this;
    var mc = _this.movieClip;
    if (mc instanceof MovieClip) {
        offset |= 0;
        var obj = _this.intToRGBA(offset);
        var colorTransform = mc.getOriginColorTransform();
        if (colorTransform) {
            var transform = [obj.R, obj.G, obj.B, obj.A * 255, 0, 0, 0, 0];
            var multiColor = mc.cloneArray(transform);
            var color = mc.multiplicationColor(colorTransform, multiColor);
            mc.setColorTransform(color);
        }
    }
};

/**
 * @returns {*[]|*}
 */
Color.prototype.getTransform = function ()
{
    var _this = this;
    var mc = _this.movieClip;
    if (mc instanceof MovieClip) {
        return mc.getColorTransform();
    }
    return undefined;
};

/**
 * @param obj
 */
Color.prototype.setTransform = function (obj)
{
    var _this = this;
    var mc = _this.movieClip;
    if (mc instanceof MovieClip) {
        var colorTransform = mc.getOriginColorTransform();
        var transform = [
            obj.rb, obj.gb, obj.bb, obj.ab,
            obj.ra, obj.ga, obj.ba, obj.aa
        ];
        var multiColor = mc.cloneArray(transform);
        var color = mc.multiplicationColor(colorTransform, multiColor);
        mc.setColorTransform(color);
    }
};
/**
 * @constructor
 */
var Global = function ()
{
    this.variables = {};
};

/**
 * @param   {string} name
 * @returns {*}
 */
Global.prototype.getVariable = function (name)
{
    return this.variables[name];
};

/**
 * @param   {string} name
 * @param   {string} value
 * @returns {*}
 */
Global.prototype.setVariable = function (name, value)
{
    this.variables[name] = value;
};
/**
 * @constructor
 */
var Key = function ()
{
    this.variables  = {};
    this._listeners = [];
};

/**
 * util
 */
Key.prototype = Object.create(Util.prototype);
Key.prototype.constructor = Key;

/**
 * properties
 */
Object.defineProperties(Key.prototype, {
    onKeyDown: {
        get: function () {
            return this.getProperty("onKeyDown");
        },
        set: function (onKeyDown) {
            this.setProperty("onKeyDown", onKeyDown);
        }
    },
    onKeyUp: {
        get: function () {
            return this.getProperty("onKeyUp");
        },
        set: function (onKeyUp) {
            this.setProperty("onKeyUp", onKeyUp);
        }
    }
});

/**
 * @type {number}
 */
Key.prototype.BACKSPACE = 8;
Key.prototype.CAPSLOCK  = 20;
Key.prototype.CONTROL   = 17;
Key.prototype.DELETEKEY = 46;
Key.prototype.DOWN      = 40;
Key.prototype.END       = 35;
Key.prototype.ENTER     = 13;
Key.prototype.ESCAPE    = 27;
Key.prototype.HOME      = 36;
Key.prototype.INSERT    = 45;
Key.prototype.LEFT      = 37;
Key.prototype.PGDN      = 34;
Key.prototype.PGDN      = 34;
Key.prototype.PGUP      = 33;
Key.prototype.RIGHT     = 39;
Key.prototype.SHIFT     = 16;
Key.prototype.SPACE     = 32;
Key.prototype.TAB       = 9;
Key.prototype.UP        = 38;

/**
 * @param name
 * @returns {*}
 */
Key.prototype.getProperty = function (name)
{
    return this.variables[name];
};

/**
 * @param name
 * @param value
 */
Key.prototype.setProperty = function (name, value)
{
    this.variables[String(name)] = value;
};

/**
 *
 * @param listener
 * @returns {boolean}
 */
Key.prototype.addListener = function (listener)
{
    var onKeyDown = listener.onKeyDown;
    if (onKeyDown) {
        this.onKeyDown = onKeyDown;
    }

    var onKeyUp = listener.onKeyUp;
    if (onKeyUp) {
        this.onKeyUp = onKeyUp;
    }

    return true;
};

/**
 * @param code
 * @returns {boolean}
 */
Key.prototype.isDown = function (code)
{
    return (this.getCode() === code);
};

/**
 * @returns {*}
 */
Key.prototype.getCode = function ()
{
    if (!this.$keyEvent) {
        return null;
    }

    var keyCode = 0 | this.$keyEvent.keyCode;
    if (96 <= keyCode && keyCode <= 105) {
        var n = 0 | keyCode - 96;
        switch (n) {
            case 0:
                keyCode = 48;
                break;
            case 1:
                keyCode = 49;
                break;
            case 2:
                keyCode = 50;
                break;
            case 3:
                keyCode = 51;
                break;
            case 4:
                keyCode = 52;
                break;
            case 5:
                keyCode = 53;
                break;
            case 6:
                keyCode = 54;
                break;
            case 7:
                keyCode = 55;
                break;
            case 8:
                keyCode = 56;
                break;
            case 9:
                keyCode = 57;
                break;
        }
    }
    return keyCode;
};

Util.prototype.$keyClass = new Key();
/**
 * @constructor
 */
var LoadVars = function ()
{
    var _this = this;
    _this.xmlHttpRequest = new XMLHttpRequest();
    _this.variables = {};
    _this.target = _this;
    _this.events = {
        onData: undefined,
        onLoad: undefined
    };
};

/**
 * properties
 */
Object.defineProperties(LoadVars.prototype,
    {
        onData: {
            get: function () {
                return this.getProperty("onData");
            },
            set: function (onData) {
                this.setProperty("onData", onData);
            }
        },
        onLoad: {
            get: function () {
                return this.getProperty("onLoad");
            },
            set: function (onLoad) {
                this.setProperty("onLoad", onLoad);
            }
        }
    });

/**
 * @param name
 * @returns {*}
 */
LoadVars.prototype.getProperty = function (name)
{
    return this.variables[name];
};

/**
 * @param name
 * @param value
 */
LoadVars.prototype.setProperty = function (name, value)
{
    this.variables[String(name)] = value;
};

/**
 * @param url
 * @returns {boolean}
 */
LoadVars.prototype.load = function (url)
{
    var _this = this;
    var xmlHttpRequest = _this.xmlHttpRequest;
    xmlHttpRequest.open("GET", url, true);
    xmlHttpRequest.onreadystatechange = function ()
    {
        var readyState = xmlHttpRequest.readyState;
        if (readyState === 4) {
            var src = decodeURIComponent(xmlHttpRequest.responseText);
            _this.decode(src);
            var onData = _this.onData;
            if (typeof onData === "function") {
                onData.apply(src, [src]);
            }

            var onLoad;
            var status = xmlHttpRequest.status;
            switch (status) {
                case 200:
                case 304:
                    onLoad = _this.onLoad;
                    if (typeof onLoad === "function") {
                        onLoad.apply(src, [true]);
                    }
                    return true;
                default:
                    onLoad = _this.onLoad;
                    if (typeof onLoad === "function") {
                        onLoad.apply(src, [false]);
                    }
                    return false;
            }
        }
    };
    xmlHttpRequest.send(null);
};

/**
 * @param url
 * @param target
 * @param method
 * @returns {boolean}
 */
LoadVars.prototype.send = function (url, target, method)
{
    var _this = this;
    var xmlHttpRequest = _this.xmlHttpRequest;
    var sendMethod = method ? method.toUpperCase() : "GET";
    xmlHttpRequest.open(sendMethod, url, true);
    if (sendMethod === "POST") {
        xmlHttpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    }
    if (target instanceof LoadVars) {
        _this.target = target;
    }
    xmlHttpRequest.send(_this.toString());
    return true;
};

/**
 * @param url
 * @param target
 * @param method
 * @returns {boolean}
 */
LoadVars.prototype.sendAndLoad = function (url, target, method)
{
    var _this = this;
    _this.send(url, target, method);
    return _this.load(url);
};

/**
 * @param header
 * @param headerValue
 */
LoadVars.prototype.addRequestHeader = function (header, headerValue)
{
    var xmlHttpRequest = this.xmlHttpRequest;
    if (header instanceof Array) {
        var length = header.length;
        for (var i = 0; i < length;) {
            xmlHttpRequest.setRequestHeader(header[i++], headerValue[i++]);
        }
    } else {
        xmlHttpRequest.setRequestHeader(header, headerValue);
    }
};

/**
 * @param queryString
 */
LoadVars.prototype.decode = function (queryString)
{
    var variables = this.variables;
    var array = queryString.split("&");
    var length = array.length;
    for (var i = 0; i < length; i++) {
        var values = array[i];
        var splitData = values.split("=");
        if (splitData.length < 1) {
            continue;
        }
        variables[String(splitData[0])] = splitData[1];
    }
};

/**
 * @returns {number}
 */
LoadVars.prototype.getBytesLoaded = function ()
{
    return 1;
};

/**
 * @returns {number}
 */
LoadVars.prototype.getBytesTotal = function ()
{
    return 1;
};

/**
 * @returns {string}
 */
LoadVars.prototype.toString = function ()
{
    var variables = this.variables;
    var array = [];
    for (var prop in variables) {
        if (!variables.hasOwnProperty(prop)) {
            continue;
        }
        array[array.length] = prop + "=" + variables[prop];
    }
    return array.join("&");
};
/**
 * @constructor
 */
var Mouse = function ()
{
    this.events = {};
};

/**
 * @returns {undefined}
 */
Mouse.prototype.show = function ()
{
    return undefined;
};

/**
 * @returns {undefined}
 */
Mouse.prototype.hide = function ()
{
    return undefined;
};

/**
 * @param listener
 */
Mouse.prototype.addListener = function (listener)
{
    var _this = this;
    if (listener && typeof listener === "object") {
        var events = ["onMouseDown", "onMouseMove", "onMouseUp"];
        var variables = listener.variables;
        for (var i = 0; i < 5; i++) {
            var event = events[i];
            if (typeof listener[event] === "function") {
                _this.events[event] = listener[event];
            } else if (variables && typeof variables[event] === "function") {
                _this.events[event] = variables[event];
            }
        }
    }
    return true;
};

/**
 * @param listener
 */
Mouse.prototype.removeListener = function (listener)
{
    var _this = this;
    if (listener && typeof listener === "object") {
        var events = ["onMouseDown", "onMouseMove", "onMouseUp"];
        for (var i = 0; i < 5; i++) {
            var event = events[i];
            var variables = listener.variables;
            if (typeof listener[event] === "function" ||
                (variables && typeof variables[event] === "function")
            ) {
                _this.events[event] = undefined;
            }
        }
    }
    return true;
};
/**
 * @constructor
 */
var MovieClipLoader = function ()
{
    this.events = {
        onLoadStart:    undefined,
        onLoadProgress: undefined,
        onLoadComplete: undefined,
        onLoadInit:     undefined,
        onLoadError:    undefined
    };
};

/**
 * @param url
 * @param target
 * @returns {boolean}
 */
MovieClipLoader.prototype.loadClip = function (url, target)
{
    if (!url || !target) {
        return false;
    }

    var _this = this;
    var events = _this.events;

    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open("GET", url, true);

    if (isXHR2) {
        xmlHttpRequest.responseType = "arraybuffer";
    } else {
        xmlHttpRequest.overrideMimeType("text/plain; charset=x-user-defined");
    }

    var onLoadProgress = events.onLoadProgress;
    if (!onLoadProgress) {
        onLoadProgress = _this.onLoadProgress;
    }
    if (typeof onLoadProgress === "function") {
        xmlHttpRequest.onprogress = function (e) {
            onLoadProgress.apply(_this, [target, e.loaded, e.total]);
        };
    }

    var onLoadComplete = events.onLoadComplete;
    if (!onLoadComplete) {
        onLoadComplete = _this.onLoadComplete;
    }
    if (typeof onLoadComplete === "function") {
        xmlHttpRequest.onloadend = function (e) {
            var eventStatus = e.currentTarget.status;
            if (eventStatus === 200) {
                onLoadComplete.apply(_this, [target, eventStatus]);
            }
        };
    }

    xmlHttpRequest.onreadystatechange = function ()
    {
        var readyState = xmlHttpRequest.readyState;
        if (readyState === 4) {
            var status = xmlHttpRequest.status;

            var onLoadStart = events.onLoadStart;
            if (!onLoadStart) {
                onLoadStart = _this.onLoadStart;
            }
            if (typeof onLoadStart === "function") {
                xmlHttpRequest.onloadstart = function ()
                {
                    onLoadStart.apply(_this, [target]);
                };
            }

            switch (status) {
                case 200:
                case 304:
                    var _root = target.getDisplayObject("_root");
                    var rootStage = _root.getStage();
                    var data = isXHR2 ? xmlHttpRequest.response : xmlHttpRequest.responseText;

                    var loadStage = new Stage();
                    loadStages[loadStage.getId()] = loadStage;
                    target._url = url;
                    target.reset();
                    target.setLoadStage(loadStage);

                    loadStage.setParent(target);
                    loadStage.parse(data, url);
                    loadStage.stop();

                    // onLoadInit
                    var onLoadInit = events.onLoadInit;
                    if (!onLoadInit) {
                        onLoadInit = _this.onLoadInit;
                    }
                    if (typeof onLoadInit === "function") {
                        var queue = (function (as, loader, mc) {
                            return function () {
                                return as.apply(loader, [mc]);
                            };
                        })(onLoadInit, _this, target);
                        target.events.load = [queue];
                    }

                    target.addActions(rootStage);

                    break;
                default:
                    var onLoadError = events.onLoadError;
                    if (!onLoadError) {
                        onLoadError = _this.onLoadError;
                    }
                    if (typeof onLoadError === "function") {
                        onLoadError.apply(_this, [target, "error", status]);
                    }
                    break;
            }
        }
    };
    xmlHttpRequest.send(null);

    return true;
};

/**
 * @param listener
 * @returns {boolean}
 */
MovieClipLoader.prototype.addListener = function (listener)
{
    var _this = this;
    if (listener && typeof listener === "object") {
        var events = ["onLoadStart", "onLoadProgress", "onLoadComplete", "onLoadInit", "onLoadError"];
        var variables = listener.variables;
        for (var i = 0; i < 5; i++) {
            var event = events[i];
            if (typeof listener[event] === "function") {
                _this.events[event] = listener[event];
            } else if (variables && typeof variables[event] === "function") {
                _this.events[event] = variables[event];
            }
        }
    }
    return true;
};

/**
 * @param listener
 * @returns {boolean}
 */
MovieClipLoader.prototype.removeListener = function (listener)
{
    var _this = this;
    if (listener && typeof listener === "object") {
        var events = ["onLoadStart", "onLoadProgress", "onLoadComplete", "onLoadInit", "onLoadError"];
        for (var i = 0; i < 5; i++) {
            var event = events[i];
            var variables = listener.variables;
            if (typeof listener[event] === "function" ||
                (variables && typeof variables[event] === "function")
            ) {
                _this.events[event] = undefined;
            }
        }
    }
    return true;
};

/**
 * @param target
 * @returns {{bytesLoaded: number, bytesTotal: number}}
 */
MovieClipLoader.prototype.getProgress = function (target)
{
    return {
        bytesLoaded: 0,
        bytesTotal: 0
    };
};
/**
 * @constructor
 */
var OriginalObject = function ()
{
    Util.call(this);
};

/**
 * extends
 * @type {Util}
 */
OriginalObject.prototype = Object.create(Util.prototype);
OriginalObject.prototype.constructor = OriginalObject;
/**
 * @constructor
 */
var PlaceObject = function ()
{
    Util.call(this);

    this._$matrix         = new Matrix();
    this._$colorTransform = new ColorTransform();
    this._$filters        = [];
    this._$blendMode      = "normal";
};

/**
 * extends
 * @type {Util}
 */
PlaceObject.prototype = Object.create(Util.prototype);
PlaceObject.prototype.constructor = PlaceObject;

/**
 * properties
 */
Object.defineProperties(PlaceObject.prototype, {
    matrix: {
        /**
         * @returns {Matrix}
         */
        get: function () {
            return this._$matrix;
        },
        /**
         * @param   {Matrix} matrix
         * @returns void
         */
        set: function (matrix) {
            this._$matrix = matrix;
        }
    },
    colorTransform: {
        /**
         * @returns {ColorTransform}
         */
        get: function () {
            return this._$colorTransform;
        },
        /**
         * @param   {ColorTransform} color_transform
         * @returns void
         */
        set: function (color_transform) {
            this._$colorTransform = color_transform;
        }
    },
    filters: {
        /**
         * @returns {array}
         */
        get: function () {
            return this._$filters;
        },
        /**
         * @param   {array} filters
         * @returns void
         */
        set: function (filters) {
            if (this.$isArray(filters)) {
                this._$filters = filters;
            }
        }
    },
    blendMode: {
        /**
         * @returns {string}
         */
        get: function () {
            return this._$blendMode;
        },
        /**
         * @param   {string|number} blend_mode
         * @returns void
         */
        set: function (blend_mode) {
            this._$blendMode = this.getBlendName(blend_mode);
        }
    }
});


/**
 * @param   {number|string} blend_mode
 * @returns {string}
 */
PlaceObject.prototype.getBlendName = function (blend_mode)
{
    var mode = null;
    switch (blend_mode) {
        case 1:
        case "normal":
            mode = "normal";
            break;
        case 2:
        case "layer":
            mode = "layer";
            break;
        case 3:
        case "multiply":
            mode = "multiply";
            break;
        case 4:
        case "screen":
            mode = "screen";
            break;
        case 5:
        case "lighten":
            mode = "lighten";
            break;
        case 6:
        case "darken":
            mode = "darken";
            break;
        case 7:
        case "difference":
            mode = "difference";
            break;
        case 8:
        case "add":
            mode = "add";
            break;
        case 9:
        case "subtract":
            mode = "subtract";
            break;
        case 10:
        case "invert":
            mode = "invert";
            break;
        case 11:
        case "alpha":
            mode = "alpha";
            break;
        case 12:
        case "erase":
            mode = "erase";
            break;
        case 13:
        case "overlay":
            mode = "overlay";
            break;
        case 14:
        case "hardlight":
            mode = "hardlight";
            break;
        default:
            break;
    }
    return mode;
};

/**
 * @return {PlaceObject}
 */
PlaceObject.prototype.clone = function ()
{
    var placeObject = new PlaceObject();

    placeObject.matrix         = this.matrix._$clone();
    placeObject.colorTransform = this.colorTransform._$clone();
    placeObject.blendMode      = this.blendMode;

    var length = this.filters;
    var idx    = 0;
    while (length > idx) {

        var filter = this.filters[idx];
        placeObject.filters[idx] = filter.clone();

        idx = (idx + 1)|0;
    }

    return placeObject;
};
/**
 * @constructor
 */
var SharedObject = function ()
{
    this.data = null;
    this.name = null;
};

/**
 * @param name
 * @returns {SharedObject}
 */
SharedObject.prototype.getLocal = function (name)
{
    this.name = name;
    var data  = window.localStorage.getItem(name);
    if (!data) {
        data = {};
    } else {
        data = JSON.parse(data);
    }
    this.data = data;
    return this;
};

/**
 * flush
 */
SharedObject.prototype.flush = function ()
{
    window.localStorage.setItem(this.name, JSON.stringify(this.data));
    return true;
};
/**
 * @constructor
 */
var Xml = function ()
{
    this.ignoreWhite = false;
    this.loaded      = false;
    this.status      = 0;
    this.variables   = {};
};

/**
 * properties
 */
Object.defineProperties(Xml.prototype, {
    onData: {
        get: function () {
            return this.getProperty("onData");
        },
        set: function (onData) {
            this.setProperty("onData", onData);
        }
    },
    onLoad: {
        get: function () {
            return this.getProperty("onLoad");
        },
        set: function (onLoad) {
            this.setProperty("onLoad", onLoad);
        }
    }
});

/**
 * @param name
 * @returns {*}
 */
Xml.prototype.getProperty = function (name)
{
    return this.variables[name];
};

/**
 * @param name
 * @param value
 */
Xml.prototype.setProperty = function (name, value)
{
    this.variables[String(name)] = value;
};


/**
 * @param url
 */
Xml.prototype.load = function (url)
{
    var self = this;
    url = "" + url;

    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open("GET", url, true);

    xmlHttpRequest.onreadystatechange = function ()
    {
        var readyState = 0 | xmlHttpRequest.readyState;
        if (readyState === 4) {
            var src = xmlHttpRequest.responseXML;
            var onData = self.onData;
            if (typeof onData === "function") {
                onData.apply(src, [src]);
            }

            var onLoad;
            var status = 0 | xmlHttpRequest.status;
            switch (status) {
                case 200:
                case 304:
                    onLoad = self.onLoad;
                    if (typeof onLoad === "function") {
                        onLoad.apply(src, [true]);
                    }
                    return true;
                default:
                    onLoad = self.onLoad;
                    if (typeof onLoad === "function") {
                        onLoad.apply(src, [false]);
                    }
                    return false;
            }
        }
    };

    xmlHttpRequest.send(null);
};

/**
 * @param url
 * @param target
 * @param method
 */
Xml.prototype.send = function (url, target, method)
{
    var sendMethod = method ? method.toUpperCase() : "GET";
    if (target) {
        console.log(target);
    }

    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open(sendMethod, url, true);
    xmlHttpRequest.send(null);

    return true;
};

/**
 * @param url
 * @param resultXML
 */
Xml.prototype.sendAndLoad = function (url, resultXML)
{
    this.send(url);
    return this.load(resultXML);
};
/**
 * @constructor
 */
var Swf2jsEvent = function ()
{
    this.target        = {};
    this.bubbles       = true;
    this.cancelable    = true;
    this.currentTarget = {};
    this.eventPhase    = 0;
};

/**
 * @type {string}
 */
Swf2jsEvent.prototype.ACTIVATE          = "activate";
Swf2jsEvent.prototype.CLICK             = "press";
Swf2jsEvent.prototype.CONTEXT_MENU      = "contextMenu";
Swf2jsEvent.prototype.DOUBLE_CLICK      = "doubleClick";
Swf2jsEvent.prototype.MIDDLE_CLICK      = "middleClick";
Swf2jsEvent.prototype.MIDDLE_MOUSE_DOWN = "middleMouseDown";
Swf2jsEvent.prototype.MIDDLE_MOUSE_UP   = "middleMouseUp";
Swf2jsEvent.prototype.MOUSE_DOWN        = "mouseDown";
Swf2jsEvent.prototype.MOUSE_MOVE        = "mouseMove";
Swf2jsEvent.prototype.MOUSE_OUT         = "rollOut"; // mouseOut TODO
Swf2jsEvent.prototype.MOUSE_OVER        = "rollOver"; // mouseOver TODO
Swf2jsEvent.prototype.MOUSE_UP          = "mouseUp";
Swf2jsEvent.prototype.MOUSE_WHEEL       = "mouseWheel";
Swf2jsEvent.prototype.RIGHT_CLICK       = "rightClick";
Swf2jsEvent.prototype.RIGHT_MOUSE_DOWN  = "rightMouseDown";
Swf2jsEvent.prototype.RIGHT_MOUSE_UP    = "rightMouseUp";
Swf2jsEvent.prototype.ROLL_OUT          = "rollOut";
Swf2jsEvent.prototype.ROLL_OVER         = "rollOver";
/**
 * @param message
 * @constructor
 */
var EOFError = function (message)
{
    this._message = "";
};
/**
 * @param message
 * @constructor
 */
var IOError = function (message)
{
    this._message = "";
};

/**
 * @param message
 * @constructor
 */
var IllegalOperationError = function (message)
{
    this._message = "";
};

/**
 * @param message
 * @param id
 * @constructor
 */
var InvalidSWFError = function (message, id)
{
    this._message = "";
    this._id      = 0;
};
/**
 * @param message
 * @constructor
 */
var MemoryError = function (message)
{
    this._message = "";
};
/**
 * @param message
 * @constructor
 */
var ScriptTimeoutError = function (message)
{
    this._message = "";
};
/**
 * @param message
 * @constructor
 */
var StackOverflowError = function (message)
{
    this._message = "";
};
/**
 * @constructor
 */
var ExternalInterface = function () {};
/**
 * @param type
 * @param bubbles
 * @param cancelable
 * @param init_dictionary
 * @param init_data_time
 * @constructor
 */
var AVDictionaryDataEvent = function (
    type, bubbles, cancelable,
    init_dictionary, init_data_time
)
{
    this._$type            = "";
    this._$bubbles         = false;
    this._$cancelable      = false;
    this._$init_dictionary = null;
    this._$init_dataTime   = null;
};
/**
 * @param type
 * @param bubbles
 * @param cancelable
 * @param status
 * @param responseUrl
 * @constructor
 */
var AVHTTPStatusEvent = function (type, bubbles, cancelable, status, responseUrl)
{
    this._type        = "";
    this._bubbles     = false;
    this._cancelable  = false;
    this._status      = 0;
    this._responseUrl = null;
};

/**
 * @param type
 * @param bubbles
 * @param cancelable
 * @param userData
 * @constructor
 */
var AVPauseAtPeriodEndEvent = function (type, bubbles, cancelable, userData)
{
    this._type       = "";
    this._bubbles    = false;
    this._cancelable = false;
    this._userData   = 0;
};
/**
 * @param type
 * @param bubbles
 * @param cancelable
 * @param timestamp
 * @param accelerationX
 * @param accelerationY
 * @param accelerationZ
 * @constructor
 */
var AccelerometerEvent = function (
    type, bubbles, cancelable, timestamp,
    accelerationX, accelerationY, accelerationZ
)
{
    this._$type          = "";
    this._$bubbles       = false;
    this._$cancelable    = false;
    this._$timestamp     = 0;
    this._$accelerationX = 0;
    this._$accelerationY = 0;
    this._$accelerationZ = 0;
};
/**
 * @param type
 * @param bubbles
 * @param cancelable
 * @param activating
 * @constructor
 */
var ActivityEvent = function (type, bubbles, cancelable, activating)
{
    this._$type       = "";
    this._$bubbles    = false;
    this._$cancelable = false;
    this._$activating = false;
};
/**
 * @param type
 * @param bubbles
 * @param cancelable
 * @param text
 * @param error
 * @constructor
 */
var AsyncErrorEvent = function (type, bubbles, cancelable, text, error)
{
    this._$type       = "";
    this._$bubbles    = false;
    this._$cancelable = false;
    this._$text       = "";
    this._$error      = null;
};
/**
 * @param type
 * @constructor
 */
var ClipEvent = function (type)
{
    this.type   = type;
    this.target = null;
    Swf2jsEvent.call(this);
};

/**
 * extends
 * @type {EventDispatcher}
 */
ClipEvent.prototype = Object.create(Swf2jsEvent.prototype);
ClipEvent.prototype.constructor = ClipEvent;

// set
Util.prototype.$clipEvent = new ClipEvent();
/**
 * @param type
 * @param bubbles
 * @param cancelable
 * @param mouseTarget
 * @param contextMenuOwner
 * @constructor
 */
var ContextMenuEvent = function (type, bubbles, cancelable, mouseTarget, contextMenuOwner)
{
    this._type             = "";
    this._bubbles          = false;
    this._cancelable       = false;
    this._mouseTarget      = null;
    this._contextMenuOwner = null;
};
/**
 * @param type
 * @param bubbles
 * @param cancelable
 * @param data
 * @constructor
 */
var DataEvent = function (type, bubbles, cancelable, data)
{
    this._type       = "";
    this._bubbles    = false;
    this._cancelable = false;
    this._data       = "";
};
/**
 * @param {string}  type
 * @param {boolean} bubbles
 * @param {boolean} cancelable
 * @constructor
 */
var Event = function (type, bubbles, cancelable)
{
    OriginalObject.call(this);
    
    // init
    this._$type = type + "";

    if (typeof bubbles === "boolean") {
        this._$bubbles = bubbles;
    }

    if (typeof cancelable === "boolean") {
        this._$cancelable = cancelable;
    }

    // origin param
    this._$target = null;
};

/**
 * @type {string}
 */
Event.ACTIVATE                     = "activate";
Event.ADDED                        = "added";
Event.ADDED_TO_STAGE               = "addedToStage";
Event.BROWSER_ZOOM_CHANGE          = "browserZoomChange";
Event.CANCEL                       = "cancel";
Event.CHANGE                       = "change";
Event.CHANNEL_MESSAGE              = "channelMessage";
Event.CHANNEL_STATE                = "channelState";
Event.CLEAR                        = "clear";
Event.CLOSE                        = "close";
Event.CLOSING                      = "closing";
Event.COMPLETE                     = "complete";
Event.CONNECT                      = "connect";
Event.CONTEXT3D_CREATE             = "context3DCreate";
Event.COPY                         = "copy";
Event.CUT                          = "cut";
Event.DEACTIVATE                   = "deactivate";
Event.DISPLAYING                   = "displaying";
Event.ENTER_FRAME                  = "enterFrame";
Event.EXIT_FRAME                   = "exitFrame";
Event.EXITING                      = "exiting";
Event.FRAME_CONSTRUCTED            = "frameConstructed";
Event.FRAME_LABEL                  = "frameLabel";
Event.FULLSCREEN                   = "fullScreen";
Event.HTML_BOUNDS_CHANGE           = "htmlBoundsChange";
Event.HTML_DOM_INITIALIZE          = "htmlDOMInitialize";
Event.HTML_RENDER                  = "htmlRender";
Event.ID3                          = "id3";
Event.INIT                         = "init";
Event.LOCATION_CHANGE              = "locationChange";
Event.MOUSE_LEAVE                  = "mouseLeave";
Event.OPEN                         = "open";
Event.PASTE                        = "paste";
Event.REMOVED                      = "removed";
Event.REMOVED_FROM_STAGE           = "removedFromStage";
Event.RENDER                       = "render";
Event.RESIZE                       = "resize";
Event.SCROLL                       = "scroll";
Event.SELECT                       = "select";
Event.SELECT_ALL                   = "selectAll";
Event.SOUND_COMPLETE               = "soundComplete";
Event.STANDARD_ERROR_CLOSE         = "standardErrorClose";
Event.STANDARD_INPUT_CLOSE         = "standardInputClose";
Event.STANDARD_OUTPUT_CLOSE        = "standardOutputClose";
Event.TAB_CHILDREN_CHANGE          = "tabChildrenChange";
Event.TAB_ENABLED_CHANGE           = "tabEnabledChange";
Event.TAB_INDEX_CHANGE             = "tabIndexChange";
Event.TEXT_INTERACTION_MODE_CHANGE = "textInteractionModeChange";
Event.TEXTURE_READY                = "textureReady";
Event.UNLOAD                       = "unload";
Event.USER_IDLE                    = "userIdle";
Event.USER_PRESENT                 = "userPresent";
Event.VIDEO_FRAME                  = "videoFrame";
Event.WORKER_STATE                 = "workerState";

/**
 * extends
 * @type {OriginalObject}
 */
Event.prototype = Object.create(OriginalObject.prototype);
Event.prototype.constructor = Event;

/**
 * properties
 */
Object.defineProperties(Event.prototype, {
    bubbles: {
        /**
         * @return {boolean}
         */
        get: function () {
            return this._$bubbles;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {
        }
    },
    cancelable: {
        /**
         * @return {boolean}
         */
        get: function () {
            return this._$cancelable;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {
        }
    },
    currentTarget: {
        /**
         * @return {object}
         */
        get: function () {
            return this._$target;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {
        }
    },
    eventPhase: {
        /**
         * @return {number}
         */
        get: function () {
            return EventPhase.AT_TARGET;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {
        }
    },
    target: {
        /**
         * @return {object}
         */
        get: function () {
            return this._$target;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {
        }
    },
    type: {
        /**
         * @return {string}
         */
        get: function () {
            return this._$type;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    }
});

/**
 * @return {Event}
 */
Event.prototype.clone = function ()
{
    var event = new Event(this.type, this.bubbles, this.cancelable);
    event._$target = this._$target;

    return event;
};

/**
 * @return {string}
 */
Event.prototype.toString = function ()
{
    return "[Event type=" + this.type
        + " bubbles="     + this.bubbles
        + " cancelable="  + this.cancelable
        + " eventPhase="  + this.eventPhase
        +"]";
};





/**
 * @constructor
 */
var EventDispatcher = function (target)
{
    OriginalObject.call(this);

    // origin param
    this._$events = {};
};

/**
 * extends
 * @type {OriginalObject}
 */
EventDispatcher.prototype = Object.create(OriginalObject.prototype);
EventDispatcher.prototype.constructor = EventDispatcher;

/**
 * properties
 */
Object.defineProperties(EventDispatcher.prototype, {
    onEnterFrame: {
        get: function () {
            return this.getOnEvent("onEnterFrame");
        },
        set: function (onEnterFrame) {
            this.setOnEvent("onEnterFrame", onEnterFrame);
        }
    },
    onPress: {
        get: function () {
            return this.getOnEvent("onPress");
        },
        set: function (onPress) {
            this.setOnEvent("onPress", onPress);
        }
    },
    onRelease: {
        get: function () {
            return this.getOnEvent("onRelease");
        },
        set: function (onRelease) {
            this.setOnEvent("onRelease", onRelease);
        }
    },
    onReleaseOutside: {
        get: function () {
            return this.getOnEvent("onReleaseOutside");
        },
        set: function (onReleaseOutside) {
            this.setOnEvent("onReleaseOutside", onReleaseOutside);
        }
    },
    onRollOver: {
        get: function () {
            return this.getOnEvent("onRollOver");
        },
        set: function (onRollOver) {
            this.setOnEvent("onRollOver", onRollOver);
        }
    },
    onRollOut: {
        get: function () {
            return this.getOnEvent("onRollOut");
        },
        set: function (onRollOut) {
            this.setOnEvent("onRollOut", onRollOut);
        }
    },
    onData: {
        get: function () {
            return this.getOnEvent("onData");
        },
        set: function (onData) {
            this.setOnEvent("onData", onData);
        }
    },
    onMouseDown: {
        get: function () {
            return this.getOnEvent("onMouseDown");
        },
        set: function (onMouseDown) {
            this.setOnEvent("onMouseDown", onMouseDown);
        }
    },
    onMouseUp: {
        get: function () {
            return this.getOnEvent("onMouseUp");
        },
        set: function (onMouseUp) {
            this.setOnEvent("onMouseUp", onMouseUp);
        }
    },
    onMouseMove: {
        get: function () {
            return this.getOnEvent("onMouseMove");
        },
        set: function (onMouseMove) {
            this.setOnEvent("onMouseMove", onMouseMove);
        }
    },
    onDragOut: {
        get: function () {
            return this.getOnEvent("onDragOut");
        },
        set: function (onDragOut) {
            this.setOnEvent("onDragOut", onDragOut);
        }
    },
    onDragOver: {
        get: function () {
            return this.getOnEvent("onDragOver");
        },
        set: function (onDragOver) {
            this.setOnEvent("onDragOver", onDragOver);
        }
    },
    onKeyDown: {
        get: function () {
            return this.getOnEvent("onKeyDown");
        },
        set: function (onKeyDown) {
            this.setOnEvent("onKeyDown", onKeyDown);
        }
    },
    onKeyUp: {
        get: function () {
            return this.getOnEvent("onKeyUp");
        },
        set: function (onKeyUp) {
            this.setOnEvent("onKeyUp", onKeyUp);
        }
    },
    onLoad: {
        get: function () {
            return this.getOnEvent("onLoad");
        },
        set: function (onLoad) {
            this.setOnEvent("onLoad", onLoad);
        }
    },
    onUnLoad: {
        get: function () {
            return this.getOnEvent("onUnLoad");
        },
        set: function (onUnLoad) {
            this.setOnEvent("onUnLoad", onUnLoad);
        }
    }
});

/**
 * @return {string}
 */
EventDispatcher.prototype.toString = function ()
{
    return "[object EventDispatcher]";
};

/**
 * @param  {string}   type
 * @return {boolean}
 */
EventDispatcher.prototype.hasOnEvent = function (type)
{
    return (type in this._$variables);
};

/**
 * @param   {string}   type
 * @returns {function}
 */
EventDispatcher.prototype.getOnEvent = function (type)
{
    return this.hasOnEvent(type) ? this._$variables[type]: null;
};

/**
 * @param {string} type
 * @param {*} action_script
 */
EventDispatcher.prototype.setOnEvent = function (type, action_script)
{
    this._$variables[type] = action_script;
};

/**
 * @param {string}   type
 * @param {Function} listener
 * @param {boolean}  use_capture
 * @param {number}   priority
 * @param {boolean}  use_weak_reference
 */
EventDispatcher.prototype.addEventListener = function (
    type, listener, use_capture, priority, use_weak_reference
) {
    if (typeof listener === "function") {

        // init
        type = type + "";
        if (!(type in this._$events)) {
            this._$events[type] = [];
        }

        // add
        if (typeof priority !== "number") {

            this._$events[type].unshift(listener);

        } else {

            // priority
            this._$events[type][priority] = listener;

        }
    }
};

/**
 *
 * @param  {Event}   event
 * @return {boolean}
 */
EventDispatcher.prototype.dispatchEvent = function (event)
{
    if (this.hasEventListener(event.type)) {

        event._$target = this;

        // set listeners
        var listeners = this._$events[event.type];

        // execute
        listeners.reverse();
        for (var idx in listeners) {

            if (!listeners.hasOwnProperty(idx)) {
                continue;
            }

            listeners[idx].apply(this, [event]);
        }
        listeners.reverse();

        return true;
    }

    return false;
};

/**
 * @param   {string} type
 * @returns {boolean}
 */
EventDispatcher.prototype.hasEventListener = function (type)
{
    return (type in this._$events);
};

/**
 * @param {string}   type
 * @param {Function} listener
 * @param {boolean}  use_capture
 */
EventDispatcher.prototype.removeEventListener = function (type, listener, use_capture)
{
    if (this.hasEventListener(type)) {

        var listeners = this._$events[type];
        for (var idx in listeners) {

            if (!listeners.hasOwnProperty(idx)) {
                continue;
            }

            if (listener === listeners[idx]) {

                delete listeners[idx];
                break;

            }

        }

    }
};

/**
 * @param  {string}  type
 * @return {boolean}
 */
EventDispatcher.prototype.willTrigger = function (type)
{
    if (this.hasEventListener(type)) {
        return true;
    }

    if (this.parent.toString() !== "[object MainTimeline]") {
        return this.parent.willTrigger(type);
    }

    return false;
};
/**
 * @type {{AT_TARGET: number, BUBBLING_PHASE: number, CAPTURING_PHASE: number}}
 */
var EventPhase = {
    "AT_TARGET" : 2,
    "BUBBLING_PHASE" : 3,
    "CAPTURING_PHASE" : 1
};
/**
 * @param {number|undefined} redMultiplier
 * @param {number|undefined} greenMultiplier
 * @param {number|undefined} blueMultiplier
 * @param {number|undefined} alphaMultiplier
 * @param {number|undefined} redOffset
 * @param {number|undefined} greenOffset
 * @param {number|undefined} blueOffset
 * @param {number|undefined} alphaOffset
 * @constructor
 */
var ColorTransform = function (
    redMultiplier, greenMultiplier, blueMultiplier, alphaMultiplier,
    redOffset, greenOffset, blueOffset, alphaOffset
) {

    OriginalObject.call(this);

    // default
    this._$colorTransform  = [1, 1, 1, 1, 0, 0, 0, 0];

    // init
    this.redMultiplier    = redMultiplier;
    this.greenMultiplier  = greenMultiplier;
    this.blueMultiplier   = blueMultiplier;
    this.alphaMultiplier  = alphaMultiplier;
    this.redOffset        = redOffset;
    this.greenOffset      = greenOffset;
    this.blueOffset       = blueOffset;
    this.alphaOffset      = alphaOffset;
};

/**
 * extends
 * @type {OriginalObject}
 */
ColorTransform.prototype = Object.create(OriginalObject.prototype);
ColorTransform.prototype.constructor = ColorTransform;

/**
 * properties
 */
Object.defineProperties(ColorTransform.prototype, {
    redMultiplier: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$colorTransform[0];
        },
        /**
         * @param {number} redMultiplier
         */
        set: function (redMultiplier) {
            if (!this.$isNaN(redMultiplier) &&
                -1 <= redMultiplier && 1 >= redMultiplier
            ) {
                this._$colorTransform[0] = redMultiplier;
            }
        }
    },
    greenMultiplier: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$colorTransform[1];
        },
        /**
         * @param  {number} greenMultiplier
         * @return void
         */
        set: function (greenMultiplier) {
            if (!this.$isNaN(greenMultiplier) &&
                -1 <= greenMultiplier && 1 >= greenMultiplier
            ) {
                this._$colorTransform[1] = greenMultiplier;
            }
        }
    },
    blueMultiplier: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$colorTransform[2];
        },
        /**
         * @param  {number} blueMultiplier
         * @return void
         */
        set: function (blueMultiplier) {
            if (!this.$isNaN(blueMultiplier) &&
                -1 <= blueMultiplier && 1 >= blueMultiplier
            ) {
                this._$colorTransform[2] = blueMultiplier;
            }
        }
    },
    alphaMultiplier: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$colorTransform[3];
        },
        /**
         * @param  {number} alphaMultiplier
         * @return void
         */
        set: function (alphaMultiplier) {
            if (!this.$isNaN(alphaMultiplier) &&
                -1 <= alphaMultiplier && 1 >= alphaMultiplier
            ) {
                this._$colorTransform[3] = alphaMultiplier;
            }
        }
    },
    redOffset: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$colorTransform[4];
        },
        /**
         * @param  {number} redOffset
         * @return void
         */
        set: function (redOffset) {
            if (!this.$isNaN(redOffset) &&
                -256 < redOffset && 256 > redOffset
            ) {
                this._$colorTransform[4] = redOffset|0;
            }
        }
    },
    greenOffset: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$colorTransform[5];
        },
        /**
         * @param  {number} greenOffset
         * @return void
         */
        set: function (greenOffset) {
            if (!this.$isNaN(greenOffset) &&
                -256 < greenOffset && 256 > greenOffset
            ) {
                this._$colorTransform[5] = greenOffset|0;
            }
        }
    },
    blueOffset: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$colorTransform[6];
        },
        /**
         * @param  {number} blueOffset
         * @return void
         */
        set: function (blueOffset) {
            if (!this.$isNaN(blueOffset) &&
                -256 < blueOffset && 256 > blueOffset
            ) {
                this._$colorTransform[6] = blueOffset|0;
            }
        }
    },
    alphaOffset: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$colorTransform[7];
        },
        /**
         * @param  {number} alphaOffset
         * @return void
         */
        set: function (alphaOffset) {
            if (!this.$isNaN(alphaOffset) &&
                -256 < alphaOffset && 256 > alphaOffset
            ) {
                this._$colorTransform[7] = alphaOffset|0;
            }
        }
    },
    color: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$getColor();
        },
        /**
         * @param  {string|number} value
         * @return void
         */
        set: function (value) {
            this._$setColor(value);
        }
    },
    rgb: { // AS2
        /**
         * @return {number}
         */
        get: function () {
            return this._$getColor();
        },
        /**
         * @param  {string|number} value
         * @return void
         */
        set: function (value) {
            this._$setColor(value);
        }
    }
});

/**
 * @returns {string}
 */
ColorTransform.prototype.toString = function ()
{
    return "(" +
        "redMultiplier="   + this.redMultiplier   + ", " +
        "greenMultiplier=" + this.greenMultiplier + ", " +
        "blueMultiplier="  + this.blueMultiplier  + ", " +
        "alphaMultiplier=" + this.alphaMultiplier + ", " +
        "redOffset="       + this.redOffset       + ", " +
        "greenOffset="     + this.greenOffset     + ", " +
        "blueOffset="      + this.blueOffset      + ", " +
        "alphaOffset="     + this.alphaOffset     + ")";
};

/**
 * @param   {ColorTransform} second
 * @returns void
 */
ColorTransform.prototype.concat = function (second)
{
    this._$colorTransform = this.$multiplicationColor(
        this._$colorTransform,
        second._$colorTransform
    );
};

/**
 * @returns {number}
 */
ColorTransform.prototype._$getColor = function ()
{
    return this.$rgbToInt(this.redOffset, this.greenOffset, this.blueOffset);
};

/**
 * @param   {string|number} value
 * @returns void
 */
ColorTransform.prototype._$setColor = function (value)
{
    var obj = (typeof value === "number")
        ? this.$intToRGBA(value)
        : this.$intToRGBA(this.$colorStringToInt(value));

    this.redOffset       = obj.R;
    this.greenOffset     = obj.G;
    this.blueOffset      = obj.B;

    this.redMultiplier   = 0;
    this.greenMultiplier = 0;
    this.blueMultiplier  = 0;
};

/**
 * @returns {ColorTransform}
 */
ColorTransform.prototype._$clone = function ()
{
    return new ColorTransform(
        this.redMultiplier,
        this.greenMultiplier,
        this.blueMultiplier,
        this.alphaMultiplier,
        this.redOffset,
        this.greenOffset,
        this.blueOffset,
        this.alphaOffset
    );
};
/**
 * @param {number|undefined} a
 * @param {number|undefined} b
 * @param {number|undefined} c
 * @param {number|undefined} d
 * @param {number|undefined} tx
 * @param {number|undefined} ty
 * @constructor
 */
var Matrix = function (a, b, c, d, tx, ty)
{
    OriginalObject.call(this);
    
    // default
    this.identity();

    // init
    this.a  = a;
    this.b  = b;
    this.c  = c;
    this.d  = d;
    this.tx = tx;
    this.ty = ty;
};

/**
 * extends
 * @type {OriginalObject}
 */
Matrix.prototype = Object.create(OriginalObject.prototype);
Matrix.prototype.constructor = Matrix;

/**
 * properties
 */
Object.defineProperties(Matrix.prototype, {
    a: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$matrix[0];
        },
        /**
         * @param  {number} a
         * @return void
         */
        set: function (a) {
            a = +a;
            if (!this.$isNaN(a)) {
                this._$matrix[0] = a;
            }
        }
    },
    b: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$matrix[1];
        },
        /**
         * @param  {number} b
         * @return void
         */
        set: function (b) {
            b = +b;
            if (!this.$isNaN(b)) {
                this._$matrix[1] = b;
            }
        }
    },
    c: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$matrix[2];
        },
        /**
         * @param  {number} c
         * @return void
         */
        set: function (c) {
            c = +c;
            if (!this.$isNaN(c)) {
                this._$matrix[2] = c;
            }
        }
    },
    d: {
        /**
         * @return {number}
         */
        get: function () {
            return +this._$matrix[3];
        },
        /**
         * @param  {number} d
         * @return void
         */
        set: function (d) {
            d = +d;
            if (!this.$isNaN(d)) {
                this._$matrix[3] = +d;
            }
        }
    },
    tx: {
        /**
         * @return {number}
         */
        get: function () {
            return +(this._$matrix[4] / 20);
        },
        /**
         * @param  {number} tx
         * @return void
         */
        set: function (tx) {
            tx = +tx;
            if (!this.$isNaN(tx)) {
                this._$matrix[4] = +(tx * 20);
            }
        }
    },
    ty: {
        /**
         * @return {number}
         */
        get: function () {
            return +(this._$matrix[5] / 20);
        },
        /**
         * @param  {number} ty
         * @return void
         */
        set: function (ty) {
            ty = +ty;
            if (!this.$isNaN(ty)) {
                this._$matrix[5] = +(ty * 20);
            }
        }
    }
});

/**
 * @returns {Matrix}
 */
Matrix.prototype._$clone = function ()
{
    return new Matrix(this.a, this.b, this.c, this.d, this.tx, this.ty);
};

/**
 * @param   {Matrix} m
 * @returns void
 */
Matrix.prototype.concat = function (m)
{
    this._$matrix = this.$multiplicationMatrix(m._$matrix, this._$matrix);
};

/**
 * @param   {number}   column
 * @param   {Vector3D} vector3D
 * @returns void
 */
Matrix.prototype.copyColumnFrom = function (column, vector3D)
{
    // todo
};

/**
 * @param   {number}   column
 * @param   {Vector3D} vector3D
 * @returns void
 */
Matrix.prototype.copyColumnTo = function (column, vector3D)
{
    // todo
};

/**
 * @param   {Matrix} sourceMatrix
 * @returns void
 */
Matrix.prototype.copyFrom = function (sourceMatrix)
{
    // todo
};

/**
 * @param   {number}   row
 * @param   {Vector3D} vector3D
 * @returns void
 */
Matrix.prototype.copyRowFrom = function (row, vector3D)
{
    // todo
};

/**
 * @param   {number}   row
 * @param   {Vector3D} vector3D
 * @returns void
 */
Matrix.prototype.copyRowTo = function (row, vector3D)
{
    // todo
};

/**
 * @param   {number} scaleX
 * @param   {number} scaleY
 * @param   {number} rotation
 * @param   {number} tx
 * @param   {number} ty
 * @returns void
 */
Matrix.prototype.createBox = function (scaleX, scaleY, rotation, tx, ty)
{
    this.identity();
    this.scale(scaleX, scaleY);
    this.rotate(rotation);
    this.translate(tx, ty);
};

/**
 * @param   {number} width
 * @param   {number} height
 * @param   {number} rotation
 * @param   {number} tx
 * @param   {number} ty
 * @returns void
 */
Matrix.prototype.createGradientBox = function (width, height, rotation, tx, ty)
{
    this.identity();
    this.scale(width / 1638.4, height / 1638.4);
    this.rotate(rotation);
    this.translate(width / 2 + tx, height / 2 + ty);
};


/**
 * @param   {Point} point
 * @returns {Point}
 */
Matrix.prototype.deltaTransformPoint = function (point)
{
    var m = new Matrix();
    m.translate(point.x, point.y);

    var clone = this._$clone();
    clone.tx = 0;
    clone.ty = 0;

    m.concat(clone);

    return new Point(m.tx, m.ty);
};

/**
 * @returns void
 */
Matrix.prototype.identity = function ()
{
    this._$matrix = [1, 0, 0, 1, 0, 0];
};

/**
 * @returns void
 */
Matrix.prototype.invert = function ()
{
    var det = 1;
    var m   = [[this.a, this.c], [this.b, this.d]];

    var i = 0;
    while (i < 2) {

        var j = 0;
        while (j < 2) {

            if (i < j) {
                var buf = m[j][i] / m[i][i];

                var k = 0;
                while (k < 2) {
                    m[j][k] = m[j][k] - m[i][k] * buf;
                    k = (k + 1)|0;
                }
            }
            j = (j + 1)|0;
        }
        i = (i + 1)|0;
    }

    i = 0;
    while (i < 2) {
        det = det * m[i][i];
        i = (i + 1)|0;
    }

    this.a  =  this.a  / det;
    this.b  = -this.b  / det;
    this.c  = -this.c  / det;
    this.d  =  this.d  / det;
    this.tx = -this.tx / det;
    this.ty = -this.ty / det;
};

/**
 * @param   {number} rotation
 * @returns void
 */
Matrix.prototype.rotate = function (rotation)
{
    var radianX = this.$atan2(this.b,  this.a);
    var radianY = this.$atan2(-this.c, this.d);
    var scaleX  = this.$sqrt(this.a * this.a + this.b * this.b);
    var scaleY  = this.$sqrt(this.c * this.c + this.d * this.d);

    radianY = radianY + rotation - radianX;
    radianX = rotation;

    this.a = scaleX  * this.$cos(radianX);
    this.c = -scaleX * this.$sin(radianX);
    this.b = scaleY  * this.$sin(radianY);
    this.d = scaleY  * this.$cos(radianY);

    var tx = this.a * this.tx + this.c * this.ty;
    var ty = this.b * this.tx + this.d * this.ty;

    this.tx = tx;
    this.ty = ty;
};

/**
 * @param   {number} sx
 * @param   {number} sy
 * @returns void
 */
Matrix.prototype.scale = function (sx, sy)
{
    var radianX = this.$atan2(this.b,  this.a);
    var radianY = this.$atan2(-this.c, this.d);

    this.a = sx  * this.$cos(radianX);
    this.c = -sx * this.$sin(radianX);
    this.b = sy  * this.$sin(radianY);
    this.d = sy  * this.$cos(radianY);
};

/**
 * @param   {number} aa
 * @param   {number} ba
 * @param   {number} ca
 * @param   {number} da
 * @param   {number} txa
 * @param   {number} tya
 * @returns void
 */
Matrix.prototype.setTo = function (aa, ba, ca, da, txa, tya)
{
    this.a  = aa;
    this.b  = ba;
    this.c  = ca;
    this.d  = da;
    this.tx = txa;
    this.ty = tya;
};

/**
 * @returns {string}
 */
Matrix.prototype.toString = function ()
{
    return "(a="+ this.a +", b="+ this.b +", c="+ this.c +", d="+ this.d +", tx="+ this.tx +", ty="+ this.ty +")";
};

/**
 * @param   {Point} point
 * @returns {Point}
 */
Matrix.prototype.transformPoint = function (point)
{
    var m = new Matrix();
    m.translate(point.x, point.y);
    m.concat(this);
    return new Point(m.tx, m.ty);
};

/**
 * @param   {number} dx
 * @param   {number} dy
 * @returns void
 */
Matrix.prototype.translate = function (dx, dy)
{
    this.tx = this.tx + dx;
    this.ty = this.ty + dy;
};


/**
 * @param v
 * @constructor
 */
var Matrix3D = function (v)
{
    OriginalObject.call(this);

    this._v = null;
};

/**
 * extends
 * @type {OriginalObject}
 */
Matrix3D.prototype = Object.create(OriginalObject.prototype);
Matrix3D.prototype.constructor = Matrix3D;
/**
 * @type {{AXIS_ANGLE: string, EULER_ANGLES: string, QUATERNION: string}}
 */
var Orientation3D = {
    "AXIS_ANGLE"  : "axisAngle",
    "EULER_ANGLES": "eulerAngles",
    "QUATERNION"  : "quaternion"
};
/**
 * @constructor
 */
var PerspectiveProjection = function () {};

/**
 * @param {number} x
 * @param {number} y
 * @constructor
 */
var Point = function (x, y)
{
    OriginalObject.call(this);

    // default
    this._$x = 0;
    this._$y = 0;

    // init
    this.x = x;
    this.y = y;
};

/**
 * extends
 * @type {OriginalObject}
 */
Point.prototype = Object.create(OriginalObject.prototype);
Point.prototype.constructor = Point;

/**
 * properties
 */
Object.defineProperties(Point.prototype, {
    x: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$x / 20;
        },
        /**
         * @param  {number} x
         * @return void
         */
        set: function (x) {
            if (typeof x === "number") {
                this._$x = x * 20;
            }
        }
    },
    y: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$y / 20;
        },
        /**
         * @param  {number} y
         * @return void
         */
        set: function (y) {
            if (typeof y === "number") {
                this._$y = y * 20;
            }
        }
    },
    length: {
        /**
         * @return {number}
         */
        get: function () {
            return this.$sqrt(this.$pow(this.x, 2) + this.$pow(this.y, 2));
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    }
});

/**
 * @param   {Point} v
 * @returns {Point}
 */
Point.prototype.add = function (v)
{
    return new Point(this.x + v.x, this.y + v.y);
};

/**
 * @returns {Point}
 */
Point.prototype.clone = function ()
{
    return new Point(this.x, this.y);
};

/**
 * @param   {Point} source_point
 * @returns void
 */
Point.prototype.copyFrom = function (source_point)
{
    this.x = source_point.x;
    this.y = source_point.y;
};

/**
 * @param   {Point} pt1
 * @param   {Point} pt2
 * @returns {number}
 */
Point.distance = function (pt1, pt2)
{
    return Math.sqrt(Math.pow(pt1.x - pt2.x, 2) + Math.pow(pt1.y - pt2.y, 2));
};

/**
 *
 * @param   {Point} to_compare
 * @returns {boolean}
 */
Point.prototype.equals = function (to_compare)
{
    return (this.x === to_compare.x && this.y === to_compare.y);
};

/**
 * @param   {Point}  pt1
 * @param   {Point}  pt2
 * @param   {number} f
 * @returns {Point}
 */
Point.interpolate = function (pt1, pt2, f)
{
    var x = pt1.x + ((pt2.x - pt1.x) * f);
    var y = pt1.y + (x - pt1.x) * ((pt2.y - pt1.y) / (pt2.x - pt1.x));
    return new Point(x, y);
};

/**
 * @param   {number} thickness
 * @returns void
 */
Point.prototype.normalize = function (thickness)
{
    var length = this.length;
    var n      = (length - thickness) / length;

    this.x = this.x - (this.x * n);
    this.y = this.y - (this.y * n);
};

/**
 * @param   {number} dx
 * @param   {number} dy
 * @returns {Point}
 */
Point.prototype.offset = function (dx, dy)
{
    this.x = this.x + dx;
    this.y = this.y + dy;
};

/**
 * @param   {number} len
 * @param   {number} angle
 * @returns {Point}
 */
Point.polar = function (len, angle)
{
    var x = len * Math.cos(angle);
    var y = len * Math.sin(angle);
    return new Point(x, y);
};

/**
 * @param   {number} xa
 * @param   {number} ya
 * @returns void
 */
Point.prototype.setTo = function (xa, ya)
{
    this.x = xa;
    this.y = ya;
};

/**
 * @param   {Point} v
 * @returns {Point}
 */
Point.prototype.subtract = function (v)
{
    return new Point(this.x - v.x, this.y - v.y);
};

/**
 * @returns {string}
 */
Point.prototype.toString = function ()
{
    return "(x="+ this.x +", y="+ this.y +")";
};
/**
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @constructor
 */
var Rectangle = function (x, y, width, height)
{
    OriginalObject.call(this);

    // default
    this._$x      = 0;
    this._$y      = 0;
    this._$width  = 0;
    this._$height = 0;

    // init
    this.x      = x||0;
    this.y      = y||0;
    this.width  = width||0;
    this.height = height||0;
};

/**
 * extends
 * @type {OriginalObject}
 */
Rectangle.prototype = Object.create(OriginalObject.prototype);
Rectangle.prototype.constructor = Rectangle;

/**
 * properties
 */
Object.defineProperties(Rectangle.prototype, {
    bottom: {
        /**
         * @return {number}
         */
        get: function () {
            return this.$abs(this.y) + this.height;
        },
        /**
         * @param  {number} bottom
         * @return void
         */
        set: function (bottom) {
            this.height = +(bottom - this.y);
        }
    },
    bottomRight: {
        /**
         * @return {Point}
         */
        get: function () {
            return new Point(this.right, this.bottom);
        },
        /**
         * @param  {Point} value
         * @return void
         */
        set: function (value) {
            this.right  = value.x;
            this.bottom = value.y;
        }
    },
    height: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$height / 20;
        },
        /**
         * @param  {number} height
         * @return void
         */
        set: function (height) {
            this._$height = +(height * 20);
        }
    },
    left: {
        /**
         * @return {number}
         */
        get: function () {
            return this.x;
        },
        /**
         * @param  {number} left
         * @return void
         */
        set: function (left) {
            this.width = +(this.right - left);
            this.x     = left;
        }
    },
    right: {
        /**
         * @return {number}
         */
        get: function () {
            return +(this.$abs(this.x) + this.width);
        },
        /**
         * @param  {number} right
         * @return void
         */
        set: function (right) {
            this.width = +(right - this.x);
        }
    },
    size: {
        /**
         * @return {Point}
         */
        get: function () {
            return new Point(this.width, this.height);
        },
        /**
         * @param  {Point} value
         * @return void
         */
        set: function (value) {
            this.width  = value.x;
            this.height = value.y;
        }
    },
    top: {
        /**
         * @return {number}
         */
        get: function () {
            return this.y;
        },
        /**
         * @param  {number} top
         * @return void
         */
        set: function (top) {
            this.height = +(this.bottom - top);
            this.y      = top;
        }
    },
    topLeft: {
        /**
         * @return {Point}
         */
        get: function () {
            return new Point(this.x, this.y);
        },
        /**
         * @param  {Point} value
         * @return void
         */
        set: function (value) {
            this.left = value.x;
            this.top  = value.y;
        }
    },
    width: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$width / 20;
        },
        /**
         * @param  {number} width
         * @return void
         */
        set: function (width) {
            this._$width = +(width * 20);
        }
    },
    x: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$x / 20;
        },
        /**
         * @param  {number} x
         * @return void
         */
        set: function (x) {
            this._$x = +(x * 20);
        }
    },
    y: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$y / 20;
        },
        /**
         * @param  {number} y
         * @return void
         */
        set: function (y) {
            this._$y = +(y * 20);
        }
    }
});

/**
 * @returns {Rectangle}
 */
Rectangle.prototype.clone = function ()
{
    return new Rectangle(this.x, this.y, this.width, this.height);
};

/**
 * @param   {number} x
 * @param   {number} y
 * @returns {boolean}
 */
Rectangle.prototype.contains = function (x, y)
{
    return (this.x <= x && this.y <= y && this.right > x && this.bottom > y);
};

/**
 * @param   {Point}   point
 * @returns {boolean}
 */
Rectangle.prototype.containsPoint = function (point)
{
    return (this.x <= point.x && this.y <= point.y &&
        this.right > point.x && this.bottom > point.y);
};

/**
 *
 * @param   {Rectangle} rect
 * @returns {boolean}
 */
Rectangle.prototype.containsRect = function (rect)
{
    return (this.x <= rect.x && this.y <= rect.y &&
        this.right >= rect.right && this.bottom >= rect.bottom);
};

/**
 * @param   {Rectangle} sourceRect
 * @returns void
 */
Rectangle.prototype.copyFrom = function (sourceRect)
{
    this.x      = sourceRect.x;
    this.y      = sourceRect.y;
    this.width  = sourceRect.width;
    this.height = sourceRect.height;
};

/**
 * @param   {Rectangle} toCompare
 * @returns {boolean}
 */
Rectangle.prototype.equals = function (toCompare)
{
    return (this.x === toCompare.x && this.y === toCompare.y &&
        this.width === toCompare.width && this.height === toCompare.height);
};

/**
 * @param   {number} dx
 * @param   {number} dy
 * @returns void
 */
Rectangle.prototype.inflate = function (dx, dy)
{
    this.x      = +(this.x - dx);
    this.width  = +(this.width + 2 * dx);

    this.y      = +(this.y - dy);
    this.height = +(this.height + 2 * dy);
};

/**
 * @param   {Point} point
 * @returns void
 */
Rectangle.prototype.inflatePoint = function (point)
{
    this.x      = +(this.x - point.x);
    this.width  = +(this.width + 2 * point.x);

    this.y      = +(this.y - point.y);
    this.height = +(this.height + 2 * point.y);
};

/**
 * @param   {Rectangle} toIntersect
 * @returns {Rectangle}
 */
Rectangle.prototype.intersection = function (toIntersect)
{
    var sx = +this.$max(this.x, toIntersect.x);
    var sy = +this.$max(this.y, toIntersect.y);
    var ex = +this.$min(this.right,  toIntersect.right);
    var ey = +this.$min(this.bottom, toIntersect.bottom);

    var w = +(ex - sx);
    var h = +(ey - sy);
    return (w > 0 && h > 0) ? new Rectangle(sx, sy, w, h) : new Rectangle();
};

/**
 * @param   {Rectangle} toIntersect
 * @returns {boolean}
 */
Rectangle.prototype.intersects = function (toIntersect)
{
    var sx = +this.$max(this.x, toIntersect.x);
    var sy = +this.$max(this.y, toIntersect.y);
    var ex = +this.$min(this.right,  toIntersect.right);
    var ey = +this.$min(this.bottom, toIntersect.bottom);

    var w = +(ex - sx);
    var h = +(ey - sy);
    return (w > 0 && h > 0);
};

/**
 * @returns {boolean}
 */
Rectangle.prototype.isEmpty = function ()
{
    return (this.width <= 0 || this.height <= 0);
};

/**
 *
 * @param   {number} dx
 * @param   {number} dy
 * @returns void
 */
Rectangle.prototype.offset = function (dx ,dy)
{
    this.x = +(this.x + dx);
    this.y = +(this.y + dy);
};

/**
 * @param   {Point} point
 * @returns void
 */
Rectangle.prototype.offsetPoint = function (point)
{
    this.x = +(this.x + point.x);
    this.y = +(this.y + point.y);
};

/**
 * @returns void
 */
Rectangle.prototype.setEmpty = function ()
{
    this.x      = 0;
    this.y      = 0;
    this.width  = 0;
    this.height = 0;
};

/**
 *
 * @param   {number} xa
 * @param   {number} ya
 * @param   {number} widtha
 * @param   {number} heighta
 * @returns void
 */
Rectangle.prototype.setTo = function (xa, ya, widtha, heighta)
{
    this.x      = xa;
    this.y      = ya;
    this.width  = widtha;
    this.height = heighta;
};

/**
 * @returns {string}
 */
Rectangle.prototype.toString = function ()
{
    return "(x="+ this.x +", y="+ this.y +", w="+ this.width +", h="+ this.height +")";
};

/**
 * @param   {Rectangle} toUnion
 * @returns {Rectangle}
 */
Rectangle.prototype.union = function (toUnion)
{
    switch (true) {

        case this.isEmpty():
            return toUnion.clone();

        case toUnion.isEmpty():
            return this.clone();

        default:
            return new Rectangle(
                this.$min(this.x, toUnion.x),
                this.$min(this.y, toUnion.y),
                this.$max(this.right,  toUnion.right),
                this.$max(this.bottom, toUnion.bottom)
            );

    }
};

/**
 * @param {DisplayObject} src
 * @constructor
 */
var Transform = function (src)
{
    OriginalObject.call(this);

    // properties
    this._$colorTransform        = null;
    this._$matrix                = null;
    this._$matrix3D              = null;
    this._$perspectiveProjection = null;
    this._$pixelBounds           = null;

    // origin param
    this._$displayObject         = src;
    this._$filters               = null;
    this._$blendMode             = null;
};

/**
 * extends
 * @type {OriginalObject}
 */
Transform.prototype = Object.create(OriginalObject.prototype);
Transform.prototype.constructor = Transform;

/**
 * properties
 */
Object.defineProperties(Transform.prototype, {
    colorTransform: {
        /**
         * @return {ColorTransform}
         */
        get: function () {

            if (this._$colorTransform) {

                return this._$colorTransform;

            } else {

                var placeObject = this._$displayObject._$getPlaceObject();
                if (placeObject) {

                    return placeObject.colorTransform;

                }

                this._$transform();
                return this._$colorTransform;

            }

        },
        /**
         * @param  {ColorTransform} colorTransform
         * @return void
         */
        set: function (colorTransform) {
            if (colorTransform instanceof ColorTransform) {
                this._$transform(null, colorTransform._$colorTransform, null, null);
            }
        }
    },
    matrix: {
        /**
         * @return {Matrix}
         */
        get: function () {
            if (this._$matrix) {

                return this._$matrix;

            } else {

                var placeObject = this._$displayObject._$getPlaceObject();
                if (placeObject) {

                    return placeObject.matrix;

                }

                this._$transform();
                return this._$matrix;

            }
        },
        /**
         * @param  {Matrix} matrix
         * @return void
         */
        set: function (matrix) {
            if (matrix instanceof Matrix) {
                this._$transform(matrix._$matrix, null, null, null);
            }
        }
    },
    // TODO
    matrix3D: {
        get: function () {
            return this._$matrix3D;
        },
        set: function (matrix3D) {
            if (matrix3D instanceof Matrix3D) {
                this._$matrix3D = matrix3D;
            }
        }
    },
    // TODO
    perspectiveProjection: {
        get: function () {
            return this._$perspectiveProjection;
        },
        set: function (perspective_projection) {
            if (perspective_projection instanceof PerspectiveProjection) {
                this._$perspectiveProjection = perspective_projection;
            }
        }
    },
    // TODO
    pixelBounds: {
        get: function () {
            return this._$pixelBounds;
        },
        set: function () {} // readonly
    },
    // TODO
    concatenatedColorTransform: {
        get: function () {

        },
        set: function () {} // readonly
    },
    // TODO
    concatenatedMatrix: {
        get: function () {

        },
        set: function () {} // readonly
    }
});

/**
 * @returns {string}
 */
Transform.prototype.toString = function ()
{
    return "[object Transform]";
};

/**
 * @param {DisplayObject} relativeTo
 * @returns {Matrix3D}
 */
Transform.prototype.getRelativeMatrix3D = function (relativeTo)
{
    // todo
    return new Matrix3D();
};

/**
 * @param  {array|null}  matrix
 * @param  {array|null}  color_transform
 * @param  {array|null}  filters
 * @param  {string|null} blend_mode
 * @return void
 */
Transform.prototype._$transform = function (matrix, color_transform, filters, blend_mode)
{
    var placeObject = this._$displayObject._$getPlaceObject();

    // Matrix
    switch (!matrix) {

        case true:

            this._$matrix = (!placeObject) ? new Matrix() : placeObject.matrix._$clone();

            break;

        default:

            this._$matrix = new Matrix();
            this._$matrix._$matrix = this.$cloneArray(matrix);

            break;
    }


    // ColorTransform
    switch (!color_transform) {

        case true:

            this._$colorTransform = (!placeObject) ?  new ColorTransform() : placeObject.colorTransform._$clone();

            break;

        default:

            this._$colorTransform = new ColorTransform(
                color_transform[0],
                color_transform[1],
                color_transform[2],
                color_transform[3],
                color_transform[4],
                color_transform[5],
                color_transform[6],
                color_transform[7]
            );

            break;
    }


    // Filter
    switch (this.$isArray(filters)) {

        case true:

            this._$filters = filters;

            break;

        default:

            this._$filters = (!placeObject) ? [] : placeObject.filters;

            break;
    }


    // BlendMode
    switch (!blend_mode) {

        case true:

            this._$blendMode = (!placeObject) ? BlendMode.NORMAL : placeObject.blendMode;

            break;

        default:

            this._$blendMode = blend_mode;

            break;
    }

};
/**
 * @param percent
 * @param mat
 * @param pos
 * @param at
 * @param up
 * @constructor
 */
var Utils3D = function (percent, mat, pos, at, up)
{
    OriginalObject.call(this);

    this._$percent = 0;
    this._$mat     = null;
    this._$pos     = null;
    this._$at      = null;
    this._$up      = null;
};

/**
 * extends
 * @type {OriginalObject}
 */
Utils3D.prototype = Object.create(OriginalObject.prototype);
Utils3D.prototype.constructor = Utils3D;

/**
 * @param x
 * @param y
 * @param z
 * @param w
 * @constructor
 */
var Vector3D = function (x, y, z, w)
{
    OriginalObject.call(this);

    this._$x = 0;
    this._$y = 0;
    this._$z = 0;
    this._$w = 0;
};

/**
 * extends
 * @type {OriginalObject}
 */
Vector3D.prototype = Object.create(OriginalObject.prototype);
Vector3D.prototype.constructor = Vector3D;
/**
 * @param requestedLocaleIDName
 * @param initialMode
 * @constructor
 */
var Collator = function (requestedLocaleIDName, initialMode)
{
    this._requestedLocaleIDName = "";
    this._initialMode           = "sorting";
};
/**
 * @type {{MATCHING: string, SORTING: string}}
 */
var CollatorMode = {
    "MATCHING": "matching",
    "SORTING" : "sorting"
};
/**
 * @param requestedLocaleIDName
 * @constructor
 */
var CurrencyFormatter = function (requestedLocaleIDName)
{
    this._requestedLocaleIDName = "";
};

/**
 * @param value
 * @param symbol
 * @constructor
 */
var CurrencyParseResult = function (value, symbol)
{
    this._value  = "";
    this._symbol = "";
};

/**
 * @param requestedLocaleIDName
 * @param dateStyle
 * @param timeStyle
 * @constructor
 */
var DateTimeFormatter = function (requestedLocaleIDName, dateStyle, timeStyle)
{
    this._requestedLocaleIDName = "";
    this._dateStyle             = "long";
    this._timeStyle             = "long";
};
/**
 * @type {{FORMAT: string, STANDALONE: string}}
 */
var DateTimeNameContext = {
    "FORMAT"    : "format",
    "STANDALONE": "standalone"
};
/**
 * @type {{FULL: string, LONG_ABBREVIATION: string, SHORT_ABBREVIATION: string}}
 */
var DateTimeNameStyle = {
    "FULL"              : "full",
    "LONG_ABBREVIATION" : "longAbbreviation",
    "SHORT_ABBREVIATION": "shortAbbreviation"
};

/**
 * @type {{CUSTOM: string, LONG: string, MEDIUM: string, NONE: string, SHORT: string}}
 */
var DateTimeStyle = {
    "CUSTOM": "custom",
    "LONG"  : "long",
    "MEDIUM": "medium",
    "NONE"  : "none",
    "SHORT" : "short"
};
/**
 * @type {{BUFFER_OVERFLOW_ERROR: string, ERROR_CODE_UNKNOWN: string, ILLEGAL_ARGUMENT_ERROR: string, INDEX_OUT_OF_BOUNDS_ERROR: string, INVALID_ATTR_VALUE: string, INVALID_CHAR_FOUND: string, MEMORY_ALLOCATION_ERROR: string, NO_ERROR: string, NUMBER_OVERFLOW_ERROR: string, PARSE_ERROR: string, PATTERN_SYNTAX_ERROR: string, PLATFORM_API_FAILED: string, TRUNCATED_CHAR_FOUND: string, UNEXPECTED_TOKEN: string, UNSUPPORTED_ERROR: string, USING_DEFAULT_WARNING: string, USING_FALLBACK_WARNING: string}}
 */
var LastOperationStatus = {
    "BUFFER_OVERFLOW_ERROR"    : "bufferOverflowError",
    "ERROR_CODE_UNKNOWN"       : "errorCodeUnknown",
    "ILLEGAL_ARGUMENT_ERROR"   : "illegalArgumentError",
    "INDEX_OUT_OF_BOUNDS_ERROR": "indexOutOfBoundsError",
    "INVALID_ATTR_VALUE"       : "invalidAttrValue",
    "INVALID_CHAR_FOUND"       : "invalidCharFound",
    "MEMORY_ALLOCATION_ERROR"  : "memoryAllocationError",
    "NO_ERROR"                 : "noError",
    "NUMBER_OVERFLOW_ERROR"    : "numberOverflowError",
    "PARSE_ERROR"              : "parseError",
    "PATTERN_SYNTAX_ERROR"     : "patternSyntaxError",
    "PLATFORM_API_FAILED"      : "platformAPIFailed",
    "TRUNCATED_CHAR_FOUND"     : "truncatedCharFound",
    "UNEXPECTED_TOKEN"         : "unexpectedToken",
    "UNSUPPORTED_ERROR"        : "unsupportedError",
    "USING_DEFAULT_WARNING"    : "usingDefaultWarning",
    "USING_FALLBACK_WARNING"   : "usingFallbackWarning"
};

/**
 * @param name
 * @constructor
 */
var LocaleID = function (name)
{
    this._name = "";
};

/**
 * @type {{ARABIC_INDIC: number, BALINESE: number, BENGALI: number, CHAM: number, DEVANAGARI: number, EUROPEAN: number, EXTENDED_ARABIC_INDIC: number, FULL_WIDTH: number, GUJARATI: number, GURMUKHI: number, KANNADA: number, KAYAH_LI: number, KHMER: number, LAO: number, LEPCHA: number, LIMBU: number, MALAYALAM: number, MONGOLIAN: number, MYANMAR: number, MYANMAR_SHAN: number, NEW_TAI_LUE: number, NKO: number, OL_CHIKI: number, ORIYA: number, OSMANYA: number, SAURASHTRA: number, SUNDANESE: number, TAMIL: number, TELUGU: number, THAI: number, TIBETAN: number, VAI: number}}
 */
var NationalDigitsType = {
    "ARABIC_INDIC"         : 0x0660,
    "BALINESE"             : 0x1B50,
    "BENGALI"              : 0x09E6,
    "CHAM"                 : 0xAA50,
    "DEVANAGARI"           : 0x0966,
    "EUROPEAN"             : 0x0030,
    "EXTENDED_ARABIC_INDIC": 0x06F0,
    "FULL_WIDTH"           : 0xFF10,
    "GUJARATI"             : 0x0AE6,
    "GURMUKHI"             : 0x0A66,
    "KANNADA"              : 0x0CE6,
    "KAYAH_LI"             : 0xA900,
    "KHMER"                : 0x17E0,
    "LAO"                  : 0x0ED0,
    "LEPCHA"               : 0x1C40,
    "LIMBU"                : 0x1946,
    "MALAYALAM"            : 0x0D66,
    "MONGOLIAN"            : 0x1810,
    "MYANMAR"              : 0x1040,
    "MYANMAR_SHAN"         : 0x1090,
    "NEW_TAI_LUE"          : 0x19D0,
    "NKO"                  : 0x07C0,
    "OL_CHIKI"             : 0x1C50,
    "ORIYA"                : 0x0B66,
    "OSMANYA"              : 0x104A0,
    "SAURASHTRA"           : 0xA8D0,
    "SUNDANESE"            : 0x1BB0,
    "TAMIL"                : 0x0BE6,
    "TELUGU"               : 0x0C66,
    "THAI"                 : 0x0E50,
    "TIBETAN"              : 0x0F20,
    "VAI"                  : 0xA620
};
/**
 * @param requestedLocaleIDName
 * @constructor
 */
var NumberFormatter = function (requestedLocaleIDName)
{
    this._requestedLocaleIDName = "";
};

/**
 * @param value
 * @param startIndex
 * @param endIndex
 * @constructor
 */
var NumberParseResult = function (value, startIndex, endIndex)
{
    this._value      = "";
    this._startIndex = 0x7fffffff;
    this._endIndex   = 0x7fffffff;
};

/**
 * @param requestedLocaleIDName
 * @constructor
 */
var StringTools = function (requestedLocaleIDName)
{
    this._requestedLocaleIDName = "";
};

/**
 * @constructor
 */
var BitmapFilter = function ()
{
    OriginalObject.call(this);
};

/**
 * extends
 * @type {OriginalObject}
 */
BitmapFilter.prototype = Object.create(OriginalObject.prototype);
BitmapFilter.prototype.constructor = BitmapFilter;

/**
 * @return {string}
 */
BitmapFilter.prototype.toString = function ()
{
    return "[object BitmapFilter]";
};

/**
 * @param   {boolean} inner
 * @param   {boolean} knockout
 * @param   {boolean} hide_object
 * @returns {string}
 */
BitmapFilter.prototype._$filterOperation = function (inner, knockout, hide_object)
{
    switch (knockout) {

        case true:

            return (inner) ? "source-in" : "source-out";

        default:

            switch (hide_object) {

                case true:

                    return (inner) ? "source-in" : "copy";

                default:

                    return (inner) ? "source-atop" : "destination-over";

            }
    }
};

/**
 * @param   {CanvasRenderingContext2D} context
 * @param   {object}  color
 * @param   {boolean} inner
 * @param   {number}  strength
 * @returns {CanvasRenderingContext2D}
 */
BitmapFilter.prototype._$coatOfColor = function (context, color, inner, strength)
{
    var imgData = context.getImageData(0, 0, context.canvas.width, context.canvas.height);

    var i = 0;
    var R = color.R|0;
    var G = color.G|0;
    var B = color.B|0;

    var pxData = imgData.data;
    var length = pxData.length|0;

    var idx, alpha;
    switch (inner) {

        case true:

            while (i < length) {
                idx  = (i + 3)|0;
                alpha = pxData[idx]|0;

                if (alpha !== 255) {
                    pxData[i    ] = R | 0;
                    pxData[i + 1] = G | 0;
                    pxData[i + 2] = B | 0;
                    pxData[idx]   = (255 - alpha) | 0;
                } else {
                    pxData[idx]   = 0;
                }

                i = (i + 4)|0;
            }

            break;

        default:

            while (i < length) {
                idx = (i + 3)|0;
                alpha = pxData[idx]|0;

                if (alpha !== 0) {
                    pxData[i    ] = R|0;
                    pxData[i + 1] = G|0;
                    pxData[i + 2] = B|0;
                    pxData[idx]   = alpha|0;
                }

                i = (i + 4)|0;
            }

            break;

    }


    context.putImageData(imgData, 0, 0);


    if (strength > 0) {
        i = 1;
        while (strength > i) {
            i = (i + 1)|0;
            context.drawImage(context.canvas, 0, 0);
        }
    }

    return context;
};

/**
 * @return {BitmapFilter}
 */
BitmapFilter.prototype.clone = function ()
{

    var clone = new this.constructor();

    for (var prop in this) {

        if (!this.hasOwnProperty(prop)) {
            continue;
        }

        var value = this[prop];

        switch (this.$isArray(value)) {

            case true:

                clone[prop] = this.$cloneArray(this[prop]);

                break;

            default:

                clone[prop] = this[prop];

                break;
        }
    }

    return clone;
};
/**
 * @constructor
 */
var BevelFilter = function ()
{
    BitmapFilter.call(this);

    this.filterId       = 3;

    // default
    this._distance       = 4;
    this._angle          = 45;
    this._highlightColor = 0xffffff;
    this._highlightAlpha = 1;
    this._shadowColor    = 0x000000;
    this._shadowAlpha    = 1;
    this._blurX          = 4;
    this._blurY          = 4;
    this._strength       = 1;
    this._quality        = 1;
    this._type           = "inner";
    this._knockout       = false;

    var arg = arguments;
    this.distance       = arg[0];
    this.angle          = arg[1];
    this.highlightColor = arg[2];
    this.highlightAlpha = arg[3];
    this.shadowColor    = arg[4];
    this.shadowAlpha    = arg[5];
    this.blurX          = arg[6];
    this.blurY          = arg[7];
    this.strength       = arg[8];
    this.quality        = arg[9];
    this.type           = arg[10];
    this.knockout       = arg[11];
};

/**
 * extends
 * @type {BitmapFilter}
 */
BevelFilter.prototype = Object.create(BitmapFilter.prototype);
BevelFilter.prototype.constructor = BevelFilter;

/**
 * properties
 */
Object.defineProperties(BevelFilter.prototype, {
    distance: {
        get: function () {
            return this._distance;
        },
        set: function (distance) {
            if (!this.$isNaN(distance)) {
                this._distance = distance;
            }
        }
    },
    angle: {
        get: function () {
            return this._angle;
        },
        set: function (angle) {
            if (!this.$isNaN(angle) && 0 <= angle && 360 >= angle) {
                this._angle = angle % 360;
            }

        }
    },
    highlightColor: {
        get: function () {
            return this._highlightColor;
        },
        set: function (highlightColor) {
            if (highlightColor) {
                this._highlightColor = this.$toColorInt(highlightColor);
            }
        }
    },
    highlightAlpha: {
        get: function () {
            return this._highlightAlpha;
        },
        set: function (highlightAlpha) {
            if (!this.$isNaN(highlightAlpha) && 0 <= highlightAlpha && 1 >= highlightAlpha) {
                this._highlightAlpha = highlightAlpha;
            }
        }
    },
    shadowColor: {
        get: function () {
            return this._shadowColor;
        },
        set: function (shadowColor) {
            if (!shadowColor) {
                this._shadowColor = this.$toColorInt(shadowColor);
            }
        }
    },
    shadowAlpha: {
        get: function () {
            return this._shadowAlpha;
        },
        set: function (shadowAlpha) {
            if (!this.$isNaN(shadowAlpha) && 0 <= shadowAlpha && 1 >= shadowAlpha) {
                this._shadowAlpha = shadowAlpha;
            }
        }
    },
    blurX: {
        get: function () {
            return this._blurX;
        },
        set: function (blurX) {
            if (!this.$isNaN(blurX) && 0 <= blurX && 256 > blurX) {
                this._blurX = blurX;
            }
        }
    },
    blurY: {
        get: function () {
            return this._blurY;
        },
        set: function (blurY) {
            if (!this.$isNaN(blurY) && 0 <= blurY && 256 > blurY) {
                this._blurY = blurY;
            }
        }
    },
    strength: {
        get: function () {
            return this._strength;
        },
        set: function (strength) {
            if (!this.$isNaN(strength) && 0 <= strength && 256 >= strength) {
                this._strength = strength;
            }
        }
    },
    quality: {
        get: function () {
            return this._quality;
        },
        set: function (quality) {
            if (!this.$isNaN(quality) && 0 < quality && 16 > quality) {
                this._quality = quality;
            }
        }
    },
    type: {
        get: function () {
            return this._type;
        },
        set: function (type) {
            if (typeof type === "string") {
                switch (type) {
                    case "inner":
                    case "outer":
                    case "full":
                        this._type = type;
                        break;
                    default:
                        break;
                }
            }
        }
    },
    knockout: {
        get: function () {
            return this._knockout;
        },
        set: function (knockout) {
            if (typeof knockout === "boolean") {
                this._knockout = knockout;
            }
        }
    }
});

/**
 * @param cache
 * @param colorTransform
 * @param stage
 * @returns {*}
 */
BevelFilter.prototype.render = function (cache, colorTransform, stage)
{
    var filterColor, color;

    var angle          = this.angle;
    var shadowColor    = this.shadowColor;
    var shadowAlpha    = this.shadowAlpha;
    var highlightColor = this.highlightColor;
    var highlightAlpha = this.highlightAlpha;
    var blurX          = this.blurX;
    var blurY          = this.blurY;
    var strength       = this.strength;
    var quality        = this.quality;
    var knockout       = this.knockout;
    var type           = this.type;

    var r = +(angle * this.$PI / 180);

    // blur
    var blurFilter = new BlurFilter(blurX, blurY, quality);
    var ctx        = blurFilter.render(cache, colorTransform, stage);
    var canvas     = ctx.canvas;
    var _offsetX   = ctx._offsetX;
    var _offsetY   = ctx._offsetY;

    // shadow
    var shadowCanvas    = this.$cacheStore.getCanvas();
    shadowCanvas.width  = canvas.width|0;
    shadowCanvas.height = canvas.height|0;
    var shadowCtx       = shadowCanvas.getContext("2d");
    shadowCtx.drawImage(canvas, 0, 0);

    filterColor        = this.$intToRGBA(shadowColor);
    color              = this.$generateColorTransform(filterColor, colorTransform);
    shadowCtx          = this.coatOfColor(shadowCtx, color, false, strength);

    // highlight
    var highlightCanvas    = this.$cacheStore.getCanvas();
    highlightCanvas.width  = canvas.width;
    highlightCanvas.height = canvas.height;
    var highlightCtx       = highlightCanvas.getContext("2d");
    highlightCtx.drawImage(canvas, 0, 0);

    filterColor           = this.$intToRGBA(highlightColor);
    color                 = this.$generateColorTransform(filterColor, colorTransform);
    highlightCtx          = this.coatOfColor(highlightCtx, color, false, strength);

    var cacheOffsetX = cache._offsetX;
    var cacheOffsetY = cache._offsetY;

    var width  = (canvas.width  + cacheOffsetX)|0;
    var height = (canvas.height + cacheOffsetY)|0;

    var distance = this.distance;
    var scale    = stage.getScale();
    var x = this.$ceil(this.$cos(r) * distance * scale * stage.ratio)|0;
    var y = this.$ceil(this.$sin(r) * distance * scale * stage.ratio)|0;

    var ox = _offsetX + this.$abs(x);
    var oy = _offsetY + this.$abs(y);

    width  = (width  + this.$abs(x) * 2)|0;
    height = (height + this.$abs(y) * 2)|0;

    var synCanvas    = this.$cacheStore.getCanvas();
    synCanvas.width  = width|0;
    synCanvas.height = height|0;
    var synCtx       = synCanvas.getContext("2d");

    if (!knockout) {
        synCtx.drawImage(cache.canvas, ox, oy);
    }

    if (strength < 1) {
        synCtx.globalAlpha = +(synCtx.globalAlpha * strength);
    }

    var xorCanvas = this.$cacheStore.getCanvas();
    xorCanvas.width  = width|0;
    xorCanvas.height = height|0;

    var xorCtx = xorCanvas.getContext("2d");
    xorCtx.setTransform(1,0,0,1,this.$abs(x),this.$abs(y));
    xorCtx.globalCompositeOperation = "xor";

    // highlight
    xorCtx.globalAlpha = highlightAlpha;
    xorCtx.drawImage(highlightCtx.canvas, cacheOffsetX - x, cacheOffsetY - y);

    // shadow
    xorCtx.globalAlpha = shadowAlpha;
    xorCtx.drawImage(shadowCtx.canvas, cacheOffsetX + x, cacheOffsetY + y);

    var isInner = (type === "inner" || type === "full");
    var isOuter = (type === "outer" || type === "full");
    var operation;
    if (isInner && isOuter) {
        operation = "source-over";
    } else if (isInner) {
        synCtx.drawImage(cache.canvas, ox, oy);
        operation = this.filterOperation(true, knockout);
    } else if (isOuter) {
        operation = "destination-over";
    }

    synCtx.globalCompositeOperation = operation;
    synCtx.drawImage(xorCtx.canvas, 0, 0);
    if (!isInner && isOuter && knockout) {
        synCtx.globalCompositeOperation = "destination-out";
        synCtx.drawImage(cache.canvas, ox, oy);
    }

    synCtx._offsetX = +(cacheOffsetX + ox);
    synCtx._offsetY = +(cacheOffsetY + oy);

    this.$cacheStore.destroy(ctx);
    this.$cacheStore.destroy(highlightCtx);
    this.$cacheStore.destroy(shadowCtx);
    this.$cacheStore.destroy(xorCtx);

    return synCtx;
};
/**
 * @type {{LOW: number, MEDIUM: number, HIGH: number}}
 */
var BitmapFilterQuality = {
    "LOW"   : 1,
    "MEDIUM": 2,
    "HIGH"  : 3
};
/**
 * @type {{FULL: string, INNER: string, OUTER: string}}
 */
var BitmapFilterType = {
    "FULL" : "full",
    "INNER": "inner",
    "OUTER": "outer"
};
/**
 * @constructor
 */
var BlurFilter = function ()
{
    BitmapFilter.call(this);

    // init
    this.blurX   = arguments[0] || 4;
    this.blurY   = arguments[1] || 4;
    this.quality = arguments[2] || 1;
};

/**
 * extends
 * @type {BitmapFilter}
 */
BlurFilter.prototype = Object.create(BitmapFilter.prototype);
BlurFilter.prototype.constructor = BlurFilter;

/**
 * properties
 */
Object.defineProperties(BlurFilter.prototype, {
    blurX: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$blurX;
        },
        /**
         * @param  {number} blur_x
         * @return void
         */
        set: function (blur_x) {

            if (typeof blur_x === "number") {

                if (blur_x < 0) {
                    blur_x = 0;
                }

                if (255 < blur_x) {
                    blur_x = 255;
                }

            }

            this._$blurX = +blur_x;
        }
    },
    blurY: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$blurY;
        },
        /**
         * @param  {number} blur_y
         * @return void
         */
        set: function (blur_y) {

            if (typeof blur_y === "number") {

                if (blur_y < 0) {
                    blur_y = 0;
                }

                if (255 < blur_y) {
                    blur_y = 255;
                }

            }

            this._$blurY = +blur_y;
        }
    },
    quality: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$quality;
        },
        /**
         * @param  {number} quality
         * @return void
         */
        set: function (quality) {

            if (typeof quality === "number") {

                if (quality < 0) {
                    quality = 0;
                }

                if (15 < quality) {
                    quality = 15;
                }

            }

            this._$quality = quality|0;
        }
    }
});

/**
 * @return {string}
 */
BlurFilter.prototype.toString = function ()
{
    return "[object BlurFilter]";
};

/**
 *
 * @param  {Rectangle} rect
 * @return {Rectangle}
 */
BlurFilter.prototype._$generateFilterRect = function (rect)
{

    var clone = rect.clone();

    if (!this.blurX && !this.blurY) {
        return clone;
    }

    var STEP   = [0.5, 1.05, 1.35, 1.55, 1.75, 1.9, 2, 2.1, 2.2, 2.3, 2.5, 3, 3, 3.5, 3.5];
    var stepNo = STEP[this.quality - 1] * 2;

    var blurX  = this.$round(this.blurX * stepNo / 2)|0;
    var blurY  = this.$round(this.blurY * stepNo / 2)|0;

    clone.left   = clone.left   - blurX;
    clone.top    = clone.top    - blurY;
    clone.right  = clone.right  - blurX;
    clone.bottom = clone.bottom - blurY;

    return clone;
};

/**
 * @param  {CanvasRenderingContext2D} context
 * @param  {array} matrix
 * @param  {array} color_transform
 * @param  {Player} player
 * @return {CanvasRenderingContext2D}
 */
BlurFilter.prototype._$applyFilter = function (context, matrix, color_transform, player)
{

    if (!this.blurX && !this.blurY) {
        return context;
    }


    var STEP   = [0.5, 1.05, 1.35, 1.55, 1.75, 1.9, 2, 2.1, 2.2, 2.3, 2.5, 3, 3, 3.5, 3.5];
    var stepNo = STEP[this.quality - 1] * 2;

    var blurX  = this.$round(this.blurX * stepNo * player.scale * player.ratio)|0;
    var blurY  = this.$round(this.blurY * stepNo * player.scale * player.ratio)|0;

    var width  = this.$ceil(context.canvas.width  + (blurX * 2))|0;
    var height = this.$ceil(context.canvas.height + (blurY * 2))|0;

    // new canvas
    var canvas    = this.$cacheStore.getCanvas();
    canvas.width  = width|0;
    canvas.height = height|0;

    var ctx       = canvas.getContext("2d");
    ctx._$offsetX = +(blurX + context._$offsetX);
    ctx._$offsetY = +(blurY + context._$offsetY);
    ctx.drawImage(context.canvas, blurX, blurY);

    var imgData = ctx.getImageData(0, 0, width, height);
    var px      = imgData.data;

    var radiusX = (blurX) >> 1;
    var radiusY = (blurY) >> 1;

    var MUL = [1, 171, 205, 293, 57, 373, 79, 137, 241, 27, 391, 357, 41, 19, 283, 265, 497, 469, 443, 421, 25, 191, 365, 349, 335, 161, 155, 149, 9, 278, 269, 261, 505, 245, 475, 231, 449, 437, 213, 415, 405, 395, 193, 377, 369, 361, 353, 345, 169, 331, 325, 319, 313, 307, 301, 37, 145, 285, 281, 69, 271, 267, 263, 259, 509, 501, 493, 243, 479, 118, 465, 459, 113, 446, 55, 435, 429, 423, 209, 413, 51, 403, 199, 393, 97, 3, 379, 375, 371, 367, 363, 359, 355, 351, 347, 43, 85, 337, 333, 165, 327, 323, 5, 317, 157, 311, 77, 305, 303, 75, 297, 294, 73, 289, 287, 71, 141, 279, 277, 275, 68, 135, 67, 133, 33, 262, 260, 129, 511, 507, 503, 499, 495, 491, 61, 121, 481, 477, 237, 235, 467, 232, 115, 457, 227, 451, 7, 445, 221, 439, 218, 433, 215, 427, 425, 211, 419, 417, 207, 411, 409, 203, 202, 401, 399, 396, 197, 49, 389, 387, 385, 383, 95, 189, 47, 187, 93, 185, 23, 183, 91, 181, 45, 179, 89, 177, 11, 175, 87, 173, 345, 343, 341, 339, 337, 21, 167, 83, 331, 329, 327, 163, 81, 323, 321, 319, 159, 79, 315, 313, 39, 155, 309, 307, 153, 305, 303, 151, 75, 299, 149, 37, 295, 147, 73, 291, 145, 289, 287, 143, 285, 71, 141, 281, 35, 279, 139, 69, 275, 137, 273, 17, 271, 135, 269, 267, 133, 265, 33, 263, 131, 261, 130, 259, 129, 257, 1];
    var SHG = [0, 9, 10, 11, 9, 12, 10, 11, 12, 9, 13, 13, 10, 9, 13, 13, 14, 14, 14, 14, 10, 13, 14, 14, 14, 13, 13, 13, 9, 14, 14, 14, 15, 14, 15, 14, 15, 15, 14, 15, 15, 15, 14, 15, 15, 15, 15, 15, 14, 15, 15, 15, 15, 15, 15, 12, 14, 15, 15, 13, 15, 15, 15, 15, 16, 16, 16, 15, 16, 14, 16, 16, 14, 16, 13, 16, 16, 16, 15, 16, 13, 16, 15, 16, 14, 9, 16, 16, 16, 16, 16, 16, 16, 16, 16, 13, 14, 16, 16, 15, 16, 16, 10, 16, 15, 16, 14, 16, 16, 14, 16, 16, 14, 16, 16, 14, 15, 16, 16, 16, 14, 15, 14, 15, 13, 16, 16, 15, 17, 17, 17, 17, 17, 17, 14, 15, 17, 17, 16, 16, 17, 16, 15, 17, 16, 17, 11, 17, 16, 17, 16, 17, 16, 17, 17, 16, 17, 17, 16, 17, 17, 16, 16, 17, 17, 17, 16, 14, 17, 17, 17, 17, 15, 16, 14, 16, 15, 16, 13, 16, 15, 16, 14, 16, 15, 16, 12, 16, 15, 16, 17, 17, 17, 17, 17, 13, 16, 15, 17, 17, 17, 16, 15, 17, 17, 17, 16, 15, 17, 17, 14, 16, 17, 17, 16, 17, 17, 16, 15, 17, 16, 14, 17, 16, 15, 17, 16, 17, 17, 16, 17, 15, 16, 17, 14, 17, 16, 15, 17, 16, 17, 13, 17, 16, 17, 17, 16, 17, 14, 17, 16, 17, 16, 17, 16, 17, 9];

    var mtx = MUL[radiusX]|0;
    var stx = SHG[radiusX]|0;
    var mty = MUL[radiusY]|0;
    var sty = SHG[radiusY]|0;

    var x  = 0;
    var y  = 0;
    var p  = 0;
    var yp = 0;
    var yi = 0;
    var yw = 0;
    var r  = 0;
    var g  = 0;
    var b  = 0;
    var a  = 0;
    var pr = 0;
    var pg = 0;
    var pb = 0;
    var pa = 0;

    var divx = (radiusX + radiusX + 1)|0;
    var divy = (radiusY + radiusY + 1)|0;

    var w = imgData.width|0;
    var h = imgData.height|0;

    var w1   = (w - 1)|0;
    var h1   = (h - 1)|0;
    var rxp1 = (radiusX + 1)|0;
    var ryp1 = (radiusY + 1)|0;

    var ssx = {r: 0, b: 0, g: 0, a: 0};
    var ssy = {r: 0, b: 0, g: 0, a: 0};

    var sx = ssx;
    var i = 1;
    while (i < divx) {
        i = (i + 1)|0;
        sx = sx.n = {r: 0, b: 0, g: 0, a: 0};
    }
    sx.n = ssx;

    var sy = ssy;
    i = 1;
    while (i < divy) {
        i = (i + 1)|0;
        sy = sy.n = {r: 0, b: 0, g: 0, a: 0};
    }
    sy.n = ssy;

    var si = null;
    var quality = this.quality;
    while (quality > 0) {

        quality = (quality - 1)|0;

        yw = 0;
        yi = 0;
        var ms = mtx|0;
        var ss = stx|0;

        y = (h + 1)|0;
        while (y > -1) {
            y = (y - 1)|0;

            pr = px[yi    ]|0;
            pg = px[yi + 1]|0;
            pb = px[yi + 2]|0;
            pa = px[yi + 3]|0;

            r = (rxp1 * pr)|0;
            g = (rxp1 * pg)|0;
            b = (rxp1 * pb)|0;
            a = (rxp1 * pa)|0;

            sx = ssx;
            i  = rxp1;
            while (i > -1) {
                i = (i - 1)|0;

                sx.r = pr|0;
                sx.g = pg|0;
                sx.b = pb|0;
                sx.a = pa|0;

                sx = sx.n;
            }

            i = 1;
            while (i < rxp1) {
                p = (yi + ((w1 < i ? w1 : i) << 2))|0;
                i = (i + 1)|0;

                r = (r + (sx.r = px[p    ]))|0;
                g = (g + (sx.g = px[p + 1]))|0;
                b = (b + (sx.b = px[p + 2]))|0;
                a = (a + (sx.a = px[p + 3]))|0;

                sx = sx.n;
            }

            si = ssx;
            x  = 0;
            while (x < w) {
                px[yi] = (r * ms) >>> ss;
                yi = (yi + 1)|0;

                px[yi] = (g * ms) >>> ss;
                yi = (yi + 1)|0;

                px[yi] = (b * ms) >>> ss;
                yi = (yi + 1)|0;

                px[yi] = (a * ms) >>> ss;
                yi = (yi + 1)|0;

                p = ((yw + ((p = x + radiusX + 1) < w1 ? p : w1)) << 2);

                r = (r - (si.r - (si.r = px[p    ])))|0;
                g = (g - (si.g - (si.g = px[p + 1])))|0;
                b = (b - (si.b - (si.b = px[p + 2])))|0;
                a = (a - (si.a - (si.a = px[p + 3])))|0;

                si = si.n;

                x = (x + 1)|0;
            }
            yw = (yw + w)|0;
        }

        ms = mty;
        ss = sty;
        x  = 0;
        while (x < w) {
            yi = (x << 2)|0;

            r = (ryp1 * (pr = px[yi      ]))|0;
            g = (ryp1 * (pg = px[(yi + 1)]))|0;
            b = (ryp1 * (pb = px[(yi + 2)]))|0;
            a = (ryp1 * (pa = px[(yi + 3)]))|0;

            sy = ssy;
            i  = 0;
            while (i < ryp1) {
                sy.r = pr|0;
                sy.g = pg|0;
                sy.b = pb|0;
                sy.a = pa|0;
                sy   = sy.n;

                i = (i + 1)|0;
            }

            yp = w;
            i  = 1;
            while (i <= radiusY) {
                yi = (yp + x) << 2;

                r = (r + (sy.r = px[yi    ]))|0;
                g = (g + (sy.g = px[yi + 1]))|0;
                b = (b + (sy.b = px[yi + 2]))|0;
                a = (a + (sy.a = px[yi + 3]))|0;

                sy = sy.n;
                if (i < h1) {
                    yp = (yp + w)|0;
                }

                i = (i + 1)|0;
            }

            yi = x;
            si = ssy;
            if (quality > 0) {

                y = 0;
                while (y < h) {
                    p = yi << 2;
                    px[p + 3] = pa = (a * ms) >>> ss;
                    if (pa > 0) {
                        px[p    ] = ((r * ms) >>> ss)|0;
                        px[p + 1] = ((g * ms) >>> ss)|0;
                        px[p + 2] = ((b * ms) >>> ss)|0;
                    } else {
                        px[p    ] = 0;
                        px[p + 1] = 0;
                        px[p + 2] = 0;
                    }

                    p = (x + (((p = y + ryp1) < h1 ? p : h1) * w)) << 2;

                    r = (r - (si.r - (si.r = px[p    ])))|0;
                    g = (g - (si.g - (si.g = px[p + 1])))|0;
                    b = (b - (si.b - (si.b = px[p + 2])))|0;
                    a = (a - (si.a - (si.a = px[p + 3])))|0;

                    si = si.n;

                    yi = (yi + w)|0;
                    y  = (y + 1)|0;
                }

            } else {

                y = 0;
                while (y < h) {
                    p = yi << 2;
                    px[p + 3] = pa = (a * ms) >>> ss;
                    if (pa > 0) {
                        pa = +(255 / pa);
                        px[p    ] = (((r * ms) >>> ss) * pa)|0;
                        px[p + 1] = (((g * ms) >>> ss) * pa)|0;
                        px[p + 2] = (((b * ms) >>> ss) * pa)|0;
                    } else {
                        px[p    ] = 0;
                        px[p + 1] = 0;
                        px[p + 2] = 0;
                    }

                    p = (x + (((p = y + ryp1) < h1 ? p : h1) * w)) << 2;

                    r = (r - (si.r - (si.r = px[p    ])))|0;
                    g = (g - (si.g - (si.g = px[p + 1])))|0;
                    b = (b - (si.b - (si.b = px[p + 2])))|0;
                    a = (a - (si.a - (si.a = px[p + 3])))|0;

                    si = si.n;

                    yi = (yi + w)|0;
                    y  = (y + 1)|0;
                }

            }

            x = (x + 1)|0;
        }
    }

    ctx.putImageData(imgData, 0, 0);

    return ctx;
};
/**
 * @constructor
 */
var ColorMatrixFilter = function ()
{
    BitmapFilter.call(this);

    this.filterId = 6;

    // default
    this._matrix = null;

    this.matrix = arguments[0];
};

/**
 * extends
 * @type {BitmapFilter}
 */
ColorMatrixFilter.prototype = Object.create(BitmapFilter.prototype);
ColorMatrixFilter.prototype.constructor = ColorMatrixFilter;

/**
 * properties
 */
Object.defineProperties(ColorMatrixFilter.prototype, {
    matrix: {
        get: function () {
            return this._matrix;
        },
        set: function (matrix) {
            if (matrix instanceof Array && matrix.length === 20) {
                this._matrix = matrix;
            }
        }
    }
});

/**
 * @param cache
 * @param colorTransform
 * @param stage
 * @returns {*}
 */
ColorMatrixFilter.prototype.render = function (cache, colorTransform, stage)
{
    var matrix = this.matrix;
    if (!matrix) {
        return cache;
    }

    var cacheCanvas = cache.canvas;
    var width       = cacheCanvas.width|0;
    var height      = cacheCanvas.height|0;

    var matrixCanvas    = this.$cacheStore.getCanvas();
    matrixCanvas.width  = width;
    matrixCanvas.height = height;
    var matrixCtx       = matrixCanvas.getContext("2d");
    matrixCtx.drawImage(cacheCanvas, 0, 0);

    var imageData = matrixCtx.getImageData(0, 0, width, height);
    var pxData    = imageData.data;
    var length    = pxData.length;

    // red
    var m0 = matrix[0];
    var m1 = matrix[1];
    var m2 = matrix[2];
    var m3 = matrix[3];
    var m4 = matrix[4];

    // green
    var m5 = matrix[5];
    var m6 = matrix[6];
    var m7 = matrix[7];
    var m8 = matrix[8];
    var m9 = matrix[9];

    // blue
    var m10 = matrix[10];
    var m11 = matrix[11];
    var m12 = matrix[12];
    var m13 = matrix[13];
    var m14 = matrix[14];

    // alpha
    var m15 = matrix[15];
    var m16 = matrix[16];
    var m17 = matrix[17];
    var m18 = matrix[18];
    var m19 = matrix[19];

    var R, G, B, A;
    var i = 0;
    while (i < length) {
        R = pxData[i    ]|0;
        G = pxData[i + 1]|0;
        B = pxData[i + 2]|0;
        A = pxData[i + 3]|0;

        pxData[i    ] = ((R * m0)  + (G * m1)  + (B * m2)  + (A * m3)  + m4 )|0;
        pxData[i + 1] = ((R * m5)  + (G * m6)  + (B * m7)  + (A * m8)  + m9 )|0;
        pxData[i + 2] = ((R * m10) + (G * m11) + (B * m12) + (A * m13) + m14)|0;
        pxData[i + 3] = ((R * m15) + (G * m16) + (B * m17) + (A * m18) + m19)|0;

        i = (i + 4)|0;
    }

    matrixCtx.putImageData(imageData, 0, 0);
    matrixCtx._offsetX = +cache._offsetX;
    matrixCtx._offsetY = +cache._offsetY;

    this.$cacheStore.destroy(cache);

    return matrixCtx;
};
/**
 * @constructor
 */
var ConvolutionFilter = function ()
{
    BitmapFilter.call(this);
    this.filterId = 5;

    // default
    this._matrixX       = 0;
    this._matrixY       = 0;
    this._matrix        = null;
    this._divisor       = 1.0;
    this._bias          = 0.0;
    this._preserveAlpha = true;
    this._clamp         = true;
    this._color         = 0;
    this._alpha         = 0.0;

    var arg = arguments;
    this.matrixX       = arg[0];
    this.matrixY       = arg[1];
    this.matrix        = arg[2];
    this.divisor       = arg[3];
    this.bias          = arg[4];
    this.preserveAlpha = arg[5];
    this.clamp         = arg[6];
    this.color         = arg[7];
    this.alpha         = arg[8];
};

/**
 * extends
 * @type {BitmapFilter}
 */
ConvolutionFilter.prototype = Object.create(BitmapFilter.prototype);
ConvolutionFilter.prototype.constructor = ConvolutionFilter;

/**
 * properties
 */
Object.defineProperties(ConvolutionFilter.prototype, {
    matrixX: {
        get: function () {
            return this._matrixX;
        },
        set: function (matrixX) {
            if (!this.$isNaN(matrixX)) {
                this._matrixX = matrixX;
            }
        }
    },
    matrixY: {
        get: function () {
            return this._matrixY;
        },
        set: function (matrixY) {
            if (!this.$isNaN(matrixY)) {
                this._matrixY = matrixY;
            }
        }
    },
    matrix: {
        get: function () {
            return this._matrix;
        },
        set: function (matrix) {
            if (matrix instanceof Array) {
                this._matrix = matrix;
            }
        }
    },
    divisor: {
        get: function () {
            return this._divisor;
        },
        set: function (divisor) {
            if (!this.$isNaN(divisor)) {
                this._divisor = divisor;
            }
        }
    },
    bias: {
        get: function () {
            return this._bias;
        },
        set: function (bias) {
            if (!this.$isNaN(bias)) {
                bias = (bias > 255) ? 255 : (-255 > bias) ? -255: bias;
                this._bias = bias;
            }
        }
    },
    preserveAlpha: {
        get: function () {
            return this._preserveAlpha;
        },
        set: function (preserveAlpha) {
            if (typeof preserveAlpha === "boolean") {
                this._preserveAlpha = preserveAlpha;
            }
        }
    },
    clamp: {
        get: function () {
            return this._clamp;
        },
        set: function (clamp) {
            if (typeof clamp === "boolean") {
                this._clamp = clamp;
            }
        }
    },
    color: {
        get: function () {
            return this._color;
        },
        set: function (color) {
            if (color) {
                this._color = this.$toColorInt(color);
            }
        }
    },
    alpha: {
        get: function () {
            return this._alpha;
        },
        set: function (alpha) {
            if (!this.$isNaN(alpha) && 0 <= alpha && 1 >= alpha) {
                this._alpha = alpha;
            }
        }
    }
});


/**
 * @param cache
 * @param colorTransform
 * @param stage
 * @returns {*}
 */
ConvolutionFilter.prototype.render = function (cache, colorTransform, stage)
{
    var bias    = this.bias;
    var matrix  = this.matrix;
    var divisor = this.divisor;
    var preserveAlpha = this.preserveAlpha;

    var canvas = cache.canvas;
    var width  = canvas.width|0;
    var height = canvas.height|0;
    var pxData = cache.getImageData(0, 0, width, height);
    var data   = pxData.data;

    var w    = this.matrixX;
    var h    = this.matrixY;
    var half = (h / 2)|0;

    var tmp    = this.$cacheStore.getCanvas();
    tmp.width  = width;
    tmp.height = height;
    var ctx    = tmp.getContext("2d");
    var pxOut  = ctx.createImageData(width, height);
    var out    = pxOut.data;

    var y = 0;
    while (y < height) {
        var step = (y * width);

        var x = 0;
        while (x < width) {
            var px = (step + x) << 2;

            var r = 0;
            var g = 0;
            var b = 0;
            var a = 0;

            var cy = 0;
            while (cy < h) {
                var cx = 0;
                while (cx < w) {
                    var scy = this.$min(height - 1, this.$max(0, y + cy - half));
                    var scx = this.$min(width  - 1, this.$max(0, x + cx - half));
                    var cpx = (scy * width + scx) << 2;

                    var idx = cy * h + cx;
                    r = (r + data[cpx    ] * matrix[idx])|0;
                    g = (g + data[cpx + 1] * matrix[idx])|0;
                    b = (b + data[cpx + 2] * matrix[idx])|0;
                    a = (!preserveAlpha) ? (a + data[cpx + 3] * matrix[idx])|0 : 0;

                    cx = (cx + 1)|0;
                }

                cy = (cy + 1)|0;
            }

            r = (r / divisor)|0;
            g = (g / divisor)|0;
            b = (b / divisor)|0;

            r = (r > 255) ? 255 : (r < 0) ? 0 : r;
            g = (g > 255) ? 255 : (g < 0) ? 0 : g;
            b = (b > 255) ? 255 : (b < 0) ? 0 : b;

            if (preserveAlpha) {
                a = data[px + 3];
            } else {
                a = (a / divisor)|0;
                a = (a > 255) ? 255 : (a < 0) ? 0 : a;
                a = (a + bias)|0;
            }

            out[px    ] = (r + bias)|0;
            out[px + 1] = (g + bias)|0;
            out[px + 2] = (b + bias)|0;
            out[px + 3] = a;

            x = (x + 1)|0;
        }

        y = (y + 1)|0;
    }

    var offset = 0;
    if (!this.clamp) {
        offset = 2;
        width  = (width  + 4)|0;
        height = (height + 4)|0;

        // resize
        tmp.width  = width;
        tmp.height = height;
        ctx = tmp.getContext("2d");

        // execute
        var color = this.$intToRGBA(this.color, this.alpha * 100);
        var cRGBA = this.$generateColorTransform(color, colorTransform);
        ctx.strokeStyle = "rgba("+ cRGBA.R +", "+ cRGBA.G +", "+ cRGBA.B +", "+ cRGBA.A +")";
        ctx.moveTo(0, 0);
        ctx.lineTo(width, 0);
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.lineTo(0, 0);
        ctx.stroke();
    }

    ctx.putImageData(pxOut, offset, offset);
    ctx = this.$generateImageTransform(ctx, colorTransform);
    ctx._offsetX = cache._offsetX + offset;
    ctx._offsetY = cache._offsetY + offset;

    return ctx;
};
/**
 * @constructor
 */
var DisplacementMapFilter = function ()
{
    BitmapFilter.call(this);

    // default
    this._alpha      = 0.0;
    this._color      = 0;
    this._componentX = 0;
    this._componentY = 0;
    this._mapBitmap  = null;
    this._mapPoint   = null;
    this._mode       = "wrap";
    this._scaleX     = 0.0;
    this._scaleY     = 0.0;

    var arg = arguments;
    this.mapBitmap  = arg[0];
    this.mapPoint   = arg[1];
    this.componentX = arg[2];
    this.componentY = arg[3];
    this.scaleX     = arg[4];
    this.scaleY     = arg[5];
    this.mode       = arg[6];
    this.color      = arg[7];
    this.alpha      = arg[8];
};

/**
 * extends
 * @type {BitmapFilter}
 */
DisplacementMapFilter.prototype = Object.create(BitmapFilter.prototype);
DisplacementMapFilter.prototype.constructor = DisplacementMapFilter;

/**
 * properties
 */
Object.defineProperties(DisplacementMapFilter.prototype, {
    mapBitmap: {
        get: function () {
            return this._mapBitmap;
        },
        set: function (mapBitmap) {
            this._mapBitmap = mapBitmap;
        }
    },
    mapPoint: {
        get: function () {
            return this._mapPoint;
        },
        set: function (mapPoint) {
            this._mapPoint = mapPoint;
        }
    },
    componentX: {
        get: function () {
            return this._componentX;
        },
        set: function (componentX) {
            if (!this.$isNaN(componentX)) {
                this._componentX = componentX;
            }
        }
    },
    componentY: {
        get: function () {
            return this._componentY;
        },
        set: function (componentY) {
            if (!this.$isNaN(componentY)) {
                this._componentY = componentY;
            }
        }
    },
    scaleX: {
        get: function () {
            return this._scaleX;
        },
        set: function (scaleX) {
            if (!this.$isNaN(scaleX)) {
                this._scaleX = scaleX;
            }
        }
    },
    scaleY: {
        get: function () {
            return this._scaleY;
        },
        set: function (scaleY) {
            if (!this.$isNaN(scaleY)) {
                this._scaleY = scaleY;
            }
        }
    },
    mode: {
        get: function () {
            return this._mode;
        },
        set: function (mode) {
            this._mode = mode;
        }
    },
    color: {
        get: function () {
            return this._color;
        },
        set: function (color) {
            if (!this.$isNaN(color)) {
                this._color = color;
            }
        }
    },
    alpha: {
        get: function () {
            return this._alpha;
        },
        set: function (alpha) {
            if (!this.$isNaN(alpha)) {
                this._alpha = alpha;
            }
        }
    }
});

/**
 * @param cache
 * @param colorTransform
 * @param stage
 * @returns {*}
 */
DisplacementMapFilter.prototype.render = function (cache, colorTransform, stage)
{



    return cache;
};

/**
 * @type {{CLAMP: string, COLOR: string, IGNORE: string, WRAP: string}}
 */
var DisplacementMapFilterMode = {
    "CLAMP" : "clamp",
    "COLOR" : "color",
    "IGNORE": "ignore",
    "WRAP"  : "wrap"
};
/**
 * @constructor
 */
var DropShadowFilter = function ()
{
    BitmapFilter.call(this);

    // id
    this.filterId = 0;

    // default
    this._$distance   = 4;
    this._$angle      = 45;
    this._$color      = 0;
    this._$alpha      = 1;
    this._$blurX      = 4;
    this._$blurY      = 4;
    this._$strength   = 1;
    this._$quality    = 1;
    this._$inner      = false;
    this._$knockout   = false;
    this._$hideObject = false;

    // init
    this.distance     = arguments[0];
    this.angle        = arguments[1];
    this.color        = arguments[2];
    this.alpha        = arguments[3];
    this.blurX        = arguments[4];
    this.blurY        = arguments[5];
    this.strength     = arguments[6];
    this.quality      = arguments[7];
    this.inner        = arguments[8];
    this.knockout     = arguments[9];
    this.hideObject   = arguments[10];

};

/**
 * extends
 * @type {BitmapFilter}
 */
DropShadowFilter.prototype = Object.create(BitmapFilter.prototype);
DropShadowFilter.prototype.constructor = DropShadowFilter;

/**
 * properties
 */
Object.defineProperties(DropShadowFilter.prototype, {
    distance: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$distance;
        },
        /**
         * @param  distance
         * @return void
         */
        set: function (distance) {
            if (typeof distance === "number") {
                this._$distance = distance;
            }
        }
    },
    angle: {
        get: function () {
            return this._$angle;
        },
        set: function (angle) {
            if (!this.$isNaN(angle) && 0 <= angle && 360 >= angle) {
                this._$angle = angle % 360;
            }
        }
    },
    color: {
        get: function () {
            return this._$color;
        },
        set: function (color) {
            if (color) {
                this._$color = this.$toColorInt(color);
            }
        }
    },
    alpha: {
        get: function () {
            return this._$alpha;
        },
        set: function (alpha) {
            if (!this.$isNaN(alpha) && 0 <= alpha && 1 >= alpha) {
                this._$alpha = alpha;
            }
        }
    },
    blurX: {
        get: function () {
            return this._$blurX;
        },
        set: function (blurX) {
            if (!this.$isNaN(blurX) && 0 <= blurX && 256 > blurX) {
                this._$blurX = blurX;
            }
        }
    },
    blurY: {
        get: function () {
            return this._$blurY;
        },
        set: function (blurY) {
            if (!this.$isNaN(blurY) && 0 <= blurY && 256 > blurY) {
                this._$blurY = blurY;
            }
        }
    },
    strength: {
        get: function () {
            return this._$strength;
        },
        set: function (strength) {
            if (!this.$isNaN(strength) && 0 <= strength && 256 > strength) {
                this._$strength = strength;
            }
        }
    },
    quality: {
        get: function () {
            return this._$quality;
        },
        set: function (quality) {
            if (0 < quality && 16 > quality) {
                this._$quality = quality;
            }
        }
    },
    inner: {
        get: function () {
            return this._$inner;
        },
        set: function (inner) {
            if (typeof inner === "boolean") {
                this._$inner = inner;
            }
        }
    },
    knockout: {
        get: function () {
            return this._$knockout;
        },
        set: function (knockout) {
            if (typeof knockout === "boolean") {
                this._$knockout = knockout;
            }
        }
    },
    hideObject: {
        get: function () {
            return this._$hideObject;
        },
        set: function (hideObject) {
            if (typeof hideObject === "boolean") {
                this._$hideObject = hideObject;
            }
        }
    }
});


/**
 * @param  {CanvasRenderingContext2D} context
 * @param  {array} colorTransform
 * @param  {Player} player
 * @return {CanvasRenderingContext2D}
 */
DropShadowFilter.prototype._$applyFilter = function (context, colorTransform, player)
{
    if (this.strength <= 0) {
        return context;
    }

    // radian
    var r = +(this.angle * this.$PI / 180);

    // blur filter
    var blurFilter = new BlurFilter(this.blurX, this.blurY, this.quality);
    var ctx        = blurFilter._$applyFilter(context, colorTransform, stage);

    // dropShadow
    var filterColor = this.$intToRGBA(this.color);
    var color       = this.$generateColorTransform(filterColor, colorTransform);
    ctx             = this.coatOfColor(ctx, color, this.inner, this.strength);

    // synthesis
    var cacheOffsetX = context._$offsetX;
    var cacheOffsetY = context._$offsetY;
    var _offsetX     = ctx._offsetX;
    var _offsetY     = ctx._offsetY;

    var canvas = ctx.canvas;
    var width  = (canvas.width  + cacheOffsetX)|0;
    var height = (canvas.height + cacheOffsetY)|0;

    var x = this.$ceil(this.$cos(r) * this.distance * player.scale * player.ratio)|0;
    var y = this.$ceil(this.$sin(r) * this.distance * player.scale * player.ratio)|0;

    width  = (width  + this.$abs(x))|0;
    height = (height + this.$abs(y))|0;

    var cx = _offsetX;
    var cy = _offsetY;
    var dx = 0;
    var dy = 0;
    if (x < 0) {
        cx = (cx - x)|0;
    } else if (x > 0) {
        dx = x|0;
    }

    if (y < 0) {
        cy = (cy - y)|0;
    } else if (y > 0) {
        dy = y|0;
    }

    var synCanvas    = this.$cacheStore.getCanvas();
    synCanvas.width  = width|0;
    synCanvas.height = height|0;

    var synCtx = synCanvas.getContext("2d");
    synCtx.drawImage(context.canvas, cx, cy);
    synCtx.globalAlpha = this.alpha;
    if (this.strength < 1) {
        synCtx.globalAlpha = +(synCtx.globalAlpha * this.strength);
    }

    synCtx.globalCompositeOperation = this.filterOperation(this.inner, this.knockout, this.hideObject);

    if (this.inner) {
        var innerCanvas    = this.$cacheStore.getCanvas();
        innerCanvas.width  = width;
        innerCanvas.height = height;
        var innerCtx       = innerCanvas.getContext("2d");

        // back
        innerCtx.fillStyle = "rgba(" +
            filterColor.R + "," +
            filterColor.G + "," +
            filterColor.B + "," +
            filterColor.A + ")";
        innerCtx.fillRect(0, 0, width, height);

        // mask
        innerCtx.globalCompositeOperation = "destination-out";
        innerCtx.fillStyle = "black";
        innerCtx.fillRect(cacheOffsetX + dx, cacheOffsetY + dy, canvas.width, canvas.height);

        innerCtx.globalCompositeOperation = "source-over";
        innerCtx.drawImage(canvas, cacheOffsetX + dx, cacheOffsetY + dy);

        synCtx.drawImage(innerCtx.canvas, 0, 0);

        // destroy
        this.$cacheStore.destroy(innerCtx);

    } else {

        synCtx.drawImage(canvas, cacheOffsetX + dx, cacheOffsetY + dy);

    }

    synCtx._offsetX = +(cacheOffsetX + cx);
    synCtx._offsetY = +(cacheOffsetY + cy);

    // destroy
    this.$cacheStore.destroy(ctx);

    return synCtx;
};
/**
 * @constructor
 */
var GlowFilter = function ()
{
    BitmapFilter.call(this);

    this.filterId = 2;

    // default
    this._color    = 0xff0000;
    this._alpha    = 1;
    this._blurX    = 6;
    this._blurY    = 6;
    this._strength = 2;
    this._quality  = 1;
    this._inner    = false;
    this._knockout = false;

    var arg       = arguments;
    this.color    = arg[0];
    this.alpha    = arg[1];
    this.blurX    = arg[2];
    this.blurY    = arg[3];
    this.strength = arg[4];
    this.quality  = arg[5];
    this.inner    = arg[6];
    this.knockout = arg[7];
};

/**
 * extends
 * @type {BitmapFilter}
 */
GlowFilter.prototype = Object.create(BitmapFilter.prototype);
GlowFilter.prototype.constructor = GlowFilter;

/**
 * properties
 */
Object.defineProperties(GlowFilter.prototype, {
    color: {
        get: function () {
            return this._color;
        },
        set: function (color) {
            if (color) {
                this._color = this.$toColorInt(color);
            }
        }
    },
    alpha: {
        get: function () {
            return this._alpha;
        },
        set: function (alpha) {
            if (!this.$isNaN(alpha) && 0 <= alpha && 1 >= alpha) {
                this._alpha = +alpha;
            }
        }
    },
    blurX: {
        get: function () {
            return this._blurX;
        },
        set: function (blurX) {
            if (!this.$isNaN(blurX) && 0 <= blurX && 256 > blurX) {
                this._blurX = +blurX;
            }
        }
    },
    blurY: {
        get: function () {
            return this._blurY;
        },
        set: function (blurY) {
            if (!this.$isNaN(blurY) && 0 <= blurY && 256 > blurY) {
                this._blurY = +blurY;
            }
        }
    },
    strength: {
        get: function () {
            return this._strength;
        },
        set: function (strength) {
            if (!this.$isNaN(strength) && 0 <= strength && 256 > strength) {
                this._strength = +strength;
            }
        }
    },
    quality: {
        get: function () {
            return this._quality;
        },
        set: function (quality) {
            if (!this.$isNaN(quality) && 0 < quality && 16 > quality) {
                this._quality = quality|0;
            }
        }
    },
    inner: {
        get: function () {
            return this._inner;
        },
        set: function (inner) {
            if (typeof inner === "boolean") {
                this._inner = inner;
            }
        }
    },
    knockout: {
        get: function () {
            return this._knockout;
        },
        set: function (knockout) {
            if (typeof knockout === "boolean") {
                this._knockout = knockout;
            }
        }
    }
});

/**
 * @param cache
 * @param colorTransform
 * @param stage
 * @returns {*}
 */
GlowFilter.prototype.render = function (cache, colorTransform, stage)
{
    var strength = this.strength;
    if (strength <= 0) {
        return cache;
    }

    var blurFilter = new BlurFilter(this.blurX, this.blurY, this.quality);

    var ctx    = blurFilter.render(cache, colorTransform, stage);
    var width  = (ctx.canvas.width  + cache._offsetX)|0;
    var height = (ctx.canvas.height + cache._offsetY)|0;

    var filterColor = this.$intToRGBA(this.color);
    var color       = this.$generateColorTransform(filterColor, colorTransform);

    ctx = this.coatOfColor(ctx, color, this.inner, strength);

    var synCanvas    = this.$cacheStore.getCanvas();
    synCanvas.width  = width;
    synCanvas.height = height;

    var synCtx = synCanvas.getContext("2d");
    synCtx.drawImage(cache.canvas, ctx._offsetX, ctx._offsetY);
    synCtx.globalAlpha = this.alpha;
    if (strength < 1) {
        synCtx.globalAlpha = +(synCtx.globalAlpha * strength);
    }

    synCtx.globalCompositeOperation = this.filterOperation(this.inner, this.knockout);
    synCtx.drawImage(ctx.canvas, cache._offsetX, cache._offsetY);
    synCtx._offsetX = +(cache._offsetX + ctx._offsetX);
    synCtx._offsetY = +(cache._offsetY + ctx._offsetY);

    this.$cacheStore.destroy(ctx);

    return synCtx;
};
/**
 * @constructor
 */
var GradientBevelFilter = function ()
{
    BitmapFilter.call(this);

    this.filterId = 7;

    // default
    this._distance = 4;
    this._angle    = 45;
    this._colors   = null;
    this._alphas   = null;
    this._ratios   = null;
    this._blurX    = 4;
    this._blurY    = 4;
    this._strength = 1;
    this._quality  = 1;
    this._type     = "inner";
    this._knockout = false;

    var arg = arguments;
    this.distance = arg[0];
    this.angle    = arg[1];
    this.colors   = arg[2];
    this.alphas   = arg[3];
    this.ratios   = arg[4];
    this.blurX    = arg[5];
    this.blurY    = arg[6];
    this.strength = arg[7];
    this.quality  = arg[8];
    this.type     = arg[9];
    this.knockout = arg[10];
};

/**
 * extends
 * @type {BitmapFilter}
 */
GradientBevelFilter.prototype = Object.create(BitmapFilter.prototype);
GradientBevelFilter.prototype.constructor = GradientBevelFilter;

/**
 * properties
 */
Object.defineProperties(GradientBevelFilter.prototype, {
    distance: {
        get: function () {
            return this._distance;
        },
        set: function (distance) {
            if (!this.$isNaN(distance)) {
                this._distance = distance;
            }
        }
    },
    angle: {
        get: function () {
            return this._angle;
        },
        set: function (angle) {
            if (!this.$isNaN(angle) && 0 <= angle && 360 >= angle) {
                this._angle = angle % 360;
            }

        }
    },
    colors: {
        get: function () {
            return this._colors;
        },
        set: function (colors) {
            if (colors instanceof Array) {
                this._colors = colors;
            }
        }
    },
    alphas: {
        get: function () {
            return this._alphas;
        },
        set: function (alphas) {
            if (alphas instanceof Array) {
                this._alphas = alphas;
            }
        }
    },
    ratios: {
        get: function () {
            return this._ratios;
        },
        set: function (ratios) {
            if (ratios instanceof Array) {
                this._ratios = ratios;
            }
        }
    },
    blurX: {
        get: function () {
            return this._blurX;
        },
        set: function (blurX) {
            if (!this.$isNaN(blurX) && 0 <= blurX && 256 > blurX) {
                this._blurX = blurX;
            }
        }
    },
    blurY: {
        get: function () {
            return this._blurY;
        },
        set: function (blurY) {
            if (!this.$isNaN(blurY) && 0 <= blurY && 256 > blurY) {
                this._blurY = blurY;
            }
        }
    },
    strength: {
        get: function () {
            return this._strength;
        },
        set: function (strength) {
            if (!this.$isNaN(strength) && 0 <= strength && 256 >= strength) {
                this._strength = strength;
            }
        }
    },
    quality: {
        get: function () {
            return this._quality;
        },
        set: function (quality) {
            if (!this.$isNaN(quality) && 0 < quality && 16 > quality) {
                this._quality = quality;
            }
        }
    },
    type: {
        get: function () {
            return this._type;
        },
        set: function (type) {
            if (typeof type === "string") {
                switch (type) {
                    case "inner":
                    case "outer":
                    case "full":
                        this._type = type;
                        break;
                    default:
                        break;
                }
            }
        }
    },
    knockout: {
        get: function () {
            return this._knockout;
        },
        set: function (knockout) {
            if (typeof knockout === "boolean") {
                this._knockout = knockout;
            }
        }
    }
});

/**
 * @param cache
 * @param colorTransform
 * @param stage
 * @returns {*}
 */
GradientBevelFilter.prototype.render = function (cache, colorTransform, stage)
{
    var length, i, css, color, rgba, imageData, pxGrad, pxData, idx;

    var angle    = this.angle;
    var blurX    = this.blurX;
    var blurY    = this.blurY;
    var strength = this.strength;
    var quality  = this.quality;
    var knockout = this.knockout;
    var type     = this.type;

    var r = +(angle * this.$PI / 180);

    // blur
    var blurFilter = new BlurFilter(blurX, blurY, quality);
    var ctx        = blurFilter.render(cache, colorTransform, stage);
    if (strength > 0) {
        i = 1;
        while (i < strength) {
            i = (i + 1)|0;
            ctx.drawImage(ctx.canvas, 0, 0);
        }
    }

    var canvas     = ctx.canvas;
    var _offsetX   = ctx._offsetX;
    var _offsetY   = ctx._offsetY;

    var cacheOffsetX = cache._offsetX;
    var cacheOffsetY = cache._offsetY;

    var width  = (canvas.width  + cacheOffsetX)|0;
    var height = (canvas.height + cacheOffsetY)|0;

    var distance = this.distance;
    var scale    = stage.getScale();
    var x = this.$ceil(this.$cos(r) * distance * scale * stage.ratio)|0;
    var y = this.$ceil(this.$sin(r) * distance * scale * stage.ratio)|0;

    var ox = _offsetX + this.$abs(x);
    var oy = _offsetY + this.$abs(y);

    width  = (width  + this.$abs(x) * 2)|0;
    height = (height + this.$abs(y) * 2)|0;

    var synCanvas    = this.$cacheStore.getCanvas();
    synCanvas.width  = width|0;
    synCanvas.height = height|0;
    var synCtx       = synCanvas.getContext("2d");

    if (!knockout) {
        synCtx.drawImage(cache.canvas, ox, oy);
    }

    if (strength < 1) {
        synCtx.globalAlpha = +(synCtx.globalAlpha * strength);
    }

    // gradient
    var ratios = this.ratios;
    var colors = this.colors;
    var alphas = this.alphas;

    // shadow gradient canvas
    var gCanvas    = this.$cacheStore.getCanvas();
    gCanvas.width  = 512;
    gCanvas.heigth = 1;
    var gCtx       = gCanvas.getContext("2d");

    css    = gCtx.createLinearGradient(0, 0, 511, 0);
    length = ratios.length;

    i = 0;
    while (i < length) {
        color = this.$intToRGBA(colors[i], alphas[i] * 100);
        color = this.$generateColorTransform(color, colorTransform);
        rgba  = "rgba("+color.R+","+color.G+","+color.B+","+color.A+")";

        // set
        css.addColorStop(ratios[i], rgba);

        i = (i + 1)|0;
    }
    gCtx.fillStyle = css;
    gCtx.fillRect(0, 0, 512, 1);
    imageData = gCtx.getImageData(0, 0, 512, 1);
    pxGrad    = imageData.data;

    // shadow
    var shadowCanvas    = this.$cacheStore.getCanvas();
    shadowCanvas.width  = width|0;
    shadowCanvas.height = height|0;
    var shadowCtx       = shadowCanvas.getContext("2d");
    shadowCtx.setTransform(1,0,0,1,this.$abs(x),this.$abs(y));
    shadowCtx.globalCompositeOperation = "source-out";

    // highlight
    shadowCtx.drawImage(canvas, cacheOffsetX - x, cacheOffsetY - y);
    // shadow
    shadowCtx.drawImage(canvas, cacheOffsetX + x, cacheOffsetY + y);

    imageData = shadowCtx.getImageData(0, 0, width, height);
    pxData    = imageData.data;

    i = 0;
    length = pxData.length;
    while (i < length) {
        idx = ((256 - pxData[i + 3]) * 4)|0;
        if (idx) {
            pxData[i    ] = pxGrad[idx    ];
            pxData[i + 1] = pxGrad[idx + 1];
            pxData[i + 2] = pxGrad[idx + 2];
        }

        i = (i + 4)|0;
    }
    shadowCtx.putImageData(imageData, 0, 0);

    // highlight
    var highlightCanvas    = this.$cacheStore.getCanvas();
    highlightCanvas.width  = width|0;
    highlightCanvas.height = height|0;
    var highlightCtx       = highlightCanvas.getContext("2d");
    highlightCtx.setTransform(1,0,0,1,this.$abs(x),this.$abs(y));
    highlightCtx.globalCompositeOperation = "source-out";

    // shadow
    highlightCtx.drawImage(canvas, cacheOffsetX + x, cacheOffsetY + y);
    // highlight
    highlightCtx.drawImage(canvas, cacheOffsetX - x, cacheOffsetY - y);

    imageData = highlightCtx.getImageData(0, 0, width, height);
    pxData    = imageData.data;

    i = 0;
    length = pxData.length;
    while (i < length) {
        idx = ((255 + pxData[i + 3]) * 4)|0;
        if (idx) {
            pxData[i    ] = pxGrad[idx    ];
            pxData[i + 1] = pxGrad[idx + 1];
            pxData[i + 2] = pxGrad[idx + 2];
        }

        i = (i + 4)|0;
    }
    highlightCtx.putImageData(imageData, 0, 0);

    var xorCanvas = this.$cacheStore.getCanvas();
    xorCanvas.width  = width|0;
    xorCanvas.height = height|0;

    var xorCtx = xorCanvas.getContext("2d");
    xorCtx.globalCompositeOperation = "xor";
    // highlight
    xorCtx.drawImage(highlightCtx.canvas, 0, 0);
    // shadow
    xorCtx.drawImage(shadowCtx.canvas, 0, 0);

    var isInner = (type === "inner" || type === "full");
    var isOuter = (type === "outer" || type === "full");
    var operation;
    if (isInner && isOuter) {
        operation = "source-over";
    } else if (isInner) {
        synCtx.drawImage(cache.canvas, ox, oy);
        operation = this.filterOperation(true, knockout);
    } else if (isOuter) {
        operation = "destination-over";
    }

    synCtx.globalCompositeOperation = operation;
    synCtx.drawImage(xorCtx.canvas, 0, 0);
    if (!isInner && isOuter && knockout) {
        synCtx.globalCompositeOperation = "destination-out";
        synCtx.drawImage(cache.canvas, ox, oy);
    }

    synCtx._offsetX = +(cacheOffsetX + ox);
    synCtx._offsetY = +(cacheOffsetY + oy);

    this.$cacheStore.destroy(ctx);
    this.$cacheStore.destroy(highlightCtx);
    this.$cacheStore.destroy(shadowCtx);
    this.$cacheStore.destroy(xorCtx);

    return synCtx;
};
/**
 * @constructor
 */
var GradientGlowFilter = function ()
{
    BitmapFilter.call(this);

    this.filterId = 4;

    // default
    this._distance = 4;
    this._angle    = 45;
    this._colors   = null;
    this._alphas   = null;
    this._ratios   = null;
    this._blurX    = 4;
    this._blurY    = 4;
    this._strength = 1;
    this._quality  = 1;
    this._type     = "inner";
    this._knockout = false;

    var arg = arguments;
    this.distance = arg[0];
    this.angle    = arg[1];
    this.colors   = arg[2];
    this.alphas   = arg[3];
    this.ratios   = arg[4];
    this.blurX    = arg[5];
    this.blurY    = arg[6];
    this.strength = arg[7];
    this.quality  = arg[8];
    this.type     = arg[9];
    this.knockout = arg[10];

};

/**
 * extends
 * @type {BitmapFilter}
 */
GradientGlowFilter.prototype = Object.create(BitmapFilter.prototype);
GradientGlowFilter.prototype.constructor = GradientGlowFilter;

/**
 * properties
 */
Object.defineProperties(GradientGlowFilter.prototype, {
    distance: {
        get: function () {
            return this._distance;
        },
        set: function (distance) {
            if (!this.$isNaN(distance)) {
                this._distance = distance;
            }
        }
    },
    angle: {
        get: function () {
            return this._angle;
        },
        set: function (angle) {
            if (!this.$isNaN(angle) && 0 <= angle && 360 >= angle) {
                this._angle = angle % 360;
            }
        }
    },
    colors: {
        get: function () {
            return this._colors;
        },
        set: function (colors) {
            if (colors instanceof Array) {
                this._colors = colors;
            }
        }
    },
    alphas: {
        get: function () {
            return this._alphas;
        },
        set: function (alphas) {
            if (alphas instanceof Array) {
                this._alphas = alphas;
            }
        }
    },
    ratios: {
        get: function () {
            return this._ratios;
        },
        set: function (ratios) {
            if (ratios instanceof Array) {
                this._ratios = ratios;
            }
        }
    },
    blurX: {
        get: function () {
            return this._blurX;
        },
        set: function (blurX) {
            if (!this.$isNaN(blurX) && 0 <= blurX && 256 > blurX) {
                this._blurX = blurX;
            }
        }
    },
    blurY: {
        get: function () {
            return this._blurY;
        },
        set: function (blurY) {
            if (!this.$isNaN(blurY) && 0 <= blurY && 256 > blurY) {
                this._blurY = blurY;
            }
        }
    },
    strength: {
        get: function () {
            return this._strength;
        },
        set: function (strength) {
            if (!this.$isNaN(strength) && 0 <= strength && 256 > strength) {
                this._strength = strength;
            }
        }
    },
    quality: {
        get: function () {
            return this._quality;
        },
        set: function (quality) {
            if (0 < quality && 16 > quality) {
                this._quality = quality;
            }
        }
    },
    type: {
        get: function () {
            return this._type;
        },
        set: function (type) {
            if (typeof type === "string") {
                switch (type) {
                    case "inner":
                    case "outer":
                    case "full":
                        this._type = type;
                        break;
                    default:
                        break;
                }
            }
        }
    },
    knockout: {
        get: function () {
            return this._knockout;
        },
        set: function (knockout) {
            if (typeof knockout === "boolean") {
                this._knockout = knockout;
            }
        }
    }
});

/**
 * @param cache
 * @param colorTransform
 * @param stage
 * @returns {*}
 */
GradientGlowFilter.prototype.render = function (cache, colorTransform, stage)
{
    var strength = this.strength;
    if (!strength) {
        return cache;
    }

    // gradient
    var ratios = this.ratios;
    var colors = this.colors;
    var alphas = this.alphas;

    // gradient canvas
    var gCanvas = this.$cacheStore.getCanvas();
    gCanvas.width  = 256;
    gCanvas.heigth = 1;
    var gCtx = gCanvas.getContext("2d");

    var css = gCtx.createLinearGradient(0, 0, 255, 0);
    var length = ratios.length;
    var i = 0;
    while (i < length) {
        var color = this.$intToRGBA(colors[i], alphas[i] * 100);
        color = this.$generateColorTransform(color, colorTransform);
        var rgba = "rgba("+color.R+","+color.G+","+color.B+","+color.A+")";

        // set
        css.addColorStop(ratios[i], rgba);

        i = (i + 1)|0;
    }
    gCtx.fillStyle = css;
    gCtx.fillRect(0, 0, 256, 1);
    var imageData = gCtx.getImageData(0, 0, 256, 1);
    var pxGrad    = imageData.data;

    var angle    = this.angle;
    var blurX    = this.blurX;
    var blurY    = this.blurY;
    var quality  = this.quality;
    var knockout = this.knockout;
    var type     = this.type;

    var blurFilter = new BlurFilter(blurX, blurY, quality);
    var ctx = blurFilter.render(cache, colorTransform, stage);
    if (strength > 0) {
        i = 1;
        while (i < strength) {
            i = (i + 1)|0;
            ctx.drawImage(ctx.canvas, 0, 0);
        }
    }

    // synthesis
    var cacheOffsetX = cache._offsetX;
    var cacheOffsetY = cache._offsetY;
    var _offsetX     = ctx._offsetX;
    var _offsetY     = ctx._offsetY;

    var canvas = ctx.canvas;
    imageData  = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var pxData = imageData.data;

    i = 0;
    length = pxData.length;
    var idx;
    while (i < length) {
        idx  = (pxData[i + 3] * 4)|0;
        if (idx) {
            pxData[i    ] = pxGrad[idx    ];
            pxData[i + 1] = pxGrad[idx + 1];
            pxData[i + 2] = pxGrad[idx + 2];
        }

        i = (i + 4)|0;
    }
    ctx.putImageData(imageData, 0, 0);
    canvas = ctx.canvas;

    var r = +(angle * this.$PI / 180);
    var distance = this.distance;
    var scale    = stage.getScale();
    var x = this.$ceil(this.$cos(r) * distance * scale * stage.ratio)|0;
    var y = this.$ceil(this.$sin(r) * distance * scale * stage.ratio)|0;

    var width  = (canvas.width  + cacheOffsetX)|0;
    var height = (canvas.height + cacheOffsetY)|0;
    width      = (width  + this.$abs(x))|0;
    height     = (height + this.$abs(y))|0;

    var cx = _offsetX;
    var cy = _offsetY;
    var dx = 0;
    var dy = 0;
    if (x < 0) {
        cx = (cx - x)|0;
    } else if (x > 0) {
        dx = x|0;
    }

    if (y < 0) {
        cy = (cy - y)|0;
    } else if (y > 0) {
        dy = y|0;
    }

    var synCanvas    = this.$cacheStore.getCanvas();
    synCanvas.width  = width|0;
    synCanvas.height = height|0;

    var synCtx = synCanvas.getContext("2d");
    if (!knockout) {
        synCtx.drawImage(cache.canvas, cx, cy);
    }

    synCtx.globalAlpha = this.alpha;
    if (strength < 1) {
        synCtx.globalAlpha = +(synCtx.globalAlpha * strength);
    }

    var isInner = (type === "inner" || type === "full");
    var isOuter = (type === "outer" || type === "full");
    var operation;
    if (isInner && isOuter) {
        operation = "source-over";
    } else if (isInner) {
        synCtx.drawImage(cache.canvas, cx, cy);
        operation = this.filterOperation(true, knockout);
    } else if (isOuter) {
        operation = "destination-over";
    }

    synCtx.globalCompositeOperation = operation;
    synCtx.drawImage(canvas, cacheOffsetX + dx, cacheOffsetY + dy);

    if (!isInner && isOuter && knockout) {
        synCtx.globalCompositeOperation = "destination-out";
        synCtx.drawImage(cache.canvas, cx, cy);
    }

    synCtx._offsetX = +(cacheOffsetX + cx);
    synCtx._offsetY = +(cacheOffsetY + cy);

    this.$cacheStore.destroy(ctx);

    return synCtx;
};
/**
 * @constructor
 */
var ShaderFilter = function (shader)
{
    BitmapFilter.call(this);

    // default
    this._bottomExtension = 0;
    this._leftExtension   = 0;
    this._rightExtension  = 0;
    this._shader          = shader;
    this._topExtension    = 0;
};

/**
 * extends
 * @type {BitmapFilter}
 */
ShaderFilter.prototype = Object.create(BitmapFilter.prototype);
ShaderFilter.prototype.constructor = ShaderFilter;

/**
 * properties
 */
Object.defineProperties(ShaderFilter.prototype, {
    topExtension: {
        get: function () {
            return this._topExtension;
        },
        set: function (topExtension) {
            if (!this.$isNaN(topExtension)) {
                this._topExtension = topExtension;
            }

        }
    },
    leftExtension: {
        get: function () {
            return this._leftExtension;
        },
        set: function (leftExtension) {
            if (!this.$isNaN(leftExtension)) {
                this._leftExtension = leftExtension;
            }

        }
    },
    rightExtension: {
        get: function () {
            return this._rightExtension;
        },
        set: function (rightExtension) {
            if (!this.$isNaN(rightExtension)) {
                this._rightExtension = rightExtension;
            }

        }
    },
    bottomExtension: {
        get: function () {
            return this._bottomExtension;
        },
        set: function (bottomExtension) {
            if (!this.$isNaN(bottomExtension)) {
                this._bottomExtension = bottomExtension;
            }

        }
    },
    shader: {
        get: function () {
            return this._shader;
        },
        set: function (shader) {
            this._shader = shader;
        }
    }
});

/**
 * @param cache
 * @param colorTransform
 * @param stage
 * @returns {*}
 */
ShaderFilter.prototype.render = function (cache, colorTransform, stage)
{
    return cache;
};
/**
 * @constructor
 */
var Accessibility = function () {};
/**
 * @constructor
 */
var AccessibilityImplementation = function () {};
/**
 * @constructor
 */
var AccessibilityProperties = function () {};
/**
 * @constructor
 */
var DisplayObject = function ()
{
    EventDispatcher.call(this);

    // origin param
    this._$id          = null;
    this._$characterId = null;
    this._$stageId     = null;
    this._$containerId = null;
    this._$parent      = null;
    this._$variables   = {};
    this._$poolContext = null;


    // controller
    this._$index           = 0;
    this._$startFrame      = 1;
    this._$endFrame        = 0;


    // clip
    this._$clipDepth = 0;


    // property
    this._$accessibilityProperties = new AccessibilityProperties();
    this._$name                    = "";
    this._$transform               = new Transform(this);
    this._$visible                 = true;
    this._$scrollRect              = null;
    this._$opaqueBackground        = null;
    this._$mask                    = null;

};

/**
 * extends
 * @type {EventDispatcher}
 */
DisplayObject.prototype = Object.create(EventDispatcher.prototype);
DisplayObject.prototype.constructor = DisplayObject;

/**
 * properties
 */
Object.defineProperties(DisplayObject.prototype, {
    id: {
        /**
         * @returns {number}
         */
        get: function () {
            return this._$id;
        },
        /**
         * @param  {number} id
         * @return void
         */
        set: function (id) {
            if (typeof id === "number") {
                this._$id = id;
            }
        }
    },
    characterId: {
        /**
         * @returns {number}
         */
        get: function () {
            return this._$characterId;
        },
        /**
         * @param  {number} character_id
         * @return void
         */
        set: function (character_id) {
            if (typeof character_id === "number") {
                this._$characterId = character_id;
            }
        }
    },
    container: {
        /**
         * @returns {Stage}
         */
        get: function () {
            return (this._$containerId !== null) ? this.$stages[this._$containerId] : this._$containerId;
        },
        /**
         * @param  {Stage} stage
         * @return void
         */
        set: function (stage) {
            if (this._$containerId === null && stage instanceof Stage) {
                this._$containerId = stage.id;
            }
        }
    },
    accessibilityProperties: {
        /**
         * @returns {AccessibilityProperties}
         */
        get: function () {
            return this._$accessibilityProperties;
        },
        /**
         * @param  {AccessibilityProperties} accessibility_properties
         * @return void
         */
        set: function (accessibility_properties) {
            if (accessibility_properties instanceof AccessibilityProperties) {
                this._$accessibilityProperties = accessibility_properties;
            }
        }
    },
    alpha: {
        /**
         * @returns {number}
         */
        get: function () {
            var colorTransform = this.transform.colorTransform._$colorTransform;
            return +(colorTransform[3] + (colorTransform[7] / 255));
        },
        /**
         * @param   {number} alpha
         * @returns void
         */
        set: function (alpha) {

            alpha = +alpha;
            if (this.$isNaN(alpha)) {
                alpha = 0;
            }

            // clone
            var colorTransform = this.transform.colorTransform;

            // set
            colorTransform._$colorTransform[3] = alpha;
            colorTransform._$colorTransform[7] = 0;

            this.transform.colorTransform = colorTransform;
        }
    },
    _alpha: {
        /**
         * @return {number}
         */
        get: function () {
            return +(this.alpha * 100);
        },
        /**
         * @param  {number} alpha
         * @return void
         */
        set: function (alpha) {
            this.alpha = +(alpha / 100);
        }
    },
    blendMode: {
        /**
         * @return {string}
         */
        get: function () {

            if (this.transform._$blendMode) {

                return this.transform._$blendMode;

            }

            var placeObject = this._$getPlaceObject();
            if (placeObject) {

                return placeObject.blendMode;

            }

            this.transform._$transform();
            return this.transform._$blendMode;

        },
        /**
         * @param  {string|number} blend_mode
         * @return void
         */
        set: function (blend_mode) {
            this.transform._$transform(null, null, null, blend_mode);
        }
    },
    // TODO
    blendShader: {
        get: function () {

        },
        set: function (blend_shader) {

        }
    },
    // TODO
    cacheAsBitmap: {
        get: function () {

        },
        set: function (cache_as_bitmap) {

        }
    },
    filters: {
        /**
         * @return {string}
         */
        get: function () {

            if (this.transform._$filters) {

                return this.transform._$filters;

            }

            var placeObject = this._$getPlaceObject();
            if (placeObject) {

                return placeObject.filters;

            }

            this.transform._$transform();
            return this.transform._$filters;

        },
        /**
         * @param  {array} filters
         * @return void
         */
        set: function (filters) {
            this.transform._$transform(null, null, filters, null);
        }
    },
    height: {
        /**
         * @return {number}
         */
        get: function () {
            var bounds = this._$getBounds(this.transform.matrix._$matrix);
            return this.$abs(bounds.yMax - bounds.yMin);
        },
        /**
         * @param  {number} height
         * @return void
         */
        set: function (height) {

            height = +height;

            if (!this.$isNaN(height)) {

                var matrix = this.transform.matrix;
                var bounds = this._$getBounds(matrix._$matrix);

                // set
                matrix.d = +(height * matrix.d / this.$abs(bounds.yMax - bounds.yMin));

                this.transform.matrix = matrix;

            }
        }
    },
    _height: {
        /**
         * @return {number}
         */
        get: function () {
            return this.height;
        },
        /**
         * @param  {number} height
         * @return void
         */
        set: function (height) {
            this.height = height;
        }
    },
    // TODO
    loaderInfo: {
        get: function () {

        },
        set: function () {

        }
    },
    // TODO
    mask: {
        /**
         * @return {DisplayObject|null}
         */
        get: function () {
            return this._$mask;
        },
        /**
         * @param  {DisplayObject|null} mask
         * @return void
         */
        set: function (mask) {
            if (mask === null || mask instanceof DisplayObject) {
                this._$mask = mask;
            }
        }
    },
    // TODO
    metaData: {
        get: function () {

        },
        set: function () {

        }
    },
    mouseX:{
        // TODO
        get: function () {

        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    _xmouse:{
        get: function () {
            return this.mouseX;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    mouseY:{
        // TODO
        get: function () {

        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    _ymouse:{
        get: function () {
            return this.mouseY;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    name: {
        /**
         * @returns {string}
         */
        get: function () {
            return this._$name + "";
        },
        /**
         * @param  {string} name
         * @return void
         */
        set: function (name) {
            this._$name = name + "";
        }
    },
    _name: {
        /**
         * @returns {string}
         */
        get: function () {
            return this.name;
        },
        /**
         * @param  {string} name
         * @return void
         */
        set: function (name) {
            this.name = name + "";
        }
    },
    // TODO
    opaqueBackground: {
        /**
         * @returns {number|null}
         */
        get: function () {
            return this._$opaqueBackground;
        },
        /**
         * @param  {number|null} opaque_background
         * @return void
         */
        set: function (opaque_background) {
            if (typeof opaque_background === "string") {
                opaque_background = this.$colorStringToInt(opaque_background);
            }

            if (typeof opaque_background === "number" || opaque_background === null) {
                this._$opaqueBackground = opaque_background;
            }
        }
    },
    parent: {
        /**
         * @returns {DisplayObject}
         */
        get: function () {
            return this._$parent;
        },
        /**
         * @param  {DisplayObject} parent
         * @return void
         */
        set: function (parent) {
            if (parent instanceof DisplayObject) {
                this._$parent = parent;
            }
        }
    },
    _parent: {
        /**
         * @returns {DisplayObject}
         */
        get: function () {
            return this.parent;
        },
        /**
         * @param  {DisplayObject} parent
         * @return void
         */
        set: function (parent) {
            this.parent = parent;
        }
    },
    root: {
        /**
         * @returns {MainTimeline}
         */
        get: function () {
            return this.stage._root;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    _root: {
        /**
         * @returns {MainTimeline}
         */
        get: function () {
            return this.root;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    rotation: {
        /**
         * @return {number}
         */
        get: function () {
            var matrix = this.transform.matrix;
            return this.$atan2(matrix.b, matrix.a) * 180 / this.$PI;
        },
        /**
         * @param  {number} rotation
         * @return void
         */
        set: function (rotation) {

            rotation = +rotation;

            if (!this.$isNaN(rotation)) {

                var sign = 1;
                if (rotation < 0) {
                    sign = -1;
                }

                // clamp
                var value = this.$abs(rotation);
                if (value >= 360) {

                    while (value >= 360) {
                        value = value - 360;
                    }

                    rotation = value * sign;

                }

                var matrix  = this.transform.matrix;
                var radianX = this.$atan2(matrix.b,  matrix.a);
                var radianY = this.$atan2(-matrix.c, matrix.d);
                var ScaleX  = this.$sqrt(matrix.a * matrix.a + matrix.b * matrix.b);
                var ScaleY  = this.$sqrt(matrix.c * matrix.c + matrix.d * matrix.d);

                var radian  = rotation * this.$PI / 180;
                radianY     = radianY + radian - radianX;
                radianX     = radian;

                matrix.a    = ScaleX  * this.$cos(radianX);
                matrix.b    = ScaleX  * this.$sin(radianX);
                matrix.c    = -ScaleY * this.$sin(radianY);
                matrix.d    = ScaleY  * this.$cos(radianY);

                this.transform.matrix = matrix;

            }
        }
    },
    _rotation: {
        /**
         * @return {number}
         */
        get: function () {
            return this.rotation;
        },
        /**
         * @param  {number} rotation
         * @return void
         */
        set: function (rotation) {
            this.rotation = rotation;
        }
    },
    // TODO
    rotationX: {
        get: function () {
        },
        set: function () {
        }
    },
    // TODO
    rotationY: {
        get: function () {
        },
        set: function () {
        }
    },
    // TODO
    rotationZ: {
        get: function () {
        },
        set: function () {
        }
    },
    // TODO
    scale9Grid: {
        get: function () {
        },
        set: function () {
        }
    },
    scaleX: {
        /**
         * @return {number}
         */
        get: function () {
            var matrix = this.transform.matrix;
            var xScale = this.$sqrt(matrix.a * matrix.a + matrix.b * matrix.b);
            return (0 < matrix.a) ? xScale : -xScale;
        },
        /**
         * @param  {number} scale_x
         * @return void
         */
        set: function (scale_x) {

            scale_x = +scale_x;

            if (!this.$isNaN(scale_x)) {

                var matrix  = this.transform.matrix;
                var radianX = this.$atan2(matrix.b, matrix.a);

                matrix.a = scale_x * this.$cos(radianX);
                matrix.b = scale_x * this.$sin(radianX);

                this.transform.matrix = matrix;
            }
        }
    },
    _xscale: {
        /**
         * @return {number}
         */
        get: function () {
            return this.scaleX * 100;
        },
        /**
         * @param  {number} x_scale
         * @return void
         */
        set: function (x_scale) {

            x_scale = +x_scale;

            if (!this.$isNaN(x_scale)) {
                this.scaleX = x_scale / 100;
            }
        }
    },
    scaleY: {
        /**
         * @return {number}
         */
        get: function () {
            var matrix = this.transform.matrix;
            var yScale = this.$sqrt(matrix.c * matrix.c + matrix.d * matrix.d);
            return (0 < matrix.d) ? yScale : -yScale;
        },
        /**
         * @param  scale_y
         * @return void
         */
        set: function (scale_y) {

            scale_y = +scale_y;

            if (!this.$isNaN(scale_y)) {

                var matrix  = this.transform.matrix;
                var radianY = this.$atan2(-matrix.c, matrix.d);

                matrix.c = -scale_y * this.$sin(radianY);
                matrix.d = scale_y  * this.$cos(radianY);

                this.transform.matrix = matrix;
            }
        }
    },
    _yscale: {
        /**
         * @return {number}
         */
        get: function () {
            return this.scaleY * 100;
        },
        /**
         * @param  y_scale
         * @return void
         */
        set: function (y_scale) {

            y_scale = +y_scale;

            if (!this.$isNaN(y_scale)) {
                this.scaleY = y_scale / 100;
            }
        }
    },
    // TODO
    scaleZ: {
        get: function () {
        },
        set: function () {
        }
    },
    // TODO
    scrollRect: {
        /**
         * @return {Rectangle}
         */
        get: function () {
            return this._$scrollRect;
        },
        /**
         * @param  {Rectangle} scroll_rect
         * @return void
         */
        set: function (scroll_rect) {
            if (scroll_rect instanceof Rectangle) {
                this._$scrollRect = scroll_rect;
            }
        }
    },
    stage: {
        /**
         * @returns {Stage}
         */
        get: function () {
            return (this._$stageId !== null) ? this.$stages[this._$stageId] : this._$stageId;
        },
        /**
         * @param  {Stage} stage
         * @return void
         */
        set: function (stage) {
            if (this._$stageId === null && stage instanceof Stage) {
                this._$stageId = stage.id;
            }
        }
    },
    transform: {
        /**
         * @returns {Transform}
         */
        get: function () {
            return this._$transform;
        },
        /**
         * @param   {Transform} transform
         * @returns void
         */
        set: function (transform) {
            if (transform instanceof Transform) {
                this._$transform = transform;
            }
        }
    },
    visible: {
        /**
         * @return {boolean}
         */
        get: function () {
            return this._$visible;
        },
        /**
         * @param  {boolean} visible
         * @return void
         */
        set: function (visible) {
            if (typeof visible === "boolean") {
                this._$visible = visible;
            }
        }
    },
    _visible: {
        /**
         * @return {boolean}
         */
        get: function () {
            return this.visible;
        },
        /**
         * @param  {boolean} visible
         * @return void
         */
        set: function (visible) {
            this.visible = visible;
        }
    },
    width: {
        /**
         * @return {number}
         */
        get: function () {
            var bounds = this._$getBounds(this.transform.matrix._$matrix);
            return this.$abs(bounds.xMax - bounds.xMin);
        },
        /**
         * @param  {number} width
         * @return void
         */
        set: function (width) {

            width = +width;

            if (!this.$isNaN(width)) {
                var matrix = this.transform.matrix;
                var bounds = this._$getBounds(matrix._$matrix);
                var xScale = width * matrix.a / this.$abs(bounds.xMax - bounds.xMin);

                if (this.$isNaN(xScale)) {
                    xScale = 0;
                }

                matrix.a = xScale;

                this.transform.matrix = matrix;
            }
        }
    },
    _width: {
        /**
         * @return {number}
         */
        get: function () {
            return this.width;
        },
        /**
         * @param  {number} width
         * @return void
         */
        set: function (width) {
            this.width = width;
        }
    },
    x: {
        /**
         * @return {number}
         */
        get: function () {
            return this.transform.matrix.tx;
        },
        /**
         * @param  {number} x
         * @return void
         */
        set: function (x) {

            x = +x;

            if (!this.$isNaN(x)) {
                var matrix = this.transform.matrix;
                matrix.tx  = x;
                this.transform.matrix = matrix;
            }
        }
    },
    _x: {
        /**
         * @return {number}
         */
        get: function () {
            return this.x;
        },
        /**
         * @param  {number} x
         * @return void
         */
        set: function (x) {
            this.x = x;
        }
    },
    y: {
        /**
         * @return {number}
         */
        get: function () {
            return this.transform.matrix.ty;
        },
        /**
         * @param  {number} y
         * @return void
         */
        set: function (y) {

            y = +y;

            if (!this.$isNaN(y)) {
                var matrix = this.transform.matrix;
                matrix.ty  = y;
                this.transform.matrix = matrix;
            }
        }
    },
    _y: {
        /**
         * @return {number}
         */
        get: function () {
            return this.y;
        },
        /**
         * @param  {number} y
         * @return void
         *
         */
        set: function (y) {
            this.y = y;
        }
    },
    // TODO
    z: {
        get: function () {
        },
        set: function () {
        }
    }
});

/**
 * @return {PlaceObject|null}
 */
DisplayObject.prototype._$getPlaceObject = function ()
{
    var parent = this.parent;
    if (!parent) {
        return null;
    }

    var frame = parent.currentFrame|0;
    if (!(frame in parent._$placeController)) {
        return null;
    }

    var id = parent._$placeController[frame][this._$index];

    return parent._$placeObjects[id];
};

/**
 * @param   {MovieClip} parent
 * @param   {object}    tag
 * @returns void
 */
DisplayObject.prototype._$commonBuild = function (parent, tag)
{
    // set param
    this._$index = tag.Depth|0;

    if ("StartFrame" in tag) {
        this._$startFrame = tag.StartFrame|0;
    }

    if ("EndFrame" in tag) {
        this._$endFrame = tag.EndFrame|0;
    }
};

/**
 * @param  {array} matrix
 * @return {array}
 */
DisplayObject.prototype._$preDraw = function (matrix)
{

    if (this.filters.length || this.blendMode !== BlendMode.NORMAL) {

        this._$poolContext = this.stage.player._$preContext;

        // reset
        this.stage.player._$preContext = null;

        var xScale = +(this.$sqrt(matrix[0] * matrix[0] + matrix[1] * matrix[1]));
        var yScale = +(this.$sqrt(matrix[2] * matrix[2] + matrix[3] * matrix[3]));
        xScale = +(this.$pow(this.$SQRT2, this.$ceil(this.$log(xScale) / this.$LN2_2 - this.$LOG1P)));
        yScale = +(this.$pow(this.$SQRT2, this.$ceil(this.$log(yScale) / this.$LN2_2 - this.$LOG1P)));

        var bounds = this._$getBounds(null);
        var xMax   = +bounds.xMax;
        var xMin   = +bounds.xMin;
        var yMax   = +bounds.yMax;
        var yMin   = +bounds.yMin;

        var width  = this.$abs(this.$ceil((xMax - xMin) * xScale))|0;
        var height = this.$abs(this.$ceil((yMax - yMin) * yScale))|0;

        // start canvas
        var canvas    = this.$cacheStore.getCanvas();
        canvas.width  = width;
        canvas.height = height;

        // start context
        var context = canvas.getContext("2d");

        // offset
        context._$offsetX = 0;
        context._$offsetY = 0;

        this.stage.player._$preContext = context;

        return [xScale, 0, 0, yScale, -xMin * xScale, -yMin * yScale];

    }

    return matrix;
};

/**
 * @param  {array} matrix
 * @param  {array} pre_matrix
 * @param  {array} color_transform
 * @return void
 */
DisplayObject.prototype._$postDraw = function (matrix, pre_matrix, color_transform)
{
    if (this._$poolContext) {

        var ctx = this.stage.player._$preContext;


        // filter
        var offsetX = 0;
        var offsetY = 0;

        var length  = this.filters.length;
        if (length) {

            var idx = 0;
            while (length > idx) {

                var filter = this.filters[idx];

                ctx = filter._$applyFilter(ctx, pre_matrix, color_transform, this.stage.player);

                idx = (idx + 1)|0;
            }

            offsetX = ctx._$offsetX;
            offsetY = ctx._$offsetY;

        }

        // blend
        var width  = ctx.canvas.width|0;
        var height = ctx.canvas.height|0;

        ctx.setTransform(1,0,0,1,0,0);
        ctx.globalAlpha = 1;
        if (this.blendMode !== BlendMode.NORMAL) {

            var operation = "source-over";
            switch (this.blendMode) {

                case BlendMode.MULTIPLY:
                    operation = BlendMode.MULTIPLY;
                    break;

                case BlendMode.SCREEN:
                    operation = BlendMode.SCREEN;
                    break;

                case BlendMode.LIGHTEN:
                    operation = BlendMode.LIGHTEN;
                    break;

                case BlendMode.DARKEN:
                    operation = BlendMode.DARKEN;
                    break;

                case BlendMode.DIFFERENCE:
                    operation = BlendMode.DIFFERENCE;
                    break;

                case BlendMode.ADD:
                    operation = "lighter";
                    break;

                case BlendMode.SUBTRACT:

                    ctx.globalCompositeOperation = BlendMode.DIFFERENCE;
                    ctx.fillStyle = "rgb(255,255,255)";
                    ctx.fillRect(0, 0, width, height);

                    ctx.globalCompositeOperation = BlendMode.DARKEN;
                    ctx.fillStyle = "rgb(255,255,255)";
                    ctx.fillRect(0, 0, width, height);

                    operation = "color-burn";
                    break;

                case BlendMode.INVERT:

                    ctx.globalCompositeOperation = BlendMode.DIFFERENCE;
                    ctx.fillStyle = "rgb(255,255,255)";
                    ctx.fillRect(0, 0, width, height);

                    ctx.globalCompositeOperation = "lighter";
                    ctx.fillStyle = "rgb(255,255,255)";
                    ctx.fillRect(0, 0, width, height);

                    operation = BlendMode.DIFFERENCE;
                    break;

                case BlendMode.ALPHA:
                    operation = "source-over";
                    break;

                case BlendMode.ERASE:
                    operation = "destination-out";
                    break;

                case BlendMode.OVERLAY:
                    operation = BlendMode.OVERLAY;
                    break;

                case BlendMode.HARDLIGHT:
                    operation = "hard-light";
                    break;

                default:
                    break;

            }

            ctx.globalCompositeOperation = operation;

        }

        var xScale = pre_matrix[0];
        var yScale = pre_matrix[3];

        // draw
        var m = this.$multiplicationMatrix(
            matrix, [1 / xScale, 0, 0, 1 / yScale, -pre_matrix[4]/xScale, -pre_matrix[5]/yScale]
        );

        this._$poolContext.setTransform(m[0], m[1], m[2], m[3], m[4], m[5]);
        this._$poolContext.drawImage(ctx.canvas, -offsetX, -offsetY, width, height);


        this.stage.player._$preContext = this._$poolContext;

        // reset
        this._$poolContext = null;
    }
};

/**
 * @param  {DisplayObject} target_coordinate_space
 * @return {Rectangle}
 */
DisplayObject.prototype.getBounds = function (target_coordinate_space)
{
    var rectangle = new Rectangle(0, 0, 0, 0);

    if (target_coordinate_space instanceof DisplayObject) {

        var bounds = this._$getBounds(
            target_coordinate_space.transform.matrix._$matrix
        );

        // set
        rectangle.x      = this.x + bounds.xMin;
        rectangle.y      = this.y + bounds.yMin;
        rectangle.width  = this.$abs(bounds.xMax - bounds.xMin);
        rectangle.height = this.$abs(bounds.yMax - bounds.yMin);
    }

    return rectangle;
};

/**
 * @param  {DisplayObject} target_coordinate_space
 * @return {Rectangle}
 */
DisplayObject.prototype.getRect = function (target_coordinate_space)
{
    var rectangle = new Rectangle(0, 0, 0, 0);

    if (target_coordinate_space instanceof DisplayObject) {

        var bounds = this._$getRect(
            target_coordinate_space.transform.matrix._$matrix
        );

        // set
        rectangle.x      = bounds.xMin;
        rectangle.y      = bounds.yMin;
        rectangle.width  = this.$abs(bounds.xMax - bounds.xMin);
        rectangle.height = this.$abs(bounds.yMax - bounds.yMin);
    }

    return rectangle;
};

DisplayObject.prototype.globalToLocal = function ()
{};

DisplayObject.prototype.globalToLocal3D = function ()
{};

DisplayObject.prototype.hitTestObject = function ()
{};

DisplayObject.prototype.hitTestPoint = function ()
{};

DisplayObject.prototype.local3DToGlobal = function ()
{};

DisplayObject.prototype.localToGlobal = function ()
{};
/**
 * @constructor
 */
var InteractiveObject = function ()
{
    DisplayObject.call(this);
};

/**
 * extends
 * @type {DisplayObject}
 */
InteractiveObject.prototype = Object.create(DisplayObject.prototype);
InteractiveObject.prototype.constructor = InteractiveObject;
/**
 * @constructor
 */
var DisplayObjectContainer = function ()
{
    InteractiveObject.call(this);

    // property init
    this._$mouseChildren = true;
    this._$numChildren   = 0;
    this._$tabChildren   = true;
    this._$textSnapshot  = new TextSnapshot();
    this._$ratio         = 0;
    this._$children      = [];

    // origin param
    this._$placeController = [];
    this._$placeObjects    = [];
    this._$controller      = [];
    this._$dictionary      = [];
    this._$instances       = [];
};

/**
 * extends
 * @type {InteractiveObject}
 */
DisplayObjectContainer.prototype = Object.create(InteractiveObject.prototype);
DisplayObjectContainer.prototype.constructor = DisplayObjectContainer;

/**
 * properties
 */
Object.defineProperties(DisplayObjectContainer.prototype, {
    mouseChildren: {
        get: function () {
            return this._$mouseChildren;
        },
        set: function (mouseChildren) {
            if (typeof mouseChildren === "boolean") {
                this._$mouseChildren = mouseChildren;
            }
        }
    },
    numChildren: {
        get: function () {
            return this._$numChildren;
        },
        set: function () {}
    },
    tabChildren: {
        get: function () {
            return this._$tabChildren;
        },
        set: function (tabChildren) {
            if (typeof tabChildren === "boolean") {
                this._$tabChildren = tabChildren;
            }
        }
    },
    textSnapshot: {
        get: function () {
            return this._$textSnapshot;
        },
        set: function () {}
    },
    ratio: {
        get: function () {
            return this._$ratio;
        },
        set: function (ratio) {
            if (typeof ratio === "number") {
                this._$ratio = ratio;
            }
        }
    }
});

/**
 * @param   {boolean} should_action
 * @returns void
 */
DisplayObjectContainer.prototype._$characterBuild = function (should_action)
{
    var id = 0;
    var length = this._$dictionary.length|0;

    while (length > id) {

        // attach
        this._$createInstance(id, should_action);

        id = (id + 1)|0;
    }
};

/**
 * @param   {number}  id
 * @param   {boolean} should_action
 * @returns void
 */
DisplayObjectContainer.prototype._$createInstance = function (id, should_action)
{
    // build
    var tag       = this._$dictionary[id];
    var character = this.stage._$characters[tag.CharacterId];
    var obj       = character._$build(this, id, tag, should_action);

    this._$addInstance(id, obj);
};

/**
 * @param {number}      frame
 * @param {number}      depth
 * @param {PlaceObject} place_object
 */
DisplayObjectContainer.prototype._$addPlaceObject = function (frame, depth, place_object)
{
    if (!(frame in this._$placeController)) {
        this._$placeController[frame] = [];
    }

    var id = this._$placeObjects.length;

    this._$placeObjects[id] = place_object;
    this._$placeController[frame][depth] = id;
};

/**
 * @param   {number} frame
 * @param   {number} depth
 * @returns {number|null}
 */
DisplayObjectContainer.prototype._$getControllerAt = function(frame, depth)
{
    if (!(frame in this._$controller)) {
        return null;
    }

    if (!(depth in this._$controller[frame])) {
        return null;
    }

    return this._$controller[frame][depth];
};

/**
 * @param   {number} frame
 * @returns {array}
 */
DisplayObjectContainer.prototype._$getController = function(frame)
{
    if (!(frame in this._$controller)) {
        return [];
    }

    return this._$controller[frame];
};

/**
 * @param {number} frame
 * @param {number} depth
 * @param {number} instance_id
 */
DisplayObjectContainer.prototype._$setController = function (frame, depth, instance_id)
{
    if (!(frame in this._$controller)) {
        this._$controller[frame] = [];
    }

    this._$controller[frame][depth] = instance_id;
};

/**
 * @param   {object} placeObject
 * @returns {number}
 */
DisplayObjectContainer.prototype._$addDictionary = function (placeObject)
{
    var id = this._$dictionary.length|0;

    this._$dictionary[id] = placeObject;

    return id;
};

/**
 * @param {number}        index
 * @param {DisplayObject} instance
 */
DisplayObjectContainer.prototype._$addInstance = function (index, instance)
{
    this._$instances[index] = instance;
};

/**
 *
 * @param  {number} index
 * @return {DisplayObject}
 */
DisplayObjectContainer.prototype._$getInstance = function (index)
{
    return this._$instances[index];
};

/**
 * @param   {DisplayObject} child
 * @returns {DisplayObject}
 */
DisplayObjectContainer.prototype.addChild = function (child)
{
    child = this._$addChild(child);

    this._$numChildren = (this._$numChildren + 1)|0;

    return child;
};

/**
 * @param   {DisplayObject} child
 * @param   {number}        index
 * @returns {DisplayObject}
 */
DisplayObjectContainer.prototype.addChildAt = function (child, index)
{
    if (index > this.numChildren) {
        throw new Error("index is out of range.");
    }

    child = this._$addChild(child, index);

    this._$numChildren = (this._$numChildren + 1)|0;

    return child;
};

/**
 * @param   {DisplayObject}     child
 * @param   {number}            index
 * @returns {DisplayObject}
 */
DisplayObjectContainer.prototype._$addChild = function (child, index)
{
    if (!(child instanceof DisplayObject)) {
        throw new Error("this child is not DisplayObject.");
    }

    // init
    index = index || this.numChildren;

    // stage insert origin data
    if (child.id === null) {
        child.id = this._$instances.length|0;
        this._$instances[child.id] = child;
    }

    // set param
    child.stage   = this.stage;
    child.parent  = this;
    child._$index = index;


    if (child instanceof DisplayObjectContainer) {

        child._$setParentAndStage(this);

    }

    this._$children[index] = child.id;

    // event
    child.dispatchEvent(Event.ADDED, this.stage);
    this.dispatchEvent(Event.ADDED,  this.stage);

    return child;
};

/**
 * @param {DisplayObject} parent
 */
DisplayObjectContainer.prototype._$setParentAndStage = function(parent)
{
    var instances = this._$instances;
    var length = instances.length;
    var idx = 0;
    while (length > idx) {

        var instance = instances[idx];
        instance.stage  = parent.stage;
        instance.parent = parent;

        if (instance instanceof DisplayObjectContainer) {
            instance._$setParentAndStage(parent);
        }

        idx = (idx + 1)|0;
    }
};

/**
 * @param {Point} point
 * @returns {boolean}
 */
DisplayObjectContainer.prototype.areInaccessibleObjectsUnderPoint = function (point)
{
    // TODO
    return true;
};

/**
 * @param {DisplayObject} child
 * @returns {boolean}
 */
DisplayObjectContainer.prototype.contains = function (child)
{
    if (!(child instanceof DisplayObject)) {
        throw new Error("this child is not DisplayObject.");
    }

    var idx = 0;
    while (this.numChildren > idx) {
        if (idx in this._$children) {
            var id = this._$children[idx];
            if (id === child.id) {
                return true;
            }
        }
        idx = (idx + 1)|0;
    }

    return false;
};

/**
 * @param {number} index
 * @returns {DisplayObject}
 */
DisplayObjectContainer.prototype.getChildAt = function (index)
{
    if (index > this.numChildren) {
        throw new Error("index is out of range.");
    }

    if (!(index in this._$children)) {
        throw new Error("child not found.");
    }

    return this._$getInstance(this._$children[index]);
};

/**
 *
 * @param   {string} name
 * @returns {{DisplayObject}|null}
 */
DisplayObjectContainer.prototype.getChildByName = function (name)
{
    // to string
    name = name + "";

    var stage = this.stage;
    var idx   = 0;
    while (this.numChildren > idx) {
        if (idx in this._$children) {
            var instance = stage.getInstance(this._$children[idx]);
            if (instance && instance.name === name) {
                return instance;
            }
        }
        idx = (idx + 1)|0;
    }

    return null;
};

/**
 * @param {DisplayObject} child
 * @returns {number}
 */
DisplayObjectContainer.prototype.getChildIndex = function (child)
{
    if (!(child instanceof DisplayObject)) {
        throw new Error("this child is not DisplayObject.");
    }

    if (!(child.index in this._$children) || child.id !== this._$children[child.index]) {
        throw new Error("child not found.");
    }

    return child.index;
};

/**
 * @param {Point} point
 * @returns {Array}
 */
DisplayObjectContainer.prototype.getObjectsUnderPoint = function (point)
{
    // todo
    return [];
};

/**
 * @param    {DisplayObject} child
 * @returns {DisplayObject}
 */
DisplayObjectContainer.prototype.removeChild = function (child)
{
    if (!(child instanceof DisplayObject)) {
        throw new Error("this child is not DisplayObject.");
    }

    if (!(child.index in this._$children) || child.id !== this._$children[child.index]) {
        throw new Error("child not found.");
    }

    return this._$remove(child);
};

/**
 * @param   {number} index
 * @returns {DisplayObject}
 */
DisplayObjectContainer.prototype.removeChildAt = function (index)
{
    if (!(index in this._$children)) {
        throw new Error("child not found.");
    }

    // reset
    var child = this.stage.getInstance(this._$children[index]);

    return this._$remove(child);
};

/**
 * @param   {DisplayObject} child
 * @returns {DisplayObject}
 */
DisplayObjectContainer.prototype._$remove = function (child)
{

    // remove
    this._$children.splice(child.index, 1);
    this._$numChildren = (this._$numChildren - 1)|0;

    var idx = 0;
    while (this.numChildren > idx) {

        var instance     = this.stage.getInstance(this._$children[idx]);
        instance._$index = idx;

        idx = (idx + 1)|0;
    }

    // reset
    child._stageId     = null;
    child._$parentId   = null;
    child._$index      = null;

    return child;
};

/**
 * @param   {number} beginIndex
 * @param   {number} endIndex
 * @returns void
 */
DisplayObjectContainer.prototype.removeChildren = function (beginIndex, endIndex)
{
    if (0 > beginIndex || 0 > endIndex) {
        throw new Error("specify 0 or more.");
    }

    endIndex = (endIndex !== undefined) ? endIndex|0 : 0x7fffffff;
    if (endIndex > this.numChildren) {
        throw new Error("the number is over.");
    }

    var index = beginIndex;
    endIndex  = (endIndex + 1)|0;
    while (endIndex > index) {

        var child = this.stage.getInstance(this._$children[beginIndex]);
        this._$remove(child);

        index = (index + 1)|0;
    }

};


/**
 * @constructor
 */
var Sprite = function ()
{

    DisplayObjectContainer.call(this);

    // properties
    this._$buttonMode     = false;
    this._$dropTarget     = null;
    this._$hitArea        = null;
    this._$soundTransform = new SoundTransform();
    this._$useHandCursor  = true;

    // Graphics
    var graphics = new Graphics();
    graphics._$displayObject = this;
    this._$graphics = graphics;

};

/**
 * extends
 * @type {DisplayObjectContainer}
 */
Sprite.prototype = Object.create(DisplayObjectContainer.prototype);
Sprite.prototype.constructor = Sprite;

/**
 * properties
 */
Object.defineProperties(Sprite.prototype, {
    buttonMode: {
        /**
         * @returns {boolean}
         */
        get: function () {
            return this._$buttonMode;
        },
        set: function (button_mode) {
            if (typeof button_mode === "boolean") {
                this._$buttonMode = button_mode;
            }
        }
    },
    dropTarget: {
        /**
         * @returns {DisplayObject|null}
         */
        get: function () {
            return this._$dropTarget;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    graphics: {
        /**
         * @returns {Graphics}
         */
        get: function () {
            return this._$graphics;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    hitArea: {
        /**
         * @returns {Sprite|null}
         */
        get: function () {
            return this._$hitArea;
        },
        /**
         * @param  {Sprite|null} hit_area
         * @return void
         */
        set: function (hit_area) {
            if (hit_area === null || hit_area instanceof Sprite) {
                this._$hitArea = hit_area;
            }
        }
    },
    soundTransform: {
        /**
         * @returns {SoundTransform}
         */
        get: function () {
            return this._$soundTransform;
        },
        /**
         * @param  {SoundTransform} sound_transform
         * @return void
         */
        set: function (sound_transform) {
            if (sound_transform instanceof SoundTransform) {
                this._$soundTransform = sound_transform;
            }
        }
    },
    useHandCursor: {
        /**
         * @returns {boolean}
         */
        get: function () {
            return this._$useHandCursor;
        },
        /**
         * @param  {boolean} use_hand_cursor
         * @return void
         */
        set: function (use_hand_cursor) {
            if (typeof use_hand_cursor === "boolean") {
                this._$useHandCursor = use_hand_cursor;
            }
        }
    }
});

/**
 * @returns {string}
 */
Sprite.prototype.toString = function ()
{
    return "[object Sprite]";
};

/**
 * @param  {boolean}   lock_center
 * @param  {Rectangle} bounds
 * @return void
 */
Sprite.prototype.startDrag = function (lock_center, bounds)
{


};

/**
 * @param  {number}    touch_point_id
 * @param  {boolean}   lock_center
 * @param  {Rectangle} bounds
 * @return void
 */
Sprite.prototype.startTouchDrag = function (touch_point_id, lock_center, bounds)
{


};

/**
 * @return void
 */
Sprite.prototype.stopDrag = function ()
{


};

/**
 * @param  {number} touch_point_id
 * @return void
 */
Sprite.prototype.stopTouchDrag = function (touch_point_id)
{


};

/**
 * @param  {array}   matrix
 * @param  {array}   color_transform
 * @param  {boolean} is_clip
 * @param  {boolean} visible
 * @return void
 */
Sprite.prototype._$draw = function (matrix, color_transform, is_clip, visible)
{
    // filter and blend
    var preMatrix = this._$preDraw(matrix);

    var instance;
    var controller = [];
    var instances  = this._$instances;

    // build controller
    var length = instances.length;
    var idx    = 0;
    while (length > idx) {

        instance = instances[idx];

        controller[instance._$index] = instance;

        idx = (idx + 1)|0;
    }

    // children draw
    for (var depth in controller) {

        if (!controller.hasOwnProperty(depth)) {
            continue;
        }

        instance = controller[depth];

        // Transform
        var transform = instance.transform;

        // next draw
        instance._$draw(
            this.$multiplicationMatrix(preMatrix, transform.matrix._$matrix),
            this.$multiplicationColor(color_transform, transform.colorTransform._$colorTransform),
            is_clip,
            visible
        );

    }

    // Graphics
    if (this.graphics._$getBounds() !== null) {
        this.graphics._$draw(preMatrix, color_transform, is_clip, visible);
    }

    // add button
    if (this.buttonMode) {
        this.stage.player.addEventObject(this, matrix, this._$getBounds(null));
    }

    // filter and blend
    this._$postDraw(matrix, preMatrix, color_transform);

};

/**
 * @param  {array|null|undefined} matrix
 * @return {{xMin: number, xMax: number, yMin: number, yMax: number}}
 */
Sprite.prototype._$getBounds = function (matrix)
{
    var xMax = 0;
    var yMax = 0;
    var xMin = 0;
    var yMin = 0;

    if (this.graphics._$getBounds() !== null) {

        var gBounds = (matrix)
            ? this.$boundsMatrix(this.graphics._$getBounds(), matrix)
            : this.graphics._$getBounds();


        if (matrix) {
            for (var name in gBounds) {

                if (!gBounds.hasOwnProperty(name)) {
                    continue;
                }

                gBounds[name] = +(gBounds[name] / 20);
            }
        }

        xMin = +gBounds.xMin;
        xMax = +gBounds.xMax;
        yMin = +gBounds.yMin;
        yMax = +gBounds.yMax;
    }

    var instances  = this._$instances;

    var length = instances.length;
    var idx    = 0;
    while (length > idx) {

        var instance = instances[idx];
        idx = (idx + 1)|0;

        // Transform
        var transform = instance.transform;

        var bounds  = instance._$getBounds(
            (matrix) ? this.$multiplicationMatrix(matrix, transform.matrix._$matrix) : null
        );

        xMin = +this.$min(xMin, bounds.xMin);
        xMax = +this.$max(xMax, bounds.xMax);
        yMin = +this.$min(yMin, bounds.yMin);
        yMax = +this.$max(yMax, bounds.yMax);
    }

    return {
        xMin: xMin,
        xMax: xMax,
        yMin: yMin,
        yMax: yMax
    };
};

/**
 * @param  {number} x
 * @param  {number} y
 * @param  {array}  matrix
 * @return {boolean}
 */
Sprite.prototype._$hit = function (x, y, matrix)
{
    var instances = this._$instances;

    var length = instances.length;
    var idx    = 0;
    while (length > idx) {

        var instance = instances[idx];
        idx = (idx + 1)|0;

        // Transform
        var transform = instance.transform;

        // next hit test
        var hit = instance._$hit(
            x, y,
            this.$multiplicationMatrix(matrix, transform.matrix._$matrix)
        );

        if (hit) {
            return hit;
        }
    }

    return false;
};
/**
 * @constructor
 */
var AVLoader = function () {};
/**
 * @constructor
 */
var AVM1Movie = function () {};

/**
 * @type {{ACTIONSCRIPT2: number, ACTIONSCRIPT3: number}}
 */
var ActionScriptVersion = {
    "ACTIONSCRIPT2": 2,
    "ACTIONSCRIPT3": 3
};
/**
 * @constructor
 */
var Bitmap = function (bitmap_data, pixel_snapping, smoothing)
{
    DisplayObject.call(this);

    // default
    this._$bitmapData    = null;
    this._$pixelSnapping = PixelSnapping.AUTO;
    this._$smoothing     = false;

    // init
    this.bitmapData    = bitmap_data;
    this.pixelSnapping = pixel_snapping;
    this.smoothing     = smoothing;
};

/**
 * @type {DisplayObject}
 */
Bitmap.prototype = Object.create(DisplayObject.prototype);
Bitmap.prototype.constructor = Bitmap;

/**
 * properties
 */
Object.defineProperties(Bitmap.prototype, {
    bitmapData: {
        /**
         * @return {BitmapData|null}
         */
        get: function () {
            return this._$bitmapData;
        },
        /**
         * @param {BitmapData} bitmap_data
         */
        set: function (bitmap_data) {

            // reset
            this._$bitmapData = null;

            if (bitmap_data instanceof BitmapData) {
                this._$bitmapData = bitmap_data;
            }

        }
    },
    pixelSnapping: {
        /**
         * @return {string}
         */
        get: function () {
            return this._$pixelSnapping;
        },
        /**
         *
         * @param {string} pixel_snapping
         */
        set: function (pixel_snapping) {

            switch (pixel_snapping) {

                case PixelSnapping.ALWAYS:
                case PixelSnapping.NEVER:

                    this._$pixelSnapping = pixel_snapping;

                    break;

                default:

                    this._$pixelSnapping = PixelSnapping.AUTO;

                    break;
            }

        }
    },
    smoothing: {
        /**
         * @return {boolean}
         */
        get: function () {
            return this._$smoothing;
        },
        /**
         * @param {boolean} smoothing
         */
        set: function (smoothing) {
            if (typeof smoothing === "boolean") {
                this._$smoothing = smoothing;
            }
        }
    }
});

/**
 * @returns {string}
 */
Bitmap.prototype.toString = function ()
{
    return "[object Bitmap]";
};

/**
 * @param   {array}   matrix
 * @param   {array}   color_transform
 * @param   {boolean} is_clip
 * @param   {boolean} visible
 * @returns void
 */
Bitmap.prototype._$draw = function (matrix, color_transform, is_clip, visible)
{

    // not set
    if (!this.bitmapData) {
        return ;
    }

    // bitmap data
    var image  = this.bitmapData._$context;
    var width  = image.canvas.width|0;
    var height = image.canvas.height|0;

    var alpha = +(color_transform[3] + (color_transform[7] / 255));
    if (visible && alpha && width && height) {

        var ctx = this.parent.stage.player.preContext;

        // color transform
        if (color_transform[0] !== 1 ||
            color_transform[1] !== 1 ||
            color_transform[2] !== 1 ||
            color_transform[4] ||
            color_transform[5] ||
            color_transform[6]
        ) {

            var canvas       = this.$cacheStore.getCanvas();
            canvas.width     = width|0;
            canvas.height    = height|0;

            var context = canvas.getContext("2d");
            context.drawImage(image.canvas, 0, 0, width, height);

            image = this.$generateImageTransform(context, color_transform);

        }

        if ("imageSmoothingEnabled" in ctx) {
            ctx.imageSmoothingEnabled = this.smoothing;
        }

        ctx.setTransform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
        ctx.drawImage(image.canvas, 0, 0, width, height);

        if (is_clip) {
            ctx.clip();
        }

        // reset
        if ("imageSmoothingEnabled" in ctx) {
            ctx.imageSmoothingEnabled = false;
        }
    }

};
/**
 * @param {number}  width
 * @param {number}  height
 * @param {boolean} transparent
 * @param {number}  fill_color
 * @constructor
 */
var BitmapData = function (width, height, transparent, fill_color)
{
    OriginalObject.call(this);

    // init
    this._$rect        = new Rectangle(0, 0, width|0, height|0);
    this._$transparent = (typeof transparent === "boolean") ? transparent : true;

    // origin param
    this._$lock       = false;
    this._$fillColor = fill_color|0;



    // create canvas
    if (this._$rect._$width && this._$rect._$height) {

        var canvas     = this.$cacheStore.getCanvas();
        canvas.width   = this._$rect._$width;
        canvas.height  = this._$rect._$height;
        this._$context = canvas.getContext("2d");

        // fill style
        var color;
        switch (this._$transparent) {

            case true:

                color = this.$uintToARGB(fill_color|0);

                break;

            default:

                color = this.$intToRGBA(fill_color|0, 100);

                break;
        }
        this._$context.fillStyle = "rgba("+ color.R +","+ color.G +","+ color.B +","+ color.A +")";


        this._$context.fillRect(0, 0, canvas.width, canvas.height);
        this._$context.fill();
    }

};

/**
 * extends
 * @type {OriginalObject}
 */
BitmapData.prototype = Object.create(OriginalObject.prototype);
BitmapData.prototype.constructor = BitmapData;

/**
 * properties
 */
Object.defineProperties(BitmapData.prototype, {
    height: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$rect.height;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    rect: {
        /**
         * @return {Rectangle}
         */
        get: function () {
            return this._$rect;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    transparent: {
        /**
         * @return {boolean}
         */
        get: function () {
            return this._$transparent;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    width: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$rect.width;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    }
});

/**
 * @returns {string}
 */
BitmapData.prototype.toString = function ()
{
    return "[object BitmapData]";
};

/**
 * TODO
 * @param   {BitmapData}   source_bitmap_data
 * @param   {Rectangle}    source_rect
 * @param   {Point}        dest_point
 * @param   {BitmapFilter} filter
 * @returns void
 */
BitmapData.prototype.applyFilter = function (source_bitmap_data, source_rect, dest_point, filter)
{

};

/**
 * TODO
 * @returns {BitmapData}
 */
BitmapData.prototype.clone = function ()
{
    return new BitmapData(this.width, this.height, this.transparent, this._$fillColor);
};

/**
 * TODO
 * @param   {Rectangle}      rect
 * @param   {ColorTransform} color_transform
 * @returns void
 */
BitmapData.prototype.colorTransform = function (rect, color_transform)
{

};

/**
 * TODO
 * @param   {BitmapData} other_bitmap_data
 * @returns {object}
 */
BitmapData.prototype.compare = function (other_bitmap_data)
{
    return {};
};

/**
 * TODO
 * @param   {BitmapData} source_bitmap_data
 * @param   {Rectangle}  source_rect
 * @param   {Point}      dest_point
 * @param   {number}     source_channel
 * @param   {number}     dest_channel
 * @returns void
 */
BitmapData.prototype.copyChannel = function (
    source_bitmap_data, source_rect, dest_point,
    source_channel, dest_channel
) {

};

/**
 * TODO
 * @param   {BitmapData} source_bitmap_data
 * @param   {Rectangle}  source_rect
 * @param   {Point}      dest_point
 * @param   {BitmapData} alpha_bitmap_data
 * @param   {Point}      alpha_point
 * @param   {boolean}    merge_alpha
 * @returns void
 */
BitmapData.prototype.copyPixels = function (
    source_bitmap_data, source_rect, dest_point,
    alpha_bitmap_data, alpha_point, merge_alpha
) {

};

/**
 * TODO
 * @returns void
 */
BitmapData.prototype.dispose = function ()
{

};

/**
 * TODO
 * @param   {BitmapData}     source
 * @param   {Matrix}         matrix
 * @param   {ColorTransform} color_transform
 * @param   {string}         blend_mode
 * @param   {Rectangle}      clip_rect
 * @param   {boolean}        smoothing
 * @returns void
 */
BitmapData.prototype.draw = function (
    source, matrix, color_transform,
    blend_mode, clip_rect, smoothing
) {

};

/**
 * TODO
 * @param   {Rectangle} rect
 * @param   {number}    color
 * @returns void
 */
BitmapData.prototype.fillRect = function (rect, color)
{

};

/**
 * TODO
 * @param   {number} x
 * @param   {number} y
 * @param   {number} color
 * @returns void
 */
BitmapData.prototype.floodFill = function (x, y, color)
{

};

/**
 * TODO
 * @param   {Rectangle}    source_rect
 * @param   {BitmapFilter} filter
 * @returns Rectangle
 */
BitmapData.prototype.generateFilterRect = function (source_rect, filter)
{
    return filter._$generateFilterRect(source_rect);
};

/**
 * TODO
 * @param   {number}  mask
 * @param   {number}  color
 * @param   {boolean} find_color
 * @returns {Rectangle}
 */
BitmapData.prototype.getColorBoundsRect = function (mask, color, find_color)
{
    return new Rectangle();
};

/**
 * TODO
 * @param   {number} x
 * @param   {number} y
 * @returns {number}
 */
BitmapData.prototype.getPixel = function (x, y)
{
    return 0;
};

/**
 * TODO
 * @param   {number} x
 * @param   {number} y
 * @returns {number}
 */
BitmapData.prototype.getPixel32 = function (x, y)
{
    return 0;
};

/**
 * TODO
 * @param   {Rectangle} rect
 * @returns {Array}
 */
BitmapData.prototype.getPixels = function (rect)
{
    return [];
};

/**
 * TODO
 * @param   {Rectangle} rect
 * @returns {Vector}
 */
BitmapData.prototype.getVector = function (rect)
{
    return new Vector();
};

/**
 * TODO
 * @param   {Rectangle} hRect
 * @returns {Vector}
 */
BitmapData.prototype.histogram = function (hRect)
{
    return new Vector();
};

/**
 * TODO
 * @param   {Point}  first_point
 * @param   {number} first_alpha_threshold
 * @param   {object} second_object
 * @param   {Point}  second_bitmap_data_point
 * @param   {number} second_alpha_threshold
 * @returns {boolean}
 */
BitmapData.prototype.hitTest = function (
    first_point, first_alpha_threshold, second_object,
    second_bitmap_data_point, second_alpha_threshold
) {
    return true;
};

/**
 * @returns void
 */
BitmapData.prototype.lock = function ()
{
    this._$lock = true;
};

/**
 * TODO
 * @param   {BitmapData} source_bitmap_data
 * @param   {Rectangle}  source_rect
 * @param   {Point}      dest_point
 * @param   {number}     red_multiplier
 * @param   {number}     green_multiplier
 * @param   {number}     blue_multiplier
 * @param   {number}     alpha_multiplier
 * @returns void
 */
BitmapData.prototype.merge = function (
    source_bitmap_data, source_rect, dest_point,
    red_multiplier, green_multiplier, blue_multiplier, alpha_multiplier
) {

};

/**
 * TODO
 * @param   {number}  randomSeed
 * @param   {number}  low
 * @param   {number}  high
 * @param   {number}  channelOptions
 * @param   {boolean} grayScale
 * @returns void
 */
BitmapData.prototype.noise = function (randomSeed, low, high, channelOptions, grayScale)
{

};

/**
 * TODO
 * @param   {BitmapData} source_bitmap_data
 * @param   {Rectangle}  source_rect
 * @param   {Point}      dest_point
 * @param   {array}      red_array
 * @param   {array}      green_array
 * @param   {array}      blue_array
 * @param   {array}      alpha_array
 * @returns void
 */
BitmapData.prototype.paletteMap = function (
    source_bitmap_data, source_rect, dest_point,
    red_array, green_array, blue_array, alpha_array
) {

};

/**
 * TODO
 * @param   {number}  base_x
 * @param   {number}  base_y
 * @param   {number}  num_octaves
 * @param   {number}  random_seed
 * @param   {boolean} stitch
 * @param   {boolean} fractal_noise
 * @param   {number}  channel_options
 * @param   {boolean} gray_scale
 * @param   {array}   offsets
 * @returns void
 */
BitmapData.prototype.perlinNoise = function (
    base_x, base_y, num_octaves, random_seed, stitch,
    fractal_noise, channel_options, gray_scale, offsets
) {

};

/**
 * TODO
 * @param   {BitmapData} source_bitmap_data
 * @param   {Rectangle}  source_rect
 * @param   {Point}      dest_point
 * @param   {number}     random_seed
 * @param   {number}     num_pixels
 * @param   {number}     fill_color
 * @returns {number}
 */
BitmapData.prototype.pixelDissolve = function (
    source_bitmap_data, source_rect, dest_point,
    random_seed, num_pixels, fill_color
) {
    return 0;
};

/**
 * TODO
 * @param   {number} x
 * @param   {number} y
 * @returns void
 */
BitmapData.prototype.scroll = function (x, y)
{

};

/**
 * TODO
 * @param   {number} x
 * @param   {number} y
 * @param   {number} color
 * @returns void
 */
BitmapData.prototype.setPixel = function (x, y, color)
{

};

/**
 * TODO
 * @param   {number} x
 * @param   {number} y
 * @param   {number} color
 * @returns void
 */
BitmapData.prototype.setPixel32 = function (x, y, color)
{

};

/**
 * TODO
 * @param {Rectangle} rect
 * @param {array}     input_byte_array
 * @returns void
 */
BitmapData.prototype.setPixels = function (rect, input_byte_array)
{

};

/**
 * TODO
 * @param   {Rectangle} rect
 * @param   {Vector}    input_vector
 * @returns void
 */
BitmapData.prototype.setVector = function (rect, input_vector)
{

};

/**
 * TODO
 * @param   {BitmapData} source_bitmap_data
 * @param   {Rectangle}  source_rect
 * @param   {Point}      dest_point
 * @param   {string}     operation
 * @param   {number}     threshold
 * @param   {number}     color
 * @param   {number}     mask
 * @param   {boolean}    copy_source
 * @returns {number}
 */
BitmapData.prototype.threshold = function (
    source_bitmap_data, source_rect, dest_point,
    operation, threshold, color, mask, copy_source
) {
    return 0;
};

/**
 * TODO
 * @param   {Rectangle} change_rect
 * @returns void
 */
BitmapData.prototype.unlock = function (change_rect)
{
    this._$lock = false;
};

/**
 * @type {{ALPHA: number, BLUE: number, GREEN: number, RED: number}}
 */
var BitmapDataChannel = {
    "ALPHA": 8,
    "BLUE" : 4,
    "GREEN": 2,
    "RED"  : 1
};
/**
 * @type {{COLORSPACE_4_2_0: string, COLORSPACE_4_2_2: string, COLORSPACE_4_4_4: string, COLORSPACE_AUTO: string}}
 */
var BitmapEncodingColorSpace = {
    "COLORSPACE_4_2_0": "4:2:0",
    "COLORSPACE_4_2_2": "4:2:2",
    "COLORSPACE_4_4_4": "4:4:4",
    "COLORSPACE_AUTO" : "auto"
};
/**
 * @type {{ADD: string, ALPHA: string, DARKEN: string, DIFFERENCE: string, ERASE: string, HARDLIGHT: string, INVERT: string, LAYER: string, LIGHTEN: string, MULTIPLY: string, NORMAL: string, OVERLAY: string, SCREEN: string, SHADER: string, SUBTRACT: string}}
 */
var BlendMode = {
    "ADD"       : "add",
    "ALPHA"     : "alpha",
    "DARKEN"    : "darken",
    "DIFFERENCE": "difference",
    "ERASE"     : "erase",
    "HARDLIGHT" : "hardlight",
    "INVERT"    : "invert",
    "LAYER"     : "layer",
    "LIGHTEN"   : "lighten",
    "MULTIPLY"  : "multiply",
    "NORMAL"    : "normal",
    "OVERLAY"   : "overlay",
    "SCREEN"    : "screen",
    "SHADER"    : "shader",
    "SUBTRACT"  : "subtract"
};
/**
 * @type {{NONE: string, ROUND: string, SQUARE: string}}
 */
var CapsStyle = {
    "NONE"  : "none",
    "ROUND" : "round",
    "SQUARE": "square"
};
/**
 * @type {{DEFAULT: string, OFF: string, ON: string}}
 */
var ColorCorrection = {
    "DEFAULT": "default",
    "OFF"    : "off",
    "ON"     : "on"
};
/**
 * @type {{DEFAULT_OFF: string, DEFAULT_ON: string, UNSUPPORTED: string}}
 */
var ColorCorrectionSupport = {
    "DEFAULT_OFF": "defaultOff",
    "DEFAULT_ON" : "defaultOn",
    "UNSUPPORTED": "unsupported"
};
/**
 * @param {string} name
 * @param {number} frame
 * @constructor
 */
var FrameLabel = function (name, frame)
{
    EventDispatcher.call(this);

    // init
    if (typeof name !== "string") {
        name = name + "";
    }

    this._$name  = name.toLowerCase();
    this._$frame = frame|0;
};

/**
 * extends
 */
FrameLabel.prototype = Object.create(EventDispatcher.prototype);
FrameLabel.prototype.constructor = FrameLabel;

/**
 * properties
 */
Object.defineProperties(FrameLabel.prototype, {
    name: {
        /**
         * @return {string}
         */
        get: function () {
            return this._$name;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    frame: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$frame;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    }
});

/**
 * @returns {string}
 */
FrameLabel.prototype.toString = function ()
{
    return "[object FrameLabel]";
};

/**
 * @type {{LINEAR: string, RADIAL: string}}
 */
var GradientType = {
    "LINEAR": "linear",
    "RADIAL": "radial"
};
/**
 * @constructor
 */
var Graphics = function ()
{
    OriginalObject.call(this);

    // origin param
    this._$id           = graphicsId++;
    this._$keys         = [];
    this._$fills        = [];
    this._$lines        = [];
    this._$fillStyles   = [];
    this._$lineStyles   = [];
    this._$lineStack    = [];
    this._$lineWidth    = 0;
    this._$miterLimit   = 0;
    this._$caps         = null;
    this._$bounds       = null;
    this._$edgeBounds   = null;
    this._$fillBounds   = null;
    this._$lineBounds   = null;
    this._$doFill       = false;
    this._$doLine       = false;
    this._$pointer      = {x: 0, y:0};
    this._$lineStart    = {x: 0, y:0};

    // reset
    this.clear();

    // DisplayObject
    this._$displayObject = null;
};

/**
 * @type {number}
 */
Graphics.MOVE_TO = 0;

/**
 * @type {number}
 */
Graphics.CURVE_TO = 1;

/**
 * @type {number}
 */
Graphics.LINE_TO = 2;

/**
 * @type {number}
 */
Graphics.CUBIC = 3;

/**
 * @type {number}
 */
Graphics.ARC = 4;

/**
 * @type {number}
 */
Graphics.FILL_STYLE = 5;

/**
 * @type {number}
 */
Graphics.STROKE_STYLE = 6;

/**
 * @type {number}
 */
Graphics.END_FILL = 7;

/**
 * @type {number}
 */
Graphics.END_STROKE = 8;

/**
 * @type {number}
 */
Graphics.BEGIN_PATH = 9;

/**
 * @type {number}
 */
Graphics.GRADIENT = 10;

/**
 * @type {number}
 */
Graphics.CLOSE_PATH = 11;


/**
 * extends
 * @type {OriginalObject}
 */
Graphics.prototype = Object.create(OriginalObject.prototype);
Graphics.prototype.constructor = Graphics;

/**
 * @param  {array}   matrix
 * @param  {array}   color_transform
 * @param  {boolean} is_clip
 * @param  {boolean} visible
 * @return void
 */
Graphics.prototype._$draw = function (matrix, color_transform, is_clip, visible)
{
    if (!this._$doFill && !this._$doLine) {
        return ;
    }

    var ctx = this._$displayObject.stage.player.preContext;

    if (is_clip) {

        ctx.setTransform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
        this._$doDraw(ctx, this.$min(matrix[0], matrix[3]), color_transform, is_clip);

        return ;
    }

    var alpha = +(color_transform[3] + (color_transform[7] / 255));
    if (visible && alpha > 0) {

        var xScale = +(this.$sqrt(matrix[0] * matrix[0] + matrix[1] * matrix[1]));
        var yScale = +(this.$sqrt(matrix[2] * matrix[2] + matrix[3] * matrix[3]));
        xScale = +(this.$pow(this.$SQRT2, this.$ceil(this.$log(xScale) / this.$LN2_2 - this.$LOG1P)));
        yScale = +(this.$pow(this.$SQRT2, this.$ceil(this.$log(yScale) / this.$LN2_2 - this.$LOG1P)));

        var bounds = this._$getBounds();
        var xMax   = +bounds.xMax;
        var xMin   = +bounds.xMin;
        var yMax   = +bounds.yMax;
        var yMin   = +bounds.yMin;

        var width  = this.$abs(this.$ceil((xMax - xMin) * xScale))|0;
        var height = this.$abs(this.$ceil((yMax - yMin) * yScale))|0;

        if (width > 0 || height > 0) {

            // get cache
            var cacheKey = this.$cacheStore.generateKey("g_"+ this._$id, color_transform);
            var cache    = this.$cacheStore.getCache(cacheKey);

            // cache is small
            if (cache && (width > cache.canvas.width || height > cache.canvas.height)) {
                cache = null;
            }

            // cache is not
            if (!cache) {

                var canvas    = this.$cacheStore.getCanvas();
                canvas.width  = width;
                canvas.height = height;
                cache         = canvas.getContext("2d");

                // execute
                cache.setTransform(xScale, 0, 0, yScale, -xMin * xScale, -yMin * yScale);
                this._$doDraw(cache, this.$min(xScale, yScale), color_transform, false);

                // set cache
                this._$keys[cacheKey] = 1;
                this.$cacheStore.setCache(cacheKey, cache);

            }

            // draw
            var m = this.$multiplicationMatrix(matrix, [1 / xScale, 0, 0, 1 / yScale, xMin, yMin]);
            ctx.setTransform(m[0], m[1], m[2], m[3], m[4], m[5]);

            if (this.$isAndroid4x && !this.$isChrome) {

                ctx.fillStyle = stage.context.createPattern(cache.canvas, "no-repeat");
                ctx.fillRect(0, 0, width, height);

            } else {

                ctx.drawImage(cache.canvas, 0, 0, width, height);

            }

        }
    }
};

/**
 * @param  {CanvasRenderingContext2D} ctx
 * @param  {number}                   min_scale
 * @param  {array}                    color_transform
 * @param  {boolean}                  is_clip
 * @return void
 */
Graphics.prototype._$doDraw = function (ctx, min_scale, color_transform, is_clip)
{

    // build command
    if (this._$command === null) {

        this._$command = this._$buildCommand();

    }

    // execute
    this._$command(ctx, color_transform, is_clip, min_scale);

    
    // clip or filter and blend
    if (is_clip) {

        ctx.clip();
    }

};

/**
 * @return {Function}
 */
Graphics.prototype._$buildCommand = function ()
{

    var length, idx;

    var recodes = [];

    // fill recode
    length = this._$fills.length;
    if (length) {

        idx = 0;
        while (length > idx) {

            recodes[recodes.length] = this._$fills[idx];

            idx = (idx + 1)|0;
        }

        this._$fills = [];

    }


    // fill style
    if (this._$fillStyles.length) {

        recodes[recodes.length] = this._$fillStyles.pop();

        recodes[recodes.length] = [Graphics.END_FILL];

        // reset
        this._$fillStyles = [];

    }


    // line recode
    length = this._$lines.length;
    if (length) {

        idx = 0;
        while (length > idx) {

            recodes[recodes.length] = this._$lines[idx];

            idx = (idx + 1)|0;
        }

        this._$lines = [];
    }


    // line style
    length = this._$lineStyles.length;
    if (length) {

        idx = 0;
        while (length > idx) {

            var lineStyle = this.$cloneArray(this._$lineStyles[idx]);

            recodes[recodes.length] = lineStyle;

            switch (lineStyle[0]) {

                case Graphics.STROKE_STYLE:

                    recodes[recodes.length] = [Graphics.END_STROKE];

                    break;

            }

            idx = (idx + 1)|0;
        }

        // reset
        this._$lineWidth  = 0;
        this._$miterLimit = 0;
        this._$caps       = null;
        this._$lineStyles = [];
        this._$lineStack  = [];

    }

    // reset
    this._$pointer   = {x:0, y:0};
    this._$lineStart = {x:0, y:0};

    return this.$vtc.buildCommand(recodes);

};

/**
 * @param  {number} x
 * @param  {number} y
 * @param  {array}  matrix
 * @return {boolean}
 */
Graphics.prototype._$hit = function (x, y, matrix)
{
    if (this._$getBounds() !== null) {

        var ctx = this._$displayObject.stage.player.hitContext;

        ctx.setTransform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);

        // build command
        if (this._$command === null) {

            this._$command = this._$buildCommand();

        }

        this._$command(ctx, [1,1,1,1,0,0,0,0], true, this.$min(matrix[0], matrix[3]));

        if (ctx.isPointInPath(x, y)) {
            return true;
        }

        if ("isPointInStroke" in ctx) {
            if (ctx.isPointInStroke(x, y)) {
                return true;
            }
        }

    }

    return false;
};

/**
 * @param  {number} x
 * @param  {number} y
 * @return void
 */
Graphics.prototype._$setEdgeBounds = function (x, y)
{
    if (this._$miterLimit) {
        this._$lineStack[this._$lineStack.length] = { x: x, y: y };
    }

    var length = this._$lineStack.length|0;
    if (length) {

        var obj;
        var idx = 0;
        while (length > (idx + 3)) {

            // point1
            obj = this._$lineStack[idx];
            var x1 = obj.x;
            var y1 = obj.y;

            // point2
            obj = this._$lineStack[idx + 1];
            var x2 = obj.x;
            var y2 = obj.y;

            // point3
            obj = this._$lineStack[idx + 2];
            var x3 = obj.x;
            var y3 = obj.y;

            // calc
            var xa = x1 - x2;
            var ya = y1 - y2;
            var xc = x3 - x2;
            var yc = y3 - y2;

            // inner
            var a = (xa * xc) + (ya * yc);
            var b = (xa * xa) + (ya * ya);
            var c = (xc * xc) + (yc * yc);

            // square root
            var root = this.$sqrt(this.$abs(b * c));
            if (!root) {
                root = 1;
            }

            // console.log("angle", this.$acos(a / root) * 180 / this.$PI);
            var distance = (this._$lineWidth / 2) / this.$tan(this.$acos(a / root) / 2);


            var radian = this.$atan2(y2 - y1, x2 - x1) * 2;
            var angle  = radian * 180 / this.$PI;
            var sign   = (angle < 0) ? -1 : 1;
            // console.log("vec", angle);

            var mx = x2 + this.$cos(radian) * distance;
            var my = y2 + this.$sin(radian) * distance * sign;
            // console.log(
            //     "cos", this.$cos(radian),
            //     "sin", this.$sin(radian),
            //     "x1", x1/20, "x2", x2/20, "mx", mx/20,
            //     "y1", y1/20, "y2", y2/20, "my", my/20,
            //     "radian", radian,
            //     "distance", distance/20,
            //     "sign", sign
            // );


            // set edge bounds
            if (this._$lineBounds === null) {

                var no = this.$Number.MAX_VALUE;
                this._$lineBounds = {xMin: no, xMax: -no, yMin: no, yMax: -no};

            }

            this._$lineBounds = {
                xMin: this.$min(this._$lineBounds.xMin, mx),
                xMax: this.$max(this._$lineBounds.xMax, mx),
                yMin: this.$min(this._$lineBounds.yMin, my),
                yMax: this.$max(this._$lineBounds.yMax, my)
            };


            idx = (idx + 1)|0;
        }

        // delete stack
        if (idx) {
            this._$lineStack.shift();
        }

    }
};

/**
 * @return {null|object}
 */
Graphics.prototype._$getBounds = function ()
{

    if (this._$fillBounds === null && this._$lineBounds === null) {
        return null;
    }

    // build bounds
    if (this._$bounds === null) {

        // init
        var no = this.$Number.MAX_VALUE;
        this._$bounds = {
            xMin: no,
            xMax: -no,
            yMin: no,
            yMax: -no
        };

        // fill bounds
        if (this._$fillBounds !== null) {

            this._$bounds = {
                xMin: this.$min(this._$bounds.xMin, this._$fillBounds.xMin),
                xMax: this.$max(this._$bounds.xMax, this._$fillBounds.xMax),
                yMin: this.$min(this._$bounds.yMin, this._$fillBounds.yMin),
                yMax: this.$max(this._$bounds.yMax, this._$fillBounds.yMax)
            };

        }

        // line bounds
        if (this._$lineBounds !== null) {

            this._$bounds = {
                xMin: this.$min(this._$bounds.xMin, this._$lineBounds.xMin),
                xMax: this.$max(this._$bounds.xMax, this._$lineBounds.xMax),
                yMin: this.$min(this._$bounds.yMin, this._$lineBounds.yMin),
                yMax: this.$max(this._$bounds.yMax, this._$lineBounds.yMax)
            };

        }

    }

    return this._$bounds;
};

/**
 * @param {number} x
 * @param {number} y
 */
Graphics.prototype._$setBounds = function (x, y)
{
    this._$setFillBounds(x, y);
    this._$setLineBounds(x, y);
};

/**
 * @param  {number} x
 * @param  {number} y
 * @return void
 */
Graphics.prototype._$setFillBounds = function (x, y)
{
    // init
    if (this._$fillBounds === null) {

        var no = this.$Number.MAX_VALUE;
        this._$fillBounds = {xMin: no, xMax: -no, yMin: no, yMax: -no};

    }

    this._$fillBounds = {
        xMin: this.$min(this._$fillBounds.xMin, x),
        xMax: this.$max(this._$fillBounds.xMax, x),
        yMin: this.$min(this._$fillBounds.yMin, y),
        yMax: this.$max(this._$fillBounds.yMax, y)
    };
};

/**
 * @param  {number} x
 * @param  {number} y
 * @return void
 */
Graphics.prototype._$setLineBounds = function (x, y)
{
    // init
    if (this._$lineBounds === null) {

        var no = this.$Number.MAX_VALUE;
        this._$lineBounds = {xMin: no, xMax: -no, yMin: no, yMax: -no};

    }

    // vector
    var radian1 = this.$atan2(y - this._$pointer.y, x - this._$pointer.x);
    var radian2 = this.$atan2(this._$pointer.y - y, this._$pointer.x - x);

    // point
    var half      = this._$lineWidth / 2;
    var radian270 = 270 * this.$PI / 180;
    var radian90  = 90  * this.$PI / 180;

    // default
    var pointX1 = x;
    var pointY1 = y;
    var pointX2 = this._$pointer.x;
    var pointY2 = this._$pointer.y;

    // square
    if (this._$caps === CapsStyle.SQUARE) {
        pointX1 = x + this.$cos(radian1) * half;
        pointY1 = y + this.$sin(radian1) * half;
        pointX2 = this._$pointer.x + this.$cos(radian2) * half;
        pointY2 = this._$pointer.y + this.$sin(radian2) * half;
    }

    // correction
    var x1 = pointX1 + this.$cos(radian1 + radian270) * half;
    var x2 = pointX1 + this.$cos(radian1 + radian90)  * half;
    var y1 = pointY1 + this.$sin(radian1 + radian270) * half * -1;
    var y2 = pointY1 + this.$sin(radian1 + radian90)  * half * -1;
    var x3 = pointX2 + this.$cos(radian2 + radian270) * half;
    var x4 = pointX2 + this.$cos(radian2 + radian90)  * half;
    var y3 = pointY2 + this.$sin(radian2 + radian270) * half * -1;
    var y4 = pointY2 + this.$sin(radian2 + radian90)  * half * -1;

    // set
    this._$lineBounds = {
        xMin: this.$min(this._$lineBounds.xMin, this.$min(x1, this.$min(x2, this.$min(x3, x4)))),
        xMax: this.$max(this._$lineBounds.xMax, this.$max(x1, this.$max(x2, this.$max(x3, x4)))),
        yMin: this.$min(this._$lineBounds.yMin, this.$min(y1, this.$min(y2, this.$min(y3, y4)))),
        yMax: this.$max(this._$lineBounds.yMax, this.$max(y1, this.$max(y2, this.$max(y3, y4))))
    };
};

/**
 * @return {null|object}
 */
Graphics.prototype._$getRect = function ()
{
    if (this._$edgeBounds === null) {

        // init
        var no = this.$Number.MAX_VALUE;
        this._$edgeBounds = {
            xMin: no,
            xMax: -no,
            yMin: no,
            yMax: -no
        };

        // set
        this._$edgeBounds = {
            xMin: this.$min(this._$edgeBounds.xMin, this._$fillBounds.xMin),
            xMax: this.$max(this._$edgeBounds.xMax, this._$fillBounds.xMax),
            yMin: this.$min(this._$edgeBounds.yMin, this._$fillBounds.yMin),
            yMax: this.$max(this._$edgeBounds.yMax, this._$fillBounds.yMax)
        };

    }

    return this._$edgeBounds;
};

/**
 * @return void
 */
Graphics.prototype._$restart = function ()
{
    this._$command    = null;
    this._$bounds     = null;
    this._$edgeBounds = null;

    // cache restart
    var keys = this._$keys;
    for (var idx in keys) {

        if (!keys.hasOwnProperty(idx)) {
            continue;
        }

        this.$cacheStore.removeCache(keys[idx]);
    }

    // cache key reset
    this._$keys = [];
};

/**
 * @return void
 */
Graphics.prototype._$beginFill = function ()
{

    this.endFill();

    this._$fillStyles = [];

};

/**
 * @return void
 */
Graphics.prototype._$beginLine = function ()
{

    var length = this._$lineStyles.length;
    if (length) {

        var idx = 0;
        while (length > idx) {

            var lineStyle = this.$cloneArray(this._$lineStyles[idx]);

            this._$lines[this._$lines.length] = lineStyle;

            switch (lineStyle[0]) {

                case Graphics.STROKE_STYLE:

                    this._$lines[this._$lines.length] = [Graphics.END_STROKE];

                    break;

            }

            idx = (idx + 1)|0;
        }

    }

    this._$lineStyles = [];
    this._$lineStack  = [];
};

/**
 * @return void
 */
Graphics.prototype._$closeLine = function ()
{
    this._$lines[this._$lines.length] = [Graphics.CLOSE_PATH];

    var clone = this._$lineStack[0];
    this._$setEdgeBounds(clone.x, clone.y);
    this._$setEdgeBounds(this._$lineStart.x, this._$lineStart.y);

    // reset
    this._$lineStack = [{ x: this._$lineStart.x, y: this._$lineStart.y }];
};

/**
 * @param  {string} style
 * @param  {string} type
 * @param  {array}  colors
 * @param  {array}  alphas
 * @param  {array}  ratios
 * @param  {Matrix} matrix
 * @param  {string} spread_method
 * @param  {string} interpolation_method
 * @param  {number} focal_point_ratio
 * @return {array}
 */
Graphics.prototype._$beginGradient = function (
    style, type, colors, alphas, ratios, matrix,
    spread_method, interpolation_method, focal_point_ratio
) {

    // start gradient
    var data = [];
    data[data.length] = Graphics.GRADIENT;

    // matrix
    data[data.length] = (matrix instanceof Matrix) ? matrix._$matrix : [1, 0, 0, 1, 0, 0];

    // focal point ratio
    if (typeof focal_point_ratio !== "number") {
        focal_point_ratio = 0;
    }

    if (focal_point_ratio > 1) {
        focal_point_ratio = 1;
    }

    if (focal_point_ratio < -1) {
        focal_point_ratio = -1;
    }

    // set focal point ratio
    data[data.length] = focal_point_ratio;

    // type
    data[data.length] = type;

    // style
    data[data.length] = style;

    // interpolation_method
    switch (interpolation_method) {

        case InterpolationMethod.LINEAR_RGB:
            break;

        default:
            interpolation_method = InterpolationMethod.RGB;
            break;
    }

    data[data.length] = interpolation_method;

    // length
    var length = this.$min(this.$min(colors.length, alphas.length), ratios.length);
    data[data.length] = length;

    var idx = 0;
    while (length > idx) {

        data[data.length] = colors[idx];
        data[data.length] = alphas[idx] * 100;
        data[data.length] = ratios[idx] / 255;

        idx = (idx + 1)|0;

    }

    return data;

};

/**
 * @return {string}
 */
Graphics.prototype.toString = function ()
{
    return "[object Graphics]";
};

/**
 * TODO
 * @param {BitmapData} bitmap
 * @param {Matrix}     matrix
 * @param {boolean}    repeat
 * @param {boolean}    smooth
 */
Graphics.prototype.beginBitmapFill = function (bitmap, matrix, repeat, smooth)
{
    // init fill style
    this._$beginFill();


    // restart
    this._$restart();
};

/**
 * @param  {string|number} color
 * @param  {number} alpha
 * @return {Graphics}
 */
Graphics.prototype.beginFill = function (color, alpha)
{

    if (typeof color === "string") {
        color = this.$colorStringToInt(color);
    }

    // alpha
    alpha = +alpha;
    switch (typeof alpha) {
        case "number":

            alpha = alpha * 100;
            if (alpha > 100) {
                alpha = 100;
            }

            break;

        default:

            alpha = 100;
            break;
    }

    // init fill style
    this._$beginFill();

    // beginPath
    this._$fills[this._$fills.length] = [Graphics.BEGIN_PATH];

    // add Fill Style
    var rgba = this.$intToRGBA(color, alpha);
    this._$fillStyles[this._$fillStyles.length] = [Graphics.FILL_STYLE, rgba.R, rgba.G, rgba.B, rgba.A];

    // restart
    this._$restart();

    // start
    this._$doFill = true;

    return this;
};

/**
 * @param  {string} type
 * @param  {array}  colors
 * @param  {array}  alphas
 * @param  {array}  ratios
 * @param  {Matrix} matrix
 * @param  {string} spread_method
 * @param  {string} interpolation_method
 * @param  {number} focal_point_ratio
 * @return {Graphics}
 */
Graphics.prototype.beginGradientFill = function (
    type, colors, alphas, ratios, matrix,
    spread_method, interpolation_method, focal_point_ratio
) {

    if (!this.$isArray(colors) || !this.$isArray(alphas) || !this.$isArray(ratios)) {
        return this;
    }

    // init fill style
    this._$beginFill();

    // beginPath
    this._$fills[this._$fills.length] = [Graphics.BEGIN_PATH];

    // build gradient data
    this._$fillStyles[this._$fillStyles.length] = this._$beginGradient(
        "fill",
        type, colors, alphas, ratios, matrix,
        spread_method, interpolation_method, focal_point_ratio
    );

    // start
    this._$doFill = true;

    // restart
    this._$restart();

    return this;

};

/**
 * TODO
 * @param  {Shader} shader
 * @param  {Matrix} matrix
 * @return void
 */
Graphics.prototype.beginShaderFill = function (shader, matrix)
{
    // init fill style
    this._$beginFill();



    // restart
    this._$restart();
};

/**
 * @return void
 */
Graphics.prototype.clear = function ()
{
    // origin param clear
    this._$fills        = [];
    this._$lines        = [];
    this._$fillStyles   = [];
    this._$lineStyles   = [];
    this._$lineWidth    = 0;
    this._$caps         = null;
    this._$fillBounds   = null;
    this._$lineBounds   = null;
    this._$doFill       = false;
    this._$doLine       = false;
    this._$pointer      = {x:0, y:0};
    this._$lineStart    = {x:0, y:0};

    // restart
    this._$restart();
};

/**
 * @param  {Graphics} source_graphics
 * @return void
 */
Graphics.prototype.copyFrom = function (source_graphics)
{
    if (source_graphics instanceof Graphics) {

        this.clear();

        // recodes
        this._$fills      = this.$cloneArray(source_graphics._$fills);
        this._$lines      = this.$cloneArray(source_graphics._$lines);
        this._$fillStyles = this.$cloneArray(source_graphics._$fillStyles);
        this._$lineStyles = this.$cloneArray(source_graphics._$lineStyles);
        this._$lineWidth  = source_graphics._$lineWidth;
        this._$miterLimit = source_graphics._$miterLimit;
        this._$caps       = source_graphics._$caps;

        // fill bounds
        if (source_graphics._$fillBounds) {
            this._$fillBounds = {
                xMin: source_graphics._$fillBounds.xMin,
                xMax: source_graphics._$fillBounds.xMax,
                yMin: source_graphics._$fillBounds.yMin,
                yMax: source_graphics._$fillBounds.yMax
            };
        }

        // line bounds
        if (source_graphics._$lineBounds) {
            this._$lineBounds = {
                xMin: source_graphics._$lineBounds.xMin,
                xMax: source_graphics._$lineBounds.xMax,
                yMin: source_graphics._$lineBounds.yMin,
                yMax: source_graphics._$lineBounds.yMax
            };
        }

        // pointer
        this._$pointer.x = source_graphics._$pointer.x;
        this._$pointer.y = source_graphics._$pointer.y;

        // line start point
        this._$lineStart.x = source_graphics._$lineStart.x;
        this._$lineStart.y = source_graphics._$lineStart.y;

        // flag
        this._$doFill = source_graphics._$doFill;
        this._$doLine = source_graphics._$doLine;

    }
};

/**
 * @param  {number} control_x1
 * @param  {number} control_y1
 * @param  {number} control_x2
 * @param  {number} control_y2
 * @param  {number} anchor_x
 * @param  {number} anchor_y
 * @return {Graphics}
 */
Graphics.prototype.cubicCurveTo = function (
    control_x1, control_y1, control_x2, control_y2,
    anchor_x, anchor_y
) {

    // valid
    if (typeof control_x1 !== "number") {
        control_x1 = control_x1|0;
    }

    if (typeof control_y1 !== "number") {
        control_y1 = control_y1|0;
    }

    if (typeof control_x2 !== "number") {
        control_x2 = control_x2|0;
    }

    if (typeof control_y2 !== "number") {
        control_y2 = control_y2|0;
    }

    if (typeof anchor_x !== "number") {
        anchor_x = anchor_x|0;
    }

    if (typeof anchor_y !== "number") {
        anchor_y = anchor_y|0;
    }

    control_x1 = +(control_x1 * 20);
    control_y1 = +(control_y1 * 20);
    control_x2 = +(control_x2 * 20);
    control_y2 = +(control_y2 * 20);
    anchor_x   = +(anchor_x   * 20);
    anchor_y   = +(anchor_y   * 20);

    // set bounds
    this._$setBounds(anchor_x,     anchor_y);
    this._$setBounds(control_x1,   control_y1);
    this._$setBounds(control_x2,   control_y2);
    this._$setEdgeBounds(anchor_x, anchor_y);

    if (this._$doFill || this._$doLine) {

        var data = [
            Graphics.CUBIC,
            control_x1, control_y1,
            control_x2, control_y2,
            anchor_x, anchor_y
        ];

        if (this._$doFill) {
            this._$fills[this._$fills.length] = data;
        }

        if (this._$doLine) {
            this._$lines[this._$lines.length] = data;

            // line close
            if (this._$lineStart.x === anchor_x && this._$lineStart.y === anchor_y) {
                this._$closeLine();
            }
        }

    }

    this._$pointer = {x: anchor_x, y: anchor_y};

    // restart
    this._$restart();

    return this;
};

/**
 * @param  {number} control_x
 * @param  {number} control_y
 * @param  {number} anchor_x
 * @param  {number} anchor_y
 * @return {Graphics}
 */
Graphics.prototype.curveTo = function (control_x, control_y, anchor_x, anchor_y)
{

    // valid
    if (typeof control_x !== "number") {
        control_x = control_x|0;
    }

    if (typeof control_y !== "number") {
        control_y = control_y|0;
    }

    if (typeof anchor_x !== "number") {
        anchor_x = anchor_x|0;
    }

    if (typeof anchor_y !== "number") {
        anchor_y = anchor_y|0;
    }

    control_x = +(control_x * 20);
    control_y = +(control_y * 20);
    anchor_x  = +(anchor_x  * 20);
    anchor_y  = +(anchor_y  * 20);

    this._$setBounds(control_x,    control_y);
    this._$setBounds(anchor_x,     anchor_y);
    this._$setEdgeBounds(anchor_x, anchor_y);

    if (this._$doFill || this._$doLine) {

        var data = [Graphics.CURVE_TO, control_x, control_y, anchor_x, anchor_y];

        if (this._$doFill) {
            this._$fills[this._$fills.length] = data;
        }

        if (this._$doLine) {
            this._$lines[this._$lines.length] = data;

            // line close
            if (this._$lineStart.x === anchor_x && this._$lineStart.y === anchor_y) {
                this._$closeLine();
            }
        }

    }

    this._$pointer = {x: anchor_x, y: anchor_y};

    // restart
    this._$restart();

    return this;
};

/**
 * @param  {number} x
 * @param  {number} y
 * @param  {number} radius
 * @return {Graphics}
 */
Graphics.prototype.drawCircle = function (x, y, radius)
{
    // valid
    if (typeof x !== "number") {
        x = x|0;
    }

    if (typeof y !== "number") {
        y = y|0;
    }

    if (typeof radius !== "number") {
        radius = radius|0;
    }

    x      = +(x * 20);
    y      = +(y * 20);
    radius = +(radius * 20);

    this._$setBounds(x - radius, y - radius);
    this._$setBounds(x + radius, y + radius);

    if (this._$doFill || this._$doLine) {

        var data = [Graphics.ARC, x, y, radius];

        // fills
        if (this._$doFill) {
            this._$fills[this._$fills.length] = data;
        }

        // lines
        if (this._$doLine) {
            this._$lines[this._$lines.length] = data;
        }

    }

    this._$pointer = {x: x, y: y};

    // restart
    this._$restart();

    return this;
};

/**
 * @param  {number} x
 * @param  {number} y
 * @param  {number} width
 * @param  {number} height
 * @return {Graphics}
 */
Graphics.prototype.drawEllipse = function (x, y, width, height)
{

    // valid
    if (typeof x !== "number") {
        x = x|0;
    }

    if (typeof y !== "number") {
        y = y|0;
    }

    if (typeof width !== "number") {
        width = width|0;
    }

    if (typeof height !== "number") {
        height = height|0;
    }

    var hw = +(width  / 2); // half width
    var hh = +(height / 2); // half height
    var x0 = +(x + hw);
    var y0 = +(y + hh);
    var x1 = +(x + width);
    var y1 = +(y + height);
    var c  = +(4 / 3 * (this.$SQRT2 - 1));
    var cw = +(c * hw);
    var ch = +(c * hh);

    this.moveTo(x0, y);
    this.cubicCurveTo(x0 + cw, y,       x1,      y0 - ch, x1, y0);
    this.cubicCurveTo(x1,      y0 + ch, x0 + cw, y1,      x0, y1);
    this.cubicCurveTo(x0 - cw, y1,      x,       y0 + ch, x,  y0);
    this.cubicCurveTo(x,       y0 - ch, x0 - cw, y,       x0, y );

    return this;

};

/**
 * TODO
 * @param {*} graphics_data
 */
Graphics.prototype.drawGraphicsData = function (graphics_data)
{
};

/**
 * @param  {Vector} commands
 * @param  {Vector} data
 * @param  {string} winding
 * @return {Graphics}
 */
Graphics.prototype.drawPath = function (commands, data, winding)
{

    if (commands instanceof Vector &&
        data instanceof Vector &&
        (this._$doFill || this._$doLine)
    ) {

        switch (winding) {

            case GraphicsPathWinding.EVEN_ODD:
            case GraphicsPathWinding.NON_ZERO:
                break;

            default:
                winding = GraphicsPathWinding.EVEN_ODD;
                break;

        }

        var idx = 0;
        var length = commands.length;
        if (length) {

            var no = 0;
            while (length > no) {

                switch (commands[no]) {

                    case GraphicsPathCommand.NO_OP:

                        break;

                    case GraphicsPathCommand.MOVE_TO:

                        this.moveTo(data[idx], data[idx + 1]);

                        idx = (idx + 2)|0;

                        break;

                    case GraphicsPathCommand.LINE_TO:

                        this.lineTo(data[idx], data[idx + 1]);

                        idx = (idx + 2)|0;

                        break;

                    case GraphicsPathCommand.CURVE_TO:


                        this.curveTo(data[idx], data[idx + 1], data[idx + 2], data[idx + 3]);

                        idx = (idx + 4)|0;

                        break;

                    case GraphicsPathCommand.WIDE_MOVE_TO:

                        break;

                    case GraphicsPathCommand.WIDE_LINE_TO:

                        break;

                    case GraphicsPathCommand.CUBIC_CURVE_TO:

                        this.cubicCurveTo(
                            data[idx], data[idx + 1], data[idx + 2],
                            data[idx + 3], data[idx + 4], data[idx + 5]
                        );

                        idx = (idx + 6)|0;

                        break;

                }

                no = (no + 1)|0;
            }

            this.endFill();

        }

    }

    return this;

};

/**
 * @param  {number} x
 * @param  {number} y
 * @param  {number} width
 * @param  {number} height
 * @return {Graphics}
 */
Graphics.prototype.drawRect = function (x, y, width, height)
{

    // valid
    if (typeof x !== "number") {
        x = x|0;
    }

    if (typeof y !== "number") {
        y = y|0;
    }

    if (typeof width !== "number") {
        width = width|0;
    }

    if (typeof height !== "number") {
        height = height|0;
    }

    this
        .moveTo(x,         y)
        .lineTo(x + width, y)
        .lineTo(x + width, y + height)
        .lineTo(x,         y + height)
        .lineTo(x,         y);

    return this;

};

/**
 * @param  {number} x
 * @param  {number} y
 * @param  {number} width
 * @param  {number} height
 * @param  {number} ellipse_width
 * @param  {number} ellipse_height
 * @return {Graphics}
 */
Graphics.prototype.drawRoundRect = function (x, y, width, height, ellipse_width, ellipse_height)
{

    // valid
    if (typeof x !== "number") {
        x = x|0;
    }

    if (typeof y !== "number") {
        y = y|0;
    }

    if (typeof width !== "number") {
        width = width|0;
    }

    if (typeof height !== "number") {
        height = height|0;
    }

    if (typeof ellipse_width !== "number") {
        ellipse_width = ellipse_width|0;
    }

    if (typeof ellipse_height !== "number") {
        ellipse_height = ellipse_height|0;
    }

    var hew = +(ellipse_width / 2);
    var heh = +(ellipse_height / 2);
    var c   = +(4 / 3 * (this.$SQRT2 - 1));
    var cw  = +(c * hew);
    var ch  = +(c * heh);

    var dx0 = +(x   + hew);
    var dx1 = +(x   + width);
    var dx2 = +(dx1 - hew);

    var dy0 = +(y   + heh);
    var dy1 = +(y   + height);
    var dy2 = +(dy1 - heh);

    this.moveTo(dx0, y);
    this.lineTo(dx2, y);
    this.cubicCurveTo(dx2 + cw, y, dx1, dy0 - ch, dx1, dy0);
    this.lineTo(dx1, dy2);
    this.cubicCurveTo(dx1, dy2 + ch, dx2 + cw, dy1, dx2, dy1);
    this.lineTo(dx0, dy1);
    this.cubicCurveTo(dx0 - cw, dy1, x, dy2 + ch, x, dy2);
    this.lineTo(x, dy0);
    this.cubicCurveTo(x, dy0 - ch, dx0 - cw, y, dx0, y);

    return this;
};

/**
 * TODO
 * @param  {Vector} vertices
 * @param  {Vector} indices
 * @param  {Vector} uvt_data
 * @param  {string} culling
 * @return {Graphics}
 */
Graphics.prototype.drawTriangles = function (vertices, indices, uvt_data, culling)
{
    if (vertice instanceof Vector && (this._$doFill || this._$doLine)) {

        var length = vertices.length;
        if (length && length % 3 === 0) {

            var i = 0;
            var count = 0;
            if (indices) {

                length = indices.length;
                if (length && length % 3 === 0) {
                    i = 0;
                    while (i < length) {
                        var idx = indices[i];
                        if (count === 0) {
                            this.moveTo(vertices[idx], vertices[idx + 1]);
                        } else {
                            this.lineTo(vertices[idx], vertices[idx + 1]);
                        }

                        count++;
                        if (count % 3 === 0) {
                            count = 0;
                        }

                        i = (i + 1) | 0;
                    }
                }

            } else {

                i = 0;
                while (i < length) {
                    if (count === 0) {
                        this.moveTo(vertices[i++], vertices[i]);
                    } else {
                        this.lineTo(vertices[i++], vertices[i]);
                    }

                    count++;
                    if (count % 3 === 0) {
                        count = 0;
                    }

                    i = (i + 1) | 0;
                }

            }
        }
    }

    // restart
    this._$restart();

    return this;

};

/**
 * @return {Graphics}
 */
Graphics.prototype.endFill = function ()
{
    if (this._$doFill) {

        if (this._$fillStyles.length) {

            var fillStyle = this._$fillStyles.pop();

            this._$fills[this._$fills.length] = fillStyle;

            switch (fillStyle[0]) {

                case Graphics.FILL_STYLE:

                    this._$fills[this._$fills.length] = [Graphics.END_FILL];

                    break;

            }
        }
    }

    // restart
    this._$restart();

    return this;
};

/**
 * TODO
 * @param {BitmapData} bitmap
 * @param {Matrix}     matrix
 * @param {boolean}    repeat
 * @param {boolean}    smooth
 */
Graphics.prototype.lineBitmapStyle = function (bitmap, matrix, repeat, smooth)
{

    // restart
    this._$restart();
};

/**
 * @param {string} type
 * @param {array}  colors
 * @param {array}  alphas
 * @param {array}  ratios
 * @param {Matrix} matrix
 * @param {string} spread_method
 * @param {string} interpolation_method
 * @param {number} focal_point_ratio
 */
Graphics.prototype.lineGradientStyle = function (
    type, colors, alphas, ratios, matrix,
    spread_method, interpolation_method, focal_point_ratio
) {

    if (!this.$isArray(colors) || !this.$isArray(alphas) || !this.$isArray(ratios)) {
        return this;
    }

    // beginPath
    this._$doLine = true;
    this._$lines[this._$lines.length] = [Graphics.BEGIN_PATH];
    this._$lines[this._$lines.length] = [Graphics.MOVE_TO, this._$pointer.x, this._$pointer.y];
    this._$setBounds(this._$pointer.x, this._$pointer.y);

    // build gradient data
    this._$lineStyles[this._$lineStyles.length] = this._$beginGradient(
        "line",
        type, colors, alphas, ratios, matrix,
        spread_method, interpolation_method, focal_point_ratio
    );

    // restart
    this._$restart();

    return this;

};

/**
 * @param  {number}  thickness
 * @param  {number}  color
 * @param  {number}  alpha
 * @param  {boolean} pixel_hinting
 * @param  {string}  scale_mode
 * @param  {string}  caps
 * @param  {string}  joints
 * @param  {number}  miter_limit
 * @return {Graphics}
 */
Graphics.prototype.lineStyle = function (
    thickness, color, alpha,  pixel_hinting,
    scale_mode, caps,  joints, miter_limit
) {

    switch (arguments.length) {

        // end line style
        case 0:

            // init
            this._$beginLine();

            // reset
            this._$lineWidth  = 0;
            this._$miterLimit = 0;
            this._$caps       = null;
            this._$doLine     = false;

            break;

        // start line style
        default:

            // init
            this._$beginLine();


            if (typeof color === "string") {
                color = this.$colorStringToInt(color);
            }

            // alpha
            alpha = +alpha;
            switch (typeof alpha) {
                case "number":

                    alpha = alpha * 100;
                    if (alpha > 100) {
                        alpha = 100;
                    }

                    break;

                default:

                    alpha = 100;
                    break;
            }

            // build rgba
            var rgba = this.$intToRGBA(color, alpha);


            // line width
            if (typeof thickness !== "number") {
                thickness = thickness|0;
            }

            if (thickness < 0) {
                thickness = 0;
            }

            if (thickness > 255) {
                thickness = 255;
            }
            thickness = thickness * 20;


            // line cap
            switch (caps) {
                case CapsStyle.NONE:
                    caps = "butt";
                    break;
                case CapsStyle.SQUARE:
                    break;
                default:
                    caps = CapsStyle.ROUND;
                    break;
            }
            this._$caps = caps;

            // line join
            switch (joints) {
                case JointStyle.BEVEL:
                case JointStyle.MITER:
                    break;
                default:
                    joints = JointStyle.ROUND;
                    break;
            }


            // miter limit
            if (miter_limit === undefined) {
                miter_limit = 10;
            }

            if (typeof miter_limit !== "number") {
                miter_limit = miter_limit|0;
            }

            if (miter_limit < 1) {
                miter_limit = 1;
            }

            if (miter_limit > 255) {
                miter_limit = 255;
            }

            // set miter limit
            if (joints === JointStyle.MITER) {
                this._$miterLimit = miter_limit;
            }


            // scale flag
            switch (scale_mode) {
                case LineScaleMode.HORIZONTAL:
                case LineScaleMode.NONE:
                case LineScaleMode.NORMAL:
                case LineScaleMode.VERTICAL:
                    break;
                default:
                    scale_mode = LineScaleMode.NORMAL;
                    break;
            }


            // set data
            var data = [Graphics.STROKE_STYLE,
                rgba.R, rgba.G, rgba.B, rgba.A,
                thickness, caps, joints, miter_limit
            ];


            // set style
            this._$lineWidth  = thickness;
            this._$lineStyles[this._$lineStyles.length] = data;

            // init line
            this._$doLine = true;
            this._$lines[this._$lines.length] = [Graphics.BEGIN_PATH];
            this._$lines[this._$lines.length] = [Graphics.MOVE_TO, this._$pointer.x, this._$pointer.y];

            // line start point
            this._$lineStart.x = this._$pointer.x;
            this._$lineStart.y = this._$pointer.y;

            this._$setBounds(this._$pointer.x, this._$pointer.y);

            break;
    }

    // restart
    this._$restart();

    return this;
};

/**
 * @param   {number} x
 * @param   {number} y
 * @returns {Graphics}
 */
Graphics.prototype.lineTo = function (x, y)
{

    // valid
    if (typeof x !== "number") {
        x = x|0;
    }

    if (typeof y !== "number") {
        y = y|0;
    }

    x = +(x * 20);
    y = +(y * 20);
    this._$setBounds(x, y);
    this._$setEdgeBounds(x, y);

    if (this._$doFill || this._$doLine) {

        var data = [Graphics.LINE_TO, x, y];

        // fills
        if (this._$doFill) {
            this._$fills[this._$fills.length] = data;
        }

        // lines
        if (this._$doLine) {
            this._$lines[this._$lines.length] = data;

            // line close
            if (this._$lineStart.x === x && this._$lineStart.y === y) {
                this._$closeLine();
            }
        }
    }

    this._$pointer = {x: x, y: y};

    // restart
    this._$restart();

    return this;
};

/**
 * @param   {number} x
 * @param   {number} y
 * @returns {Graphics}
 */
Graphics.prototype.moveTo = function (x, y)
{

    // valid
    if (typeof x !== "number") {
        x = x|0;
    }

    if (typeof y !== "number") {
        y = y|0;
    }

    x = +(x * 20);
    y = +(y * 20);
    this._$setBounds(x, y);
    this._$setEdgeBounds(x, y);

    if (this._$doFill || this._$doLine) {

        var data = [Graphics.MOVE_TO, x, y];

        // fills
        if (this._$doFill) {
            this._$fills[this._$fills.length] = data;
        }

        // lines
        if (this._$doLine) {
            this._$lines[this._$lines.length] = data;

            // restart
            this._$lineStart = { x: x, y: y };
            this._$lineStack = [{ x: x, y: y }];
        }

    }

    this._$pointer = {x: x, y: y};

    // restart
    this._$restart();

    return this;
};

/**
 * TODO
 * @param  {boolean} recurse
 * @return {Vector}
 */
Graphics.prototype.readGraphicsData = function (recurse)
{
    if (typeof recurse !== "boolean") {
        recurse = true;
    }

    return new Vector();
};
/**
 * @param bitmapData
 * @param matrix
 * @param repeat
 * @param smooth
 * @constructor
 */
var GraphicsBitmapFill = function (bitmapData, matrix, repeat, smooth)
{
    this._bitmapData = null;
    this._matrix     = null;
    this._repeat     = true;
    this._smooth     = false;
};

/**
 * @constructor
 */
var GraphicsEndFill = function () {};
/**
 * @param type
 * @param colors
 * @param alphas
 * @param ratios
 * @param matrix
 * @param spreadMethod
 * @param interpolationMethod
 * @param focalPointRatio
 * @constructor
 */
var GraphicsGradientFill = function (
    type, colors, alphas, ratios, matrix,
    spreadMethod, interpolationMethod, focalPointRatio
)
{
    this._type                = "linear";
    this._colors              = null;
    this._alphas              = null;
    this._ratios              = null;
    this._matrix              = null;
    this._spreadMethod        = "pad";
    this._interpolationMethod = "rgb";
    this._focalPointRatio     = 0.0;
};
/**
 * @param commands
 * @param data
 * @param winding
 * @constructor
 */
var GraphicsPath = function (commands, data, winding)
{
    this._commands = null;
    this._data     = null;
    this._winding  = "evenOdd";
};
/**
 * @type {{CUBIC_CURVE_TO: number, CURVE_TO: number, LINE_TO: number, MOVE_TO: number, NO_OP: number, WIDE_LINE_TO: number, WIDE_MOVE_TO: number}}
 */
var GraphicsPathCommand = {
    "NO_OP"         : 0,
    "MOVE_TO"       : 1,
    "LINE_TO"       : 2,
    "CURVE_TO"      : 3,
    "WIDE_MOVE_TO"  : 4,
    "WIDE_LINE_TO"  : 5,
    "CUBIC_CURVE_TO": 6
};
/**
 * @type {{EVEN_ODD: string, NON_ZERO: string}}
 */
var GraphicsPathWinding = {
    "EVEN_ODD": "evenOdd",
    "NON_ZERO": "nonZero"
};
/**
 * @param shader
 * @param matrix
 * @constructor
 */
var GraphicsShaderFill = function (shader, matrix)
{
    this._shader = null;
    this._matrix = null;
};
/**
 * @param color
 * @param alpha
 * @constructor
 */
var GraphicsSolidFill = function (color, alpha)
{
    this._$color = 0;
    this._$alpha = 1.0;
};
/**
 * @param thickness
 * @param pixelHinting
 * @param scaleMode
 * @param caps
 * @param joints
 * @param miterLimit
 * @param fill
 * @constructor
 */
var GraphicsStroke = function (
    thickness, pixelHinting, scaleMode,
    caps, joints, miterLimit, fill
)
{
    this._$thickness    = "";
    this._$pixelHinting = false;
    this._$scaleMode    = "normal";
    this._$caps         = "none";
    this._$joints       = "round";
    this._$miterLimit   = 3.0;
    this._$fill         = null;
};
/**
 * @param vertices
 * @param indices
 * @param uvtData
 * @param culling
 * @constructor
 */
var GraphicsTrianglePath = function (vertices, indices, uvtData, culling)
{
    this._vertices = null;
    this._indices  = null;
    this._uvtData  = null;
    this._culling  = "none";
};
/**
 * @type {{LINEAR_RGB: string, RGB: string}}
 */
var InterpolationMethod = {
    "LINEAR_RGB": "linearRGB",
    "RGB"       : "rgb"
};
/**
 * @param quality
 * @constructor
 */
var JPEGEncoderOptions = function (quality)
{
    this._quality = 80;
};
/**
 * @param quantization
 * @param colorSpace
 * @param trimFlexBits
 * @constructor
 */
var JPEGXREncoderOptions = function (quantization, colorSpace, trimFlexBits)
{
    this._quantization = 20;
    this._colorSpace   = "auto";
    this._trimFlexBits = 0;
};
/**
 * @type {{BEVEL: string, MITER: string, ROUND: string}}
 */
var JointStyle = {
    "BEVEL": "bevel",
    "MITER": "miter",
    "ROUND": "round"
};
/**
 * @type {{HORIZONTAL: string, NONE: string, NORMAL: string, VERTICAL: string}}
 */
var LineScaleMode = {
    "HORIZONTAL": "horizontal",
    "NONE"      : "none",
    "NORMAL"    : "normal",
    "VERTICAL"  : "vertical"
};
/**
 * @constructor
 */
var Loader = function ()
{
    DisplayObjectContainer.call(this);
};

/**
 * extends
 * @type {DisplayObjectContainer}
 */
Loader.prototype = Object.create(DisplayObjectContainer.prototype);
Loader.prototype.constructor = Loader;
/**
 * @constructor
 */
var LoaderInfo = function () {};
/**
 * @constructor
 */
var MorphShape = function () {};

/**
 * @constructor
 */
var MovieClip = function ()
{
    Sprite.call(this);

    // origin flag
    this._$stopFlag      = false;
    this._$canAction     = true;

    // property
    this._$currentFrame  = 1;
    this._$totalFrames   = 1;
    this._$framesLoaded  = 1;
    this._$scenes        = [new Scene()];
    this._$isPlaying     = false;
    this._$enabled       = true;
    this._$trackAsMenu   = true;

    // controller tags
    this._$actions       = [];
    this._$frameLabels   = [];

    // sound
    // this.sounds        = [];
    // this.soundStopFlag = false;
};

/**
 * extends
 * @type {Sprite}
 */
MovieClip.prototype = Object.create(Sprite.prototype);
MovieClip.prototype.constructor = MovieClip;

/**
 * properties
 */
Object.defineProperties(MovieClip.prototype, {
    currentFrame: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$currentFrame;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    currentFrameLabel: {
        /**
         * @return {string|null}
         */
        get: function () {

            var frame       = this.currentFrame|0;
            var frameLabels = this.currentLabels;

            var idx = (frameLabels.length - 1)|0;
            while (idx > 0) {

                if (idx in frameLabels) {

                    var frameLabel = frameLabels[idx];
                    if (frameLabel.frame === frame) {
                        return frameLabel.name;
                    }

                }

                idx = (idx - 1)|0;
            }

            return null;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    currentLabel: {
        /**
         * @return {string|null}
         */
        get: function () {

            var frame       = this.currentFrame|0;
            var frameLabels = this.currentLabels;

            var length = frameLabels.length|0;
            var idx    = 0;
            while (length > idx) {

                if (idx in frameLabels) {

                    var frameLabel = frameLabels[idx];
                    if (frameLabel.frame === frame) {
                        return frameLabel.name;
                    }

                }

                idx = (idx + 1)|0;
            }

            return null;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    currentLabels: {
        /**
         * @return {array}
         */
        get: function () {
            return this._$frameLabels;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    currentScene: {
        get: function () {
            return this._$getCurrentScene("current");
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    enabled: {
        /**
         * @return {boolean}
         */
        get: function () {
            return this._$enabled;
        },
        /**
         * @param {boolean} enabled
         */
        set: function (enabled) {
            if (typeof enabled === "boolean") {
                this._$enabled = enabled;
            }
        }
    },
    framesLoaded: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$framesLoaded;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    isPlaying: {
        /**
         * @return {boolean}
         */
        get: function () {
            return this._$isPlaying;
        },
        /**
         * readonly
         * @returns void
         */
        set: function () {}
    },
    scenes: {
        /**
         * @return {array}
         */
        get: function () {
            return this._$scenes;
        },
        /**
         * readonly
         * @returns void
         */
        set: function () {}
    },
    totalFrames: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$totalFrames;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    trackAsMenu: {
        /**
         * @return {boolean}
         */
        get: function () {
            return this._$trackAsMenu;
        },
        /**
         * @param {boolean} track_as_menu
         */
        set: function (track_as_menu) {
            if (typeof track_as_menu === "boolean") {
                this._$trackAsMenu = track_as_menu;
            }
        }
    }
});


/**
 * @returns {string}
 */
MovieClip.prototype.toString = function ()
{
    return "[object MovieClip]";
};

/**
 * @param {FrameLabel} frameLabel
 */
MovieClip.prototype._$addFrameLabel = function (frameLabel)
{
    if (frameLabel instanceof FrameLabel) {
        this._$frameLabels[this._$frameLabels.length] = frameLabel;
    }
};

/**
 * @param  {string} name
 * @return {FrameLabel|null}
 */
MovieClip.prototype._$getFrameLabel = function (name)
{
    var frameLabels = this.currentLabels;

    var length = frameLabels.length;
    var idx    = 0;

    if (typeof name !== "string") {
        name = name + "";
    }

    name = name.toLowerCase();
    while (length > idx) {

        var frameLabel = frameLabels[idx];
        if (frameLabel.name === name) {
            return frameLabel;
        }

        idx = (idx + 1)|0;
    }

    return null;
};


/**
 * @param {number}       frame
 * @param {ActionScript} actionScript
 */
MovieClip.prototype._$addAction = function (frame, actionScript)
{
    if (actionScript instanceof ActionScript) {

        frame = frame|0;

        // init
        if (!(frame in this._$actions)) {
            this._$actions[frame] = [];
        }

        var length = this._$actions[frame].length;
        this._$actions[frame][length] = this._$createActionScript(actionScript);

    }
};

/**
 * @param   {number|null|undefined} frame
 * @returns void
 */
MovieClip.prototype._$prepareActions = function (frame)
{
    if (this._$canAction) {

        if (typeof frame !== "number") {
            frame = this.currentFrame|0;
        }

        if (frame in this._$actions && this._$actions[frame].length) {

            var actions = this.stage.player.actions;

            actions[actions.length] = {
                actions: this._$actions[this.currentFrame],
                caller:  this
            };

        }

    }

    this._$canAction = false;
};

/**
 * @param   {ActionScript} script
 * @returns {Function}
 */
MovieClip.prototype._$createActionScript = function (script)
{
    if (script instanceof ActionScript) {

        return (function (clip, origin)
        {
            var as   = new ActionScript([], origin.constantPool, origin.register, origin.initAction);
            as.cache = origin.cache;
            as.scope = clip;

            return function (mc) {
                as.reset();
                as.variables["this"] = mc;
                return as.execute(mc);
            };
        })(this, script);

    }
};

/**
 * TODO Sound
 * @param {number} frame
 * @param sound
 */
MovieClip.prototype._$addSound = function (frame, sound)
{

};

/**
 * @param   {MovieClip} parent
 * @param   {number}    index
 * @param   {object}    tag
 * @param   {boolean}   should_action
 * @returns {MovieClip}
 */
MovieClip.prototype._$build = function (parent, index, tag, should_action)
{
    var length, frame, idx;

    var mc = new MovieClip();

    // init
    mc.id             = index|0;
    mc.characterId    = this.characterId;
    mc.parent         = parent;
    mc.stage          = parent.stage;
    mc._$totalFrames  = this._$totalFrames;
    mc._$framesLoaded = this._$framesLoaded;

    // common build
    mc._$commonBuild(parent, tag);

    /**
     * set place data
     */
    // name
    if (tag.PlaceFlagHasName === 1) {
        mc.name = tag.Name;
    }

    // ratio
    if (tag.PlaceFlagHasRatio === 1) {
        mc.ratio = tag.Ratio;
    }

    // mask
    if (tag.PlaceFlagHasClipDepth === 1) {
        mc._$clipDepth = tag.ClipDepth;
    }

    // clip actions
    if (tag.PlaceFlagHasClipActions === 1) {

        var ClipActionRecords = tag.ClipActionRecords;

        length = ClipActionRecords.length|0;

        var eventName, i = 0;
        while (i < length) {

            var actionRecord = ClipActionRecords[i];

            var eventFlag    = actionRecord.EventFlags;
            for (eventName in eventFlag) {

                if (!eventFlag.hasOwnProperty(eventName)) {
                    continue;
                }

                if (!eventFlag[eventName]) {
                    continue;
                }

                // TODO
                var action = mc._$createActionScript(actionRecord.Actions);
                mc.addEventListener(eventName, action);
            }

            i = (i + 1)|0;
        }
    }


    /**
     * clone PlaceObjects
     */
    length = this._$placeObjects.length|0;
    idx    = 0;
    while (length > idx) {
        mc._$placeObjects[idx] = this._$placeObjects[idx].clone();

        idx = (idx + 1)|0;
    }

    frame  = 1;
    length = this._$placeController.length|0;
    while (length > frame) {
        mc._$placeController[frame] = this.$cloneArray(this._$placeController[frame]);

        frame = (frame + 1)|0;
    }


    /**
     * clone actions
     */
    frame  = 1;
    length = this._$actions.length|0;
    while (length > frame) {
        mc._$actions[frame] = this.$cloneArray(this._$actions[frame]);

        frame = (frame + 1)|0;
    }


    /**
     * clone labels
     */
    var labels  = this.$cloneArray(this._$labels);
    mc._$labels = labels;


    /**
     * create scenes
     */
    var scene = new Scene();
    scene._$numFrames = this._$totalFrames;
    scene._$labels    = labels;
    mc._$scenes       = [scene];


    /**
     * clone dictionary
     */
    idx    = 0;
    length = this._$dictionary.length|0;
    while (length > idx) {
        mc._$dictionary = this.$cloneArray(this._$dictionary);

        idx = (idx + 1)|0;
    }


    // todo sounds


    var nextAction = false;
    if (should_action && mc.ratio === 0) {

        var controller = parent._$getController(parent.currentFrame);

        if (controller && controller.indexOf(index) !== -1) {

            mc._$prepareActions(1);

            nextAction = true;
        }
    }


    // build dictionary
    mc._$characterBuild(nextAction);


    return mc;
};

/**
 * @param  {array}   matrix
 * @param  {array}   color_transform
 * @param  {boolean} is_clip
 * @param  {boolean} visible
 * @return void
 */
MovieClip.prototype._$draw = function (matrix, color_transform, is_clip, visible)
{

    // filter and blend
    var preMatrix = this._$preDraw(matrix);

    var instance, length, idx;

    // play flag
    this._$isPlaying = true;


    // set param
    var frame   = this.currentFrame|0;


    // build controller
    var controller = [];
    var instances  = this._$instances;

    length = instances.length;
    idx    = 0;
    while (length > idx) {

        instance = instances[idx];

        if (instance._$startFrame <= frame && (!instance._$endFrame || instance._$endFrame >= frame)) {

            controller[instance._$index] = instance;

        }

        idx = (idx + 1)|0;
    }


    // init clip
    var ctx   = this.stage.player.preContext;
    var clips = [];

    // children draw
    for (var depth in controller) {

        if (!controller.hasOwnProperty(depth)) {
            continue;
        }

        instance = controller[depth];

        // mask end
        length = clips.length|0;
        idx    = 0;
        while (idx < length) {

            if (depth > clips[idx]) {

                clips.splice(idx, 1);
                ctx.restore();

                break;
            }

            idx = (idx + 1)|0;
        }

        // mask start
        if (instance._$clipDepth) {

            ctx.save();
            ctx.beginPath();

            clips[clips.length] = instance._$clipDepth|0;

            if (instance.toString() === "[object MovieClip]") {
                is_clip = true;
            }
        }

        // Transform
        var transform = instance.transform;

        // next draw
        instance._$draw(
            this.$multiplicationMatrix(preMatrix, transform.matrix._$matrix),
            this.$multiplicationColor(color_transform, transform.colorTransform._$colorTransform),
            is_clip,
            visible
        );


        // MovieClip mask end
        if (instance._$clipDepth && instance.toString() === "[object MovieClip]") {

            ctx.clip();

            is_clip = false;
        }


        // case action script 1 or 2
        if (instance.toString() === "[object MovieClip]") {

            instance._$putFrame();

        }


        // remove
        if (instance._$endFrame > 0 && instance._$endFrame === frame) {

            switch (instance.toString()) {
                case "[object MovieClip]":

                    this._$createInstance(instance.id, false);
                    break;
            }

        }

    }

    // end mask
    // if (clips.length || this.mask) {
    if (clips.length) {
        ctx.restore();
    }

    // Graphics
    if (this.graphics._$getBounds() !== null) {
        this.graphics._$draw(preMatrix, color_transform, is_clip, visible);
    }

    // filter and blend
    this._$postDraw(matrix, preMatrix, color_transform);


    // add button
    if (this.buttonMode) {
        this.stage.player.addEventObject(this, matrix, this._$getBounds(null));
    }

    // case action script2
    if (this.toString() === "[object MainTimeline]") {

        // next frame
        this._$putFrame();

    }
};

/**
 * @returns void
 */
MovieClip.prototype._$putFrame = function ()
{

    if (!this._$stopFlag && this.totalFrames > 1
        && (this._$endFrame === 0 || this._$endFrame !== this.parent.currentFrame)
    ) {

        // loop or reset
        if (this.totalFrames === this.currentFrame) {

            // loop
            if (this.ratio === 0) {

                this._$currentFrame = 1;

            // reset
            } else {

                this.parent._$createInstance(this.id, false);

            }

        } else {

            // next frame
            this._$currentFrame = (this._$currentFrame + 1)|0;

        }

        // action on
        this._$canAction = true;

    }

    // set next action
    this._$prepareActions(this._$currentFrame);
};

/**
 * @param  {array|null|undefined} matrix
 * @return {{xMin: number, xMax: number, yMin: number, yMax: number}}
 */
MovieClip.prototype._$getBounds = function (matrix)
{
    var xMax = 0;
    var yMax = 0;
    var xMin = 0;
    var yMin = 0;

    if (this.graphics._$getBounds() !== null) {

        var gBounds = (matrix)
            ? this.$boundsMatrix(this.graphics._$getBounds(), matrix)
            : this.graphics._$getBounds();

        if (matrix) {
            for (var name in gBounds) {

                if (!gBounds.hasOwnProperty(name)) {
                    continue;
                }

                gBounds[name] = +(gBounds[name] / 20);
            }
        }

        xMin = +gBounds.xMin;
        xMax = +gBounds.xMax;
        yMin = +gBounds.yMin;
        yMax = +gBounds.yMax;
    }

    var frame     = this.currentFrame|0;
    var instances = this._$instances;

    var length = instances.length;
    var idx    = 0;
    while (length > idx) {

        var instance = instances[idx];

        if (instance._$startFrame <= frame && (!instance._$endFrame || instance._$endFrame >= frame)) {

            // Transform
            var transform = instance.transform;

            var bounds  = instance._$getBounds(
                (matrix) ? this.$multiplicationMatrix(matrix, transform.matrix._$matrix) : null
            );

            xMin = +this.$min(xMin, bounds.xMin);
            xMax = +this.$max(xMax, bounds.xMax);
            yMin = +this.$min(yMin, bounds.yMin);
            yMax = +this.$max(yMax, bounds.yMax);

        }

        idx = (idx + 1)|0;
    }

    return {
        xMin: xMin,
        xMax: xMax,
        yMin: yMin,
        yMax: yMax
    };
};


/**
 * Action Script 3
 */

/**
 * @returns void
 */
MovieClip.prototype.play = function ()
{
    this._$stopFlag = false;
};

/**
 * @returns void
 */
MovieClip.prototype.stop = function ()
{
    this._$stopFlag = true;
};

/**
 * @param   {number|string}    frame
 * @param   {undefined|string} scene
 * @returns void
 */
MovieClip.prototype.gotoAndPlay = function (frame, scene)
{
    this._$goToFrame(frame, scene);
    this.play();
};

/**
 * @param   {number|string}    frame
 * @param   {undefined|string} scene
 * @returns void
 */
MovieClip.prototype.gotoAndStop = function (frame, scene)
{
    this._$goToFrame(frame, scene);
    this.stop();
};

/**
 * @returns void
 */
MovieClip.prototype.nextFrame = function ()
{
    this._$goToFrame(this.currentFrame + 1);
    this.stop();
};

/**
 * @returns void
 */
MovieClip.prototype.nextScene = function ()
{
    var scene = this._$getCurrentScene("next");
    if (scene) {
        this._$goToFrame(scene._$offset + 1);
    }
    this.play();
};

/**
 * @returns void
 */
MovieClip.prototype.prevFrame = function ()
{
    this._$goToFrame(this.currentFrame - 1);
    this.stop();
};

/**
 * @returns void
 */
MovieClip.prototype.prevScene = function ()
{
    var scene = this._$getCurrentScene("prev");
    if (scene) {
        this._$goToFrame(scene._$offset + 1);
    }
    this.play();
};

/**
 * @param  {string} type
 * @return {Scene|null}
 */
MovieClip.prototype._$getCurrentScene = function (type)
{
    var scene;
    var scenes = this.scenes;
    var length = scenes.length|0;

    if (length > 1) {

        var frame = this.currentFrame|0;
        var idx   = 0;

        while (length > idx) {

            // set
            scene = scenes[idx];

            var total = (scene.numFrames + scene._$offset)|0;
            if (frame > scene._$offset && frame <= total) {
                switch (type) {
                    case "current":
                        return scene;
                    case "next":
                        var next = (idx + 1)|0;
                        return (next in scenes) ? scenes[next] : null;
                    case "prev":
                        var prev = (idx - 1)|0;
                        return (prev in scenes) ? scenes[prev] : null;
                }
            }

            idx = (idx + 1)|0;
        }

    }

    return scenes[0];
};

/**
 * @param  {string} name
 * @return {Scene|null}
 */
MovieClip.prototype._$getScene = function (name)
{
    var length = this.scenes.length;
    var idx    = 0;

    if (typeof name !== "string") {
        name = name + "";
    }

    while (length > idx) {

        var scene = this.scenes[idx];

        if (scene.name === name) {
            return scene;
        }

        idx = (idx + 1)|0;
    }

    return null;
};

/**
 * @param   {number|string}    frame
 * @param   {undefined|string} scene
 * @returns void
 */
MovieClip.prototype._$goToFrame = function (frame, scene)
{
    // scene
    if (scene !== undefined && typeof frame === "number") {
        var target = this._$getScene(scene);
        if (target) {
            frame = (frame + target._$offset)|0;
        }
    }

    // FrameLabel
    if (typeof frame === "string") {

        var frameLabel = this._$getFrameLabel(frame);

        if (frameLabel instanceof FrameLabel) {
            frame = frameLabel.frame|0;
        }

    }

    frame = frame|0;
    if (frame > 0 && frame !== this.currentFrame) {

        if (frame > this.totalFrames) {
            frame = 1;
        }

        this._$canAction = true;

        // reset
        var instances = this._$instances;
        var length    = instances.length|0;
        var idx       = 0;
        while (length > idx) {

            var instance = instances[idx];

            idx = (idx + 1)|0;

            if (instance._$startFrame === 1 && instance._$endFrame === 0) {
                continue;
            }

            if (instance._$startFrame > frame || instance._$endFrame < frame) {
                this._$createInstance(instance.id, false);
            }

        }

        this._$currentFrame = frame|0;
    }
};

/**
 * Action Script 1 or 2
 */





/**
 * @param fastCompression
 * @constructor
 */
var PNGEncoderOptions = function (fastCompression)
{
    this._fastCompression = false;
};
/**
 * @type {{ALWAYS: string, AUTO: string, NEVER: string}}
 */
var PixelSnapping = {
    "ALWAYS": "always",
    "AUTO"  : "auto",
    "NEVER" : "never"
};
/**
 * @type {{FLASH1: number, FLASH10: number, FLASH11: number, FLASH12: number, FLASH2: number, FLASH3: number, FLASH4: number, FLASH5: number, FLASH6: number, FLASH7: number, FLASH8: number, FLASH9: number}}
 */
var SWFVersion = {
    "FLASH1" : 1,
    "FLASH10": 10,
    "FLASH11": 11,
    "FLASH12": 12,
    "FLASH2" : 2,
    "FLASH3" : 3,
    "FLASH4" : 4,
    "FLASH5" : 5,
    "FLASH6" : 6,
    "FLASH7" : 7,
    "FLASH8" : 8,
    "FLASH9" : 9
};
/**
 * @param {string} name
 * @param {array}  labels
 * @param {number} numFrames
 * @constructor
 */
var Scene = function (name, labels, numFrames)
{
    OriginalObject.call(this);

    this._$name = "";
    if (typeof name === "string") {
        this._$name = name + "";
    }

    this._$labels = [];
    if (this.$isArray(labels)) {
        this._$labels = labels;
    }

    this._$numFrames = 1;
    if (typeof numFrames === "number") {
        this._$numFrames = numFrames|0;
    }

    // origin param
    this._$offset = 0;
};

/**
 * extends
 * @type {OriginalObject}
 */
Scene.prototype = Object.create(OriginalObject.prototype);
Scene.prototype.constructor = Scene;

/**
 * properties
 */
Object.defineProperties(Scene.prototype, {
    labels: {
        /**
         * @return {array}
         */
        get: function () {
            return this._$labels;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    name: {
        /**
         * @return {string}
         */
        get: function () {
            return this._$name;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    numFrames: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$numFrames;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    }
});

/**
 * @returns {string}
 */
Scene.prototype.toString = function ()
{
    return "[object Scene]";
};
/**
 * @param code
 * @constructor
 */
var Shader = function (code)
{
    this._code = null;
};
/**
 * @param byteCode
 * @constructor
 */
var ShaderData = function (byteCode)
{
    this._byteCode = [];
};
/**
 * @constructor
 */
var ShaderInput = function () {};
/**
 * @param shader
 * @param target
 * @param width
 * @param height
 * @constructor
 */
var ShaderJob = function (shader, target, width, height)
{
    this._shader = null;
    this._target = null;
    this._width  = 0;
    this._height = 0;
};
/**
 * @constructor
 */
var ShaderParameter = function () {};

/**
 * @type {{BOOL: string, BOOL2: string, BOOL3: string, BOOL4: string, FLOAT: string, FLOAT2: string, FLOAT3: string, FLOAT4: string, INT: string, INT2: string, INT3: string, INT4: string, MATRIX2X2: string, MATRIX3X3: string, MATRIX4X4: string}}
 */
var ShaderParameterType = {
    "BOOL"     : "bool",
    "BOOL2"    : "bool2",
    "BOOL3"    : "bool3",
    "BOOL4"    : "bool4",
    "FLOAT"    : "float",
    "FLOAT2"   : "float2",
    "FLOAT3"   : "float3",
    "FLOAT4"   : "float4",
    "INT"      : "int",
    "INT2"     : "int2",
    "INT3"     : "int3",
    "INT4"     : "int4",
    "MATRIX2X2": "matrix2x2",
    "MATRIX3X3": "matrix3x3",
    "MATRIX4X4": "matrix4x4"
};
/**
 * @type {{FAST: string, FULL: string}}
 */
var ShaderPrecision = {
    "FAST": "fast",
    "FULL": "full"
};
/**
 * @constructor
 */
var Shape = function ()
{
    DisplayObject.call(this);

    // origin param
    this._$data       = null;
    this._$bounds     = { xMin: 0, xMax: 0, yMin: 0, yMax: 0 };
    this._$edgeBounds = null;

    // Graphics
    var graphics = new Graphics();
    graphics._$displayObject = this;
    this._$graphics = graphics;
};

/**
 * extends
 * @type {DisplayObject}
 */
Shape.prototype = Object.create(DisplayObject.prototype);
Shape.prototype.constructor = Shape;

/**
 * properties
 */
Object.defineProperties(Shape.prototype, {
    graphics: {
        /**
         * @returns {Graphics}
         */
        get: function () {
            return this._$graphics;
        },
        /**
         * readonly
         */
        set: function () {}
    }
});

/**
 * @returns {string}
 */
Shape.prototype.toString = function ()
{
    return "[object Shape]";
};

/**
 * @param   {array|null|undefined} matrix
 * @returns {object}
 */
Shape.prototype._$getBounds = function (matrix)
{
    if (matrix) {

        var bounds = (this.graphics._$getBounds() === null)
            ? this.$boundsMatrix(this._$bounds, matrix)
            : this.$boundsMatrix(this.graphics._$getBounds(), matrix);

        for (var name in bounds) {

            if (!bounds.hasOwnProperty(name)) {
                continue;
            }

            bounds[name] = +(bounds[name] / 20);
        }

        return bounds;

    } else {

        return (this.graphics._$getBounds() === null)
            ? this._$bounds
            : this.graphics._$getBounds();

    }

};

/**
 * @param  {array} matrix
 * @return {{xMin: number, xMax: number, yMin: number, yMax: number}}
 */
Shape.prototype._$getRect = function (matrix)
{

    var bounds = (this.graphics._$getRect() === null)
        ? this.$boundsMatrix(this._$edgeBounds || this._$bounds, matrix)
        : this.$boundsMatrix(this.graphics._$getRect(), matrix);

    for (var name in bounds) {

        if (!bounds.hasOwnProperty(name)) {
            continue;
        }

        bounds[name] = +(bounds[name] / 20);
    }

    return bounds;
};

/**
 * @param   {MovieClip} parent
 * @param   {number}    index
 * @param   {object}    tag
 * @param   {boolean}   should_action
 * @returns {Shape}
 */
Shape.prototype._$build = function (parent, index, tag, should_action)
{
    var shape = new Shape();

    // init
    shape.id           = index;
    shape.characterId  = this.characterId;
    shape.parent       = parent;
    shape.stage        = parent.stage;
    shape._$data       = this._$data;
    shape._$bounds     = this._$bounds;
    shape._$edgeBounds = this._$edgeBounds;

    // mask
    if (tag.PlaceFlagHasClipDepth === 1) {
        shape._$clipDepth = tag.ClipDepth;
    }

    // common build
    shape._$commonBuild(parent, tag);

    return shape;
};

/**
 * @param   {array}   matrix
 * @param   {array}   color_transform
 * @param   {boolean} is_clip
 * @param   {boolean} visible
 * @returns void
 */
Shape.prototype._$draw = function (matrix, color_transform, is_clip, visible)
{
    // pre context
    var ctx = this.stage.player.preContext;

    // Graphics
    if (this.graphics._$getBounds() !== null) {

        var preMatrix = this._$preDraw(matrix);

        this.graphics._$draw(preMatrix, color_transform, is_clip, visible);

        this._$postDraw(matrix, preMatrix, color_transform);

        return ;
    }


    // mask
    if (is_clip || this._$clipDepth) {

        ctx.setTransform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
        this._$doDraw(ctx, this.$min(matrix[0], matrix[3]), color_transform, is_clip);

        return ;
    }


    // normal
    var alpha = +(color_transform[3] + (color_transform[7] / 255));
    if (visible && alpha > 0) {

        var xScale = +(this.$sqrt(matrix[0] * matrix[0] + matrix[1] * matrix[1]));
        var yScale = +(this.$sqrt(matrix[2] * matrix[2] + matrix[3] * matrix[3]));
        xScale = +(this.$pow(this.$SQRT2, this.$ceil(this.$log(xScale) / this.$LN2_2 - this.$LOG1P)));
        yScale = +(this.$pow(this.$SQRT2, this.$ceil(this.$log(yScale) / this.$LN2_2 - this.$LOG1P)));

        var bounds = this._$getBounds(null);
        var xMax   = +bounds.xMax;
        var xMin   = +bounds.xMin;
        var yMax   = +bounds.yMax;
        var yMin   = +bounds.yMin;

        var width  = this.$abs(this.$ceil((xMax - xMin) * xScale))|0;
        var height = this.$abs(this.$ceil((yMax - yMin) * yScale))|0;

        if (width > 0 || height > 0) {

            // get cache
            var cacheKey = this.$cacheStore.generateKey(this.characterId, color_transform);
            var cache    = this.$cacheStore.getCache(cacheKey);

            // cache is small
            if (cache && (width > cache.canvas.width || height > cache.canvas.height)) {
                cache = null;
            }

            // cache is not
            if (!cache) {

                var canvas    = this.$cacheStore.getCanvas();
                canvas.width  = width;
                canvas.height = height;
                cache         = canvas.getContext("2d");

                cache.setTransform(xScale, 0, 0, yScale, -xMin * xScale, -yMin * yScale);

                this._$doDraw(cache, this.$min(xScale, yScale), color_transform, false);

                this.$cacheStore.setCache(cacheKey, cache);

            }

            // draw
            var m = this.$multiplicationMatrix(matrix, [1 / xScale, 0, 0, 1 / yScale, xMin, yMin]);
            ctx.setTransform(m[0], m[1], m[2], m[3], m[4], m[5]);

            if (this.$isAndroid4x && !this.$isChrome) {

                ctx.fillStyle = stage.context.createPattern(cache.canvas, "no-repeat");
                ctx.fillRect(0, 0, width, height);

            } else {

                ctx.drawImage(cache.canvas, 0, 0, width, height);

            }
        }
    }

};

/**
 * @param   {CanvasRenderingContext2D} ctx
 * @param   {number}  min_scale
 * @param   {array}   color_transform
 * @param   {boolean} is_clip
 * @returns void
 */
Shape.prototype._$doDraw = function (ctx, min_scale, color_transform, is_clip)
{

    var shapes = this._$data;
    if (shapes) {

        var color, css, canvas;

        var idx    = 0;
        var length = shapes.length|0;
        while (idx < length) {

            // data set
            var data = shapes[idx];
            idx = (idx + 1)|0;

            // params
            var width    = 0;
            var height   = 0;
            var matrix   = null;
            var obj      = data.obj;
            var styleObj = (!obj.HasFillFlag) ? obj : obj.FillType;
            var isStroke = (obj.Width !== undefined);

            if (this._$clipDepth) {
                if (isStroke) {
                    continue;
                }

                data.cmd(ctx);
                continue;
            }

            // render
            ctx.beginPath();
            data.cmd(ctx);

            var styleType = styleObj.fillStyleType|0;
            switch (styleType) {

                // normal
                case 0x00:

                    color = this.$generateColorTransform(styleObj.Color, color_transform);
                    css   = "rgba(" + color.R + "," + color.G + "," + color.B + "," + color.A + ")";

                    if (isStroke) {

                        ctx.strokeStyle = css;
                        ctx.lineWidth   = +this.$max(obj.Width, 1 / min_scale);
                        ctx.lineCap     = "round";
                        ctx.lineJoin    = "round";
                        ctx.stroke();

                    } else {

                        ctx.fillStyle = css;
                        ctx.fill();

                    }

                    break;

                // gradient
                case 0x10:
                case 0x12:
                case 0x13:

                    // matrix
                    matrix = styleObj.gradientMatrix;

                    var type = styleObj.fillStyleType|0;

                    switch (type) {

                        case 0x10:

                            var xy = this.$linearGradientXY(matrix);
                            css = ctx.createLinearGradient(xy[0], xy[1], xy[2], xy[3]);

                            break;

                        default:

                            ctx.save();
                            ctx.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
                            css = ctx.createRadialGradient(0, 0, 0, 0, 0, 16384);

                            break;
                    }


                    var records = styleObj.gradient.GradientRecords;
                    var rLength = records.length|0;
                    var rIdx    = 0;
                    while (rIdx < rLength) {

                        var record = records[rIdx];

                        color = this.$generateColorTransform(record.Color, color_transform);

                        var rgba   = "rgba(" + color.R + "," + color.G + "," + color.B + "," + color.A + ")";
                        css.addColorStop(record.Ratio, rgba);

                        rIdx = (rIdx + 1)|0;
                    }

                    if (isStroke) {

                        ctx.strokeStyle = css;

                        switch (type) {

                            case 0x10:

                                ctx.lineWidth = this.$max(obj.Width, 1 / min_scale);

                                break;

                            default:

                                var xScale = +(this.$sqrt(matrix[0] * matrix[0] + matrix[1] * matrix[1]));
                                var yScale = +(this.$sqrt(matrix[2] * matrix[2] + matrix[3] * matrix[3]));

                                ctx.lineWidth = this.$max(
                                    obj.Width / this.$max(xScale, yScale),
                                    1 / min_scale / this.$max(xScale, yScale)
                                );

                                break;
                        }

                        ctx.lineCap     = "round";
                        ctx.lineJoin    = "round";
                        ctx.stroke();

                    } else {

                        ctx.fillStyle = css;
                        ctx.fill();

                    }

                    // restore
                    switch (type) {

                        case 0x12:
                        case 0x13:
                            ctx.restore();
                            break;

                    }

                    break;

                // bitmap
                case 0x40:
                case 0x41:
                case 0x42:
                case 0x43:

                    // matrix
                    matrix = styleObj.bitmapMatrix;

                    var bitmapId = styleObj.bitmapId|0;
                    var repeat   = (styleType === 0x40 || styleType === 0x42) ? "repeat" : "no-repeat";

                    var cacheKey = this.$cacheStore.generateKey(
                        bitmapId + "_" + this.characterId + "_" + repeat,
                        undefined,
                        color_transform
                    );

                    var image = this.$cacheStore.getCache(cacheKey);
                    if (image === undefined) {

                        image = this.stage._$characters[bitmapId];
                        if (!image) {
                            break;
                        }

                        if (color_transform[0] !== 1 ||
                            color_transform[1] !== 1 ||
                            color_transform[2] !== 1 ||
                            color_transform[4] ||
                            color_transform[5] ||
                            color_transform[6]
                        ) {

                            var imgCanvas = image.canvas;
                            width         = imgCanvas.width|0;
                            height        = imgCanvas.height|0;

                            if (width > 0 && height > 0) {
                                canvas           = this.$cacheStore.getCanvas();
                                canvas.width     = width;
                                canvas.height    = height;

                                var imageContext = canvas.getContext("2d");
                                imageContext.drawImage(image.canvas, 0, 0, width, height);

                                image = this.$generateImageTransform(imageContext, color_transform);

                                this.$cacheStore.setCache(cacheKey, image);
                            }

                        } else {
                            ctx.globalAlpha = +(this.$max(0, this.$min((255 * color_transform[3]) + color_transform[7], 255)) / 255);
                        }
                    }

                    if (image) {

                        ctx.save();

                        canvas = image.canvas;
                        width  = canvas.width|0;
                        height = canvas.height|0;

                        if (width > 0 && height > 0) {

                            switch (styleType) {
                                case 0x41:
                                case 0x43:

                                    ctx.clip();
                                    ctx.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
                                    ctx.drawImage(canvas, 0, 0, width, height);

                                    break;

                                default:

                                    ctx.fillStyle = this.stage.player.context.createPattern(canvas, repeat);
                                    ctx.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
                                    ctx.fill();

                                    break;

                            }
                        }

                        ctx.restore();
                    }

                    break;

            }
        }

        // shape mask
        if (this._$clipDepth && !is_clip) {

            ctx.clip();

            // android bug
            if (this.$isAndroid && this.$isChrome) {

                if (!canvas) {
                    canvas = ctx.canvas;
                }

                width  = canvas.width|0;
                height = canvas.height|0;

                var tmpCanvas    = this.$cacheStore.getCanvas();
                var tmpContext   = tmpCanvas.getContext("2d");

                canvas           = ctx.canvas;
                tmpCanvas.width  = width;
                tmpCanvas.height = height;
                tmpContext.drawImage(canvas, 0, 0, width, height);

                ctx.save();
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.beginPath();
                ctx.clearRect(0, 0, width + 1, height + 1);
                ctx.drawImage(tmpCanvas, 0, 0, width, height);
                ctx.restore();

                tmpContext.setTransform(1, 0, 0, 1, 0, 0);
                tmpContext.clearRect(0, 0, width + 1, height + 1);
            }
        }

        // reset
        var resetCSS    = "rgba(0,0,0,1)";
        ctx.strokeStyle = resetCSS;
        ctx.fillStyle   = resetCSS;
        ctx.globalAlpha = 1;

    }
};

/**
 * @param  {number} x
 * @param  {number} y
 * @param  {array}  matrix
 * @return {boolean}
 */
Shape.prototype._$hit = function (x, y, matrix)
{

    // Graphics
    if (this.graphics._$getBounds() !== null) {

        return this.graphics._$hit(x, y, matrix);

    }

    var shapes = this._$data;
    if (shapes) {

        var ctx = this.stage.player.hitContext;

        ctx.setTransform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);

        var idx      = 0;
        var length   = shapes.length|0;
        var minScale = this.$min(matrix[0], matrix[3]);
        while (length > idx) {

            var data     = shapes[idx];
            var obj      = data.obj;
            var isStroke = (obj.Width !== undefined);

            ctx.beginPath();
            data.cmd(ctx);

            if (isStroke) {
                ctx.lineWidth = this.$max(obj.Width, 1 / minScale);
                ctx.lineCap   = "round";
                ctx.lineJoin  = "round";
            }

            if (ctx.isPointInPath(x, y)) {
                return true;
            }

            if ("isPointInStroke" in ctx) {
                if (ctx.isPointInStroke(x, y)) {
                    return true;
                }
            }

            idx = (idx + 1)|0;
        }

    }

    return false;
};
/**
 * @param {DisplayObject|null} upState
 * @param {DisplayObject|null} overState
 * @param {DisplayObject|null} downState
 * @param {DisplayObject|null} hitTestState
 * @constructor
 */
var SimpleButton = function (upState, overState, downState, hitTestState)
{
    InteractiveObject.call(this);

    // properties
    this._$downState      = null;
    this._$enabled        = true;
    this._$hitTestState   = null;
    this._$overState      = null;
    this._$soundTransform = new SoundTransform();
    this._$trackAsMenu    = false;
    this._$upState        = null;
    this._$useHandCursor  = true;

    // init
    this.downState        = downState;
    this.hitTestState     = hitTestState;
    this.overState        = overState;
    this.upState          = upState;

    // origin param
    this._$actions         = [];
    this._$characters      = [];
    this._$status          = "up";
};

/**
 * extends
 * @type {InteractiveObject}
 */
SimpleButton.prototype = Object.create(InteractiveObject.prototype);
SimpleButton.prototype.constructor = SimpleButton;

/**
 * properties
 */
Object.defineProperties(SimpleButton.prototype, {
    downState: {
        /**
         * @return {DisplayObject}
         */
        get: function () {
            return this._$downState;
        },
        /**
         * @param  {DisplayObject} down_state
         * @return void
         */
        set: function (down_state) {
            if (down_state instanceof DisplayObject) {
                this._$downState = down_state;
            }
        }
    },
    enabled: {
        /**
         * @return {boolean}
         */
        get: function () {
            return this._$enabled;
        },
        /**
         * @param  {boolean} enabled
         * @return void
         */
        set: function (enabled) {
            if (typeof enabled === "boolean") {
                this._$enabled = enabled;
            }
        }
    },
    hitTestState: {
        /**
         * @return {DisplayObject}
         */
        get: function () {
            return (this._$hitTestState) ? this._$hitTestState : this.upState;
        },
        /**
         * @param  {DisplayObject} hit_test_state
         * @return void
         */
        set: function (hit_test_state) {
            if (hit_test_state instanceof DisplayObject) {
                this._$hitTestState = hit_test_state;
            }
        }
    },
    overState: {
        /**
         * @return {DisplayObject}
         */
        get: function () {
            return this._$overState;
        },
        /**
         * @param  {DisplayObject} over_state
         * @return void
         */
        set: function (over_state) {
            if (over_state instanceof DisplayObject) {
                this._$overState = over_state;
            }
        }
    },
    soundTransform: {
        /**
         * @return {SoundTransform}
         */
        get: function () {
            return this._$soundTransform;
        },
        /**
         * @param  {SoundTransform} sound_transform
         * @return void
         */
        set: function (sound_transform) {
            if (sound_transform instanceof SoundTransform) {
                this._$soundTransform = sound_transform;
            }
        }
    },
    trackAsMenu: {
        /**
         * @return {boolean}
         */
        get: function () {
            return this._$trackAsMenu;
        },
        /**
         * @param {boolean} track_as_menu
         */
        set: function (track_as_menu) {
            if (typeof track_as_menu === "boolean") {
                this._$trackAsMenu = track_as_menu;
            }
        }
    },
    upState: {
        /**
         * @return {DisplayObject}
         */
        get: function () {
            return this._$upState;
        },
        /**
         * @param  {DisplayObject} up_state
         * @return void
         */
        set: function (up_state) {
            if (up_state instanceof DisplayObject) {
                this._$upState = up_state;
            }
        }
    },
    useHandCursor: {
        /**
         * @return {boolean}
         */
        get: function () {
            return this._$useHandCursor;
        },
        /**
         * @param  {boolean} use_hand_cursor
         * @return void
         */
        set: function (use_hand_cursor) {
            if (typeof use_hand_cursor === "boolean") {
                this._$useHandCursor = use_hand_cursor;
            }
        }
    }
});

/**
 * @returns {string}
 */
SimpleButton.prototype.toString = function ()
{
    return "[object SimpleButton]";
};

/**
 * @param   {MovieClip}    parent
 * @param   {number}       index
 * @param   {object}       tag
 * @param   {boolean}      should_action
 * @returns {SimpleButton}
 */
SimpleButton.prototype._$build = function (parent, index, tag, should_action)
{
    var button = new SimpleButton();
    var stage  = parent.stage;

    // init
    button.id          = index;
    button.characterId = this.characterId;
    button.parent      = parent;
    button.stage       = stage;

    // common build
    button._$commonBuild(parent, tag);


    /**
     * set place data
     */
    // name
    if (tag.PlaceFlagHasName === 1) {
        button.name = tag.Name;
    }


    var length = this._$characters.length;
    var idx    = 0;

    // state init
    var downState   = new Sprite();
    downState.stage = stage;
    downState.transform._$transform();

    var hitTestState   = new Sprite();
    hitTestState.stage = stage;
    hitTestState.transform._$transform();

    var overState   = new Sprite();
    overState.stage = stage;
    overState.transform._$transform();

    var upState   = new Sprite();
    upState.stage = stage;
    upState.transform._$transform();

    if (parent.root.actionScriptVersion === ActionScriptVersion.ACTIONSCRIPT2) {

        downState.parent    = parent;
        hitTestState.parent = parent;
        overState.parent    = parent;
        upState.parent      = parent;

    }


    var version = parent.root.actionScriptVersion;

    // build children
    var characters = stage._$characters;
    while (length > idx) {

        var btnTag = this._$characters[idx];

        // set new button
        button._$characters[idx] = btnTag;

        // state character
        var character = characters[btnTag.CharacterId];

        var id = 0;


        // touch or press
        if (btnTag.ButtonStateDown) {

            id = downState._$instances.length|0;

            downState._$instances[id] = (version === ActionScriptVersion.ACTIONSCRIPT2)
                ? this._$buildChild(button,    id, btnTag, character)
                : this._$buildChild(downState, id, btnTag, character);

        }

        // hit area
        if (btnTag.ButtonStateHitTest) {

            id = hitTestState._$instances.length|0;

            hitTestState._$instances[id] = (version === ActionScriptVersion.ACTIONSCRIPT2)
                ? this._$buildChild(button,       id, btnTag, character)
                : this._$buildChild(hitTestState, id, btnTag, character);

        }

        // over
        if (btnTag.ButtonStateOver) {

            id = overState._$instances.length|0;

            overState._$instances[id] = (version === ActionScriptVersion.ACTIONSCRIPT2)
                ? this._$buildChild(button,    id, btnTag, character)
                : this._$buildChild(overState, id, btnTag, character);

        }

        // up
        if (btnTag.ButtonStateUp) {

            id = upState._$instances.length|0;

            upState._$instances[id] = (version === ActionScriptVersion.ACTIONSCRIPT2)
                ? this._$buildChild(button,  id, btnTag, character)
                : this._$buildChild(upState, id, btnTag, character);

        }

        idx = (idx + 1)|0;
    }

    // set state
    button.downState    = downState;
    button.hitTestState = hitTestState;
    button.overState    = overState;
    button.upState      = upState;

    return button;
};

/**
 * @param  {string} status
 * @return void
 */
SimpleButton.prototype._$changeState = function (status)
{
    var sprite    = new Sprite();
    sprite.parent = this.parent;
    sprite.stage  = this.stage;

    // change state string
    var state = "ButtonState" + this._$status.charAt(0).toUpperCase() + this._$status.slice(1);

    var characters = this.stage._$characters;

    var length = this._$characters.length|0;
    var idx    = 0;
    while (length > idx) {

        var tag = this._$characters[idx];

        // state character
        var character = characters[tag.CharacterId];

        // build
        if (tag[state]) {
            var id = sprite._$instances.length|0;
            sprite._$instances[id] = this._$buildChild(this.parent, id, tag, character);
        }

        idx = (idx + 1)|0;
    }

    // reset
    this[this._$status + "State"] = sprite;

    // set
    this._$status = status;
};

/**
 * @param  {DisplayObject} parent
 * @param  {number}        id
 * @param  {object}        tag
 * @param  {DisplayObject} character
 * @return {DisplayObject}
 */
SimpleButton.prototype._$buildChild = function (parent, id, tag, character)
{
    // create new instance
    var instance = character._$build(parent, id, tag, false);

    // Matrix
    var matrix                  = new Matrix();
    matrix._$matrix             = this.$cloneArray(tag.Matrix);
    instance.transform._$matrix = matrix;

    // ColorTransform
    var colorTransform                  = new ColorTransform();
    colorTransform._$colorTransform     = this.$cloneArray(tag.ColorTransform);
    instance.transform._$colorTransform = colorTransform;

    // TODO filter and blend


    return instance;
};

/**
 * @param   {array}   matrix
 * @param   {array}   color_transform
 * @param   {boolean} is_clip
 * @param   {boolean} visible
 * @returns void
 */
SimpleButton.prototype._$draw = function (matrix, color_transform, is_clip, visible)
{

    // filter and blend
    var preMatrix = this._$preDraw(matrix);

    var player = this.stage.player;
    var state  = this[this._$status + "State"];

    state._$draw(preMatrix, color_transform, is_clip, visible);

    // add button
    player.addEventObject(
        this,
        this.$cloneArray(matrix),
        this._$getBounds(null, "hitTest")
    );

    // filter and blend
    this._$postDraw(matrix, preMatrix, color_transform);

};

/**
 * @param  {number} x
 * @param  {number} y
 * @param  {array}  matrix
 * @return {boolean}
 */
SimpleButton.prototype._$hit = function (x, y, matrix)
{
    return this.hitTestState._$hit(x, y, matrix);
};

/**
 * @param  {array|null|undefined} matrix
 * @param  {string} state
 * @return {{xMin: number, xMax: number, yMin: number, yMax: number}}
 */
SimpleButton.prototype._$getBounds = function (matrix, state)
{
    if (!state) {
        state = this._$status;
    }
    return this[state + "State"]._$getBounds(matrix);
};
/**
 * @type {{PAD: string, REFLECT: string, REPEAT: string}}
 */
var SpreadMethod = {
    "PAD"    : "pad",
    "REFLECT": "reflect",
    "REPEAT" : "repeat"
};
/**
 * @constructor
 */
var Stage = function ()
{
    DisplayObjectContainer.call(this);

    // origin param
    this._$id              = null;
    this._$playerId        = null;
    this._$mainTimelineId  = null;
    this._$instances       = [];
    this._$characters      = [];


    // property init
    this._align                       = "";
    this._allowsFullScreen            = false;
    this._allowsFullScreenInteractive = false;
    this._browserZoomFactor           = 1.0;
    this._color                       = "transparent";
    this._colorCorrection             = ColorCorrection.DEFAULT;
    this._colorCorrectionSupport      = ColorCorrectionSupport.DEFAULT_OFF;
    this._displayState                = null;
    this._focus                       = null;
    this._frameRate                   = 60;
    this._fullScreenHeight            = 0;
    this._fullScreenSourceRect        = null;
    this._fullScreenWidth             = 0;
    this._mouseLock                   = false;
    this._nativeWindow                = null;
    this._quality                     = StageQuality.HIGH;
    this._scaleMode                   = StageScaleMode.SHOW_ALL;
    this._showDefaultContextMenu      = true;
    this._softKeyboardRect            = new Rectangle(0, 0, 0, 0);
    this._stage3Ds                    = new Stage3D();
    this._stageFocusRect              = true;
    this._stageHeight                 = 0;

};

/**
 * extends
 */
Stage.prototype = Object.create(DisplayObjectContainer.prototype);
Stage.prototype.constructor = Stage;

/**
 * properties
 */
Object.defineProperties(Stage.prototype, {
    id: {
        get: function () {
            return this._$id;
        },
        set: function () {}
    },
    player: {
        get: function () {
            return this.$players[this._$playerId];
        },
        set: function () {}
    },
    root: {
        get: function () {
            return this;
        },
        set: function () {}
    },
    _root: {
        get: function () {
            return this._$getInstance(this._$mainTimelineId);
        },
        set: function () {}
    },
    parent: {
        get: function () {
            return null;
        },
        set: function () {}
    },
    stage: {
        get: function () {
            return this;
        },
        set: function () {}
    },
    align: {
        get: function () {
            return this._align;
        },
        set: function (align) {
            if (typeof align === "string") {
                var value = align.toUpperCase();
                switch (value) {
                    case StageAlign.BOTTOM:
                    case StageAlign.BOTTOM_LEFT:
                    case StageAlign.BOTTOM_RIGHT:
                    case StageAlign.LEFT:
                    case StageAlign.RIGHT:
                    case StageAlign.TOP:
                    case StageAlign.TOP_LEFT:
                    case StageAlign.TOP_RIGHT:
                    case "":
                        this._align = value;
                        break;
                    default:
                        break;
                }
            }
        }
    },
    allowsFullScreen: {
        get: function () {
            return this._allowsFullScreen;
        },
        set: function () {}
    },
    allowsFullScreenInteractive: {
        get: function () {
            return this._allowsFullScreenInteractive;
        },
        set: function () {}
    },
    browserZoomFactor: {
        get: function () {
            return this._browserZoomFactor;
        },
        set: function () {}
    },
    color: {
        get: function () {
            return this._color;
        },
        set: function (color) {
            if (typeof color === "string") {
                color = this.$colorStringToInt(color);
            }
            this._color = color;
        }
    },
    colorCorrection: {
        get: function () {
            return this._colorCorrection;
        },
        set: function (colorCorrection) {
            if (typeof colorCorrection === "string") {
                var value = colorCorrection.toLowerCase();
                switch (value) {
                    case ColorCorrection.ON:
                    case ColorCorrection.OFF:
                    case ColorCorrection.DEFAULT:
                        this._colorCorrection = value;
                        break;
                    default:
                        break;
                }
            }
        }
    },
    colorCorrectionSupport: {
        get: function () {
            return this._colorCorrectionSupport;
        },
        set: function () {}
    },
    contentsScaleFactor: {
        get: function () {
            return this.$devicePixelRatio;
        },
        set: function () {}
    },
    displayState: {
        get: function () {
            return this._displayState;
        },
        set: function (displayState) {
            if (typeof displayState === "string") {
                switch (displayState) {
                    case StageDisplayState.FULL_SCREEN:
                    case StageDisplayState.FULL_SCREEN_INTERACTIVE:
                    case StageDisplayState.NORMAL:
                        this._displayState = displayState;
                        break;
                }
            }
        }
    },
    focus: {
        get: function () {
            return this._focus;
        },
        set: function (focus) {
            if (focus instanceof InteractiveObject) {
                    this._focus = focus;
            }
        }
    },
    frameRate: {
        get: function () {
            return this._frameRate;
        },
        set: function (frameRate) {
            if (typeof frameRate === "number") {
                switch (true) {
                    case 0 >= frameRate:
                        this._frameRate = 0.01;
                        break;
                    case 1000 < frameRate:
                        this._frameRate = 1000;
                        break;
                    default:
                        this._frameRate = frameRate;
                }
            }
        }
    },
    fullScreenHeight: {
        get: function () {
            return this._fullScreenHeight;
        },
        set: function () {}
    },
    fullScreenSourceRect: {
        get: function () {
            return this._fullScreenSourceRect;
        },
        set: function (rect) {
            if (rect instanceof Rectangle) {
                this._fullScreenSourceRect = rect;
            }
        }
    },
    fullScreenWidth: {
        get: function () {
            return this._fullScreenWidth;
        },
        set: function () {}
    },
    mouseLock: {
        get: function () {
            return this._mouseLock;
        },
        set: function (mouseLock) {
            if (typeof mouseLock === "boolean") {
                this._mouseLock = mouseLock
            }
        }
    },
    nativeWindow: {
        get: function () {
            return this._nativeWindow;
        },
        set: function () {}
    },
    quality: {
        get: function () {
            return this._quality;
        },
        set: function (quality) {
            if (typeof quality === "string") {
                var value = quality.toLowerCase();
                switch (value) {
                    case StageQuality.LOW:
                    case StageQuality.MEDIUM:
                    case StageQuality.HIGH:
                    case StageQuality.BEST:
                        this._quality = value;
                        break;
                }
            }
        }
    },
    scaleMode: {
        get: function () {
            return this._scaleMode;
        },
        set: function (scaleMode) {
            if (typeof scaleMode === "string") {
                switch (scaleMode) {
                    case StageScaleMode.EXACT_FIT:
                    case StageScaleMode.NO_BORDER:
                    case StageScaleMode.NO_SCALE:
                    case StageScaleMode.SHOW_ALL:
                        this._scaleMode = scaleMode;
                        break;
                }
            }
        }
    },
    showDefaultContextMenu: {
        get: function () {
            return this._showDefaultContextMenu;
        },
        set: function (showDefaultContextMenu) {
            if (typeof showDefaultContextMenu === "boolean") {
                this._showDefaultContextMenu = showDefaultContextMenu;
            }
        }
    },
    softKeyboardRect: {
        get: function () {
            return this._softKeyboardRect;
        },
        set: function () {}
    },
    stage3Ds: {
        get: function () {
            return this._stage3Ds;
        },
        set: function () {}
    },
    stageFocusRect: {
        get: function () {
            return this._stageFocusRect;
        },
        set: function (stageFocusRect) {
            if (typeof stageFocusRect === "boolean") {
                this._stageFocusRect = stageFocusRect;
            }
        }
    }

});

/**
 * @returns {string}
 */
Stage.prototype.toString = function ()
{
    return "[object Stage]";
};

/**
 * @param   {Stage} stage
 * @returns {Stage}
 */
Stage.prototype.initialSetting = function (stage)
{
    // create root
    var main       = new MainTimeline();
    main.stage     = stage; // main stage
    main.container = this;  // container stage

    // add child
    this.addChildAt(main, 0);

    // set id
    this._$mainTimelineId = main.id;

    return this;
};

/**
 * @param   {Player} player
 * @returns {Stage}
 */
Stage.prototype.initialDictionary = function (player)
{
    // set player id
    this._$playerId = player.id;

    // add stage
    this._$id = this.$stages.length;

    return this;
};
/**
 * @constructor
 */
var Stage3D = function () {};
/**
 * @type {{BOTTOM: string, BOTTOM_LEFT: string, BOTTOM_RIGHT: string, LEFT: string, RIGHT: string, TOP: string, TOP_LEFT: string, TOP_RIGHT: string}}
 */
var StageAlign = {
    "BOTTOM"      : "B",
    "BOTTOM_LEFT" : "BL",
    "BOTTOM_RIGHT": "BR",
    "LEFT"        : "L",
    "RIGHT"       : "R",
    "TOP"         : "T",
    "TOP_LEFT"    : "TL",
    "TOP_RIGHT"   : "TR"
};
/**
 * @type {{FULL_SCREEN: string, FULL_SCREEN_INTERACTIVE: string, NORMAL: string}}
 */
var StageDisplayState = {
    "FULL_SCREEN"            : "fullScreen",
    "FULL_SCREEN_INTERACTIVE": "fullScreenInteractive",
    "NORMAL"                 : "normal"
};
/**
 * @type {{BEST: string, HIGH: string, HIGH_16X16: string, HIGH_16X16_LINEAR: string, HIGH_8X8: string, HIGH_8X8_LINEAR: string, LOW: string, MEDIUM: string}}
 */
var StageQuality = {
    "BEST"             : "best",
    "HIGH"             : "high",
    "HIGH_16X16"       : "16x16",
    "HIGH_16X16_LINEAR": "16x16linear",
    "HIGH_8X8"         : "8x8",
    "HIGH_8X8_LINEAR"  : "8x8linear",
    "LOW"              : "low",
    "MEDIUM"           : "medium"
};
/**
 * @type {{EXACT_FIT: string, NO_BORDER: string, NO_SCALE: string, SHOW_ALL: string}}
 */
var StageScaleMode = {
    "EXACT_FIT": "exactFit",
    "NO_BORDER": "noBorder",
    "NO_SCALE" : "noScale",
    "SHOW_ALL" : "showAll"
};
/**
 * @type {{NEGATIVE: string, NONE: string, POSITIVE: string}}
 */
var TriangleCulling = {
    "NEGATIVE": "negative",
    "NONE"    : "none",
    "POSITIVE": "positive"
};
/**
 * @constructor
 */
var Program3D = function () {};
/**
 * @constructor
 */
var CubeTexture = function () {};
/**
 * @constructor
 */
var RectangleTexture = function () {};
/**
 * @constructor
 */
var Texture = function () {};
/**
 * @constructor
 */
var VideoTexture = function () {};
/**
 * @constructor
 */
var Clipboard = function () {};
/**
 * @type {{HTML_FORMAT: string, RICH_TEXT_FORMAT: string, TEXT_FORMA: string}}
 */
var ClipboardFormats = {
    "HTML_FORMAT"     : "air:html",
    "RICH_TEXT_FORMAT": "air:rtf",
    "TEXT_FORMA"      : "air:text"
};
/**
 * @type {{CLONE_ONLY: string, CLONE_PREFERRED: string, ORIGINAL_ONLY: string, ORIGINAL_PREFERRED: string}}
 */
var ClipboardTransferMode = {
    "CLONE_ONLY"        : "cloneOnly",
    "CLONE_PREFERRED"   : "clonePreferred",
    "ORIGINAL_ONLY"     : "originalOnly",
    "ORIGINAL_PREFERRED": "originalPreferred"
};
/**
 * @constructor
 */
var AntiAliasType = function () {};

/**
 * @constructor
 * @constructor
 */
var CSMSettings = function () {};
/**
 * @constructor
 */
var Font = function () {};
/**
 * @constructor
 */
var FontStyle = function() {};
/**
 * @constructor
 */
var FontType = function () {};
/**
 * @constructor
 */
var GridFitType = function () {};

/**
 * @constructor
 */
var StaticText = function ()
{
    DisplayObject.call(this);
    this.data    = null;
    this.records = [];
};

/**
 * extends
 * @type {DisplayObject}
 */
StaticText.prototype = Object.create(DisplayObject.prototype);
StaticText.prototype.constructor = StaticText;

/**
 * dummy
 */
StaticText.prototype.initFrame   = function () {};
StaticText.prototype.addActions  = function () {};
StaticText.prototype.setHitRange = function () {};
/**
 * @returns {string}
 */
StaticText.prototype.getClassName = function ()
{
    return "StaticText";
};

/**
 * @returns {{}}
 */
StaticText.prototype.getBounds = function (matrix)
{
    if (matrix) {
        var bounds = this.boundsMatrix(this.bounds, matrix);
        for (var name in bounds) {
            if (!bounds.hasOwnProperty(name)) {
                continue;
            }
            var value    = +bounds[name];
            bounds[name] = +(value / 20);
        }
        return bounds;
    } else {
        return this.bounds;
    }
};

/**
 * @param bounds
 */
StaticText.prototype.setBounds = function (bounds)
{
    this.bounds = bounds;
};

/**
 * @returns {Array}
 */
StaticText.prototype.getRecords = function ()
{
    return this.records;
};

/**
 * @param record
 */
StaticText.prototype.addRecord = function (record)
{
    var records = this.getRecords();
    records[records.length] = record;
};

/**
 * @param ctx
 * @param matrix
 * @param colorTransform
 * @param stage
 * @param visible
 * @return {*}
 */
StaticText.prototype.render = function (ctx, matrix, colorTransform, stage, visible)
{
    // colorTransform
    var rColorTransform = this.$multiplicationColor(colorTransform, this.getColorTransform());

    var isVisible = this.$min(this.getVisible(), visible);
    var alpha     = +(rColorTransform[3] + (rColorTransform[7] / 255));
    var stageClip = stage.clipMc || stage.isClipDepth;
    if (!stageClip && (!alpha || !isVisible)) {
        return 0;
    }

    // matrix
    var m2 = this.$multiplicationMatrix(matrix, this.getMatrix());

    // pre render
    var obj = this.preRender(ctx, m2, rColorTransform, stage, visible);
    var m3  = this.$multiplicationMatrix(stage.getMatrix(), obj.preMatrix);

    var xScale = +this.$sqrt(m3[0] * m3[0] + m3[1] * m3[1]);
    var yScale = +this.$sqrt(m3[2] * m3[2] + m3[3] * m3[3]);
    xScale = +this.$pow(this.$SQRT2, this.$ceil(this.$log(xScale) / this.$LN2_2 - this.$LOG1P));
    yScale = +this.$pow(this.$SQRT2, this.$ceil(this.$log(yScale) / this.$LN2_2 - this.$LOG1P));

    // render
    var bounds = this.getBounds();
    var xMax   = +bounds.xMax;
    var xMin   = +bounds.xMin;
    var yMax   = +bounds.yMax;
    var yMin   = +bounds.yMin;

    var W = this.$abs(this.$ceil((xMax - xMin) * xScale))|0;
    var H = this.$abs(this.$ceil((yMax - yMin) * yScale))|0;
    var isClipDepth = this.isClipDepth || stageClip;
    if (W > 0 && H > 0) {
        var cacheId  = this.getCharacterId() + "_" + this.getStage().getId();
        var cacheKey = this.$cacheStore.generateKey(cacheId, [xScale, yScale], rColorTransform);
        var cache    = this.$cacheStore.getCache(cacheKey);

        var canvas;
        if (!cache && !isClipDepth) {
            if (stage.getWidth() > W && stage.getHeight() > H && this.$cacheStore.size > W * H) {
                canvas        = this.$cacheStore.getCanvas();
                canvas.width  = W;
                canvas.height = H;
                cache         = canvas.getContext("2d");

                var cMatrix = [xScale, 0, 0, yScale, -xMin * xScale, -yMin * yScale];
                cache.setTransform(cMatrix[0],cMatrix[1],cMatrix[2],cMatrix[3],cMatrix[4],cMatrix[5]);
                cache = this.executeRender(cache, cMatrix, rColorTransform, false, false);
                this.$cacheStore.setCache(cacheKey, cache);
            }
        }

        if (cache) {
            canvas = cache.canvas;
            var m4 = this.$multiplicationMatrix(m3, [1 / xScale, 0, 0, 1 / yScale, xMin, yMin]);
            ctx.setTransform(m4[0],m4[1],m4[2],m4[3],m4[4],m4[5]);

            if (this.$isAndroid4x && !this.$isChrome) {
                ctx.fillStyle = stage.context.createPattern(cache.canvas, "no-repeat");
                ctx.fillRect(0, 0, W, H);
            } else {
                ctx.drawImage(canvas, 0, 0, W, H);
            }
        } else {
            ctx.setTransform(m3[0],m3[1],m3[2],m3[3],m3[4],m3[5]);
            this.executeRender(ctx, m3, rColorTransform, isClipDepth, stageClip);
        }

        cacheKey += "_" + m3[4] + "_" + m3[5];
        if (obj.isFilter || obj.isBlend) {
            obj.cacheKey = cacheKey;
            this.postRender(ctx, matrix, rColorTransform, stage, obj);
        }

        return cacheKey;
    }

    return null;
};

/**
 * @param ctx
 * @param matrix
 * @param colorTransform
 * @param isClipDepth
 * @param stageClip
 * @returns {*}
 */
StaticText.prototype.executeRender = function (ctx, matrix, colorTransform, isClipDepth, stageClip)
{
    var records = this.getRecords();
    var length  = records.length|0;
    if (!length) {
        return ctx;
    }

    var i = 0;
    while (i < length) {
        var record = records[i];
        i = (i + 1)|0;

        var shapes      = record.getData();
        var shapeLength = shapes.length|0;
        if (!shapeLength) {
            continue;
        }

        var m2 = this.$multiplicationMatrix(matrix, record.getMatrix());
        ctx.setTransform(m2[0],m2[1],m2[2],m2[3],m2[4],m2[5]);

        var color     = record.getColor();
        color         = this.$generateColorTransform(color, colorTransform);
        ctx.fillStyle = "rgba(" + color.R + "," + color.G + "," + color.B + "," + color.A + ")";

        var idx = 0;
        while (idx < shapeLength) {
            var styleObj = shapes[idx];
            var cmd      = styleObj.cmd;

            if (!isClipDepth) {
                ctx.beginPath();
                cmd(ctx);
                ctx.fill();
            } else {
                cmd(ctx);
            }

            idx = (idx + 1)|0;
        }
    }

    if (isClipDepth && !stageClip) {
        ctx.clip();
    }

    ctx.globalAlpha = 1;
    return ctx;
};

/**
 * @param ctx
 * @param matrix
 * @param stage
 * @param x
 * @param y
 * @returns {boolean}
 */
StaticText.prototype.renderHitTest = function (ctx, matrix, stage, x, y)
{
    var records = this.getRecords();
    var length  = records.length|0;
    if (!length) {
        return false;
    }

    var hit = false;
    var m2  = this.$multiplicationMatrix(matrix, this.getMatrix());
    var m3  = this.$multiplicationMatrix(stage.getMatrix(), m2);

    var i = 0;
    while (i < length) {
        var record = records[i];
        i = (i + 1)|0;

        var shapes      = record.getData();
        var shapeLength = shapes.length|0;
        if (!shapeLength) {
            continue;
        }

        var m4 = this.$multiplicationMatrix(m3, record.getMatrix());
        ctx.setTransform(m4[0],m4[1],m4[2],m4[3],m4[4],m4[5]);

        var idx = 0;
        while (idx < shapeLength) {
            var styleObj = shapes[idx];
            var cmd      = styleObj.cmd;

            ctx.beginPath();
            cmd(ctx);

            hit = ctx.isPointInPath(x, y);
            if (hit) {
                return hit;
            }

            idx = (idx + 1)|0;
        }
    }

    return hit;
};
/**
 * @constructor
 */
var StyleSheet = function () {};
/**
 * @constructor
 */
var TextColorType = function () {};
/**
 * @constructor
 */
var TextDisplayMode = function () {};
/**
 * @param name
 * @param depth
 * @param width
 * @param height
 * @constructor
 */
var TextField = function (name, depth, width, height)
{
    InteractiveObject.call(this);

    if (name) {
        // this.setName(name);
    }

    if (depth) {
        // this.setLevel(depth);
    }

    if (width === undefined) {
        width = 0;
    }
    width = width * 20;

    if (height === undefined) {
        height = 0;
    }
    height = height * 20;

    this.fontId      = 0;
    this.input       = null;
    this.inputActive = false;
    this.span        = null;
    this.bounds      = {xMin: 0, xMax: width, yMin: 0, yMax: height};
};

/**
 * extends
 * @type {InteractiveObject}
 */
TextField.prototype = Object.create(InteractiveObject.prototype);
TextField.prototype.constructor = TextField;

/**
 * properties
 */
Object.defineProperties(TextField.prototype, {
    text: {
        get: function () {
            return this.variables.text;
        },
        set: function (text) {
            this.variables.text = text;
        }
    },
    htmlText: {
        get: function () {
            return this.variables.text;
        },
        set: function (text) {
            this.variables.text = text;
        }
    },
    size: {
        get: function () {
            return this.variables.size;
        },
        set: function (size) {
            this.variables.size = size;
        }
    },
    font: {
        get: function () {
            return this.variables.font;
        },
        set: function (font) {
            this.variables.font = font;
        }
    },
    type: {
        get: function () {
            return this.variables.type;
        },
        set: function (type) {
            this.variables.type = type;
            if (type === "input") {
                this.setInputElement();
            }
        }
    },
    multiline: {
        get: function () {
            return this.variables.multiline;
        },
        set: function (multiline) {
            this.variables.multiline = multiline;
            if (multiline) {
                this.wordWrap = multiline;
            }
            if (this.type === "input") {
                this.setInputElement();
            }
        }
    },
    wordWrap: {
        get: function () {
            return this.variables.wordWrap;
        },
        set: function (wordWrap) {
            this.variables.wordWrap = wordWrap;
            if (this.type === "input") {
                this.setInputElement();
            }
        }
    },
    border: {
        get: function () {
            return this.variables.border;
        },
        set: function (border) {
            this.variables.border = border;
        }
    },
    borderColor: {
        get: function () {
            return this.variables.borderColor;
        },
        set: function (color) {
            if (typeof color === "string") {
                color = this.$colorStringToInt(color);
            }
            color = this.$intToRGBA(color);
            this.variables.borderColor = color;
        }
    },
    background: {
        get: function () {
            return this.variables.background;
        },
        set: function (background) {
            this.variables.background = background;
        }
    },
    backgroundColor: {
        get: function () {
            return this.variables.backgroundColor;
        },
        set: function (color) {
            if (typeof color === "string") {
                color = this.$colorStringToInt(color);
            }
            color = this.$intToRGBA(color);
            this.variables.backgroundColor = color;
        }
    },
    textColor: {
        get: function () {
            return this.variables.textColor;
        },
        set: function (color) {
            if (typeof color === "string") {
                color = this.$colorStringToInt(color);
            }
            color = this.$intToRGBA(color);
            this.variables.textColor = color;
        }
    },
    align: {
        get: function () {
            return this.variables.align;
        },
        set: function (align) {
            this.variables.align = align;
        }
    },
    autoSize: {
        get: function () {
            return this.variables.autoSize;
        },
        set: function (autoSize) {
            this.variables.autoSize = autoSize;
        }
    },
    onChanged: {
        get: function () {
            return this.variables.onChanged;
        },
        set: function (onChanged) {
            this.variables.onChanged = onChanged;
        }
    }
});

/**
 * @returns {string}
 */
TextField.prototype.getClassName = function ()
{
    return "TextField";
};

/**
 * @param int
 * @param alpha
 * @returns {{R: number, G: number, B: number, A: number}}
 */
TextField.prototype.intToRGBA = function (int, alpha)
{
    alpha = alpha || 100;
    return {
        R: (int & 0xff0000) >> 16,
        G: (int & 0x00ff00) >> 8,
        B: (int & 0x0000ff),
        A: (alpha / 100)
    };
};

/**
 * setInitParams
 */
TextField.prototype.setInitParams = function ()
{
    var obj = {};
    obj.antiAliasType     = null;
    obj.autoSize          = "none";
    obj.background        = 0;
    obj.backgroundColor   = {R: 255, G: 255, B: 255, A: 1};
    obj.border            = 0;
    obj.borderColor       = {R: 0, G: 0, B: 0, A: 1};
    obj.condenseWhite     = 0;
    obj.html              = 0;
    obj.password          = 0;
    obj.embedFonts        = 0;
    obj.gridFitType       = "none";
    obj.maxChars          = null;
    obj.mouseWheelEnabled = 0;
    obj.multiline         = 0;
    obj.selectable        = 0;
    obj.sharpness         = 0;
    obj.textColor         = 0;
    obj.thickness         = 0;
    obj.type              = "dynamic";
    obj.wordWrap          = 0;
    obj.text              = "";

    for (var key in obj) {
        if (!obj.hasOwnProperty(key)) {
            continue;
        }
        this.setProperty(key, obj[key]);
    }

    this.setTextFormat(new TextFormat());
};

/**
 * @returns {string}
 */
TextField.prototype.getTagName = function ()
{
    return "__swf2js_input_element_" + this.instanceId;
};

/**
 * @param format
 */
TextField.prototype.setTextFormat = function (format)
{
    for (var name in format) {
        if (!format.hasOwnProperty(name)) {
            continue;
        }
        this.setProperty(name, format[name]);
    }
};

/**
 * @returns {*}
 */
TextField.prototype.getBounds = function (matrix)
{
    if (matrix) {
        var bounds = this.boundsMatrix(this.bounds, matrix);
        for (var name in bounds) {
            if (!bounds.hasOwnProperty(name)) {
                continue;
            }

            var value    = +bounds[name];
            bounds[name] = +(value / 20);
        }
        return bounds;
    } else {
        return this.bounds;
    }
};

/**
 * @param bounds
 */
TextField.prototype.setBounds = function (bounds)
{
    this.bounds = bounds;
};

/**
 * InputElemen
 */
TextField.prototype.setInputElement = function ()
{
    var variables = this.variables;
    var _root     = this.getDisplayObject("_root");
    var stage     = _root.getParentStage();
    var element   = this.$document.createElement("textarea");
    var multiline = variables.multiline;
    var align     = variables.align;

    var text = this.initialText;
    if (!text) {
        text = variables.text;
    }

    element.onkeypress = null;
    if (!multiline) {
        element.onkeypress = function (e)
        {
            if (e.keyCode === 13) {
                return false;
            }
        };
    }

    var style = element.style;

    style.position           = "absolute";
    style.webkitBorderRadius = "0px";
    style.padding            = "1px";
    style.margin             = "0px";
    style.webkitAppearance   = "none";
    style.resize             = "none";
    style.border             = "none";
    style.overflow           = "hidden";
    style.backgroundColor    = "transparent";
    style.zIndex             = 0x7fffffff;
    style.textAlign          = align;

    element.value = text;
    if (typeof text !== "string") {
        var str    = "";
        var length = 0 | text.length;

        var i = 0;
        while (i < length) {
            var txt = text[i];
            str    += txt.innerText;

            if ((i + 1) !== length) {
                str += "\n";
            }

            i = 0 | i + 1;
        }

        element.value = str;
    }

    element.id = this.getTagName();

    var self = this;
    var onBlur = function (stage, textField, el)
    {
        return function ()
        {
            textField.setProperty("text", el.value);
            textField.inputActive = false;

            var div = self.$document.getElementById(stage.getName());
            if (div) {
                var element = self.$document.getElementById(textField.getTagName());
                if (element) {
                    try {
                        div.removeChild(element);
                    } catch (e) {}
                }
            }
        };
    };

    element.onblur = onBlur(stage, this, element);
    this.input = element;
};

/**
 * @param matrix
 * @param stage
 * @param visible
 * @param mask
 */
TextField.prototype.setHitRange = function (matrix, stage, visible, mask)
{
    var type      = this.variables.type;
    var isVisible = this.$min(this.getVisible(), visible)|0;
    if (type === "input" && isVisible === 1) {
        var buttonHits = stage.buttonHits;

        var m2     = this.$multiplicationMatrix(matrix, this.getMatrix());
        var bounds = this.getBounds(m2);

        buttonHits[buttonHits.length] = {
            xMax:   +bounds.xMax,
            xMin:   +bounds.xMin,
            yMax:   +bounds.yMax,
            yMin:   +bounds.yMin,
            parent: this
        };
    }
};

/**
 * @param ctx
 * @param matrix
 * @param colorTransform
 * @param stage
 * @param visible
 */
TextField.prototype.render = function (ctx, matrix, colorTransform, stage, visible)
{
    stage.doneTags.unshift(this);

    // return "";

    // colorTransform
    var rColorTransform = this.$multiplicationColor(colorTransform, this.getColorTransform());
    var isVisible       = this.$min(this.getVisible(), visible);
    var stageClip       = stage.clipMc || stage.isClipDepth;
    var alpha           = rColorTransform[3] + (rColorTransform[7] / 255);
    if (!stageClip && (!alpha || !isVisible)) {
        return 0;
    }

    // matrix
    var m2 = this.$multiplicationMatrix(matrix, this.getMatrix());

    // pre render
    var obj       = this.preRender(ctx, m2, rColorTransform, stage, visible);
    var preCtx    = obj.preCtx;
    var preMatrix = obj.preMatrix;
    var m3        = this.$multiplicationMatrix(stage.getMatrix(), preMatrix);
    preCtx.setTransform(m3[0],m3[1],m3[2],m3[3],m3[4],m3[5]);

    var textCacheKey = [];
    var variables    = this.variables;
    var text         = variables.text;
    var variable     = variables.variable;
    if (variable) {
        var parent = this.getParent();
        text       = parent.getProperty(variable);
        if (text === undefined) {
            text = variables.text;
        }
    }

    if (typeof text === "number") {
        text += "";
    }

    var html = variables.html;
    if (html && typeof text === "string") {
        if (text.indexOf("<sbr />") !== -1) {
            text = text.replace(new RegExp("<sbr />", "gi"), "\n");
        }
        if (text.indexOf("<b>") !== -1) {
            text = text.replace(new RegExp("<b>", "gi"), "");
            text = text.replace(new RegExp("</b>", "gi"), "");
        }

        var span = this.$document.createElement("span");
        span.innerHTML = text;

        var tags = span.getElementsByTagName("p");
        var domLength = tags.length;
        if (domLength) {
            var tagData = [];
            for (var d = 0; d < domLength; d++) {
                tagData[d] = tags[d];
            }
            text = tagData;
        } else {
            text = span.innerText;
        }
    }

    preCtx.textBaseline = "top";
    if (text === undefined) {
        text = "";
    }

    var bounds = this.getBounds();
    var xMax   = bounds.xMax;
    var xMin   = bounds.xMin;
    var yMax   = bounds.yMax;
    var yMin   = bounds.yMin;
    var W      = this.$abs(this.$ceil(xMax - xMin));
    var H      = this.$abs(this.$ceil(yMax - yMin));

    // auto size
    var i, txtObj, measureText;

    var scale          = stage.getScale();
    var autoSize       = variables.autoSize;
    var wordWrap       = variables.wordWrap;
    var splitData      = (typeof text === "string") ? text.split("\n") : text;
    var length         = 0 | splitData.length;
    var txtTotalWidth  = 0;
    var txtTotalHeight = 0;
    var isAutoSize     = false;
    var autoMode       = (typeof autoSize === "string") ? autoSize.toLowerCase() : autoSize;
    switch (autoMode) {
        default:
        case "none":
        case false:
        case 0:
            txtTotalWidth  = W;
            txtTotalHeight = H;
            break;
        case true:
        case 1:
        case "left":
        case "center":
        case "right":
            isAutoSize = true;
            break;
    }

    var fontData = this.getStage().getCharacter(this.fontId);
    if (isAutoSize) {
        if (variables.embedFonts) {
            var CodeTable        = fontData.CodeTable;
            var FontAdvanceTable = fontData.FontAdvanceTable;
            var fontScale        = this.fontScale;
            txtTotalWidth        = 0;
            txtTotalHeight       = (fontData.FontAscent * fontScale) + variables.leading;

            i = 0;
            while (i < length) {
                txtObj = splitData[i];
                i = 0 | i + 1;

                if (typeof txtObj !== "string") {
                    var firstChild = txtObj.firstChild;
                    txtTotalWidth  = this.getDomWidth(firstChild, CodeTable, FontAdvanceTable);
                } else {
                    var txtLength = 0 | txtObj.length;
                    var idx = 0;
                    while (idx < txtLength) {
                        var index = CodeTable.indexOf(txtObj[idx].charCodeAt(0));
                        idx = 0 | idx + 1;

                        if (index === -1) {
                            continue;
                        }

                        txtTotalWidth = 0 | (FontAdvanceTable[index] * fontScale) + txtTotalWidth;
                    }
                }
            }
        } else {
            var addH       = (variables.size * 20) + variables.leading;
            txtTotalHeight = (bounds.yMin + 80);
            if (wordWrap) {
                txtTotalWidth = W;

                i = 0;
                while (i < length) {
                    txtObj = splitData[i];
                    i = 0 | i + 1;

                    if (typeof txtObj === "string") {
                        measureText = preCtx.measureText(txtObj);
                        var checkW  = this.$ceil(measureText.width * 20);
                        if (checkW > W) {
                            txtTotalHeight += this.$ceil(this.$ceil(checkW / W) * addH);
                        }
                    }
                }
            } else {
                i = 0;
                while (i < length) {
                    txtObj = splitData[i];
                    i = 0 | i + 1;

                    if (typeof txtObj === "string") {
                        measureText     = preCtx.measureText(txtObj);
                        txtTotalWidth   = this.$max(txtTotalWidth, this.$ceil(measureText.width * 20));
                        txtTotalHeight += addH;
                    }
                }
            }

            txtTotalWidth = 0 | txtTotalWidth ;+ 80;
        }
    }

    var offsetX = 40;
    switch (autoMode) {
        case "center":
            offsetX = this.$ceil((this.$max(txtTotalWidth, W) - this.$min(txtTotalWidth, W)) / 2);
            break;
        case "right":
            offsetX = this.$ceil(this.$max(txtTotalWidth, W) - this.$min(txtTotalWidth, W));
            break;
    }

    W = txtTotalWidth;
    H = txtTotalHeight;

    if (W > 0 && H > 0) {
        var color;

        var isClipDepth = this.isClipDepth || stageClip;
        var rx          = xMin;
        var ry          = yMin;
        var m           = this._matrix;
        if (m) {
            rx = -xMin;
            ry = -yMin;
            var m4 = this.$multiplicationMatrix(preMatrix, [1, 0, 0, 1, xMin, yMin]);
            m3     = this.$multiplicationMatrix(stage.getMatrix(), m4);
            preCtx.setTransform(m3[0],m3[1],m3[2],m3[3],m3[4],m3[5]);
        }

        // border
        var border = variables.border;
        if (border && !isClipDepth) {
            preCtx.beginPath();
            preCtx.rect(rx - offsetX, ry, W, H);

            color = this.$generateColorTransform(variables.borderColor, rColorTransform);

            textCacheKey[textCacheKey.length] = color;

            preCtx.strokeStyle = "rgba(" + color.R + "," + color.G + "," + color.B + "," + color.A + ")";
            preCtx.lineWidth   = this.$min(20, 1 / this.$min(m3[0], m3[3]));
            preCtx.globalAlpha = 1;
            preCtx.fillStyle   = "rgba(0,0,0,0)";

            if (variables.background) {
                color = this.$generateColorTransform(variables.backgroundColor, rColorTransform);
                textCacheKey[textCacheKey.length] = color;
                preCtx.fillStyle = "rgba(" + color.R + "," + color.G + "," + color.B + "," + color.A + ")";
            }

            preCtx.fill();
            preCtx.stroke();
        }

        var textColor = variables.textColor;
        var objRGBA   = textColor;
        if (typeof textColor === "number") {
            objRGBA = this.$intToRGBA(textColor, 100);
        }

        color         = this.$generateColorTransform(objRGBA, rColorTransform);
        var fillStyle = "rgba(" + color.R + "," + color.G + "," + color.B + "," + color.A + ")";
        textCacheKey[textCacheKey.length] = fillStyle;

        preCtx.fillStyle = fillStyle;

        // font type
        var fontType = "";

        // italic
        if (variables.italic) {
            fontType += "italic ";
        }

        // bold
        if (variables.bold) {
            fontType += "bold ";
        }

        var fontStyle = fontType + variables.size + "px " + variables.font;
        textCacheKey[textCacheKey.length] = fontStyle.replace(/ /g , "_");
        preCtx.font = fontStyle;

        if (this.input !== null) {
            var input    = this.input;
            var fontSize = this.$ceil(variables.size * scale * this.$min(preMatrix[0], preMatrix[3]));

            input.style.font  = fontType + fontSize + "px " + variables.font;
            input.style.color = "rgba(" + color.R + "," + color.G + "," + color.B + "," + color.A + ")";

            var as = variables.onChanged;
            if (as && !input.onchange) {
                var onChanged = function (stage, origin, clip, el)
                {
                    return function ()
                    {
                        if (clip.active) {
                            clip.setProperty("text", el.value);
                            origin.apply(clip, arguments);
                            stage.executeAction();
                        }
                    };
                };
                input.onchange = onChanged(stage, as, this, input);
            }
        }

        if (text && !isClipDepth) {
            preCtx.save();
            preCtx.beginPath();
            preCtx.rect(rx - offsetX, ry, W, (H-40));
            preCtx.clip();

            if (this.inputActive === false) {
                if (variables.embedFonts) {
                    this.renderOutLine(preCtx, fontData, splitData, m3, rx - offsetX, W, fillStyle);
                } else {
                    this.renderText(preCtx, splitData, m3, fontType, fillStyle);
                }
            }

            preCtx.restore();
            preCtx.globalAlpha = 1;
        }

        textCacheKey[textCacheKey.length] = text.replace(/ /g , "_");
        textCacheKey[textCacheKey.length] = this.getCharacterId();

        var cacheKey = this.$cacheStore.generateKey(
            textCacheKey.join("_"), m3, rColorTransform
        );

        obj.cacheKey = cacheKey;
        if (obj.isFilter || obj.isBlend) {
            this.postRender(ctx, matrix, rColorTransform, stage, obj);
        }

        return cacheKey;
    }

    return null;
};

/**
 * @param ctx
 * @param fontData
 * @param splitData
 * @param matrix
 * @param offset
 * @param width
 * @param fillStyle
 */
TextField.prototype.renderOutLine = function (ctx, fontData, splitData, matrix, offset, width, fillStyle)
{
    var idx, index;

    var variables        = this.variables;
    var fontScale        = this.fontScale;
    var leading          = (fontData.FontAscent + fontData.FontDescent) * fontScale;
    var rightMargin      = variables.rightMargin * fontScale;
    var leftMargin       = variables.leftMargin * fontScale;
    var indent           = variables.indent * fontScale;
    var align            = variables.align;
    var txt              = "";
    var CodeTable        = fontData.CodeTable;
    var GlyphShapeTable  = fontData.GlyphShapeTable;
    var FontAdvanceTable = fontData.FontAdvanceTable;
    var YOffset          = (fontData.FontAscent * fontScale);
    var cacheYOffset     = YOffset;
    var wordWrap         = variables.wordWrap;
    var multiline        = variables.multiline;
    var bounds           = this.getBounds();
    var areaWidth        = (this.$ceil((bounds.xMax) - (bounds.xMin)) - leftMargin - rightMargin);

    var length = 0 | splitData.length;
    var i = 0;
    while (i < length) {
        var obj = splitData[i];
        i = 0 | i + 1;

        var XOffset   = offset;
        var textWidth = 0;
        var txtLength = 0;
        var firstChild;
        if (typeof obj !== "string") {
            firstChild = obj.firstChild;
            if (!firstChild) {
                continue;
            }

            textWidth = 0 | this.getDomWidth(firstChild, CodeTable, FontAdvanceTable);
            txt       = obj.innerText;
            align     = variables.align;
            if (obj.align) {
                align = obj.align;
            }
        } else {
            txt       = obj;
            txtLength = txt.length;
            idx = 0;
            while (idx < txtLength) {
                index = CodeTable.indexOf(txt[idx].charCodeAt(0));
                idx   = 0 | idx + 1;

                if (index === -1) {
                    continue;
                }

                textWidth = 0 | (FontAdvanceTable[index] * fontScale) + textWidth;
            }
        }

        if (align === "right") {
            XOffset = 0 | (XOffset + width - rightMargin - textWidth - 40);
        } else if (align === "center") {
            XOffset = 0 | (XOffset + indent + leftMargin + 40 + ((width - indent - leftMargin - rightMargin - textWidth) / 2));
        } else {
            XOffset = 0 | (XOffset + indent + leftMargin + 40);
        }

        var cacheXOffset = XOffset;
        var wordWidth    = 0;
        if (typeof obj !== "string") {
            var gridData = {
                XOffset:      XOffset,
                YOffset:      YOffset,
                cacheXOffset: cacheXOffset,
                cacheYOffset: cacheYOffset,
                wordWidth:    wordWidth,
                addXOffset:   0,
                size:         firstChild.size,
                areaWidth:    areaWidth,
                matrix:       matrix
            };

            this.renderDomOutLine(
                ctx, firstChild, gridData, fillStyle,
                CodeTable, FontAdvanceTable, GlyphShapeTable
            );
        } else {
            for (idx = 0; idx < txtLength; idx++) {
                index = CodeTable.indexOf(txt[idx].charCodeAt(0));
                if (index === -1) {
                    continue;
                }

                var addXOffset = FontAdvanceTable[index] * fontScale;
                if (wordWrap && multiline) {
                    if (wordWidth + addXOffset > areaWidth) {
                        XOffset   = cacheXOffset;
                        YOffset  += cacheYOffset;
                        wordWidth = 0;
                    }
                }

                var m2 = this.$multiplicationMatrix(matrix, [fontScale, 0, 0, fontScale, XOffset, YOffset]);
                ctx.setTransform(m2[0],m2[1],m2[2],m2[3],m2[4],m2[5]);
                this.renderGlyph(GlyphShapeTable[index], ctx);

                XOffset   = XOffset   + addXOffset;
                wordWidth = wordWidth + addXOffset;
            }
        }

        YOffset = YOffset + leading;
    }
};

/**
 * @param ctx
 * @param child
 * @param gridData
 * @param fillStyle
 * @param CodeTable
 * @param FontAdvanceTable
 * @param GlyphShapeTable
 */
TextField.prototype.renderDomOutLine = function (
    ctx, child, gridData, fillStyle,
    CodeTable, FontAdvanceTable, GlyphShapeTable
) {
    var variables  = this.variables;
    var wordWrap   = variables.wordWrap;
    var multiline  = variables.multiline;
    var stage      = this.getStage();
    var fonts      = stage.fonts;
    var face       = child.face;
    var fontData   = fonts[face];
    var codeTable  = CodeTable;
    var faTable    = FontAdvanceTable;
    var shapeTable = GlyphShapeTable;
    var color      = fillStyle;
    if (fontData) {
        codeTable  = fontData.CodeTable;
        faTable    = fontData.FontAdvanceTable;
        shapeTable = fontData.GlyphShapeTable;
    }

    if (child.color) {
        color = child.color;
    }

    if (child.size) {
        gridData.size = child.size;
    }

    var childNodes = child.childNodes;
    var length = childNodes.length;
    for (var i = 0; i < length; i++) {
        var node = childNodes[i];
        if (node instanceof HTMLFontElement) {
            this.renderDomOutLine(
                ctx, node, gridData, color,
                codeTable, faTable, shapeTable
            );
        } else {
            var size = gridData.size;
            var fontScale = size / 1024;
            var sTable;
            var values = node.nodeValue;
            if (!values) {
                continue;
            }
            var vLength = values.length;
            for (var idx = 0; idx < vLength; idx++) {
                var txt = values[idx];
                var index = codeTable.indexOf(txt.charCodeAt(0));
                if (index === -1) {
                    index = CodeTable.indexOf(txt.charCodeAt(0));
                    if (index === -1) {
                        continue;
                    }
                    color = fillStyle;
                    gridData.addXOffset = FontAdvanceTable[index] * fontScale;
                    sTable = GlyphShapeTable;
                } else  {
                    gridData.addXOffset = faTable[index] * fontScale;
                    sTable = shapeTable;
                }

                if (wordWrap && multiline) {
                    if (gridData.wordWidth + gridData.addXOffset > gridData.areaWidth) {
                        gridData.XOffset = gridData.cacheXOffset;
                        gridData.YOffset += gridData.cacheYOffset;
                        gridData.wordWidth = 0;
                    }
                }

                var m2 = [fontScale, 0, 0, fontScale, gridData.XOffset, gridData.YOffset];
                var m3 = this.$multiplicationMatrix(gridData.matrix, m2);
                ctx.setTransform(m3[0], m3[1], m3[2], m3[3], m3[4], m3[5]);
                ctx.fillStyle = color;
                this.renderGlyph(sTable[index], ctx);
                gridData.XOffset   += gridData.addXOffset;
                gridData.wordWidth += gridData.addXOffset;
            }
        }
    }
};

/**
 * @param child
 * @param CodeTable
 * @param FontAdvanceTable
 * @returns {number}
 */
TextField.prototype.getDomWidth = function (child, CodeTable, FontAdvanceTable)
{
    var fontScale = this.fontScale;
    var stage     = this.getStage();
    var fonts     = stage.fonts;
    var width     = 0;
    var face      = child.face;
    var fontData  = fonts[face];
    var codeTable = CodeTable;
    var faTable   = FontAdvanceTable;
    if (fontData) {
        codeTable = fontData.CodeTable;
        faTable   = fontData.FontAdvanceTable;
    }

    var childNodes = child.childNodes;
    var length     = childNodes.length;

    var i = 0;
    while (i < length) {
        var node = childNodes[i];
        i = 0 | i + 1;

        if (node instanceof HTMLFontElement) {
            var domWidth = 0 | this.getDomWidth(node, codeTable, faTable);
            width = 0 | width + domWidth;
        } else {
            var values = node.nodeValue;
            if (!values) {
                continue;
            }

            var vLength = values.length;
            var idx = 0;
            while (idx < vLength) {
                var txt = values[idx];
                idx = 0 | idx + 1;

                var index = codeTable.indexOf(txt.charCodeAt(0));
                if (index === -1) {
                    index = CodeTable.indexOf(txt.charCodeAt(0));
                    if (index === -1) {
                        continue;
                    }

                    width = 0 | (FontAdvanceTable[index] * fontScale) + width;
                } else  {
                    width = 0 | (faTable[index] * fontScale) + width;
                }
            }
        }
    }

    return width;
};

/**
 * @param records
 * @param ctx
 */
TextField.prototype.renderGlyph = function (records, ctx)
{
    if (!records.data) {
        records.data = this.$vtc.convert(records);
    }

    var shapes = records.data;
    var length = 0 | shapes.length;

    var idx = 0;
    while (idx < length) {
        var styleObj = shapes[idx];
        idx = 0 | idx + 1;

        var cmd = styleObj.cmd;
        ctx.beginPath();
        cmd(ctx);
        ctx.fill();
    }
};

/**
 * @param ctx
 * @param splitData
 * @param matrix
 * @param fontType
 * @param fillStyle
 */
TextField.prototype.renderText = function (ctx, splitData, matrix, fontType, fillStyle, _x)
{
    var variables   = this.variables;
    var wordWrap    = variables.wordWrap;
    var multiline   = variables.multiline;
    var leading     = variables.leading / 20;
    var rightMargin = variables.rightMargin / 20;
    var leftMargin  = variables.leftMargin / 20;
    var indent      = variables.indent / 20;
    var align       = variables.align;
    var bounds      = this.getBounds();
    var xMax        = bounds.xMax / 20;
    var xMin        = bounds.xMin / 20;
    var width       = this.$ceil(xMax - xMin);

    var m2     = [matrix[0] * 20, matrix[1] * 20, matrix[2] * 20, matrix[3] * 20, matrix[4], matrix[5]];
    var xScale = this.$sqrt(m2[0] * m2[0] + m2[1] * m2[1]);
    var yScale = this.$sqrt(m2[2] * m2[2] + m2[3] * m2[3]);
    var scale  = this.$max(xScale, yScale);
    ctx.setTransform(scale,m2[1],m2[2],scale,m2[4],m2[5]);

    var dx = xMin;
    var dy = (bounds.yMin / 20) + 2;
    if (align === "right") {
        ctx.textAlign = "end";
        dx += width - rightMargin - 2;
    } else if (align === "center") {
        ctx.textAlign = "center";
        dx += leftMargin + indent + ((width - leftMargin - indent - rightMargin) / 2);
    } else {
        dx += 2 + leftMargin + indent;
    }

    bounds        = this.getBounds(m2);
    var areaWidth = (bounds.xMax - bounds.xMin) - ((leftMargin - rightMargin) * xScale);
    areaWidth    /= scale;

    var size   = variables.size;
    var length = 0 | splitData.length;
    var i      = 0;
    while (i < length) {
        var txt = "";
        var obj = splitData[i];
        i = 0 | i + 1;

        if (typeof obj !== "string") {
            txt = obj.innerText;
        } else {
            txt = obj;
        }

        if (txt === "") {
            dy += leading + size;
            continue;
        }

        var measureText   = ctx.measureText(txt);
        var txtTotalWidth = measureText.width;
        if (typeof obj === "string") {
            if (wordWrap || multiline) {
                if (txtTotalWidth > areaWidth) {
                    var txtLength = 0 | txt.length;
                    var joinTxt   = "";
                    var joinWidth = 2 * scale;

                    var t = 0;
                    while (t < txtLength) {
                        var txtOne  = txt[t];
                        var textOne = ctx.measureText(txtOne);
                        joinWidth  += textOne.width;
                        joinTxt    += txtOne;
                        var nextOne = txt[t+1];
                        if (nextOne) {
                            textOne   = ctx.measureText(nextOne);
                            joinWidth = joinWidth + textOne.width;
                        }

                        if (joinWidth > areaWidth || (t + 1) === txtLength) {
                            ctx.fillText(joinTxt, dx, dy, this.$ceil(joinWidth));
                            joinWidth = 2 * scale;
                            joinTxt   = "";
                            dy        = dy + leading + size;
                        } else if (nextOne) {
                            joinWidth = joinWidth - textOne.width;
                        }

                        t = 0 | t + 1;
                    }
                } else {
                    ctx.fillText(txt, dx, dy, txtTotalWidth);
                    dy = dy + leading + size;
                }
            } else {
                ctx.fillText(txt, dx, dy, txtTotalWidth);
                dy = dy + leading + size;
            }
        } else {
            var firstChild = obj.firstChild;
            var gridData = {
                startDx:       dx,
                dx:            dx,
                cloneDy:       dy,
                dy:            dy,
                color:         fillStyle,
                fontType:      fontType,
                fillStyle:     fillStyle,
                size:          size,
                scale:         scale,
                originSize:    size,
                txtTotalWidth: txtTotalWidth,
                areaWidth:     areaWidth,
                joinWidth:     0,
                joinTxt:       "",
                offset:        0,
                offsetArray:   []
            };

            if (gridData.offsetArray.length === 0) {
                this.offsetDomText(ctx, firstChild, gridData);
            }

            // reset
            gridData.dx        = dx;
            gridData.dy        = dy;
            gridData.cloneDy   = dy;
            gridData.size      = size;
            gridData.joinWidth = 0;
            gridData.joinTxt   = "";
            gridData.offset    = 0;

            if (gridData.offsetArray.length > 0) {
                var offsetY = gridData.offsetArray[0];
                if (offsetY) {
                    gridData.dy     += offsetY;
                    gridData.cloneDy = gridData.dy;
                }
            }

            this.renderDomText(ctx, firstChild, gridData);

            dy = gridData.dy;
        }
    }
};

/**
 * @param ctx
 * @param child
 * @param gridData
 */
TextField.prototype.offsetDomText = function(ctx, child, gridData)
{
    var variables = this.variables;
    var wordWrap  = variables.wordWrap;
    var multiline = variables.multiline;
    var leading   = variables.leading / 20;
    if (child.face) {
        gridData.face = child.face;
    }

    if (child.size) {
        var size = child.size|0;
        var changeSize = gridData.originSize - size;
        if (changeSize) {
            gridData.dy += changeSize;
            if (changeSize > 0) {
                gridData.dy -= 4;
            } else {
                var offsetArray = gridData.offsetArray;
                var offset = gridData.offset;
                var offsetSize = offsetArray[offset];
                if (offsetSize) {
                    offsetArray[offset] = this.$max(offsetSize, ~changeSize);
                } else {
                    offsetArray[offset] = ~changeSize;
                }
                gridData.dy += 6;
            }
        }
        gridData.size = size;
    }

    var childNodes = child.childNodes;
    var length = childNodes.length;
    for (var i = 0; i < length; i++) {
        var node = childNodes[i];
        if (node instanceof HTMLFontElement) {
            this.offsetDomText(ctx, node, gridData);
        } else {
            var txt = node.nodeValue;
            if (wordWrap && multiline) {
                if (gridData.txtTotalWidth > gridData.areaWidth) {
                    var txtLength = txt.length;
                    for (var t = 0; t < txtLength; t++) {
                        var textOne = ctx.measureText(txt[t]);
                        gridData.joinWidth += textOne.width;
                        gridData.joinTxt += txt[t];
                        var isOver = (gridData.joinWidth > gridData.areaWidth);
                        if (isOver || (t + 1) === txtLength) {
                            if ((gridData.dx + textOne.width) > gridData.areaWidth) {
                                gridData.dx = gridData.startDx;
                                gridData.dy += leading + gridData.size;
                                gridData.cloneDy = gridData.dy;
                                gridData.joinWidth = 2 * gridData.scale;
                                isOver = false;
                                gridData.offset++;
                            }

                            gridData.joinTxt = "";
                            if (isOver) {
                                gridData.dx = gridData.startDx;
                                gridData.joinWidth = 22 * gridData.scale;
                                gridData.dy += leading + gridData.size;
                                gridData.cloneDy = gridData.dy;
                                gridData.offset++;
                            }
                        }
                    }
                } else {
                    gridData.dy += leading + gridData.size;
                    gridData.cloneDy = gridData.dy;
                    gridData.offset++;
                }
            } else {
                gridData.dy += leading + gridData.size;
                gridData.cloneDy = gridData.dy;
                gridData.offset++;
            }

            var mText = ctx.measureText(txt);
            gridData.dx += mText.width;
            gridData.size = gridData.originSize;
            gridData.dy = gridData.cloneDy;
        }
    }
};

/**
 * @param ctx
 * @param child
 * @param gridData
 */
TextField.prototype.renderDomText = function(ctx, child, gridData)
{
    var variables = this.variables;

    var wordWrap  = variables.wordWrap;
    var multiline = variables.multiline;
    var leading   = variables.leading / 20;

    if (child.face) {
        gridData.face = child.face;
    }

    if (child.color) {
        gridData.color = child.color;
    }

    if (child.size) {
        var size = 0 | child.size;
        var changeSize = 0 | gridData.originSize - size;
        if (changeSize) {
            gridData.dy += changeSize;
            if (changeSize > 0) {
                gridData.dy -= 4;
            } else {
                gridData.dy += 8;
            }
        }
        gridData.size = size;
    }

    var offsetY;
    var childNodes = child.childNodes;
    var length = childNodes.length;
    for (var i = 0; i < length; i++) {
        var node = childNodes[i];
        if (node instanceof HTMLFontElement) {
            this.renderDomText(ctx, node, gridData);
        } else {
            ctx.fillStyle = gridData.color;
            ctx.font = gridData.fontType + gridData.size + "px " + gridData.face;

            var text = node.nodeValue;
            var splits = text.split("\n");
            var sLen= splits.length;
            for (var idx = 0; idx < sLen; idx++) {
                gridData.dx = gridData.startDx;
                var txt = splits[idx];

                if (wordWrap && multiline) {
                    if (gridData.txtTotalWidth > gridData.areaWidth) {
                        var txtLength = txt.length;
                        for (var t = 0; t < txtLength; t++) {
                            var textOne = ctx.measureText(txt[t]);
                            gridData.joinWidth += textOne.width;
                            gridData.joinTxt += txt[t];
                            var isOver = (gridData.joinWidth > gridData.areaWidth);
                            if (isOver || (t + 1) === txtLength) {
                                if ((gridData.dx + textOne.width) > gridData.areaWidth) {
                                    isOver = 0;
                                    gridData.joinWidth = gridData.size;
                                    gridData.dx = gridData.startDx;
                                    gridData.offset++;
                                    gridData.dy += leading + gridData.size;
                                    if (gridData.offsetArray.length > 0) {
                                        offsetY = gridData.offsetArray[gridData.offset];
                                        if (offsetY) {
                                            gridData.dy += offsetY;
                                        }
                                    }
                                    gridData.cloneDy = gridData.dy;
                                }

                                ctx.fillText(gridData.joinTxt, gridData.dx, gridData.dy, _ceil(gridData.joinWidth));
                                gridData.joinTxt = "";
                                if (isOver) {
                                    gridData.dx = gridData.startDx;
                                    gridData.joinWidth = gridData.size;
                                    gridData.offset++;
                                    gridData.dy += leading + gridData.size;
                                    if (gridData.offsetArray.length > 0) {
                                        offsetY = gridData.offsetArray[gridData.offset];
                                        if (offsetY) {
                                            gridData.dy += offsetY;
                                        }
                                    }
                                    gridData.cloneDy = gridData.dy;
                                }
                            }
                        }
                    } else {
                        ctx.fillText(txt, gridData.dx, gridData.dy, _ceil(gridData.txtTotalWidth));
                        gridData.offset++;
                        gridData.dy += leading + gridData.size;
                        if (gridData.offsetArray.length > 0) {
                            offsetY = gridData.offsetArray[gridData.offset];
                            if (offsetY) {
                                gridData.dy += offsetY;
                            }
                        }
                        gridData.cloneDy = gridData.dy;
                    }
                } else {
                    ctx.fillText(txt, gridData.dx, gridData.dy, _ceil(gridData.txtTotalWidth));
                    gridData.offset++;
                    gridData.dy += leading + gridData.size;
                    if (gridData.offsetArray.length > 0) {
                        offsetY = gridData.offsetArray[gridData.offset];
                        if (offsetY) {
                            gridData.dy += offsetY;
                        }
                    }
                    gridData.cloneDy = gridData.dy;
                }

                var mText = ctx.measureText(txt);
                gridData.dx += mText.width;
                gridData.color = gridData.fillStyle;
                gridData.size = gridData.originSize;
                gridData.dy = gridData.cloneDy;
            }
        }
    }
};

/**
 * @param stage
 * @param clipEvent
 */
TextField.prototype.putFrame = function (stage, clipEvent)
{
    this.active = true;
    if (this.inputActive === false) {
        this.dispatchEvent(clipEvent, stage);
    }
};

/**
 * @param ctx
 * @param matrix
 * @param stage
 * @param x
 * @param y
 * @returns {boolean}
 */
TextField.prototype.renderHitTest = function (ctx, matrix, stage, x, y)
{
    var bounds = this.getBounds();
    var xMax   = bounds.xMax;
    var xMin   = bounds.xMin;
    var yMax   = bounds.yMax;
    var yMin   = bounds.yMin;
    var width  = this.$ceil(xMax - xMin);
    var height = this.$ceil(yMax - yMin);

    var m2 = this.$multiplicationMatrix(matrix, this.getMatrix());
    var m3 = this.$multiplicationMatrix(stage.getMatrix(), m2);

    ctx.setTransform(m3[0],m3[1],m3[2],m3[3],m3[4],m3[5]);

    var m = this._matrix;
    if (m) {
        xMin = -xMin;
        yMin = -yMin;
        var m4 = this.$multiplicationMatrix(m2, [1, 0, 0, 1, xMin, yMin]);
        var m5 = this.$multiplicationMatrix(stage.getMatrix(), m4);
        ctx.setTransform(m5[0],m5[1],m5[2],m5[3],m5[4],m5[5]);
    }

    ctx.beginPath();
    ctx.rect(xMin, yMin, width, height);

    return ctx.isPointInPath(x, y);
};

// dummy
TextField.prototype.initFrame  = function () {};
TextField.prototype.addActions = function () {};
TextField.prototype.getTags    = function () { return undefined; };
/**
 * @constructor
 */
var TextFieldAutoSize = function () {};
/**
 * @constructor
 */
var TextFieldType = function () {};
/**
 * @constructor
 */
var TextFormat = function ()
{
    this.align         = "left";
    this.font          = "'HiraKakuProN-W3', 'sans-serif'";
    this.size          = 8;
    this.color         = {R: 0, G: 0, B: 0, A: 1};
    this.bold          = 0;
    this.italic        = 0;
    this.underline     = 0;
    this.bullet        = 0;
    this.kerning       = 0;
    this.blockIndent   = 0;
    this.indent        = 0;
    this.leading       = 80;
    this.leftMargin    = 0;
    this.rightMargin   = 0;
    this.letterSpacing = 0;
    this.tabStops      = [];
    this.url           = null;
    this.target        = null;
};
/**
 * @constructor
 */
var TextFormatAlign = function () {};
/**
 * @constructor
 */
var TextLineMetrics = function () {};
/**
 * @constructor
 */
var TextRecord = function ()
{
    this.color  = null;
    this.matrix = null;
};

/**
 * @returns {*}
 */
TextRecord.prototype.getColor = function ()
{
    return this.color;
};

/**
 * @param color
 */
TextRecord.prototype.setColor = function (color)
{
    this.color = color;
};

/**
 * @returns {*}
 */
TextRecord.prototype.getMatrix = function ()
{
    return this.matrix;
};

/**
 * @param matrix
 */
TextRecord.prototype.setMatrix = function (matrix)
{
    this.matrix = matrix;
};

/**
 * @returns {Array}
 */
TextRecord.prototype.getData = function ()
{
    return this.data;
};

/**
 * @param data
 */
TextRecord.prototype.setData = function (data)
{
    this.data = data;
};
/**
 * @constructor
 */
var TextRenderer = function () {};
/**
 * @constructor
 */
var TextSnapshot = function ()
{
    this.charCount = 0;
};

/**
 * @param beginIndex
 * @param textToFind
 * @param caseSensitive
 */
TextSnapshot.prototype.findText = function (beginIndex, textToFind, caseSensitive)
{

};

/**
 * @param beginIndex
 * @param endIndex
 */
TextSnapshot.prototype.getSelected = function (beginIndex, endIndex)
{

};

/**
 * @param includeLineEndings
 */
TextSnapshot.prototype.getSelectedText = function (includeLineEndings)
{

};

TextSnapshot.prototype.getText = function (beginIndex, endIndex, includeLineEndings)
{

};

/**
 * @param beginIndex
 * @param endIndex
 */
TextSnapshot.prototype.getTextRunInfo = function (beginIndex, endIndex)
{

};

/**
 * @param x
 * @param y
 * @param maxDistance
 */
TextSnapshot.prototype.hitTestTextNearPos = function (x, y, maxDistance)
{

};

/**
 * @param hexColor
 */
TextSnapshot.prototype.setSelectColor = function (hexColor)
{

};

/**
 * @param beginIndex
 * @param endIndex
 * @param select
 */
TextSnapshot.prototype.setSelected = function (beginIndex, endIndex, select)
{

};
/**
 * @constructor
 */
var AVNetworkingParams = function () {};
/**
 * @constructor
 */
var AVURLLoader = function () {};
/**
 * @constructor
 */
var AVURLStream = function () {};
/**
 * @constructor
 */
var Camera = function () {};
/**
 * @constructor
 */
var ID3Info = function () {};
/**
 * @constructor
 */
var Microphone = function () {};
/**
 * @constructor
 */
var Sound = function ()
{
    this.variables  = {};
    this.sounds     = [];
    this.volume     = 100;
    this.pan        = 0;
    this.transform  = {ll: 100, lr: 100, rl: 100, rr: 100};
    this.isStreamin = false;
    this.movieClip  = null;
};

/**
 * properties
 */
Object.defineProperties(Sound.prototype,
    {
        onLoad: {
            get: function () {
                return this.getProperty("onLoad");
            },
            set: function (onLoad) {
                this.setProperty("onLoad", onLoad);
            }
        },
        onSoundComplete: {
            get: function () {
                return this.getProperty("onSoundComplete");
            },
            set: function (onSoundComplete) {
                this.setProperty("onSoundComplete", onSoundComplete);
            }
        }
    });

/**
 * @param name
 * @returns {*}
 */
Sound.prototype.getProperty = function (name)
{
    return this.variables[name];
};

/**
 * @param name
 * @param value
 */
Sound.prototype.setProperty = function (name, value)
{
    this.variables[String(name)] = value;
};

/**
 * @param currentTime
 * @param loopCount
 */
Sound.prototype.start = function (currentTime, loopCount)
{
    var sounds = this.sounds;

    var init = function (audio, time)
    {
        return function ()
        {
            audio.currentTime = time;
        };
    };

    var end = function (audio, sound)
    {
        return function ()
        {
            var volume = sound.volume;
            audio.loopCount--;
            if (audio.loopCount > 0) {
                audio.volume = volume / 100;
                audio.currentTime = 0;
                audio.play();
            }

            var onSoundComplete = sound.onSoundComplete;
            if (onSoundComplete) {
                onSoundComplete.apply(sound, [true]);
            }
        };
    };

    var audio;
    for (var id in sounds) {
        if (!sounds.hasOwnProperty(id)) {
            continue;
        }
        audio = sounds[id];
        audio.load();

        if (currentTime) {
            audio.addEventListener("canplay", init(audio, currentTime));
        }
        if (typeof loopCount === "number" && loopCount > 0) {
            audio.loopCount = loopCount;
            audio.addEventListener("ended", end(audio, this));
        }

        audio.play();
    }
};

/**
 * stop
 */
Sound.prototype.stop = function (id)
{
    var sounds = this.sounds;
    var audio;
    if (id) {
        audio = sounds[id];
        if (audio) {
            audio.pause();
        }
    } else {
        for (var key in sounds) {
            if (!sounds.hasOwnProperty(key)) {
                continue;
            }
            audio = sounds[key];
            audio.pause();
        }
    }
};

/**
 * @param url
 * @param bool
 */
Sound.prototype.loadSound = function (url, bool)
{
    this.isStreamin = bool;

    var sounds = this.sounds;
    var audio  = this.$document.createElement("audio");
    audio.src  = url;
    sounds[0]  = audio;

    var onLoad = (function (audio, sound)
    {
        return function() {
            audio.load();
            audio.preload = "auto";
            audio.autoplay = false;
            audio.loop = false;
            var onLoad = sound.onLoad;
            if (typeof onLoad === "function") {
                onLoad.apply(sound, [true]);
            }
        };
    })(audio, this);
    audio.addEventListener("canplaythrough", onLoad);

    var onError = (function (audio, sound)
    {
        return function() {
            var onLoad = sound.onLoad;
            if (typeof onLoad === "function") {
                onLoad.apply(sound, [false]);
            }
        };
    })(audio, this);
    audio.addEventListener("error", onError);
};

/**
 * @param id
 */
Sound.prototype.attachSound = function (id)
{
    var sounds = this.sounds;
    if (!(id in sounds)) {
        var movieClip    = this.movieClip;
        var stage        = movieClip.getStage();
        var exportAssets = stage.exportAssets;
        if (id in exportAssets) {
            var characterId = exportAssets[id];

            var tag = stage.sounds[characterId];
            if (tag) {
                var audio = this.$document.createElement("audio");
                audio.onload = function ()
                {
                    this.load();
                    this.preload = "auto";
                    this.autoplay = false;
                    this.loop = false;
                };
                audio.src  = tag.base64;
                sounds[id] = audio;
            }
        }
    }
};

/**
 *
 * @returns {number}
 */
Sound.prototype.getVolume = function ()
{
    return this.volume;
};

/**
 *
 * @param volume
 */
Sound.prototype.setVolume = function (volume)
{
    var sounds  = this.sounds;
    this.volume = volume;
    for (var id in sounds) {
        if (!sounds.hasOwnProperty(id)) {
            continue;
        }

        var audio    = sounds[id];
        audio.volume = volume / 100;
    }
};

/**
 * @returns {number|*}
 */
Sound.prototype.getPan = function ()
{
    return this.pan;
};

/**
 * @param pan
 */
Sound.prototype.setPan = function (pan)
{
    this.pan = pan;
};

/**
 * @param object
 */
Sound.prototype.setTransform = function (object)
{
    var transform = this.transform;
    for (var name in object) {
        if (!object.hasOwnProperty(name)) {
            continue;
        }
        switch (name) {
            case "ll":
            case "lr":
            case "rl":
            case "rr":
                transform[name] = object[name];
                break;
        }
    }
};

/**
 * @returns {{ll: number, lr: number, rl: number, rr: number}|*}
 */
Sound.prototype.getTransform = function ()
{
    return this.transform;
};

/**
 * @returns {number}
 */
Sound.prototype.getBytesLoaded = function ()
{
    return 1;
};

/**
 * @returns {number}
 */
Sound.prototype.getBytesTotal = function ()
{
    return 1;
};
/**
 * @constructor
 */
var SoundChannel = function () {};
/**
 * @constructor
 */
var SoundCodec = function () {};
/**
 * @constructor
 */
var SoundLoaderContext = function () {};
/**
 * @constructor
 */
var SoundMixer = function () {};
/**
 * @param {number} vol
 * @param {number} panning
 * @constructor
 */
var SoundTransform = function (vol, panning)
{
    OriginalObject.call(this);

    // init
    this._$leftToLeft   = 1;
    this._$leftToRight  = 0;
    this._$pan          = 0;
    this._$rightToLeft  = 0;
    this._$rightToRight = 1;
    this._$volume       = 1;

    // volume
    if (vol !== undefined) {
        this._$volume = (typeof vol === "number") ? vol : "";
    }

    // pan
    if (panning !== undefined) {
        if (typeof panning === "number") {
            this._$pan = (panning > 1)
                ? +"NaN"
                : panning
        } else {
            this._$pan = "";
        }
    }
};

/**
 * extends
 * @type {OriginalObject}
 */
SoundTransform.prototype = Object.create(OriginalObject.prototype);
SoundTransform.prototype.constructor = SoundTransform;

/**
 * properties
 */
Object.defineProperties(SoundTransform.prototype, {
    leftToLeft: {
        /**
         * @return {number|NaN}
         */
        get: function () {
            return this._$leftToLeft;
        },
        /**
         * @param  {number} left_to_left
         * @return void
         */
        set: function (left_to_left) {
            this._$leftToLeft = +left_to_left;

        }
    },
    leftToRight: {
        /**
         * @return {number|NaN}
         */
        get: function () {
            return this._$leftToRight;
        },
        /**
         * @param  {number} left_to_right
         * @return void
         */
        set: function (left_to_right) {
            this._$leftToRight = +left_to_right;
        }
    },
    pan: {
        /**
         * @return {number|NaN|string}
         */
        get: function () {
            return this._$pan;
        },
        /**
         * @param  {number} pan
         * @return void
         */
        set: function (pan) {
            this._$pan = +pan;
        }
    },
    rightToLeft: {
        /**
         * @return {number|NaN}
         */
        get: function () {
            return this._$rightToLeft;
        },
        /**
         * @param  {number} right_to_left
         * @return void
         */
        set: function (right_to_left) {
            this._$rightToLeft = +right_to_left;
        }
    },
    rightToRight: {
        /**
         * @return {number|NaN}
         */
        get: function () {
            return this._$rightToRight;
        },
        /**
         * @param  {number} right_to_right
         * @return void
         */
        set: function (right_to_right) {
            this._$rightToRight = +right_to_right;
        }
    },
    volume: {
        /**
         * @return {number|NaN}
         */
        get: function () {
            return this._$volume;
        },
        /**
         * @param  {number} volume
         * @return void
         */
        set: function (volume) {
            this._$volume = +volume;
        }
    }
});

/**
 * @return {string}
 */
SoundTransform.prototype.toString = function ()
{
    return "[object SoundTransform]";
};
/**
 * @constructor
 */
var StageVideo = function () {};
/**
 * @constructor
 */
var StageVideoAvailability = function () {};
/**
 * @constructor
 */
var StageVideoAvailabilityReason = function () {};
/**
 * @constructor
 */
var Video = function () {};
/**
 * @constructor
 */
var VideoStatus = function () {};
/**
 * @constructor
 */
var FileFilter = function () {};
/**
 * @constructor
 */
var FileReference = function () {};
/**
 * @constructor
 */
var FileReferenceList = function () {};
/**
 * @constructor
 */
var GroupSpecifier = function () {};
/**
 * @constructor
 */
var LocalConnection = function () {};
/**
 * @constructor
 */
var NetConnection = function () {};
/**
 * @constructor
 */
var NetGroup = function () {};
/**
 * @constructor
 */
var NetGroupInfo = function () {};
/**
 * @constructor
 */
var NetGroupReceiveMode = function () {};

/**
 * @constructor
 */
var NetGroupReplicationStrategy = function () {};
/**
 * @constructor
 */
var NetGroupSendMode = function () {};
/**
 * @constructor
 */
var NetGroupSendResult = function () {};
/**
 * @constructor
 */
var NetStream = function () {};
/**
 * @constructor
 */
var NetStreamAppendBytesAction = function () {};
/**
 * @constructor
 */
var NetStreamInfo = function () {};
/**
 * @constructor
 */
var NetStreamMulticastInfo = function () {};
/**
 * @constructor
 */
var NetStreamPlayOptions = function () {};
/**
 * @constructor
 */
var NetStreamPlayTransitions = function () {};
/**
 * @constructor
 */
var ObjectEncoding = function () {};
/**
 * @constructor
 */
var Responder = function () {};
/**
 * @constructor
 */
var SecureSocket = function () {};
/**
 * @constructor
 */
var SharedObjectFlushStatus = function () {};
/**
 * @constructor
 */
var Socket = function () {};
/**
 * @constructor
 */
var URLLoader = function (request)
{
    EventDispatcher.call(this);

    // init
    this._bytesLoaded = 0;
    this._bytesTotal  = 0;
    this._data        = null;
    this._dataFormat  = URLLoaderDataFormat.TEXT;

    if (request instanceof URLRequest) {
        this.load(request);
    }
};

/**
 * extends
 */
URLLoader.prototype = Object.create(EventDispatcher.prototype);
URLLoader.prototype.constructor = URLLoader;

/**
 * properties
 */
Object.defineProperties(URLLoader.prototype, {
    bytesLoaded: {
        get: function () {
            return this._bytesLoaded;
        },
        set: function (bytesLoaded) {
            if (typeof bytesLoaded === "number") {
                this._bytesLoaded = bytesLoaded;
            }
        }
    },
    bytesTotal: {
        get: function () {
            return this._bytesTotal;
        },
        set: function (bytesTotal) {
            if (typeof bytesTotal === "number") {
                this._bytesTotal = bytesTotal;
            }
        }
    },
    data: {
        get: function () {
            return this._data;
        },
        set: function (data) {
            this._data = data;
        }
    },
    dataFormat: {
        get: function () {
            return this._dataFormat;
        },
        set: function (dataFormat) {
            if (typeof dataFormat === "string") {
                this._dataFormat = dataFormat;
            }
        }
    }
});

/**
 * @returns {string}
 */
URLLoader.prototype.toString = function ()
{
    return "[object URLLoader]";
};

/**
 * @return void
 */
URLLoader.prototype.close = function ()
{
    // TODO
};

/**
 * @param {URLRequest} request
 */
URLLoader.prototype.load = function (request)
{
    if (request instanceof URLRequest) {
        var self = this;
        this.$ajax({
            "url":     request.url,
            "method":  request.method,
            "headers": request.requestHeaders,
            "mode":    self.dataFormat,
            "event": {
                "loadstart": function ()
                {
                    self.dispatchEvent("open", request.player);
                },
                "progress": function (event)
                {
                    self.bytesTotal  = event.total;
                    self.bytesLoaded = event.loaded;
                    self.dispatchEvent("progress", request.player);
                },
                "loadend": function ()
                {
                    // data set
                    switch (self.dataFormat) {
                        case URLLoaderDataFormat.BINARY:
                            self.data = (this.response) ? this.response : this.responseText;
                            break;
                        case URLLoaderDataFormat.TEXT:
                            self.data = this.responseText;
                            break;
                        case URLLoaderDataFormat.VARIABLES:
                            self.data = new URLVariables(this.responseText);
                            break;
                    }

                    self.dispatchEvent("complete", request.player);
                },
                "error": function ()
                {
                    self.dispatchEvent("ioerror", request.player);
                }
            }
        });
    }
};


/**
 * @type {{BINARY: string, TEXT: string, VARIABLES: string}}
 */
var URLLoaderDataFormat = {
    "BINARY"   : "binary",
    "TEXT"     : "text",
    "VARIABLES": "variables"
};
/**
 * @constructor
 * @param url
 */
var URLRequest = function (url)
{
    // init
    this._contentType     = "application/x-www-form-urlencoded";
    this._data            = null;
    this._digest          = null;
    this._followRedirects = true;
    this._method          = URLRequestMethod.GET;
    this._requestHeaders  = [];
    this._url             = "";
    this._userAgent       = null;

    // option
    this._player = null;

    // set
    this.url = url;

};

/**
 * extends
 */
URLRequest.prototype = Object.create(OriginalObject.prototype);
URLRequest.prototype.constructor = URLRequest;

/**
 * properties
 */
Object.defineProperties(URLRequest.prototype, {
    contentType: {
        get: function () {
            return this._contentType;
        },
        set: function (contentType) {
            if (typeof contentType === "string") {
                this._contentType = contentType;
            }
        }
    },
    data: {
        get: function () {
            return this._data;
        },
        set: function (data) {
            if (typeof data === "object") {
                this._data = data;
            }
        }
    },
    digest: {
        get: function () {
            return this._digest;
        },
        set: function (digest) {
            if (typeof digest === "string") {
                this._digest = digest;
            }
        }
    },
    followRedirects: {
        get: function () {
            return this._followRedirects;
        },
        set: function (followRedirects) {
            if (typeof followRedirects === "boolean") {
                this._followRedirects = followRedirects;
            }
        }
    },
    method: {
        get: function () {
            return this._method;
        },
        set: function (method) {
            if (typeof method === "string") {
                this._method = method;
            }
        }
    },
    requestHeaders: {
        get: function () {
            return this._requestHeaders;
        },
        set: function (requestHeaders) {
            if (this.$isArray(requestHeaders)) {
                this._requestHeaders = requestHeaders;
            }
        }
    },
    url: {
        get: function () {
            return this._url;
        },
        set: function (url) {
            if (typeof url === "string") {
                this._url = url;
            }
        }
    },
    userAgent: {
        get: function () {
            return this._userAgent;
        },
        set: function (userAgent) {
            if (typeof userAgent === "string") {
                this._userAgent = userAgent;
            }
        }
    },
    player: {
        get: function () {
            return this._player;
        },
        set: function (player) {
            this._player = player;
        }
    }
});

/**
 * @returns {string}
 */
URLRequest.prototype.toString = function ()
{
    return "[object URLRequest]";
};

/**
 *
 * @param  {URLRequest} sourceRequest
 * @param  {boolean}    wholeURL
 * @param  {*}          pattern
 * @param  {string}     replace
 * @return void
 */
URLRequest.prototype.useRedirectedURL = function (sourceRequest, wholeURL, pattern, replace)
{
    // TODO
};


/**
 * @constructor
 * @param name
 * @param value
 */
var URLRequestHeader = function (name, value)
{
    // init
    this._name  = "";
    this._value = "";

    // set
    this.name  = name;
    this.value = value;
};

/**
 * extends
 */
URLRequestHeader.prototype = Object.create(OriginalObject.prototype);
URLRequestHeader.prototype.constructor = URLRequestHeader;

/**
 * properties
 */
Object.defineProperties(URLRequestHeader.prototype, {
    name: {
        get: function () {
            return this._name;
        },
        set: function (name) {
            if (typeof name === "string") {
                this._name = name;
            }
        }
    },
    value: {
        get: function () {
            return this._value;
        },
        set: function (value) {
            if (typeof value === "string") {
                this._value = value;
            }
        }
    }
});

/**
 * @returns {string}
 */
URLRequestHeader.prototype.toString = function ()
{
    return "[object URLRequestHeader]";
};

/**
 * @type {{GET: string, DELETE: string, HEAD: string, OPTIONS: string, POST: string, PUT: string}}
 */
var URLRequestMethod = {
    "GET"    : "GET",
    "DELETE" : "DELETE",
    "HEAD"   : "HEAD",
    "OPTIONS": "OPTIONS",
    "POST"   : "POST",
    "PUT"    : "PUT"
};
/**
 * @constructor
 */
var URLStream = function () {};
/**
 * @constructor
 */
var URLVariables = function (source)
{
    if (source) {
        this.decode(source);
    }
};

/**
 * extends
 */
URLVariables.prototype = Object.create(OriginalObject.prototype);
URLVariables.prototype.constructor = URLVariables;

/**
 * @returns {string}
 */
URLVariables.prototype.toString = function ()
{
    return this.$encodeVars(this);
};

/**
 * @param source
 * @return void
 */
URLVariables.prototype.decode = function (source)
{
    if (typeof source === "string") {
        var pairs  = source.split("&");
        var length = pairs.length;

        var idx = 0;
        while (length > idx) {
            var pair   = pairs[idx];
            var values = pair.split("=");

            // set
            if (values.length === 2) {
                this[values[0]] = values[1];
            }

            idx = (idx + 1)|0;
        }
    }
};
/**
 * @constructor
 */
var XMLSocket = function () {};
/**
 * @constructor
 */
var PrintJob = function () {};

/**
 * @param printAsBitmap
 * @constructor
 */
var PrintJobOptions = function (printAsBitmap)
{
    this._printAsBitmap = false;
};

/**
 * @type {{LANDSCAPE: string, PORTRAIT: string}}
 */
var PrintJobOrientation = {
    "LANDSCAPE": "landscape",
    "PORTRAIT":  "portrait"
};
/**
 * @param source
 * @constructor
 */
var XMLDocument = function (source)
{
    this._source = null;
};



/**
 * @param type
 * @param value
 * @constructor
 */
var XMLNode = function (type, value)
{
    this._type  = null;
    this._value = null;
};
/**
 * @type {{ELEMENT_NODE: number, TEXT_NODE: number}}
 */
var XMLNodeType = {
    "ELEMENT_NODE": 1,
    "TEXT_NODE"   : 3
};
/**
 * @param data
 * @param constantPool
 * @param register
 * @param initAction
 * @constructor
 */
var ActionScript = function (data, constantPool, register, initAction)
{
    Util.call(this);

    this.cache        = [];
    this.params       = [];
    this.constantPool = constantPool || [];
    this.register     = register || [];
    this.variables    = {};
    this.initAction   = (initAction) ? true : false;
    this.scope        = null;
    this.parent       = null;
    this.arg          = null;
    this.version      = 7;
    this.superClass   = null;

    if (data.length) {
        this.initialize(data);
    }

    this.initParam();
};

/**
 * util
 */
ActionScript.prototype = Object.create(Util.prototype);
ActionScript.prototype.constructor = ActionScript;

/**
 * reset
 */
ActionScript.prototype.reset = function ()
{
    this.arg       = null;
    this.variables = {};
    this.initParam();
};

/**
 * initParam
 */
ActionScript.prototype.initParam = function ()
{
    var register = this.register;
    var params   = [];
    var length   = 0 | register.length;

    var i = 0;
    while (i < length) {
        var obj = register[i];
        params[obj.register] = (obj.name === null) ? obj.value : obj.name;
        i = 0 | i + 1;
    }

    this.params = params;
};

/**
 * @param values
 */
ActionScript.prototype.initVariable = function (values)
{
    this.arg      = values;
    var register  = this.register;
    var length    = 0 | register.length;
    var variables = this.variables;

    var key = 0;
    var i   = 0;
    while (i < length) {
        var obj = register[i];
        i = 0 | i + 1;

        if (obj.name === null) {
            continue;
        }

        variables[obj.name] = values[key];
        key = 0 | key + 1;
    }

    this.variables = variables;
    this.initParam();
};

/**
 * @returns {{}}
 */
ActionScript.prototype.getSuperClass = function ()
{
    var superClass = this.superClass;
    if (!superClass) {
        var parent = this.parent;
        if (parent) {
            superClass = parent.getSuperClass();
        }
    }
    return superClass;
};

/**
 * @param name
 * @param value
 */
ActionScript.prototype.setVariable = function (name, value)
{
    var finish = false;
    if (name in this.variables) {
        this.variables[name] = value;
        finish = true;
    }

    if (!finish) {
        var parent = this.parent;
        if (parent) {
            finish = parent.setVariable(name, value);
        }
    }

    return finish;
};

/**
 * @param name
 * @returns {*}
 */
ActionScript.prototype.getVariable = function (name)
{
    var value, parent;
    switch (name) {
        case "this":
            value = this.variables["this"];
            break;
        case "arguments":
            value = this.arg;
            break;
        default:
            value = this.variables[name];
            if (value === undefined) {
                parent = this.parent;
                if (parent) {
                    value = parent.getVariable(name);
                }
            }
            break;
    }
    return value;
};

/**
 * @param value
 * @returns {string}
 */
ActionScript.prototype.valueToString = function (value)
{
    if (typeof value !== "string") {
        value += "";
    }
    return value;
};

/**
 * @param str
 * @param mc
 * @returns {*}
 */
ActionScript.prototype.stringToObject = function(str, mc)
{
    var object = this.getVariable(str);
    if (object === undefined) {
        object = mc.getProperty(str);
    }
    return object;
};

/**
 * @param data
 */
ActionScript.prototype.initialize = function (data)
{
    var asData, register, values, NumParams, payloadLength;

    var isEnd        = false;
    var obj          = {};
    var i            = 0;
    var idx          = 0;
    var cache        = [];
    var indexes      = [];
    var withEndPoint = 0;

    var bitio = new BitIO();
    bitio.setData(data);

    var pBitio   = new BitIO();
    var endPoint = data.length;

    this.initParam();

    while (bitio.byte_offset < endPoint) {
        var startOffset = bitio.byte_offset;
        obj = {};

        if (withEndPoint > 0 && withEndPoint === bitio.byte_offset) {
            withEndPoint        = 0;
            obj.actionCode      = 0x94;
            obj.Size            = 0;
            cache[cache.length] = obj;
            continue;
        }

        var actionCode = bitio.getUI8();
        obj.actionCode = actionCode;

        var payload = null;
        if (actionCode >= 0x80) {
            payloadLength = bitio.getUI16();
            payload       = bitio.getData(payloadLength);

            pBitio.setData(payload);
            pBitio.setOffset(0, 0);
        }

        switch (actionCode) {
            // GotoFrame
            case 0x81:
                obj.frame = 0 | pBitio.getUI16() + 1;
                break;
            // WaitForFrame
            case 0x8A:
                obj.frame     = pBitio.getUI16();
                obj.skipCount = pBitio.getUI8();
                break;
            // SetTarget
            case 0x8B:
                obj.targetName = pBitio.getDataUntil("\0");
                break;
            // GoToLabel
            case 0x8C:
                obj.label = pBitio.getDataUntil("\0");
                break;
            case 0x83:
                var len = payload.length - 1;
                var urls = [[]];

                idx = 0;
                i   = 0;
                while (i < len) {
                    var str = this.$fromCharCode(payload[i]);
                    i  = 0 | i + 1;

                    if (payload[i] === 0) {
                        idx = 0 | idx + 1;
                        urls[idx] = [];
                        continue;
                    }
                    urls[idx] += str;
                }

                var urlString = urls[0];
                if (typeof urlString === "string") {
                    var splitUrl = urlString.split("?");
                    if (2 in splitUrl) {
                        urlString  = splitUrl[0];
                        urlString += "?" + splitUrl[1];

                        var paramLength = 0 | splitUrl.length;
                        i = 2;
                        while (i < paramLength) {
                            urlString += "&" + splitUrl[i];
                            i = 0 | i + 1;
                        }
                    }
                }

                obj.url    = urlString;
                obj.target = urls[1];
                break;
            // Push
            case 0x96:
                values = [];
                while (pBitio.byte_offset < payloadLength) {
                    var type = pBitio.getUI8();
                    switch (type) {
                        case 0: // String
                            values[values.length] = String(pBitio.getDataUntil("\0"));
                            break;
                        case 1: // Float
                            values[values.length] = pBitio.getFloat32();
                            break;
                        case 2: // null
                            values[values.length] = null;
                            break;
                        case 3: // undefined
                            values[values.length] = undefined;
                            break;
                        case 4: // RegisterNumber
                            values[values.length] = {"key": pBitio.getUI8()};
                            break;
                        case 5: // Boolean
                            values[values.length] = (pBitio.getUI8()) ? true : false;
                            break;
                        case 6: // Double
                            values[values.length] = pBitio.getFloat64();
                            break;
                        case 7: // Integer
                            values[values.length] = pBitio.getUI32();
                            break;
                        case 8: // Constant8
                            values[values.length] = this.constantPool[pBitio.getUI8()];
                            break;
                        case 9: // Constant16
                            values[values.length] = this.constantPool[pBitio.getUI16()];
                            break;
                        default:
                            break;
                    }
                }
                obj.values = values;
                break;
            // If
            case 0x9D:
                obj.offset = bitio.byte_offset + bitio.toSI16LE(payload);
                break;
            // Jump
            case 0x99:
                obj.offset = bitio.byte_offset + bitio.toSI16LE(payload);
                break;
            // GetURL2
            case 0x9A:
                obj.LoadVariablesFlag = pBitio.getUIBits(1); // 0=none, 1=LoadVariables
                obj.LoadTargetFlag    = pBitio.getUIBits(1); // 0=web,  1=Sprite
                pBitio.getUIBits(4); // Reserved
                obj.SendVarsMethod    = pBitio.getUIBits(2); // 0=NONE, 1=GET, 2=POST
                break;
            // GoToFrame2
            case 0x9F:
                pBitio.getUIBits(6); // Reserved
                obj.SceneBiasFlag = pBitio.getUIBit();
                obj.PlayFlag      = pBitio.getUIBit();// 0=stop, 1=play
                if (obj.SceneBiasFlag === 1) {
                    obj.SceneBias = pBitio.getUI16();
                }
                break;
            // WaitForFrame2
            case 0x8D:
                obj.skipCount = pBitio.getUI8();
                break;
            // ConstantPool
            case 0x88:
                var count = pBitio.getUI16();
                var constantPool = [];
                if (count > 0) {
                    while (count) {
                        count = 0 | count - 1;
                        constantPool[constantPool.length] = pBitio.getDataUntil("\0");
                    }
                }

                obj.constantPool  = constantPool;
                this.constantPool = constantPool;
                break;
            // ActionDefineFunction
            case 0x9b:
                obj.FunctionName = pBitio.getDataUntil("\0");

                NumParams = pBitio.getUI16();
                register  = [];
                if (NumParams > 0) {
                    idx = 1;
                    while (NumParams) {
                        NumParams = 0 | NumParams - 1;
                        register[register.length] = {
                            register: idx,
                            name:     pBitio.getDataUntil("\0"),
                            value:    null
                        };
                    }
                }

                asData = bitio.getData(pBitio.getUI16());
                obj.ActionScript = new ActionScript(asData, this.constantPool, register, this.initAction);

                break;
            // ActionWith
            case 0x94:
                obj.Size     = pBitio.getUI16();
                withEndPoint = obj.Size + bitio.byte_offset;
                break;
            // ActionStoreRegister
            case 0x87:
                obj.RegisterNumber = pBitio.getUI8();
                break;
            // SWF 7 ***********************************
            // ActionDefineFunction2
            case 0x8e:
                register = [];
                values   = [];

                obj.FunctionName          = pBitio.getDataUntil("\0");
                NumParams                 = pBitio.getUI16();
                var RegisterCount         = pBitio.getUI8();
                obj.PreloadParentFlag     = pBitio.getUIBits(1);
                obj.PreloadRootFlag       = pBitio.getUIBits(1);
                obj.SuppressSuperFlag     = pBitio.getUIBits(1);
                obj.PreloadSuperFlag      = pBitio.getUIBits(1);
                obj.SuppressArgumentsFlag = pBitio.getUIBits(1);
                obj.PreloadArgumentsFlag  = pBitio.getUIBits(1);
                obj.SuppressThisFlag      = pBitio.getUIBits(1);
                obj.PreloadThisFlag       = pBitio.getUIBits(1);
                pBitio.getUIBits(7); // Reserved
                obj.PreloadGlobalFlag     = pBitio.getUIBits(1);

                if (obj.PreloadThisFlag) {
                    values[values.length] = "this";
                }

                if (obj.PreloadArgumentsFlag) {
                    values[values.length] = "arguments";
                }

                if (obj.PreloadSuperFlag) {
                    values[values.length] = "super";
                }

                if (obj.PreloadRootFlag) {
                    values[values.length] = "_root";
                }

                if (obj.PreloadParentFlag) {
                    values[values.length] = "_parent";
                }

                if (obj.PreloadGlobalFlag) {
                    values[values.length] = "_global";
                }

                idx = 1;
                while ( idx < RegisterCount) {
                    var rIdx = idx - 1;
                    if (!(rIdx in values)) {
                        idx = 0 | idx + 1;
                        continue;
                    }

                    register[register.length] = {
                        register: idx,
                        name:     null,
                        value:    values[rIdx]
                    };

                    idx = 0 | idx + 1;
                }

                if (NumParams > 0) {
                    while (NumParams) {
                        NumParams = 0 | NumParams - 1;
                        var Register  = pBitio.getUI8();
                        var ParamName = pBitio.getDataUntil("\0");
                        register[register.length] = {
                            register: Register,
                            name:     ParamName,
                            value:    null
                        };
                    }
                }

                asData = bitio.getData(pBitio.getUI16());
                obj.ActionScript = new ActionScript(asData, this.constantPool, register, this.initAction);
                break;
            // ActionTry
            case 0x8f:
                pBitio.getUIBits(5); // Reserved
                var CatchInRegisterFlag = pBitio.getUIBits(1);
                obj.FinallyBlockFlag    = pBitio.getUIBits(1);
                obj.CatchBlockFlag      = pBitio.getUIBits(1);

                var TrySize     = pBitio.getUI16();
                var CatchSize   = pBitio.getUI16();
                var FinallySize = pBitio.getUI16();

                var CatchName;
                if (!CatchInRegisterFlag) {
                    CatchName = pBitio.getDataUntil("\0");
                } else {
                    CatchName = pBitio.getUI8();
                }

                i = 0;
                var TryBody = [];
                if (TrySize) {
                    while (TrySize) {
                        TryBody[TryBody.length] = bitio.getUI8();
                        TrySize = 0 | TrySize - 1;
                    }
                }

                obj.try = (function (data)
                {
                    var as = new ActionScript(data);
                    return function ()
                    {
                        as.reset();
                        as.variables["this"] = this;
                        return as.execute(this);
                    };
                })(TryBody);

                if (obj.CatchBlockFlag) {
                    var CatchBody = [];
                    if (CatchSize) {
                        while (CatchSize) {
                            CatchBody[CatchBody.length] = bitio.getUI8();
                            CatchSize = 0 | CatchSize - 1;
                        }
                    }

                    obj.catch = (function (data, catchName)
                    {
                        var as = new ActionScript(data);
                        return function ()
                        {
                            as.reset();
                            as.variables["this"] = this;
                            as.variables[catchName] = arguments[0];
                            return as.execute(this);
                        };
                    })(CatchBody, CatchName);
                }

                if (obj.FinallyBlockFlag) {
                    var FinallyBody = [];
                    if (FinallySize) {
                        while (FinallySize) {
                            FinallyBody[FinallyBody.length] = bitio.getUI8();
                            FinallySize = 0 | FinallySize - 1;
                        }
                    }

                    obj.finally = (function (data)
                    {
                        var as = new ActionScript(data);
                        return function ()
                        {
                            as.reset();
                            as.variables["this"] = this;
                            return as.execute(this);
                        };
                    })(FinallyBody);
                }

                break;
            case 0x00:
                isEnd = true;
                break;
        }

        indexes[startOffset] = cache.length;
        cache[cache.length]  = obj;

        if (isEnd) {
            break;
        }
    }

    // If and Jump
    var length = 0 | cache.length;
    i = 0;

    while (i < length) {
        obj = cache[i];
        i = 0 | i + 1;

        var code = obj.actionCode;
        switch (code) {
            case 0x9D:
            case 0x99:
                var index = indexes[obj.offset];

                obj.offset  = (index !== undefined) ? 0 | index - 1 : 0 | length - 1;
                break;
            default:
                break;
        }
    }

    this.cache = cache;
};

/**
 * @param value
 * @returns {*}
 */
ActionScript.prototype.calc = function (value)
{
    var calc;
    switch (typeof value) {
        case "boolean":
            calc = (value) ? 1 : 0;
            break;
        case "object":
            if (value === null) {
                calc = 0;
            } else if (value instanceof Array) {
                calc = value.length;
            } else if (value instanceof Object) {
                calc = 1;
            }
            break;
        default:
            calc = +value;
            break;
    }

    if (this.$isNaN(calc)) {
        calc = 0;
    }

    return calc;
};

/**
 * @param value
 * @returns {*}
 */
ActionScript.prototype.logicValue = function (value)
{
    var calc;
    switch (typeof value) {
        case "boolean":
            calc = (value) ? 1 : 0;
            break;
        case "object":
            if (value === null) {
                calc = 0;
            } else if (value instanceof Array) {
                calc = value.length;
            } else if (value instanceof Object) {
                calc = 1;
            }
            break;
        case "string":
            if (value === "") {
                calc = 0;
            } else {
                calc = 1;
            }
            break;
        case "function":
            calc = 1;
            break;
        default:
            calc = +value;
            if (this.$isNaN(calc)) {
                calc = 0;
            }
            break;
    }
    return calc;
};

/**
 * @param stack
 * @returns {Number}
 */
ActionScript.prototype.operationValue = function (stack)
{
    var value = +stack.pop();
    if (this.$isNaN(value)) {
        value = 0;
    }
    return value;
};

/**
 * @param mc
 * @returns {*}
 */
ActionScript.prototype.execute = function (mc)
{
    this.scope = mc;
    var movieClip = mc;
    if (!movieClip.active) {
        //return undefined;
    }
    var stage = movieClip.stage;
    if (stage) {
        this.version = movieClip.root.version;
    }

    var stack   = [];
    var cache   = this.cache;
    var cLength = cache.length|0;
    var cIdx    = 0;

    while(cIdx < cLength) {
        // if (!(cIdx in cache)) {
        //     cIdx = 0 | cIdx + 1;
        //     continue;
        // }

        var aScript    = cache[cIdx];
        var actionCode = aScript.actionCode|0;
        if (actionCode === 0) {
            break;
        }

        switch (actionCode) {
            // ********************************************
            // SWF 3
            // ********************************************
            case 0x81:
                this.ActionGotoFrame(movieClip, aScript.frame);
                break;
            case 0x04:
                this.ActionNextFrame(movieClip);
                break;
            case 0x05:
                this.ActionPreviousFrame(movieClip);
                break;
            case 0x06:
                this.ActionPlay(movieClip);
                break;
            case 0x07:
                this.ActionStop(movieClip);
                break;
            case 0x08: // ActionToggleQuality
            case 0x8A: // ActionWaitForFrame
                break;
            case 0x09:
                this.ActionStopSounds(movieClip);
                break;
            case 0x8B:
                movieClip = this.ActionSetTarget(movieClip, mc, aScript.targetName);
                break;
            case 0x8C:
                this.ActionGoToLabel(movieClip, aScript.label);
                break;
            case 0x83:
                this.ActionGetURL(movieClip, aScript.url, aScript.target);
                break;

            // ********************************************
            // SWF 4
            // ********************************************
            case 0x0A: // ActionAdd
                this.ActionOperation(stack, 0);
                break;
            case 0x0B: // ActionSubtract
                this.ActionOperation(stack, 1);
                break;
            case 0x0C: // ActionMultiply
                this.ActionOperation(stack, 2);
                break;
            case 0x0D: // ActionDivide
                this.ActionOperation(stack, 3);
                break;
            case 0x0E:
                this.ActionEquals(stack);
                break;
            case 0x0F:
                this.ActionLess(stack);
                break;
            case 0x10:
                this.ActionAnd(stack);
                break;
            case 0x11:
                this.ActionOr(stack);
                break;
            case 0x12:
                this.ActionNot(stack);
                break;
            case 0x13:
                this.ActionStringEquals(stack);
                break;
            case 0x14: // ActionStringLength
            case 0x31: // ActionMBStringLength
                this.ActionStringLength(stack);
                break;
            case 0x21:
                this.ActionStringAdd(stack);
                break;
            case 0x15:// ActionStringExtract
            case 0x35:// ActionMBStringExtract
                this.ActionStringExtract(stack);
                break;
            case 0x29:
                this.ActionStringLess(stack);
                break;
            case 0x17: // ActionPop
                stack.pop();
                break;
            case 0x96:
                this.ActionPush(stack, movieClip, aScript.values);
                break;
            case 0x33: // ActionAsciiToChar
            case 0x37: // ActionMBAsciiToChar
                this.ActionAsciiToChar(stack);
                break;
            case 0x36: // ActionMBCharToAscii
            case 0x32: // ActionCharToAscii
                this.ActionCharToAscii(stack);
                break;
            case 0x18:
                this.ActionToInteger(stack);
                break;
            case 0x9E:
                this.ActionCall(stack, movieClip);
                break;
            case 0x9D:
                cIdx = 0 | this.ActionIf(stack, aScript.offset, cIdx);
                break;
            case 0x99: // ActionJump
                cIdx = 0 | aScript.offset;
                break;
            case 0x1C:
                this.ActionGetVariable(stack, movieClip);
                break;
            case 0x1D:
                this.ActionSetVariable(stack, movieClip);
                break;
            case 0x9A:
                this.ActionGetURL2(stack, aScript, movieClip);
                break;
            case 0x22:
                this.ActionGetProperty(stack, movieClip);
                break;
            case 0x9F:
                this.ActionGoToFrame2(stack, aScript, movieClip);
                break;
            case 0x20:
                movieClip = this.ActionSetTarget2(stack, movieClip, mc);
                break;
            case 0x23:
                this.ActionSetProperty(stack, movieClip);
                break;
            case 0x27:
                this.ActionStartDrag(stack, movieClip);
                break;
            case 0x8D: // ActionWaitForFrame2
                stack.pop();
                break;
            case 0x24:
                this.ActionCloneSprite(stack, movieClip);
                break;
            case 0x25:
                this.ActionRemoveSprite(stack, movieClip);
                break;
            case 0x28:
                this.ActionEndDrag(movieClip);
                break;
            case 0x34:
                this.ActionGetTime(stack);
                break;
            case 0x30:
                this.ActionRandomNumber(stack);
                break;
            case 0x26:
                this.ActionTrace(stack);
                break;
            case 0x00:
                break;
            case 0x2D:
                this.ActionFsCommand2(stack, movieClip);
                break;

            // ********************************************
            // SWF 5
            // ********************************************
            case 0x52:
                this.ActionCallMethod(stack, movieClip);
                break;
            case 0x88: // ActionConstantPool
                this.constantPool = aScript.constantPool;
                break;
            case 0x3d:
                this.ActionCallFunction(stack, movieClip);
                break;
            case 0x9b:
                this.ActionDefineFunction(stack, aScript, movieClip);
                break;
            case 0x3c:
                this.ActionDefineLocal(stack, movieClip);
                break;
            case 0x41:
                this.ActionDefineLocal2(stack, movieClip);
                break;
            case 0x3a:
                this.ActionDelete(stack, movieClip);
                break;
            case 0x3b:
                this.ActionDelete2(stack, movieClip);
                break;
            case 0x46:
                this.ActionEnumerate(stack, movieClip);
                break;
            case 0x49:
                this.ActionEquals2(stack);
                break;
            case 0x4e:
                this.ActionGetMember(stack, movieClip);
                break;
            case 0x42:
                this.ActionInitArray(stack);
                break;
            case 0x43:
                this.ActionInitObject(stack);
                break;
            case 0x53:
                this.ActionNewMethod(stack, movieClip);
                break;
            case 0x40:
                this.ActionNewObject(stack, movieClip);
                break;
            case 0x4f:
                this.ActionSetMember(stack, movieClip);
                break;
            case 0x45:
                this.ActionTargetPath(stack);
                break;
            case 0x94:
                movieClip = this.ActionWith(stack, aScript.Size, mc);
                break;
            case 0x4a:
                this.ActionToNumber(stack);
                break;
            case 0x4b:
                this.ActionToString(stack);
                break;
            case 0x44:
                this.ActionTypeOf(stack);
                break;
            case 0x47:
                this.ActionAdd2(stack);
                break;
            case 0x48:
                this.ActionLess2(stack);
                break;
            case 0x3f:
                this.ActionModulo(stack);
                break;
            case 0x60:
                this.ActionBitAnd(stack);
                break;
            case 0x63:
                this.ActionBitLShift(stack);
                break;
            case 0x61:
                this.ActionBitOr(stack);
                break;
            case 0x64:
                this.ActionBitRShift(stack);
                break;
            case 0x65:
                this.ActionBitURShift(stack);
                break;
            case 0x62:
                this.ActionBitXor(stack);
                break;
            case 0x51:
                this.ActionDecrement(stack);
                break;
            case 0x50:
                this.ActionIncrement(stack);
                break;
            case 0x4c:
                this.ActionPushDuplicate(stack);
                break;
            case 0x3e: // ActionReturn
                return stack.pop();
            case 0x4d:
                this.ActionStackSwap(stack);
                break;
            case 0x87:
                this.ActionStoreRegister(stack, aScript.RegisterNumber);
                break;

            // ********************************************
            // SWF 6
            // ********************************************
            case 0x54:
                this.ActionInstanceOf(stack);
                break;
            case 0x55:
                this.ActionEnumerate(stack, movieClip);
                break;
            case 0x66:
                this.ActionStrictEquals(stack);
                break;
            case 0x67: // ActionGreater
            case 0x68: // ActionStringGreater
                this.ActionGreater(stack);
                break;

            // ********************************************
            // SWF 7
            // ********************************************
            case 0x8e: // ActionDefineFunction2
                this.ActionDefineFunction(stack, aScript, movieClip);
                break;
            case 0x69:
                this.ActionExtends(stack);
                break;
            case 0x2b:
                this.ActionCastOp(stack);
                break;
            case 0x2c:
                this.ActionImplementsOp(stack);
                break;
            case 0x8f:
                this.ActionTry(aScript, movieClip);
                break;
            case 0x2a:
                this.ActionThrow(stack);
                break;

            default:
                console.log("[ActionScript Error] Code: " + actionCode);
                break;
        }

        cIdx = (cIdx + 1)|0;
    }
};

/**
 * @type {{}}
 */
ActionScript.prototype.methods = {
    gotoandstop: "gotoAndStop",
    gotoandplay: "gotoAndPlay",
    play: "play",
    stop: "stop",
    duplicatemovieclip: "duplicateMovieClip",
    getproperty: "getProperty",
    removemovieclip: "removeMovieClip",
    setproperty: "setProperty",
    startdrag: "startDrag",
    stopdrag: "stopDrag",
    targetpath: "targetPath",
    updateafterevent: "updateAfterEvent",
    nextframe: "nextFrame",
    nextscene: "nextScene",
    prevframe: "prevFrame",
    prevscene: "prevScene",
    stopallsounds: "stopAllSounds",
    setmask: "setMask",
    geturl: "getURL",
    loadmovie: "loadMovie",
    loadmovienum: "loadMovieNum",
    loadvariables: "loadVariables",
    loadvariablesnum: "loadVariablesNum",
    unloadmovie: "unloadMovie",
    unloadmovienum: "unloadMovieNum",
    swapdepths: "swapDepths",
    getinstanceatdepth: "getInstanceAtDepth",
    attachmovie: "attachMovie",
    attachaudio: "attachAudio",
    attachbitmap: "attachBitmap",
    getnexthighestdepth: "getNextHighestDepth",
    getbytesloaded: "getBytesLoaded",
    getbytestotal: "getBytesTotal",
    assetpropflags: "ASSetPropFlags",
    linestyle: "lineStyle",
    linegradientstyle: "lineGradientStyle",
    beginfill: "beginFill",
    begingradientfill: "beginGradientFill",
    beginbitmapfill: "beginBitmapFill",
    clear: "clear",
    moveto: "moveTo",
    lineto: "lineTo",
    curveto: "curveTo",
    endfill: "endFill",
    hittest: "hitTest",
    getdepth: "getDepth",
    createemptymovieclip: "createEmptyMovieClip",
    createtextfield: "createTextField",
    getbounds: "getBounds",
    getrect: "getRect",
    getswfversion: "getSWFVersion",
    gettextsnapshot: "getTextSnapshot",
    globaltolocal: "globalToLocal",
    localtoglobal: "localToGlobal"
};

/**
 * @param method
 * @returns {*}
 */
ActionScript.prototype.checkMethod = function (method)
{
    if (!method || typeof method !== "string") {
        return method;
    }

    var lowerMethod = method.toLowerCase();
    return this.methods[lowerMethod] || null;
};

/**
 * @param mc
 * @param frame
 */
ActionScript.prototype.ActionGotoFrame = function (mc, frame)
{
    if (mc !== undefined) {
        mc.stop();
        // mc.setNextFrame(frame);
    }
};

/**
 * @param mc
 */
ActionScript.prototype.ActionNextFrame = function (mc)
{
    if (mc !== undefined) {
        mc.nextFrame();
    }
};

/**
 * @param mc
 */
ActionScript.prototype.ActionPreviousFrame = function (mc)
{
    if (mc !== undefined) {
        mc.prevFrame();
    }
};

/**
 * @param mc
 */
ActionScript.prototype.ActionPlay = function (mc)
{
    if (mc !== undefined) {
        mc.play();
    }
};

/**
 * @param mc
 */
ActionScript.prototype.ActionStop = function (mc)
{
    if (mc !== undefined) {
        mc.stop();
    }
};

/**
 * @param mc
 */
ActionScript.prototype.ActionStopSounds = function (mc)
{
    if (mc !== undefined) {
        mc.stopAllSounds();
    }
};

/**
 * @param movieClip
 * @param mc
 * @param target
 * @returns {*}
 */
ActionScript.prototype.ActionSetTarget = function (movieClip, mc, target)
{
    if (target !== "") {
        var targetMc = movieClip;
        if (!targetMc) {
            targetMc = mc;
        }
        return targetMc.getDisplayObject(target);
    } else {
        if (mc.active) {
            return mc;
        } else {
            return undefined;
        }
    }
};

/**
 * @param mc
 * @param label
 */
ActionScript.prototype.ActionGoToLabel = function (mc, label)
{
    if (mc !== undefined) {
        var frame = mc.getLabel(label);
        mc.stop();

        if (typeof frame === "number" && frame) {
            mc.setNextFrame(frame);
        }
    }
};

/**
 * @param mc
 * @param url
 * @param target
 */
ActionScript.prototype.ActionGetURL = function (mc, url, target)
{
    if (mc !== undefined) {
        mc.getURL(url, target);
    }
};

/**
 * @param stack
 * @param operation
 */
ActionScript.prototype.ActionOperation = function (stack, operation)
{
    var a = 0 | this.operationValue(stack);
    var b = 0 | this.operationValue(stack);
    var value;
    switch (operation) {
        case 0:
            value = b + a;
            break;
        case 1:
            value = b - a;
            break;
        case 2:
            value = b * a;
            break;
        case 3:
            value = b / a;
            break;
    }
    stack[stack.length] = value;
};

/**
 * @param stack
 */
ActionScript.prototype.ActionEquals = function (stack)
{
    var a = this.calc(stack.pop());
    var b = this.calc(stack.pop());
    if (this.version > 4) {
        stack[stack.length] = (a === b);
    } else {
        stack[stack.length] = (a === b) ? 1 : 0;
    }
};

/**
 * @param stack
 */
ActionScript.prototype.ActionLess = function (stack)
{
    var a = this.calc(stack.pop());
    var b = this.calc(stack.pop());
    if (this.version > 4) {
        stack[stack.length] = (b < a);
    } else {
        stack[stack.length] = (b < a) ? 1 : 0;
    }
};

/**
 * @param stack
 */
ActionScript.prototype.ActionAnd = function (stack)
{
    var a = stack.pop();
    var b = stack.pop();
    if (this.version > 4) {
        a = this.logicValue(a);
        b = this.logicValue(b);
        stack[stack.length] = (a !== 0 && b !== 0);
    } else {
        a = this.calc(a);
        b = this.calc(b);
        stack[stack.length] = (a !== 0 && b !== 0) ? 1 : 0;
    }
};

/**
 * @param stack
 */
ActionScript.prototype.ActionOr = function (stack)
{
    var a = stack.pop();
    var b = stack.pop();
    if (this.version > 4) {
        a = this.logicValue(a);
        b = this.logicValue(b);
        stack[stack.length] = (a !== 0 || b !== 0);
    } else {
        a = this.calc(a);
        b = this.calc(b);
        stack[stack.length] = (a !== 0 || b !== 0) ? 1 : 0;
    }
};

/**
 * @param stack
 */
ActionScript.prototype.ActionNot = function (stack)
{
    var a = stack.pop();
    if (this.version > 4) {
        a = this.logicValue(a);
        stack[stack.length] = (a === 0);
    } else {
        a = this.calc(a);
        stack[stack.length] = (a === 0) ? 1 : 0;
    }
};

/**
 * @param stack
 */
ActionScript.prototype.ActionStringEquals = function (stack)
{
    var a = stack.pop();
    var b = stack.pop();

    if (a instanceof MovieClip) {
        a = a.getTarget();
    } else {
        a += "";
    }

    if (b instanceof MovieClip) {
        b = b.getTarget();
    } else {
        b += "";
    }

    if (this.version > 4) {
        stack[stack.length] = (b === a);
    } else {
        stack[stack.length] = (b === a) ? 1 : 0;
    }
};

/**
 * @param stack
 */
ActionScript.prototype.ActionStringLength = function (stack)
{
    var value  = stack.pop();
    value      = this.valueToString(value);
    var sLen   = value.length;

    var length = 0;
    var i      = 0;
    while (i < sLen) {
        var code = 0 | value.charCodeAt(i);
        i = (i + 1)|0;

        length = (length + 1)|0;
        if (255 > code) {
            continue;
        }

        // jp string
        length = (length + 1)|0;
    }

    stack[stack.length] = length;
};

/**
 * @param stack
 */
ActionScript.prototype.ActionStringAdd = function (stack)
{
    var a = stack.pop();
    var b = stack.pop();

    if (a === null || a === undefined) {
        a = "";
    }

    if (b === null || b === undefined) {
        b = "";
    }

    stack[stack.length] = b + a;
};

/**
 * @param stack
 */
ActionScript.prototype.ActionStringExtract = function (stack)
{
    var count  = stack.pop();
    var index  = stack.pop();
    var string = stack.pop();
    string = this.valueToString(string);

    index -= 1;
    if (index < 0) {
        index = 0;
    }

    stack[stack.length] = (count < 0) ? string.substr(index) : string.substr(index, count);
};

/**
 * @param stack
 */
ActionScript.prototype.ActionStringLess = function (stack)
{
    var a = stack.pop();
    var b = stack.pop();
    if (this.version > 4) {
        stack[stack.length] = (b < a);
    } else {
        stack[stack.length] = (b < a) ? 1 : 0;
    }
};

/**
 * @param stack
 * @param mc
 * @param values
 */
ActionScript.prototype.ActionPush = function (stack, mc, values)
{
    var length = 0 | values.length;
    var params = this.params;

    var i = 0;
    while (i < length) {
        var value = values[i];
        i = 0 | i + 1;

        if (this.version > 4 && value instanceof Object) {
            var key = value.key;
            value   = undefined;
            if (key in params) {
                var name = params[key];
                if (typeof name === "string") {
                    value = this.getVariable(name);
                    if (value === undefined && !(name in this.variables)) {
                        value = name;
                    }
                } else {
                    value = name;
                }
            }
        }

        stack[stack.length] = value;
    }
};

/**
 * @param stack
 */
ActionScript.prototype.ActionAsciiToChar = function (stack)
{
    var value = stack.pop();
    stack[stack.length] = this.$fromCharCode(value);
};

/**
 * @param stack
 */
ActionScript.prototype.ActionCharToAscii = function (stack)
{
    var value = stack.pop();
    value     = this.valueToString(value);
    stack[stack.length] = value.charCodeAt(0);
};

/**
 * @param stack
 */
ActionScript.prototype.ActionToInteger = function (stack)
{
    var value = stack.pop();
    stack[stack.length] = 0 | value;
};

/**
 * @param stack
 * @param mc
 */
ActionScript.prototype.ActionCall = function (stack, mc)
{
    var value = stack.pop();
    if (mc !== undefined) {
        var frame;

        value = this.valueToString(value);

        var splitData = value.split(":");
        var label     = splitData[0];
        var targetMc  = mc;

        if (splitData.length > 1) {
            targetMc = mc.getDisplayObject(splitData[0]);
            label    = splitData[1];
        }

        if (targetMc !== undefined) {
            frame = (typeof label === "string") ? targetMc.getLabel(label) : label;
            targetMc.executeActions(frame);
        }
    }
};

/**
 * @param stack
 * @param offset
 * @param index
 * @returns {*}
 */
ActionScript.prototype.ActionIf = function (stack, offset, index)
{
    var condition = stack.pop();
    switch (typeof condition) {
        case "boolean":
            break;
        case "string":
            if (!this.$isNaN(condition)) {
                condition = +condition;
            }
            break;
    }

    if (condition) {
        return offset;
    }

    return index;
};

/**
 * @param stack
 * @param mc
 * @returns {undefined}
 */
ActionScript.prototype.ActionGetVariable = function (stack, mc)
{
    var name = stack.pop();
    var value;
    if (name instanceof MovieClip) {
        value = name;
    } else {
        value = this.getNativeClass(name);
        if (value === undefined) {
            value = this.getVariable(name);
            if (value === undefined && mc) {
                value = mc.getProperty(name);
            }
        }
    }
    stack[stack.length] = value;
};

/**
 * @param stack
 * @param mc
 */
ActionScript.prototype.ActionSetVariable = function (stack, mc)
{
    var value = stack.pop();
    var name  = stack.pop();
    if (!this.setVariable(name, value)) {
        mc.setProperty(name, value);
    }
};

/**
 * @param stack
 * @param aScript
 * @param mc
 */
ActionScript.prototype.ActionGetURL2 = function (stack, aScript, mc)
{
    var target = stack.pop();
    var value  = stack.pop();

    var LoadVariablesFlag = aScript.LoadVariablesFlag; // 0=none, 1=LoadVariables
    var LoadTargetFlag    = aScript.LoadTargetFlag;    // 0=web,  1=Sprite
    var SendVarsMethod    = aScript.SendVarsMethod;    // 0=NONE, 1=GET, 2=POST

    var method = "GET";
    if (SendVarsMethod === 2) {
        method = "POST";
    }

    var url;
    if (mc instanceof MovieClip) {
        if (value) {
            value = this.valueToString(value);

            var urls  = value.split("?");
            var uLen  = 0 | urls.length;
            var query = "";
            if (uLen === 1) {
                query = "?";
            }

            if (uLen > 2) {
                url = urls[0] + "?";
                url = url + urls[1];

                var u = 2;
                while (u < uLen) {
                    var params = urls[u];
                    u = 0 | u + 1;
                    url = url + "&" + params;
                }
            } else {
                url = value;
            }

            // local variables
            if (SendVarsMethod) {
                var variables   = mc.variables;
                var queryString = "";
                for (var key in variables) {
                    if (!variables.hasOwnProperty(key)) {
                        continue;
                    }

                    var val = variables[key];
                    if (val === null) {
                        val = "";
                    }

                    if (typeof val !== "string") {
                        var typeText = typeof val;
                        typeText = typeText.replace(/^[a-z]/g, function (str)
                        {
                            return str.toUpperCase();
                        });
                        val = "%5Btype+" + typeText + "%5D";
                    }

                    queryString += "&" + key + "=" + val;
                }

                if (query !== "" && queryString !== "") {
                    queryString = query + queryString.slice(1);
                }
                url += queryString;
            }

            if (LoadVariablesFlag) {
                mc.loadVariables(url, target, method);
            } else if (LoadTargetFlag) {
                if (target instanceof MovieClip) {
                    target.loadMovie(url, null, SendVarsMethod);
                } else {
                    mc.loadMovie(url, target, SendVarsMethod);
                }
            } else {
                mc.getURL(url, target, method);
            }
        } else {
            mc.unloadMovie(target);
        }
    }
};

/**
 * @param stack
 * @param mc
 * @returns {*}
 */
ActionScript.prototype.ActionGetProperty = function (stack, mc)
{
    var index  = stack.pop();
    var target = stack.pop();

    if (!this.$isNaN(index)) {
        index = this.$floor(index);
    }

    var value = this.getVariable(index);
    if (value === undefined && mc) {
        var targetMc = mc;
        if (target) {
            target  += "";
            targetMc = mc.getDisplayObject(target);
        }

        if (targetMc instanceof MovieClip) {
            value = targetMc.getProperty(index);
        }
    }

    stack[stack.length] = value;
};

/**
 * @param stack
 * @param aScript
 * @param mc
 */
ActionScript.prototype.ActionGoToFrame2 = function (stack, aScript, mc)
{
    var SceneBiasFlag = aScript.SceneBiasFlag;
    var PlayFlag      = aScript.PlayFlag; // 0=stop, 1=play

    if (SceneBiasFlag === 1) {
        var SceneBias = aScript.SceneBias;
        console.log("SceneBias", SceneBias);
    }

    var frame = stack.pop();
    if (frame && mc) {
        if (this.$isNaN(frame)) {
            var splitData = frame.split(":");
            if (splitData.length > 1) {
                var targetMc = mc.getDisplayObject(splitData[0]);
                if (targetMc) {
                    frame = targetMc.getLabel(splitData[1]);
                }
            } else {
                frame = mc.getLabel(splitData[0]);
            }
        }

        if (typeof frame === "string") {
            frame |= 0;
        }

        if (typeof frame === "number" && frame > 0) {
            mc.setNextFrame(frame);
            if (PlayFlag) {
                mc.play();
            } else {
                mc.stop();
            }
        }
    }
};

/**
 * @param stack
 * @param movieClip
 * @param mc
 * @returns {*}
 */
ActionScript.prototype.ActionSetTarget2 = function (stack, movieClip, mc)
{
    var target = stack.pop();
    if (!movieClip) {
        movieClip = mc;
    }
    return movieClip.getDisplayObject(target);
};

/**
 * @param stack
 * @param mc
 */
ActionScript.prototype.ActionSetProperty = function (stack, mc)
{
    var value  = stack.pop();
    var index  = stack.pop();
    var target = stack.pop();

    if (!this.$isNaN(index)) {
        index = this.$floor(index);
    }

    if (mc) {
        var targetMc = mc;
        if (target !== undefined) {
            targetMc = mc.getDisplayObject(target);
        }

        if (targetMc !== undefined && targetMc.getClassName() === "MovieClip") {
            targetMc.setProperty(index, value);
        }
    }
};

/**
 * @param stack
 * @param mc
 */
ActionScript.prototype.ActionStartDrag = function (stack, mc)
{
    var target = stack.pop();
    var lock = stack.pop();
    var constrain = stack.pop();
    var y2 = null;
    var x2 = null;
    var y1 = null;
    var x1 = null;
    if (constrain) {
        y2 = stack.pop();
        x2 = stack.pop();
        y1 = stack.pop();
        x1 = stack.pop();
    }

    var targetMc = mc;
    if (target instanceof MovieClip) {
        targetMc = target;
    }

    if (typeof target === "string" && target) {
        targetMc = mc.getDisplayObject(target);
    }

    if (targetMc instanceof MovieClip) {
        targetMc.startDrag(lock, x1, y1, x2, y2);
    }
};

/**
 * @param stack
 * @param mc
 */
ActionScript.prototype.ActionCloneSprite = function (stack, mc)
{
    var depth = +stack.pop();
    var target = stack.pop();
    var source = stack.pop();
    if (mc) {
        mc.duplicateMovieClip(target, source, depth);
    }
};

/**
 * @param stack
 * @param mc
 */
ActionScript.prototype.ActionRemoveSprite = function (stack, mc)
{
    var target = stack.pop();
    if (mc) {
        mc.removeMovieClip(target);
    }
};

/**
 * @param mc
 */
ActionScript.prototype.ActionEndDrag = function (mc)
{
    if (mc) {
        mc.stopDrag();
    }
};

/**
 * @param stack
 */
ActionScript.prototype.ActionGetTime = function (stack)
{
    var now = new Date();
    stack[stack.length] = now.getTime() - this.$Date.getTime();
};

/**
 * @param stack
 */
ActionScript.prototype.ActionRandomNumber = function (stack)
{
    var maximum = stack.pop();
    stack[stack.length] = this.$floor(this.$random() * maximum);
};

/**
 * @param stack
 */
ActionScript.prototype.ActionTrace = function (stack)
{
    var value = stack.pop();
    if (value instanceof DisplayObject && value.removeFlag) {
        value = "";
    }
    if (value && typeof value === "object") {
        if ("callee" in value) {
            value = Array.prototype.slice.call(value);
        }
        value = value.toString();
    }
    console.log("[trace] " + value);
};

/**
 * @param stack
 * @param mc
 */
ActionScript.prototype.ActionFsCommand2 = function (stack, mc)
{
    stack.pop(); // count
    var method = stack.pop();
    var now = new Date();
    switch (method.toLowerCase()) {
        case "getdateyear":
            stack[stack.length] = now.getFullYear();
            break;
        case "getdatemonth":
            stack[stack.length] = now.getMonth() + 1;
            break;
        case "getdateday":
            stack[stack.length] = now.getDate();
            break;
        case "getdateweekday":
            stack[stack.length] = now.getDay();
            break;
        case "gettimehours":
            stack[stack.length] = now.getHours();
            break;
        case "gettimeminutes":
            stack[stack.length] = now.getMinutes();
            break;
        case "gettimeseconds":
            stack[stack.length] = now.getSeconds();
            break;
        case "startvibrate":
            stack.pop();
            stack.pop();
            stack.pop();
            stack[stack.length] = -1;
            break;
        case "gettimezoneoffset":
            mc.setVariable(stack.pop(), now.toUTCString());
            mc.setVariable(stack.pop(), 0);
            break;
        case "getlocalelongdate":
            mc.setVariable(stack.pop(), now.toLocaleDateString());
            mc.setVariable(stack.pop(), 0);
            break;
        case "getlocaleshortdate":
            mc.setVariable(stack.pop(), now.toDateString());
            mc.setVariable(stack.pop(), 0);
            break;
        case "getlocaletime":
            mc.setVariable(stack.pop(), now.toLocaleTimeString());
            mc.setVariable(stack.pop(), 0);
            break;
        case "getnetworkname":
        case "getdevice":
        case "getdeviceid":
            mc.setVariable(stack.pop(), "");
            mc.setVariable(stack.pop(), -1);
            break;
        case "getlanguage":
            var language = this.$navigator.userLanguage ||
                this.$navigator.language ||
                this.$navigator.browserLanguage ||
                "ja-JP";
            mc.setVariable(stack.pop(), language);
            mc.setVariable(stack.pop(), 0);
            break;
        case "setsoftkeys":
            stack.pop();
            stack.pop();
            stack[stack.length] = -1;
            break;
        case "fullscreen":
            stack.pop(); // bool
            stack[stack.length] = -1;
            break;
        case "setquality":
        case "getfreestagememory":
        case "gettotalstagememory":
            stack.pop();
            stack[stack.length] = -1;
            break;
        default:
            stack[stack.length] = -1;
            break;
    }
};

/**
 * @param stack
 * @param mc
 */
ActionScript.prototype.ActionCallMethod = function (stack, mc)
{
    var method = stack.pop();
    var object = stack.pop();
    var count = +stack.pop();

    var params = [];
    if (count > 0) {
        while (count) {
            count = 0 | count - 1;

            var param = stack.pop();
            if (param && typeof param === "object" && "callee" in param) {
                param = Array.prototype.slice.call(param);
            }
            params[params.length] = param;
        }
    }

    if (typeof object === "string" && object[method] === undefined) {
        var target = this.stringToObject(object, mc);
        if (target) {
            object = target;
        }

        if (object === "super") {
            var caller     = this.variables["this"];
            var SuperClass = this.getSuperClass();
            if (!method && SuperClass) {
                var sc = new SuperClass();
                switch (SuperClass) {
                    case MovieClip:
                        var loadStage = mc.getStage();
                        sc.setStage(loadStage);
                        sc.setParent(mc);
                        sc._extend = true;
                        break;
                }

                var proto = Object.getPrototypeOf(caller);
                proto.constructor = SuperClass;
                Object.setPrototypeOf(proto, sc);
                Object.setPrototypeOf(caller, proto);
            } else {
                object = caller;
            }
        }
    }

    var value;
    if (object && method) {
        var func;
        if (typeof object === "object") {
            var variables = object.variables;
            if (variables) {
                func = variables[method];
                if (!func && variables.registerClass) {
                    func = variables.registerClass[method];
                }
            }
        }

        if (!func) {
            var originMethod = this.checkMethod(method);
            if (originMethod) {
                func = object[originMethod];
            }
        }

        if (!func) {
            func = object[method];
        }

        if (!func && object instanceof MovieClip) {
            func = object.getVariable(method);
        }

        if (!func && object instanceof Global) {
            func = window[method];
            if (func) {
                params = this.ActionNativeFunction(params, mc);
                object = window;
            }
        }

        if (method === "call" || method === "apply") {
            func = object;
            object = params.shift();
            if (method === "apply") {
                var args = params.shift();
                params = [];
                if (args) {
                    params = Array.prototype.slice.call(args);
                }
            }
        }

        if (func && typeof func === "function") {
            switch (true) {
                case object instanceof MovieClipLoader:
                    if (method === "loadClip" && typeof params[1] === "string") {
                        var targetStr = params[1];
                        params[1] = mc.getDisplayObject(targetStr);
                    }
                    break;
            }
            value = func.apply(object, params);
        }

        if (!func && object instanceof Object && typeof method === "string") {
            switch (method.toLowerCase()) {
                case "registerclass":
                    value = false;
                    var _root = mc.getDisplayObject("_root");
                    var stage = _root.getStage();
                    var characterId = stage.exportAssets[params[0]];
                    if (characterId) {
                        stage.registerClass[characterId] = params[1];
                        value = true;
                    }
                    break;
                case "addproperty":
                    this.addProperty(object, params);
                    break;
            }
        }
    } else {
        if (!method && typeof object === "function") {
            value = object.apply(this.variables["this"], params);
        }
    }

    stack[stack.length] = value;
};

/**
 * @param target
 * @param params
 * @returns {boolean}
 */
ActionScript.prototype.addProperty = function (target, params)
{
    var property = params[0];
    if (typeof property !== "string" || property === "") {
        return false;
    }

    var getter = params[1];
    if (!getter) {
        getter = function () {};
    }
    var setter = params[2];
    if (!setter) {
        setter = function () {};
    }

    if (typeof getter !== "function" || typeof setter !== "function") {
        return false;
    }

    Object.defineProperty(target, property,
        {
            get: getter,
            set: setter
        });

    return true;
};

/**
 * @param args
 * @param mc
 * @returns {Array}
 */
ActionScript.prototype.ActionNativeFunction = function (args, mc)
{
    var targetMc = mc;
    var params   = args;
    if (args[0] instanceof MovieClip) {
        // setInterval, setTimeout
        targetMc = args.shift();
        if (args.length > 0) {
            var obj = args.shift();
            var as;
            if (typeof obj === "string") {
                as = this.getVariable(obj);
                if (typeof as !== "function") {
                    as = targetMc.getVariable(obj);
                }
            }
            if (typeof as === "function") {
                var time = args.shift();
                var action = (function (script, mc, args)
                {
                    return function ()
                    {
                        script.apply(mc, args);
                    };
                })(as, targetMc, args);
                params = [];
                params[params.length] = action;
                params[params.length] = time;
            } else {
                console.log("DEBUG: ", params);
                args.unshift(obj);
                params = args;
            }
        }
    }
    return params;
};

/**
 * @param stack
 * @param mc
 */
ActionScript.prototype.ActionCallFunction = function (stack, mc)
{
    var name  = stack.pop();
    var count = +stack.pop();

    var params = [];
    if (count > 0) {
        while (count) {
            count = 0 | count - 1;

            var param = stack.pop();
            if (param && typeof param === "object" && "callee" in param) {
                param = Array.prototype.slice.call(param);
            }
            params[params.length] = param;
        }
    }

    if (mc) {
        var caller = mc;
        var func;
        var method = this.checkMethod(name);
        if (method) {
            func = mc[method];
        } else {
            func = mc.variables[name];
            if (!func) {
                var registerClass = mc.variables.registerClass;
                if (registerClass && typeof registerClass === "object") {
                    func = registerClass[name];
                }

                if (!func) {
                    if (window[name]) {
                        caller = window;
                        params = this.ActionNativeFunction(params, mc);
                        func   = window[name];
                    } else {
                        func = mc.getVariable(name);
                    }
                }
            }
        }
        stack[stack.length] = (func) ? func.apply(caller, params) : undefined;
    }
};

/**
 * @param stack
 * @param aScript
 * @param mc
 */
ActionScript.prototype.ActionDefineFunction = function (stack, aScript, mc)
{
    var action = mc.createActionScript2(aScript.ActionScript, this);
    var name   = aScript.FunctionName;
    if (name !== "") {
        mc.setVariable(name, action);
    } else {
        stack[stack.length] = action;
    }
};

/**
 * @param stack
 * @param mc
 */
ActionScript.prototype.ActionDefineLocal = function (stack, mc)
{
    var value = stack.pop();
    var name  = stack.pop();

    if (this.parent) {
        this.variables[name] = value;
    } else {
        mc.setVariable(name, value);
    }
};

/**
 * @param stack
 * @param mc
 */
ActionScript.prototype.ActionDefineLocal2 = function (stack, mc)
{
    var name = stack.pop();
    if (this.parent) {
        this.variables[name] = undefined;
    } else {
        mc.setVariable(name, undefined);
    }
};

/**
 * @param stack
 * @param mc
 */
ActionScript.prototype.ActionDelete = function (stack, mc)
{
    var name   = stack.pop();
    var object = stack.pop();

    if (typeof object === "string") {
        var target = this.stringToObject(object, mc);
        if (target) {
            object = target;
        }
    }

    if (object instanceof MovieClip) {
        object.setVariable(name, undefined);
    }
};

/**
 * @param stack
 * @param mc
 */
ActionScript.prototype.ActionDelete2 = function (stack, mc)
{
    var name = stack.pop();
    if (mc) {
        mc.setVariable(name, undefined);
    }
};

/**
 * @param stack
 * @param mc
 */
ActionScript.prototype.ActionEnumerate = function (stack, mc)
{
    var object = stack.pop();
    stack[stack.length] = null;

    if (typeof object === "string") {
        object = this.stringToObject(object, mc);
    }

    if (object instanceof Object) {
        var name;
        switch (true) {
            case object instanceof DisplayObject:
                var container = object.getTags();
                var stage = object.getStage();
                for (name in container) {
                    if (!container.hasOwnProperty(name)) {
                        continue;
                    }
                    var id = container[name];
                    var instance = stage.getInstance(id);
                    var prop = "instance" + id;
                    if (instance.getName()) {
                        prop = instance.getName();
                    }
                    stack[stack.length] = prop;
                }
                var variables = object.variables;
                for (name in variables) {
                    if (!variables.hasOwnProperty(name)) {
                        continue;
                    }
                    stack[stack.length] = name;
                }
                break;
            default:
                for (name in object) {
                    if (!object.hasOwnProperty(name)) {
                        continue;
                    }
                    stack[stack.length] = name;
                }
                break;
        }
    }
};

/**
 * @param stack
 */
ActionScript.prototype.ActionEquals2 = function (stack)
{
    var a = stack.pop();
    var b = stack.pop();
    var A = a;
    var B = b;
    if (a instanceof MovieClip) {
        A = a.getTarget();
    }
    if (b instanceof MovieClip) {
        B = b.getTarget();
    }
    stack[stack.length] = (B == A);
};

/**
 * @param stack
 * @param mc
 */
ActionScript.prototype.ActionGetMember = function (stack, mc)
{
    var property;
    var name   = stack.pop();
    var object = stack.pop();

    if (typeof object === "string") {
        var target = this.stringToObject(object, mc);
        if (target) {
            object = target;
        }
    }

    if (object) {
        switch (true) {
            default:
                property = object[name];
                break;
            case object instanceof DisplayObject:
            case object instanceof Global:
                if (!object._extend) {
                    property = object.getProperty(name, false);
                    if (property === undefined &&
                        typeof name === "string" &&
                        name.substr(0, 8) === "instance"
                    ) {
                        var stage = object.getStage();
                        var id = name.split("instance")[1];
                        property = stage.getInstance(id);
                    }

                    if (property === undefined && this.checkMethod(name)) {
                        property = object[name];
                    }

                } else {
                    property = object[name];
                }
                break;
            case object instanceof Element && name === "childNodes":
                var childNodes = object[name];
                var length = childNodes.length;
                property = [];
                if (length) {
                    for (var i = 0; i < length; i++) {
                        var node = childNodes[i];
                        if (node.nodeType !== 1) {
                            continue;
                        }
                        property[property.length] = node;
                    }
                }
                break;
            case object instanceof window.NamedNodeMap:
                var item = object.getNamedItem(name);
                property = item.value;
                break;
        }
    }
    stack[stack.length] = property;
};

/**
 * @param stack
 */
ActionScript.prototype.ActionInitArray = function (stack)
{
    var number = stack.pop();
    var array  = [];
    if (number > 0) {
        while (number) {
            number = 0 | number - 1;
            array[array.length] = stack.pop();
        }
    }
    stack[stack.length] = array;
};

/**
 * @param stack
 */
ActionScript.prototype.ActionInitObject = function (stack)
{
    var number = stack.pop();
    var object = {};
    if (number > 0) {
        while (number) {
            number = 0 | number - 1;

            var value    = stack.pop();
            var property = stack.pop();

            object[property] = value;
        }
    }
    stack[stack.length] = object;
};

/**
 * @param stack
 * @param mc
 */
ActionScript.prototype.ActionNewMethod = function (stack, mc)
{
    var method = stack.pop();
    var object = stack.pop();
    var number = stack.pop();
    var params = [];
    if (number > 0) {
        while (number--) {
            var param = stack.pop();
            if (param && typeof param === "object" && "callee" in param) {
                param = Array.prototype.slice.call(param);
            }
            params[params.length] = param;
        }
    }

    var constructor;
    if (method === "") {
        constructor = object.apply(object, params);
    }
    if (!constructor && method in object) {
        constructor = this.CreateNewActionScript(object[method], mc, params);
    }
    if (!constructor && method in window) {
        if (method === "CSSStyleDeclaration") {
            constructor = undefined;
        } else {
            constructor = this.CreateNewActionScript(window[method], mc, params);
        }
    }
    stack[stack.length] = constructor;
};

/**
 * @param stack
 * @param mc
 */
ActionScript.prototype.ActionNewObject = function (stack, mc)
{
    var object  = stack.pop();
    var numArgs = +stack.pop();
    var params = [];
    if (numArgs > 0) {
        while (numArgs) {
            numArgs = 0 | numArgs - 1;

            var param = stack.pop();
            if (param && typeof param === "object" && "callee" in param) {
                param = Array.prototype.slice.call(param);
            }
            params[params.length] = param;
        }
    }

    var obj = {};
    if (object in window) {
        params.unshift(window[object]);
        obj = new (Function.prototype.bind.apply(window[object], params))();
    } else {
        switch (object) {
            case "Object":
                obj = {};
                break;
            case "MovieClip":
                obj = new MovieClip();
                var stage = mc.getStage();
                obj.setStage(stage);
                obj.setParent(mc);
                break;
            case "Sound":
                obj = new Sound(mc);
                obj.movieClip = mc;
                break;
            case "XML":
                obj = new Xml();
                break;
            case "LoadVars":
                obj = new LoadVars();
                break;
            case "Color":
                obj = new Color(params[0]);
                break;
            case "TextFormat":
                obj = new TextFormat();
                break;
            case "MovieClipLoader":
                obj = new MovieClipLoader();
                break;
            default:
                if (mc) {
                    var self = this;
                    var func = self.getVariable(object) || mc.getVariable(object);
                    obj      = self.CreateNewActionScript(func, mc, params);
                }
                break;
        }
    }
    stack[stack.length] = obj;
};

/**
 * @param name
 * @returns {*}
 */
ActionScript.prototype.getNativeClass = function (name)
{
    var value;
    switch (name) {
        case "MovieClip":
            value = MovieClip;
            break;
        case "Sprite":
            value = Sprite;
            break;
        case "SimpleButton":
            value = SimpleButton;
            break;
        case "TextField":
            value = TextField;
            break;
        case "Shape":
            value = Shape;
            break;
        case "Sound":
            value = Sound;
            break;
        case "XML":
            value = Xml;
            break;
        case "LoadVars":
            value = LoadVars;
            break;
        case "Color":
            value = Color;
            break;
        case "TextFormat":
            value = TextFormat;
            break;
        case "MovieClipLoader":
            value = MovieClipLoader;
            break;
    }
    return value;
};

/**
 * @param Constr
 * @param mc
 * @param params
 * @returns {*}
 */
ActionScript.prototype.CreateNewActionScript = function (Constr, mc, params)
{
    if (Constr) {
        params.unshift(Constr);
        return new (Function.prototype.bind.apply(Constr, params))();
    }
    return undefined;
};

/**
 * @param stack
 * @param mc
 */
ActionScript.prototype.ActionSetMember = function (stack, mc)
{
    var value  = stack.pop();
    var name   = stack.pop();
    var object = stack.pop();
    if (object) {
        if (typeof object === "string") {
            var target = this.stringToObject(object, mc);
            if (target) {
                object = target;
            }
        }

        if (typeof object === "object" || typeof object === "function") {
            switch (true) {
                default:
                case object === MovieClip.prototype:
                case object === TextField.prototype:
                case object === SimpleButton.prototype:
                case object === Sprite.prototype:
                case object === Shape.prototype:
                    object[name] = value;
                    break;
                case object instanceof DisplayObject:
                case object instanceof Global:
                    if (!object._extend) {
                        object.setProperty(name, value, false);
                    } else {
                        object[name] = value;
                    }
                    break;
            }
        }
    }
};

/**
 * @param stack
 */
ActionScript.prototype.ActionTargetPath = function (stack)
{
    console.log("ActionTargetPath");
    var object = stack.pop();
    var path   = null;
    if (object instanceof MovieClip) {
        path = object.getName();
        if (path !== null) {
            while (true) {
                var parent = object.getParent();
                if (parent === null) {
                    path = "/" + path;
                    break;
                }

                var name = parent.getName();
                if (name === null) {
                    path = null;
                    break;
                }

                path = name + "/" + path;
            }
        }
    }
    stack[stack.length] = path;
};

/**
 * @param stack
 * @param size
 * @param mc
 * @returns {*}
 */
ActionScript.prototype.ActionWith = function (stack, size, mc)
{
    var object = mc;
    if (size) {
        object = stack.pop();
    }
    return object;
};

/**
 * @param stack
 */
ActionScript.prototype.ActionToNumber = function (stack)
{
    var object = +stack.pop();
    stack[stack.length] = object;
};

/**
 * @param stack
 */
ActionScript.prototype.ActionToString = function (stack)
{
    var object = stack.pop();
    stack[stack.length] = this.valueToString(object);
};

/**
 * @param stack
 */
ActionScript.prototype.ActionTypeOf = function (stack)
{
    var object = stack.pop();
    var str    = "";
    switch (true) {
        case object instanceof MovieClip:
            str = "movieclip";
            break;
        default:
            str = typeof object;
            break;
    }
    stack[stack.length] = str;
};

/**
 * @param stack
 */
ActionScript.prototype.ActionAdd2 = function (stack)
{
    var a = stack.pop();
    var b = stack.pop();
    stack[stack.length] = b + a;
};

/**
 * @param stack
 */
ActionScript.prototype.ActionLess2 = function (stack)
{
    var a = stack.pop();
    var b = stack.pop();
    stack[stack.length] = (b < a);
};

/**
 * @param stack
 */
ActionScript.prototype.ActionModulo = function (stack)
{
    var y = stack.pop();
    var x = stack.pop();
    stack[stack.length] = x % y;
};

/**
 * @param stack
 */
ActionScript.prototype.ActionBitAnd = function (stack)
{
    var a = stack.pop();
    var b = stack.pop();
    stack[stack.length] = b & a;
};

/**
 * @param stack
 */
ActionScript.prototype.ActionBitLShift = function (stack)
{
    var a = stack.pop();
    var b = stack.pop();
    stack[stack.length] = b << a;
};

/**
 * @param stack
 */
ActionScript.prototype.ActionBitOr = function (stack)
{
    var a = stack.pop();
    var b = stack.pop();
    stack[stack.length] = b | a;
};

/**
 * @param stack
 */
ActionScript.prototype.ActionBitRShift = function (stack)
{
    var a = stack.pop();
    var b = stack.pop();
    stack[stack.length] = b >> a;
};

/**
 * @param stack
 */
ActionScript.prototype.ActionBitURShift = function (stack)
{
    var a = stack.pop();
    var b = stack.pop();
    stack[stack.length] = b >> a;
};

/**
 * @param stack
 */
ActionScript.prototype.ActionBitXor = function (stack)
{
    var a = stack.pop();
    var b = stack.pop();
    stack[stack.length] = a ^ b;
};

/**
 * @param stack
 */
ActionScript.prototype.ActionDecrement = function (stack)
{
    var value = stack.pop();
    value     = 0 | value - 1;
    stack[stack.length] = value;
};

/**
 * @param stack
 */
ActionScript.prototype.ActionIncrement = function (stack)
{
    var value = stack.pop();
    value     = 0 | value + 1;
    stack[stack.length] = value;
};

/**
 * @param stack
 */
ActionScript.prototype.ActionPushDuplicate = function (stack)
{
    var length    = stack.length;
    stack[length] = stack[length - 1];
};

/**
 * @param stack
 */
ActionScript.prototype.ActionStackSwap = function (stack)
{
    var a = stack.pop();
    var b = stack.pop();
    stack[stack.length] = a;
    stack[stack.length] = b;
};

/**
 * @param stack
 * @param number
 */
ActionScript.prototype.ActionStoreRegister = function (stack, number)
{
    this.params[number] = stack[stack.length - 1];
};

/**
 * @param stack
 */
ActionScript.prototype.ActionInstanceOf = function (stack)
{
    var constr = stack.pop();
    var object = stack.pop();
    stack[stack.length] = (object instanceof constr);
};

/**
 * @param stack
 */
ActionScript.prototype.ActionStrictEquals = function (stack)
{
    var a = stack.pop();
    var b = stack.pop();
    stack[stack.length] = (b === a);
};

/**
 * @param stack
 */
ActionScript.prototype.ActionGreater = function (stack)
{
    var a = stack.pop();
    var b = stack.pop();
    stack[stack.length] = (b > a);
};

/**
 * @param stack
 */
ActionScript.prototype.ActionExtends = function (stack)
{
    var SuperClass = stack.pop();
    var SubClass   = stack.pop();
    if (SuperClass && SubClass) {
        this.superClass = SuperClass;
    }
};

/**
 * @param stack
 */
ActionScript.prototype.ActionCastOp = function (stack)
{
    var object = stack.pop();
    var func   = stack.pop();
    stack[stack.length] = (typeof func === "function" &&
    object instanceof func.prototype.constructor) ? object : null;
};

/**
 * @param stack
 */
ActionScript.prototype.ActionImplementsOp = function (stack)
{
    console.log("ActionImplementsOp");
    var func = stack.pop();
    console.log(func);

    var count  = 0 | stack.pop();
    var params = [];
    if (count > 0) {
        while (count) {
            count = 0 | count - 1;
            params[params.length] = stack.pop();
        }
    }
    stack[stack.length] = null;
};

/**
 * @param script
 * @param mc
 */
ActionScript.prototype.ActionTry = function (script, mc)
{
    try {
        script.try.apply(mc);
    } catch (e) {
        if (script.CatchBlockFlag) {
            script.catch.apply(mc,[e]);
        }
    } finally {
        if (script.FinallyBlockFlag) {
            script.finally.apply(mc);
        }
    }
};

/**
 * ActionThrow
 */
ActionScript.prototype.ActionThrow = function (stack)
{
    var value = stack.pop();
    throw value.message;
};
/**
 * @param data
 * @param id
 * @param ns
 * @param stage
 * @constructor
 */
var ActionScript3 = function (data, id, ns, stage)
{
    // params
    this.id           = id;
    this.caller       = null;
    this.parent       = null;
    this.activation   = null;
    this.scopeStack   = [];
    this.currentIndex = 0;
    this.stage        = stage;
    this.args         = [];
    this.variables    = {};

    // ABC code and info
    var methodBody = data.methodBody[id];

    this.body  = methodBody;
    this.codes = methodBody.codes;
    this.info  = data.method[methodBody.method];

    // pool and data
    this.names = data.names;
    this.data  = data;

    // ns
    this.ns = ns;

    // register
    this.AVM2        = this.getAVM2();
    this.register    = this.AVM2["__swf2js__:"+ns].register;
    this.register[0] = this.AVM2;

    // trait
    var trait = methodBody.trait;

    var length = trait.length|0;
    var i = 0;
    while (i < length) {
        var obj = trait[i];
        i = (i + 1)|0;

        var kind = obj.kind;
        switch (kind) {
            case 0:
                // var key = _this.names[obj.name];

                break;
        }
    }
};

/**
 * util
 */
ActionScript3.prototype = Object.create(Util.prototype);
ActionScript3.prototype.constructor = ActionScript3;

/**
 * @type {{}}
 */
ActionScript3.prototype.methods = {
    gotoAndStop: 1,
    gotoAndPlay: 1,
    play: 1,
    stop: 1,
    duplicateMovieClip: 1,
    getProperty: 1,
    removeMovieClip: 1,
    setProperty: 1,
    startDrag: 1,
    stopDrag: 1,
    targetPath: 1,
    updateAfterEvent: 1,
    nextFrame: 1,
    nextScene: 1,
    prevFrame: 1,
    prevScene: 1,
    stopAllSounds: 1,
    setMask: 1,
    getURL: 1,
    loadMovie: 1,
    loadMovieNum: 1,
    loadVariables: 1,
    loadVariablesNum: 1,
    unloadMovie: 1,
    unloadMovieNum: 1,
    swapDepths: 1,
    getInstanceAtDepth: 1,
    attachMovie: 1,
    attachAudio: 1,
    attachBitmap: 1,
    getNextHighestDepth: 1,
    getBytesLoaded: 1,
    getBytesTotal: 1,
    ASSetPropFlags: 1,
    lineStyle: 1,
    lineGradientStyle: 1,
    beginFill: 1,
    beginGradientFill: 1,
    beginBitmapFill: 1,
    graphics: 1,
    buttonMode: 1,
    clear: 1,
    moveTo: 1,
    lineTo: 1,
    curveTo: 1,
    endFill: 1,
    hitTest: 1,
    getDepth: 1,
    createEmptyMovieClip: 1,
    createTextField: 1,
    getBounds: 1,
    getRect: 1,
    getSWFVersion: 1,
    getTextSnapshot: 1,
    globalToLocal: 1,
    localToGlobal: 1,
    addFrameScript: 1,
    trace: 1,
    addEventListener: 1,
    removeEventListener: 1,
    x: 1,
    y: 1,
    alpha: 1,
    name: 1,
    blendMode: 1,
    filters: 1,
    visible: 1,
    rotation: 1,
    height: 1,
    width: 1,
    scaleX: 1,
    scaleY: 1,
    mouseX: 1,
    mouseY: 1,
    mask: 1,
    mouseEnabled: 1,
    parent: 1
};

/**
 * @returns {*}
 */
ActionScript3.prototype.getAVM2 = function ()
{

    var ns     = this.ns;
    var caller = this.caller;
    if (caller) {
        var AVM2 = caller.avm2;
        if (AVM2 && "__swf2js__:"+ns in AVM2) {
            return AVM2;
        }
    }

    var stage     = this.stage;
    var values    = ns.split(":");
    var className = values.pop();

    var classObj = stage.avm2;

    var nLen = values.length|0;
    var i = 0;
    while (i < nLen) {
        classObj = classObj[values[i]];
        i = (i + 1)|0;
    }

    return classObj[className];
};

/**
 * @returns {*}
 */
ActionScript3.prototype.getBuilder = function ()
{
    return this.AVM2["__swf2js__::builder"];
};

/**
 * @returns {*}
 */
ActionScript3.prototype.getSuperClass = function ()
{
    var _this = this;
    return _this.AVM2["__swf2js__:"+_this.ns].superClass;
};

/**
 * @returns {*}
 */
ActionScript3.prototype.getParent = function ()
{
    return this.parent;
};

/**
 * @param name
 * @returns {*}
 */
ActionScript3.prototype.getProperty = function (name)
{
    var stage = this.stage;
    var value;

    // local1
    if (this.activation) {
        value = this.activation[name];
    }

    // parent
    if (value === undefined) {
        var parent = this.getParent();
        if (parent) {
            value = parent.getProperty(name);
        }
    }

    // property
    if (value === undefined) {
        var builder = this.getBuilder();
        if (builder) {
            if (name in this.methods) {
                value = builder[name];
            }

            if (value === undefined) {
                value = builder.getProperty(name);
            }
        }
    }

    // local2
    if (value === undefined && name.indexOf("::") !== -1) {
        var values    = name.split("::");
        var className = values.pop();
        var path      = values.pop();
        if (path !== "private") {
            var pathArr  = path.split(".");

            var classObj = stage.avm2;

            var pLen = pathArr.length;
            var pIdx = 0;
            while (pIdx < pLen) {
                classObj = classObj[pathArr[pIdx]];
                pIdx = (pIdx + 1)|0;
            }

            value = classObj[className];

            if (value === undefined) {
                value = this.AVM2[className];
            }
        } else {
            value = this.AVM2["private::"+ className];
        }
    }

    return value;
};

/**
 * setOptions
 */
ActionScript3.prototype.setOptions = function ()
{
    var info = this.info;

    var paramCount = info.paramCount|0;
    if (paramCount) {
        var data      = this.data;
        var options   = info.options;
        var paramType = info.paramType;
        var stage     = this.stage;
        var i = 0;
        while (i < paramCount) {
            var value = undefined;

            if (i in options) {
                var option = options[i];
                var val    = option.val;
                switch (option.kind|0) {
                    case 0x01: // string
                        value = data.string[val];
                        break;
                    default:
                        console.log("options", option);
                        break;
                }
            }

            if (i in paramType) {
                var pType = paramType[i];
                if (pType) {
                    var mName = data.multiname_info[pType];
                    var className = null;
                    var path = "";
                    switch (mName.kind) {
                        case 0x07: // QName
                            var ns = data.namespace[mName.ns];
                            switch (ns.kind) {
                                case 0x16:
                                    path = data.string[ns.name];
                                    break;
                                default:
                                    console.log("SetOptions", ns);
                                    break;
                            }

                            className = data.string[mName.name];
                            break;
                    }

                    if (path) {
                        var values = path.split(".");
                        var classObj = stage.avm2;

                        var pLen = values.length|0;
                        var idx = 0;
                        while (idx < pLen) {
                            classObj = classObj[values[idx]];
                            idx = (idx + 1)|0;
                        }

                        value = classObj[className];
                    }
                }
            }

            if (this.args[i] === undefined) {
                this.args[i] = value;
            }

            i = (i + 1)|0;
        }
    }
};

/**
 * execute
 */
ActionScript3.prototype.execute = function ()
{
    var stack = [];
    this.scopeStack = [];

    // register
    this.AVM2 = this.getAVM2();
    this.register[0] = this.AVM2;

    var i = 0;
    var offset = 0;
    var codes  = this.codes;
    var length = codes.length|0;

    this.setOptions();

    while(i < length) {
        var obj  = codes[i];
        var code = obj.code|0;
        switch (code) {
            case 0xa0:
                this.ActionAdd(stack);
                break;
            case 0xc5:
                this.ActionAddI(stack);
                break;
            case 0x86:
                this.ActionAsType(stack, obj.value1);
                break;
            case 0x87:
                this.ActionAsTypeLate(stack);
                break;
            case 0xa8:
                this.ActionBitAnd(stack);
                break;
            case 0x97:
                this.ActionBitNot(stack);
                break;
            case 0xa9:
                this.ActionBitOr(stack);
                break;
            case 0xaa:
                this.ActionBitXOr(stack);
                break;
            case 0x41:
                this.ActionCall(stack, obj.value1);
                break;
            case 0x43:
                this.ActionCallMethod(stack, obj.value1, obj.value2);
                break;
            case 0x46:
                this.ActionCallProperty(stack, obj.value1, obj.value2);
                break;
            case 0x4c:
                this.ActionCallPropLex(stack, obj.value1, obj.value2);
                break;
            case 0x4f:
                this.ActionCallPropVoid(stack, obj.value1, obj.value2);
                break;
            case 0x44:
                this.ActionCallStatic(stack, obj.value1, obj.value2);
                break;
            case 0x45:
                this.ActionCallSuper(stack, obj.value1, obj.value2);
                break;
            case 0x4e:
                this.ActionCallSuperVoid(stack, obj.value1, obj.value2);
                break;
            case 0x78:
                this.ActionCheckFilter(stack);
                break;
            case 0x80:
                this.ActionCoerce(stack, obj.value1);
                break;
            case 0x82:
                this.ActionCoerceA(stack);
                break;
            case 0x85:
                this.ActionCoerceS(stack);
                break;
            case 0x42:
                this.ActionConstruct(stack, obj.value1);
                break;
            case 0x4a:
                this.ActionConstructProp(stack, obj.value1, obj.value2);
                break;
            case 0x49:
                this.ActionConstructSuper(stack, obj.value1);
                break;
            case 0x76:
                this.ActionConvertB(stack);
                break;
            case 0x73:
                this.ActionConvertI(stack);
                break;
            case 0x75:
                this.ActionConvertD(stack);
                break;
            case 0x77:
                this.ActionConvertO(stack);
                break;
            case 0x74:
                this.ActionConvertU(stack);
                break;
            case 0x70:
                this.ActionConvertS(stack);
                break;
            case 0xef:
                this.ActionDebug(stack, obj.value1, obj.value2, obj.value3, obj.value4);
                break;
            case 0xf1:
                this.ActionDebugFile(stack, obj.value1);
                break;
            case 0xf0:
                this.ActionDebugLine(stack);
                break;
            case 0x94:
                this.ActionDecLocal(stack, obj.value1);
                break;
            case 0xc3:
                this.ActionDecLocalI(stack, obj.value1);
                break;
            case 0x93:
                this.ActionDecrement(stack);
                break;
            case 0xc1:
                this.ActionDecrementI(stack);
                break;
            case 0x6a:
                this.ActionDeleteProperty(stack, obj.value1);
                break;
            case 0xa3:
                this.ActionDivide(stack);
                break;
            case 0x2a:
                this.ActionDup(stack);
                break;
            case 0x06:
                this.ActionDxns(stack, obj.value1);
                break;
            case 0x07:
                this.ActionDxnsLate(stack);
                break;
            case 0xab:
                this.ActionEquals(stack);
                break;
            case 0x72:
                this.ActionEscXAttr(stack);
                break;
            case 0x71:
                this.ActionEscXElem(stack);
                break;
            case 0x5e:
                this.ActionFindProperty(stack, obj.value1);
                break;
            case 0x5d:
                this.ActionFindPropStrict(stack, obj.value1);
                break;
            case 0x59:
                this.ActionGetDescendAnts(stack, obj.value1);
                break;
            case 0x64:
                this.ActionGetGlobalScope(stack);
                break;
            case 0x6e:
                this.ActionGetGlobalsLot(stack, obj.value1);
                break;
            case 0x60:
                this.ActionGetLex(stack, obj.value1);
                break;
            case 0x62:
                this.ActionGetLocal(stack, obj.value1);
                break;
            case 0xd0:
                this.ActionGetLocal0(stack);
                break;
            case 0xd1:
                this.ActionGetLocal1(stack);
                break;
            case 0xd2:
                this.ActionGetLocal2(stack);
                break;
            case 0xd3:
                this.ActionGetLocal3(stack);
                break;
            case 0x66:
                this.ActionGetProperty(stack, obj.value1);
                break;
            case 0x65:
                this.ActionGetScopeObject(stack, obj.value1);
                break;
            case 0x6c:
                this.ActionGetSlot(stack, obj.value1);
                break;
            case 0x04:
                this.ActionGetSuper(stack, obj.value1);
                break;
            case 0xb0:
                this.ActionGreaterEquals(stack);
                break;
            case 0xaf:
                this.ActionGreaterThan(stack);
                break;
            case 0x1f:
                this.ActionHasNext(stack);
                break;
            case 0x32:
                this.ActionHasNext2(stack, obj.value1, obj.value2);
                break;
            case 0x12:
                offset = this.ActionIfFalse(stack, obj.value1);
                i = (i + offset)|0;
                break;
            case 0x18:
                offset = this.ActionIfGe(stack, obj.value1);
                i = (i + offset)|0;
                break;
            case 0x17:
                offset = this.ActionIfGt(stack, obj.value1);
                i = (i + offset)|0;
                break;
            case 0x16:
                offset = this.ActionIfLe(stack, obj.value1);
                i = (i + offset)|0;
                break;
            case 0x15:
                offset = this.ActionIfLt(stack, obj.value1);
                i = (i + offset)|0;
                break;
            case 0x0f:
                offset = this.ActionIfNge(stack, obj.value1);
                i += offset;
                break;
            case 0x0e:
                offset = this.ActionIfNgt(stack, obj.value1);
                i = (i + offset)|0;
                break;
            case 0x0d:
                offset = this.ActionIfNle(stack, obj.value1);
                i = (i + offset)|0;
                break;
            case 0x0c:
                offset = this.ActionIfNlt(stack, obj.value1);
                i = (i + offset)|0;
                break;
            case 0x14:
                offset = this.ActionIfNe(stack, obj.value1);
                i = (i + offset)|0;
                break;
            case 0x19:
                offset = this.ActionIfStrictEq(stack, obj.value1);
                i = (i + offset)|0;
                break;
            case 0x1a:
                offset = this.ActionIfStrictNe(stack, obj.value1);
                i = (i + offset)|0;
                break;
            case 0x11:
                offset = this.ActionIfTrue(stack, obj.value1);
                i = (i + offset)|0;
                break;
            case 0xb4:
                this.ActionIn(stack, obj.value1);
                break;
            case 0x92:
                this.ActionIncLocal(stack, obj.value1);
                break;
            case 0xc2:
                this.ActionIncLocalI(stack, obj.value1);
                break;
            case 0x91:
                this.ActionIncrement(stack);
                break;
            case 0xc0:
                this.ActionIncrementI(stack);
                break;
            case 0x68:
                this.ActionInitProperty(stack, obj.value1);
                break;
            case 0xb1:
                this.ActionInstanceOf(stack);
                break;
            case 0xb2:
                this.ActionIsType(stack, obj.value1);
                break;
            case 0xb3:
                this.ActionIsTypeLate(stack);
                break;
            case 0x10: // ActionJump
                i = (i + obj.value1)|0;
                break;
            case 0x08:
                this.ActionKill(stack, obj.value1);
                break;
            case 0x09:
                this.ActionLabel(stack);
                break;
            case 0xae:
                this.ActionLessEquals(stack);
                break;
            case 0xad:
                this.ActionLessThan(stack);
                break;
            case 0x1b:
                this.ActionLookupSwitch(stack, obj.value1, obj.value1, obj.value3);
                break;
            case 0xa5:
                this.ActionLShift(stack);
                break;
            case 0xa4:
                this.ActionModulo(stack);
                break;
            case 0xa2:
                this.ActionMultiply(stack);
                break;
            case 0xc7:
                this.ActionMultiplyI(stack);
                break;
            case 0x90:
                this.ActionNeGate(stack);
                break;
            case 0xc4:
                this.ActionNeGateI(stack);
                break;
            case 0x57:
                this.ActionNewActivation(stack);
                break;
            case 0x56:
                this.ActionNewArray(stack, obj.value1);
                break;
            case 0x5a:
                this.ActionNewCatch(stack, obj.value1);
                break;
            case 0x58:
                this.ActionNewClass(stack, obj.value1);
                break;
            case 0x40:
                this.ActionNewFunction(stack, obj.value1);
                break;
            case 0x55:
                this.ActionNewObject(stack, obj.value1);
                break;
            case 0x1e:
                this.ActionNextName(stack);
                break;
            case 0x23:
                this.ActionNextValue(stack);
                break;
            case 0x02:
                this.ActionNop(stack);
                break;
            case 0x96:
                this.ActionNot(stack);
                break;
            case 0x29:
                this.ActionPop(stack);
                break;
            case 0x1d:
                this.ActionPopScope();
                break;
            case 0x24:
                this.ActionPushByte(stack, obj.value1);
                break;
            case 0x2f:
                this.ActionPushDouble(stack, obj.value1);
                break;
            case 0x27:
                this.ActionPushFalse(stack, obj.value1);
                break;
            case 0x2d:
                this.ActionPushInt(stack, obj.value1);
                break;
            case 0x31:
                this.ActionPushNameSpace(stack, obj.value1);
                break;
            case 0x28:
                this.ActionPushNan(stack);
                break;
            case 0x20:
                this.ActionPushNull(stack);
                break;
            case 0x30:
                this.ActionPushScope(stack);
                break;
            case 0x25:
                this.ActionPushShort(stack, obj.value1);
                break;
            case 0x2c:
                this.ActionPushString(stack, obj.value1);
                break;
            case 0x26:
                this.ActionPushTrue(stack);
                break;
            case 0x2e:
                this.ActionPushUInt(stack, obj.value1);
                break;
            case 0x21:
                this.ActionPushUndefined(stack);
                break;
            case 0x1c:
                this.ActionPushWith(stack);
                break;
            case 0x48: // ActionReturnValue
                return stack.pop();
            case 0x47: // ReturnVoid
                return undefined;
            case 0xa6:
                this.ActionRShift(stack);
                break;
            case 0x63:
                this.ActionSetLocal(stack, obj.value1);
                break;
            case 0xd4:
                this.ActionSetLocal0(stack);
                break;
            case 0xd5:
                this.ActionSetLocal1(stack);
                break;
            case 0xd6:
                this.ActionSetLocal2(stack);
                break;
            case 0xd7:
                this.ActionSetLocal3(stack);
                break;
            case 0x6f:
                this.ActionSetGlobalSlot(stack, obj.value1);
                break;
            case 0x61:
                this.ActionSetProperty(stack, obj.value1);
                break;
            case 0x6d:
                this.ActionSetSlot(stack, obj.value1);
                break;
            case 0x05:
                this.ActionSetSuper(stack, obj.value1);
                break;
            case 0xac:
                this.ActionStrictEquals(stack);
                break;
            case 0xa1:
                this.ActionSubtract(stack);
                break;
            case 0xc6:
                this.ActionSubtractI(stack);
                break;
            case 0x2b:
                this.ActionSwap(stack);
                break;
            case 0x03:
                this.ActionThrow(stack);
                break;
            case 0x95:
                this.ActionTypeof(stack);
                break;
            case 0xa7:
                this.ActionURShift(stack);
                break;
        }

        i = (i + obj.offset + 1)|0;
    }
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionAdd = function (stack)
{
    var value2 = stack.pop();
    var value1 = stack.pop();
    stack[stack.length] = value1 + value2;
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionAddI = function (stack)
{
    var value2 = +stack.pop();
    var value1 = +stack.pop();
    stack[stack.length] = value1 + value2;
};

/**
 * @param stack
 * @param index
 */
ActionScript3.prototype.ActionAsType = function (stack, index)
{
    var type = this.names[index];
    var value = stack.pop();
    stack[stack.length] = (typeof value === type) ? true : null;
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionAsTypeLate = function (stack)
{
    var cValue = stack.pop(); // class
    var value = stack.pop();
    stack[stack.length] = (typeof cValue === value) ? true : null;
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionBitAnd = function (stack)
{
    var value2 = stack.pop();
    var value1 = stack.pop();
    stack[stack.length] = value1 & value2;
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionBitNot = function (stack)
{
    var value = stack.pop();
    stack[stack.length] = ~value;
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionBitOr = function (stack)
{
    var value2 = stack.pop();
    var value1 = stack.pop();
    stack[stack.length] = value1 | value2;
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionBitXOr = function (stack)
{
    var value2 = stack.pop();
    var value1 = stack.pop();
    stack[stack.length] = value1 ^ value2;
};

/**
 * @param stack
 * @param argCount
 */
ActionScript3.prototype.ActionCall = function (stack, argCount)
{
    var params = [];
    for (var i = argCount; i--;) {
        params[i] = stack.pop();
    }
    var receiver = stack.pop();
    var func = stack.pop();

    var value;
    if (typeof func === "function") {
        value = func.apply(receiver, params);
    }
    stack[stack.length] = value;
};

/**
 * @param stack
 * @param index
 * @param argCount
 */
ActionScript3.prototype.ActionCallMethod = function (stack, index, argCount)
{
    var params = [];
    for (var i = 0; i < argCount; i++) {
        params[params.length] = stack.pop();
    }
    var receiver = stack.pop();
    var value;
    if (typeof receiver === "function") {
        value = receiver.apply(this.caller, params);
    }
    stack[stack.length] = value;
};

/**
 * @param stack
 * @param index
 * @param argCount
 */
ActionScript3.prototype.ActionCallProperty = function (stack, index, argCount)
{
    var _this = this;
    var params = [];
    for (var i = argCount; i--;) {
        params[params.length] = stack.pop();
    }
    var prop = _this.names[index];
    var obj = stack.pop();

    var value;
    if (obj) {
        var func = null;
        if (obj instanceof DisplayObject) {
            if (prop in _this.methods) {
                func = obj[prop];
            }

            if (!func) {
                func = obj.getProperty(prop);
            }
        } else {
            func = obj[prop];
        }

        if (func) {
            value = func.apply(_this.caller, params);
        }
    }

    stack[stack.length] = value;
};

/**
 * @param stack
 * @param index
 * @param argCount
 */
ActionScript3.prototype.ActionCallPropLex = function (stack, index, argCount)
{
    var _this = this;
    var params = [];
    for (var i = argCount; i--;) {
        params[params.length] = stack.pop();
    }

    var prop = _this.names[index];
    var obj = stack.pop();

    var value;
    if (obj) {
        value = obj[prop].apply(_this.getBuilder(), params);
    }
    stack[stack.length] = value;
};

/**
 * @param stack
 * @param index
 * @param argCount
 */
ActionScript3.prototype.ActionCallPropVoid = function (stack, index, argCount)
{
    var _this = this;
    var params = [];
    for (var i = argCount; i--;) {
        params[i] = stack.pop();
    }

    var obj = stack.pop();
    var name = _this.names[index];

    var values = name.split("::"); // implements
    var prop = values.pop();
    var ns = values.pop();
    if (ns) {
        // console.log(ns, obj, prop);
    }

    var func = obj[prop];
    if (!func && obj instanceof MovieClip) {
        var stage = obj.getStage();
        var symbol = stage.symbols[obj.getCharacterId()];
        if (symbol) {
            var names = symbol.split(".");
            var classMethod = names.pop();
            var length = names.length;
            var classObj = stage.avm2;
            for (i = 0; i < length; i++) {
                classObj = classObj[names[i]];
            }

            if (classObj) {
                var AVM2 = classObj[classMethod];
                while (true) {
                    func = AVM2[prop];
                    if (func) {
                        break;
                    }
                    AVM2 = AVM2.super;
                    if (!AVM2 || AVM2 instanceof MovieClip) {
                        break;
                    }
                }
            }
        }
    }

    if (!func) {
        while (true) {
            var SuperClass = obj.super;
            if (!SuperClass) {
                break;
            }

            if (SuperClass instanceof MovieClip) {
                obj = _this.caller;
                func = obj[prop];
                break;
            }

            func = SuperClass[prop];
            if (func) {
                break;
            }

            obj = SuperClass;
        }
    }

    // fscommand
    if (prop === "fscommand") {
        obj = _this.stage;
    }

    if (func) {
        func.apply(obj, params);
    }
};

/**
 * @param stack
 * @param index
 * @param argCount
 */
ActionScript3.prototype.ActionCallStatic = function (stack, index, argCount)
{
    console.log("ActionCallStatic");
    var params = [];
    for (var i = argCount; i--;) {
        params[params.length] = stack.pop();
    }
    var receiver = stack.pop();
    var value;
    stack[stack.length] = value;
};

/**
 * @param stack
 * @param index
 * @param argCount
 */
ActionScript3.prototype.ActionCallSuper = function (stack, index, argCount)
{
    var params = [];
    for (var i = argCount; i--;) {
        params[params.length] = stack.pop();
    }
    var porp = this.names[index];
    var receiver = stack.pop();

};

/**
 * @param stack
 * @param index
 * @param argCount
 */
ActionScript3.prototype.ActionCallSuperVoid = function (stack, index, argCount)
{
    var params = [];
    for (var i = argCount; i--;) {
        params[params.length] = stack.pop();
    }
    var porp = this.names[index];
    var receiver = stack.pop();
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionCheckFilter = function (stack)
{
    var value = stack.pop();
    stack[stack.length] = value;
};

/**
 * @param stack
 * @param index
 */
ActionScript3.prototype.ActionCoerce = function (stack, index)
{
    var value = stack.pop();
    var str = this.names[index];
    stack[stack.length] = str;
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionCoerceA = function(stack)
{
    var value = stack.pop();
    stack[stack.length] = value;
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionCoerceS = function (stack)
{
    var value = stack.pop();
    stack[stack.length] = String(value);
};

/**
 * @param stack
 * @param argCount
 */
ActionScript3.prototype.ActionConstruct = function (stack, argCount)
{
    var params = [];
    for (var i = argCount; i--;) {
        params[params.length] = stack.pop();
    }
    var obj = stack.pop();
    stack[stack.length] = obj.construct.apply(obj, params);
};

/**
 * @param stack
 * @param index
 * @param argCount
 */
ActionScript3.prototype.ActionConstructProp = function (stack, index, argCount)
{
    var _this = this;
    var params = [];
    for (var i = argCount; i--;) {
        params[params.length] = stack.pop();
    }

    var prop = _this.names[index];
    var obj = stack.pop();

    var value;
    var stage = _this.stage;
    var DoABC = stage.abc[prop];
    if (DoABC) {
        var builder = _this.getBuilder();
        var AVM2 = new DoABC(builder);
        stage.avm2[prop] = AVM2;
        AVM2[prop].apply(builder, params);
        value = AVM2;
    } else {
        value = new (Function.prototype.bind.apply(obj[prop], params))();
    }

    stack[stack.length] = value;
};

/**
 * @param stack
 * @param argCount
 */
ActionScript3.prototype.ActionConstructSuper = function (stack, argCount)
{
    var _this = this;
    var params = [];
    for (var i = argCount; i--;) {
        params[i] = stack.pop();
    }

    var obj = stack.pop();
    var SuperClassName = obj["__swf2js__:"+_this.ns].extends;
    var values = SuperClassName.split("::");
    var prop = values.pop();
    var ns = values.pop();
    var stage = _this.stage;
    var abcObj = stage.abc;
    var avmObj = stage.avm2;

    if (ns) {
        var names = ns.split(".");
        var length = names.length;
        for (i = 0; i < length; i++) {
            abcObj = abcObj[names[i]];
            avmObj = avmObj[names[i]];
        }
    }

    var sClass = null;
    var SuperClass = abcObj[prop];
    var builder = _this.getBuilder();
    switch (SuperClass) {
        case MovieClip:
            sClass = new MovieClip();
            sClass.setStage(stage);
            sClass._extend = true;
            break;
        case Sound:
            sClass = new Sound();
            sClass.movieClip = builder;
            break;
        default:
            if (SuperClass in window) { // Object
                sClass = new (Function.prototype.bind.apply(window[SuperClassName], params))();
            } else {
                sClass = new SuperClass(builder);
                avmObj[prop] = sClass;
                sClass[prop].apply(builder, params);
            }
            break;
    }

    obj["super"] = sClass;
    obj["__swf2js__:"+_this.ns].superClass = sClass;
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionConvertB = function (stack)
{
    var value = stack.pop();
    stack[stack.length] = (value) ? true : false;
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionConvertI = function (stack)
{
    var value = stack.pop();
    stack[stack.length] = value|0;
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionConvertD = function (stack)
{
    var value = stack.pop();
    stack[stack.length] = +value;
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionConvertO = function (stack)
{
    var value = stack.pop();
    stack[stack.length] = (typeof value === "object") ? value : null;
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionConvertU = function (stack)
{
    var value = stack.pop();
    value = value|0;
    if (value < 0) {
        value *= -1;
    }
    stack[stack.length] = value;
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionConvertS = function (stack)
{
    var value = stack.pop();
    stack[stack.length] = String(value);
};

/**
 * @param stack
 * @param type
 * @param index
 * @param reg
 * @param extra
 */
ActionScript3.prototype.ActionDebug = function (stack, type, index, reg, extra)
{


};

/**
 * @param stack
 * @param index
 */
ActionScript3.prototype.ActionDebugFile = function (stack, index)
{


};

/**
 * @param stack
 */
ActionScript3.prototype.ActionDebugLine = function (stack)
{


};

/**
 * @param stack
 * @param index
 */
ActionScript3.prototype.ActionDecLocal = function (stack, index)
{

};

/**
 * @param stack
 * @param index
 */
ActionScript3.prototype.ActionDecLocalI = function (stack, index)
{

};

/**
 * @param stack
 */
ActionScript3.prototype.ActionDecrement = function (stack)
{
    var value = stack.pop();
    value -= 1;
    stack[stack.length] = value;
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionDecrementI = function (stack)
{
    var value = stack.pop();
    value -= 1;
    stack[stack.length] = value;
};

/**
 * @param stack
 * @param index
 */
ActionScript3.prototype.ActionDeleteProperty = function (stack, index)
{
    var prop = this.name[index];
    var obj = stack.pop();
    if (obj) {
        if (prop in obj) {
            delete obj[prop];
        } else {
            // TODO
            console.log("ActionDeleteProperty");
        }
    }
    stack[stack.length] = true;
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionDivide = function (stack)
{
    var value2 = stack.pop();
    var value1 = stack.pop();
    stack[stack.length] = value1 / value2;
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionDup = function (stack)
{
    var value = stack.pop();
    stack[stack.length] = value;
    stack[stack.length] = value;
};

/**
 * @param stack
 * @param index
 */
ActionScript3.prototype.ActionDxns = function (stack, index)
{

};

/**
 * @param stack
 */
ActionScript3.prototype.ActionDxnsLate = function (stack)
{
    var value = stack.pop();
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionEquals = function (stack)
{
    var value2 = stack.pop();
    var value1 = stack.pop();
    stack[stack.length] = (value1 == value2);
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionEscXAttr = function (stack)
{
    var value = stack.pop();
    stack[stack.length] = String(value);
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionEscXElem = function (stack)
{
    var value = stack.pop();
    stack[stack.length] = String(value);
};

/**
 * @param stack
 * @param index
 */
ActionScript3.prototype.ActionFindProperty = function (stack, index)
{
    var prop = this.names[index];
    var obj;
    stack[stack.length] = obj;
};

/**
 * @param stack
 * @param index
 */
ActionScript3.prototype.ActionFindPropStrict = function (stack, index)
{
    var _this = this;
    var name = _this.names[index];
    var values = name.split("::");
    var prop = values.pop();
    var ns = values.pop();
    var obj = null;

    var AVM2 = _this.AVM2;
    if (ns) {
        var names = ns.split(".");
        var length = names.length;
        if (length > 1) {
            var avmObj = _this.stage.avm2;
            for (var i = 0; i < length; i++) {
                avmObj = avmObj[names[i]];
            }
            AVM2 = avmObj;
        }
    }

    // local
    if (prop in AVM2) {
        obj = AVM2;
    }

    // find avm
    if (!obj) {
        var avm2s = _this.stage.avm2;
        if (prop in avm2s) {
            obj = avm2s[prop];
        }
    }

    // parent
    if (!obj) {
        var parent = _this.parent;
        if (parent) {
            while (true) {
                var pBuilder = parent.getBuilder();
                if (pBuilder) {
                    if (pBuilder instanceof MovieClip) {
                        if (prop in _this.methods) {
                            obj = pBuilder;
                        }

                        if (pBuilder.getProperty() !== undefined) {
                            obj = pBuilder;
                        }
                    }
                } else {
                    var pCaller = parent.caller;
                    if (pCaller instanceof MovieClip) {
                        if (prop in _this.methods) {
                            obj = pCaller;
                        }

                        if (pBuilder.getProperty() !== undefined) {
                            obj = pCaller;
                        }
                    }
                }

                if (obj) {
                    break;
                }

                parent = parent.parent;
                if (!parent) {
                    break;
                }
            }
        }
    }

    // builder
    if (!obj) {
        var builder = _this.getBuilder();
        if (builder) {
            if (builder instanceof MovieClip) {
                if (prop in _this.methods) {
                    obj = builder;
                }

                if (builder.getProperty() !== undefined) {
                    obj = builder;
                }
            }
        }
    }

    // caller
    if (!obj) {
        var caller = _this.caller;
        if (caller) {
            if (caller instanceof MovieClip) {
                if (prop in _this.methods) {
                    obj = caller;
                }

                if (caller.getProperty() !== undefined) {
                    obj = caller;
                }
            } else {
                if (name in caller) {
                    obj = caller;
                }
                if (!obj && "__swf2js__::builder" in caller) {
                    caller = caller["__swf2js__::builder"];
                    if (prop in _this.methods) {
                        obj = caller;
                    }

                    if (caller.getProperty() !== undefined) {
                        obj = caller;
                    }
                }
            }
        }
    }

    if (!obj) {
        // console.log("ActionFindPropStrict::ERROR", name, AVM2, this);
    }

    stack[stack.length] = obj;
};

/**
 * @param stack
 * @param index
 */
ActionScript3.prototype.ActionGetDescendAnts = function (stack, index)
{
    console.log("ActionGetDescendAnts");
    var porp = this.names[index];
    var obj;
    stack[stack.length] = obj;
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionGetGlobalScope = function (stack)
{
    var _this = this;
    var scopeStack = _this.scopeStack;
    stack[stack.length] = scopeStack[scopeStack.length - 1];
};

/**
 * @param stack
 * @param index
 */
ActionScript3.prototype.ActionGetGlobalsLot = function (stack, index)
{
    console.log("ActionGetGlobalsLot");
    var value;
    stack[stack.length] = value;
};

/**
 * @param stack
 * @param index
 */
ActionScript3.prototype.ActionGetLex = function (stack, index)
{
    var name = this.names[index];
    stack[stack.length] = this.getProperty(name);
};

/**
 * @param stack
 * @param index
 */
ActionScript3.prototype.ActionGetLocal = function (stack, index)
{
    var _this = this;
    var value = _this.args[index - 1];
    if (value === undefined) {
        value = _this.register[index];
    }
    stack[stack.length] = value;
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionGetLocal0 = function (stack)
{
    stack[stack.length] = this.register[0];
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionGetLocal1 = function (stack)
{
    var _this = this;
    var value = _this.args[0];
    if (value === undefined) {
        value = _this.register[1];
    }
    stack[stack.length] = value;
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionGetLocal2 = function (stack)
{
    var _this = this;
    var value = _this.args[1];
    if (value === undefined) {
        value = _this.register[2];
    }
    stack[stack.length] = value;
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionGetLocal3 = function (stack)
{
    var _this = this;
    var value = _this.args[2];
    if (value === undefined) {
        value = _this.register[3];
    }
    stack[stack.length] = value;
};

/**
 * @param stack
 * @param index
 */
ActionScript3.prototype.ActionGetProperty = function (stack, index)
{
    var _this = this;
    var prop = _this.names[index];
    if (prop === null) {
        prop = stack.pop();
    }
    var obj = stack.pop();

    var value;
    if (obj && prop) {
        if (obj instanceof DisplayObject) {
            if (prop in _this.methods) {
                value = obj[prop];
            }
            if (!value) {
                value = obj.getProperty(prop);
            }
        } else {
            value = obj[prop];
        }

        if (value === undefined) {
            value = _this.getProperty(prop);
        }
    }
    stack[stack.length] = value;
};

/**
 * @param stack
 * @param index
 */
ActionScript3.prototype.ActionGetScopeObject = function (stack, index)
{
    var activation = this.activation;
    if (!index) {
        stack[stack.length] = activation;
    } else {
        stack[stack.length] = (index in activation) ? activation : null;
    }
};

/**
 * @param stack
 * @param index
 */
ActionScript3.prototype.ActionGetSlot = function (stack, index)
{
    var obj = stack.pop();
    var name = obj[index];
    stack[stack.length] = this.activation[name];
};

/**
 * @param stack
 * @param index
 */
ActionScript3.prototype.ActionGetSuper = function (stack, index)
{
    var prop = this.prop;
    var obj = stack.pop();
    var value;
    stack[stack.length] = value;
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionGreaterEquals = function (stack)
{
    var value2 = stack.pop();
    var value1 = stack.pop();
    stack[stack.length] = (value1 >= value2);
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionGreaterThan = function (stack)
{
    var value2 = stack.pop();
    var value1 = stack.pop();
    stack[stack.length] = (value1 > value2);
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionHasNext = function (stack)
{
    var currentIndex = stack.pop();
    var obj = stack.pop();

    currentIndex++;
    var result = 0;
    if (obj) {
        var index = 0;
        for (var key in obj) {
            if (!obj.hasOwnProperty(key)) {
                continue;
            }

            if (index === currentIndex) {
                result = currentIndex;
                break;
            }
            index++;
        }
    }

    stack[stack.length] = result;
};

/**
 * @param stack
 * @param objectReg
 * @param indexReg
 */
ActionScript3.prototype.ActionHasNext2 = function (stack, objectReg, indexReg)
{
    var _this = this;
    var obj = _this.register[objectReg];
    var currentIndex = _this.currentIndex;

    var value = false;
    var index = 0;
    if (obj) {
        for (var key in obj) {
            if (!obj.hasOwnProperty(key)) {
                continue;
            }

            if (index === currentIndex) {
                value = true;
                currentIndex++;
                break;
            }

            index++;
        }
    }

    if (!value) {
        currentIndex = 0;
    }

    _this.currentIndex = currentIndex;
    _this.register[indexReg] = index;
    stack[stack.length] = value;
};

/**
 * @param stack
 * @param index
 * @returns {number}
 */
ActionScript3.prototype.ActionIfFalse = function (stack, index)
{
    var value = stack.pop();
    return (value === false) ? index : 0;
};

/**
 * @param stack
 * @param index
 * @returns {number}
 */
ActionScript3.prototype.ActionIfGe = function (stack, index)
{
    var value2 = stack.pop();
    var value1 = stack.pop();
    return (value1 < value2) ? index : 0;
};

/**
 * @param stack
 * @param index
 * @returns {number}
 */
ActionScript3.prototype.ActionIfGt = function (stack, index)
{
    var value2 = stack.pop();
    var value1 = stack.pop();
    return (value1 > value2) ? index : 0;
};

/**
 * @param stack
 * @param index
 * @returns {number}
 */
ActionScript3.prototype.ActionIfLe = function (stack, index)
{
    var value2 = stack.pop();
    var value1 = stack.pop();
    return (value2 < value1) ? index : 0;
};

/**
 * @param stack
 * @param index
 * @returns {number}
 */
ActionScript3.prototype.ActionIfLt = function (stack, index)
{
    var value2 = stack.pop();
    var value1 = stack.pop();
    return (value1 < value2) ? index : 0;
};

/**
 * @param stack
 * @param index
 * @returns {number}
 */
ActionScript3.prototype.ActionIfNge = function (stack, index)
{
    var value2 = stack.pop();
    var value1 = stack.pop();
    return (value1 < value2) ? index : 0;
};

/**
 * @param stack
 * @param index
 * @returns {number}
 */
ActionScript3.prototype.ActionIfNgt = function (stack, index)
{
    var value2 = stack.pop();
    var value1 = stack.pop();
    return (value2 < value1) ? index : 0;
};

/**
 * @param stack
 * @param index
 * @returns {number}
 */
ActionScript3.prototype.ActionIfNle = function (stack, index)
{
    var value2 = stack.pop();
    var value1 = stack.pop();
    return (value2 < value1) ? index : 0;
};

/**
 * @param stack
 * @param index
 * @returns {number}
 */
ActionScript3.prototype.ActionIfNlt = function (stack, index)
{
    var value2 = stack.pop();
    var value1 = stack.pop();
    return (value1 < value2) ? index : 0;
};

/**
 * @param stack
 * @param index
 * @returns {number}
 */
ActionScript3.prototype.ActionIfNe = function (stack, index)
{
    var value2 = stack.pop();
    var value1 = stack.pop();
    return (value1 == value2) ? 0 : index;
};

/**
 * @param stack
 * @param index
 * @returns {number}
 */
ActionScript3.prototype.ActionIfStrictEq  = function (stack, index)
{
    var value2 = stack.pop();
    var value1 = stack.pop();
    return (value1 === value2) ? index : 0;
};

/**
 * @param stack
 * @param index
 * @returns {number}
 */
ActionScript3.prototype.ActionIfStrictNe  = function (stack, index)
{
    var value2 = stack.pop();
    var value1 = stack.pop();
    return (value1 === value2) ? 0 : index;
};

/**
 * @param stack
 * @param index
 * @returns {number}
 */
ActionScript3.prototype.ActionIfTrue = function (stack, index)
{
    var value = stack.pop();
    return (value === true) ? index : 0;
};


/**
 * @param stack
 */
ActionScript3.prototype.ActionIn = function (stack)
{
    var obj = stack.pop();
    var name = stack.pop();
    stack[stack.length] = (name in obj);
};

/**
 * @param stack
 * @param index
 */
ActionScript3.prototype.ActionIncLocal = function (stack, index)
{
    this.register[index]+=1;
};

/**
 * @param stack
 * @param index
 */
ActionScript3.prototype.ActionIncLocalI = function (stack, index)
{
    this.register[index]+=1;
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionIncrement = function (stack)
{
    var value = stack.pop();
    value++;
    stack[stack.length] = value;
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionIncrementI = function (stack)
{
    var value = stack.pop();
    value++;
    stack[stack.length] = value;
};

/**
 * @param stack
 * @param index
 */
ActionScript3.prototype.ActionInitProperty = function (stack, index)
{
    var value = stack.pop();
    var prop = this.names[index];
    var obj = stack.pop();
    if (obj) {
        if (obj instanceof DisplayObject) {
            obj.setProperty(prop, value);
        } else {
            obj[prop] = value;
        }
    }
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionInstanceOf = function (stack)
{
    var type = stack.pop();
    var value = stack.pop();
    stack[stack.length] = (value instanceof type);
};

/**
 * @param stack
 * @param index
 */
ActionScript3.prototype.ActionIsType = function (stack, index)
{
    var value = stack.pop();
    var type = this.name[index];
    stack[stack.length] = (value == type);
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionIsTypeLate = function (stack)
{
    var type = stack.pop();
    var value = stack.pop();
    stack[stack.length] = (value == type);
};

/**
 * @param stack
 * @param index
 */
ActionScript3.prototype.ActionKill = function (stack, index)
{
    delete this.register[index];
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionLabel = function (stack)
{

};

/**
 * @param stack
 */
ActionScript3.prototype.ActionLessEquals = function (stack)
{
    var value2 = stack.pop();
    var value1 = stack.pop();
    stack[stack.length] =  (value1 <= value2);
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionLessThan = function (stack)
{
    var value2 = stack.pop();
    var value1 = stack.pop();
    stack[stack.length] =  (value1 < value2);
};

/**
 * @param stack
 * @param offset
 * @param count
 * @param array
 */
ActionScript3.prototype.ActionLookupSwitch = function (stack, offset, count, array)
{
    var index = stack.pop();
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionLShift = function (stack)
{
    var value2 = stack.pop();
    var value1 = stack.pop();
    stack[stack.length] = value1 << value2;
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionModulo = function (stack)
{
    var value2 = stack.pop();
    var value1 = stack.pop();
    stack[stack.length] = value1 % value2;
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionMultiply = function (stack)
{
    var value2 = stack.pop();
    var value1 = stack.pop();
    stack[stack.length] = value1 * value2;
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionMultiplyI = function (stack)
{
    var value2 = stack.pop();
    var value1 = stack.pop();
    stack[stack.length] = value1 * value2;
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionNeGate = function (stack)
{
    var value = stack.pop();
    stack[stack.length] = -value;
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionNeGateI = function (stack)
{
    var value = stack.pop();
    stack[stack.length] = -value;
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionNewActivation = function (stack)
{
    var _this = this;
    var trait = _this.body.trait;
    var length = trait.length;
    var activation = new Activation();
    for (var i = 0; i < length; i++) {
        var obj = trait[i];
        var kind = obj.kind;
        switch (kind) {
            case 0:
                activation[i + 1] = _this.names[obj.name];
                break;
        }
    }

    _this.activation = activation;
    stack[stack.length] = activation;
};

/**
 * @param stack
 * @param argCount
 */
ActionScript3.prototype.ActionNewArray = function (stack, argCount)
{
    var array = [];
    for (var i = argCount; i--;) {
        array[i] = stack.pop();
    }
    stack[stack.length] = array;
};

/**
 * @param stack
 * @param index
 */
ActionScript3.prototype.ActionNewCatch = function (stack, index)
{
    var catchScope;
    stack[stack.length] = catchScope;
};

/**
 * @param stack
 * @param index
 */
ActionScript3.prototype.ActionNewClass = function (stack, index)
{
    var basetype = stack.pop();
    var data = this.data;
    var classInfo = data.class[index];
    var id = classInfo.cinit;

    stack[stack.length] = basetype;
};

/**
 * @param stack
 * @param index
 */
ActionScript3.prototype.ActionNewFunction = function (stack, index)
{
    stack[stack.length] = (function (self, id)
    {
        return function ()
        {
            var as3 = new ActionScript3(self.data, id, self.ns, self.stage);
            as3.caller = this;
            as3.parent = self;
            as3.args = arguments;
            return as3.execute();
        };
    })(this, index);
};

/**
 * @param stack
 * @param argCount
 */
ActionScript3.prototype.ActionNewObject = function (stack, argCount)
{
    var obj = {};
    for (var i = argCount; i--;) {
        var value = stack.pop();
        var prop = stack.pop();
        obj[prop] = value;
    }
    stack[stack.length] = obj;
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionNextName = function (stack)
{
    var index = +stack.pop();
    var obj = stack.pop();

    var name;
    if (obj) {
        var count = 0;
        for (var prop in obj) {
            if (!obj.hasOwnProperty(prop)) {
                continue;
            }

            if (count === index) {
                name = prop;
                break;
            }
            count++;
        }
    }
    stack[stack.length] = name;
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionNextValue = function (stack)
{
    var index = stack.pop();
    var obj = stack.pop();
    var value;
    stack[stack.length] = value;
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionNop = function (stack)
{


};

/**
 * @param stack
 */
ActionScript3.prototype.ActionNot = function (stack)
{
    var value = stack.pop();
    stack[stack.length] = (!value);
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionPop = function (stack)
{
    stack.pop();
};

/**
 *
 */
ActionScript3.prototype.ActionPopScope = function ()
{
    this.scopeStack.pop();
};

/**
 * @param stack
 * @param value
 */
ActionScript3.prototype.ActionPushByte = function (stack, value)
{
    stack[stack.length] = value|0;
};

/**
 * @param stack
 * @param index
 */
ActionScript3.prototype.ActionPushDouble = function (stack, index)
{
    var data = this.data;
    var double = data.double;
    var value = double[index];
    stack[stack.length] = +value;
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionPushFalse = function (stack)
{
    stack[stack.length] = false;
};

/**
 * @param stack
 * @param index
 */
ActionScript3.prototype.ActionPushInt = function (stack, index)
{
    var data = this.data;
    var integer = data.integer;
    var value = integer[index];
    stack[stack.length] = +value;
};

/**
 * @param stack
 * @param index
 */
ActionScript3.prototype.ActionPushNameSpace = function (stack, index)
{
    var data = this.data;
    var names = data.names;
    var value = names[index];
    stack[stack.length] = +value;
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionPushNan = function (stack)
{
    stack[stack.length] = NaN;
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionPushNull = function (stack)
{
    stack[stack.length] = null;
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionPushScope = function (stack)
{
    var scope = stack.pop();
    if (scope) {
        var scopeStack = this.scopeStack;
        scopeStack[scopeStack.length] = scope;
    }
};

/**
 * @param stack
 * @param value
 */
ActionScript3.prototype.ActionPushShort = function (stack, value)
{
    stack[stack.length] = value;
};

/**
 * @param stack
 * @param index
 */
ActionScript3.prototype.ActionPushString = function (stack, index)
{
    var data = this.data;
    var string = data.string;
    stack[stack.length] = ""+string[index];
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionPushTrue = function (stack)
{
    stack[stack.length] = true;
};

/**
 * @param stack
 * @param index
 */
ActionScript3.prototype.ActionPushUInt = function (stack, index)
{
    var data = this.data;
    var uinteger = data.uinteger;
    stack[stack.length] = uinteger[index];
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionPushUndefined = function (stack)
{
    stack[stack.length] = undefined;
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionPushWith = function (stack)
{
    var obj = stack.pop();
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionRShift = function (stack)
{
    var value2 = stack.pop();
    var value1 = stack.pop();
    stack[stack.length] = value1 >> value2;
};

/**
 * @param stack
 * @param index
 */
ActionScript3.prototype.ActionSetLocal = function (stack, index)
{
    this.register[index] = stack.pop();
};


/**
 * @param stack
 */
ActionScript3.prototype.ActionSetLocal0 = function (stack)
{
    this.register[0] = stack.pop();
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionSetLocal1 = function (stack)
{
    this.register[1] = stack.pop();
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionSetLocal2 = function (stack)
{
    this.register[2] = stack.pop();
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionSetLocal3 = function (stack)
{
    this.register[3] = stack.pop();
};

/**
 * @param stack
 * @param index
 */
ActionScript3.prototype.ActionSetGlobalSlot = function (stack, index)
{
    var value = stack.pop();
};

/**
 * @param stack
 * @param index
 */
ActionScript3.prototype.ActionSetProperty = function (stack, index)
{
    var _this = this;
    var value = stack.pop();
    var prop = _this.names[index];
    var obj = stack.pop();

    if (obj) {
        if (obj instanceof DisplayObject) {
            if (prop in _this.methods) {
                obj[prop] = value;
            } else {
                console.log("ActionSetProperty", prop);
            }
        } else if (prop in obj) {
            obj[prop] = value;
        } else {
            var builder = _this.getBuilder();
            var caller = _this.caller;
            if (caller instanceof MovieClip) {
                builder = caller;
            }

            if (builder instanceof DisplayObject) {
                if (prop in _this.methods) {
                    builder[prop] = value;
                } else {
                    obj[prop] = value;
                }
            }
        }
    }
};

/**
 * @param stack
 * @param index
 */
ActionScript3.prototype.ActionSetSlot = function (stack, index)
{
    var value = stack.pop();
    var obj = stack.pop();
    var name = obj[index];
    this.activation[name] = value;
};

/**
 * @param stack
 * @param index
 */
ActionScript3.prototype.ActionSetSuper = function (stack, index)
{
    var value = stack.pop();
    var prop = this.names[index];
    var obj = stack.pop();

};

/**
 * @param stack
 */
ActionScript3.prototype.ActionStrictEquals = function (stack)
{
    var value2 = stack.pop();
    var value1 = stack.pop();
    stack[stack.length] = (value1 === value2);
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionSubtract = function (stack)
{
    var value2 = stack.pop();
    var value1 = stack.pop();
    stack[stack.length] = value1 - value2;
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionSubtractI = function (stack)
{
    var value2 = +stack.pop();
    var value1 = +stack.pop();
    stack[stack.length] = value1 - value2;
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionSwap = function (stack)
{
    var value2 = stack.pop();
    var value1 = stack.pop();
    stack[stack.length] = value2;
    stack[stack.length] = value1;
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionThrow = function (stack)
{
    var value = stack.pop();
    console.log(value);
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionTypeof = function (stack)
{
    var value = stack.pop();
    stack[stack.length] = typeof value;
};

/**
 * @param stack
 */
ActionScript3.prototype.ActionURShift = function (stack)
{
    var value2 = stack.pop();
    var value1 = stack.pop();
    stack[stack.length] = value2 >> value1;
};
/**
 * @constructor
 */
var Activation = function () {};

/**
 * @constructor
 */
var MainTimeline = function ()
{
    MovieClip.call(this);

    // origin params
    this._$version             = 10;
    this._$actionScriptVersion = ActionScriptVersion.ACTIONSCRIPT2;
};

/**
 * extends
 * @type {MovieClip}
 */
MainTimeline.prototype = Object.create(MovieClip.prototype);
MainTimeline.prototype.constructor = MainTimeline;

/**
 * properties
 */
Object.defineProperties(MainTimeline.prototype, {
    version: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$version;
        },
        /**
         * @param {number} version
         */
        set: function (version) {
            if (typeof version !== "number") {
                version = 10;
            }
            this._$version = version;
        }
    },
    actionScriptVersion: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$actionScriptVersion;
        },
        /**
         * @param {number} action_script_version
         */
        set: function (action_script_version) {

            if (typeof action_script_version !== "number") {
                action_script_version = ActionScriptVersion.ACTIONSCRIPT2;
            }

            this._$actionScriptVersion = action_script_version;
        }
    }
});

/**
 * @returns {string}
 */
MainTimeline.prototype.toString = function ()
{
    return "[object MainTimeline]";
};


/**
 * @param {Player} player
 * @constructor
 */
var Packages = function (player)
{
    this.player = player;
};

/**
 * @type {*}
 */
Packages.prototype = {
    "Vector": Vector,
    "adobe": {
        "utils": {
            "CustomActions": CustomActions,
            "XMLUI": XMLUI
        },
        "MMEndCommand": function (endStatus, notifyString)
        {
            console.log("TODO: MMEndCommand");
        },
        "MMExecute": function (name)
        {
            console.log("TODO: MMExecute");
        }
    },
    "com": {
        "adobe": {
            "viewsource": {
                "ViewSource": ViewSource
            }
        }
    },
    "fl": {
        "accessibility": {
            "AccImpl": AccImpl,
            "ButtonAccImpl": ButtonAccImpl
        }
    },
    "flash": {
        "accessibility": {
            "Accessibility": Accessibility,
            "AccessibilityImplementation": AccessibilityImplementation,
            "AccessibilityProperties": AccessibilityProperties
        },
        "desktop": {
            "Clipboard": Clipboard,
            "ClipboardFormats": ClipboardFormats,
            "ClipboardTransferMode": ClipboardTransferMode
        },
        "display": {
            "ActionScriptVersion": ActionScriptVersion,
            "AVLoader": AVLoader,
            "AVM1Movie": AVM1Movie,
            "Bitmap": Bitmap,
            "BitmapData": BitmapData,
            "BitmapDataChannel": BitmapDataChannel,
            "BitmapEncodingColorSpace": BitmapEncodingColorSpace,
            "BlendMode": BlendMode,
            "CapsStyle": CapsStyle,
            "ColorCorrection": ColorCorrection,
            "ColorCorrectionSupport": ColorCorrectionSupport,
            "DisplayObject": DisplayObject,
            "DisplayObjectContainer": DisplayObjectContainer,
            "FrameLabel": FrameLabel,
            "GradientType": GradientType,
            "Graphics": Graphics,
            "GraphicsBitmapFill": GraphicsBitmapFill,
            "GraphicsEndFill": GraphicsEndFill,
            "GraphicsGradientFill": GraphicsGradientFill,
            "GraphicsPath": GraphicsPath,
            "GraphicsPathCommand": GraphicsPathCommand,
            "GraphicsPathWinding": GraphicsPathWinding,
            "GraphicsShaderFill": GraphicsShaderFill,
            "GraphicsSolidFill": GraphicsSolidFill,
            "GraphicsStroke": GraphicsStroke,
            "GraphicsTrianglePath": GraphicsTrianglePath,
            "InteractiveObject": InteractiveObject,
            "InterpolationMethod": InterpolationMethod,
            "JointStyle": JointStyle,
            "JPEGEncoderOptions": JPEGEncoderOptions,
            "JPEGXREncoderOptions": JPEGXREncoderOptions,
            "LineScaleMode": LineScaleMode,
            "Loader": Loader,
            "LoaderInfo": LoaderInfo,
            "MorphShape": MorphShape,
            "MovieClip": MovieClip,
            "PixelSnapping": PixelSnapping,
            "PNGEncoderOptions": PNGEncoderOptions,
            "Scene": Scene,
            "Shader": Shader,
            "ShaderData": ShaderData,
            "ShaderInput": ShaderInput,
            "ShaderJob": ShaderJob,
            "ShaderParameter": ShaderParameter,
            "ShaderParameterType": ShaderParameterType,
            "ShaderPrecision": ShaderPrecision,
            "Shape": Shape,
            "SimpleButton": SimpleButton,
            "SpreadMethod": SpreadMethod,
            "Sprite": Sprite,
            "Stage": Stage,
            "Stage3D": Stage3D,
            "StageAlign": StageAlign,
            "StageDisplayState": StageDisplayState,
            "StageQuality": StageQuality,
            "StageScaleMode": StageScaleMode,
            "SWFVersion": SWFVersion,
            "TriangleCulling": TriangleCulling
        },
        "display3D": {
            "Program3D": Program3D,
            "textures": {
                "CubeTexture": CubeTexture,
                "RectangleTexture": RectangleTexture,
                "Texture": Texture,
                "VideoTexture": VideoTexture
            }
        },
        "geom": {
            "ColorTransform": ColorTransform,
            "Matrix": Matrix,
            "Matrix3D": Matrix3D,
            "Orientation3D": Orientation3D,
            "PerspectiveProjection": PerspectiveProjection,
            "Point": Point,
            "Rectangle": Rectangle,
            "Transform": Transform,
            "Utils3D": Utils3D,
            "Vector3D": Vector3D
        },
        "errors": {
            "EOFError": EOFError,
            "IllegalOperationError": IllegalOperationError,
            "InvalidSWFError": InvalidSWFError,
            "IOError": IOError,
            "MemoryError": MemoryError,
            "ScriptTimeoutError": ScriptTimeoutError,
            "StackOverflowError": StackOverflowError
        },
        "events": {
            "AccelerometerEvent": AccelerometerEvent,
            "ActivityEvent": ActivityEvent,
            "AsyncErrorEvent": AsyncErrorEvent,
            "AVDictionaryDataEvent": AVDictionaryDataEvent,
            "AVHTTPStatusEvent": AVHTTPStatusEvent,
            "AVPauseAtPeriodEndEvent": AVPauseAtPeriodEndEvent,
            "ContextMenuEvent": ContextMenuEvent,
            "DataEvent": DataEvent,
            "Event": Event,
            "EventDispatcher": EventDispatcher,
            "MouseEvent": Util.prototype.$clipEvent
        },
        "external": {
            "ExternalInterface": ExternalInterface
        },
        "globalization": {
            "Collator": Collator,
            "CollatorMode": CollatorMode,
            "CurrencyFormatter": CurrencyFormatter,
            "CurrencyParseResult": CurrencyParseResult,
            "DateTimeFormatter": DateTimeFormatter,
            "DateTimeNameContext": DateTimeNameContext,
            "DateTimeNameStyle": DateTimeNameStyle,
            "DateTimeStyle": DateTimeStyle,
            "LastOperationStatus": LastOperationStatus,
            "LocaleID": LocaleID,
            "NationalDigitsType": NationalDigitsType,
            "NumberFormatter": NumberFormatter,
            "NumberParseResult": NumberParseResult,
            "StringTools": StringTools
        },
        "text": {
            "AntiAliasType": AntiAliasType,
            "CSMSettings": CSMSettings,
            "Font": Font,
            "FontStyle": FontStyle,
            "FontType": FontType,
            "GridFitType": GridFitType,
            "StaticText": StaticText,
            "StyleSheet": StyleSheet,
            "TextColorType": TextColorType,
            "TextDisplayMode": TextDisplayMode,
            "TextField": TextField,
            "TextFieldAutoSize": TextFieldAutoSize,
            "TextFieldType": TextFieldType,
            "TextFormat": TextFormat,
            "TextFormatAlign": TextFormatAlign,
            "TextLineMetrics": TextLineMetrics,
            "TextRenderer": TextRenderer,
            "TextSnapshot": TextSnapshot
        },
        "media": {
            "AVNetworkingParams": AVNetworkingParams,
            "AVURLLoader": AVURLLoader,
            "AVURLStream": AVURLStream,
            "Camera": Camera,
            "ID3Info": ID3Info,
            "Microphone": Microphone,
            "Sound": Sound,
            "SoundChannel": SoundChannel,
            "SoundCodec": SoundCodec,
            "SoundLoaderContext": SoundLoaderContext,
            "SoundMixer": SoundMixer,
            "SoundTransform": SoundTransform,
            "StageVideo": StageVideo,
            "StageVideoAvailability": StageVideoAvailability,
            "StageVideoAvailabilityReason": StageVideoAvailabilityReason,
            "Video": Video,
            "VideoStatus": VideoStatus
        },
        "filters": {
            "BevelFilter": BevelFilter,
            "BitmapFilter": BitmapFilter,
            "BitmapFilterQuality": BitmapFilterQuality,
            "BitmapFilterType": BitmapFilterType,
            "BlurFilter": BlurFilter,
            "ColorMatrixFilter": ColorMatrixFilter,
            "ConvolutionFilter": ConvolutionFilter,
            "DisplacementMapFilter": DisplacementMapFilter,
            "DisplacementMapFilterMode": DisplacementMapFilterMode,
            "DropShadowFilter": DropShadowFilter,
            "GlowFilter": GlowFilter,
            "GradientBevelFilter": GradientBevelFilter,
            "GradientGlowFilter": GradientGlowFilter,
            "ShaderFilter": ShaderFilter
        },
        "net": {
            "FileFilter": FileFilter,
            "FileReference": FileReference,
            "FileReferenceList": FileReferenceList,
            "GroupSpecifier": GroupSpecifier,
            "LocalConnection": LocalConnection,
            "NetConnection": NetConnection,
            "NetGroup": NetGroup,
            "NetGroupInfo": NetGroupInfo,
            "NetGroupReceiveMode": NetGroupReceiveMode,
            "NetGroupReplicationStrategy": NetGroupReplicationStrategy,
            "NetGroupSendMode": NetGroupSendMode,
            "NetGroupSendResult": NetGroupSendResult,
            "NetStream": NetStream,
            "NetStreamAppendBytesAction": NetStreamAppendBytesAction,
            "NetStreamInfo": NetStreamInfo,
            "NetStreamMulticastInfo": NetStreamMulticastInfo,
            "NetStreamPlayOptions": NetStreamPlayOptions,
            "NetStreamPlayTransitions": NetStreamPlayTransitions,
            "ObjectEncoding": ObjectEncoding,
            "Responder": Responder,
            "SecureSocket": SecureSocket,
            "SharedObject": SharedObject,
            "SharedObjectFlushStatus": SharedObjectFlushStatus,
            "Socket": Socket,
            "URLLoader": URLLoader,
            "URLLoaderDataFormat": URLLoaderDataFormat,
            "URLRequest": URLRequest,
            "URLRequestHeader": URLRequestHeader,
            "URLRequestMethod": URLRequestMethod,
            "URLStream": URLStream,
            "URLVariables": URLVariables,
            "XMLSocket": XMLSocket,
            "getClassByAlias": function (aliasName)
            {

            },
            "navigateToURL": function (request, window)
            {
                var form    = this.$document.createElement("form");
                form.action = request.url;
                form.method = request.method;
                form.target = "_self";

                if (typeof window === "string") {
                    switch (window.toLowerCase()) {
                        case "_blank":
                            form.target = "_blank";
                            break;
                        case "_top":
                            form.target = "_top";
                            break;
                        case "_parent":
                            form.target = "_parent";
                            break;
                    }
                }

                var data = request.data;
                if (data) {
                    for (var name in data) {
                        if (!data.hasOwnProperty(name)) {
                            continue;
                        }

                        var input   = this.$document.createElement("input");
                        input.type  = "hidden";
                        input.name  = this.$encodeURIComponent(name);
                        input.value = this.$encodeURIComponent(data[name]);
                        form.appendChild(input);
                    }
                }

                this.$document.body.appendChild(form);
                form.submit();
            },
            "registerClassAlias": function ()
            {

            },
            "sendToURL": function (request)
            {
                if (request instanceof URLRequest) {
                    var data = null;
                    if (request.data instanceof URLVariables) {
                        data = request.data.toString();
                    }

                    var headers = [];
                    if (request.requestHeaders) {
                        var requestHeaders = request.requestHeaders;
                        var length         = requestHeaders.length;

                        var idx = 0;
                        while (length > idx) {
                            var requestHeader = requestHeaders[idx];
                            if (requestHeader instanceof URLRequestHeader) {
                                headers[requestHeader.name] = requestHeader.value;
                            }
                            idx = (idx + 1)|0;
                        }
                    }

                    // execute
                    this.$ajax({
                        method:  request.method,
                        url:     request.url,
                        headers: headers,
                        data:    data
                    });
                }
            }

        },
        "printing": {
            "PrintJob": PrintJob,
            "PrintJobOptions": PrintJobOptions,
            "PrintJobOrientation": PrintJobOrientation
        },
        "system": {
            "fscommand": function ()
            {
                var command = arguments[0];
                var args    = arguments[1];
                if (args === undefined) {
                    args = "";
                }

                switch (command) {
                    case "quit":
                    case "fullscreen":
                    case "allowscale":
                    case "showmenu":
                    case "exec":
                    case "trapallkeys":
                        break;
                    default:
                        if (command) {
                            var method    = (this.tagId) ? this.tagId : this.getName();
                            var body      = method +"_DoFSCommand(command, args);";
                            var fscommand = new Func("command", "args", body);
                            fscommand(command, args);
                        }
                        break;
                }

                return true;
            }
        },
        "xml": {
            "XMLDocument": XMLDocument,
            "XMLNode": XMLNode,
            "XMLNodeType": XMLNodeType
        }
    }
};
/**
 * @param {number}  length
 * @param {boolean} fixed
 * @constructor
 */
var Vector = function (length, fixed)
{

    OriginalObject.call(this);

    // reset
    this._$fixed = false;
    this._$type  = "int";
    this._$array = [];

    // init
    this.length  = length|0;
    this.fixed   = fixed;
    
    return new Proxy(this, {
        /**
         * @param  {Vector} obj
         * @param  {number} prop
         * @return {*}
         */
        get: function (obj, prop) {

            // properties
            switch (obj.$isNaN(prop)) {

                case true:

                    return obj[prop];

                default:

                    prop = prop | 0;
                    if (prop > -1 && (!obj.fixed || (obj.fixed && obj.length > prop))) {

                        // TODO
                        switch (obj._$type) {
                            case "Number":
                            case "int":

                                return obj._$array[prop] | 0;

                            default:

                                // valid
                                if (!(prop in obj._$array)) {
                                    return null;
                                }

                                return obj._$array[prop];
                        }

                    }

                    break
            }
        },
        /**
         * @param {Vector} obj
         * @param {number} prop
         * @param {*}      value
         */
        set: function(obj, prop, value) {

            // properties
            switch (obj.$isNaN(prop)) {

                case true:

                    obj[prop] = value;

                    break;

                default:

                    prop = prop|0;
                    if (prop > -1 && (!obj.fixed || (obj.fixed && obj.length > prop))) {

                        // TODO
                        switch (obj._$type) {
                            case "Number":
                            case "int":

                                obj._$array[prop|0] = value|0;

                                break;

                            case "String":

                                obj._$array[prop|0] = value +"";

                                break;

                            default:

                                obj._$array[prop|0] = value;

                                break;

                        }

                    }

                    break;
            }
        }
    });
};

/**
 * extends
 * @type {OriginalObject}
 */
Vector.prototype = Object.create(OriginalObject.prototype);
Vector.prototype.constructor = Vector;

/**
 * properties
 */
Object.defineProperties(Vector.prototype, {
    length: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$array.length;
        },
        /**
         * @param  {number} length
         * @return void
         */
        set: function (length) {

            if (typeof length === "number") {

                var idx = 0;
                var arr = [];
                while (length > idx) {

                    if (idx in this._$array) {

                        arr[idx] = this._$array[idx];
                        idx = (idx + 1)|0;

                        continue;

                    }

                    arr[idx] = 0;

                    idx = (idx + 1)|0;
                }

                this._$array = arr;

            }

        }
    },
    fixed: {
        /**
         * @return {boolean}
         */
        get: function () {
            return this._$fixed;
        },
        /**
         * @param  {boolean} fixed
         * @return void
         */
        set: function (fixed) {
            if (typeof fixed === "boolean") {
                this._$fixed = fixed;
            }
        }
    }
});

/**
 * @return {string}
 */
Vector.prototype.toString = function ()
{
    return this._$array.join(", ");
};

/**
 * @return {Vector}
 */
Vector.prototype.concat = function ()
{
    var vector = new Vector();

    var length = arguments.length|0;
    var idx    = 0;
    while (length > idx) {

        var v = arguments[idx];

        if (v instanceof Vector) {

            vector._$array = vector._$array.concat(v._$array);

        }

        idx = (idx + 1)|0;
    }

    return vector;
};




/*jshint bitwise: false*/
/**
 * @constructor
 */
var BitIO = function ()
{
    Util.call(this);

    this.data        = null;
    this.bit_offset  = 0;
    this.byte_offset = 0;
    this.bit_buffer  = null;
};

/**
 * extends
 */
BitIO.prototype = Object.create(Util.prototype);
BitIO.prototype.constructor = BitIO;

/**
 * @param   {array} data
 * @returns void
 */
BitIO.prototype.initialize = function (data)
{
    var array = [];
    if (this.$canXHR2) {
        array = new Uint8Array(data);
    } else {
        var length = data.length|0;
        array = this.createArray(length);

        var i = 0;
        while (i < length) {
            array[i] = data.charCodeAt(i) & 0xff;
            i = (i + 1)|0;
        }
    }

    this.setData(array);
};

/**
 * @param   {string} str
 * @returns {string}
 */
BitIO.prototype.decodeToShiftJis = function (str)
{
    var self = this;
    return str.replace(/%(8[1-9A-F]|[9E][0-9A-F]|F[0-9A-C])(%[4-689A-F][0-9A-F]|%7[0-9A-E]|[@-~])|%([0-7][0-9A-F]|A[1-9A-F]|[B-D][0-9A-F])/ig,
        function (s)
        {
            var c = self.$parseInt(s.substring(1, 3), 16);
            var l = s.length;
            return 3 === l ? self.$fromCharCode(c < 160 ? c : c + 65216) : self.$JCT11280.charAt((c < 160 ? c - 129 : c - 193) * 188 + (4 === l ? s.charCodeAt(3) - 64 : (c = self.$parseInt(s.substring(4), 16)) < 127 ? c - 64 : c - 65));
        }
    );
};

/**
 * @param   {array}  compressed
 * @param   {number} size
 * @returns {array}
 */
BitIO.prototype.unlzma = function (compressed, size)
{

    var self = this;

    /**
     * @param {array} buffer
     * @constructor
     */
    var InputStream = function (buffer)
    {
        this.buffer    = buffer;
        this.processed = 0;
    };

    /**
     * properties
     */
    Object.defineProperties(DisplayObject.prototype, {
        available: {
            /**
             * @return {number}
             */
            get: function () {
                return (this.buffer.length - this.processed)|0;
            }
        }
    });

    /**
     * @returns {number}
     */
    InputStream.prototype.readByte = function ()
    {
        var value = this.buffer[this.processed]|0;

        this.processed = (this.processed + 1)|0;

        return value;
    };

    /**
     * @param {number} size
     * @constructor
     */
    var OutputStream = function (size)
    {
        this.buffer    = self.$canArrayBuffer ? new Uint8Array(size) : [];
        this.processed = 0;
    };

    /**
     * @returns {array}
     */
    OutputStream.prototype.getBuffer = function ()
    {
        return this.buffer;
    };

    /**
     * @param {array} data
     */
    OutputStream.prototype.add = function (data)
    {
        var length = data.length|0;
        var idx = 0;
        while (idx < length) {
            this.buffer[this.processed] = data[idx]|0;

            this.processed = (this.processed + 1)|0;

            idx = (idx + 1)|0;
        }
    };

    /**
     * @param {array} out_stream
     * @constructor
     */
    var OutWindow = function (out_stream)
    {
        this.outStream = out_stream;
        this.buf       = null;
        this.pos       = 0;
        this.size      = 0;
        this.isFull    = false;
        this.writePos  = 0;
        this.totalPos  = 0;
    };

    /**
     * @param {number} dict_size
     */
    OutWindow.prototype.create = function (dict_size)
    {
        this.buf      = (self.$canArrayBuffer) ? new Uint8Array(dict_size) : [];
        this.pos      = 0;
        this.size     = dict_size;
        this.isFull   = false;
        this.writePos = 0;
        this.totalPos = 0;
    };

    /**
     * @param {number} byte
     */
    OutWindow.prototype.putByte = function (byte)
    {
        this.totalPos = (this.totalPos + 1)|0;

        this.buf[this.pos] = byte;
        this.pos = (this.pos + 1)|0;

        if (this.pos === this.size) {
            this.flush();
            this.pos    = 0;
            this.isFull = true;
        }
    };

    /**
     * @param   {number} dist
     * @returns {number}
     */
    OutWindow.prototype.getByte = function (dist)
    {
        return this.buf[dist <= this.pos ? this.pos - dist : this.size - dist + this.pos];
    };

    /**
     * @returns void
     */
    OutWindow.prototype.flush = function ()
    {
        if (this.writePos < this.pos) {
            var length = this.pos - this.writePos;

            var data   = self.$canArrayBuffer ? new Uint8Array(length) : [];

            var buffer = this.buf;

            var i = this.writePos;
            while (i < this.pos) {
                data[i] = buffer[i];
                i = (i + 1)|0;
            }

            this.outStream.add(data);
            this.writePos = (this.pos === this.size) ? 0 : this.pos|0;
        }
    };

    /**
     * @param   {number} dist
     * @param   {number} len
     * @returns void
     */
    OutWindow.prototype.copyMatch = function (dist, len)
    {
        var pos    = this.pos;
        var size   = this.size;
        var buffer = this.buf;
        var getPos = (dist <= pos) ? pos - dist : size - dist + pos;
        var left   = len;
        while (left > 0) {
            var chunk = self.$min(self.$min(left, size - pos), size - getPos);

            var i = 0;
            while (i < chunk) {
                var b  = buffer[getPos];
                getPos = (getPos + 1)|0;

                buffer[pos] = b;
                pos = (pos + 1)|0;

                i  = (i + 1)|0;
            }

            if (pos === size) {
                this.pos = pos;
                this.flush();
                pos = 0;
                this.isFull = true;
            }

            if (getPos === size) {
                getPos = 0;
            }

            left = (left - chunk)|0;
        }
        this.pos = pos;
        this.totalPos = (this.totalPos + len)|0;

    };

    /**
     * @param   {number}  dist
     * @returns {boolean}
     */
    OutWindow.prototype.checkDistance = function(dist)
    {
        return (dist <= this.pos) || this.isFull;
    };

    /**
     * @returns {boolean}
     */
    OutWindow.prototype.isEmpty = function()
    {
        return (this.pos === 0) && !this.isFull;
    };

    /**
     * @param {array} in_stream
     * @constructor
     */
    var RangeDecoder = function (in_stream)
    {
        this.inStream = in_stream;
        this.range    = 0;
        this.code     = 0;
    };

    /**
     * @returns void
     */
    RangeDecoder.prototype.init = function ()
    {
        this.inStream.readByte(); // rev

        this.range = 0xFFFFFFFF | 0;

        var code = 0;
        var i = 0;
        while (i < 4) {
            code = (code << 8) | this.inStream.readByte();
            i = (i + 1)|0;
        }

        this.code = code;
    };

    /**
     * @returns {boolean}
     */
    RangeDecoder.prototype.isFinishedOK = function ()
    {
        return (this.code === 0);
    };

    /**
     * @param   {number} num_bits
     * @returns {number}
     */
    RangeDecoder.prototype.decodeDirectBits = function (num_bits)
    {
        var res   = 0;
        var range = this.range;
        var code  = this.code;

        while (num_bits) {
            range = (range >>> 1) | 0;
            code = (code - range) | 0;

            var t = code >> 31;
            code = (code + (range & t)) | 0;

            if (range >= 0 && range < 16777216) {
                range = range << 8;
                code = (code << 8) | this.inStream.readByte();
            }

            res = ((res << 1) + t + 1) | 0;

            num_bits = (num_bits - 1)|0;
        }

        this.range = range;
        this.code  = code;

        return res;
    };

    /**
     * @param   {array} prob
     * @param   {number} index
     * @returns {number}
     */
    RangeDecoder.prototype.decodeBit = function (prob, index)
    {
        var range = this.range;
        var code  = this.code;

        var v     = prob[index]|0;
        var bound = (range >>> 11) * v;

        var symbol;
        if ((code >>> 0) < bound) {
            v = (v + ((2048 - v) >> 5)) | 0;

            range  = bound | 0;
            symbol = 0;
        } else {
            v = (v - (v >> 5)) | 0;

            code   = (code - bound) | 0;
            range  = (range - bound) | 0;
            symbol = 1;
        }
        prob[index] = v & 0xFFFF;

        if (range >= 0 && range < 16777216) {
            range = range << 8;
            code  = (code << 8) | this.inStream.readByte();
        }

        this.range = range;
        this.code  = code;

        return symbol;
    };

    /**
     * @param {number} num_bits
     * @constructor
     */
    var BitTreeDecoder = function (num_bits)
    {
        this.numBits = num_bits;
        this.probs   = this.createProbsArray(1 << num_bits);
    };

    /**
     * @param   {number} length
     * @returns {array}
     */
    BitTreeDecoder.prototype.createProbsArray = function (length)
    {
        var p = (self.$canArrayBuffer) ? new Uint16Array(length) : [];
        var i = 0;
        while (i < length) {
            p[i] = 1024;
            i = (i + 1)|0;
        }
        return p;
    };

    /**
     * @param   {object} rc
     * @returns {number}
     */
    BitTreeDecoder.prototype.decode = function (rc)
    {
        var m = 1;
        var i = 0;
        var numBits = this.numBits;

        while (i < numBits) {
            i = (i + 1)|0;
            m = (m << 1) + rc.decodeBit(this.probs, m);
        }

        return m - (1 << this.numBits);
    };

    /**
     * @param   {object} rc
     * @returns {number}
     */
    BitTreeDecoder.prototype.reverseDecode = function (rc)
    {
        return this.bitTreeReverseDecode(this.probs, 0, this.numBits, rc);
    };

    /**
     * @param   {array}  probs
     * @param   {number} offset
     * @param   {number} num_bits
     * @param   {object} rc
     * @returns {number}
     */
    BitTreeDecoder.prototype.bitTreeReverseDecode = function (probs, offset, num_bits, rc)
    {
        var m = 1;
        var symbol = 0;
        var i = 0;
        while (i < num_bits) {
            var bit = rc.decodeBit(probs, m + offset);
            m = (m << 1) + bit;
            symbol |= bit << i;

            i = (i + 1)|0;
        }

        return symbol;
    };

    /**
     * @constructor
     */
    var LenDecoder = function ()
    {
        this.choice    = this.createProbsArray(2);
        this.lowCoder  = this.createBitTreeDecoderArray(3, 16);
        this.midCoder  = this.createBitTreeDecoderArray(3, 16);
        this.highCoder = new BitTreeDecoder(8);
    };

    /**
     * @param   {number} length
     * @returns {array}
     */
    LenDecoder.prototype.createProbsArray = function (length)
    {
        var p = (self.$canArrayBuffer) ? new Uint16Array(length) : [];
        var i = 0;
        while (i < length) {
            p[i] = 1024;
            i = (i + 1)|0;
        }
        return p;
    };

    /**
     * @param   {number} num_bits
     * @param   {number} length
     * @returns {array}
     */
    LenDecoder.prototype.createBitTreeDecoderArray = function (num_bits, length)
    {
        var p = [];
        p.length = length;

        var i = 0;
        while (i < length) {
            p[i] = new BitTreeDecoder(num_bits);
            i = (i + 1)|0;
        }

        return p;
    };

    /**
     * @param   {object} rc
     * @param   {number} pos
     * @returns {number}
     */
    LenDecoder.prototype.decode = function (rc, pos)
    {
        if (rc.decodeBit(this.choice, 0) === 0) {
            return this.lowCoder[pos].decode(rc);
        }

        if (rc.decodeBit(this.choice, 1) === 0) {
            return 8 + this.midCoder[pos].decode(rc);
        }

        return 16 + this.highCoder.decode(rc);
    };

    /**
     * @param {array}  data
     * @param {number} size
     * @constructor
     */
    var Decoder = function (data, size)
    {
        var inStream  = new InputStream(data);
        var outStream = new OutputStream(size);

        this.outStream = outStream;
        this.rangeDec  = new RangeDecoder(inStream);
        this.outWindow = new OutWindow(outStream);

        this.lc = 0;
        this.pb = 0;
        this.lp = 0;

        this.dictSize             = 0;
        this.dictSizeInProperties = 0;
        this.leftToUnpack         = undefined;

        this.reps  = (self.$canArrayBuffer) ? new Int32Array(4) : [];
        this.state = 0;

        var header = (self.$canArrayBuffer) ? new Uint8Array(13) : [];
        var i = 0;
        while (i < 13) {
            header[i] = inStream.readByte()|0;
            i = (i + 1)|0;
        }

        var unpackSize = 0;
        var unpackSizeDefined = false;
        i = 0;
        while (i < 8) {
            var b = header[5 + i];
            if (b !== 0xFF) {
                unpackSizeDefined = true;
            }

            unpackSize |= b << (8 * i);

            i = (i + 1)|0;
        }

        this.markerIsMandatory = !unpackSizeDefined;
        this.unpackSize = unpackSizeDefined ? unpackSize : undefined;

        this.decodeProperties(header);
    };

    /**
     * @param   {array}   properties
     * @returns {Decoder}
     */
    Decoder.prototype.decodeProperties = function (properties)
    {
        var d = properties[0]|0;

        this.lc = d % 9;

        d = (d / 9)|0;
        this.pb = (d / 5)|0;
        this.lp = d % 5;

        this.dictSizeInProperties = 0;

        var i = 0;
        while (i < 4) {
            this.dictSizeInProperties |= properties[i + 1] << (8 * i);
            i = (i + 1)|0;
        }

        this.dictSize = this.dictSizeInProperties;
        if (this.dictSize < 4096) {
            this.dictSize = 4096;
        }
    };

    /**
     * @returns {Decoder}
     */
    Decoder.prototype.create = function ()
    {
        this.outWindow.create(this.dictSize);

        this.init();
        this.rangeDec.init();

        this.reps[0] = 0;
        this.reps[1] = 0;
        this.reps[2] = 0;
        this.reps[3] = 0;

        this.state = 0;
        this.leftToUnpack = this.unpackSize;

        return this;
    };

    /**
     * @param   {number} state
     * @param   {number} rep0
     * @returns {number}
     */
    Decoder.prototype.decodeLiteral = function (state, rep0)
    {
        var outWindow = this.outWindow;
        var rangeDec  = this.rangeDec;

        var prevByte = 0;
        if (!outWindow.isEmpty()) {
            prevByte = outWindow.getByte(1);
        }

        var symbol     = 1;
        var litState   = ((outWindow.totalPos & ((1 << this.lp) - 1)) << this.lc) + (prevByte >> (8 - this.lc));
        var probsIndex = 0x300 * litState;

        if (state >= 7) {
            var matchByte = outWindow.getByte(rep0 + 1);
            do {
                var matchBit = (matchByte >> 7) & 1;
                matchByte <<= 1;

                var bit = rangeDec.decodeBit(this.litProbs, probsIndex + (((1 + matchBit) << 8) + symbol));

                symbol = (symbol << 1) | bit;
                if (matchBit !== bit) {
                    break;
                }
            } while (symbol < 0x100);
        }

        while (symbol < 0x100) {
            symbol = (symbol << 1) | rangeDec.decodeBit(this.litProbs, probsIndex + symbol);
        }

        return (symbol - 0x100) & 0xFF;
    };

    /**
     * @param   {number} length
     * @returns {number}
     */
    Decoder.prototype.decodeDistance = function (length)
    {
        var lenState = length;
        if (lenState > 3) {
            lenState = 3;
        }

        var rangeDec = this.rangeDec;
        var posSlot  = this.posSlotDecoder[lenState].decode(rangeDec);
        if (posSlot < 4) {
            return posSlot;
        }

        var numDirectBits = (posSlot >> 1) - 1;
        var dist = (2 | (posSlot & 1)) << numDirectBits;
        if (posSlot < 14) {
            dist = (dist + this.bitTreeReverseDecode(this.posDecoders, dist - posSlot, numDirectBits, rangeDec)) | 0;
        } else {
            dist = (dist + (rangeDec.decodeDirectBits(numDirectBits - 4) << 4)) | 0;
            dist = (dist + this.alignDecoder.reverseDecode(rangeDec)) | 0;
        }

        return dist;
    };

    /**
     * @param   {array}  probs
     * @param   {number} offset
     * @param   {number} num_bits
     * @param   {object} rc
     * @returns {number}
     */
    Decoder.prototype.bitTreeReverseDecode = function (probs, offset, num_bits, rc)
    {
        var m = 1;
        var symbol = 0;
        var i = 0;
        while (i < num_bits) {
            var bit = rc.decodeBit(probs, m + offset);
            m = (m << 1) + bit;
            symbol |= bit << i;

            i = (i + 1)|0;
        }

        return symbol;
    };

    /**
     * init
     */
    Decoder.prototype.init = function ()
    {
        this.litProbs       = this.createProbsArray(0x300 << (this.lc + this.lp));

        this.posSlotDecoder = this.createBitTreeDecoderArray(6, 4);
        this.alignDecoder   = new BitTreeDecoder(4);
        this.posDecoders    = this.createProbsArray(115);

        this.isMatch    = this.createProbsArray(192);
        this.isRep      = this.createProbsArray(12);
        this.isRepG0    = this.createProbsArray(12);
        this.isRepG1    = this.createProbsArray(12);
        this.isRepG2    = this.createProbsArray(12);
        this.isRep0Long = this.createProbsArray(192);

        this.lenDecoder    = new LenDecoder();
        this.repLenDecoder = new LenDecoder();
    };

    /**
     * @param   {number} num_bits
     * @param   {number} length
     * @returns {array}
     */
    Decoder.prototype.createBitTreeDecoderArray = function (num_bits, length)
    {
        var p = [];

        p.length = length;

        var i = 0;
        while (i < length) {

            p[i] = new BitTreeDecoder(num_bits);

            i = (i + 1)|0;
        }

        return p;
    };

    /**
     * @param   {number} length
     * @returns {array}
     */
    Decoder.prototype.createProbsArray = function (length)
    {
        var p = (self.$canArrayBuffer) ? new Uint16Array(length) : [];
        var i = 0;
        while (i < length) {
            p[i] = 1024;

            i = (i + 1)|0;
        }
        return p;
    };

    /**
     * @param   {number} state
     * @returns {number}
     */
    Decoder.prototype.updateStateLiteral = function (state)
    {
        if (state < 4) {
            return 0;
        } else if (state < 10) {
            return (state - 3)|0;
        } else {
            return (state - 6)|0;
        }
    };

    /**
     * @return {Decoder}
     */
    Decoder.prototype.decode = function()
    {
        var rangeDec          = this.rangeDec;
        var outWindow         = this.outWindow;
        var pb                = this.pb;
        var markerIsMandatory = this.markerIsMandatory;
        var leftToUnpack      = this.leftToUnpack;

        var isMatch       = this.isMatch;
        var isRep         = this.isRep;
        var isRepG0       = this.isRepG0;
        var isRepG1       = this.isRepG1;
        var isRepG2       = this.isRepG2;
        var isRep0Long    = this.isRep0Long;
        var lenDecoder    = this.lenDecoder;
        var repLenDecoder = this.repLenDecoder;

        var rep0  = this.reps[0];
        var rep1  = this.reps[1];
        var rep2  = this.reps[2];
        var rep3  = this.reps[3];
        var state = this.state;

        while (true) {
            if (rangeDec.inStream.available < 48) {
                this.outWindow.flush();
                break;
            }

            if (leftToUnpack === 0 && !markerIsMandatory) {
                this.outWindow.flush();
            }

            var posState = outWindow.totalPos & ((1 << pb) - 1);

            if (rangeDec.decodeBit(isMatch, (state << 4) + posState) === 0) {
                outWindow.putByte(this.decodeLiteral(state, rep0));
                state = this.updateStateLiteral(state);

                leftToUnpack = (leftToUnpack - 1)|0;
                continue;
            }

            var length;
            if (rangeDec.decodeBit(isRep, state) !== 0) {
                if (rangeDec.decodeBit(isRepG0, state) === 0) {
                    if (rangeDec.decodeBit(isRep0Long, (state << 4) + posState) === 0) {
                        state = (state < 7) ? 9 : 11;
                        outWindow.putByte(outWindow.getByte(rep0 + 1));
                        leftToUnpack = (leftToUnpack - 1)|0;
                        continue;
                    }
                } else {
                    var dist;
                    if (rangeDec.decodeBit(isRepG1, state) === 0) {
                        dist = rep1;
                    } else {
                        if (rangeDec.decodeBit(isRepG2, state) === 0) {
                            dist = rep2;
                        } else {
                            dist = rep3;
                            rep3 = rep2;
                        }
                        rep2 = rep1;
                    }
                    rep1 = rep0;
                    rep0 = dist;
                }
                length = repLenDecoder.decode(rangeDec, posState);
                state  = (state < 7) ? 8 : 11;
            } else {
                rep3   = rep2;
                rep2   = rep1;
                rep1   = rep0;
                length = lenDecoder.decode(rangeDec, posState);
                state  = (state < 7) ? 7 : 10;
                rep0   = this.decodeDistance(length);

                // end
                if (rep0 === -1) {
                    this.outWindow.flush();
                    return this;
                }
            }

            length = (length + 2)|0;
            if (leftToUnpack !== undefined && leftToUnpack < length) {
                length = leftToUnpack;
            }

            outWindow.copyMatch(rep0 + 1, length);
            leftToUnpack = (leftToUnpack - length)|0;
        }
    };

    /**
     * @returns {array}
     */
    Decoder.prototype.output = function ()
    {
        return this.outStream.getBuffer();
    };


    // swf header rebuild
    var header = [];

    var idx = 12;
    while (idx < 17) {
        header[header.length] = compressed[idx];
        idx = (idx + 1)|0;
    }

    idx = 4;
    while (idx < 8) {
        header[header.length] = compressed[idx];
        idx = (idx + 1)|0;
    }

    var c = 8;
    var i = 5;
    while (i < 9) {
        if (header[i] >= c) {
            header[i] = (header[i] - c)|0;
            break;
        }
        header[i] = (256 + header[i] - c)|0;
        c = 1;
        i = (i + 1)|0;
    }

    idx = 0;
    while (idx < 4) {
        header[header.length] = 0;
        idx = (idx + 1)|0;
    }

    var length = header.length;
    i = 0;
    idx = 4;
    while (i < length) {
        compressed[i + idx] = header[i]|0;
        i = (i + 1)|0;
    }

    // new data
    var data = (this.$canArrayBuffer) ? new Uint8Array(compressed.slice(4)) : compressed.slice(4);

    var decoder = new Decoder(data, size);

    return decoder
        .create()
        .decode()
        .output();
};

/**
 * @param   {array}   compressed
 * @param   {boolean} is_de_compress
 * @returns {array}
 */
BitIO.prototype.unzip = function (compressed, is_de_compress)
{
    var sym        = 0;
    var i          = 0;
    var length     = 0;
    var data       = [];
    var bitLengths = [];

    var bitio = new BitIO();
    bitio.setData(compressed);

    var ORDER =
        [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];

    var LEXT = [
        0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2,
        3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99
    ];

    var LENS = [
        3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
        35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0
    ];

    var DEXT = [
        0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6,
        7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13
    ];

    var DISTS = [
        1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
        257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
        8193, 12289, 16385, 24577
    ];

    if (this.$canArrayBuffer) {
        ORDER = new Uint8Array(ORDER);
        LEXT  = new Uint8Array(LEXT);
        DEXT  = new Uint8Array(DEXT);
        LENS  = new Uint16Array(LENS);
        DISTS = new Uint16Array(DISTS);
    }

    var startOffset = 2;
    if (is_de_compress) {
        startOffset = 10;
    }
    bitio.setOffset(startOffset, 8);

    var flag = 0;
    while (!flag) {
        flag = bitio.readUB(1);

        var type = bitio.readUB(2);

        var distTable      = {};
        var litTable       = {};
        var fixedDistTable = false;
        var fixedLitTable  = false;

        if (type) {
            if (type === 1) {
                distTable = fixedDistTable;
                litTable  = fixedLitTable;

                if (!distTable) {
                    bitLengths = [];
                    i = 32;
                    while (i) {
                        i = (i - 1)|0;
                        bitLengths[bitLengths.length] = 5;
                    }
                    distTable = fixedDistTable = this.buildHuffTable(bitLengths);
                }

                if (!litTable) {
                    bitLengths = [];

                    i = 0;
                    while (i < 144) {
                        i = (i + 1)|0;
                        bitLengths[bitLengths.length] = 8;
                    }

                    while (i < 256) {
                        i = (i + 1)|0;
                        bitLengths[bitLengths.length] = 9;
                    }

                    while (i < 280) {
                        i = (i + 1)|0;
                        bitLengths[bitLengths.length] = 7;
                    }

                    while (i < 288) {
                        i = (i + 1)|0;
                        bitLengths[bitLengths.length] = 8;
                    }

                    litTable = fixedLitTable = this.buildHuffTable(bitLengths);
                }
            } else {
                var numLitLengths  = bitio.readUB(5) + 257;
                var numDistLengths = bitio.readUB(5) + 1;
                var numCodeLengths = bitio.readUB(4) + 4;
                var codeLengths    = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

                if (this.$canArrayBuffer) {
                    codeLengths = new Uint8Array(codeLengths);
                }

                i = 0;
                while (i < numCodeLengths) {
                    codeLengths[ORDER[i]] = bitio.readUB(3);
                    i = (i + 1)|0;
                }

                var codeTable = this.buildHuffTable(codeLengths);
                codeLengths   = null;

                var litLengths  = [];
                var prevCodeLen = 0;
                var maxLengths  = (numLitLengths + numDistLengths)|0;
                while (litLengths.length < maxLengths) {
                    sym = this.decodeSymbol(bitio, codeTable);
                    switch (sym) {
                        case 16:
                            i = (bitio.readUB(2) + 3)|0;
                            while (i) {
                                i = (i - 1)|0;
                                litLengths[litLengths.length] = prevCodeLen;
                            }
                            break;
                        case 17:
                            i = (bitio.readUB(3) + 3)|0;
                            while (i) {
                                i = (i - 1)|0;
                                litLengths[litLengths.length] = 0;
                            }
                            break;
                        case 18:
                            i = (bitio.readUB(7) + 11)|0;
                            while (i) {
                                i = (i - 1)|0;
                                litLengths[litLengths.length] = 0;
                            }
                            break;
                        default:
                            if (sym <= 15) {
                                litLengths[litLengths.length] = sym;
                                prevCodeLen = sym;
                            }
                            break;
                    }
                }
                distTable = this.buildHuffTable(litLengths.splice(numLitLengths, numDistLengths));
                litTable  = this.buildHuffTable(litLengths);
            }

            sym = 0;
            while (sym !== 256) {
                sym = this.decodeSymbol(bitio, litTable)|0;
                if (sym < 256) {
                    data[data.length] = sym;
                } else if (sym > 256) {
                    var mapIdx = (sym - 257)|0;
                    length     = (LENS[mapIdx] + bitio.readUB(LEXT[mapIdx]))|0;

                    var distMap = this.decodeSymbol(bitio, distTable);
                    var dist    = (DISTS[distMap] + bitio.readUB(DEXT[distMap]))|0;

                    i = (data.length - dist)|0;
                    while (length) {
                        length = (length - 1)|0;
                        data[data.length] = data[i];
                        i = (i + 1)|0;
                    }
                }
            }
        } else {
            bitio.bit_offset = 8;
            bitio.bit_buffer = null;

            length = bitio.readNumber(2)|0;
            bitio.readNumber(2); // nlen

            while (length) {
                length = (length - 1)|0;
                data[data.length] = bitio.readNumber(1);
            }
        }
    }
    return data;
};

/**
 * @param   {array} data
 * @returns {array}
 */
BitIO.prototype.buildHuffTable = function (data)
{
    var length   = data.length|0;
    var code     = 0;
    var idx      = 0;
    var maxBits  = 0;
    var blCount  = [];
    var nextCode = [];
    var table    = {};

    var i = 0;
    while (i < length) {
        maxBits = this.$max(maxBits, data[i]);
        i = (i + 1)|0;
    }

    maxBits = (maxBits + 1)|0;

    i = length;
    while (i) {
        i = (i - 1)|0;

        idx = data[i];
        blCount[idx] = (blCount[idx] || 0) + (idx > 0);
    }

    i = 1;
    while (i < maxBits) {
        idx = (i - 1)|0;
        if (!(idx in blCount)) {
            blCount[idx] = 0;
        }

        code = (code + blCount[idx]) << 1;
        nextCode[i] = code|0;

        i = (i + 1)|0;
    }

    i = 0;
    while (i < length) {
        idx = data[i];
        if (idx) {
            table[nextCode[idx]] = {
                length: idx,
                symbol: i
            };

            nextCode[idx] = (nextCode[idx] + 1)|0;
        }

        i = (i + 1)|0;
    }

    return table;
};

/**
 * @param   {BitIO}  bitio
 * @param   {array}  table
 * @returns {object}
 */
BitIO.prototype.decodeSymbol = function (bitio, table)
{
    var code   = 0;
    var length = 0;

    while (true) {
        code   = (code << 1) | bitio.readUB(1);
        length = (length + 1)|0;
        if (!(code in table)) {
            continue;
        }

        var entry = table[code];
        if (entry.length === length) {
            return entry.symbol;
        }
    }
};

/**
 * @param   {number} length
 * @returns {array}
 */
BitIO.prototype.createArray = function (length)
{
    return (this.$canArrayBuffer) ? new Uint8Array(length) : [];
};

/**
 * @param   {array} data
 * @returns void
 */
BitIO.prototype.setData = function (data)
{
    this.data = data;
};

/**
 * @returns {string}
 */
BitIO.prototype.getHeaderSignature = function ()
{
    var str   = "";
    var count = 3;
    while (count) {
        var code = this.getUI8();
        switch (code) {
            // trim
            case 32:
            case 96:
            case 127:
                continue;
            default:
                break;
        }

        str  += this.$fromCharCode(code);
        count = (count - 1)|0;
    }

    return str;
};

/**
 * @returns {number}
 */
BitIO.prototype.getVersion = function ()
{
    return this.getUI8();
};

/**
 * @returns void
 */
BitIO.prototype.byteAlign = function ()
{
    if (!this.bit_offset) {
        return;
    }

    this.byte_offset = (this.byte_offset + (this.bit_offset + 7) / 8)|0;
    this.bit_offset  = 0;
};

/**
 * @param   {number} length
 * @returns {array}
 */
BitIO.prototype.getData = function (length)
{
    this.byteAlign();

    var array = this.createArray(length);
    var key   = 0;
    var data  = this.data;
    var limit = length;

    while (limit) {
        array[key] = data[this.byte_offset];

        key = (key + 1)|0;

        this.byte_offset = (this.byte_offset + 1)|0;

        limit = (limit - 1)|0;
    }

    return array;
};

/**
 * @param   {string|null}  value
 * @param   {boolean} is_jis
 * @returns {string}
 */
BitIO.prototype.getDataUntil = function (value, is_jis)
{
    this.byteAlign();

    var data   = this.data;
    var bo     = this.byte_offset|0;
    var offset = 0;
    if (value === null) {
        offset = -1;
    } else {
        var length = data.length|0;
        while (true) {
            var val = data[bo + offset];
            offset  = (offset + 1)|0;

            if (val === 0 || (bo + offset) >= length) {
                break;
            }
        }
    }

    var n = (offset === -1) ? data.length - bo : offset;
    var array = [];
    var ret = "";
    var _join = Array.prototype.join;
    var i = 0;
    if (value !== null) {
        i = 0;
        while (i < n) {
            var code = data[bo + i];
            i = (i + 1)|0;

            if (code === 10 || code === 13) {
                array[array.length] = "\n";
            }
            if (code < 32) {
                continue;
            }
            array[array.length] = "%" + code.toString(16);
        }

        if (array.length) {
            var str = _join.call(array, "");
            if (str.length > 5 && str.substr(-5) === "\n") {
                str = str.slice(0, -5);
            }

            if (is_jis) {
                ret = this.decodeToShiftJis(str);
            } else {
                try {
                    ret = decodeURIComponent(str);
                } catch (e) {
                    ret = this.decodeToShiftJis(str);
                }
            }
        }
    } else {
        i = 0;
        while (i < n) {
            ret += this.$fromCharCode(data[bo + i]);
            i = (i + 1)|0;
        }
    }

    this.byte_offset = bo + n;

    return ret;
};

/**
 * @returns void
 */
BitIO.prototype.byteCarry = function ()
{
    if (this.bit_offset > 7) {
        this.byte_offset  = this.byte_offset + (0 | (this.bit_offset + 7) / 8);
        this.bit_offset  &= 0x07;
    } else {
        while (this.bit_offset < 0) {
            this.byte_offset = (this.byte_offset - 1)|0;
            this.bit_offset  = (this.bit_offset + 8)|0;
        }
    }
};

/**
 * @param   {number} number
 * @returns {number}
 */
BitIO.prototype.getUIBits = function (number)
{
    var value = 0;
    while (number) {
        value <<= 1;
        value  |= this.getUIBit();
        number  = (number - 1)|0;
    }
    return value;
};

/**
 * @returns {number}
 */
BitIO.prototype.getUIBit = function ()
{
    this.byteCarry();

    var number = (this.data[this.byte_offset] >> (7 - this.bit_offset)) & 0x1;

    this.bit_offset = (this.bit_offset + 1)|0;

    return number;
};

/**
 * @param   {number} number
 * @returns {number}
 */
BitIO.prototype.getSIBits = function (number)
{
    var value = this.getUIBits(number);
    var msb   = value & (0x1 << (number - 1));
    if (msb) {
        return -(value ^ (2 * msb - 1)) - 1;
    }
    return value;
};

/**
 * @returns {number}
 */
BitIO.prototype.getUI8 = function ()
{
    this.byteAlign();
    var value = this.data[this.byte_offset];
    this.byte_offset = (this.byte_offset + 1)|0;
    return value;
};

/**
 * @returns {number}
 */
BitIO.prototype.getUI16 = function ()
{
    this.byteAlign();
    return (this.getUI8() | (this.getUI8()) << 8);
};

/**
 * @returns {number}
 */
BitIO.prototype.getUI24 = function ()
{
    this.byteAlign();
    return (this.getUI8() | (this.getUI8() | (this.getUI8()) << 8) << 8);
};

/**
 * @returns {number}
 */
BitIO.prototype.getUI32 = function ()
{
    this.byteAlign();
    return (this.getUI8() | (this.getUI8() | (this.getUI8() | (this.getUI8()) << 8) << 8) << 8);
};

/**
 * @returns {number}
 */
BitIO.prototype.getUI16BE = function ()
{
    this.byteAlign();
    return (((this.getUI8()) << 8) | (this.getUI8()));
};

/**
 * @returns {number}
 */
BitIO.prototype.getFloat16 = function ()
{
    var data  = this.getData(2);
    var float = 0;
    float |= data[1] << 8;
    float |= data[0] << 0;
    return float;
};

/**
 * @returns {number}
 */
BitIO.prototype.getFloat32 = function ()
{
    var data = this.getData(4);
    var rv   = 0;
    rv |= data[3] << 24;
    rv |= data[2] << 16;
    rv |= data[1] << 8;
    rv |= data[0] << 0;

    var sign     = rv & 0x80000000;
    var exp      = (rv >> 23) & 0xff;
    var fraction = rv & 0x7fffff;
    if (!rv || rv === 0x80000000) {
        return 0;
    }

    return (sign ? -1 : 1) *
        (fraction | 0x800000) *
            this.$pow(2, (exp - 127 - 23));
};

/**
 * @returns {number}
 */
BitIO.prototype.getFloat64 = function ()
{
    var upperBits     = this.getUI32();
    var lowerBits     = this.getUI32();
    var sign          = upperBits >>> 31 & 0x1;
    var exp           = upperBits >>> 20 & 0x7FF;
    var upperFraction = upperBits & 0xFFFFF;

    return (!upperBits && !lowerBits) ? 0 : ((sign === 0) ? 1 : -1) *
        (upperFraction / 1048576 + lowerBits / 4503599627370496 + 1) *
            this.$pow(2, exp - 1023);
};

/**
 * @returns {number}
 */
BitIO.prototype.getFloat64LittleEndian = function ()
{
    var signBits     = 1;
    var exponentBits = 11;
    var fractionBits = 52;
    var min          = -1022;
    var max          = 1023;

    var str = "";
    var i   = 0;
    while (i < 8) {
        var bits = this.getUI8().toString(2);
        while (bits.length < 8) {
            bits = "0" + bits;
        }
        str = bits + str;
        i = (i + 1)|0;
    }

    var sign            = (str.charAt(0) === "1") ? -1 : 1;
    var exponent        = this.$parseInt(str.substr(signBits, exponentBits), 2) - max;
    var significandBase = str.substr(signBits + exponentBits, fractionBits);
    var significandBin  = "1"+ significandBase;

    var val         = 1;
    var significand = 0;
    if (exponent === -max) {
        if (significandBase.indexOf("1") === -1) {
            return 0;
        } else {
            exponent       = min;
            significandBin = "0"+ significandBase;
        }
    }

    var l = 0;
    while (l < significandBin.length) {
        var sb = significandBin.charAt(l)|0;
        significand = significand + val * sb;

        val = val / 2;
        l   = (l + 1)|0;
    }

    return sign * significand * this.$pow(2, exponent);
};

/**
 * @param   {array}  data
 * @returns {number}
 */
BitIO.prototype.toUI16 = function (data)
{
    return data[0] + (data[1] << 8);
};

/**
 * @param   {array}  data
 * @returns {number}
 */
BitIO.prototype.toSI16LE = function (data)
{
    var value = this.toUI16(data);
    return (value < 0x8000) ? value : (value - 0x10000);
};

/**
 * @returns {number}
 */
BitIO.prototype.getSI8 = function ()
{
    var value = this.getUI8();
    if (value >> 7) { // nBits = 8;
        value = (value - 256)|0; // Math.pow(2, 8)
    }
    return value;
};

/**
 * @returns {number}
 */
BitIO.prototype.getSI24 = function ()
{
    var _this = this;
    var value = _this.getUI24();
    if (value >> 23) { // nBits = 24;
        value = (value - 16777216)|0; // Math.pow(2, 24)
    }
    return value;
};

/**
 * @param   {number} byte_int
 * @param   {number} bit_int
 * @returns void
 */
BitIO.prototype.incrementOffset = function (byte_int, bit_int)
{
    this.byte_offset = (this.byte_offset + byte_int)|0;
    this.bit_offset  = (this.bit_offset  + bit_int)|0;
    this.byteCarry();
};

/**
 * @param   {number} byte_int
 * @param   {number} bit_int
 * @returns void
 */
BitIO.prototype.setOffset = function (byte_int, bit_int)
{
    this.byte_offset = byte_int;
    this.bit_offset  = bit_int;
};

/**
 * @returns {number}
 */
BitIO.prototype.getU30 = function ()
{
    var value = 0;
    var i = 0;
    while (i < 5) {
        var num = this.getUI8();

        value |= ((num & 0x7f) << (7 * i));

        if (!(num & 0x80)) {
            break;
        }

        i = (i + 1)|0;
    }
    return value;
};

/**
 * @returns {number}
 */
BitIO.prototype.getS30 = function ()
{
    var startOffset = this.byte_offset;
    var value       = this.getU30();
    var nBits       = ((this.byte_offset - startOffset) * 8)|0;
    if (value >> (nBits - 1)) {
        value = (value - this.$pow(2, nBits))|0;
    }
    return value;
};

/**
 * @param   {number} offset
 * @returns {number}
 */
BitIO.prototype.ReadU30 = function (offset)
{
    var value = 0;
    var data = this.data;
    var i = 0;
    while (i < 5) {
        var num = data[offset];
        offset  = (offset + 1)|0;

        value |= ((num & 0x7f) << (7 * i));
        if (!(num & 0x80)) {
            break;
        }

        i = (i + 1)|0;
    }
    return value;
};

/**
 * @returns {string}
 */
BitIO.prototype.AbcReadString = function ()
{
    var offset = this.byte_offset;
    var length = this.ReadU30(offset) + 1;

    var ret = [];
    var i = 0;
    while (i < length) {
        i = (i + 1)|0;

        var code = this.getUI8();
        if (code < 33) {
            continue;
        }

        switch (code) {
            default:
                break;
            case 34:
            case 35:
            case 36:
            case 37:
            case 38:
            case 39:
            case 43:
            case 45:
                continue;
        }

        ret[ret.length] = this.$fromCharCode(code);
    }

    return ret.join("");
};

/**
 * @param   {number} length
 * @returns {number}
 */
BitIO.prototype.readUB = function (length)
{
    var value = 0;
    var i = 0;

    while (i < length) {
        if (this.bit_offset === 8) {
            this.bit_buffer = this.readNumber(1);
            this.bit_offset = 0;
        }

        value |= (this.bit_buffer & (0x01 << this.bit_offset) ? 1 : 0) << i;
        this.bit_offset = (this.bit_offset + 1)|0;

        i = (i + 1)|0;
    }

    return value;
};

/**
 * @returns {number}
 */
BitIO.prototype.readNumber = function (n)
{
    var value = 0;

    var o = this.byte_offset;
    var i = o + n;
    while (i > o) {
        i = (i - 1)|0;
        value = (value << 8) | this.data[i];
    }

    this.byte_offset = this.byte_offset + n;
    return value;
};

/**
 * @param   {number} size
 * @param   {string} mode
 * @returns void
 */
BitIO.prototype.deCompress = function (size, mode)
{
    var cacheOffset  = this.byte_offset;
    this.byte_offset = 0;

    // header
    var data = this.getData(cacheOffset);

    var deCompress = [];
    switch (mode) {
        case "LZMA":
            deCompress = this.unlzma(this.data, size - cacheOffset);
            break;
        default: // ZLIB
            deCompress = this.unzip(this.data, true);
            break;
    }

    // create new array
    var array  = this.createArray(size);

    // header
    var i      = 0;
    var key    = 0;
    var length = data.length;
    while (i < length) {
        array[key] = data[i]|0;

        key = (key + 1)|0;
        i   = (i + 1)|0;
    }

    // data
    i = 0;
    length = deCompress.length;
    while (i < length) {
        array[key] = deCompress[i]|0;

        key = (key + 1)|0;
        i   = (i + 1)|0;
    }

    this.data        = array;
    this.byte_offset = cacheOffset;
};
/**
 * @param {Player} player
 * @param {MovieClip} player
 * @constructor
 */
var ReComposition = function (player, root)
{
    Util.call(this);

    this.player = player;
    this.main   = root;
    this.bitio  = new BitIO();
    this.swftag = new SwfTag(this.main, this.bitio);
};

/**
 * extends
 */
ReComposition.prototype = Object.create(Util.prototype);
ReComposition.prototype.constructor = ReComposition;

/**
 * @param   {array}  data
 * @param   {string} url
 * @returns {MovieClip}
 */
ReComposition.prototype.run = function (data, url)
{
    // data set
    if (this.$canXHR2) {
        this.bitio.setData(new Uint8Array(data));
    } else {
        this.bitio.initialize(data);
    }

    // parse header
    if (!this.isImage(data)) {

        // parse and build
        return this
            .initialize()
            .parseAndBuild(url);

    } else {

        // create image object


        return this.main;

    }
};

/**
 * @param   {array} data
 * @returns {boolean}
 */
ReComposition.prototype.isImage = function(data)
{
    switch (true) {
        case (data[0] === 0x89 && data[1] === 0x50 &&
              data[2] === 0x4E && data[3] === 0x47 &&
              data[4] === 0x0D && data[5] === 0x0A &&
              data[6] === 0x1A && data[7] === 0x0A): // PNG
        case (data[0] === 0x47 && data[1] === 0x49 && data[2] === 0x46): // GIF
        case (data[0] === 0xff && data[1] === 0xd8): // JPEG
        case (data[0] === 0x42 && data[1] === 0x4d): // BMP
            return true;
        default:
            return false;
    }
};

/**
 * @returns {ReComposition}
 */
ReComposition.prototype.initialize = function()
{
    var bitio = this.bitio;

    // signature
    var signature = bitio.getHeaderSignature();

    // version
    this.main.version = bitio.getVersion()|0;

    // file size
    var fileSize  = this.bitio.getUI32();
    // this.fileSize = fileSize;

    // de compress
    switch (signature) {
        case "FWS": // No ZIP
            break;
        case "CWS": // ZLIB
            bitio.deCompress(fileSize, "ZLIB");
            break;
        case "ZWS": // LZMA
            bitio.deCompress(fileSize, "LZMA");
            break;
    }

    // bounds
    var bounds = this.swftag.rect();

    // frameRate
    this.main.stage.frameRate = bitio.getUI16() / 0x100;

    // frameCount
    this.bitio.getUI16(); // frameCount

    var width  = (this.$ceil((bounds.xMax - bounds.xMin) / 20))|0;
    var height = (this.$ceil((bounds.yMax - bounds.yMin) / 20))|0;

    // player set
    var player = this.main.stage.player;

    player.baseWidth  = width;
    player.baseHeight = height;
    if (player.tagId && !player.optionWidth && !player.optionHeight) {
        player.optionWidth  = width;
        player.optionHeight = height;
    }

    return this;
};

/**
 * @param   {string} url
 * @returns {MovieClip}
 */
ReComposition.prototype.parseAndBuild = function(url)
{
    var main = this.main;

    // parse
    this.swftag.parse(main);

    var query = url.split("?")[1];
    if (query) {

        var values = query.split("&");
        var length = values.length;

        while (length) {
            length    = (length - 1)|0;
            var value = values[length];
            var pair  = value.split("=");
            if (pair.length > 1) {
                main.setVariable(pair[0], pair[1]);
            }
        }
    }

    // FlashVars
    var vars = this.FlashVars;
    for (var key in vars) {

        if (!vars.hasOwnProperty(key)) {
            continue;
        }

        main.setVariable(key, vars[key]);
    }

    // build
    main._$prepareActions(1);
    main._$characterBuild(true);

    // load end
    this.player.isLoad     = true;
    this.player.loadStatus = (this.player.loadStatus + 1)|0;

    console.log(main);

    return main;
};

/**
 * @param {MainTimeline|MovieClip} main
 * @param {BitIO} bitio
 * @constructor
 */
var SwfTag = function (main, bitio)
{
    Util.call(this);

    this.main              = main;
    this.bitio             = bitio;
    this.currentPosition   = {x: 0, y: 0};
    this.jpegTables        = null;
    this.sceneInfo         = [];
    this.frameInfo         = [];
};

/**
 * extends
 * @type {Util}
 */
SwfTag.prototype = Object.create(Util.prototype);
SwfTag.prototype.constructor = SwfTag;

/**
 * @returns {Stage}
 */
SwfTag.prototype.getStage = function()
{
    return this.main.stage;
};

/**
 *
 * @param   {number} character_id
 * @returns {object}
 */
SwfTag.prototype.getCharacter = function(character_id)
{
    return this.getStage()._$characters[character_id];
};

/**
 * @param   {number} character_id
 * @param   {object} instance
 * @returns void
 */
SwfTag.prototype.setCharacter = function(character_id, instance)
{
    this.getStage()._$characters[character_id] = instance;
};

/**
 * @param   {MovieClip} parent
 * @returns void
 */
SwfTag.prototype.parse = function (parent)
{
    // swf parse
    this.parseTags(this.bitio.data.length, parent);

    // init scenes
    var length = this.sceneInfo.length;
    if (length) {

        var idx    = 0;
        var scenes = [];
        while (length > idx) {

            var sceneInfo = this.sceneInfo[idx];


            // create Scene
            var scene         = new Scene(sceneInfo.name);
            scene._$offset    = sceneInfo.offset;


            // set numFrames
            var next   = (idx + 1)|0;
            var offset = parent.totalFrames;
            if (next in  this.sceneInfo) {
                offset = this.sceneInfo[next].offset|0;
            }
            scene._$numFrames = (offset - scene._$offset)|0;


            // set labels
            var labels = parent.currentLabels;
            var total  = labels.length|0;

            var i = 0;
            var sceneLabels = [];
            while (total > i) {

                var label = labels[i];

                if (label.frame > sceneInfo.offset && label.frame <= offset) {
                    sceneLabels[sceneLabels.length] = label;
                }

                i = (i + 1)|0;
            }
            scene._$labels = sceneLabels;


            // set array
            scenes[scenes.length] = scene;

            idx = (idx + 1)|0;
        }
    }

    parent._$scenes = scenes;
};

/**
 * @param   {MovieClip} parent
 * @param   {object}    tags
 * @param   {number}    frame
 * @param   {array}     cache_place_objects
 * @returns void
 */
SwfTag.prototype.showFrame = function (parent, tags, frame, cache_place_objects)
{
    var idx;
    var installed = [];

    // add total frame
    parent._$totalFrames  = frame;
    parent._$framesLoaded = frame;


    // action script
    var actions = tags.actions;
    if (actions.length) {
        for (idx in actions) {
            if (!actions.hasOwnProperty(idx)) {
                continue;
            }

            parent._$addAction(frame, actions[idx]);
        }
    }


    // Frame Label
    var labels = tags.frameLabel;
    if (labels.length) {
        for (idx in labels) {
            if (!labels.hasOwnProperty(idx)) {
                continue;
            }

            var label = labels[idx];

            // if frameInfo match case
            if (label.name in this.frameInfo) {
                label.frame = this.frameInfo[label.name]|0;
            }

            parent._$addFrameLabel(new FrameLabel(label.name, label.frame));
        }
    }


    // TODO sound
    var sounds = tags.sounds;
    if (sounds.length) {
        for (idx in sounds) {
            if (!sounds.hasOwnProperty(idx)) {
                continue;
            }

            parent._$addSound(frame, sounds[idx]);
        }
    }


    // remove objects
    var removeObjects = tags.removeObjects;
    if (removeObjects.length) {
        for (idx in removeObjects) {

            if (!removeObjects.hasOwnProperty(idx)) {
                continue;
            }

            var removeObject = removeObjects[idx];

            var id  = parent._$getControllerAt(frame - 1, removeObject.Depth);
            var tag = parent._$dictionary[id];

            tag.EndFrame = (frame - 1)|0;
            parent._$dictionary[id] = tag;

            installed[removeObject.Depth] = 1;
        }
    }


    // new cache
    if (!(frame in cache_place_objects)) {
        cache_place_objects[frame] = [];
    }

    // place objects
    var prevFrame        = (frame - 1)|0;
    var placeObjects     = tags.placeObjects;
    var prevPlaceObjects = cache_place_objects[prevFrame];
    for (idx in placeObjects) {

        if (!placeObjects.hasOwnProperty(idx)) {
            continue;
        }

        // id reset
        var instanceId = null;

        var placeObject = placeObjects[idx];

        // reset
        var prevPlaceObject = null;
        if (prevPlaceObjects && idx in prevPlaceObjects) {
            prevPlaceObject = prevPlaceObjects[idx];
        }

        // set prev characterId
        if (placeObject.PlaceFlagHasCharacter === 0 && prevPlaceObject) {

            placeObject.CharacterId = prevPlaceObject.CharacterId;

        }

        var isNewCharacter = false;
        if (placeObject.PlaceFlagMove === 0
            || placeObject.PlaceFlagMove === 1 && placeObject.PlaceFlagHasCharacter === 1
        ) {
            isNewCharacter = true;
        }

        // character clone
        if (prevFrame && !isNewCharacter) {
            instanceId = parent._$getControllerAt(prevFrame, placeObject.Depth);
            if (instanceId === null) {
                isNewCharacter = true;
            }
        }

        // prev data set
        if (placeObject.PlaceFlagMove === 1 && prevPlaceObject) {

            if (placeObject.PlaceFlagHasMatrix === 0
                && prevPlaceObject.PlaceFlagHasMatrix === 1
            ) {
                placeObject.PlaceFlagHasMatrix = 1;
                placeObject.Matrix = prevPlaceObject.Matrix;
            }

            if (placeObject.PlaceFlagHasColorTransform === 0
                && prevPlaceObject.PlaceFlagHasColorTransform === 1
            ) {
                placeObject.PlaceFlagHasColorTransform = 1;
                placeObject.ColorTransform = prevPlaceObject.ColorTransform;
            }

            if (placeObject.PlaceFlagHasClipDepth === 0
                && prevPlaceObject.PlaceFlagHasClipDepth === 1
            ) {
                placeObject.PlaceFlagHasClipDepth = 1;
                placeObject.ClipDepth = prevPlaceObject.ClipDepth;
            }

            if (placeObject.PlaceFlagHasClipActions === 0
                && prevPlaceObject.PlaceFlagHasClipActions === 1
            ) {
                placeObject.PlaceFlagHasClipActions = 1;
                placeObject.ClipActionRecords = prevPlaceObject.ClipActionRecords;
            }

            if (placeObject.PlaceFlagHasRatio === 0
                && prevPlaceObject.PlaceFlagHasRatio === 1
            ) {
                placeObject.PlaceFlagHasRatio = 1;
                placeObject.Ratio = prevPlaceObject.Ratio;
            }

            if (placeObject.PlaceFlagHasFilterList === 0
                && prevPlaceObject.PlaceFlagHasFilterList === 1
            ) {
                placeObject.PlaceFlagHasFilterList = 1;
                placeObject.SurfaceFilterList = prevPlaceObject.SurfaceFilterList;
            }

            if (placeObject.PlaceFlagHasBlendMode === 0
                && prevPlaceObject.PlaceFlagHasBlendMode === 1
            ) {
                placeObject.PlaceFlagHasBlendMode = 1;
                placeObject.BlendMode = prevPlaceObject.BlendMode;
            }
        }

        // character new build
        if (isNewCharacter) {

            placeObject.StartFrame = frame|0;
            placeObject.EndFrame   = 0;

            instanceId = parent._$addDictionary(placeObject);

        }

        // start set instance
        parent._$setController(frame,  placeObject.Depth, instanceId);
        parent._$addPlaceObject(frame, placeObject.Depth, this.buildPlaceObject(placeObject));

        // flag
        installed[placeObject.Depth] = 1;

        // cache
        cache_place_objects[frame][placeObject.Depth] = placeObject;
    }

    // clone prev frame
    if (prevFrame) {

        var depth;

        if (!(frame in parent._$controller)) {
            parent._$controller[frame] = [];
        }

        var controller = parent._$controller[prevFrame];
        for (depth in controller) {
            if (!controller.hasOwnProperty(depth)) {
                continue;
            }

            if (depth in installed) {
                continue;
            }

            // clone
            cache_place_objects[frame][depth] = cache_place_objects[prevFrame][depth];
            parent._$controller[frame][depth] = controller[depth];
        }


        if (!(frame in parent._$placeController)) {
            parent._$placeController[frame] = [];
        }

        var places = parent._$placeController[prevFrame];
        for (depth in places) {

            if (!places.hasOwnProperty(depth)) {
                continue;
            }

            if (depth in parent._$placeController[frame]) {
                continue;
            }

            parent._$placeController[frame][depth] = places[depth];

        }
    }
};

/**
 * @param   {object} tag
 * @returns {PlaceObject}
 */
SwfTag.prototype.buildPlaceObject = function (tag)
{
    var placeObject = new PlaceObject();

    // Matrix
    if (tag.PlaceFlagHasMatrix) {
        var matrix         = new Matrix();
        matrix._$matrix    = tag.Matrix;
        placeObject.matrix = matrix;
    }

    // ColorTransform
    if (tag.PlaceFlagHasColorTransform) {
        var colorTransform              = new ColorTransform();
        colorTransform._$colorTransform = tag.ColorTransform;
        placeObject.colorTransform      = colorTransform;
    }

    // Filter
    if (tag.PlaceFlagHasFilterList) {
        placeObject.filters = tag.SurfaceFilterList;
    }

    // BlendMode
    if (tag.PlaceFlagHasBlendMode) {
        placeObject.blendMode = tag.BlendMode;
    }

    return placeObject;
};

/**
 * @param tag
 * @param character
 * @param parent
 * @returns {TextField}
 */
SwfTag.prototype.buildTextField = function (tag, character, parent)
{
    var stage     = this.getStage();
    var textField = new TextField();
    textField.setStage(stage);
    textField.setParent(parent);
    textField.setInitParams();
    textField.setTagType(character.tagType);
    textField.setBounds(character.bounds);
    var target = "instance" + textField.instanceId;
    if (tag.PlaceFlagHasName) {
        textField.setName(tag.Name);
        target = tag.Name;
    }
    textField.setTarget(parent.getTarget() + "/" + target);

    var obj      = {};
    var data     = character.data;
    var fontData = null;
    var fontId   = data.FontID;
    if (data.HasFont) {
        fontData = stage.getCharacter(fontId);
    }

    textField.fontId    = fontId;
    textField.fontScale = data.FontHeight / 1024;
    if (fontData && fontData.ZoneTable) {
        textField.fontScale /= 20;
    }

    textField.initialText = data.InitialText;

    obj.autoSize = data.AutoSize;
    obj.border   = data.Border;
    if (obj.border) {
        obj.background = 1;
    }

    obj.bottomScroll  = 1;
    obj.condenseWhite = 0;
    obj.embedFonts    = (data.HasFont && data.UseOutlines && fontData.FontFlagsHasLayout && !data.Password) ? 1 : 0;
    obj.hscroll       = 0;
    obj.maxscroll     = 0;
    obj.scroll        = 0;
    obj.maxhscroll    = 0;
    obj.html          = data.HTML;
    obj.htmlText      = (data.HTML) ? data.InitialText : null;
    obj.length        = 0;
    obj.maxChars      = 0;
    obj.multiline     = data.Multiline;
    obj.password      = data.Password;
    obj.selectable    = data.NoSelect;
    obj.tabEnabled    = 0;
    obj.tabIndex      = 0;
    obj.text          = data.InitialText;
    obj.textColor     = data.TextColor;
    obj.textHeight    = 0;
    obj.textWidth     = 0;
    obj.type          = data.ReadOnly ? "dynamic" : "input";

    var variable = data.VariableName;
    obj.variable = variable;
    if (variable) {
        parent.setVariable(variable, data.InitialText);
    }

    obj.wordWrap = data.WordWrap;

    // TextFormat
    obj.blockIndent = 0;
    obj.bullet      = 0;

    if (fontData) {
        obj.bold   = fontData.FontFlagsBold;
        var font   = textField.getVariable("font");
        obj.font   = "'" + fontData.FontName + "', " + font;
        obj.italic = fontData.FontFlagsItalic;
    }

    if (data.HasLayout) {
        switch (data.Align) {
            case 1:
                obj.align = "right";
                break;
            case 2:
                obj.align = "center";
                break;
            case 3:
                obj.align = "justify";
                break;
        }
        obj.leftMargin  = data.LeftMargin;
        obj.rightMargin = data.RightMargin;
        obj.indent      = data.Indent;
        obj.leading     = (14400 > data.Leading) ? data.Leading : data.Leading - 65535;
    }

    obj.size      = data.FontHeight / 20;
    obj.tabStops  = [];
    obj.target    = null;
    obj.underline = 0;
    obj.url       = null;

    for (var name in obj) {
        if (!obj.hasOwnProperty(name)) {
            continue;
        }

        textField.setProperty(name, obj[name]);
    }

    if (obj.type === "input") {
        textField.setInputElement();
    }

    return textField;
};

/**
 * @param tag
 * @param character
 * @returns {StaticText}
 */
SwfTag.prototype.buildText = function (tag, character)
{
    var stage      = this.getStage();
    var staticText = new StaticText();
    staticText.setTagType(character.tagType);
    staticText.setBounds(character.bounds);

    var records     = character.textRecords;
    var length      = 0 | records.length;
    var offsetX     = 0;
    var offsetY     = 0;
    var scale       = 1;
    var textHeight  = 0;
    var ShapeTable  = null;
    var cMatrix     = character.matrix;
    var color       = null;
    var isZoneTable = false;
    var i = 0;
    while (i < length) {
        var record = records[i];
        if ("FontId" in record) {
            var fontId   = record.FontId;
            var fontData = stage.getCharacter(fontId);
            ShapeTable   = fontData.GlyphShapeTable;
            isZoneTable  = ("ZoneTable" in fontData);
        }

        if ("XOffset" in record) {
            offsetX = record.XOffset;
        }

        if ("YOffset" in record) {
            offsetY = record.YOffset;
        }

        if ("TextColor" in record) {
            color = record.TextColor;
        }

        if ("TextHeight" in record) {
            textHeight = record.TextHeight;
            if (isZoneTable) {
                textHeight /= 20;
            }
        }

        var entries = record.GlyphEntries;
        var count   = record.GlyphCount;
        scale       = textHeight / 1024;
        var idx     = 0;
        var vtc     = this.$vtc;
        while (idx < count) {
            var entry  = entries[idx];
            var shapes = ShapeTable[entry.GlyphIndex];
            var data   = vtc.convert(shapes);
            var matrix = [scale, cMatrix[1], cMatrix[2], scale, cMatrix[4] + offsetX, cMatrix[5] + offsetY];

            var textRecode = new TextRecord();
            textRecode.setData(data);
            textRecode.setColor(color);
            textRecode.setMatrix(matrix);
            staticText.addRecord(textRecode);
            offsetX += 0 | entry.GlyphAdvance;

            idx = 0 | idx + 1;
        }

        i = 0 | i + 1;
    }

    return staticText;
};

/**
 * @param character
 * @param tag
 * @param parent
 * @returns {SimpleButton}
 */
SwfTag.prototype.buildButton = function (character, tag, parent)
{
    var stage      = this.getStage();
    var characters = character.characters;

    var button = new SimpleButton();
    button.setStage(stage);
    button.setParent(parent);
    button.setLevel(tag.Depth);

    if ("actions" in character) {
        button.setActions(character.actions);
    }

    var target = "instance" + button.instanceId;
    if (tag.PlaceFlagHasName) {
        button.setName(tag.Name);
        target = tag.Name;
    }
    button.setTarget(parent.getTarget() + "/" + target);

    var downState = button.getSprite("down");
    if (character.ButtonStateDownSoundId) {
        downState.soundId   = character.ButtonStateDownSoundId;
        downState.soundInfo = character.ButtonStateDownSoundInfo;
    }

    var hitState = button.getSprite("hit");
    if (character.ButtonStateHitTestSoundId) {
        hitState.soundId   = character.ButtonStateHitTestSoundId;
        hitState.soundInfo = character.ButtonStateHitTestSoundInfo;
    }

    var overState = button.getSprite("over");
    if (character.ButtonStateOverSoundId) {
        overState.soundId   = character.ButtonStateOverSoundId;
        overState.soundInfo = character.ButtonStateOverSoundInfo;
    }

    var upState = button.getSprite("up");
    if (character.ButtonStateUpSoundId) {
        upState.soundId   = character.ButtonStateUpSoundId;
        upState.soundInfo = character.ButtonStateUpSoundInfo;
    }

    for (var depth in characters) {
        if (!characters.hasOwnProperty(depth)) {
            continue;
        }

        var tags = characters[depth];
        for (var idx in tags) {
            if (!tags.hasOwnProperty(idx)) {
                continue;
            }

            var bTag = tags[idx];
            var obj  = this.buildObject(bTag, button, false, 1);
            if (!obj) {
                continue;
            }

            var placeObject = this.buildPlaceObject(bTag);
            var Depth       = bTag.Depth;
            if (bTag.ButtonStateDown) {
                downState.addTag(Depth, obj);
                stage.setPlaceObject(placeObject, downState.instanceId, Depth, 0);
            }

            if (bTag.ButtonStateHitTest) {
                hitState.addTag(Depth, obj);
                stage.setPlaceObject(placeObject, hitState.instanceId, Depth, 0);
            }

            if (bTag.ButtonStateOver) {
                overState.addTag(Depth, obj);
                stage.setPlaceObject(placeObject, overState.instanceId, Depth, 0);
            }

            if (bTag.ButtonStateUp) {
                upState.addTag(Depth, obj);
                stage.setPlaceObject(placeObject, upState.instanceId, Depth, 0);
            }
        }
    }

    button.setSprite("down", downState);
    button.setSprite("hit",  hitState);
    button.setSprite("over", overState);
    button.setSprite("up",   upState);
    button.setTagType(character.tagType);

    return button;
};

/**
 * @param   {number}    data_length
 * @param   {MovieClip} parent
 * @returns void
 */
SwfTag.prototype.parseTags = function (data_length, parent)
{
    var frame   = 1;
    var tagType = 0;
    var bitio   = this.bitio;

    var tagStartOffset,
        tagLength,
        length,
        tagDataStartOffset,
        offset;

    var tags = {
        placeObjects:  [],
        actions:       [],
        sounds:        [],
        removeObjects: [],
        frameLabel:    []
    };

    var cachePlaceObjects = [];
    while (bitio.byte_offset < data_length) {

        tagStartOffset = bitio.byte_offset;
        if (tagStartOffset + 2 > data_length) {
            break;
        }

        tagLength = bitio.getUI16();
        tagType   = tagLength >> 6;

        // long
        length = tagLength & 0x3f;
        if (length === 0x3f) {
            if (tagStartOffset + 6 > data_length) {
                bitio.byte_offset = tagStartOffset;
                bitio.bit_offset  = 0;
                break;
            }
            length = bitio.getUI32();
        }

        tagDataStartOffset = bitio.byte_offset|0;
        this.parseTag(tagType, length, parent, frame, tags, cachePlaceObjects);

        if (tagType === 1) {

            // next frame
            frame = (frame + 1)|0;

            // tag reset
            tags = {
                placeObjects:  [],
                actions:       [],
                sounds:        [],
                removeObjects: [],
                frameLabel:    []
            };
        }

        offset = (bitio.byte_offset - tagDataStartOffset)|0;
        if (offset !== length) {
            if (offset < length) {
                bitio.byte_offset = (bitio.byte_offset + (length - offset))|0;
            }
        }

        bitio.bit_offset = 0;
    }
};

/**
 * @param {number}    tag_type
 * @param {number}    length
 * @param {MovieClip} parent
 * @param {number}    frame
 * @param {object}    tags
 * @param {array}     cache_place_objects
 */
SwfTag.prototype.parseTag = function (tag_type, length, parent, frame, tags, cache_place_objects)
{
    var obj = null;

    switch (tag_type) {
        case 0: // End
            break;
        case 1: // ShowFrame
            this.showFrame(parent, tags, frame, cache_place_objects);
            break;
        case 2:  // DefineShape
        case 22: // DefineShape2
        case 32: // DefineShape3
        case 83: // DefineShape4
            if (length < 10) {
                this.bitio.byte_offset += length;
            } else {
                this.parseDefineShape(tag_type);
            }
            break;
        case 9: // BackgroundColor
            this.getStage().player.setBackgroundColor(
                this.bitio.getUI8(),
                this.bitio.getUI8(),
                this.bitio.getUI8()
            );
            break;
        case 10: // DefineFont
        case 48: // DefineFont2
        case 75: // DefineFont3
            this.parseDefineFont(tag_type, length);
            break;
        case 13: // DefineFontInfo
        case 62: // DefineFontInfo2
            this.parseDefineFontInfo(tag_type, length);
            break;
        case 11: // DefineText
        case 33: // DefineText2
            this.parseDefineText(tag_type);
            break;
        case 4:  // PlaceObject
        case 26: // PlaceObject2
        case 70: // PlaceObject3
            var placeObject = this.parsePlaceObject(tag_type, length);
            tags.placeObjects[placeObject.Depth] = placeObject;
            break;
        case 37: // DefineEditText
            this.parseDefineEditText(tag_type);
            break;
        case 39: // DefineSprite
            this.parseDefineSprite(this.bitio.byte_offset + length, parent);
            break;
        case 12: // DoAction
            tags.actions[tags.actions.length] = this.parseDoAction(length);
            break;
        case 59: // DoInitAction
            this.parseDoInitAction(length);
            break;
        case 5:  // RemoveObject
        case 28: // RemoveObject2
            tags.removeObjects[tags.removeObjects.length] = this.parseRemoveObject(tag_type);
            break;
        case 7:  // DefineButton
        case 34: // DefineButton2
            this.parseDefineButton(tag_type, length);
            break;
        case 43: // FrameLabel
            tags.frameLabel[tags.frameLabel.length] = this.parseFrameLabel();
            break;
        case 88: // DefineFontName
            this.parseDefineFontName();
            break;
        case 20: // DefineBitsLossless
        case 36: // DefineBitsLossless2
            this.parseDefineBitsLossLess(tag_type, length);
            break;
        case 6:  // DefineBits
        case 21: // DefineBitsJPEG2
        case 35: // DefineBitsJPEG3
        case 90: // DefineBitsJPEG4
            this.parseDefineBits(tag_type, length, this.jpegTables);
            break;
        case 8:  // JPEGTables
            this.jpegTables = this.parseJPEGTables(length);
            break;
        case 56: // ExportAssets
            this.parseExportAssets();
            break;
        case 46: // DefineMorphShape
        case 84: // DefineMorphShape2
            this.parseDefineMorphShape(tag_type);
            break;
        case 40: // NameCharacter
            this.bitio.getDataUntil("\0"); // NameCharacter
            break;
        case 24: // Protect
            this.bitio.byteAlign();
            break;
        case 63: // DebugID
            this.bitio.getUI8(); // UUID
            break;
        case 64: // EnableDebugger2
            this.bitio.getUI16(); // Reserved
            this.bitio.getDataUntil("\0"); // Password
            break;
        case 65: // ScriptLimits
            this.bitio.getUI16(); // MaxRecursionDepth
            this.bitio.getUI16(); // ScriptTimeoutSeconds
            break;
        case 69: // FileAttributes
            this.parseFileAttributes();
            break;
        case 77: // MetaData
            this.bitio.getDataUntil("\0"); // MetaData
            break;
        case 86: // DefineSceneAndFrameLabelData
            obj = this.parseDefineSceneAndFrameLabelData();
            break;
        case 18: // SoundStreamHead
        case 45: // SoundStreamHead2
            obj = this.parseSoundStreamHead(tag_type);
            break;
        case 72: // DoABC
        case 82: // DoABC2
            this.parseDoABC(tag_type, length);
            break;
        case 76: // SymbolClass
            this.parseSymbolClass();
            break;
        case 14: // DefineSound
            this.parseDefineSound(tag_type, length);
            break;
        case 15: // StartSound
        case 89: // StartSound2
            obj = this.parseStartSound(tag_type);
            break;
        case 17: // DefineButtonSound
            this.parseDefineButtonSound();
            break;
        case 73: // DefineFontAlignZones
            this.parseDefineFontAlignZones();
            break;
        case 74: // CSMTextSettings
            this.parseCSMTextSettings(tag_type);
            break;
        case 19: // SoundStreamBlock
            this.parseSoundStreamBlock(tag_type, length);
            break;
        case 60: // DefineVideoStream
            this.parseDefineVideoStream(tag_type);
            break;
        case 61: // VideoFrame
            this.parseVideoFrame(tag_type, length);
            break;
        case 78: // DefineScalingGrid
            this.parseDefineScalingGrid();
            break;
        case 41: // ProductInfo
            this.bitio.getUI32(); // ProductID
            this.bitio.getUI32(); // Edition
            this.bitio.getUI8(); // MajorVersion
            this.bitio.getUI8(); // MinorVersion
            this.bitio.getUI32(); // BuildLow
            this.bitio.getUI32(); // BuildHigh
            this.bitio.getUI32(); // CompilationDate
            this.bitio.getUI32(); // TODO
            break;
        // TODO Tags
        case 3:  // FreeCharacter
        case 16: // StopSound
        case 23: // DefineButtonCxform
        case 25: // PathsArePostScript
        case 29: // SyncFrame
        case 31: // FreeAll
        case 38: // DefineVideo
        case 42: // DefineTextFormat
        case 44: // DefineBehavior
        case 47: // FrameTag
        case 49: // GeProSet
        case 52: // FontRef
        case 53: // DefineFunction
        case 54: // PlaceFunction
        case 55: // GenTagObject
        case 57: // ImportAssets
        case 58: // EnableDebugger
        case 66: // SetTabIndex
        case 71: // ImportAssets2
        case 87: // DefineBinaryData
        case 91: // DefineFont4
        case 93: // EnableTelemetry
            console.log("[base] tagType -> " + tag_type);
            break;
        case 27: // 27 (invalid)
        case 30: // 30 (invalid)
        case 67: // 67 (invalid)
        case 68: // 68 (invalid)
        case 79: // 79 (invalid)
        case 80: // 80 (invalid)
        case 81: // 81 (invalid)
        case 85: // 85 (invalid)
        case 92: // 92 (invalid)
            break;
        default: // null
            break;
    }

    return obj;
};

/**
 * @param   {number} tag_type
 * @returns void
 */
SwfTag.prototype.parseDefineShape = function (tag_type)
{
    var characterId = this.bitio.getUI16()|0;
    var bounds      = this.rect();

    var edgeBounds = null;
    if (tag_type === 83) {
        var obj = {};

        edgeBounds = this.rect();

        // Reserved
        this.bitio.getUIBits(5);

        obj.UsesFillWindingRule   = this.bitio.getUIBits(1);
        obj.UsesNonScalingStrokes = this.bitio.getUIBits(1);
        obj.UsesScalingStrokes    = this.bitio.getUIBits(1);
    }

    // create data
    var data  = this.$vtc.convert(this.shapeWithStyle(tag_type), false);

    // build shape object
    var shape          = new Shape();
    shape._$data       = data;
    shape._$bounds     = bounds;
    shape._$edgeBounds = edgeBounds;
    shape.characterId  = characterId;

    // set
    this.setCharacter(characterId, shape);
};

/**
 * @returns {{xMin: number, xMax: number, yMin: number, yMax: number}}
 */
SwfTag.prototype.rect = function ()
{
    // init
    this.bitio.byteAlign();

    var nBits = this.bitio.getUIBits(5);
    return {
        xMin: this.bitio.getSIBits(nBits),
        xMax: this.bitio.getSIBits(nBits),
        yMin: this.bitio.getSIBits(nBits),
        yMax: this.bitio.getSIBits(nBits)
    };
};

/**
 * @param   {number} tag_type
 * @returns {object}
 */
SwfTag.prototype.shapeWithStyle = function (tag_type)
{
    var fillStyles, lineStyles;
    switch (tag_type) {
        case 46:
        case 84:
            fillStyles = {fillStyleCount: 0, fillStyles: []};
            lineStyles = {lineStyleCount: 0, lineStyles: []};
            break;
        default:
            fillStyles = this.fillStyleArray(tag_type);
            lineStyles = this.lineStyleArray(tag_type);
            break;
    }

    var numBits      = this.bitio.getUI8();
    var NumFillBits  = numBits >> 4;
    var NumLineBits  = numBits & 0x0f;
    var ShapeRecords = this.shapeRecords(tag_type, {
        FillBits: NumFillBits,
        LineBits: NumLineBits
    });

    return {
        fillStyles:   fillStyles,
        lineStyles:   lineStyles,
        ShapeRecords: ShapeRecords
    };
};

/**
 * @param   {number} tag_type
 * @returns {{fillStyleCount: number, fillStyles: array}}
 */
SwfTag.prototype.fillStyleArray = function (tag_type)
{

    var fillStyleCount = this.bitio.getUI8()|0;
    if (tag_type > 2 && fillStyleCount === 0xff) {
        fillStyleCount = this.bitio.getUI16();
    }

    var fillStyles = [];

    var i = 0;
    while (i < fillStyleCount) {
        fillStyles[fillStyles.length] = this.fillStyle(tag_type);
        i = (i + 1)|0;
    }

    return {
        fillStyleCount: fillStyleCount,
        fillStyles:     fillStyles
    };
};

/**
 * @param   {number} tag_type
 * @returns {object}
 */
SwfTag.prototype.fillStyle = function (tag_type)
{
    var bitType = this.bitio.getUI8();

    var obj = {};
    obj.fillStyleType = bitType;

    switch (bitType) {
        case 0x00:
            switch (tag_type) {
                case 32:
                case 83:
                    obj.Color = this.rgba();
                    break;
                case 46:
                case 84:
                    obj.StartColor = this.rgba();
                    obj.EndColor   = this.rgba();
                    break;
                default:
                    obj.Color = this.rgb();
                    break;
            }
            break;
        case 0x10:
        case 0x12:
            switch (tag_type) {
                case 46:
                case 84:
                    obj.startGradientMatrix = this.matrix();
                    obj.endGradientMatrix   = this.matrix();
                    obj.gradient            = this.gradient(tag_type);
                    break;
                default:
                    obj.gradientMatrix = this.matrix();
                    obj.gradient       = this.gradient(tag_type);
                    break;
            }
            break;
        case 0x13:
            obj.gradientMatrix = this.matrix();
            obj.gradient       = this.focalGradient(tag_type);
            break;
        case 0x40:
        case 0x41:
        case 0x42:
        case 0x43:
            obj.bitmapId = this.bitio.getUI16()|0;
            switch (tag_type) {
                case 46:
                case 84:
                    obj.startBitmapMatrix = this.matrix();
                    obj.endBitmapMatrix   = this.matrix();
                    break;
                default:
                    obj.bitmapMatrix = this.matrix();
                    break;
            }
            break;
    }

    return obj;
};

/**
 * @return {{R: number, G: number, B: number, A: number}}
 */
SwfTag.prototype.rgb = function ()
{
    return {
        R: this.bitio.getUI8()|0,
        G: this.bitio.getUI8()|0,
        B: this.bitio.getUI8()|0,
        A: 1
    };
};

/**
 * @return {{R: number|*, G: number|*, B: number|*, A: number}}
 */
SwfTag.prototype.rgba = function ()
{
    return {
        R: this.bitio.getUI8(),
        G: this.bitio.getUI8(),
        B: this.bitio.getUI8(),
        A: this.bitio.getUI8() / 255
    };
};

/**
 * @returns {array}
 */
SwfTag.prototype.matrix = function ()
{
    // init
    this.bitio.byteAlign();

    var matrix = [1, 0, 0, 1, 0, 0];
    if (this.bitio.getUIBit()) {
        var nScaleBits = this.bitio.getUIBits(5);
        matrix[0]      = this.bitio.getSIBits(nScaleBits) / 0x10000;
        matrix[3]      = this.bitio.getSIBits(nScaleBits) / 0x10000;
    }

    if (this.bitio.getUIBit()) {
        var nRotateBits = this.bitio.getUIBits(5);
        matrix[1]       = this.bitio.getSIBits(nRotateBits) / 0x10000;
        matrix[2]       = this.bitio.getSIBits(nRotateBits) / 0x10000;
    }

    var nTranslateBits = this.bitio.getUIBits(5);

    matrix[4] = this.bitio.getSIBits(nTranslateBits);
    matrix[5] = this.bitio.getSIBits(nTranslateBits);

    return matrix;
};

/**
 * @param   {number} tag_type
 * @returns {{SpreadMode: number, InterpolationMode: number, GradientRecords: Array}}
 */
SwfTag.prototype.gradient = function (tag_type)
{
    var NumGradients;

    var SpreadMode        = 0;
    var InterpolationMode = 0;
    var GradientRecords   = [];

    // init
    this.bitio.byteAlign();

    switch (tag_type) {
        case 46:
        case 84:
            NumGradients = this.bitio.getUI8();
            break;
        default:
            SpreadMode        = this.bitio.getUIBits(2);
            InterpolationMode = this.bitio.getUIBits(2);
            NumGradients      = this.bitio.getUIBits(4);
            break;
    }

    var i = 0;
    while (i < NumGradients) {
        GradientRecords[GradientRecords.length] = this.gradientRecord(tag_type);
        i = (i + 1)|0;
    }

    return {
        SpreadMode:        SpreadMode,
        InterpolationMode: InterpolationMode,
        GradientRecords:   GradientRecords
    };
};

/**
 * @param  {number} tag_type
 * @return {object}
 */
SwfTag.prototype.gradientRecord = function (tag_type)
{
    switch (tag_type) {
        case 46:
        case 84:

            return {
                StartRatio: this.bitio.getUI8() / 255,
                StartColor: this.rgba(),
                EndRatio:   this.bitio.getUI8() / 255,
                EndColor:   this.rgba()
            };

        default:
            var Ratio = this.bitio.getUI8();
            var Color = (tag_type < 32) ? this.rgb() : this.rgba();

            return {
                Ratio: Ratio / 255,
                Color: Color
            };

    }
};

/**
 * @param  {number} tag_type
 * @return {{SpreadMode: number, InterpolationMode: number, GradientRecords: Array, FocalPoint: number}}
 */
SwfTag.prototype.focalGradient = function (tag_type)
{
    // init
    this.bitio.byteAlign();

    var SpreadMode        = this.bitio.getUIBits(2);
    var InterpolationMode = this.bitio.getUIBits(2);
    var numGradients      = this.bitio.getUIBits(4);
    var GradientRecords   = [];

    var i = 0;
    while (i < numGradients) {
        GradientRecords[GradientRecords.length] = this.gradientRecord(tag_type);
        i = (i + 1)|0;
    }

    var FocalPoint = this.bitio.getFloat16();

    return {
        SpreadMode:        SpreadMode,
        InterpolationMode: InterpolationMode,
        GradientRecords:   GradientRecords,
        FocalPoint:        FocalPoint
    };
};

/**
 * @param  {number} tag_type
 * @return {{lineStyleCount: number, lineStyles: Array}}
 */
SwfTag.prototype.lineStyleArray = function (tag_type)
{
    var lineStyleCount = this.bitio.getUI8()|0;
    if (tag_type > 2 && lineStyleCount === 0xff) {
        lineStyleCount = this.bitio.getUI16();
    }

    var lineStyles = [];
    var i = 0;
    while (i < lineStyleCount) {
        lineStyles[lineStyles.length] = this.lineStyles(tag_type);
        i = (i + 1)|0;
    }

    return {
        lineStyleCount: lineStyleCount,
        lineStyles:     lineStyles
    };
};

/**
 *
 * @param  {number} tag_type
 * @return {object}
 */
SwfTag.prototype.lineStyles = function (tag_type)
{
    var obj = {};
    obj.fillStyleType = 0;

    switch (tag_type) {
        case 46:
            obj = {
                StartWidth: this.bitio.getUI16(),
                EndWidth:   this.bitio.getUI16(),
                StartColor: this.rgba(),
                EndColor:   this.rgba()
            };
            break;
        case 84:

            obj.StartWidth       = this.bitio.getUI16();
            obj.EndWidth         = this.bitio.getUI16();
            obj.StartCapStyle    = this.bitio.getUIBits(2);
            obj.JoinStyle        = this.bitio.getUIBits(2);
            obj.HasFillFlag      = this.bitio.getUIBit();
            obj.NoHScaleFlag     = this.bitio.getUIBit();
            obj.NoVScaleFlag     = this.bitio.getUIBit();
            obj.PixelHintingFlag = this.bitio.getUIBit();

            this.bitio.getUIBits(5); // Reserved

            obj.NoClose     = this.bitio.getUIBit();
            obj.EndCapStyle = this.bitio.getUIBits(2);

            if (obj.JoinStyle === 2) {
                obj.MiterLimitFactor = this.bitio.getUI16();
            }

            if (obj.HasFillFlag) {
                obj.FillType = this.fillStyle(tag_type);
            } else {
                obj.StartColor = this.rgba();
                obj.EndColor   = this.rgba();
            }

            break;
        case 83: // DefineShape4
            obj.Width            = this.bitio.getUI16();
            obj.StartCapStyle    = this.bitio.getUIBits(2);
            obj.JoinStyle        = this.bitio.getUIBits(2);
            obj.HasFillFlag      = this.bitio.getUIBit();
            obj.NoHScaleFlag     = this.bitio.getUIBit();
            obj.NoVScaleFlag     = this.bitio.getUIBit();
            obj.PixelHintingFlag = this.bitio.getUIBit();

            this.bitio.getUIBits(5); // Reserved

            obj.NoClose          = this.bitio.getUIBit();
            obj.EndCapStyle      = this.bitio.getUIBits(2);

            if (obj.JoinStyle === 2) {
                obj.MiterLimitFactor = this.bitio.getUI16();
            }

            if (obj.HasFillFlag) {
                obj.FillType = this.fillStyle(tag_type);
            } else {
                obj.Color = this.rgba();
            }

            break;
        case 32: // DefineShape3
            obj.Width = this.bitio.getUI16();
            obj.Color = this.rgba();
            break;
        default:  // DefineShape1or2
            obj.Width = this.bitio.getUI16();
            obj.Color = this.rgb();
            break;
    }

    return obj;
};

/**
 * @param  {number} tag_type
 * @param  {object} current_num_bits
 * @return {array}
 */
SwfTag.prototype.shapeRecords = function (tag_type, current_num_bits)
{
    // reset
    this.currentPosition = {x: 0, y: 0};

    var shapeRecords = [];
    while (true) {

        // reset
        var shape = 0;

        var first6Bits = this.bitio.getUIBits(6);
        if (first6Bits & 0x20) {
            var numBits = first6Bits & 0x0f;
            if (first6Bits & 0x10) {
                shape = this.straightEdgeRecord(tag_type, numBits);
            } else {
                shape = this.curvedEdgeRecord(tag_type, numBits);
            }
        } else if (first6Bits) {
            shape = this.styleChangeRecord(tag_type, first6Bits, current_num_bits);
        }

        shapeRecords[shapeRecords.length] = shape;

        // end flag
        if (shape === 0) {
            this.bitio.byteAlign();
            break;
        }
    }

    return shapeRecords;
};

/**
 * @param  {number} tag_type
 * @param  {number} num_bits
 * @return {{ControlX: number, ControlY: number, AnchorX: number, AnchorY: number, isCurved: boolean, isChange: boolean}}
 */
SwfTag.prototype.straightEdgeRecord = function (tag_type, num_bits)
{
    var deltaX = 0;
    var deltaY = 0;

    if (this.bitio.getUIBit()) { // GeneralLineFlag

        deltaX = this.bitio.getSIBits(num_bits + 2);
        deltaY = this.bitio.getSIBits(num_bits + 2);

    } else {

        if (this.bitio.getUIBit()) { // VertLineFlag
            deltaY = this.bitio.getSIBits(num_bits + 2);
        } else {
            deltaX = this.bitio.getSIBits(num_bits + 2);
        }

    }

    var AnchorX = deltaX;
    var AnchorY = deltaY;

    switch (tag_type) {
        case 46:
        case 84:
            break;
        default:

            AnchorX = this.currentPosition.x + deltaX;
            AnchorY = this.currentPosition.y + deltaY;

            // position
            this.currentPosition.x = AnchorX;
            this.currentPosition.y = AnchorY;

            break;
    }

    return {
        ControlX: 0,
        ControlY: 0,
        AnchorX:  AnchorX,
        AnchorY:  AnchorY,
        isCurved: false,
        isChange: false
    };
};

/**
 * @param  {number} tag_type
 * @param  {number} num_bits
 * @return {{ControlX: number, ControlY: number, AnchorX: number, AnchorY: number, isCurved: boolean, isChange: boolean}}
 */
SwfTag.prototype.curvedEdgeRecord = function (tag_type, num_bits)
{

    var controlDeltaX = this.bitio.getSIBits(num_bits + 2);
    var controlDeltaY = this.bitio.getSIBits(num_bits + 2);
    var anchorDeltaX  = this.bitio.getSIBits(num_bits + 2);
    var anchorDeltaY  = this.bitio.getSIBits(num_bits + 2);

    var ControlX = controlDeltaX;
    var ControlY = controlDeltaY;
    var AnchorX  = anchorDeltaX;
    var AnchorY  = anchorDeltaY;

    switch (tag_type) {
        case 46:
        case 84:
            break;
        default:

            ControlX = this.currentPosition.x + controlDeltaX;
            ControlY = this.currentPosition.y + controlDeltaY;
            AnchorX  = ControlX + anchorDeltaX;
            AnchorY  = ControlY + anchorDeltaY;

            // position
            this.currentPosition.x = AnchorX;
            this.currentPosition.y = AnchorY;

            break;
    }

    return {
        ControlX: ControlX,
        ControlY: ControlY,
        AnchorX:  AnchorX,
        AnchorY:  AnchorY,
        isCurved: true,
        isChange: false
    };
};

/**
 * @param  {number} tag_type
 * @param  {number} change_flag
 * @param  {object} current_num_bits
 * @return {{isChange: boolean, FillStyle0: number, FillStyle1: number, LineStyle: number}}
 */
SwfTag.prototype.styleChangeRecord = function (tag_type, change_flag, current_num_bits)
{
    // init
    var obj = {
        isChange:   true,
        FillStyle0: 0,
        FillStyle1: 0,
        LineStyle:  0
    };

    obj.StateNewStyles  = (change_flag >> 4) & 1;
    obj.StateLineStyle  = (change_flag >> 3) & 1;
    obj.StateFillStyle1 = (change_flag >> 2) & 1;
    obj.StateFillStyle0 = (change_flag >> 1) & 1;
    obj.StateMoveTo     = change_flag & 1;

    if (obj.StateMoveTo) {
        var moveBits = this.bitio.getUIBits(5);
        obj.MoveX    = this.bitio.getSIBits(moveBits);
        obj.MoveY    = this.bitio.getSIBits(moveBits);

        // position
        this.currentPosition.x = obj.MoveX;
        this.currentPosition.y = obj.MoveY;
    }

    if (obj.StateFillStyle0) {
        obj.FillStyle0 = this.bitio.getUIBits(current_num_bits.FillBits);
    }

    if (obj.StateFillStyle1) {
        obj.FillStyle1 = this.bitio.getUIBits(current_num_bits.FillBits);
    }

    if (obj.StateLineStyle) {
        obj.LineStyle = this.bitio.getUIBits(current_num_bits.LineBits);
    }

    if (obj.StateNewStyles) {
        obj.FillStyles = this.fillStyleArray(tag_type);
        obj.LineStyles = this.lineStyleArray(tag_type);

        var numBits = this.bitio.getUI8();
        current_num_bits.FillBits = obj.NumFillBits = numBits >> 4;
        current_num_bits.LineBits = obj.NumLineBits = numBits & 0x0f;
    }

    return obj;
};

/**
 * TODO
 * @param {number} tag_type
 * @param {number} length
 */
SwfTag.prototype.parseDefineBitsLossLess = function (tag_type, length)
{
    var stage = this.getStage();

    var startOffset    = this.bitio.byte_offset;
    var CharacterId    = this.bitio.getUI16();
    var format         = this.bitio.getUI8();
    var width          = this.bitio.getUI16();
    var height         = this.bitio.getUI16();
    var isAlpha        = (tag_type === 36);
    var colorTableSize = (format === 3) ? this.bitio.getUI8() + 1 : 0;

    // unCompress
    var sub        = this.bitio.byte_offset - startOffset;
    var compressed = this.bitio.getData(length - sub);
    var data       = this.bitio.unzip(compressed, false);

    // canvas
    var canvas    = this.$cacheStore.getCanvas();
    canvas.width  = width;
    canvas.height = height;

    var imageContext = canvas.getContext("2d");
    var imgData      = imageContext.createImageData(width, height);
    var pxData       = imgData.data;

    var idx   = 0;
    var pxIdx = 0;
    var x     = width|0;
    var y     = height|0;
    if (format === 5 && !isAlpha) {

        idx   = 0;
        pxIdx = 0;
        y = height|0;
        while (y) {
            y = (y - 1)|0;

            x = width|0;
            while (x) {
                x = (x - 1)|0;

                idx = (idx + 1)|0;
                pxData[pxIdx] = data[idx];
                idx   = (idx   + 1)|0;
                pxIdx = (pxIdx + 1)|0;

                pxData[pxIdx] = data[idx];
                idx   = (idx   + 1)|0;
                pxIdx = (pxIdx + 1)|0;

                pxData[pxIdx] = data[idx];
                idx   = (idx   + 1)|0;
                pxIdx = (pxIdx + 1)|0;

                pxData[pxIdx] = 255;
                pxIdx = (pxIdx + 1)|0;
            }
        }
    } else {

        var bpp   = (isAlpha) ? 4 : 3;
        var cmIdx = (colorTableSize * bpp)|0;

        var pad = 0;
        if (colorTableSize) {
            pad = (((width + 3) & ~3) - width)|0;
        }

        var isAlphaBug = this.$isAlphaBug;

        y = height|0;
        while (y) {
            y = (y - 1)|0;

            x = width|0;
            while (x) {
                x = (x - 1)|0;

                idx = (colorTableSize) ? (data[cmIdx++] * bpp)|0 : (cmIdx++ * bpp)|0;

                if (!isAlpha) {
                    pxData[pxIdx] = data[idx];
                    pxIdx         = (pxIdx + 1)|0;
                    idx           = (idx   + 1)|0;
                    pxIdx         = (pxIdx + 1)|0;

                    pxData[pxIdx] = data[idx];
                    pxIdx         = (pxIdx + 1)|0;
                    idx           = (idx   + 1)|0;
                    pxIdx         = (pxIdx + 1)|0;

                    pxData[pxIdx] = data[idx];
                    pxIdx         = (pxIdx + 1)|0;
                    idx           = (idx   + 1)|0;
                    pxIdx         = (pxIdx + 1)|0;

                    pxData[pxIdx] = 255;
                    idx           = (idx   + 1)|0;
                    pxIdx         = (pxIdx + 1)|0;
                } else {
                    var alpha = (format === 3) ? data[idx + 3]|0 : data[idx]|0;
                    idx = (idx + 1)|0;

                    if (!isAlphaBug) {

                        pxData[pxIdx] = (data[idx] * 255 / alpha)|0;
                        idx           = (idx   + 1)|0;
                        pxIdx         = (pxIdx + 1)|0;

                        pxData[pxIdx] = (data[idx] * 255 / alpha)|0;
                        idx           = (idx   + 1)|0;
                        pxIdx         = (pxIdx + 1)|0;

                        pxData[pxIdx] = (data[idx] * 255 / alpha)|0;
                        idx           = (idx   + 1)|0;
                        pxIdx         = (pxIdx + 1)|0;

                    } else {

                        pxData[pxIdx] = data[idx]|0;
                        idx           = (idx   + 1)|0;
                        pxIdx         = (pxIdx + 1)|0;

                        pxData[pxIdx] = data[idx]|0;
                        idx           = (idx   + 1)|0;
                        pxIdx         = (pxIdx + 1)|0;

                        pxData[pxIdx] = data[idx]|0;
                        idx           = (idx   + 1)|0;
                        pxIdx         = (pxIdx + 1)|0;

                    }

                    pxData[pxIdx] = alpha|0;
                    pxIdx         = (pxIdx + 1)|0;

                    if (format === 3) {
                        idx = (idx + 1)|0;
                    }
                }
            }

            cmIdx = (cmIdx + pad)|0;
        }
    }

    imageContext.putImageData(imgData, 0, 0);
    this.setCharacter(CharacterId, imageContext);
};

/**
 * TODO
 * @returns void
 */
SwfTag.prototype.parseExportAssets = function ()
{
    var stage = this.getStage();
    var count = this.bitio.getUI16();

    var exportAssets = stage.exportAssets;
    var packages     = stage.packages;

    var idx = 0;
    while (idx < count) {
        var id   = this.bitio.getUI16();
        var name = this.bitio.getDataUntil("\0");
        if (name.substr(0, 10) === "__Packages") {
            packages[id] = 1;
        }
        exportAssets[name] = id;

        idx = 0 | idx + 1;
    }

    stage.exportAssets = exportAssets;
};

/**
 * @param   {number} length
 * @returns {string}
 */
SwfTag.prototype.parseJPEGTables = function (length)
{
    return this.bitio.getData(length);
};

/**
 * TODO
 * @param   {number} tag_type
 * @param   {number} length
 * @param   {string} jpeg_tables
 * @returns void
 */
SwfTag.prototype.parseDefineBits = function (tag_type, length, jpeg_tables)
{
    var bitio = this.bitio;

    var startOffset = bitio.byte_offset;
    var CharacterId = bitio.getUI16();

    var sub = (bitio.byte_offset - startOffset)|0;

    var ImageDataLen = (length - sub)|0;
    switch (tag_type) {
        case 35:
        case 90:
            ImageDataLen = bitio.getUI32();
            break;
        default:
            break;
    }

    if (tag_type === 90) {
        var DeblockParam = bitio.getUI16();
        console.log("TODO DeblockParam", DeblockParam);
    }

    var JPEGData = bitio.getData(ImageDataLen);

    var BitmapAlphaData = 0;
    switch (tag_type) {
        case 35:
        case 90:
            BitmapAlphaData = bitio.getData(length - sub - ImageDataLen);
            break;
        default:
            break;
    }
    bitio.byte_offset = (startOffset + length)|0;

    // render
    var stage = this.getStage();
    stage.imgUnLoadCount++;

    var cacheStore = this.$cacheStore;


    var image = this.$document.createElement("img");

    image.addEventListener("load", function()
    {
        var width  = this.width;
        var height = this.height;

        var canvas       = cacheStore.getCanvas();
        canvas.width     = width;
        canvas.height    = height;
        var imageContext = canvas.getContext("2d");
        imageContext.drawImage(this, 0, 0, width, height);

        if (BitmapAlphaData) {
            var data    = bitio.unzip(BitmapAlphaData, false);
            var imgData = imageContext.getImageData(0, 0, width, height);
            var pxData  = imgData.data;
            var pxIdx   = 3;

            var len = width * height;
            var i = 0;
            while (i < len) {
                pxData[pxIdx] = data[i];
                pxIdx = 0 | pxIdx + 4;
                i = 0 | i + 1;
            }

            imageContext.putImageData(imgData, 0, 0);
        }

        stage.setCharacter(CharacterId, imageContext);
        stage.imgUnLoadCount--;
    });

    if (jpeg_tables !== null && jpeg_tables.length > 4) {
        var margeData = [];

        var len = (jpeg_tables.length - 2)|0;
        var idx = 0;
        while (idx < len) {
            margeData[margeData.length] = jpeg_tables[idx];
            idx = (idx + 1)|0;
        }

        len = JPEGData.length|0;
        idx = 2;
        while (idx < len) {
            margeData[margeData.length] = JPEGData[idx];
            idx = (idx + 1)|0;
        }

        JPEGData = margeData;
    }

    image.src = "data:image/jpeg;base64," +
        this.base64encode(this.parseJpegData(JPEGData));

    // for android bug
    if (this.$isAndroid) {
        var timer = this.$setTimeout;
        timer(function () {}, 0);
    }
};

/**
 * @param  {array}  jpeg_data
 * @return {string}
 */
SwfTag.prototype.parseJpegData = function (jpeg_data)
{
    var i      = 0;
    var idx    = 0;
    var str    = "";
    var length = jpeg_data.length|0;

    // erroneous
    if (jpeg_data[0] === 0xFF && jpeg_data[1] === 0xD9 && jpeg_data[2] === 0xFF && jpeg_data[3] === 0xD8) {
        i = 4;
        while (i < length) {
            str += this.$fromCharCode(jpeg_data[i]);
            i = (i + 1)|0;
        }
    } else if (jpeg_data[0] === 0xFF && jpeg_data[1] === 0xD8) {
        idx = 0;
        i   = 2;
        while (idx < i) {
            str += this.$fromCharCode(jpeg_data[idx]);
            idx = (idx + 1)|0;
        }

        while (i < length) {
            if (jpeg_data[i] === 0xFF) {
                if (jpeg_data[i + 1] === 0xD9 && jpeg_data[i + 2] === 0xFF && jpeg_data[i + 3] === 0xD8) {

                    i = (i + 4)|0;

                    idx = i;
                    while (idx < length) {
                        str += this.$fromCharCode(jpeg_data[idx]);
                        idx = (idx + 1)|0;
                    }

                    break;
                } else if (jpeg_data[i + 1] === 0xDA) {

                    idx = i;
                    while (idx < length) {
                        str += this.$fromCharCode(jpeg_data[idx]);
                        idx = (idx + 1)|0;
                    }

                    break;
                } else {
                    var segmentLength = ((jpeg_data[i + 2] << 8) + jpeg_data[i + 3] + i + 2)|0;

                    idx = i;
                    while (idx < segmentLength) {
                        str += this.$fromCharCode(jpeg_data[idx]);
                        idx = (idx + 1)|0;
                    }

                    i = (i + (segmentLength - i))|0;
                }
            }
        }
    }

    return str;
};

/**
 * @param  {string} data
 * @return {string}
 */
SwfTag.prototype.base64encode = function (data)
{
    if (this.$canBtoa) {
        return window.btoa(data);
    }

    var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    var out    = [];
    var i      = 0;
    var length = data.length;
    while (i < length) {
        var c1 = data.charCodeAt(i) & 0xff;
        i = (i + 1)|0;

        if (i === length) {
            out[out.length] = base64EncodeChars.charAt(c1 >> 2);
            out[out.length] = base64EncodeChars.charAt((c1 & 0x3) << 4);
            out[out.length] = "==";
            break;
        }

        var c2 = data.charCodeAt(i);
        i = (i + 1)|0;

        if (i === length) {
            out[out.length] = base64EncodeChars.charAt(c1 >> 2);
            out[out.length] = base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out[out.length] = base64EncodeChars.charAt((c2 & 0xF) << 2);
            out[out.length] = "=";
            break;
        }

        var c3 = data.charCodeAt(i);
        i = (i + 1)|0;

        out[out.length] = base64EncodeChars.charAt(c1 >> 2);
        out[out.length] = base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
        out[out.length] = base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
        out[out.length] = base64EncodeChars.charAt(c3 & 0x3F);
    }

    return out.join("");
};

/**
 * TODO
 * @param   {number} tag_type
 * @param   {number} length
 * @returns void
 */
SwfTag.prototype.parseDefineFont = function (tag_type, length)
{
    var stage = this.getStage();

    var endOffset = (this.bitio.byte_offset + length)|0;

    var i   = 0;
    var len = 0;

    var obj     = {};
    obj.tagType = tag_type;
    obj.FontId  = this.bitio.getUI16();

    var numGlyphs = 0;
    switch (tag_type) {
        case 48:
        case 75:
            var fontFlags            = this.bitio.getUI8();
            obj.FontFlagsHasLayout   = (fontFlags >>> 7) & 1;
            obj.FontFlagsShiftJIS    = (fontFlags >>> 6) & 1;
            obj.FontFlagsSmallText   = (fontFlags >>> 5) & 1;
            obj.FontFlagsANSI        = (fontFlags >>> 4) & 1;
            obj.FontFlagsWideOffsets = (fontFlags >>> 3) & 1;
            obj.FontFlagsWideCodes   = (fontFlags >>> 2) & 1;
            obj.FontFlagsItalic      = (fontFlags >>> 1) & 1;
            obj.FontFlagsBold        = (fontFlags) & 1;

            this.bitio.byteAlign();

            obj.LanguageCode = this.bitio.getUI8();
            obj.FontNameLen  = this.bitio.getUI8();
            if (obj.FontNameLen) {
                var startOffset = this.bitio.byte_offset|0;
                var data        = this.bitio.getData(obj.FontNameLen);


                len = obj.FontNameLen|0;
                i   = 0;

                var str = "";
                while (i < len) {
                    if (data[i] > 127) {
                        i = (i + 1)|0;
                        continue;
                    }

                    str += this.$fromCharCode(data[i]);
                    i = (i + 1)|0;
                }

                var fontName;
                if (obj.FontFlagsShiftJIS || obj.LanguageCode === 2) {
                    fontName = this.bitio.decodeToShiftJis(str);
                } else {
                    fontName = decodeURIComponent(str);
                }

                obj.FontName = this.getFontName(fontName);
                this.bitio.byte_offset = (startOffset + obj.FontNameLen)|0;
            }

            numGlyphs     = this.bitio.getUI16();
            obj.NumGlyphs = numGlyphs;
            break;
        default:
            break;
    }


    // offset
    var offset = this.bitio.byte_offset|0;
    if (tag_type === 10) {
        numGlyphs = this.bitio.getUI16();
    }

    if (numGlyphs) {
        var OffsetTable = [];
        if (tag_type === 10) {
            OffsetTable[0] = numGlyphs;
            numGlyphs /= 2;
            numGlyphs -= 1;
        }

        if (obj.FontFlagsWideOffsets) {
            i = 0;
            while (i < numGlyphs) {
                OffsetTable[OffsetTable.length] = this.bitio.getUI32();
                i = (i + 1)|0;
            }

            if (tag_type !== 10) {
                obj.CodeTableOffset = this.bitio.getUI32();
            }
        } else {
            i = 0;
            while (i < numGlyphs) {
                OffsetTable[OffsetTable.length] = this.bitio.getUI16();
                i = (i + 1)|0;
            }

            if (tag_type !== 10) {
                obj.CodeTableOffset = this.bitio.getUI16();
            }
        }

        // Shape
        var GlyphShapeTable = [];
        if (tag_type === 10) {
            numGlyphs += 1;
        }

        i = 0;
        while (i < numGlyphs) {
            this.bitio.setOffset(OffsetTable[i] + offset, 0);

            var numBits     = this.bitio.getUI8();
            var NumFillBits = numBits >> 4;
            var NumLineBits = numBits & 0x0f;

            var currentNumBits = {
                FillBits: NumFillBits,
                LineBits: NumLineBits
            };

            var shapes = {};
            shapes.ShapeRecords = this.shapeRecords(tag_type, currentNumBits);

            shapes.lineStyles = {
                lineStyles: [{
                    Color:         {R: 0, G: 0, B: 0, A: 1},
                    lineStyleType: 0
                }]
            };

            shapes.fillStyles = {
                fillStyles: [{
                    Color:         {R: 0, G: 0, B: 0, A: 1},
                    fillStyleType: 0
                }]
            };

            GlyphShapeTable[GlyphShapeTable.length] = shapes;

            i = (i + 1)|0;
        }
        obj.GlyphShapeTable = GlyphShapeTable;

        switch (tag_type) {
            case 48:
            case 75:

                this.bitio.setOffset(obj.CodeTableOffset + offset, 0);

                var CodeTable = [];
                if (obj.FontFlagsWideCodes) {
                    i = 0;
                    while (i < numGlyphs) {
                        CodeTable[CodeTable.length] = this.bitio.getUI16();
                        i = (i + 1)|0;
                    }
                } else {
                    i = 0;
                    while (i < numGlyphs) {
                        CodeTable[CodeTable.length] = this.bitio.getUI8();
                        i = (i + 1)|0;
                    }
                }
                obj.CodeTable = CodeTable;

                if (obj.FontFlagsHasLayout) {
                    obj.FontAscent  = this.bitio.getUI16();
                    obj.FontDescent = this.bitio.getUI16();
                    obj.FontLeading = this.bitio.getUI16();

                    var FontAdvanceTable = [];
                    i = 0;
                    while (i < numGlyphs) {
                        FontAdvanceTable[FontAdvanceTable.length] = this.bitio.getUI16();
                        i = (i + 1)|0;

                    }
                    obj.FontAdvanceTable = FontAdvanceTable;

                    var FontBoundsTable = [];
                    i = 0;
                    while (i < numGlyphs) {
                        FontBoundsTable[FontBoundsTable.length] = this.rect();
                        i = (i + 1)|0;
                    }
                    obj.FontBoundsTable = FontBoundsTable;

                    if (tag_type === 75) {
                        var count         = this.bitio.getUI16();
                        obj.KerningCount  = count;

                        i = 0;
                        var kRecord = [];
                        var flag = obj.FontFlagsWideCodes;
                        while (i < count) {
                            var FontKerningCode1 = (flag) ? this.bitio.getUI16() : this.bitio.getUI8();
                            var FontKerningCode2 = (flag) ? this.bitio.getUI16() : this.bitio.getUI8();
                            var FontKerningAdjustment = this.bitio.getSIBits(16);

                            kRecord[kRecord.length] = {
                                FontKerningCode1:      FontKerningCode1,
                                FontKerningCode2:      FontKerningCode2,
                                FontKerningAdjustment: FontKerningAdjustment
                            };
                            i = (i + 1)|0;
                        }

                        obj.KerningRecord = kRecord;
                    }
                }
                break;
            default:
                break;
        }

    }

    this.bitio.byte_offset = endOffset|0;

    stage.setCharacter(obj.FontId, obj);
    stage.fonts[obj.FontName] = obj;
};

/**
 * @param   {number} tag_type
 * @param   {number} length
 * @returns void
 */
SwfTag.prototype.parseDefineFontInfo = function (tag_type, length)
{
    var endOffset = (this.bitio.byte_offset + length)|0;

    var obj = {};
    obj.tagType = tag_type;
    obj.FontId  = this.bitio.getUI16();

    var len  = this.bitio.getUI8();
    var data = this.bitio.getData(len);
    var str  = "";
    var i    = 0;
    while (i < len) {
        if (data[i] > 127) {
            continue;
        }

        str += this.$fromCharCode(data[i]);

        i = (i + 1)|0;
    }

    obj.FontFlagsReserved  = this.bitio.getUIBits(2);
    obj.FontFlagsSmallText = this.bitio.getUIBits(1);
    obj.FontFlagsShiftJIS  = this.bitio.getUIBits(1);
    obj.FontFlagsANSI      = this.bitio.getUIBits(1);
    obj.FontFlagsItalic    = this.bitio.getUIBits(1);
    obj.FontFlagsBold      = this.bitio.getUIBits(1);
    obj.FontFlagsWideCodes = this.bitio.getUIBits(1);
    if (tag_type === 62) {
        obj.LanguageCode = this.bitio.getUI8();
    }

    var fontName;
    if (obj.FontFlagsShiftJIS || obj.LanguageCode === 2) {
        fontName = this.bitio.decodeToShiftJis(str);
    } else {
        fontName = decodeURIComponent(str);
    }
    obj.FontName = this.getFontName(fontName);

    this.bitio.byteAlign();

    var CodeTable = [];
    if (obj.FontFlagsWideCodes || tag_type === 62) {
        while (this.bitio.byte_offset < endOffset) {
            CodeTable[CodeTable.length] = this.bitio.getUI16();
        }
    } else {
        while (this.bitio.byte_offset < endOffset) {
            CodeTable[CodeTable.length] = this.bitio.getUI8();
        }
    }
    obj.CodeTable = CodeTable;
};

/**
 * @param   {string} font_name
 * @returns {string}
 */
SwfTag.prototype.getFontName = function (font_name)
{
    var length = font_name.length|0;

    var str = font_name.substr(length - 1);
    if (str.charCodeAt(0) === 0) {
        font_name = font_name.slice(0, -1);
    }

    switch (font_name) {
        case "_sans":
            return "sans-serif";
        case "_serif":
            return "serif";
        case "_typewriter":
            return "monospace";
        default:
            var ander = font_name.substr(0, 1);
            if (ander === "_") {
                return "sans-serif";
            }
            return font_name;
    }
};

/**
 * @returns void
 */
SwfTag.prototype.parseDefineFontName = function ()
{
    this.bitio.getUI16(); // FontId
    this.bitio.getDataUntil("\0"); // FontName
    this.bitio.getDataUntil("\0"); // FontCopyright
};

/**
 * @param   {number} tag_type
 * @returns void
 */
SwfTag.prototype.parseDefineText = function (tag_type)
{

    var characterId = this.bitio.getUI16();

    var obj         = {};
    obj.tagType     = tag_type;
    obj.bounds      = this.rect();
    obj.matrix      = this.matrix();

    var GlyphBits   = this.bitio.getUI8();
    var AdvanceBits = this.bitio.getUI8();
    obj.textRecords = this.getTextRecords(tag_type, GlyphBits, AdvanceBits);

    this.setCharacter(characterId, obj);
};

/**
 * @param   {number} tag_type
 * @param   {number} glyph_bits
 * @param   {number} advance_bits
 * @returns {Array}
 */
SwfTag.prototype.getTextRecords = function (tag_type, glyph_bits, advance_bits)
{
    var records = [];

    while (this.bitio.getUI8() !== 0) {

        this.bitio.incrementOffset(-1, 0);

        var obj                 = {};
        obj.TextRecordType       = this.bitio.getUIBits(1);
        obj.StyleFlagsReserved   = this.bitio.getUIBits(3);
        obj.StyleFlagsHasFont    = this.bitio.getUIBits(1);
        obj.StyleFlagsHasColor   = this.bitio.getUIBits(1);
        obj.StyleFlagsHasYOffset = this.bitio.getUIBits(1);
        obj.StyleFlagsHasXOffset = this.bitio.getUIBits(1);

        if (obj.StyleFlagsHasFont) {
            obj.FontId = this.bitio.getUI16();
        }

        if (obj.StyleFlagsHasColor) {
            if (tag_type === 11) {
                obj.TextColor = this.rgb();
            } else {
                obj.TextColor = this.rgba();
            }
        }

        if (obj.StyleFlagsHasXOffset) {
            obj.XOffset = this.bitio.getUI16();
        }

        if (obj.StyleFlagsHasYOffset) {
            obj.YOffset = this.bitio.getUI16();
        }

        if (obj.StyleFlagsHasFont) {
            obj.TextHeight = this.bitio.getUI16();
        }

        obj.GlyphCount   = this.bitio.getUI8();
        obj.GlyphEntries = this.getGlyphEntries(obj.GlyphCount, glyph_bits, advance_bits);

        records[records.length] = obj;
    }

    return records;
};

/**
 * @param   {number} count
 * @param   {number} glyph_bits
 * @param   {number} advance_bits
 * @returns {Array}
 */
SwfTag.prototype.getGlyphEntries = function (count, glyph_bits, advance_bits)
{
    var i = 0;

    var entries = [];
    while (i < count) {
        entries[entries.length] = {
            GlyphIndex:   this.bitio.getUIBits(glyph_bits),
            GlyphAdvance: this.bitio.getSIBits(advance_bits)
        };

        i = (i + 1)|0;
    }

    return entries;
};

/**
 * @param   {number} tag_type
 * @returns void
 */
SwfTag.prototype.parseDefineEditText = function (tag_type)
{
    var obj = {};
    obj.CharacterId = this.bitio.getUI16();

    var bounds = this.rect();

    var flag1        = this.bitio.getUI8();
    obj.HasText      = (flag1 >>> 7) & 1;
    obj.WordWrap     = (flag1 >>> 6) & 1;
    obj.Multiline    = (flag1 >>> 5) & 1;
    obj.Password     = (flag1 >>> 4) & 1;
    obj.ReadOnly     = (flag1 >>> 3) & 1;
    obj.HasTextColor = (flag1 >>> 2) & 1;
    obj.HasMaxLength = (flag1 >>> 1) & 1;
    obj.HasFont      = flag1 & 1;

    var flag2        = this.bitio.getUI8();
    obj.HasFontClass = (flag2 >>> 7) & 1;
    obj.AutoSize     = (flag2 >>> 6) & 1;
    obj.HasLayout    = (flag2 >>> 5) & 1;
    obj.NoSelect     = (flag2 >>> 4) & 1;
    obj.Border       = (flag2 >>> 3) & 1;
    obj.WasStatic    = (flag2 >>> 2) & 1;
    obj.HTML         = (flag2 >>> 1) & 1;
    obj.UseOutlines  = flag2 & 1;

    var isJis = 0;
    if (obj.HasFont) {
        obj.FontID   = this.bitio.getUI16();
        var fontData = this.getCharacter(obj.FontID);
        isJis = (fontData.FontFlagsShiftJIS) ? 1 : 0;

        if (obj.HasFontClass) {
            obj.FontClass = this.bitio.getDataUntil("\0");
        }
        obj.FontHeight = this.bitio.getUI16();
    }

    if (obj.HasTextColor) {
        obj.TextColor = this.rgba();
    }

    if (obj.HasMaxLength) {
        obj.MaxLength = this.bitio.getUI16();
    }

    if (obj.HasLayout) {
        obj.Align       = this.bitio.getUI8();
        obj.LeftMargin  = this.bitio.getUI16();
        obj.RightMargin = this.bitio.getUI16();
        obj.Indent      = this.bitio.getUI16();
        obj.Leading     = this.bitio.getUI16();
    }

    var VariableName = this.bitio.getDataUntil("\0", isJis) + "";
    obj.VariableName = (VariableName === "") ? null : VariableName;
    obj.InitialText  = "";
    if (obj.HasText) {
        var text = this.bitio.getDataUntil("\0", isJis);
        if (obj.HTML) {
            if (text.indexOf("<sbr />") !== -1) {
                text = text.replace(new RegExp("<sbr />", "gi"), "\n");
            }

            if (text.indexOf("<b>") !== -1) {
                text = text.replace(new RegExp("<b>", "gi"), "");
                text = text.replace(new RegExp("</b>", "gi"), "");
            }

            var span       = this.$document.createElement("span");
            span.innerHTML = text;

            var tags    = span.getElementsByTagName("p");
            var length  = 0 | tags.length;
            var tagData = [];

            var i = 0;
            while (i < length) {
                tagData[i] = tags[i];
                i = (i + 1)|0;
            }

            obj.InitialText = tagData;
        } else {
            obj.InitialText = text;
        }
    }

    this.setCharacter(obj.CharacterId, {
        data:    obj,
        bounds:  bounds,
        tagType: tag_type
    });
};

/**
 * TODO
 * @param {number} tag_type
 */
SwfTag.prototype.parseDefineMorphShape = function (tag_type)
{
    var stage = this.getStage();

    var obj = {};
    obj.tagType     = tag_type;
    obj.CharacterId = this.bitio.getUI16();
    obj.StartBounds = this.rect();
    obj.EndBounds   = this.rect();

    if (tag_type === 84) {
        obj.StartEdgeBounds = this.rect();
        obj.EndEdgeBounds   = this.rect();

        this.bitio.getUIBits(6); // Reserved

        obj.UsesNonScalingStrokes = this.bitio.getUIBits(1);
        obj.UsesScalingStrokes    = this.bitio.getUIBits(1);
    }

    var offset    = this.bitio.getUI32();
    var endOffset = this.bitio.byte_offset + offset;

    obj.MorphFillStyles = this.fillStyleArray(tag_type);
    obj.MorphLineStyles = this.lineStyleArray(tag_type);

    obj.StartEdges = this.shapeWithStyle(tag_type);
    if (this.bitio.byte_offset !== endOffset) {
        this.bitio.byte_offset = endOffset;
    }

    obj.EndEdges = this.shapeWithStyle(tag_type);

    // fill1 control
    var startPosition     = {x: 0, y: 0};
    var endPosition       = {x: 0, y: 0};
    var StartRecords      = obj.StartEdges.ShapeRecords;
    var EndRecords        = obj.EndEdges.ShapeRecords;
    var StartRecordLength = StartRecords.length;
    var EndRecordLength   = EndRecords.length;

    var length = this.$max(StartRecordLength, EndRecordLength);

    var i = 0;
    while (i < length) {
        var addRecode   = {};
        var StartRecord = StartRecords[i];
        var EndRecord   = EndRecords[i];
        if (!StartRecord && !EndRecord) {
            i = 0 | i + 1;
            continue;
        }

        if (!StartRecord.isChange && !EndRecord.isChange) {
            if (StartRecord.isCurved) {
                startPosition.x += StartRecord.ControlX + StartRecord.AnchorX;
                startPosition.y += StartRecord.ControlY + StartRecord.AnchorY;
            } else {
                startPosition.x += StartRecord.AnchorX;
                startPosition.y += StartRecord.AnchorY;
            }

            if (EndRecord.isCurved) {
                endPosition.x += EndRecord.ControlX + EndRecord.AnchorX;
                endPosition.y += EndRecord.ControlY + EndRecord.AnchorY;
            } else {
                endPosition.x += EndRecord.AnchorX;
                endPosition.y += EndRecord.AnchorY;
            }

            i = 0 | i + 1;
            continue;
        }

        if (StartRecord.isChange && !EndRecord.isChange) {
            addRecode = {
                FillStyle0:      StartRecord.FillStyle0,
                FillStyle1:      StartRecord.FillStyle1,
                LineStyle:       StartRecord.LineStyle,
                StateFillStyle0: StartRecord.StateFillStyle0,
                StateFillStyle1: StartRecord.StateFillStyle1,
                StateLineStyle:  StartRecord.StateLineStyle,
                StateMoveTo:     StartRecord.StateMoveTo,
                StateNewStyles:  StartRecord.StateNewStyles,
                isChange:        true
            };

            if (StartRecord.StateMoveTo) {
                addRecode.MoveX = endPosition.x;
                addRecode.MoveY = endPosition.y;
                startPosition.x = StartRecord.MoveX;
                startPosition.y = StartRecord.MoveY;
            }

            EndRecords.splice(i, 0, addRecode);
        } else if (!StartRecord.isChange && EndRecord.isChange) {
            addRecode = {
                FillStyle0:      EndRecord.FillStyle0,
                FillStyle1:      EndRecord.FillStyle1,
                LineStyle:       EndRecord.LineStyle,
                StateFillStyle0: EndRecord.StateFillStyle0,
                StateFillStyle1: EndRecord.StateFillStyle1,
                StateLineStyle:  EndRecord.StateLineStyle,
                StateMoveTo:     EndRecord.StateMoveTo,
                StateNewStyles:  EndRecord.StateNewStyles,
                isChange:        true
            };

            if (EndRecord.StateMoveTo) {
                addRecode.MoveX = startPosition.x;
                addRecode.MoveY = startPosition.y;
                endPosition.x   = EndRecord.MoveX;
                endPosition.y   = EndRecord.MoveY;
            }

            StartRecords.splice(i, 0, addRecode);
        } else {
            if (StartRecord.StateMoveTo) {
                startPosition.x = StartRecord.MoveX;
                startPosition.y = StartRecord.MoveY;
            }

            if (EndRecord.StateMoveTo) {
                endPosition.x = EndRecord.MoveX;
                endPosition.y = EndRecord.MoveY;
            }
        }

        i = 0 | i + 1;
    }


    var FillType  = 0;
    var FillStyle = 0;
    length = obj.StartEdges.ShapeRecords.length;
    i = 0;
    while (i < length) {
        var record = StartRecords[i];
        i = 0 | i + 1;

        if (!record.isChange) {
            continue;
        }

        if (record.StateFillStyle0) {
            FillStyle = record.FillStyle0;
        }

        if (FillStyle) {
            record.StateFillStyle0 = 1;
            record.StateFillStyle1 = 1;
            if (FillType) {
                record.FillStyle0 = 0;
                record.FillStyle1 = FillStyle;
            } else {
                record.FillStyle0 = FillStyle;
                record.FillStyle1 = 0;
            }
        } else {
            record.StateFillStyle1 = 1;
            record.FillStyle1 = 0;
        }

        FillType = (FillType) ? 0 : 1;
    }

    stage.setCharacter(obj.CharacterId, obj);
};

/**
 * TODO
 * @param char
 * @param ratio
 * @returns {{data: Array, bounds: {xMax: number, xMin: number, yMax: number, yMin: number}}}
 */
SwfTag.prototype.buildMorphShape = function (char, ratio)
{
    var per = (ratio === undefined) ? 0 : ratio / 65535;
    var startPer = 1 - per;
    var newShapeRecords = [];

    var morphLineStyles = char.MorphLineStyles;
    var lineStyles      = morphLineStyles.lineStyles;
    var lineStyleCount  = morphLineStyles.lineStyleCount;

    var morphFillStyles = char.MorphFillStyles;
    var fillStyles      = morphFillStyles.fillStyles;
    var fillStyleCount  = morphFillStyles.fillStyleCount;

    var StartEdges        = char.StartEdges;
    var StartShapeRecords = StartEdges.ShapeRecords;

    var EndEdges        = char.EndEdges;
    var EndShapeRecords = EndEdges.ShapeRecords;

    var shapes = {
        lineStyles: {
            lineStyleCount: lineStyleCount,
            lineStyles:     []
        },
        fillStyles: {
            fillStyleCount: fillStyleCount,
            fillStyles:     []
        },
        ShapeRecords: []
    };

    var position = {x: 0, y: 0};
    var len = StartShapeRecords.length;
    for (var i = 0; i < len; i++) {
        var StartRecord = StartShapeRecords[i];
        if (!StartRecord) {
            continue;
        }

        var newRecord = {};
        var EndRecord = EndShapeRecords[i];
        if (StartRecord.isChange) {
            var MoveX = 0;
            var MoveY = 0;

            if (StartRecord.StateMoveTo === 1) {
                MoveX      = StartRecord.MoveX * startPer + EndRecord.MoveX * per;
                MoveY      = StartRecord.MoveY * startPer + EndRecord.MoveY * per;
                position.x = MoveX;
                position.y = MoveY;
            }

            newRecord = {
                FillStyle0:       StartRecord.FillStyle0,
                FillStyle1:      StartRecord.FillStyle1,
                LineStyle:       StartRecord.LineStyle,
                MoveX:           MoveX,
                MoveY:           MoveY,
                StateFillStyle0: StartRecord.StateFillStyle0,
                StateFillStyle1: StartRecord.StateFillStyle1,
                StateLineStyle:  StartRecord.StateLineStyle,
                StateMoveTo:     StartRecord.StateMoveTo,
                StateNewStyles:  StartRecord.StateNewStyles,
                isChange:        true
            };
        } else {
            var AnchorX = 0;
            var AnchorY = 0;
            var ControlX = 0;
            var ControlY = 0;

            var startAnchorX = StartRecord.AnchorX;
            var startAnchorY = StartRecord.AnchorY;
            var endAnchorX   = EndRecord.AnchorX;
            var endAnchorY   = EndRecord.AnchorY;

            var startControlX = StartRecord.ControlX;
            var startControlY = StartRecord.ControlY;
            var endControlX   = EndRecord.ControlX;
            var endControlY   = EndRecord.ControlY;

            if (per > 0 && per < 1 && StartRecord.isCurved !== EndRecord.isCurved) {
                if (!StartRecord.isCurved) {
                    startAnchorX  = StartRecord.AnchorX / 2;
                    startAnchorY  = StartRecord.AnchorY / 2;
                    startControlX = startAnchorX;
                    startControlY = startAnchorY;
                }
                if (!EndRecord.isCurved) {
                    endAnchorX  = EndRecord.AnchorX / 2;
                    endAnchorY  = EndRecord.AnchorY / 2;
                    endControlX = endAnchorX;
                    endControlY = endAnchorY;
                }
            }

            ControlX = startControlX * startPer + endControlX * per + position.x;
            ControlY = startControlY * startPer + endControlY * per + position.y;
            AnchorX  = startAnchorX * startPer + endAnchorX * per + ControlX;
            AnchorY  = startAnchorY * startPer + endAnchorY * per + ControlY;

            position.x = AnchorX;
            position.y = AnchorY;

            newRecord = {
                AnchorX:  AnchorX,
                AnchorY:  AnchorY,
                ControlX: ControlX,
                ControlY: ControlY,
                isChange: false,
                isCurved: (StartRecord.isCurved || EndRecord.isCurved)
            };
        }

        newShapeRecords[i] = newRecord;
    }
    newShapeRecords[newShapeRecords.length] = 0;
    shapes.ShapeRecords = newShapeRecords;

    var EndColor;
    var StartColor;
    var color;
    for (i = 0; i < lineStyleCount; i++) {
        var lineStyle = lineStyles[i];
        EndColor      = lineStyle.EndColor;
        StartColor    = lineStyle.StartColor;
        color = {
            R: this.$floor(StartColor.R * startPer + EndColor.R * per),
            G: this.$floor(StartColor.G * startPer + EndColor.G * per),
            B: this.$floor(StartColor.B * startPer + EndColor.B * per),
            A: StartColor.A * startPer + EndColor.A * per
        };

        var EndWidth   = lineStyles[i].EndWidth;
        var StartWidth = lineStyles[i].StartWidth;
        shapes.lineStyles.lineStyles[i] = {
            Width: this.$floor(StartWidth * startPer + EndWidth * per),
            Color: color,
            fillStyleType: 0
        };
    }

    for (i = 0; i < fillStyleCount; i++) {
        var fillStyle     = fillStyles[i];
        var fillStyleType = fillStyle.fillStyleType;

        if (fillStyleType === 0x00) {
            EndColor   = fillStyle.EndColor;
            StartColor = fillStyle.StartColor;
            color = {
                R: this.$floor(StartColor.R * startPer + EndColor.R * per),
                G: this.$floor(StartColor.G * startPer + EndColor.G * per),
                B: this.$floor(StartColor.B * startPer + EndColor.B * per),
                A: StartColor.A * startPer + EndColor.A * per
            };

            shapes.fillStyles.fillStyles[i] = {
                Color:         color,
                fillStyleType: fillStyleType
            };
        } else {
            var EndGradientMatrix = fillStyle.endGradientMatrix;
            var StartGradientMatrix = fillStyle.startGradientMatrix;
            var matrix = [
                StartGradientMatrix[0] * startPer + EndGradientMatrix[0] * per,
                StartGradientMatrix[1] * startPer + EndGradientMatrix[1] * per,
                StartGradientMatrix[2] * startPer + EndGradientMatrix[2] * per,
                StartGradientMatrix[3] * startPer + EndGradientMatrix[3] * per,
                StartGradientMatrix[4] * startPer + EndGradientMatrix[4] * per,
                StartGradientMatrix[5] * startPer + EndGradientMatrix[5] * per
            ];

            var gRecords = [];
            var gradient = fillStyle.gradient;
            var GradientRecords = gradient.GradientRecords;
            var gLen = GradientRecords.length;
            for (var gIdx = 0; gIdx < gLen; gIdx++) {
                var gRecord = GradientRecords[gIdx];
                EndColor    = gRecord.EndColor;
                StartColor  = gRecord.StartColor;

                color = {
                    R: this.$floor(StartColor.R * startPer + EndColor.R * per),
                    G: this.$floor(StartColor.G * startPer + EndColor.G * per),
                    B: this.$floor(StartColor.B * startPer + EndColor.B * per),
                    A: StartColor.A * startPer + EndColor.A * per
                };

                gRecords[gIdx] = {
                    Color: color,
                    Ratio: gRecord.StartRatio * startPer + gRecord.EndRatio * per
                };
            }

            shapes.fillStyles.fillStyles[i] = {
                gradient:       {GradientRecords: gRecords},
                gradientMatrix: matrix,
                fillStyleType:  fillStyleType
            };
        }
    }

    var EndBounds   = char.EndBounds;
    var StartBounds = char.StartBounds;
    var bounds = {
        xMax: StartBounds.xMax * startPer + EndBounds.xMax * per,
        xMin: StartBounds.xMin * startPer + EndBounds.xMin * per,
        yMax: StartBounds.yMax * startPer + EndBounds.yMax * per,
        yMin: StartBounds.yMin * startPer + EndBounds.yMin * per
    };

    return {
        data: this.$vtc.convert(shapes, true),
        bounds: bounds
    };
};

/**
 * @return {{name: string, frame: number}}
 */
SwfTag.prototype.parseFrameLabel = function ()
{
    return {
        name:  this.bitio.getDataUntil("\0"),
        frame: 0
    };
};

/**
 * @param  {number} tag_type
 * @return {object}
 */
SwfTag.prototype.parseRemoveObject = function (tag_type)
{
    switch (tag_type) {
        case 5:
            console.log("TODO: RemoveObject");
            return {
                CharacterId: this.bitio.getUI16()|0,
                Depth:       this.bitio.getUI16()|0
            };
        default:
            return {
                Depth: this.bitio.getUI16()|0
            };
    }
};

/**
 * @param   {number} tag_type
 * @param   {number} length
 */
SwfTag.prototype.parseDefineButton = function (tag_type, length)
{

    var endOffset = (this.bitio.byte_offset + length)|0;

    // create SimpleButton
    var button = new SimpleButton();

    // characterId
    button.characterId = this.bitio.getUI16()|0;

    var offset = 0;
    if (tag_type !== 7) {
        // Reserved
        this.bitio.getUIBits(7);

        button.trackAsMenu = this.bitio.getUIBits(1) ? true : false;

        offset = this.bitio.getUI16()|0;
    }

    // action characters
    button._$characters = this.buttonCharacters(endOffset);

    // actionScript
    if (tag_type === 7) {

        offset = (endOffset - this.bitio.byte_offset)|0;

        if (offset > 0) {
            button._$actions = this.parseDoAction(offset);
        }

    } else if (offset > 0) {
        button._$actions = this.buttonActions(endOffset);
    }

    // set layer
    this.setCharacter(button.characterId, button);

    if (this.bitio.byte_offset !== endOffset) {
        this.bitio.byte_offset = endOffset|0;
    }
};

/**
 * @param   {number} offset
 * @returns {array}
 */
SwfTag.prototype.buttonCharacters = function (offset)
{
    var characters = [];
    while (this.bitio.getUI8() !== 0) {

        this.bitio.incrementOffset(-1, 0);

        var cacheOffset = this.bitio.byte_offset|0;

        var record = this.buttonRecord();

        // prev
        if (this.bitio.byte_offset > offset) {
            this.bitio.byte_offset = cacheOffset|0;
            break;
        }

        characters[characters.length] = record;
    }

    return characters;
};

/**
 * @returns {{}}
 */
SwfTag.prototype.buttonRecord = function ()
{

    this.bitio.getUIBits(2); // Reserved

    var obj = {};
    obj.PlaceFlagHasBlendMode  = this.bitio.getUIBits(1);
    obj.PlaceFlagHasFilterList = this.bitio.getUIBits(1);
    obj.ButtonStateHitTest     = this.bitio.getUIBits(1);
    obj.ButtonStateDown        = this.bitio.getUIBits(1);
    obj.ButtonStateOver        = this.bitio.getUIBits(1);
    obj.ButtonStateUp          = this.bitio.getUIBits(1);
    obj.CharacterId            = this.bitio.getUI16();
    obj.Depth                  = this.bitio.getUI16();
    obj.PlaceFlagHasMatrix     = 1;
    obj.Matrix                 = this.matrix();
    obj.ColorTransform         = this.colorTransform();

    obj.PlaceFlagHasColorTransform = (obj.ColorTransform === undefined) ? 0 : 1;
    if (obj.PlaceFlagHasBlendMode) {
        obj.BlendMode = this.bitio.getUI8();
    }

    if (obj.PlaceFlagHasFilterList) {
        obj.SurfaceFilterList = this.getFilterList();
    }

    obj.PlaceFlagHasRatio     = 0;
    obj.PlaceFlagHasClipDepth = 0;
    obj.Sound                 = null;

    return obj;
};

/**
 * @param   {number} end_offset
 * @returns {array}
 */
SwfTag.prototype.buttonActions = function (end_offset)
{
    var actions = [];

    while (true) {

        var obj            = {};
        var startOffset    = this.bitio.byte_offset|0;
        var CondActionSize = this.bitio.getUI16();

        obj.CondIdleToOverDown    = this.bitio.getUIBits(1);
        obj.CondOutDownToIdle     = this.bitio.getUIBits(1);
        obj.CondOutDownToOverDown = this.bitio.getUIBits(1);
        obj.CondOverDownToOutDown = this.bitio.getUIBits(1);
        obj.CondOverDownToOverUp  = this.bitio.getUIBits(1);
        obj.CondOverUpToOverDown  = this.bitio.getUIBits(1);
        obj.CondOverUpToIdle      = this.bitio.getUIBits(1);
        obj.CondIdleToOverUp      = this.bitio.getUIBits(1);
        obj.CondKeyPress          = this.bitio.getUIBits(7);
        obj.CondOverDownToIdle    = this.bitio.getUIBits(1);

        // ActionScript
        var length = (end_offset - this.bitio.byte_offset + 1)|0;

        obj.ActionScript = this.parseDoAction(length);

        actions[actions.length] = obj;

        if (!CondActionSize) {
            break;
        }

        this.bitio.byte_offset = (startOffset + CondActionSize)|0;
    }

    return actions;
};

/**
 * @param   {number} tag_type
 * @param   {number} length
 * @returns {object}
 */
SwfTag.prototype.parsePlaceObject = function (tag_type, length)
{
    var version = this.main.version;

    var startOffset = this.bitio.byte_offset|0;

    var obj = {};
    obj.tagType = tag_type;

    switch (tag_type) {
        case 4:
            obj.CharacterId = this.bitio.getUI16();
            obj.Depth       = this.bitio.getUI16();
            obj.Matrix      = this.matrix();
            obj.PlaceFlagHasMatrix = 1;

            this.bitio.byteAlign();

            if ((this.bitio.byte_offset - startOffset) < length) {
                obj.ColorTransform = this.colorTransform();
                obj.PlaceFlagHasColorTransform = 1;
            }
            break;
        default:
            obj.PlaceFlagHasClipActions = this.bitio.getUIBits(1);
            if (version < 5) {
                obj.PlaceFlagHasClipActions = 0;
            }

            obj.PlaceFlagHasClipDepth      = this.bitio.getUIBits(1);
            obj.PlaceFlagHasName           = this.bitio.getUIBits(1);
            obj.PlaceFlagHasRatio          = this.bitio.getUIBits(1);
            obj.PlaceFlagHasColorTransform = this.bitio.getUIBits(1);
            obj.PlaceFlagHasMatrix         = this.bitio.getUIBits(1);
            obj.PlaceFlagHasCharacter      = this.bitio.getUIBits(1);
            obj.PlaceFlagMove              = this.bitio.getUIBits(1);

            // PlaceObject3
            if (tag_type === 70) {
                this.bitio.getUIBits(1); // Reserved

                obj.PlaceFlagOpaqueBackground = this.bitio.getUIBits(1);
                obj.PlaceFlagHasVisible       = this.bitio.getUIBits(1);
                obj.PlaceFlagHasImage         = this.bitio.getUIBits(1);
                obj.PlaceFlagHasClassName     = this.bitio.getUIBits(1);
                obj.PlaceFlagHasCacheAsBitmap = this.bitio.getUIBits(1);
                obj.PlaceFlagHasBlendMode     = this.bitio.getUIBits(1);
                obj.PlaceFlagHasFilterList    = this.bitio.getUIBits(1);
            }

            obj.Depth = this.bitio.getUI16();

            if (obj.PlaceFlagHasClassName ||
                (obj.PlaceFlagHasImage && obj.PlaceFlagHasCharacter)
            ) {
                obj.ClassName = this.bitio.getDataUntil("\0");
            }

            if (obj.PlaceFlagHasCharacter) {
                obj.CharacterId = this.bitio.getUI16();
            }

            if (obj.PlaceFlagHasMatrix) {
                obj.Matrix = this.matrix();
            }

            if (obj.PlaceFlagHasColorTransform) {
                obj.ColorTransform = this.colorTransform();
            }

            if (obj.PlaceFlagHasRatio) {
                obj.Ratio = this.bitio.getUI16();
            }

            if (obj.PlaceFlagHasName) {
                obj.Name = this.bitio.getDataUntil("\0");
            }

            if (obj.PlaceFlagHasClipDepth) {
                obj.ClipDepth = this.bitio.getUI16();
            }

            if (tag_type === 70) {
                if (obj.PlaceFlagHasFilterList) {
                    obj.SurfaceFilterList = this.getFilterList();
                }
                if (obj.PlaceFlagHasBlendMode) {
                    obj.BlendMode = this.bitio.getUI8();
                }
                if (obj.PlaceFlagHasCacheAsBitmap) {
                    obj.BitmapCache = this.bitio.getUI8();
                }
                if (obj.PlaceFlagHasVisible) {
                    obj.Visible = this.bitio.getUI8();
                    obj.BackgroundColor = this.rgba();
                }
            }

            if (obj.PlaceFlagHasClipActions) {

                this.bitio.getUI16(); // Reserved

                obj.AllEventFlags = this.parseClipEventFlags();

                var endLength = startOffset + length;

                var actionRecords = [];
                while (this.bitio.byte_offset < endLength) {
                    var clipActionRecord = this.parseClipActionRecord(endLength);
                    actionRecords[actionRecords.length] = clipActionRecord;
                    if (endLength <= this.bitio.byte_offset) {
                        break;
                    }

                    var endFlag = (version <= 5) ? this.bitio.getUI16() : this.bitio.getUI32();
                    if (!endFlag) {
                        break;
                    }

                    if (version <= 5) {
                        this.bitio.byte_offset -= 2;
                    } else {
                        this.bitio.byte_offset -= 4;
                    }

                    if (clipActionRecord.KeyCode) {
                        this.bitio.byte_offset -= 1;
                    }
                }
                obj.ClipActionRecords = actionRecords;
            }

            break;
    }

    this.bitio.byteAlign();

    this.bitio.byte_offset = (startOffset + length)|0;

    return obj;
};

/**
 * @param  {number} end_length
 * @return {object}
 */
SwfTag.prototype.parseClipActionRecord = function (end_length)
{

    var obj = {};
    var EventFlags = this.parseClipEventFlags();
    if (end_length > this.bitio.byte_offset) {

        var ActionRecordSize = this.bitio.getUI32();
        if (EventFlags.keyPress) {
            obj.KeyCode = this.bitio.getUI8();
        }

        obj.EventFlags = EventFlags;
        obj.Actions    = this.parseDoAction(ActionRecordSize);
    }

    return obj;
};

/**
 * @returns {object}
 */
SwfTag.prototype.parseClipEventFlags = function ()
{
    var version = this.main.version;

    var obj = {};
    obj.keyUp      = this.bitio.getUIBits(1);
    obj.keyDown    = this.bitio.getUIBits(1);
    obj.mouseUp    = this.bitio.getUIBits(1);
    obj.mouseDown  = this.bitio.getUIBits(1);
    obj.mouseMove  = this.bitio.getUIBits(1);
    obj.unload     = this.bitio.getUIBits(1);
    obj.enterFrame = this.bitio.getUIBits(1);
    obj.load       = this.bitio.getUIBits(1);

    if (version >= 6) {
        obj.dragOver       = this.bitio.getUIBits(1);
        obj.rollOut        = this.bitio.getUIBits(1);
        obj.rollOver       = this.bitio.getUIBits(1);
        obj.releaseOutside = this.bitio.getUIBits(1);
        obj.release        = this.bitio.getUIBits(1);
        obj.press          = this.bitio.getUIBits(1);
        obj.initialize     = this.bitio.getUIBits(1);
    }

    obj.data = bitio.getUIBits(1);

    if (version >= 6) {

        this.bitio.getUIBits(5); // Reserved

        obj.construct = this.bitio.getUIBits(1);
        obj.keyPress  = this.bitio.getUIBits(1);
        obj.dragOut   = this.bitio.getUIBits(1);

        this.bitio.getUIBits(8); // Reserved
    }

    this.bitio.byteAlign();

    return obj;
};

/**
 * @returns {array|null}
 */
SwfTag.prototype.getFilterList = function ()
{
    var NumberOfFilters = this.bitio.getUI8()|0;
    var i = 0;

    var list = [];
    while (i < NumberOfFilters) {

        var filter = this.getFilter();
        if (filter) {
            list[list.length] = filter;
        }

        i = (i + 1)|0;
    }

    return (list.length) ? list : null;
};

/**
 * @return {object|null}
 */
SwfTag.prototype.getFilter = function ()
{
    var filterId = this.bitio.getUI8()|0;

    var filter = null;
    switch (filterId) {
        case 0:
            filter = this.dropShadowFilter();
            break;
        case 1:
            filter = this.blurFilter();
            break;
        case 2:
            filter = this.glowFilter();
            break;
        case 3:
            filter = this.bevelFilter();
            break;
        case 4:
            filter = this.gradientGlowFilter();
            break;
        case 5:
            filter = this.convolutionFilter();
            break;
        case 6:
            filter = this.colorMatrixFilter();
            break;
        case 7:
            filter = this.gradientBevelFilter();
            break;
    }

    return filter;
};

/**
 * @returns {DropShadowFilter}
 */
SwfTag.prototype.dropShadowFilter = function ()
{
    var rgba  = this.rgba();
    var alpha = rgba.A;
    var color = rgba.R << 16 | rgba.G << 8 | rgba.B;

    var blurX      = this.bitio.getUI32() / 0x10000;
    var blurY      = this.bitio.getUI32() / 0x10000;
    var angle      = this.bitio.getUI32() / 0x10000 * 180 / this.$PI;
    var distance   = this.bitio.getUI32() / 0x10000;
    var strength   = this.bitio.getFloat16() / 256;
    var inner      = (this.bitio.getUIBits(1)) ? true  : false;
    var knockout   = (this.bitio.getUIBits(1)) ? true  : false;
    var hideObject = (this.bitio.getUIBits(1)) ? false : true;
    var quality    = this.bitio.getUIBits(5);

    if (!strength) {
        return null;
    }

    return new DropShadowFilter(
        distance, angle, color, alpha, blurX, blurY,
        strength, quality, inner, knockout, hideObject
    );
};

/**
 * @returns {BlurFilter}
 */
SwfTag.prototype.blurFilter = function ()
{
    var blurX   = this.bitio.getUI32() / 0x10000;
    var blurY   = this.bitio.getUI32() / 0x10000;
    var quality = this.bitio.getUIBits(5);

    this.bitio.getUIBits(3); // Reserved

    return new BlurFilter(blurX, blurY, quality);
};

/**
 * @returns {GlowFilter}
 */
SwfTag.prototype.glowFilter = function ()
{
    var rgba     = this.rgba();
    var alpha    = rgba.A;
    var color    = rgba.R << 16 | rgba.G << 8 | rgba.B;
    var blurX    = this.bitio.getUI32() / 0x10000;
    var blurY    = this.bitio.getUI32() / 0x10000;
    var strength = this.bitio.getFloat16() / 256;
    var inner    = (this.bitio.getUIBits(1)) ? true : false;
    var knockout = (this.bitio.getUIBits(1)) ? true : false;

    this.bitio.getUIBits(1); // CompositeSource

    var quality = this.bitio.getUIBits(5);

    if (!strength) {
        return null;
    }

    return new GlowFilter(
        color, alpha, blurX, blurY,
        strength, quality, inner, knockout
    );
};

/**
 * @returns {BevelFilter}
 */
SwfTag.prototype.bevelFilter = function ()
{
    var rgba;
    rgba = this.rgba();
    var highlightAlpha = rgba.A;
    var highlightColor = rgba.R << 16 | rgba.G << 8 | rgba.B;

    rgba = this.rgba();
    var shadowAlpha = rgba.A;
    var shadowColor = rgba.R << 16 | rgba.G << 8 | rgba.B;

    var blurX    = this.bitio.getUI32() / 0x10000;
    var blurY    = this.bitio.getUI32() / 0x10000;
    var angle    = this.bitio.getUI32() / 0x10000 * 180 / this.$PI;
    var distance = this.bitio.getUI32() / 0x10000;
    var strength = this.bitio.getFloat16() / 256;
    var inner    = (this.bitio.getUIBits(1)) ? true : false;
    var knockout = (this.bitio.getUIBits(1)) ? true : false;

    this.bitio.getUIBits(1); // CompositeSource

    var OnTop   = this.bitio.getUIBits(1);
    var quality = this.bitio.getUIBits(4);

    var type = "inner";
    if (!inner) {
        if (OnTop) {
            type = "full";
        } else {
            type = "outer";
        }
    }

    if (!strength) {
        return null;
    }

    return new BevelFilter(
        distance, angle, highlightColor, highlightAlpha,
        shadowColor, shadowAlpha, blurX, blurY,
        strength, quality, type, knockout
    );
};

/**
 * @returns {GradientGlowFilter}
 */
SwfTag.prototype.gradientGlowFilter = function ()
{
    var NumColors = this.bitio.getUI8()|0;

    var colors = [];
    var alphas = [];

    var i = 0;
    while (i < NumColors) {
        var rgba = this.rgba();
        alphas[alphas.length] = rgba.A;
        colors[colors.length] = (rgba.R << 16 | rgba.G << 8 | rgba.B)|0;
        i = (i + 1)|0;
    }

    i = 0;
    var ratios = [];
    while (i < NumColors) {
        ratios[ratios.length] = +(this.bitio.getUI8() / 255);
        i = (i + 1)|0;
    }

    var blurX    = this.bitio.getUI32() / 0x10000;
    var blurY    = this.bitio.getUI32() / 0x10000;
    var angle    = this.bitio.getUI32() / 0x10000 * 180 / this.$PI;
    var distance = this.bitio.getUI32() / 0x10000;
    var strength = this.bitio.getFloat16() / 256;
    var inner    = (this.bitio.getUIBits(1)) ? true : false;
    var knockout = (this.bitio.getUIBits(1)) ? true : false;

    this.bitio.getUIBits(1); // CompositeSource

    var OnTop   = this.bitio.getUIBits(1);
    var quality = this.bitio.getUIBits(4);

    var type = "inner";
    if (!inner) {
        if (OnTop) {
            type = "full";
        } else {
            type = "outer";
        }
    }

    if (!strength) {
        return null;
    }

    return new GradientGlowFilter(
        distance, angle, colors, alphas, ratios,
        blurX, blurY, strength, quality, type, knockout
    );
};

/**
 * @returns {ConvolutionFilter}
 */
SwfTag.prototype.convolutionFilter = function ()
{
    var matrixX = this.bitio.getUI8();
    var matrixY = this.bitio.getUI8();
    var divisor = this.bitio.getFloat32;
    var bias    = this.bitio.getFloat32;

    // matrix
    var count = (matrixX * matrixY)|0;
    var matrix = [];
    while (count) {
        count = (count - 1)|0;
        matrix[matrix.length] = this.bitio.getFloat32();
    }

    var color = this.rgba();

    // Reserved
    this.bitio.getUIBits(6);

    var clamp         = (this.bitio.getUIBits(1)) ? true :false;
    var preserveAlpha = (this.bitio.getUIBits(1)) ? true :false;

    return new ConvolutionFilter(
        matrixX, matrixY, matrix, divisor, bias,
        preserveAlpha, clamp, color
    );
};

/**
 * @returns {GradientBevelFilter}
 */
SwfTag.prototype.gradientBevelFilter = function ()
{

    var NumColors = this.bitio.getUI8()|0;

    var colors = [];
    var alphas = [];

    var i = 0;
    while (i < NumColors) {
        var rgba = this.rgba();
        alphas[alphas.length] = rgba.A;
        colors[colors.length] = (rgba.R << 16 | rgba.G << 8 | rgba.B)|0;
        i = (i + 1)|0;
    }


    i = 0;
    var ratios = [];
    while (i < NumColors) {
        ratios[ratios.length] = +(this.bitio.getUI8() / 255);
        i = (i + 1)|0;
    }

    var blurX    = this.bitio.getUI32() / 0x10000;
    var blurY    = this.bitio.getUI32() / 0x10000;
    var angle    = this.bitio.getUI32() / 0x10000 * 180 / this.$PI;
    var distance = this.bitio.getUI32() / 0x10000;
    var strength = this.bitio.getFloat16() / 256;
    var inner    = (this.bitio.getUIBits(1)) ? true : false;
    var knockout = (this.bitio.getUIBits(1)) ? true : false;

    this.bitio.getUIBits(1); // CompositeSource

    var OnTop   = this.bitio.getUIBits(1);
    var quality = this.bitio.getUIBits(4);

    var type = "inner";
    if (!inner) {
        if (OnTop) {
            type = "full";
        } else {
            type = "outer";
        }
    }

    if (!strength) {
        return null;
    }

    return new GradientBevelFilter(
        distance, angle, colors, alphas, ratios,
        blurX, blurY, strength, quality, type, knockout
    );
};

/**
 * @returns {ColorMatrixFilter}
 */
SwfTag.prototype.colorMatrixFilter = function ()
{
    var matrix = [];
    for (var i = 0; i < 20; i++) {
        matrix[matrix.length] = this.bitio.getFloat32();
    }

    return new ColorMatrixFilter(matrix);
};

/**
 * @returns {number[]}
 */
SwfTag.prototype.colorTransform = function ()
{
    this.bitio.byteAlign();

    var colorTransform = [1, 1, 1, 1, 0, 0, 0, 0];

    var first6bits    = this.bitio.getUIBits(6);
    var HasAddTerms   = first6bits >> 5;
    var HasMultiTerms = (first6bits >> 4) & 1;
    var nbits         = first6bits & 0x0f;

    if (HasMultiTerms) {
        colorTransform[0] = this.bitio.getSIBits(nbits) / 256;
        colorTransform[1] = this.bitio.getSIBits(nbits) / 256;
        colorTransform[2] = this.bitio.getSIBits(nbits) / 256;
        colorTransform[3] = this.bitio.getSIBits(nbits) / 256;
    }

    if (HasAddTerms) {
        colorTransform[4] = this.bitio.getSIBits(nbits);
        colorTransform[5] = this.bitio.getSIBits(nbits);
        colorTransform[6] = this.bitio.getSIBits(nbits);
        colorTransform[7] = this.bitio.getSIBits(nbits);
    }

    return colorTransform;
};

/**
 * @param   {number}    length
 * @param   {MovieClip} parent
 * @returns void
 */
SwfTag.prototype.parseDefineSprite = function (length, parent)
{
    var characterId = this.bitio.getUI16()|0;
    this.bitio.getUI16(); // FrameCount

    // new MovieClip
    var mc = new MovieClip();
    mc.characterId = characterId|0;
    mc.stage       = parent.stage;

    // set
    this.setCharacter(characterId, mc);

    // parse
    this.parseTags(length, mc);
};

/**
 * @param   {number} length
 * @returns {ActionScript}
 */
SwfTag.prototype.parseDoAction = function (length)
{
    var data = this.bitio.getData(length);
    return new ActionScript(data);
};

/**
 * TODO
 * @param   {number} length
 * @returns void
 */
SwfTag.prototype.parseDoInitAction = function (length)
{
    var stage = this.getStage();

    var spriteId = this.bitio.getUI16();

    var as = new ActionScript(this.bitio.getData(length - 2), undefined, undefined, true);
    var mc = stage.getParent();
    mc.variables = {};
    var action = mc.createActionScript2(as);
    var packages = stage.packages;
    if (spriteId in packages) {
        mc.active = true;
        action.apply(mc);
        mc.active = false;
    }
    stage.initActions[spriteId] = action;
};

/**
 * @return void
 */
SwfTag.prototype.parseDefineSceneAndFrameLabelData = function ()
{

    var i, count;

    // sceneInfo
    i = 0;
    count = this.bitio.getU30()|0;
    while (i < count) {

        this.sceneInfo[this.sceneInfo.length] = {
            "offset": this.bitio.getU30(),
            "name"  : decodeURIComponent(this.bitio.getDataUntil("\0")) + ""
        };

        i = (i + 1)|0;
    }


    // frameInfo
    i = 0;
    count = this.bitio.getU30()|0;
    while (i < count) {

        var frame = (this.bitio.getU30() + 1)|0;
        var name  = decodeURIComponent(this.bitio.getDataUntil("\0")) + "";

        this.frameInfo[name] = frame;

        i = (i + 1)|0;
    }
};

/**
 * @param   {number} tag_type
 * @returns {object}
 */
SwfTag.prototype.parseSoundStreamHead = function (tag_type)
{
    var obj = {};
    obj.tagType = tag_type;

    this.bitio.getUIBits(4); // Reserved

    // 0 = 5.5kHz, 1 = 11kHz, 2 = 22kHz, 3 = 44kHz
    obj.PlaybackSoundRate = this.bitio.getUIBits(2);

    // 0 = 8-bit, 1 = 16-bit
    obj.PlaybackSoundSize = this.bitio.getUIBits(1);

    // 0 = Mono, 1 = Stereo
    obj.PlaybackSoundType = this.bitio.getUIBits(1);

    // 0 = Uncompressed(native-endian)
    // 1 = ADPCM
    // 2 = MP3
    // 3 = Uncompressed(little-endian)
    // 4 = Nellymoser 16 kHz
    // 5 = Nellymoser 8 kHz
    // 6 = Nellymoser
    // 11 = Speex
    obj.StreamSoundCompression = this.bitio.getUIBits(4);

    // 0 = 5.5kHz, 1 = 11kHz, 2 = 22kHz, 3 = 44kHz
    obj.StreamSoundRate = this.bitio.getUIBits(2);

    // 0 = 8-bit, 1 = 16-bit
    obj.StreamSoundSize = this.bitio.getUIBits(1);

    // 0 = Mono, 1 = Stereo
    obj.StreamSoundType = this.bitio.getUIBits(1);

    obj.StreamSoundSampleCount = this.bitio.getUI16();

    if (obj.StreamSoundCompression === 2) {
        obj.LatencySeek = this.bitio.getSIBits(2);
    }

    return obj;
};

/**
 * @param   {number} tag_type
 * @param   {number} length
 * @returns void
 */
SwfTag.prototype.parseDoABC = function (tag_type, length)
{
    this.bitio.byte_offset = this.bitio.byte_offset + length;
    return ;
    var stage = this.getStage();

    stage.abcFlag = true;

    var startOffset = this.bitio.byte_offset;

    var obj = {};
    obj.tagType = tag_type;
    obj.Flags   = this.bitio.getUI32();
    obj.Name    = this.bitio.getDataUntil("\0");

    // ABCBitIO
    var offset   = (length - (this.bitio.byte_offset - startOffset))|0;
    var ABCData  = this.bitio.getData(offset);
    var ABCBitIO = new BitIO();
    ABCBitIO.setData(ABCData);

    // version
    obj.minorVersion   = ABCBitIO.getUI16();
    obj.majorVersion   = ABCBitIO.getUI16();

    // integer
    obj.integer        = this.ABCInteger(ABCBitIO);

    // uinteger
    obj.uinteger       = this.ABCUinteger(ABCBitIO);

    // double
    obj.double         = this.ABCDouble(ABCBitIO);

    // string_info
    obj.string         = this.ABCStringInfo(ABCBitIO);

    // namespace_info
    obj.namespace      = this.ABCNameSpaceInfo(ABCBitIO);

    // ns_set_info
    obj.nsSet          = this.ABCNsSetInfo(ABCBitIO);

    // multiname_info;
    obj.multiname_info = this.ABCMultiNameInfo(ABCBitIO);

    var i = 0;

    // method_info
    obj.method = [];
    var methodCount = 0 | ABCBitIO.getU30();
    if (methodCount) {
        var method = [];
        i = 0;
        while (i < methodCount) {
            method[i] = this.ABCMethodInfo(ABCBitIO);
            i = (i + 1)|0;
        }
        obj.method = method;
    }

    // metadata_info
    obj.metadata = [];
    var metadataCount = 0 | ABCBitIO.getU30();
    if (metadataCount) {
        var metadataInfo = [];
        i = 0;
        while (i < metadataCount) {
            metadataInfo[i] = this.ABCMetadataInfo(ABCBitIO);
            i = (i + 1)|0;
        }
        obj.metadata = metadataInfo;
    }

    var classCount = 0 | ABCBitIO.getU30();
    obj.instance   = [];
    obj.class      = [];
    // console.log(classCount);
    if (classCount) {
        // instance_info
        var instance = [];
        i = 0;
        while (i < classCount) {
            instance[i] = this.ABCInstanceInfo(ABCBitIO);
            i = (i + 1)|0;
        }
        // console.log(instance);
        obj.instance = instance;

        // class_info
        var classInfo = [];
        i = 0;
        while (i < classCount) {
            classInfo[i] = this.ABCClassInfo(ABCBitIO);
            i = (i + 1)|0;
        }
        obj.class = classInfo;
    }

    // script_info
    obj.script = [];
    var scriptCount = ABCBitIO.getU30();
    if (scriptCount) {
        var script = [];
        i = 0;
        while (i < scriptCount) {
            script[i] = this.ABCScriptInfo(ABCBitIO);
            i = (i + 1)|0;
        }
        obj.script = script;
    }

    // method_body_info
    obj.methodBody = [];
    var methodBodyCount  = ABCBitIO.getU30();
    if (methodBodyCount) {
        var methodBody = [];
        i = 0;
        while (i < methodBodyCount) {
            var mBody = this.ABCMethodBodyInfo(ABCBitIO);
            methodBody[mBody.method] = mBody;
            i = (i + 1)|0;
        }
        obj.methodBody = methodBody;
    }

    // build names
    obj = this.ABCMultinameToString(obj);

    // build instance
    this.ABCBuildInstance(obj);
};

/**
 * @param obj
 */
SwfTag.prototype.ABCBuildInstance = function (obj)
{
    var stage = this.getStage();

    var instances  = obj.instance;
    var length     = instances.length|0;
    var namespaces = obj.namespace;
    var string     = obj.string;
    var names      = obj.names;

    var i = 0;
    while (i < length) {
        var instance = instances[i];
        var flag     = instance.flags;

        var nsIndex = null;
        if (flag & 0x08) {
            nsIndex = instance.protectedNs;
        }

        var object = {};
        if (nsIndex) {
            var nObj = namespaces[nsIndex];
            object   = string[nObj.name];
        } else {
            object = names[instance.name];
        }

        var values    = object.split(":");
        var className = values.pop();
        var ns        = values.pop();

        // build parent
        var AVM2 = function (mc) { this["__swf2js__::builder"] = mc; };
        var prop = AVM2.prototype;

        // constructor
        prop[className] = this.ABCCreateActionScript3(obj, instance.iinit, object);

        // prototype
        var traits   = instance.trait;
        var tLength  = 0 | traits.length;
        var register = [];
        var rCount = 1;
        if (tLength) {
            var idx = 0;
            while (idx < tLength) {
                var trait  = traits[idx];
                var tName  = names[trait.name];
                var tNames = tName.split("::");
                var pName  =  tNames.pop();
                var kind   = trait.kind;

                var val = undefined;
                switch (kind) {
                    case 0: // Slot
                        register[rCount] = pName;
                        rCount = 0 | rCount + 1;
                        break;
                    case 1: // Method
                    case 2: // Getter
                    case 3: // Setter
                        val = this.ABCCreateActionScript3(obj, trait.data.info, object);
                        break;
                    case 4: // Class
                        console.log("build: Class");
                        break;
                    case 5: // Function
                        console.log("build: Function");
                        break;
                    case 6: // Const
                        console.log("build: Const");
                        break;
                }

                prop[pName] = val;
                idx = 0 | idx + 1;
            }
        }

        var localName   = "__swf2js__:"+ object;
        prop[localName] = {};

        // extends
        var superName           = instance.superName;
        prop[localName].extends = names[superName];

        // register
        prop[localName].register = register;

        // build
        var abc = {};//stage.abc;
        var classObj = {};//stage.avm2;
        if (ns) {
            var nss  = ns.split(".");
            var nLen = 0 | nss.length;
            var nIdx = 0;
            while (nIdx < nLen) {
                if (!(nss[nIdx] in classObj)) {
                    classObj[nss[nIdx]] = {};
                    abc[nss[nIdx]] = {};
                }

                classObj = classObj[nss[nIdx]];
                abc      = abc[nss[nIdx]];

                nIdx = 0 | nIdx + 1;
            }
        }

        abc[className]      = AVM2;
        classObj[className] = new AVM2();

        i = 0 | i + 1;
    }
};

/**
 * @param   {object} obj
 * @param   {number} methodId
 * @param   {string} abcKey
 * @returns Function
 */
SwfTag.prototype.ABCCreateActionScript3 = function (obj, methodId, abcKey)
{
    var stage = this.getStage();
    return (function (data, id, ns, stage)
    {
        return function ()
        {
            var as3    = new ActionScript3(data, id, ns, stage);
            as3.caller = this;
            as3.args   = arguments;
            return as3.execute();
        };
    })(obj, methodId, abcKey, stage);
};

/**
 * @param   {object} obj
 * @returns {object}
 */
SwfTag.prototype.ABCMultinameToString = function (obj)
{
    var multinames = obj.multiname_info;

    var length = multinames.length|0;
    var string = obj.string;

    var ns = obj.namespace;

    var names = [];
    var i = 1;
    while (i < length) {
        var info = multinames[i];
        var str = "";

        switch (info.kind) {
            case 0x07: // QName
            case 0x0D: // QNameA
                var namespace_info = ns[info.ns];
                switch (namespace_info.kind) {
                    default:
                        str += string[namespace_info.name];
                        break;
                    case 0x05:
                        str += "private";
                        break;
                }

                if (str !== "") {
                    str += "::";
                }

                str += string[info.name];
                break;
            case 0x0F: // RTQName
            case 0x10: // RTQNameA
                console.log("RTQName", i, info);
                break;
            case 0x09: // Multiname
            case 0x0E: // MultinameA
                str = string[info.name];
                break;
            case 0x1B: // MultinameL
            case 0x1C: // MultinameLA
                str = null;
                break;
            case 0x11: // RTQNameL
            case 0x12: // RTQNameLA
                console.log("RTQNameL", i, info);

                break;
        }

        names[i] = str;

        i = (i + 1)|0;
    }

    obj.names = names;

    return obj;
};

/**
 * @param   {BitIO} ABCBitIO
 * @returns {array}
 */
SwfTag.prototype.ABCInteger = function (ABCBitIO)
{
    var array = [];

    var count = ABCBitIO.getU30()|0;
    if (count) {
        var i = 1;
        while (i < count) {
            array[i] = ABCBitIO.getS30();

            i = (i + 1)|0;
        }
    }

    return array;
};

/**
 * @param   {BitIO} ABCBitIO
 * @returns {array}
 */
SwfTag.prototype.ABCUinteger = function (ABCBitIO)
{
    var array = [];

    var count = ABCBitIO.getU30()|0;
    if (count) {
        var i = 1;
        while (i < count) {
            array[i] = ABCBitIO.getU30();

            i = (i + 1)|0;
        }
    }

    return array;
};

/**
 * @param   {BitIO} bitio
 * @returns {array}
 */
SwfTag.prototype.ABCDouble = function (bitio)
{
    var array = [];

    var count = bitio.getU30()|0;
    if (count) {
        var i = 1;
        while (i < count) {
            array[i] = bitio.getFloat64LittleEndian();

            i = (i + 1)|0;
        }
    }

    return array;
};

/**
 * @param   {BitIO} bitio
 * @returns {array}
 */
SwfTag.prototype.ABCStringInfo = function (bitio)
{
    var array = [];

    var count = bitio.getU30()|0;
    if (count) {
        var i = 1;
        while (i < count) {
            array[i] = bitio.AbcReadString();

            i = (i + 1)|0;
        }
    }

    return array;
};

/**
 * @param   {BitIO} bitio
 * @returns {array}
 */
SwfTag.prototype.ABCNameSpaceInfo = function (bitio)
{
    var array = [];

    var count = bitio.getU30()|0;
    if (count) {
        var i = 1;
        while (i < count) {
            array[i] = {
                kind: bitio.getUI8(),
                name: bitio.getU30()
            };

            i = (i + 1)|0;
        }
    }

    return array;
};

/**
 * @param   {BitIO} bitio
 * @returns {array}
 */
SwfTag.prototype.ABCNsSetInfo = function (bitio)
{
    var array = [];

    var count = bitio.getU30()|0;
    if (count) {
        var i = 1;
        while (i < count) {

            var nsCount = bitio.getU30()|0;

            var ns = [];
            if (nsCount) {
                var j = 0;
                while (j < nsCount) {
                    ns[j] = bitio.getU30();

                    j = (j + 1)|0;
                }
            }

            array[i] = ns;

            i = (i + 1)|0;
        }
    }

    return array;
};

/**
 * @param   {BitIO} bitio
 * @returns {array}
 */
SwfTag.prototype.ABCMultiNameInfo = function (bitio)
{
    var array = [];

    var count = bitio.getU30()|0;
    if (count) {

        var i = 1;
        while (i < count) {

            var obj = {};
            obj.kind = bitio.getUI8();
            switch (obj.kind) {
                case 0x07: // QName
                case 0x0D: // QNameA
                    obj.ns   = bitio.getU30();
                    obj.name = bitio.getU30();
                    break;
                case 0x0F: // RTQName
                case 0x10: // RTQNameA
                    obj.name = bitio.getU30();
                    break;
                case 0x09: // Multiname
                case 0x0E: // MultinameA
                    obj.name   = bitio.getU30();
                    obj.ns_set = bitio.getU30();
                    break;
                case 0x1B: // MultinameL
                case 0x1C: // MultinameLA
                    obj.ns_set = bitio.getU30();
                    break;
                case 0x11: // RTQNameL
                case 0x12: // RTQNameLA
                    break;
            }

            array[i] = obj;

            i = (i + 1)|0;
        }
    }

    return array;
};

/**
 * @param   {BitIO}  bitio
 * @returns {object}
 */
SwfTag.prototype.ABCMethodInfo = function (bitio)
{
    var obj = {};
    var i;
    var count = bitio.getU30()|0;

    obj.paramCount = count|0;
    obj.returnType = bitio.getU30();
    obj.paramType  = [];
    if (count) {
        var paramType = [];

        i = 0;
        while (i < count) {
            paramType[paramType.length] = bitio.getU30();

            i = (i + 1)|0;
        }
        obj.paramType = paramType;
    }

    obj.name  = bitio.getU30();
    obj.flags = bitio.getUI8();

    obj.options = [];
    if (obj.flags === 0x08) {
        var options = [];
        var optionCount = bitio.getU30()|0;
        if (optionCount) {
            i = 0;
            while (i < optionCount) {
                options[options.length] = {
                    val:  bitio.getU30(),
                    kind: bitio.getUI8()
                };

                i = (i + 1)|0;
            }
        }
        obj.options = options;
    }

    obj.paramName = [];
    if (obj.flags === 0x80) {
        var paramName = [];
        if (count) {
            i = 0;
            while (i < count) {
                paramName[paramName.length] = bitio.getU30();

                i = (i + 1)|0;
            }
        }
        obj.paramName = paramName;
    }

    return obj;
};

/**
 * @param   {BitIO}  bitio
 * @returns {object}
 */
SwfTag.prototype.ABCMetadataInfo = function (bitio)
{
    var obj = {};

    obj.name  = bitio.getU30();
    obj.items = [];

    var count = bitio.getU30()|0;
    if (count) {
        var items = [];
        var i = 0;
        while (i < count) {
            items[items.length] = {
                key:   bitio.getU30(),
                value: bitio.getU30()
            };

            i = (i + 1)|0;
        }
        obj.items = items;
    }

    return obj;
};

/**
 * @param   {BitIO}  bitio
 * @returns {object}
 */
SwfTag.prototype.ABCInstanceInfo = function (bitio)
{
    var obj = {};
    obj.name      = bitio.getU30();
    obj.superName = bitio.getU30();
    obj.flags     = bitio.getUI8();

    if (obj.flags & 0x08) {
        obj.protectedNs = bitio.getU30();
    }

    var count = bitio.getU30()|0;
    obj.interfaces = [];
    if (count) {
        var interfaces = [];
        var i = 0;
        while (i < count) {
            interfaces[interfaces.length] = bitio.getU30();

            i = (i + 1)|0;
        }
        obj.interfaces = interfaces;
    }

    obj.iinit = bitio.getU30();
    obj.trait = this.ABCTrait(bitio);

    return obj;
};

/**
 * @param   {BitIO}  bitio
 * @returns {object}
 */
SwfTag.prototype.ABCClassInfo = function (bitio)
{
    var obj = {};
    obj.cinit = bitio.getU30();
    obj.trait = this.ABCTrait(bitio);
    return obj;
};

/**
 * @param   {BitIO}  bitio
 * @returns {object}
 */
SwfTag.prototype.ABCScriptInfo = function (bitio)
{
    var obj = {};
    obj.init  = bitio.getU30();
    obj.trait = this.ABCTrait(bitio);
    return obj;
};

/**
 * @param   {BitIO}  bitio
 * @returns {object}
 */
SwfTag.prototype.ABCMethodBodyInfo = function (bitio)
{
    var obj = {};
    obj.method         = bitio.getU30();
    obj.maxStack       = bitio.getU30();
    obj.localCount     = bitio.getU30();
    obj.initScopeDepth = bitio.getU30();
    obj.maxScopeDepth  = bitio.getU30();

    var count = bitio.getU30()|0;
    var codes = [];
    if (count) {
        codes = this.ABCBuildCode(bitio, count);
    }
    obj.codes = codes;

    count = bitio.getU30()|0;
    var exceptions = [];
    if (count) {
        var i = 0;
        while (i < count) {
            exceptions[exceptions.length] = this.ABCException(bitio);

            i = (i + 1)|0;
        }
    }

    obj.exceptions = exceptions;
    obj.trait      = this.ABCTrait(bitio);

    return obj;
};

/**
 * @param   {BitIO}  bitio
 * @param   {number} count
 * @returns {array}
 */
SwfTag.prototype.ABCBuildCode = function (bitio, count)
{
    var array = [];
    var cacheOffset = 0;
    var i = 0;
    while (i < count) {

        var obj    = {};
        var offset = 0;

        var code = bitio.getUI8();

        obj.code = code;
        switch (code) {
            case 0x86: // astype
            case 0x41: // call
            case 0x80: // coerce
            case 0x42: // construct
            case 0x49: // constructsuper
            case 0xf1: // debugfile
            case 0xf0: // debugline
            case 0x94: // declocal
            case 0xc3: // declocal_i
            case 0x6a: // deleteproperty
            case 0x06: // dxns
            case 0x5e: // findproperty
            case 0x5d: // findpropstrict
            case 0x59: // getdescendants
            case 0x6e: // getglobalslot
            case 0x60: // getlex
            case 0x62: // getlocal
            case 0x66: // getproperty
            case 0x6c: // getslot
            case 0x04: // getsuper
            case 0x92: // inclocal
            case 0xc2: // inclocal_i
            case 0x68: // initproperty
            case 0xb2: // istype
            case 0x08: // kill
            case 0x56: // newarray
            case 0x5a: // newcatch
            case 0x58: // newclass
            case 0x40: // newfunction
            case 0x55: // newobject
            case 0x2f: // pushdouble
            case 0x2d: // pushint
            case 0x31: // pushnamespace
            case 0x25: // pushshort
            case 0x2c: // pushstring
            case 0x2e: // pushuint
            case 0x63: // setlocal
            case 0x6f: // setglobalslot
            case 0x61: // setproperty
            case 0x6d: // setslot
            case 0x05: // setsuper
                cacheOffset = bitio.byte_offset;
                obj.value1  = bitio.getU30();

                offset      = (offset + (bitio.byte_offset - cacheOffset))|0;
                break;
            case 0x1b: // lookupswitch
                obj.value1  = bitio.getSI24();
                offset      = (offset + 3)|0;

                cacheOffset = bitio.byte_offset;
                obj.value2  = bitio.getSI24();
                offset      = (offset + (bitio.byte_offset - cacheOffset))|0;

                obj.value3  = bitio.getSI24();
                offset      = (offset + 3)|0;
                break;
            case 0x65: // getscopeobject
            case 0x24: // pushbyte
                obj.value1  = bitio.getSI8();
                offset      = (offset + 1)|0;
                break;
            case 0x32: // hasnext2
                obj.value1  = bitio.getSI8();
                obj.value2  = bitio.getSI8();
                offset      = (offset + 2)|0;
                break;
            case 0x13: // ifeq
            case 0x12: // iffalse
            case 0x18: // ifge
            case 0x17: // ifgt
            case 0x16: // ifle
            case 0x15: // iflt
            case 0x0f: // ifnge
            case 0x0e: // ifngt
            case 0x0d: // ifnle
            case 0x0c: // ifnlt
            case 0x14: // ifne
            case 0x19: // ifstricteq
            case 0x1a: // ifstrictne
            case 0x11: // iftrue
            case 0x10: // jump
                obj.value1  = bitio.getSI24();
                offset      = (offset + 3)|0;
                break;
            case 0x43: // callmethod
            case 0x46: // callproperty
            case 0x4c: // callproplex
            case 0x4f: // callpropvoid
            case 0x44: // callstatic
            case 0x45: // callsuper
            case 0x4e: // callsupervoid
            case 0x4a: // constructprop
            case 0xef: // debug
                cacheOffset  = bitio.byte_offset;
                obj.value1   = bitio.getU30();
                obj.value2   = bitio.getU30();
                offset       = (offset + (bitio.byte_offset - cacheOffset))|0;
                break;
        }

        obj.offset = offset|0;

        array[i] = obj;

        i = (i + offset)|0;
    }

    return array;
};

/**
 * @param   {BitIO}  bitio
 * @returns {object}
 */
SwfTag.prototype.ABCException = function (bitio)
{
    var obj = {};
    obj.from    = bitio.getU30();
    obj.to      = bitio.getU30();
    obj.target  = bitio.getU30();
    obj.excType = bitio.getU30();
    obj.varName = bitio.getU30();
    return obj;
};

/**
 * @param   {BitIO} bitio
 * @returns {array}
 */
SwfTag.prototype.ABCTrait = function (bitio)
{
    var count = bitio.getU30()|0;

    var trait = [];
    if (count) {
        var i = 0;
        while (i < count) {
            var tObj  = {};
            tObj.name = bitio.getU30();

            var tag        = bitio.getUI8();
            var kind       = tag & 0x0f;
            var attributes = (kind >> 4) & 0x0f;

            var data = {};
            switch (kind) {
                default:
                    console.log("ERROR:"+ kind);
                    break;
                case 0: // Trait_Slot
                case 6: // Trait_Const
                    data.id    = bitio.getU30();
                    data.name  = bitio.getU30();
                    data.index = bitio.getU30();
                    data.kind  = null;
                    if (data.index !== 0) {
                        data.kind = bitio.getUI8();
                    }
                    break;
                case 1: // Trait_Method
                case 2: // Trait_Getter
                case 3: // Trait_Setter
                    data.id   = bitio.getU30();
                    data.info = bitio.getU30();
                    break;
                case 4: // Trait_Class
                    data.id   = bitio.getU30();
                    data.info = bitio.getU30();
                    break;
                case 5: // Trait_Function
                    data.id   = bitio.getU30();
                    data.info = bitio.getU30();
                    break;
            }
            tObj.kind = kind;
            tObj.data = data;

            if (attributes & 0x04) {
                var metadataCount = bitio.getU30()|0;
                var metadata = [];
                if (metadataCount) {
                    var j = 0;
                    while (j < metadataCount) {
                        metadata[metadata.length] = bitio.getU30();

                        j = (j + 1)|0;
                    }
                }

                tObj.metadata = metadata;
            }

            trait[trait.length] = tObj;

            i = (i + 1)|0;
        }
    }

    return trait;
};

/**
 * TODO
 * parseSymbolClass
 */
SwfTag.prototype.parseSymbolClass = function ()
{
    var symbols = {}; //stage.symbols;
    var count   = this.bitio.getUI16();
    if (count) {

        var i = 0;
        while (i < count) {
            var tagId      = this.bitio.getUI16();
            symbols[tagId] = this.bitio.getDataUntil("\0");
            i = (i + 1)|0;
        }

    }
};

/**
 * TODO
 * @param {number} tag_type
 * @param {number} length
 */
SwfTag.prototype.parseDefineSound = function (tag_type, length)
{
    var stage = this.getStage();

    var startOffset = bitio.byte_offset;

    var obj = {};
    obj.tagType          = tag_type;
    obj.SoundId          = this.bitio.getUI16();
    obj.SoundFormat      = this.bitio.getUIBits(4);
    obj.SoundRate        = this.bitio.getUIBits(2);
    obj.SoundSize        = this.bitio.getUIBit();
    obj.SoundType        = this.bitio.getUIBit();
    obj.SoundSampleCount = this.bitio.getUI32();

    var sub        = (this.bitio.byte_offset - startOffset)|0;
    var dataLength = (length - sub)|0;
    var data       = bitio.getData(dataLength);
    var SoundData  = "";

    var i = 0;
    while (i < dataLength) {
        SoundData += this.$fromCharCode(data[i]);
        i = (i + 1)|0;
    }

    this.bitio.byte_offset = (startOffset + length)|0;

    var mimeType = "";
    switch (obj.SoundFormat) {
        case 0: // Uncompressed native-endian
        case 3: // Uncompressed little-endian
            mimeType = "wave";
            break;
        case 1: // ADPCM ? 32KADPCM
            mimeType = "wave";
            break;
        case 2: // MP3
            mimeType = "mpeg";
            break;
        case 4: // Nellymoser 16
        case 5: // Nellymoser 8
        case 6: //
            mimeType = "nellymoser";
            break;
        case 11: // Speex
            mimeType = "speex";
            break;
        case 15:
            mimeType = "x-aiff";
            break;
    }

    obj.base64 = "data:audio/" + mimeType + ";base64," + window.btoa(SoundData);
    stage.sounds[obj.SoundId] = obj;
};

/**
 * TODO
 * @param {number} tag_type
 */
SwfTag.prototype.parseStartSound = function (tag_type)
{

    var stage = this.getStage();

    var obj = {};
    obj.tagType = tag_type;
    obj.SoundId = this.bitio.getUI16();
    if (tag_type === 89) {
        obj.SoundClassName = this.bitio.getDataUntil("\0");
    }

    obj.SoundInfo = this.parseSoundInfo();
    stage.setCharacter(obj.SoundId, obj);

    var sound = stage.sounds[obj.SoundId];
    var audio = this.$document.createElement("audio");
    audio.onload = function ()
    {
        this.load();
        this.preload  = "auto";
        this.autoplay = false;
        this.loop     = false;
    };

    audio.src = sound.base64;

    var loadSounds = stage.loadSounds;
    loadSounds[loadSounds.length] = audio;

    return {
        SoundId: obj.SoundId,
        Audio:   audio,
        tagType: tag_type
    };
};

/**
 * parseDefineButtonSound
 */
SwfTag.prototype.parseDefineButtonSound = function ()
{

    var buttonId = this.bitio.getUI16();
    var button   = this.getCharacter(buttonId);

    for (var i = 0; i < 4; i++) {
        var soundId = this.bitio.getUI16();
        if (soundId) {
            var soundInfo = this.parseSoundInfo();
            switch (i) {
                case 0:
                    button.ButtonStateUpSoundInfo      = soundInfo;
                    button.ButtonStateUpSoundId        = soundId;
                    break;
                case 1:
                    button.ButtonStateOverSoundInfo    = soundInfo;
                    button.ButtonStateOverSoundId      = soundId;
                    break;
                case 2:
                    button.ButtonStateDownSoundInfo    = soundInfo;
                    button.ButtonStateDownSoundId      = soundId;
                    break;
                case 3:
                    button.ButtonStateHitTestSoundInfo = soundInfo;
                    button.ButtonStateHitTestSoundId   = soundId;
                    break;
            }
        }
    }

    this.setCharacter(buttonId, button);
};

/**
 * @return {object}
 */
SwfTag.prototype.parseSoundInfo = function ()
{

    this.bitio.getUIBits(2); // Reserved

    var obj = {};
    obj.SyncStop       = this.bitio.getUIBit();
    obj.SyncNoMultiple = this.bitio.getUIBit();
    obj.HasEnvelope    = this.bitio.getUIBit();
    obj.HasLoops       = this.bitio.getUIBit();
    obj.HasOutPoint    = this.bitio.getUIBit();
    obj.HasInPoint     = this.bitio.getUIBit();

    if (obj.HasInPoint) {
        obj.InPoint = this.bitio.getUI32();
    }

    if (obj.HasOutPoint) {
        obj.OutPoint = this.bitio.getUI32();
    }

    if (obj.HasLoops) {
        obj.LoopCount = this.bitio.getUI16();
    }

    if (obj.HasEnvelope) {

        var i     = 0;
        var point = this.bitio.getUI8()|0;

        var EnvelopeRecords = [];
        while (i < point) {

            EnvelopeRecords[i] = {
                Pos44:      this.bitio.getUI32(),
                LeftLevel:  this.bitio.getUI16(),
                RightLevel: this.bitio.getUI16()
            };

            i = (i + 1)|0;
        }

        obj.EnvPoints       = point;
        obj.EnvelopeRecords = EnvelopeRecords;
    }

    return obj;
};

/**
 * TODO
 * @returns void
 */
SwfTag.prototype.parseDefineFontAlignZones = function ()
{
    var stage = this.getStage();

    var FontId = bitio.getUI16();
    var tag    = stage.getCharacter(FontId);

    tag.CSMTableHint = this.bitio.getUIBits(2);

    this.bitio.getUIBits(6); // Reserved

    var NumGlyphs = 0 | tag.NumGlyphs;
    var ZoneTable = [];
    var i = 0;
    while (i < NumGlyphs) {
        var NumZoneData = this.bitio.getUI8()|0;

        var ZoneData = [];
        var idx = 0;
        while (idx < NumZoneData) {
            ZoneData[idx] = this.bitio.getUI32();
            idx = (idx + 1)|0;
        }

        ZoneTable[i] = {
            ZoneData: ZoneData,
            Mask: this.bitio.getUI8()
        };

        i = (i + 1)|0;
    }

    this.bitio.byteAlign();

    tag.ZoneTable = ZoneTable;
    stage.setCharacter(FontId, tag);
};

/**
 * TODO
 * @param {number} tag_type
 */
SwfTag.prototype.parseCSMTextSettings = function (tag_type)
{
    var obj = {};
    obj.tagType      = tag_type;
    obj.TextID       = this.bitio.getUI16();
    obj.UseFlashType = this.bitio.getUIBits(2);
    obj.GridFit      = this.bitio.getUIBits(3);

    this.bitio.getUIBits(3); // Reserved

    obj.Thickness = this.bitio.getUI32();
    obj.Sharpness = this.bitio.getUI32();

    this.bitio.getUI8(); // Reserved
};

/**
 * TODO
 * @param {number} tag_type
 * @param {number} length
 */
SwfTag.prototype.parseSoundStreamBlock = function (tag_type, length)
{
    var obj = {};
    obj.tagType    = tag_type;
    obj.compressed = this.bitio.getData(length);
};

/**
 * TODO
 * @param {number} tag_type
 */
SwfTag.prototype.parseDefineVideoStream = function (tag_type)
{
    var stage = this.getStage();

    var obj = {};
    obj.tagType     = tag_type;
    obj.CharacterId = this.bitio.getUI16();
    obj.NumFrames   = this.bitio.getUI16();
    obj.Width       = this.bitio.getUI16();
    obj.Height      = this.bitio.getUI16();

    this.bitio.getUIBits(4); // Reserved

    obj.VideoFlagsDeblocking = this.bitio.getUIBits(3);
    obj.VideoFlagsSmoothing  = this.bitio.getUIBits(1);
    obj.CodecID              = this.bitio.getUI8();

    stage.setCharacter(obj.CharacterId, obj);
    console.log(obj);
};

/**
 * TODO
 * @param {number} tag_type
 * @param {number} length
 */
SwfTag.prototype.parseVideoFrame = function (tag_type, length)
{
    var stage = this.getStage();

    var startOffset = this.bitio.byte_offset;

    var obj = {};
    obj.tagType  = tag_type;
    obj.StreamID = this.bitio.getUI16();
    obj.FrameNum = this.bitio.getUI16();

    var StreamData = stage.getCharacter(obj.StreamID);
    var sub        = (this.bitio.byte_offset - startOffset)|0;
    var dataLength = (length - sub)|0;
    var VideoData;
    switch (StreamData.CodecID) {
        case 4:
            VideoData = this.parseVp6SwfVideoPacket(dataLength);
            break;
    }

    this.bitio.byte_offset = startOffset + length;

    // obj.base64 = 'data:image/jpeg;base64,' + window.btoa(VideoData);
    stage.videos[obj.StreamID] = obj;
};

/**
 * TODO
 * @param   {number} length
 * @returns {string}
 */
SwfTag.prototype.parseVp6SwfVideoPacket = function (length)
{

    var VideoData = "";
    var data = this.bitio.getData(length);

    console.log(data);

    return VideoData;
};

/**
 * @returns void
 */
SwfTag.prototype.parseFileAttributes = function ()
{

    this.bitio.getUIBit(); // Reserved

    var obj = {};
    obj.UseDirectBlit = this.bitio.getUIBit();
    obj.UseGPU        = this.bitio.getUIBit();
    obj.HasMetadata   = this.bitio.getUIBit();
    obj.ActionScript3 = this.bitio.getUIBit();

    // Reserved
    this.bitio.getUIBits(3);

    obj.UseNetwork    = this.bitio.getUIBit();

    // Reserved
    this.bitio.getUIBits(24);

    if (obj.ActionScript3 === 1) {

        this.main.actionScriptVersion = ActionScriptVersion.ACTIONSCRIPT3|0;

    } else {

        this.main.actionScriptVersion = ActionScriptVersion.ACTIONSCRIPT2|0;

    }

};

/**
 * @returns void
 */
SwfTag.prototype.parseDefineScalingGrid = function ()
{
    var obj         = {};
    obj.CharacterId = this.bitio.getUI16();
    obj.Splitter    = this.rect();
};
/**
 * @constructor
 */
var VectorToCanvas = function () {};


/**
 * extends
 * @type {Util}
 */
VectorToCanvas.prototype = Object.create(Util.prototype);
VectorToCanvas.prototype.constructor = VectorToCanvas;

/**
 * @param   {object} src
 * @returns {object}
 */
VectorToCanvas.prototype.clone = function (src)
{
    var execute = function (src, obj)
    {
        var prop;
        for (prop in src) {
            if (!src.hasOwnProperty(prop)) {
                continue;
            }

            var value = src[prop];
            if (value instanceof Array) {
                obj[prop] = [];
                execute(value, obj[prop]);
            } else if (value instanceof Object) {
                obj[prop] = {};
                execute(value, obj[prop]);
            } else {
                obj[prop] = value;
            }
        }
    };

    var obj = {};
    execute(src, obj);
    return obj;
};

/**
 * @param   {object}  shapes
 * @param   {boolean} is_morph
 * @returns {array}
 */
VectorToCanvas.prototype.convert = function (shapes, is_morph)
{
    var lineStyles = shapes.lineStyles.lineStyles;
    var fillStyles = shapes.fillStyles.fillStyles;
    var records    = shapes.ShapeRecords;
    var idx        = 0;
    var obj        = {};
    var cache      = [];
    var AnchorX    = 0;
    var AnchorY    = 0;
    var MoveX      = 0;
    var MoveY      = 0;
    var LineX      = 0;
    var LineY      = 0;
    var FillStyle0 = 0;
    var FillStyle1 = 0;
    var LineStyle  = 0;
    var fills0     = [];
    var fills1     = [];
    var lines      = [];
    var stack      = [];
    var depth      = 0;

    var length = records.length|0;
    var i = 0;
    while (i < length) {
        var record = records[i];
        i = (i + 1)|0;

        if (!record) {
            stack = this.setStack(stack, this.fillMerge(fills0, fills1, is_morph));
            stack = this.setStack(stack, lines);
            break;
        }

        if (record.isChange) {
            depth = (depth + 1)|0;
            if (record.StateNewStyles) {
                AnchorX = 0;
                AnchorY = 0;
                stack   = this.setStack(stack, this.fillMerge(fills0, fills1, is_morph));
                stack   = this.setStack(stack, lines);
                fills0  = [];
                fills1  = [];
                lines   = [];

                if (record.NumFillBits) {
                    fillStyles = record.FillStyles.fillStyles;
                }

                if (record.NumLineBits) {
                    lineStyles = record.LineStyles.lineStyles;
                }
            }

            MoveX = AnchorX;
            MoveY = AnchorY;
            if (record.StateMoveTo) {
                MoveX = record.MoveX;
                MoveY = record.MoveY;
            }

            LineX = MoveX;
            LineY = MoveY;

            if (record.StateFillStyle0) {
                FillStyle0 = record.FillStyle0|0;
            }

            if (record.StateFillStyle1) {
                FillStyle1 = record.FillStyle1|0;
            }

            if (record.StateLineStyle) {
                LineStyle = record.LineStyle|0;
            }

            continue;
        }

        AnchorX      = record.AnchorX;
        AnchorY      = record.AnchorY;
        var ControlX = record.ControlX;
        var ControlY = record.ControlY;
        var isCurved = record.isCurved;

        if (FillStyle0) {
            idx = (FillStyle0 - 1)|0;
            if (!(idx in fills0)) {
                fills0[idx] = [];
            }

            if (!(depth in fills0[idx])) {
                fills0[idx][depth] = {
                    obj:    fillStyles[idx],
                    startX: MoveX,
                    startY: MoveY,
                    endX:   0,
                    endY:   0,
                    cache:  []
                };
            }

            obj   = fills0[idx][depth];
            cache = obj.cache;
            cache[cache.length] = this.clone(record);

            obj.endX = AnchorX;
            obj.endY = AnchorY;
        }

        if (FillStyle1) {
            idx = (FillStyle1 - 1)|0;
            if (!(idx in fills1)) {
                fills1[idx] = [];
            }

            if (!(depth in fills1[idx])) {
                fills1[idx][depth] = {
                    obj:    fillStyles[idx],
                    startX: MoveX,
                    startY: MoveY,
                    endX:   0,
                    endY:   0,
                    cache:  []
                };
            }

            obj   = fills1[idx][depth];
            cache = obj.cache;
            cache[cache.length] = this.clone(record);

            obj.endX = AnchorX;
            obj.endY = AnchorY;
        }

        if (LineStyle) {
            idx = (LineStyle - 1)|0;
            if (!(idx in lines)) {
                lines[idx] = {
                    obj:   lineStyles[idx],
                    cache: []
                };
            }

            obj   = lines[idx];
            cache = obj.cache;
            cache[cache.length] = [0, LineX, LineY];

            var code = [2, AnchorX, AnchorY];
            if (isCurved) {
                code = [1, ControlX, ControlY, AnchorX, AnchorY];
            }

            cache[cache.length] = code;
        }

        LineX = AnchorX;
        LineY = AnchorY;
    }

    return stack;
};

/**
 * @param   {array}   fills0
 * @param   {array}   fills1
 * @param   {boolean} is_morph
 * @returns {array}
 */
VectorToCanvas.prototype.fillMerge = function (fills0, fills1, is_morph)
{
    fills0 = this.fillReverse(fills0);

    if (fills0.length) {
        for (var idx in fills0) {
            if (!fills0.hasOwnProperty(idx)) {
                continue;
            }

            var fills = fills0[idx];
            if (idx in fills1) {
                var fill1 = fills1[idx];
                for (var depth in fills) {
                    if (!fills.hasOwnProperty(depth)) {
                        continue;
                    }

                    fill1[fill1.length] = fills[depth];
                }
            } else {
                fills1[idx] = fills;
            }
        }
    }

    return this.coordinateAdjustment(fills1, is_morph);
};

/**
 * @param   {array} fills0
 * @returns {array}
 */
VectorToCanvas.prototype.fillReverse = function (fills0)
{
    if (!fills0.length) {
        return fills0;
    }

    for (var i in fills0) {
        if (!fills0.hasOwnProperty(i)) {
            continue;
        }

        var fills = fills0[i];
        for (var depth in fills) {
            if (!fills.hasOwnProperty(depth)) {
                continue;
            }

            var AnchorX = 0;
            var AnchorY = 0;
            var obj     = fills[depth];
            var cacheX  = obj.startX;
            var cacheY  = obj.startY;
            var cache   = obj.cache;
            var length  = cache.length|0;
            if (length) {
                for (var idx in cache) {
                    if (!cache.hasOwnProperty(idx)) {
                        continue;
                    }

                    var recode     = cache[idx];
                    AnchorX        = recode.AnchorX;
                    AnchorY        = recode.AnchorY;
                    recode.AnchorX = cacheX;
                    recode.AnchorY = cacheY;
                    cacheX         = AnchorX;
                    cacheY         = AnchorY;
                }

                var array = [];
                if (length > 0) {
                    while (length) {
                        length = (length - 1)|0;
                        array[array.length] = cache[length];
                    }
                }

                obj.cache = array;
            }

            cacheX     = obj.startX;
            cacheY     = obj.startY;
            obj.startX = obj.endX;
            obj.startY = obj.endY;
            obj.endX   = cacheX;
            obj.endY   = cacheY;
        }
    }
    return fills0;
};

/**
 * @param   {array}   fills1
 * @param   {boolean} is_morph
 * @returns void
 */
VectorToCanvas.prototype.coordinateAdjustment = function (fills1, is_morph)
{
    for (var i in fills1) {
        if (!fills1.hasOwnProperty(i)) {
            continue;
        }

        var array = [];
        var fills = fills1[i];

        for (var depth in fills) {
            if (!fills.hasOwnProperty(depth)) {
                continue;
            }

            array[array.length] = fills[depth];
        }

        var adjustment = [];
        if (array.length > 1 && !is_morph) {
            while (true) {
                if (!array.length) {
                    break;
                }

                var fill = array.shift();
                if (fill.startX === fill.endX && fill.startY === fill.endY) {
                    adjustment[adjustment.length] = fill;
                    continue;
                }

                var length = array.length|0;
                if (length < 0) {
                    break;
                }

                var isMatch = 0;
                while (length) {
                    length = (length - 1)|0;

                    var comparison = array[length];
                    if (comparison.startX === fill.endX && comparison.startY === fill.endY) {
                        fill.endX  = comparison.endX;
                        fill.endY  = comparison.endY;
                        var cache0 = fill.cache;
                        var cache1 = comparison.cache;
                        var cLen   = cache1.length|0;
                        var cIdx   = 0;
                        while (cIdx < cLen) {
                            cache0[cache0.length] = cache1[cIdx];
                            cIdx = (cIdx + 1)|0;
                        }

                        array.splice(length, 1);
                        array.unshift(fill);
                        isMatch = 1;
                        break;
                    }
                }

                if (!isMatch) {
                    array.unshift(fill);
                }
            }
        } else {
            adjustment = array;
        }

        var aLen  = adjustment.length|0;
        var cache = [];
        var obj   = {};
        var idx   = 0;
        while (idx < aLen) {

            var data   = adjustment[idx];
            obj        = data.obj;
            var caches = data.cache;
            var cacheLength = (caches.length)|0;
            cache[cache.length] = [0, data.startX, data.startY];

            var compIdx = 0;
            while (compIdx < cacheLength) {
                var r = caches[compIdx];
                var code = [2, r.AnchorX, r.AnchorY];
                if (r.isCurved) {
                    code = [1, r.ControlX, r.ControlY, r.AnchorX, r.AnchorY];
                }
                cache[cache.length] = code;
                compIdx = (compIdx + 1)|0;
            }

            idx = (idx + 1)|0;
        }

        fills1[i] = {cache: cache, obj: obj};
    }

    return fills1;
};

/**
 * @param   {array} stack
 * @param   {array} array
 * @returns {array}
 */
VectorToCanvas.prototype.setStack = function (stack, array)
{
    if (array.length) {
        for (var i in array) {
            if (!array.hasOwnProperty(i)) {
                continue;
            }

            var data = array[i];
            stack[stack.length] = {
                obj: data.obj,
                cmd: this.buildCommand(data.cache)
            };
        }
    }

    return stack;
};

/**
 * @param   {array}   cache
 * @returns {Function}
 */
VectorToCanvas.prototype.buildCommand = function (cache)
{
    return this.toCanvas2D(cache);
};

/**
 * @param   {array}    cache
 * @returns {Function}
 */
VectorToCanvas.prototype.toCanvas2D = function (cache)
{
    var length  = cache.length|0;
    var str     = "";
    var i       = 0;

    while (i < length) {
        var a = cache[i];
        switch (a[0]) {
            case Graphics.MOVE_TO:
                str += "ctx.moveTo(" + a[1] + "," + a[2] + ");";
                break;
            case Graphics.CURVE_TO:
                str += "ctx.quadraticCurveTo(" + a[1] + "," + a[2] + "," + a[3] + "," + a[4] + ");";
                break;
            case Graphics.LINE_TO:
                str += "ctx.lineTo(" + a[1] + "," + a[2] + ");";
                break;
            case Graphics.CUBIC:
                str += "ctx.bezierCurveTo(" + a[1] + "," + a[2] + "," + a[3] + "," + a[4] + "," + a[5] + "," + a[6] + ");";
                break;


            // Graphics
            case Graphics.ARC:
                str += "ctx.moveTo(" + (a[1] + a[3]) + "," + a[2] + ");";
                str += "ctx.arc(" + a[1] + "," + a[2] + "," + a[3] + ",0 , Math.PI*2, false);";
                break;
            case Graphics.FILL_STYLE:
                str += "var r =  Math.max(0, Math.min(("+ a[1] +" * ct[0]) + ct[4], 255))|0;";
                str += "var g =  Math.max(0, Math.min(("+ a[2] +" * ct[1]) + ct[5], 255))|0;";
                str += "var b =  Math.max(0, Math.min(("+ a[3] +" * ct[2]) + ct[6], 255))|0;";
                str += "var a = +Math.max(0, Math.min(("+ a[4] +" * 255 * ct[3]) + ct[7], 255)) / 255;";
                str += "ctx.fillStyle = 'rgba('+r+', '+g+', '+b+', '+a+')';";
                break;
            case Graphics.STROKE_STYLE:
                str += "var r =  Math.max(0, Math.min(("+ a[1] +" * ct[0]) + ct[4], 255))|0;";
                str += "var g =  Math.max(0, Math.min(("+ a[2] +" * ct[1]) + ct[5], 255))|0;";
                str += "var b =  Math.max(0, Math.min(("+ a[3] +" * ct[2]) + ct[6], 255))|0;";
                str += "var a = +Math.max(0, Math.min(("+ a[4] +" * 255 * ct[3]) + ct[7], 255)) / 255;";
                str += "ctx.strokeStyle = 'rgba('+r+', '+g+', '+b+', '+a+')';";
                str += "ctx.lineWidth   = Math.max("+ a[5] +", 1 / min_scale);";
                str += "ctx.lineCap     = '"+ a[6] +"';";
                str += "ctx.lineJoin    = '"+ a[7] +"';";
                str += "ctx.miterLimit  = "+ a[8] +";";
                break;
            case Graphics.END_FILL:
                str += "if (!is_clip) { ctx.fill(); }";
                break;
            case Graphics.END_STROKE:
                str += "if (!is_clip) { ctx.stroke(); }";
                break;
            case Graphics.BEGIN_PATH:
                str += "ctx.beginPath();";
                break;
            case Graphics.CLOSE_PATH:
                str += "ctx.closePath();";
                break;
            case Graphics.GRADIENT:
                str += "if (!is_clip) {";

                var doRestore = false;
                var matrix = a[1];
                var pointRatio = a[2];
                switch (a[3]) {

                    case GradientType.LINEAR:

                        var xy = this.$linearGradientXY(matrix);
                        str += "var css = ctx.createLinearGradient("+ xy[0] +", "+ xy[1] +", "+ xy[2] +", "+ xy[3] +");";
                        break;

                    case GradientType.RADIAL:

                        str += "ctx.save();";
                        str += "ctx.transform("+ matrix[0] +", "+ matrix[1] +", "+ matrix[2] +", "+ matrix[3] +", "+ (matrix[4]+(matrix[4] / 2 * pointRatio)) +", "+ matrix[5] +");";
                        str += "var css = ctx.createRadialGradient(0, 0, 0, 0, 0, 16384);";

                        doRestore = true;
                        break;
                }

                var style = a[4];
                var interpolation = a[5];

                var len = a[6]|0;
                var idx = 0;
                var pt  = 7; // offset
                while (len > idx) {

                    var color = this.$intToRGBA(a[pt], a[pt + 1]);

                    switch (interpolation) {

                        case InterpolationMethod.RGB:

                            str += "var r =  Math.max(0, Math.min(("+ color.R +" * ct[0]) + ct[4], 255))|0;";
                            str += "var g =  Math.max(0, Math.min(("+ color.G +" * ct[1]) + ct[5], 255))|0;";
                            str += "var b =  Math.max(0, Math.min(("+ color.B +" * ct[2]) + ct[6], 255))|0;";
                            str += "var a = +Math.max(0, Math.min(("+ color.A +" * 255 * ct[3]) + ct[7], 255)) / 255;";
                            str += "css.addColorStop("+ a[pt + 2] +", 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')');";

                            break;

                        case InterpolationMethod.LINEAR_RGB:

                            var HSL = this.$rgbToHSL(color.R, color.G, color.B);

                            str += "css.addColorStop("+ a[pt + 2] +", 'hsla("+ HSL.H +", "+ HSL.S +"%, "+ HSL.L +"%, "+ color.A +")');";

                            break;
                    }

                    pt  = (pt  + 3)|0;
                    idx = (idx + 1)|0;
                }

                // set css
                switch (style) {

                    case "fill":

                        str += "ctx.fillStyle = css;";
                        str += "ctx.fill();";

                        break;

                    case "line":

                        str += "ctx.strokeStyle = css;";

                        if (doRestore) {

                            var xScale = +(this.$sqrt(matrix[0] * matrix[0] + matrix[1] * matrix[1]));
                            var yScale = +(this.$sqrt(matrix[2] * matrix[2] + matrix[3] * matrix[3]));

                            str += "ctx.lineWidth = ctx.lineWidth / "+ this.$max(xScale, yScale) +";";
                        }

                        str += "ctx.stroke();";

                        break;
                }

                if (doRestore) {
                    str += "ctx.restore();";
                }

                str += "}";

                break;
        }

        i = (i + 1)|0;
    }

    return new Function("ctx", "ct", "is_clip", "min_scale", str);
};

/**
 * @type {VectorToCanvas}
 */
Util.prototype.$vtc = new VectorToCanvas();
/**
 * @constructor
 */
var CacheStore = function ()
{
    Util.call(this);

    this._$pool  = [];
    this._$store = [];
    this._$size  = 73400320;
};

/**
 * extends
 */
CacheStore.prototype = Object.create(Util.prototype);
CacheStore.prototype.constructor = CacheStore;

/**
 * @returns void
 */
CacheStore.prototype.reset = function ()
{
    var store = this._$store;

    for (var key in store) {

        if (!store.hasOwnProperty(key)) {
            continue;
        }

        var value = store[key];
        if (!(value instanceof CanvasRenderingContext2D)) {
            continue;
        }

        this.destroy(value);
    }

    this._$store = [];
    this._$size  = 73400320;
};

/**
 * @param   {CanvasRenderingContext2D|WebGLRenderingContext} context
 * @returns void
 */
CacheStore.prototype.destroy = function (context)
{
    var canvas = context.canvas;
    var width  = canvas.width|0;
    var height = canvas.height|0;

    this._$size = (this._$size + width * height)|0;

    if (this.$canWebGL) {
        context.clear(context.STENCIL_BUFFER_BIT | context.COLOR_BUFFER_BIT);
    } else {
        context.clearRect(0, 0, width + 1, height + 1);
    }

    // canvas reset
    canvas.width = canvas.height = 1;

    // pool
    this._$pool[this._$pool.length] = canvas;
};

/**
 * @returns {CanvasRenderingContext2D|WebGLRenderingContext}
 */
CacheStore.prototype.getCanvas = function ()
{
    return this._$pool.pop() || this.$document.createElement("canvas");
};

/**
 * @param   {string} key
 * @returns {CanvasRenderingContext2D|WebGLRenderingContext|null}
 */
CacheStore.prototype.getCache = function (key)
{
    if (typeof key !== "string") {
        key = key + "";
    }

    return (key in this._$store) ? this._$store[key] : null;
};

/**
 * @param   {string} key
 * @returns void
 */
CacheStore.prototype.removeCache = function (key)
{
    if (typeof key !== "string") {
        key = key + "";
    }

    if (key in this._$store) {
        this.destroy(this._$store[key]);
        delete this._$store[key];
    }
};

/**
 * @param {string} key
 * @param {CanvasRenderingContext2D|WebGLRenderingContext} value
 */
CacheStore.prototype.setCache = function (key, value)
{
    if (this._$size > 0) {
        if (value instanceof CanvasRenderingContext2D) {
            var canvas  = value.canvas;
            this._$size = (this._$size - (canvas.width * canvas.height))|0;
        }

        if (typeof key !== "string") {
            key = key + "";
        }

        this._$store[key] = value;
    }
};

/**
 * @param   {string} unique_key
 * @param   {array}  color
 * @returns {string}
 */
CacheStore.prototype.generateKey = function (unique_key, color)
{
    // color
    if (
        this.$isArray(color)
        && color.length === 8
        &&
        (  color[0] !== 1
        || color[1] !== 1
        || color[2] !== 1
        || color[3] !== 1
        || color[4] !== 0
        || color[5] !== 0
        || color[6] !== 0
        || color[7] !== 0)
    ) {

        var R =   this.$max(0, this.$min((255 * color[0]) + color[4], 255))|0;
        var G =   this.$max(0, this.$min((255 * color[1]) + color[5], 255))|0;
        var B =   this.$max(0, this.$min((255 * color[2]) + color[6], 255))|0;
        var A = +(this.$max(0, this.$min((255 * color[3]) + color[7], 255)) / 255);

        unique_key = unique_key +"_"+ R +"_"+ G +"_"+ B +"_"+ A;
    }

    return unique_key + "";
};

Util.prototype.$cacheStore = new CacheStore();
/**
 * @constructor
 */
var Player = function ()
{
    Util.call(this);

    this.id = this.$players.length;
    this.$players[this.id] = this;

    // set div name
    this.name = "swf2js_" + this.id;

    // pool action script
    this._$actions          = [];
    this._$buttonHits       = [];
    this._$downEventHits    = [];
    this._$moveEventHits    = [];
    this._$upEventHits      = [];
    this._$keyDownEventHits = [];
    this._$keyUpEventHits   = [];

    // events
    this._$eventObjects     = [];
    this._$activeObject     = null;

    // params
    this._$ratio            = 1;
    this._$intervalId       = 0;
    this._$stopFlag         = true;
    this._$isLoad           = false;
    this._$loadStatus       = 0;
    this._$width            = 0;
    this._$height           = 0;
    this._$baseWidth        = 0;
    this._$baseHeight       = 0;
    this._$scale            = 1;
    this._$matrix           = [1, 0, 0, 1, 0, 0];
    this._$colorTransform   = [1, 1, 1, 1, 0, 0, 0, 0];
    this._$backgroundColor  = "transparent";
    this._$state            = "up";

    // canvas
    this._$context          = null;
    this._$canvas           = null;
    this._$preContext       = null;
    this._$hitContext       = null;

    // options
    this._$optionWidth      = 0;
    this._$optionHeight     = 0;
    this._$callback         = null;
    this._$tagId            = null;
    this._$FlashVars        = {};
    this._$quality          = this.$canWebGL ? StageQuality.BEST : StageQuality.HIGH;
    this._$bgcolor          = "";

    // packages
    this._$packages         = new Packages(this);

    // global vars
    this._$global           = new Global();

    // base stage
    var stage = new Stage();
    stage
        .initialDictionary(this)
        .initialSetting(stage);

    this.addStage(stage);

    // base set
    this._$stageId = stage.id;
};

/**
 * extends
 * @type {Util}
 */
Player.prototype = Object.create(Util.prototype);
Player.prototype.constructor = Player;

/**
 * properties
 */
Object.defineProperties(Player.prototype, {
    id: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$id;
        },
        /**
         * @param {number} id
         */
        set: function (id) {
            if (typeof id === "number") {
                this._$id = id|0;
            }
        }
    },
    name: {
        /**
         * @return {string}
         */
        get: function () {
            return this._$name;
        },
        /**
         * @param {string} name
         */
        set: function (name) {
            if (typeof name !== "string") {
                name = name + "";
            }
            this._$name = name;
        }
    },
    ratio: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$ratio;
        },
        /**
         * @param {number} ratio
         */
        set: function (ratio) {
            if (typeof ratio === "number") {
                this._$ratio = ratio|0;
            }
        }
    },
    stage: {
        /**
         * @return {Stage}
         */
        get: function () {
            return this.$stages[this._$stageId];
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    root: {
        /**
         * @return {MainTimeline|MovieClip}
         */
        get: function () {
            return this.stage._root;
        },
        /**
         * readonly
         * @return void
         */
        set: function () {}
    },
    width: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$width;
        },
        /**
         * @param {number} width
         */
        set: function (width) {
            if (typeof width === "number") {
                this._$width = width|0;
            }
        }
    },
    height: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$height;
        },
        /**
         * @param {number} height
         */
        set: function (height) {
            if (typeof height === "number") {
                this._$height = height|0;
            }
        }
    },
    baseWidth: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$baseWidth;
        },
        /**
         * @param {number} base_width
         */
        set: function (base_width) {
            if (typeof base_width === "number") {
                this._$baseWidth = base_width|0;
            }
        }
    },
    baseHeight: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$baseHeight;
        },
        /**
         * @param {number} base_height
         */
        set: function (base_height) {
            if (typeof base_height === "number") {
                this._$baseHeight = base_height|0;
            }
        }
    },
    scale: {
        /**
         * @return {number}
         */
        get: function () {
            return this._scale;
        },
        /**
         * @param {number} scale
         */
        set: function (scale) {
            if (typeof scale === "number") {
                this._scale = +scale;
            }
        }
    },
    matrix: {
        /**
         * @return {array}
         */
        get: function () {
            return this._$matrix;
        },
        /**
         * @param {array} matrix
         */
        set: function (matrix) {
            if (this.$isArray(matrix)) {
                this._$matrix = this.$cloneArray(matrix);
            }
        }
    },
    colorTransform: {
        /**
         * @return {array}
         */
        get: function () {
            return this._$colorTransform;
        },
        /**
         * @param {array} color_transform
         */
        set: function (color_transform) {
            if (this.$isArray(color_transform)) {
                this._$colorTransform = this.$cloneArray(color_transform);
            }
        }
    },
    backgroundColor: {
        /**
         * @return {string}
         */
        get: function () {
            return this._$backgroundColor;
        },
        /**
         * @param {string} background_color
         */
        set: function (background_color) {
            if (typeof background_color === "string") {
                this._$backgroundColor = background_color;
            }
        }
    },
    intervalId: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$intervalId;
        },
        /**
         * @param {number} interval_id
         */
        set: function (interval_id) {
            if (typeof interval_id === "number") {
                this._$intervalId = interval_id|0;
            }
        }
    },
    stopFlag: {
        /**
         * @return {boolean}
         */
        get: function () {
            return this._$stopFlag;
        },
        /**
         * @param {boolean} stop_flag
         */
        set: function (stop_flag) {
            if (typeof stop_flag === "boolean") {
                this._$stopFlag = stop_flag;
            }
        }
    },
    isLoad: {
        /**
         * @return {boolean}
         */
        get: function () {
            return this._$isLoad;
        },
        /**
         * @param {boolean} is_load
         */
        set: function (is_load) {
            if (typeof is_load === "boolean") {
                this._$isLoad = is_load;
            }
        }
    },
    loadStatus: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$loadStatus;
        },
        /**
         * @param {number} load_status
         */
        set: function (load_status) {
            if (typeof load_status === "number") {
                this._$loadStatus = load_status|0;
            }
        }
    },
    optionWidth: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$optionWidth;
        },
        /**
         * @param {number} option_width
         */
        set: function (option_width) {
            if (typeof option_width === "number") {
                this._$optionWidth = option_width|0;
            }
        }
    },
    optionHeight: {
        /**
         * @return {number}
         */
        get: function () {
            return this._$optionHeight;
        },
        /**
         * @param {number} option_height
         */
        set: function (option_height) {
            if (typeof option_height === "number") {
                this._$optionHeight = option_height|0;
            }
        }
    },
    callback: {
        /**
         * @return {Function|null}
         */
        get: function () {
            return this._$callback;
        },
        /**
         *
         * @param {Function} callback
         */
        set: function (callback) {
            if (typeof callback === "function") {
                this._$callback = callback;
            }
        }
    },
    tagId: {
        /**
         * @return {string|null}
         */
        get: function () {
            return this._$tagId;
        },
        /**
         * @param {string} tag_id
         */
        set: function (tag_id) {
            if (typeof tag_id === "number") {
                tag_id = tag_id + "";
            }

            if (typeof tag_id === "string") {
                this._$tagId = tag_id;
            }
        }
    },
    FlashVars: {
        /**
         * @return {object}
         */
        get: function () {
            return this._$FlashVars;
        },
        /**
         * @param {object} flash_vars
         */
        set: function (flash_vars) {
            if (typeof flash_vars === "object") {
                this._$FlashVars = flash_vars;
            }
        }
    },
    quality: {
        /**
         * @return {string}
         */
        get: function () {
            return this._$quality;
        },
        /**
         * @param {string} quality
         */
        set: function (quality) {
            if (typeof quality === "string") {
                this._$quality = quality;
            }
        }
    },
    bgcolor: {
        /**
         * @return {string|null}
         */
        get: function () {
            return this._$bgcolor;
        },
        /**
         * @param {string} bgcolor
         */
        set: function (bgcolor) {
            if (typeof bgcolor === "string") {
                this._$bgcolor = bgcolor;
            }
        }
    },
    packages: {
        /**
         * @return {Packages}
         */
        get: function () {
            return this._$packages;
        },
        /**
         * readonly
         * @returns void
         */
        set: function () {}
    },
    global: {
        /**
         * @return {Global}
         */
        get: function () {
            return this._$global;
        },
        /**
         * readonly
         * @returns void
         */
        set: function () {}
    },
    context: {
        /**
         * @return {CanvasRenderingContext2D}
         */
        get: function () {
            return this._$context;
        },
        /**
         * @param {CanvasRenderingContext2D} context
         */
        set: function (context) {
            this._$context = context;
        }
    },
    canvas: {
        /**
         * @returns {Canvas}
         */
        get: function () {
            return this._$canvas;
        },
        /**
         * @param {Canvas} canvas
         */
        set: function (canvas) {
            this._$canvas = canvas;
        }
    },
    preContext: {
        /**
         * @return {CanvasRenderingContext2D}
         */
        get: function () {
            return this._$preContext;
        },
        /**
         * @param {CanvasRenderingContext2D} pre_context
         */
        set: function (pre_context) {
            this._$preContext = pre_context;
        }
    },
    hitContext: {
        /**
         * @return {CanvasRenderingContext2D}
         */
        get: function () {
            return this._$hitContext;
        },
        /**
         * @param {CanvasRenderingContext2D} hit_context
         */
        set: function (hit_context) {
            this._$hitContext = hit_context;
        }
    },
    actions: {
        /**
         * @return {array}
         */
        get: function () {
            return this._$actions;
        },
        /**
         * @param {array} actions
         */
        set: function (actions) {
            if (this.$isArray(actions)) {
                this._$actions = actions;
            }
        }
    },
    buttonHits: {
        /**
         * @return {array}
         */
        get: function () {
            return this._$buttonHits;
        },
        /**
         * @param {array} button_hits
         */
        set: function (button_hits) {
            if (this.$isArray(button_hits)) {
                this._$buttonHits = button_hits;
            }

        }
    },
    downEventHits: {
        /**
         * @return {array}
         */
        get: function () {
            return this._$downEventHits;
        },
        /**
         * @param {array} down_event_hits
         */
        set: function (down_event_hits) {
            if (this.$isArray(down_event_hits)) {
                this._$downEventHits = down_event_hits;
            }
        }
    },
    moveEventHits: {
        /**
         * @return {array}
         */
        get: function () {
            return this._$moveEventHits;
        },
        /**
         * @param {array} move_event_hits
         */
        set: function (move_event_hits) {
            if (this.$isArray(move_event_hits)) {
                this._$moveEventHits = move_event_hits;
            }
        }
    },
    upEventHits: {
        /**
         * @return {array}
         */
        get: function () {
            return this._$upEventHits;
        },
        /**
         * @param {array} up_event_hits
         */
        set: function (up_event_hits) {
            if (this.$isArray(up_event_hits)) {
                this._$upEventHits = up_event_hits;
            }
        }
    },
    keyDownEventHits: {
        /**
         * @return {array}
         */
        get: function () {
            return this._$keyDownEventHits;
        },
        /**
         * @param {array} key_down_event_hits
         */
        set: function (key_down_event_hits) {
            if (this.$isArray(key_down_event_hits)) {
                this._$keyDownEventHits = key_down_event_hits;
            }
        }
    },
    keyUpEventHits: {
        /**
         * @return {array}
         */
        get: function () {
            return this._$keyUpEventHits;
        },
        /**
         * @param {array} key_up_event_hits
         */
        set: function (key_up_event_hits) {
            if (this.$isArray(key_up_event_hits)) {
                this._$keyUpEventHits = key_up_event_hits;
            }
        }
    },
    eventObjects: {
        /**
         * @return {array}
         */
        get: function () {
            return this._$eventObjects;
        },
        /**
         * @param {DisplayObject} event_objects
         */
        set: function (event_objects) {
            if (this.$isArray(event_objects)) {
                this._$eventObjects = event_objects;
            }
        }
    },
    activeObject: {
        /**
         * @return {object}
         */
        get: function () {
            return this._$activeObject;
        },
        /**
         * @param {object} object
         */
        set: function (object) {
            this._$activeObject = object;
        }
    }
});


/**
 * @param   {number} r
 * @param   {number} g
 * @param   {number} b
 * @returns void
 */
Player.prototype.setBackgroundColor = function (r, g, b)
{
    if (typeof r !== "number") {
        r = 255;
    }
    if (typeof g !== "number") {
        g = 255;
    }
    if (typeof b !== "number") {
        b = 255;
    }

    this._$backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
};

/**
 * @param   {number} stage_id
 * @returns {Stage|null}
 */
Player.prototype.getStageAt = function (stage_id)
{
    if (stage_id in this.$stages) {
        return this.$stages[stage_id];
    }
    return null;
};

/**
 * @param {Stage} stage
 */
Player.prototype.addStage = function (stage)
{
    this.$stages[stage.id] = stage;
};

/**
 * @returns {{
 *  width: (number),
 *  height: (number),
 *  callback: (Function|null),
 *  tagId: (number),
 *  FlashVars: (object|null),
 *  quality: (string),
 *  bgcolor: (string|boolean|null)
 * }}
 */
Player.prototype.getOptions = function ()
{
    return {
        width:     this.optionWidth,
        height:    this.optionHeight,
        callback:  this.callback,
        tagId:     this.tagId,
        FlashVars: this.FlashVars,
        quality:   this.quality,
        bgcolor:   this.bgcolor
    };
};

/**
 * @param   {object} options
 * @returns void
 */
Player.prototype.setOptions = function (options)
{
    if (typeof options === "object") {
        this.optionWidth  = options.width      || this.optionWidth;
        this.optionHeight = options.height     || this.optionHeight;
        this.callback     = options.callback   || this.callback;
        this.tagId        = options.tagId      || this.tagId;
        this.FlashVars    = options.FlashVars  || this.FlashVars;
        this.quality      = options.quality    || this.quality;
        this.bgcolor      = options.bgcolor    || this.bgcolor;
    }

    this.setRatio();
};

/**
 * @returns void
 */
Player.prototype.setRatio = function ()
{
    // quality
    switch (this.quality) {
        case StageQuality.BEST:
        case StageQuality.HIGH:
            this._$ratio = this.$devicePixelRatio;
            break;
        case StageQuality.MEDIUM:
            this._$ratio = this.$devicePixelRatio * 0.8;
            break;
        case StageQuality.LOW:
            this._$ratio = this.$devicePixelRatio * 0.5;
            break;
    }
};

/**
 * @param {DisplayObject} instance
 * @param {array} matrix
 * @param {object} bounds
 */
Player.prototype.addEventObject = function (instance, matrix, bounds)
{
    this.eventObjects.unshift({
        "instance": instance,
        "matrix"  : this.$cloneArray(matrix),
        "bounds"  : bounds
    });
};


/**
 * @returns void
 */
Player.prototype.play = function ()
{
    this.stopFlag = false;

    this.intervalId = this.$setInterval.call(null,
        (function (player) {
            var animation = player.$requestAnimationFrame;
            return function ()
            {
                animation(function () {
                    if (player.isLoad && !player.stopFlag) {
                        player.run();
                    }
                }, 0);
            };
        })(this), (1000 / this.stage.frameRate)|0
    );
};

/**
 * @returns void
 */
Player.prototype.stop = function ()
{
    this.stopFlag = true;
    this.$clearInterval.call(null, this.intervalId);
};

/**
 * @returns void
 */
Player.prototype.loadEvent = function ()
{
    switch (this.loadStatus) {
        case 2:
            this.resize();
            this.loadStatus = 3;
            break;
        case 3:
            if (this.isLoad && this.stopFlag) {
                this.loadStatus = 4;
                this.loaded();
            }
            break;
    }

    if (this.loadStatus !== 4) {
        var retry = (function (self)
        {
            return function()
            {
                self.loadEvent();
            };
        })(this);

        this.$setTimeout.call(null, retry, 0);
    }
};

/**
 * @returns void
 */
Player.prototype.initialize = function ()
{
    var div;
    var doc = this.$document;
    if (this.tagId) {

        if (doc.readyState === "loading") {
            var self = this;
            var initialize = function ()
            {
                window.removeEventListener("DOMContentLoaded", initialize);
                self.initialize();
            };
            window.addEventListener("DOMContentLoaded", initialize);
            return void(0);
        }

        var container = doc.getElementById(this.tagId);
        if (!container) {
            alert("Not Found Tag ID:" + this.tagId);
            return void(0);
        }

        div = doc.getElementById(this.name);
        if (div) {
            this.deleteNode();
        } else {
            div    = doc.createElement("div");
            div.id = this.name;
            container.appendChild(div);
        }

    } else {
        doc.body.insertAdjacentHTML("beforeend", "<div id='" + this.name + "'></div>");
    }

    div = doc.getElementById(this.name);
    if (div) {
        this.initStyle(div);
        this.buildWait();
    }

    if (!this.canvas) {
        this.initializeCanvas();
    }

    this.loadStatus = (this.loadStatus + 1)|0;
    this.loadEvent();
};

/**
 * @param   {object} div
 * @returns void
 */
Player.prototype.initStyle = function (div)
{
    var style = div.style;

    // set css
    style.position                       = "relative";
    style.top                            = "0";
    style.backgroundColor                = "transparent";
    style.overflow                       = "hidden";
    style["-webkit-backface-visibility"] = "hidden";
    style["-webkit-user-select"]         = "none";

    var parent  = div.parentNode;
    var oWidth  = this.optionWidth;
    var oHeight = this.optionHeight;

    var width;
    var height;
    if (parent.tagName === "BODY") {
        width  = (oWidth > 0)  ? oWidth  : window.innerWidth;
        height = (oHeight > 0) ? oHeight : window.innerHeight;
    } else {
        width  = (oWidth > 0)  ? oWidth  : parent.offsetWidth;
        height = (oHeight > 0) ? oHeight : parent.offsetHeight;
    }

    style.width  = width  + "px";
    style.height = height + "px";
};

/**
 * @returns void
 */
Player.prototype.buildWait = function ()
{
    var div = this.$document.getElementById(this.name);
    if (div) {

        var loadingId = this.name + "_loading";

        var css = "<style>";
        css += "#" + loadingId + " {\n";
        css += "position: absolute;\n";
        css += "top: 50%;\n";
        css += "left: 50%;\n";
        css += "margin: -24px 0 0 -24px;\n";
        css += "width: 50px;\n";
        css += "height: 50px;\n";
        css += "border-radius: 50px;\n";
        css += "border: 8px solid #dcdcdc;\n";
        css += "border-right-color: transparent;\n";
        css += "box-sizing: border-box;\n";
        css += "-webkit-animation: " + loadingId + " 0.8s infinite linear;\n";
        css += "animation: " + loadingId + " 0.8s infinite linear;\n";
        css += "} \n";
        css += "@-webkit-keyframes " + loadingId + " {\n";
        css += "0% {-webkit-transform: rotate(0deg);}\n";
        css += "100% {-webkit-transform: rotate(360deg);}\n";
        css += "} \n";
        css += "@keyframes " + loadingId + " {\n";
        css += "0% {transform: rotate(0deg);}\n";
        css += "100% {transform: rotate(360deg);}\n";
        css += "} \n";
        css += "</style>";

        div.innerHTML = css;

        var loadingDiv = this.$document.createElement("div");
        loadingDiv.id  = loadingId;

        div.appendChild(loadingDiv);
    }
};

/**
 * @return void
 */
Player.prototype.loaded = function ()
{
    var div = this.$document.getElementById(this.name);
    if (div) {

        // DOM
        this.deleteNode();

        // reset
        this.buttonHits       = [];
        this.downEventHits    = [];
        this.moveEventHits    = [];
        this.upEventHits      = [];
        this.keyDownEventHits = [];
        this.keyUpEventHits   = [];

        // action start
        this.doAction();

        var self = this;

        // callback
        if (typeof this.callback === "function") {
            this.callback.call(window, this.root);
        }

        // set backgroundColor
        if (this.bgcolor) {
            this.backgroundColor = this.bgcolor;
        }

        // TODO
        // load sound
        // if (this.$isTouch) {
        //     var loadSounds = this.loadSounds;
        //     var length     = 0 | loadSounds.length;
        //     if (length) {
        //         var loadSound = function ()
        //         {
        //             canvas.removeEventListener(self.$startEvent, loadSound);
        //             for (var idx in loadSounds) {
        //                 if (!loadSounds.hasOwnProperty(idx)) {
        //                     continue;
        //                 }
        //
        //                 var audio = loadSounds[idx];
        //                 audio.load();
        //             }
        //         };
        //
        //         canvas.addEventListener(this.$startEvent, loadSound);
        //     }
        // }

        this.canvas.addEventListener(this.$startEvent, function (event)
        {
            self.$event = event;
            self.downEvent(event);
        });

        this.canvas.addEventListener(this.$moveEvent, function (event)
        {
            self.$event = event;
            self.moveEvent(event);
        });

        this.canvas.addEventListener(this.$endEvent, function (event)
        {
            self.$event = event;
            self.upEvent(event);
        });

        // render start
        this.draw();

        // append canvas
        div.appendChild(this.canvas);

        // player start
        this.play();
    }
};


/**
 * @returns void
 */
Player.prototype.deleteNode = function ()
{
    var div = this.$document.getElementById(this.name);
    if (div) {

        var childNodes = div.childNodes;

        var idx = childNodes.length|0;
        if (idx) {
            while (idx) {
                idx = (idx - 1)|0;
                div.removeChild(childNodes[idx]);
            }
        }
    }
};

/**
 * @returns void
 */
Player.prototype.initializeCanvas = function ()
{
    var self = this;

    var canvas    = self.$document.createElement("canvas");
    canvas.width  = 1;
    canvas.height = 1;

    // set css
    var style = canvas.style;
    style.zIndex                         = "0";
    style.position                       = "absolute";
    style.top                            = "0";
    style.left                           = "0";
    style.zoom                           = 100 / self.ratio + "%";
    style["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)";
    style.MozTransformOrigin             = "0 0";
    style.MozTransform                   = "scale(" + 1 / self.ratio + ")";

    // main canvas
    self.canvas  = canvas;
    self.context = canvas.getContext("2d");
    if ("imageSmoothingEnabled" in self.context) {
        self.context.imageSmoothingEnabled = false;
    }

    // pre canvas
    var preCanvas    = self.$cacheStore.getCanvas();
    preCanvas.width  = 1;
    preCanvas.height = 1;
    self.preContext  = preCanvas.getContext("2d");
    if ("imageSmoothingEnabled" in self.preContext) {
        self.preContext.imageSmoothingEnabled = false;
    }

    // hit canvas
    var hitCanvas    = self.$cacheStore.getCanvas();
    hitCanvas.width  = 1;
    hitCanvas.height = 1;
    self.hitContext  = hitCanvas.getContext("2d");
};

/**
 * @returns void
 */
Player.prototype.resize = function ()
{
    var div = this.$document.getElementById(this.name);
    if (div) {

        var oWidth  = this.optionWidth;
        var oHeight = this.optionHeight;

        var element     = this.$document.documentElement;
        var innerWidth  = this.$max(element.clientWidth, window.innerWidth   || 0);
        var innerHeight = this.$max(element.clientHeight, window.innerHeight || 0);

        var parent = div.parentNode;
        if (parent.tagName !== "BODY") {
            innerWidth  = parent.offsetWidth;
            innerHeight = parent.offsetHeight;
        }
        var screenWidth  = (oWidth  > 0) ? oWidth  : innerWidth;
        var screenHeight = (oHeight > 0) ? oHeight : innerHeight;

        var scale  = +this.$min((screenWidth / this.baseWidth), (screenHeight / this.baseHeight));
        var width  = (this.baseWidth  * scale)|0;
        var height = (this.baseHeight * scale)|0;

        if (width !== this.width || height !== this.height) {

            // div
            var style    = div.style;
            style.width  = width  + "px";
            style.height = height + "px";
            style.top    = "0";
            style.left   = ((screenWidth / 2) - (width / 2)) + "px";

            width  = (width  * this.$devicePixelRatio)|0;
            height = (height * this.$devicePixelRatio)|0;

            this.scale  = scale;
            this.width  = width;
            this.height = height;

            // main
            this.canvas.width  = width;
            this.canvas.height = height;

            // pre
            var preCanvas    = this.preContext.canvas;
            preCanvas.width  = width;
            preCanvas.height = height;

            // hit canvas
            var hitCanvas    = this.hitContext.canvas;
            hitCanvas.width  = width;
            hitCanvas.height = height;

            // tmp
            if (this.$isAndroid && this.$isChrome) {
                var tmpContext   = this.$tmpContext;
                var tmpCanvas    = tmpContext.canvas;
                tmpCanvas.width  = width;

                tmpCanvas.height = height;
            }

            var mScale  = scale * this.ratio / 20;
            this.matrix = [mScale, 0, 0, mScale, 0, 0];

            // cache reset
            this.$cacheStore.reset();
        }
    }
};

/**
 * @param   {string} path
 * @returns {*}
 */
Player.prototype.getPackage = function (path)
{
    var packages = this.packages;

    var names  = path.split(".");
    var length = names.length;

    var idx = 0;
    while (idx < length) {
        var name = names[idx];
        packages = packages[name];

        idx = (idx + 1)|0;
    }

    this.$window.swf2js.currentPlayerId = this.id;

    return packages;
};

/**
 * @returns void
 */
Player.prototype.run = function ()
{
    // TODO 計測は後で削除
    stats.begin();

    // hits reset
    this.buttonHits       = [];
    this.downEventHits    = [];
    this.moveEventHits    = [];
    this.upEventHits      = [];
    this.keyDownEventHits = [];
    this.keyUpEventHits   = [];

    // event reset
    this.eventObjects     = [];

    // execute
    this.doAction();
    this.draw();

    // TODO 計測は後で削除
    stats.end();
};

/**
 * @returns void
 */
Player.prototype.doAction = function ()
{
    if (this.actions.length) {

        var i = 0;
        while (i < this.actions.length) {

            var obj = this.actions[i];
            i = (i + 1)|0;

            var mc      = obj.caller;
            var args    = obj.args || [];
            var actions = obj.actions;

            switch (typeof actions) {

                case "function":
                    actions.apply(mc, [mc, args]);
                    break;

                default:
                    var length = actions.length|0;
                    var idx    = 0;
                    while (idx < length) {
                        var action = actions[idx];
                        idx = (idx + 1)|0;

                        if (typeof action !== "function") {
                            continue;
                        }

                        action.apply(mc, [mc, args]);
                    }

                    break;
            }
        }
    }

    // reset
    this.actions = [];
};

/**
 * @returns void
 */
Player.prototype.draw = function ()
{
    /**
     * pre draw
     */
    var ctx    = this.preContext;
    var canvas = ctx.canvas;
    var width  = canvas.width|0;
    var height = canvas.height|0;

    if (width > 0 && height > 0) {

        // reset
        ctx.globalCompositeOperation = "source-over";
        ctx.setTransform(1, 0, 0, 1, 0, 0);

        // background color
        switch (this.backgroundColor) {
            case "transparent":
            case false:

                // pre clear
                ctx.clearRect(0, 0, width + 1, height + 1);

                // main clear
                this.context.clearRect(0, 0, width + 1, height + 1);

                break;
            default:

                ctx.fillStyle = this.backgroundColor;
                ctx.fillRect(0, 0, width + 1, height + 1);

                break;
        }

        // pre draw
        this.root._$draw(this.matrix, this.colorTransform, false, true);


        /**
         * draw
         */

        // reset
        this.context.clearRect(0, 0, width + 1, height + 1);

        // draw
        this.context.setTransform(1, 0, 0, 1, 0, 0);
        this.context.drawImage(canvas, 0, 0, width, height);

    }
};

/**
 * @param  {object} event
 * @return {boolean}
 */
Player.prototype.hitTest = function (event)
{
    var eventObjects = this.eventObjects;

    var length = eventObjects.length;
    if (length) {

        var div  = this.$document.getElementById(this.name);
        var rect = div.getBoundingClientRect();

        var x = (this.$window.pageXOffset + rect.left)|0;
        var y = (this.$window.pageYOffset + rect.top)|0;

        var touchX = 0;
        var touchY = 0;

        if (this.$isTouch) {
            var changedTouche = event.changedTouches[0];
            touchX            = changedTouche.pageX|0;
            touchY            = changedTouche.pageY|0;
        } else {
            touchX = event.pageX|0;
            touchY = event.pageY|0;
        }

        touchX = (touchX - x)|0;
        touchY = (touchY - y)|0;

        // canvas point
        var pointX = +(touchX * this.ratio);
        var pointY = +(touchY * this.ratio);

        // point
        touchX = +(touchX / this.scale);
        touchY = +(touchY / this.scale);

        // start
        var idx = 0;
        while (length > idx) {

            var obj    = eventObjects[idx];
            var bounds = obj.bounds;

            if (touchX >= bounds.xMin && touchX <= bounds.xMax &&
                touchY >= bounds.yMin && touchY <= bounds.yMax
            ) {

                // reset
                var ctx = this.hitContext;
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

                // hit test
                var instance = obj.instance;
                if (instance._$hit(pointX, pointY, obj.matrix)) {

                    // PC
                    if (!isTouch && instance.useHandCursor && this._$state === "up") {

                        this.canvas.style.cursor = "pointer";

                    }

                    if (this._$state === "up") {

                        event.preventDefault();
                        this.activeObject = obj;

                    }

                    return true;
                }
            }

            idx = (idx + 1)|0;
        }
    }

    return false;
};

/**
 * @param  {object} event
 * @return void
 */
Player.prototype.moveEvent = function (event)
{
    var instance;
    switch (this.hitTest(event)) {

        case true:

            if (this.activeObject) {

                instance = this.activeObject.instance;
                if (instance.toString() === "[object SimpleButton]") {

                    switch (this._$state) {

                        case "up":

                            if (instance._$status !== "over") {

                                instance._$changeState("over");
                                this.draw();

                            }

                            break;

                        case "down":

                            if (instance._$status === "over") {

                                instance._$changeState("down");
                                this.draw();

                            }

                            break;
                    }

                }

            }

            break;

        case false:

            switch (this.activeObject === null) {

                case true:

                    this.canvas.style.cursor = "auto";

                    break;

                case false:

                    instance = this.activeObject.instance;
                    if (instance.toString() === "[object SimpleButton]") {


                        switch (this._$state) {

                            case "down":

                                instance._$changeState("over");
                                this.draw();

                                break;

                            case "up":

                                instance._$changeState("up");
                                this.draw();
                                this.activeObject = null;
                                this.canvas.style.cursor = "auto";

                                break;
                        }

                    }



                    break;
            }

            break;

    }
};

/**
 * @param  {object} event
 * @return void
 */
Player.prototype.downEvent = function (event)
{
    // pc operation
    if (!isTouch) {
        this._$state = "down";
    }

    var instance;

    switch (this.hitTest(event)) {

        case true:

            instance = this.activeObject.instance;
            if (instance.toString() === "[object SimpleButton]") {

                if (instance._$status !== "down") {

                    instance._$changeState("down");
                    this.draw();

                }
            }

            break;

        case false:

            switch (this.activeObject === null) {

                case true:

                    this.canvas.style.cursor = "auto";

                    break;

                case false:

                    instance = this.activeObject.instance;
                    if (instance.toString() === "[object SimpleButton]") {

                        if (instance._$status !== "up") {

                            instance._$changeState("up");
                            this.draw();

                        }

                    }
                    this.activeObject = null;

                    break;

            }

            break;

    }

    // sp operation
    if (isTouch) {
        this._$state = "down";
    }

};

/**
 * @param  {object} event
 * @return void
 */
Player.prototype.upEvent = function (event)
{
    // operation
    this._$state = "up";

    var instance;
    switch (this.hitTest(event)) {

        case true:

            instance = this.activeObject.instance;
            if (instance.toString() === "[object SimpleButton]") {

                switch (isTouch) {

                    case true:

                        instance._$changeState("up");
                        this.draw();

                        break;

                    case false:

                        if (instance._$status !== "over") {

                            instance._$changeState("over");
                            this.draw();

                        }

                        break;

                }
            }


            break;

        case false:

            if (this.activeObject) {

                instance = this.activeObject.instance;
                if (instance.toString() === "[object SimpleButton]") {

                    if (instance._$status !== "up") {

                        instance._$changeState("up");
                        this.draw();

                    }

                }

            }

            // reset
            this.canvas.style.cursor = "auto";
            this.activeObject = null;

            break;
    }
};
/**
 * @constructor
 */
var Swf2js = function ()
{
    Util.call(this);

    // create player
    var player = new Player();
    this.currentPlayerId = player.id;
};

/**
 * extends
 */
Swf2js.prototype = Object.create(Util.prototype);
Swf2js.prototype.constructor = Swf2js;

/**
 * @param {string} url
 * @param {object|null|undefined} options
 */
Swf2js.prototype.load = function (url, options)
{
    // develop only
    if (url === "develop") {
        url = window.location.search.substr(1).split("&")[0];
    }

    if (url) {

        // player setup
        var player = this.$players[this.currentPlayerId];

        // start
        player.setOptions(options);
        player.initialize();

        this.$ajax({
            "url":   url,
            "mode":  "binary",
            "event": {
                "loadend": function ()
                {
                    switch (this.status) {
                        case 200:
                        case 304:

                            var data = (this.response) ? this.response : this.responseText;

                            (new ReComposition(player, player.root)).run(data, url);

                            break;
                        default :
                            alert(this.statusText);
                            break;
                    }
                }
                // TODO
                // "progress": function (event)
                // {
                //     var id   = player.getName() + "_loading_span";
                //     var span = player.$document.getElementById(id);
                //     var per  = (event.loaded / event.total * 100)|0;
                //     span.style.width = per + "%";
                // }
            }
        });

    } else {

        alert("please set swf url.");

    }
};

/**
 * @param   {number} width
 * @param   {number} height
 * @param   {number} fps
 * @param   {object} options
 * @returns {MainTimeline}
 */
Swf2js.prototype.createRootMovieClip = function (width, height, fps, options)
{
    // init player
    var player = new Player();
    player.setOptions(options);
    player.initialize();

    // default params
    width  = width  || 240;
    height = height || 240;
    fps    = fps    || 60;

    // set params
    player.baseWidth  = width|0;
    player.baseHeight = height|0;
    player.stage.frameRate = fps|0;

    // readyState
    switch (this.$document.readyState) {

        // retry
        case "loading":

            var reTry = function () {
                this.removeEventListener("DOMContentLoaded", reTry, false);
                player.loadStatus = 2;
                player.isLoad = true;
            };

            // DOMContentLoaded
            window.addEventListener("DOMContentLoaded", reTry, false);

            break;

        // player start
        case "complete":

            player.loadStatus = 2;
            player.isLoad = true;

            break;
    }

    return player.root;
};

        window.swf2js = new Swf2js();
    })(window);
}