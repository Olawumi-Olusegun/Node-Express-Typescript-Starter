
export interface AppError extends Error {
  statusCode: number;
}

export class InternalServerError implements AppError {
    public readonly statusCode: number;
    public readonly message: string;
    public readonly name: string = 'InternalServerError';

    constructor(message: string = 'Internal Server Error') {
        this.statusCode = 500;
        this.message = message;
        this.name = 'InternalServerError';
    }
}

export class NotFoundError implements AppError {
    public readonly statusCode: number;
    public readonly message: string;
    public readonly name: string = 'NotFoundError';

    constructor(message: string = 'Resource Not Found') {
        this.statusCode = 404;
        this.message = message;
        this.name = 'NotFoundError';
    }
}

export class BadRequestError implements AppError {
    public readonly statusCode: number;
    public readonly message: string;
    public readonly name: string = 'BadRequestError';

    constructor(message: string = 'Bad Request') {
        this.statusCode = 400;
        this.message = message;
        this.name = 'BadRequestError';
    }
}

export class UnauthorizedError implements AppError {
    public readonly statusCode: number;
    public readonly message: string;
    public readonly name: string = 'UnauthorizedError';

    constructor(message: string = 'Unauthorized') {
        this.statusCode = 401;
        this.message = message;
        this.name = 'UnauthorizedError';
    }
}

export class ForbiddenError implements AppError {
    public readonly statusCode: number;
    public readonly message: string;
    public readonly name: string = 'ForbiddenError';

    constructor(message: string = 'Forbidden') {
        this.statusCode = 403;
        this.message = message;
        this.name = 'ForbiddenError';
    }
}   

export class ConflictError implements AppError {
    public readonly statusCode: number;
    public readonly message: string;
    public readonly name: string = 'ConflictError';

    constructor(message: string = 'Conflict') {
        this.statusCode = 409;
        this.message = message;
        this.name = 'ConflictError';
    }
}

export class UnprocessableEntityError implements AppError {
    public readonly statusCode: number;
    public readonly message: string;
    public readonly name: string = 'UnprocessableEntityError';

    constructor(message: string = 'Unprocessable Entity') {
        this.statusCode = 422;
        this.message = message;
        this.name = 'UnprocessableEntityError';
    }
}   

export class ServiceUnavailableError implements AppError {
    public readonly statusCode: number;
    public readonly message: string;
    public readonly name: string = 'ServiceUnavailableError';

    constructor(message: string = 'Service Unavailable') {
        this.statusCode = 503;
        this.message = message;
        this.name = 'ServiceUnavailableError';
    }
}

export class GatewayTimeoutError implements AppError {
    public readonly statusCode: number;
    public readonly message: string;
    public readonly name: string = 'GatewayTimeoutError';

    constructor(message: string = 'Gateway Timeout') {
        this.statusCode = 504;
        this.message = message;
        this.name = 'GatewayTimeoutError';
    }
}       

export class CustomError implements AppError {
    public readonly statusCode: number;
    public readonly message: string;
    public readonly name: string = 'CustomError';

    constructor(statusCode: number, message: string) {
        this.statusCode = statusCode;
        this.message = message;
        this.name = 'CustomError';
    }
}