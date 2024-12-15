import * as npc from 'dcl-npc-toolkit'
import { Vector3, Quaternion } from '@dcl/sdk/math'

export let myNPC = npc.create(
  // TransformType
  {
    position: Vector3.create(163.75, 18.0, 192.25),
    rotation: Quaternion.Zero(),
    scale: Vector3.create(1, 1, 1)
  },
  // NPCData Object
  {
    type: npc.NPCType.CUSTOM,
    model: 'assets/builder/cat/HWN20_Cat.glb',
    onActivate: () => {
      console.log('npc activated')
    }
  }
)
