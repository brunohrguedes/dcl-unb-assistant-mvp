import { executeTask } from '@dcl/sdk/ecs'
import { Dialog } from 'dcl-npc-toolkit'

export let WelcomeDialog: Dialog[] = [
  {
    text: 'Hello, World!'
  }
]

let temperature

export let WeatherDialog: Dialog[] = [
  {
    text: 'Olá, estranho!'
  },
  {
    text: 'É um prazer falar com você!'
  },
  {
    text: 'Você gostaria de saber qual é a temperatura atual no Campus Darcy Ribeiro da UnB?',
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
            console.log(current)

            console.log('Temperatura atual: ', current.temperature_2m)

            temperature = current.temperature_2m

            WeatherDialog[5].text = `A temperatura atual é ${temperature} graus Celsius!`
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
    text: 'A temperatura atual é ' + temperature + ' graus Celsius!'
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

export let SemestersDialog: Dialog[] = [
  {
    text: 'Olá! Sou o assistente virtual da Graduação da UnB! Gostaria de saber qual é o período de aulas de algum semestre?',
    isQuestion: true,
    buttons: [
      {
        label: '2024.2',
        goToDialog: 1
      },
      {
        label: '2025.1',
        goToDialog: 3
      }
    ]
  },
  {
    text: 'O período de aulas do semestre 2024.2 começou em 14/10/2024 e irá terminar em 22/02/2025.'
  },
  {
    text: 'Gostaria de saber algo mais?',
    isQuestion: true,
    buttons: [
      {
        label: 'Não, obrigado!',
        goToDialog: 5
      },
      {
        label: 'Sim!',
        goToDialog: 0
      }
    ]
  },
  {
    text: 'O período de aulas do semestre 2025.1 começa em 24/03/2025 e termina em 26/07/2025. As matrículas poderão ser realizadas online pelo SIGAA de 06h de 27/02 até 23h59 de 05/03.'
  },
  {
    text: 'Gostaria de saber algo mais?',
    isQuestion: true,
    buttons: [
      {
        label: 'Sim!',
        goToDialog: 0
      },
      {
        label: 'Não, obrigado!',
        goToDialog: 5
      }
    ]
  },
  {
    text: 'Até logo! Volte quando quiser mais informações.',
    isEndOfDialog: true
  }
]

export let FullDialog: Dialog[] = [
  {
    text: 'Olá, estranho!'
  },
  {
    text: 'É um prazer falar com você!'
  },
  {
    text: 'Você gostaria de saber qual é a temperatura atual no Campus Darcy Ribeiro da UnB?',
    isQuestion: true,
    buttons: [
      {
        label: 'Não, obrigado',
        goToDialog: 6
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
            console.log(current)

            console.log('Temperatura atual: ', current.temperature_2m)

            temperature = current.temperature_2m

            FullDialog[5].text = `A temperatura atual é ${temperature} graus Celsius!`
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
    text: 'A temperatura atual é ' + temperature + ' graus Celsius!'
  },
  {
    text: 'Gostaria de saber qual é o período de aulas de qual semestre?',
    isQuestion: true,
    buttons: [
      {
        label: '2024.2',
        goToDialog: 7
      },
      {
        label: '2025.1',
        goToDialog: 9
      }
    ]
  },
  {
    text: 'O período de aulas do semestre 2024.2 começou em 14/10/2024 e irá terminar em 22/02/2025.'
  },
  {
    text: 'Gostaria de saber algo mais?',
    isQuestion: true,
    buttons: [
      {
        label: 'Não, obrigado!',
        goToDialog: 11
      },
      {
        label: 'Sim!',
        goToDialog: 2
      }
    ]
  },
  {
    text: 'O período de aulas do semestre 2025.1 começa em 24/03/2025 e termina em 26/07/2025. As matrículas poderão ser realizadas online pelo SIGAA de 06h de 27/02 até 23h59 de 05/03.'
  },
  {
    text: 'Gostaria de saber algo mais?',
    isQuestion: true,
    buttons: [
      {
        label: 'Sim!',
        goToDialog: 2
      },
      {
        label: 'Não, obrigado!',
        goToDialog: 11
      }
    ]
  },
  {
    text: 'Até logo! Volte quando quiser mais informações.',
    isEndOfDialog: true
  }
]
