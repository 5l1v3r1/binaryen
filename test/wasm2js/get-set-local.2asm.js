
function asmFunc(global, env, buffer) {
 "almost asm";
 var HEAP8 = new global.Int8Array(buffer);
 var HEAP16 = new global.Int16Array(buffer);
 var HEAP32 = new global.Int32Array(buffer);
 var HEAPU8 = new global.Uint8Array(buffer);
 var HEAPU16 = new global.Uint16Array(buffer);
 var HEAPU32 = new global.Uint32Array(buffer);
 var HEAPF32 = new global.Float32Array(buffer);
 var HEAPF64 = new global.Float64Array(buffer);
 var Math_imul = global.Math.imul;
 var Math_fround = global.Math.fround;
 var Math_abs = global.Math.abs;
 var Math_clz32 = global.Math.clz32;
 var Math_min = global.Math.min;
 var Math_max = global.Math.max;
 var Math_floor = global.Math.floor;
 var Math_ceil = global.Math.ceil;
 var Math_sqrt = global.Math.sqrt;
 var abort = env.abort;
 var nan = global.NaN;
 var infinity = global.Infinity;
 function $1($0, $1_1, $2) {
  $0 = $0 | 0;
  $1_1 = $1_1 | 0;
  $2 = $2 | 0;
  var $3 = 0;
  $3 = 0;
  return ($0 | 0) == ($1_1 | 0) & ($3 | 0) == ($2 | 0) | 0 | 0;
 }
 
 function legalstub$1($0, $1_1, $2) {
  $0 = $0 | 0;
  $1_1 = $1_1 | 0;
  $2 = $2 | 0;
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
  $7 = $0;
  $3 = 0;
  $0 = $3;
  $3 = 0;
  $4 = 32;
  $5 = $4 & 31 | 0;
  if (32 >>> 0 <= ($4 & 63 | 0) >>> 0) {
   {
    $6 = $2 << $5 | 0;
    $4 = 0;
   }
  } else {
   {
    $6 = ((1 << $5 | 0) - 1 | 0) & ($2 >>> (32 - $5 | 0) | 0) | 0 | ($3 << $5 | 0) | 0;
    $4 = $2 << $5 | 0;
   }
  }
  $2 = $6;
  $6 = $0;
  $3 = $1_1;
  $2 = $6 | $2 | 0;
  return $1($7 | 0, $3 | $4 | 0 | 0, $2 | 0) | 0 | 0;
 }
 
 var FUNCTION_TABLE = [];
 return {
  "check_extend_ui32": legalstub$1
 };
}

var memasmFunc = new ArrayBuffer(65536);
var retasmFunc = asmFunc({Math,Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,NaN,Infinity}, {abort:function() { throw new Error('abort'); }},memasmFunc);
export var check_extend_ui32 = retasmFunc.check_extend_ui32;
