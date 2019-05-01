import { setTempRet0 } from 'env';

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
 var setTempRet0 = env.setTempRet0;
 var i64toi32_i32$HIGH_BITS = 0;
 function $0($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0;
  $1_1 = 100;
  switch_ : {
   $7 : {
    default_ : {
     $6 : {
      $5 : {
       $4 : {
        $3_1 : {
         $2_1 : {
          $1_2 : {
           $0_2 : {
            switch ($0_1 | 0) {
            case 0:
             break $0_2;
            case 1:
             break $1_2;
            case 2:
             break $2_1;
            case 3:
             break $3_1;
            case 4:
             break $4;
            case 5:
             break $5;
            case 6:
             break $6;
            case 7:
             break $7;
            default:
             break default_;
            };
           }
           return $0_1 | 0;
          }
         }
        }
        $1_1 = 0 - $0_1 | 0;
        break switch_;
       }
       break switch_;
      }
      $1_1 = 101;
      break switch_;
     }
    }
    $1_1 = 102;
   }
  }
  return $1_1 | 0;
 }
 
 function $1($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_2 = 0, $3_2 = 0;
  $3_2 = 100;
  $2_2 = 0;
  switch_ : {
   $7 : {
    default_ : {
     $4 : {
      $5 : {
       $6 : {
        $3_1 : {
         $2_1 : {
          $1_2 : {
           $0_2 : {
            switch ($0_1 | 0) {
            case 0:
             break $0_2;
            case 1:
             break $1_2;
            case 2:
             break $2_1;
            case 3:
             break $3_1;
            case 4:
             break $4;
            case 5:
             break $5;
            case 6:
             break $6;
            case 7:
             break $7;
            default:
             break default_;
            };
           }
           i64toi32_i32$HIGH_BITS = $1_1;
           return $0_1 | 0;
          }
         }
        }
        $2_2 = 0;
        $1_1 = ($2_2 >>> 0 < $0_1 >>> 0) + $1_1 | 0;
        $1_1 = 0 - $1_1 | 0;
        $0_1 = $2_2 - $0_1 | 0;
        break switch_;
       }
       $1_1 = 0;
       $3_2 = 101;
       $2_2 = $1_1;
      }
     }
    }
    $1_1 = $2_2;
    $0_1 = $3_2;
    break switch_;
   }
   $1_1 = -1;
   $0_1 = -5;
  }
  $2_2 = $0_1;
  i64toi32_i32$HIGH_BITS = $1_1;
  return $2_2 | 0;
 }
 
 function $2($0_1) {
  $0_1 = $0_1 | 0;
  var $1_1 = 0, $2_2 = 0, $3_2 = 0, $4_1 = 0;
  $2_1 : {
   $1_2 : {
    $0_2 : {
     default_ : {
      $1_1 = Math_imul(2, $0_1);
      $2_2 = $1_1;
      $3_2 = $1_1;
      $4_1 = $1_1;
      switch (3 & $0_1 | 0 | 0) {
      case 0:
       break $0_2;
      case 1:
       break $1_2;
      case 2:
       break $2_1;
      default:
       break default_;
      };
     }
     $2_2 = 1e3 + $1_1 | 0;
    }
    $3_2 = 100 + $2_2 | 0;
   }
   $4_1 = 10 + $3_2 | 0;
  }
  return $4_1 | 0;
 }
 
 function $3() {
  block : {
   switch (0 | 0) {
   default:
    break block;
   };
  }
  return 1 | 0;
 }
 
 function legalstub$1($0_1, $1_1) {
  $0_1 = $0_1 | 0;
  $1_1 = $1_1 | 0;
  var $2_2 = 0, $3_2 = 0, $4_1 = 0, $5_1 = 0, $6_1 = 0;
  $3_2 = 0;
  $5_1 = $0_1;
  $6_1 = $3_2;
  $3_2 = 0;
  $4_1 = 32;
  $2_2 = $4_1 & 31 | 0;
  if (32 >>> 0 <= ($4_1 & 63 | 0) >>> 0) {
   {
    $0_1 = $1_1 << $2_2 | 0;
    $4_1 = 0;
   }
  } else {
   {
    $0_1 = ((1 << $2_2 | 0) - 1 | 0) & ($1_1 >>> (32 - $2_2 | 0) | 0) | 0 | ($3_2 << $2_2 | 0) | 0;
    $4_1 = $1_1 << $2_2 | 0;
   }
  }
  $1_1 = $0_1;
  $0_1 = $6_1;
  $3_2 = $5_1;
  $1_1 = $0_1 | $1_1 | 0;
  $1_1 = $1($3_2 | $4_1 | 0 | 0, $1_1 | 0) | 0;
  $3_2 = i64toi32_i32$HIGH_BITS;
  $6_1 = $1_1;
  $5_1 = $3_2;
  $0_1 = $1_1;
  $4_1 = 32;
  $2_2 = $4_1 & 31 | 0;
  if (32 >>> 0 <= ($4_1 & 63 | 0) >>> 0) {
   $0_1 = $3_2 >>> $2_2 | 0
  } else {
   $0_1 = (((1 << $2_2 | 0) - 1 | 0) & $3_2 | 0) << (32 - $2_2 | 0) | 0 | ($0_1 >>> $2_2 | 0) | 0
  }
  setTempRet0($0_1 | 0);
  return $6_1 | 0;
 }
 
 var FUNCTION_TABLE = [];
 return {
  "stmt": $0, 
  "expr": legalstub$1, 
  "arg": $2, 
  "corner": $3
 };
}

var memasmFunc = new ArrayBuffer(65536);
var retasmFunc = asmFunc({Math,Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,NaN,Infinity}, {abort:function() { throw new Error('abort'); },setTempRet0},memasmFunc);
export var stmt = retasmFunc.stmt;
export var expr = retasmFunc.expr;
export var arg = retasmFunc.arg;
export var corner = retasmFunc.corner;
