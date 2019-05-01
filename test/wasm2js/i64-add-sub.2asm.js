
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
 function $1($0, $1_1, $2_1, $3, $4, $5) {
  $0 = $0 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  $5 = $5 | 0;
  var $6 = 0;
  $6 = $0 + $2_1 | 0;
  $0 = $1_1 + $3 | 0;
  if ($6 >>> 0 < $2_1 >>> 0) {
   $0 = $0 + 1 | 0
  }
  $2_1 = $4;
  return ($6 | 0) == ($2_1 | 0) & ($0 | 0) == ($5 | 0) | 0 | 0;
 }
 
 function $2($0, $1_1, $2_1, $3, $4, $5) {
  $0 = $0 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  $5 = $5 | 0;
  var $6 = 0;
  $6 = $0;
  $0 = ($6 >>> 0 < $2_1 >>> 0) + $3 | 0;
  $0 = $1_1 - $0 | 0;
  $1_1 = $6 - $2_1 | 0;
  $6 = $5;
  $2_1 = $4;
  return ($1_1 | 0) == ($2_1 | 0) & ($0 | 0) == ($6 | 0) | 0 | 0;
 }
 
 function legalstub$1($0, $1_1, $2_1, $3, $4, $5) {
  $0 = $0 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  $5 = $5 | 0;
  var $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0;
  $6 = 0;
  $10 = $0;
  $9 = $6;
  $6 = 0;
  $7 = 32;
  $8 = $7 & 31 | 0;
  if (32 >>> 0 <= ($7 & 63 | 0) >>> 0) {
   {
    $0 = $1_1 << $8 | 0;
    $7 = 0;
   }
  } else {
   {
    $0 = ((1 << $8 | 0) - 1 | 0) & ($1_1 >>> (32 - $8 | 0) | 0) | 0 | ($6 << $8 | 0) | 0;
    $7 = $1_1 << $8 | 0;
   }
  }
  $1_1 = $0;
  $0 = $9;
  $6 = $10;
  $1_1 = $0 | $1_1 | 0;
  $11 = $6 | $7 | 0;
  $10 = $1_1;
  $1_1 = 0;
  $9 = $1_1;
  $1_1 = 0;
  $0 = $3;
  $7 = 32;
  $8 = $7 & 31 | 0;
  if (32 >>> 0 <= ($7 & 63 | 0) >>> 0) {
   {
    $6 = $0 << $8 | 0;
    $7 = 0;
   }
  } else {
   {
    $6 = ((1 << $8 | 0) - 1 | 0) & ($0 >>> (32 - $8 | 0) | 0) | 0 | ($1_1 << $8 | 0) | 0;
    $7 = $0 << $8 | 0;
   }
  }
  $0 = $6;
  $6 = $9;
  $1_1 = $2_1;
  $0 = $6 | $0 | 0;
  $9 = $1_1 | $7 | 0;
  $2_1 = $0;
  $0 = 0;
  $3 = $0;
  $0 = 0;
  $6 = $5;
  $7 = 32;
  $8 = $7 & 31 | 0;
  if (32 >>> 0 <= ($7 & 63 | 0) >>> 0) {
   {
    $1_1 = $6 << $8 | 0;
    $7 = 0;
   }
  } else {
   {
    $1_1 = ((1 << $8 | 0) - 1 | 0) & ($6 >>> (32 - $8 | 0) | 0) | 0 | ($0 << $8 | 0) | 0;
    $7 = $6 << $8 | 0;
   }
  }
  $6 = $1_1;
  $1_1 = $3;
  $0 = $4;
  $6 = $1_1 | $6 | 0;
  $3 = $0 | $7 | 0;
  $1_1 = $6;
  $6 = $10;
  $0 = $2_1;
  return $1($11 | 0, $6 | 0, $9 | 0, $0 | 0, $3 | 0, $1_1 | 0) | 0 | 0;
 }
 
 function legalstub$2($0, $1_1, $2_1, $3, $4, $5) {
  $0 = $0 | 0;
  $1_1 = $1_1 | 0;
  $2_1 = $2_1 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  $5 = $5 | 0;
  var $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0;
  $6 = 0;
  $10 = $0;
  $9 = $6;
  $6 = 0;
  $7 = 32;
  $8 = $7 & 31 | 0;
  if (32 >>> 0 <= ($7 & 63 | 0) >>> 0) {
   {
    $0 = $1_1 << $8 | 0;
    $7 = 0;
   }
  } else {
   {
    $0 = ((1 << $8 | 0) - 1 | 0) & ($1_1 >>> (32 - $8 | 0) | 0) | 0 | ($6 << $8 | 0) | 0;
    $7 = $1_1 << $8 | 0;
   }
  }
  $1_1 = $0;
  $0 = $9;
  $6 = $10;
  $1_1 = $0 | $1_1 | 0;
  $11 = $6 | $7 | 0;
  $10 = $1_1;
  $1_1 = 0;
  $9 = $1_1;
  $1_1 = 0;
  $0 = $3;
  $7 = 32;
  $8 = $7 & 31 | 0;
  if (32 >>> 0 <= ($7 & 63 | 0) >>> 0) {
   {
    $6 = $0 << $8 | 0;
    $7 = 0;
   }
  } else {
   {
    $6 = ((1 << $8 | 0) - 1 | 0) & ($0 >>> (32 - $8 | 0) | 0) | 0 | ($1_1 << $8 | 0) | 0;
    $7 = $0 << $8 | 0;
   }
  }
  $0 = $6;
  $6 = $9;
  $1_1 = $2_1;
  $0 = $6 | $0 | 0;
  $9 = $1_1 | $7 | 0;
  $2_1 = $0;
  $0 = 0;
  $3 = $0;
  $0 = 0;
  $6 = $5;
  $7 = 32;
  $8 = $7 & 31 | 0;
  if (32 >>> 0 <= ($7 & 63 | 0) >>> 0) {
   {
    $1_1 = $6 << $8 | 0;
    $7 = 0;
   }
  } else {
   {
    $1_1 = ((1 << $8 | 0) - 1 | 0) & ($6 >>> (32 - $8 | 0) | 0) | 0 | ($0 << $8 | 0) | 0;
    $7 = $6 << $8 | 0;
   }
  }
  $6 = $1_1;
  $1_1 = $3;
  $0 = $4;
  $6 = $1_1 | $6 | 0;
  $3 = $0 | $7 | 0;
  $1_1 = $6;
  $6 = $10;
  $0 = $2_1;
  return $2($11 | 0, $6 | 0, $9 | 0, $0 | 0, $3 | 0, $1_1 | 0) | 0 | 0;
 }
 
 var FUNCTION_TABLE = [];
 return {
  "check_add_i64": legalstub$1, 
  "check_sub_i64": legalstub$2
 };
}

var memasmFunc = new ArrayBuffer(65536);
var retasmFunc = asmFunc({Math,Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,NaN,Infinity}, {abort:function() { throw new Error('abort'); }},memasmFunc);
export var check_add_i64 = retasmFunc.check_add_i64;
export var check_sub_i64 = retasmFunc.check_sub_i64;
