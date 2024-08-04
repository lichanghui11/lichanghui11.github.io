class TreeNode {
    constructor (val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
// 将【按照固定位置存储固定结点的方式】存储的二叉树转换为链式存储
  // pos是根结点的位置
  // 此时函数的定义应该转换为从数组中将根结点在pos位置的二叉树转换成链式表达的二叉树

  let arr = [1,2,3,4,5,67];
  function arrayToTree(array, pos = 0) {
    if (array[pos] == null) return null;

    let root = new TreeNode();
    root.val = array[pos];
    root.left = arrayToTree(array, pos * 2 + 1);
    root.right = arrayToTree(array, pos * 2 + 2);
    return root;
  }
  let tr = arrayToTree(arr);
  // 上面函数的相反操作

  function treeToArray(root, idx = 0, array = []) {
    if (root == null) {
        return array;
    }
    
    let nodes = [root];

    while (nodes.length > 0) {
        let current = nodes.shift();
        if (current){
            array.push(current.val);
            nodes.push(current.left, current.right);
        } else {
            array.push(current);
        }
    }
    return array;
  }
  let arr1 = [1,2,null, 4,5,null];
  // 将leetcode表示树的数组转换为链式表达
  function condensedArrayToTree(array) {
    
}

function treeToArray1 (root) {
    //转换成数组后含null值
    let result = [];
    if (root == null) {
        return result;
    }

    let nodes = [root];
    while (nodes.length > 0) {
        let current = nodes.shift();
        if (current) {
            result.push(current.val);
            nodes.push(current.left, current.right);
        } else {
            result.push(current);
        }
    } 
    return result;
}

function treeToArray1 (root, index, array = []) {
    if (root) {
        array[index] = root.val;
        treeToArray(root.left, index * 2 + 1);
        treeToArray(root.right, index * 2 + 2);
    }
    return array;
}


  // 上面函数的反向运算
  // 即传入一个链式表达的二叉树，返回其被用稠密的方式放入数组中的结果
  let v = [1, 2, null, 4, null, 5]
  function condensedArrayToTree1 (array) {
    //含有null
    if (array == null) {
      return null;
    }
    let root = new TreeNode(array[0]);
    let nodes = [root];
    for (let i = 1; i < array.length; i++) {
      let current = nodes.shift();
      if (array[i] == null) {
        var node = null;
      } else {
        var node = new TreeNode(array[i]);
        nodes.push(node);
      }

      current.left = node;
      i++;

      if (array[i] == null) {
        var node = null;
      } else {
        var node = new TreeNode(array[i]);
        nodes.push(node);
      }
      current.right = node; 
    }
    return root;
  }

  /**
   * 二叉树的遍历：
   *   即将一颗二叉树中的值按某种顺序规则一个个列出来
   * 
   * 先序遍历
   *  先根结点，再左子树，再右子树
   * 中序遍历
   *  再左子树，先根结点，再右子树
   * 后序遍历
   *  再左子树，再右子树，先根结点
   * 
   * 其中遍历子树时，依然是按照同样的顺序遍历子树的不同部分
   * 一种写出遍历方式的办法是沿着二叉树绘制它的轮廓
   *  当按照左边、下边、右边的顺序把遇到的结点写出来，将分别得到先、中、后序遍历序列
   * 
   * 另一种理解方式：
   *   将树想成一本书，每个结点是一章/一节/一小节
   *   那么按照“读过每一部分”的顺序对每一部分排序，得到先序遍历
   *   按“读到一半”排序得到的是中序
   *   按“读完排序”得到的是后序
   */
  var arr3 = [1, 2, 3, 4, 5, 6];
  var tree3 = arrayToTree(arr3);
  function iterate1 (root, predicate) {
    //先序遍历， root -> left -> right
    if (root) {
      let val = root.val;
      predicate(val);
      iterate1(root.left, predicate);
      iterate1(root.right, predicate)
    }
  }

  function iterate2 (root, predicate) {
    //中序遍历， left -> root -> right
    if (root) {
      iterate2(root.left, predicate);
      let val = root.val;
      predicate(val);
      iterate2(root.right, predicate);
    }
  }

  function iterate3 (root, predicate) {
    //后序遍历， left -> right -> root
    if (root) {
      iterate3(root.left, predicate);
      iterate3(root.right, predicate);
      let val = root.val;
      predicate(val);
    }
  }