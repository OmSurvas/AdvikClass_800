var mysql = require("mysql");
var util = require("util");

var conn = mysql.createConnection({
  host:"bykzbb5i1mrcasfqjbpi-mysql.services.clever-cloud.com",
  user :"ur45wrkrho7zgdxe",
  password:"eHh6j3j8ee4vkmS2FGX1",
  database:"bykzbb5i1mrcasfqjbpi"
})

var exe = util.promisify(conn.query).bind(conn);

module.exports=exe;
