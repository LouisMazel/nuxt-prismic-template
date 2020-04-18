.PHONY: clean resintall install serve build start

clean: ## Clean node modules
	rm -rf ./node_modules

reinstall: ## Reinstall dependencies without package-lock.json
	npm i

install: ## Install node modules
	npm ci

serve-node: ## Run dev server
	mongod --dbpath ~/data/db

serve-app: ## Run dev server
	npm run serve

build: ## Build front
	npm run build

start: ## Install node modules, build app and run dev server
	clean install serve

deploy:
	npm run lint && git push heroku master:master
