import ReactEcs, { ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs'
import { NpcUtilsUi } from 'dcl-npc-toolkit'

const SceneOwnedUi = () => (
  <UiEntity>
    <NpcUtilsUi />
    {/* rest of user defined UI */}
  </UiEntity>
)

export function setupUi() {
  ReactEcsRenderer.setUiRenderer(SceneOwnedUi)
}
