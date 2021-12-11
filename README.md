# JavaScript Resources

<a href="https://vinitshahdeo.github.io/JavaScript-Resources/"><code><img height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"></code></a>

**Here's a curated list of 10 resources to ace your next JavaScript interview.** For learning, [javascript.info](https://javascript.info/) is highly recommended. **If you have encountered any coding problem in JS interview, please raise a PR to add your solution to [`examples/`](./examples) folder**. Please refer to the [contributing](#contributing) section to learn more.

[![Twitter URL](https://img.shields.io/twitter/url?label=Share%20on%20Twitter&style=social&url=https%3A%2F%2Ftwitter.com%2Fintent%2Ftweet%3Furl%3Dhttps%253A%252F%252Fgithub.com%252Fvinitshahdeo%252FJavaScript-Resources%252F%26text%3DCurated%2520list%2520of%2520resources%2520by%2520%40Vinit_Shahdeo%2520to%2520ace%2520your%2520next%2520JavaScript%2520interview.%26hashtags%3Djavascript%252C%2520interviews%252C%2520resoucres)](https://twitter.com/intent/tweet?url=https%3A%2F%2Fgithub.com%2Fvinitshahdeo%2FJavaScript-Resources%2F&text=Curated%20list%20of%20resources%20by%20@Vinit_Shahdeo%20to%20ace%20your%20next%20JavaScript%20interview.&hashtags=javascript%2Cinterviews%2Cresources)

## External Links

- [Namastey JavaScript Course](https://www.youtube.com/watch?v=pN6jk0uUrD8) - An awesome playlist of advanced concepts in JS **(Must watch)**
- [FAQs for JavaScript Interviews](https://www.interviewbit.com/javascript-interview-questions/) **(Must do)**
- Checkout [`examples/`](./examples) for coding problems in JS

## Repositories on GitHub

[![JavaScript Questions](https://github-readme-stats.vercel.app/api/pin/?username=lydiahallie&repo=javascript-questions)](https://github.com/lydiahallie/javascript-questions) 

[![Important JS Concepts](https://github-readme-stats.vercel.app/api/pin/?username=leonardomso&repo=33-js-concepts)](https://github.com/leonardomso/33-js-concepts)

[![Tricky JS problems](https://github-readme-stats.vercel.app/api/pin/?username=denysdovhan&repo=wtfjs)](https://github.com/denysdovhan/wtfjs)

[![JavaScript Dev Bookmarks](https://github-readme-stats.vercel.app/api/pin/?username=didicodes&repo=javascript-dev-bookmarks)](https://github.com/didicodes/javascript-dev-bookmarks)

[![Modern JS Cheatsheet](https://github-readme-stats.vercel.app/api/pin/?username=mbeaudru&repo=modern-js-cheatsheet)](https://github.com/mbeaudru/modern-js-cheatsheet)

[![Event loop in JavaScript](https://github-readme-stats.vercel.app/api/pin/?username=vinitshahdeo&repo=Event-Loop-In-JavaScript)](https://github.com/vinitshahdeo/Event-Loop-In-JavaScript)

[![Clean code in JavaScript](https://github-readme-stats.vercel.app/api/pin/?username=ryanmcdermott&repo=clean-code-javascript)](https://github.com/ryanmcdermott/clean-code-javascript)

[![Algorithms in JS](https://github-readme-stats.vercel.app/api/pin/?username=trekhleb&repo=javascript-algorithms)](https://github.com/trekhleb/javascript-algorithms)

## Contributing

1. Clone the repository and create a new branch.

```bash
git clone https://github.com/vinitshahdeo/inspirational-quotes.git
git checkout -b feature/<problem-name>
```

2. Head to `examples` folder

```bash
cd examples
touch yourFileName.js
```

3. Add your code to `yourFileName.js`
   - Ensure that the problem statement is added as a comment in the top of the file.
   - Add proper comments (JSDocs) wherever needed.
   - Below is a sample code snippet

```js

/**
 *
 * Flatten the given array
 * Input: [1,2,[3,4,[5,6]],7,8,[9,10]]
 * Output: [1,2,3,4,5,6,7,8,9,10]
 *
 */
const flattenArray = (arr) => {
  let flattenedArray = [];
  arr.forEach((item) => {
    if (Array.isArray(item))
        flattenedArray.push(...flattenArray(item));
    else 
        flattenedArray.push(item);
  });
  return flattenedArray;
};

console.log(flattenArray([1, 2, [3, 4, [5, 6, 7]], 8]));

```

4. Please raise a [pull request](https://github.com/vinitshahdeo/JavaScript-Resources/pulls) to add your code-snippet.
   - Provide proper PR title and description.
   - Sit and relax! You've made your contribution. 🎉

## Thank you

Initially I have curated these resources for my mentees, but it's now a community-led initiative to gather best resources to ace any JS interview. If you like it, kindly consider [leaving a star](https://github.com/vinitshahdeo/JavaScript-Resources/stargazers) or [buying me a coffee](https://www.buymeacoffee.com/vinitshahdeo)! [Tweet](https://twitter.com/intent/tweet?url=https%3A%2F%2Fgithub.com%2Fvinitshahdeo%2FJavaScript-Resources%2F&text=Curated%20list%20of%20resources%20by%20@Vinit_Shahdeo%20to%20ace%20your%20next%20JavaScript%20interview.&hashtags=javascript%2Cinterviews%2Cresources) to spread a word.

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/vinitshahdeo)
