import * as npc from 'dcl-npc-toolkit'

import { catNpc } from './npc'
import { setupUi } from './npc-dialog-ui'

export function main() {
  setupUi()
  npc.getData(catNpc)
}
