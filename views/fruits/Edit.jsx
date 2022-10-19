const React = require('react')

class Edit extends React.Component {
  render () {
    const { name, _id, color, readyToEat } = this.props.fruit
    return (
      <>
        <h1>Edit This Fruit</h1>
        <nav>
          <a href='/fruits'> Go Back To Fruits Home Page</a>
        </nav>
        <form method='POST' action={`/fruits/${_id}?_method=PUT`}>
          Name: <input type='text' name='name' defaultValue={name} /><br />
          Color: <input type='text' name='color' defaultValue={color} /><br />
          Is Ready To Eat: <input type='checkbox' name='readyToEat' defaultChecked={readyToEat} /><br />
          <input type='submit' value='Edit Fruit' />
        </form>
      </>
    )
  }
}

module.exports = Edit
