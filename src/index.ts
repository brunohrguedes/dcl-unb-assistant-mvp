import { setupUi } from './ui'

export function main() {
  //setupUi()
  executeTask(async () => {
    try {
      let response = await fetch(callUrl, {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(myBody)
      })
      let json = await response.json()
      console.log(json)
    } catch {
      console.log('failed to reach URL')
    }
  })
}
