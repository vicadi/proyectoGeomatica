var express = require('express');
var app = module.exports = express();

app.set('views',__dirname + '/views');

app.route('/verRutas')
  .get(function(req, res) {
     res.render('verRutas', {
        title: 'ver rutas',
        pesVerRutas: 'active',
        usuario: req.user,
        message: req.flash('message')
     });
  });

app.route('/buscarRutas')
  .get(function(req, res) {
     res.render('buscarRutas', {
        title: 'buscar rutas',
        pesBuscarRutas: 'active',
        usuario: req.user,
        message: req.flash('message')
     });
  });

app.route('/exposicion')
  .get(function(req, res) {
     res.render('exposicion', {
        title: 'exposicion',
        pesExposicion: 'active',
        usuario: req.user,
        message: req.flash('message')
     });
  });