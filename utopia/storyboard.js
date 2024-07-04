import * as React from 'react'
import { Storyboard, Scene } from 'utopia-api'
import { App } from '/src/App.tsx'

var storyboard = (
  <Storyboard>
    <Scene
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: 375,
        height: 812,
      }}
      commentId='scene-1'
    >
      <App />
    </Scene>
  </Storyboard>
)
