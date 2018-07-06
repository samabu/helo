module.exports = {
    register: function( req, res ) {        
        const { username, password } = req.body;

        req.app.get('db').register([ username, password ])
        .then( user => res.status(200).send(user[0]))
    },
    login: function( req, res ) {
        const { username, password } = req.body;

        req.app.get('db').get_user([ username, password ])
        .then( user => res.status(200).send(user[0]))
    },
    showPosts: function( req, res ) {

    }
}