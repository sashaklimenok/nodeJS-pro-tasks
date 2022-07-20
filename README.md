# nodeJS-pro-tasks
1. Run REPL mode and split a word 'node' after that reduce the word to edon via reduce method.
  >Solution
  ```
  (node.split('').reduce((prev, curr, index, arr) => prev + arr[arr.length - index - 1], '' ))
  ```
2. Make a calculator
3. Make a calculator which works with EventEmmiter