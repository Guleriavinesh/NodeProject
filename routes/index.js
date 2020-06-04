var express = require('express');
var router = express.Router();
const Pool = require('pg').Pool

const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'db',
  password: 'password',
  port: 5432,
})

router.get('/api', function(req, res, next){

  pool.query('SELECT COMPANY.NAME,COMPANY.AGE,COMPANY.SALARY,DEPARTMENT.DEPT FROM COMPANY INNER JOIN DEPARTMENT ON COMPANY.ID=DEPARTMENT.EMP_ID',
   (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })

})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
