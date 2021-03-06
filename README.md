# react-flow-player 

`<ReactFlowPlayer>` is a React Component for integrating the flow player into your react app. Passing props to the component will configure the flow player and will embed the player into your app.

## Installation
``` shell
npm install react-flow-player
```

## Usage
``` javascript
import ReactFlowPlayer from 'react-flow-player';
<ReactFlowPlayer
    playerInitScript="http://releases.flowplayer.org/7.2.1/flowplayer.min.js"
    playerId="reactFlowPlayer" 
    sources={[
        { 
            type: 'video/webm', 
            src: 'http://edge.flowplayer.org/functional.webm' 
        }
    ]}
/>
```

## Required Props
There are some props that are required by the component :
  - `playerId`
    - Id used to look for the div container in which the flow player is embedded.
    - Type : **_String_**
  - `playerInitScript`
    - It is the url for the javascript code for the player setup that flowplayer community has provided.
    - Type : **_String_**
  - `sources`
    - It is the url and type for the video that is to be embedded into the flowplayer.
    - It can have multiple formats for the browser to detect and play the appropriate one.
    - Type : **_Array_** _(Array of objects)_

## Optional Props
There are some props that are optional by the component :
- `className`
	- It is the classes that is to be applied to the flowplayer embedded container.
	- Type : **_String_**
	- Default : **''**
- `adaptiveRatio`
	- Whether the player should adapt to the video aspect ratio vertically.
	- Type : **_Boolean_**
	- Default : **false**
- `aspectRatio`
	- It is the aspect ration for the video player recomended to be set as per the video's aspect ratio (Note : Both **:** and **/** separator can be used).
	- Type : **_String_**
	- Default : **'16:9'**
- `autoplay`
	- Whether the video should play as soon as it is embedded.
	- Type : **_Boolean_**
	- Default : **false**
- `bgcolor`
	- The background color of the player.
	- Type : **_String_**
	- Default : **'#2d3647'**
- `title`
	- The title of the video to be displayed on the player.
	- Type : **_String_**
	- Default : **'Video'**
- `fullscreen`
	- Whether the fullscreen is allowed or not.
	- Type : **_Boolean_**
	- Default : **true**
- `keyboard`
	- Whether the keyboard shortcuts are allowed or not.
	- [Keyboard Shortcuts](https://flowplayer.com/docs/player/setup#keyboard)
	- Type : **_Boolean_**
	- Default : **true**
- `live`
	- Whether the video which is embedded is live streaming video or not.
	- Type : **_Boolean_**
	- Default : **false**
- `poster`
	- Url or path of the image of the poster that is to be displayed on the player.
	- Type : **_String_**
	- Default : **''**
- `rtmp`
	- Rtmp configuration if the video is streamed using rtmp protocol.
	- String is the rtmp path of the streaming, for object configuration ([Configuration options](https://flowplayer.com/docs/player/setup#rtmp-options))
	- Type : **_String_** or **_Object_**
	- Default : **''**
- `speeds`
	- The array of values that is multiplied by the normal flow speed of the video. 1.0 being the normal.
	- Type : **_Array_**
	- Default : **[0.25, 0.5, 1.0, 1.5, 2.0]**
- `volume`
	- The value of the initial volume of the video player.
	- Type : **_Number_**
	- Default : **1.0**
- `hlsPlugin`
	- The value for the integrating of the hlsplugin when the HLS video streaming protocol is used. Note : Mandatory to be true when the hls protocol is used otherwise the player will be unable to play the video.
	- Type : **_Boolean_**
	- Default : **false**

## Links

You can visit some links for reference:

* [React](https://reactjs.org/)
* [Flow Player Setup Options](https://flowplayer.com/docs/player/setup)
* [Github Link For Repo](https://github.com/gradeup/react-flow-player)
* [Npm Link for the module](https://www.npmjs.com/package/react-flow-player)

## Organisation
[![Gradeup](https://gs-post-images.grdp.co/2017/2/img1486706448140-41-rs-high-webp.png)](https://gradeup.co)

