module.exports = (db,type)=>{
    return db.define('login',{
        id:{
            type: type.INTEGER,
            autoIncrement:true,
            primaryKey: true
        },
        email:{
            type:type.STRING,
            allowNull:false,
            validate:{
                isEmail:true
            }
        },
        password:{
            type:type.STRING,
            allowNull:false,
            validate:{
                is: ["^[0-9,a-f]{64}$",'i']
                }
        }
    })
}