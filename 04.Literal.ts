// 04 | 什么是字面量类型、类型推断、类型拓宽和类型缩小？

// 类型推断
{
  let a = 1;
  let b: number = a;
}
{
  function add(a: number, b: number) {
    return a + b;
  }
  let r = add(1, 2);
  function add2(a: number, b = 1) {
    return a + b;
  }
  add2(1);
  //   add2(1, '2'); 报错
}

// 上下文推断
{
  type Adder = (a: number, b: number) => number;
  const add: Adder = (a, b) => a + b;
  const x1 = add(1, 2);
  //   const x2 = add(1, "2");
}
{
  const str = "str"; // const str: "str"
  const num = 1; // const num: 1
  const bool = true; // const bool: true
}

// 字面量类型
// TypeScript 支持 3 种字面量类型：字符串字面量类型、数字字面量类型、布尔字面量类型
{
  let str: "this is str" = "this is str";
  let num: 1 = 1;
  let bool: true = true;

  let s: string = "any thing";
  s = str;
  //   str = s
}

// 字符串字面量类型
{
  type Diection = "up" | "down" | "left" | "right"; // 联合类型
  function move(direction: Diection) {
    console.log(direction);
  }
  move("up");
  move("down");
  //   move("back");
}

// 数字字面量类型及布尔字面量类型
{
  interface Config {
    size: "small" | "middle" | "large";
    isEnable: true | false;
    margin: 0 | 2 | 4 | 8;
  }
}

//  let 和 const 定义的变量的值相同，而变量类型不一致的具体原因。
{
  const str = "this is string"; // str: 'this is string'
  const num = 1; // num: 1
  const bool = true; // bool: true
}
{
  // 缺省显式类型注解的可变更的变量的类型转换为了赋值字面量类型的父类型
  let str = "this is string"; // str: string
  let num = 1; // num: number
  let bool = true; // bool: boolean
  str = "1";
  num = 2;
  bool = false;
}

// 将 TypeScript 的字面量子类型转换为父类型的这种设计称之为 "literal widening"，也就是字面量类型的拓宽，比如上面示例中提到的字符串字面量类型转换成 string 类型
// Literal Widening 字面量类型的拓宽
{
  let str = "this is string"; // str: string
  let strFun = (str = "this is string") => str; // (str?: string) => string
  const specStr = "this is string"; // specStr: "this is string"
  let str2 = specStr; // str2: string  Literal Widening
  let strFun2 = (str = specStr) => str; // (str?: string) => string
}

// Type Widening
{
  let x = null; // x: any
  let y = undefined; // y: any

  const z = null; // z: null

  let anyFun = (param = null) => param; // (param?: null) => null
  let z2 = z; // null
  let x2 = x; // null
  let y2 = y; // undefined
}

// Type Narrowing 类型缩小
{
  let func = (anything: any) => {
    if (typeof anything === "string") {
      return anything; // string
    } else if (typeof anything === "number") {
      return anything; // number
    }
    return anything; // any
  };
}
{
  let func = (anything: string | number) => {
    if (typeof anything === "string") {
      return anything; // string
    } else if (typeof anything === "number") {
      return anything; // number
    }
  };
}
{
  type Goods = "pen" | "pencil" | "ruler";
  const getPenCost = (item: "pen") => 2;
  const getPencilCost = (item: "pencil") => 1;
  const getRulerCost = (item: "ruler") => 3;
  const getCost = (item: Goods) => {
    if (item === "pen") {
      getPenCost(item); // item: "pen"
    } else if (item === "pencil") {
      getPencilCost(item); // item: "pencil"
    } else if (item === "ruler") {
      getRulerCost(item); // item: "ruler"
    }
  };
  const getCost2 = (item: Goods) => {
    if (item === "pen") {
      item; // item: "pen"
    } else {
      item; // item: "pencil" | "ruler"
    }
  };
}
