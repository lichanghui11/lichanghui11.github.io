
  
  // 表示一个二维向量
  class Vector {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

    plus (param) {
        let x = this.x + param.x;
        let y = this.y + param.y;
        return new Vector (x, y);
    }

    minus (param) {
        let x = this.x - param.x;
        let y = this.y - param.y;
        return new Vector (x, y);
    }

    get length () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}


  // 表示一个复数(complex number)
  class Complex {
    constructor (real, imag) {
        this.realP = real;
        this.imagP = imag;
    }

    minus (param) {
        let realP = this.realP - param.realP;
        let imagP = this.imagP - param.imagP;
        return new Complex (realP, imagP);
    }

    plus (param) {
        let realP = this.realP + param.realP;
        let imagP = this.imagP + param.imagP;
        return new Complex (realP, imagP);
    }

    multiple (param) {
        let realP = this.realP * param.realP - this.imagP * param.imagP;
        let imagP = this.realP * param.imagP + this.imagP * param.realP;
        return new Complex (realP, imagP);
    }

    div (param) {
       let helper = new Complex (param.realP, -param.imagP);
       let numrator = this.multiple (helper);
       let denominator = helper.realP * helper.realP;  

       let realP = numrator.realP / denominator;
       let imagP = numrator.imagP / denominator;
       return new Complex (realP, imagP);
    }
    
    get toString () {
        return '' + this.realP + ' + ' + this.imagP + 'i'
    }
     
  }



  // 以下作业写好后上传到： `https://[username].github.io/miao/oop.js`,
  // =================================================================


  // class LinkedList {
  //   private head
  //   private length;
  //   constructor() {
  //     this.head = null
  //     this.length = 0
  //   }
  //   pop() {
  //     this.head = xxx
  //   }
  // }
  // var l = new LinkedList()
  // l.head = 33
  // 表示一个单向链表

class Node {
    constructor (value) {
        this.val = value;
        this.next = null;
    }
}

class LinkedList {
    constructor () {
        this.head = null;
        this.length = 0;
    }

    at (index) {
        let pointer = this.head;
        while (index > 0 && pointer) {
            pointer = pointer.next;
            index--;
        }
        return pointer.val;
    }

    set (index, value) {
        let pointer = this.head;
        while (index > 0 && pointer) {
            pointer = pointer.next;
            index--;
        }
        if (pointer) {
            pointer.val = value;
        }
    }

    append (value) {
        let node = new Node (value);
        this.length++;
        if (this.head == null) {
            return node;
        }
        let pointer = this.head;
        while (!pointer.next) {
            pointer = pointer.next
        }
        pointer.next = node;
        return this.head;
    }

    prepend (value) {
        let node = new Node (value);
        this.length++;
        if (this.head == null) {
            return node;
        }
        node.nextl = this.head;
        return node;
    }

    pop () {
        //删除末尾的值， 并返回该值
        if (this.head == null) {
            return undefined;
        }
        this.length--;
        if (this.head.next == null) {
            let result = head.val;
            this.head = null;
            return result;
        }
        let pointer = this.head;
        while (pointer.next.next) {
            pointer = pointer.next;
        }
        let result = pointer.next.val;
        pointer.next = null;
        return result;
    }

    shift () {
        //删除链表头部的值， 并返回该值；
        if (this.head == null) {
            return undefined;
        }
        this.length--;
        let result = this.head.val;
        this.head = this.head.next;
        return result;
    }

    get toArray () {
        let result = [];
        let pointer = this.head;
        while (pointer) {
            result.push(pointer.val);
            pointer = pointer.next;
        }
        return result;
    }

    get toString () {
        return this.head.toArray().join(',');
    }

    get size () {
        return this.length;
    }
}


 /*  LinkedList.prototype = {
    constructor: LinkedList,
    at: function(idx) {
      var p = this._head
      while(idx > 0 && p) {
        p = p.next
        idx--
      }
      if (p) {  //此处有疑问，是否可省略
        return p.val
      } else {
        return undefined
      }
    },
  }   

 */ 

  // 表示一个集合（集合中元素没有序，但不能重复）
  // 构造函数可选的可以传入集合中的初始值，但会被去重后存放
class MySet {
    constructor (initial = []) {
        this.elements = [];
    }

    add (value) {
        if (!this.elements.includes(value)) {
            return this;
        }
    }

    delete (value) {
        let index = this.elements.indexOf(value);
        if (index > -1) {
            this.elements.splice(index, 1);
        }
        return this;
    }

    clear () {
        this.elements = [];
        return this;
    }

    has (value) {
        return this.elements.includes(value); 
    }

    forEach (predicate) {
        for (let i = 0; i < this.elements.length; i++) {
            predicate(this.elements[i], i);
        }
    }

    get size () {
        return this.elements.length;
    }
}


  // 表示一个映射
  // 这个映射中，可以把任何值映射到任何值，映射的key不限于字符串

class MyMap {
    constructor (initialPairs = []) {
        this.pairs = [];
        for (let pair of initialPairs) {
            let key = pair[0];
            let val = pair[1];
            this.set(key, val); 
        }

    }

    set (key, value) {
        for (let i = 0; i < this.pairs.length; i++) {
            if (this.pairs[i] === key) {
                this.pairs[i + 1] = value;
                return this;
            }
        }
        this.pairs.push(key, val);
        return this;
    }

    get (key) {
        for (let i = 0; i < this.pairs.length; i++) {
            if (this.pairs[i] === key) {
                return this.pairs[i + 1];
            }
        }
    }

    has (key) {
     // 判断这个映射中是否存在这个key的映射
        for (let i = 0; i < this.pairs.length; i += 2) {
            if (this.pairs[i] === key) {
                return true;
            }
        }   
        return false;
    }
    
    // 删除这个映射中key及其映射的值的这一对儿
    // 返回是否成功删除了一对儿映射
    delete (key) {
        for (let i = 0; i < this.pairs.length; i += 2) {
            if (this.pairs[i] === key) {
                this.pairs.splice(i, 2);
                return true;
            }
        }
        return false;
    }

   // 清空这个映射中所有的映射对儿
   clear () {
        this.pairs = [];
        return this;
   }

    // 获取这个映射中映射对儿的数量
    get size() {
        return this.pairs.length / 2;
    }    

    // 遍历这个映射中所有的映射对儿
    forEach (predicate) {
        for (let i = 0; i < this.pairs.length; i += 2) {
            predicate(this.pairs[i + 1], this.pairs[i]);
        }
    }
}

class Stack {
// 表示一个栈：即后进先出，先进后出
    constructor () {
        this.elements = [];
        this.length = 0;
    }

// 向栈中增加元素
    in (value) {
        this.elements.push(value);
        this.length++;
    }

  // 从栈中取出元素并删除栈顶元素
    out () {
        this.elements.pop()
        this.length--;
    }

  // 查看但不删除栈顶元素
    peek () {
        return this.elements[this.elements.length - 1];
    }

    get size () {
        return this.length;
    }

}

  // stack.size 获取栈中元素的数量

  // var stack = new Stack()
  // stack.in(1)
  // stack.in(2)
  // stack.size // 2
  // stack.in(3)
  // stack.size // 3
  // stack.out() // 3
  // stack.out() // 2
  // stack.in(5)
  // stacik.out() // 5 


  // 表示一个队列：即先进先出，后进后出
class Queue {
    constructor () {
        this.head = null;
        this.tail = null; 
        this.length = 0;
    }

  // 向队列中增加元素
    add (value) {
        let node = {
            val: value, 
            next: null,
        }
        this.length++;
        if (this.head == null) {
            this.head = this.tail = node;
            return this;
        }
        this.tail.next = node;
        this.tail = node;
        return this;
    }

  // 从队头取出元素并删除队头元素
    pop () {
        if (this.head == null) {
            return undefined;
        }
        this.length--;
        if (this.head == this.tail) {
            let result = this.head.val;
            this.head = this.tail = null;
            return result; 
        }
        let result = this.head.val; 
        this.head = this.head.next;
        return result; 
    }

  // 查看队头元素（没有查看队尾元素的功能）
    peek () {
        return this.head.val;
    }
    
  // 以及queue.size获取队列的长度
    get size () {
        return this.length;
    }
}