install:
		npm ci

lint: 
	npx eslint .

publish: 
	npm publish --dry-run

gendiff:
	node/bin gendiff.js

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest

test-coverage:
	npx jest --coverage	