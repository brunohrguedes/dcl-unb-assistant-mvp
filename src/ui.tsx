import ReactEcs, { Button, Label, ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs'

const uiComponent = () => <Label value={`Test UI`} fontSize={18} uiTransform={{ width: '100%', height: 30 }} />

export function setupUi() {
  ReactEcsRenderer.setUiRenderer(uiComponent)
}
