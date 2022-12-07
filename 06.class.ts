/* 06 | 类类型：如何高效使用类型化的面向对象编程利器？ */
/* 类 */
{
  class Dog {
    name: string;
    constructor(name: string) {
      this.name = name;
    }

    bark() {
      console.log("wang wang !!");
    }
  }
  //   const dog = new Dog("Q");
  //   dog.bark();
}
{
  class Animal {
    weight: number;
    type = "Animal";
    constructor(weight: number) {
      this.weight = weight;
    }
    say(name: string) {
      console.log(`I'm ${name}`);
    }
  }

  class Dog extends Animal {
    name: string;
    constructor(name: string, weight: number) {
      super(weight);
      this.name = name;
    }
    bark() {
      console.log("汪汪汪!!!");
    }
  }
}

// 公共、私有与受保护的修饰符
{
  class Son {
    public fName: string;
    private lName: string = "xin";
    constructor(fName: string) {
      this.fName = fName;
      this.lName;
    }
  }
  const son = new Son("wangxin");
  console.log(son.fName);
  //   console.log(son.lName);
  son.fName = "111111111";
  //   son.lName = '111111111'
}
{
  class Son {
    public fName: string;
    private name: string = "1111111";
    protected lName: string = "xin111";
    constructor(fName: string) {
      this.fName = fName;
      this.lName;
    }
  }
  class GranSon extends Son {
    constructor(fName: string) {
      super(fName);
    }
    public getMyLastName() {
      return this.lName;
    }
  }
  const son = new GranSon("wangxin");
  console.log(son.getMyLastName());
}

// 只读修饰符
{
  class A {
    public readonly name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
  const a = new A("111");
  console.log(a.name);
  //   a.name = '22222222'
}

// 存取器

// 静态属性
{
  class A {
    static n: string = "A";
    static n1(n: string) {
      console.log(n);
    }
  }
  console.log(A.n);
  A.n1("11111");
}

// 抽象类:不能被实例化仅能被子类继承的特殊类

// implements 关键字
{
  interface IAdder {
    x: number;
    y: number;
    add: () => number;
  }

  class NumAdder implements IAdder {
    x: number;
    y: number;
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
    add() {
      return this.x + this.y;
    }
    addTwice() {
      return (this.x + this.y) * 2;
    }
  }
}

// 类的类型
{
  class A {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }

  //   const a1: A = {}; // ts(2741) Property 'name' is missing in type '{}' but required in type 'A'.
  const a2: A = { name: "a2" }; // ok
}

// public哪都能用，private只有基类可以用，protected基类和派生类中可以用
