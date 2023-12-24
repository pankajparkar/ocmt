import { DecimalPipe } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { BaseUserProfileComponent } from '../directives/base-user-profile.component';

@Component({
  selector: 'app-user-profile-dark',
  standalone: true,
  imports: [
    DecimalPipe,
  ],
  hostDirectives: [BaseUserProfileComponent],
  template: `
    <div id="login-container">
      <div class="profile-img" [style.background-image]="'url(' + user.img + ')'"></div>
      <h1>
        {{ user.name }}
      </h1>
      <div class="social">
        <a (click)="base.follow()">
          Follow
        </a>
        <a (click)="base.message()">
          Message
        </a>
      </div>
      <footer>
        <div class="likes">
          <p><i class='fa fa-heart'></i></p>
          <p>{{ user.likes | number }} Likes</p>
        </div>
        <div class="projects">
          <p>Projects</p>
          <p>{{ user.projects | number }}</p>
        </div>
      </footer>
    </div>
  `,
  styles: `
    $background: #fffffb;
    $accent: #ff6b6c;
    $otherAccent: #ffc145;
    $darkBackground: #5b5f97;

    #login-container {
      width: 350px;
      padding: 20px;
      border-radius: 5px;
      background: $background;
      position: relative;
      box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
      .profile-img {
        height: 100px;
        width: 100px;
        background-size: cover;
        background-position: center;
        position: absolute;
        top: -25px;
        left: -25px;
        border-radius: 50%;
        box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
      }
      h1 {
        font-family: 'Sriracha', arial, sans-serif;
        text-align: center;
        margin-bottom: 20px;
        color: $otherAccent;
        font-size: 24px;
      }
      .social {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: calc(100% - 40px);
        margin: 0 auto;
        margin-bottom: 20px;
        a {
          text-align: center;
          border: solid 2px $accent;
          width: 75px;
          padding: 5px 0;
          border-radius: 5px;
          &:hover {
            background: $accent;
            color: white;
            cursor: pointer;
          }
        }
      }
      button {
        width: 80%;
        height: 80px;
        font-size: 2rem;
        margin: 30px 10% 0 10%;
        color: $background;
        border: none;
        box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
        border-radius: 5px;
        background: linear-gradient(45deg, $accent, $otherAccent, $otherAccent, $accent);
        background-size: 300% 300%;
        outline: none;
        transition: all 200ms ease-in-out;
        &:hover{
          box-shadow: 5px 5px 5px rgba(0,0,0,0.5);
          transform: translateY(2px);
          -webkit-animation: gradientBG 1.5s ease-in-out forwards;
          animation: gradientBG 1.5s ease-in-out forwards;
          cursor: pointer;
        }
        &:active {
          box-shadow: 3px 3px 3px rgba(0,0,0,0.5);
          transform: translateY(4px);
        }
      }
      footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: $darkBackground;
        color: white;
        width: 100%;
        position: absolute;
        bottom: 0;
        height: 30px;
        padding: 0 20px;
        margin-left: -20px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        div {
          display: flex;
          .fa-heart {
            color: $accent;
          }
          p:first-child{
            margin-right: 10px;
            border-right: 4px solid white;
            padding-right: 10px;
          }
        }
      }
    }

    @-webkit-keyframes gradientBG {
      0% {
        background-position: 0% 50%;
      }
      100% {
        background-position: 100% 50%;
      }
    }
    @keyframes gradientBG {
      0% {
        background-position: 0% 50%;
      }
      100% {
        background-position: 100% 50%;
      }
    }
  `
})
export class UserProfileDarkComponent {
  @Input() user: any;

  public base = inject(BaseUserProfileComponent);

}
