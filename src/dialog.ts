import { executeTask } from '@dcl/sdk/ecs'
import { Dialog } from 'dcl-npc-toolkit'

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
          executeTask(async () => {
            const response = await fetch(
              'https://api.open-meteo.com/v1/forecast?latitude=-15.76&longitude=-47.87&current=temperature_2m'
            )
            const { current } = await response.json()

            console.log('Temperatura atual: ', current.temperature_2m)

            temperature = current.temperature_2m
          })
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
