all:
	@find views -name *handlebars | xargs -I {} echo node_modules/.bin/handlebars {} -f {} | sed 's/\(.*\)\/.*\.handlebars/\1\/index.js/g' | sh
	@cp bootstrap/docs/assets/css/bootstrap.css public/bootstrap.css
