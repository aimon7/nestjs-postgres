import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginDto } from './login.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
  ) {
  }

  @Post('/signup')
  async signUp(@Body() createUserDto: CreateUserDto): Promise<void> {
    return await this.authService.signUp(createUserDto);
  }

  @Post('/login')
  async singIn(@Body() loginDto: LoginDto): Promise<{ accessToken: string }> {
    return await this.authService.signIn(loginDto);
  }
}
