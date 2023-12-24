import { Component } from '@angular/core';

import { UserProfileComponent } from './components/user-profile.component';
import { UserProfileDarkComponent } from './components/user-profile-dark.component';

const user = {
  img: 'https://lh3.googleusercontent.com/ytP9VP86DItizVX2YNA-xTYzV09IS7rh4WexVp7eilIcfHmm74B7odbcwD5DTXmL0PF42i2wnRKSFPBHlmSjCblWHDCD2oD1oaM1CGFcSd48VBKJfsCi4bS170PKxGwji8CPmehwPw=w200-h247-no',
  name: 'Lily-Grace Colley',
  projects: 156,
  likes: 1012,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    UserProfileComponent,
    UserProfileDarkComponent,
  ],
  styles: `
    app-user-profile-dark {
      display: flex;
      align-items: center;
    }
    .profiles {
      display: FLEX;
      gap: 30px;
      align-items: center;
      justify-content: center;
    }
  `
})
export class AppComponent {
  user = user;
}
