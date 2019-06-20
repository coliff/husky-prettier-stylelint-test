# husky-prettier-stylelint-test
Testing Git precommit hooks with Husky, Prettier and Stylelint

1. Clone repo
2. Run `npm install`
3. change a markdown file, css or JS file in this repo
4. type `git add -A`
5. type `commit -m "testing husky"`

It should run Prettier and Stylelint on the files and automatically prettify

If it just commits successfully with no message then the precommit script isn't working.

Try `npm install --save-dev husky lint-staged prettier stylelint` and repeat from step 3 again.
