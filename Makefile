install:
	npm ci

publish:
	npm publish --dry-run

gendiff -h:
	node bin/gendiff.js -h

lint:
	npx eslint .

test:
	npx jest	