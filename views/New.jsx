const React = require('react')
const DefaultLayout = require('./layout/Default')

class New extends React.Component {
    render() {
        return(
            <DefaultLayout>
                <a href="/logs">Home</a>

                <form action="/logs" method='POST'>
                    title: <input type="text" name='title' />
                    entry: <input type="text" name='entry' />
                    ship is broken: <input type="checkbox" name='ship is broken' />
                    <input type="submit" value='Create Log' />
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New