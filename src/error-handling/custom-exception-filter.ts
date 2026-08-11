import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { GqlContextType } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';
import { Response } from 'express';
import { BaseCustomException } from './base-custom-exception';

@Catch()
export class CustomExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    // Handle GraphQL context
    if (host.getType<GqlContextType>() === 'graphql') {
      if (exception instanceof BaseCustomException) {
        return new GraphQLError(exception.message, {
          extensions: {
            code: exception.status,
            errors: exception.formatError(), // [{ field, message }]
          },
        });
      }

      console.log(exception);
      return new GraphQLError('Internal Server Error', {
        extensions: { code: 500 },
      });
    }

    // Handle REST/HTTP context
    const response: Response = host.switchToHttp().getResponse();
    if (exception instanceof BaseCustomException) {
      return response.status(exception.status).send({
        errors: exception.formatError(),
      });
    }

    console.log(exception);
    return response.status(500).json({
      errors: [{ message: `Internal Server Error` }],
    });
  }
}
