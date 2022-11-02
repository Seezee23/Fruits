const RESOURCE_PATH = '/fruits'
// ^^^ when you make a const that you don't ever want to change, put it in all CAPS. This is called a ____

const viewController = {
  index (req, res, next) {
    res.render('fruits/Index', res.locals.data)
  },
  newView (req, res, next) {
    res.render('fruits/New')
  },
  edit (req, res, next) {
    res.render('fruits/Edit', res.locals.data)
  },
  show (req, res, next) {
    res.render('fruits/Show', res.locals.data)
  },
  redirectHome (req, res, next) {
    res.redirect(RESOURCE_PATH)
  },
  redirectShow (req, res, next) {
    const fruitId = req.params.id || res.locals.data.fruit._id
    res.redirect(`${RESOURCE_PATH}/${fruitId}`)
  }

}

module.exports = viewController