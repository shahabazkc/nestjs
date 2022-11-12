import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { ApplicationValue, AppService, UpdateApplication } from './app.service';

@Controller('v1')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/applications')
  getAllApplications(): ApplicationValue[] {
    return this.appService.getAllApplications();
  }
  @Post('/create-application')
  addApplications(@Body() obj: UpdateApplication): ApplicationValue {
    return this.appService.addApplication(obj);
  }
  @Put('/update-application')
  updateApplication(@Body() obj: ApplicationValue): ApplicationValue {
    try {
      return this.appService.updateApplication(obj)
    } catch (error) {
      return error
    }
  }
}
