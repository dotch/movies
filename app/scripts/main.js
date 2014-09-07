/* global data */

var gross = _.pluck(data, 'gross');
var dls = _.pluck(data, 'downloads');


gross.unshift('gross');
dls.unshift('downloads');

// c3.generate({
//   bindto: '#scatter',
//   data: {
//     x: 'gross',
//     // iris data from R
//     columns: [
//       gross,
//       dls
//     ],
//     type: 'scatter'
//   },
//   axis: {
//     x: {
//       label: 'gross',
//       tick: {
//         fit: false
//       }
//     },
//     y: {
//       label: 'downloads'
//     }
//   }
// });

c3.generate({
  bindto: '#bar',
  data: {
    columns: [
      gross,
      dls
    ],
    axes: {
      downloads: 'y2', // ADD
    },
    type: 'bar'
  },
  bar: {
    width: {
      ratio: 0.5 // this makes bar width 50% of length between ticks
    }
  },
  axis: {
    y: {
      tick: {
        format: d3.format('$s')
      }
    },
    y2: {
      show: true, // ADD
      tick: {
        format: d3.format('s')
      }
    }
  },
  tooltip: {
    format: {
      title: function(d) {
        return data[d].title
      },
      value: function(value, ratio, id) {
        return value;
      }
    }
  }
});
