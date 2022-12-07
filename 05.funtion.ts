// 05 | 函数类型：返回值类型和参数类型到底如何定义？
{
  const add = (a: number, b: number): number => a + b;
  function fn(): void {}
  fn();
}
{
  type Adder = (a: number, b: number) => number;
  const add: Adder = (a, b) => a + b;
}
{
  interface Entity {
    add: (a: number, b: number) => number;
    del: (a: number, b: number) => number;
  }
  const entity: Entity = {
    add: (a, b) => a + b,
    del: (a, b) => a - b,
  };
}

// 可缺省和可推断的返回值类型
{
  function computeTypes(one: string, two: number) {
    const nums = [two];
    const strs = [one];
    return {
      nums,
      strs,
    };
  }
}

// Generator 函数的返回值

// 参数类型
// 可选参数和默认参数
{
  function log(x?: string) {
    // 类型标注的:前添加?表示 log 函数的参数 x 就是可缺省的
    return x;
  }
  log();
  log("hello");

  function log1(x: string | undefined) {
    return x;
  }
  //   log1();
  log1(undefined);

  //   函数的默认参数类型必须是参数类型的子类型
  function log2(x: string | number = "string") {
    return x;
  }
  log2();
}

// 剩余参数
{
  function sum(...nums: number[]) {
    return nums.reduce((a, b) => a + b);
  }
  sum(1, 2, 3, 4, 5);
  //   sum(1, "2");
}

// this
{
  function say(this: Window, name: string) {
    console.log(this.name);
  }
  window.say = say;
  window.say("hello");
}
{
  interface Person {
    name: string;
    say(this: Person): void;
  }
  const person: Person = {
    name: "captain",
    say() {
      console.log(this.name);
    },
  };
  //   注意：显式注解函数中的 this 类型，它表面上占据了第一个形参的位置，
  // 但并不意味着函数真的多了一个参数，因为 TypeScript 转译为 JavaScript 后，
  // “伪形参” this 会被抹掉，这算是 TypeScript 为数不多的特有语法。
  person.say();
  const fn = person.say;
  //   fn()
}

// 函数重载
{
  function convert(x: string): number;
  function convert(x: number): string;
  function convert(x: null): -1;
  function convert(x: string | number | null): any {
    if (typeof x === "string") {
      return Number(x);
    }
    if (typeof x === "number") {
      return String(x);
    }
    return -1;
  }
  const x1 = convert("1"); // => number
  const x2 = convert(1); // => string
  const x3 = convert(null); // -1
}
