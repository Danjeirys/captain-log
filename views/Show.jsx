const React = require('react')
const DefaultLayout = require('./layout/Default')

class Show extends React.Component {
    render() {
        const {title, entry, shipBroken} = this.props.log
        return(
            <DefaultLayout>
                <div>
                    {shipIsBroken ? 'its broken' : 'its functional'}
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Show