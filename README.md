# nodeJS-pro-tasks

## Step 3

1. Run REPL mode and split a word 'node' after that reverse the word to edon via reduce method.
   > Solution

    ```
    (node.split('').reduce((prev, curr, index, arr) => prev + arr[arr.length - index - 1], '' ))
    ```

2. Make a calculator
3. Make a calculator which works with EventEmitter

## Step 4

1. Implement a Timer app
   > The app was implemented via Observer pattern. 
   
   > When the time of the timer is up all subscribes wil be notified with timer state
