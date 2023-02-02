lint: 
	npx eslint 

publish: 
	npm publish --dry-run

gendiff -h:
	node/bin gendiff.js -h