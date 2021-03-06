import { Request, Response } from 'express'

class HelloController {
  static sayHello (
    request: Request,
    response: Response
  ) {
    return response.json({
      message: 'Hello! 👋',
      now: new Date()
    })
  }
}

export default HelloController
