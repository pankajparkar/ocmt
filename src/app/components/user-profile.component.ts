import { DecimalPipe } from '@angular/common';
import { Component, Input, inject } from '@angular/core';

import { BaseUserProfileComponent } from '../directives/base-user-profile.component';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    DecimalPipe,
  ],
  hostDirectives: [BaseUserProfileComponent],
  template: `
    <div class="card">
      <img [src]="user.img"
          alt="Person" class="card__image">
      <p class="card__name">{{ user.name }}</p>
      <div class="grid-container">
        <div class="grid-child-posts">
          {{ user.projects | number}} Projects
        </div>
        <div class="grid-child-followers">
          {{ user.likes | number}}  Likes
        </div>
      </div>
      <button class="btn draw-border" (click)="base.follow()">
        Follow
      </button>
      <button class="btn draw-border" (click)="base.message()">
        Message
      </button>
    </div>
  `,
  styles: `
    .container {
      display: grid;
      grid-template-columns: 300px 300px 300px;
      grid-gap: 50px;
      justify-content: center;
      align-items: center;
      background-color: #f5f5f5;
      font-family: 'Baloo Paaji 2', cursive;
    }

    .card {
      background-color: #222831;
      height: 37rem;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: rgba(0, 0, 0, 0.7);
      color: white;
    }

    .card__name {
      margin-top: 15px;
      font-size: 1.5em;
    }

    .card__image {
      height: 160px;
      width: 160px;
      border-radius: 50%;
      border: 5px solid #272133;
      margin-top: 20px;
      box-shadow: 0 10px 50px rgba(235, 25, 110, 1);
    }


    .draw-border {
      box-shadow: inset 0 0 0 4px #58cdd1;
      color: #58afd1;
      -webkit-transition: color 0.25s 0.0833333333s;
      transition: color 0.25s 0.0833333333s;
      position: relative;
    }

    .draw-border::before,
    .draw-border::after {
      border: 0 solid transparent;
      box-sizing: border-box;
      content: '';
      pointer-events: none;
      position: absolute;
      width: 0rem;
      height: 0;
      bottom: 0;
      right: 0;
    }

    .draw-border::before {
      border-bottom-width: 4px;
      border-left-width: 4px;
    }

    .draw-border::after {
      border-top-width: 4px;
      border-right-width: 4px;
    }

    .draw-border:hover {
      color: #ffe593;
    }

    .draw-border:hover::before,
    .draw-border:hover::after {
      border-color: #eb196e;
      -webkit-transition: border-color 0s, width 0.25s, height 0.25s;
      transition: border-color 0s, width 0.25s, height 0.25s;
      width: 100%;
    }

    .draw-border:hover::before {
      -webkit-transition-delay: 0s, 0s, 0.25s;
      transition-delay: 0s, 0s, 0.25s;
    }

    .draw-border:hover::after {
      -webkit-transition-delay: 0s, 0.25s, 0s;
      transition-delay: 0s, 0.25s, 0s;
    }

    .btn {
      background: none;
      border: none;
      cursor: pointer;
      line-height: 1.5;
      font: 700 1.2rem 'Roboto Slab', sans-serif;
      padding: 0.75em 2em;
      letter-spacing: 0.05rem;
      margin: 1em;
      width: 13rem;
    }

    .btn:focus {
      outline: 2px dotted #55d7dc;
    }


    .social-icons {
      padding: 0;
      list-style: none;
      margin: 1em;
    }

    .social-icons li {
      display: inline-block;
      margin: 0.15em;
      position: relative;
      font-size: 1em;
    }

    .social-icons i {
      color: #fff;
      position: absolute;
      top: 0.95em;
      left: 0.96em;
      transition: all 265ms ease-out;
    }

    .social-icons a {
      display: inline-block;
    }

    .social-icons a:before {
      transform: scale(1);
      -ms-transform: scale(1);
      -webkit-transform: scale(1);
      content: " ";
      width: 45px;
      height: 45px;
      border-radius: 100%;
      display: block;
      background: linear-gradient(45deg, #ff003c, #c648c8);
      transition: all 265ms ease-out;
    }

    .social-icons a:hover:before {
      transform: scale(0);
      transition: all 265ms ease-in;
    }

    .social-icons a:hover i {
      transform: scale(2.2);
      -ms-transform: scale(2.2);
      -webkit-transform: scale(2.2);
      color: #ff003c;
      background: -webkit-linear-gradient(45deg, #ff003c, #c648c8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      transition: all 265ms ease-in;
    }

    .grid-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
      font-size: 1.2em;
    }

  `
})
export class UserProfileComponent {

  public base = inject(BaseUserProfileComponent);

  @Input() user: any;
}
