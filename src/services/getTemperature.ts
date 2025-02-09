import { executeTask } from '@dcl/sdk/ecs'

export async function getTemperature() {
  executeTask(async () => {
    const response = await fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=-15.76&longitude=-47.87&current=temperature_2m'
    )
    const { current } = await response.json()

    console.log('Temperatura atual: ', current.temperature_2m)

    return current.temperature_2m
  })
}

export const temp = await getTemperature()
