https://vitest.dev/api/assert

https://vitest.dev/api/expect.html#expect

https://vedro.io/docs/best-practices/avoid-ifs?utm_source=chatgpt.com#the-problem-with-ifs

https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-conditional-expect.html

https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-conditional-in-test.html

https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-conditional-in-test.html


```ts
  export interface Assert {
      /**
       * @param expression    Expression to test for truthiness.
       * @param message    Message to display on error.
       */
      (expression: any, message?: string): asserts expression;
      //以下略
  }
```

1. え、型が絞り込めないじゃん🥹
2. じゃあ、if文で絞るか？😒
3. 待てよ、テストコードでif文ってあんま良くないんじゃなかったっけ😭
4. どうすればいいんだ、助けてくれAI様🤪
