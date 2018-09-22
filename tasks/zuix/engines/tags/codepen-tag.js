function parseUrl(url) {
    const pattern = RegExp('^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?');
    const matches = url.match(pattern);
    return {
        scheme: matches[2],
        authority: matches[4],
        path: matches[5],
        query: matches[7],
        fragment: matches[9]
    };
}

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
        const url = parseUrl(args.join(''));
        const parts = url.path.split('/');
        const penUser = parts[1];
        const penId = parts[3];
        const codepenEmbed = `<iframe height="480" scrolling="no" src="https://codepen.io/${penUser}/embed/${penId}/?height=360&theme-id=light&default-tab=result&embed-version=2" frameborder="no" allowtransparency="true" allowfullscreen="true" style="width: 100%;">See the <a href="https://codepen.io/genielabs/pen/${penId}/">Pen</a> by ${penUser} (<a href="https://codepen.io/${penUser}">@${penUser}</a>) on <a href="https://codepen.io">CodePen</a>.</iframe>`;
        return '_output += \''+codepenEmbed+'\';';
    }
};
