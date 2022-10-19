const React = require('react');

class Default extends React.Component {
    render(){
        const {fruit, title} = this.props
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/css/app.css" />
                    <title>{title}</title>
                </head>
                <body>
                    <nav>
                        <div>
                        <a href="/fruits">Go to Home Page For Fruits</a>
                        </div>
                        <div>
                        <a href="/fruits/new">Create a New Fruit</a>
                        </div>
                        <div>
                        { fruit? <a href={`/fruits/${fruit._id}/edit`}> {fruit.name} Edit Page </a> : ''}
                        </div>
                        <div>
                        { fruit? <a href={`/fruits/${fruit._id}`}>{fruit.name} Show Page</a> : ''}
                        </div>
                    </nav>
                    <h1>
                        {title}
                    </h1>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Default