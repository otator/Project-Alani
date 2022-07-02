module.exports = (db,type)=>{
    return db.define('signup',{
        id:{
            type: type.INTEGER,
            autoIncrement:true,
            primarykey:true
        },
        username:{
            type:type.STRING,
            allowNull:false,
            unique:true,
            validate:{
                is:["^[a-z]+$",'i']
            }
        },
        email:{
            type:type.STRING,
            allowNull:false,
            validate:{
                isEmail:true
            }
        },
        password:{
            type:type.STRING(64),
            allowNull:false,
            validate:{
            is: ["^[0-9,a-f]{64}$",'i']
            }
        }
    })
}