.PHONY: deploy
deploy:
	@NODE_ENV=PROD kamal deploy -c .kamal/config.yml

.PHONY: logs
logs:
	@kamal app logs -c .kamal/config.yml
