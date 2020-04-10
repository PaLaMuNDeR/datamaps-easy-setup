## How to run Datamaps:
I provide you with two options:
One is a static map (Easy to setup, no JQuery)
The other is a map with zoom and scale (JQuery inside)

## 1. Basic map
Used libraries: [Datamap](http://datamaps.github.io/)

- Check [basic_map.html](basic_map.html)
- It uses the datamap's [datamaps.world.min.js](datamaps.world.min.js)
- Edit default colors at [custom_map.js](custom_map.js)


Data example:
```.javascript
{
    name: 'Big bubble',
    radius: 23, //size of the bubble
    centered: 'BRA',
    country: 'USA',
    yeild: 0,
    fillKey: 'USA', // Fill color
    date: '1954-03-01' 
  },
```


## 2. Basic Map with Zoom
Used libraries: 
- [Datamap](http://datamaps.github.io/)

- Check (basic_map_with_zoom.html)[basic_map_with_zoom.html]
- It uses the datamap's [datamaps.world.min.js](datamaps.world.min.js)
- It uses the datamap's [custom_map_with_zoom.js](custom_map_with_zoom.js)

Check the data example at:
[custom_map_with_zoom.js](custom_map_with_zoom.js): Line 191
```.js
this.instance.bubbles([
      {centered: 'MEX', fillKey: '000000', radius: 30},
      {centered: 'CAN', fillKey: 'neato', radius: 5},
      {centered: 'BRA', fillKey: 'neato', radius: 15},
      {centered: 'USA', fillKey: 'Trouble', radius: 46},
      {centered: 'JPN', fillKey: 'neato', radius: 2},
    ])
```