import { Injectable, UnauthorizedException } from '@nestjs/common';
import { GqlSdk, InjectSdk } from './sdk/sdk.module';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AppService {
  constructor(@InjectSdk() private readonly sdk: GqlSdk) {
  }

  getHello(): string {
    return 'Hello World, the time now is =>' + new Date();
  }

  async validateUser(username: string, password: string) {
    // Tìm người dùng theo tên đăng nhập
    const { users } = await this.sdk.GetUsers({ where: { username: { _eq: username } }, limit: 1 });
    if (!users.length) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const user = users[0];
    // Kiểm tra mật khẩu
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Trả về thông tin người dùng nếu hợp lệ
    return user;
  }

  async login(username: string, password: string) {
    // Logic to validate user credentials
    const user = await this.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { username: user.username, sub: user.id };
    return {
      access_token: new JwtService().sign(payload, {
        secret: process.env.JWT_SECRET_ACCESS_TOKEN,
        expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRATION_TIME || '10d',
      }),
    };
  }
  async createUser(username: string, password: string) {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user using UserService
    const { insert_users_one } = await this.sdk.InsertUser({
      object: {
        username,
        password: hashedPassword,
      },
    });

    return insert_users_one;
  }

  async register(username: string, password: string) {
    const newUser = await this.createUser(username, password);
    const payload = { username: newUser.username, sub: newUser.id };
    return {
      access_token: new JwtService().sign(payload, {
        secret: process.env.JWT_SECRET_ACCESS_TOKEN,
        expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRATION_TIME || '10d',
      }),
    };
  }


}
