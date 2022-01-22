exports.indexView = (req, res) => {
    res.render('index', { title: 'Express, render view from index controller' });
}