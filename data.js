var APP_DATA = {
  scenes: [
    {
      id: "0-timothy-oldfield-luufnhochru-unsplash",
      name: "timothy-oldfield-luufnHoChRU-unsplash",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1344,
      initialViewParameters: {
        yaw: -0.44858808958650087,
        pitch: 0.08321137542200141,
        fov: 1.362234561578609,
      },
      linkHotspots: [
        {
          yaw: -0.47134723880694374,
          pitch: -0.3456157713637058,
          rotation: 0,
          target: "1-bryan-goff-iuyhxaia8ea-unsplash",
        },
        {
          yaw: -0.47976531265060984,
          pitch: 0.33948764910126883,
          rotation: 0,
          target: "2-1-1",
        },
      ],
      infoHotspots: [
        {
          yaw: -0.28282140275361556,
          pitch: -0.34881481151407456,
          title: "Click me",
          text: "You can click the arrow button to move to another page",
          imgSrc: "img/airpods1.jpg",
        },
      ],
    },
    {
      id: "1-bryan-goff-iuyhxaia8ea-unsplash",
      name: "bryan-goff-IuyhXAia8EA-unsplash",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1500,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [],
      infoHotspots: [],
    },
    {
      id: "2-1-1",
      name: "1 (1)",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
      ],
      faceSize: 450,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [],
      infoHotspots: [],
    },
  ],
  name: "360 Website",
  settings: {
    mouseViewMode: "drag",
    autorotateEnabled: false,
    fullscreenButton: true,
    viewControlButtons: true,
  },
};
