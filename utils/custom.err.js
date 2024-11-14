
class NotfoundError extends Error{
constructor(msg){
super(msg,404)
    }
}

class AppError extends Error {
    constructor(msg, statusCode = 400) {
      super(msg);
      this.statusCode = statusCode;
      this.isOperational = true; 
    }
  }
  
  module.exports = AppError;
  


class DBError extends Error{
    constructor(msg){
        super(msg,500)
        this.isOperational=false 
    }

}


module.exports={NotfoundError,AppError}

