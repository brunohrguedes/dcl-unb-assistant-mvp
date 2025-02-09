import { Dialog } from 'dcl-npc-toolkit'
import { getTemperature } from './services/getTemperature'

let temperature

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
        goToDialog: 7
      },
      {
        label: 'Sim!',
        goToDialog: 3,
        triggeredActions: async () => {
          await getTemperature().then((temp) => (temperature = temp))
        }
      }
    ]
  },
  {
    name: 'showTemp',
    text: 'Deixe-me ver... estou buscando a temperatura atual do Campus da UnB...'
  },
  {
    text: 'Ah! Acho que já consegui'
  },
  {
    text: 'A temperatura atual é ' + temperature + ' °C'
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
