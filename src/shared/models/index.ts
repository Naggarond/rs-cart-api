import { Request } from 'express';

import User from 'src/model/user.entity';

export interface AppRequest extends Request {
  user?: User;
}
