// Write a function isInteger(x) to determin if x is a isInteger

function isInteger(x) {
    return parseInt(x, 10) === x
  }
  
  isInteger(520) // true
  isInteger(43.5) // false
  isInteger(-35) // true

//   It is wrong in fact. It is ok in writing quesion, 
//   but it is not aprpopriate in interview.
//   我有说这函数要回传什麽吗?这函数需要log出什麽讯息吗?传入的参数范围你知道吗? 是的，这些你都不知道，所以你不该贸然下手。
//   也许在文章中看起来你会觉得这根本他妈陷阱题，这我不否认，但实际上确认需求本来就是你该做的事情，因此在碰到这样的题目时务必先厘清问题
  
//       函数要做、要回传什麽?
//       传入的参数有限制吗?(例如有没有需要处理edge cases)
//       解法有什麽限制吗?(例如时间复杂度、不能使用原生语法等)
  
//   OK，那我们进一步说明并重新定义题目
  
//       请你写一个function isInteger(x)，这函数最终会回传一个boolean判断x是否为整数，传入的参数只会有数字，没有时间复杂度与语法上的限制
  
//       这样清楚多了，以下提供两种常见的解法

//       方法一: 原生语法
  
//   我在之前的文章就提过了，如果JS本身已经有配合的语法，你就不需要去自己刻，这个情境下可以使用原生的Number.isInteger来处理
  
  console.log(Number.isInteger(12520.32))  // false
  console.log(Number.isInteger(-77.0)) // true
  console.log(Number.isInteger(1252065461313.42)) // false
  
//       方法二: parseInt or Math.floor
  
//   第二种思路则是将数字无条件舍去後判断他与原本的数字是否相同
  
  let x = 12520.32
  let y = -77.0
  let z = 1252065461313.42
  
  console.log(parseInt(x) === x) // false
  console.log(parseInt(y) === y) // true
  console.log(Math.floor(z) === z) // false
  
//   不过以上的解法都有缺陷，但这个缺陷来自JS本身，我们之前在浮点数陷阱的部份谈过JS采用的标准，在这个标准下存在一个安全数范围，也就是2的53次方-1 以及-2的53次方-1
  
  Number.MAX_SAFE_INTEGER // 9007199254740991
  Number.MIN_SAFE_INTEGER // -9007199254740991
  
//   超过这个范围的数字在运算时就有可能会出现一些误差，解法通常是透过一些第三方套件像是bigint.js等来处理，老样子，後续的细节就交给你们啦!
//   本日核心观念与总结
//   核心观念
  
//   isInteger、MAX_SAFE_INTEGER & MIN_SAFE_INTEGER
//   总结
  
//       收到问题时务必先厘清问题，不要贸然回答
//       了解如何用基本方法判断数字是否为整数
//       了解MAX_SAFE_INTEGER & MIN_SAFE_INTEGER
  