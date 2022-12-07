// 数组
{
  let arr1: number[] = [1, 2, 3];
  let arr2: string[] = ["1", "2", "3"];

  let arr3: Array<number> = [1, 2, 3];
  let arr4: Array<string> = ["1", "2", "3"];
}

// 元组
{
  // const x: [State, setState] = [state, setState];
  // const y: [setState, State] = [setState, state];
}

// 特殊类型
// any
{
  let any1: any = {};
  any1 = 2;
  any1 = "1";
  any1 = true;
  any1 = Symbol();
  let n1: number = any1;
  let s1: string = any1;

  let any2: any = {};
  let z = any2.x.y.z;
  z();
}

// unknown
{
  let res: unknown;
  let anything: any = res;
  let unknown: unknown = res;
  if (typeof res === "number") {
    res.toFixed(2);
  } else if (typeof res === "string") {
    res.toLowerCase();
  }
}

// void、null、undefined
{
  // 废材三兄弟
  // void 类型，它仅适用于表示没有返回值的函数
  // undefined 的最大价值主要体现在接口类型（第 7 讲会涉及）上，它表示一个可缺省、未定义的属性。
  // null 的价值我认为主要体现在接口制定上，它表明对象或属性可能是空值
  const userInfo: { id?: number; name?: null | string } = { id: 1, name: "wangxin" };
  if (userInfo.id !== undefined) {
    userInfo.id.toFixed();
  }
}

// never
{
  function ThrowError(msg: string): never {
    throw Error(msg);
  }
  function InfiniteLoop(): never {
    while (true) {}
  }
  //   我们可以把 never 作为接口类型下的属性类型，用来禁止写接口下特定的属性
  const props: { id: number; name?: never } = { id: 1 };
  //   props.name = null;
  //   props.name = 1;
  //   props.name = '1';
}

// object
declare function create(o: object | null): any;
create({});
create(() => null);

// 类型断言
{
  const arr: number[] = [1, 2, 3, 4];
  const res0: number | undefined = arr.find((i) => i > 2); 
  const res1: number = arr.find((i) => i > 2) as number; // 推荐 as
  const res2: number = <number>arr.find((i) => i > 2);

  let str = "str" as const;
  const readOnlyArr = [0, 1] as const;

  //   非空断言 排除值为 null、undefined 的情况
  let a: null | undefined | string;
  a!.toString();
  //   a.toString() 报错

  //   类型守卫
  if (typeof a === "string") {
    a.toString();
  }
}
