install: #Install packages
		npm ci

brain-games: #Start brain-games
		node bin/brain-games.js

publish: #publish npm pakage
		npm publish --dry-run

lint: #eslint parse
		npx eslint .