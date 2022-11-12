import { Injectable } from '@nestjs/common';


export interface ApplicationValue {
  id: number,
  name: string,
  price: number
};

export interface UpdateApplication {
  name: string,
  price: number
};

const applications: ApplicationValue[] = [];


@Injectable()
export class AppService {
  getAllApplications() {
    return applications;
  }
  addApplication(obj: UpdateApplication) {
    const lastId = applications[applications.length - 1]?.id + 1 || 1;
    let application: ApplicationValue = { ...obj, id: lastId }
    applications.push(application);
    return application
  }
  updateApplication(updateApplication: ApplicationValue) {
    let applicationIndex = applications.findIndex(elem => elem.id == updateApplication.id);
    if (applicationIndex === -1) throw { message: "Application not found" }
    applications[applicationIndex] = { ...applications[applicationIndex], ...updateApplication };
    return applications[applicationIndex]
  }
}



