import { Component, signal } from '@angular/core';
import { IExperciences } from '../../interface/experciences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  public arrayExperiences = signal<IExperciences[]>([
    {
      summary: {
        strong: 'Front-end Especialista',
        p: 'ZUP - Set 2020 - Present'
      },
      text: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>'
    },
    {
      summary: {
        strong: 'Front-end Especialista',
        p: 'ZUP - Set 2020 - Present'
      },
      text: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>'
    },
    {
      summary: {
        strong: 'Front-end Especialista',
        p: 'ZUP - Set 2020 - Present'
      },
      text: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>'
    },
    {
      summary: {
        strong: 'Front-end Especialista',
        p: 'ZUP - Set 2020 - Present'
      },
      text: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>'
    }
  ]);

}
