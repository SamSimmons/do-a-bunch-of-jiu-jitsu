import { assign } from 'lodash'

const $grey = "#405453"
const $sans = 'Karla'


const colors = [
  "#252525",
  "#525252",
  "#737373",
  "#969696",
  "#bdbdbd",
  "#d9d9d9",
  "#f0f0f0"
]

// Typography
const letterSpacing = "normal"
const fontSize = 14

// Layout
const baseProps = {
  width: 300,
  height: 200,
  padding: 30,
  colorScale: colors
}

// Labels
const baseLabelStyles = {
  fontFamily: $sans,
  fontSize,
  letterSpacing,
  padding: 7,
  fill: $grey,
  stroke: "transparent"
};

const centeredLabelStyles = assign({ textAnchor: "middle" }, baseLabelStyles);

// Strokes
const strokeLinecap = "round";
const strokeLinejoin = "round";

// Create the theme
const theme = {
  area: assign({
    style: {
      data: {
        fill: $grey
      },
      labels: centeredLabelStyles
    }
  }, baseProps),
  axis: assign({
    style: {
      axis: {
        fill: "transparent",
        stroke: $grey,
        strokeWidth: 1,
        strokeLinecap,
        strokeLinejoin
      },
      axisLabel: assign({}, centeredLabelStyles, {
        padding: 30
      }),
      grid: {
        fill: "transparent",
        stroke: "transparent"
      },
      ticks: {
        fill: "transparent",
        size: 10,
        stroke: $grey
      },
      tickLabels: baseLabelStyles
    }
  }, baseProps),
  bar: assign({
    style: {
      data: {
        fill: $grey,
        padding: 0,
        stroke: "transparent",
        strokeWidth: 0,
        width: 15
      },
      labels: baseLabelStyles
    }
  }, baseProps),
  candlestick: assign({
    style: {
      data: {
        stroke: $grey,
        strokeWidth: 1
      },
      labels: centeredLabelStyles
    },
    candleColors: {
      positive: "#ffffff",
      negative: $grey
    }
  }, baseProps),
  chart: baseProps,
  errorbar: assign({
    style: {
      data: {
        fill: "transparent",
        stroke: $grey,
        strokeWidth: 2
      },
      labels: centeredLabelStyles
    }
  }, baseProps),
  group: assign({
    colorScale: colors
  }, baseProps),
  line: assign({
    style: {
      data: {
        fill: "transparent",
        stroke: $grey,
        strokeWidth: 2
      },
      labels: assign({}, baseLabelStyles, {
        textAnchor: "start"
      })
    }
  }, baseProps),
  pie: {
    style: {
      data: {
        padding: 10,
        stroke: "transparent",
        strokeWidth: 1
      },
      labels: assign({}, baseLabelStyles, {
        padding: 20
      })
    },
    colorScale: colors,
    width: 250,
    height: 250,
    padding: 60,
    innerRadius: 40,
    labelRadius: 75
  },
  scatter: assign({
    style: {
      data: {
        fill: $grey,
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: centeredLabelStyles
    }
  }, baseProps),
  stack: assign({
    colorScale: colors
  }, baseProps),
  tooltip: assign({
    style: {
      data: {
        fill: "transparent",
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: centeredLabelStyles,
      flyout: {
        stroke: $grey,
        strokeWidth: 1,
        fill: "#f0f0f0"
      }
    },
    flyoutProps: {
      cornerRadius: 10,
      pointerLength: 10
    }
  }, baseProps),
  voronoi: assign({
    style: {
      data: {
        fill: "transparent",
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: centeredLabelStyles
    }
  }, baseProps)
}

export default theme
