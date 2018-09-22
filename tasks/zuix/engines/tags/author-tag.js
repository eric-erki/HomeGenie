// const request = require('sync-request');
const path = require('path');
const humanDate = require('human-date');
module.exports = {
    parse: function(str, line, parser, types, options) {
        parser.on('start', function() {
            // called when a parse starts
        });
        parser.on('*', function(token) {
            // called on the match of any token at all ("*")
            this.out.push(token.match);
        });

        parser.on('end', function() {
            // called when a parse ends
        });

        return true; // parser is good to go
    },
    compile: function(compiler, args, content, parents, options, blockName) {
        const sourcePath = path.resolve(options.locals.file, options.locals.root, '../');
        if (options.locals.author == null) return '';
        const author = require(path.join(sourcePath, '/_inc/authors/', options.locals.author+'.json'));
        const name = author.name;
        const desc = author.desc;
        const date = options.locals.date;
        let authorTag = `
        <a href="https://github.com/${author.user}" class="author-tag">
            <img src="https://avatars.githubusercontent.com/${author.user}" align="left">`;
        /*
        // TODO: GitHub API requires authentication =/
        const res = request('GET', `https://api.github.com/users/${args[0]}`);
        if (res.statusCode === 200) {
        } else {
        }
        */
        if (name != null) {
            authorTag += `<span class="name">${name}</span>`;
        }
        if (desc != null) {
            authorTag +=`<span>${desc}</span>`;
        }
        if (date != null) {
            authorTag +=`<span>${humanDate.prettyPrint(date)}</span>`;
        }
        authorTag += '</a>';
        return '_output += \''+authorTag.split('\n').join('')+'\';';
    }
};
