import { Component } from '@angular/core';
import { Person } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  age: string = '';
  isModel: boolean = false;

  selectedData: Person = {
    id: 1,
    name: '',
    email: '',
    phone: '',
    age: 1,
  };

  data: Person[] = [
    {
      id: 1,
      name: 'Terry Gomez',
      email: 'terry@example.com',
      phone: '+1 987 654 3210',
      age: 34,
    },
    {
      id: 2,
      name: 'Alyssa Silva',
      email: 'alyssa@example.com',
      phone: '+1 456 123 7890',
      age: 27,
    },
    {
      id: 3,
      name: 'Donald Richardson',
      email: 'donald@example.com',
      phone: '+1 321 654 9870',
      age: 41,
    },
    {
      id: 4,
      name: 'Donald Richardson',
      email: 'donald@example.com',
      phone: '+1 321 654 9870',
      age: 41,
    },
    {
      id: 5,
      name: 'Donald Richardson',
      email: 'donald@example.com',
      phone: '+1 321 654 9870',
      age: 41,
    },
    {
      id: 6,
      name: 'Donald Richardson',
      email: 'donald@example.com',
      phone: '+1 321 654 9870',
      age: 41,
    },
    {
      id: 7,
      name: 'Donald Richardson',
      email: 'donald@example.com',
      phone: '+1 321 654 9870',
      age: 41,
    },
    {
      id: 10,
      name: 'John doe',
      email: 'Johndoe@example.com',
      phone: '+91 90239 93821',
      age: 41,
    },
  ];

  editPerson(e: Event, id: number) {
    e.preventDefault();
    const selectedPerson = this.data.find((person) => person.id === id);

    if (selectedPerson) {
      this.selectedData = selectedPerson;
    }
    this.isModel = !this.isModel;
  }

  closeModel(e: Event) {
    e.preventDefault();
    this.isModel = !this.isModel;
  }

  updateModelBtn(e: Event) {
    e.preventDefault();
    this.closeModel(e);
  }
}
