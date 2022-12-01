const React = require('react')
const DefaultLayout = require('./layout/Default')

class Index extends React.Component {
    render() {
        const { logs } = this.props
        return(
            <DefaultLayout>
                <a href="/log/new">New Log</a>
                <ul>
                    {
                        logs.map((log, i) => {
                            return (
                                <a href={`/logs/${log._id}`}>{log.name}</a>

                                
                            )
                            {
                                log.shipIsBroken ? 'its broke' : 'its functional'
                            }
                        })
                    }
                </ul>
            </DefaultLayout>
        )
    }
}

module.exports = Index 