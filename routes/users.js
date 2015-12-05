var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/reg', function(req, res, next) {
  res.render('user/reg',{});
});

router.post('/reg', function(req, res, next) {
    var user =  req.body;//读取用户提交过来的注册表单
    new Model('User')(user).save(function(err,user){
        if(err){
            res.redirect('/users/reg');
        }else{
            res.redirect('/users/login');
        }
    });
});

router.get('/login', function(req, res, next) {
  res.render('user/login',{});
});

router.post('/login', function(req, res, next) {
    var user =  req.body;//读取用户提交过来的注册表单
    new Model('User').find({username:user.username,password:user.password},function(err,docs){
          if (err) {
              res.redirect('/users/reg');
          } else if(docs.length){
              res.render('article/add', {});

          }else{
              res.redirect('/users/login');
          }

    });
});

router.get('/logout', function(req, res, next) {
  res.send('退出');
});

module.exports = router;
