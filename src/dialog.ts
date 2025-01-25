import { executeTask } from '@dcl/sdk/ecs'
import { Dialog } from 'dcl-npc-toolkit'
import { getWeather } from './weather'

let weather = 0

export let WelcomeDialog: Dialog[] = [
  {
    text: 'Olá, estranho!'
  },
  {
    text: 'É um prazer falar com você!'
  },
  {
    text: 'Você gostaria de saber qual é a temperatura atual no Campus Dary Ribeiro da UnB?',
    isQuestion: true,
    buttons: [
      {
        label: 'Não, obrigado',
        goToDialog: 5
      },
      {
        label: 'Sim!',
        goToDialog: 3,
        triggeredActions: () => {
          executeTask(async () => {
            try {
              weather = await getWeather()
              console.log(weather)
            } catch (error) {
              console.log('error ' + error)
            }
          })
        }
      }
    ]
  },
  {
    name: 'showTemp',
    text: 'A temperatura atual é ' + weather + ' °C'
  },
  {
    text: 'Volte quando quiser mais informações!',
    isEndOfDialog: true
  },
  {
    name: 'endDialog',
    text: 'Tranquilo! Volte quando quiser saber mais',
    isEndOfDialog: true
  }
]
