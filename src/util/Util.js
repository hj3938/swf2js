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
