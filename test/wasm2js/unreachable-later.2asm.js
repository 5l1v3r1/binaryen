
function asmFunc(global, env) {
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
 var global$0 = 10;
 function $0($0_1) {
  $0_1 = $0_1 | 0;
  var $15 = Math_fround(0), $21 = 0, $29 = 0, $26 = 0;
  if (global$0) {
   return $0_1 | 0
  }
  if (global$0) {
   return $0_1 | 0
  }
  global$0 = 0;
  label$3 : while (1) {
   label$4 : {
    if (global$0) {
     return $0_1 | 0
    }
    if (global$0) {
     return $0_1 | 0
    }
    if (global$0) {
     return $0_1 | 0
    }
    $15 = Math_fround(0.0);
    if (global$0) {
     return $0_1 | 0
    }
   }
   $21 = 32;
   if (!$21) {
    continue label$3
   }
   $26 = 1;
   break label$3;
  };
  if (!$26) {
   $29 = 0
  } else {
   $29 = 1
  }
  if (!$29) {
   return -255 | 0
  } else {
   abort()
  }
 }
 
 return {
  "func_50": $0
 };
}

var retasmFunc = asmFunc({
    Math,
    Int8Array,
    Uint8Array,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array,
    NaN,
    Infinity
  }, {
    abort: function() { throw new Error('abort'); }
  });
export var func_50 = retasmFunc.func_50;
