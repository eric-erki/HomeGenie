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
        const youtubeEmbed = `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/${args.join('\\')}?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
        return '_output += \''+youtubeEmbed+'\';';
    }
};
