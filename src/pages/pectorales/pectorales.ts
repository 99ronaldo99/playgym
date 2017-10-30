import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Platform,ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pectorales',
  templateUrl: 'pectorales.html',
})
export class PectoralesPage {
	character;

  constructor(
  	public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController) {

  	var characters = [
      {
        name: 'Press banco plano',
        quote: 'para aun optimo resultado sigue \n las instrucciones!',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'River Folk' },
          { title: 'Alter Ego', note: 'Smeagol' }
        ]
      },
      {
        name: 'press banco , manos juntas',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Press banco inclinado ',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'press banco declinado ',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Press de barra en maquina',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Flexiones de brazos',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Fondos en paralelas',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Press con mancuernas ',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Apertura con mancuernas',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Press inclinado, mancuernas',
        quote: 'What we need is a few good taters',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Apertura inclinado, mancuernas',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Apertura de contractor',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Cruce de poleas',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Pull over con maquina',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      }
    ];
    this.character = characters[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PectoralesPage');
  }

}



