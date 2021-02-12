import { Therapy } from './therapy.model';

export class TherapistWithTherapies {
  id: number;
  name: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  description: string;
  therapies: Therapy[];
  constructor(id, name, lastName, email, phoneNumber, description, therapies: Therapy[]) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.description = description;
    this.therapies = therapies;
  }
}
