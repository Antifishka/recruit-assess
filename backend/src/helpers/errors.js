class RecruitAssessError extends Error {
    constructor(message) {
        super(message);
        this.status = 400;
    }
}

class ValidatoinError extends RecruitAssessError {
    constructor(message) {
        super(message);
        this.status = 400;
    }
}

class NotAuthorizedError extends RecruitAssessError {
    constructor(message) {
        super(message);
        this.status = 401;
    }
}    

class NotFoundError extends RecruitAssessError {
    constructor(message) {
        super(message);
        this.status = 404;
    }
}

class ConflictError extends RecruitAssessError { 
    constructor(message) { 
        super(message);
        this.status = 409;
    }
}

module.exports = {
    RecruitAssessError,
    ValidatoinError,
    NotAuthorizedError,
    NotFoundError,
    ConflictError,
}