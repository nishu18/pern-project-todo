const Pool=require("pg").Pool;

const pool =new Pool ({
    user:"postgres",
    password:"Nishu$18",
    host:"localhost",
    port:5432,
    database:"perntodo"
});
module.exports =pool;