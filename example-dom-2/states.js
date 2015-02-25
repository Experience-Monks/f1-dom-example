module.exports = {

  out: {

    bg: {
      position: [ 100, 0, -1000 ],
      alpha: 0,
      rotation: [ 0, 0, 0 ]
    },

    fg: {

      position: [ -100, 0, 0 ],
      alpha: 0,
      text: 'out'
    }
  },

  idle: {

    bg: {
      position: [ 0, 0, 0 ],
      alpha: 1,
      rotation: [ 0, 0, 0 ]
    },

    fg: {

      position: [ -100, 20, 0 ],
      alpha: 1,
      text: 'idle'
    }
  },

  rollover: {

    bg: {
      position: [ 0, 0, 300 ],
      alpha: 0.5,
      rotation: [ 0, 0, 0 ]
    },

    fg: {

      position: [ 20, 0, 0 ],
      alpha: 1,
      text: 'rollover'
    }
  },

  mousedown: {

    bg: {
      position: [ 0, 0, 300 ],
      alpha: 0.5,
      rotation: [ 0, Math.PI * 0.25, 0 ]
    },

    fg: {

      position: [ 0, 0, 0 ],
      alpha: 1,
      text: 'mousedown'
    }
  }
};