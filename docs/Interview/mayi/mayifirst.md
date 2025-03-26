---
date: 2025-03-21 13:42:25
tags:
  - 面试
---

# 蚂蚁集团（支付宝国际版）一面

1. 为什么学习前端

2. 学习路线

3. 为什么会做这两个项目，有什么契机

4. AiDialog 项目的难点和亮点

5. 说一说 vue 中 nextTick() 的机制

6. 说一下 http 1.1 和 http 2.0 的区别，http 2.0 是完全解决了队头阻塞问题吗

7. vue3 和 vue2 的区别

8. 代码手撕
   - 根据树的中序遍历和后序遍历构建一棵树

```JavaScript
/** 给出一棵二叉树（没有重复值）的中序遍历（inorder traversal）和后序遍历（postorder traversal）结果，还原这棵二叉树（返回二叉树的根节点）
 * 例：
 * inorder = [9,3,15,20,7]
 * postorder = [9,15,7,20,3]
 * 结果：
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 */

const readline = require("readline");
const r1 = readline.creatInterface({
  input: process.stdin,
  output: process.output
})

let input = [];

r1.on('line',(line) => {
  input.push(line);
}).on('close', () =>{
  solve(input);
})

function TreeNode(val , left, right){
  this.val = val | undefined;
  this.left = left | null;
  this.righr = right | null;
}

function solve(input){
    let inorder = input[0].split(' ');
    let postorder = input[1].split(' ');

    function build(inorder,postorder){
      if(inorder.length === 0) return null;
      let value = postorder[postorder.length - 1];
      let index = 0;
      for(let i = 0;i < inorder.length;i++){
        if(inorder[i] === value){
            index = i;
        }
      }
      let leftin = inorder.slice(0,index);
      let rightin = inorder.slice(index + 1);
      let leftpost = postorder.slice(0,leftin.length);
      let rightpost = postorder.slcie(leftin.length, postorder.length - 2);

      let root = new TreeNode(value);

      root.left = build(leftin,leftpost);
      root.right = build(rightin,rightpost);

      return root;
    }

    build(inorder ,postorder);


}
```

- 代码输出题

```JavaScript
// 写出如下执行的输出顺序
// Write down the output order of the following execution
const timeout = 0
console.log(1)
setTimeout(() => {console.log(2)}, timeout)
new Promise((resolve) => {
  console.log(3)
  setTimeout(resolve,timeout)
}).then(() => {
  console.log(4)
})
requestAnimationFrame(_=>console.log(5))
console.log(6)

// 请写出输出结果 / Please write the output result:
1 3 6 2 4 5



```
